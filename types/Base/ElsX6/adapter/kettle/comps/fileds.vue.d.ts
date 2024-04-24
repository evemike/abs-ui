interface Props {
    inputFileds?: string;
    inputProps?: any;
    outputFileds?: string;
    outputProps?: any;
    formdata?: any;
    data?: any[];
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    inputProps: () => {};
    outputProps: () => {};
    inputFileds: string;
    outputFileds: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: [input: any, output: any][]) => void;
    "update:data": (val: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    inputProps: () => {};
    outputProps: () => {};
    inputFileds: string;
    outputFileds: string;
}>>> & {
    onChange?: ((val: [input: any, output: any][]) => any) | undefined;
    "onUpdate:data"?: ((val: any[]) => any) | undefined;
}, {
    inputFileds: string;
    inputProps: any;
    outputFileds: string;
    outputProps: any;
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
