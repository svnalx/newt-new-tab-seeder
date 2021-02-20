import React, { Component } from 'react';
import Theme from '@comps/Theme/Theme';
import './Stash.scss';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

{/* https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h
const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;
*/}

//const Stash = () => {
class Stash extends Component {
  constructor(props){
      super(props);
      console.log(this.props);
    }
  render() {
    return (

      <div className="stash">

        <Container bsPrefix="sm" fluid>
          container
        </Container>

        {/*
        <Theme>
          <Container>
            <Heading isHeading={true}>Hello World</Heading>
            <h2>By the power of styled-components!</h2>
          </Container>
        </Theme>
        */}

      </div>

    )
  }
}

export default Stash;
