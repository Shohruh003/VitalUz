import React from "react";
import "./OrderModalStyle.scss";
import Correct from "../../Images/correct.png";

const OrderModal = ({ setModal }) => {
  return (
    <div className="menu_model" onClick={() => setModal(false)}>
      <div className="modal_box" onClick={(e) => e.stopPropagation()}>
        <div className="modal_img">
            <img src={Correct} alt="qabul bo'ldi" />
        </div>
        <h2>Buyurtmangiz qabul qilindi!</h2>
        <h4>Buyurtmangiz 36 soat ichida yetkaziladi</h4>
        <button onClick={()=>setModal(false)} className="button">
          <span>Yopish</span>
          <div className="liquid"></div>
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
