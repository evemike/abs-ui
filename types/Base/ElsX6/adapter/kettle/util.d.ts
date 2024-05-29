import { AdapterKettle } from "./main";
export declare class KettleUtil {
    constructor(kettle: AdapterKettle);
    kettle: AdapterKettle;
    createConnectionData(server: any, database: any): any[];
    getFields(connection: any, sql: string): Promise<any>;
}
