import React, { useEffect } from "react";
import axios from "axios"

function ClientHome() {

    useEffect((res, req) => {
        axios.get("/api/logout")
            .then((data) => {
                console.log(res);
                console.log(req);
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


export default ClientHome;
