import React from 'react'
import Header from '../components/Header.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Comments(props) {
    return(
    <ScrollableAnchor id={'comments'}>
    <div className="page">
        <Header text="otsikko" borderColor="#000000"></Header>
    </div>
    </ScrollableAnchor>
    )
}
export default Comments