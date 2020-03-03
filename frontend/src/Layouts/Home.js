import React from 'react';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import Link from 'react-router-dom';
import axios from 'axios';
import host from '../Host'

class Home extends React.Component {
    state = {
        pdf: null,
        loading: false,
        resp: {
            secdata:[],
            classdata:{},
        },
        fmap:{},
        faculty: [],
        name:""
    }
    submitFn = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        fetch(host+"api/getfaculty/").then(res=>res.json()).then(res => {
            this.setState({faculty:res})
        })
        const data = new FormData();
        data.append('pdffile', this.state.pdf);
        data.append('year', this.state.year);
        data.append('batch', this.state.batch);
        data.append('sem', this.state.sem);
        // data.append('name', this.state.name);
        axios.post(host+"api/", data, { // receive two parameter endpoint url ,form data 
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
    FacultyMap = (e) => {
        e.preventDefault();
        console.log(this.state.fmap);
        const data = new FormData();
        data.append("batch",this.state.batch)
        data.append("sem",this.state.sem)
        data.append("year",this.state.year)
        data.append("fmap",JSON.stringify(this.state.fmap))
        axios.post(host+"api/facultymap/", data)
        .then(res => { // then print response status
            if(res.data.error==false) {
                alert("done");
            }
            else {
                alert(res.data.msg);
            }
        })
    }
    render() {
        if(this.state.fmap=={} && this.state.resp.subjects) {
            var fmap = {}
            this.state.resp.subjects.map(subj => {
                fmap[subj] = ""
            }) 
            this.setState({"fmap":fmap});
        }
        return(
            <Container>
            <Form style={{marginTop:30,textAlign:"center"}} onSubmit={this.submitFn} encType="multipart/form-data">
                <Form.Group>
                    <Form.Control id="batch" type="number" name="batch" placeholder="Date of Join" required onChange={(e) => {
                        this.setState({batch:e.target.value})}
                    } />
                </Form.Group>
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
                <Form.Group>
                    <Form.Label className="btn btn-outline-secondary" htmlFor="file">
                        {
                            this.state.name==""?"Select File":this.state.name
                        }
                    </Form.Label>
                    <Form.Control id="file" className="d-none" type="file" name="pdf" required onChange={(e) => {
                        if(e.target.files[0]==undefined)
                            return;
                        this.setState({pdf:e.target.files[0],name:e.target.files[0].name})}
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
        );
    }
}

export default Home;