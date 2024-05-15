import type { Edge } from "@antv/x6";
import type { AdapterNifi } from "../main";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    nifi: AdapterNifi;
    cell: Edge;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (data: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    nifi: AdapterNifi;
    cell: Edge;
}>>> & {
    onChange?: ((data: any) => any) | undefined;
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
