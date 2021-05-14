import React from 'react'
import Header from '../components/Header'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import { Col, Container, Row } from 'react-bootstrap'


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
                <p>c\components\Overlay.jsx
  Line 3:43:  'Image' is defined but never used                                                                                                    no-unused-vars
  Line 24:6:  React Hook useEffect has missing dependencies: 'disableScroll' and 'props.open'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
Compiled with </p>
</Col>
                <Col className="d-none d-sm-none d-md-none d-lg-block"></Col>
            </Row>
        </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default About