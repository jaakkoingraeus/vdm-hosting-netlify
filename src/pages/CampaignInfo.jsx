import React from 'react'
import Header from '../components/Header.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import { Container, Row, Col, Card } from 'react-bootstrap'

function CampaignInfo(props) {
    return(
    <ScrollableAnchor id={'campaignInfo'}>
    <div className="page"> 
    <Container>
        <Row>
        <Header text="Varo viherpesua!" borderColor="#ffe749"></Header>
        </Row>
            <Row>
            <Col>       
                 <Card className="shadow">
                    <Card.Body>
                        <Card.Title>Mitä on viherpesu?</Card.Title>
                        <Card.Text className="campaignText">
                    Vaateteollisuudessa koventuneet vaatimukset, kilpailu ja voiton tavoittelu ovat johtaneeet kuluttajia sokaisevaan viherpesuun. Kiillotetulla kuluttajaviestinnällä ja markkinoinnilla kätketään tuhoisat ympäristövaikutukset sekä ihmis- ja eläintenoikeusrikkomukset.
                    </Card.Text>
                    <Card.Title>Miksi viherpesua pitäisi varoa?</Card.Title>
                        <Card.Text className="campaignText">
                   Vaatealan viherpesu on laajamittaista ja salakavalaa. Sen tunnistaminen auttaa tekemään kestäviä valintoja, jotka estävät ilmastonmuutosta, vähentävät köyhyyttä ja pelastavat henkiä. 
                    </Card.Text>
                    <Card.Title>Me kerromme vaatteidesi todellisen vihreyden</Card.Title>
                        <Card.Text className="campaignText">
                   Autamme tekemään oikeita valintoja viherpesun keskellä. Uskomme, että voit näyttää hyvältä, säästää lompakkoa ja pelastaa maapalloa samaan aikaan! Lue lisää <a href="#blogs">blogista</a>.
                    </Card.Text>
                    </Card.Body>
            </Card>
            </Col>
            <Col>
            <div className="statBox">
                <h1>10%</h1>
                <p className="statDesc">Vuotuisista globaaleista hiilidioksidipäästöistä aiheutuu vaateteollisuuden tuotannosta*</p>
            </div>
            <div className="statBox">
                <h1>98%</h1>
                <p className="statDesc">Maailman vaatetuotannon työntekijöistä ansaitsee kuukaudessa vähemmän, mitä normaali elintaso vaatii.*</p>
            </div>
            <div className="statBox">
                <h1>100 milj</h1>
                <p className="statDesc">Eläintä tapetaan vuosittain vaateollisuutta varten turkistarhauksessa*</p>
            </div>
            </Col>
            
            </Row>
    </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default CampaignInfo