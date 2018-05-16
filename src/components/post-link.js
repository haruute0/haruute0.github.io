import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
  <div className="PostLink">
    {post.frontmatter.date}
    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
  </div>
);

export default PostLink;
