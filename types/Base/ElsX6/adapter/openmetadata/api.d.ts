export declare const apiGet: (uri: string) => Promise<any>;
export declare const query: (q?: string) => Promise<any>;
export declare const getKafkaList: () => Promise<any>;
export declare const getTopicList: (kafkaServer: string) => Promise<any>;
export declare const getDataLinkList: () => Promise<any>;
export declare const getNextDataLinkList: (data?: any) => Promise<any>;
export declare const getData: (url: string) => Promise<any>;
export declare const getDataLinkListByType: (type: string) => Promise<any>;
