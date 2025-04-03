import { INodeProperties } from "@/components/layout/Main/AddProduct/TypeOfSystems/NodeTypeForm/interface";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { DEUTER } from "@/shared/constants/select_options/deuter";
import { LOCK } from "@/shared/constants/select_options/lock";
import { MONITOR } from "@/shared/constants/select_options/monitor";
import { POWER } from "@/shared/constants/select_options/power";

export function getNodeProperties(typeNode: string) {
  let nodeProperties: INodeProperties = MONITOR;

  switch (typeNode) {
    case "calling_panel":
      nodeProperties = CALLING_PANEL;
      break;
    case "lock":
      nodeProperties = LOCK;
      break;
    case "power":
      nodeProperties = POWER;
      break;
    case "deuter":
      nodeProperties = DEUTER;
      break;
  }

  console.log(nodeProperties);
  return nodeProperties;
}
