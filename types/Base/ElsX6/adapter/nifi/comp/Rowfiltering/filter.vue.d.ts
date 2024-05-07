import { IFilter } from "./index.ts";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<IFilter.FilterProps>, {
    validateEvent: () => Promise<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    delAllNode: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<IFilter.FilterProps>>> & {
    onDelAllNode?: ((...args: any[]) => any) | undefined;
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
