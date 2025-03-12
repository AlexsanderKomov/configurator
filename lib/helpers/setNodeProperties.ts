import { INodeProperties } from "@/components/layout/Main/AddProduct/TypeOfSystems/NodeTypeForm/interface";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { MONITOR } from "@/shared/constants/select_options/monitor";

export function setNodeProperties(typeNode: string) {
  let nodeProperties: INodeProperties = MONITOR;

  if (typeNode === "calling_panel") {
    nodeProperties = CALLING_PANEL;
  }

  return nodeProperties;
}
