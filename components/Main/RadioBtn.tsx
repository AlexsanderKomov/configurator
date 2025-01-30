import React from "react";

import { IRadioBtnProps } from "@/interfase";

function RadioBtn({ name, id }: IRadioBtnProps) {
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
