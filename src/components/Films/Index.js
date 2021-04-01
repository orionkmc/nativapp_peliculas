import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as usuariosActions from "../../actions/usuariosActions";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Tabla from "./Tabla";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";

const Index = ({ cargando, error, films, traerTodos }) => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    type: "",
    page: 1,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      page: 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    traerTodos(form);
  };

  const ponerContenido = () => {
    if (cargando) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal mensaje={error} />;
    }
    if (films.length === 0) {
      return <h1>Escribe en el filtro para realizar una busqueda.</h1>;
    }
    return <Tabla />;
  };

  return (
    <>
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
      <Container style={{ paddingTop: "5rem" }}>
        <Row>
          <Col>
            <h1>Buscar Peliculas</h1>
            <br />
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col xs={6}>
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="Titulo de pelicula"
                    onChange={handleChange}
                    value={form.title}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Año"
                    name="year"
                    onChange={handleChange}
                    min="1000"
                    max="9999"
                  />
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    custom
                    name="type"
                    onChange={handleChange}
                  >
                    <option value="">Todos</option>
                    <option value="movie">Peliculas</option>
                    <option value="series">Series</option>
                    <option value="episode">Episodios</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Buscar
                  </Button>
                </Col>
              </Form.Row>
            </Form>
            <br />
            {ponerContenido()}
          </Col>
        </Row>
      </Container>
      <br />
      <Navbar bg="dark" variant="dark" className="footer">
        <span className="text-light">
          <a href="mailto:orionkmc@gmail.com">Desarrollo web:</a> @orionkmc
        </span>
      </Navbar>
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Index);
