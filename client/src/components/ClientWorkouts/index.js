import React from "react";
import "./style.css";
// import Delete from '../../assets/images/delete.png'

function ClientWorkouts(props) {
    return (
        <div className="client-workout-card" {...props}>
            <div className="card workout-card" >
                <div className="card-body workout-card-body">
                    <h6 className="card-title">{props.date}</h6>

                    <div className="card-text">
                        <ul className="workout-list">
                            {props.array.map((exercise, index) => {
                                return (
                                    <li className="list-group-item" key={index}>
                                        <strong>Exercise: </strong>{exercise.exercise}
                                        <strong>Sets: </strong>{exercise.sets}
                                        <strong>Reps: </strong>{exercise.reps}
                                        <span>
                                            <button
                                                value={exercise.id}
                                                onClick={props.onClick}
                                                hidden={props.trainer}
                                            >X
                                            </button>
                                            {/* <input type="image" src={Delete} alt="Delete" className="delete-button" /> */}
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
