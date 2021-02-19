import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router } from 'react-router-dom';
import './components/Console-Debugging/Console-Debugging.js';
import './assets/scss/style.scss';

class App extends Component {

  componentDidMount() {
    console.todo("Write the rest of the code");
  }

  render() {
    return (
      <>

        <Nav />

        <Button href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></Button>

        { console.important("This is how we log in JSX") }

      </>
    );
  }

}

export default App;
