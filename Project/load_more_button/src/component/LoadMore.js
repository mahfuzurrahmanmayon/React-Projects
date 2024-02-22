import React, { useEffect, useState } from "react";
import "./LoadMore.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  },[count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data!, Please wait...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <div class="product-info">
                  <h2>Title: {product.title}</h2>
                  <p>
                    {product.description}
                  </p>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>Discount Percentage: {product.discountPercentage}%</p>
                  <p>Rating: {product.rating}</p>
                  <p>Stock: {product.stock}</p>
                </div>
                <div class="product-info">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              </div>
              
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}

export default LoadMoreData;
