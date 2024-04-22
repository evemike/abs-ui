import { Ref } from "vue";
import { Graph, Cell } from "@antv/x6";
import { GraphShadow } from "./shadow";
export declare class GraphForm {
    constructor(graphShadow: GraphShadow);
    graphShadow: GraphShadow;
    currentNode: import("vue").ShallowRef<Cell<Cell.Properties> | undefined>;
    graph: Graph | undefined;
    graphFormFailCells: Set<string>;
    data: Ref<Record<string, Record<string, any>>>;
    status: Map<string, Ref<{
        result: boolean;
        info: any[];
    }>>;
    cellColumn: Map<string, any[]>;
    visible: Ref<boolean>;
    setGraph(graph: Graph): void;
    initCell(cell: Cell): this;
    remove(cell: Cell | string): void;
    getCellFormData(cell: Cell | string): Record<string, any>;
    getCellStatus(cell: Cell | string): Ref<{
        result: boolean;
        info: any[];
    }>;
    validateForm(e?: any, tab?: any): void;
    validateCell(cell: Cell): Promise<void>;
    validateCells(): void;
    graphStatus(): void;
    setFormData(data: any): void;
    setFormData(data: any, cell: Cell | string): void;
    resetCellFormData(cell: Cell | string, data?: any): void;
    copyCells(sc: Cell, tc: Cell): void;
    resetCellId(sid: string, tid: string): void;
    getGraphFormData(): Record<string, Record<string, any>>;
    toggleDrawerVisible(): void;
    openDrawer(cell?: Cell): void;
    closeDrawer(): void;
}
