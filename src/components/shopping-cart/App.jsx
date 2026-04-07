import { useState } from "react";
import "./styles.css";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    img: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
    img: "https://picsum.photos/id/1/5000/3333",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    img: "https://picsum.photos/id/2/5000/3333",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (product) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === product.id);
      if (item) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Number(qty) } : p)),
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container">
      <h2>Products</h2>

      {initialProducts.map((p) => (
        <div key={p.id} className="product">
          <img src={p.img} alt="" />
          <span>
            {p.name} - ₹{p.price}
          </span>
          <button onClick={() => addToCart(p)}>Add to cart</button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.length === 0 && <p>No items</p>}

      {cart.map((item) => (
        <div key={item.id} className="cartItem">
          <span>{item.name}</span>

          <input
            type="number"
            value={item.qty}
            min="1"
            onChange={(e) => updateQty(item.id, e.target.value)}
          />

          <span>₹{item.price * item.qty}</span>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
