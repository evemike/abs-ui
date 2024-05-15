export declare namespace ITemplate {
    interface Config {
        url: string;
        titleUrl: string;
        deleteUrl: string;
        createUrlSnippets: string;
        createUrlTemplates: string;
        uploadUrl: string;
    }
    interface TableValue {
        id: string;
        description: string;
        name: string;
        timestamp: string;
        groupId: string;
        uri: string;
    }
    interface AddForm {
        name: string;
        description: string;
    }
    interface UploadForm {
        template: Array<any>;
    }
}
