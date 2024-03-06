export declare const useKafka: (config: {
    formatKafkaList?: ((list: any[]) => any[]) | undefined;
    formatTopicList?: (() => any[]) | undefined;
}) => {
    valueKey: string;
    currentKafka: import("vue").Ref<{}>;
    currentTopic: import("vue").Ref<{}>;
    kafkaList: import("vue").Ref<any[]>;
    topicList: import("vue").Ref<any[]>;
    kafkaOptions: import("vue").Ref<any[]>;
    topicOptions: import("vue").Ref<any[]>;
    resetFormData: (formData: any, keys: [Record<string, string>, Record<string, string>]) => void;
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
};
