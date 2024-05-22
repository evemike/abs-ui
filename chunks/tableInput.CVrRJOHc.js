import { _ as ke, a as we, b as qe, c as Ce, d as Ie, e as Ne, f as xe, g as Ee, h as Te, i as Ve, j as Se, k as Le, l as De, m as Pe, n as Ue, o as je, p as Oe, q as Ye, r as $e, s as ze, t as Fe, u as Be, v as Re, w as Ke, x as Me, y as Qe, z as Xe, A as Ae, B as Ge, C as Je, D as He, E as We, F as Ze, G as ea, H as aa, I as sa, J as ta, K as la, L as oa, M as ia, N as na, O as _a, P as ca, Q as ra, R as ga, S as pa, T as ua, U as va, V as da, W as ma, X as ba, Y as fa, Z as ha, $ as ya, a0 as ka, a1 as wa, a2 as qa, a3 as Ca, a4 as Ia, a5 as Na, a6 as xa, a7 as Ea, a8 as Ta, a9 as Va, aa as Sa, ab as La } from "./table.DtQlpGd_.js";
import { defineComponent as D, ref as N, reactive as $, h as p, toRefs as ie, watch as z, openBlock as F, createElementBlock as Da, createElementVNode as P, createVNode as S, unref as r, createBlock as J, withCtx as H, createTextVNode as W, toDisplayString as Pa, createCommentVNode as Z } from "vue";
import { bc as Ua, o as ja, I as Oa, bb as Ya, f as ee, O as ne, y as re, m as $a, _ as za, aJ as Fa, aq as ae, ap as Ba, am as Ra, a as _e, ar as U } from "./vendor.CawUkpaF.js";
import { b as se } from "./api.CF1BbFLh.js";
import { C as Ka } from "./main.C9B4zdL3.js";
import { u as ce, K as B } from "./index.DamG-UXI.js";
const Ma = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, Qa = {
  flex: "",
  "gap-2em": "",
  "h-32": ""
}, Xa = {
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
}, Ga = { style: { width: "calc(100% - 200px)" } }, Ja = /* @__PURE__ */ D({
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
  setup(R, { emit: K }) {
    const j = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": ke, "./icon/airflow.png": we, "./icon/amazon-s3.png": qe, "./icon/amundsen.png": Ce, "./icon/athena.png": Ie, "./icon/atlas.png": Ne, "./icon/azuresql.png": xe, "./icon/bigquery.png": Ee, "./icon/clickhouse.png": Te, "./icon/databrick.png": Ve, "./icon/dbt.png": Se, "./icon/delta-lake.png": Le, "./icon/domo.png": De, "./icon/doris.png": Pe, "./icon/druid.png": Ue, "./icon/dynamodb.png": je, "./icon/glue.png": Oe, "./icon/googleCloudService.png": Ye, "./icon/hive.png": $e, "./icon/ibmdb2.png": ze, "./icon/iceberg.png": Fe, "./icon/impala.png": Be, "./icon/kafka.png": Re, "./icon/kinesis.png": Ke, "./icon/looker.png": Me, "./icon/mariadb.png": Qe, "./icon/metabase.png": Xe, "./icon/mlflow.png": Ae, "./icon/mode.png": Ge, "./icon/mongodb.png": Je, "./icon/mssql.png": He, "./icon/mysql.png": We, "./icon/oracle.png": Ze, "./icon/pinot.png": ea, "./icon/postgres.png": aa, "./icon/power-bi.png": sa, "./icon/presto.png": ta, "./icon/qliksense.png": la, "./icon/quicksight.png": oa, "./icon/redash.png": ia, "./icon/redpanda.png": na, "./icon/redshift.png": _a, "./icon/sagemaker.png": ca, "./icon/salesforce.png": ra, "./icon/saphana.png": ga, "./icon/singlestore.png": pa, "./icon/snowflakes.png": ua, "./icon/sqlalchemy.png": va, "./icon/sqlite.png": da, "./icon/superset.png": ma, "./icon/tableau.png": ba, "./icon/trino.png": fa, "./icon/vertica.png": ha }), O = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ya, "./svg/database.svg": ka, "./svg/field.svg": wa, "./svg/icon_clickhouse.svg": qa, "./svg/liebiaoziduanguanli.svg": Ca, "./svg/mongodb.svg": Ia, "./svg/mysql.svg": Na, "./svg/oracle.svg": xa, "./svg/postgresql.svg": Ea, "./svg/schema.svg": Ta, "./svg/server.svg": Va, "./svg/shujuku.svg": Sa, "./svg/table.svg": La }), M = R, { serverId: Q, schemaIds: te, sql: X, groups: d, testConnect: f, preview: u, refresh: w } = M, m = K, C = (t, l) => {
      let o = "";
      const g = t.toLowerCase();
      if (l && l == "group") {
        const c = (Object.keys(j) || []).find((v) => v.includes(g));
        c && (o = j[c].default);
      } else {
        const c = (Object.keys(O) || []).find((v) => v.includes(g));
        c && (o = O[c].default);
      }
      return o;
    }, I = N(!1), x = $({}), h = N(), E = (t) => {
      h.value = t;
    }, ge = async () => {
      if (f) {
        I.value = !0;
        try {
          const t = await f(h.value, L);
          x[h.value.id] = t;
        } catch (t) {
          console.error(t);
        }
        I.value = !1;
      }
    }, pe = D({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(t, l) {
        const { id: o = "", groups: g } = t, a = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !1 };
        let c = [];
        const v = async (_, i) => {
          const s = _.data;
          let e = [];
          if (!s || !s.label) {
            const k = await se(), T = za(k.data, "serviceType"), q = Object.keys(T).filter((b) => g.length > 0 ? g.includes(b) : !0);
            if (c = k.data, e = q.map((b) => ({ label: b, value: b, data: b, icon: b, type: "group", children: T[b].map((V) => ({ group: b, label: V.displayName || V.name, type: k.type, value: V.id, data: V, isLeaf: !0 })) })), o) {
              const b = c.find((V) => V.id == o);
              l.emit("up:server", b);
            }
          } else
            s.children && (e = s.children);
          i(e);
        };
        let n = o;
        const y = (_) => {
          if (_.isLeaf) {
            const i = _.value, s = _.data;
            n = i, l.emit("up:id", i), l.emit("up:server", s), console.log("Server --------------", i, s);
          }
        };
        return () => p(Ua, { modelValue: n, props: { ...a, lazyLoad: v } }, {
          default: ({ data: _ }) => p("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => y(_) }, [
            p("img", { style: "height:1em;max-height:1em;", src: C(_.type == "group" ? _.label : _.type, _.type), title: `${_.label} - ${_.type}` }),
            p("span", _.label)
          ])
        });
      }
    }), A = N(""), G = N("");
    let L;
    const ue = (t) => {
      G.value = t;
    }, ve = (t) => {
      L = t, oe();
    }, le = D({
      props: ["data", "ids"],
      emits: ["click"],
      setup(t, l) {
        const o = t.data, g = t.ids, a = o.isLeaf, c = N(!1), v = N(!1), n = $([]), y = (e = []) => {
          n.length = 0, n.push(...e);
        }, _ = async (e) => {
          if (e == null || e.stopPropagation(), e == null || e.preventDefault(), c.value = !c.value, n.length == 0) {
            v.value = !0;
            try {
              const k = await se(o.data), T = k.data.map((q) => ({ label: q.displayName || q.name, type: k.type, value: q.id, parent: t.data, data: q, isLeaf: q.columns != null }));
              y(T);
            } catch (k) {
              console.error(k);
            }
            v.value = !1;
          }
        }, i = (e) => {
          e == null || e.stopPropagation(), e == null || e.preventDefault(), a ? l.emit("click", o) : _();
        }, s = (e) => {
          l.emit("click", e);
        };
        return g && g.includes(o.value) && !a && _(), () => p("div", { key: o.value, class: "w-full" }, [
          p("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: i }, [
            a ? "" : v.value ? p(ja, { class: "is-loading" }, { default: () => p(Oa) }) : p("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (e) => _(e) }, c.value ? "-" : "+"),
            p("img", { src: C(o.type), style: "height:1em;" }),
            p("b", { class: "truncate", style: "color:#999;", title: o.label }, o.label)
          ]),
          !a && c.value ? p("div", { style: "padding-left:1em;" }, n.map((e) => p(le, { data: e, onClick: s, ids: g }))) : ""
        ]);
      }
    }), de = D({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(t, l) {
        const { server: o } = ie(t), { ids: g = [] } = t, a = $([...g]), c = $([]), v = (i = []) => {
          c.length = 0, c.push(...i);
        }, n = (i) => i.data.map((s) => ({ label: s.displayName || s.name, type: i.type, value: s.id, data: s, isLeaf: s.columns != null })), y = async (i) => {
          var s;
          if (i) {
            const e = await se(i);
            v(n(e)), l.emit("up:database", (s = e.data) == null ? void 0 : s[0]);
          } else
            v();
        }, _ = (i) => {
          var q;
          let s = i;
          const e = [i];
          for (; s != null && s.parent; )
            e.push(s.parent), s = s.parent;
          const k = e.reverse().map((b) => b.value), T = e.map((b) => b.data.name).join(".");
          a.length = 0, a.push(...k), l.emit("up:ids", k), l.emit("up:name", T), l.emit("up:database", (q = e[0]) == null ? void 0 : q.data);
        };
        return o.value && y(o.value), z(o, (i, s) => {
          console.log("server .....", i, s), y(i), s != null && (a.length = 0, l.emit("up:ids", []), l.emit("up:name", ""));
        }), () => p("div", c.map((i) => p(le, { data: i, onClick: _, key: i.value, ids: a })));
      }
    });
    let Y = X;
    const me = () => "Select * from " + G.value, be = (t) => {
      m("update:sql", t), Y = t, oe();
    }, fe = D({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(t, l) {
        const { schema: o, server: g } = ie(t), a = N(t.sql || ""), c = [Ya()], v = N();
        return z(o, (n) => {
          var y;
          n ? a.value ? (y = v.value) == null || y.insertValue(n) : a.value = me() : a.value = "";
        }), z(g, (n, y) => {
          y != null && n != null && (a.value = "");
        }), z(a, (n) => {
          l.emit("up:sql", n);
        }), () => p(Ka, { ref: (n) => v.value = n, modelValue: a.value, lang: c, showOperate: !1, "onUpdate:modelValue": (n) => a.value = n });
      }
    }), he = () => {
      u && u(h.value, L, Y);
    }, ye = () => {
      w && w(h.value, L, Y);
    }, oe = Fa(() => {
      m("change", h.value, L, Y);
    }, 500);
    return (t, l) => {
      var o, g;
      return F(), Da("div", Ma, [
        P("div", Qa, [
          S(r(pe), {
            class: "min-w-400",
            id: r(Q),
            groups: r(d),
            "onUp:server": E,
            "onUp:id": l[0] || (l[0] = (a) => m("update:serverId", a))
          }, null, 8, ["id", "groups"]),
          P("div", null, [
            r(f) != null ? (F(), J(r(ee), {
              key: 0,
              loading: I.value,
              disabled: x[(o = h.value) == null ? void 0 : o.id] === !0,
              type: x[(g = h.value) == null ? void 0 : g.id] == !0 ? "success" : "primary",
              onClick: ge
            }, {
              default: H(() => {
                var a;
                return [
                  W(Pa(x[(a = h.value) == null ? void 0 : a.id] == !0 ? "连接成功" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "disabled", "type"])) : Z("", !0),
            r(u) != null ? (F(), J(r(ee), {
              key: 1,
              loading: I.value,
              onClick: he
            }, {
              default: H(() => [
                W("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0),
            r(w) != null ? (F(), J(r(ee), {
              key: 2,
              loading: I.value,
              onClick: ye
            }, {
              default: H(() => [
                W("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0)
          ])
        ]),
        S(r(ne), { "m-y-8": "" }),
        P("div", Xa, [
          P("div", Aa, [
            S(r(re), {
              "prefix-icon": r($a),
              placeholder: "输入名称进行搜索",
              modelValue: A.value,
              "onUpdate:modelValue": l[1] || (l[1] = (a) => A.value = a)
            }, null, 8, ["prefix-icon", "modelValue"]),
            S(r(ne), { "m-y-4": "" }),
            S(r(de), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: r(te),
              server: h.value,
              query: A.value,
              "onUp:ids": l[2] || (l[2] = (a) => m("update:schemaIds", a)),
              "onUp:name": ue,
              "onUp:database": ve
            }, null, 8, ["ids", "server", "query"])
          ]),
          P("div", Ga, [
            S(r(fe), {
              sql: r(X),
              schema: G.value,
              server: h.value,
              "onUp:sql": l[3] || (l[3] = (a) => be(a))
            }, null, 8, ["sql", "schema", "server"])
          ])
        ])
      ]);
    };
  }
}), ts = () => {
  const R = "TableInput", K = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, j = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, O = async (d, f) => {
    if (!d || !f) {
      _e.warning("请选择数据库表之后再测试连接");
      return;
    }
    const u = B.PREFIX + "/database/testConnect", w = ce(d, f), m = await B.POST(u, { connection: w }), C = m.result || m.content;
    return C === !0 || C === !1 ? C : (_e.error("测试连接接口调用失败！"), console.error("测试连接接口调用失败！ ===> ", m), !1);
  }, M = async (d = {}, f = "") => {
    const u = {
      connectionDetailVO: { connection: d },
      querySql: f
    }, w = B.PREFIX + "/database/getFieldInfo", m = await B.POST(w, u);
    return m.result || m.content;
  }, Q = async (d, f) => {
    const [u, w, m] = f;
    if (u == null || w == null || !m) {
      console.warn("参数没有准备好！", f);
      return;
    }
    U(d, "$server", u);
    const I = ce(u, w);
    U(d, "$connection", { ...I, name: u.id, dataSourceName: u.name, dsName: u.name }), U(d, "connection", u.id);
    const x = await M(I, m);
    if (x) {
      const h = x.map((E) => ({ repeat: "N", format: "", trim_type: "none", precision: E.fieldPrecision, length: E.fieldLength, type: E.fieldType, name: E.fieldName }));
      U(d, "fields", { field: h }), U(d, "initFlag", !0);
    }
  };
  return { name: R, step: j, markup: K, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ja, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: O, "@change": ({ formData: d, $: f }) => Q(d, f), ":preview": "() => graphEvents.customEvent('datapreview',cell)" }
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
            { tag: Ba, prop: "lookup", label: "", cls: [] },
            // ??? 这里从源码中看不出来选项从哪里来
            { tag: re, prop: "insert_Date", label: "" }
          ]
        },
        //
        { prop: "limit", label: "记录数量限制", tag: Ra }
        // {prop:"",label:"",tag:ElCheckbox,trueLabel:"Y",falseLabel:"N"},
      ]
    },
    { label: "数据预览", elem: {} }
  ], metadata: {} };
};
export {
  ts as default
};
