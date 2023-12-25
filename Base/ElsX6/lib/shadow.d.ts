import { Cell, Graph, Edge } from "@antv/x6";
import { IElsX6 } from "../inter";
interface GraphShadowConfig extends Record<string, any> {
    nodelist?: IElsX6.GraphNode[];
}
export declare class GraphShadow {
    constructor(config: GraphShadowConfig);
    nodelist: IElsX6.GraphNode[];
    graph: Graph | undefined;
    mode: import("vue").Ref<IElsX6.Mode>;
    cells: Map<string, Record<string, any>>;
    currentCell: import("vue").ShallowRef<Cell<Cell.Properties> | undefined>;
    selectedCells: import("vue").Ref<Cell<Cell.Properties>[]> | import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    clipboardCells: import("vue").Ref<Cell<Cell.Properties>[]> | import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    defaultNodeMarkup: IElsX6.NodeMarkup;
    initCell(cell: Cell): void;
    updateEdge(cell: Edge): void;
    setGraph(graph: Graph): void;
    add(cell: Cell): void;
    del(cell: Cell): void;
    get(cell: Cell, key?: string): any;
    set(key: string, value: any, cell: Cell): void;
    resetCurrentCell(cell?: Cell): void;
    resetSelectedCells(cells?: Cell[]): void;
    removeCells(cells?: Cell[]): void;
    resetClipboardCells(cells?: Cell[]): void;
    addSelectedCell(cell: Cell): void;
    delSelectedCell(cell: Cell): void;
    toggleSelectedCell(cell: Cell): void;
    clearSelectedCells(): void;
    getMetadata(cell: Cell): IElsX6.GraphNode;
    copyCells(): void;
    resetNodeList(list: IElsX6.GraphNode[]): this;
    resetDefaultNodeMarkup(markup?: IElsX6.NodeMarkup): this;
}
export {};
