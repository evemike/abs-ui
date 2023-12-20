/// <reference types="lodash" />
import { IElsElem } from "./inter";
export declare namespace ElsElemUtil {
    const isHtmlTag: (tag: string) => boolean;
    const getElemAttrs: (elem: IElsElem.Elem, context: IElsElem.Context) => IElsElem.Attrs;
    const getSlotName: (elem: IElsElem.Elem) => string;
    const parseDirective: (directive: Record<string, any>, scope: Record<string, any>) => Record<string, any>;
    const getExpValue: (str: string, scope?: Record<string, any>) => any[] | "";
    const getDestruct: (str: string | boolean, scope?: any) => Record<string, any>;
    const specialRender: Record<string, IElsElem.RenderFunction>;
    const defaultRender: IElsElem.RenderFunction;
    const propsFilter: (props: Record<string, any>, extKeys: string[]) => import("lodash").Omit<Record<string, any>, string>;
    const getProps: (elem: IElsElem.Elem, ctx: Record<string, any>) => {
        [x: string]: unknown;
    };
}
export declare namespace DataUtils {
    const dateFormat: (date: Date, template?: string) => void;
    type IGetDataAttrKey = TOA<string> | ((d: any) => any);
    interface IGetDataAttrOptions {
        multiple?: boolean;
        notValues?: any[];
        value?: any;
    }
    const getDataAttr: <T = Record<any, any>>(data: T, key: IGetDataAttrKey, ops?: IGetDataAttrOptions) => any;
    const getSetGroupData: <T = Record<any, any>>(data: T[], group: any) => void;
    type ISetGroupItem = string | Record<string, any> | ISetGroupItem[];
    type ISetGroupStruct = [string, ...ISetGroupItem[]];
    type ISetGroupData = [id?: ISetGroupStruct, ...rest: TOA<string>[]];
    interface ISetGroup<T = Record<any, any>> {
        data?: T[];
        group?: ISetGroupData;
        keys?: IGetDataAttrKey;
        groupAttr?: Record<any, any> | ((attr: ISetGroupItem[]) => Record<any, any>);
    }
    class SetGroup<T extends Record<any, any> = Record<any, any>> {
        private data;
        private group;
        private keys;
        private groupAttr;
        private source;
        private list;
        private listKeys;
        private groupTemp;
        constructor(params?: ISetGroup);
        clone(): void;
        addData(data: T[]): this;
        mergeData(attr?: Record<any, any>): this;
        resetData(fun: (d: T) => T): this;
        resetDataKeys(keys?: IGetDataAttrKey): this;
        checkKeys(): boolean;
        getGroup(group?: ISetGroupData): T[] | Record<string, T[]> | undefined;
        getGroupStruct(struct: ISetGroupItem[], temp: Record<string, T[]>): T;
        getGroupItem(groupItems: TOA<string>[], hasStruct?: boolean): T[] | Record<string, T[]>;
        private getGroupAttr;
        private getListData;
    }
}
export declare const isComponent: (obj: any) => any;
