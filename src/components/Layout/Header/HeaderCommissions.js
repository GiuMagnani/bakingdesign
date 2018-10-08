import React, { Component } from 'react';
import styled from 'styled-components';

class HeaderCommissions extends Component {
  render() {
    const { commissionsAreOpen } = this.props;

    return (
      <HeaderCommissionsDiv>
        Commission are:{' '}
        {commissionsAreOpen ? <strong>OPEN</strong> : <strong>CLOSED</strong>}
      </HeaderCommissionsDiv>
    );
  }
}

const HeaderCommissionsDiv = styled.div`
  position: absolute;
  right: 0;
  background-color: yellow;
  height: 36px;
  min-width: 200px;
  padding: 10px 15px;
  border-radius: 0 0 0 10px;
  bottom: -36px;
  z-index: -1;

  strong {
    font-weight: bold;
    color: red;
  }
`;

export default HeaderCommissions;
