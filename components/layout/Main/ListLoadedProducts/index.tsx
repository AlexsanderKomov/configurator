import { useTypeStore } from "@/components/layout/Main/TypeOfSystems/store";

function ListLoadedProducts() {
  const { data, loading } = useTypeStore((state) => state);

  if (data?.length === 0) return <p>Нет данных</p>;

  if (loading) return <p>Загрузка данных...</p>;

  return (
    <div className="grid grid-row-2 gap-y-12">
      {data?.map((item, index) => {
        const key = `list_${item?.name?.name}_${index}`;

        return (
          <ul key={key} className="flex gap-x-8">
            <li>
              {item?.manufacturer?.manufacturer}:{" "}
              {item?.manufacturer?.option?.label}
            </li>

            <li>
              {item?.name?.name}: {item?.name?.option?.label}
            </li>
            <li>
              {item?.article?.article}: {item?.article?.option?.label}
            </li>

            <li>
              {item?.screenSizes?.screenSizes}:{" "}
              {item?.screenSizes?.option?.label}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ListLoadedProducts;
