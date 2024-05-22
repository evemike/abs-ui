import { _ as ke, a as we, b as qe, c as Ce, d as Ie, e as Ne, f as xe, g as Ve, h as Ee, i as Te, j as Se, k as Le, l as De, m as Pe, n as Ue, o as Oe, p as je, q as Ye, r as $e, s as ze, t as Fe, u as Be, v as Re, w as Ke, x as Me, y as Qe, z as Xe, A as Ae, B as Ge, C as Je, D as He, E as We, F as Ze, G as ea, H as aa, I as ta, J as sa, K as la, L as ia, M as oa, N as na, O as _a, P as ra, Q as ca, R as ga, S as ua, T as pa, U as va, V as da, W as ma, X as ba, Y as fa, Z as ha, $ as ya, a0 as ka, a1 as wa, a2 as qa, a3 as Ca, a4 as Ia, a5 as Na, a6 as xa, a7 as Va, a8 as Ea, a9 as Ta, aa as Sa, ab as La } from "./table.DtQlpGd_.js";
import { defineComponent as U, ref as N, reactive as z, h as u, toRefs as ne, watch as J, openBlock as F, createElementBlock as Da, createElementVNode as O, createVNode as L, unref as c, createBlock as H, withCtx as W, createTextVNode as Z, toDisplayString as Pa, createCommentVNode as ee } from "vue";
import { bc as Ua, o as Oa, I as ja, bb as Ya, f as ae, O as _e, y as ce, m as $a, _ as za, a as D, aJ as Fa, aq as te, ap as Ba, am as Ra, ar as j } from "./vendor.CawUkpaF.js";
import { b as se } from "./api.CF1BbFLh.js";
import { C as Ka } from "./main.C9B4zdL3.js";
import { u as re, K as B } from "./index.rpiYk2i5.js";
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
}, Ga = { style: { width: "calc(100% - 200px)" } }, Ja = /* @__PURE__ */ U({
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
    const Y = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": ke, "./icon/airflow.png": we, "./icon/amazon-s3.png": qe, "./icon/amundsen.png": Ce, "./icon/athena.png": Ie, "./icon/atlas.png": Ne, "./icon/azuresql.png": xe, "./icon/bigquery.png": Ve, "./icon/clickhouse.png": Ee, "./icon/databrick.png": Te, "./icon/dbt.png": Se, "./icon/delta-lake.png": Le, "./icon/domo.png": De, "./icon/doris.png": Pe, "./icon/druid.png": Ue, "./icon/dynamodb.png": Oe, "./icon/glue.png": je, "./icon/googleCloudService.png": Ye, "./icon/hive.png": $e, "./icon/ibmdb2.png": ze, "./icon/iceberg.png": Fe, "./icon/impala.png": Be, "./icon/kafka.png": Re, "./icon/kinesis.png": Ke, "./icon/looker.png": Me, "./icon/mariadb.png": Qe, "./icon/metabase.png": Xe, "./icon/mlflow.png": Ae, "./icon/mode.png": Ge, "./icon/mongodb.png": Je, "./icon/mssql.png": He, "./icon/mysql.png": We, "./icon/oracle.png": Ze, "./icon/pinot.png": ea, "./icon/postgres.png": aa, "./icon/power-bi.png": ta, "./icon/presto.png": sa, "./icon/qliksense.png": la, "./icon/quicksight.png": ia, "./icon/redash.png": oa, "./icon/redpanda.png": na, "./icon/redshift.png": _a, "./icon/sagemaker.png": ra, "./icon/salesforce.png": ca, "./icon/saphana.png": ga, "./icon/singlestore.png": ua, "./icon/snowflakes.png": pa, "./icon/sqlalchemy.png": va, "./icon/sqlite.png": da, "./icon/superset.png": ma, "./icon/tableau.png": ba, "./icon/trino.png": fa, "./icon/vertica.png": ha }), $ = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ya, "./svg/database.svg": ka, "./svg/field.svg": wa, "./svg/icon_clickhouse.svg": qa, "./svg/liebiaoziduanguanli.svg": Ca, "./svg/mongodb.svg": Ia, "./svg/mysql.svg": Na, "./svg/oracle.svg": xa, "./svg/postgresql.svg": Va, "./svg/schema.svg": Ea, "./svg/server.svg": Ta, "./svg/shujuku.svg": Sa, "./svg/table.svg": La }), M = R, { serverId: Q, schemaIds: le, sql: X, groups: m, testConnect: h, preview: p, refresh: w } = M, b = K, C = (t, s) => {
      let i = "";
      const g = t.toLowerCase();
      if (s && s == "group") {
        const _ = (Object.keys(Y) || []).find((d) => d.includes(g));
        _ && (i = Y[_].default);
      } else {
        const _ = (Object.keys($) || []).find((d) => d.includes(g));
        _ && (i = $[_].default);
      }
      return i;
    }, I = N(!1), x = z({}), v = N(), V = (t) => {
      v.value = t;
    }, ge = async () => {
      if (h) {
        I.value = !0;
        try {
          const t = await h(v.value, P);
          x[v.value.id] = t;
        } catch (t) {
          console.error(t);
        }
        I.value = !1;
      }
    }, ue = U({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(t, s) {
        const { id: i = "", groups: g } = t, a = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !1 };
        let _ = [];
        const d = async (o, n) => {
          const l = o.data;
          let e = [];
          if (!l || !l.label) {
            const k = await se(), T = za(k.data, "serviceType"), q = Object.keys(T).filter((y) => g.length > 0 ? g.includes(y) : !0);
            if (_ = k.data, e = q.map((y) => ({ label: y, value: y, data: y, icon: y, type: "group", children: T[y].map((S) => ({ group: y, label: S.displayName || S.name, type: k.type, value: S.id, data: S, isLeaf: !0 })) })), i) {
              const y = _.find((S) => S.id == i);
              s.emit("up:server", y);
            }
          } else
            l.children && (e = l.children);
          n(e);
        };
        let f = i;
        const r = (o) => {
          if (o.isLeaf) {
            const n = o.value, l = o.data;
            f = n, s.emit("up:id", n), s.emit("up:server", l), console.log("Server --------------", n, l);
          }
        };
        return () => u(Ua, { modelValue: f, props: { ...a, lazyLoad: d } }, {
          default: ({ data: o }) => u("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => r(o) }, [
            u("img", { style: "height:1em;max-height:1em;", src: C(o.type == "group" ? o.label : o.type, o.type), title: `${o.label} - ${o.type}` }),
            u("span", o.label)
          ])
        });
      }
    }), A = N(""), G = N("");
    let P;
    const pe = (t) => {
      G.value = t;
    }, ve = (t) => {
      P = t, oe();
    }, ie = U({
      props: ["data", "ids"],
      emits: ["click"],
      setup(t, s) {
        const i = t.data, g = t.ids, a = i.isLeaf, _ = N(!1), d = N(!1), f = z([]), r = (e = []) => {
          f.length = 0, f.push(...e);
        }, o = async (e) => {
          if (e == null || e.stopPropagation(), e == null || e.preventDefault(), _.value = !_.value, f.length == 0) {
            d.value = !0;
            try {
              const k = await se(i.data), T = k.data.map((q) => ({ label: q.displayName || q.name, type: k.type, value: q.id, parent: t.data, data: q, isLeaf: q.columns != null }));
              r(T);
            } catch (k) {
              console.error(k);
            }
            d.value = !1;
          }
        }, n = (e) => {
          e == null || e.stopPropagation(), e == null || e.preventDefault(), a ? s.emit("click", i) : o();
        }, l = (e) => {
          s.emit("click", e);
        };
        return g && g.includes(i.value) && !a && o(), () => u("div", { key: i.value, class: "w-full" }, [
          u("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: n }, [
            a ? "" : d.value ? u(Oa, { class: "is-loading" }, { default: () => u(ja) }) : u("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (e) => o(e) }, _.value ? "-" : "+"),
            u("img", { src: C(i.type), style: "height:1em;" }),
            u("b", { class: "truncate", style: "color:#999;", title: i.label }, i.label)
          ]),
          !a && _.value ? u("div", { style: "padding-left:1em;" }, f.map((e) => u(ie, { data: e, onClick: l, ids: g }))) : ""
        ]);
      }
    }), de = U({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(t, s) {
        const { server: i } = ne(t), { ids: g = [] } = t, a = z([...g]), _ = z([]), d = (n = []) => {
          _.length = 0, _.push(...n);
        }, f = (n) => n.data.map((l) => ({ label: l.displayName || l.name, type: n.type, value: l.id, data: l, isLeaf: l.columns != null })), r = async (n) => {
          var l;
          if (n) {
            const e = await se(n);
            d(f(e)), s.emit("up:database", (l = e.data) == null ? void 0 : l[0]);
          } else
            d();
        }, o = (n) => {
          var q;
          let l = n;
          const e = [n];
          for (; l != null && l.parent; )
            e.push(l.parent), l = l.parent;
          const k = e.reverse().map((y) => y.value), T = n.data.name;
          a.length = 0, a.push(...k), s.emit("up:ids", k), s.emit("up:name", T), s.emit("up:database", (q = e[0]) == null ? void 0 : q.data);
        };
        return i.value && r(i.value), J(i, (n, l) => {
          r(n), l != null && (a.length = 0, s.emit("up:ids", []), s.emit("up:name", ""));
        }), () => u("div", _.map((n) => u(ie, { data: n, onClick: o, key: n.value, ids: a })));
      }
    });
    let E = X;
    const me = () => "Select * from " + G.value, be = (t) => {
      b("update:sql", t), E = t, oe();
    }, fe = U({
      props: ["sql", "schema", "server"],
      emits: ["up:sql"],
      setup(t, s) {
        const { schema: i, server: g } = ne(t), a = N(t.sql || ""), _ = [Ya()], d = N(), f = (r = "") => {
          a.value = r, s.emit("up:sql", r);
        };
        return J(i, (r) => {
          var o;
          r ? a.value ? (o = d.value) == null || o.insertValue(r) : f(me()) : f();
        }), J(g, (r, o) => {
          o != null && r != null && f();
        }), () => u(Ka, { ref: (r) => d.value = r, modelValue: a.value, lang: _, showOperate: !1, "onUpdate:modelValue": (r) => f(r) });
      }
    }), he = () => {
      if (p) {
        if (!E) {
          D.warning("请输入 sql ");
          return;
        }
        if (!v.value) {
          D.warning("请选择数据源");
          return;
        }
        p(v.value, P, E);
      }
    }, ye = () => {
      if (w) {
        if (!E) {
          D.warning("请输入 sql ");
          return;
        }
        if (!v.value) {
          D.warning("请选择数据源");
          return;
        }
        w(v.value, P, E);
      }
    }, oe = Fa(() => {
      b("change", v.value, P, E);
    }, 500);
    return (t, s) => {
      var i, g;
      return F(), Da("div", Ma, [
        O("div", Qa, [
          L(c(ue), {
            class: "min-w-400",
            id: c(Q),
            groups: c(m),
            "onUp:server": V,
            "onUp:id": s[0] || (s[0] = (a) => b("update:serverId", a))
          }, null, 8, ["id", "groups"]),
          O("div", null, [
            c(h) != null ? (F(), H(c(ae), {
              key: 0,
              loading: I.value,
              disabled: x[(i = v.value) == null ? void 0 : i.id] === !0,
              type: x[(g = v.value) == null ? void 0 : g.id] == !0 ? "success" : "primary",
              onClick: ge
            }, {
              default: W(() => {
                var a;
                return [
                  Z(Pa(x[(a = v.value) == null ? void 0 : a.id] == !0 ? "连接成功" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "disabled", "type"])) : ee("", !0),
            c(p) != null ? (F(), H(c(ae), {
              key: 1,
              loading: I.value,
              onClick: he
            }, {
              default: W(() => [
                Z("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : ee("", !0),
            c(w) != null ? (F(), H(c(ae), {
              key: 2,
              loading: I.value,
              onClick: ye
            }, {
              default: W(() => [
                Z("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : ee("", !0)
          ])
        ]),
        L(c(_e), { "m-y-8": "" }),
        O("div", Xa, [
          O("div", Aa, [
            L(c(ce), {
              "prefix-icon": c($a),
              placeholder: "输入名称进行搜索",
              modelValue: A.value,
              "onUpdate:modelValue": s[1] || (s[1] = (a) => A.value = a)
            }, null, 8, ["prefix-icon", "modelValue"]),
            L(c(_e), { "m-y-4": "" }),
            L(c(de), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: c(le),
              server: v.value,
              query: A.value,
              "onUp:ids": s[2] || (s[2] = (a) => b("update:schemaIds", a)),
              "onUp:name": pe,
              "onUp:database": ve
            }, null, 8, ["ids", "server", "query"])
          ]),
          O("div", Ga, [
            L(c(fe), {
              sql: c(X),
              schema: G.value,
              server: v.value,
              "onUp:sql": s[3] || (s[3] = (a) => be(a))
            }, null, 8, ["sql", "schema", "server"])
          ])
        ])
      ]);
    };
  }
}), st = () => {
  const R = "TableInput", K = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, Y = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, $ = async (m, h) => {
    if (!m || !h) {
      D.warning("请选择数据库表之后再测试连接");
      return;
    }
    const p = B.PREFIX + "/database/testConnect", w = re(m, h), b = await B.POST(p, { connection: w }), C = b.result || b.content;
    return C === !0 || C === !1 ? C : (D.error("测试连接接口调用失败！"), console.error("测试连接接口调用失败！ ===> ", b), !1);
  }, M = async (m = {}, h = "") => {
    const p = {
      connectionDetailVO: { connection: m },
      querySql: h
    }, w = B.PREFIX + "/database/getFieldInfo", b = await B.POST(w, p);
    return b.result || b.content;
  }, Q = async (m, h) => {
    const [p, w, b] = h;
    if (p == null || w == null || !b) {
      console.warn("参数没有准备好！", h);
      return;
    }
    j(m, "$server", p);
    const I = re(p, w);
    j(m, "$connection", { ...I, name: p.id, dataSourceName: p.name, dsName: p.name }), j(m, "connection", p.id);
    const x = await M(I, b);
    if (x) {
      const v = x.map((V) => ({ repeat: "N", format: "", trim_type: "none", precision: V.fieldPrecision, length: V.fieldLength, type: V.fieldType, name: V.fieldName }));
      j(m, "fields", { field: v }), j(m, "initFlag", !0);
    }
  };
  return { name: R, step: Y, markup: K, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ja, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres", "Clickhouse"], testConnect: $, "@change": ({ formData: m, $: h }) => Q(m, h), ":preview": "() => graphEvents.customEvent('datapreview',cell)" }
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
            { tag: Ba, prop: "lookup", label: "", cls: [] },
            // ??? 这里从源码中看不出来选项从哪里来
            { tag: ce, prop: "insert_Date", label: "" }
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
  st as default
};
