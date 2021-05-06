import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import VaroViherpesuainetta from '../ico/varoViherpesuainetta.svg'
import Image from 'react-bootstrap/Image'

function Frontpage(props) {
    return(
        <ScrollableAnchor id={'frontpage'}>
    <div className="page d-flex flex-column justify-content-center">
        <div className="FrontpageTextContainer d-flex justify-content-center flex-column">
            <Image src={VaroViherpesuainetta} fluid/>
            <h1 className="callToActionText">Testaa vaatteittesi todellinen vihreys <a href="#search" className="sloganLink">Vihertutkalla</a></h1>
        </div>
        <video autoPlay muted loop id="frontpageVideo">
            <source src="frontpageVideoTemp.mp4" type="video/mp4"/>
        </video>
     </div>
      </ScrollableAnchor>
    )
}
export default Frontpage