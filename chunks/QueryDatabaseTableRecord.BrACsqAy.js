import { D as d } from "./index.BbKz5Grw.js";
import { p as l, c as a, h as b } from "./index.Bv3tHJqj.js";
import { j as t, f as p } from "./vendor.CTqz3lQh.js";
let f = [
  {
    parameter: "Database Connection Pooling Service",
    message: "请选择数据库连接池服务"
  },
  {
    parameter: "db-fetch-db-type",
    message: "请选择数据库获取数据库类型"
  },
  {
    parameter: "qdbtr-record-writer",
    message: "请选择qdbtr-record-writer"
  }
];
const S = () => ({ name: "org.apache.nifi.processors.standard.QueryDatabaseTableRecord_2_0", excludeKeys: [
  "Database Connection Pooling Service",
  "db-fetch-db-type",
  "qdbtr-record-writer",
  "db-fetch-sql-query",
  "Table Name",
  "web预留（自动填入）"
], selfFormColumn: [
  {
    prop: "config.properties.Database Connection Pooling Service",
    assignKey: "Database Connection Pooling Service",
    tag: t,
    filterable: !0,
    placeholder: ""
  },
  {
    prop: "config.properties.db-fetch-db-type",
    assignKey: "db-fetch-db-type",
    tag: t,
    placeholder: ""
  },
  {
    prop: "config.properties.qdbtr-record-writer",
    assignKey: "qdbtr-record-writer",
    tag: t,
    placeholder: ""
  },
  {
    tag: d,
    ":formData": "formData",
    prop: "config.properties['Database Connection Pooling Service']",
    propOutput: "config.properties['web预留（自动填入）']",
    isFormElem: !1,
    setup({ params: r }) {
      return {
        disabled: r.step.value === "running"
      };
    },
    ":disabled": "disabled"
  }
], hooksSubmit: (r, n) => {
  var i;
  let e = (i = n.event.form) == null ? void 0 : i.data.value[r.id].config.properties;
  l(e, f);
  let { databaseType: o, tableName: s, sqlQuery: c } = JSON.parse(
    e["web预留（自动填入）"]
  );
  o || a("请选择数据源"), s || a("请选择表"), e["db-fetch-db-type"] && b[e["db-fetch-db-type"]] !== o && a("数据库获取数据库类型应与数据源类型一致"), p(e, "Table Name", s), p(e, "db-fetch-sql-query", c);
} });
export {
  S as default
};
