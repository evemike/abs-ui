import type { Cell } from "@antv/x6";
import type { KettleEvent } from "./event";
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
        save?: NodeApi;
        initForm?: NodeApi;
        submitForm?: NodeApi;
    }
    type UseNode = () => NodeModel;
    type NodeApi = (cell: Cell, e: KettleEvent) => void;
}
