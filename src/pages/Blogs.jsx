import React from 'react'
import Header from '../components/Header.jsx'
import Tile from '../components/Tile.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import { Container, Row } from 'react-bootstrap'

function Blogs(props) {
    return(
    <ScrollableAnchor id={'blogs'}>
    <div className="page">
        <Container>
            <Row>
                <Header text="Blogit" borderColor="#74c82e"></Header>
            </Row>
        <Row>
        <div className="blogContainer" style={{ maxWidth: '100%'}}>
         <Tile title="5 pointtia - mistä tunnistat viherpesun?"author="Rebekka Sihvola" subject="Viherpesun ehkäisy" imagesrc="/img/blog1.png" clickFunction={ () => null}></Tile>
         <Tile title="React and chill?" author="Juho Alin" subject="Verkkojulkaisemisen perusteet" imagesrc="/img/blog2.png" clickFunction={ () => null }></Tile>
         <Tile title="Miksi ei kannata virherpestä?"author="Rebekka Sihvola" subject="Viherpesun ehkäisy" imagesrc="/img/blog1.png" clickFunction={ () => null}></Tile>

        </div>
        </Row>
        </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default Blogs