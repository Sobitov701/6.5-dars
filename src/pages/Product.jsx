import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../pages/pages.css";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">Error: {error.message}</h2>;

  return (
    <section className="product-container">
      {product && (
        <div className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-img"
          />
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-desc">{product.description}</p>
            <p className="product-price">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="product-category">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="product-brand">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="product-stock">
              <strong>Stock:</strong> {product.stock} left
            </p>
            <p className="product-rating">
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;
