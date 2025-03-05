import React from "react";
import { useConfigStore } from "./store";

const RadioForm = () => {
  const { selectedOption, setSelectedOption, stageForward } = useConfigStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    stageForward()
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="flex items-center">
        <input
          type="radio"
          id="individually"
          name="option"
          value="individually"
          checked={selectedOption === "individually"}
          onChange={(e) =>
            setSelectedOption(e.target.value as "individually" | "kit")
          }
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="individually" className="ml-2 text-gray-700">
          По отдельности
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="radio"
          id="kit"
          name="option"
          value="kit"
          checked={selectedOption === "kit"}
          onChange={(e) =>
            setSelectedOption(e.target.value as "individually" | "kit")
          }
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="kit" className="ml-2 text-gray-700">
          Комплект
        </label>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Дальше
      </button>
    </form>
  );
};

export default RadioForm;
