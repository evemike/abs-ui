import { IElsScroll } from "./inter";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsScroll.Props>, {
    autoHide: boolean;
    trackClass: string;
    trackXClass: string;
    trackYClass: string;
    thumbClass: string;
    thumbXClass: string;
    thumbYClass: string;
    thumbMinSize: number;
    scrollClass: string;
    scrollYClass: string;
    scrollXClass: string;
    trackSize: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsScroll.Props>, {
    autoHide: boolean;
    trackClass: string;
    trackXClass: string;
    trackYClass: string;
    thumbClass: string;
    thumbXClass: string;
    thumbYClass: string;
    thumbMinSize: number;
    scrollClass: string;
    scrollYClass: string;
    scrollXClass: string;
    trackSize: number;
}>>>, {
    autoHide: boolean;
    thumbClass: string | [x: string, y: string];
    thumbXClass: string;
    thumbYClass: string;
    trackClass: string | [x: string, y: string];
    trackXClass: string;
    trackYClass: string;
    thumbMinSize: number;
    scrollClass: string;
    scrollYClass: string;
    scrollXClass: string;
    trackSize: number | [width: number, height: number];
}, {}>, {
    default?(_: {
        "hook:mounted": () => void;
    }): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
