import React, { useEffect } from "react";
import { Redirect } from "react-router-dom"
import API from '../../utils/API'
import { ClientNavBar } from "../../components/Navbar"

function ClientCalendar() {

    const { isLoggedIn, isTrainer } = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        API.checkLoggedIn()
    }, [])

    return (
        <>
            {(isLoggedIn === false ?
                <Redirect to="/login" /> :
                (isTrainer ? <Redirect to="/unauthorized" /> :

                    <div className="container">
                        <ClientNavBar />
                        <h1 className="row justify-content-center">Client Calendar</h1>


                        <div className="row">
                            <div className="card" style={{ width: "18rem" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">12/4/2020</li>
                                    <li className="list-group-item">Exercise 1</li>
                                    <li className="list-group-item">Exercise 2</li>
                                </ul>
                            </div>

                            <div className="card" style={{ width: "18rem" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">12/5/2020</li>
                                    <li className="list-group-item">Exercise 1</li>
                                    <li className="list-group-item">Exercise 2</li>
                                </ul>
                            </div>

                            <div className="card" style={{ width: "18rem" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">12/6/2020</li>
                                    <li className="list-group-item">Exercise 1</li>
                                    <li className="list-group-item">Exercise 2</li>
                                </ul>
                            </div>

                            <div className="card" style={{ width: "18rem" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">12/7/2020</li>
                                    <li className="list-group-item">Exercise 1</li>
                                    <li className="list-group-item">Exercise 2</li>
                                </ul>
                            </div>
                        </div>

                        <br />
                        <div className="row">
                            <div className="card" style={{ width: "18rem" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">12/8/2020</li>
                                    <li className="list-group-item">Exercise 1</li>
                                    <li className="list-group-item">Exercise 2</li>
                                </ul>
                            </div>

                            <div className="card" style={{ width: "18rem" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">12/9/2020</li>
                                    <li className="list-group-item">Exercise 1</li>
                                    <li className="list-group-item">Exercise 2</li>
                                </ul>
                            </div>

                            <div className="card" style={{ width: "18rem" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">12/10/2020</li>
                                    <li className="list-group-item">Exercise 1</li>
                                    <li className="list-group-item">Exercise 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    )
}


export default ClientCalendar;
