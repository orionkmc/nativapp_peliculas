import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Navbar bg="dark" variant="dark">
        <span className="text-light">
          <a href="mailto:orionkmc@gmail.com">Desarrollo web:</a> @orionkmc
        </span>
      </Navbar>
    </footer>
  );
};

export default Footer;
