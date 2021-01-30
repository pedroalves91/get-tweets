import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <TwitterIcon className="twitter-icon" fontSize="large" />
        <h1>Get Tweets</h1>
      </nav>
    </div>
  );
};

export default Header;
