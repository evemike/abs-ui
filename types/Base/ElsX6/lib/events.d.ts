/// <reference types="node" />
import { Cell, Graph } from "@antv/x6";
import { GraphForm } from "./form";
import { Ref } from "vue";
import { GraphShadow } from "./shadow";
import { IElsX6 } from "../inter";
export declare class GraphEvents {
    constructor(config: IElsX6.GraphEventsConfig);
    graphShadow: GraphShadow;
    graphForm: GraphForm;
    contextmenuRef: IElsX6.GraphEventsConfig['contextmenuRef'];
    containerBox: Ref<HTMLElement | undefined>;
    graph: Graph | undefined;
    private events;
    currentKeydown: Set<string>;
    selectedCells: import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    clipboardCells: import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    clickHandle: NodeJS.Timeout | undefined;
    hasEvent(name: string): boolean;
    eventCall(name: keyof IElsX6.Events, ...args: any): void;
    private done;
    private blank;
    private cell;
    private edge;
    private node;
    resetGraph(graph: Graph): this;
    onMounted(context: IElsX6.Context): this;
    clipboard(): void;
    keyevent(): void;
    registerEvent(): this;
}
