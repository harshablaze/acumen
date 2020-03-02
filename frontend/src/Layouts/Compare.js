import React from "react";
import { Container, Row, Col, Form ,Button,Spinner,Table} from "react-bootstrap";
import axios from 'axios';
import {BarChart,XAxis,Legend,Tooltip,Bar,CartesianGrid,YAxis} from 'recharts';
import host from '../Host'

class Compare extends React.Component {
    state = {
        loading: false,
        resp: [{
            secdata:[],
            classdata:{},
        },{
            secdata:[],
            classdata:{},
        }],
        loaded: false
    }
    submitFn = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        var data = new FormData();
        data.append("batch1",this.state.batch1);
        data.append("batch2",this.state.batch2);
        data.append("year",this.state.year);
        data.append("sem",this.state.sem);
        axios.post(host+"api/compare/", data, { 
        })
        .then(res => { 
            if(!res.data.error){
                var data = []
                res.data.data.forEach(element => {
                    data.push(JSON.parse(element));
                });
                // console.log(typeof res.data,res.data,res.data[0])
                this.setState({loading:false,resp:data,loaded:true});
            }
            else {
                this.setState({loading:false});
                alert(res.data.msg);
            }
        })
    }
    render() {
        let graph = [];
        let subjs = [];
        if(this.state.loaded) {
            this.state.resp[0].classdata.subjects.forEach(element => {
                subjs.push(element.name);
            });
            subjs.forEach((subj,ind) => {
                let obj = {};
                obj.name = subj;
                obj[this.state.batch1] = this.state.resp[0].classdata.subjects[ind].passper;
                obj[this.state.batch2] = this.state.resp[1].classdata.subjects[ind].passper;
                graph.push(obj);
            })
        }
        return(
            <Container fluid>
                <Form onSubmit={this.submitFn} style={{marginTop:30,textAlign:"center"}}>
                    <Row>
                        <Col xs={6}>
                            <Form.Group>
                                <Form.Control id="batch1" type="number" name="batch1" placeholder="Date of Join Batch 1" required onChange={(e) => {
                                    this.setState({batch1:e.target.value})}
                                } />
                            </Form.Group>           
                        </Col>
                        <Col xs={6}>
                            <Form.Group>
                                <Form.Control id="batch2" type="number" name="batch2" placeholder="Date of Join Batch 2" required onChange={(e) => {
                                    this.setState({batch2:e.target.value})}
                                } />
                            </Form.Group>     
                        </Col>
                    </Row>
                    <Form.Group>
                    <Form.Control as="select" id="year" type="number" name="Year" placeholder="Year" required onChange={(e) => {
                            this.setState({year:e.target.value})}
                        } >
                            <option selected disabled>Select Year</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" id="sem" type="number" name="sem" placeholder="Sem" required onChange={(e) => {
                            this.setState({sem:e.target.value})}
                        }>
                            <option selected disabled>Select Sem</option>
                            <option>1</option>
                            <option>2</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="secondary" disabled={this.state.loading} type="submit">
                    {
                        this.state.loading?<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />:null
                    } Compare
                    </Button>
                </Form>
                <Row>
                    <Col md={6}>
                        {   
                            
                            this.state.resp[0]!={}?(
                            this.state.resp[0].secdata.map((val,ind) =>
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
                                this.state.resp[0].classdata.passper?
                                    <h2 style={{textAlign:"center"}}>Overall Pass Percentage: {this.state.resp[0].classdata.passper}</h2>:null
                            }
                        </Container>
                    </Col>
                    <Col md={6}>
                    {   
                            this.state.resp[1]!={}?(
                            this.state.resp[1].secdata.map((val,ind) =>
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
                                this.state.resp[1].classdata.passper?
                                    <h2 style={{textAlign:"center"}}>Overall Pass Percentage: {this.state.resp[1].classdata.passper}</h2>:null
                            }
                        </Container>
                    </Col>
                </Row>
                {
                    this.state.loaded?
                        <Row>
                            <Col xs={12} className="text-center">
                                <BarChart className="text-center" width={window.innerWidth-100} height={250} data={graph}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey={this.state.batch1} fill="#8884d8" />
                                    <Bar dataKey={this.state.batch2} fill="#82ca9d" />
                                </BarChart>
                            </Col>
                        </Row>:null
                }
            </Container>
        );
    }
}
export default Compare;