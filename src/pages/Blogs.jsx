import React from 'react'
import Header from '../components/Header.jsx'
import Tile from '../components/Tile.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Blogs(props) {
    return(
    <ScrollableAnchor id={'blogs'}>
    <div className="page">
        <Header text="Blogs" borderColor="#0F0F0F"></Header>
         <Tile title="Miksi ei kannata virherpestä?"author="Rebekka Sihvola" subject="Viherpesun ehkäisy" imagesrc="/img/blog1.png" clickFunction={ () => null}></Tile>
         <Tile title="React and chill?" author="Juho Alin" subject="Verkkojulkaisemisen perusteet" imagesrc="/img/blog2.png" clickFunction={ () => null }></Tile>
    </div>
    </ScrollableAnchor>
    )
}
export default Blogs