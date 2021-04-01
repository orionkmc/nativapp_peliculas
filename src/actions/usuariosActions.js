import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usuariosTypes";

export const traerTodos = (form) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const API = "http://www.omdbapi.com/?t=&apikey=5eec5adc&";
    const respuesta = await axios.get(
      `${API}s=${form["title"]}&y=${form["year"]}&type=${form["type"]}&page=${form["page"]}`
    );
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: ERROR,
      payload: "Error al obtener listado. Intente nuevamente",
    });
  }
};
