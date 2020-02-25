import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return(
            <Navbar expand="sm" bg="dark" varient="dark">
                <Container>
                    <Navbar.Brand className="text-white">Acumen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />  
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link text-white" to="/">Home</Link>
                            <Link className="nav-link text-white" to="/Compare">Compare</Link>
                            <Link className="nav-link text-white" to="/Analysis">Analysis</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;