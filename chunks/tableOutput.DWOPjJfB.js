import "../css/tableOutput-DWvU-FoH.css";
import { b as ye, c as ke, d as we, e as xe, h as Ne, i as Te, j as Ve, k as Ce, l as Pe, m as $e, n as Ie, p as Ye, q as De, r as qe, s as Oe, t as Fe, u as Le, v as Se, w as je, x as Ee, y as ze, z as Be, A as Re, B as Ue, C as Me, D as Xe, F as Ae, H as Ge, I as Ke, J as Qe, K as He, L as Je, M as We, N as Ze, O as ea, P as aa, Q as ta, R as la, S as na, T as ia, U as sa, V as oa, W as _a, X as ra, Y as ca, Z as da, $ as pa, a0 as ua, a1 as ga, a2 as ba, a3 as va, a4 as ma, a5 as fa, a6 as ha, a7 as ya, a8 as ka, a9 as wa, aa as xa, ab as Na, ac as Ta, ad as Va, ae as Ca, af as Pa, ag as $a, ah as Ia, ai as Ya, aj as ne, ak as ie, al as M } from "./index.CVCBNrTh.js";
import { defineComponent as ue, ref as S, openBlock as m, createElementBlock as Y, createVNode as k, unref as a, withCtx as h, createElementVNode as w, createBlock as j, toDisplayString as Q, isRef as Da, createTextVNode as W, createCommentVNode as se, markRaw as oe, computed as X, watch as qa, onMounted as Oa, Fragment as _e, renderList as re, withModifiers as ce } from "vue";
import { al as de, o as H, f as Z, bc as Fa, _ as La, g as f, d as pe, e as L, af as ee, ad as Sa, O as J, au as ja, as as N, ap as I } from "./vendor.WiziF_4i.js";
const Ea = {
  key: 0,
  flex: "",
  "items-center": "",
  "gap-16": "",
  "h-40": ""
}, za = /* @__PURE__ */ w("span", {
  "w-120": "",
  "text-nowrap": ""
}, "选择数据源", -1), Ba = {
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Ra = ["src"], Ua = ["src"], Ma = {
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Xa = ["src"], Aa = /* @__PURE__ */ ue({
  __name: "data-table",
  props: {
    cascaderProps: { default: () => ({ label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !1 }) },
    loadCascaderData: {},
    treeProps: { default: () => ({ label: "label", isLeaf: "isLeaf", children: "children" }) },
    loadTreeData: {},
    preview: {},
    linkTest: {},
    treeNodeClick: {},
    formatConnection: {},
    getSql: {},
    leafType: { default: "table" },
    autoSql: { type: Boolean, default: !0 },
    showCascader: { type: Boolean, default: !0 },
    showSql: { type: Boolean, default: !0 },
    showConfig: { type: Boolean, default: !1 },
    showPreivew: { type: Boolean, default: !0 },
    showLink: { type: Boolean, default: !0 },
    sqlQuery: {},
    serverId: {},
    server: {},
    tableIds: {},
    database: {},
    schema: {},
    table: {},
    field: {},
    tableData: {}
  },
  emits: ["update:connection", "update:server", "update:serverId", "update:tableIds", "update:database", "update:schema", "update:table", "update:field", "update:tableData", "change"],
  setup(E, { expose: z, emit: B }) {
    const q = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": ye, "./icon/airflow.png": ke, "./icon/amazon-s3.png": we, "./icon/amundsen.png": xe, "./icon/athena.png": Ne, "./icon/atlas.png": Te, "./icon/azuresql.png": Ve, "./icon/bigquery.png": Ce, "./icon/clickhouse.png": Pe, "./icon/databrick.png": $e, "./icon/dbt.png": Ie, "./icon/delta-lake.png": Ye, "./icon/domo.png": De, "./icon/doris.png": qe, "./icon/druid.png": Oe, "./icon/dynamodb.png": Fe, "./icon/glue.png": Le, "./icon/googleCloudService.png": Se, "./icon/hive.png": je, "./icon/ibmdb2.png": Ee, "./icon/iceberg.png": ze, "./icon/impala.png": Be, "./icon/kafka.png": Re, "./icon/kinesis.png": Ue, "./icon/looker.png": Me, "./icon/mariadb.png": Xe, "./icon/metabase.png": Ae, "./icon/mlflow.png": Ge, "./icon/mode.png": Ke, "./icon/mongodb.png": Qe, "./icon/mssql.png": He, "./icon/mysql.png": Je, "./icon/oracle.png": We, "./icon/pinot.png": Ze, "./icon/postgres.png": ea, "./icon/power-bi.png": aa, "./icon/presto.png": ta, "./icon/qliksense.png": la, "./icon/quicksight.png": na, "./icon/redash.png": ia, "./icon/redpanda.png": sa, "./icon/redshift.png": oa, "./icon/sagemaker.png": _a, "./icon/salesforce.png": ra, "./icon/saphana.png": ca, "./icon/singlestore.png": da, "./icon/snowflakes.png": pa, "./icon/sqlalchemy.png": ua, "./icon/sqlite.png": ga, "./icon/superset.png": ba, "./icon/tableau.png": va, "./icon/trino.png": ma, "./icon/vertica.png": fa }), T = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ha, "./svg/database.svg": ya, "./svg/field.svg": ka, "./svg/icon_clickhouse.svg": wa, "./svg/liebiaoziduanguanli.svg": xa, "./svg/mongodb.svg": Na, "./svg/mysql.svg": Ta, "./svg/oracle.svg": Va, "./svg/postgresql.svg": Ca, "./svg/schema.svg": Pa, "./svg/server.svg": $a, "./svg/shujuku.svg": Ia, "./svg/table.svg": Ya }), O = E, v = B, { showLink: R, leafType: F, loadCascaderData: V, linkTest: C, formatConnection: n, serverId: s = "", server: d = {}, tableIds: o = [] } = O, x = S(s);
    let y = d;
    const P = S(), $ = S(), l = (r) => {
      const c = ae(r);
      y = c, v("update:server", c), v("update:serverId", r), n && v("update:connection", n(c)), U.value = !1, g = [];
    };
    let i = [];
    const _ = async (r, c) => {
      let e = [];
      if (V)
        e = await V();
      else {
        const t = await ne(), p = La(t.data, "serviceType");
        e = Object.keys(p).map((u) => ({ label: u, value: u, data: u, icon: u, type: "group", children: p[u].map((b) => ({ id: b.id, label: b.displayName || b.name, type: t.type, value: b.id, data: oe(b), isLeaf: !0 })) })), i = [].concat(...e.map((u) => u.children));
      }
      c(e);
    };
    let g = o;
    const ge = async (r, c) => {
      let e = [];
      const t = r.data, p = t.label ? t.data : y;
      if (p && p.type != F)
        if (V)
          e = await V(p);
        else {
          const u = await ne(p);
          e = u.data.map((b) => ({ label: b.displayName || b.name, type: u.type, value: b.id, data: oe(b), isLeaf: u.type == F }));
        }
      c(e);
    }, be = (r) => {
      var u, b, D, te;
      const c = ((b = (u = $.value) == null ? void 0 : u.cascaderPanelRef) == null ? void 0 : b.menus) || [], e = [];
      let t = 0;
      for (const G of r) {
        const he = c[t];
        e[t] = (te = (D = he.find((K) => {
          var le;
          return ((le = K == null ? void 0 : K.data) == null ? void 0 : le.data.id) == G;
        })) == null ? void 0 : D.data) == null ? void 0 : te.data, t++;
      }
      t > 0 && v("update:database", e[0]), t > 1 && v("update:schema", e[1]), t > 2 && v("update:table", e[2]), t > 3 && v("update:field", e[3]);
      let p = "";
      t > 2 && (p = me([e[0], e[1], e[2]].map((G) => G.name), y == null ? void 0 : y.serviceType)), v("update:tableIds", r), v("update:tableData", e), v("change", { tableIds: r, tableData: e, server: y, serverId: x.value, sql: p });
    }, ae = (r) => {
      var c, e;
      return (e = (c = i.filter((t) => t.id == r)) == null ? void 0 : c[0]) == null ? void 0 : e.data;
    }, ve = {
      Postgres: ['"', "", ""]
    }, me = (r, c) => {
      var u;
      let e = c || "";
      e || (e = ((u = ae(a(x))) == null ? void 0 : u.serviceType) || "");
      const t = f(ve, e) || [];
      return `select * from ${r.map((b, D) => `${t[D] ? t[D] : ""}${b}${t[D] ? t[D] : ""}`).join(".")}`;
    }, U = S(!1), A = S(!1), fe = async () => {
      A.value = !0;
      try {
        U.value = await (C == null ? void 0 : C(y)) || !1;
      } catch (r) {
        console.warn("testLink error ==> ", r);
      }
      A.value = !1;
    };
    return z({
      serverRef: P,
      dataRef: $,
      selectDataServer: y
    }), (r, c) => (m(), Y("div", null, [
      r.showCascader ? (m(), Y("div", Ea, [
        za,
        k(a(de), {
          "flex-1": "",
          ref_key: "serverRef",
          ref: P,
          modelValue: x.value,
          "onUpdate:modelValue": c[0] || (c[0] = (e) => x.value = e),
          onChange: l,
          props: { ...r.cascaderProps, lazyLoad: _ }
        }, {
          default: h(({ data: e }) => [
            w("div", Ba, [
              e.type == "group" ? (m(), j(a(H), {
                key: 0,
                title: e.label
              }, {
                default: h(() => {
                  var t;
                  return [
                    w("img", {
                      src: ((t = a(q)[Object.keys(a(q)).find((p) => p.includes(e.label.toLowerCase())) || ""]) == null ? void 0 : t.default) || ""
                    }, null, 8, Ra)
                  ];
                }),
                _: 2
              }, 1032, ["title"])) : (m(), j(a(H), {
                key: 1,
                title: e.type
              }, {
                default: h(() => {
                  var t;
                  return [
                    w("img", {
                      src: (t = a(T)[Object.keys(a(T)).find((p) => p.includes(e.type)) || ""]) == null ? void 0 : t.default
                    }, null, 8, Ua)
                  ];
                }),
                _: 2
              }, 1032, ["title"])),
              w("span", null, Q(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        k(a(de), {
          "flex-1": "",
          ref_key: "dataRef",
          ref: $,
          modelValue: a(g),
          "onUpdate:modelValue": c[1] || (c[1] = (e) => Da(g) ? g.value = e : g = e),
          onChange: be,
          props: { ...r.cascaderProps, lazyLoad: ge, emitPath: !0 }
        }, {
          default: h(({ data: e }) => [
            w("div", Ma, [
              k(a(H), {
                title: e.type
              }, {
                default: h(() => {
                  var t;
                  return [
                    w("img", {
                      src: (t = a(T)[Object.keys(a(T)).find((p) => p.includes(e.type)) || ""]) == null ? void 0 : t.default
                    }, null, 8, Xa)
                  ];
                }),
                _: 2
              }, 1032, ["title"]),
              w("span", null, Q(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        a(R) ? (m(), j(a(Z), {
          key: 0,
          text: "",
          type: U.value ? "success" : "primary",
          disabled: U.value,
          icon: a(Fa),
          loading: A.value,
          onClick: fe
        }, {
          default: h(() => [
            W(Q(U.value ? "连接成功" : "测试连接"), 1)
          ]),
          _: 1
        }, 8, ["type", "disabled", "icon", "loading"])) : se("", !0)
      ])) : se("", !0)
    ]));
  }
}), Ga = {
  class: "comp-fields",
  flex: "",
  "w-full": "",
  "gap-20": "",
  "overflow-auto": ""
}, Ka = {
  "flex-1": "",
  class: "max-w-40% min-w-30%"
}, Qa = { "min-w-50": "" }, Ha = /* @__PURE__ */ w("div", { "h-50": "" }, null, -1), Ja = {
  "h-48": "",
  flex: "",
  "items-center": "",
  "justify-center": ""
}, Wa = {
  key: 0,
  class: "i-mingcute:arrow-right-fill w-2em h-2em c-#409EFF"
}, Za = {
  key: 1,
  class: "i-nimbus:stop w-2em h-2em c-#ddd"
}, et = {
  "flex-2": "",
  "w-full": ""
}, at = /* @__PURE__ */ ue({
  __name: "fileds",
  props: {
    inputFileds: { default: "" },
    inputProps: { default: () => ({}) },
    outputFileds: { default: "" },
    outputProps: { default: () => ({}) },
    formdata: {},
    data: {}
  },
  emits: ["change", "update:data"],
  setup(E, { emit: z }) {
    const B = E, { inputProps: q, outputProps: T, formdata: O, outputFileds: v, inputFileds: R, data: F = [] } = B, V = z, C = X(() => f(O, R) || []), n = X(() => f(O, v) || []), s = X(() => {
      const l = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, T || {});
      return a(n).map((i) => ({ label: f(i, l.label) || f(i, l.value), value: f(i, l.value), name: f(i, l.name) || f(i, l.value), type: f(i, l.type), remark: f(i, l.remark) })) || [];
    }), d = X(() => {
      const l = Object.assign({ name: "name", type: "type", remark: "remark" }, q || {});
      return a(C).map((i) => ({ name: f(i, l.name), type: f(i, l.type), remark: f(i, l.remark) }));
    }), o = S(F), x = () => {
      const l = [];
      for (const i of a(d)) {
        const _ = a(s).find((g) => g.name == i.name);
        _ ? l.push({ ..._ }) : l.push({});
      }
      o.value = l;
    };
    qa([C, n], ([l, i]) => {
      x(), i.length > 0 && l.length > 0 && $();
    });
    const y = (l, i) => {
      const _ = a(s).find((g) => g.value == l);
      _ && Object.assign(i.row, _), $();
    }, P = (l, i) => {
      l.row.$enabled = i, $();
    }, $ = () => {
      if (a(o).length > 0) {
        const l = a(o).map((i, _) => i.$enabled == !1 ? void 0 : [d.value[_], { ...i }]).filter((i) => i != null);
        V("change", l), V("update:data", a(o));
      }
    };
    return Oa(() => {
      F.length != a(C).length && x();
    }), (l, i) => (m(), Y("div", Ga, [
      w("div", Ka, [
        k(a(pe), {
          data: d.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: h(() => [
            k(a(L), {
              label: "输入表字段",
              prop: "name"
            }),
            k(a(L), {
              label: "类型",
              prop: "type",
              width: "120"
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      w("div", Qa, [
        Ha,
        (m(!0), Y(_e, null, re(o.value, (_) => (m(), Y("div", Ja, [
          _.$enabled != !1 ? (m(), Y("div", Wa)) : (m(), Y("div", Za))
        ]))), 256))
      ]),
      w("div", et, [
        k(a(pe), {
          data: o.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: h(() => [
            k(a(L), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: h((_) => [
                k(a(ee), {
                  modelValue: _.row.name,
                  "onUpdate:modelValue": (g) => _.row.name = g,
                  disabled: _.row.$enabled == !1,
                  onChange: (g) => y(g, _),
                  size: "small"
                }, {
                  default: h(() => [
                    (m(!0), Y(_e, null, re(s.value, (g) => (m(), j(a(Sa), {
                      label: g.label,
                      value: g.value
                    }, null, 8, ["label", "value"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
              ]),
              _: 1
            }),
            k(a(L), {
              label: "类型",
              prop: "type",
              width: "120"
            }),
            k(a(L), {
              label: "主键",
              prop: "main",
              width: "80"
            }),
            k(a(L), {
              label: "操作",
              width: "120"
            }, {
              default: h((_) => [
                _.row.$enabled != !1 ? (m(), j(a(Z), {
                  key: 0,
                  size: "small",
                  onClick: ce(() => P(_, !1), ["stop"])
                }, {
                  default: h(() => [
                    W("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (m(), j(a(Z), {
                  key: 1,
                  size: "small",
                  onClick: ce(() => P(_, !0), ["stop"])
                }, {
                  default: h(() => [
                    W("恢复")
                  ]),
                  _: 2
                }, 1032, ["onClick"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data"])
      ])
    ]));
  }
}), st = () => {
  const E = "TableOutput", z = {
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
    ports: { items: [{ id: "in", group: "left" }] }
  }, B = async (n) => {
    const s = M.PREFIX + "/database/testConnect", d = ie(n), o = await M.POST(s, { connection: d });
    return o.result || o.content;
  }, q = (n, s) => {
    console.log(s, n);
  }, T = async (n) => {
    const s = M.PREFIX + "/database/getFieldInfo", d = await M.POST(s, n);
    return d.result || d.content || [];
  }, O = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "Y", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: "N", ignore_errors: "Y", use_batch: "Y", specify_fields: "Y", partitioning_enabled: "N", partitioning_field: "", partitioning_daily: "N", partitioning_monthly: "Y", tablename_in_field: "N", tablename_field: "", tablename_in_table: "N", return_keys: "N", return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, v = async (n, s) => {
    const { tableData: d, server: o, tableIds: x, sql: y } = s;
    if (I(n, "$tableIds", x), I(n, "$server", o), o && d) {
      d[1] && I(n, "schema", d[1].name), d[2] && I(n, "table", d[2].name);
      const P = ie(o);
      I(n, "connection", o.id), I(n, "$connection", { ...P, name: o.id, dataSourceName: o.name, dsName: o.name, dataSourceId: o.id });
      const l = await T({
        connectionDetailVO: { connection: P },
        querySql: y
      });
      l && I(n, "$fields", l);
    } else
      console.error("没有获取到足够的数据来初始化字段 ===> ", n);
  }, R = (n, s) => {
    if (s && s.length > 0) {
      const d = s.map(([o, x]) => ({ column_name: o.name, stream_name: x.name }));
      I(n, "fields", { field: d });
    }
  };
  return { name: E, step: O, markup: z, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Aa, "v-model:serverId": "formData.$serverId", ":server": "formData.$server", ":tableIds": "formData.$tableIds", "@change": ({ formData: n, $: s }) => v(n, s[0]), linkTest: B },
      { tag: J },
      { tag: ja, label: "数据入表方式", prop: "$truncate", tip: { content: `
  <p>清空覆盖：删除表数据后再插入新数据</p>
  <p>追加：将数据直接追加到表中，如果遇到主键（唯一约束）冲突，则直接报错并结束</p>
  <p>插入且更新：将数据追加到表中，遇到主键冲突时覆盖这条数据</p>
  <p>插入不更新：只追加不同主键的数据，相同主键的数据直接舍弃</p>
  `, rawContent: !0 }, "@change": ({ formData: n, $: s }) => q(n, s[0]), cls: [{ cls: "清空覆盖", label: "over" }, { cls: "追加", label: "insert" }, { cls: "插入且更新", label: "update" }, { cls: "插入不更新", label: "add" }] },
      { tag: J },
      { tag: at, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: n, $: s }) => R(n, s[0]) }
    ] },
    { type: "form", label: "高级配置", column: [
      { label: "提交记录数量", prop: "commit" },
      { label: "裁剪表", tag: N, prop: "truncate", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "忽略插入错误", tag: N, prop: "ignore_errors", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "指定数据可字段", tag: N, prop: "specify_fields", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      // {prop:"",label:"",tag:ElSwitch,trueLabel:"Y",falseLabel:"N"}
      { tag: J, cls: "主选项" },
      { label: "表分区数据", tag: N, prop: "partitioning_enabled", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "分区字段", tag: ee, prop: "partitioning_field", cls: [] },
      //  item in step.outFields
      { label: "每月分区数据", tag: N, prop: "partitioning_daily", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "每天分区数据", tag: N, prop: "partitioning_monthly", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "使用批量插入", tag: N, prop: "use_batch", ":disabled": "formData['return_keys'] == true", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "表名定义在一个字段里", tag: N, prop: "tablename_in_field", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "包含表名的字段", tag: ee, prop: "tablename_field", clearable: !0, ":disabled": "formData['tablename_in_field'] == 'N'", cls: [] },
      { label: "存储表名字段", tag: N, prop: "tablename_in_table", ":disabled": "formData['tablename_in_field'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "返回一个自动产生的关键字", tag: N, prop: "return_keys", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "自动产生关键字的名称", prop: "return_field", ":disabled": "formData['return_keys'] == 'N'" }
    ] }
  ], metadata: {} };
};
export {
  st as default
};
