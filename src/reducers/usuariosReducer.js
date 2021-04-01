import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usuariosTypes";

const INITIAL_STATE = {
  films: [],
  cargando: false,
  error: {
    type: "",
    title: "Escribe en el filtro para realizar una busqueda.",
    subtitle: "",
  },
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      let data = [];
      let error = "";
      let data_film = action.payload.Search;

      if (data_film) {
        let filmsMap = data_film.map((film) => {
          return [film.imdbID, film];
        });
        var filmsMapArr = new Map(filmsMap);
        data = [...filmsMapArr.values()];
      } else {
        error = {
          type: "info",
          title: "Ninguna concidencia!",
          subtitle: "Por favor intente nuevamente...",
        };
      }

      return {
        ...state,
        films: data,
        cargando: false,
        error: error,
      };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return {
        ...state,
        error: {
          type: "danger",
          title: "Error al obtener listado!",
          subtitle: "Por favor intente nuevamente...",
        },
        cargando: false,
      };
    default:
      return state;
  }
};

export default reducers;
