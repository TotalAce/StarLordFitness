import React, { useEffect } from "react";
import axios from "axios"

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

    useEffect((res, req) => {
        axios.get("/api/logout")
            .then((data) => {
                localStorage.clear()
                console.log(data);
            })
            .catch(err => console.log(err))
    })

    return (
        <div className="container" style={{textAlign:"center"}}>
            <h1>LOGGED OUT</h1>
            <br />
            <h1><a href="/login">Go to login page</a></h1>
            
        </div>
    )
}

export { Unauthorized, NoMatch, Logout}
