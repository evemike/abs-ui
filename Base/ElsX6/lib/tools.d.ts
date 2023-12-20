import { Ref } from "vue";
import { Graph } from "@antv/x6";
export declare class GraphTools {
    constructor();
    graph: Graph | undefined;
    zoomSize: number;
    zoomSpeed: number;
    canUndo: Ref<boolean>;
    canRedo: Ref<boolean>;
    init(graph: Graph): void;
    zoomBig(): void;
    zoomSmall(): void;
    zoomFit(): void;
    undo(): void;
    redo(): void;
    cleanHistory(): void;
    export(): void;
    import(): void;
}
