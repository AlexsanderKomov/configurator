"use client";

import { useEffect } from "react";
// import Select from "react-select";
import { findNestedObjects } from "@/lib/findNestedObjects";
import { ISelectCardProductProps } from "./interface";

/** Селект */
function SelectUI(props: ISelectCardProductProps) {
  const { options } = props;

  useEffect(() => {
    findNestedObjects(options);
  }, []);

  return (
    <div>
      {/* {findNestedObjects(options).map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </div>
  );
}

export default SelectUI;
