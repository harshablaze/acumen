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

class App extends React.Component {
    
    state ={
        login:false,
        creds: null
    }
    chngLogin = (state,creds) => {
        this.setState({login:state,creds:creds});
    }
    logout = async () => {
        var resp = await fetch(host+"api/logout/");
        resp = await resp.json();
        console.log(resp);
        return resp;
    }
    componentDidMount() {
        console.log(host+"api/checklogin/")
        fetch(host+"api/checklogin/").then(resp => resp.json()).then(resp => {
            console.log(resp)
            this.chngLogin(resp.status,resp)
        })
    }
    render() {
        return (
            <Router>
                <Switch>
                    {
                        this.state.login?
                        (
                            <Router>
                                <Header logFn={this.chngLogin} User={this.state.creds} logout={this.logout} />
                                <Switch>
                                        <Route path="/AddUser" exact component={AddUser} />
                                        <Route path="/Facultymap" exact component={Facultymap} />
                                        <Route path="/Compare" exact component={Compare} />
                                        <Route path="/Analysis" exact component={Analysis} />
                                        <Route path="/" component={Home}/>
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

