import React from "react";
import Helmet from "react-helmet";

const blogpost = ({ data }) => {
  const site = data.site.siteMetadata;
  const post = data.markdownRemark;

  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} - ${site.title}`} />
      <div className="blog-post">
        <h1 className="blog-post-title">{post.frontmatter.title}</h1>
        <div className="blog-post-date">
          <i>
            Posted on <b>{post.frontmatter.date}</b>
          </i>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default blogpost;
