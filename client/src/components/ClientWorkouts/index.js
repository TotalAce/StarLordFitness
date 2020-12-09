import React from "react";
import "./style.css";
import Delete from '../../assets/images/delete.png'

function ClientWorkouts(props) {
    console.log(props.array.length)
    if (props.array.length === 0) {
        return (
            <div className="client-workout-card">
                <div className="card workout-card" style={{ border: "none" }}>
                    <div className="card-body workout-card-body">
                        <h6 className="card-title">{props.date}</h6>
    
                        <div className="card-text">
                            <ul className="workout-list">
                                    <li className="list-group-item list-group-item-action">
                                            No Workout Listed
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="client-workout-card" {...props}>
            <div className="card workout-card" style={{ border: "none" }}>
                <div className="card-body workout-card-body">
                    <h6 className="card-title">{props.date}</h6>

                    <div className="card-text">
                        <ul className="workout-list">
                            {props.array.map((exercise, index) => {
                                return (
                                    <li className="list-group-item list-group-item-action" key={index}>
                                        {exercise.exercise}
                                        <strong>Sets: </strong>{exercise.sets}
                                        <strong>Reps: </strong>{exercise.reps}
                                        <span>
                                            {/* <button
                                                value={exercise.id}
                                                onClick={props.delete}
                                                hidden={props.trainer}
                                            >X
                                            </button> */}
                                            <input
                                                type="image"
                                                src={Delete}
                                                alt="Delete"
                                                className="delete-button"
                                                value={exercise.id}
                                                onClick={props.delete}
                                                hidden={props.trainer}
                                            />
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default ClientWorkouts;
