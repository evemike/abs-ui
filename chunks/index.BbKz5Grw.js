import "../css/index-zqWK6mTe.css";
import { _ as W, a as X, b as Y, c as Z, d as ee, e as ae, f as te, g as le, h as oe, i as se, j as _e, k as ne, l as ie, m as de, n as pe, o as ce, p as re, q as ge, r as ue, s as ve, t as me, u as be, v as fe, w as ye, x as he, y as ke, z as we, A as qe, B as xe, C as Ce, D as Ne, E as Le, F as Se, G as Oe, H as De, I as je, J as Ee, K as Qe, L as Re, M as Te, N as Ve, O as Be, P as ze, Q as Ie, R as Pe, S as Me, T as Je, U as Fe, V as Ge, W as Ke, X as Ue, Y as $e, Z as Ae, $ as He, a0 as We, a1 as Xe, a2 as Ye, a3 as Ze, a4 as ea, a5 as aa, a6 as ta, a7 as la, a8 as oa, a9 as sa, aa as _a, ab as na } from "./table.DtQlpGd_.js";
import { defineComponent as ia, toRefs as da, ref as r, onMounted as pa, watch as ca, openBlock as p, createElementBlock as w, createVNode as q, unref as t, withCtx as c, createElementVNode as n, createBlock as v, toDisplayString as L, createCommentVNode as ra, normalizeClass as I, markRaw as S, nextTick as ga, pushScopeId as ua, popScopeId as va } from "vue";
import { b9 as ma, f as ba, ba as fa, d as m, aG as P, g as M, aa as ya } from "./vendor.CTqz3lQh.js";
import { C as ha } from "./main.BzEWEJBT.js";
import { b as O } from "./api.CF1BbFLh.js";
import { _ as ka } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const D = (b) => (ua("data-v-6ee1bac7"), b = b(), va(), b), wa = {
  key: 0,
  flex: "",
  "items-center": "",
  "h-40": ""
}, qa = /* @__PURE__ */ D(() => /* @__PURE__ */ n("span", { "p-r-12": "" }, "选择数据源", -1)), xa = {
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Ca = ["src"], Na = ["src"], La = {
  key: 1,
  "w-full": "",
  "m-b-18": ""
}, Sa = {
  relative: "",
  "w-full": "",
  "h-full": ""
}, Oa = /* @__PURE__ */ D(() => /* @__PURE__ */ n("div", { "h-32": "" }, "SQL 语句", -1)), Da = {
  "w-300": "",
  "h-full": "",
  flex: "",
  "flex-col": "",
  "p-8": ""
}, ja = {
  class: "custom-tree-node",
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Ea = ["src"], Qa = ["src"], Ra = ["title"], Ta = {
  key: 2,
  "m-b-18": "",
  "h-150": "",
  flex: ""
}, Va = /* @__PURE__ */ D(() => /* @__PURE__ */ n("span", { "p-r-12": "" }, "目标表", -1)), Ba = {
  class: "custom-tree-node",
  flex: "",
  "items-center": "",
  "gap-4": ""
}, za = ["src"], Ia = ["src"], Pa = ["title"], Ma = /* @__PURE__ */ ia({
  __name: "index",
  props: {
    cascaderProps: { default: () => ({
      label: "label",
      leaf: "isLeaf",
      children: "children",
      value: "value",
      lazy: !0,
      emitPath: !1
    }) },
    treeProps: { default: () => ({ label: "label", isLeaf: "isLeaf", children: "children" }) },
    autoSql: { type: Boolean, default: !0 },
    showCascader: { type: Boolean, default: !0 },
    showSql: { type: Boolean, default: !0 },
    formData: {},
    prop: { default: "" },
    disabled: { type: Boolean, default: !1 },
    propOutput: { default: "" }
  },
  setup(b) {
    const j = b, { autoSql: J, prop: F, propOutput: E } = j, { formData: x, disabled: f } = da(j), g = /* @__PURE__ */ Object.assign({
      "../../../openmetadata/icon/airbyte.png": W,
      "../../../openmetadata/icon/airflow.png": X,
      "../../../openmetadata/icon/amazon-s3.png": Y,
      "../../../openmetadata/icon/amundsen.png": Z,
      "../../../openmetadata/icon/athena.png": ee,
      "../../../openmetadata/icon/atlas.png": ae,
      "../../../openmetadata/icon/azuresql.png": te,
      "../../../openmetadata/icon/bigquery.png": le,
      "../../../openmetadata/icon/clickhouse.png": oe,
      "../../../openmetadata/icon/databrick.png": se,
      "../../../openmetadata/icon/dbt.png": _e,
      "../../../openmetadata/icon/delta-lake.png": ne,
      "../../../openmetadata/icon/domo.png": ie,
      "../../../openmetadata/icon/doris.png": de,
      "../../../openmetadata/icon/druid.png": pe,
      "../../../openmetadata/icon/dynamodb.png": ce,
      "../../../openmetadata/icon/glue.png": re,
      "../../../openmetadata/icon/googleCloudService.png": ge,
      "../../../openmetadata/icon/hive.png": ue,
      "../../../openmetadata/icon/ibmdb2.png": ve,
      "../../../openmetadata/icon/iceberg.png": me,
      "../../../openmetadata/icon/impala.png": be,
      "../../../openmetadata/icon/kafka.png": fe,
      "../../../openmetadata/icon/kinesis.png": ye,
      "../../../openmetadata/icon/looker.png": he,
      "../../../openmetadata/icon/mariadb.png": ke,
      "../../../openmetadata/icon/metabase.png": we,
      "../../../openmetadata/icon/mlflow.png": qe,
      "../../../openmetadata/icon/mode.png": xe,
      "../../../openmetadata/icon/mongodb.png": Ce,
      "../../../openmetadata/icon/mssql.png": Ne,
      "../../../openmetadata/icon/mysql.png": Le,
      "../../../openmetadata/icon/oracle.png": Se,
      "../../../openmetadata/icon/pinot.png": Oe,
      "../../../openmetadata/icon/postgres.png": De,
      "../../../openmetadata/icon/power-bi.png": je,
      "../../../openmetadata/icon/presto.png": Ee,
      "../../../openmetadata/icon/qliksense.png": Qe,
      "../../../openmetadata/icon/quicksight.png": Re,
      "../../../openmetadata/icon/redash.png": Te,
      "../../../openmetadata/icon/redpanda.png": Ve,
      "../../../openmetadata/icon/redshift.png": Be,
      "../../../openmetadata/icon/sagemaker.png": ze,
      "../../../openmetadata/icon/salesforce.png": Ie,
      "../../../openmetadata/icon/saphana.png": Pe,
      "../../../openmetadata/icon/singlestore.png": Me,
      "../../../openmetadata/icon/snowflakes.png": Je,
      "../../../openmetadata/icon/sqlalchemy.png": Fe,
      "../../../openmetadata/icon/sqlite.png": Ge,
      "../../../openmetadata/icon/superset.png": Ke,
      "../../../openmetadata/icon/tableau.png": Ue,
      "../../../openmetadata/icon/trino.png": $e,
      "../../../openmetadata/icon/vertica.png": Ae
    }), u = /* @__PURE__ */ Object.assign({
      "../../../openmetadata/svg/dakaishujukulianjie.svg": He,
      "../../../openmetadata/svg/database.svg": We,
      "../../../openmetadata/svg/field.svg": Xe,
      "../../../openmetadata/svg/icon_clickhouse.svg": Ye,
      "../../../openmetadata/svg/liebiaoziduanguanli.svg": Ze,
      "../../../openmetadata/svg/mongodb.svg": ea,
      "../../../openmetadata/svg/mysql.svg": aa,
      "../../../openmetadata/svg/oracle.svg": ta,
      "../../../openmetadata/svg/postgresql.svg": la,
      "../../../openmetadata/svg/schema.svg": oa,
      "../../../openmetadata/svg/server.svg": sa,
      "../../../openmetadata/svg/shujuku.svg": _a,
      "../../../openmetadata/svg/table.svg": na
    });
    let o = r({
      databaseType: "",
      sqlQuery: "",
      tableName: "",
      id: "",
      tids: [],
      fullyQualifiedName: "",
      connection: {}
    });
    const Q = r(), G = async () => {
      var e, a;
      if (!M(x.value, F))
        return;
      let s = M(x.value, E);
      s && (o.value = JSON.parse(s), (e = y.value) == null || e.setValue(""), (a = y.value) == null || a.insertValue(o.value.sqlQuery), o.value.tids.length > 0 && H({
        id: o.value.id,
        tids: o.value.tids,
        fullyQualifiedName: o.value.fullyQualifiedName,
        connection: {}
      }));
    }, R = r({
      label: "label",
      children: "children",
      isLeaf: "isLeaf",
      leaf: "isLeaf"
    }), K = r(), U = (l) => {
      const s = T(l);
      Q.value = s, V(s), o.value.databaseType = s.serviceType === "Postgres" ? "postgresql" : "mysql", o.value.id = l;
    };
    let C = [];
    const $ = async (l, s) => {
      const e = l.data;
      let a = [];
      if (e.label)
        e.children != null && (a = e.children);
      else {
        const _ = await O(), d = ya(_.data, "serviceType");
        C = _.data, a = Object.keys(d).filter((i) => ["Mysql", "Postgres"].includes(i)).map((i) => ({
          label: i,
          value: i,
          data: i,
          icon: i,
          type: "group",
          children: d[i].map((k) => ({
            label: k.displayName || k.name,
            type: _.type,
            value: k.id,
            data: S(k),
            isLeaf: !0
          }))
        })), C.length > 0 && (Q.value = T(o.value.id));
      }
      s(a);
    }, T = (l) => {
      var s;
      return (s = C.filter((e) => e.id == l)) == null ? void 0 : s[0];
    }, N = r(), y = r(), h = r([]), V = async (l) => {
      let s = [];
      if (l) {
        const e = await O(l);
        s = e.data.map((a) => ({
          label: a.displayName || a.name,
          type: e.type,
          value: a.id,
          data: S(a)
        })), o.value.fullyQualifiedName = l.fullyQualifiedName;
      } else
        o.value.fullyQualifiedName = "";
      h.value.length = 0, h.value = s;
    }, B = async (l, s) => {
      const e = l.data;
      if (e.isLeaf || e.leaf) {
        s([]);
        return;
      }
      let a = [];
      if (e.children != null)
        a = e.children;
      else if (e && e.data) {
        const _ = e.data, d = await O(_);
        a = d.data.map((i) => ({
          label: i.displayName || i.name,
          type: d.type,
          value: i.id,
          data: S(i),
          isLeaf: i.columns != null
        })), d.type === "table" && o.value.tids.length > 0 && ga(() => {
          N.value.setCurrentKey(o.value.tids[0]);
        });
      }
      s(a);
    }, A = r([ma()]), z = (l, s) => {
      var e, a;
      if (!f.value && J && l.type == "table") {
        const _ = [l.value];
        let d = s;
        for (; d.data.type != "database"; )
          d = d.parent, _.push(d.key);
        (e = y.value) == null || e.setValue("");
        const i = `SELECT * FROM ${l.label}`;
        (a = y.value) == null || a.insertValue(i), o.value.sqlQuery = i, o.value.tableName = l.label, o.value.tids = _;
      }
    }, H = async (l) => {
      await V(l);
    };
    return pa(() => {
      G();
    }), ca(
      o,
      (l) => {
        ba(x.value, E, JSON.stringify(l));
      },
      { deep: !0 }
    ), (l, s) => (p(), w("div", null, [
      l.showCascader ? (p(), w("div", wa, [
        qa,
        q(t(fa), {
          "flex-1": "",
          ref_key: "cascaderRef",
          ref: K,
          modelValue: t(o).id,
          "onUpdate:modelValue": s[0] || (s[0] = (e) => t(o).id = e),
          onChange: U,
          props: { ...l.cascaderProps, lazyLoad: $ },
          disabled: t(f),
          placeholder: " "
        }, {
          default: c(({ data: e }) => [
            n("div", xa, [
              e.type == "group" ? (p(), v(t(m), {
                key: 0,
                title: e.label
              }, {
                default: c(() => {
                  var a;
                  return [
                    n("img", {
                      src: ((a = t(g)[Object.keys(t(g)).find(
                        (_) => _.includes(e.label.toLowerCase())
                      ) || ""]) == null ? void 0 : a.default) || ""
                    }, null, 8, Ca)
                  ];
                }),
                _: 2
              }, 1032, ["title"])) : (p(), v(t(m), {
                key: 1,
                title: e.type
              }, {
                default: c(() => {
                  var a;
                  return [
                    n("img", {
                      src: (a = t(u)[Object.keys(t(u)).find((_) => _.includes(e.type)) || ""]) == null ? void 0 : a.default
                    }, null, 8, Na)
                  ];
                }),
                _: 2
              }, 1032, ["title"])),
              n("span", null, L(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props", "disabled"])
      ])) : ra("", !0),
      l.showSql ? (p(), w("div", La, [
        n("div", Sa, [
          Oa,
          n("div", {
            "h-400": "",
            class: I([t(f) ? "disabled_sql" : ""])
          }, [
            q(ha, {
              ref_key: "codeEditorRef",
              ref: y,
              lang: A.value,
              readOnly: t(f)
            }, {
              default: c(() => [
                n("div", Da, [
                  q(t(P), {
                    ref_key: "treeRef",
                    ref: N,
                    "flex-1": "",
                    "overflow-y-auto": "",
                    lazy: "",
                    props: R.value,
                    load: B,
                    data: h.value,
                    "highlight-current": "",
                    "empty-text": "",
                    "node-key": "value",
                    onNodeClick: z,
                    "default-expanded-keys": t(o).tids,
                    "default-checked-keys": [t(o).tids[0]]
                  }, {
                    default: c(({ data: e }) => [
                      n("span", ja, [
                        e.type == "group" ? (p(), v(t(m), {
                          key: 0,
                          title: e.label
                        }, {
                          default: c(() => {
                            var a;
                            return [
                              n("img", {
                                src: ((a = t(g)[Object.keys(t(g)).find(
                                  (_) => _.includes(e.label.toLowerCase())
                                ) || ""]) == null ? void 0 : a.default) || ""
                              }, null, 8, Ea)
                            ];
                          }),
                          _: 2
                        }, 1032, ["title"])) : (p(), v(t(m), {
                          key: 1,
                          title: e.type
                        }, {
                          default: c(() => {
                            var a;
                            return [
                              n("img", {
                                src: (a = t(u)[Object.keys(t(u)).find(
                                  (_) => _.includes(e.type)
                                ) || ""]) == null ? void 0 : a.default
                              }, null, 8, Qa)
                            ];
                          }),
                          _: 2
                        }, 1032, ["title"])),
                        n("span", {
                          truncate: "",
                          "fw-bold": "",
                          title: e.label
                        }, L(e.label), 9, Ra)
                      ])
                    ]),
                    _: 1
                  }, 8, ["props", "data", "default-expanded-keys", "default-checked-keys"])
                ])
              ]),
              _: 1
            }, 8, ["lang", "readOnly"])
          ], 2)
        ])
      ])) : (p(), w("div", Ta, [
        Va,
        n("div", {
          style: { border: "1px solid rgb(230, 233, 239)" },
          "flex-1": "",
          class: I([t(f) ? "disabled_sql" : ""])
        }, [
          q(t(P), {
            ref_key: "treeRef",
            ref: N,
            "flex-1": "",
            "max-h-148": "",
            "overflow-y-auto": "",
            lazy: "",
            props: R.value,
            load: B,
            data: h.value,
            "highlight-current": "",
            "empty-text": "",
            "node-key": "value",
            onNodeClick: z,
            "default-expanded-keys": t(o).tids,
            "default-checked-keys": [t(o).tids[0]]
          }, {
            default: c(({ data: e }) => [
              n("span", Ba, [
                e.type == "group" ? (p(), v(t(m), {
                  key: 0,
                  title: e.label
                }, {
                  default: c(() => {
                    var a;
                    return [
                      n("img", {
                        src: ((a = t(g)[Object.keys(t(g)).find(
                          (_) => _.includes(e.label.toLowerCase())
                        ) || ""]) == null ? void 0 : a.default) || ""
                      }, null, 8, za)
                    ];
                  }),
                  _: 2
                }, 1032, ["title"])) : (p(), v(t(m), {
                  key: 1,
                  title: e.type
                }, {
                  default: c(() => {
                    var a;
                    return [
                      n("img", {
                        src: (a = t(u)[Object.keys(t(u)).find(
                          (_) => _.includes(e.type)
                        ) || ""]) == null ? void 0 : a.default
                      }, null, 8, Ia)
                    ];
                  }),
                  _: 2
                }, 1032, ["title"])),
                n("span", {
                  truncate: "",
                  "fw-bold": "",
                  title: e.label
                }, L(e.label), 9, Pa)
              ])
            ]),
            _: 1
          }, 8, ["props", "data", "default-expanded-keys", "default-checked-keys"])
        ], 2)
      ]))
    ]));
  }
}), Ha = /* @__PURE__ */ ka(Ma, [["__scopeId", "data-v-6ee1bac7"]]);
export {
  Ha as D
};
