import { IElsX6 } from "../../inter";
import type { Node, Cell, Edge, Graph } from "@antv/x6";
export type NIFI_NODE_TYPE = "PROCESS" | "PROCESS-GROUP" | "INPUT_PORTS" | "OUTPUT_PORTS" | "LABEL" | "FUNNELS" | "CONNECTIONS";
export declare class AdapterNifi {
    constructor();
    NIFI_DATA: any;
    initFinishFlag: boolean;
    refreshTimeHandle: any;
    groupRefreshCount: number;
    contextmenu: IElsX6.ContextmenuConfig;
    clientId: string;
    processTypes: any[];
    prioritizers: any[];
    rootId: string;
    rootName: string;
    rootGroups: never[];
    rootStatus: {};
    nodeList: import("vue").Ref<any[]>;
    cellMetadata: Map<string, any>;
    edgeFormData: import("vue").Ref<any>;
    currentEdgeJson: any;
    groupId: string;
    groupFlowData: any;
    groupBreadcrumb: any[];
    graphData: any[];
    graphFormData: Record<string, any>;
    graphCellData: Record<string, any>;
    graph: Graph | undefined;
    graphForm: IElsX6.Context['graphForm'] | undefined;
    graphShadow: IElsX6.Context['graphShadow'] | undefined;
    graphDialogRef: IElsX6.Context['dialogRef'] | undefined;
    graphDrawerRef: IElsX6.Context['drawerRef'] | undefined;
    currentConnectForm: import("vue").Ref<{}>;
    dialogRef: any;
    menuElems: import("vue").ShallowRef<any[]>;
    menuConfig: import("vue").ShallowRef<IElsX6.GraphMenuConfig>;
    events: IElsX6.Events;
    procesorUpdate(data: any): Promise<void>;
    buildNodesFromTypes(): void;
    initPrioritizers(): Promise<void>;
    initProcessType(): Promise<void>;
    initRoot(): Promise<void>;
    initGraph(id?: string): Promise<this>;
    initFlow(id?: string): Promise<void>;
    initGraphFlowData(): Promise<void>;
    initGraphStatus(): void;
    initNodeForm(): void;
    initNodeFn(cell?: any): void;
    initEdgeLabelConfig(edge: Edge): void;
    initCellFormData(cell: Cell): void;
    initCellHistory(cell: Cell, ct: any): Promise<void>;
    initNodeStatus(cell: Cell, ct: any): void;
    nodeType(cell: Node): NIFI_NODE_TYPE;
    nodeInit(cell: Node): Promise<void>;
    nodeAdd(cell: Node): Promise<void>;
    nodeEdit(node: Node, ct?: any): Promise<void>;
    nodeSave(cell: Cell, close: any): Promise<void>;
    nodeDel(node: Node, ct?: any): Promise<void>;
    nodesDel(nodes: Node[], ct: any): Promise<void>;
    nodeMove(node: Node): Promise<void>;
    nodeUpdate(d: any, node: Node): Promise<void>;
    nodeDisable(node: Node, ct: any, flag: boolean): Promise<void>;
    nodeCheck(node: Node, ct?: any): Promise<void>;
    nodeRun(node: any, ct?: any): Promise<void>;
    nodeStop(node: any, ct?: any): Promise<void>;
    getEdgeData(edge: Edge): {
        title: string;
        outPorts: any;
        inPorts: any;
        modelValue: {};
        label: any;
        relationships: any;
        sourceNode: Cell<Cell.Properties> | undefined;
        targetNode: Cell<Cell.Properties> | undefined;
        sourceId: any;
        targetId: any;
        id: any;
    };
    getEdgeInfo(edge: Edge): Promise<{
        title: string;
        inPorts: any;
        outPorts: any;
        source: {
            id: any;
            groupId: any;
            type: string;
        };
        destination: {
            id: any;
            groupId: any;
            type: string;
        };
        modelValue: any;
        relationships: any;
        sourceNode: Cell<Cell.Properties> | undefined;
        targetNode: Cell<Cell.Properties> | undefined;
    }>;
    edgeElem(edge: Edge): Promise<{
        title: string;
        outPorts: any;
        inPorts: any;
        modelValue: any;
        elem: any;
    }>;
    edgeInit(edge: Edge): Promise<void>;
    edgeAdd(edge: Edge): Promise<void>;
    edgeEdit(edge: Edge, ct: any): Promise<void>;
    edgeSubmit(c: any): Promise<void>;
    edgeDel(cell: Cell, ct: any): Promise<void>;
    cellUpdate(data?: any[]): Promise<void>;
    groupRefresh(): Promise<void>;
    groupNodeAdd(): void;
    groupNodeDel(): void;
    groupNodeUpdate(): void;
    apiGetClientId(): void;
    apiGetProcessTypes(): Promise<any>;
    apiGetPrioritizers(): Promise<any>;
    apiGetRootStatus(): void;
    apiGetFlowByGroup(id?: string): Promise<any>;
    apiGetGroupData(id: string): Promise<any>;
    apiUpdateGroup(data: any): Promise<any>;
    apiNewGroup(data: any): Promise<any>;
    apiDelGroup(node: any): Promise<any>;
    apiRunGroup(node: any): Promise<any>;
    apiStopGroup(node: any): Promise<any>;
    apiGroupRunStatus(node: any, state: "TRANSMITTING" | "STOPPED"): Promise<any>;
    apiNewNode(name: string, position?: {
        x: number;
        y: number;
    }): Promise<any>;
    apiGetNode(id: string): Promise<any>;
    apiUpdateNode(data: any): Promise<any>;
    apiDelNode(node: Node): Promise<any>;
    apiAnalyseNode(node: Node): Promise<any>;
    apiValidateNode(node: Node): Promise<any>;
    apiGetValidateNode(node: any, reqId: string): Promise<any>;
    apiDelValidateNode(node: any, reqId: string): Promise<any>;
    apiRunProcessNode(node: any): Promise<any>;
    apiStopProcessNode(node: any): Promise<any>;
    apiRunOnceProcessNode(node: any): Promise<any>;
    apiRunStatusNode(node: any, state: "RUN_ONCE" | "STOPPED" | "RUNNING"): Promise<any>;
    apiNewEdge(component: any): Promise<any>;
    apiUpdateEdge(data: any): Promise<any>;
    apiDelEdge(edge: Cell): Promise<any>;
    apiNewGroupNode(): void;
    apiGetNodeInfo(id: string): Promise<any>;
    apiGetControllServices(id: string): Promise<unknown>;
    getReversion(params: any): any;
    apiDisOrEnableNode(node: Node, ct: any, flag?: boolean): Promise<any>;
    apiNewLabel(node: Node): Promise<any>;
    apiUpdateLabel(data: any): Promise<any>;
    apiDelLabel(data: any): Promise<any>;
    apiNewFunnel(node: Node): void;
    apiUpdateFunnel(data: any): Promise<any>;
    apiDelFunnel(node: Node): Promise<any>;
    apiGetHistory(cell: Cell): Promise<any>;
    apiPost(url: string, data?: any): Promise<any>;
    apiGet(url: string): Promise<any>;
    apiPut(url: string, data?: any): Promise<any>;
    apiDelete(url: string): Promise<any>;
}
