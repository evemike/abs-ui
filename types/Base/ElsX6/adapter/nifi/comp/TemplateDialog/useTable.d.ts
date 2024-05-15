import { ITemplate } from "./index.ts";
export declare const useTable: (config: ITemplate.Config) => {
    getTemplateData: () => void;
    filterData: import("vue").Ref<{
        id: string;
        description: string;
        name: string;
        timestamp: string;
        groupId: string;
        uri: string;
    }[]>;
    title: import("vue").Ref<string>;
    filterTableList: (name: string, description: string) => void;
    deleteTemplate: (id: string) => Promise<void>;
    downloadTemplate: (name: string, uri: string) => void;
    createTemplate: (clientId: string, parentGroupId: string, flow: any, formData: ITemplate.AddForm) => Promise<boolean>;
    uploadTemplate: (template: Array<any>) => Promise<boolean>;
};
export declare const apiGet: (url: string) => Promise<any>;
export declare const apiDelete: (url: string) => Promise<any>;
export declare const apiPost: (url: string, data?: any, isHeaders?: boolean) => Promise<any>;
