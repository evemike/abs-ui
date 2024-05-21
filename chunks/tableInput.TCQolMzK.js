import { _ as ye, a as ke, b as we, c as qe, d as Ce, e as Ie, f as Ne, g as xe, h as Ve, i as Te, j as Ee, k as Se, l as Le, m as De, n as Pe, o as Ue, p as je, q as Oe, r as Ye, s as $e, t as ze, u as Fe, v as Be, w as Re, x as Ke, y as Qe, z as Xe, A as Ae, B as Ge, C as Je, D as Me, E as He, F as We, G as Ze, H as ea, I as aa, J as sa, K as ta, L as la, M as oa, N as ia, O as na, P as _a, Q as ca, R as ra, S as ga, T as pa, U as ua, V as va, W as da, X as ma, Y as ba, Z as fa, $ as ha, a0 as ya, a1 as ka, a2 as wa, a3 as qa, a4 as Ca, a5 as Ia, a6 as Na, a7 as xa, a8 as Va, a9 as Ta, aa as Ea, ab as Sa } from "./table.DtQlpGd_.js";
import { defineComponent as S, ref as C, reactive as G, h as g, toRefs as ie, watch as J, openBlock as $, createElementBlock as La, createElementVNode as L, createVNode as T, unref as r, createBlock as M, withCtx as H, createTextVNode as W, toDisplayString as Da, createCommentVNode as Z } from "vue";
import { bc as Pa, o as Ua, I as ja, bb as Oa, f as ee, O as ne, y as ce, m as Ya, _ as $a, aJ as za, aq as ae, ap as Fa, am as Ba, ar as D } from "./vendor.CawUkpaF.js";
import { b as se } from "./api.CF1BbFLh.js";
import { C as Ra } from "./main.C9B4zdL3.js";
import { u as _e, K as z } from "./index.sGf6XKXR.js";
const Ka = {
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
}, Ga = { style: { width: "calc(100% - 200px)" } }, Ja = /* @__PURE__ */ S({
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
    const P = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": ye, "./icon/airflow.png": ke, "./icon/amazon-s3.png": we, "./icon/amundsen.png": qe, "./icon/athena.png": Ce, "./icon/atlas.png": Ie, "./icon/azuresql.png": Ne, "./icon/bigquery.png": xe, "./icon/clickhouse.png": Ve, "./icon/databrick.png": Te, "./icon/dbt.png": Ee, "./icon/delta-lake.png": Se, "./icon/domo.png": Le, "./icon/doris.png": De, "./icon/druid.png": Pe, "./icon/dynamodb.png": Ue, "./icon/glue.png": je, "./icon/googleCloudService.png": Oe, "./icon/hive.png": Ye, "./icon/ibmdb2.png": $e, "./icon/iceberg.png": ze, "./icon/impala.png": Fe, "./icon/kafka.png": Be, "./icon/kinesis.png": Re, "./icon/looker.png": Ke, "./icon/mariadb.png": Qe, "./icon/metabase.png": Xe, "./icon/mlflow.png": Ae, "./icon/mode.png": Ge, "./icon/mongodb.png": Je, "./icon/mssql.png": Me, "./icon/mysql.png": He, "./icon/oracle.png": We, "./icon/pinot.png": Ze, "./icon/postgres.png": ea, "./icon/power-bi.png": aa, "./icon/presto.png": sa, "./icon/qliksense.png": ta, "./icon/quicksight.png": la, "./icon/redash.png": oa, "./icon/redpanda.png": ia, "./icon/redshift.png": na, "./icon/sagemaker.png": _a, "./icon/salesforce.png": ca, "./icon/saphana.png": ra, "./icon/singlestore.png": ga, "./icon/snowflakes.png": pa, "./icon/sqlalchemy.png": ua, "./icon/sqlite.png": va, "./icon/superset.png": da, "./icon/tableau.png": ma, "./icon/trino.png": ba, "./icon/vertica.png": fa }), U = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ha, "./svg/database.svg": ya, "./svg/field.svg": ka, "./svg/icon_clickhouse.svg": wa, "./svg/liebiaoziduanguanli.svg": qa, "./svg/mongodb.svg": Ca, "./svg/mysql.svg": Ia, "./svg/oracle.svg": Na, "./svg/postgresql.svg": xa, "./svg/schema.svg": Va, "./svg/server.svg": Ta, "./svg/shujuku.svg": Ea, "./svg/table.svg": Sa }), R = F, { serverId: K, schemaIds: te, sql: Q, groups: u, testConnect: v, preview: p, refresh: f } = R, y = B, j = (a, s) => {
      let l = "";
      const n = a.toLowerCase();
      if (s && s == "group") {
        const c = (Object.keys(P) || []).find((_) => _.includes(n));
        c && (l = P[c].default);
      } else {
        const c = (Object.keys(U) || []).find((_) => _.includes(n));
        c && (l = U[c].default);
      }
      return l;
    }, q = C(!1), I = G({}), b = C(), x = (a) => {
      b.value = a;
    }, re = async () => {
      if (v) {
        q.value = !0;
        try {
          const a = await v(b.value);
          I[b.value.id] = a;
        } catch (a) {
          console.error(a);
        }
        q.value = !1;
      }
    }, ge = S({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(a, s) {
        const { id: l = "", groups: n } = a, o = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !1 };
        let c = [];
        const _ = async (e, i) => {
          const m = e.data;
          let t = [];
          if (!m || !m.label) {
            const k = await se(), N = $a(k.data, "serviceType"), h = Object.keys(N).filter((w) => n.length > 0 ? n.includes(w) : !0);
            if (c = k.data, t = h.map((w) => ({ label: w, value: w, data: w, icon: w, type: "group", children: N[w].map((V) => ({ group: w, label: V.displayName || V.name, type: k.type, value: V.id, data: V, isLeaf: !0 })) })), l) {
              const w = c.find((V) => V.id == l);
              s.emit("up:server", w);
            }
          } else
            m.children && (t = m.children);
          i(t);
        };
        let d = l;
        const E = (e) => {
          const i = c.find((m) => m.id == e);
          d = e, s.emit("up:id", e), s.emit("up:server", i);
        };
        return () => g(Pa, { modelValue: d, "onUpdate:modelValue": E, props: { ...o, lazyLoad: _ } }, {
          default: ({ data: e }) => g("div", { style: "display:flex;align-items:center;gap:.5em;" }, [
            g("img", { style: "height:1em;max-height:1em;", src: j(e.type == "group" ? e.label : e.type, e.type), title: `${e.label} - ${e.type}` }),
            g("span", e.label)
          ])
        });
      }
    }), X = C(""), A = C("");
    let O;
    const pe = (a) => {
      A.value = a;
    }, ue = (a) => {
      O = a, oe();
    }, le = S({
      props: ["data", "ids"],
      emits: ["click"],
      setup(a, s) {
        const l = a.data, n = a.ids, o = l.isLeaf, c = C(!1), _ = C(!1), d = G([]), E = (t = []) => {
          d.length = 0, d.push(...t);
        }, e = async (t) => {
          if (t == null || t.stopPropagation(), t == null || t.preventDefault(), c.value = !c.value, d.length == 0) {
            _.value = !0;
            try {
              const k = await se(l.data), N = k.data.map((h) => ({ label: h.displayName || h.name, type: k.type, value: h.id, parent: a.data, data: h, isLeaf: h.columns != null }));
              E(N);
            } catch (k) {
              console.error(k);
            }
            _.value = !1;
          }
        }, i = (t) => {
          t == null || t.stopPropagation(), t == null || t.preventDefault(), o ? s.emit("click", l) : e();
        }, m = (t) => {
          s.emit("click", t);
        };
        return n && n.includes(l.value) && (o ? s.emit("click", l) : e()), () => g("div", { key: l.value, class: "w-full" }, [
          g("div", { class: "w-full m-y-1", style: "display:flex;align-items:center;gap:.5em;cursor:pointer;", onClick: i }, [
            o ? "" : _.value ? g(Ua, { class: "is-loading" }, { default: () => g(ja) }) : g("b", { style: "color:#aaa;line-height:.9em;width:1em;text-align:center;", onClick: (t) => e(t) }, c.value ? "-" : "+"),
            g("img", { src: j(l.type), style: "height:1em;" }),
            g("b", { class: "truncate", style: "color:#999;", title: l.label }, l.label)
          ]),
          !o && c.value ? g("div", { style: "padding-left:1em;" }, d.map((t) => g(le, { data: t, onClick: m, ids: n }))) : ""
        ]);
      }
    }), ve = S({
      props: ["ids", "server", "query"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(a, s) {
        const { server: l } = ie(a), { ids: n } = a;
        console.log("ids === > ", n);
        const o = G([]), c = (e = []) => {
          o.length = 0, o.push(...e);
        }, _ = (e) => e.data.map((i) => ({ label: i.displayName || i.name, type: e.type, value: i.id, data: i, isLeaf: i.columns != null })), d = async (e) => {
          if (e) {
            const i = await se(e);
            c(_(i));
          } else
            c();
        }, E = (e) => {
          var N;
          let i = e;
          const m = [e];
          for (; i != null && i.parent; )
            m.push(i.parent), i = i.parent;
          const t = m.reverse().map((h) => h.value), k = m.map((h) => h.data.name).join(".");
          s.emit("up:ids", t), s.emit("up:name", k), s.emit("up:database", (N = m[0]) == null ? void 0 : N.data);
        };
        return l.value && d(l.value), J(l, (e, i) => {
          d(e), console.log(i), i != null && (s.emit("up:ids", []), s.emit("up:name", ""));
        }), () => g("div", o.map((e) => g(le, { data: e, onClick: E, key: e.value, ids: n })));
      }
    });
    let Y = Q;
    const de = () => "Select * from " + A.value, me = (a) => {
      y("update:sql", a), Y = a, oe();
    }, be = S({
      props: ["sql", "schema"],
      emits: ["up:sql"],
      setup(a, s) {
        const { schema: l } = ie(a), n = C(a.sql || ""), o = [Oa()], c = C();
        return J(l, (_) => {
          var d;
          console.log("schema ===> ", _), _ ? n.value ? (d = c.value) == null || d.insertValue(_) : n.value = de() : n.value = "";
        }), J(n, (_) => {
          s.emit("up:sql", _);
        }), () => g(Ra, { ref: (_) => c.value = _, modelValue: n.value, lang: o, showOperate: !1, "onUpdate:modelValue": (_) => n.value = _ });
      }
    }), fe = () => {
      p && p(b.value, O, Y);
    }, he = () => {
      f && f(b.value, O, Y);
    }, oe = za(() => {
      y("change", b.value, O, Y);
    }, 500);
    return (a, s) => {
      var l, n;
      return $(), La("div", Ka, [
        L("div", Qa, [
          T(r(ge), {
            class: "min-w-400",
            id: r(K),
            groups: r(u),
            "onUp:server": x,
            "onUp:id": s[0] || (s[0] = (o) => y("update:serverId", o))
          }, null, 8, ["id", "groups"]),
          L("div", null, [
            r(v) != null ? ($(), M(r(ee), {
              key: 0,
              loading: q.value,
              disabled: I[(l = b.value) == null ? void 0 : l.id] === !0,
              type: I[(n = b.value) == null ? void 0 : n.id] == !0 ? "success" : "primary",
              onClick: re
            }, {
              default: H(() => {
                var o;
                return [
                  W(Da(I[(o = b.value) == null ? void 0 : o.id] == !0 ? "连接成功" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "disabled", "type"])) : Z("", !0),
            r(p) != null ? ($(), M(r(ee), {
              key: 1,
              loading: q.value,
              onClick: fe
            }, {
              default: H(() => [
                W("数据预览")
              ]),
              _: 1
            }, 8, ["loading"])) : Z("", !0),
            r(f) != null ? ($(), M(r(ee), {
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
        T(r(ne), { "m-y-8": "" }),
        L("div", Xa, [
          L("div", Aa, [
            T(r(ce), {
              "prefix-icon": r(Ya),
              placeholder: "输入名称进行搜索",
              modelValue: X.value,
              "onUpdate:modelValue": s[1] || (s[1] = (o) => X.value = o)
            }, null, 8, ["prefix-icon", "modelValue"]),
            T(r(ne), { "m-y-4": "" }),
            T(r(ve), {
              class: "w-full overflow-y-auto overflow-x-hidden",
              style: { height: "calc(100% - 41px)" },
              ids: r(te),
              server: b.value,
              query: X.value,
              "onUp:ids": s[2] || (s[2] = (o) => y("update:schemaIds", o)),
              "onUp:name": pe,
              "onUp:database": ue
            }, null, 8, ["ids", "server", "query"])
          ]),
          L("div", Ga, [
            T(r(be), {
              sql: r(Q),
              schema: A.value,
              "onUp:sql": s[3] || (s[3] = (o) => me(o))
            }, null, 8, ["sql", "schema"])
          ])
        ])
      ]);
    };
  }
}), ss = () => {
  const F = "TableInput", B = {
    ports: { items: [{ id: "out", group: "right" }] }
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
  }, P = { name: "Table input", type: "TableInput", distribute: "Y", copies: "1", partitioning: { method: "none" }, connection: "", sql: "", limit: 0, replace_variables: !1, execute_each_row: !1, variables_active: !1, lazy_conversion_active: "N", remotesteps: { input: "", output: "" }, fields: { field: [] }, GUI: { xloc: "400", yloc: "128", draw: "Y" } }, U = async (u) => {
    const v = z.PREFIX + "/database/testConnect", p = _e(u), f = await z.POST(v, { connection: p });
    return f.result || f.content;
  }, R = async (u = {}, v = "") => {
    const p = {
      connectionDetailVO: { connection: u },
      querySql: v
    }, f = z.PREFIX + "/database/getFieldInfo", y = await z.POST(f, p);
    return y.result || y.content;
  }, K = async (u, v) => {
    console.log("handleChange ====> ", v);
    const [p, f, y] = v;
    if (p == null || f == null || !y) {
      console.warn("参数没有准备好！", v);
      return;
    }
    D(u, "$server", p);
    const q = _e(p, f);
    D(u, "$connection", { ...q, name: p.id, dataSourceName: p.name, dsName: p.name }), D(u, "connection", p.id);
    const I = await R(q, y);
    if (I) {
      const b = I.map((x) => ({ repeat: "N", format: "", trim_type: "none", precision: x.fieldPrecision, length: x.fieldLength, type: x.fieldType, name: x.fieldName }));
      D(u, "fields", { field: b }), D(u, "initFlag", !0);
    }
  };
  return { name: F, step: P, markup: B, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { tag: Ja, "v-model:sql": "formData.sql", "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$schemaIds", groups: ["Postgres"], testConnect: U, "@change": ({ formData: u, $: v }) => K(u, v), ":preview": "() => graphEvents.customEvent('datapreview',cell)" }
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
  ss as default
};
