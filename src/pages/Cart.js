import { useCart } from '../context/CartContext';
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  const { total, cartList } = useCart(); 
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / $ {total.toFixed(2)}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
