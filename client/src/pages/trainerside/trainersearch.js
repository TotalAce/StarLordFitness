import React, {useEffect} from "react";
import axios from 'axios';

function TrainerSearch() {

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
            <h1>TrainerSearch</h1>
        </>
    )
}


export default TrainerSearch;
