import React from 'react'
import Header from '../components/Header.jsx'
import Tile from '../components/Tile.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Blogs(props) {
    return(
    <ScrollableAnchor id={'blogs'}>
    <div className="page">
        <Header text="heeeee" borderColor="#0F0F0F"></Header>
         <Tile imagesrc="a" text="This is kinda bad" clickFunction={ () => null}></Tile>
         <Tile imagesrc="a" text="Meh to the 10th degree" clickFunction={ () => null }></Tile>
    </div>
    </ScrollableAnchor>
    )
}
export default Blogs