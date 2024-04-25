import type { Cell } from "@antv/x6";
import { NifiApi } from "./api";
import { NifiEvent } from "./event";
export declare class AdapterNifi {
    constructor(id: string);
    groupId: string;
    api: NifiApi;
    event: NifiEvent;
    edgeMeatadata: {
        name: string;
    };
    clientId: string;
    initClientId(): Promise<void>;
    initGraph(id?: string): Promise<void>;
    refresh(ct?: any): void;
    cellEdit(cell: Cell, ct?: any): void;
    cellDelete(cell: Cell, ct?: any): void;
}
