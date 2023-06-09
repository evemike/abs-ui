import { IElsElem } from "../ElsElem";
export declare namespace ElsFormUtil {
    const buildRules: (props: Record<string, any>) => Record<string, any>[];
    const buildElFormItemProps: (props: Record<string, any>) => Record<string, any>;
    const isNeedElFormItem: (e: IElsElem.Elem) => any;
}
