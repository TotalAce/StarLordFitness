import React, {useEffect} from "react";
import axios from 'axios';
import NavBar from "../../components/Navbar";

function TrainerProfile() {

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
        <div className="container">
            <br></br>
            <NavBar />
            <br></br>
            <h2 className="d-flex justify-content-center"> Trainer Name</h2>
            <br></br>
            <div className="img-container d-flex justify-content-center">
                <p>Insert Trainer Image</p>
            </div>
            <br></br>
            <div className="d-flex justify-content-center">
                <p>Trainer Summary</p>
            </div>
        </div>
    )
}


export default TrainerProfile;
