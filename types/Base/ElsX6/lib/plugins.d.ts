import { Graph } from "@antv/x6";
export declare class GraphPlugins {
    constructor(config?: Record<string, any>);
    config: Record<string, any>;
    defaultConfig: Record<string, any>;
    names: string[];
    plugins: Record<string, any>;
    usePlugins(graph: Graph): void;
}
