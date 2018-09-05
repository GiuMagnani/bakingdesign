import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ProjectListing from '../Projects/ProjectListing/ProjectListing';

class Work extends React.Component {
  render() {
    const getCategories = () => {
      let categories = [];
      this.props.data.allWordpressWpProject.edges.map(work => {
        work.node.categories.map(category => {
          categories = [...categories, ...category];
        });
      });
      return categories;
    };
    console.log(getCategories());
    const projectList = this.props.data.allWordpressWpProject.edges;
    return (
      <div>
        categories:
        <ul>
          {getCategories().map((category, key) => (
            <li key={key}>{category.name}</li>
          ))}
          <li />
        </ul>
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
