import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
/*import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'*/
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
            <Nav.Link href="#campaignInfo" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Kampanja</Nav.Link>
            <Nav.Link href="#blogs" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Blogit</Nav.Link>
            <Nav.Link href="#comments" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Keskustelu</Nav.Link>
            <Nav.Link href="#about" className="navLinkCustom" style={{fontSize: 21, fontWeight: 700}}>Meistä</Nav.Link>
            {/**<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>*/}
        </Nav>
        {/**<Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>*/}
    </Navbar.Collapse>
</Navbar>
    )
};

export default NavbarContainer