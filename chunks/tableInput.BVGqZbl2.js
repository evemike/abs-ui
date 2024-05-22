import { _ as he, a as ye, b as we, c as ke, d as qe, e as Ce, f as Ie, g as Ne, h as xe, i as Ve, j as Te, k as Le, l as Se, m as Ee, n as De, o as Pe, p as Ue, q as je, r as Oe, s as Ye, t as $e, u as Be, v as ze, w as Fe, x as Me, y as Qe, z as Re, A as Ge, B as Je, C as Ae, D as He, E as Ke, F as We, G as Xe, H as Ze, I as ea, J as aa, K as sa, L as ta, M as ia, N as na, O as oa, P as la, Q as _a, R as ca, S as ra, T as ga, U as pa, V as ua, W as va, X as da, Y as ma, Z as ba, $ as fa, a0 as ha, a1 as ya, a2 as wa, a3 as ka, a4 as qa, a5 as Ca, a6 as Ia, a7 as Na, a8 as xa, a9 as Va, aa as Ta, ab as La } from "./table.DtQlpGd_.js";
import { defineComponent as S, ref as q, reactive as E, h as m, toRefs as le, watch as H, openBlock as B, createElementBlock as Sa, createElementVNode as D, createVNode as V, unref as r, createBlock as K, withCtx as W, createTextVNode as X, toDisplayString as Ea, createCommentVNode as Z } from "vue";
import { bc as Da, o as Pa, I as Ua, bb as ja, f as ee, aB as Oa, bg as Ya, O as _e, y as ce, m as $a, _ as Ba, a as U, aJ as za, aq as ae, ap as Fa, am as Ma, ar as P } from "./vendor.CawUkpaF.js";
import { b as se } from "./api.CF1BbFLh.js";
import { C as Qa } from "./main.C9B4zdL3.js";
import { u as te } from "./index.X8lr866V.js";
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
    const j = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": he, "./icon/airflow.png": ye, "./icon/amazon-s3.png": we, "./icon/amundsen.png": ke, "./icon/athena.png": qe, "./icon/atlas.png": Ce, "./icon/azuresql.png": Ie, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": xe, "./icon/databrick.png": Ve, "./icon/dbt.png": Te, "./icon/delta-lake.png": Le, "./icon/domo.png": Se, "./icon/doris.png": Ee, "./icon/druid.png": De, "./icon/dynamodb.png": Pe, "./icon/glue.png": Ue, "./icon/googleCloudService.png": je, "./icon/hive.png": Oe, "./icon/ibmdb2.png": Ye, "./icon/iceberg.png": $e, "./icon/impala.png": Be, "./icon/kafka.png": ze, "./icon/kinesis.png": Fe, "./icon/looker.png": Me, "./icon/mariadb.png": Qe, "./icon/metabase.png": Re, "./icon/mlflow.png": Ge, "./icon/mode.png": Je, "./icon/mongodb.png": Ae, "./icon/mssql.png": He, "./icon/mysql.png": Ke, "./icon/oracle.png": We, "./icon/pinot.png": Xe, "./icon/postgres.png": Ze, "./icon/power-bi.png": ea, "./icon/presto.png": aa, "./icon/qliksense.png": sa, "./icon/quicksight.png": ta, "./icon/redash.png": ia, "./icon/redpanda.png": na, "./icon/redshift.png": oa, "./icon/sagemaker.png": la, "./icon/salesforce.png": _a, "./icon/saphana.png": ca, "./icon/singlestore.png": ra, "./icon/snowflakes.png": ga, "./icon/sqlalchemy.png": pa, "./icon/sqlite.png": ua, "./icon/superset.png": va, "./icon/tableau.png": da, "./icon/trino.png": ma, "./icon/vertica.png": ba }), O = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": fa, "./svg/database.svg": ha, "./svg/field.svg": ya, "./svg/icon_clickhouse.svg": wa, "./svg/liebiaoziduanguanli.svg": ka, "./svg/mongodb.svg": qa, "./svg/mysql.svg": Ca, "./svg/oracle.svg": Ia, "./svg/postgresql.svg": Na, "./svg/schema.svg": xa, "./svg/server.svg": Va, "./svg/shujuku.svg": Ta, "./svg/table.svg": La }), F = I, { serverId: M, schemaIds: Q, sql: R, groups: ie, testConnect: Y, preview: _, refresh: b } = F, u = z, C = (s, t) => {
      let n = "";
      const d = s.toLowerCase();
      if (t && t == "group") {
        const c = (Object.keys(j) || []).find((f) => f.includes(d));
        c && (n = j[c].default);
      } else {
        const c = (Object.keys(O) || []).find((f) => f.includes(d));
        c && (n = O[c].default);
      }
      return n;
    }, w = q(!1), T = E({}), v = q(), $ = (s) => {
      v.value = s;
    }, G = async () => {
      if (Y) {
        w.value = !0;
        try {
          const s = await Y(v.value, L);
          T[v.value.id] = s;
        } catch (s) {
          console.error(s);
        }
        w.value = !1;
      }
    }, N = S({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(s, t) {
        const { id: n = "", groups: d } = s, a = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, c = E([]), f = async () => {
          c.length = 0;
          const i = await se(), o = Ba(i.data, "serviceType"), e = Object.keys(o).filter((p) => d.length > 0 ? d.includes(p) : !0).map((p) => ({ label: p, value: p, data: p, icon: p, type: "group", children: o[p].map((y) => ({ group: p, label: y.displayName || y.name, type: i.type, value: y.id, data: y, isLeaf: !0 })) }));
          if (c.push(...e), n) {
            const p = i.data.find((y) => y.id == n);
            t.emit("up:server", p);
          }
        };
        let h = n;
        const g = (i) => {
          if (i.isLeaf) {
            const o = i.value, l = i.data;
            h = o, t.emit("up:id", o), t.emit("up:server", l);
          }
        };
        return f(), () => m(Da, { modelValue: h, options: c, props: a }, {
          default: ({ data: i }) => m("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => g(i) }, [
            m("img", { style: "height:1em;max-height:1em;", src: C(i.type == "group" ? i.label : i.type, i.type), title: `${i.label} - ${i.type}` }),
            m("span", i.label)
          ])
        });
      }
    }), J = q(""), A = q("");
    let L;
    const re = (s) => {
      A.value = s;
    }, ge = (s) => {
      L = s, oe();
    }, ne = S({
      props: ["data", "ids"],
      emits: ["click"],
      setup(s, t) {
        const n = s.data, d = s.ids, a = n.isLeaf, c = q(!1), f = q(!1), h = E([]), g = (e = []) => {
          h.length = 0, h.push(...e);
        }, i = async (e) => {
          if (e == null || e.stopPropagation(), e == null || e.preventDefault(), c.value = !c.value, h.length == 0) {
            f.value = !0;
            try {
              const p = await se(n.data), y = p.data.map((k) => ({ label: k.displayName || k.name, type: p.type, value: k.id, parent: s.data, data: k, isLeaf: k.columns != null }));
              g(y);
            } catch (p) {
              console.error(p);
            }
            f.value = !1;
          }
        }, o = (e) => {
          e == null || e.stopPropagation(), e == null || e.preventDefault(), a ? t.emit("click", n) : i();
        }, l = (e) => {
          t.emit("click", e);
        };
        return d && d.includes(n.value) && !a && i(), () => m("div", { key: n.value, class: "w-full" }, [
          m("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: o }, [
            a ? "" : f.value ? m(Pa, { class: "is-loading" }, { default: () => m(Ua) }) : m("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (e) => i(e) }, c.value ? "-" : "+"),
            m("img", { src: C(n.type), style: "height:1em;" }),
            m("b", { class: "truncate", style: "color:#999;", title: n.label }, n.label)
          ]),
          !a && c.value ? m("div", { style: "padding-left:1em;" }, h.map((e) => m(ne, { data: e, onClick: l, ids: d }))) : ""
        ]);
      }
    }), pe = S({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(s, t) {
        const { server: n } = le(s), { ids: d = [] } = s, a = E([...d]), c = E([]), f = (o = []) => {
          c.length = 0, c.push(...o);
        }, h = (o) => o.data.map((l) => ({ label: l.displayName || l.name, type: o.type, value: l.id, data: l, isLeaf: l.columns != null })), g = async (o) => {
          var l;
          if (o) {
            const e = await se(o);
            f(h(e)), t.emit("up:database", (l = e.data) == null ? void 0 : l[0]);
          } else
            f();
        }, i = (o) => {
          var k;
          let l = o;
          const e = [o];
          for (; l != null && l.parent; )
            e.push(l.parent), l = l.parent;
          const p = e.reverse().map((fe) => fe.value), y = o.data.name;
          a.length = 0, a.push(...p), t.emit("up:ids", p), t.emit("up:name", y), t.emit("up:database", (k = e[0]) == null ? void 0 : k.data);
        };
        return n.value && g(n.value), H(n, (o, l) => {
          g(o), l != null && (a.length = 0, t.emit("up:ids", []), t.emit("up:name", ""));
        }), () => m("div", c.map((o) => m(ne, { data: o, onClick: i, key: o.value, ids: a })));
      }
    });
    let x = R;
    const ue = () => "Select * from " + A.value, ve = (s) => {
      u("update:sql", s), x = s, oe();
    }, de = S({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(s, t) {
        const { schema: n, server: d } = le(s), a = q(s.sql || ""), c = [ja()], f = q(), h = (g = "") => {
          a.value = g, t.emit("up:sql", g);
        };
        return H(n, (g) => {
          var i;
          g ? a.value ? (i = f.value) == null || i.insertValue(g) : h(ue()) : h();
        }), H(d, (g, i) => {
          i != null && g != null && h();
        }), () => m(Qa, { ref: (g) => f.value = g, modelValue: a.value, lang: c, showOperate: !1, "onUpdate:modelValue": (g) => h(g) });
      }
    }), me = () => {
      if (_) {
        if (!x) {
          U.warning("请输入 sql ");
          return;
        }
        if (!v.value) {
          U.warning("请选择数据源");
          return;
        }
        _(v.value, L, x);
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
    return (s, t) => {
      var n, d;
      return B(), Sa("div", Ra, [
        D("div", Ga, [
          V(r(N), {
            class: "min-w-400",
            id: r(M),
            groups: r(ie),
            "onUp:server": $,
            "onUp:id": t[0] || (t[0] = (a) => u("update:serverId", a))
          }, null, 8, ["id", "groups"]),
          D("div", null, [
            r(Y) != null ? (B(), K(r(ee), {
              key: 0,
              loading: w.value,
              icon: T[(n = v.value) == null ? void 0 : n.id] == !0 ? r(Oa) : r(Ya),
              type: T[(d = v.value) == null ? void 0 : d.id] == !0 ? "success" : "primary",
              onClick: G
            }, {
              default: W(() => {
                var a;
                return [
                  X(Ea(T[(a = v.value) == null ? void 0 : a.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : Z("", !0),
            r(_) != null ? (B(), K(r(ee), {
              key: 1,
              loading: w.value,
              onClick: me
            }, {
              default: W(() => [
                X("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0),
            r(b) != null ? (B(), K(r(ee), {
              key: 2,
              loading: w.value,
              onClick: be
            }, {
              default: W(() => [
                X("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0)
          ])
        ]),
        V(r(_e), { "m-y-8": "" }),
        D("div", Ja, [
          D("div", Aa, [
            V(r(ce), {
              "prefix-icon": r($a),
              placeholder: "输入名称进行搜索",
              modelValue: J.value,
              "onUpdate:modelValue": t[1] || (t[1] = (a) => J.value = a)
            }, null, 8, ["prefix-icon", "modelValue"]),
            V(r(_e), { "m-y-4": "" }),
            V(r(pe), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: r(Q),
              server: v.value,
              query: J.value,
              "onUp:ids": t[2] || (t[2] = (a) => u("update:schemaIds", a)),
              "onUp:name": re,
              "onUp:database": ge
            }, null, 8, ["ids", "server", "query"])
          ]),
          D("div", Ha, [
            V(r(de), {
              sql: r(R),
              schema: A.value,
              server: v.value,
              "onUp:sql": t[3] || (t[3] = (a) => ve(a))
            }, null, 8, ["sql", "schema", "server"])
          ])
        ])
      ]);
    };
  }
}), ts = (I) => {
  const z = "TableInput", j = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, O = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, F = async (_, b) => {
    if (!_ || !b) {
      U.warning("请选择数据库表之后再测试连接");
      return;
    }
    const u = te(_, b);
    return await I.api.testConnect({ connection: u });
  }, M = async (_ = {}, b = "") => {
    const u = {
      connectionDetailVO: { connection: _ },
      querySql: b
    };
    return I.api.getFieldInfo(u);
  }, Q = async (_, b) => {
    const [u, C, w] = b;
    if (u == null || C == null || !w) {
      console.warn("参数没有准备好！", b);
      return;
    }
    P(_, "$server", u);
    const v = te(u, C);
    P(_, "$connection", { ...v, name: u.id, dataSourceName: u.name, dsName: u.name }), P(_, "connection", u.id);
    const $ = await M(v, w);
    if ($) {
      const G = $.map((N) => ({ repeat: "N", format: "", trim_type: "none", precision: N.fieldPrecision, length: N.fieldLength, type: N.fieldType, name: N.fieldName }));
      P(_, "fields", { field: G }), P(_, "initFlag", !0);
    }
  };
  return { name: z, step: O, markup: j, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ka, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: F, "@change": ({ formData: _, $: b }) => Q(_, b), preview: (_, b) => {
          const C = { ...te(_, b), name: _.id, dataSourceName: _.name, dsName: _.name };
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
  ts as default
};
