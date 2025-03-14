"use client";
import { useEffect } from "react";
import { useConfigStore } from "./store";
import ProductCard from "../uikit/ProductCard";

function EquimpmentList({ equimpment }: { equimpment: string }) {
  const { data, updateData, updateSelectedValue, selectedValue } =
    useConfigStore((store) => store);

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

  const oneSelect = (manufacturer: string, video_signal_format: string) => {
    updateSelectedValue({ manufacturer, video_signal_format });
  };

  const filteredData =
    selectedValue.manufacturer && selectedValue.video_signal_format
      ? data.filter(
          (item) =>
            item.manufacturer === selectedValue.manufacturer &&
            item.video_signal_format === selectedValue.video_signal_format
        )
      : data;

  return (
    <ul className="flex gap-5 col-span-9 col-start-3">
      {filteredData.map((item, index) => {
        const key = `equimpment_name_${index}`;
        return (
          <li key={key}>
            <ProductCard item={item} onSelect={oneSelect} />
          </li>
        );
      })}
    </ul>
  );
}

export default EquimpmentList;
