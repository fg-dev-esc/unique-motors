import { fetch } from "../../../api/api";
import { _URL_DEV } from "../../../const/url";
import { 
  setLoading, 
  setOfertaMartillo, 
  setOfertaMayor, 
  setSubastaTorre, 
  setSubastaTorres, 
  setTorreComentarios,
  setFechaFin,
  setImagenPrincipal 
} from "./auctionSlice";

export const startGetSubastaTorres = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("get", `${_URL_DEV}/Subasta/GetTorres/${id}`);
      if (response.ok) {
        dispatch(setSubastaTorres(response.data));
      }
    } catch (error) {
      console.error("No se cargó el contenido principal:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const startGetSubastaTorre = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("get", `${_URL_DEV}/Subasta/GetTorre/${id}`);
      if (response.ok) {
        dispatch(setSubastaTorre(response.data));
      }
    } catch (error) {
      console.error("No se cargó el contenido del auto:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const startOferta = (body) => {
  return async (dispatch) => {
    try {
      const res = await fetch('post', `${_URL_DEV}/Ofertas/Ofertar`, body);
      if (res.ok) {
        dispatch(setOfertaMartillo(res.data));
        return { payload: res, type: 'startOferta/fulfilled' };
      }
      return { payload: res, type: 'startOferta/rejected' };
    } catch (error) {
      console.error('Problemas con hacer la oferta:', error);
      return { payload: error, type: 'startOferta/rejected' };
    }
  };
};

export const startSetOfertaMayor = (monto, usuario) => {
  return async (dispatch) => {
    try {
      dispatch(setOfertaMayor({ monto, usuario }));
    } catch (error) {
      console.error('Problemas al traer la cantidad mayor:', error);
    }
  };
};

export const startGetTorreComentarios = (comentarios) => {
  return async (dispatch) => {
    try {
      dispatch(setTorreComentarios(comentarios));
    } catch (error) {
      console.error('Problemas con los comentarios:', error);
    }
  };
};

export const startEnviarComentario = (body) => {
  return async (dispatch) => {
    try {
      const res = await fetch('post', `${_URL_DEV}/Comentarios`, body);
      if (res.ok) {
        // Comentario agregado exitosamente
      }
    } catch (error) {
      console.log('Error enviando comentario:', error);
    }
  };
};

export const startSetFechaFin = (fechaFin) => {
  return async (dispatch) => {
    try {
      dispatch(setFechaFin(fechaFin));
    } catch (error) {
      console.error('Error setting fecha fin:', error);
    }
  };
};

export const startSetImagenPrincipal = (url) => {
  return async (dispatch) => {
    try {
      dispatch(setImagenPrincipal(url));
    } catch (error) {
      console.error('Error setting imagen principal:', error);
    }
  };
};