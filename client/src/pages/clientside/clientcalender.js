import React, { useEffect } from "react";
import axios from 'axios';
import {ClientNavBar} from "../../components/Navbar"

function ClientCalendar() {

    useEffect(() => {
        axios.get("/api/user")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                if (res.data === "") {
                    window.location.href = "/login"
                }
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="container">
                <ClientNavBar />
                <h1 className="row justify-content-center">Client Calendar</h1>


                <div className="row">
                    <div class="card" style={{ width: "18rem" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">12/4/2020</li>
                            <li class="list-group-item">Exercise 1</li>
                            <li class="list-group-item">Exercise 2</li>
                        </ul>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">12/5/2020</li>
                            <li class="list-group-item">Exercise 1</li>
                            <li class="list-group-item">Exercise 2</li>
                        </ul>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">12/6/2020</li>
                            <li class="list-group-item">Exercise 1</li>
                            <li class="list-group-item">Exercise 2</li>
                        </ul>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">12/7/2020</li>
                            <li class="list-group-item">Exercise 1</li>
                            <li class="list-group-item">Exercise 2</li>
                        </ul>
                    </div>
                </div>

                <br />
                <div className="row">
                    <div class="card" style={{ width: "18rem" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">12/8/2020</li>
                            <li class="list-group-item">Exercise 1</li>
                            <li class="list-group-item">Exercise 2</li>
                        </ul>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">12/9/2020</li>
                            <li class="list-group-item">Exercise 1</li>
                            <li class="list-group-item">Exercise 2</li>
                        </ul>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">12/10/2020</li>
                            <li class="list-group-item">Exercise 1</li>
                            <li class="list-group-item">Exercise 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ClientCalendar;
