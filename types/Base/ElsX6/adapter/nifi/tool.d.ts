import { IElsX6 } from "../..";
export type NIFI_CELL_NAME = "processors" | "process-groups" | "input-ports" | "output-ports" | "labels" | "funnels" | "connections";
export declare const getCellId: (data: any) => string | undefined;
export declare const getCellName: (data: any) => NIFI_CELL_NAME | undefined;
export declare const getCellInfo: (data: any) => [name: string | undefined, id: string | undefined];
export declare const getCellUrl: (data: any) => string | undefined;
export declare const getCellMarkup: (name: NIFI_CELL_NAME, type: string, d: any) => any;
export declare const statusToStep: (status: string) => IElsX6.CellStep;
