"use client";
import { useEffect } from "react";
import { ISelectedValue, useConfigStore } from "./store";
import ProductCard from "../uikit/ProductCard";
import { useTypeStore } from "../layout/Main/AddProduct/store";
import Loader from "../uikit/Loader";

function EquimpmentList({ equimpment }: { equimpment: string }) {
  const { data, updateData, updateSelectedValue, selectedValue } =
    useConfigStore((store) => store);
  const { loading, startLoading, stopLoading } = useTypeStore((state) => state);

  useEffect(() => {
    /** Симулируем загрузку данных */
    function simulateLoading() {
      startLoading();

      setTimeout(() => {
        stopLoading();
      }, 1000);
    }

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
    simulateLoading();
  }, [equimpment, updateData, startLoading, stopLoading]);

  // Функция, которая принимает объект с динамическими ключами
  const oneSelect = (values: ISelectedValue) => {
    updateSelectedValue(values);
  };

  console.log(data);
  const filteredData =
    selectedValue.manufacturer && selectedValue.video_signal_format
      ? data.filter(
          (item) =>
            item.manufacturer === selectedValue.manufacturer &&
            item.video_signal_format === selectedValue.video_signal_format
        )
      : data;

  return (
    <ul className="flex gap-5">
      {loading ? (
        <Loader />
      ) : (
        filteredData.map((item, index) => {
          const key = `equimpment_name_${index}`;
          return (
            <li key={key}>
              <ProductCard item={item} onSelect={oneSelect} />
            </li>
          );
        })
      )}
    </ul>
  );
}

export default EquimpmentList;
