import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from "gatsby";
// import UserInfo from '../components/Accessories/UserInfo/UserInfo'
// import Disqus from '../components/Accessories/Disqus/Disqus'
// import PostTags from '../components/Posts/PostTags/PostTags'
// import SocialLinks from '../components/Accessories/SocialLinks/SocialLinks'
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { graphql } from 'gatsby';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.wordpressPost;
    if (!postNode.id) {
      postNode.id = slug;
    }
    if (!postNode.category_id) {
      postNode.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${postNode.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <PostContainer>
          <h1>{postNode.title} </h1>
          <MetaSection>
            <div className="info">
              <h5>
                <Link
                  className="cat-link"
                  to={`category/${postNode.categories[0].name}`}
                >
                  {postNode.categories[0].name}{' '}
                </Link>
              </h5>
            </div>
          </MetaSection>

          <div dangerouslySetInnerHTML={{ __html: postNode.content }} />
          <div className="tags">
            <h4> More Like This: </h4>
          </div>
          <Divider />
          <div className="post-meta">
            {/*<SocialLinks postPath={slug} postNode={postNode} />*/}
          </div>
          {/*<UserInfo config={config} />*/}
        </PostContainer>
      </div>
    );
  }
}

const PostContainer = styled.div`
  max-width: 900px;
  margin: 100px auto;

  .tags {
    display: flex;
    flex-flow: row;
    margin-top: 50px;
    h4 {
      width: 200px;
    }
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid black;
  margin: 30px;
`;

const MetaSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  img {
    width: 96px;
    height: 96px;
  }
  .cat-link {
    font-size: 2rem;
    margin-left: 2px;
  }
`;
//
// fragment MarkdownFrontmatter on MarkdownRemark {
//   frontmatter {
//     path
//     title
//     date(formatString: "MMMM DD, YYYY")
//   }
// }

// export const pageQuery = graphql`
//   fragment wordpressPost on allWordpressPost {
//     wordpressPost {
//       date
//       slug
//       title
//       modified
//       excerpt
//       id
//       categories {
//         name
//       }
//       content
//     }
//   }
// `;

export const pageQuery = graphql`
  query PostById($id: String!) {
    wordpressPost(id: { eq: $id }) {
      date
      slug
      title
      modified
      excerpt
      id
      categories {
        name
      }
      content
    }
  }
`;
