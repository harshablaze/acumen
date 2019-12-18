import React from 'react';
import axios from 'axios';
import "./index.css";
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel} from 'react-bootstrap';

class App extends React.Component {
    state = {
        image: null,
        // name: ""
    }
    submitFn = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('pdffile', this.state.image);
        // data.append('name', this.state.name);
        axios.post("api/", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                <Navbar bg="dark">
                    <Container>
                        <Navbar.Brand className="text-white" href="#home">Acumen</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Form style={{marginTop:30,textAlign:"center"}} onSubmit={this.submitFn} encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label className="btn btn-outline-secondary" htmlFor="file">
                                Select File
                            </Form.Label>
                            <Form.Control id="file" className="d-none" type="file" name="image" required onChange={(e) => {this.setState({image:e.target.files[0]})}} />
                        </Form.Group>
                        {/* <input type="text" name="name" value={this.state.name} onChange={(e) => {this.setState({"name":e.target.value})}} /> */}
                        <Button variant="secondary" type="submit">
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Upload
                        </Button>
                    </Form>

                </Container>
            </div>
        );

    }
}

export default App;
