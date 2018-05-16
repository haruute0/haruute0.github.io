import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog/">Blog</Link>
    </nav>
  </div>
);

export default Header;
