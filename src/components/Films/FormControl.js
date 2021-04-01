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
          <Col sm={6}>
            <Form.Group controlId="">
              <Form.Control
                name="title"
                type="text"
                placeholder="Titulo de pelicula"
                onChange={handleChange}
                value={form.title}
              />
            </Form.Group>
          </Col>
          <Col xs={4} sm={2}>
            <Form.Group controlId="">
              <Form.Control
                type="number"
                placeholder="Año"
                name="year"
                onChange={handleChange}
                min="1000"
                max="9999"
              />
            </Form.Group>
          </Col>
          <Col xs={4} sm={2}>
            <Form.Group controlId="">
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
            </Form.Group>
          </Col>
          <Col xs={4} sm={2}>
            <Form.Group controlId="">
              <Button variant="primary" type="submit" className="btn-block">
                Buscar
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};

export default connect(null, usuariosActions)(FormControl);
