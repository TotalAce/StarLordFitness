import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import { TrainerNavBar } from "../../components/Navbar"
import axios from 'axios'

function Trainer() {
    const { isLoggedIn, isTrainer, firstName, id } = JSON.parse(localStorage.getItem("user")) || ""

    const [clientList, setClientList] = useState({})

    useEffect(() => {
        axios.get("api/trainer/clients/" + id)
            .then(res => {
                console.log(res);
                setClientList(res.data[0].Clients)
                // setPageLoad(true)
            })
            .catch(err => console.log(err));
    }, [id])

    console.log(clientList);

    let incompleteArray = []
    let completedArray = []

    for (let i = 0; i < clientList.length; i++) {
        if (clientList[i].Notes.length === 0) {
            incompleteArray.push((clientList[i].firstName + " " + clientList[i].lastName))
        } else {
            completedArray.push((clientList[i].firstName + " " + clientList[i].lastName))
        }
    }

    return (
        <>
            {(isLoggedIn === false || !isLoggedIn ?
                <Redirect to="/login" /> :
                (isTrainer === false ? <Redirect to="/unauthorized" /> :

                    <div className="container">
                        <TrainerNavBar />

                        <div className="container">
                            <h1 className="row justify-content-center">Welcome back {firstName}!</h1>
                            <br />
                            <div className="row">
                                <div className="container col-6">
                                    <h2>Incomplete</h2>
                                    <ul class="list-group">
                                        {incompleteArray.map((client, index) => {
                                            return (
                                                <li key={index} class="list-group-item list-group-item-warning">{client}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="container col-6" >
                                    <h2>Completed</h2>
                                    <ul class="list-group">
                                        {completedArray.map((client, index) => {
                                            return (
                                                <li key={index} class="list-group-item list-group-item-success">{client}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                )
            )}
        </>
    )
}


export default Trainer;
