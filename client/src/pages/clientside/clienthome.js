import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import { ClientNavBar } from "../../components/Navbar"
import API from "../../utils/API"
import moment from "moment"
import axios from 'axios'

function ClientHome() {
    const [note, setNote] = useState("")
    const [completed, setCompleted] = useState(false)
    const [workout, setWorkout] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const { id, username, isLoggedIn, isTrainer, Trainerid } = JSON.parse(localStorage.getItem("user")) || ""
    const date = moment().format('YYYY-MM-DD')

    useEffect(() => {
        axios.get("/api/workoutPlan/" + id)
            .then(res => {
                // console.log(res);
                setWorkout(res.data)
            })
            .catch(err => console.log(err));
    }, [id])

    function handleInputChange(event) {
        const { value } = event.target;
        setNote(value)
    };

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
            .catch(err => console.log(err))
    };

    function handleButtonClick() {
        if (completed === false) {
            setCompleted(true)
        } else if (completed === true) {
            setCompleted(false)
        }
    }

    const todaysWorkout = workout.filter(workout => workout.date === date)

    return (
        <>
            {(!isLoggedIn || isLoggedIn === false ?
                <Redirect to="/login" /> :
                (isTrainer ? <Redirect to="/unauthorized" /> :

                    <div className="container">
                        <ClientNavBar />
                        <div className="container col-12 text-center">
                            <h1 className="row justify-content-center">{moment().format('l')}</h1>
                            <br />
                            <h1 className="row justify-content-center">Welcome back {username}!</h1>
                            <h1 className="row justify-content-center">Here is todays workout:</h1>

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
                    </div>

                )
            )}
        </>
    )
}


export default ClientHome;
