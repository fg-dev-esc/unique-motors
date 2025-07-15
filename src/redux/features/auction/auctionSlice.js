import { createSlice } from '@reduxjs/toolkit';

export const auctionSlice = createSlice({
    name: 'auction',
    initialState: {
      subastaTorres:{},
      subastaTorre:{},
      ofertaMartillo:{},
      ofertaMayor:{
        monto:0, 
        usuario:''
      },
      comentarios:[],
      imgPrincipal:'',
      fechaFin:0,
      loading:false,
      loadingOferta: false,
      errorOferta: null,
      ofertas: [],
      tiempoRestante: null
    },
    reducers: {
      setSubastaTorres: (state, {payload}) => {
        state.subastaTorres = payload;
      },
      setSubastaTorre: (state, {payload}) => {
        state.subastaTorre = payload;
        state.imgPrincipal = payload.urlImgPrincipal;
      },
      setOfertaMartillo:(state, {payload}) => {
        state.ofertaMartillo = payload;
      },
      setOfertaMayor:(state, {payload}) =>{
        state.ofertaMayor.monto = payload.monto;
        state.ofertaMayor.usuario = payload.usuario;
      },
      setTorreComentarios:(state, {payload}) => {
        state.comentarios = payload;
      },
      setFechaFin:(state, {payload}) => {
        state.fechaFin = payload;
      },      
      setImagenPrincipal:(state, {payload})=>{
        state.imgPrincipal = payload;
      },
      setLoading:(state, {payload}) =>{
        state.loading = payload;
      },
      setLoadingOferta: (state, { payload }) => {
        state.loadingOferta = payload;
      },
      setErrorOferta: (state, { payload }) => {
        state.errorOferta = payload;
      },
      setOfertas: (state, { payload }) => {
        state.ofertas = payload;
      },
      setTiempoRestante: (state, { payload }) => {
        state.tiempoRestante = payload;
      },
      addOferta: (state, { payload }) => {
        state.ofertas.unshift(payload);
        if (state.ofertas.length > 10) {
          state.ofertas = state.ofertas.slice(0, 10);
        }
      },
      clearAuctionData: (state) => {
        state.subastaTorre = {};
        state.ofertaMayor = { monto: 0, usuario: '' };
        state.fechaFin = 0;
        state.comentarios = [];
        state.ofertas = [];
        state.errorOferta = null;
        state.tiempoRestante = null;
      }
    }
});


// Action creators are generated for each case reducer function
export const { 
  setSubastaTorres, 
  setSubastaTorre, 
  setOfertaMartillo, 
  setOfertaMayor, 
  setTorreComentarios, 
  setFechaFin, 
  setImagenPrincipal, 
  setLoading,
  setLoadingOferta,
  setErrorOferta,
  setOfertas,
  setTiempoRestante,
  addOferta,
  clearAuctionData
} = auctionSlice.actions;
