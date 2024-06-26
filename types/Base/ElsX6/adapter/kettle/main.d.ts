import type { Cell } from "@antv/x6";
import { IElsX6 } from "../../inter";
import { KettleApi } from "./api";
import { KettleEvent } from "./event";
import { IKettle } from "./inter";
import { KettleUtil } from "./util";
interface KettleConfig {
    id: string;
    token?: string;
}
export declare class AdapterKettle {
    constructor(config: KettleConfig);
    id: string;
    api: KettleApi;
    event: KettleEvent;
    util: KettleUtil;
    NODE_ELEM: IElsX6.NodeMarkup;
    NODE_TAB_ELEM: IElsX6.NodeMarkup;
    menuConfig: IElsX6.GraphMenuConfig;
    contextmenu: IElsX6.ContextmenuConfig;
    nodeList: import("vue").Ref<any[]>;
    projectData: any;
    projectFile: string;
    projectInfo: any;
    projectParams: any[];
    isRun: import("vue").Ref<boolean>;
    executorId: string;
    hasRunResult: import("vue").Ref<boolean>;
    runResult: Map<string, any> & Omit<Map<string, any>, keyof Map<any, any>>;
    cellRunData: Record<string, any>;
    resultDrawerId: string;
    currentRunId: import("vue").Ref<string>;
    NodeMetadata: IKettle.NodeMetadata;
    static variable: any;
    static variables: {
        name: string;
        value: any;
    }[];
    initNodeMeatadata(): Promise<void>;
    run(): Promise<void>;
    setRunResult(data?: any): void;
    openRunResult(): Promise<void>;
    stop(): void;
    save(): void;
    config(): Promise<void>;
    schedule(): Promise<void>;
    init(id?: string): Promise<void>;
    initNodeList(): Promise<void>;
    initGraph(id?: string): Promise<void>;
    updateGraph(): Promise<void>;
    refresh(id: string): Promise<void>;
    cellDelete(cell: Cell, ct?: any): void;
    cellEdit(cell: Cell, ct?: any): void;
    cellUpdate(): void;
    upForm(): void;
    upStatus(): void;
}
export {};
