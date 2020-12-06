import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import { TrainerNavBar } from "../../components/Navbar";
import axios from 'axios'

function TrainerProfile() {

    const { isLoggedIn } = JSON.parse(localStorage.getItem("user"))

    const [trainer, setTrainer] = useState({})

    useEffect(() => {

        let params = window.location.href
        // console.log(params);
        var result = /[^/]*$/.exec(params)[0];
        // console.log(result);

        axios.get("/api/trainer/" + result)
            .then(res => {
                console.log(res);
                setTrainer(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            {(isLoggedIn === false ?
                <Redirect to="/login" /> :


                <div className="container">

                    <TrainerNavBar />
                    <h1 className="justify-content-center">{trainer.firstName} {trainer.lastName}</h1>
                    <div className="img-container justify-content-center">
                        <img src="https://via.placeholder.com/300?text=Trainer Img" alt="Trainer Img" />
                    </div>
                    <br/>
                    <div>
                        <div className="row justify-content-center">
                            <h3>Credentials: {trainer.credentials}</h3>
                        </div>
                        <div className="row justify-content-center">
                            <h5>About:{trainer.about}</h5>
                        </div>
                    </div>

                </div>


            )}
        </>
    )
}


export default TrainerProfile;
