import { IElsElem } from "../../Base/ElsElem";
import { Ref } from "vue";
export declare namespace ISelfSelectProps {
    interface Props {
        modelValue: Record<string, any>;
        column: Column;
        size?: "large" | "default" | "small";
        UIPluging?: UIPluging;
        autoClean?: boolean;
    }
    interface ColumnTip {
        enabled?: boolean;
        content?: string;
        icon?: string | any;
        slot?: boolean | string;
        position?: "left" | "right" | "bottom";
    }
    interface ColumnItem extends IElsElem.Elem {
        tip?: string | ColumnTip;
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
    type Column = ColumnItem[];
}
