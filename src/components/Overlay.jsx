/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react'
import {Media,  Button, Fade, Container, Row } from 'react-bootstrap'
import {GrClose} from 'react-icons/gr'
/*
* props is given a JSON of {title:"", text:"", imagesrc:""} as data
* props.closeFunction - function to close & open 
* props.open - if overlay is open boolean
*/
function Overlay(props) {
  const title = props.data.title
  const natureTitle = props.data.natureTitle
  const natureText = props.data.natureText
  const peopleTile = props.data.peopleTitle
  const peopleText = props.data.peopleText
  const animalTitle = props.data.animalTitle
  const animalText = props.data.animalText
  const imagesrc = props.data.imagesrc
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mobileOr = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < "860"
    if (mobileOr && props.open) {
        disableScroll()
    } else {
        enableScroll()
    }
    setMobile(mobileOr)
  }, [])
  
  window.addEventListener('resize', () => {
    const mobileOr = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < "860"
    if (mobileOr && props.open) {
        disableScroll()
    } else {
        enableScroll()
    }
    setMobile(mobileOr)
  })

  let scrollTop = 0

  function disableScroll() {
    console.log('Disabling scroll')
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(0, scrollTop);
        };
  }
  
   function enableScroll() {
    window.onscroll = function() {};
   }

  let pointerevents = props.open ? {pointerEvents:'auto'} : {pointerEvents:'none'}
    return(
        <Fade in={props.open} appear={true} className="overlay" style={pointerevents}>
           
        <div>
        <Button variant="secondary" className="position-absolute top-0 start-0 translate-middle" onClick={ () => {
                props.closeFunction()
                }} disabled={!props.open}><GrClose/></Button>
        <div style={{position:"absolute", top:"0", right:"0", margin:"40px"}}>
        <img
            width="100"
            src={imagesrc}
            alt="Generic placeholder"
        />
        </div>
            <Media className={mobile ? "flex-column-reverse p-3 pt-5" : "p-5"}>
            
                <Media.Body>
                    <Container>
                        <Row>
                    <h5 className="pb-3 pl-1 overlayTitle">{title}</h5>
                </Row>
                </Container>
                
                <h5>{natureTitle}</h5>
                     <p className="p-1 pb-3 overlayText">
                        {natureText}
                    </p>
                <h5>{peopleTile}</h5>
                     <p className="p-1 pb-3 overlayText">
                        {peopleText}
                    </p>
                <h5>{animalTitle}</h5>
                     <p className="p-1 overlayText">
                        {animalText}
                    </p>
                </Media.Body>
            </Media>
            
        </div>
        </Fade>
    )
}
export default Overlay