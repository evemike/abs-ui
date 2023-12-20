import { Cell, Graph } from "@antv/x6";
import { GraphForm } from "./form";
import { GraphContextmenu } from "./contextmenu";
import { GraphShadow } from "./shadow";
export declare class GraphEvents {
    constructor(graphShadow: GraphShadow, form: GraphForm, graphContextmenu: GraphContextmenu);
    graphShadow: GraphShadow;
    graphForm: GraphForm;
    graphContextmenu: GraphContextmenu;
    private graph;
    currentKeydown: Set<string>;
    selectedCells: import("vue").Ref<Cell<Cell.Properties>[]> | import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    clipboardCells: import("vue").Ref<Cell<Cell.Properties>[]> | import("vue").ShallowRef<Cell<Cell.Properties>[]>;
    private done;
    private blank;
    private cell;
    private edge;
    private node;
    resetGraph(graph: Graph): this;
    clipboard(): void;
    keyevent(box: HTMLElement): void;
    registerEvent(box: HTMLElement): this;
}
