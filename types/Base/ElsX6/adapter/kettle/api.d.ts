import MyWebSocket from "./ws";
import { AdapterKettle } from "./main";
import type { Node } from '@antv/x6';
export declare class KettleApi {
    constructor(kettle: AdapterKettle);
    static PREFIX: string;
    static PREFIX_TASK: string;
    kettle: AdapterKettle;
    token: string;
    userInfo: any;
    timeHandle: any;
    initFlag: boolean;
    iws: MyWebSocket | undefined;
    mws: MyWebSocket | undefined;
    wsVersion: string;
    wsUserName: string;
    wsHeartbeat: number;
    wsTime: any;
    refreshToken(token?: string): void;
    initApi(): void;
    getToken(): Promise<void>;
    getNodes(): Promise<any[]>;
    getProjectInfo(id?: string): Promise<any>;
    getFieldInfo(data: any): Promise<void>;
    updateGraph(data: any): Promise<any>;
    dataPreview(file: string, node: Node): Promise<void>;
    initWS(): void;
    handleCall(val: any): void;
    wsHeartBeat(): void;
    running(data?: Record<string, any>): void;
    stoping(data: any): void;
    getWSData(command: string, header?: Record<string, any>, body?: string): string;
    wsSend(command: string, header?: Record<string, any>, body?: string): void;
    getWsKey(d: any): string;
    apiPost(url: string, data?: any, headers?: Record<string, any>): Promise<any>;
    apiGet(url: string, headers?: Record<string, any>): Promise<any>;
    apiPut(url: string, data?: any): Promise<any>;
    apiDelete(url: string): Promise<any>;
    static GET(url: string, headers?: Record<string, any>): Promise<any>;
    static POST(url: string, data?: any, headers?: Record<string, any>): Promise<any>;
    static PUT(url: string, data?: any): Promise<any>;
    static DELETE(url: string): Promise<any>;
    static hdrValueEscape(str: string): string;
    /**
     * UnEscape header values
     */
    static hdrValueUnEscape(str: string): string;
}
