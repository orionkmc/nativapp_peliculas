import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usuariosTypes";

const INITIAL_STATE = {
  films: [],
  cargando: false,
  error: "",
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      let data_film = action.payload.Search;
      let filmsMap = data_film.map((film) => {
        return [film.imdbID, film];
      });
      var filmsMapArr = new Map(filmsMap);

      return {
        ...state,
        films: [...filmsMapArr.values()],
        cargando: false,
        error: "",
      };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    default:
      return state;
  }
};

export default reducers;
