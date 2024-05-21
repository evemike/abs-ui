import { _ as ye, a as ke, b as we, c as qe, d as Ce, e as Ie, f as Ne, g as xe, h as Ve, i as Ee, j as Te, k as Se, l as Le, m as De, n as Pe, o as Ue, p as je, q as Oe, r as Ye, s as $e, t as ze, u as Fe, v as Be, w as Re, x as Ke, y as Me, z as Qe, A as Xe, B as Ae, C as Ge, D as Je, E as He, F as We, G as Ze, H as ea, I as aa, J as ta, K as sa, L as la, M as oa, N as ia, O as na, P as _a, Q as ca, R as ra, S as ga, T as pa, U as ua, V as va, W as da, X as ma, Y as ba, Z as fa, $ as ha, a0 as ya, a1 as ka, a2 as wa, a3 as qa, a4 as Ca, a5 as Ia, a6 as Na, a7 as xa, a8 as Va, a9 as Ea, aa as Ta, ab as Sa } from "./table.DtQlpGd_.js";
import { defineComponent as L, ref as C, reactive as A, h as p, toRefs as ie, watch as G, openBlock as $, createElementBlock as La, createElementVNode as D, createVNode as E, unref as g, createBlock as J, withCtx as H, createTextVNode as W, toDisplayString as Da, createCommentVNode as Z } from "vue";
import { bc as Pa, o as Ua, I as ja, bb as Oa, f as ee, O as ne, y as ce, m as Ya, _ as $a, aJ as za, aq as ae, ap as Fa, am as Ba, a as Ra, ar as P } from "./vendor.CawUkpaF.js";
import { b as te } from "./api.CF1BbFLh.js";
import { C as Ka } from "./main.C9B4zdL3.js";
import { u as _e, K as z } from "./index.BpLlqivW.js";
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
}, Ga = { style: { width: "calc(100% - 200px)" } }, Ja = /* @__PURE__ */ L({
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
  setup(F, { emit: B }) {
    const U = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": ye, "./icon/airflow.png": ke, "./icon/amazon-s3.png": we, "./icon/amundsen.png": qe, "./icon/athena.png": Ce, "./icon/atlas.png": Ie, "./icon/azuresql.png": Ne, "./icon/bigquery.png": xe, "./icon/clickhouse.png": Ve, "./icon/databrick.png": Ee, "./icon/dbt.png": Te, "./icon/delta-lake.png": Se, "./icon/domo.png": Le, "./icon/doris.png": De, "./icon/druid.png": Pe, "./icon/dynamodb.png": Ue, "./icon/glue.png": je, "./icon/googleCloudService.png": Oe, "./icon/hive.png": Ye, "./icon/ibmdb2.png": $e, "./icon/iceberg.png": ze, "./icon/impala.png": Fe, "./icon/kafka.png": Be, "./icon/kinesis.png": Re, "./icon/looker.png": Ke, "./icon/mariadb.png": Me, "./icon/metabase.png": Qe, "./icon/mlflow.png": Xe, "./icon/mode.png": Ae, "./icon/mongodb.png": Ge, "./icon/mssql.png": Je, "./icon/mysql.png": He, "./icon/oracle.png": We, "./icon/pinot.png": Ze, "./icon/postgres.png": ea, "./icon/power-bi.png": aa, "./icon/presto.png": ta, "./icon/qliksense.png": sa, "./icon/quicksight.png": la, "./icon/redash.png": oa, "./icon/redpanda.png": ia, "./icon/redshift.png": na, "./icon/sagemaker.png": _a, "./icon/salesforce.png": ca, "./icon/saphana.png": ra, "./icon/singlestore.png": ga, "./icon/snowflakes.png": pa, "./icon/sqlalchemy.png": ua, "./icon/sqlite.png": va, "./icon/superset.png": da, "./icon/tableau.png": ma, "./icon/trino.png": ba, "./icon/vertica.png": fa }), j = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ha, "./svg/database.svg": ya, "./svg/field.svg": ka, "./svg/icon_clickhouse.svg": wa, "./svg/liebiaoziduanguanli.svg": qa, "./svg/mongodb.svg": Ca, "./svg/mysql.svg": Ia, "./svg/oracle.svg": Na, "./svg/postgresql.svg": xa, "./svg/schema.svg": Va, "./svg/server.svg": Ea, "./svg/shujuku.svg": Ta, "./svg/table.svg": Sa }), R = F, { serverId: K, schemaIds: se, sql: M, groups: v, testConnect: d, preview: u, refresh: y } = R, m = B, O = (t, a) => {
      let l = "";
      const n = t.toLowerCase();
      if (a && a == "group") {
        const c = (Object.keys(U) || []).find((_) => _.includes(n));
        c && (l = U[c].default);
      } else {
        const c = (Object.keys(j) || []).find((_) => _.includes(n));
        c && (l = j[c].default);
      }
      return l;
    }, q = C(!1), I = A({}), f = C(), x = (t) => {
      f.value = t;
    }, re = async () => {
      if (d) {
        q.value = !0;
        try {
          const t = await d(f.value, T);
          I[f.value.id] = t;
        } catch (t) {
          console.error(t);
        }
        q.value = !1;
      }
    }, ge = L({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(t, a) {
        const { id: l = "", groups: n } = t, o = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !1 };
        let c = [];
        const _ = async (e, i) => {
          const r = e.data;
          let s = [];
          if (!r || !r.label) {
            const k = await te(), N = $a(k.data, "serviceType"), h = Object.keys(N).filter((w) => n.length > 0 ? n.includes(w) : !0);
            if (c = k.data, s = h.map((w) => ({ label: w, value: w, data: w, icon: w, type: "group", children: N[w].map((V) => ({ group: w, label: V.displayName || V.name, type: k.type, value: V.id, data: V, isLeaf: !0 })) })), l) {
              const w = c.find((V) => V.id == l);
              a.emit("up:server", w);
            }
          } else
            r.children && (s = r.children);
          i(s);
        };
        let b = l;
        const S = (e) => {
          const i = c.find((r) => r.id == e);
          b = e, a.emit("up:id", e), a.emit("up:server", i);
        };
        return () => p(Pa, { modelValue: b, "onUpdate:modelValue": S, props: { ...o, lazyLoad: _ } }, {
          default: ({ data: e }) => p("div", { style: "display:flex;align-items:center;gap:.5em;" }, [
            p("img", { style: "height:1em;max-height:1em;", src: O(e.type == "group" ? e.label : e.type, e.type), title: `${e.label} - ${e.type}` }),
            p("span", e.label)
          ])
        });
      }
    }), Q = C(""), X = C("");
    let T;
    const pe = (t) => {
      X.value = t;
    }, ue = (t) => {
      T = t, oe();
    }, le = L({
      props: ["data", "ids"],
      emits: ["click"],
      setup(t, a) {
        const l = t.data, n = t.ids, o = l.isLeaf, c = C(!1), _ = C(!1), b = A([]), S = (s = []) => {
          b.length = 0, b.push(...s);
        }, e = async (s) => {
          if (s == null || s.stopPropagation(), s == null || s.preventDefault(), c.value = !c.value, b.length == 0) {
            _.value = !0;
            try {
              const k = await te(l.data), N = k.data.map((h) => ({ label: h.displayName || h.name, type: k.type, value: h.id, parent: t.data, data: h, isLeaf: h.columns != null }));
              S(N);
            } catch (k) {
              console.error(k);
            }
            _.value = !1;
          }
        }, i = (s) => {
          s == null || s.stopPropagation(), s == null || s.preventDefault(), o ? a.emit("click", l) : e();
        }, r = (s) => {
          a.emit("click", s);
        };
        return n && n.includes(l.value) && (o ? a.emit("click", l) : e()), () => p("div", { key: l.value, class: "w-full" }, [
          p("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: i }, [
            o ? "" : _.value ? p(Ua, { class: "is-loading" }, { default: () => p(ja) }) : p("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (s) => e(s) }, c.value ? "-" : "+"),
            p("img", { src: O(l.type), style: "height:1em;" }),
            p("b", { class: "truncate", style: "color:#999;", title: l.label }, l.label)
          ]),
          !o && c.value ? p("div", { style: "padding-left:1em;" }, b.map((s) => p(le, { data: s, onClick: r, ids: n }))) : ""
        ]);
      }
    }), ve = L({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(t, a) {
        const { server: l } = ie(t), { ids: n } = t;
        console.log("ids === > ", n);
        const o = A([]), c = (e = []) => {
          o.length = 0, o.push(...e);
        }, _ = (e) => e.data.map((i) => ({ label: i.displayName || i.name, type: e.type, value: i.id, data: i, isLeaf: i.columns != null })), b = async (e) => {
          var i;
          if (e) {
            const r = await te(e);
            c(_(r)), ((i = r == null ? void 0 : r.data) == null ? void 0 : i.length) > 0 && a.emit("up:database", r.data[0]);
          } else
            c();
        }, S = (e) => {
          var N;
          let i = e;
          const r = [e];
          for (; i != null && i.parent; )
            r.push(i.parent), i = i.parent;
          const s = r.reverse().map((h) => h.value), k = r.map((h) => h.data.name).join(".");
          a.emit("up:ids", s), a.emit("up:name", k), a.emit("up:database", (N = r[0]) == null ? void 0 : N.data);
        };
        return l.value && b(l.value), G(l, (e, i) => {
          b(e), i != null && (a.emit("up:ids", []), a.emit("up:name", ""));
        }), () => p("div", o.map((e) => p(le, { data: e, onClick: S, key: e.value, ids: n })));
      }
    });
    let Y = M;
    const de = () => "Select * from " + X.value, me = (t) => {
      m("update:sql", t), Y = t, oe();
    }, be = L({
      props: ["sql", "schema"],
      emits: ["up:sql"],
      setup(t, a) {
        const { schema: l } = ie(t), n = C(t.sql || ""), o = [Oa()], c = C();
        return G(l, (_) => {
          var b;
          console.log("schema ===> ", _), _ ? n.value ? (b = c.value) == null || b.insertValue(_) : n.value = de() : n.value = "";
        }), G(n, (_) => {
          a.emit("up:sql", _);
        }), () => p(Ka, { ref: (_) => c.value = _, modelValue: n.value, lang: o, showOperate: !1, "onUpdate:modelValue": (_) => n.value = _ });
      }
    }), fe = () => {
      u && u(f.value, T, Y);
    }, he = () => {
      y && y(f.value, T, Y);
    }, oe = za(() => {
      m("change", f.value, T, Y);
    }, 500);
    return (t, a) => {
      var l, n;
      return $(), La("div", Ma, [
        D("div", Qa, [
          E(g(ge), {
            class: "min-w-400",
            id: g(K),
            groups: g(v),
            "onUp:server": x,
            "onUp:id": a[0] || (a[0] = (o) => m("update:serverId", o))
          }, null, 8, ["id", "groups"]),
          D("div", null, [
            g(d) != null ? ($(), J(g(ee), {
              key: 0,
              loading: q.value,
              disabled: I[(l = f.value) == null ? void 0 : l.id] === !0,
              type: I[(n = f.value) == null ? void 0 : n.id] == !0 ? "success" : "primary",
              onClick: re
            }, {
              default: H(() => {
                var o;
                return [
                  W(Da(I[(o = f.value) == null ? void 0 : o.id] == !0 ? "连接成功" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "disabled", "type"])) : Z("", !0),
            g(u) != null ? ($(), J(g(ee), {
              key: 1,
              loading: q.value,
              onClick: fe
            }, {
              default: H(() => [
                W("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0),
            g(y) != null ? ($(), J(g(ee), {
              key: 2,
              loading: q.value,
              onClick: he
            }, {
              default: H(() => [
                W("刷新")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0)
          ])
        ]),
        E(g(ne), { "m-y-8": "" }),
        D("div", Xa, [
          D("div", Aa, [
            E(g(ce), {
              "prefix-icon": g(Ya),
              placeholder: "输入名称进行搜索",
              modelValue: Q.value,
              "onUpdate:modelValue": a[1] || (a[1] = (o) => Q.value = o)
            }, null, 8, ["prefix-icon", "modelValue"]),
            E(g(ne), { "m-y-4": "" }),
            E(g(ve), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: g(se),
              server: f.value,
              query: Q.value,
              "onUp:ids": a[2] || (a[2] = (o) => m("update:schemaIds", o)),
              "onUp:name": pe,
              "onUp:database": ue
            }, null, 8, ["ids", "server", "query"])
          ]),
          D("div", Ga, [
            E(g(be), {
              sql: g(M),
              schema: X.value,
              "onUp:sql": a[3] || (a[3] = (o) => me(o))
            }, null, 8, ["sql", "schema"])
          ])
        ])
      ]);
    };
  }
}), st = () => {
  const F = "TableInput", B = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, U = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, j = async (v, d) => {
    if (!v || !d) {
      Ra.warning("请选择数据库表之后再测试连接");
      return;
    }
    const u = z.PREFIX + "/database/testConnect", y = _e(v, d), m = await z.POST(u, { connection: y });
    return m.result || m.content;
  }, R = async (v = {}, d = "") => {
    const u = {
      connectionDetailVO: { connection: v },
      querySql: d
    }, y = z.PREFIX + "/database/getFieldInfo", m = await z.POST(y, u);
    return m.result || m.content;
  }, K = async (v, d) => {
    console.log("handleChange ====> ", d);
    const [u, y, m] = d;
    if (u == null || y == null || !m) {
      console.warn("参数没有准备好！", d);
      return;
    }
    P(v, "$server", u);
    const q = _e(u, y);
    P(v, "$connection", { ...q, name: u.id, dataSourceName: u.name, dsName: u.name }), P(v, "connection", u.id);
    const I = await R(q, m);
    if (I) {
      const f = I.map((x) => ({ repeat: "N", format: "", trim_type: "none", precision: x.fieldPrecision, length: x.fieldLength, type: x.fieldType, name: x.fieldName }));
      P(v, "fields", { field: f }), P(v, "initFlag", !0);
    }
  };
  return { name: F, step: U, markup: B, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ja, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres"], testConnect: j, "@change": ({ formData: v, $: d }) => K(v, d), ":preview": "() => graphEvents.customEvent('datapreview',cell)" }
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
        { prop: "limit", label: "记录数量限制", tag: Ba }
        // {prop:"",label:"",tag:ElCheckbox,trueLabel:"Y",falseLabel:"N"},
      ]
    },
    { label: "数据预览", elem: {} }
  ], metadata: {} };
};
export {
  st as default
};
