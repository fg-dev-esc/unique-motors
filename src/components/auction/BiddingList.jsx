import { formatCurrency } from "../../utils/formatCurrency";
import { crearFechaConMinutos } from "../../utils/createDateString";

export const BiddingList = ({ ofertas }) => {
  if (!ofertas || ofertas.length === 0) {
    return (
      <div className="bidding-list">
        <div className="text-center text-muted">
          No hay ofertas disponibles
        </div>
      </div>
    );
  }

  return (
    <div className="bidding-list">
      <h6 className="mb-3">Ofertas Recientes</h6>
      <div className="list-group">
        {ofertas.map((oferta, index) => (
          <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{formatCurrency(oferta.Monto)}</strong>
              <small className="text-muted d-block">
                {oferta.UsuarioOfertaID} • {crearFechaConMinutos(oferta.Fecha)}
              </small>
            </div>
            {index === 0 && (
              <span className="badge bg-success">Mejor oferta</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiddingList;