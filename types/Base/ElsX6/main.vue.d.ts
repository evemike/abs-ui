import { IElsX6 } from "./inter";
import { Graph } from "@antv/x6";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.Props>, {
    menuConfig: () => {
        enabled: boolean;
    };
    contextmenuConfig: () => {};
    edgeLabelConfig: () => {};
    defaultNodeMarkup: () => IElsX6.NodeMarkup;
    graphConfig: () => {};
    events: () => {};
}>, {
    graph: import("vue").ShallowRef<Graph | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.Props>, {
    menuConfig: () => {
        enabled: boolean;
    };
    contextmenuConfig: () => {};
    edgeLabelConfig: () => {};
    defaultNodeMarkup: () => IElsX6.NodeMarkup;
    graphConfig: () => {};
    events: () => {};
}>>>, {
    events: IElsX6.Events;
    graphConfig: Graph.Options;
    menuConfig: IElsX6.GraphMenuConfig;
    contextmenuConfig: IElsX6.GraphContextmenuConfig;
    edgeLabelConfig: IElsX6.EdgeLabelConfig;
    defaultNodeMarkup: IElsX6.NodeMarkup;
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
