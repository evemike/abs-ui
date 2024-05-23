import { D as t } from "./index.DHt1VQUk.js";
import { g as r } from "./vendor.4pP_Prrf.js";
const o = (e) => ({
  graphShadow: e.graphShadow,
  drawerRef: e.drawerRef,
  graphForm: e.graphForm,
  cell: e.cell
}), p = () => ({ name: "org.apache.nifi.processors.standard.PutDatabaseRecord_2_0", excludeKeys: ["put-db-record-record-reader", "db-type", "put-db-record-dcbp-service", "put-db-record-statement-type", "put-db-record-table-name", "web预留（自动填入）"], selfFormColumn: [
  { assignKey: "put-db-record-record-reader", tag: r },
  { assignKey: "db-type", tag: r },
  {
    tag: t,
    ":data": "formData",
    prop: "config.properties[put-db-record-dcbp-service]",
    setup({ params: a }) {
      return { graphShadowCell: o(a) };
    },
    ":graphShadowCell": "graphShadowCell",
    // ":disabled": "formData['state']==='running'",
    showSql: !1
  },
  {
    assignKey: "put-db-record-statement-type",
    tag: r,
    label: "存储策略",
    cls: [
      { value: "INSERT", label: "追加" },
      { value: "UPSERT", label: "融合" }
    ]
  }
] });
export {
  p as default
};
