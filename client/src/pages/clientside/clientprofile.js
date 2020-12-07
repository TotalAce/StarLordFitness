import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import axios from 'axios';
import { TrainerNavBar } from "../../components/Navbar";
import ClientWorkouts from '../../components/ClientWorkouts'
import moment from 'moment'
import WorkoutForm from '../../components/WorkoutForm'

function ClientProfile() {
    const { isLoggedIn, firstName } = JSON.parse(localStorage.getItem("user")) || ""

    const [client, setClient] = useState({})
    const [workouts, setWorkouts] = useState([])
    const [muscleGroups, setMuscleGroups] = useState([])
    const [exercises, setExercises] = useState([])
    const [formObject, setFormObject] = useState({})

    const params = window.location.href
    // console.log(params);
    const ClientId = /[^/]*$/.exec(params)[0];
    // console.log(ClientId);

    useEffect(() => {

        axios.get("/api/client/" + ClientId)
            .then(res => {
                // console.log(res);
                // console.log(res.data[0]);
                setClient(res.data[0])
                setWorkouts(res.data[0].WorkoutPlans)
                // setFormObject({ ...formObject, UserId: ClientId })
            })
            .catch(err => console.log(err));

        axios.get("/api/workouts")
            .then(res => {
                // console.log(res);
                setMuscleGroups(res.data)

                    (!formObject.muscleGroup ? "" :
                        axios.post("/api/workouts/muscle", {
                            muscleGroup: formObject.muscleGroup
                        })
                            .then(res => {
                                // console.log(res);
                                setExercises(res.data)
                            })
                            .catch(err => console.log(err))
                    )
            })
            .catch(err => console.log(err));

    }, [formObject.muscleGroup, ClientId, formObject.submitted])

    const date = moment().format('YYYY-MM-DD')
    const dateAddOne = moment().add(1, 'days').format("YYYY-MM-DD")
    const dateAddTwo = moment().add(2, 'days').format("YYYY-MM-DD")
    const dateAddThree = moment().add(3, 'days').format("YYYY-MM-DD")
    const dateAddFour = moment().add(4, 'days').format("YYYY-MM-DD")
    const dateAddFive = moment().add(5, 'days').format("YYYY-MM-DD")
    const dateAddSix = moment().add(6, 'days').format("YYYY-MM-DD")

    const todaysWorkout = workouts.filter(workout => workout.date === date)
    const todaysWorkoutAddOne = workouts.filter(workout => workout.date === dateAddOne)
    const todaysWorkoutAddTwo = workouts.filter(workout => workout.date === dateAddTwo)
    const todaysWorkoutAddThree = workouts.filter(workout => workout.date === dateAddThree)
    const todaysWorkoutAddFour = workouts.filter(workout => workout.date === dateAddFour)
    const todaysWorkoutAddFive = workouts.filter(workout => workout.date === dateAddFive)
    const todaysWorkoutAddSix = workouts.filter(workout => workout.date === dateAddSix)

    // console.log(todaysWorkout);
    // console.log(workouts);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // console.log(formObject);
    // console.log(formObject.date);


    function handleFormSubmit(event) {
        event.preventDefault();

        if (formObject.date < date) {
            alert("Cannot post to a previous date")
        }
        if (formObject.date === undefined || formObject.exercise === undefined || formObject.sets === undefined || formObject.reps === undefined) {
            alert("Please fill out all fields before adding an exercise")
        }
        else {
            axios.post("/api/workoutplan/" + ClientId, {
                date: formObject.date,
                exercise: formObject.exercise,
                sets: formObject.sets,
                reps: formObject.reps,
            })
                .then(res => {
                    // console.log(res)
                    alert(`Workout added to client ${client.firstName}'s plan`)
                    setFormObject({ ...formObject, submitted: (formObject.submitted + 1) })
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <>
            {(isLoggedIn === false || !isLoggedIn ?
                <Redirect to="/login" /> :

                <div className="container">

                    <TrainerNavBar />
                    <h1 className="justify-content-center">{client.firstName} {client.lastName}</h1>
                    <div className="img-container justify-content-center">
                        <img src="https://via.placeholder.com/300?text=Client Img" alt="Trainer Img" />
                    </div>

                    <br />

                    <WorkoutForm
                        muscle={muscleGroups}
                        handleinputchange={handleInputChange}
                        onSubmit={handleFormSubmit}
                        exercise={(exercises.length > 0 ? exercises : [])}
                    />

                    <br />

                    {workouts.length > 0 ?
                        <div className="week-workouts">
                            <div className="row">
                                <ClientWorkouts date={date} array={todaysWorkout} />
                                <ClientWorkouts date={dateAddOne} array={todaysWorkoutAddOne} />
                                <ClientWorkouts date={dateAddTwo} array={todaysWorkoutAddTwo} />
                            </div>
                            <br />
                            <div className="row">
                                <ClientWorkouts date={dateAddThree} array={todaysWorkoutAddThree} />
                                <ClientWorkouts date={dateAddFour} array={todaysWorkoutAddFour} />
                                <ClientWorkouts date={dateAddFive} array={todaysWorkoutAddFive} />
                            </div>
                            <br />
                            <div className="row">
                                <ClientWorkouts date={dateAddSix} array={todaysWorkoutAddSix} />
                            </div>
                        </div>
                        : ""}

                </div>
            )}
        </>
    )
}


export default ClientProfile;
