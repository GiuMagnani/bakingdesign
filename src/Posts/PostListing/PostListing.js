import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import Img from 'gatsby-image';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: `/${postEdge.node.slug}`,
        cover: postEdge.node.cover,
        title: postEdge.node.title,
        excerpt: postEdge.node.excerpt,
        mainCategory: postEdge.node.categories[0].name,
        featured_media: postEdge.node.featured_media.localFile.childImageSharp
          .sizes
          ? postEdge.node.featured_media.localFile.childImageSharp.sizes
          : false,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        <PostListContainer>
          {/* Your post list here. */
          postList.map(post => (
            <PostItem className="post-link" to={post.path} key={post.title}>
              {post.featured_media && (
                <FeaturedImage sizes={post.featured_media} alt={post.title} />
              )}
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </PostItem>
          ))}
        </PostListContainer>
      </div>
    );
  }
}

const PostListContainer = styled.div`
  display: flex;
`;

const PostItem = styled(Link)`
  //width: 20%;
  width: calc(33.33% - 30px);
  display: inline-block;
  text-decoration: none;
  color: black;
  margin: 15px;
  overflow: hidden;
  
  h3 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  div {
    font-size: 14px;
  }
`;

const FeaturedImage = styled(Img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export default PostListing;
