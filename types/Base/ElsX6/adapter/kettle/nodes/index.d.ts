export interface NodeModel {
    name: string;
    tabs: any[];
    metadata: Record<string, any>;
    init: (formData: any, cellData: any) => Record<string, any> & {
        step: any[];
        connection?: any[];
    };
    submit: (formData: any, cellData: any) => Promise<any>;
    save: (formData: any, cellData: any) => Record<string, any> & {
        step: any[];
        connection?: any[];
    };
}
export declare const initNodesData: () => Promise<Map<string, NodeModel>>;
