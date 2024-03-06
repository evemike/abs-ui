import { Cell, Graph, Edge } from "@antv/x6";
import { IElsX6 } from "../inter";
interface GraphShadowConfig extends Record<string, any> {
    nodelist?: IElsX6.GraphNode[];
}
export declare class GraphShadow {
    constructor(config?: GraphShadowConfig);
    nodelist: IElsX6.GraphNode[];
    graph: Graph | undefined;
    mode: import("vue").Ref<IElsX6.Mode>;
    cells: Map<string, IElsX6.CellData | IElsX6.EdgeData | IElsX6.NodeData>;
    currentCell: import("vue").ShallowRef<Cell<Cell.Properties> | undefined>;
    selectedCells: import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    clipboardCells: import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    defaultNodeMarkup: IElsX6.NodeMarkup;
    initCell(c: Cell | string): void;
    updateEdge(cell: Edge): void;
    setGraph(graph: Graph): void;
    add(cell: Cell | string): void;
    del(cell: Cell): void;
    get(cell: Cell | string, key?: string): any;
    getEdgeData(cell: Cell | string): IElsX6.EdgeData;
    getNodeData(cell: Cell | string): IElsX6.NodeData;
    set(cell: Cell | string, key: string, value: any): void;
    setTabs(cell: Cell, tabs: any[]): void;
    getTabs(cell: Cell): import("vue").Ref<any[]>;
    setLabel(cell: Cell, val: string): void;
    resetCurrentCell(cell?: Cell): void;
    resetSelectedCells(cells?: Cell[]): void;
    removeCells(cells?: Cell[]): void;
    resetClipboardCells(cells?: Cell[]): void;
    addSelectedCell(cell: Cell): void;
    delSelectedCell(cell: Cell): void;
    toggleSelectedCell(cell: Cell): void;
    clearSelectedCells(): void;
    initMetadata(mds: any[]): void;
    setMetadata(md: any): void;
    getMetadata(cell: Cell): IElsX6.GraphNode;
    upCellMetadata(cell: Cell, key: string, value: any): void;
    copyCells(sc: Cell, tc: Cell): void;
    resetNodeList(list: IElsX6.GraphNode[]): this;
    resetDefaultNodeMarkup(markup?: IElsX6.NodeMarkup): this;
    resetCellId(sid: string, tid: string): void;
    getTabsData(cell: string | Cell): any[];
    getByKey(cell: string | Cell, key: string): any;
    setEdgeLabelConfig(cell: Cell | string, data: IElsX6.EdgeLabelConfig): void;
    getEdgeLabelConfig(cell: Edge): import("vue").Ref<IElsX6.EdgeLabelConfig>;
}
export {};
