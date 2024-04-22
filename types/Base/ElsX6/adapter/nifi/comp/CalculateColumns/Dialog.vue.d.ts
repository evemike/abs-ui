interface dialogProps {
    modelValue: boolean;
    fieldData: any;
    inputValue: any[];
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<dialogProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: boolean) => void;
    handleUpdateValue: (v: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<dialogProps>>> & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    onHandleUpdateValue?: ((v: any) => any) | undefined;
}, {}, {}>;
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
