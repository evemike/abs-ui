import { IElsListForm } from "./inter";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsListForm.Props>, {
    isAdd: boolean;
    isNew: boolean;
    keyName: () => {
        propKey: string;
        valueKey: string;
    };
    disabled: boolean;
    keys: () => never[];
    modelValue: () => {};
    size: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Record<string, any> | Record<string, any>[]) => void;
    add: (data: {
        prop: string;
        desc?: string | undefined;
        type: string;
    }) => void;
    change: (value: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsListForm.Props>, {
    isAdd: boolean;
    isNew: boolean;
    keyName: () => {
        propKey: string;
        valueKey: string;
    };
    disabled: boolean;
    keys: () => never[];
    modelValue: () => {};
    size: string;
}>>> & {
    onChange?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Record<string, any> | Record<string, any>[]) => any) | undefined;
    onAdd?: ((data: {
        prop: string;
        desc?: string | undefined;
        type: string;
    }) => any) | undefined;
}, {
    keys: IElsListForm.FormDescription[];
    modelValue: Record<string, any> | Record<string, any>[];
    size: "" | "default" | "small" | "large";
    disabled: boolean;
    keyName: {
        propKey: string;
        valueKey: string;
    };
    isAdd: boolean;
    isNew: boolean;
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
