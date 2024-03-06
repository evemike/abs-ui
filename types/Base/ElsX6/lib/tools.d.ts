import { Ref } from "vue";
import { Graph } from "@antv/x6";
import { IElsX6 } from "../inter";
export declare class GraphTools {
    constructor(config: Partial<IElsX6.Context>);
    elsX6Ref: Ref<HTMLElement | undefined> | undefined;
    graph: Graph | undefined;
    zoomSize: number;
    zoomSpeed: number;
    canUndo: Ref<boolean>;
    canRedo: Ref<boolean>;
    isFullScreen: Ref<boolean>;
    init(graph: Graph): void;
    zoomBig(): void;
    zoomSmall(): void;
    zoomFit(): void;
    undo(): void;
    redo(): void;
    cleanHistory(): void;
    fullScreen(): void;
    exitFullScreen(): void;
    toggleFullScreen(): void;
    export(): void;
    import(): void;
}
