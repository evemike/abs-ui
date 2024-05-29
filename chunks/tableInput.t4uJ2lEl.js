import { _ as fe, a as he, b as ye, c as we, d as ke, e as qe, f as Ce, g as Ie, h as xe, i as Ne, j as Ve, k as Le, l as Te, m as De, n as Ee, o as Pe, p as Se, q as Ue, r as je, s as $e, t as Oe, u as Ye, v as ze, w as Be, x as Fe, y as Ge, z as Me, A as Qe, B as Re, C as We, D as Ae, E as He, F as Je, G as Ke, H as Xe, I as Ze, J as ea, K as aa, L as ta, M as sa, N as ia, O as la, P as na, Q as oa, R as _a, S as ca, T as ra, U as ga, V as pa, W as ua, X as va, Y as da, Z as ma, $ as ba, a0 as fa, a1 as ha, a2 as ya, a3 as wa, a4 as ka, a5 as qa, a6 as Ca, a7 as Ia, a8 as xa, a9 as Na, aa as Va, ab as La } from "./table.DtQlpGd_.js";
import { defineComponent as E, ref as q, reactive as P, h as u, toRefs as ne, watch as A, openBlock as Y, createElementBlock as Ta, createElementVNode as S, createVNode as L, unref as r, createBlock as H, withCtx as J, createTextVNode as K, toDisplayString as Da, createCommentVNode as X } from "vue";
import { bg as Ea, L as Pa, W as Sa, bf as Ua, C as Z, aG as ja, bl as $a, $ as oe, r as _e, I as Oa, a9 as Ya, a as U, aO as za, ay as ee, j as Ba, k as Fa, az as z } from "./vendor.oF5jPd5s.js";
import { b as ae } from "./api.CF1BbFLh.js";
import { C as Ga } from "./main.CwjSrSug.js";
const Ma = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, Qa = {
  flex: "",
  "gap-2em": "",
  "h-32": ""
}, Ra = {
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
}, Aa = { style: { width: "calc(100% - 200px)" } }, Ha = /* @__PURE__ */ E({
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
    const j = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": fe, "./icon/airflow.png": he, "./icon/amazon-s3.png": ye, "./icon/amundsen.png": we, "./icon/athena.png": ke, "./icon/atlas.png": qe, "./icon/azuresql.png": Ce, "./icon/bigquery.png": Ie, "./icon/clickhouse.png": xe, "./icon/databrick.png": Ne, "./icon/dbt.png": Ve, "./icon/delta-lake.png": Le, "./icon/domo.png": Te, "./icon/doris.png": De, "./icon/druid.png": Ee, "./icon/dynamodb.png": Pe, "./icon/glue.png": Se, "./icon/googleCloudService.png": Ue, "./icon/hive.png": je, "./icon/ibmdb2.png": $e, "./icon/iceberg.png": Oe, "./icon/impala.png": Ye, "./icon/kafka.png": ze, "./icon/kinesis.png": Be, "./icon/looker.png": Fe, "./icon/mariadb.png": Ge, "./icon/metabase.png": Me, "./icon/mlflow.png": Qe, "./icon/mode.png": Re, "./icon/mongodb.png": We, "./icon/mssql.png": Ae, "./icon/mysql.png": He, "./icon/oracle.png": Je, "./icon/pinot.png": Ke, "./icon/postgres.png": Xe, "./icon/power-bi.png": Ze, "./icon/presto.png": ea, "./icon/qliksense.png": aa, "./icon/quicksight.png": ta, "./icon/redash.png": sa, "./icon/redpanda.png": ia, "./icon/redshift.png": la, "./icon/sagemaker.png": na, "./icon/salesforce.png": oa, "./icon/saphana.png": _a, "./icon/singlestore.png": ca, "./icon/snowflakes.png": ra, "./icon/sqlalchemy.png": ga, "./icon/sqlite.png": pa, "./icon/superset.png": ua, "./icon/tableau.png": va, "./icon/trino.png": da, "./icon/vertica.png": ma }), $ = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ba, "./svg/database.svg": fa, "./svg/field.svg": ha, "./svg/icon_clickhouse.svg": ya, "./svg/liebiaoziduanguanli.svg": wa, "./svg/mongodb.svg": ka, "./svg/mysql.svg": qa, "./svg/oracle.svg": Ca, "./svg/postgresql.svg": Ia, "./svg/schema.svg": xa, "./svg/server.svg": Na, "./svg/shujuku.svg": Va, "./svg/table.svg": La }), F = k, { serverId: G, schemaIds: te, sql: M, groups: se, testConnect: v, preview: f, refresh: w } = F, C = B, T = (t, s) => {
      let l = "";
      const p = t.toLowerCase();
      if (s && s == "group") {
        const c = (Object.keys(j) || []).find((m) => m.includes(p));
        c && (l = j[c].default);
      } else {
        const c = (Object.keys($) || []).find((m) => m.includes(p));
        c && (l = $[c].default);
      }
      return l;
    }, I = q(!1), x = P({}), d = q(), O = (t) => {
      d.value = t;
    }, Q = async () => {
      if (v) {
        I.value = !0;
        try {
          const t = await v(d.value, D);
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
        const { id: l = "", groups: p } = t, e = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, c = P([]), m = async () => {
          c.length = 0;
          const i = await ae(), n = Ya(i.data, "serviceType"), a = Object.keys(n).filter((_) => p.length > 0 ? p.includes(_) : !0).map((_) => ({ label: _, value: _, data: _, icon: _, type: "group", children: n[_].map((h) => ({ group: _, label: h.displayName || h.name, type: i.type, value: h.id, data: h, isLeaf: !0 })) }));
          if (c.push(...a), l) {
            const _ = i.data.find((h) => h.id == l);
            s.emit("up:server", _);
          }
        };
        let b = l;
        const g = (i) => {
          if (i.isLeaf) {
            const n = i.value, o = i.data;
            b = n, s.emit("up:id", n), s.emit("up:server", o);
          }
        };
        return m(), () => u(Ea, { modelValue: b, options: c, props: e }, {
          default: ({ data: i }) => u("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => g(i) }, [
            u("img", { style: "height:1em;max-height:1em;", src: T(i.type == "group" ? i.label : i.type, i.type), title: `${i.label} - ${i.type}` }),
            u("span", i.label)
          ])
        });
      }
    }), R = q(""), W = q("");
    let D;
    const ce = (t) => {
      W.value = t;
    }, re = (t) => {
      D = t, le();
    }, ie = E({
      props: ["data", "ids"],
      emits: ["click"],
      setup(t, s) {
        const l = t.data, p = t.ids, e = l.isLeaf, c = q(!1), m = q(!1), b = P([]), g = (a = []) => {
          b.length = 0, b.push(...a);
        }, i = async (a) => {
          if (a == null || a.stopPropagation(), a == null || a.preventDefault(), c.value = !c.value, b.length == 0) {
            m.value = !0;
            try {
              const _ = await ae(l.data), h = _.data.map((y) => ({ label: y.displayName || y.name, type: _.type, value: y.id, parent: t.data, data: y, isLeaf: y.columns != null }));
              g(h);
            } catch (_) {
              console.error(_);
            }
            m.value = !1;
          }
        }, n = (a) => {
          a == null || a.stopPropagation(), a == null || a.preventDefault(), e ? s.emit("click", l) : i();
        }, o = (a) => {
          s.emit("click", a);
        };
        return p && p.includes(l.value) && !e && i(), () => u("div", { key: l.value, class: "w-full" }, [
          u("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: n }, [
            e ? "" : m.value ? u(Pa, { class: "is-loading" }, { default: () => u(Sa) }) : u("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (a) => i(a) }, c.value ? "-" : "+"),
            u("img", { src: T(l.type), style: "height:1em;" }),
            u("b", { class: "truncate", style: "color:#999;", title: l.label }, l.label)
          ]),
          !e && c.value ? u("div", { style: "padding-left:1em;" }, b.map((a) => u(ie, { data: a, onClick: o, ids: p }))) : ""
        ]);
      }
    }), ge = E({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(t, s) {
        const { server: l } = ne(t), { ids: p = [] } = t, e = P([...p]), c = P([]), m = (n = []) => {
          c.length = 0, c.push(...n);
        }, b = (n) => n.data.map((o) => ({ label: o.displayName || o.name, type: n.type, value: o.id, data: o, isLeaf: o.columns != null })), g = async (n) => {
          var o, a;
          if (n) {
            const _ = await ae(n);
            m(b(_));
            const h = e.length > 0 ? (o = _.data) == null ? void 0 : o.find((y) => y.id == e[0]) : (a = _.data) == null ? void 0 : a[0];
            s.emit("up:database", h);
          } else
            m();
        }, i = (n) => {
          var y;
          let o = n;
          const a = [n];
          for (; o != null && o.parent; )
            a.push(o.parent), o = o.parent;
          const _ = a.reverse().map((be) => be.value), h = `${n.parent.data.name}.${n.data.name}`;
          e.length = 0, e.push(..._), s.emit("up:ids", _), s.emit("up:name", h), s.emit("up:database", (y = a[0]) == null ? void 0 : y.data);
        };
        return l.value && g(l.value), A(l, (n, o) => {
          g(n), o != null && (e.length = 0, s.emit("up:ids", []), s.emit("up:name", ""));
        }), () => u("div", c.map((n) => u(ie, { data: n, onClick: i, key: n.value, ids: e })));
      }
    });
    let V = M;
    const pe = () => "Select * from " + W.value, ue = (t) => {
      C("update:sql", t), V = t, le();
    }, ve = E({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(t, s) {
        const { schema: l, server: p } = ne(t), e = q(t.sql || ""), c = [Ua()], m = q(), b = (g = "") => {
          e.value = g, s.emit("up:sql", g);
        };
        return A(l, (g) => {
          var i;
          g ? e.value ? (i = m.value) == null || i.insertValue(g) : b(pe()) : b();
        }), A(p, (g, i) => {
          i != null && g != null && b();
        }), () => u(Ga, { ref: (g) => m.value = g, modelValue: e.value, lang: c, showOperate: !1, "onUpdate:modelValue": (g) => b(g) });
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
        f(d.value, D, V);
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
        w(d.value, D, V);
      }
    }, le = za(() => {
      C("change", d.value, D, V);
    }, 500);
    return (t, s) => {
      var l, p;
      return Y(), Ta("div", Ma, [
        S("div", Qa, [
          L(r(N), {
            class: "min-w-400",
            id: r(G),
            groups: r(se),
            "onUp:server": O,
            "onUp:id": s[0] || (s[0] = (e) => C("update:serverId", e))
          }, null, 8, ["id", "groups"]),
          S("div", null, [
            r(v) != null ? (Y(), H(r(Z), {
              key: 0,
              loading: I.value,
              icon: x[(l = d.value) == null ? void 0 : l.id] == !0 ? r(ja) : r($a),
              type: x[(p = d.value) == null ? void 0 : p.id] == !0 ? "success" : "primary",
              onClick: Q
            }, {
              default: J(() => {
                var e;
                return [
                  K(Da(x[(e = d.value) == null ? void 0 : e.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : X("", !0),
            r(f) != null ? (Y(), H(r(Z), {
              key: 1,
              loading: I.value,
              onClick: de
            }, {
              default: J(() => [
                K("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : X("", !0),
            r(w) != null ? (Y(), H(r(Z), {
              key: 2,
              loading: I.value,
              onClick: me
            }, {
              default: J(() => [
                K("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : X("", !0)
          ])
        ]),
        L(r(oe), { "m-y-8": "" }),
        S("div", Ra, [
          S("div", Wa, [
            L(r(_e), {
              "prefix-icon": r(Oa),
              placeholder: "输入名称进行搜索",
              modelValue: R.value,
              "onUpdate:modelValue": s[1] || (s[1] = (e) => R.value = e)
            }, null, 8, ["prefix-icon", "modelValue"]),
            L(r(oe), { "m-y-4": "" }),
            L(r(ge), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: r(te),
              server: d.value,
              query: R.value,
              "onUp:ids": s[2] || (s[2] = (e) => C("update:schemaIds", e)),
              "onUp:name": ce,
              "onUp:database": re
            }, null, 8, ["ids", "server", "query"])
          ]),
          S("div", Aa, [
            L(r(ve), {
              sql: r(M),
              schema: W.value,
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
  }, G = async (v, f) => {
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
      const Q = O.map((N) => ({ repeat: "N", format: "", trim_type: "none", precision: N.fieldPrecision, length: N.fieldLength, type: N.fieldType, name: N.fieldName }));
      z(v, "fields", { field: Q }), z(v, "initFlag", !0);
    }
  };
  return { name: B, step: $, markup: j, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ha, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: F, "@change": ({ formData: v, $: f }) => G(v, f), preview: (v, f) => {
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
