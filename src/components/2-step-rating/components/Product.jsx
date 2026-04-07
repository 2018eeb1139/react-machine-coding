import { Link } from "react-router-dom";

export default function Product({ id, title, thumbnail, price }) {
  return (
    <Link to={`/product-detail/${id}`}>
      <div className="product">
        <div className="title">{title}</div>
        <img src={thumbnail} alt="" />
        <div className="price">₹ {price}</div>
      </div>
    </Link>
  );
}
