type CallFunction = (e: MessageEvent) => any;
type Data = string | ArrayBufferLike | Blob | ArrayBufferView;
export interface SocketConfig {
    url: string;
    protocols?: string | string[];
    auto?: boolean;
    getKey?: (data: MessageEvent) => string;
    calls?: CallFunction | CallFunction[];
}
export default class MyWebSocket {
    isSupport: boolean;
    config: SocketConfig;
    ws: WebSocket | undefined;
    needClose: boolean;
    isConnecting: boolean;
    private callbacks;
    private cacheData;
    constructor(config: SocketConfig);
    connect(): WebSocket | undefined;
    close(): void;
    send(data: Data): void;
    subscribe(calls: CallFunction | CallFunction[], data?: Data, key?: string): void;
    unSubscribe(key: string, data: Data): void;
    clear(): void;
    private testConnect;
    private onOpen;
    private onMessage;
    private onClose;
    private onError;
}
export {};
