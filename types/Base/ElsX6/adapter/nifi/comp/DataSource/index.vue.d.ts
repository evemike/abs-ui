interface Props {
    cascaderProps?: any;
    treeProps?: any;
    autoSql?: boolean;
    showCascader?: boolean;
    showSql?: boolean;
    formData?: any;
    prop?: string;
    disabled?: boolean;
    propOutput?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    cascaderProps: () => {
        label: string;
        leaf: string;
        children: string;
        value: string;
        lazy: boolean;
        emitPath: boolean;
    };
    treeProps: () => {
        label: string;
        isLeaf: string;
        children: string;
    };
    showCascader: boolean;
    showSql: boolean;
    autoSql: boolean;
    prop: string;
    disabled: boolean;
    propOutput: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    cascaderProps: () => {
        label: string;
        leaf: string;
        children: string;
        value: string;
        lazy: boolean;
        emitPath: boolean;
    };
    treeProps: () => {
        label: string;
        isLeaf: string;
        children: string;
    };
    showCascader: boolean;
    showSql: boolean;
    autoSql: boolean;
    prop: string;
    disabled: boolean;
    propOutput: string;
}>>>, {
    disabled: boolean;
    prop: string;
    treeProps: any;
    propOutput: string;
    cascaderProps: any;
    autoSql: boolean;
    showCascader: boolean;
    showSql: boolean;
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
