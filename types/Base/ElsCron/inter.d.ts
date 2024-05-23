import type { ComponentSize } from "element-plus";
import type { TypeLayout } from "./utils";
export declare namespace IElsCron {
    interface Props {
        modelValue: string;
        layout?: TypeLayout[];
        elFormItem?: Record<string, any>;
        label?: string;
        prop?: string;
        required?: boolean;
        rules?: any[];
        error?: string;
        showMessage?: boolean;
        inlineMessage?: boolean;
        disabled?: boolean;
        noInput?: boolean;
        size?: ComponentSize;
        labelPosition?: "left" | "right" | "top";
    }
}
