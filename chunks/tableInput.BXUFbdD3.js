import { b as Ee, c as Le, d as Ve, e as De, h as Pe, i as je, j as Re, k as $e, l as Be, m as Oe, n as Fe, p as Qe, q as Ye, r as ze, s as Ke, t as Ue, u as Me, v as Xe, w as Ae, x as Ge, y as He, z as Je, A as We, B as Ze, C as ea, D as aa, F as ta, H as la, I as sa, J as oa, K as ia, L as na, M as _a, N as ca, O as ra, P as da, Q as ga, R as ua, S as pa, T as va, U as ba, V as fa, W as ma, X as ya, Y as ha, Z as wa, $ as ka, a0 as qa, a1 as xa, a2 as Ca, a3 as Ta, a4 as Ia, a5 as Na, a6 as Sa, a7 as Ea, a8 as La, a9 as Va, aa as Da, ab as Pa, ac as ja, ad as Ra, ae as $a, af as Ba, ag as Oa, ah as Fa, ai as Qa, aj as W, ak as re, al as B } from "./index.Bpn48lbJ.js";
import { defineComponent as Ya, ref as v, openBlock as b, createElementBlock as O, createVNode as p, unref as a, withCtx as d, createElementVNode as _, createBlock as N, toDisplayString as Z, createTextVNode as P, createCommentVNode as j, markRaw as ee } from "vue";
import { ai as za, aj as Ka, o as F, f as de, b6 as Ua, v as Ma, as as Xa, at as ae, y as ue, m as Aa, ah as Ga, a5 as Ha, d as Ja, e as Wa, _ as Za, b7 as et, g as at, a as ge, an as y, aq as te, af as tt, ar as lt } from "./vendor.BI0B3R_R.js";
import { C as st } from "./main.DwkzpibS.js";
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
  setup(Q, { expose: Y, emit: z }) {
    const C = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": Ee, "./icon/airflow.png": Le, "./icon/amazon-s3.png": Ve, "./icon/amundsen.png": De, "./icon/athena.png": Pe, "./icon/atlas.png": je, "./icon/azuresql.png": Re, "./icon/bigquery.png": $e, "./icon/clickhouse.png": Be, "./icon/databrick.png": Oe, "./icon/dbt.png": Fe, "./icon/delta-lake.png": Qe, "./icon/domo.png": Ye, "./icon/doris.png": ze, "./icon/druid.png": Ke, "./icon/dynamodb.png": Ue, "./icon/glue.png": Me, "./icon/googleCloudService.png": Xe, "./icon/hive.png": Ae, "./icon/ibmdb2.png": Ge, "./icon/iceberg.png": He, "./icon/impala.png": Je, "./icon/kafka.png": We, "./icon/kinesis.png": Ze, "./icon/looker.png": ea, "./icon/mariadb.png": aa, "./icon/metabase.png": ta, "./icon/mlflow.png": la, "./icon/mode.png": sa, "./icon/mongodb.png": oa, "./icon/mssql.png": ia, "./icon/mysql.png": na, "./icon/oracle.png": _a, "./icon/pinot.png": ca, "./icon/postgres.png": ra, "./icon/power-bi.png": da, "./icon/presto.png": ga, "./icon/qliksense.png": ua, "./icon/quicksight.png": pa, "./icon/redash.png": va, "./icon/redpanda.png": ba, "./icon/redshift.png": fa, "./icon/sagemaker.png": ma, "./icon/salesforce.png": ya, "./icon/saphana.png": ha, "./icon/singlestore.png": wa, "./icon/snowflakes.png": ka, "./icon/sqlalchemy.png": qa, "./icon/sqlite.png": xa, "./icon/superset.png": Ca, "./icon/tableau.png": Ta, "./icon/trino.png": Ia, "./icon/vertica.png": Na }), T = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": Sa, "./svg/database.svg": Ea, "./svg/field.svg": La, "./svg/icon_clickhouse.svg": Va, "./svg/liebiaoziduanguanli.svg": Da, "./svg/mongodb.svg": Pa, "./svg/mysql.svg": ja, "./svg/oracle.svg": Ra, "./svg/postgresql.svg": $a, "./svg/schema.svg": Ba, "./svg/server.svg": Oa, "./svg/shujuku.svg": Fa, "./svg/table.svg": Qa }), K = Q, h = z, { showLink: U, showPreivew: le, loadCascaderData: S, loadTreeData: o, linkTest: c, autoSql: i, formatConnection: r, sqlQuery: w = "", serverId: E = "", server: R = {}, getSql: L, tableIds: M = [], preview: m, groupNames: se = [] } = K, pe = {
      label: "label",
      children: "children",
      isLeaf: "isLeaf",
      leaf: "isLeaf"
    }, k = v(E);
    let q = { ...R };
    const oe = v(), ve = (t) => {
      const s = X(t);
      q = s, G(s), h("update:server", s), h("update:serverId", t), ce(), r && h("update:connection", r(s)), V.value = !1;
    };
    let ie = [];
    const be = async (t, s) => {
      const e = t.data;
      let l = [];
      if (e.label)
        e.children != null ? l = e.children : S && (l = await S(e));
      else if (S)
        l = await S();
      else {
        const n = await W(), f = Za(n.data, "serviceType"), g = Object.keys(f).filter((u) => se.length > 0 ? se.includes(u) : !0);
        ie = n.data, l = g.map((u) => ({ label: u, value: u, data: u, icon: u, type: "group", children: f[u].map((x) => ({ group: et.K, label: x.displayName || x.name, type: n.type, value: x.id, data: ee(x), isLeaf: !0 })) }));
      }
      s(l), a(k) && G(X(a(k)));
    }, X = (t) => {
      var s;
      return (s = ie.filter((e) => e.id == t)) == null ? void 0 : s[0];
    }, V = v(!1), fe = v(!1), me = async () => {
      try {
        V.value = await (c == null ? void 0 : c(q)) || !1;
      } catch {
      }
    }, ne = v("sql");
    let A = [...M];
    const ye = v(), D = v(), _e = v([]), G = async (t) => {
      let s = [];
      if (t)
        if (o)
          s = await o(t);
        else {
          const e = await W(t);
          s = e.data.map((l) => ({ label: l.displayName || l.name, type: e.type, value: l.id, data: ee(l) }));
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
      else if (o)
        l = await o(e);
      else if (e && e.data) {
        const n = e.data, f = await W(n);
        l = f.data.map((g) => ({ label: g.displayName || g.name, type: f.type, value: g.id, data: ee(g), isLeaf: g.columns != null }));
      }
      s(l);
    }, we = v([za()]), ke = {
      Postgres: ['"', "", ""]
    }, qe = (t, s) => {
      var e, l;
      if (q || (q = X(a(k))), i && t.type == "table") {
        const n = [s], f = [t.value];
        let g = s;
        for (; g.data.type != "database"; )
          g = g.parent, n.push(g), f.push(g.key);
        n.reverse();
        const u = at(ke, q.serviceType) || [], x = n.map((Se, $) => `${u[$] ? u[$] : ""}${Se.label}${u[$] ? u[$] : ""}`).join("."), H = (e = D.value) == null ? void 0 : e.getValue(), J = L ? L(n, H) : H ? x : `SELECT * FROM ${x}`;
        (l = D.value) == null || l.insertValue(J), I = H ? I + J : J;
        debugger;
        h("update:tableIds", f), A = f;
      }
    };
    let I = w;
    const xe = () => {
      var t;
      return (t = D.value) == null ? void 0 : t.getValue();
    }, ce = () => {
      const t = { server: q, serverId: a(k), sql: I, tableIds: A };
      h("change", t);
    }, Ce = new RegExp("^(\\s*)(select)(\\s+)(((?!(insert|delete|update)).)+)$", "i"), Te = (t) => {
      Ce.test(t) && (ce(), I = t, t && (Ie.value = !0));
    }, Ie = v(!1), Ne = async () => {
      if (!k.value) {
        ge.warning("请选择数据连接");
        return;
      }
      if (!I) {
        ge.warning("请输入 sql 语句");
        return;
      }
      m && m();
    };
    return Y({
      initTableData: G,
      codeEditorRef: D,
      cascaderRef: oe,
      getSqlValue: xe,
      selectDataServer: q
    }), (t, s) => (b(), O("div", ot, [
      t.showCascader ? (b(), O("div", it, [
        nt,
        p(a(Ka), {
          "flex-1": "",
          ref_key: "cascaderRef",
          ref: oe,
          modelValue: k.value,
          "onUpdate:modelValue": s[0] || (s[0] = (e) => k.value = e),
          onChange: ve,
          props: { ...t.cascaderProps, lazyLoad: be }
        }, {
          default: d(({ data: e }) => [
            _("div", _t, [
              e.type == "group" ? (b(), N(a(F), {
                key: 0,
                title: e.label
              }, {
                default: d(() => {
                  var l;
                  return [
                    _("img", {
                      src: ((l = a(C)[Object.keys(a(C)).find((n) => n.includes(e.label.toLowerCase())) || ""]) == null ? void 0 : l.default) || ""
                    }, null, 8, ct)
                  ];
                }),
                _: 2
              }, 1032, ["title"])) : (b(), N(a(F), {
                key: 1,
                title: e.type
              }, {
                default: d(() => {
                  var l;
                  return [
                    _("img", {
                      src: (l = a(T)[Object.keys(a(T)).find((n) => n.includes(e.type)) || ""]) == null ? void 0 : l.default
                    }, null, 8, rt)
                  ];
                }),
                _: 2
              }, 1032, ["title"])),
              _("span", null, Z(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        a(U) ? (b(), N(a(de), {
          key: 0,
          text: "",
          type: V.value ? "success" : "primary",
          disabled: V.value,
          icon: a(Ua),
          loading: fe.value,
          onClick: me
        }, {
          default: d(() => [
            P(Z(V.value ? "连接成功" : "测试连接"), 1)
          ]),
          _: 1
        }, 8, ["type", "disabled", "icon", "loading"])) : j("", !0),
        a(le) && a(m) != null ? (b(), N(a(de), {
          key: 1,
          text: "",
          type: "success",
          icon: a(Ma),
          onClick: Ne
        }, {
          default: d(() => [
            P("数据预览")
          ]),
          _: 1
        }, 8, ["icon"])) : j("", !0)
      ])) : j("", !0),
      t.showConfig ? (b(), O("div", dt, [
        gt,
        p(a(Xa), {
          modelValue: ne.value,
          "onUpdate:modelValue": s[1] || (s[1] = (e) => ne.value = e)
        }, {
          default: d(() => [
            p(a(ae), { label: "sql" }, {
              default: d(() => [
                P("SQL")
              ]),
              _: 1
            }),
            p(a(ae), { label: "table" }, {
              default: d(() => [
                P("选表")
              ]),
              _: 1
            }),
            p(a(ae), { label: "job" }, {
              default: d(() => [
                P("存储过程")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ])) : j("", !0),
      _("div", ut, [
        t.showSql ? (b(), O("div", pt, [
          vt,
          _("div", bt, [
            p(a(st), {
              ref_key: "codeEditorRef",
              ref: D,
              "model-value": a(I),
              lang: we.value,
              "onUpdate:modelValue": Te,
              class: "w-full h-full"
            }, {
              default: d(() => [
                _("div", ft, [
                  p(a(ue), {
                    "prefix-icon": a(Aa),
                    placeholder: ""
                  }, null, 8, ["prefix-icon"]),
                  p(a(Ga), {
                    ref_key: "treeRef",
                    ref: ye,
                    lazy: "",
                    props: pe,
                    load: he,
                    data: _e.value,
                    "node-key": "value",
                    onNodeClick: qe,
                    "default-expanded-keys": a(A),
                    class: "overflow-y-auto p-t-8",
                    style: { "max-height": "calc(100% - 32px - 8px)" }
                  }, {
                    default: d(({ data: e }) => [
                      _("span", mt, [
                        e.type == "group" ? (b(), N(a(F), {
                          key: 0,
                          title: e.label
                        }, {
                          default: d(() => {
                            var l;
                            return [
                              _("img", {
                                src: ((l = a(C)[Object.keys(a(C)).find((n) => n.includes(e.label.toLowerCase())) || ""]) == null ? void 0 : l.default) || ""
                              }, null, 8, yt)
                            ];
                          }),
                          _: 2
                        }, 1032, ["title"])) : (b(), N(a(F), {
                          key: 1,
                          title: e.type
                        }, {
                          default: d(() => {
                            var l;
                            return [
                              _("img", {
                                src: (l = a(T)[Object.keys(a(T)).find((n) => n.includes(e.type)) || ""]) == null ? void 0 : l.default
                              }, null, 8, ht)
                            ];
                          }),
                          _: 2
                        }, 1032, ["title"])),
                        _("span", {
                          truncate: "",
                          "fw-bold": "",
                          title: e.label
                        }, Z(e.label), 9, wt)
                      ])
                    ]),
                    _: 1
                  }, 8, ["data", "default-expanded-keys"])
                ])
              ]),
              _: 1
            }, 8, ["model-value", "lang"])
          ])
        ])) : j("", !0),
        kt,
        qt
      ]),
      p(a(Ha), null, {
        default: d(() => [
          p(a(Ja), null, {
            default: d(() => [
              p(a(Wa))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), St = () => {
  const Q = "TableInput", Y = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, z = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, C = async (o) => {
    const c = B.PREFIX + "/database/testConnect", i = re(o), r = await B.POST(c, { connection: i });
    return r.result || r.content;
  }, T = async (o = {}, c = "") => {
    const i = {
      connectionDetailVO: { connection: o },
      querySql: c
    }, r = B.PREFIX + "/database/getFieldInfo", w = await B.POST(r, i);
    return w.result || w.content;
  }, K = (o, c = "") => `${o.fullyQualifiedName}.${c}`, h = (o, c) => {
    var r;
    const i = (r = c.form) == null ? void 0 : r.getCellFormData(o);
    i && y(i, "$sql", i.sql);
  }, U = async (o, c) => {
    const { server: i, sql: r } = c;
    y(o, "sql", r), y(o, "$server", i);
    const { $fieldsKey: w } = o, E = K(i, r);
    if (w == null || E != w) {
      const R = re(i);
      if (y(o, "$connection", { ...R, name: i.id, dataSourceName: i.name, dsName: i.name }), y(o, "connection", i.id), !r || !i)
        return;
      const L = await T(R, r);
      if (L) {
        const M = L.map((m) => ({ repeat: "N", format: "", trim_type: "none", precision: m.fieldPrecision, length: m.fieldLength, type: m.fieldType, name: m.fieldName }));
        y(o, "fields", { field: M }), y(o, "$fieldsKey", E), y(o, "initFlag", !0);
      }
    }
  };
  return { name: Q, step: z, markup: Y, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: xt, ":sqlQuery": "formData.$sql", "v-model:serverId": "formData.$serverId", linkTest: C, "@change": ({ formData: o, $: c }) => U(o, c[0]), ":preview": "() => graphEvents.customEvent('datapreview',cell)" }
      ]
    },
    {
      type: "form",
      label: "高级配置",
      column: [
        { prop: "variables_active", label: "允许简易转换", tag: te, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "replace_variables", label: "替换SQL的变量", tag: te, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "execute_each_row", label: "执行每一步?", tag: te, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
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
    }
  ], open: h, metadata: {} };
};
export {
  St as default
};
