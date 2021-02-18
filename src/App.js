import React, { Component } from "react";
import Nav from "./components/Nav/Nav.js";
import Buttonnnn from 'react-bootstrap/Button';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="test">
        <Nav />
        <Buttonnnn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></Buttonnnn>
      </div>
    );
  }
}

export default App;
