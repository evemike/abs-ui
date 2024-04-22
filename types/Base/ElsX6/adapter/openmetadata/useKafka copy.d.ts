export interface UseKafkaConfig {
    kafkaOptionKey?: string;
    topicOptionKey?: string;
    kafkaFormatKeys?: Record<string, string>;
    topicFormatKeys?: Record<string, string>;
}
export declare const NIFI_FORMAT_KEYS: ({
    "connection.config.bootstrapServers": string;
    "connection.config.saslUsername": string;
    "connection.config.saslPassword": string;
    name?: undefined;
    id?: undefined;
} | {
    name: string;
    id: string;
    "connection.config.bootstrapServers"?: undefined;
    "connection.config.saslUsername"?: undefined;
    "connection.config.saslPassword"?: undefined;
})[];
export declare const useKafka: (config?: UseKafkaConfig) => {
    kafkaList: any[];
    topicList: any[];
    kafkaOptions: import("vue").Ref<any[]>;
    topicOptions: import("vue").Ref<any[]>;
    NIFI_FORMAT_KEYS: ({
        "connection.config.bootstrapServers": string;
        "connection.config.saslUsername": string;
        "connection.config.saslPassword": string;
        name?: undefined;
        id?: undefined;
    } | {
        name: string;
        id: string;
        "connection.config.bootstrapServers"?: undefined;
        "connection.config.saslUsername"?: undefined;
        "connection.config.saslPassword"?: undefined;
    })[];
    initTopicList: (val: string) => void;
    topicChange: (data: any, val: any) => void;
    kafkaServerChange: (data: any, val: any) => void;
    getKafkaValue: (data: any) => any;
    getTopicValue: (data: any) => any;
};
