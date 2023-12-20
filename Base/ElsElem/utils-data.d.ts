export declare namespace DataUtils {
    interface Context {
        key?: string;
        val?: any;
        row?: any;
        data: any;
        list?: any[];
        ins?: number;
        parents: any[];
    }
    interface Rule {
        key?: string | RegExp | ((k: string, context: Context) => string | boolean | void) | [s: string | RegExp | string[], t?: string | string[]];
        value?: string | ((v: any, context: Context) => any);
        once?: boolean;
        deep?: boolean;
        methods?: [f: (context: Context) => void, exp?: string | ((context: Context) => boolean)];
    }
    class Date {
        static init(): void;
        static format(): void;
    }
    class Layout {
    }
}
export declare namespace Tree {
    interface IContext extends Record<string, any> {
        node: any;
        list?: any[];
        i?: number;
        parent?: any;
        data: any;
    }
    interface IOptions extends Record<string, any> {
        children?: string;
    }
    const DFS: <T>(data: T[], call?: ((ctx: IContext) => boolean | void) | undefined, options?: IOptions) => void;
    const BFS: <T>(data: T[], call?: ((ctx: IContext) => boolean | void) | undefined, options?: IOptions) => void;
    const reset: <T>(data: T[]) => void;
}
