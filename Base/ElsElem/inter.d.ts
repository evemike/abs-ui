import type { Component, CSSProperties, VNode, Fragment, Teleport, Suspense, KeepAlive, TransitionGroup, SetupContext, FunctionalComponent } from "vue";
export declare namespace IElsElem {
    interface Props {
        elem: Elem;
        context: Context;
        parent?: Parent;
        params?: Record<string, any>;
        slotParams?: any;
        slots?: any;
    }
    type Parent = Record<string, any> & {
        elem: Elem;
        setupRes: ReturnType<SetupFunction>;
        tagname: string;
    };
    interface Elem extends Record<string, any> {
        tag?: TOR<Tag>;
        style?: TOR<string | CSSProperties>;
        contextKeys?: string[];
        excludeKeys?: string[];
        cls?: TORA<Child>;
        children?: TORA<Child>;
        setup?: SetupFunction;
        render?: RenderFunction;
        beforeRender?: (scope: ScopeData) => void;
        isDirectRender?: boolean;
    }
    interface Context extends Record<string, any> {
        slots?: Record<string, RenderFunction>;
        tag?: Tag;
        contextKeys?: Elem["contextKeys"];
        excludeKeys?: Elem["excludeKeys"];
        setup?: SetupFunction;
        render?: RenderFunction | Record<string, RenderFunction>;
        beforeRender?: Elem["beforeRender"];
    }
    type Tag = StaticTag | FunctionTag;
    type StaticTag = keyof HTMLElementTagNameMap | "slot" | "template" | "component" | Component | InstanceType<typeof Fragment> | InstanceType<typeof Teleport> | InstanceType<typeof Suspense> | InstanceType<typeof KeepAlive> | FunctionalComponent | InstanceType<typeof TransitionGroup>;
    type FunctionTag = (props: Props, ctx: SetupContext) => StaticTag;
    type Child = string | boolean | number | VNode | Elem | ((scope: Record<string, any>, slotScope: any, elemScope: ScopeData) => string | VNode | undefined);
    type SetupFunction = (props: Props, params: {
        tag: StaticTag;
        tagname: string;
        isHtml: boolean;
    }, ctx: SetupContext) => (Record<string, any> & {
        prop?: Record<string, any>;
        render?: RenderFunction | Record<string, RenderFunction>;
        beforeRender?: (scope: ScopeData) => void;
        excludeKeys?: string[];
    }) | void;
    type RenderFunction = (config: RenderFunctionParams) => TOA<string | VNode> | undefined;
    interface RenderFunctionParams {
        tag: Tag;
        tagname: string;
        isHtml: boolean;
        props: any;
        children: Record<string, (p?: any) => TOA<string | VNode> | undefined>;
        elem: Elem;
        context: Context;
        slots: any;
        parent: Props["parent"];
        directives: Record<string, any>;
        setupRes: Record<string, any>;
    }
    interface ScopeData extends Record<string, any> {
        $tag: Tag;
        $tagname: string;
        $isHtml: boolean;
        $slots: any;
        $elem: Elem;
        $context: Context;
        $root: Record<string, any>;
        $prop: Record<string, any>;
        $directive: Record<string, any>;
        $params: Record<string, any>;
        $setupRes: ReturnType<SetupFunction>;
        $elemSetupRes: ReturnType<SetupFunction>;
        $ctxSetupRes: ReturnType<SetupFunction>;
        $parent: Props["parent"];
    }
    interface Attrs {
        root: Partial<Elem>;
        directive: Partial<Elem>;
        prop: Partial<Elem>;
        ctx: Record<any, any>;
    }
}
