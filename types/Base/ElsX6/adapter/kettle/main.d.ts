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
    projectInfo: any;
    init(): Promise<void>;
    initNodeList(): Promise<void>;
    initGraph(): Promise<void>;
    updateGraph(): Promise<void>;
    buildGraphData(): Promise<{
        transformation: any;
    }>;
    saveGraph(): void;
}
export {};
