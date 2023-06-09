import type { PropType as __PropType } from 'vue';
import { IElsForm } from "./inter";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<Record<string, any>>;
        required: true;
        default: () => {};
    };
    column: {
        type: __PropType<IElsForm.Column>;
        required: true;
    };
    size: {
        type: __PropType<"small" | "default" | "large" | undefined>;
        required: false;
        default: string;
    };
    UIPluging: {
        type: __PropType<IElsForm.UIPluging | undefined>;
        required: false;
    };
    autoClean: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {
    formProps: Set<string>;
    submit: (call?: (k: string, v: any) => undefined | [string, any]) => Promise<Record<string, any>>;
    elem: import("../ElsElem").IElsElem.Elem;
    context: import("../ElsElem").IElsElem.Context;
    formRef: import("vue").Ref<any>;
    formApi: (name: string, ...args: any) => any;
    validate: (...args: any) => Promise<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<Record<string, any>>;
        required: true;
        default: () => {};
    };
    column: {
        type: __PropType<IElsForm.Column>;
        required: true;
    };
    size: {
        type: __PropType<"small" | "default" | "large" | undefined>;
        required: false;
        default: string;
    };
    UIPluging: {
        type: __PropType<IElsForm.UIPluging | undefined>;
        required: false;
    };
    autoClean: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    size: "small" | "default" | "large" | undefined;
    modelValue: Record<string, any>;
    autoClean: boolean | undefined;
}>;
export default _sfc_main;
