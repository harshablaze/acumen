import React from 'react';
import axios from 'axios';
import "./index.css";
import {Link} from 'react-router-dom';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';

class App extends React.Component {
    state = {
        image: null,
        loading: false,
        resp: {
            secdata:[],
            classdata:{},
        },
        name: "",
        // name: ""
    }
    submitFn = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        const data = new FormData();
        data.append('pdffile', this.state.image);
        // data.append('name', this.state.name);
        axios.post("api/", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            if(res.data.error==false)
                this.setState({loading:false,resp:res.data});
            else {
                this.setState({loading:false});
                alert("Failed Processing PDF");
            }
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                <Navbar bg="dark">
                    <Container>
                        <Navbar.Brand className="text-white">Acumen</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link className="text-white" to="/">Home</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Form style={{marginTop:30,textAlign:"center"}} onSubmit={this.submitFn} encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label className="btn btn-outline-secondary" htmlFor="file">
                                {
                                    this.state.name==""?"Select File":this.state.name
                                }
                            </Form.Label>
                            <Form.Control id="file" className="d-none" type="file" name="image" required onChange={(e) => {
                                if(e.target.files[0]==undefined)
                                    return;
                                this.setState({image:e.target.files[0],name:e.target.files[0].name})}
                            } />
                        </Form.Group>
                        {/* <input type="text" name="name" value={this.state.name} onChange={(e) => {this.setState({"name":e.target.value})}} /> */}
                        <Button variant="secondary" disabled={this.state.loading} type="submit">
                            {
                                this.state.loading?<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />:null
                            } Upload
                        </Button>
                    </Form>
                    {   
                        this.state.resp!={}?(
                        this.state.resp.secdata.map((val,ind) =>
                            <Container style={{marginTop:40}}>
                                <h2 style={{textAlign:"center"}}>Section: {val.section} <sub>(Total: {val.total})</sub></h2>
                                <Table responsive striped bordered hover>
                                    <thead>
                                        <tr>
                                            {
                                                ["Subject","O","A+","A","B+","B","C","P","F","Pass Percent","Pass Count"].map((val)=> 
                                                    <th>{val}</th>
                                                )
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            val.subjects.map((val) => 
                                                <tr>
                                                    <td>{val.name}</td>
                                                    {
                                                        ["O","A+","A","B+","B","C","P","F"].map((gradd) => 
                                                            <td>{val.grades[gradd]}</td>
                                                        )
                                                    }
                                                    <td>{val.passper}</td>
                                                    <td>{val.passcnt}</td>

                                                </tr>
                                            )
                                        }
                                        <tr>
                                            {
                                                <td style={{textAlign:"center"}} colSpan="11">Section Pass Percentage: {val.passper}</td>

                                            }
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>)):null
                    }
                        <Container>
                            {
                                this.state.resp.classdata.passper?
                                    <h2 style={{textAlign:"center"}}>Overall Pass Percentage: {this.state.resp.classdata.passper}</h2>:null
                            }
                        </Container>
                    </Container>
            </div>
        );

    }
}

export default App;
