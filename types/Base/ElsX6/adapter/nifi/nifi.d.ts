import { IElsX6 } from "../../inter";
import type { Node, Cell, Edge, Graph } from "@antv/x6";
export type NIFI_NODE_TYPE = "PROCESSORS" | "PROCESS-GROUPS" | "INPUT_PORTS" | "OUTPUT_PORTS" | "LABEL" | "FUNNELS" | "CONNECTIONS";
export type NIFI_CELL_TYPE = "processors" | "process-groups" | "input-ports" | "output-ports" | "label" | "funnels" | "connections";
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
    nodeMarkup: import("../../../ElsElem").IElsElem.Elem;
    nodeList: import("vue").Ref<any[]>;
    edgeLabelConfig: IElsX6.EdgeLabelConfig;
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
    initNodeList(): Promise<void>;
    initProcessType(): Promise<void>;
    initRoot(): Promise<void>;
    initGraph(id?: string): Promise<this>;
    initFlow(id?: string): Promise<void>;
    initGraphFlowData(): Promise<void>;
    initNodeForm(): void;
    initEdgeLabelConfig(edge: Edge): void;
    initCellFormData(cell: Cell): void;
    initCellHistory(cell: Cell, ct: any): Promise<void>;
    initNodeStatus(cell: Cell, ct: any): void;
    nodeType(cell: any): NIFI_NODE_TYPE;
    nodeInit(cell: Node): Promise<void>;
    nodeAdd(cell: Node): Promise<void>;
    nodeEdit(node: Node, ct?: any): Promise<void>;
    nodeSave(cell: Cell, close: any): Promise<void>;
    nodeDel(node: Node, ct?: any): Promise<void>;
    nodesDel(nodes: Node[], ct: any): Promise<void>;
    nodeMove(node: Node): Promise<void>;
    nodeUpdate(d: any, node: Node): Promise<void>;
    nodeDisable(node: Node, ct: any, flag: boolean): Promise<void>;
    nodeCheck(node: any, ct?: any): Promise<void>;
    nodeRun(node: any, ct?: any): Promise<void>;
    nodeRunOnce(node: any, ct?: any): Promise<void>;
    nodeStop(node: any, ct?: any): Promise<void>;
    getEdgeData(edge: Edge): {
        title: string;
        outPorts: any[];
        inPorts: any[];
        modelValue: {};
        label: any;
        relationships: any;
        sourceNode: Cell<Cell.Properties> | undefined;
        targetNode: Cell<Cell.Properties> | undefined;
        sourceId: string;
        targetId: string;
        id: any;
    };
    getEdgeInfo(edge: Edge): Promise<{
        title: string;
        inPorts: any;
        outPorts: any;
        source: {
            id: string;
            groupId: any;
            type: string;
        };
        destination: {
            id: string;
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
    edgeListQuene(cell: any, ct?: any): Promise<void>;
    edgeDropQuene(cell: any, ct?: any): Promise<void>;
    getProcessGroupName(type: string): string;
    getDefaultCellData(groupName: string): any;
    mdProcessor(data: any): any;
    mdProcessGroup(data: any): {
        ports: {
            items: any[];
        };
        id: any;
        position: any;
        shape: string;
        name: any;
        label: any;
        data: any;
    };
    mdInputPort(data: any): any;
    mdOutputPort(data: any): any;
    mdLabel(data: any): undefined;
    mdFunnel(data: any): any;
    mdConnection(data: any): {
        id: any;
        shape: string;
        source: {
            cell: any;
            port: string;
        };
        target: {
            cell: any;
            port: string;
        };
        data: any;
    };
    cellName(data: {
        id?: string;
        uri?: string;
    }): NIFI_CELL_TYPE;
    cellMetadata(data: any): {
        id: any;
        position: any;
        shape: string;
        name: any;
        label: any;
        data: any;
    };
    cellTabs(data: any): void;
    cellFormData(data: any): any;
    cellInit(cell: Cell, data: any, type: string): void;
    cellAdd(data: any): boolean | undefined;
    cellUpdateStatus(cell: Cell, data?: any): Promise<void>;
    cellUpdateStep(cell: any, status: string): void;
    cellDelete(cell: any, ct?: any): Promise<void>;
    cellsDelete(cells: any[], ct?: any): Promise<void>;
    cellUpdate(data: any): void;
    cellsUpdate(data?: any[]): Promise<void>;
    cellRefresh(cell: Cell, data: any): void;
    cellsRefresh(): Promise<void>;
    groupRefresh(): Promise<void>;
    groupNodeAdd(): void;
    groupNodeDel(): void;
    groupNodeUpdate(): void;
    apiGetCellStatus(cell: any): Promise<any>;
    apiDelCell(cell: any): Promise<any>;
    apiUpdateCell(cell: any, data: any): Promise<any>;
    apiGetClientId(): void;
    apiGetProcessTypes(): Promise<any>;
    apiGetNodeList(): Promise<never[]>;
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
    apiCheckNode(node: any): Promise<any>;
    apiStatusNode(node: any): Promise<any>;
    apiRunProcessNode(node: any): Promise<any>;
    apiStopProcessNode(node: any): Promise<any>;
    apiRunOnceProcessNode(node: any): Promise<any>;
    apiRunStatusNode(node: any, state: "RUN_ONCE" | "STOPPED" | "RUNNING" | "DISABLED"): Promise<any>;
    apiNewEdge(component: any): Promise<any>;
    apiUpdateEdge(data: any): Promise<any>;
    apiDelEdge(edge: Cell): Promise<any>;
    apiStatusEdge(edge: Cell): Promise<any>;
    apiNewGroupNode(): void;
    apiGetNodeInfo(id: string): Promise<any>;
    apiGetControllServices(id: string): Promise<unknown>;
    getReversion(params: any): any;
    apiDisOrEnableNode(node: Node, flag?: boolean): Promise<any>;
    apiNewLabel(node: Node): Promise<any>;
    apiUpdateLabel(data: any): Promise<any>;
    apiDelLabel(data: any): Promise<any>;
    apiNewFunnel(node: Node): void;
    apiUpdateFunnel(data: any): Promise<any>;
    apiDelFunnel(node: Node): Promise<any>;
    apiGetHistory(cell: Cell): Promise<any>;
    apiListQuene(cell: any): Promise<void>;
    apiDropQuene(node: any): Promise<any>;
    apiPost(url: string, data?: any): Promise<any>;
    apiGet(url: string): Promise<any>;
    apiPut(url: string, data?: any): Promise<any>;
    apiDelete(url: string): Promise<any>;
}
