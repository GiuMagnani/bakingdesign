import React from 'react';
import Link from 'gatsby-link';
import Header from "../components/Layout/Header/Header";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === '/') {
      header = (
        <Header />
      );
    } else {
      header = (
        <Header />
      );
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    );
  }
}

export default Template;
