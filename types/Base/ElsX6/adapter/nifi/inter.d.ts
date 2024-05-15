import type { IElsForm } from "../../../ElsForm";
import { AdapterNifi } from "./main";
import type { Cell } from "@antv/x6";
export declare namespace INifi {
    interface NodeModel {
        name: string | string[];
        markup?: Record<string, any>;
        excludeKeys?: string[];
        selfFormColumn?: IElsForm.Column;
        initTabs?: (cell: Cell, nifi: AdapterNifi) => any[];
    }
    type UseNode = () => NodeModel;
    type NodeMetadata = Map<string, NodeModel>;
}
