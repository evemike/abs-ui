export declare namespace ICleaning {
    interface Props {
        formdata: any;
        graphShadowCell: any;
        propOutput: string;
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
