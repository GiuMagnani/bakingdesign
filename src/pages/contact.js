import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ProjectListing from '../Projects/ProjectListing/ProjectListing';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>contact me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore incidunt libero obcaecati similique sit.</p>
        <form name="contact" method="POST" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Contact;
//
// export const pageQuery = graphql`
//   query WorkQuery {
//     allWordpressWpProject {
//       edges {
//         node {
//           title
//           slug
//           categories {
//             name
//           }
//           featured_media {
//             source_url
//           }
//         }
//       }
//     }
//   }
// `;
