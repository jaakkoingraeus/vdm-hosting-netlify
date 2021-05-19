import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../ico/sitraLogo.svg'
function NavbarContainer(props) {
    return(
<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Navbar.Brand href="#frontpage" className="p-lg-3 p-sm-2">
        <img width="125" src={Logo} alt="Sitra"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#search" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Vihertutka</Nav.Link>
            <Nav.Link href="#video" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Kampanja</Nav.Link>
            <Nav.Link href="#campaignInfo" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Viherpesu</Nav.Link>
            <Nav.Link href="#blogs" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Blogit</Nav.Link>
            <Nav.Link href="#comments" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Keskustelu</Nav.Link>
            <Nav.Link href="#about" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Meistä</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
    )
};

export default NavbarContainer