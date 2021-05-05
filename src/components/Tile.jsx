import React from 'react'
import { Card } from 'react-bootstrap'

function Tile(props){

    const text = props.text
    let content = ""
  
    if (text === "") {
    content =
    <Card.ImgOverlay variant="top" src={props.imagesrc} />
    } else {
    content = <div>
    <Card.Img variant="top" src={props.imagesrc} />
    <Card.Body>
        <Card.Text>
           {props.text}
        </Card.Text>
    </Card.Body>
    </div>
    }

    return(
    <Card style={{ maxWidth: '18rem' }} onClick={ () => props.clickFunction()}>
      {content}
    </Card>
    )
}
export default Tile