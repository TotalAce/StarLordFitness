import React from "react";
import "./style.css";

function WorkoutForm(props) {

    let numbers = []

    for (let i = 1; i < 21; i++) {
        numbers.push(i)
    }

    return (
        <form onSubmit={props.onSubmit}>
            <div className="row">
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="add-workout-date" name="date" onChange={props.handleinputchange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="muscle-group">Muscle Group</label>
                    <select className="custom-select" name="muscleGroup" onChange={props.handleinputchange}>
                        <option defaultValue ></option>
                        {props.muscle.map((muscle, index) => {
                            return (
                                <option value={muscle.muscleGroup} key={index}>{muscle.muscleGroup}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exercise">Exercise</label>
                    <select className="custom-select" name="exercise" onChange={props.handleinputchange}>
                        <option defaultValue></option>
                        {props.exercise.map((exercise, index) => {
                            return (
                                <option value={exercise.exercise} key={index}>{exercise.exercise}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-group numbers">
                    <label htmlFor="sets">Sets</label>
                    <select className="custom-select" name="sets" onChange={props.handleinputchange}>
                        <option defaultValue></option>
                        {numbers.map((number, index) => {
                            return (
                                <option value={number} key={index}>{number}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-group numbers">
                    <label htmlFor="reps">Reps</label>
                    <select className="custom-select" name="reps" onChange={props.handleinputchange}>
                        <option defaultValue></option>
                        {numbers.map((number, index) => {
                            return (
                                <option value={number} key={index}>{number}</option>
                            )
                        })}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary add-workout-button">Add Exercise</button>
            </div>
        </form>
    )

}



export default WorkoutForm;
