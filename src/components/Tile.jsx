import React from 'react'
import { Card } from 'react-bootstrap'

function Tile(props){

    const author = props.author
    let content = ""
    let authorBox = ""

    const addClass = props.className ? props.className : ""

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
    content = <div style={{ minWidth: '30%', cursor:'pointer'}}>
    <Card.Img variant="top" src={props.imagesrc} style={{ minWidth: '30%', cursor:'pointer'}}/>
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
    <Card style={{minHeight: '15rem', minWidth: '15rem', maxWidth: '18rem', cursor:'pointer', scrollSnapAlign: 'start'}} className="m-3 p-3 bg-secondary text-dark justify-content-center" border="secondary" onClick={ () => props.clickFunction()}>
      {content}
    </Card>
    )
}
export default Tile