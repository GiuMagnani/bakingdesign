import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ProjectListing from '../Projects/ProjectListing/ProjectListing';

class Shop extends React.Component {
  render() {
    return (
      <div>
        <h2>shop!</h2>
      </div>
    );
  }
}

export default Shop;
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
