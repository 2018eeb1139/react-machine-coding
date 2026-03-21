import "../styles.css";

export default function Item({ product }) {
  return (
    <div className="product">
      <img src={product.thumbnail} alt="" />

      <h3>{product.title}</h3>
      <span>$ {product.price}</span>
    </div>
  );
}
