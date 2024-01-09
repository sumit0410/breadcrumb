import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
    setIsLoading(false);
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      <div className="t-product-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          Products?.products?.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img className="product-img" src={product.thumbnail} alt="" />
                <p>{product.title}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Productlist;
