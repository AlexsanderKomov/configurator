import React from "react";
import { TYPE_OF_SISTEM } from "./constsnts";
function TypeProductGroup({ type }: { type: string }) {
  return (
    <ul className="flex gap-x-5">
      {TYPE_OF_SISTEM.map((item) => {
        if (item.type === type) {
          return item.option.map((option, index) => {
            const key = `type_${option}_${index}`;

            return (
              <li key={key}>
                <button>{option.label}</button>
              </li>
            );
          });
        }
      })}
    </ul>
  );
}

export default TypeProductGroup;
