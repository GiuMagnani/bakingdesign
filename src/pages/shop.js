import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ProjectListing from '../Projects/ProjectListing/ProjectListing';
import Checkout from "../components/checkout";

class Shop extends React.Component {
  render() {
    return (
      <div>
        <h2>shop!</h2>
        <Checkout />
      </div>
    );
  }
}

export default Shop;