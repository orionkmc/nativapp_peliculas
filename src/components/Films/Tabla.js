import React from "react";
import { connect } from "react-redux";
import "../../css/card.css";

const Tabla = ({ films }) => {
  return (
    <>
      <div className="support-grid"></div>
      <div className="band">
        {films.map(({ imdbID, Title, Year, Type, Poster }, key) => (
          <section className="card" key={imdbID}>
            <figure
              className="thumb"
              style={{
                backgroundImage: `url(${Poster})`,
              }}
            ></figure>
            <article>
              <h1>{Title}</h1>
              <span>Año: {Year}</span>
              <span>Tipo: {Type}</span>
            </article>
          </section>
        ))}
      </div>
      <br />
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Tabla);
