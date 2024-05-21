interface Props {
    serverId: string;
    schemaIds: string[];
    sql: string;
    groups?: string[];
    testConnect?: (server: any) => Promise<boolean>;
    preview?: (server: any, schema: any, sql: string) => void;
    refresh?: (server: any, schema: any, sql: string) => void;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    serverId: string;
    schemaIds: () => never[];
    sql: string;
    groups: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (server: any, database: any, sql: string) => void;
    "update:serverId": (id: string) => void;
    "update:schemaIds": (ids: string[]) => void;
    "update:sql": (sql: string) => void;
    "put:server": (server: any) => void;
    "put:schema": (schema: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    serverId: string;
    schemaIds: () => never[];
    sql: string;
    groups: () => never[];
}>>> & {
    onChange?: ((server: any, database: any, sql: string) => any) | undefined;
    "onUpdate:serverId"?: ((id: string) => any) | undefined;
    "onUpdate:schemaIds"?: ((ids: string[]) => any) | undefined;
    "onUpdate:sql"?: ((sql: string) => any) | undefined;
    "onPut:server"?: ((server: any) => any) | undefined;
    "onPut:schema"?: ((schema: any) => any) | undefined;
}, {
    sql: string;
    groups: string[];
    serverId: string;
    schemaIds: string[];
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
