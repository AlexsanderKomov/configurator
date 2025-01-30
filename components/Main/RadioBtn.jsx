import React, { useState } from "react";

function RadioBtn({ name, id }) {
  return (
    <div className="config flex justify-center items-center">
      <label className="mr-2" htmlFor={id}>
        {name}
      </label>
      <input type="radio" name="config" id={id} />
    </div>
  );
}

export default RadioBtn;
