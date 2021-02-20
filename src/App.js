// React ↓↓↓
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import '@comps/Console-Debugging/Console-Debugging';
import Nav from '@comps/Nav/Nav';
import Button from 'react-bootstrap/Button';
import StashGrid from '@comps/StashGrid/StashGrid';
import '@scss/style.scss';

class App extends Component {

  componentDidMount() {
    console.todo("Write the rest of the code");
    console.log(process.env.NODE_ENV);
  }

  render() {
    return (
      <>

        <Nav />

        <Button href="https:/alex-crist.com" target="blank" color="light-blue"><strong>Alex Crist</strong></Button>

        { console.important("This is how we log in JSX") }

        <StashGrid />

      </>
    );
  }

}

export default App;
