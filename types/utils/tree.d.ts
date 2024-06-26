export declare namespace IUtilTree {
    interface Config<T> {
        isSource?: boolean;
        sourceChildren?: string;
        children?: string | ((node: T, newChildren?: T[]) => T[]);
        key?: string;
    }
    type CallFn<T> = (node: T, list: T[], i: number, pNode?: T, pi?: number) => void | boolean;
}
export declare const treeMap: <T extends Record<string, any>>(tree?: T[], fn?: IUtilTree.CallFn<T>, cfg?: IUtilTree.Config<T>) => T[];
export declare const treeToObject: <T extends Record<string, any>>(tree: T[], cfg?: IUtilTree.Config<T>) => Record<string, T>;
export declare const treeFilter: <T extends Record<string, any>>(tree: T[] | undefined, fn: (node: T, list: T[], i: number, pNode?: T | undefined, pi?: number | undefined) => boolean, cfg?: IUtilTree.Config<T>) => T[];
export declare const treeSort: <T extends Record<string, any>>(tree: T[] | undefined, fn: (a: any, b: any) => number, cfg?: IUtilTree.Config<T>) => T[];
export declare const treeNodeMove: <T extends Record<string, any>>(tree: T[], id: string, pid: string, index: number, cfg?: IUtilTree.Config<T>, fc?: ((node: T, snode?: T | undefined, tnode?: T | undefined, si?: number) => void) | undefined) => T[];
export declare const treeAdd: <T extends Record<string, any>>(tree: T[] | undefined, fn: (pNode: T) => [T[], number] | undefined, cfg?: IUtilTree.Config<T>) => T[];
export declare const treeAddOne: <T extends Record<string, any>>(tree: T[] | undefined, fn: (pNode: T) => [T, number] | undefined, cfg?: IUtilTree.Config<T>) => T[];
export declare const treeFind: <T extends Record<string, any>>(tree: T[], fn: (node: T) => boolean, cfg?: IUtilTree.Config<T>) => T | undefined;
export declare const treeDelete: <T extends Record<string, any>>(tree?: T[], list?: any[], cfg?: IUtilTree.Config<T>) => T[];
export declare const treeDeleteOne: <T extends Record<string, any>>(tree: T[] | undefined, key: any, cfg?: IUtilTree.Config<T>) => T | undefined;
export declare const treeAllPath: <T extends Record<string, any>>(tree?: T[], cfg?: IUtilTree.Config<T>) => T[][];
export declare const treeLeafs: <T extends Record<string, any>>(tree?: T[], cfg?: IUtilTree.Config<T>) => T[][];
export declare const treeFindPath: <T extends Record<string, any>>(tree?: T[], list?: any[], cfg?: IUtilTree.Config<T>) => T[][];
export declare const treeReset: <T extends Record<string, any>>(tree: T[] | undefined, fn: (node: T, list: T[], i: number, pNode?: T | undefined, pi?: number | undefined) => undefined | Record<string, any>, cfg?: IUtilTree.Config<T>) => T[];
