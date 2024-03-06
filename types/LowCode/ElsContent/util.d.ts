import { IElsContent } from "./inter";
export declare namespace ElsContentUtil {
    const useBaseData: <T = string>(d: IElsContent.BaseData<T>) => ([d: T, c?: string | undefined] | (string | T)[])[];
}
