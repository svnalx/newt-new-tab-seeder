// React ↓↓↓
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '@scss/style.scss';
import '@comps/Console-Debugging/Console-Debugging';
import Nav from '@comps/Nav/Nav';
import StashGrid from '@comps/StashGrid/StashGrid';
import Button from 'react-bootstrap/Button';

class App extends Component {

  componentDidMount() {
    console.todo("Write the rest of the code");
    console.log(process.env.NODE_ENV);
  }

  render() {
    return (
      <>

        { console.important("This is how we log in JSX") }

        <Helmet>
          <meta charSet="utf-8" />
          <title>Newt | New Tab Seeder</title>
          <link rel="canonical" href="https://alex-crist.com/newt" />
        </Helmet>

        <Nav />

        <Button href="https:/alex-crist.com" target="blank" color="light-blue"><strong>Alex Crist</strong></Button>

        <StashGrid />

      </>
    );
  }
}

export default App;
