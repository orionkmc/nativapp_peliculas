import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const Fatal = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="w-50 m-auto">
        <Alert variant="danger">
          <Alert.Heading>Error al obtener listado!</Alert.Heading>
          <p>Por favor intente nuevamente...</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-danger">
              Aceptar
            </Button>
          </div>
        </Alert>
      </div>
    );
  }
  return "";
};

export default Fatal;
