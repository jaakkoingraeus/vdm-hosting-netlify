import React from 'react'
import { Jumbotron, Media,  Button, Fade } from 'react-bootstrap'
/*
* props is given a JSON of {title:"", text:"", imagesrc:""} as data
* props.closeFunction - function to close & open 
* props.open - if overlay is open boolean
*/
function Overlay(props) {
  const title = props.data.title
  const text = props.data.text
  const imagesrc = props.data.imagesrc
  let pointerevents = props.open ? {pointerEvents:'auto'} : {pointerEvents:'none'}
    return(
        <Fade in={props.open} appear={true} className="overlay" style={pointerevents}>
        <Jumbotron>
             <Button onClick={() => props.closeFunction()} disabled={!props.open}>x</Button>
            <Media>
                <Media.Body>
                <h5>{title}</h5>
                    <p>
                        {text}
                    </p>
                </Media.Body>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={imagesrc}
                    alt="Generic placeholder"
                />
            </Media>
            
        </Jumbotron>
        </Fade>
    )
}
export default Overlay