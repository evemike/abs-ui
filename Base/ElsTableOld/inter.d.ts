import { VNode, RendererNode, RendererElement, CSSProperties, Ref } from "vue";
import { ElTable } from "element-plus";
import { IElsElem, IElsForm } from "../../index";
export declare namespace IElsTableOld {
    type Filters = {
        text: string;
        value: string;
    }[];
    type Align = "left" | "center" | "right";
    type SortNames = "ascending" | "descending" | null;
    type columnType = "selection" | "index" | "expand";
    type TypeElTable = InstanceType<typeof ElTable>;
    interface RefreshData {
        (query?: Record<string, any>, pageNum?: number, pageSize?: number): Promise<{
            data: any[];
            total: number;
        }>;
    }
    interface SearchElem extends IElsElem.Elem {
    }
    interface SearchOption {
        enabled: boolean;
        type?: "mini" | "default";
        noLabel?: boolean;
        formConfig?: Partial<IElsForm.Props>;
        column?: IElsForm.Column;
    }
    interface ColumnItem extends IElsElem.Elem {
        search?: boolean | IElsForm.ColumnItem;
        cls?: string | ColumnItem[] | IElsElem.Elem[];
        children?: string | ColumnItem[] | IElsElem.Elem[];
        label?: string;
        type?: columnType;
        index?: number | ((index: number) => number);
        columnKey?: string;
        prop?: string;
        width?: string | number;
        minWidth?: string | number;
        fixed?: string | boolean;
        renderHeader?: (column: ColumnItem, $index: number) => VNode<RendererNode, RendererElement, Record<string, any>>;
        sortable?: boolean | string;
        sortMethod?: (a: any, b: any) => number;
        sortBy?: string | string[] | ((row: any, index: number) => string);
        sortOrders?: SortNames[];
        resizable?: boolean;
        formatter?: (row: any, column: ColumnItem, cellValue: any, index: number) => string | VNode<RendererNode, RendererElement, Record<string, any>>;
        showOverflowTooltip?: boolean;
        align?: Align;
        headerAlign?: Align;
        className?: string;
        labelClassName?: string;
        selectable?: (row: any, index: number) => boolean;
        reserveSelection?: boolean;
        filters?: Filters;
        filterPlacement?: string;
        filterMultiple?: boolean;
        filterMethod?: (value: any, row: any, column: any) => void;
        filteredValue?: string[];
    }
    type EmitEventNames = "select" | "select-all" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-click" | "cell-dblclick" | "cell-contextmenu" | "row-click" | "row-dblclick" | "row-contextmenu" | "header-click" | "header-contextmenu" | "header-dragend" | "sort-change" | "filter-change" | "current-change" | "expand-change";
    interface TableEmits {
        (e: EmitEventNames, ...playload: any[]): void;
    }
    interface Props {
        data?: any[];
        size?: "large" | "default" | "small";
        width?: string | number;
        height?: string | number;
        maxHeight?: string | number;
        fit?: boolean;
        stripe?: boolean;
        border?: boolean;
        showHeader?: boolean;
        showSummary?: boolean;
        sumText?: string;
        summaryMethod?: (data: {
            columns: any;
            data: any;
        }) => string[];
        rowClassName?: string | ((data: {
            row: any;
            rowIndex: number;
        }) => string);
        rowStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties);
        cellClassName?: string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string);
        cellStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties);
        headerRowClassName?: string | ((data: {
            row: any;
            rowIndex: number;
        }) => string);
        headerRowStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties);
        headerCellClassName?: string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string);
        headerCellStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties);
        highlightCurrentRow?: boolean;
        rowKey?: string | ((row: any) => string);
        currentRowKey?: string | number;
        emptyText?: string;
        expandRowKeys?: any[];
        defaultExpandAll?: boolean;
        defaultSort?: {
            order: "ascending" | "descending";
            prop: string;
            init?: any;
            silent?: any;
        };
        tooltipEffect?: "dark" | "light";
        spanMethod?: (data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        };
        selectOnIndeterminate?: boolean;
        indent?: number;
        treeProps?: {
            hasChildren?: string;
            children?: string;
        };
        lazy?: boolean;
        load?: (row: any, treeNode: any, resolve: (data: any[]) => void) => void;
        style?: CSSProperties;
        className?: string;
        column: ColumnItem[];
        autoLoad?: boolean;
        showIndex?: boolean;
        showSelect?: boolean;
        selectProps?: Record<string, any>;
        pagination?: boolean | PaginationProps | Ref<PaginationProps>;
        refresh?: RefreshData;
        search?: boolean | SearchOption;
        operate?: OperateElem[] | {
            left?: OperateElem[];
            center?: OperateElem[];
            right?: OperateElem[];
        };
        menu?: OperateElem[];
        showSwitch?: boolean;
    }
    interface BaseProps {
        column: IElsTableOld.ColumnItem[];
        data?: any[];
        size?: "large" | "default" | "small";
        width?: string | number;
        maxHeight?: string | number;
        fit?: boolean;
        stripe?: boolean;
        border?: boolean;
        showHeader?: boolean;
        showSummary?: boolean;
        sumText?: string;
        summaryMethod?: (data: {
            columns: any;
            data: any;
        }) => string[];
        rowClassName?: string | ((data: {
            row: any;
            rowIndex: number;
        }) => string);
        rowStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties);
        cellClassName?: string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string);
        cellStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties);
        headerRowClassName?: string | ((data: {
            row: any;
            rowIndex: number;
        }) => string);
        headerRowStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
        }) => CSSProperties);
        headerCellClassName?: string | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => string);
        headerCellStyle?: CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => CSSProperties);
        highlightCurrentRow?: boolean;
        rowKey?: string | ((row: any) => string);
        currentRowKey?: string | number;
        emptyText?: string;
        expandRowKeys?: any[];
        defaultExpandAll?: boolean;
        defaultSort?: {
            order: "ascending" | "descending";
            prop: string;
            init?: any;
            silent?: any;
        };
        tooltipEffect?: "dark" | "light";
        spanMethod?: (data: {
            row: any;
            rowIndex: number;
            column: any;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        };
        selectOnIndeterminate?: boolean;
        indent?: number;
        treeProps?: {
            hasChildren?: string;
            children?: string;
        };
        lazy?: boolean;
        load?: (row: any, treeNode: any, resolve: (data: any[]) => void) => void;
        style?: CSSProperties;
        className?: string;
    }
    interface PaginationProps {
        small?: boolean;
        background?: boolean;
        pageSize?: number;
        defaultPageSize?: number;
        total?: number;
        pageCount?: number;
        pagerCount?: number;
        currentPage?: number;
        defaultCurrentPage?: number;
        layout?: string;
        pageSizes?: number[];
        popperClass?: string;
        prevText?: string;
        nextText?: string;
        disabled?: boolean;
        hideOnSinglePage?: boolean;
    }
    type OperateKeys = "add" | "edit" | "view" | "delete" | "deletes" | "upload" | "export" | "download" | "search" | "reset";
    type OperateElem = (IElsElem.Elem & {
        handle?: (...args: any) => void;
        handleName?: string;
    }) | OperateKeys;
}
