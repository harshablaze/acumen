import React from 'react';
import {Navbar,Button,Spinner,Card,Container,Row,Col,NavDropdown,Nav,Form, FormLabel,Table} from 'react-bootstrap';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

class Section extends React.Component {
    render() {
        return(
            <div className="mt-4">
                {this.props.children}
            </div>
        )
    }
}

export default Section