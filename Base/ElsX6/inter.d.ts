import type { Graph, Node, Cell, Edge } from "@antv/x6";
import type { IElsElem } from "../ElsElem";
import type { ElDrawer } from "element-plus";
import { GraphShadow } from "./lib/shadow";
import { GraphForm } from "./lib/form";
import { GraphEvents } from "./lib/events";
import { Ref } from "vue";
import Markdown from "./components/markdown.vue";
import { GraphPlugins } from "./lib/plugins";
import { GraphTools } from "./lib/tools";
export declare namespace IElsX6 {
    interface Props {
        config?: GraphConfig;
        graphConfig?: Graph.Options;
        nodeListConfig?: NodeListProps;
        model?: GraphModel;
        menu?: GraphMenu;
        drawerConfig?: InstanceType<typeof ElDrawer>["$props"];
        pluginsConfig?: Record<string, Record<string, any>>;
        contextmenuConfig?: Record<string, IElsElem.Elem[]>;
        edgeLabelConfig?: GraphEdgeLabel;
        defaultNodeMarkup?: NodeMarkup;
        register?: (Graph: Graph) => void;
        events?: Record<string, (...args: any) => void>;
        viewModel?: boolean;
    }
    interface MenuProps {
        config?: GraphMenu;
        title?: string;
        context?: Context;
    }
    interface EdgeLabelProps {
        edge: Edge;
        graph: Graph;
        graphShadow: GraphShadow;
        graphForm: GraphForm;
        graphEvents: GraphEvents;
        defaultLabel: GraphEdgeLabel;
    }
    interface MarkdownProps {
        context: Context;
    }
    interface NodeListProps {
        enabled?: boolean;
        nodeList?: GraphNode[];
        initNodeFn?: (node: GraphNode) => Promise<Node.Metadata>;
        graph?: Graph;
    }
    interface GraphMenu {
        enabled?: boolean;
        viewModel?: boolean;
    }
    interface GraphEdgeLabel {
        icon?: string;
        icons?: string[] | {
            icon: string;
            value: any;
            label?: string;
        }[];
        popoverElem?: IElsElem.Elem;
        prop?: string;
        tipSteps?: CellStep[];
    }
    interface GraphConfig extends Graph.Options {
    }
    interface GraphModel {
        cells: Cell[];
        formValue: Record<string, any>;
        status: Record<string, any>;
    }
    interface GraphNode {
        name: string;
        shape?: string;
        label: string;
        desc?: string;
        group?: string;
        markup?: NodeMarkup;
        icon?: string;
        contextmenu?: IElsElem.Elem[];
        tabs?: NodeTab[];
        events?: NodeEvent[];
        apis?: Record<string, NodeApi>;
        IORules?: NodeIORule[];
        ports?: {
            items?: any[];
            groups?: any;
        };
        edge?: GraphEdgeLabel;
    }
    interface NodeMarkup extends IElsElem.Elem {
    }
    interface NodeTab extends IElsElem.Elem {
    }
    interface NodeEvent {
        name: string;
        handle: string;
        context?: Record<string, any>;
    }
    interface NodeApi {
        url: string;
        method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
        params?: Record<string, any>;
        data?: Record<string, any>;
        result?: string;
    }
    interface NodeIORule {
    }
    interface Context {
        graph: Ref<Graph | undefined>;
        graphShadow: GraphShadow;
        graphForm: GraphForm;
        graphEvents: GraphEvents;
        graphPlugins: GraphPlugins;
        graphTools: GraphTools;
        markdownRef: Ref<InstanceType<typeof Markdown> | undefined>;
    }
    type CellStep = "init" | "save" | "running" | "stop" | "pause" | "success" | "error" | "finish" | "loading";
    type Mode = "edit" | "view" | "running" | "delete";
    interface ContextmenuConfig {
        node?: IElsElem.Elem[];
        edge?: IElsElem.Elem[];
        blank?: IElsElem.Elem[];
        useDefaultMenu?: boolean;
    }
}
