import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";

import "./component/custom.css";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title}>
      <meta name="viewport" content="initial-scale=1" />
    </Helmet>

    <div
      style={{
        margin: "0 auto",
        maxWidth: 750,
        padding: "1.25rem 1.5rem"
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
