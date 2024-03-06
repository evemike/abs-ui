import { CSSProperties } from "vue";
import { IElsTableOld } from "./inter";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsTableOld.BaseProps>, {
    stripe: boolean;
    border: boolean;
    fit: boolean;
    showHeader: boolean;
    highlightCurrentRow: boolean;
    emptyText: string;
    defaultExpandAll: boolean;
    tooltipEffect: string;
    showSummary: boolean;
    rowKey: string;
}>, {
    elTableRef: import("vue").Ref<import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "transition" | "appendTo" | "effect" | "placement" | "offset" | "showArrow" | "enterable" | "popperClass" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: {
            type: BooleanConstructor;
            default: boolean;
        };
        flexible: BooleanConstructor;
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "transition" | "appendTo" | "effect" | "placement" | "offset" | "showArrow" | "enterable" | "popperClass" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout.mjs").default<any>;
        store: any;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus/es/components/table/src/table/defaults.mjs").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "row-click" | "cell-click" | "select-all" | "expand-change" | "current-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-dblclick" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "transition" | "appendTo" | "effect" | "placement" | "offset" | "showArrow" | "enterable" | "popperClass" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: {
            type: BooleanConstructor;
            default: boolean;
        };
        flexible: BooleanConstructor;
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "transition" | "appendTo" | "effect" | "placement" | "offset" | "showArrow" | "enterable" | "popperClass" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        style: CSSProperties;
        className: string;
        tableLayout: "fixed" | "auto";
        border: boolean;
        data: any[];
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: {
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
        headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "transition" | "appendTo" | "effect" | "placement" | "offset" | "showArrow" | "enterable" | "popperClass" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: {
            type: BooleanConstructor;
            default: boolean;
        };
        flexible: BooleanConstructor;
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "transition" | "appendTo" | "effect" | "placement" | "offset" | "showArrow" | "enterable" | "popperClass" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout.mjs").default<any>;
        store: any;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus/es/components/table/src/table/defaults.mjs").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<"fixed" | "auto" | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, {}, {}, {}, {
        style: CSSProperties;
        className: string;
        tableLayout: "fixed" | "auto";
        border: boolean;
        data: any[];
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: {
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
    }> | undefined>;
    clearSelection: (() => void) | undefined;
    toggleRowSelection: ((row: any, selected: boolean) => void) | undefined;
    toggleAllSelection: (() => void) | undefined;
    toggleRowExpansion: ((row: any, expanded?: boolean | undefined) => void) | undefined;
    setCurrentRow: ((row: any) => void) | undefined;
    clearSort: (() => void) | undefined;
    clearFilter: ((columnKeys?: string[] | undefined) => void) | undefined;
    doLayout: (() => void) | undefined;
    sort: ((prop: string, order: string) => void) | undefined;
    selectIds: import("vue").Ref<string[]>;
    selection: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (selection: any, row: any) => void;
    "select-all": (selection: any) => void;
    "selection-change": (selection: any) => void;
    "cell-mouse-enter": (row: any, column: any, cell: any, $event: any) => void;
    "cell-mouse-leave": (row: any, column: any, cell: any, $event: any) => void;
    "cell-click": (row: any, column: any, cell: any, $event: any) => void;
    "cell-dblclick": (row: any, column: any, cell: any, $event: any) => void;
    "cell-contextmenu": (row: any, column: any, cell: any, $event: any) => void;
    "row-click": (row: any, column: any, $event: any) => void;
    "row-contextmenu": (row: any, column: any, $event: any) => void;
    "row-dblclick": (row: any, column: any, $event: any) => void;
    "header-click": (column: any, $event: any) => void;
    "header-contextmenu": (column: any, $event: any) => void;
    "header-dragend": (newWidth: string | number, oldWidth: string | number, column: any, $event: any) => void;
    "sort-change": (data: {
        column: any;
        prop: string;
        order: IElsTableOld.SortNames;
    }) => void;
    "filter-change": (filters: any) => void;
    "current-change": (currentRow: any, oldCurrentRow: any) => void;
    "expand-change": (row: any, expanded?: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IElsTableOld.BaseProps>, {
    stripe: boolean;
    border: boolean;
    fit: boolean;
    showHeader: boolean;
    highlightCurrentRow: boolean;
    emptyText: string;
    defaultExpandAll: boolean;
    tooltipEffect: string;
    showSummary: boolean;
    rowKey: string;
}>>> & {
    onSelect?: ((selection: any, row: any) => any) | undefined;
    "onExpand-change"?: ((row: any, expanded?: any) => any) | undefined;
    "onCurrent-change"?: ((currentRow: any, oldCurrentRow: any) => any) | undefined;
    "onSelect-all"?: ((selection: any) => any) | undefined;
    "onSelection-change"?: ((selection: any) => any) | undefined;
    "onCell-mouse-enter"?: ((row: any, column: any, cell: any, $event: any) => any) | undefined;
    "onCell-mouse-leave"?: ((row: any, column: any, cell: any, $event: any) => any) | undefined;
    "onCell-contextmenu"?: ((row: any, column: any, cell: any, $event: any) => any) | undefined;
    "onCell-click"?: ((row: any, column: any, cell: any, $event: any) => any) | undefined;
    "onCell-dblclick"?: ((row: any, column: any, cell: any, $event: any) => any) | undefined;
    "onRow-click"?: ((row: any, column: any, $event: any) => any) | undefined;
    "onRow-contextmenu"?: ((row: any, column: any, $event: any) => any) | undefined;
    "onRow-dblclick"?: ((row: any, column: any, $event: any) => any) | undefined;
    "onHeader-click"?: ((column: any, $event: any) => any) | undefined;
    "onHeader-contextmenu"?: ((column: any, $event: any) => any) | undefined;
    "onSort-change"?: ((data: {
        column: any;
        prop: string;
        order: IElsTableOld.SortNames;
    }) => any) | undefined;
    "onFilter-change"?: ((filters: any) => any) | undefined;
    "onHeader-dragend"?: ((newWidth: string | number, oldWidth: string | number, column: any, $event: any) => any) | undefined;
}, {
    stripe: boolean;
    border: boolean;
    emptyText: string;
    fit: boolean;
    rowKey: string | ((row: any) => string);
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    tooltipEffect: "dark" | "light";
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
