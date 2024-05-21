import { D as d } from "./index.C88KoHoc.js";
import { ap as n, a as r } from "./vendor.CawUkpaF.js";
const i = (a) => ({
  graphShadow: a.graphShadow,
  drawerRef: a.drawerRef,
  graphForm: a.graphForm,
  cell: a.cell
}), m = () => ({ name: "org.apache.nifi.processors.standard.QueryDatabaseTableRecord_2_0", excludeKeys: ["db-fetch-db-type", "qdbtr-record-writer", "db-fetch-sql-query", "Table Name", "web预留（自动填入）"], selfFormColumn: [
  { assignKey: "db-fetch-db-type", tag: n },
  { assignKey: "qdbtr-record-writer", tag: n },
  {
    tag: d,
    ":data": "formData",
    prop: "config.properties[Database Connection Pooling Service]",
    isFormElem: !1,
    setup({ params: t }) {
      return { graphShadowCell: i(t) };
    },
    ":graphShadowCell": "graphShadowCell",
    ":disabled": "formData['state']==='running'"
  }
], hooksSubmit: (t, o) => {
  var s, l;
  if (!((s = o.event.form) == null ? void 0 : s.data.value[t.id].config.properties)["qdbtr-record-writer"])
    return r.error("请选择qdbtr-record-writer"), !1;
  let e = (l = o.event.shadow) == null ? void 0 : l.get(t, "My_Database_Connection_URL");
  if (!e)
    return r.error("请选择数据源"), !1;
  if (!e.ip || !e.databaseType)
    return r.error("请选择库名"), !1;
  if (!e.warehouseName)
    return r.error("请选择库名"), !1;
  if (!e.currentSchema)
    return r.error("请选择schema"), !1;
  if (!e.tableName)
    return r.error("请输入表"), !1;
  if (!e.sqlQuery)
    return r.error("请输入sql语句"), !1;
} });
export {
  m as default
};
