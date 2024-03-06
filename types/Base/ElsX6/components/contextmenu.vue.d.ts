import { IElsX6 } from "../inter";
import { GraphContextmenu } from "../lib/contextmenu";
import type { Cell } from "@antv/x6";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.ContextmenuProps>, {
    config: () => {};
}>, {
    graphContextmenu: GraphContextmenu;
    close: () => void;
    open: (p: MouseEvent | {
        x: number;
        y: number;
    }, cell?: Cell<Cell.Properties> | undefined) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.ContextmenuProps>, {
    config: () => {};
}>>>, {
    config: IElsX6.GraphContextmenuConfig;
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
