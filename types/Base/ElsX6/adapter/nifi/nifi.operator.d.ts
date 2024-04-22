import type { Cell } from "@antv/x6";
import { IElsX6 } from "../../inter";
interface Props {
    graphForm: IElsX6.Context["graphForm"] | undefined;
    graphShadow: IElsX6.Context["graphShadow"] | undefined;
    graphDrawerRef: any;
    apiPost: (url: string, data?: any) => Promise<any>;
    apiGet: (url: string) => Promise<any>;
    apiPut: (url: string, data?: any) => Promise<any>;
    clientId: string;
}
interface Operator {
    [key: string]: (that: Props, cell: Cell) => boolean | Promise<boolean>;
}
export declare const operatorList: string[];
export declare const operatorMap: Operator;
export {};
