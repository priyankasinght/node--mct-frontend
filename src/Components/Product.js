import React, { useEffect, useState } from "react";
import "./Product.css";
import Navbar from "./Navbar";

const Product = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [cat, setCat] = useState('electronics');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
      });
  }, [cat]);

  const select = (e) => {
    setCat(e.target.innerText)
  }

  console.log(cat)

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <div className="left-panel">
          {data.map((item, i) => {
            return <p className="items" onClick={(e) => select(e)} key={i}>{item}</p>;
          })}
        </div>
        <div className="right-panel">
          <ul className="right-panel-list">
            {data2.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;