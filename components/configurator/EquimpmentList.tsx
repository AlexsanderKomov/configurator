"use client";
import { useEffect } from "react";
import { IData, useConfigStore } from "./store";
import ProductCard from "../uikit/ProductCard";
import { useTypeStore } from "../layout/Main/AddProduct/store";
import Loader from "../uikit/Loader";
import { filteredData } from "@/lib/helpers/filteredData";

function EquimpmentList({ equimpment }: { equimpment: string }) {
  const {
    data,
    updateData,
    updateSelectedValue,
    selectedValue,
    selectedOption,
  } = useConfigStore((store) => store);
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
  const oneSelect = (values: IData) => {
    updateSelectedValue(values);
  };

  const newData = filteredData({ data, selectedValue, selectedOption });

  return (
    <ul className="flex gap-5">
      {loading ? (
        <Loader />
      ) : (
        newData.map((item, index) => {
          const key = `equimpment_${item.name}_${index}`;
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
