import type { Cell } from "@antv/x6";
import { IElsX6 } from "../../inter";
import { KettleApi } from "./api";
import { KettleEvent } from "./event";
interface KettleConfig {
    id: string;
    token?: string;
}
export declare class AdapterKettle {
    constructor(config: KettleConfig);
    id: string;
    api: KettleApi;
    event: KettleEvent;
    menuConfig: IElsX6.GraphMenuConfig;
    contextmenu: IElsX6.ContextmenuConfig;
    nodeList: import("vue").Ref<any[]>;
    projectData: any;
    projectFile: string;
    projectInfo: any;
    projectParams: any[];
    static variable: any;
    static variables: {
        name: string;
        value: any;
    }[];
    run(): Promise<void>;
    stop(): void;
    save(): void;
    config(): Promise<void>;
    init(): Promise<void>;
    initNodeList(): Promise<void>;
    initGraph(): Promise<void>;
    updateGraph(): Promise<void>;
    refresh(): Promise<void>;
    cellDelete(cell: Cell, ct?: any): void;
    cellEdit(cell: Cell, ct?: any): void;
    cellUpdate(): void;
    upForm(): void;
    upStatus(): void;
}
export {};
