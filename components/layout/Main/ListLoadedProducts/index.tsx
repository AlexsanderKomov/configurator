import { useTypeStore } from "@/components/layout/Main/TypeOfSystems/store";
import Image from "next/image";

function ListLoadedProducts() {
  const { data, loading } = useTypeStore((state) => state);

  if (data?.length === 0) return <p>Нет данных</p>;

  if (loading) return <p>Загрузка данных...</p>;
  return (
    <div className="grid w-full gap-y-12">
      {data?.map((item, index) => {
        const key = `list_${item.name}_${index}`;

        return (
          <ul key={key} className="grid grid-cols-4 gap-8">
            {Object.keys(item).map((keys, index) => {
              const key = `item_${item?.[keys]}_${index}`;
              console.log(item?.[keys].option?.[0].label);

              if (keys === "image") {
                return (
                  <li key={key} className="w-1/8 text-center">
                    <Image src={item?.[keys].option?.[0].label} alt="image" />
                    image
                  </li>
                );
              } else {
                return (
                  <li key={key} className="w-1/8 text-center">
                    {item?.[keys].name} : {item?.[keys]?.option[0].label}
                  </li>
                );
              }
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default ListLoadedProducts;
