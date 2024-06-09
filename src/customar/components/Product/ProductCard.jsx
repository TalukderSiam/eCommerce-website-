// ProductCard.js
import React from "react";
import "./productCard.css"; // Import a CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem] ">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textpart bg-white p-3">
        <div>
          <h2 className="product-name">{product.brand}</h2>
          <p className="product-description">{product.title}</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="font-semibold">${product.discountedPrice}</p>
          <p className="line-through opacity-50">${product.price}</p>
          <p className="text-green-600 font-semibold">${product.discountPersent}%OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
