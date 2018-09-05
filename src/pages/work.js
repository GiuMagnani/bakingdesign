import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ProjectListing from "../Projects/ProjectListing/ProjectListing";

class Work extends React.Component {
  render() {
    const projectList = this.props.data.allWordpressWpProject.edges;
    return (
      <div>
        <ProjectListing projectEdges={projectList} />
      </div>
    );
  }
}

const PostListContainer = styled.div`
  margin: 50px 0;
  
  .featured-image {
    width: 600px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .post-link {
    background: none !important;
    padding: 0 !important;
  }
`;

export default Work;


export const pageQuery = graphql`
  query WorkQuery {
    allWordpressWpProject {
      edges {
        node {
          title
          slug
          categories {
            name
          }
          featured_media {
            source_url
          }
        }
      }
    }
  }
`;
