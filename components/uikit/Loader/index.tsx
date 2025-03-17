import clsx from "clsx";

function Loader() {
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={clsx(
          "loader", // Базовый класс для лоадера
          "border-4 border-solid border-gray-300 border-t-blue-500 rounded-full w-10 h-10", // Стили лоадера
          "animate-spin" // Анимация вращения
        )}
      />
    </div>
  );
}

export default Loader;
