import { Ref } from "vue";
import { IElsElem } from "../../ElsElem";
import { Cell, Graph } from "@antv/x6";
import { IElsX6 } from "../inter";
import { GraphShadow } from "./shadow";
export declare class GraphContextmenu {
    constructor(props: IElsX6.ContextmenuProps);
    context: IElsX6.Context;
    graphShadow: GraphShadow;
    config: IElsX6.GraphContextmenuConfig;
    graph: Ref<Graph | undefined>;
    box: HTMLDivElement | undefined;
    menus: Record<string, IElsElem.Elem[]>;
    menu: import("vue").ShallowRef<IElsElem.Elem | undefined>;
    visible: Ref<boolean>;
    key: Ref<number>;
    offset: number[];
    x: Ref<number>;
    y: Ref<number>;
    params: import("vue").ShallowRef<{}>;
    setGraph(graph: Graph): this;
    setDomBox(box: HTMLDivElement): this;
    initMenus(): {
        node: IElsX6.NodeMarkup[];
        edge: IElsX6.NodeMarkup[];
        blank: IElsX6.NodeMarkup[];
    };
    createContextmenu(e: MouseEvent | {
        x: number;
        y: number;
    }, cell?: Cell): void;
    close(): void;
    clear(): void;
}
