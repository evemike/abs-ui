import { IElsElem } from "../../ElsElem";
import { IElsX6 } from "../inter";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.DialogProps>, {
    config: () => {
        showClose: boolean;
        closeOnClickModal: boolean;
        showFooter: boolean;
    };
}>, {
    open: (e?: IElsElem.Elem | undefined) => void;
    close: () => void;
    setConfig: (key: string | Record<string, any>, val?: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsX6.DialogProps>, {
    config: () => {
        showClose: boolean;
        closeOnClickModal: boolean;
        showFooter: boolean;
    };
}>>>, {
    config: Partial<{
        readonly title: string;
        readonly center: boolean;
        readonly modelValue: boolean;
        readonly appendTo: string;
        readonly overflow: boolean;
        readonly showClose: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly ariaLevel: string;
        readonly alignCenter: boolean;
        readonly draggable: boolean;
        readonly fullscreen: boolean;
        readonly closeOnClickModal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly lockScroll: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly modal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly openDelay: number;
        readonly closeDelay: number;
        readonly trapFocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly headerAriaLevel: string;
        readonly appendToBody: boolean;
        readonly destroyOnClose: boolean;
    }> & Omit<{
        readonly title: string;
        readonly modelValue: boolean;
        readonly draggable: boolean;
        readonly appendToBody: boolean;
        readonly appendTo: string;
        readonly destroyOnClose: boolean;
        readonly closeOnClickModal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly lockScroll: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly modal: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly openDelay: number;
        readonly closeDelay: number;
        readonly trapFocus: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly headerAriaLevel: string;
        readonly center: boolean;
        readonly alignCenter: boolean;
        readonly overflow: boolean;
        readonly fullscreen: boolean;
        readonly showClose: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly ariaLevel: string;
        readonly width?: import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        readonly beforeClose?: import("element-plus").DialogBeforeCloseFn | undefined;
        readonly top?: string | undefined;
        readonly modalClass?: string | undefined;
        readonly zIndex?: number | undefined;
        readonly closeIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>))[], unknown, unknown> | undefined;
        onClose?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: (() => any) | undefined;
        onOpened?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onOpenAutoFocus?: (() => any) | undefined;
        onCloseAutoFocus?: (() => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly appendToBody: BooleanConstructor;
        readonly appendTo: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string & {}) | (() => string) | ((new (...args: any[]) => string & {}) | (() => string))[], unknown, unknown, "body", boolean>;
        readonly beforeClose: {
            readonly type: import("vue").PropType<import("element-plus").DialogBeforeCloseFn>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly destroyOnClose: BooleanConstructor;
        readonly closeOnClickModal: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly lockScroll: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly modal: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly openDelay: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly closeDelay: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly top: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modelValue: BooleanConstructor;
        readonly modalClass: StringConstructor;
        readonly width: {
            readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly zIndex: {
            readonly type: import("vue").PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly trapFocus: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly headerAriaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
        readonly center: BooleanConstructor;
        readonly alignCenter: BooleanConstructor;
        readonly closeIcon: {
            readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly draggable: BooleanConstructor;
        readonly overflow: BooleanConstructor;
        readonly fullscreen: BooleanConstructor;
        readonly showClose: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly title: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly ariaLevel: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    }>> & {
        onClose?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: (() => any) | undefined;
        onOpened?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onOpenAutoFocus?: (() => any) | undefined;
        onCloseAutoFocus?: (() => any) | undefined;
    }, "title" | "modelValue" | "draggable" | "appendToBody" | "appendTo" | "destroyOnClose" | "closeOnClickModal" | "closeOnPressEscape" | "lockScroll" | "modal" | "openDelay" | "closeDelay" | "trapFocus" | "headerAriaLevel" | "center" | "alignCenter" | "overflow" | "fullscreen" | "showClose" | "ariaLevel"> & {
        showFooter?: boolean | undefined;
    };
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
