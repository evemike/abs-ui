import { Cell, Edge, Graph, Node } from "@antv/x6";
import { IElsX6 } from "../../inter";
import { AdapterKettle } from "./main";
export declare class KettleEvent {
    constructor(kettle: AdapterKettle);
    nodesMetadata: Map<string, any>;
    graph: Graph | undefined;
    shadow: IElsX6.Context['graphShadow'] | undefined;
    drawerRef: IElsX6.Context['drawerRef'] | undefined;
    nodes: any[];
    edges: any[];
    data: IElsX6.Events;
    init(): Promise<void>;
    initGraph(): void;
    addEdge(edge: Edge): void;
    addNode(node: Node): void;
    addCell(cell: Cell): void;
    delCell(): void;
    cellClick(cell: Cell): void;
}
