import type { PropType as __PropType } from 'vue';
import { Ref, CSSProperties } from "vue";
import type { IElsTableOld } from "./inter";
declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: __PropType<any[] | undefined>;
        required: false;
    };
    size: {
        type: __PropType<"small" | "default" | "large" | undefined>;
        required: false;
    };
    width: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    height: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    maxHeight: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    fit: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    stripe: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    border: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showHeader: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showSummary: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    sumText: {
        type: __PropType<string | undefined>;
        required: false;
    };
    summaryMethod: {
        type: __PropType<((data: {
            columns: any;
            data: any;
        }) => string[]) | undefined>;
        required: false;
    };
    rowClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    rowStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    cellClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    cellStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    headerRowClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    headerRowStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    headerCellClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    headerCellStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    highlightCurrentRow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    rowKey: {
        type: __PropType<string | ((row: any) => string) | undefined>;
        required: false;
        default: string;
    };
    currentRowKey: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    emptyText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    expandRowKeys: {
        type: __PropType<any[] | undefined>;
        required: false;
    };
    defaultExpandAll: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    defaultSort: {
        type: __PropType<{
            order: "ascending" | "descending";
            prop: string;
            init?: any;
            silent?: any;
        } | undefined>;
        required: false;
    };
    tooltipEffect: {
        type: __PropType<"dark" | "light" | undefined>;
        required: false;
        default: string;
    };
    spanMethod: {
        type: __PropType<((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        }) | undefined>;
        required: false;
    };
    selectOnIndeterminate: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    indent: {
        type: __PropType<number | undefined>;
        required: false;
    };
    treeProps: {
        type: __PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        required: false;
    };
    lazy: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    load: {
        type: __PropType<((row: any, treeNode: any, resolve: (data: any[]) => void) => void) | undefined>;
        required: false;
    };
    style: {
        type: __PropType<CSSProperties | undefined>;
        required: false;
    };
    className: {
        type: __PropType<string | undefined>;
        required: false;
    };
    column: {
        type: __PropType<IElsTableOld.ColumnItem[]>;
        required: true;
        default: () => never[];
    };
    autoLoad: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showIndex: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showSelect: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    selectProps: {
        type: __PropType<Record<string, any> | undefined>;
        required: false;
        default: () => {};
    };
    pagination: {
        type: __PropType<boolean | IElsTableOld.PaginationProps | Ref<IElsTableOld.PaginationProps> | undefined>;
        required: false;
        skipCheck: boolean;
        default: boolean;
    };
    refresh: {
        type: __PropType<IElsTableOld.RefreshData | undefined>;
        required: false;
    };
    search: {
        type: __PropType<boolean | IElsTableOld.SearchOption | undefined>;
        required: false;
        skipCheck: boolean;
        default: () => {
            type: string;
            enabled: boolean;
            noLabel: boolean;
        };
    };
    operate: {
        type: __PropType<IElsTableOld.OperateElem[] | {
            left?: IElsTableOld.OperateElem[] | undefined;
            center?: IElsTableOld.OperateElem[] | undefined;
            right?: IElsTableOld.OperateElem[] | undefined;
        } | undefined>;
        required: false;
    };
    menu: {
        type: __PropType<IElsTableOld.OperateElem[] | undefined>;
        required: false;
    };
    showSwitch: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "select-all" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-click" | "cell-dblclick" | "cell-contextmenu" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "header-dragend" | "sort-change" | "filter-change" | "current-change" | "expand-change" | "operate-click" | "select-change" | "change-emit" | "reset-click")[], "select" | "select-all" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-click" | "cell-dblclick" | "cell-contextmenu" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "header-dragend" | "sort-change" | "filter-change" | "current-change" | "expand-change" | "operate-click" | "select-change" | "change-emit" | "reset-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: __PropType<any[] | undefined>;
        required: false;
    };
    size: {
        type: __PropType<"small" | "default" | "large" | undefined>;
        required: false;
    };
    width: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    height: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    maxHeight: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    fit: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    stripe: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    border: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showHeader: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showSummary: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    sumText: {
        type: __PropType<string | undefined>;
        required: false;
    };
    summaryMethod: {
        type: __PropType<((data: {
            columns: any;
            data: any;
        }) => string[]) | undefined>;
        required: false;
    };
    rowClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    rowStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    cellClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    cellStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    headerRowClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    headerRowStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    headerCellClassName: {
        type: __PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string) | undefined>;
        required: false;
    };
    headerCellStyle: {
        type: __PropType<CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties) | undefined>;
        required: false;
    };
    highlightCurrentRow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    rowKey: {
        type: __PropType<string | ((row: any) => string) | undefined>;
        required: false;
        default: string;
    };
    currentRowKey: {
        type: __PropType<string | number | undefined>;
        required: false;
    };
    emptyText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    expandRowKeys: {
        type: __PropType<any[] | undefined>;
        required: false;
    };
    defaultExpandAll: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    defaultSort: {
        type: __PropType<{
            order: "ascending" | "descending";
            prop: string;
            init?: any;
            silent?: any;
        } | undefined>;
        required: false;
    };
    tooltipEffect: {
        type: __PropType<"dark" | "light" | undefined>;
        required: false;
        default: string;
    };
    spanMethod: {
        type: __PropType<((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        }) | undefined>;
        required: false;
    };
    selectOnIndeterminate: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    indent: {
        type: __PropType<number | undefined>;
        required: false;
    };
    treeProps: {
        type: __PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        required: false;
    };
    lazy: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    load: {
        type: __PropType<((row: any, treeNode: any, resolve: (data: any[]) => void) => void) | undefined>;
        required: false;
    };
    style: {
        type: __PropType<CSSProperties | undefined>;
        required: false;
    };
    className: {
        type: __PropType<string | undefined>;
        required: false;
    };
    column: {
        type: __PropType<IElsTableOld.ColumnItem[]>;
        required: true;
        default: () => never[];
    };
    autoLoad: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showIndex: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showSelect: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    selectProps: {
        type: __PropType<Record<string, any> | undefined>;
        required: false;
        default: () => {};
    };
    pagination: {
        type: __PropType<boolean | IElsTableOld.PaginationProps | Ref<IElsTableOld.PaginationProps> | undefined>;
        required: false;
        skipCheck: boolean;
        default: boolean;
    };
    refresh: {
        type: __PropType<IElsTableOld.RefreshData | undefined>;
        required: false;
    };
    search: {
        type: __PropType<boolean | IElsTableOld.SearchOption | undefined>;
        required: false;
        skipCheck: boolean;
        default: () => {
            type: string;
            enabled: boolean;
            noLabel: boolean;
        };
    };
    operate: {
        type: __PropType<IElsTableOld.OperateElem[] | {
            left?: IElsTableOld.OperateElem[] | undefined;
            center?: IElsTableOld.OperateElem[] | undefined;
            right?: IElsTableOld.OperateElem[] | undefined;
        } | undefined>;
        required: false;
    };
    menu: {
        type: __PropType<IElsTableOld.OperateElem[] | undefined>;
        required: false;
    };
    showSwitch: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onSelect-all"?: ((...args: any[]) => any) | undefined;
    "onSelection-change"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
    "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onRow-click"?: ((...args: any[]) => any) | undefined;
    "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
    "onHeader-click"?: ((...args: any[]) => any) | undefined;
    "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    "onSort-change"?: ((...args: any[]) => any) | undefined;
    "onFilter-change"?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onOperate-click"?: ((...args: any[]) => any) | undefined;
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onChange-emit"?: ((...args: any[]) => any) | undefined;
    "onReset-click"?: ((...args: any[]) => any) | undefined;
}, {
    search: boolean | IElsTableOld.SearchOption | undefined;
    border: boolean | undefined;
    column: IElsTableOld.ColumnItem[];
    width: string | number | undefined;
    fit: boolean | undefined;
    stripe: boolean | undefined;
    showHeader: boolean | undefined;
    showSummary: boolean | undefined;
    highlightCurrentRow: boolean | undefined;
    rowKey: string | ((row: any) => string) | undefined;
    emptyText: string | undefined;
    defaultExpandAll: boolean | undefined;
    tooltipEffect: "dark" | "light" | undefined;
    autoLoad: boolean | undefined;
    showIndex: boolean | undefined;
    showSelect: boolean | undefined;
    selectProps: Record<string, any> | undefined;
    pagination: boolean | IElsTableOld.PaginationProps | Ref<IElsTableOld.PaginationProps> | undefined;
    showSwitch: boolean | undefined;
}, {}>;
export default _sfc_main;
