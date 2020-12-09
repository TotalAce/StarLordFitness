import React from 'react';
import './style.css'

function TrainerList(props) {
    return (
        <div id="trainer-list" className="list-group" {...props}>

            {props.array.map((trainer, index) => {
                return (
                    <a href={`/trainerProfile/${trainer.UserId}`} className="list-group-item list-group-item-action" key={index} traineruserid={trainer.UserId}>
                        <div className="col-12">
                            <img src={`https://randomuser.me/api/portraits/men/${trainer.UserId}.jpg`} alt="Trainer Img" style={{ borderRadius: "50%", width: "200px", height: "200px" }} />
                            <h1>{trainer.firstName} {trainer.lastName}</h1>
                            <h3>{trainer.credentials}</h3>
                            <p>{trainer.about}</p>
                        </div>
                    </a>
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
                    <a href={`/clientProfile/${client.UserId}`} className="list-group-item list-group-item-action" key={index} clientuserid={client.UserId}>
                        <div className="col-12">
                            <img src={`https://randomuser.me/api/portraits/men/${client.UserId}.jpg`} alt="Client Img" style={{ borderRadius: "50%", width: "200px", height: "200px" }} />
                            <h1>{client.firstName} {client.lastName}</h1>
                        </div>
                    </a>
                )
            })
            }
        </div>
    )
}

export { TrainerList, ClientList };
