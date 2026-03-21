import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((r) => setProduct(r));
  }, []);

  return (
    <div className="">
      {product ? <Item product={product} /> : <p>Loading...</p>}
    </div>
  );
}
