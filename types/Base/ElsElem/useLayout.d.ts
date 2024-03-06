export type ILayoutStructItem = string | Record<string, any> | ILayoutStructItem[];
export type ILayoutStruct = [string, ...ILayoutStructItem[]];
export type ILayoutItem = TOA<string>;
export type ILayout = [
    id?: ILayoutStruct | ILayoutItem,
    ...rest: ILayoutItem[]
];
export default function useLayout(layout: ILayout): void;
interface IUseLayout<T extends Record<string, any>> {
    data?: T[];
    defaultData?: T[];
    layout?: ILayout;
    key?: string | string[] | ((d: T) => string);
    commonAttr?: Record<string, any>;
    groupAttr?: T | ((attr: ILayoutStructItem[]) => T);
}
export declare class UseLayout<T extends Record<string, any> & {
    extendKeys?: string | string[];
}> {
    list: T[];
    listKeys: string[];
    layout: ILayout;
    data: T[];
    defaultData: T[];
    groupAttr: T | ((attr: Record<string, any>) => T);
    commonAttr: Record<string, any>;
    key: string | string[] | ((d: T) => string);
    layoutData: import("vue").Ref<import("@vue/reactivity").UnwrapRefSimple<T>[] | import("@vue/reactivity").UnwrapRefSimple<T>[][]>;
    layoutTempData: Record<string, T[]>;
    constructor(params: IUseLayout<T>);
    addData(data?: T[]): void;
    addList(data: T[]): void;
    resetList(): void;
    initList(): void;
    getList(data: T[]): [T[], string[]];
    getDataKey(data: T, ins: number): string;
    getListDataByKey(key: string): T | undefined;
    resetLayout(): void;
    getLayoutData(layout?: ILayout): any;
    getLayoutItemData(data: ILayoutItem): T | undefined;
    getLayoutGroupData(struct: ILayoutStructItem[]): T;
}
export declare class DataUtils<T extends Record<string, any>> {
    result: T[];
    constructor(data: TOR<T>[]);
    static merge<T>(source: T[], target: Record<string, any> | ((obj: T) => Record<string, any>)): void;
    static filter<T>(source: T[], fun: (obj: T) => boolean): void;
}
export declare const columnMerge: <T extends Record<string, any>>(column: T[], target: Record<string, any> | ((ojb: T) => Record<string, any>)) => void;
export declare const ruleExp: (rules: any[], ctx: any) => void;
export declare const objMap: (data: Record<any, any> | any[], call: (ctx: any) => any, parents?: any[]) => void;
export declare const DFS: () => void;
export declare const BFS: () => void;
export {};
