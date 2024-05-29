import type { Cell } from "@antv/x6";
import { IElsX6 } from "../..";
import { AdapterNifi } from "./main";
export type NIFI_CELL_NAME = "processors" | "process-groups" | "input-ports" | "output-ports" | "labels" | "funnels" | "connections" | "templates";
export declare const getCellId: (data: any) => string | undefined;
export declare const getCellName: (data: any) => NIFI_CELL_NAME | undefined;
export declare const getCellNameCn: (data: any) => string;
export declare const getCellType: (data: any) => string | undefined;
export declare const getCellInfo: (data: any) => [name: string | undefined, id: string | undefined];
export declare const getCellUrl: (data: any) => string | undefined;
export declare const getCellMarkup: (d: any) => any;
export declare const statusToStep: (status: string) => IElsX6.CellStep;
export declare const getDefProcessMarkup: (type: string) => any;
export declare const getProcessGroupsCount: (d: any) => any;
export declare const errorMessage: (message: string) => never;
export declare const existenceUpstreamOperator: (cell: Cell, nifi: AdapterNifi) => void;
export declare const dataConversion: (data: any[] | string) => any;
/**
 * @description: 获取上游算子的输出字段
 * @param {Cell} cell
 * @param {AdapterNifi} nifi
 * @param {string[]} inputKeys
 * @return {any[]}
 */
export declare const getInputValue: (cell: Cell, nifi: AdapterNifi, inputKeys: string[]) => any[];
type ParameterValues = {
    parameter: string;
    message: string;
};
export declare const parameterWhetherValuable: (formData: any, parameterValues: ParameterValues[]) => void;
export declare const uniqueFun: (arr: any[]) => any;
export declare const databaseMapping: {
    PostgreSQL: string;
    MySQL: string;
};
export {};
