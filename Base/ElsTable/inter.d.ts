import { IElsElem } from "../ElsElem";
import { IElsForm } from "../ElsForm";
import { Ref } from "vue";
export declare namespace IElsTable {
    interface Props {
        search?: boolean | Search;
        index?: boolean | Index;
        select?: boolean | Selection;
        column: ColumnItem[];
        layout?: any[] | Record<string, any[]>;
        data?: any[];
        tree?: boolean | Tree;
        onload?: (params: {
            pageNum: number;
            pageSize: number;
            query: Record<string, any>;
        }) => ({
            total: number;
            list: any[];
        } & Record<string, any>);
    }
    interface HeaderProps {
    }
    interface Base {
    }
    interface Index {
        enabled?: boolean;
        class?: string;
        startNumber?: number;
        fixed?: boolean | 'left' | 'right';
        step?: number;
        calc?: (index: number, pageNum: number, pageSize: number) => number;
    }
    interface Selection {
        enabled?: boolean;
        class?: string;
        selectedIcon?: string;
        unselectedIcon?: string;
        selectedRowClass?: string;
    }
    interface Button {
        enabled?: boolean;
        useDefault?: boolean;
        elems?: Record<string, IElsElem.Elem>;
        layout?: any[] | Record<string, any[]>;
    }
    interface Search {
        enabled?: boolean;
        class?: string;
        layout?: any[] | Record<string, any[]>;
        column?: IElsForm.Column;
        mode?: "block" | "inline";
        buttons?: boolean | IElsElem.Elem[];
    }
    interface Tree {
        enabled?: boolean;
        column?: ColumnItem[];
        children?: string;
        props?: Record<string, string>;
        showHeader?: boolean;
    }
    interface Form {
        autoAddColumn?: boolean;
        class?: string;
        column?: IElsForm.Column;
        layout?: any[] | Record<string, any[]>;
        buttons?: Record<string, any>;
    }
    interface SearchElem extends IElsForm.ColumnItem {
    }
    interface ColumnItemBase extends Record<string, any> {
        id?: string;
        label?: TOR<string>;
        prop?: string;
        class?: string;
        value?: any;
        fixed?: 'left' | 'right';
        vif?: string | Ref<boolean> | ((row: Row) => boolean);
        resetValue?: (row: Record<string, any>) => any;
        cls: ColumnItem[];
    }
    interface ColumnItemElem {
        class?: string;
        prefix?: string | IElsElem.Elem;
        suffix?: string | IElsElem.Elem;
        slot?: boolean | string;
        cls?: IElsElem.Elem;
    }
    interface ColumnItemExpand {
        enabled?: (params: {
            row: any;
            index: number;
            pageNum: number;
            pageSize: number;
        }) => boolean | boolean | Ref<boolean>;
        slot?: boolean | IElsElem.Elem | string;
    }
    interface ColumnItem extends ColumnItemBase {
        header: ColumnItemElem;
        body: ColumnItemElem;
        search?: boolean | IElsForm.ColumnItem;
        form?: boolean | IElsForm.ColumnItem;
    }
    interface Row extends Record<string, any> {
    }
}
