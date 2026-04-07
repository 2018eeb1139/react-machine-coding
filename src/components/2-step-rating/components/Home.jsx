import { products } from "../data/data.json";
import Product from "./Product";

export default function Home() {
  return (
    <div className="container">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
