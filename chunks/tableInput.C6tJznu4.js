import { _ as Se, a as Le, b as Ve, c as De, d as Pe, e as Re, f as je, g as Be, h as $e, i as Oe, j as ze, k as Qe, l as Ye, m as Fe, n as Ke, o as Ue, p as Ge, q as Me, r as Xe, s as Ae, t as He, u as Je, v as We, w as Ze, x as ea, y as aa, z as ta, A as la, B as sa, C as oa, D as ia, E as na, F as _a, G as ca, H as ra, I as da, J as ga, K as ua, L as pa, M as va, N as ba, O as fa, P as ma, Q as ya, R as ha, S as wa, T as ka, U as qa, V as xa, W as Ca, X as Ta, Y as Ea, Z as Ia, $ as Na, a0 as Sa, a1 as La, a2 as Va, a3 as Da, a4 as Pa, a5 as Ra, a6 as ja, a7 as Ba, a8 as $a, a9 as Oa, aa as za, ab as Qa } from "./table.DtQlpGd_.js";
import { defineComponent as Ya, ref as v, openBlock as b, createElementBlock as $, createVNode as p, unref as a, withCtx as c, createElementVNode as _, createBlock as I, toDisplayString as J, createTextVNode as V, createCommentVNode as D, markRaw as W } from "vue";
import { bb as Fa, bc as Ka, o as O, f as re, bg as Ua, v as Ga, an as Ma, ao as Z, y as ue, m as Xa, az as Aa, a5 as Ha, d as Ja, e as Wa, _ as Za, bh as et, g as at, a as de, aq as ee, ap as tt, am as lt, ar as q } from "./vendor.DCDhdkpx.js";
import { b as ae } from "./api.CF1BbFLh.js";
import { C as st } from "./main.Bwix_asg.js";
import { u as ge, K as z } from "./index.QIXUGKFB.js";
const ot = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, it = {
  key: 0,
  flex: "",
  "items-center": "",
  "gap-16": "",
  "h-40": ""
}, nt = /* @__PURE__ */ _("span", {
  "w-120": "",
  "text-nowrap": ""
}, "选择数据源", -1), _t = {
  flex: "",
  "items-center": "",
  "gap-4": ""
}, ct = ["src"], rt = ["src"], dt = {
  key: 1,
  flex: "",
  "items-center": "",
  "gap-16": "",
  "h-40": ""
}, gt = /* @__PURE__ */ _("span", { "w-120": "" }, "配置方式", -1), ut = {
  "w-full": "",
  style: { height: "calc(100% - 40px)" }
}, pt = {
  key: 0,
  relative: "",
  "w-full": "",
  "h-full": "",
  flex: "",
  "flex-col": "",
  "overflow-hidden": ""
}, vt = /* @__PURE__ */ _("div", { "h-32": "" }, "SQL 语句", -1), bt = {
  "min-h-100": "",
  style: { height: "calc(100% - 32px)" }
}, ft = {
  "w-300": "",
  "h-full": "",
  "p-8": "",
  "box-border": ""
}, mt = {
  class: "custom-tree-node",
  flex: "",
  "items-center": "",
  "gap-4": "",
  "text-14": ""
}, yt = ["src"], ht = ["src"], wt = ["title"], kt = /* @__PURE__ */ _("div", null, null, -1), qt = /* @__PURE__ */ _("div", null, null, -1), xt = /* @__PURE__ */ Ya({
  __name: "data-source",
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
    groupNames: {},
    autoSql: { type: Boolean, default: !0 },
    showCascader: { type: Boolean, default: !0 },
    showSql: { type: Boolean, default: !0 },
    showConfig: { type: Boolean, default: !1 },
    showPreivew: { type: Boolean, default: !0 },
    showLink: { type: Boolean, default: !0 },
    sqlQuery: { default: "" },
    serverId: {},
    server: {},
    tableIds: {}
  },
  emits: ["update:sqlQuery", "update:connection", "update:server", "update:serverId", "update:tableIds", "change"],
  setup(Q, { expose: Y, emit: F }) {
    const x = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": Se, "./icon/airflow.png": Le, "./icon/amazon-s3.png": Ve, "./icon/amundsen.png": De, "./icon/athena.png": Pe, "./icon/atlas.png": Re, "./icon/azuresql.png": je, "./icon/bigquery.png": Be, "./icon/clickhouse.png": $e, "./icon/databrick.png": Oe, "./icon/dbt.png": ze, "./icon/delta-lake.png": Qe, "./icon/domo.png": Ye, "./icon/doris.png": Fe, "./icon/druid.png": Ke, "./icon/dynamodb.png": Ue, "./icon/glue.png": Ge, "./icon/googleCloudService.png": Me, "./icon/hive.png": Xe, "./icon/ibmdb2.png": Ae, "./icon/iceberg.png": He, "./icon/impala.png": Je, "./icon/kafka.png": We, "./icon/kinesis.png": Ze, "./icon/looker.png": ea, "./icon/mariadb.png": aa, "./icon/metabase.png": ta, "./icon/mlflow.png": la, "./icon/mode.png": sa, "./icon/mongodb.png": oa, "./icon/mssql.png": ia, "./icon/mysql.png": na, "./icon/oracle.png": _a, "./icon/pinot.png": ca, "./icon/postgres.png": ra, "./icon/power-bi.png": da, "./icon/presto.png": ga, "./icon/qliksense.png": ua, "./icon/quicksight.png": pa, "./icon/redash.png": va, "./icon/redpanda.png": ba, "./icon/redshift.png": fa, "./icon/sagemaker.png": ma, "./icon/salesforce.png": ya, "./icon/saphana.png": ha, "./icon/singlestore.png": wa, "./icon/snowflakes.png": ka, "./icon/sqlalchemy.png": qa, "./icon/sqlite.png": xa, "./icon/superset.png": Ca, "./icon/tableau.png": Ta, "./icon/trino.png": Ea, "./icon/vertica.png": Ia }), C = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": Na, "./svg/database.svg": Sa, "./svg/field.svg": La, "./svg/icon_clickhouse.svg": Va, "./svg/liebiaoziduanguanli.svg": Da, "./svg/mongodb.svg": Pa, "./svg/mysql.svg": Ra, "./svg/oracle.svg": ja, "./svg/postgresql.svg": Ba, "./svg/schema.svg": $a, "./svg/server.svg": Oa, "./svg/shujuku.svg": za, "./svg/table.svg": Qa }), K = Q, y = F, { showLink: te, showPreivew: le, loadCascaderData: o, loadTreeData: r, linkTest: n, autoSql: u, formatConnection: m, sqlQuery: N = "", serverId: P = "", server: R = {}, getSql: j, tableIds: T = [], preview: U, groupNames: se = [] } = K, pe = {
      label: "label",
      children: "children",
      isLeaf: "isLeaf",
      leaf: "isLeaf"
    }, h = v(P);
    let w = { ...R };
    const oe = v(), ve = (t) => {
      const s = G(t);
      w = s, X(s), y("update:server", s), y("update:serverId", t), ce(), m && y("update:connection", m(s)), S.value = !1;
    };
    let ie = [];
    const be = async (t, s) => {
      const e = t.data;
      let l = [];
      if (e.label)
        e.children != null ? l = e.children : o && (l = await o(e));
      else if (o)
        l = await o();
      else {
        const i = await ae(), f = Za(i.data, "serviceType"), d = Object.keys(f).filter((g) => se.length > 0 ? se.includes(g) : !0);
        ie = i.data, l = d.map((g) => ({ label: g, value: g, data: g, icon: g, type: "group", children: f[g].map((k) => ({ group: et.K, label: k.displayName || k.name, type: i.type, value: k.id, data: W(k), isLeaf: !0 })) }));
      }
      s(l), a(h) && X(G(a(h)));
    }, G = (t) => {
      var s;
      return (s = ie.filter((e) => e.id == t)) == null ? void 0 : s[0];
    }, S = v(!1), fe = v(!1), me = async () => {
      try {
        S.value = await (n == null ? void 0 : n(w)) || !1;
      } catch {
      }
    }, ne = v("sql");
    let M = [...T];
    const ye = v(), L = v(), _e = v([]), X = async (t) => {
      let s = [];
      if (t)
        if (r)
          s = await r(t);
        else {
          const e = await ae(t);
          s = e.data.map((l) => ({ label: l.displayName || l.name, type: e.type, value: l.id, data: W(l) }));
        }
      _e.value = s;
    }, he = async (t, s) => {
      const e = t.data;
      if (e.isLeaf || e.leaf) {
        s([]);
        return;
      }
      let l = [];
      if (e.children != null)
        l = e.children;
      else if (r)
        l = await r(e);
      else if (e && e.data) {
        const i = e.data, f = await ae(i);
        l = f.data.map((d) => ({ label: d.displayName || d.name, type: f.type, value: d.id, data: W(d), isLeaf: d.columns != null }));
      }
      s(l);
    }, we = v([Fa()]), ke = {
      Postgres: ['"', "", ""]
    }, qe = (t, s) => {
      var e, l;
      if (w || (w = G(a(h))), u && t.type == "table") {
        const i = [s], f = [t.value];
        let d = s;
        for (; d.data.type != "database"; )
          d = d.parent, i.push(d), f.push(d.key);
        i.reverse();
        const g = at(ke, w.serviceType) || [], k = i.map((Ne, B) => `${g[B] ? g[B] : ""}${Ne.label}${g[B] ? g[B] : ""}`).join("."), A = (e = L.value) == null ? void 0 : e.getValue(), H = j ? j(i, A) : A ? k : `SELECT * FROM ${k}`;
        (l = L.value) == null || l.insertValue(H), E = A ? E + H : H, y("update:tableIds", f), M = f;
      }
    };
    let E = N;
    const xe = () => {
      var t;
      return (t = L.value) == null ? void 0 : t.getValue();
    }, ce = () => {
      const t = { server: w, serverId: a(h), sql: E, tableIds: M };
      y("change", t);
    }, Ce = new RegExp("^(\\s*)(select)(\\s+)(((?!(insert|delete|update)).)+)$", "i"), Te = (t) => {
      Ce.test(t) && (ce(), E = t, t && (Ee.value = !0));
    }, Ee = v(!1), Ie = async () => {
      if (!h.value) {
        de.warning("请选择数据连接");
        return;
      }
      if (!E) {
        de.warning("请输入 sql 语句");
        return;
      }
      U && U();
    };
    return Y({
      initTableData: X,
      codeEditorRef: L,
      cascaderRef: oe,
      getSqlValue: xe,
      selectDataServer: w
    }), (t, s) => (b(), $("div", ot, [
      t.showCascader ? (b(), $("div", it, [
        nt,
        p(a(Ka), {
          "flex-1": "",
          ref_key: "cascaderRef",
          ref: oe,
          modelValue: h.value,
          "onUpdate:modelValue": s[0] || (s[0] = (e) => h.value = e),
          onChange: ve,
          props: { ...t.cascaderProps, lazyLoad: be }
        }, {
          default: c(({ data: e }) => [
            _("div", _t, [
              e.type == "group" ? (b(), I(a(O), {
                key: 0,
                title: e.label
              }, {
                default: c(() => {
                  var l;
                  return [
                    _("img", {
                      src: ((l = a(x)[Object.keys(a(x)).find((i) => i.includes(e.label.toLowerCase())) || ""]) == null ? void 0 : l.default) || ""
                    }, null, 8, ct)
                  ];
                }),
                _: 2
              }, 1032, ["title"])) : (b(), I(a(O), {
                key: 1,
                title: e.type
              }, {
                default: c(() => {
                  var l;
                  return [
                    _("img", {
                      src: (l = a(C)[Object.keys(a(C)).find((i) => i.includes(e.type)) || ""]) == null ? void 0 : l.default
                    }, null, 8, rt)
                  ];
                }),
                _: 2
              }, 1032, ["title"])),
              _("span", null, J(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        a(te) ? (b(), I(a(re), {
          key: 0,
          text: "",
          type: S.value ? "success" : "primary",
          disabled: S.value,
          icon: a(Ua),
          loading: fe.value,
          onClick: me
        }, {
          default: c(() => [
            V(J(S.value ? "连接成功" : "测试连接"), 1)
          ]),
          _: 1
        }, 8, ["type", "disabled", "icon", "loading"])) : D("", !0),
        a(le) && a(U) != null ? (b(), I(a(re), {
          key: 1,
          text: "",
          type: "success",
          icon: a(Ga),
          onClick: Ie
        }, {
          default: c(() => [
            V("数据预览")
          ]),
          _: 1
        }, 8, ["icon"])) : D("", !0)
      ])) : D("", !0),
      t.showConfig ? (b(), $("div", dt, [
        gt,
        p(a(Ma), {
          modelValue: ne.value,
          "onUpdate:modelValue": s[1] || (s[1] = (e) => ne.value = e)
        }, {
          default: c(() => [
            p(a(Z), { label: "sql" }, {
              default: c(() => [
                V("SQL")
              ]),
              _: 1
            }),
            p(a(Z), { label: "table" }, {
              default: c(() => [
                V("选表")
              ]),
              _: 1
            }),
            p(a(Z), { label: "job" }, {
              default: c(() => [
                V("存储过程")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ])) : D("", !0),
      _("div", ut, [
        t.showSql ? (b(), $("div", pt, [
          vt,
          _("div", bt, [
            p(a(st), {
              ref_key: "codeEditorRef",
              ref: L,
              "model-value": a(E),
              lang: we.value,
              "onUpdate:modelValue": Te,
              class: "w-full h-full"
            }, {
              default: c(() => [
                _("div", ft, [
                  p(a(ue), {
                    "prefix-icon": a(Xa),
                    placeholder: ""
                  }, null, 8, ["prefix-icon"]),
                  p(a(Aa), {
                    ref_key: "treeRef",
                    ref: ye,
                    lazy: "",
                    props: pe,
                    load: he,
                    data: _e.value,
                    "node-key": "value",
                    onNodeClick: qe,
                    "default-expanded-keys": a(M),
                    class: "overflow-y-auto p-t-8",
                    style: { "max-height": "calc(100% - 32px - 8px)" }
                  }, {
                    default: c(({ data: e }) => [
                      _("span", mt, [
                        e.type == "group" ? (b(), I(a(O), {
                          key: 0,
                          title: e.label
                        }, {
                          default: c(() => {
                            var l;
                            return [
                              _("img", {
                                src: ((l = a(x)[Object.keys(a(x)).find((i) => i.includes(e.label.toLowerCase())) || ""]) == null ? void 0 : l.default) || ""
                              }, null, 8, yt)
                            ];
                          }),
                          _: 2
                        }, 1032, ["title"])) : (b(), I(a(O), {
                          key: 1,
                          title: e.type
                        }, {
                          default: c(() => {
                            var l;
                            return [
                              _("img", {
                                src: (l = a(C)[Object.keys(a(C)).find((i) => i.includes(e.type)) || ""]) == null ? void 0 : l.default
                              }, null, 8, ht)
                            ];
                          }),
                          _: 2
                        }, 1032, ["title"])),
                        _("span", {
                          truncate: "",
                          "fw-bold": "",
                          title: e.label
                        }, J(e.label), 9, wt)
                      ])
                    ]),
                    _: 1
                  }, 8, ["data", "default-expanded-keys"])
                ])
              ]),
              _: 1
            }, 8, ["model-value", "lang"])
          ])
        ])) : D("", !0),
        kt,
        qt
      ]),
      p(a(Ha), null, {
        default: c(() => [
          p(a(Ja), null, {
            default: c(() => [
              p(a(Wa))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), Lt = () => {
  const Q = "TableInput", Y = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, F = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, x = async (o) => {
    const r = z.PREFIX + "/database/testConnect", n = ge(o), u = await z.POST(r, { connection: n });
    return u.result || u.content;
  }, C = async (o = {}, r = "") => {
    const n = {
      connectionDetailVO: { connection: o },
      querySql: r
    }, u = z.PREFIX + "/database/getFieldInfo", m = await z.POST(u, n);
    return m.result || m.content;
  }, K = (o, r = "") => `${o.fullyQualifiedName}.${r}`, y = async (o, r) => {
    const { server: n, sql: u } = r;
    q(o, "sql", u), q(o, "$server", n);
    const { $fieldsKey: m } = o, N = K(n, u);
    if (m == null || N != m) {
      const P = ge(n);
      if (q(o, "$connection", { ...P, name: n.id, dataSourceName: n.name, dsName: n.name }), q(o, "connection", n.id), !u || !n)
        return;
      const R = await C(P, u);
      if (R) {
        const j = R.map((T) => ({ repeat: "N", format: "", trim_type: "none", precision: T.fieldPrecision, length: T.fieldLength, type: T.fieldType, name: T.fieldName }));
        q(o, "fields", { field: j }), q(o, "$fieldsKey", N), q(o, "initFlag", !0);
      }
    }
  };
  return { name: Q, step: F, markup: Y, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: xt, ":sqlQuery": "formData.sql", "v-model:serverId": "formData.$serverId", linkTest: x, "@change": ({ formData: o, $: r }) => y(o, r[0]), ":preview": "() => graphEvents.customEvent('datapreview',cell)" }
      ]
    },
    {
      type: "form",
      label: "高级配置",
      column: [
        { prop: "variables_active", label: "允许简易转换", tag: ee, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "replace_variables", label: "替换SQL的变量", tag: ee, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "execute_each_row", label: "执行每一步?", tag: ee, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        //
        {
          tag: "p",
          class: "",
          cls: [
            { tag: "i", cls: "从步骤插入数据" },
            { tag: tt, prop: "lookup", label: "", cls: [] },
            // ??? 这里从源码中看不出来选项从哪里来
            { tag: ue, prop: "insert_Date", label: "" }
          ]
        },
        //
        { prop: "limit", label: "记录数量限制", tag: lt }
        // {prop:"",label:"",tag:ElCheckbox,trueLabel:"Y",falseLabel:"N"},
      ]
    },
    { label: "数据预览", elem: {} }
  ], metadata: {} };
};
export {
  Lt as default
};
