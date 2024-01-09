import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setSingleProduct(res));
  }, [id]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  return (
    <div>
      <div className="single-prod-container">
        {
          <div className="prod-details">
            <img src={singleProduct.thumbnail} alt="" />
            <div className="details">
              <p>{singleProduct.title}</p>
              <p>Price: ${singleProduct.price}</p>
              <p>Description: {singleProduct.description}</p>
              <p>Rating: {singleProduct.rating}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Productdetails;
