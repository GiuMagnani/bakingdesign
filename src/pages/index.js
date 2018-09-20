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
    console.log(this.props);
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <HeroSection>
          <em>When in doubt</em>
          <h2>Do it all</h2>
          {/*<WaveContainer>*/}
          {/*<WaveDiv />*/}
          {/*<WaveDiv />*/}
          {/*</WaveContainer>*/}
        </HeroSection>
        <div>
          <strong>Projects:</strong>
          <ProjectGrid
            projectEdges={projectEdges}
            location={this.props.location}
          />
          <AboutSection></AboutSection>
          <PostListing postEdges={postEdges} />
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
const WaveContainer = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;
`;

const WaveDiv = styled.div`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
    repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  
  &:nth-of-type(2) {
    top: -175px;
    animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 30s ease -1.25s infinite;
    opacity: 1;
  }
  
  @keyframes wave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1600px);
    }
  }
  
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;

const HeroSection = styled.div`
  height: 100vh;
`;

const AboutSection = styled.div`
  height: 30vh;
  width: 100%;
  background-color: #50E3C2;
  margin-bottom: -50px;
`;

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          date
          slug
          title
          excerpt
          id
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                sizes(quality: 90, maxWidth: 600) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
              publicURL
            }
          }
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
