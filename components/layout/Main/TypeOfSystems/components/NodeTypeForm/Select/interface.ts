import { ICallingPanel } from "@/shared/constants/select_options/calling_panel/interface";
import { IMonitor } from "@/shared/constants/select_options/monitor/interface";

export interface ISelectCardProductProps {
  options: ICallingPanel | IMonitor;
  readonly descr: string;
}
