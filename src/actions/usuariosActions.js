import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usuariosTypes";

export const traerTodos = (form) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const API_KEY = "5eec5adc";
    const API = `http://www.omdbapi.com/?t=&apikey=${API_KEY}&`;
    const respuesta = await axios.get(
      `${API}s=${form["title"]}&y=${form["year"]}&type=${form["type"]}&page=${form["page"]}`
    );
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Error al obtener listado. Intente nuevamente",
    });
  }
};
