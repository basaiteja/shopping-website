import "./ProductCard.css";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const { id, name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false); // Initialize state properly

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);
    setIsInCart(!!productIsInCart); // Set isInCart based on whether the product is in the cart
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>Remove</button>
        ) : (
          <button className="add" onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
