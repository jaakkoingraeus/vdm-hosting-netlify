import React from 'react'
import Tile from "../components/Tile.jsx";
import Overlay from '../components/Overlay';
import {Form, FormControl, Button, CardDeck, Container, Row, Col } from 'react-bootstrap'
import { useState } from "react";
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Search(props) {
  //status of overlay
  const [openOverlay, setOpenOverlay] = useState(true);
  const [overlayData, setOverlayData] = useState({title:"hhmm", text:"aaaaaaaaaaaaaaadf dsaf das dsa f", imagesrc:"a"});
  const [searchText, setSearchText] = useState("");
  const changeOverlay = () => {
    setOpenOverlay(!openOverlay)
    console.log(openOverlay)
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
          <Tile imagesrc="a" text="" clickFunction={ () => changeOverlayData({title:"aaaaa", text:"bbbbbbbb", imagesrc:"dddd"})}></Tile>
          <Tile imagesrc="a" text="a" clickFunction={ () => changeOverlayData({title:"cccccc", text:"ddddd", imagesrc:"eeeee"})}></Tile>
          <Tile imagesrc="a" text="a" clickFunction={ () => changeOverlayData({title:"gggggg", text:"hhhhhhh", imagesrc:"iuuiiiiiii"})}></Tile>
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