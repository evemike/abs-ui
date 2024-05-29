import { D as c } from "./index.C7b9p911.js";
import { p as b, c as a, h as l } from "./index.DSwYVZJp.js";
import { j as r, f as i } from "./vendor.DBgIaorj.js";
let u = [
  {
    parameter: "put-db-record-dcbp-service",
    message: "请选择放置数据库记录dcbp服务"
  },
  {
    parameter: "put-db-record-record-reader",
    message: "请选择放置数据库记录读取器"
  },
  {
    parameter: "db-type",
    message: "请选择数据库类型"
  },
  {
    parameter: "put-db-record-statement-type",
    message: "请选择存储策略"
  }
];
const S = () => ({ name: "org.apache.nifi.processors.standard.PutDatabaseRecord_2_0", excludeKeys: [
  "put-db-record-record-reader",
  "db-type",
  "put-db-record-dcbp-service",
  "put-db-record-statement-type",
  "put-db-record-table-name",
  "web预留（自动填入）"
], selfFormColumn: [
  {
    prop: "config.properties.put-db-record-dcbp-service",
    assignKey: "put-db-record-dcbp-service",
    tag: r,
    filterable: !0,
    placeholder: ""
  },
  {
    assignKey: "put-db-record-record-reader",
    tag: r,
    prop: "config.properties.put-db-record-record-reader",
    placeholder: ""
  },
  {
    assignKey: "db-type",
    tag: r,
    prop: "config.properties.db-type",
    placeholder: ""
  },
  {
    assignKey: "put-db-record-statement-type",
    prop: "config.properties.put-db-record-statement-type",
    tag: r,
    label: "存储策略",
    placeholder: "",
    cls: [
      { value: "INSERT", label: "追加" },
      { value: "UPSERT", label: "融合" }
    ]
  },
  {
    tag: c,
    ":formData": "formData",
    prop: "config.properties['put-db-record-dcbp-service']",
    propOutput: "config.properties['web预留（自动填入）']",
    isFormElem: !1,
    setup({ params: t }) {
      return {
        disabled: t.step.value === "running"
      };
    },
    ":disabled": "disabled"
  }
], hooksSubmit: (t, s) => {
  var d;
  let e = (d = s.event.form) == null ? void 0 : d.data.value[t.id].config.properties;
  b(e, u);
  let { databaseType: p, tableName: o } = JSON.parse(
    e["web预留（自动填入）"]
  );
  p || a("请选择数据源"), o || a("请选择表"), e["db-type"] && l[e["db-type"]] !== p && a("数据库获取数据库类型应与数据源类型一致"), i(e, "put-db-record-table-name", o);
} });
export {
  S as default
};
