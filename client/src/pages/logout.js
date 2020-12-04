import React, { useEffect } from "react";
import axios from "axios"

function ClientHome() {

    useEffect((res, req) => {
        axios.get("/api/logout")
            .then((data) => {
                console.log(data);
            })
            .catch(err => console.log(err))
    })

    return (
        <>
            <h1>LOGOUT</h1>
        </>
    )
}


export default ClientHome;
