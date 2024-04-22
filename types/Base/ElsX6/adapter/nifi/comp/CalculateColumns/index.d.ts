export declare namespace ICalculate {
    interface Props {
        formdata: any;
        graphShadowCell: any;
        propOutput: string;
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
