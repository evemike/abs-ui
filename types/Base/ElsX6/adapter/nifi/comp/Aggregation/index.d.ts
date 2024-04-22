export declare namespace IAggregation {
    interface Props {
        d?: any;
    }
    interface TableValue {
        id: number;
        cn: string;
        en: string;
        aggMethod: string;
        sort: string;
        resultName: string;
    }
    interface RuleForm {
        sort?: string;
        resultName?: string;
        aggMethod?: string;
        aggregationData: IAggregation.TableValue[];
        tableData: IAggregation.TableValue[];
    }
}
