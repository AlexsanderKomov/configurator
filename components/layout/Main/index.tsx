"use client";

import { useEffect } from "react";
import Appartments from "./Apartments";
import { useConfigStore } from "@/components/configurator/store";

function Main() {
  const { updateStage } = useConfigStore((store) => store);

  useEffect(() => {
    updateStage(1);
  }, [updateStage]);

  return (
    <main className="container flex-col items-center">
      <h2 className="mb-5">Конфигуратор СКУД</h2>

      <Appartments />
    </main>
  );
}

export default Main;
