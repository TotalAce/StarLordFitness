import React, { useEffect, useState } from "react";
import axios from "axios"
import { Redirect } from "react-router-dom";


function Unauthorized() {
    return (
        <>
            <h1>Error 403</h1>
            <h2>You are not allowed in the tigers den</h2>
            <h2>Turn back now!</h2>
        </>
    )
}

function NoMatch() {
    return (
        <>
            <h1>Error 404</h1>
            <h2>You are headed towards the belly of the beast</h2>
            <h2>Turn back now!</h2>
        </>
    )
}

function Logout() {

    const [loaded, setLoaded] = useState(false)

    useEffect((res, req) => {
        axios.get("/api/logout")
            .then((data) => {
                localStorage.clear()
                setLoaded(true)
            })
            .catch(err => console.log(err))
    })

    return (
        (loaded === true ? <Redirect to="/" /> : null)
    )
}

export { Unauthorized, NoMatch, Logout }
