import React, { Component } from 'react';
import Logo from '../../logo-baking-design.png';
import styled from 'styled-components';

class Header extends Component {
  render() {
    console.log(this.props.links);
    return (
      <HeaderNav>
        <a href="/" className="header-logo">
        <img src={Logo} />
        </a>
        <NavLinks>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/about-me">About Me</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </NavLinks>
        <NavSocialLinks>
          <li>
            <a href="#">F</a>
          </li>
          <li>
            <a href="#">T</a>
          </li>
          <li>
            <a href="#">I</a>
          </li>
        </NavSocialLinks>
      </HeaderNav>
    );
  }
}

const HeaderNav = styled.nav`
  height: 60px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  
  .header-logo {
    height: 100%;
    
    img {
      height: 100%;
    }
  }
`;

const NavSocialLinks = styled.ul`
  li {
    display: inline-block;
    margin-right: 10px;
  }

  a {
    background-color: #9b9b9b;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    text-decoration: none;
    display: block;
    color: white;
  }
`;

const NavLinks = styled.ul`
  li {
    display: inline-block;
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    color: #9b9b9b;
  }
`;

export default Header;
