import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../pages/pages.css";

function Home() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=194"
  );

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">Error: {error.message}</h2>;

  return (
    <section className="products">
      {data?.products?.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img"
          />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-price">${product.price}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Home;
