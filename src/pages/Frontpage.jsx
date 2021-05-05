import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Frontpage(props) {
    return(
        <ScrollableAnchor id={'frontpage'}>
    <div className="page">
        <div className="FrontpageTextContainer"></div>
        <div className="Video"></div>
     </div>
      </ScrollableAnchor>
    )
}
export default Frontpage