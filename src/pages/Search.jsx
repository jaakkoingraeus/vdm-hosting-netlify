import React from 'react'
import Tile from "../components/Tile.jsx";
import {Form, FormControl, Button, CardDeck, Container, Row, Col } from 'react-bootstrap'

function Search(props) {
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
  </div>
    )
}
export default Search