export declare namespace IGrouporder {
    interface Filter<T> {
        key?: string;
        fn?: (d: T) => boolean;
        blackList?: string[];
        whiteList?: string[];
        items?: T[];
    }
    interface Order<T> {
        key?: string | string[] | any[];
        isReverse?: boolean;
        fn?: (list: T[]) => T[];
    }
    interface Group<T> {
        index?: (number | undefined)[];
        key?: string | string[];
        fn?: (list: T[]) => Record<string, T[]>;
        iteratee?: any[] | string | Function | Object;
    }
}
export declare const grouporder: <T = Record<string, any>>(list: T[], config: {
    filter?: IGrouporder.Filter<T> | undefined;
    order?: IGrouporder.Order<T> | undefined;
    group?: IGrouporder.Group<T> | undefined;
}) => Record<string, T[]>;
export declare const groupBy: <T = Record<string, any>>(list: T[], config: IGrouporder.Group<T>) => Record<string, T[]>;
export declare const orderBy: <T = Record<string, any>>(list: T[], config: IGrouporder.Order<T>) => T[];
export declare const filterBy: <T = Record<string, any>>(list: T[], config: IGrouporder.Filter<T>) => T[];
