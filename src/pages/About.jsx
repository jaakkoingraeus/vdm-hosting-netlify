import React from 'react'
import Header from '../components/Header'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor


function About(props) {
    return(
    <ScrollableAnchor id={'about'}>
    <div className="page">
        <Header text ="About" borderColor = "#777777"></Header>
    </div>
    </ScrollableAnchor>
    )
}
export default About