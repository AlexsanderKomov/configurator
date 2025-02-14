import { useListLoadedProducts } from "./store";
import { useTypeStore } from "@/components/layout/Main/TypeOfSystems/store";

function ListLoadedProducts() {
  const hide = useListLoadedProducts((state) => state.hide);
  const data = useTypeStore((state) => state.data);

  return (
    <>
      {hide &&
        data.map((item, index) => {
          const key = `list_${item.name}_${index}`;
          return (
            <ul key={key}>
              <li>
                {item.manufacturer} {item.name} {item.article}{" "}
                {item.screenSizes}
              </li>
            </ul>
          );
        })}
    </>
  );
}

export default ListLoadedProducts;
