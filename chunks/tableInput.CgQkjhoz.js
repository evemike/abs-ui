import { _ as he, a as ye, b as ke, c as we, d as qe, e as Ce, f as Ie, g as Ne, h as xe, i as Ve, j as Te, k as Le, l as Ee, m as Se, n as De, o as Pe, p as Ue, q as je, r as Oe, s as Ye, t as $e, u as Be, v as ze, w as Fe, x as Me, y as Qe, z as Re, A as Ge, B as Je, C as Ae, D as He, E as Ke, F as We, G as Xe, H as Ze, I as ea, J as aa, K as sa, L as ta, M as ia, N as la, O as oa, P as na, Q as _a, R as ca, S as ra, T as ga, U as pa, V as ua, W as va, X as da, Y as ma, Z as ba, $ as fa, a0 as ha, a1 as ya, a2 as ka, a3 as wa, a4 as qa, a5 as Ca, a6 as Ia, a7 as Na, a8 as xa, a9 as Va, aa as Ta, ab as La } from "./table.DtQlpGd_.js";
import { defineComponent as E, ref as q, reactive as S, h as m, toRefs as oe, watch as H, openBlock as B, createElementBlock as Ea, createElementVNode as D, createVNode as N, unref as c, createBlock as K, withCtx as W, createTextVNode as X, toDisplayString as Sa, createCommentVNode as Z } from "vue";
import { bc as Da, o as Pa, I as Ua, bb as ja, f as ee, aB as Oa, bg as Ya, O as ne, y as ce, m as $a, _ as Ba, a as U, aJ as za, aq as ae, ap as Fa, am as Ma, ar as P } from "./vendor.CawUkpaF.js";
import { b as se } from "./api.CF1BbFLh.js";
import { C as Qa } from "./main.C9B4zdL3.js";
import { u as _e } from "./index.BT2M4jic.js";
const Ra = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, Ga = {
  flex: "",
  "gap-2em": "",
  "h-32": ""
}, Ja = {
  flex: "",
  style: { height: "calc(100% - 32px - 17px)" }
}, Aa = {
  "h-full": "",
  "w-200": "",
  "box-border": "",
  "p-8": "",
  "overflow-hidden": "",
  "b-r-light": "",
  "b-r-solid": "",
  "b-r-1": "",
  "m-r-8": ""
}, Ha = { style: { width: "calc(100% - 200px)" } }, Ka = /* @__PURE__ */ E({
  __name: "data-source-new",
  props: {
    serverId: { default: "" },
    schemaIds: { default: () => [] },
    sql: { default: "" },
    groups: { default: () => [] },
    testConnect: {},
    preview: {},
    refresh: {}
  },
  emits: ["update:serverId", "update:schemaIds", "update:sql", "put:server", "put:schema", "change"],
  setup(x, { emit: z }) {
    const j = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": he, "./icon/airflow.png": ye, "./icon/amazon-s3.png": ke, "./icon/amundsen.png": we, "./icon/athena.png": qe, "./icon/atlas.png": Ce, "./icon/azuresql.png": Ie, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": xe, "./icon/databrick.png": Ve, "./icon/dbt.png": Te, "./icon/delta-lake.png": Le, "./icon/domo.png": Ee, "./icon/doris.png": Se, "./icon/druid.png": De, "./icon/dynamodb.png": Pe, "./icon/glue.png": Ue, "./icon/googleCloudService.png": je, "./icon/hive.png": Oe, "./icon/ibmdb2.png": Ye, "./icon/iceberg.png": $e, "./icon/impala.png": Be, "./icon/kafka.png": ze, "./icon/kinesis.png": Fe, "./icon/looker.png": Me, "./icon/mariadb.png": Qe, "./icon/metabase.png": Re, "./icon/mlflow.png": Ge, "./icon/mode.png": Je, "./icon/mongodb.png": Ae, "./icon/mssql.png": He, "./icon/mysql.png": Ke, "./icon/oracle.png": We, "./icon/pinot.png": Xe, "./icon/postgres.png": Ze, "./icon/power-bi.png": ea, "./icon/presto.png": aa, "./icon/qliksense.png": sa, "./icon/quicksight.png": ta, "./icon/redash.png": ia, "./icon/redpanda.png": la, "./icon/redshift.png": oa, "./icon/sagemaker.png": na, "./icon/salesforce.png": _a, "./icon/saphana.png": ca, "./icon/singlestore.png": ra, "./icon/snowflakes.png": ga, "./icon/sqlalchemy.png": pa, "./icon/sqlite.png": ua, "./icon/superset.png": va, "./icon/tableau.png": da, "./icon/trino.png": ma, "./icon/vertica.png": ba }), O = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": fa, "./svg/database.svg": ha, "./svg/field.svg": ya, "./svg/icon_clickhouse.svg": ka, "./svg/liebiaoziduanguanli.svg": wa, "./svg/mongodb.svg": qa, "./svg/mysql.svg": Ca, "./svg/oracle.svg": Ia, "./svg/postgresql.svg": Na, "./svg/schema.svg": xa, "./svg/server.svg": Va, "./svg/shujuku.svg": Ta, "./svg/table.svg": La }), F = x, { serverId: M, schemaIds: Q, sql: R, groups: te, testConnect: Y, preview: p, refresh: h } = F, u = z, V = (s, t) => {
      let l = "";
      const d = s.toLowerCase();
      if (t && t == "group") {
        const _ = (Object.keys(j) || []).find((b) => b.includes(d));
        _ && (l = j[_].default);
      } else {
        const _ = (Object.keys(O) || []).find((b) => b.includes(d));
        _ && (l = O[_].default);
      }
      return l;
    }, k = q(!1), T = S({}), v = q(), $ = (s) => {
      v.value = s;
    }, G = async () => {
      if (Y) {
        k.value = !0;
        try {
          const s = await Y(v.value, L);
          T[v.value.id] = s;
        } catch (s) {
          console.error(s);
        }
        k.value = !1;
      }
    }, C = E({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(s, t) {
        const { id: l = "", groups: d } = s, a = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, _ = S([]), b = async () => {
          _.length = 0;
          const i = await se(), o = Ba(i.data, "serviceType"), e = Object.keys(o).filter((g) => d.length > 0 ? d.includes(g) : !0).map((g) => ({ label: g, value: g, data: g, icon: g, type: "group", children: o[g].map((y) => ({ group: g, label: y.displayName || y.name, type: i.type, value: y.id, data: y, isLeaf: !0 })) }));
          if (_.push(...e), l) {
            const g = i.data.find((y) => y.id == l);
            t.emit("up:server", g);
          }
        };
        let f = l;
        const r = (i) => {
          if (i.isLeaf) {
            const o = i.value, n = i.data;
            f = o, t.emit("up:id", o), t.emit("up:server", n);
          }
        };
        return b(), () => m(Da, { modelValue: f, options: _, props: a }, {
          default: ({ data: i }) => m("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => r(i) }, [
            m("img", { style: "height:1em;max-height:1em;", src: V(i.type == "group" ? i.label : i.type, i.type), title: `${i.label} - ${i.type}` }),
            m("span", i.label)
          ])
        });
      }
    }), J = q(""), A = q("");
    let L;
    const re = (s) => {
      A.value = s;
    }, ge = (s) => {
      L = s, le();
    }, ie = E({
      props: ["data", "ids"],
      emits: ["click"],
      setup(s, t) {
        const l = s.data, d = s.ids, a = l.isLeaf, _ = q(!1), b = q(!1), f = S([]), r = (e = []) => {
          f.length = 0, f.push(...e);
        }, i = async (e) => {
          if (e == null || e.stopPropagation(), e == null || e.preventDefault(), _.value = !_.value, f.length == 0) {
            b.value = !0;
            try {
              const g = await se(l.data), y = g.data.map((w) => ({ label: w.displayName || w.name, type: g.type, value: w.id, parent: s.data, data: w, isLeaf: w.columns != null }));
              r(y);
            } catch (g) {
              console.error(g);
            }
            b.value = !1;
          }
        }, o = (e) => {
          e == null || e.stopPropagation(), e == null || e.preventDefault(), a ? t.emit("click", l) : i();
        }, n = (e) => {
          t.emit("click", e);
        };
        return d && d.includes(l.value) && !a && i(), () => m("div", { key: l.value, class: "w-full" }, [
          m("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: o }, [
            a ? "" : b.value ? m(Pa, { class: "is-loading" }, { default: () => m(Ua) }) : m("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (e) => i(e) }, _.value ? "-" : "+"),
            m("img", { src: V(l.type), style: "height:1em;" }),
            m("b", { class: "truncate", style: "color:#999;", title: l.label }, l.label)
          ]),
          !a && _.value ? m("div", { style: "padding-left:1em;" }, f.map((e) => m(ie, { data: e, onClick: n, ids: d }))) : ""
        ]);
      }
    }), pe = E({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(s, t) {
        const { server: l } = oe(s), { ids: d = [] } = s, a = S([...d]), _ = S([]), b = (o = []) => {
          _.length = 0, _.push(...o);
        }, f = (o) => o.data.map((n) => ({ label: n.displayName || n.name, type: o.type, value: n.id, data: n, isLeaf: n.columns != null })), r = async (o) => {
          var n;
          if (o) {
            const e = await se(o);
            b(f(e)), t.emit("up:database", (n = e.data) == null ? void 0 : n[0]);
          } else
            b();
        }, i = (o) => {
          var w;
          let n = o;
          const e = [o];
          for (; n != null && n.parent; )
            e.push(n.parent), n = n.parent;
          const g = e.reverse().map((fe) => fe.value), y = o.data.name;
          a.length = 0, a.push(...g), t.emit("up:ids", g), t.emit("up:name", y), t.emit("up:database", (w = e[0]) == null ? void 0 : w.data);
        };
        return l.value && r(l.value), H(l, (o, n) => {
          r(o), n != null && (a.length = 0, t.emit("up:ids", []), t.emit("up:name", ""));
        }), () => m("div", _.map((o) => m(ie, { data: o, onClick: i, key: o.value, ids: a })));
      }
    });
    let I = R;
    const ue = () => "Select * from " + A.value, ve = (s) => {
      u("update:sql", s), I = s, le();
    }, de = E({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(s, t) {
        const { schema: l, server: d } = oe(s), a = q(s.sql || ""), _ = [ja()], b = q(), f = (r = "") => {
          a.value = r, t.emit("up:sql", r);
        };
        return H(l, (r) => {
          var i;
          r ? a.value ? (i = b.value) == null || i.insertValue(r) : f(ue()) : f();
        }), H(d, (r, i) => {
          i != null && r != null && f();
        }), () => m(Qa, { ref: (r) => b.value = r, modelValue: a.value, lang: _, showOperate: !1, "onUpdate:modelValue": (r) => f(r) });
      }
    }), me = () => {
      if (p) {
        if (!I) {
          U.warning("请输入 sql ");
          return;
        }
        if (!v.value) {
          U.warning("请选择数据源");
          return;
        }
        p(v.value, L, I);
      }
    }, be = () => {
      if (h) {
        if (!I) {
          U.warning("请输入 sql ");
          return;
        }
        if (!v.value) {
          U.warning("请选择数据源");
          return;
        }
        h(v.value, L, I);
      }
    }, le = za(() => {
      u("change", v.value, L, I);
    }, 500);
    return (s, t) => {
      var l, d;
      return B(), Ea("div", Ra, [
        D("div", Ga, [
          N(c(C), {
            class: "min-w-400",
            id: c(M),
            groups: c(te),
            "onUp:server": $,
            "onUp:id": t[0] || (t[0] = (a) => u("update:serverId", a))
          }, null, 8, ["id", "groups"]),
          D("div", null, [
            c(Y) != null ? (B(), K(c(ee), {
              key: 0,
              loading: k.value,
              icon: T[(l = v.value) == null ? void 0 : l.id] == !0 ? c(Oa) : c(Ya),
              type: T[(d = v.value) == null ? void 0 : d.id] == !0 ? "success" : "primary",
              onClick: G
            }, {
              default: W(() => {
                var a;
                return [
                  X(Sa(T[(a = v.value) == null ? void 0 : a.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : Z("", !0),
            c(p) != null ? (B(), K(c(ee), {
              key: 1,
              loading: k.value,
              onClick: me
            }, {
              default: W(() => [
                X("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0),
            c(h) != null ? (B(), K(c(ee), {
              key: 2,
              loading: k.value,
              onClick: be
            }, {
              default: W(() => [
                X("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0)
          ])
        ]),
        N(c(ne), { "m-y-8": "" }),
        D("div", Ja, [
          D("div", Aa, [
            N(c(ce), {
              "prefix-icon": c($a),
              placeholder: "输入名称进行搜索",
              modelValue: J.value,
              "onUpdate:modelValue": t[1] || (t[1] = (a) => J.value = a)
            }, null, 8, ["prefix-icon", "modelValue"]),
            N(c(ne), { "m-y-4": "" }),
            N(c(pe), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: c(Q),
              server: v.value,
              query: J.value,
              "onUp:ids": t[2] || (t[2] = (a) => u("update:schemaIds", a)),
              "onUp:name": re,
              "onUp:database": ge
            }, null, 8, ["ids", "server", "query"])
          ]),
          D("div", Ha, [
            N(c(de), {
              sql: c(R),
              schema: A.value,
              server: v.value,
              "onUp:sql": t[3] || (t[3] = (a) => ve(a))
            }, null, 8, ["sql", "schema", "server"])
          ])
        ])
      ]);
    };
  }
}), ts = (x) => {
  const z = "TableInput", j = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, O = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, F = async (p, h) => {
    if (!p || !h) {
      U.warning("请选择数据库表之后再测试连接");
      return;
    }
    const u = _e(p, h);
    return await x.api.testConnect({ connection: u });
  }, M = async (p = {}, h = "") => {
    const u = {
      connectionDetailVO: { connection: p },
      querySql: h
    };
    return x.api.getFieldInfo(u);
  }, Q = async (p, h) => {
    const [u, V, k] = h;
    if (u == null || V == null || !k) {
      console.warn("参数没有准备好！", h);
      return;
    }
    P(p, "$server", u);
    const v = _e(u, V);
    P(p, "$connection", { ...v, name: u.id, dataSourceName: u.name, dsName: u.name }), P(p, "connection", u.id);
    const $ = await M(v, k);
    if ($) {
      const G = $.map((C) => ({ repeat: "N", format: "", trim_type: "none", precision: C.fieldPrecision, length: C.fieldLength, type: C.fieldType, name: C.fieldName }));
      P(p, "fields", { field: G }), P(p, "initFlag", !0);
    }
  };
  return { name: z, step: O, markup: j, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ka, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: F, "@change": ({ formData: p, $: h }) => Q(p, h), preview: () => {
          x.event.dataPreview();
        } }
      ]
    },
    {
      type: "form",
      label: "高级配置",
      column: [
        { prop: "variables_active", label: "允许简易转换", tag: ae, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "replace_variables", label: "替换SQL的变量", tag: ae, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "execute_each_row", label: "执行每一步?", tag: ae, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        //
        {
          tag: "p",
          class: "",
          cls: [
            { tag: "i", cls: "从步骤插入数据" },
            { tag: Fa, prop: "lookup", label: "", cls: [] },
            // ??? 这里从源码中看不出来选项从哪里来
            { tag: ce, prop: "insert_Date", label: "" }
          ]
        },
        //
        { prop: "limit", label: "记录数量限制", tag: Ma }
        // {prop:"",label:"",tag:ElCheckbox,trueLabel:"Y",falseLabel:"N"},
      ]
    }
    // { label: "数据预览", elem: {} }
  ], metadata: {} };
};
export {
  ts as default
};
