import React from "react";
import PropTypes from "prop-types";
import { DarkModeButton } from "../App";

const Header = (props) => {
  return (
    <div id="heading">
      <div className="headingTab Title">
        <header>
          <h1>{props.title}</h1>
        </header>
      </div>
      <div className="headingTab ColorChange">
        <DarkModeButton />
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
