import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log(this.props.links);
    return (
      <header>
        <a href="/">BAKING DESIGN CRAFTS</a>
        <div>
          <a href="/work">Work</a>
          {
            this.props.links.map((link, key) => (
              <a href={`/${link.node.slug}`} key={key}>{link.node.title}</a>
            ))
          }
        </div>
      </header>
    )
  }
}

export default Header;