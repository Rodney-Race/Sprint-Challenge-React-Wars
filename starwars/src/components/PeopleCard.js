import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'

export function PeopleCard(props){
  return(
    <Card className="card" key={props.id}>

      <CardBody className="card-body" height="100%">
        <CardTitle className="card-title">{props.name}</CardTitle>
        <CardSubtitle className="card-subtitle">Height: {props.height} Weight: {props.mass}</CardSubtitle>
        <CardText className="card-text" height="100%">{props.name} is a {props.hair_color} {props.gender}, his skin color is {props.skin_color}</CardText>
      </CardBody>
    </Card>
  )
}