import React from 'react';
import "./index.css";
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import Home from './Layouts/Home';
import Header from './Components/Header';
import Compare from './Layouts/Compare';
import Analysis from './Layouts/Analysis';
import Login from './Layouts/Login';
import AddUser from './Layouts/AddUser';
import Facultymap from './Layouts/Facultymap';
import host from './Host';
import User from './User';
import Axios from 'axios';
import FacultyHome from './Layouts/FacultyHome';

class App extends React.Component {
    
    state ={
        login:false,
        creds: null,
        user: null
    }
    chngLogin = (state,user) => {
        this.setState({login:state,user:user});
    }
    logout = async () => {
        this.setState({login:false,user:await this.state.user.logout()});
    }
    componentDidMount() {
        User.prototype.restorelogin().then((resp) => {
            this.setState({user:resp})
            console.log(resp)
        })
        // console.log(host+"api/checklogin/")
        // fetch(host+"api/checklogin/").then(resp => resp.json()).then(resp => {
        //     console.log(resp)
        //     this.chngLogin(resp.status,resp)
        // })
    }
    render() {
        console.log(this.state.user)
        return (
            <Router>
                <Switch>
                    {
                        this.state.user!=null?
                        (
                            <Router>
                                <Header logFn={this.chngLogin} User={this.state.user} logout={this.logout} />
                                <Switch>
                                        <Route path="/AddUser" exact render={props => <AddUser {...props} user={this.state.user} />} />
                                        <Route path="/Facultymap" exact component={Facultymap} />
                                        <Route path="/Compare" exact component={Compare} />
                                        <Route path="/Analysis" exact component={Analysis} />
                                        {
                                            this.state.user.access==1||this.state.user.access==0?
                                                <Route path="/" render={props => <FacultyHome {...props} user={this.state.user} />}/>:
                                                <Route path="/" render={props => <Home {...props} user={this.state.user} />}/>
                                        }
                                </Switch>
                            </Router>
                        ):
                        <Route path="/" render={props => <Login {...props} logFn={this.chngLogin} />} />

                    }
                </Switch>
            </Router>

        );

    }
}

// export 

export default App;

