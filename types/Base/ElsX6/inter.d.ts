import type { Graph, Node, Cell, Edge, EventArgs } from "@antv/x6";
import type { IElsElem } from "../ElsElem";
import type { ElDrawer, ElDialog } from "element-plus";
import { GraphShadow } from "./lib/shadow";
import { GraphForm } from "./lib/form";
import { GraphEvents } from "./lib/events";
import { Ref } from "vue";
import Markdown from "./components/markdown.vue";
import Dialog from "./components/dialog.vue";
import Contextmenu from "./components/contextmenu.vue";
import Drawer from "./components/drawer.vue";
import { GraphPlugins } from "./lib/plugins";
import { GraphTools } from "./lib/tools";
import { IGrouporder } from "../../utils/grouporder";
export declare namespace IElsX6 {
    interface Props {
        config?: GraphConfig;
        graphConfig?: Graph.Options;
        nodeListConfig?: NodeListProps;
        model?: GraphModel;
        menuConfig?: GraphMenuConfig;
        drawerConfig?: InstanceType<typeof ElDrawer>["$props"];
        dialogConfig?: Pick<DialogProps, "config" | "elem">;
        pluginsConfig?: Record<string, Record<string, any>>;
        contextmenuConfig?: GraphContextmenuConfig;
        edgeLabelConfig?: EdgeLabelConfig;
        defaultNodeMarkup?: NodeMarkup;
        register?: (Graph: Graph) => void;
        events?: Events;
        viewModel?: boolean;
    }
    interface MenuProps {
        config?: GraphMenuConfig;
        context?: Context;
    }
    interface EdgeLabelProps {
        edge: Edge;
        context: Context;
        config: EdgeLabelConfig;
    }
    interface DrawerProps {
        context: Context;
        config?: InstanceType<typeof ElDrawer>["$props"];
    }
    interface MarkdownProps {
        context: Context;
    }
    interface ContextmenuProps {
        context: Context;
        config?: GraphContextmenuConfig;
    }
    interface NodeListProps {
        enabled?: boolean;
        nodeList?: GraphNode[] | Ref<GraphNode[]>;
        initNodeFn?: (node: GraphNode) => Promise<Node.Metadata>;
        graph?: Graph;
    }
    interface DialogProps {
        config?: InstanceType<typeof ElDialog>["$props"] & {
            showFooter?: boolean;
        };
        context: Context;
        elem?: IElsElem.Elem;
    }
    interface GraphMenuConfig {
        enabled?: boolean;
        viewModel?: boolean;
        filter?: IGrouporder.Filter<any>;
        order?: IGrouporder.Order<any>;
        group?: IGrouporder.Group<any>;
        elems?: IElsElem.Elem[] | Ref<IElsElem.Elem[]>;
    }
    type DefaultMenuNames = "elems" | "import" | "export" | "undo" | "redo" | "zoomBig" | "zoomSmall" | "save" | "help" | "fullscreen";
    interface EdgeLabelConfig {
        enabled?: boolean;
        icon?: number;
        icons?: any[] | {
            icon: any;
            value: any;
            prop: string;
            tip?: string;
        }[];
        popoverElem?: IElsElem.Elem;
        prop?: string;
        tipSteps?: CellStep[];
        elem?: IElsElem.Elem;
        disabled?: boolean;
        params?: Record<string, any>;
        title?: string;
        contentElem?: IElsElem.Elem;
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
        groupName?: string;
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
        edge?: EdgeLabelConfig;
    }
    interface GraphContextmenuConfig {
        useDefaultMenu?: boolean;
        node?: IElsElem.Elem[];
        edge?: IElsElem.Elem[];
        blank?: IElsElem.Elem[];
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
        dialogRef: Ref<InstanceType<typeof Dialog> | undefined>;
        elsX6Ref: Ref<HTMLElement | undefined>;
        drawerRef: Ref<InstanceType<typeof Drawer> | undefined>;
    }
    type CellStep = "init" | "save" | "running" | "stop" | "pause" | "success" | "error" | "finish" | "loading" | "disabled" | "undisabled" | "invalid" | "checking";
    type Mode = "edit" | "view" | "running" | "delete";
    interface ContextmenuConfig {
        node?: IElsElem.Elem[];
        edge?: IElsElem.Elem[];
        blank?: IElsElem.Elem[];
        useDefaultMenu?: boolean;
    }
    interface GraphEventsConfig {
        graphShadow: GraphShadow;
        graphForm: GraphForm;
        contextmenuRef: Ref<InstanceType<typeof Contextmenu> | undefined>;
        events: Events;
        containerBox: Ref<HTMLElement | undefined>;
    }
    type Events = {
        mounted?: (arg: Context) => void;
        "init:cell"?: (cell: Cell) => void;
        "init:node"?: (node: Node) => void;
        "init:edge"?: (edge: Edge) => void;
        "render:done"?: (e: GraphEvents) => void;
        "dialog:cancel"?: () => void;
        "dialog:submit"?: (args: any) => void;
        "drawer:cancel"?: (cell: Cell) => void;
        "drawer:submit"?: (cell: Cell, close: () => void) => void;
        "cell:selectAll"?: (cells: Cell[]) => void;
        "currentNode:change"?: (newcell: Cell, oldcell: Cell) => void;
        "node:selectAll"?: (cells: Cell[]) => void;
    } & {
        [key in keyof EventArgs]?: (e: EventArgs[key]) => void;
    };
    interface CellData extends Record<string, any> {
        id: string;
        cell: Cell;
        status: Ref<Record<string, any>>;
        step: Ref<CellStep>;
        selected: Ref<boolean>;
        stepTip: Ref<string>;
        label: Ref<string>;
        desc: Ref<string>;
        icon: string;
        name: string;
        metadata?: any;
        tabs: Ref<any[]>;
        isEdge: boolean;
        isNode: boolean;
    }
    interface EdgeData extends CellData {
        source: Ref<string>;
        target: Ref<string>;
        labelConfig: Ref<EdgeLabelConfig>;
    }
    interface NodeData extends CellData {
        inCells: Ref<Set<string>>;
        outCells: Ref<Set<string>>;
    }
}
