import { Ref } from "vue";
import { IElsElem } from "../ElsElem";
export declare namespace IElsForm {
    interface Props {
        modelValue?: Record<string, any>;
        column: Column;
        size?: "large" | "default" | "small";
        UIPluging?: UIPluging;
        autoClean?: boolean;
        params?: Record<string, any>;
    }
    interface ColumnItem extends IElsElem.Elem {
        tip?: string | ColumnTip;
    }
    interface ColumnTip extends Record<string, any> {
        content?: string;
        placement?: "top" | "right" | "left" | "bottom" | "top-start" | "top-end" | "right-start" | "right-end" | "left-start" | "left-end" | "bottom-start" | "bottom-end";
    }
    type Column = ColumnItem[];
    interface Emits {
        (e: "update:modelValue", v: Record<string, any>): void;
        (e: "change", name: string, value: any): void;
    }
    type UIPluging = (props: Props, cfg: UIPluginConfig, ext: Record<string, any>) => {
        elem: IElsElem.Elem;
        context: IElsElem.Context;
        formRef: Ref<any>;
        formApi: (name: string, ...args: any) => any;
        validate: (...args: any) => Promise<any>;
    };
    interface UIPluginConfig {
        formProps: Set<string>;
        formData: Record<string, any>;
        emitChange: (prop: string, val: any) => void;
    }
}
