import { IElsX6 } from "../../inter";
import { AdapterKettle } from "./main";
export declare const getMenuConfig: (adapter: AdapterKettle) => IElsX6.GraphMenuConfig;
export declare const KETTLE_NODE_ELEM: IElsX6.NodeMarkup;
export declare const KETTLE_NODE_TAB_HEADER: IElsX6.NodeMarkup;
export declare const cellContextmenu: (adapter: AdapterKettle) => IElsX6.ContextmenuConfig;
export declare const getNodeTabs: (celldata: IElsX6.CellData) => never[];
