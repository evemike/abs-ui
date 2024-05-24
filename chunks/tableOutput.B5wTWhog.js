import "../css/tableOutput-DWvU-FoH.css";
import { _ as be, a as fe, b as he, c as ye, d as we, e as ke, f as xe, g as Ne, h as Te, i as Ve, j as Ce, k as Ye, l as $e, m as De, n as Fe, o as Ie, p as Pe, q as Oe, r as Ee, s as Le, t as je, u as qe, v as ze, w as Se, x as Ue, y as Be, z as Me, A as Re, B as Ge, C as Ae, D as He, E as Je, F as Ke, G as Qe, H as We, I as Xe, J as Ze, K as et, L as tt, M as at, N as it, O as nt, P as lt, Q as st, R as ot, S as _t, T as rt, U as ct, V as pt, W as ut, X as dt, Y as gt, Z as vt, $ as mt, a0 as bt, a1 as ft, a2 as ht, a3 as yt, a4 as wt, a5 as kt, a6 as xt, a7 as Nt, a8 as Tt, a9 as Vt, aa as Ct, ab as Yt } from "./table.DtQlpGd_.js";
import { defineComponent as ee, ref as ne, reactive as X, h as F, toRefs as $t, watch as ve, openBlock as y, createElementBlock as L, createElementVNode as M, createVNode as w, unref as t, createBlock as te, withCtx as I, createTextVNode as le, toDisplayString as Dt, createCommentVNode as Ft, computed as Z, onMounted as It, Fragment as _e, renderList as re, withModifiers as ce } from "vue";
import { be as pe, B as se, aE as Pt, bj as Ot, a8 as Et, aM as Lt, A as f, y as ue, z as B, g as oe, aL as jt, _ as ae, b as qt, aw as T, a as de, ax as K } from "./vendor.4pP_Prrf.js";
import { b as ie } from "./api.CF1BbFLh.js";
import { u as ge } from "./index.BSL94-VO.js";
const zt = {
  "w-full": "",
  "overflow-auto": ""
}, St = {
  flex: "",
  "gap-2em": "",
  "h-32": "",
  "flex-wrap": ""
}, Ut = /* @__PURE__ */ ee({
  __name: "data-table-new",
  props: {
    serverId: { default: "" },
    schemaIds: { default: () => [] },
    groups: { default: () => [] },
    testConnect: {}
  },
  emits: ["update:serverId", "update:schemaIds", "put:server", "put:schema", "change"],
  setup(j, { emit: R }) {
    const q = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": be, "./icon/airflow.png": fe, "./icon/amazon-s3.png": he, "./icon/amundsen.png": ye, "./icon/athena.png": we, "./icon/atlas.png": ke, "./icon/azuresql.png": xe, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": Te, "./icon/databrick.png": Ve, "./icon/dbt.png": Ce, "./icon/delta-lake.png": Ye, "./icon/domo.png": $e, "./icon/doris.png": De, "./icon/druid.png": Fe, "./icon/dynamodb.png": Ie, "./icon/glue.png": Pe, "./icon/googleCloudService.png": Oe, "./icon/hive.png": Ee, "./icon/ibmdb2.png": Le, "./icon/iceberg.png": je, "./icon/impala.png": qe, "./icon/kafka.png": ze, "./icon/kinesis.png": Se, "./icon/looker.png": Ue, "./icon/mariadb.png": Be, "./icon/metabase.png": Me, "./icon/mlflow.png": Re, "./icon/mode.png": Ge, "./icon/mongodb.png": Ae, "./icon/mssql.png": He, "./icon/mysql.png": Je, "./icon/oracle.png": Ke, "./icon/pinot.png": Qe, "./icon/postgres.png": We, "./icon/power-bi.png": Xe, "./icon/presto.png": Ze, "./icon/qliksense.png": et, "./icon/quicksight.png": tt, "./icon/redash.png": at, "./icon/redpanda.png": it, "./icon/redshift.png": nt, "./icon/sagemaker.png": lt, "./icon/salesforce.png": st, "./icon/saphana.png": ot, "./icon/singlestore.png": _t, "./icon/snowflakes.png": rt, "./icon/sqlalchemy.png": ct, "./icon/sqlite.png": pt, "./icon/superset.png": ut, "./icon/tableau.png": dt, "./icon/trino.png": gt, "./icon/vertica.png": vt }), z = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": mt, "./svg/database.svg": bt, "./svg/field.svg": ft, "./svg/icon_clickhouse.svg": ht, "./svg/liebiaoziduanguanli.svg": yt, "./svg/mongodb.svg": wt, "./svg/mysql.svg": kt, "./svg/oracle.svg": xt, "./svg/postgresql.svg": Nt, "./svg/schema.svg": Tt, "./svg/server.svg": Vt, "./svg/shujuku.svg": Ct, "./svg/table.svg": Yt }), G = j, { serverId: S, schemaIds: A, groups: H, testConnect: P } = G, O = R, E = (c, p) => {
      let v = "";
      const x = c.toLowerCase();
      if (p && p == "group") {
        const m = (Object.keys(q) || []).find(($) => $.includes(x));
        m && (v = q[m].default);
      } else {
        const m = (Object.keys(z) || []).find(($) => $.includes(x));
        m && (v = z[m].default);
      }
      return v;
    }, s = ne(!1), l = X({}), _ = ne(), g = (c) => {
      _.value = c;
    }, k = async () => {
      if (P) {
        s.value = !0;
        try {
          console.log("testConnect....", V);
          const c = await P(_.value, V);
          l[_.value.id] = c;
        } catch (c) {
          console.error(c);
        }
        s.value = !1;
      }
    }, h = ee({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(c, p) {
        const { id: v = "", groups: x } = c, d = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, m = X([]), $ = async () => {
          m.length = 0;
          const u = await ie(), D = Et(u.data, "serviceType"), n = Object.keys(D).filter((e) => x.length > 0 ? x.includes(e) : !0).map((e) => ({ label: e, value: e, data: e, icon: e, type: "group", children: D[e].map((o) => ({ group: e, label: o.displayName || o.name, type: u.type, value: o.id, data: o, isLeaf: !0 })) }));
          if (m.push(...n), v) {
            const e = u.data.find((o) => o.id == v);
            p.emit("up:server", e);
          }
        };
        let Q = v;
        const W = (u) => {
          if (u.isLeaf) {
            const D = u.value, J = u.data;
            Q = D, p.emit("up:id", D), p.emit("up:server", J), console.log("Server --------------", D, J);
          }
        };
        return $(), () => F(pe, { modelValue: Q, options: m, props: { ...d } }, {
          default: ({ data: u }) => F("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => W(u) }, [
            F("img", { style: "height:1em;max-height:1em;", src: E(u.type == "group" ? u.label : u.type, u.type), title: `${u.type} - ${u.label}` }),
            F("span", u.label)
          ])
        });
      }
    });
    let V, C = "", a = [];
    const i = (c, p = []) => {
      C = c ? `select * from ${c}` : "", a = p, c && me();
    }, r = (c) => {
      console.log("..234234......", c), V = c;
    }, b = ee({
      props: ["ids", "server"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(c, p) {
        const { server: v } = $t(c), { ids: x = [] } = c, d = X([...x]), m = X([]), $ = (n = []) => {
          m.length = 0, m.push(...n);
        }, Q = (n) => n.data.map((e) => ({ label: e.displayName || e.name, type: n.type, value: e.id, data: e, isLeaf: e.columns != null })), W = async (n) => {
          var e, o;
          if (n) {
            const N = await ie(n);
            $(Q(N));
            const U = d.length > 0 ? (e = N.data) == null ? void 0 : e.find((Y) => Y.id == d[0]) : (o = N.data) == null ? void 0 : o[0];
            p.emit("up:database", U);
          } else
            $();
        }, u = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !0, multiple: !1, checkStrictly: !1 }, D = async (n, e) => {
          const o = n.data;
          let N = [];
          if (o && o.children)
            N = o.children;
          else if (o && o.data && o.value) {
            const U = await ie(o.data);
            N = U.data.map((Y) => ({ label: Y.displayName || Y.name, type: U.type, value: Y.id, parent: o, data: Y, isLeaf: Y.columns != null }));
          }
          e(N);
        }, J = (n) => {
          if (!n.isLeaf)
            return;
          let e = n;
          const o = [n.data];
          for (; e != null && e.parent; )
            o.push(e.parent.data), e = e.parent;
          const N = o.reverse().map((Y) => Y.id), U = n.data.name;
          d.length = 0, d.push(...N), p.emit("up:database", o[0]), p.emit("up:ids", N), p.emit("up:name", U, o);
        };
        return v.value && W(v.value), ve(v, (n, e) => {
          W(n), e != null && (d.length = 0, p.emit("up:ids", []), p.emit("up:name", ""));
        }), () => F(pe, { modelValue: d, options: m, props: { ...u, lazyLoad: D }, "onUpdate:modelValue": (n) => {
          console.log("------->", n);
        } }, {
          default: ({ data: n }) => F("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => J(n) }, [
            F("img", { style: "height:1em;max-height:1em;", src: E(n.type), title: `${n.type} - ${n.label}` }),
            F("span", n.label)
          ])
        });
      }
    }), me = Lt(() => {
      O("change", _.value, V, C, a);
    }, 500);
    return (c, p) => {
      var v, x;
      return y(), L("div", zt, [
        M("div", St, [
          w(t(h), {
            class: "min-w-400",
            id: t(S),
            groups: t(H),
            "onUp:server": g,
            "onUp:id": p[0] || (p[0] = (d) => O("update:serverId", d))
          }, null, 8, ["id", "groups"]),
          w(t(b), {
            class: "min-w-400",
            ids: t(A),
            server: _.value,
            "onUp:ids": p[1] || (p[1] = (d) => O("update:schemaIds", d)),
            "onUp:database": r,
            "onUp:name": i
          }, null, 8, ["ids", "server"]),
          M("div", null, [
            t(P) != null ? (y(), te(t(se), {
              key: 0,
              loading: s.value,
              icon: l[(v = _.value) == null ? void 0 : v.id] == !0 ? t(Pt) : t(Ot),
              type: l[(x = _.value) == null ? void 0 : x.id] == !0 ? "success" : "primary",
              onClick: k
            }, {
              default: I(() => {
                var d;
                return [
                  le(Dt(l[(d = _.value) == null ? void 0 : d.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : Ft("", !0)
          ])
        ])
      ]);
    };
  }
}), Bt = {
  class: "comp-fields",
  flex: "",
  "w-full": "",
  "gap-20": "",
  "overflow-auto": ""
}, Mt = {
  "flex-1": "",
  class: "max-w-40% min-w-30%"
}, Rt = { "min-w-50": "" }, Gt = /* @__PURE__ */ M("div", { "h-50": "" }, null, -1), At = {
  "h-48": "",
  flex: "",
  "items-center": "",
  "justify-center": ""
}, Ht = {
  key: 0,
  class: "i-mingcute:arrow-right-fill w-2em h-2em c-#409EFF"
}, Jt = {
  key: 1,
  class: "i-nimbus:stop w-2em h-2em c-#ddd"
}, Kt = {
  "flex-2": "",
  "w-full": ""
}, Qt = /* @__PURE__ */ ee({
  __name: "fileds",
  props: {
    inputFileds: { default: "" },
    inputProps: { default: () => ({}) },
    outputFileds: { default: "" },
    outputProps: { default: () => ({}) },
    formdata: {},
    data: {}
  },
  emits: ["change", "update:data"],
  setup(j, { emit: R }) {
    const q = j, { inputProps: z, outputProps: G, formdata: S, outputFileds: A, inputFileds: H, data: P = [] } = q, O = R, E = Z(() => f(S, H) || []), s = Z(() => f(S, A) || []), l = Z(() => {
      const a = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, G || {});
      return t(s).map((i) => ({ label: f(i, a.label) || f(i, a.value), value: f(i, a.value), name: f(i, a.name) || f(i, a.value), type: f(i, a.type), remark: f(i, a.remark) })) || [];
    }), _ = Z(() => {
      const a = Object.assign({ name: "name", type: "type", remark: "remark" }, z || {});
      return t(E).map((i) => ({ name: f(i, a.name), type: f(i, a.type), remark: f(i, a.remark) }));
    }), g = ne(P), k = () => {
      const a = [];
      for (const i of t(_)) {
        const r = t(l).find((b) => b.name == i.name);
        r ? a.push({ ...r }) : a.push({});
      }
      g.value = a;
    };
    ve([E, s], ([a, i]) => {
      k(), i.length > 0 && a.length > 0 && C();
    });
    const h = (a, i) => {
      const r = t(l).find((b) => b.value == a);
      r && Object.assign(i.row, r), C();
    }, V = (a, i) => {
      a.row.$enabled = i, C();
    }, C = () => {
      if (t(g).length > 0) {
        const a = t(g).map((i, r) => i.$enabled == !1 ? void 0 : [_.value[r], { ...i }]).filter((i) => i != null);
        O("change", a), O("update:data", t(g));
      }
    };
    return It(() => {
      P.length != t(E).length && k();
    }), (a, i) => (y(), L("div", Bt, [
      M("div", Mt, [
        w(t(ue), {
          data: _.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: I(() => [
            w(t(B), {
              label: "输入表字段",
              prop: "name"
            }),
            w(t(B), {
              label: "类型",
              prop: "type",
              width: "120"
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      M("div", Rt, [
        Gt,
        (y(!0), L(_e, null, re(g.value, (r) => (y(), L("div", At, [
          r.$enabled != !1 ? (y(), L("div", Ht)) : (y(), L("div", Jt))
        ]))), 256))
      ]),
      M("div", Kt, [
        w(t(ue), {
          data: g.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: I(() => [
            w(t(B), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: I((r) => [
                w(t(oe), {
                  modelValue: r.row.name,
                  "onUpdate:modelValue": (b) => r.row.name = b,
                  disabled: r.row.$enabled == !1,
                  onChange: (b) => h(b, r),
                  size: "small"
                }, {
                  default: I(() => [
                    (y(!0), L(_e, null, re(l.value, (b) => (y(), te(t(jt), {
                      label: b.label,
                      value: b.value
                    }, null, 8, ["label", "value"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
              ]),
              _: 1
            }),
            w(t(B), {
              label: "类型",
              prop: "type",
              width: "120"
            }),
            w(t(B), {
              label: "主键",
              prop: "main",
              width: "80"
            }),
            w(t(B), {
              label: "操作",
              width: "120"
            }, {
              default: I((r) => [
                r.row.$enabled != !1 ? (y(), te(t(se), {
                  key: 0,
                  size: "small",
                  onClick: ce(() => V(r, !1), ["stop"])
                }, {
                  default: I(() => [
                    le("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (y(), te(t(se), {
                  key: 1,
                  size: "small",
                  onClick: ce(() => V(r, !0), ["stop"])
                }, {
                  default: I(() => [
                    le("恢复")
                  ]),
                  _: 2
                }, 1032, ["onClick"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data"])
      ])
    ]));
  }
}), ia = (j) => {
  const R = "TableOutput", q = {
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
    ports: { items: [{ id: "in", group: "left" }] }
  }, z = async (s, l) => {
    const _ = ge(s, l);
    return await j.api.testConnect({ connection: _ });
  }, G = (s, l) => {
    console.log(l, s);
  }, S = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "Y", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: "N", ignore_errors: "Y", use_batch: "Y", specify_fields: "Y", partitioning_enabled: "N", partitioning_field: "", partitioning_daily: "N", partitioning_monthly: "Y", tablename_in_field: "N", tablename_field: "", tablename_in_table: "N", return_keys: "N", return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, A = async (s, l) => {
    const [_, g, k, h] = l;
    if (console.log("initFields ====> ", l, g, k, h), !_) {
      de.warning("请选择数据源");
      return;
    }
    if (!g || !k) {
      de.warning("请选择数据表");
      return;
    }
    h && h[1] && K(s, "schema", h[1].name), h && h[2] && K(s, "table", h[2].name), K(s, "connection", _.id);
    const V = ge(_, g), C = await j.api.getFieldInfo({ connectionDetailVO: { connection: V }, querySql: k });
    C && K(s, "$fields", C);
  }, H = (s, l) => {
    if (l && l.length > 0) {
      const _ = l.map(([g, k]) => ({ stream_name: g.name, column_name: k.name }));
      K(s, "fields", { field: _ });
    }
  };
  return { name: R, step: S, markup: q, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Ut, "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$tableIds", "@change": ({ formData: s, $: l }) => A(s, l), testConnect: z },
      { tag: ae },
      { tag: qt, label: "数据入表方式", prop: "$truncate", tip: { content: `
  <p>清空覆盖：删除表数据后再插入新数据</p>
  <p>追加：将数据直接追加到表中，如果遇到主键（唯一约束）冲突，则直接报错并结束</p>
  <p>插入且更新：将数据追加到表中，遇到主键冲突时覆盖这条数据</p>
  <p>插入不更新：只追加不同主键的数据，相同主键的数据直接舍弃</p>
  `, rawContent: !0 }, "@change": ({ formData: s, $: l }) => G(s, l[0]), cls: [{ cls: "清空覆盖", label: "over" }, { cls: "追加", label: "insert" }, { cls: "插入且更新", label: "update" }, { cls: "插入不更新", label: "add" }] },
      { tag: ae },
      { tag: Qt, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: s, $: l }) => H(s, l[0]) }
    ] },
    { type: "form", label: "高级配置", column: [
      { label: "提交记录数量", prop: "commit" },
      { label: "裁剪表", tag: T, prop: "truncate", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "忽略插入错误", tag: T, prop: "ignore_errors", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "指定数据可字段", tag: T, prop: "specify_fields", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      // {prop:"",label:"",tag:ElSwitch,trueLabel:"Y",falseLabel:"N"}
      { tag: ae, cls: "主选项" },
      { label: "表分区数据", tag: T, prop: "partitioning_enabled", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "分区字段", tag: oe, prop: "partitioning_field", cls: [] },
      //  item in step.outFields
      { label: "每月分区数据", tag: T, prop: "partitioning_daily", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "每天分区数据", tag: T, prop: "partitioning_monthly", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "使用批量插入", tag: T, prop: "use_batch", ":disabled": "formData['return_keys'] == true", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "表名定义在一个字段里", tag: T, prop: "tablename_in_field", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "包含表名的字段", tag: oe, prop: "tablename_field", clearable: !0, ":disabled": "formData['tablename_in_field'] == 'N'", cls: [] },
      { label: "存储表名字段", tag: T, prop: "tablename_in_table", ":disabled": "formData['tablename_in_field'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "返回一个自动产生的关键字", tag: T, prop: "return_keys", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "自动产生关键字的名称", prop: "return_field", ":disabled": "formData['return_keys'] == 'N'" }
    ] }
  ], metadata: {} };
};
export {
  ia as default
};
