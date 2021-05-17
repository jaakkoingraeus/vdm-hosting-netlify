import React from 'react'
import { Card } from 'react-bootstrap'

function Tile(props){

    const author = props.author
    let content = ""
    let authorBox = ""

    if (props.author !== "") {
      authorBox = <Card.Text>
        {props.author ? `By ${props.author}` : ""}
      </Card.Text>
    }
  
    if (author === undefined) {
    content = <div>
    <Card.Img variant="top" src={props.imagesrc} />
    </div>
    } else {
    content = <div>
    <Card.Img variant="top" src={props.imagesrc}/>
    <Card.Body >
        <Card.Subtitle className="mb-2 text-success">
          {props.subject}
        </Card.Subtitle>
        <Card.Title>
          {props.title}
        </Card.Title>
          {authorBox}
    </Card.Body>
    </div>
    }

    return(
    <Card style={{ maxWidth: '18rem' }} className="m-3 p-3 bg-secondary text-dark justify-content-center"  border="secondary" onClick={ () => props.clickFunction()}>
      {content}
    </Card>
    )
}
export default Tile