import React from 'react'
import Header from '../components/Header.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import { Container, Row, Col, Card, ResponsiveEmbed } from 'react-bootstrap'

function Video(props) {
    return(
    <ScrollableAnchor id={'video'}>
    <div className="page"> 
    <Container>
        <Row>
        <Header text="Kampanjasta" borderColor="#ffe749"></Header>
        </Row>
            <Row>
            <Col>       
                 <Card className="shadow">
                    <Card.Body>
                        <Card.Title>Varo viherpesua! -kampanja</Card.Title>
                        <Card.Text className="campaignText">
                        Me Sitralla uskomme kestävään kehitykseen ja perustimme somevaikuttajien kanssa yhdessä Varo viherpesua! -kampanjan. Vain toimimalla yhdessä voimme jatkaa kohti vastuullisempaa huomista.
                    </Card.Text>
                    <Card.Title>Kohteena nuoret</Card.Title>
                        <Card.Text className="campaignText">
                   Ilmastonmuutos tulee vaikuttamaan merkittävästi nuorten ja nuorten aikuisten elämään. Siksi otimme tehtäväksemme välittää tämä tieto juuri heille, jotka sitä eniten tarvitsevat. Pikamuoti ja vaateteollisuus kohdentavat suuren osan myynnistään juuri nuorille. Lue lisää kampanjasta <a href="#blogs">blogistamme</a>.
                    </Card.Text>
                    <Card.Title>Vaikuttajat</Card.Title>
                    <Card.Text className="campaignText">
                    Me Sitralla olemma tylsiä aikuisia, joten halusimme osallistaa nuoria parhaiten puhuttelevat henkilöt mukaan tärkeään tehtäväämme. Siksi tarjosimme vaikuttajille mahdollisuuden kuvata juuri sellaista sisältöä jota he kokivat merkityksellisiksi. Tuloksena oli Varo Viherpesua! -lyhytelokuva.
                    </Card.Text>
                    </Card.Body>
            </Card>
            </Col>
            <Col className="d-block">
                <h1 className="text-center">Lyhytelokuvamme</h1>
                <br></br>
                <ResponsiveEmbed aspectRatio="16by9">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/779fMc8ubOo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </ResponsiveEmbed>
            </Col>
            
            </Row>
    </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default Video