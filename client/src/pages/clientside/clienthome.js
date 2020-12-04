import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar"
import API from "../../utils/API"
import axios from "axios"
import moment from "moment"
// import { Route, Redirect } from "react-router-dom";

function ClientHome() {

    const [note, setNote] = useState("")
    const [completed, setCompleted] = useState(false)
    const [workout, setWorkout] = useState([])
    const [id, setId] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    const date = moment().format('YYYY-MM-DD')

    useEffect(() => {
        axios.get("/api/user")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                if (res.data === "") {
                    window.location.href = "/login"
                }
                setId(res.data.id)
                loadWorkouts()
            })
            .catch(err => console.log(err));
    }, [])

    // console.log(workout);

    function loadWorkouts() {
        API.getClientWorkoutPlan()
            .then(res => {
                // console.log(res.data);
                setWorkout(res.data)

            })
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setNote(value)
    };

    // console.log(note);

    function handleFormSubmit(event) {
        event.preventDefault();

        API.addNotes({
            date: date,
            note: note,
            completed: completed,
            UserId: id
        })
            .then((res) => {
                alert("Workout Submitted!")
                setSubmitted(true)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    };

    function handleButtonClick() {
        if (completed === false) {
            setCompleted(true)
        } else if (completed === true) {
            setCompleted(false)
        }
    }

    // console.log(submitted);
    // console.log(completed);
    // console.log(workout);

    const todaysWorkout = workout.filter(workout => workout.date === date)
    // console.log(todaysWorkout);

    return (
        <>
            <NavBar
                name1="Workouts"
                name2="Trainer"
                to1="/workouts"
                to2="/trainer"
            />

            <div className="container col-12 text-center">
                <h1 className="row justify-content-center">{moment().format('l')}</h1>
                <h1 className="row justify-content-center">Workout of the Day</h1>

                <ul className="container list-group col-6 text-center">
                    {todaysWorkout.map((workout, index) => {
                        return <li className="list-group-item" key={index}>{workout.exercise}, {workout.sets} sets of {workout.reps} reps</li>
                    })}
                </ul>

                <textarea rows="4" cols="50" placeholder="Notes for the workout" name="note" onChange={handleInputChange} />

                <div className="container">
                    <input className="form-check-input" type="checkbox" id="completed" onClick={handleButtonClick} />
                    <label className="form-check-label" htmlFor="completed">
                        Workout Completed
                    </label>
                </div>

                <div className="row justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={handleFormSubmit} disabled={submitted}>Submit</button>
                </div>
            </div>
        </>
    )
}


export default ClientHome;
