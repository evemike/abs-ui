export declare namespace IField {
    interface Props {
        formdata: any;
        prop: string;
        datas: any;
    }
    interface TableValue {
        doc?: string;
        name?: string;
        type?: string;
        originalValue?: string;
    }
    interface RuleForm {
        tableData: IField.TableValue[];
        doc?: string;
        name?: string;
        type?: string;
        originalValue?: string;
    }
}
