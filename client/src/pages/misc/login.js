import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import LoggedInContext from '../../utils/loggedInContext'
import Background from "../../assets/images/backgroundImg.jpg"
import Header from '../../components/Header'

function Login(props) {
    const { isTrainer, isLoggedIn } = useContext(LoggedInContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(evt) {
        evt.preventDefault();

        if (userName === "" || password === "") {
            return alert("Please fill out all fields before submitting.")
        }

        await axios.post("/api/login", {
            username: userName,
            password: password
        })
            .then(async function (response) {
                // console.log(response)

                if (response.statusText === "OK") {
                    // console.log(response);

                    await axios.get("/api/user")
                        .then((res) => {
                            console.log(res);

                            (res.data.Clients.length === 0 ?
                                props.handleChange({
                                    id: res.data.id,
                                    username: res.data.username,
                                    firstName: res.data.firstName,
                                    lastName: res.data.lastName,
                                    isTrainer: res.data.isTrainer,
                                    isLoggedIn: true,
                                })
                                :
                                props.handleChange({
                                    id: res.data.id,
                                    username: res.data.username,
                                    firstName: res.data.firstName,
                                    lastName: res.data.lastName,
                                    isTrainer: res.data.isTrainer,
                                    isLoggedIn: true,
                                    Trainerid: res.data.Clients[0].TrainerId,
                                    ClientId: res.data.Clients[0].id
                                })
                            )

                            // props.handleChange({
                            //     id: res.data.id,
                            //     username: res.data.username,
                            //     firstName: res.data.firstName,
                            //     lastName: res.data.lastName,
                            //     isTrainer: res.data.isTrainer,
                            //     isLoggedIn: true,
                            //     Trainerid: res.data.Clients[0].TrainerId
                            // })

                            // Each session only lasts 30 mins
                            setTimeout(() => {
                                localStorage.clear()
                                alert(`Your session has ended. Please login again`)
                                window.location.href = "/login"
                            }, 1000 * 60 * 30);


                            // (res.data.isTrainer === false ?
                            //     window.location.href = "/clienthome" :
                            //     window.location.href = "/trainer")

                            // res.data.isTrainer === false ?
                            //     <Redirect to="/clienthome" /> :
                            //     <Redirect to="/trainer" />
                        })
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Wrong username and password combination")
            });
    }

    return (
        <>
            <div style={{
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat', width: '100%', height: '100%'
            }}>
                {(isLoggedIn ?
                    (isTrainer ? <Redirect to="/trainer" /> : <Redirect to="/clienthome" />)
                    : (
                        <>
                            <Header />
                            <div style={{background: "rgba(255, 255, 255, 0.6)"}}>
                            <br/>
                            <h1>Login</h1>

                            <form onSubmit={handleSubmit}>
                                <input
                                    autoFocus
                                    style={{ margin: "5px", padding: "5px", borderRadius: "5px", border: "2px solid gray" }}
                                    type="text"
                                    value={userName}
                                    placeholder="Username"
                                    onChange={event => setUserName(event.target.value)}
                                />
                                <br />
                                <input
                                    style={{ margin: "5px", padding: "5px", borderRadius: "5px", border: "2px solid gray" }}
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={event => setPassword(event.target.value)}
                                /><br />
                                <input type="submit" className="btn btn-primary" value="Log In" style={{ marginTop: "5px"}} />
                            </form>

                            <br />
                            <h6>
                                <a href="/signup" style={{fontSize: "15px"}}>I don't have a login</a>
                            </h6>
                            <br/>
                            </div>
                        </>
                    )
                )}
            </div>
        </>
    );
}

export default Login;