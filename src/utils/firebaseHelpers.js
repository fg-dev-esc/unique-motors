import { doc, onSnapshot, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { db } from '../db/firebase';

// Real-time auction listener - siguiendo el patrón del template único
export const subscribeToAuction = (torreId, callback) => {
  console.log('🔥 Attempting to subscribe to Firebase auction:', torreId);
  const torreRef = doc(db, 'torres', torreId);
  
  return onSnapshot(torreRef, (documento) => {
    console.log('🔥 Firebase snapshot received for:', torreId, 'exists:', documento.exists());
    if (documento.exists()) {
      const data = documento.data();
      console.log('🔥 Firebase document data:', data);
      const fechaFin = data.fechaFin;
      const comentarios = data.comentarios?.sort((a, b) => new Date(b.Fecha) - new Date(a.Fecha)) || [];
      const ofertas = data.ofertas?.sort((a, b) => b.Monto - a.Monto) || [];
      
      console.log('🔥 Firebase comments found:', comentarios.length);
      
      callback({
        id: documento.id,
        fechaFin,
        comentarios,
        ofertas: ofertas.slice(0, 5), // Solo las top 5 ofertas
        ofertaMayor: ofertas.length > 0 ? {
          monto: ofertas[0].Monto,
          usuario: ofertas[0].UsuarioOfertaID
        } : null,
        ...data
      });
    } else {
      console.log('🔥 Firebase document does not exist for:', torreId);
    }
  }, (error) => {
    console.error('🔥 Firebase subscription error:', error);
    console.error('🔥 Error code:', error.code);
    console.error('🔥 Error message:', error.message);
  });
};

// Add bid to auction - patrón del template único
export const addBidToAuction = async (torreId, bidData) => {
  const torreRef = doc(db, 'torres', torreId);
  
  const oferta = {
    Monto: bidData.monto,
    UsuarioOfertaID: bidData.usuarioID,
    Nickname: bidData.nickname,
    Fecha: new Date().toISOString(),
    Comentario: bidData.comentario || ""
  };
  
  await updateDoc(torreRef, {
    ofertas: arrayUnion(oferta)
  });
};

// Add comment to auction - patrón del template único  
export const addCommentToAuction = async (torreId, commentData) => {
  console.log('🔥 Attempting to add comment to Firebase:', torreId, commentData);
  const torreRef = doc(db, 'torres', torreId);
  
  const comentario = {
    Comentario: commentData.comentario,
    UsuarioID: commentData.usuarioID,
    Nickname: commentData.nickname,
    Rating: commentData.rating || 5,
    Fecha: new Date().toISOString()
  };
  
  try {
    await updateDoc(torreRef, {
      comentarios: arrayUnion(comentario)
    });
    console.log('🔥 Comment added to Firebase successfully');
  } catch (error) {
    console.error('🔥 Error adding comment to Firebase:', error);
    console.error('🔥 Error code:', error.code);
    console.error('🔥 Error message:', error.message);
    throw error;
  }
};

// Real-time car listings listener
export const subscribeToCarListings = (callback) => {
  const carsRef = doc(db, 'listings', 'active');
  
  return onSnapshot(carsRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data().cars || []);
    }
  });
};

// User session management
export const updateUserSession = async (userId, sessionData) => {
  const userRef = doc(db, 'users', userId);
  
  await updateDoc(userRef, {
    lastActivity: serverTimestamp(),
    ...sessionData
  });
};