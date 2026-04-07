import Product from "./Product";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/data.json";
import Stepper from "./Stepper";
import Review from "./Review";
import StarRating from "./StarRating";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const STEPS = [
    {
      label: "Rating",
      content: <StarRating />,
    },
    {
      label: "Review",
      content: <Review />,
    },
  ];
  useEffect(() => {
    setProduct(data.products[id - 1]);
  }, [id]);
  return (
    <div className="product-detail-container">
      {/* details */}
      <Link to="/">Back</Link>
      <div className="details">
        <Product {...product} />
      </div>
      <div className="review">
        <Stepper steps={STEPS} />

        {/* Rating */}

        {/* Review */}
      </div>
    </div>
  );
}
