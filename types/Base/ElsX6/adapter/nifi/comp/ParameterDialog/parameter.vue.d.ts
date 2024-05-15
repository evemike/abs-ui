import { IParameter } from "./index.ts";
interface Props {
    parameterTableData: IParameter.AddFormParameter[];
    id: string;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:parameterTableData": (v: IParameter.AddFormParameter[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>> & {
    "onUpdate:parameterTableData"?: ((v: IParameter.AddFormParameter[]) => any) | undefined;
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
