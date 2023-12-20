import { IElsElem } from "../../ElsElem";
import { Cell, Graph } from "@antv/x6";
import { GraphShadow } from "./shadow";
export declare class GraphContextmenu {
    constructor(config: Record<string, IElsElem.Elem[]>, graphShadow: GraphShadow);
    graphShadow: GraphShadow;
    config: Record<string, IElsElem.Elem[]>;
    graph: Graph | undefined;
    box: HTMLDivElement | undefined;
    menus: Record<string, IElsElem.Elem[]>;
    menu: import("vue").ShallowRef<IElsElem.Elem | undefined>;
    visible: import("vue").Ref<boolean>;
    key: import("vue").Ref<number>;
    offset: number[];
    x: import("vue").Ref<number>;
    y: import("vue").Ref<number>;
    params: import("vue").Ref<{}> | import("vue").ShallowRef<{}>;
    setGraph(graph: Graph): this;
    setDomBox(box: HTMLDivElement): this;
    initMenus(): {
        node: import("..").IElsX6.NodeMarkup[];
        edge: import("..").IElsX6.NodeMarkup[];
        blank: import("..").IElsX6.NodeMarkup[];
    };
    createContextmenu(e: MouseEvent, cell?: Cell): void;
    close(): void;
    clear(): void;
}
