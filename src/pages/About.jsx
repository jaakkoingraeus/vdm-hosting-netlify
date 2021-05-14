import React from 'react'
import Header from '../components/Header'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import { Col, Container, Row } from 'react-bootstrap'
import {FaFacebook, FaInstagram, FaLinkedin, FaSlideshare, FaTwitter, FaYoutube} from 'react-icons/fa'

function About(props) {
    return(
    <ScrollableAnchor id={'about'}>
    <div className="page">
        <Container>
            <Row>
                <Col>
                <Header text ="Tietoa meistä" borderColor = "#777777"></Header>
                </Col>
                <Col className="d-none d-sm-none d-md-none d-lg-block"></Col>
            </Row>
            <Row>
            <Col>
           <h4>Ota yhteyttä</h4>
<p>Suomen itsenäisyyden juhlarahasto Sitra<br/>
Itämerenkatu 11-13, PL 160,<br/>
00181 Helsinki<br/>
<br/>
Puhelin +358 294 618 991<br/>
Sähköpostiosoite<br/>
etunimi.sukunimi@sitra.fi tai sitra@sitra.fi</p> 
<br/>
<div className="d-flex justify-content-around">
        <a href="https://www.facebook.com/SitraFund/">
            <FaFacebook size="3em"/>
        </a>
        <a href="https://www.instagram.com/sitrafund">
            <FaInstagram size="3em"/>
        </a>
        <a href="https://twitter.com/sitrafund">
            <FaTwitter size="3em"/>
        </a>
        <a href="https://www.youtube.com/user/sitrafund">
            <FaYoutube size="3em"/>
        </a>
        <a href="https://www.linkedin.com/company/sitra">
            <FaLinkedin size="3em"/>
        </a>    
        <a href="https://www.slideshare.net/SitraFund/">
            <FaSlideshare size="3em"/>
        </a>    
</div>
<br/>
<h5> This page is not created or endorsed by Sitra</h5>
            <p>This page is a mockup page for Aalto University course TU-C9291 and is for educational purposes only</p>
       </Col>
            <Col className="d-none d-sm-none d-md-none d-lg-block"></Col>
            </Row>
        </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default About