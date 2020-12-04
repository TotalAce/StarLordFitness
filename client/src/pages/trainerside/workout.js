import React from "react";
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


function TrainerWorkout() {

    const Example = (props) => {
    return (
        <div>
        <h3>Lower Body </h3>
        <p> <strong> <code>.btn</code></strong>.</p>
        <ListGroup>
            <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
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




        return (
            <>
                <h1>TrainerWorkout</h1>
            </>
        )
    }


export default TrainerWorkout;
