import { IElsForm } from "./inter";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsForm.Props>, {
    size: string;
    autoClean: boolean;
    modelValue: () => {};
    params: () => {};
}>, {
    formProps: Set<string> & Omit<Set<string>, keyof Set<any>>;
    submit: (format?: (k: string, v: any) => [string, any]) => Promise<unknown>;
    elem: import("../ElsElem").IElsElem.Elem;
    context: import("../ElsElem").IElsElem.Context;
    formRef: import("vue").Ref<any>;
    formApi: (name: string, ...args: any) => any;
    validate: (...args: any) => Promise<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: Record<string, any>) => void;
    change: (name: string, value: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsForm.Props>, {
    size: string;
    autoClean: boolean;
    modelValue: () => {};
    params: () => {};
}>>> & {
    onChange?: ((name: string, value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((v: Record<string, any>) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    size: "default" | "small" | "large";
    params: Record<string, any>;
    autoClean: boolean;
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
