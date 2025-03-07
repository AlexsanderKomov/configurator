"use client";
import { useEffect } from "react";
import { useConfigStore } from "./store";
import ProductCard from "../uikit/CardProduct";

function EquimpmentList({ equimpment }: { equimpment: string }) {
  const { data, updateData } = useConfigStore((store) => store);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/configurator/private_house", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: equimpment }),
      });

      if (!response.ok) {
        console.log("ERROR");
      }

      const data = await response.json();
      updateData(data);
    };

    fetchData();
  }, [equimpment, updateData]);

  return (
    <ul className="flex gap-5 col-span-9 col-start-3 ">
      {data.map((item, index) => {
        const key = `equimpment_name_ ${index}`;
        return (
          <li key={key}>
            <ProductCard item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default EquimpmentList;
