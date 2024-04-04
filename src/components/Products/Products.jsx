import React from "react";
import "./Products.css"
import products from "../../productData";

const Products = () => {
    const productlist = products.map((item) => <li>{item.name}</li>)
  return (
    <main className="products-wrapper">
      <div className="products">
        {productlist}
      </div>
    </main>
  );
};

export default Products;
