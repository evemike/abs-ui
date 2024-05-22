import MyWebSocket from "./ws";
import { AdapterKettle } from "./main";
import type { Node } from '@antv/x6';
interface DataPreviewConfig {
    useOutLimit: boolean;
    params: any;
}
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
    addProject(): Promise<any>;
    getProjects(): Promise<any>;
    initProject(id: string): Promise<void>;
    getToken(): Promise<void>;
    getNodes(): Promise<any[]>;
    getProjectInfo(id: string): Promise<any>;
    updateGraph(data: any): Promise<void>;
    dataPreview(file: string, node: Node, config?: DataPreviewConfig): Promise<void>;
    getFieldInfo(data: any): Promise<any>;
    testConnect(data: any): Promise<any>;
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
    static getFieldInfo(data: any): Promise<any>;
    static hdrValueEscape(str: string): string;
    /**
     * UnEscape header values
     */
    static hdrValueUnEscape(str: string): string;
}
export {};
