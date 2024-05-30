import { _ as fe, a as he, b as ye, c as we, d as ke, e as qe, f as Ce, g as Ie, h as xe, i as Ne, j as Ve, k as De, l as Te, m as Le, n as Ee, o as Pe, p as Se, q as Ue, r as je, s as $e, t as Oe, u as Ye, v as ze, w as Be, x as Fe, y as Me, z as Qe, A as Re, B as Ge, C as Ae, D as He, E as Je, F as Ke, G as We, H as Xe, I as Ze, J as ea, K as aa, L as ta, M as sa, N as ia, O as na, P as la, Q as oa, R as _a, S as ca, T as ra, U as ga, V as pa, W as ua, X as va, Y as da, Z as ma, $ as ba, a0 as fa, a1 as ha, a2 as ya, a3 as wa, a4 as ka, a5 as qa, a6 as Ca, a7 as Ia, a8 as xa, a9 as Na, aa as Va, ab as Da } from "./table.DtQlpGd_.js";
import { defineComponent as E, ref as q, reactive as P, h as u, toRefs as le, watch as H, openBlock as Y, createElementBlock as Ta, createElementVNode as S, createVNode as D, unref as r, createBlock as J, withCtx as K, createTextVNode as W, toDisplayString as La, createCommentVNode as X } from "vue";
import { bh as Ea, o as Pa, I as Sa, bg as Ua, f as Z, aD as ja, bm as $a, O as oe, y as _e, m as Oa, _ as Ya, a as U, aP as za, at as ee, as as Ba, ap as Fa, au as z } from "./vendor.jH9g53BU.js";
import { b as ae } from "./api.CF1BbFLh.js";
import { C as Ma } from "./main.CUCPbsxK.js";
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
}, Ha = { style: { width: "calc(100% - 200px)" } }, Ja = /* @__PURE__ */ E({
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
    const j = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": fe, "./icon/airflow.png": he, "./icon/amazon-s3.png": ye, "./icon/amundsen.png": we, "./icon/athena.png": ke, "./icon/atlas.png": qe, "./icon/azuresql.png": Ce, "./icon/bigquery.png": Ie, "./icon/clickhouse.png": xe, "./icon/databrick.png": Ne, "./icon/dbt.png": Ve, "./icon/delta-lake.png": De, "./icon/domo.png": Te, "./icon/doris.png": Le, "./icon/druid.png": Ee, "./icon/dynamodb.png": Pe, "./icon/glue.png": Se, "./icon/googleCloudService.png": Ue, "./icon/hive.png": je, "./icon/ibmdb2.png": $e, "./icon/iceberg.png": Oe, "./icon/impala.png": Ye, "./icon/kafka.png": ze, "./icon/kinesis.png": Be, "./icon/looker.png": Fe, "./icon/mariadb.png": Me, "./icon/metabase.png": Qe, "./icon/mlflow.png": Re, "./icon/mode.png": Ge, "./icon/mongodb.png": Ae, "./icon/mssql.png": He, "./icon/mysql.png": Je, "./icon/oracle.png": Ke, "./icon/pinot.png": We, "./icon/postgres.png": Xe, "./icon/power-bi.png": Ze, "./icon/presto.png": ea, "./icon/qliksense.png": aa, "./icon/quicksight.png": ta, "./icon/redash.png": sa, "./icon/redpanda.png": ia, "./icon/redshift.png": na, "./icon/sagemaker.png": la, "./icon/salesforce.png": oa, "./icon/saphana.png": _a, "./icon/singlestore.png": ca, "./icon/snowflakes.png": ra, "./icon/sqlalchemy.png": ga, "./icon/sqlite.png": pa, "./icon/superset.png": ua, "./icon/tableau.png": va, "./icon/trino.png": da, "./icon/vertica.png": ma }), $ = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ba, "./svg/database.svg": fa, "./svg/field.svg": ha, "./svg/icon_clickhouse.svg": ya, "./svg/liebiaoziduanguanli.svg": wa, "./svg/mongodb.svg": ka, "./svg/mysql.svg": qa, "./svg/oracle.svg": Ca, "./svg/postgresql.svg": Ia, "./svg/schema.svg": xa, "./svg/server.svg": Na, "./svg/shujuku.svg": Va, "./svg/table.svg": Da }), F = k, { serverId: M, schemaIds: te, sql: Q, groups: se, testConnect: v, preview: f, refresh: w } = F, C = B, T = (t, s) => {
      let n = "";
      const p = t.toLowerCase();
      if (s && s == "group") {
        const c = (Object.keys(j) || []).find((m) => m.includes(p));
        c && (n = j[c].default);
      } else {
        const c = (Object.keys($) || []).find((m) => m.includes(p));
        c && (n = $[c].default);
      }
      return n;
    }, I = q(!1), x = P({}), d = q(), O = (t) => {
      d.value = t;
    }, R = async () => {
      if (v) {
        I.value = !0;
        try {
          const t = await v(d.value, L);
          x[d.value.id] = t;
        } catch (t) {
          console.error(t);
        }
        I.value = !1;
      }
    }, N = E({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(t, s) {
        const { id: n = "", groups: p } = t, e = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, c = P([]), m = async () => {
          c.length = 0;
          const i = await ae(), l = Ya(i.data, "serviceType"), a = Object.keys(l).filter((_) => p.length > 0 ? p.includes(_) : !0).map((_) => ({ label: _, value: _, data: _, icon: _, type: "group", children: l[_].map((h) => ({ group: _, label: h.displayName || h.name, type: i.type, value: h.id, data: h, isLeaf: !0 })) }));
          if (c.push(...a), n) {
            const _ = i.data.find((h) => h.id == n);
            s.emit("up:server", _);
          }
        };
        let b = n;
        const g = (i) => {
          if (i.isLeaf) {
            const l = i.value, o = i.data;
            b = l, s.emit("up:id", l), s.emit("up:server", o);
          }
        };
        return m(), () => u(Ea, { modelValue: b, options: c, props: e }, {
          default: ({ data: i }) => u("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => g(i) }, [
            u("img", { style: "height:1em;max-height:1em;", src: T(i.type == "group" ? i.label : i.type, i.type), title: `${i.label} - ${i.type}` }),
            u("span", i.label)
          ])
        });
      }
    }), G = q(""), A = q("");
    let L;
    const ce = (t) => {
      A.value = t;
    }, re = (t) => {
      L = t, ne();
    }, ie = E({
      props: ["data", "ids"],
      emits: ["click"],
      setup(t, s) {
        const n = t.data, p = t.ids, e = n.isLeaf, c = q(!1), m = q(!1), b = P([]), g = (a = []) => {
          b.length = 0, b.push(...a);
        }, i = async (a) => {
          if (a == null || a.stopPropagation(), a == null || a.preventDefault(), c.value = !c.value, b.length == 0) {
            m.value = !0;
            try {
              const _ = await ae(n.data), h = _.data.map((y) => ({ label: y.displayName || y.name, type: _.type, value: y.id, parent: t.data, data: y, isLeaf: y.columns != null }));
              g(h);
            } catch (_) {
              console.error(_);
            }
            m.value = !1;
          }
        }, l = (a) => {
          a == null || a.stopPropagation(), a == null || a.preventDefault(), e ? s.emit("click", n) : i();
        }, o = (a) => {
          s.emit("click", a);
        };
        return p && p.includes(n.value) && !e && i(), () => u("div", { key: n.value, class: "w-full" }, [
          u("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: l }, [
            e ? "" : m.value ? u(Pa, { class: "is-loading" }, { default: () => u(Sa) }) : u("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (a) => i(a) }, c.value ? "-" : "+"),
            u("img", { src: T(n.type), style: "height:1em;" }),
            u("b", { class: "truncate", style: "color:#999;", title: n.label }, n.label)
          ]),
          !e && c.value ? u("div", { style: "padding-left:1em;" }, b.map((a) => u(ie, { data: a, onClick: o, ids: p }))) : ""
        ]);
      }
    }), ge = E({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(t, s) {
        const { server: n } = le(t), { ids: p = [] } = t, e = P([...p]), c = P([]), m = (l = []) => {
          c.length = 0, c.push(...l);
        }, b = (l) => l.data.map((o) => ({ label: o.displayName || o.name, type: l.type, value: o.id, data: o, isLeaf: o.columns != null })), g = async (l) => {
          var o, a;
          if (l) {
            const _ = await ae(l);
            m(b(_));
            const h = e.length > 0 ? (o = _.data) == null ? void 0 : o.find((y) => y.id == e[0]) : (a = _.data) == null ? void 0 : a[0];
            s.emit("up:database", h);
          } else
            m();
        }, i = (l) => {
          var y;
          let o = l;
          const a = [l];
          for (; o != null && o.parent; )
            a.push(o.parent), o = o.parent;
          const _ = a.reverse().map((be) => be.value), h = `${l.parent.data.name}.${l.data.name}`;
          e.length = 0, e.push(..._), s.emit("up:ids", _), s.emit("up:name", h), s.emit("up:database", (y = a[0]) == null ? void 0 : y.data);
        };
        return n.value && g(n.value), H(n, (l, o) => {
          g(l), o != null && (e.length = 0, s.emit("up:ids", []), s.emit("up:name", ""));
        }), () => u("div", c.map((l) => u(ie, { data: l, onClick: i, key: l.value, ids: e })));
      }
    });
    let V = Q;
    const pe = () => "Select * from " + A.value, ue = (t) => {
      C("update:sql", t), V = t, ne();
    }, ve = E({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(t, s) {
        const { schema: n, server: p } = le(t), e = q(t.sql || ""), c = [Ua()], m = q(), b = (g = "") => {
          e.value = g, s.emit("up:sql", g);
        };
        return H(n, (g) => {
          var i;
          g ? e.value ? (i = m.value) == null || i.insertValue(g) : b(pe()) : b();
        }), H(p, (g, i) => {
          i != null && g != null && b();
        }), () => u(Ma, { ref: (g) => m.value = g, modelValue: e.value, lang: c, showOperate: !1, "onUpdate:modelValue": (g) => b(g) });
      }
    }), de = () => {
      if (f) {
        if (!V) {
          U.warning("请输入 sql ");
          return;
        }
        if (!d.value) {
          U.warning("请选择数据源");
          return;
        }
        f(d.value, L, V);
      }
    }, me = () => {
      if (w) {
        if (!V) {
          U.warning("请输入 sql ");
          return;
        }
        if (!d.value) {
          U.warning("请选择数据源");
          return;
        }
        w(d.value, L, V);
      }
    }, ne = za(() => {
      C("change", d.value, L, V);
    }, 500);
    return (t, s) => {
      var n, p;
      return Y(), Ta("div", Qa, [
        S("div", Ra, [
          D(r(N), {
            class: "min-w-400",
            id: r(M),
            groups: r(se),
            "onUp:server": O,
            "onUp:id": s[0] || (s[0] = (e) => C("update:serverId", e))
          }, null, 8, ["id", "groups"]),
          S("div", null, [
            r(v) != null ? (Y(), J(r(Z), {
              key: 0,
              loading: I.value,
              icon: x[(n = d.value) == null ? void 0 : n.id] == !0 ? r(ja) : r($a),
              type: x[(p = d.value) == null ? void 0 : p.id] == !0 ? "success" : "primary",
              onClick: R
            }, {
              default: K(() => {
                var e;
                return [
                  W(La(x[(e = d.value) == null ? void 0 : e.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : X("", !0),
            r(f) != null ? (Y(), J(r(Z), {
              key: 1,
              loading: I.value,
              onClick: de
            }, {
              default: K(() => [
                W("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : X("", !0),
            r(w) != null ? (Y(), J(r(Z), {
              key: 2,
              loading: I.value,
              onClick: me
            }, {
              default: K(() => [
                W("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : X("", !0)
          ])
        ]),
        D(r(oe), { "m-y-8": "" }),
        S("div", Ga, [
          S("div", Aa, [
            D(r(_e), {
              "prefix-icon": r(Oa),
              placeholder: "输入名称进行搜索",
              modelValue: G.value,
              "onUpdate:modelValue": s[1] || (s[1] = (e) => G.value = e)
            }, null, 8, ["prefix-icon", "modelValue"]),
            D(r(oe), { "m-y-4": "" }),
            D(r(ge), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: r(te),
              server: d.value,
              query: G.value,
              "onUp:ids": s[2] || (s[2] = (e) => C("update:schemaIds", e)),
              "onUp:name": ce,
              "onUp:database": re
            }, null, 8, ["ids", "server", "query"])
          ]),
          S("div", Ha, [
            D(r(ve), {
              sql: r(Q),
              schema: A.value,
              server: d.value,
              "onUp:sql": s[3] || (s[3] = (e) => ue(e))
            }, null, 8, ["sql", "schema", "server"])
          ])
        ])
      ]);
    };
  }
}), at = (k) => {
  const B = "TableInput", j = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, $ = { name: "Table input", type: "TableInput", distribute: "N", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, F = async (v, f) => {
    if (!v || !f) {
      U.warning("请选择数据库表之后再测试连接");
      return;
    }
    const [w] = k.util.createConnectionData(v, f);
    return await k.api.testConnect({ connection: w });
  }, M = async (v, f) => {
    const [w, C, T] = f;
    if (w == null || C == null || !T) {
      console.warn("参数没有准备好！", f);
      return;
    }
    z(v, "$server", w);
    const [x, d] = k.util.createConnectionData(w, C);
    z(v, "connection", d);
    const O = await k.util.getFields(x, T);
    if (O) {
      const R = O.map((N) => ({ repeat: "N", format: "", trim_type: "none", precision: N.fieldPrecision, length: N.fieldLength, type: N.fieldType, name: N.fieldName }));
      z(v, "fields", { field: R }), z(v, "initFlag", !0);
    }
  };
  return { name: B, step: $, markup: j, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ja, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: F, "@change": ({ formData: v, $: f }) => M(v, f), preview: (v, f) => {
          k.util.createConnectionData(v, f), k.event.dataPreview();
        } }
      ]
    },
    {
      type: "form",
      label: "高级配置",
      column: [
        { prop: "lazy_conversion_active", label: "允许简易转换", tag: ee, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "variables_active", label: "替换SQL的变量", tag: ee, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { prop: "execute_each_row", label: "执行每一步?", tag: ee, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
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
