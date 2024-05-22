import { _ as he, a as ye, b as we, c as ke, d as qe, e as Ce, f as Ie, g as Ne, h as xe, i as Ve, j as Te, k as Le, l as Se, m as Ee, n as De, o as Pe, p as Ue, q as je, r as Oe, s as Ye, t as $e, u as Be, v as ze, w as Fe, x as Me, y as Qe, z as Re, A as Ge, B as Je, C as Ae, D as He, E as Ke, F as We, G as Xe, H as Ze, I as ea, J as aa, K as ta, L as sa, M as ia, N as na, O as oa, P as la, Q as _a, R as ca, S as ra, T as ga, U as pa, V as ua, W as va, X as da, Y as ma, Z as ba, $ as fa, a0 as ha, a1 as ya, a2 as wa, a3 as ka, a4 as qa, a5 as Ca, a6 as Ia, a7 as Na, a8 as xa, a9 as Va, aa as Ta, ab as La } from "./table.DtQlpGd_.js";
import { defineComponent as S, ref as q, reactive as E, h as m, toRefs as le, watch as H, openBlock as B, createElementBlock as Sa, createElementVNode as D, createVNode as V, unref as g, createBlock as K, withCtx as W, createTextVNode as X, toDisplayString as Ea, createCommentVNode as Z } from "vue";
import { bc as Da, o as Pa, I as Ua, bb as ja, f as ee, aB as Oa, bg as Ya, O as _e, y as ce, m as $a, _ as Ba, a as U, aJ as za, aq as ae, ap as Fa, am as Ma, ar as P } from "./vendor.CawUkpaF.js";
import { b as te } from "./api.CF1BbFLh.js";
import { C as Qa } from "./main.C9B4zdL3.js";
import { u as se } from "./index.C0b9TJO1.js";
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
}, Ha = { style: { width: "calc(100% - 200px)" } }, Ka = /* @__PURE__ */ S({
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
  setup(I, { emit: z }) {
    const j = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": he, "./icon/airflow.png": ye, "./icon/amazon-s3.png": we, "./icon/amundsen.png": ke, "./icon/athena.png": qe, "./icon/atlas.png": Ce, "./icon/azuresql.png": Ie, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": xe, "./icon/databrick.png": Ve, "./icon/dbt.png": Te, "./icon/delta-lake.png": Le, "./icon/domo.png": Se, "./icon/doris.png": Ee, "./icon/druid.png": De, "./icon/dynamodb.png": Pe, "./icon/glue.png": Ue, "./icon/googleCloudService.png": je, "./icon/hive.png": Oe, "./icon/ibmdb2.png": Ye, "./icon/iceberg.png": $e, "./icon/impala.png": Be, "./icon/kafka.png": ze, "./icon/kinesis.png": Fe, "./icon/looker.png": Me, "./icon/mariadb.png": Qe, "./icon/metabase.png": Re, "./icon/mlflow.png": Ge, "./icon/mode.png": Je, "./icon/mongodb.png": Ae, "./icon/mssql.png": He, "./icon/mysql.png": Ke, "./icon/oracle.png": We, "./icon/pinot.png": Xe, "./icon/postgres.png": Ze, "./icon/power-bi.png": ea, "./icon/presto.png": aa, "./icon/qliksense.png": ta, "./icon/quicksight.png": sa, "./icon/redash.png": ia, "./icon/redpanda.png": na, "./icon/redshift.png": oa, "./icon/sagemaker.png": la, "./icon/salesforce.png": _a, "./icon/saphana.png": ca, "./icon/singlestore.png": ra, "./icon/snowflakes.png": ga, "./icon/sqlalchemy.png": pa, "./icon/sqlite.png": ua, "./icon/superset.png": va, "./icon/tableau.png": da, "./icon/trino.png": ma, "./icon/vertica.png": ba }), O = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": fa, "./svg/database.svg": ha, "./svg/field.svg": ya, "./svg/icon_clickhouse.svg": wa, "./svg/liebiaoziduanguanli.svg": ka, "./svg/mongodb.svg": qa, "./svg/mysql.svg": Ca, "./svg/oracle.svg": Ia, "./svg/postgresql.svg": Na, "./svg/schema.svg": xa, "./svg/server.svg": Va, "./svg/shujuku.svg": Ta, "./svg/table.svg": La }), F = I, { serverId: M, schemaIds: Q, sql: R, groups: ie, testConnect: Y, preview: c, refresh: b } = F, u = z, C = (t, s) => {
      let n = "";
      const d = t.toLowerCase();
      if (s && s == "group") {
        const r = (Object.keys(j) || []).find((f) => f.includes(d));
        r && (n = j[r].default);
      } else {
        const r = (Object.keys(O) || []).find((f) => f.includes(d));
        r && (n = O[r].default);
      }
      return n;
    }, k = q(!1), T = E({}), v = q(), $ = (t) => {
      v.value = t;
    }, G = async () => {
      if (Y) {
        k.value = !0;
        try {
          const t = await Y(v.value, L);
          T[v.value.id] = t;
        } catch (t) {
          console.error(t);
        }
        k.value = !1;
      }
    }, N = S({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(t, s) {
        const { id: n = "", groups: d } = t, e = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, r = E([]), f = async () => {
          r.length = 0;
          const i = await te(), o = Ba(i.data, "serviceType"), a = Object.keys(o).filter((_) => d.length > 0 ? d.includes(_) : !0).map((_) => ({ label: _, value: _, data: _, icon: _, type: "group", children: o[_].map((y) => ({ group: _, label: y.displayName || y.name, type: i.type, value: y.id, data: y, isLeaf: !0 })) }));
          if (r.push(...a), n) {
            const _ = i.data.find((y) => y.id == n);
            s.emit("up:server", _);
          }
        };
        let h = n;
        const p = (i) => {
          if (i.isLeaf) {
            const o = i.value, l = i.data;
            h = o, s.emit("up:id", o), s.emit("up:server", l);
          }
        };
        return f(), () => m(Da, { modelValue: h, options: r, props: e }, {
          default: ({ data: i }) => m("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => p(i) }, [
            m("img", { style: "height:1em;max-height:1em;", src: C(i.type == "group" ? i.label : i.type, i.type), title: `${i.label} - ${i.type}` }),
            m("span", i.label)
          ])
        });
      }
    }), J = q(""), A = q("");
    let L;
    const re = (t) => {
      A.value = t;
    }, ge = (t) => {
      L = t, oe();
    }, ne = S({
      props: ["data", "ids"],
      emits: ["click"],
      setup(t, s) {
        const n = t.data, d = t.ids, e = n.isLeaf, r = q(!1), f = q(!1), h = E([]), p = (a = []) => {
          h.length = 0, h.push(...a);
        }, i = async (a) => {
          if (a == null || a.stopPropagation(), a == null || a.preventDefault(), r.value = !r.value, h.length == 0) {
            f.value = !0;
            try {
              const _ = await te(n.data), y = _.data.map((w) => ({ label: w.displayName || w.name, type: _.type, value: w.id, parent: t.data, data: w, isLeaf: w.columns != null }));
              p(y);
            } catch (_) {
              console.error(_);
            }
            f.value = !1;
          }
        }, o = (a) => {
          a == null || a.stopPropagation(), a == null || a.preventDefault(), e ? s.emit("click", n) : i();
        }, l = (a) => {
          s.emit("click", a);
        };
        return d && d.includes(n.value) && !e && i(), () => m("div", { key: n.value, class: "w-full" }, [
          m("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: o }, [
            e ? "" : f.value ? m(Pa, { class: "is-loading" }, { default: () => m(Ua) }) : m("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (a) => i(a) }, r.value ? "-" : "+"),
            m("img", { src: C(n.type), style: "height:1em;" }),
            m("b", { class: "truncate", style: "color:#999;", title: n.label }, n.label)
          ]),
          !e && r.value ? m("div", { style: "padding-left:1em;" }, h.map((a) => m(ne, { data: a, onClick: l, ids: d }))) : ""
        ]);
      }
    }), pe = S({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(t, s) {
        const { server: n } = le(t), { ids: d = [] } = t, e = E([...d]), r = E([]), f = (o = []) => {
          r.length = 0, r.push(...o);
        }, h = (o) => o.data.map((l) => ({ label: l.displayName || l.name, type: o.type, value: l.id, data: l, isLeaf: l.columns != null })), p = async (o) => {
          var l, a;
          if (o) {
            const _ = await te(o);
            f(h(_));
            const y = e.length > 0 ? (l = _.data) == null ? void 0 : l.find((w) => w.id == e[0]) : (a = _.data) == null ? void 0 : a[0];
            s.emit("up:database", y);
          } else
            f();
        }, i = (o) => {
          var w;
          let l = o;
          const a = [o];
          for (; l != null && l.parent; )
            a.push(l.parent), l = l.parent;
          const _ = a.reverse().map((fe) => fe.value), y = o.data.name;
          e.length = 0, e.push(..._), s.emit("up:ids", _), s.emit("up:name", y), s.emit("up:database", (w = a[0]) == null ? void 0 : w.data);
        };
        return n.value && p(n.value), H(n, (o, l) => {
          p(o), l != null && (e.length = 0, s.emit("up:ids", []), s.emit("up:name", ""));
        }), () => m("div", r.map((o) => m(ne, { data: o, onClick: i, key: o.value, ids: e })));
      }
    });
    let x = R;
    const ue = () => "Select * from " + A.value, ve = (t) => {
      u("update:sql", t), x = t, oe();
    }, de = S({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(t, s) {
        const { schema: n, server: d } = le(t), e = q(t.sql || ""), r = [ja()], f = q(), h = (p = "") => {
          e.value = p, s.emit("up:sql", p);
        };
        return H(n, (p) => {
          var i;
          p ? e.value ? (i = f.value) == null || i.insertValue(p) : h(ue()) : h();
        }), H(d, (p, i) => {
          i != null && p != null && h();
        }), () => m(Qa, { ref: (p) => f.value = p, modelValue: e.value, lang: r, showOperate: !1, "onUpdate:modelValue": (p) => h(p) });
      }
    }), me = () => {
      if (c) {
        if (!x) {
          U.warning("请输入 sql ");
          return;
        }
        if (!v.value) {
          U.warning("请选择数据源");
          return;
        }
        c(v.value, L, x);
      }
    }, be = () => {
      if (b) {
        if (!x) {
          U.warning("请输入 sql ");
          return;
        }
        if (!v.value) {
          U.warning("请选择数据源");
          return;
        }
        b(v.value, L, x);
      }
    }, oe = za(() => {
      u("change", v.value, L, x);
    }, 500);
    return (t, s) => {
      var n, d;
      return B(), Sa("div", Ra, [
        D("div", Ga, [
          V(g(N), {
            class: "min-w-400",
            id: g(M),
            groups: g(ie),
            "onUp:server": $,
            "onUp:id": s[0] || (s[0] = (e) => u("update:serverId", e))
          }, null, 8, ["id", "groups"]),
          D("div", null, [
            g(Y) != null ? (B(), K(g(ee), {
              key: 0,
              loading: k.value,
              icon: T[(n = v.value) == null ? void 0 : n.id] == !0 ? g(Oa) : g(Ya),
              type: T[(d = v.value) == null ? void 0 : d.id] == !0 ? "success" : "primary",
              onClick: G
            }, {
              default: W(() => {
                var e;
                return [
                  X(Ea(T[(e = v.value) == null ? void 0 : e.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : Z("", !0),
            g(c) != null ? (B(), K(g(ee), {
              key: 1,
              loading: k.value,
              onClick: me
            }, {
              default: W(() => [
                X("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0),
            g(b) != null ? (B(), K(g(ee), {
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
        V(g(_e), { "m-y-8": "" }),
        D("div", Ja, [
          D("div", Aa, [
            V(g(ce), {
              "prefix-icon": g($a),
              placeholder: "输入名称进行搜索",
              modelValue: J.value,
              "onUpdate:modelValue": s[1] || (s[1] = (e) => J.value = e)
            }, null, 8, ["prefix-icon", "modelValue"]),
            V(g(_e), { "m-y-4": "" }),
            V(g(pe), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: g(Q),
              server: v.value,
              query: J.value,
              "onUp:ids": s[2] || (s[2] = (e) => u("update:schemaIds", e)),
              "onUp:name": re,
              "onUp:database": ge
            }, null, 8, ["ids", "server", "query"])
          ]),
          D("div", Ha, [
            V(g(de), {
              sql: g(R),
              schema: A.value,
              server: v.value,
              "onUp:sql": s[3] || (s[3] = (e) => ve(e))
            }, null, 8, ["sql", "schema", "server"])
          ])
        ])
      ]);
    };
  }
}), st = (I) => {
  const z = "TableInput", j = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, O = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, F = async (c, b) => {
    if (!c || !b) {
      U.warning("请选择数据库表之后再测试连接");
      return;
    }
    const u = se(c, b);
    return await I.api.testConnect({ connection: u });
  }, M = async (c = {}, b = "") => {
    const u = {
      connectionDetailVO: { connection: c },
      querySql: b
    };
    return I.api.getFieldInfo(u);
  }, Q = async (c, b) => {
    const [u, C, k] = b;
    if (u == null || C == null || !k) {
      console.warn("参数没有准备好！", b);
      return;
    }
    P(c, "$server", u);
    const v = se(u, C);
    P(c, "$connection", { ...v, name: u.id, dataSourceName: u.name, dsName: u.name }), P(c, "connection", u.id);
    const $ = await M(v, k);
    if ($) {
      const G = $.map((N) => ({ repeat: "N", format: "", trim_type: "none", precision: N.fieldPrecision, length: N.fieldLength, type: N.fieldType, name: N.fieldName }));
      P(c, "fields", { field: G }), P(c, "initFlag", !0);
    }
  };
  return { name: z, step: O, markup: j, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ka, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: F, "@change": ({ formData: c, $: b }) => Q(c, b), preview: (c, b) => {
          const C = { ...se(c, b), name: c.id, dataSourceName: c.name, dsName: c.name };
          I.event.addConnection(C), I.event.dataPreview();
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
  st as default
};
