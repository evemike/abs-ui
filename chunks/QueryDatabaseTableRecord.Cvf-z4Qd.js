import { D as o } from "./index.PkQ34W9S.js";
import { ap as r } from "./vendor.vR4RX31U.js";
const t = (e) => ({
  graphShadow: e.graphShadow,
  drawerRef: e.drawerRef,
  graphForm: e.graphForm,
  cell: e.cell
}), c = () => ({ name: "org.apache.nifi.processors.standard.QueryDatabaseTableRecord_2_0", excludeKeys: ["db-fetch-db-type", "qdbtr-record-writer", "db-fetch-sql-query", "Table Name", "web预留（自动填入）"], selfFormColumn: [
  { assignKey: "db-fetch-db-type", tag: r },
  { assignKey: "qdbtr-record-writer", tag: r },
  {
    tag: o,
    ":data": "formData",
    prop: "config.properties[Database Connection Pooling Service]",
    isFormElem: !1,
    setup({ params: a }) {
      return { graphShadowCell: t(a) };
    },
    ":graphShadowCell": "graphShadowCell",
    ":disabled": "formData['state']==='running'"
  }
] });
export {
  c as default
};
