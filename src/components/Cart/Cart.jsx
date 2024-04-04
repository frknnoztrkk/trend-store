import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";

const Cart = (props) => {
  const cartitems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={props.onClose}>
      <div >
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={props.onClose}>
            X
          </a>
        </div>
        {cartitems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>10₺</span>
        </div>
        <div className="actions">
          <button className="cart-order">Sipariş ver</button>
          <button className="cart-clear">Temizle</button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default Cart;
