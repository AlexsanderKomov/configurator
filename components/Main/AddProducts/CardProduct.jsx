import React from "react";
import CardProductForm from "./CardProductForm";

function CardProduct({ type }) {
  return (
    <div className="card w-full border rounded-lg ">
      <div className="card-body">
        <CardProductForm />
      </div>
    </div>
  );
}

export default CardProduct;
