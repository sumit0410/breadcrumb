import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendProducts, setTrendProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const tprod = res.products.slice(0, 9);
        setTrendProducts(tprod);
      });
    setIsLoading(false);
  }, []);
  //   console.log(trendProducts);
  return (
    <div>
      <h1>Trending Products</h1>
      <div className="t-product-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          trendProducts?.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img className="product-img" src={product.thumbnail} alt="" />
                <p>{product.title}</p>
                <p>${product.price}</p>
              </Link>
            </div>
          ))
        )}
      </div>
      <Link to="/products">
        <button className="btn">View All Products</button>
      </Link>
    </div>
  );
};

export default Home;
