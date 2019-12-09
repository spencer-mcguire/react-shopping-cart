import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Item = props => {
  const { cart, removeItem } = useContext(CartContext);

  const handleDelete = e => {
    removeItem(e);
  };

  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={e => handleDelete(props.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
