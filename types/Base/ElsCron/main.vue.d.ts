import { IElsCron } from "./inter";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsCron.Props>, {
    elFormItem: () => {};
    showMessage: boolean;
    inlineMessage: boolean;
    labelPosition: string;
    rules: () => never[];
    layout: () => string[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (d: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsCron.Props>, {
    elFormItem: () => {};
    showMessage: boolean;
    inlineMessage: boolean;
    labelPosition: string;
    rules: () => never[];
    layout: () => string[];
}>>> & {
    "onUpdate:modelValue"?: ((d: any) => any) | undefined;
}, {
    showMessage: boolean;
    inlineMessage: boolean;
    rules: any[];
    elFormItem: Record<string, any>;
    labelPosition: "top" | "right" | "left";
    layout: ("second" | "minute" | "hour" | "day" | "month" | "week" | "year")[];
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
