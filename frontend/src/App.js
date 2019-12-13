import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
// import './App.css';

class App extends React.Component {
    state = {
        image: null,
        // name: ""
    }
    submitFn = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('pdffile', this.state.image);
        // data.append('name', this.state.name);
        axios.post("api/", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.log(res)
        })
    }
    render() {
        return (
            <div className="App">
                <form onSubmit={this.submitFn} encType="multipart/form-data">
                    {/* <input type="text" name="name" value={this.state.name} onChange={(e) => {this.setState({"name":e.target.value})}} /> */}
                    <input type="file" name="image" onChange={(e) => {this.setState({image:e.target.files[0]})}} />
                    <input type="submit" />
                </form>                
            </div>
        );

    }
}

export default App;
