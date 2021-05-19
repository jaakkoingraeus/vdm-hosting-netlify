import React from 'react'
import Tile from "../components/Tile.jsx";
import Overlay from '../components/Overlay';
import {Form, FormControl, Button, CardDeck, Container, Row, Col } from 'react-bootstrap'
import { useState } from "react";
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import Header from '../components/Header.jsx'
import {FaSearch} from 'react-icons/fa'

function Search(props) {
  //searchable database
  const companyData = require('../companyDatabase.json').Data;
  //status of overlay
  const [openOverlay, setOpenOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState({title:"hhmm", text:"aaaaaaaaaaaaaaadf dsaf das dsa f", imagesrc:"a"});
  const [searchText, setSearchText] = useState("");
  const changeOverlay = () => {
    setOpenOverlay(!openOverlay)
    window.location.href = "/#search"
  }

  const changeOverlayData = (input) => {
    setOverlayData(input)
    if(!openOverlay)
      changeOverlay()
  }

  const search = (input) => {
    setSearchText(input.target.value)
  }


  const dataToRender = companyData.filter( (x)=> x.title.toLowerCase().includes(searchText.toLowerCase()))
  return(
  <ScrollableAnchor id={'search'}>
    <div className="page d-flex flex-column justify-content-around">
    <Container className="d-flex flex-column justify-content-between">
      <Row className="justify-content-center">
        <Header text="Vihertutka" borderColor="#74c82e"></Header>
      </Row>
    </Container>
    <Container>
      <Row className="justify-content-center">
        <div className="searchDescription"><h5>Tiedätkö, miten päivän asusi vaikuttaa ympäristön, ihmisten tai eläinten hyvinvointiin? Vihertutka paljastaa suosikkibrändiesi todellisen vastuullisuuden markkinoinnin luomien mielikuvien alta. Hae vaatemerkkiä nimellä ja klikkaa logoa nähdäksesi asiantuntijoiden koostaman tietopaketin vaatemerkin vihreydestä.</h5>
        </div>
      </Row>
      </Container>
      <Container>
      <Row className="justify-content-center">
        <div className="SearchBarContainer">
          <Form inline className="justify-content-center">
            <div className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-sm-2 shadow-sm searchBar" onChange={search}/>
              <Button variant="outline-success shadow-sm"><FaSearch/></Button>
            </div>
          </Form>
        </div>
      </Row>
      </Container>
      <Container>
      <Row className="mt-2">
        <Col>
        <div className="CarouselContainer border rounded p-3 shadow-sm d-flex flex-column justify-content-center hideScroll">
        <CardDeck className="justify-content-center">
          { dataToRender.length > 0 ? dataToRender.map( (x) => <Tile key={x.title} imagesrc={x.imagesrc} clickFunction={ () => changeOverlayData(x)}></Tile>) : <h5>Hae toista yritystä</h5>}
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