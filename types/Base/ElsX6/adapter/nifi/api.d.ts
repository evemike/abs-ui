import { AdapterNifi } from "./main";
export declare class NifiApi {
    constructor(e: AdapterNifi);
    nifi: AdapterNifi;
    getClientId(): Promise<string>;
    getGroupData(id: string): Promise<any>;
    getProcessTypes(): Promise<any>;
    cellAdd(data: any, name?: string): void;
    cellDel(data: any): void;
    cellUp(data: any): void;
    post(url: string, data?: any): Promise<any>;
    get(url: string): Promise<any>;
    put(url: string, data?: any): Promise<any>;
    delete(url: string): Promise<any>;
}
