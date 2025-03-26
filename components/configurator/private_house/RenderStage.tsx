import React from "react";
import { useConfigStore } from "../store";
import { Stage } from "@/lib/enumStage";
import Intercom from "./Intercom";
import EquimpmentList from "../EquimpmentList";
import Kit from "./Kit";
import AdditionalEquipment from "./AdditionalEquipment";
import ReadySelection from "../ReadySelection";
import Lock from "./Lock";

function RenderStage() {
  const { stage, selectedOption } = useConfigStore((store) => store);

  switch (stage) {
    case Stage.one:
      return <Intercom />;
    case Stage.two:
      return selectedOption === "individually" ? (
        <EquimpmentList equimpment="monitor" />
      ) : (
        <Kit />
      );
    case Stage.three:
      return <EquimpmentList equimpment="calling_panel" />;
    case Stage.four:
      return <Lock />;
    case Stage.five:
      return selectedOption === "electromagnetic_lock" ||
        selectedOption === "electromechanical_lock" ? (
        <EquimpmentList equimpment="lock" />
      ) : (
        <AdditionalEquipment />
      );
    case Stage.six:
      return selectedOption === "electromagnetic_lock" ||
        selectedOption === "electromechanical_lock" ? (
        <EquimpmentList equimpment="power" />
      ) : selectedOption === "yes" ? (
        <p>дополнительное оборудование</p>
      ) : (
        <ReadySelection />
      );
    case Stage.seven:
      return <AdditionalEquipment />;
    case Stage.eight:
      return selectedOption === "yes" ? (
        <p>дополнительное оборудование</p>
      ) : (
        <ReadySelection />
      );

    default:
      return null;
  }
}

export default RenderStage;
