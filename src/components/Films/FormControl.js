import React, { useState } from "react";
import { connect } from "react-redux";
import { Col, Form, Button } from "react-bootstrap";
import * as usuariosActions from "../../actions/usuariosActions";

const FormControl = ({ traerTodos }) => {
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

  return (
    <>
      <Form onSubmit={handleSubmit} className="my-4">
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
    </>
  );
};

export default connect(null, usuariosActions)(FormControl);
