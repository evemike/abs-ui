import { KettleApi } from "./api";
export declare class AdapterKettle {
    constructor();
    api: KettleApi;
    nodeList: import("vue").Ref<never[]>;
    init(): void;
    initNodeList(): Promise<void>;
}
