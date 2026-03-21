import { useEffect, useState } from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((r) => setProducts(r.products));
  }, []);
  return (
    <div className="">
      <h1>Product Catalogue</h1>
      <div className="grid">
        {products.map((product) => (
          <Link to={`/products/${product.id}`}>
            <Item key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
