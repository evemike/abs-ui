import type { Cell } from "@antv/x6";
import { NifiApi } from "./api";
import { NifiEvent } from "./event";
import type { IElsX6 } from "../../inter";
export declare class AdapterNifi {
    constructor(id: string, title?: string);
    groupId: string;
    api: NifiApi;
    event: NifiEvent;
    title: import("vue").Ref<string>;
    NODE_ELEM: IElsX6.NodeMarkup;
    edgeMeatadata: {
        name: string;
    };
    drawerHeader: IElsX6.NodeMarkup;
    contextmenu: IElsX6.ContextmenuConfig;
    menuConfig: IElsX6.GraphMenuConfig;
    clientId: string;
    nodeList: any[];
    initNodelist(): Promise<void>;
    initClientId(): Promise<void>;
    initGraph(id?: string): Promise<void>;
    controls(): void;
    dataSource(): void;
    configParams(): void;
    templates(): void;
    refresh(ct?: any): void;
    run(): void;
    stop(): void;
    open(): void;
    close(): void;
    cellEdit(cell: Cell, ct?: any): void;
    cellDelete(cell: Cell, ct?: any): void;
    getNodeMetadata(d: IElsX6.GraphNode): {};
}
