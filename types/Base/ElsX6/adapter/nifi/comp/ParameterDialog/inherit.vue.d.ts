import { IParameter } from "./index.ts";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    tableData: IParameter.TableValue[];
    inheritedContexts: any[];
    id: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    tableData: IParameter.TableValue[];
    inheritedContexts: any[];
    id: string;
}>>> & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
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
