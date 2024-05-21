import "../css/index-Dt9O7VRg.css";
import { _ as ie, a as _e, b as de, c as ce, d as re, e as pe, f as ge, g as ue, h as me, i as ve, j as be, k as fe, l as ye, m as he, n as ke, o as we, p as qe, q as Ne, r as xe, s as Ce, t as Se, u as je, v as Le, w as De, x as Ve, y as Qe, z as Oe, A as Te, B as Ee, C as Re, D as ze, E as Be, F as Ie, G as Pe, H as Ue, I as Me, J as Fe, K as Je, L as Ke, M as $e, N as Ae, O as Ge, P as He, Q as We, R as Xe, S as Ye, T as Ze, U as ea, V as aa, W as ta, X as la, Y as oa, Z as sa, $ as na, a0 as ia, a1 as _a, a2 as da, a3 as ca, a4 as ra, a5 as pa, a6 as ga, a7 as ua, a8 as ma, a9 as va, aa as ba, ab as fa } from "./table.DtQlpGd_.js";
import { defineComponent as ya, computed as ha, reactive as ka, ref as v, watch as wa, onMounted as qa, resolveComponent as F, openBlock as c, createElementBlock as y, createElementVNode as d, createVNode as p, unref as l, withCtx as r, Fragment as J, renderList as K, createBlock as h, toDisplayString as Q, createCommentVNode as Na, normalizeClass as $, markRaw as O, nextTick as xa, pushScopeId as Ca, popScopeId as Sa } from "vue";
import { b as T } from "./api.CF1BbFLh.js";
import { C as ja } from "./main.C9B4zdL3.js";
import { bb as La, bc as Da, o as k, az as A, g as G, _ as Va } from "./vendor.CawUkpaF.js";
import { _ as Qa } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const x = (w) => (Ca("data-v-73a51ba5"), w = w(), Sa(), w), Oa = {
  "w-full": "",
  "h-full": ""
}, Ta = {
  flex: "",
  "items-center": "",
  "h-40": ""
}, Ea = /* @__PURE__ */ x(() => /* @__PURE__ */ d("span", { style: { "margin-right": "12px", "flex-shrink": "0" } }, "数据库驱动程序类名", -1)), Ra = {
  flex: "",
  "items-center": "",
  "h-40": ""
}, za = /* @__PURE__ */ x(() => /* @__PURE__ */ d("span", { style: { "margin-right": "12px", "flex-shrink": "0" } }, "数据库驱动程序位置", -1)), Ba = {
  key: 0,
  flex: "",
  "items-center": "",
  "h-40": ""
}, Ia = /* @__PURE__ */ x(() => /* @__PURE__ */ d("span", { "p-r-12": "" }, "选择数据源", -1)), Pa = {
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Ua = ["src"], Ma = ["src"], Fa = {
  key: 1,
  "w-full": "",
  "m-b-18": ""
}, Ja = {
  relative: "",
  "w-full": "",
  "h-full": ""
}, Ka = /* @__PURE__ */ x(() => /* @__PURE__ */ d("div", { "h-32": "" }, "SQL 语句", -1)), $a = {
  "w-300": "",
  "h-full": "",
  flex: "",
  "flex-col": "",
  "p-8": ""
}, Aa = {
  class: "custom-tree-node",
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Ga = ["src"], Ha = ["src"], Wa = ["title"], Xa = {
  key: 2,
  "m-b-18": "",
  "h-150": "",
  flex: ""
}, Ya = /* @__PURE__ */ x(() => /* @__PURE__ */ d("span", { "p-r-12": "" }, "目标表", -1)), Za = {
  class: "custom-tree-node",
  flex: "",
  "items-center": "",
  "gap-4": ""
}, et = ["src"], at = ["src"], tt = ["title"], lt = /* @__PURE__ */ ya({
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
    loadCascaderData: {},
    treeProps: { default: () => ({ label: "label", isLeaf: "isLeaf", children: "children" }) },
    treeNodeClick: {},
    getSql: {},
    autoSql: { type: Boolean, default: !0 },
    showCascader: { type: Boolean, default: !0 },
    showSql: { type: Boolean, default: !0 },
    data: {},
    prop: { default: "" },
    graphShadowCell: {}
  },
  setup(w) {
    const b = /* @__PURE__ */ Object.assign({
      "../../../openmetadata/icon/airbyte.png": ie,
      "../../../openmetadata/icon/airflow.png": _e,
      "../../../openmetadata/icon/amazon-s3.png": de,
      "../../../openmetadata/icon/amundsen.png": ce,
      "../../../openmetadata/icon/athena.png": re,
      "../../../openmetadata/icon/atlas.png": pe,
      "../../../openmetadata/icon/azuresql.png": ge,
      "../../../openmetadata/icon/bigquery.png": ue,
      "../../../openmetadata/icon/clickhouse.png": me,
      "../../../openmetadata/icon/databrick.png": ve,
      "../../../openmetadata/icon/dbt.png": be,
      "../../../openmetadata/icon/delta-lake.png": fe,
      "../../../openmetadata/icon/domo.png": ye,
      "../../../openmetadata/icon/doris.png": he,
      "../../../openmetadata/icon/druid.png": ke,
      "../../../openmetadata/icon/dynamodb.png": we,
      "../../../openmetadata/icon/glue.png": qe,
      "../../../openmetadata/icon/googleCloudService.png": Ne,
      "../../../openmetadata/icon/hive.png": xe,
      "../../../openmetadata/icon/ibmdb2.png": Ce,
      "../../../openmetadata/icon/iceberg.png": Se,
      "../../../openmetadata/icon/impala.png": je,
      "../../../openmetadata/icon/kafka.png": Le,
      "../../../openmetadata/icon/kinesis.png": De,
      "../../../openmetadata/icon/looker.png": Ve,
      "../../../openmetadata/icon/mariadb.png": Qe,
      "../../../openmetadata/icon/metabase.png": Oe,
      "../../../openmetadata/icon/mlflow.png": Te,
      "../../../openmetadata/icon/mode.png": Ee,
      "../../../openmetadata/icon/mongodb.png": Re,
      "../../../openmetadata/icon/mssql.png": ze,
      "../../../openmetadata/icon/mysql.png": Be,
      "../../../openmetadata/icon/oracle.png": Ie,
      "../../../openmetadata/icon/pinot.png": Pe,
      "../../../openmetadata/icon/postgres.png": Ue,
      "../../../openmetadata/icon/power-bi.png": Me,
      "../../../openmetadata/icon/presto.png": Fe,
      "../../../openmetadata/icon/qliksense.png": Je,
      "../../../openmetadata/icon/quicksight.png": Ke,
      "../../../openmetadata/icon/redash.png": $e,
      "../../../openmetadata/icon/redpanda.png": Ae,
      "../../../openmetadata/icon/redshift.png": Ge,
      "../../../openmetadata/icon/sagemaker.png": He,
      "../../../openmetadata/icon/salesforce.png": We,
      "../../../openmetadata/icon/saphana.png": Xe,
      "../../../openmetadata/icon/singlestore.png": Ye,
      "../../../openmetadata/icon/snowflakes.png": Ze,
      "../../../openmetadata/icon/sqlalchemy.png": ea,
      "../../../openmetadata/icon/sqlite.png": aa,
      "../../../openmetadata/icon/superset.png": ta,
      "../../../openmetadata/icon/tableau.png": la,
      "../../../openmetadata/icon/trino.png": oa,
      "../../../openmetadata/icon/vertica.png": sa
    }), f = /* @__PURE__ */ Object.assign({
      "../../../openmetadata/svg/dakaishujukulianjie.svg": na,
      "../../../openmetadata/svg/database.svg": ia,
      "../../../openmetadata/svg/field.svg": _a,
      "../../../openmetadata/svg/icon_clickhouse.svg": da,
      "../../../openmetadata/svg/liebiaoziduanguanli.svg": ca,
      "../../../openmetadata/svg/mongodb.svg": ra,
      "../../../openmetadata/svg/mysql.svg": pa,
      "../../../openmetadata/svg/oracle.svg": ga,
      "../../../openmetadata/svg/postgresql.svg": ua,
      "../../../openmetadata/svg/schema.svg": ma,
      "../../../openmetadata/svg/server.svg": va,
      "../../../openmetadata/svg/shujuku.svg": ba,
      "../../../openmetadata/svg/table.svg": fa
    }), H = w, {
      loadCascaderData: C,
      treeNodeClick: E,
      autoSql: W,
      getSql: R,
      data: z,
      prop: X,
      graphShadowCell: S
    } = H;
    let g = ha(
      () => S.graphShadow.get(S.cell.id).step.value === "running"
    ), a = ka({
      databaseType: "",
      sqlQuery: "",
      currentSchema: "",
      warehouseName: "",
      tableName: "",
      ip: "",
      id: "",
      tids: [],
      fullyQualifiedName: "",
      connection: {},
      className: "org.postgresql.Driver",
      location: "/opt/nifi/nifi-current/lib/postgresql-42.2.5.jar",
      // /opt/nifi/nifi-current/lib/mysql-connector-java-5.1.47.jar
      user: "",
      password: ""
    });
    const Y = [
      {
        value: "org.postgresql.Driver",
        label: "org.postgresql.Driver"
      },
      {
        value: "com.mysql.jdbc.Driver",
        label: "com.mysql.jdbc.Driver"
      }
    ], Z = [
      {
        value: "/opt/nifi/nifi-current/lib/postgresql-42.2.5.jar",
        label: "/opt/nifi/nifi-current/lib/postgresql-42.2.5.jar"
      },
      {
        value: "/opt/nifi/nifi-current/lib/mysql-connector-java-5.1.47.jar",
        label: "/opt/nifi/nifi-current/lib/mysql-connector-java-5.1.47.jar"
      }
    ], q = v(), ee = async () => {
      var _, e;
      if (!G(z, X))
        return;
      let n = G(z, 'config.properties["web预留（自动填入）"]');
      if (!n)
        return;
      let t = JSON.parse(n);
      a.databaseType = t.databaseType, a.sqlQuery = t.sqlQuery, (_ = u.value) == null || _.setValue(""), (e = u.value) == null || e.insertValue(t.sqlQuery), a.currentSchema = t.currentSchema, a.warehouseName = t.warehouseName, a.tableName = t.tableName, a.ip = t.ip, a.id = t.id, a.tids = t.tids, a.fullyQualifiedName = t.fullyQualifiedName, a.className = t.className, a.location = t.location, a.user = t.user, a.password = t.password, a.id = t.id, a.warehouseName && se({
        id: a.id,
        tids: a.tids,
        fullyQualifiedName: a.fullyQualifiedName,
        connection: {}
      });
    }, B = v({
      label: "label",
      children: "children",
      isLeaf: "isLeaf",
      leaf: "isLeaf"
      // disabled: () => true,
    }), ae = v(), te = (o) => {
      const n = I(o);
      q.value = n, P(n), a.databaseType = n.serviceType === "Postgres" ? "postgresql" : "mysql", a.id = o;
    };
    let D = [];
    const le = async (o, n) => {
      const t = o.data;
      let _ = [];
      if (t.label)
        t.children != null ? _ = t.children : C && (_ = await C(t));
      else if (C)
        _ = await C();
      else {
        const e = await T(), i = Va(e.data, "serviceType");
        D = e.data, _ = Object.keys(i).filter((s) => ["Mysql", "Postgres"].includes(s)).map((s) => ({
          label: s,
          value: s,
          data: s,
          icon: s,
          type: "group",
          children: i[s].map((m) => ({
            label: m.displayName || m.name,
            type: e.type,
            value: m.id,
            data: O(m),
            isLeaf: !0
          }))
        })), D.length > 0 && (q.value = I(a.id));
      }
      n(_);
    }, I = (o) => {
      var n;
      return (n = D.filter((t) => t.id == o)) == null ? void 0 : n[0];
    }, V = v(), u = v(), j = v([]), P = async (o) => {
      let n = [];
      if (o) {
        const t = await T(o);
        n = t.data.map((_) => ({
          label: _.displayName || _.name,
          type: t.type,
          value: _.id,
          data: O(_)
        })), a.fullyQualifiedName = o.fullyQualifiedName;
      } else
        a.fullyQualifiedName = "";
      j.value.length = 0, j.value = n;
    }, U = async (o, n) => {
      const t = o.data;
      if (t.isLeaf || t.leaf) {
        n([]);
        return;
      }
      let _ = [];
      if (t.children != null)
        _ = t.children;
      else if (t && t.data) {
        const e = t.data, i = await T(e);
        _ = i.data.map((s) => ({
          label: s.displayName || s.name,
          type: i.type,
          value: s.id,
          data: O(s),
          isLeaf: s.columns != null
        })), i.type === "table" && a.tids.length > 0 && xa(() => {
          V.value.setCurrentKey(a.tids[0]);
        });
      }
      n(_);
    }, oe = v([La()]), M = (o, n) => {
      var t, _, e, i;
      if (!g.value && (E && E(o, n), W && o.type == "table")) {
        const s = [n], m = [o.value];
        let N = n;
        for (; N.data.type != "database"; )
          N = N.parent, s.push(N), m.push(N.key);
        s.reverse();
        const ne = (t = u.value) == null ? void 0 : t.getValue();
        if (R) {
          const L = R(s, ne);
          (_ = u.value) == null || _.insertValue(L);
        } else {
          (e = u.value) == null || e.setValue("");
          const L = `SELECT * FROM ${o.label}`;
          (i = u.value) == null || i.insertValue(L), a.sqlQuery = L, a.tableName = o.label, a.user = q.value.connection.config.username, a.password = q.value.connection.config.authType.password, a.ip = q.value.connection.config.hostPort;
        }
        a.tids = m, a.warehouseName = o.data.database.name, a.currentSchema = o.data.databaseSchema.name;
      }
    }, se = async (o) => {
      await P(o);
    };
    return wa(a, (o) => {
      S.graphShadow.set(
        S.cell,
        "My_Database_Connection_URL",
        o
      );
    }), qa(() => {
      ee();
    }), (o, n) => {
      const t = F("el-option"), _ = F("el-select");
      return c(), y("div", Oa, [
        d("div", Ta, [
          Ea,
          p(_, {
            modelValue: l(a).className,
            "onUpdate:modelValue": n[0] || (n[0] = (e) => l(a).className = e),
            disabled: l(g)
          }, {
            default: r(() => [
              (c(), y(J, null, K(Y, (e) => p(t, {
                key: e.value,
                label: e.label,
                value: e.value
              }, null, 8, ["label", "value"])), 64))
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])
        ]),
        d("div", Ra, [
          za,
          p(_, {
            modelValue: l(a).location,
            "onUpdate:modelValue": n[1] || (n[1] = (e) => l(a).location = e),
            disabled: l(g)
          }, {
            default: r(() => [
              (c(), y(J, null, K(Z, (e) => p(t, {
                key: e.value,
                label: e.label,
                value: e.value
              }, null, 8, ["label", "value"])), 64))
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])
        ]),
        o.showCascader ? (c(), y("div", Ba, [
          Ia,
          p(l(Da), {
            "flex-1": "",
            ref_key: "cascaderRef",
            ref: ae,
            modelValue: l(a).id,
            "onUpdate:modelValue": n[2] || (n[2] = (e) => l(a).id = e),
            onChange: te,
            props: { ...o.cascaderProps, lazyLoad: le },
            disabled: l(g)
          }, {
            default: r(({ data: e }) => [
              d("div", Pa, [
                e.type == "group" ? (c(), h(l(k), {
                  key: 0,
                  title: e.label
                }, {
                  default: r(() => {
                    var i;
                    return [
                      d("img", {
                        src: ((i = l(b)[Object.keys(l(b)).find(
                          (s) => s.includes(e.label.toLowerCase())
                        ) || ""]) == null ? void 0 : i.default) || ""
                      }, null, 8, Ua)
                    ];
                  }),
                  _: 2
                }, 1032, ["title"])) : (c(), h(l(k), {
                  key: 1,
                  title: e.type
                }, {
                  default: r(() => {
                    var i;
                    return [
                      d("img", {
                        src: (i = l(f)[Object.keys(l(f)).find((s) => s.includes(e.type)) || ""]) == null ? void 0 : i.default
                      }, null, 8, Ma)
                    ];
                  }),
                  _: 2
                }, 1032, ["title"])),
                d("span", null, Q(e.label), 1)
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "props", "disabled"])
        ])) : Na("", !0),
        o.showSql ? (c(), y("div", Fa, [
          d("div", Ja, [
            Ka,
            d("div", {
              "h-400": "",
              class: $([l(g) ? "disabled_sql" : ""])
            }, [
              p(ja, {
                ref_key: "codeEditorRef",
                ref: u,
                lang: oe.value,
                readOnly: l(g)
              }, {
                default: r(() => [
                  d("div", $a, [
                    p(l(A), {
                      ref_key: "treeRef",
                      ref: V,
                      "flex-1": "",
                      "overflow-y-auto": "",
                      lazy: "",
                      props: B.value,
                      load: U,
                      data: j.value,
                      "highlight-current": "",
                      "empty-text": "",
                      "node-key": "value",
                      onNodeClick: M,
                      "default-expanded-keys": l(a).tids,
                      "default-checked-keys": [l(a).tids[0]]
                    }, {
                      default: r(({ data: e }) => [
                        d("span", Aa, [
                          e.type == "group" ? (c(), h(l(k), {
                            key: 0,
                            title: e.label
                          }, {
                            default: r(() => {
                              var i;
                              return [
                                d("img", {
                                  src: ((i = l(b)[Object.keys(l(b)).find(
                                    (s) => s.includes(e.label.toLowerCase())
                                  ) || ""]) == null ? void 0 : i.default) || ""
                                }, null, 8, Ga)
                              ];
                            }),
                            _: 2
                          }, 1032, ["title"])) : (c(), h(l(k), {
                            key: 1,
                            title: e.type
                          }, {
                            default: r(() => {
                              var i;
                              return [
                                d("img", {
                                  src: (i = l(f)[Object.keys(l(f)).find(
                                    (s) => s.includes(e.type)
                                  ) || ""]) == null ? void 0 : i.default
                                }, null, 8, Ha)
                              ];
                            }),
                            _: 2
                          }, 1032, ["title"])),
                          d("span", {
                            truncate: "",
                            "fw-bold": "",
                            title: e.label
                          }, Q(e.label), 9, Wa)
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
        ])) : (c(), y("div", Xa, [
          Ya,
          d("div", {
            style: { border: "1px solid rgb(230, 233, 239)" },
            "flex-1": "",
            class: $([l(g) ? "disabled_sql" : ""])
          }, [
            p(l(A), {
              ref_key: "treeRef",
              ref: V,
              "flex-1": "",
              "max-h-148": "",
              "overflow-y-auto": "",
              lazy: "",
              props: B.value,
              load: U,
              data: j.value,
              "highlight-current": "",
              "empty-text": "",
              "node-key": "value",
              onNodeClick: M,
              "default-expanded-keys": l(a).tids,
              "default-checked-keys": [l(a).tids[0]]
            }, {
              default: r(({ data: e }) => [
                d("span", Za, [
                  e.type == "group" ? (c(), h(l(k), {
                    key: 0,
                    title: e.label
                  }, {
                    default: r(() => {
                      var i;
                      return [
                        d("img", {
                          src: ((i = l(b)[Object.keys(l(b)).find(
                            (s) => s.includes(e.label.toLowerCase())
                          ) || ""]) == null ? void 0 : i.default) || ""
                        }, null, 8, et)
                      ];
                    }),
                    _: 2
                  }, 1032, ["title"])) : (c(), h(l(k), {
                    key: 1,
                    title: e.type
                  }, {
                    default: r(() => {
                      var i;
                      return [
                        d("img", {
                          src: (i = l(f)[Object.keys(l(f)).find(
                            (s) => s.includes(e.type)
                          ) || ""]) == null ? void 0 : i.default
                        }, null, 8, at)
                      ];
                    }),
                    _: 2
                  }, 1032, ["title"])),
                  d("span", {
                    truncate: "",
                    "fw-bold": "",
                    title: e.label
                  }, Q(e.label), 9, tt)
                ])
              ]),
              _: 1
            }, 8, ["props", "data", "default-expanded-keys", "default-checked-keys"])
          ], 2)
        ]))
      ]);
    };
  }
}), rt = /* @__PURE__ */ Qa(lt, [["__scopeId", "data-v-73a51ba5"]]);
export {
  rt as D
};
