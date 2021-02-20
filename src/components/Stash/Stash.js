import React, { Component } from 'react';
import Theme from '@comps/Theme/Theme';
import './Stash.scss';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const SCcontainer = styled.div`
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

const Thingy = styled.button`
  width:500px;
  background-color:purple;
  ${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};
`;

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

          <Theme>
            <SCcontainer>sc container</SCcontainer>
            <Heading>A heading</Heading>
          </Theme>

          <Thingy>A thingy</Thingy>

        </Container>

      </div>
    )
  }
}

export default Stash;
