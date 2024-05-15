import type { Cell, Graph, Node, Edge } from "@antv/x6";
import { NIFI_CELL_NAME } from "./tool";
import { IElsX6 } from "../../inter";
import { AdapterNifi } from "./main";
export declare class NifiEvent {
    constructor(e: AdapterNifi);
    nifi: AdapterNifi;
    api: import("./api").NifiApi;
    data: IElsX6.Events;
    context: IElsX6.Context | undefined;
    graph: Graph | undefined;
    shadow: IElsX6.Context['graphShadow'] | undefined;
    drawerRef: IElsX6.Context['drawerRef'] | undefined;
    form: IElsX6.Context['graphForm'] | undefined;
    processGroupFlow: any;
    flow: Record<string, any[]> | undefined;
    breadcrumb: any;
    currentCellId: string;
    source: Map<string, any>;
    mounted(ctx: IElsX6.Context): void;
    initData(data: any): void;
    initFlow(): void;
    initCells(): void;
    initCell(cell: Cell): void;
    initCellForm(cell: Cell): void;
    initCellTabs(cell: Cell): void;
    initCellStatus(cell: Cell): void;
    refreshCell(cell: Cell): Promise<void>;
    updateCell(): void;
    updateCellFormData(): void;
    updateCellStatus(): void;
    updateCellData(): void;
    openDrawer(cell: Cell): Promise<void>;
    closeDrawer(): void;
    submitDrawer(cell: Cell): void;
    cellDel(cell: Cell): Promise<void>;
    cellClear(): Promise<void>;
    cellEdit(cell: Cell): Promise<void>;
    cellStatus(cell: Cell, status: "RUN_ONCE" | "STOPPED" | "RUNNING" | "DISABLED" | "ENABLED"): Promise<void>;
    nodeAdd(cell: Cell): Promise<void>;
    nodeMove(cell: Node): Promise<void>;
    templateAdd(cell: Node): Promise<void>;
    edgeAdd(cell: Edge): Promise<void>;
    portNameCheck(name: NIFI_CELL_NAME): Promise<unknown>;
}
