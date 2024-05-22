import type { Cell } from "@antv/x6";
import type { KettleEvent } from "./event";
import { AdapterKettle } from "./main";
export declare namespace IKettle {
    interface NodeModel {
        name: string;
        markup: Record<string, any>;
        tabs: any[];
        metadata: Record<string, any>;
        step?: Record<string, any>;
        init?: NodeApi;
        open?: NodeApi;
        submit?: NodeApi;
        submitInit?: NodeApi;
        save?: NodeApi;
        saveInit?: NodeApi;
        initForm?: NodeApi;
        submitForm?: NodeApi;
    }
    type UseNode = (kettle: AdapterKettle) => NodeModel;
    type NodeApi = (cell: Cell, e: KettleEvent) => void;
    type NodeMetadata = Map<string, NodeModel>;
}
