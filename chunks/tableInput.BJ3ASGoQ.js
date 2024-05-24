import { _ as fe, a as he, b as ye, c as we, d as ke, e as qe, f as Ce, g as Ie, h as xe, i as Ne, j as Ve, k as De, l as Le, m as Te, n as Ee, o as Se, p as Pe, q as Ue, r as je, s as $e, t as Oe, u as Ye, v as ze, w as Be, x as Fe, y as Me, z as Qe, A as Re, B as Ge, C as We, D as Ae, E as He, F as Je, G as Ke, H as Xe, I as Ze, J as ea, K as aa, L as ta, M as sa, N as ia, O as na, P as oa, Q as la, R as _a, S as ca, T as ra, U as ga, V as pa, W as ua, X as va, Y as da, Z as ma, $ as ba, a0 as fa, a1 as ha, a2 as ya, a3 as wa, a4 as ka, a5 as qa, a6 as Ca, a7 as Ia, a8 as xa, a9 as Na, aa as Va, ab as Da } from "./table.DtQlpGd_.js";
import { defineComponent as T, ref as I, reactive as E, h as v, toRefs as oe, watch as H, openBlock as Y, createElementBlock as La, createElementVNode as S, createVNode as N, unref as r, createBlock as J, withCtx as K, createTextVNode as X, toDisplayString as Ta, createCommentVNode as Z } from "vue";
import { bf as Ea, L as Sa, W as Pa, be as Ua, C as ee, aF as ja, bk as $a, $ as le, r as _e, I as Oa, a9 as Ya, a as P, aN as za, ax as ae, j as Ba, k as Fa, ay as z } from "./vendor.Bh6KHC77.js";
import { b as te } from "./api.CF1BbFLh.js";
import { C as Ma } from "./main.DF-kfnLt.js";
const Qa = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, Ra = {
  flex: "",
  "gap-2em": "",
  "h-32": ""
}, Ga = {
  flex: "",
  style: { height: "calc(100% - 32px - 17px)" }
}, Wa = {
  "h-full": "",
  "w-200": "",
  "box-border": "",
  "p-8": "",
  "overflow-hidden": "",
  "b-r-light": "",
  "b-r-solid": "",
  "b-r-1": "",
  "m-r-8": ""
}, Aa = { style: { width: "calc(100% - 200px)" } }, Ha = /* @__PURE__ */ T({
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
  setup(k, { emit: B }) {
    const U = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": fe, "./icon/airflow.png": he, "./icon/amazon-s3.png": ye, "./icon/amundsen.png": we, "./icon/athena.png": ke, "./icon/atlas.png": qe, "./icon/azuresql.png": Ce, "./icon/bigquery.png": Ie, "./icon/clickhouse.png": xe, "./icon/databrick.png": Ne, "./icon/dbt.png": Ve, "./icon/delta-lake.png": De, "./icon/domo.png": Le, "./icon/doris.png": Te, "./icon/druid.png": Ee, "./icon/dynamodb.png": Se, "./icon/glue.png": Pe, "./icon/googleCloudService.png": Ue, "./icon/hive.png": je, "./icon/ibmdb2.png": $e, "./icon/iceberg.png": Oe, "./icon/impala.png": Ye, "./icon/kafka.png": ze, "./icon/kinesis.png": Be, "./icon/looker.png": Fe, "./icon/mariadb.png": Me, "./icon/metabase.png": Qe, "./icon/mlflow.png": Re, "./icon/mode.png": Ge, "./icon/mongodb.png": We, "./icon/mssql.png": Ae, "./icon/mysql.png": He, "./icon/oracle.png": Je, "./icon/pinot.png": Ke, "./icon/postgres.png": Xe, "./icon/power-bi.png": Ze, "./icon/presto.png": ea, "./icon/qliksense.png": aa, "./icon/quicksight.png": ta, "./icon/redash.png": sa, "./icon/redpanda.png": ia, "./icon/redshift.png": na, "./icon/sagemaker.png": oa, "./icon/salesforce.png": la, "./icon/saphana.png": _a, "./icon/singlestore.png": ca, "./icon/snowflakes.png": ra, "./icon/sqlalchemy.png": ga, "./icon/sqlite.png": pa, "./icon/superset.png": ua, "./icon/tableau.png": va, "./icon/trino.png": da, "./icon/vertica.png": ma }), j = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ba, "./svg/database.svg": fa, "./svg/field.svg": ha, "./svg/icon_clickhouse.svg": ya, "./svg/liebiaoziduanguanli.svg": wa, "./svg/mongodb.svg": ka, "./svg/mysql.svg": qa, "./svg/oracle.svg": Ca, "./svg/postgresql.svg": Ia, "./svg/schema.svg": xa, "./svg/server.svg": Na, "./svg/shujuku.svg": Va, "./svg/table.svg": Da }), F = k, { serverId: M, schemaIds: Q, sql: R, groups: se, testConnect: $, preview: p, refresh: d } = F, h = B, V = (t, s) => {
      let n = "";
      const u = t.toLowerCase();
      if (s && s == "group") {
        const c = (Object.keys(U) || []).find((b) => b.includes(u));
        c && (n = U[c].default);
      } else {
        const c = (Object.keys(j) || []).find((b) => b.includes(u));
        c && (n = j[c].default);
      }
      return n;
    }, q = I(!1), D = E({}), m = I(), G = (t) => {
      m.value = t;
    }, O = async () => {
      if ($) {
        q.value = !0;
        try {
          const t = await $(m.value, L);
          D[m.value.id] = t;
        } catch (t) {
          console.error(t);
        }
        q.value = !1;
      }
    }, W = T({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(t, s) {
        const { id: n = "", groups: u } = t, e = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, c = E([]), b = async () => {
          c.length = 0;
          const i = await te(), o = Ya(i.data, "serviceType"), a = Object.keys(o).filter((_) => u.length > 0 ? u.includes(_) : !0).map((_) => ({ label: _, value: _, data: _, icon: _, type: "group", children: o[_].map((y) => ({ group: _, label: y.displayName || y.name, type: i.type, value: y.id, data: y, isLeaf: !0 })) }));
          if (c.push(...a), n) {
            const _ = i.data.find((y) => y.id == n);
            s.emit("up:server", _);
          }
        };
        let f = n;
        const g = (i) => {
          if (i.isLeaf) {
            const o = i.value, l = i.data;
            f = o, s.emit("up:id", o), s.emit("up:server", l);
          }
        };
        return b(), () => v(Ea, { modelValue: f, options: c, props: e }, {
          default: ({ data: i }) => v("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => g(i) }, [
            v("img", { style: "height:1em;max-height:1em;", src: V(i.type == "group" ? i.label : i.type, i.type), title: `${i.label} - ${i.type}` }),
            v("span", i.label)
          ])
        });
      }
    }), C = I(""), A = I("");
    let L;
    const ce = (t) => {
      A.value = t;
    }, re = (t) => {
      L = t, ne();
    }, ie = T({
      props: ["data", "ids"],
      emits: ["click"],
      setup(t, s) {
        const n = t.data, u = t.ids, e = n.isLeaf, c = I(!1), b = I(!1), f = E([]), g = (a = []) => {
          f.length = 0, f.push(...a);
        }, i = async (a) => {
          if (a == null || a.stopPropagation(), a == null || a.preventDefault(), c.value = !c.value, f.length == 0) {
            b.value = !0;
            try {
              const _ = await te(n.data), y = _.data.map((w) => ({ label: w.displayName || w.name, type: _.type, value: w.id, parent: t.data, data: w, isLeaf: w.columns != null }));
              g(y);
            } catch (_) {
              console.error(_);
            }
            b.value = !1;
          }
        }, o = (a) => {
          a == null || a.stopPropagation(), a == null || a.preventDefault(), e ? s.emit("click", n) : i();
        }, l = (a) => {
          s.emit("click", a);
        };
        return u && u.includes(n.value) && !e && i(), () => v("div", { key: n.value, class: "w-full" }, [
          v("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: o }, [
            e ? "" : b.value ? v(Sa, { class: "is-loading" }, { default: () => v(Pa) }) : v("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (a) => i(a) }, c.value ? "-" : "+"),
            v("img", { src: V(n.type), style: "height:1em;" }),
            v("b", { class: "truncate", style: "color:#999;", title: n.label }, n.label)
          ]),
          !e && c.value ? v("div", { style: "padding-left:1em;" }, f.map((a) => v(ie, { data: a, onClick: l, ids: u }))) : ""
        ]);
      }
    }), ge = T({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(t, s) {
        const { server: n } = oe(t), { ids: u = [] } = t, e = E([...u]), c = E([]), b = (o = []) => {
          c.length = 0, c.push(...o);
        }, f = (o) => o.data.map((l) => ({ label: l.displayName || l.name, type: o.type, value: l.id, data: l, isLeaf: l.columns != null })), g = async (o) => {
          var l, a;
          if (o) {
            const _ = await te(o);
            b(f(_));
            const y = e.length > 0 ? (l = _.data) == null ? void 0 : l.find((w) => w.id == e[0]) : (a = _.data) == null ? void 0 : a[0];
            s.emit("up:database", y);
          } else
            b();
        }, i = (o) => {
          var w;
          let l = o;
          const a = [o];
          for (; l != null && l.parent; )
            a.push(l.parent), l = l.parent;
          const _ = a.reverse().map((be) => be.value), y = `${o.parent.data.name}.${o.data.name}`;
          e.length = 0, e.push(..._), s.emit("up:ids", _), s.emit("up:name", y), s.emit("up:database", (w = a[0]) == null ? void 0 : w.data);
        };
        return n.value && g(n.value), H(n, (o, l) => {
          g(o), l != null && (e.length = 0, s.emit("up:ids", []), s.emit("up:name", ""));
        }), () => v("div", c.map((o) => v(ie, { data: o, onClick: i, key: o.value, ids: e })));
      }
    });
    let x = R;
    const pe = () => "Select * from " + A.value, ue = (t) => {
      h("update:sql", t), x = t, ne();
    }, ve = T({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(t, s) {
        const { schema: n, server: u } = oe(t), e = I(t.sql || ""), c = [Ua()], b = I(), f = (g = "") => {
          e.value = g, s.emit("up:sql", g);
        };
        return H(n, (g) => {
          var i;
          g ? e.value ? (i = b.value) == null || i.insertValue(g) : f(pe()) : f();
        }), H(u, (g, i) => {
          i != null && g != null && f();
        }), () => v(Ma, { ref: (g) => b.value = g, modelValue: e.value, lang: c, showOperate: !1, "onUpdate:modelValue": (g) => f(g) });
      }
    }), de = () => {
      if (p) {
        if (!x) {
          P.warning("请输入 sql ");
          return;
        }
        if (!m.value) {
          P.warning("请选择数据源");
          return;
        }
        p(m.value, L, x);
      }
    }, me = () => {
      if (d) {
        if (!x) {
          P.warning("请输入 sql ");
          return;
        }
        if (!m.value) {
          P.warning("请选择数据源");
          return;
        }
        d(m.value, L, x);
      }
    }, ne = za(() => {
      h("change", m.value, L, x);
    }, 500);
    return (t, s) => {
      var n, u;
      return Y(), La("div", Qa, [
        S("div", Ra, [
          N(r(W), {
            class: "min-w-400",
            id: r(M),
            groups: r(se),
            "onUp:server": G,
            "onUp:id": s[0] || (s[0] = (e) => h("update:serverId", e))
          }, null, 8, ["id", "groups"]),
          S("div", null, [
            r($) != null ? (Y(), J(r(ee), {
              key: 0,
              loading: q.value,
              icon: D[(n = m.value) == null ? void 0 : n.id] == !0 ? r(ja) : r($a),
              type: D[(u = m.value) == null ? void 0 : u.id] == !0 ? "success" : "primary",
              onClick: O
            }, {
              default: K(() => {
                var e;
                return [
                  X(Ta(D[(e = m.value) == null ? void 0 : e.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : Z("", !0),
            r(p) != null ? (Y(), J(r(ee), {
              key: 1,
              loading: q.value,
              onClick: de
            }, {
              default: K(() => [
                X("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0),
            r(d) != null ? (Y(), J(r(ee), {
              key: 2,
              loading: q.value,
              onClick: me
            }, {
              default: K(() => [
                X("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0)
          ])
        ]),
        N(r(le), { "m-y-8": "" }),
        S("div", Ga, [
          S("div", Wa, [
            N(r(_e), {
              "prefix-icon": r(Oa),
              placeholder: "输入名称进行搜索",
              modelValue: C.value,
              "onUpdate:modelValue": s[1] || (s[1] = (e) => C.value = e)
            }, null, 8, ["prefix-icon", "modelValue"]),
            N(r(le), { "m-y-4": "" }),
            N(r(ge), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: r(Q),
              server: m.value,
              query: C.value,
              "onUp:ids": s[2] || (s[2] = (e) => h("update:schemaIds", e)),
              "onUp:name": ce,
              "onUp:database": re
            }, null, 8, ["ids", "server", "query"])
          ]),
          S("div", Aa, [
            N(r(ve), {
              sql: r(R),
              schema: A.value,
              server: m.value,
              "onUp:sql": s[3] || (s[3] = (e) => ue(e))
            }, null, 8, ["sql", "schema", "server"])
          ])
        ])
      ]);
    };
  }
}), at = (k) => {
  const B = "TableInput", U = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, j = { name: "Table input", type: "TableInput", distribute: "N", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, F = async (p, d) => {
    if (!p || !d) {
      P.warning("请选择数据库表之后再测试连接");
      return;
    }
    const [h] = k.util.createConnectionData(p, d);
    return await k.api.testConnect({ connection: h });
  }, M = async (p = {}, d = "") => {
    const h = {
      connectionDetailVO: { connection: p },
      querySql: d
    };
    return k.api.getFieldInfo(h);
  }, Q = async (p, d) => {
    const [h, V, q] = d;
    if (h == null || V == null || !q) {
      console.warn("参数没有准备好！", d);
      return;
    }
    z(p, "$server", h);
    const [m, G] = k.util.createConnectionData(h, V);
    z(p, "connection", G);
    const O = await M(m, q);
    if (O) {
      const W = O.map((C) => ({ repeat: "N", format: "", trim_type: "none", precision: C.fieldPrecision, length: C.fieldLength, type: C.fieldType, name: C.fieldName }));
      z(p, "fields", { field: W }), z(p, "initFlag", !0);
    }
  };
  return { name: B, step: j, markup: U, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ha, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: F, "@change": ({ formData: p, $: d }) => Q(p, d), preview: (p, d) => {
          k.util.createConnectionData(p, d), k.event.dataPreview();
        } }
      ]
    },
    {
      type: "form",
      label: "高级配置",
      column: [
        { prop: "lazy_conversion_active", label: "允许简易转换", tag: ae, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "variables_active", label: "替换SQL的变量", tag: ae, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "execute_each_row", label: "执行每一步?", tag: ae, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        //
        {
          tag: "p",
          class: "",
          cls: [
            { tag: "i", cls: "从步骤插入数据" },
            { tag: Ba, prop: "lookup", label: "", cls: [] },
            // ??? 这里从源码中看不出来选项从哪里来
            { tag: _e, prop: "insert_Date", label: "" }
          ]
        },
        //
        { prop: "limit", label: "记录数量限制", tag: Fa, min: 0 }
        // {prop:"",label:"",tag:ElCheckbox,trueLabel:"Y",falseLabel:"N"},
      ]
    }
    // { label: "数据预览", elem: {} }
  ], metadata: {} };
};
export {
  at as default
};
