import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Frontpage(props) {
    return(
        <ScrollableAnchor id={'frontpage'}>
    <div className="page d-flex flex-column justify-content-center">
        <div className="FrontpageTextContainer d-flex justify-content-center">
            <h1>What even is this</h1>
        </div>
        <video autoPlay muted loop id="frontpageVideo">
            <source src="frontpageVideoTemp.mp4" type="video/mp4"/>
        </video>
     </div>
      </ScrollableAnchor>
    )
}
export default Frontpage