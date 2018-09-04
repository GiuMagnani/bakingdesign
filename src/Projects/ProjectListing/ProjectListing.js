import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

class ProjectListing extends React.Component {
  getProjects() {
    const Projects = [];
    this.props.projectEdges.forEach(postEdge => {
      Projects.push({
        path: `/${postEdge.node.slug}`,
        // cover: postEdge.node.cover,
        title: postEdge.node.title,
        // excerpt: postEdge.node.excerpt,
        // mainCategory: postEdge.node.categories[0].name,
        // authorName: postEdge.node.author.name,
        // featuredImg: postEdge.node.featured_media
        //   ? postEdge.node.featured_media.source_url
        //   : false,
      });
    });
    return Projects;
  }

  render() {
    const projectList = this.getProjects();
    return (
      <div>
        {/* Your post list here. */
        projectList.map(post => (
          <PostListContainer key={post.path}>
            <Link className="post-link" to={post.path} key={post.title}>
              {/*{post.featuredImg && (*/}
                {/*<img*/}
                  {/*src={post.featuredImg}*/}
                  {/*alt={post.title}*/}
                  {/*className="featured-image"*/}
                {/*/>*/}
              {/*)}*/}
              <h3>{post.title}</h3>
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
