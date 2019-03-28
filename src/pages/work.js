import React from 'react';
// import styled from 'styled-components';
// import { Link } from "gatsby";
// import ProjectListing from '../Projects/ProjectListing/ProjectListing';
import ProjectGrid from "../Projects/ProjectListing/ProjectGrid";
import { graphql } from 'gatsby';

export default class Work extends React.Component {
  render() {
    // const getCategories = () => {
    //   let categories = [];
    //   this.props.data.allWordpressWpProject.edges.map(work => {
    //     work.node.categories.map(category => {
    //       categories = [...categories, ...category];
    //     });
    //   });
    //   return categories;
    // };
    const projectEdges = this.props.data.allWordpressWpProject.edges;
    return (
      <div>
        categories:
        {/*<ul>*/}
          {/*{getCategories().map((category, key) => (*/}
            {/*<li key={key}>{category.name}</li>*/}
          {/*))}*/}
          {/*<li />*/}
        {/*</ul>*/}
        {/*<ProjectListing projectEdges={projectList} />*/}
        <ProjectGrid projectEdges={projectEdges} location={this.props.location}/>
      </div>
    );
  }
}

// const PostListContainer = styled.div`
//   margin: 50px 0;
//
//   .featured-image {
//     width: 600px;
//     height: 200px;
//     object-fit: cover;
//     margin-bottom: 20px;
//   }
//
//   .post-link {
//     background: none !important;
//     padding: 0 !important;
//   }
// `;

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
            localFile {
              childImageSharp {
                resolutions(quality: 100, width: 300) {
                  ...GatsbyImageSharpResolutions_withWebp
                }
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
