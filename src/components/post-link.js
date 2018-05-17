import React from "react";
import Link from "gatsby-link";
import calendar from "./calendar.svg";
import { Card } from "semantic-ui-react";

const PostLink = ({ post }) => (
  <Card
    fluid
    href={post.frontmatter.path}
    header={post.frontmatter.title}
    description={post.excerpt}
    meta={post.frontmatter.date}
  />
);

export default PostLink;
