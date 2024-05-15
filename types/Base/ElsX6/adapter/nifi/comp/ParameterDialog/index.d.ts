export declare namespace IParameter {
    interface Config {
        url?: string;
        deleteUrl?: string;
        createUrl?: string;
        detailUrl?: string;
        editUrl?: string;
        editStepUrl?: string;
    }
    interface TableValue {
        id: string;
        [key: string]: any;
    }
    interface AddFormParameter {
        name: string;
        description: string;
        value: string;
        parameterContext?: any;
        referencingComponents?: any;
    }
    interface AddFormSetup {
        name: string;
        description: string;
    }
    interface AddForm {
        modelValue: boolean;
        id: string;
        clientId: string;
        tableData: TableValue[];
    }
}
