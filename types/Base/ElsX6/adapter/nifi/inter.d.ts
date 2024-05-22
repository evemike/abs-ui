import type { IElsForm } from "../../../ElsForm";
import { AdapterNifi } from "./main";
import type { Cell } from "@antv/x6";
export declare namespace INifi {
    interface NodeModel {
        name: string | string[];
        markup?: Record<string, any>;
        excludeKeys?: string[];
        selfFormColumn?: IElsForm.Column;
        initSelfFormColumn?: (cell: Cell, nifi: AdapterNifi) => any[];
        initTabs?: (cell: Cell, nifi: AdapterNifi) => any[];
        hooksInit?: NodeApi;
        hooksOpen?: NodeApi;
        hooksSubmit?: NodeApi;
    }
    type NodeApi = (cell: Cell, nifi: AdapterNifi) => void;
    type UseNode = (nifi: AdapterNifi) => NodeModel;
    type NodeMetadata = Map<string, NodeModel>;
}
