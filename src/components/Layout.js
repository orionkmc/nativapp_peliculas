import React from "react";
import Header from "./General/Header";
import Footer from "./General/Footer";
import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: "5rem" }}>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer />;
    </>
  );
};

export default Layout;
