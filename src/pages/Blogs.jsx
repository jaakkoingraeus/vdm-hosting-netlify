import React from 'react'
import Header from '../components/Header.jsx'
import Tile from '../components/Tile.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import { Container, Row } from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

function Blogs(props) {
    return(
    <ScrollableAnchor id={'blogs'}>
    <div className="page">
        <Container>
            <Row>
                <Header text="Blogit" borderColor="#74c82e"></Header>
            </Row>
            <Row className="justify-content-center">
                <h5 className="searchDescription">Viherpesua on monenlaista ja aihe on monimutkainen. Blogissamme asiantuntijat kertovat viherpesun vaikutuksista ja vinkkaavat kuinka tunnistat viherpesun.</h5>
            </Row>
        <Row>
        <div className="blogContainer" style={{ minWidth: '100%'}}>
            <Link to="/5pointtia">
                <Tile title="5 pointtia - mistä tunnistat viherpesun?"author="Rebekka Sihvola" subject="Viherpesun ehkäisy" imagesrc="/img/Laundry.jpg" clickFunction={ () => console.log('Opening blog')}></Tile>
            </Link>
            <Link to="/tiedosta">
                <Tile title="Tiedosta haitallinen viherpesu!" author="Rebekka Sihvola" subject="Tietoa kampanjasta" imagesrc="/img/morning-brew-M1n5CWH2xKI-unsplash.jpeg" clickFunction={ () => console.log('Opening blog')}></Tile>
            </Link>
            <Link to="/eroon">
                <Tile title="Eroon omistamisesta" author="Rebekka Sihvola" subject="Viherpesun ehkäisy" imagesrc="/img/blog1.png" clickFunction={ () => console.log('Opening blog')}></Tile>
            </Link>
        </div>
        </Row>
        </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default Blogs