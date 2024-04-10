import { Cell, Edge, Graph, Node } from "@antv/x6";
import { IElsX6 } from "../../inter";
import { AdapterKettle } from "./main";
import { NodeModel } from "./nodes/index";
export declare class KettleEvent {
    constructor(kettle: AdapterKettle);
    kettle: AdapterKettle;
    api: import("./api").KettleApi;
    nodesMetadata: Map<string, NodeModel>;
    graph: Graph | undefined;
    shadow: IElsX6.Context['graphShadow'] | undefined;
    drawerRef: IElsX6.Context['drawerRef'] | undefined;
    form: IElsX6.Context['graphForm'] | undefined;
    nodes: any[];
    edges: any[];
    projectInfo: any;
    flowInfo: any;
    data: IElsX6.Events;
    init(): Promise<void>;
    initGraph(projectInfo: any): void;
    initFormData(projectInfo?: any): void;
    initShadow(projectInfo?: any): void;
    initNode(d: any): {
        shape: any;
        id: any;
        label: any;
        icon: any;
        name: any;
        ports: any;
        position: any;
    };
    initEdge(d: any): {
        id: any;
        source: any;
        target: any;
        desc: any;
        shape: any;
    };
    getNodeMetadata(node: IElsX6.GraphNode): Record<string, any>;
    handleDrawerSubmit(cell: Cell): void;
    addEdge(edge: Edge): void;
    addNode(node: Node): void;
    addCell(cell: Cell): void;
    delCell(): void;
    cellClick(cell: Cell): void;
    defaultNodeInit(formData: any, cellData: IElsX6.CellData): {
        node: {
            errors: number;
            linesInput: number;
            linesOutput: number;
            linesRead: number;
            linesRejected: number;
            linesUpdated: number;
            linesWritten: number;
            speed: number;
            statusDescription: string;
            stepExecutionStatus: string;
            seconds: number;
            projectError: number;
            stepMetaExecutionStatus: null;
            copy: number;
        } & Cell.Properties & {
            stepName: string;
        };
        step: any;
    };
    getNodeData(node: Node): any;
    getEdgeData(edge: Edge): {
        edge: {
            from: string;
            to: string;
            parent?: string | undefined;
            children?: string[] | undefined;
            tools?: Cell.Tools | undefined;
            view?: string | undefined;
            shape?: string | undefined;
            markup?: import("@antv/x6").Markup | undefined;
            attrs?: import("@antv/x6/lib/registry").Attr.CellAttrs | undefined;
            zIndex?: number | undefined;
            visible?: boolean | undefined;
            data?: any;
            id?: string | undefined;
        };
        order: {
            enabled: string;
            fromId: string;
            toId: string;
            from: string;
            to: string;
        };
    };
    getProjectFile(): {
        projectFile: string;
    };
}
