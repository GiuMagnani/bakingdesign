import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

class ProjectListing extends React.Component {
  getProjects() {
    console.log(this.props.projectEdges);
    return this.props.projectEdges.map(postEdge => {
      return {
        path: `/${postEdge.node.slug}`,
        // cover: postEdge.node.cover,
        title: postEdge.node.title,
        // excerpt: postEdge.node.excerpt,
        mainCategory:
          postEdge.node.categories && postEdge.node.categories[0].name,
        // authorName: postEdge.node.author.name,
        featuredImg: postEdge.node.featured_media
          ? postEdge.node.featured_media.source_url
          : false,
      };
    });
  }

  getCategories() {
    let categories = [];
    this.props.projectEdges.map(work => {
      work.node.categories.map(category => {
        if (categories.length === 0) return categories.push(category);

        categories.map(savedCategory => {
          if (savedCategory.name !== category.name) categories.push(category);
        });
      });
    });
    return categories;
  }



  render() {



    console.log(this.props);
    const projectList = this.getProjects();



    return (
      <div>
        <ul>
          {this.getCategories().map((category, key) => (
            <li key={key}>{category.name}</li>
          ))}
        </ul>







        {/* Your post list here. */
        projectList.map(post => (
          <PostListContainer key={post.path}>
            <Link className="post-link" to={post.path} key={post.title}>
              {post.featuredImg && (
                <img
                  src={post.featuredImg}
                  alt={post.title}
                  className="featured-image"
                />
              )}
              <h3>{post.title}</h3>
              <h5>{post.mainCategory}</h5>
              {/*<h5>*/}
              {/*{post.date} in {post.mainCategory} by {post.authorName}*/}
              {/*</h5>*/}
              {/*<div dangerouslySetInnerHTML={{ __html: post.excerpt }} />*/}
            </Link>
          </PostListContainer>
        ))}
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

export default ProjectListing;
