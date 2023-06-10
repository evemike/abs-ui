import { Ref } from "vue";
import { IElsElem } from "../ElsElem";
export declare namespace IElsForm {
    interface Props {
        modelValue: Record<string, any>;
        column: Column;
        size?: "large" | "default" | "small";
        UIPluging?: UIPluging;
        autoClean?: boolean;
    }
    interface ColumnItem extends IElsElem.Elem {
        tip?: string | ColumnTip;
    }
    interface ColumnTip {
        enabled?: boolean;
        content?: string;
        icon?: string | any;
        slot?: boolean | string;
        position?: "left" | "right" | "bottom";
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
        formData: Ref<Record<string, any>>;
        emitChange: (prop: string, val: any) => void;
    }
}
