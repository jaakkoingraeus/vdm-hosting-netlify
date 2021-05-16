import React from 'react'
import { useEffect, useState } from 'react'
import { Jumbotron, Media,  Button, Fade, Image } from 'react-bootstrap'
/*
* props is given a JSON of {title:"", text:"", imagesrc:""} as data
* props.closeFunction - function to close & open 
* props.open - if overlay is open boolean
*/
function Overlay(props) {
  const title = props.data.title
  const text = props.data.text
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
    console.log('Open: ', props.open)
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
        <Jumbotron>
             <Button className="ml-3" onClick={ () => {
                props.closeFunction()
                }} disabled={!props.open}>x</Button>
            <Media className={mobile ? "flex-column-reverse" : ""}>
                <Media.Body>
                <h5 className="p-3 overlayTitle">{title}</h5>
                    <p className="p-3 overlayText">
                        {text}
                    </p>
                <h5 className="p-3 overlayTitle">{natureTitle}</h5>
                     <p className="p-3 overlayText">
                        {natureText}
                    </p>
                <h5 className="p-3 overlayTitle">{peopleTile}</h5>
                     <p className="p-3 overlayText">
                        {peopleText}
                    </p>
                <h5 className="p-3 overlayTitle">{animalTitle}</h5>
                     <p className="p-3 overlayText">
                        {animalText}
                    </p>
                </Media.Body>
                <img
                    width="100"
                    className="mr-3 overlayImg"
                    src={imagesrc}
                    alt="Generic placeholder"
                />
            </Media>
            
        </Jumbotron>
        </Fade>
    )
}
export default Overlay