export declare namespace IElsListForm {
    interface Props {
        label?: string;
        modelValue?: Record<string, any> | (Record<string, any>)[];
        key?: {
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
    }
    type ValueType = "string" | "number" | "boolean" | "json" | "color";
    interface FormDescription {
        prop: string;
        type: ValueType;
        desc?: string;
        value?: any;
        isDel?: boolean;
    }
}
