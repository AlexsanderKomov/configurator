"use client";

import ReadExcel from "./TypeOfSystems/components/ReadExcel";
// import Appartments from "./Apartments";
import TypeOfSystems from "./TypeOfSystems";
import ListLoadedProducts from "./ListLoadedProducts";


function Main() {
  return (
    <main className="w-full flex flex-col items-center">
      <h2 className="mb-5">Конфигуратор СКУД</h2>

      <ReadExcel />
      <TypeOfSystems />
      {/* <Appartments /> */}
      <ListLoadedProducts />
    </main>
  );
}

export default Main;
