import React from 'react';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table, Alert} from 'react-bootstrap';
import Link from 'react-router-dom';
import axios from 'axios';
import '../login.css';
import avatar from '../avatar.png';
import anits from '../anits.jpg';
class Login extends React.Component {
    state = {
        username:"",
        password:"",
        status:"",
        loading: false
    }
    submitFn = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        const data = new FormData();
        data.append('username', this.state.username);
        data.append('password', this.state.password);
        axios.post("api/login/", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            if(res.data.error==false){
                this.setState({loading:false,resp:res.data,status:""});
                this.props.logFn(true,res.data)
            }
            else {
                this.setState({loading:false,status:res.data.msg});
            }
        })
    }
    render() {
        var chngval = (e) => {
            this.setState({[e.target.id]:e.target.value})
        }
        return(
            <div class="container login-container">
                <div class="row">
                    <div class="col-md-6 ads">
                        <img src={anits} alt="profile_img" height="140px" width="140px;"/>
                    </div>
                    <div class="col-md-6 login-form">
                        <div class="profile-img">
                        <img src={avatar} alt="profile_img" height="140px" width="140px;"/>
                        </div>
                        <h3>Login</h3>
                        <form onSubmit={this.submitFn}>
                        <div class="form-group">
                            <input type="text" class="form-control" id="username" placeholder="Username" onChange={chngval} required/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password" onChange={chngval} required/>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign In</button>
                        </div>
                        <div class="form-group forget-password">
                            <a href="#">Forget Password</a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            // <div className="login text-center">
            //     <div className="login-container">
            //         <Form onSubmit={this.submitFn}>
            //             <h3>Acumen - Login</h3>
            //             <Form.Group>
            //                 <Form.Control id="username" type="text" placeholder="Username" value={this.state.username} onChange={chngval} />
            //             </Form.Group>
            //             <Form.Group>
            //                 <Form.Control id="password" type="password" placeholder="Password" value={this.state.password} onChange={chngval} />
            //             </Form.Group>
            //             {
            //                 !!this.state.status&&!this.state.loading?
            //                     <Alert variant={"danger"}>
            //                         {this.state.status}
            //                     </Alert>:null
            //             }
            //             <Form.Group>
            //                 <Button variant="outline-info" type="submit">Login</Button>
            //             </Form.Group>
            //         </Form>
            //     </div>
            // </div>
        )

    }
}

export default Login;