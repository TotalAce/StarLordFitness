import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { TrainerNavBar, ClientNavBar } from "../../components/Navbar";
import io from 'socket.io-client'

const socket = io.connect('/')
// const socket = io.connect('http://localhost:3000')

function Chat() {

    const { username, isLoggedIn, isTrainer } = JSON.parse(localStorage.getItem("user")) || ""
    const [state, setState] = useState({ message: '', name: '' })
    const [chat, setChat] = useState([])

    useEffect(() => {
        socket.on('message', ({ name, message }) => {
            setChat([...chat, { name, message }])
        })
    })

    const onTextChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onMessageSubmit = e => {
        e.preventDefault()
        const { message } = state
        socket.emit('message', { name: username, message })
        setState({ message: '', name: username })
    }

    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3 style={{ textAlign: "left" }}>
                    <span style={{ fontWeight: "bold" }}>{name}: </span><span>{message}</span>
                </h3>
            </div>
        ))
    }

    return (
        <>
            {(isLoggedIn === false || !isLoggedIn ?
                <Redirect to="/login" /> :

                <div>

                    {(isTrainer === true ? <TrainerNavBar /> : <ClientNavBar />)}
                    <div className="container">
                        <br />
                        <form onSubmit={onMessageSubmit}>
                            <div className="render-chat">
                                <h1>Chat with other members and trainers</h1>
                                <hr />
                                {renderChat()}
                            </div>

                            <div className="container" style={{ position: "fixed", bottom: "5%", margin: "auto" }}>
                                <input
                                    autoFocus
                                    type="text"
                                    name="message"
                                    onChange={e => onTextChange(e)}
                                    value={state.message}
                                    label="Message"
                                    style={{ width: "500px", textAlign: "left" }}
                                />
                                <button type="submit" className="btn btn-primary" style={{ marginLeft: "1%" }}>
                                    Send
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Chat