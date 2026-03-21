import { useEffect, useState } from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";

export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((r) => setTrendingProducts(r.products.slice(0, 6)));
  }, []);

  return (
    <div className="">
      <h1>Welcome To Shopify</h1>

      <div className="grid">
        {trendingProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Item product={product} />
          </Link>
        ))}
      </div>
      <Link to="/products">
        <button>View All Products</button>
      </Link>
    </div>
  );
}
