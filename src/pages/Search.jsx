import React from 'react'
import Tile from "../components/Tile.jsx";
import Overlay from '../components/Overlay';
import {Form, FormControl, Button, CardDeck, Container, Row, Col } from 'react-bootstrap'
import { useState } from "react";
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Search(props) {
  //status of overlay
  const [openOverlay, setOpenOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState({title:"hhmm", text:"aaaaaaaaaaaaaaadf dsaf das dsa f", imagesrc:"a"});
  const [searchText, setSearchText] = useState("");
  const changeOverlay = () => {
    setOpenOverlay(!openOverlay)
    console.log('Open overlay: ', openOverlay)
  }

  const changeOverlayData = (input) => {
    setOverlayData(input)
    if(!openOverlay)
      changeOverlay()
  }

  const search = (input) => {
    setSearchText(input.target.value)
  }

    return(
  <ScrollableAnchor id={'search'}>
    <div className="page d-flex flex-column justify-content-center">
    <Container>
      <Row className="justify-content-center">
        <Col>
        <div className="SearchBarContainer">
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={search}/>
              <Button variant="outline-success">Search</Button>
              <div>{searchText}</div>
          </Form>
        </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
        <div className="CarouselContainer">
        <CardDeck>
          <Tile imagesrc="/img/hmLogo.png" text="" clickFunction={ () => changeOverlayData({
            title:"The Tragedy of Darth Plagueis the Wise",
            text:
            "A story that the Jedi would not tell you.'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.' - Sheev Palpatine",
            imagesrc:"/img/hmArticlePhoto.png"
            })}></Tile>

          <Tile imagesrc="a" text="a" clickFunction={ () => changeOverlayData({
            title:"This is our planet, wake boi", 
            text:
            "A story that the Jedi would not tell you.'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.' - Sheev Palpatine", 
            imagesrc:"eeeee"
            })}></Tile>

          <Tile imagesrc="a" text="a" clickFunction={ () => changeOverlayData({
            title:"Shiish something's off babe", 
            text:
            "A story that the Jedi would not tell you.'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.' - Sheev Palpatine", 
            imagesrc:"iuuiiiiiii"
            })}></Tile>

        </CardDeck>
        </div>
        </Col>
      </Row>
    </Container>
    <Overlay open={openOverlay} data={overlayData} closeFunction = {changeOverlay}></Overlay>
  </div>
  </ScrollableAnchor>
  )
}
export default Search