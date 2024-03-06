import { ElButton } from "element-plus";
type Btn = InstanceType<typeof ElButton>['$props'];
export declare namespace IElsListForm {
    interface Props {
        label?: string;
        modelValue?: Record<string, any> | (Record<string, any>)[];
        keyName?: {
            propKey: string;
            valueKey: string;
        };
        excludeKeys?: string[];
        keys?: FormDescription[];
        isAdd?: boolean;
        isDel?: boolean;
        isNew?: boolean;
        disabled?: boolean;
        format?: (value: Record<string, any>) => any;
        size?: "" | "default" | "small" | "large";
        prop?: string;
    }
    type ValueType = "string" | "number" | "boolean" | "json" | "color" | "elem" | "select" | "code";
    interface FormDescription {
        prop: string;
        type: ValueType;
        desc?: string;
        value?: any;
        isDel?: boolean;
        tag?: any;
        cls?: any | any[];
        label?: string;
        attr?: Record<string, any>;
        btns?: ({
            attr: Partial<Btn>;
            title?: string;
            label?: string;
            handle: (item: FormDescription, i: number, value: any) => void;
        })[];
    }
}
export {};
