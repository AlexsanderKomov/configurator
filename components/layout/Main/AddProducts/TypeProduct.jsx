import React from "react";

function TypeProduct({ type }) {
  function handleClick() {
    console.log(type);
  }

  return <button onClick={handleClick}>{type}</button>;
}

export default TypeProduct;
