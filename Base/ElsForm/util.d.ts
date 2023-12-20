import { IElsElem } from "../ElsElem";
import { IElsForm } from "./inter";
export declare namespace ElsFormUtil {
    const buildRules: (props: Record<string, any>) => Record<string, any>[];
    const buildElFormItemProps: (props: Record<string, any>) => Record<string, any>;
    const isNeedElFormItem: (e: IElsElem.Elem) => any;
    const validateFormField: (rules: Record<string, any>[], data: Record<string, any>) => boolean;
    const valideForm: (data: Record<string, any>, column: IElsForm.Column, rule?: Record<string, any[]>) => Promise<{
        status: boolean;
        info: Record<string, any[]>;
        errors: any[] | null;
        fields: any;
    }>;
}
