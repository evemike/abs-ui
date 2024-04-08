export interface ResizeDrawerProps {
    direction?: "top" | "left" | "bottom" | "right";
    minSize?: string;
    maxSize?: string;
    size?: string;
    visible?: boolean;
    title?: string;
    showClose?: boolean;
    destoryOnClose?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ResizeDrawerProps>, {
    direction: string;
    visible: boolean;
    maxSize: string;
    showClose: boolean;
    destoryOnClose: boolean;
}>, {
    visible: import("vue").Ref<boolean>;
    open: () => void;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (visible: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ResizeDrawerProps>, {
    direction: string;
    visible: boolean;
    maxSize: string;
    showClose: boolean;
    destoryOnClose: boolean;
}>>> & {
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
}, {
    visible: boolean;
    showClose: boolean;
    direction: "top" | "right" | "left" | "bottom";
    maxSize: string;
    destoryOnClose: boolean;
}, {}>, {
    title?(_: {}): any;
    operate?(_: {}): any;
    default?(_: {}): any;
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
