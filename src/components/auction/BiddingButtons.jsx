import { useDispatch, useSelector } from "react-redux";
import { startOferta } from "../../redux/features/auction/thunks";

export const BiddingButtons = () => {
  const dispatch = useDispatch();
  const { subastaTorre, ofertaMayor } = useSelector(state => state.auctionReducer);
  const { user } = useSelector(state => state.userReducer);

  const handleQuickBid = (increment) => {
    const newAmount = (ofertaMayor?.monto || 0) + increment;
    const form = {
      monto: newAmount,
      torreID: subastaTorre?.torreID,
      usuarioOfertaID: user.usuarioID,
      fecha: new Date()
    };
    dispatch(startOferta(form));
  };

  return (
    <div className="bidding-buttons">
      <div className="row justify-content-center mb-3">
        <div className="col-md-8">
          <div className="d-flex justify-content-center gap-2">
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleQuickBid(1000)}
            >
              +$1,000
            </button>
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleQuickBid(5000)}
            >
              +$5,000
            </button>
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleQuickBid(10000)}
            >
              +$10,000
            </button>
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleQuickBid(25000)}
            >
              +$25,000
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiddingButtons;