import { Cell } from "@antv/x6";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    value?: string | undefined;
}>, {
    init: (str: string) => void;
    initByFn: (fn: () => Promise<string>) => Promise<void>;
    initByApi: (api: Record<string, any>) => void;
    initByFilePath: (path: string) => void;
    initByCell: (cell: Cell<Cell.Properties>) => void;
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    value?: string | undefined;
}>>>, {}, {}>;
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
