import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log(this.props.links);
    return (
      <header>
        <a href="/">BAKING DESIGN CRAFTS</a>
        <div>
          <a href="/work">Work</a>
          <a href="/about-me">About Me</a>
          <a href="/courses">Courses</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
      </header>
    )
  }
}

export default Header;