import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';



    const TrainerWorkout = (props) => {
    return (
        <div>
        <h3>Lower Body </h3>
        <p> <strong> <code>Workouts to give your clients.</code></strong></p>
        <ListGroup>
            <ListGroupItem active tag="a" href="#" action>Squats</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Calf Raises</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <p />
        <h3>Upper Body </h3>
        <ListGroup>
            <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
            <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        </div>
    );
    } 

export default TrainerWorkout;