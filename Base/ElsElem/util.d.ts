import { IElsElem } from "./inter";
export declare namespace ElsElemUtil {
    const isHtmlTag: (tag: string) => boolean;
    const getElemAttrs: (elem: IElsElem.Elem, context: IElsElem.Context) => IElsElem.Attrs;
    const getSlotName: (elem: IElsElem.Elem) => string;
    const parseDirective: (directive: Record<string, any>, scope: Record<string, any>) => Record<string, any>;
    const getExpValue: (str: string, scope?: Record<string, any>) => string;
    const getDestruct: (str: string | boolean, scope?: any) => Record<string, any>;
    const specialRender: Record<string, IElsElem.RenderFunction>;
    const defaultRender: IElsElem.RenderFunction;
    const propsFilter: (props: Record<string, any>, extKeys: string[]) => import("lodash").Omit<Record<string, any>, string>;
    const getProps: (elem: IElsElem.Elem, ctx: Record<string, any>) => {
        [x: string]: unknown;
    };
}
