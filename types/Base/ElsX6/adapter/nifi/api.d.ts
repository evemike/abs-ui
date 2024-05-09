import { AdapterNifi } from "./main";
export declare class NifiApi {
    constructor(e: AdapterNifi);
    nifi: AdapterNifi;
    getNodeList(): Promise<never[]>;
    getClientId(): Promise<string>;
    getGroupData(id: string): Promise<any>;
    getProcessTypes(): Promise<any>;
    cellAdd(data: any, name?: string): Promise<any>;
    cellDel(data: any): Promise<any>;
    cellUp(data: any): Promise<any>;
    cellGet(data: any): Promise<any>;
    cellRunStatus(data: any, state: "RUN_ONCE" | "STOPPED" | "RUNNING" | "DISABLED"): Promise<any>;
    cellRun(data: any): Promise<any>;
    cellStop(data: any): Promise<any>;
    cellRunOnce(data: any): Promise<any>;
    post(url: string, data?: any): Promise<any>;
    get(url: string): Promise<any>;
    put(url: string, data?: any): Promise<any>;
    delete(url: string): Promise<any>;
}
