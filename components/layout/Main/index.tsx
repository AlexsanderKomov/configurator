"use client";

// import AddProduct from "./AddProducts/AddProduct";
import Appartments from "./Apartments";

function Main() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-5">Конфигуратор СКУД</h2>
      {/* <AddProduct /> */}

      <Appartments />
    </div>
  );
}

export default Main;
