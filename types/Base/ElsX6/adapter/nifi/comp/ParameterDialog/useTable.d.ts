import { IParameter } from "./index.ts";
export declare const useTable: (config: IParameter.Config) => {
    tableData: import("vue").Ref<{
        [x: string]: any;
        id: string;
    }[]>;
    getParameterData: () => Promise<void>;
    getParameterDetail: () => Promise<any>;
    deleteParameter: (row: any) => Promise<void>;
    createParameter: (clientId: string, form: IParameter.AddFormSetup, parameterTableData: IParameter.AddFormParameter[], inheritedContexts: any[]) => Promise<boolean>;
    editParameter: (detail: any, form: IParameter.AddFormSetup, parameterTableData: IParameter.AddFormParameter[], inheritedContexts: any[]) => Promise<any>;
    editStep: () => Promise<any>;
};
