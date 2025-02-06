"use client";

// import Appartments from "./Apartments";
import TypeOfSystems from "./TypeOfSystems";

function Main() {
  return (
    <main className="w-full flex flex-col items-center">
      <h2 className="mb-5">Конфигуратор СКУД</h2>

      <TypeOfSystems />
      {/* <Appartments /> */}
    </main>
  );
}

export default Main;
