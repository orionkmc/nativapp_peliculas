import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const Fatal = ({ msj }) => {
  const [show, setShow] = useState(true);
  let buttom = "";

  if (msj.type !== "") {
    buttom = (
      <>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setShow(false)}
            variant={`outline-${msj.type}`}
          >
            Aceptar
          </Button>
        </div>
      </>
    );
  }

  if (show) {
    return (
      <div className="w-50 m-auto">
        <Alert variant={msj.type}>
          <Alert.Heading>{msj.title}</Alert.Heading>
          <p>{msj.subtitle}</p>

          {buttom}
        </Alert>
      </div>
    );
  }
  return "";
};

export default Fatal;
