import React from "react";
import Link from "gatsby-link";
import { Menu, Segment } from "semantic-ui-react";

const Header = () => (
  <header>
    <div className="headermenu">
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
          <Link to="/blog/">
            <Menu.Item name="blog" />
          </Link>
        </Menu>
      </Segment>
    </div>
  </header>
);

export default Header;
