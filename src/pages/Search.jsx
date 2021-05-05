import React from 'react'
import Tile from "../components/Tile.jsx";
import Overlay from '../components/Overlay';
import {Form, FormControl, Button, CardDeck, Container, Row, Col, Fade } from 'react-bootstrap'
import { useState } from "react";

function Search(props) {
  //status of overlay
  const [open, setOpen] = useState(true);

  const changeOverlay = () => {
    setOpen(!open)
    console.log(open)
  }

    return(
    <div className="page">
    <Container>
      <Row className="justify-content-center">
        <Col>
        <div className="SearchBarContainer">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
        <div className="CarouselContainer">
        <CardDeck>
          <Tile imagesrc="a" text=""></Tile>
          <Tile imagesrc="a" text="a"></Tile>
          <Tile imagesrc="a" text="a"></Tile>
        </CardDeck>
        </div>
        </Col>
      </Row>
    </Container>
    <Overlay open={open} data={{title:"hhmm", text:"aaaaaaaaaaaaaaadf dsaf das dsa f", imagesrc:"a"}} closeFunction = {changeOverlay}></Overlay>
  </div>
    )
}
export default Search