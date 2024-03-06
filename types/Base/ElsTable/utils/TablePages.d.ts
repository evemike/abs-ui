export declare class TablePages {
    pageNum: import("vue").Ref<number>;
    pageSize: import("vue").Ref<number>;
    total: import("vue").Ref<number>;
    sizes: number[];
    layout: string[];
    maxPage: import("vue").ComputedRef<number>;
    changeSize(v: number): void;
    changePage(v: number): void;
    prePage(): void;
    nextPage(): void;
}
