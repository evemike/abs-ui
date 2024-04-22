export declare namespace ICleaning {
    interface Props {
        node?: any;
    }
    interface TableValue {
        id: number;
        cn: string;
        en: string;
        testMethod?: string;
        specifyValue?: string;
        originalValue?: string;
        disabledSpecifyValue?: boolean;
        disabledOriginalValue?: boolean;
    }
    interface RuleForm {
        testMethod?: string;
        specifyValue?: string;
        originalValue?: string;
        cleaningData: ICleaning.TableValue[];
        tableData: ICleaning.TableValue[];
    }
}
