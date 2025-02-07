import ButtonStage from "@/components/uikit/ButtonStage";
import { LIST_NODES } from "./constsnts";
/** Список типов узлов */
function ListNodes({ type }: { type: string }) {
  // удалить эту строчку после создания компонента

  return (
    <ul className="flex gap-x-5">
      {LIST_NODES.map((item) => {
        if (item.type === type) {
          return item.option.map((option, index) => {
            const key = `type_${option}_${index}`;

            return (
              <li key={key}>
                <ButtonStage step={option.label} stage={3} />
              </li>
            );
          });
        }
      })}
    </ul>
  );
}

export default ListNodes;
