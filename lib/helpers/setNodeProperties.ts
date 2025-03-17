import { INodeProperties } from "@/components/layout/Main/AddProduct/TypeOfSystems/NodeTypeForm/interface";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { LOCK } from "@/shared/constants/select_options/lock";
import { MONITOR } from "@/shared/constants/select_options/monitor";

export function setNodeProperties(typeNode: string) {
  let nodeProperties: INodeProperties = MONITOR;

  switch (typeNode) {
    case "calling_panel":
      nodeProperties = CALLING_PANEL;
      break;
    case "lock":
      nodeProperties = LOCK;
  }

  return nodeProperties;
}
