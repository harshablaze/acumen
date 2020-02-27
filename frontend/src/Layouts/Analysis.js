import React from 'react';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import Link from 'react-router-dom';
import axios from 'axios';

class Analysis extends React.Component {
    state = {
        pdf: null,
        loading: false,
        resp: {
            secdata:[],
            classdata:{},
        },
        fmap:{},
        faculty: [],
        name: "",
        // name: ""
    }
    submitFn = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        fetch("api/getfaculty/").then(res=>res.json()).then(res => {
            this.setState({faculty:res})
        })
        const data = new FormData();
        data.append('year', this.state.year);
        data.append('batch', this.state.batch);
        data.append('sem', this.state.sem);
        // data.append('name', this.state.name);
        axios.post("api/analysis/", data)
        .then(res => { // then print response status

            if(res.data.error==false) {
                var respo = JSON.parse(res.data.data);
                this.setState({loading:false,resp:respo});
            }
            else {
                console.log(res.data);
                
                this.setState({loading:false});
                alert(res.data.msg);
            }
            // console.log(respo)
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
        axios.post("api/facultymap/", data)
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
                {/* <input type="text" name="name" value={this.state.name} onChange={(e) => {this.setState({"name":e.target.value})}} /> */}
                <Button variant="secondary" disabled={this.state.loading} type="submit">
                    {
                        this.state.loading?<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />:null
                    } Retrieve
                </Button>
            </Form>
            <Container>
                {
                    this.state.resp.subjects?
                    (<div className="mt-4 text-center">

                    <h3 className="text-center">Faculty Mapping</h3>
                    <Form onSubmit={this.FacultyMap}>
                        <datalist id="faculty">
                            {
                                this.state.faculty.map(name => 
                                    <option value={name.uid}>{name.uname}</option>
                                    )
                                }
                        </datalist>
                        {
                            this.state.resp.subjects.map(subj => 
                                <Form.Group>
                                    <input className="form-control" id={subj} type="text" value={this.state.fmap[subj]} list="faculty" id={subj} onChange={
                                        (ele) => {
                                            let fmap = this.state.fmap  // creating copy of state variable jasper
                                            fmap[ele.target.id] = ele.target.value;                     // update the name property, assign a new value                 
                                            this.setState({"fmap":fmap})                               // return new object jasper object
                                        }} placeholder={"faculty for "+subj} />
                                </Form.Group>
                            )
                        }
                        <Button variant="secondary" disabled={this.state.loading} type="submit">
                            {
                                this.state.loading?<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />:null
                            } Map
                        </Button>
                    </Form>
                    </div>):null
                }
            </Container>
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

export default Analysis;