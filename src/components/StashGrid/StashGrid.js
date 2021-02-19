import React, { Component } from 'react';
import '@scss/style.scss';
import Stash from '../../components/Stash/Stash';
import Container from 'react-bootstrap/Container';

class StashGrid extends Component {
  render() {
    return (
      <Container id="StashGrid">
        <Stash />
        <Stash />
      </Container>
    )
  }
}

export default StashGrid;
