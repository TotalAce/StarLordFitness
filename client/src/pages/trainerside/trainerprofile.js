import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import { TrainerNavBar, ClientNavBar } from "../../components/Navbar";
import axios from 'axios'

function TrainerProfile() {

    const { isLoggedIn, isTrainer, id } = JSON.parse(localStorage.getItem("user")) || ""

    const [trainer, setTrainer] = useState({})

    let params = window.location.href
    // console.log(params);
    var result = /[^/]*$/.exec(params)[0];
    // console.log(result);

    useEffect(() => {

        axios.get("/api/trainer/" + result)
            .then(res => {
                // console.log(res);
                setTrainer(res.data)
            })
            .catch(err => console.log(err));
    }, [result])

    // console.log(result);
    // console.log(id);

    function handleTrainer(e) {
        e.preventDefault()
        // console.log("clicked");
        const ask = window.confirm("Are you sure you want to switch trainers?")

        if (ask === true) {
            axios.put("/api/client/chooseTrainer/" + id, {
                TrainerId: trainer.id
            }).then(res => {
                console.log(res);
                alert('Updated trainer. Please login again for changes to take effect')
                window.location.href = "/logout"
            }).catch(err => console.log(err))
        }
    }

    return (
        <>
            {(isLoggedIn === false || !isLoggedIn ?
                <Redirect to="/login" /> :


                <div className="container">

                    {(isTrainer === true ? <TrainerNavBar /> : <ClientNavBar />)}

                    <h1 className="justify-content-center">{trainer.firstName} {trainer.lastName}</h1>
                    <div className="img-container justify-content-center">
                        <img src="https://via.placeholder.com/300?text=Trainer Img" alt="Trainer Img" />
                    </div>
                    <br />
                    <div>
                        <div className="row justify-content-center">
                            <h3>Credentials: {trainer.credentials}</h3>
                        </div>
                        <div className="row justify-content-center">
                            <h5>About:{trainer.about}</h5>
                        </div>
                    </div>

                    {(isTrainer === true ?
                        null
                        :
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleTrainer}
                        >
                            Sign Up with this Trainer
                        </button>
                    )}

                </div>


            )}
        </>
    )
}


export default TrainerProfile;
