import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Link to={`/`}>
        <Navbar.Brand>
          <img
            alt=""
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default Header;
