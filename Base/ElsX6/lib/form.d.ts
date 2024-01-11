import { Graph, Cell } from "@antv/x6";
import { GraphShadow } from "./shadow";
export declare class GraphForm {
    constructor(graphShadow: GraphShadow);
    graphShadow: GraphShadow;
    currentNode: import("vue").ShallowRef<Cell<Cell.Properties> | undefined>;
    graph: Graph | undefined;
    graphFormFailCells: Set<string>;
    data: Record<string, Record<string, any>>;
    cellColumn: Map<string, any[]>;
    setGraph(graph: Graph): void;
    initCell(cell: Cell): this;
    getCellData(cell: Cell): Record<string, any>;
    initFormData(data: Record<string, Record<string, any>>): void;
    initCellFormData(cell: Cell | string, data?: Record<string, any>): this;
    validateForm(e?: any, tab?: any): void;
    validateCell(cell: Cell): Promise<void>;
    validateCells(): void;
    graphStatus(): void;
    copyCells(sc: Cell, tc: Cell): void;
    resetCellId(sid: string, tid: string): void;
    getGraphFormData(): Record<string, Record<string, any>>;
}
