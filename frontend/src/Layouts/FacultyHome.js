import React from 'react';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table,Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
import Section from '../Components/Section';

class FacultyHome extends React.Component {
    state= {
        uid: this.props.user.uid,
        resp: [],
        loading: false,
    }
    componentDidMount() {
        var dat = new FormData();
        dat.append("uid",this.state.uid)

        axios.post(host+"api/getresults/",dat).then((resp) => {
            this.setState({resp:resp.data})
        })
    }
    render() {
        console.log(this.state.resp);
        
        return(
            <Section>
                <Container>
                    <h3 className="text-center">Results</h3>
                    <Table striped hover bordered responsive>
                        <thead>
                            <tr>
                                {
                                    ["Subject","Batch","Year","Sem","Section","Pass","Fail cnt"].map((val) => 
                                        <th>{val}</th>
                                    )
                                }
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.resp.map(val =>
                                    <TableRow data={val} />
                                )
                            }
                        </tbody>
                    </Table>
                </Container>
        
            </Section>
        )
    }
}

class TableRow extends React.Component {
    state= {
        mshow:false,
    }
    toggleShow = () => {
        this.setState({mshow:!this.state.mshow});
    }
    render() {
        var val = this.props.data
        return(
            <tr>
                <td>{val.sub}</td>
                <td>{val.batch}</td>
                <td>{val.year}</td>
                <td>{val.sem}</td>
                <td>{val.sec}</td>
                <td>{val.data.passper}</td>
                <td>{val.data.failcnt}</td>
                <td><Button onClick={this.toggleShow}>View More</Button></td>
                <Modal show={this.state.mshow} onHide={this.toggleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Grades</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>Grade</th>
                                    <th>no of students</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(val.data.grades).map((index) =>
                                    <tr>
                                        <td>{index}</td>
                                        <td>{val.data.grades[index]}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.toggleShow}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>        
            </tr>            
        )
    }
}

export default FacultyHome