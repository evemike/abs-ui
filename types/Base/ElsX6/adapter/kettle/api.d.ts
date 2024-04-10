import MyWebSocket from "./ws";
export declare class KettleApi {
    constructor();
    static PREFIX: string;
    static PREFIX_TASK: string;
    token: string;
    userInfo: any;
    timeHandle: any;
    initFlag: boolean;
    iws: MyWebSocket | undefined;
    mws: MyWebSocket | undefined;
    refreshToken(token?: string): void;
    initApi(): void;
    getToken(): Promise<void>;
    initWS(): void;
    getNodes(): Promise<any[]>;
    getProjectInfo(id?: string): Promise<any>;
    getFieldInfo(data: any): Promise<void>;
    updateGraph(data: any): Promise<any>;
    apiPost(url: string, data?: any, headers?: Record<string, any>): Promise<any>;
    apiGet(url: string, headers?: Record<string, any>): Promise<any>;
    apiPut(url: string, data?: any): Promise<any>;
    apiDelete(url: string): Promise<any>;
    static GET(url: string, headers?: Record<string, any>): Promise<any>;
    static POST(url: string, data?: any, headers?: Record<string, any>): Promise<any>;
    static PUT(url: string, data?: any): Promise<any>;
    static DELETE(url: string): Promise<any>;
}
