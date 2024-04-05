import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";
import { CartContext } from "../../context/CartProvider";

const Cart = (props) => {
  const { items, totalAmount } = useContext(CartContext);
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={props.onClose}>
      <div>
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={props.onClose}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>{totalAmount.toFixed(2)}₺</span>
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
