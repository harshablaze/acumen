import React from 'react';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Section from '../Components/Section';
import host from '../Host';

class Facultymap extends React.Component {
    state = {
        loading: false,
        faculty: [],
        dead:false
    }
    componentDidMount() {
        if(!this.props.location.state.resp){
            this.setState({dead:true});
            return;
        }
        fetch(host+"api/getfaculty/").then(res=>res.json()).then(res => {
            this.setState({faculty:res})
        })
    }
    render() {
        if(this.state.dead==true) {
            // alert("Cant access this page direct  e4 v 5rdx")
            return(<Redirect to="/" />)
        }
         console.log(this.state);
         console.log(this.props);
        return(
            <Container className="mt-2 mb-2">
                    <datalist id="faculty">
                        {
                            this.state.faculty.map(name => 
                                <option value={name.uid}>{name.uname}</option>
                            )
                        }
                    </datalist>
                {
                    ["A","B","C"].map((val) =>
                        <Section>
                            <MapComponent data={this.props.location.state} section={val} />
                        </Section>
                    )
                }

            </Container>
        )
    }
}

class MapComponent extends React.Component {
    state = {
        loading: false,
        resp: {
            secdata:[],
            classdata:{},
        },
        fmap:{},
        section:""
    }
    componentDidMount() {
        this.setState({resp:this.props.data.resp,batch:this.props.data.batch,year:this.props.data.year,sem:this.props.data.sem,section:this.props.section})
        
    }
    FacultyMap = (e) => {
        e.preventDefault();
        console.log(this.state.fmap);
        const data = new FormData();
        data.append("batch",this.state.batch)
        data.append("sem",this.state.sem)
        data.append("year",this.state.year)
        data.append("section",this.state.section)
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
        console.log(this.state);
        return(
            <Container>
            {
                this.state.resp.subjects?
                (<div className="mt-4 text-center">

                <h3 className="text-center">Faculty Mapping: {this.props.section}</h3>
                <Form onSubmit={this.FacultyMap}>

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
        );
    }
}

export default Facultymap