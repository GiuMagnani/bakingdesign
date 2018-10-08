import React from "react";
import Img from 'gatsby-image';
import styled from 'styled-components';

export default class InstagramFeed extends React.Component {
  render() {
    const { instagramPosts } = this.props;
    return (
      <PostsContainer>
        {
          instagramPosts.map((post, index) => {
            return (
              <PostImg href={post.node.link} key={index}>
                <Img sizes={post.node.localImage.childImageSharp.fluid} alt={post.node.caption.text} />
              </PostImg>
            )
          })
        }
      </PostsContainer>
    )
  }
}

const PostsContainer = styled.div`
  display: flex;
`;

const PostImg = styled.a`
  width: 25%;
  height: 250px;
`;