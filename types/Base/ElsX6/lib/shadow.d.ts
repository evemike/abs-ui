import { Cell, Graph, Edge, Node } from "@antv/x6";
import { IElsX6 } from "../inter";
interface GraphShadowConfig extends Record<string, any> {
    nodelist?: IElsX6.GraphNode[];
    nodeMarkup?: IElsX6.NodeMarkup;
}
export declare class GraphShadow {
    constructor(config?: GraphShadowConfig);
    nodelist: IElsX6.GraphNode[];
    graph: Graph | undefined;
    mode: import("vue").Ref<IElsX6.Mode>;
    cells: Map<string, IElsX6.NodeData | IElsX6.CellData | IElsX6.EdgeData>;
    currentCell: import("vue").ShallowRef<Cell<Cell.Properties> | undefined>;
    selectedCells: import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    clipboardCells: import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    defaultNodeMarkup: IElsX6.NodeMarkup;
    initCell(c: Cell | string): void;
    updateEdge(cell: Edge): void;
    setGraph(graph: Graph): void;
    has(cell: string | Cell): boolean;
    add(cell: Cell | string): void;
    del(cell: Cell | string): void;
    remove(cell: Cell | string): void;
    get(cell: Edge): IElsX6.EdgeData;
    get(cell: Node): IElsX6.NodeData;
    get(cell: Cell | string): IElsX6.CellData;
    getByKey(cell: string | Cell, key: string): any;
    getCellData(cell: Cell | string): IElsX6.CellData;
    getEdgeData(cell: Cell | string): IElsX6.EdgeData;
    getNodeData(cell: Cell | string): IElsX6.NodeData;
    set(cell: Cell | string, key: string, value: any): void;
    setTabs(cell: Cell, tabs: any[]): void;
    getTabs(cell: Cell): import("vue").Ref<any[]>;
    setLabel(cell: Cell, val: string): void;
    setStatus(cell: Cell, val: any): void;
    setData(cell: Cell, val: any): void;
    setRefData(cell: Cell, val: any): void;
    setStep(cell: Cell, step: IElsX6.CellStep, tip?: string): void;
    setStepTip(cell: Cell, tip: string): void;
    setType(cell: Cell | string, type: string): void;
    setMetadata(cell: Cell | string, md: any): void;
    toggleSelected(cell: Cell | string, clear?: boolean, value?: boolean): void;
    resetCurrentCell(cell?: Cell): void;
    resetSelectedCells(cells?: Cell[]): void;
    removeCells(cells?: Cell[]): void;
    resetClipboardCells(cells?: Cell[]): void;
    addSelectedCell(cell: Cell): void;
    delSelectedCell(cell: Cell): void;
    toggleSelectedCell(cell: Cell): void;
    clearSelectedCells(): void;
    copyCells(sc: Cell, tc: Cell): void;
    resetNodeList(list: IElsX6.GraphNode[]): this;
    resetDefaultNodeMarkup(markup?: IElsX6.NodeMarkup): this;
    resetCellId(sid: string, tid: string): void;
    getTabsData(cell: string | Cell): any[];
    setEdgeLabelConfig(cell: Cell | string, data: IElsX6.EdgeLabelConfig): void;
    getEdgeLabelConfig(cell: Edge): IElsX6.EdgeLabelConfig;
}
export {};
