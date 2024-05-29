import { INifi } from "../inter";
/**
 * 行过滤过滤的是值，不是字段，因此propInput、propOutput与其他"数据处理"算子略有不同
 */
declare const useNode: INifi.UseNode;
export default useNode;
