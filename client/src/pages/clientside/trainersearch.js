import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import { ClientNavBar } from '../../components/Navbar'
import { TrainerList } from "../../components/TrainerList"
import axios from 'axios'
// import TrainerProfile from "../trainerside/trainerprofile"

function TrainerSearch() {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("user")) || ""

    const [trainerList, setTrainerList] = useState({})
    const [pageLoad, setPageLoad] = useState(false)

    useEffect(() => {
        axios.get("api/trainer/list")
            .then(res => {
                console.log(res);
                setTrainerList(res.data)
                setPageLoad(true)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            {(isLoggedIn === false || !isLoggedIn ?
                <Redirect to="/login" /> :

                <>
                    <div className="container">
                        <ClientNavBar />
                        <h1>Choose a Personal Trainer to Work With:</h1>

                        {(pageLoad ?
                            <TrainerList
                                array={trainerList}

                            />
                            : null)}

                    </div>

                </>

            )}
        </>
    )
}


export default TrainerSearch;
