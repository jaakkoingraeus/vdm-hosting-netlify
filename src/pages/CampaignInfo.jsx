import React from 'react'
import Header from '../components/Header.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function CampaignInfo(props) {
    return(
    <ScrollableAnchor id={'campaignInfo'}>
    <div className="page">
        <Header text="Kampanja" borderColor="#0F0F0F"></Header>
        <p>Tähän tulee tosi päräyttävää tekstiä</p>
    </div>
    </ScrollableAnchor>
    )
}
export default CampaignInfo