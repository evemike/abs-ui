import { Graph, Node, Markup } from "@antv/x6";
import { IElsX6 } from "../inter";
export declare const DEFAULT_GRAPH_CONFIG: Graph.Options;
export declare const DEFAULT_TEST: {};
export declare const DEFAULT_EDGE: {
    inherit: string;
    test: {};
    attrs: {
        line: {
            stroke: string;
            strokeWidth: number;
            targetMarker: {
                name: string;
            };
        };
    };
    defaultLabel: {
        markup: Markup.JSONMarkup;
        attrs: {
            fo: {
                width: number;
                height: number;
                x: number;
                y: number;
            };
        };
        position: {
            distance: number;
            options: {
                keepGradient: boolean;
            };
        };
    };
    label: {};
};
export declare const DEFAULT_PORTS_GROUPS: any;
export declare const DEFAULT_NODE_PORTS: {
    groups: any;
    items: {
        id: string;
        group: string;
    }[];
};
export declare const DEFAULT_NODE: Node.Metadata;
export declare const DEFAULT_NODE_ELEM: IElsX6.NodeMarkup;
export declare const DEFAULT_NODE_TAB_HEADER: IElsX6.NodeMarkup;
export declare const EDGE_CONTEXT_MENU: IElsX6.NodeMarkup[];
export declare const NODE_CONTEXT_MENU: IElsX6.NodeMarkup[];
export declare const BLANK_CONTEXT_MENU: IElsX6.NodeMarkup[];
export declare const TEST_NODE: IElsX6.GraphNode;
export declare const TIP_NODE: IElsX6.GraphNode;
export declare const registerEdge: (edgeMetadata?: any) => void;
export declare const registerVueNode: (nodeMetadata?: any) => void;
export declare const DEFAULT_ICON_LABEL: Record<string, string>;
