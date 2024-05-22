export declare namespace ICleaning {
    interface Props {
        formdata: any;
        propInput: string;
        propOutput: string;
        inputV: any;
    }
    interface TableValue {
        name: string;
        doc: string;
        type: string;
        testMethod?: string;
        sValue?: string;
        oValue?: string;
    }
    interface RuleForm {
        testMethod?: string;
        sValue?: string;
        oValue?: string;
        cleaningData: ICleaning.TableValue[];
        tableData: ICleaning.TableValue[];
    }
}
