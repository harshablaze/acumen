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

var user = {}

class App extends React.Component {
    
    state ={
        login:false,
        creds: null
    }
    chngLogin = (state,creds) => {
        this.setState({login:state,creds:creds});
    }
    logout = async () => {
        var resp = await fetch("api/logout/");
        resp = await resp.json();
        console.log(resp);
        return resp;
    }
    componentDidMount() {
        fetch("api/checklogin/").then(resp => resp.json()).then(resp => {
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
                                        <Route path="/AddUser" component={AddUser} />
                                        <Route path="/Compare" component={Compare} />
                                        <Route path="/Analysis" component={Analysis} />
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
