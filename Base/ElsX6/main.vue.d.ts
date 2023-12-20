import { IElsX6 } from "./inter";
import { Graph } from '@antv/x6';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.Props>, {
    nodeList: () => IElsX6.GraphNode[];
    showNodeList: boolean;
    menu: () => {
        enabled: boolean;
    };
    contextmenuConfig: () => {};
    edgeLabelConfig: () => {
        icons: string[];
    };
}>, {
    graph: import("vue").ShallowRef<Graph | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.Props>, {
    nodeList: () => IElsX6.GraphNode[];
    showNodeList: boolean;
    menu: () => {
        enabled: boolean;
    };
    contextmenuConfig: () => {};
    edgeLabelConfig: () => {
        icons: string[];
    };
}>>>, {
    menu: IElsX6.GraphMenu;
    nodeList: IElsX6.GraphNode[];
    showNodeList: boolean;
    contextmenuConfig: Record<string, import("../ElsElem").IElsElem.Elem[]>;
    edgeLabelConfig: IElsX6.GraphEdgeLabel;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
