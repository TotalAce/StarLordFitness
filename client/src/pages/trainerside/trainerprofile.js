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
                    <img src={`https://randomuser.me/api/portraits/men/${result}.jpg`} alt="Trainer Img" style={{borderRadius: "50%", width: "200px", height: "200px"}}/>
                    </div>
                    <br />
                    <div>
                        <div className="row justify-content-center">
                            {/* <h3>Credentials: {trainer.credentials}</h3> */}
                            <h3>Certifications: ISSA, ACE, NASM </h3>
                        </div>
                        <div className="row justify-content-center">
                            {/* <h5>About:{trainer.about}</h5> */}
                            <h5>About: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis magna. Varius quam quisque id diam vel quam elementum. Praesent elementum facilisis leo vel fringilla est ullamcorper. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Nam at lectus urna duis. Adipiscing at in tellus integer feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Ornare suspendisse sed nisi lacus. Dapibus ultrices in iaculis nunc sed augue. Sem integer vitae justo eget magna fermentum iaculis eu. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Ultrices eros in cursus turpis. Porttitor lacus luctus accumsan tortor.</h5>
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
