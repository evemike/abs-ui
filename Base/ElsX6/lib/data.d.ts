import { Graph, Node, Markup } from "@antv/x6";
import { IElsX6 } from "../inter";
export declare const DEFAULT_GRAPH_CONFIG: Graph.Options;
export declare const DEFAULT_TEST: {};
export declare const DEFAULT_EDGE: {
    inherit: string;
    test: {};
    attrs: {
        line: {
            stroke: string;
            strokeWidth: number;
            targetMarker: {
                name: string;
            };
        };
    };
    defaultLabel: {
        markup: Markup.JSONMarkup;
        attrs: {
            fo: {
                width: number;
                height: number;
                x: number;
                y: number;
            };
        };
        position: {
            distance: number;
            options: {
                keepGradient: boolean;
            };
        };
    };
    label: {};
};
export declare const DEFAULT_PORTS_GROUPS: any;
export declare const DEFAULT_NODE_PORTS: {
    groups: any;
    items: {
        id: string;
        group: string;
    }[];
};
export declare const DEFAULT_NODE: Node.Metadata;
export declare const DEFAULT_NODE_ELEM: IElsX6.NodeMarkup;
export declare const DEFAULT_NODE_TAB_HEADER: IElsX6.NodeMarkup;
export declare const EDGE_CONTEXT_MENU: IElsX6.NodeMarkup[];
export declare const NODE_CONTEXT_MENU: IElsX6.NodeMarkup[];
export declare const BLANK_CONTEXT_MENU: IElsX6.NodeMarkup[];
export declare const TEST_NODE: IElsX6.GraphNode;
export declare const NODES: {
    name: string;
    shape: string;
    icon: string;
    label: string | undefined;
    tabs: ({
        label: string;
        type: string;
        elem: {
            tag: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly prefixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly autofocus: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                    readonly resize: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                        minRows?: number | undefined;
                        maxRows?: number | undefined;
                    }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                        minRows?: number | undefined;
                        maxRows?: number | undefined;
                    }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
                    readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                    readonly formatter: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly parser: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly placeholder: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly form: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly suffixIcon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly prefixIcon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                    readonly autofocus: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                }>> & {
                    onChange?: ((value: string) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                    onInput?: ((value: string) => any) | undefined;
                    onBlur?: ((evt: FocusEvent) => any) | undefined;
                    onFocus?: ((evt: FocusEvent) => any) | undefined;
                    onClear?: (() => any) | undefined;
                    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                    onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "clear") => void);
                rawAttrs: {
                    [x: string]: unknown;
                };
                slots: Readonly<{
                    [name: string]: import("vue").Slot<any> | undefined;
                }>;
                containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
                containerKls: import("vue").ComputedRef<unknown[]>;
                wrapperKls: import("vue").ComputedRef<string[]>;
                attrs: import("vue").ComputedRef<Record<string, unknown>>;
                form: import("element-plus").FormContext | undefined;
                formItem: import("element-plus").FormItemContext | undefined;
                inputId: import("vue").Ref<string | undefined>;
                inputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                inputDisabled: import("vue").ComputedRef<boolean>;
                nsInput: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                nsTextarea: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                input: import("vue").ShallowRef<HTMLInputElement | undefined>;
                textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
                hovering: import("vue").Ref<boolean>;
                isComposing: import("vue").Ref<boolean>;
                passwordVisible: import("vue").Ref<boolean>;
                countStyle: import("vue").Ref<import("vue").StyleValue>;
                textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
                _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
                wrapperRef: import("vue").ShallowRef<HTMLElement | undefined>;
                isFocused: import("vue").Ref<boolean>;
                handleFocus: (event: FocusEvent) => void;
                handleBlur: (event: FocusEvent) => void;
                needStatusIcon: import("vue").ComputedRef<boolean>;
                validateState: import("vue").ComputedRef<"" | "error" | "success" | "validating">;
                validateIcon: import("vue").ComputedRef<any>;
                passwordIcon: import("vue").ComputedRef<any>;
                containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                nativeInputValue: import("vue").ComputedRef<string>;
                showClear: import("vue").ComputedRef<boolean>;
                showPwdVisible: import("vue").ComputedRef<boolean>;
                isWordLimitVisible: import("vue").ComputedRef<boolean>;
                textLength: import("vue").ComputedRef<number>;
                inputExceed: import("vue").ComputedRef<boolean>;
                suffixVisible: import("vue").ComputedRef<boolean>;
                recordCursor: () => void;
                setCursor: () => void;
                resizeTextarea: () => void;
                createOnceInitResize: (resizeTextarea: () => void) => () => void;
                onceInitSizeTextarea: () => void;
                setNativeInputValue: () => void;
                handleInput: (event: Event) => Promise<void>;
                handleChange: (event: Event) => void;
                handleCompositionStart: (event: CompositionEvent) => void;
                handleCompositionUpdate: (event: CompositionEvent) => void;
                handleCompositionEnd: (event: CompositionEvent) => void;
                handlePasswordVisible: () => void;
                focus: () => Promise<void>;
                blur: () => void | undefined;
                handleMouseLeave: (evt: MouseEvent) => void;
                handleMouseEnter: (evt: MouseEvent) => void;
                handleKeydown: (evt: KeyboardEvent) => void;
                select: () => void;
                clear: () => void;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}, {}>> & Record<string, any>;
                CircleClose: any;
                NOOP: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: string) => boolean;
                input: (value: string) => boolean;
                change: (value: string) => boolean;
                focus: (evt: FocusEvent) => boolean;
                blur: (evt: FocusEvent) => boolean;
                clear: () => boolean;
                mouseleave: (evt: MouseEvent) => boolean;
                mouseenter: (evt: MouseEvent) => boolean;
                keydown: (evt: Event | KeyboardEvent) => boolean;
                compositionstart: (evt: CompositionEvent) => boolean;
                compositionupdate: (evt: CompositionEvent) => boolean;
                compositionend: (evt: CompositionEvent) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly prefixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly autofocus: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            }, {
                readonly type: string;
                readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
                readonly label: string;
                readonly id: string;
                readonly disabled: boolean;
                readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly autosize: import("element-plus").InputAutoSize;
                readonly autocomplete: string;
                readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly containerRole: string;
                readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly inputStyle: import("vue").StyleValue;
                readonly autofocus: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }, {}>> & Record<string, any>;
            prop: string;
            ":modelValue": string;
            "@update:modelValue": ({ label, $ }: any) => void;
        };
        validate?: undefined;
        default?: undefined;
        column?: undefined;
    } | {
        label: string;
        validate: boolean;
        default: boolean;
        type: string;
        column: ({
            prop: string;
            label: string;
            value: string | undefined;
            required: boolean;
            trigger?: undefined;
            message?: undefined;
            rules?: undefined;
        } | {
            prop: string;
            label: string;
            value: string;
            required: boolean;
            trigger: string;
            message: string;
            rules?: undefined;
        } | {
            prop: string;
            label: string;
            value: string;
            required: boolean;
            rules: ({
                required: boolean;
                min?: undefined;
            } | {
                min: number;
                required?: undefined;
            })[];
            trigger?: undefined;
            message?: undefined;
        } | {
            prop: string;
            label: string;
            value: string;
            required?: undefined;
            trigger?: undefined;
            message?: undefined;
            rules?: undefined;
        })[];
        elem?: undefined;
    })[];
    apis: {};
    markup: IElsX6.NodeMarkup;
}[];
export declare const TIP_NODE: IElsX6.GraphNode;
export declare const registerEdge: (edgeMetadata?: any) => void;
export declare const registerVueNode: (nodeMetadata?: any) => void;
export declare const DEFAULT_ICON_LABEL: Record<string, string>;
