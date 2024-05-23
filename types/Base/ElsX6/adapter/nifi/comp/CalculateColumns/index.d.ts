export declare namespace ICalculate {
    interface Props {
        formdata: any;
        graphShadow: any;
        inputV: any;
        expression: any[];
        newField: any[];
        step: string;
    }
    interface TableValue {
        fieldName: string;
        prompt?: string;
        visible?: boolean;
        expression?: string;
        originalValue?: string;
    }
    interface RuleForm {
        tableData: ICalculate.TableValue[];
        fieldName?: string;
        prompt?: string;
        visible?: boolean;
        expression?: string;
        originalValue?: string;
    }
    interface Tree {
        label?: string;
        name: string;
        type: string;
        doc: string;
        children?: Tree[];
    }
}
