"use client";
import { useTypeStore } from "@/components/layout/Main/AddProduct/store";
import Loader from "@/components/uikit/Loader";
import Image from "next/image";

function ListLoadedProducts() {
  const { data, loading } = useTypeStore((state) => state);

  if (data?.length === 0) return <p>Нет данных</p>;

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-2 w-full gap-12">
      {data?.map((item, index) => {
        const key = `list_${item.name}_${index}`;

        return (
          <ul key={key} className="flex flex-col">
            {Object.keys(item).map((keys, index) => {
              const key = `item_${item?.[keys]}_${index}`;

              if (keys === "image") {
                const imageUrl = item?.[keys].option?.[0].label; // Ссылка на изображение

                return (
                  <li key={key} className="w-1/8 text-center">
                    <Image
                      width={100} // Ширина изображения
                      height={100} // Высота изображения
                      className="object-cover"
                      src={imageUrl}
                      alt="image"
                    />
                  </li>
                );
              }

              return (
                <li key={key} className="w-1/8 text-center ">
                  {item?.[keys].name} : {item?.[keys]?.option[0].label}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default ListLoadedProducts;
