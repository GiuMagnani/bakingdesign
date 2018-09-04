import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../data/SiteConfig';
import PostListing from '../Posts/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import ProjectListing from '../Projects/ProjectListing/ProjectListing';
// import TopNavigation from '../components/Layout/Navigation/Navigation'

class Index extends React.Component {
  render() {
    console.log(this.props.data);
    const postEdges = this.props.data.allWordpressPost.edges;
    const projectEdges = this.props.data.allWordpressWpProject.edges;
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div>
          <hr />
          <strong>Projects:</strong>
          <ProjectListing projectEdges={projectEdges} />
          <hr />
          <strong>Posts:</strong>
          <PostListing postEdges={postEdges} />
          <hr />
        </div>
      </div>
    );
  }
}

export default Index;

// TODO:
// featured_media {
//   source_url
// }

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          date
          slug
          title
          modified
          excerpt
          id
          author {
            name
          }
          categories {
            name
          }
          content
        }
      }
    }
    allWordpressWpProject {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
