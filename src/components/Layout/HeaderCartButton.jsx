import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/CartProvider";
import "./HeaderCartButton.css";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const totalItemsCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItemsCart}</span>
    </button>
  );
};

export default HeaderCartButton;
