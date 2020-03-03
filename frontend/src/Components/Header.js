import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import Axios from 'axios';
import host from '../Host';

class Header extends React.Component {
    logout = () => {
        this.props.logout();
        
    }
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
                            <NavDropdown className="text-white" title="User Mgmnt" id="drop2">
                                <NavDropdown.Item as={Link} to="/AddUser">Add User</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="text-white" title={this.props.User?this.props.User.uname:"User"} id="drop1">
                                <Button className="dropdown-item text-black" onClick={this.logout} variant="link">Logout</Button>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;