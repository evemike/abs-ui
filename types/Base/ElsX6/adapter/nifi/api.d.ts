import { NIFI_CELL_NAME } from "./tool";
import { AdapterNifi } from "./main";
export declare class NifiApi {
    constructor(e: AdapterNifi);
    nifi: AdapterNifi;
    getNodeList(): Promise<never[]>;
    getClientId(): Promise<string>;
    getGroupData(id: string): Promise<any>;
    getProcessTypes(): Promise<any>;
    getGroupStatus(id: string): Promise<any>;
    getParamsContext(): Promise<any>;
    delParamsContext(data: any): Promise<any>;
    getTemplates(): Promise<any>;
    initTemplate(data: any): Promise<any>;
    initSnippet(data: any): Promise<any>;
    delSnippet(id: string): Promise<any>;
    groupUp(data: any): Promise<any>;
    groupUpStatus(id: string, state: "ENABLED" | "DISABLED" | "RUNNING" | "STOPPED" | "RUN_ONCE"): Promise<any>;
    getControllerServices(): Promise<any>;
    createControllerServices(data: any): Promise<any>;
    editControllerServices(data: any): Promise<any>;
    delControllerServices(data: any): Promise<any>;
    startControllerServices(data: any): void;
    getControllerServiceTypes(data: any): Promise<any>;
    createCSByType(data: any): Promise<void>;
    stopControllerServices(): void;
    getProcessorDescriptors(id: string, propertyName: string): Promise<any>;
    cellAdd(data: any, name?: NIFI_CELL_NAME): Promise<any>;
    cellDel(data: any): Promise<any>;
    cellUp(data: any): Promise<any>;
    cellGet(data: any): Promise<any>;
    cellRunStatus(data: any, state: "RUN_ONCE" | "STOPPED" | "RUNNING" | "DISABLED" | "ENABLED"): Promise<any>;
    cellRun(data: any): Promise<any>;
    cellStop(data: any): Promise<any>;
    cellRunOnce(data: any): Promise<any>;
    cellDisabled(data: any): Promise<any>;
    listQuene(id: string): Promise<void>;
    dropQuene(id: string): Promise<any>;
    post(url: string, data?: any): Promise<any>;
    get(url: string): Promise<any>;
    put(url: string, data?: any): Promise<any>;
    delete(url: string): Promise<any>;
}
