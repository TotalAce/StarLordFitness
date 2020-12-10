import React from 'react';
import './style.css'
import { Link } from "react-router-dom";

function TrainerList(props) {
    return (
        <div id="trainer-list" className="list-group" {...props}>

            {props.array.map((trainer, index) => {
                return (
                    <Link
                        to={`/trainerProfile/${trainer.id}`}
                        className="list-group-item list-group-item-action"
                        key={index}
                        traineruserid={trainer.UserId}>
                        <div className="col-12">
                            <img
                                src={`https://randomuser.me/api/portraits/men/${trainer.id}.jpg`}
                                alt="Trainer Img"
                                style={{ borderRadius: "50%", width: "200px", height: "200px" }}
                            />
                            <h1>{trainer.firstName} {trainer.lastName}</h1>
                            <h3>{trainer.credentials}</h3>
                            <p>{trainer.about}</p>
                        </div>
                    </Link>
                )
            })
            }
        </div>
    )
}

function ClientList(props) {
    return (
        <div id="trainer-list" className="list-group" {...props}>

            {props.array.map((client, index) => {
                return (
                    <Link
                        to={`/clientProfile/${client.username}?UserId=${client.UserId}`}
                        className="list-group-item list-group-item-action"
                        key={index}
                        clientuserid={client.UserId}>
                        <div className="col-12">
                            <img
                                src={`https://randomuser.me/api/portraits/men/${client.UserId}.jpg`}
                                alt="Client Img"
                                style={{ borderRadius: "50%", width: "200px", height: "200px" }}
                            />
                            <h1>{client.firstName} {client.lastName}</h1>
                        </div>
                    </Link>
                )
            })
            }
        </div>
    )
}

export { TrainerList, ClientList };
