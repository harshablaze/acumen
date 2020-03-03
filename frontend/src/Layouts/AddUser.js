import React from 'react';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
class AddUser extends React.Component {
    state = {
        uname:"",
        password:"",
        email:"",
        loa:""
    }
    submitFn = (e) => {
        e.preventDefault();
        console.log(this.state);
        var data = new FormData();
        data.append("token",this.props.user.token)
        data.append("uid",this.props.user.uid)
        data.append("uname",this.state.uname)
        data.append("password",this.state.password)
        data.append("email",this.state.email)
        data.append("loa",this.state.loa)
        axios.post(host+"api/adduser/", data)
        .then(res => { // then print response status
            if(res.data.error==false) {
                alert("User Succesfully added");
            }
            else {
                alert(res.data.msg);
            }
        })
    }
    render() {
        var chngval = (e) => {
            this.setState({[e.target.name]:e.target.value})
        }
        return(
            <Container className="mt-4">
                <h3 className="text-center">Add User</h3>
                <Form onSubmit={this.submitFn} className="mt-3 text-center">
                    <Form.Group>
                        <Form.Control type="text" name="uname" placeholder="Username" value={this.state.uname} onChange={chngval} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" name="email" placeholder="Email" value={this.state.email} onChange={chngval}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text"  name="password"type="password" value={this.state.password} placeholder="Password" onChange={chngval}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" name="loa" onChange={chngval}>
                            <option disabled selected>Select access</option>
                            {
                                ["Faculty","HOD","Admin"].map((val,ind) => 
                                    <option value={ind} >{val}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit">Add User</Button>
                </Form>
            </Container>
        )
    }
}
export default AddUser;