import React from 'react';
import "./index.css";
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import Home from './Layouts/Home';
import Header from './Components/Header';
import Compare from './Layouts/Compare';
import Analysis from './Layouts/Analysis';
import Login from './Layouts/Login';


class App extends React.Component {
    
    state ={
        login:false
    }

    chngLogin = (state,creds) => {
        this.setState({login:state});
    }
    render() {
        return (
            <Router>
                <Switch>
                    {
                        this.state.login?
                        (
                            <Router>
                                <Header />
                                <Switch>
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

export default App;
