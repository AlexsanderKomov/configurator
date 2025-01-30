import React from "react";
import CardProductForm from "./CardProductForm";

function CardProduct() {
  return (
    <div className="card w-full border rounded-lg ">
      <div className="card-body">
        <CardProductForm />
      </div>
    </div>
  );
}

export default CardProduct;
