import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../data/SiteConfig';
import PostListing from '../Posts/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import ProjectListing from '../Projects/ProjectListing/ProjectListing';
import ProjectGrid from '../Projects/ProjectListing/ProjectGrid';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allWordpressPost.edges;
    const projectEdges = this.props.data.allWordpressWpProject.edges;
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <em>When in doubt</em>
        <h2>Do it all</h2>
        <div>
          <hr />
          <strong>Projects:</strong>
          <ProjectGrid projectEdges={projectEdges} />
          {/*<ProjectListing projectEdges={projectEdges} />*/}
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
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 300) {
                  ...GatsbyImageSharpResolutions_withWebp
                }
              }
              publicURL
            }
          }
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
