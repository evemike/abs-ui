import "../css/tableOutput-DWvU-FoH.css";
import { _ as be, a as fe, b as he, c as ye, d as we, e as ke, f as xe, g as Ne, h as Te, i as Ve, j as Ce, k as Ye, l as $e, m as De, n as Ie, o as Fe, p as Oe, q as Pe, r as qe, s as Ee, t as Le, u as je, v as ze, w as Se, x as Ue, y as Be, z as Me, A as Re, B as Ge, C as Je, D as Ae, E as He, F as Ke, G as Qe, H as We, I as Xe, J as Ze, K as et, L as tt, M as at, N as it, O as nt, P as lt, Q as st, R as ot, S as _t, T as rt, U as ct, V as pt, W as ut, X as dt, Y as gt, Z as vt, $ as mt, a0 as bt, a1 as ft, a2 as ht, a3 as yt, a4 as wt, a5 as kt, a6 as xt, a7 as Nt, a8 as Tt, a9 as Vt, aa as Ct, ab as Yt } from "./table.DtQlpGd_.js";
import { defineComponent as ee, ref as ne, reactive as X, h as $, toRefs as $t, watch as ve, openBlock as y, createElementBlock as q, createElementVNode as B, createVNode as w, unref as t, createBlock as te, withCtx as D, createTextVNode as le, toDisplayString as Dt, createCommentVNode as It, computed as Z, onMounted as Ft, Fragment as _e, renderList as re, withModifiers as ce } from "vue";
import { bc as pe, f as se, aB as Ot, bg as Pt, _ as qt, aJ as Et, g as f, d as ue, e as U, ap as oe, aI as Lt, O as ae, an as jt, aq as N, a as de, ar as H } from "./vendor.CawUkpaF.js";
import { b as ie } from "./api.CF1BbFLh.js";
import { u as ge } from "./index.BT2M4jic.js";
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
  setup(E, { emit: M }) {
    const L = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": be, "./icon/airflow.png": fe, "./icon/amazon-s3.png": he, "./icon/amundsen.png": ye, "./icon/athena.png": we, "./icon/atlas.png": ke, "./icon/azuresql.png": xe, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": Te, "./icon/databrick.png": Ve, "./icon/dbt.png": Ce, "./icon/delta-lake.png": Ye, "./icon/domo.png": $e, "./icon/doris.png": De, "./icon/druid.png": Ie, "./icon/dynamodb.png": Fe, "./icon/glue.png": Oe, "./icon/googleCloudService.png": Pe, "./icon/hive.png": qe, "./icon/ibmdb2.png": Ee, "./icon/iceberg.png": Le, "./icon/impala.png": je, "./icon/kafka.png": ze, "./icon/kinesis.png": Se, "./icon/looker.png": Ue, "./icon/mariadb.png": Be, "./icon/metabase.png": Me, "./icon/mlflow.png": Re, "./icon/mode.png": Ge, "./icon/mongodb.png": Je, "./icon/mssql.png": Ae, "./icon/mysql.png": He, "./icon/oracle.png": Ke, "./icon/pinot.png": Qe, "./icon/postgres.png": We, "./icon/power-bi.png": Xe, "./icon/presto.png": Ze, "./icon/qliksense.png": et, "./icon/quicksight.png": tt, "./icon/redash.png": at, "./icon/redpanda.png": it, "./icon/redshift.png": nt, "./icon/sagemaker.png": lt, "./icon/salesforce.png": st, "./icon/saphana.png": ot, "./icon/singlestore.png": _t, "./icon/snowflakes.png": rt, "./icon/sqlalchemy.png": ct, "./icon/sqlite.png": pt, "./icon/superset.png": ut, "./icon/tableau.png": dt, "./icon/trino.png": gt, "./icon/vertica.png": vt }), j = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": mt, "./svg/database.svg": bt, "./svg/field.svg": ft, "./svg/icon_clickhouse.svg": ht, "./svg/liebiaoziduanguanli.svg": yt, "./svg/mongodb.svg": wt, "./svg/mysql.svg": kt, "./svg/oracle.svg": xt, "./svg/postgresql.svg": Nt, "./svg/schema.svg": Tt, "./svg/server.svg": Vt, "./svg/shujuku.svg": Ct, "./svg/table.svg": Yt }), R = E, { serverId: z, schemaIds: G, groups: J, testConnect: I } = R, F = M, O = (c, p) => {
      let v = "";
      const x = c.toLowerCase();
      if (p && p == "group") {
        const m = (Object.keys(L) || []).find((C) => C.includes(x));
        m && (v = L[m].default);
      } else {
        const m = (Object.keys(j) || []).find((C) => C.includes(x));
        m && (v = j[m].default);
      }
      return v;
    }, s = ne(!1), n = X({}), _ = ne(), g = (c) => {
      _.value = c;
    }, k = async () => {
      if (I) {
        s.value = !0;
        try {
          console.log("testConnect....", T);
          const c = await I(_.value, T);
          n[_.value.id] = c;
        } catch (c) {
          console.error(c);
        }
        s.value = !1;
      }
    }, h = ee({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(c, p) {
        const { id: v = "", groups: x } = c, d = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, m = X([]), C = async () => {
          m.length = 0;
          const u = await ie(), Y = qt(u.data, "serviceType"), l = Object.keys(Y).filter((e) => x.length > 0 ? x.includes(e) : !0).map((e) => ({ label: e, value: e, data: e, icon: e, type: "group", children: Y[e].map((o) => ({ group: e, label: o.displayName || o.name, type: u.type, value: o.id, data: o, isLeaf: !0 })) }));
          if (m.push(...l), v) {
            const e = u.data.find((o) => o.id == v);
            p.emit("up:server", e);
          }
        };
        let K = v;
        const Q = (u) => {
          if (u.isLeaf) {
            const Y = u.value, A = u.data;
            K = Y, p.emit("up:id", Y), p.emit("up:server", A), console.log("Server --------------", Y, A);
          }
        };
        return C(), () => $(pe, { modelValue: K, options: m, props: { ...d } }, {
          default: ({ data: u }) => $("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => Q(u) }, [
            $("img", { style: "height:1em;max-height:1em;", src: O(u.type == "group" ? u.label : u.type, u.type), title: `${u.type} - ${u.label}` }),
            $("span", u.label)
          ])
        });
      }
    });
    let T, V = "", a = [];
    const i = (c, p = []) => {
      V = c ? `select * from ${c}` : "", a = p, c && me();
    }, r = (c) => {
      console.log("..234234......", c), T = c;
    }, b = ee({
      props: ["ids", "server"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(c, p) {
        const { server: v } = $t(c), { ids: x = [] } = c, d = X([...x]), m = X([]), C = (l = []) => {
          m.length = 0, m.push(...l);
        }, K = (l) => l.data.map((e) => ({ label: e.displayName || e.name, type: l.type, value: e.id, data: e, isLeaf: e.columns != null })), Q = async (l) => {
          var e;
          if (l) {
            const o = await ie(l);
            C(K(o)), p.emit("up:database", (e = o.data) == null ? void 0 : e[0]);
          } else
            C();
        }, u = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !0 }, Y = async (l, e) => {
          const o = l.data;
          let S = [];
          if (o && o.children)
            S = o.children;
          else if (o && o.data && o.value) {
            const W = await ie(o.data);
            S = W.data.map((P) => ({ label: P.displayName || P.name, type: W.type, value: P.id, parent: o, data: P, isLeaf: P.columns != null }));
          }
          e(S);
        }, A = (l) => {
          if (!l.isLeaf)
            return;
          let e = l;
          const o = [l.data];
          for (; e != null && e.parent; )
            o.push(e.parent.data), e = e.parent;
          const S = o.reverse().map((P) => P.id), W = l.data.name;
          d.length = 0, d.push(...S), p.emit("up:database", o[0]), p.emit("up:ids", S), p.emit("up:name", W, o);
        };
        return v.value && Q(v.value), ve(v, (l, e) => {
          Q(l), e != null && (d.length = 0, p.emit("up:ids", []), p.emit("up:name", ""));
        }), () => $(pe, { modelValue: d, options: m, props: { ...u, lazyLoad: Y } }, {
          default: ({ data: l }) => $("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => A(l) }, [
            $("img", { style: "height:1em;max-height:1em;", src: O(l.type, l.type), title: `${l.type} - ${l.label}` }),
            $("span", l.label)
          ])
        });
      }
    }), me = Et(() => {
      F("change", _.value, T, V, a);
    }, 500);
    return (c, p) => {
      var v, x;
      return y(), q("div", zt, [
        B("div", St, [
          w(t(h), {
            class: "min-w-400",
            id: t(z),
            groups: t(J),
            "onUp:server": g,
            "onUp:id": p[0] || (p[0] = (d) => F("update:serverId", d))
          }, null, 8, ["id", "groups"]),
          w(t(b), {
            class: "min-w-400",
            ids: t(G),
            server: _.value,
            "onUp:ids": p[1] || (p[1] = (d) => F("update:schemaIds", d)),
            "onUp:database": r,
            "onUp:name": i
          }, null, 8, ["ids", "server"]),
          B("div", null, [
            t(I) != null ? (y(), te(t(se), {
              key: 0,
              loading: s.value,
              icon: n[(v = _.value) == null ? void 0 : v.id] == !0 ? t(Ot) : t(Pt),
              type: n[(x = _.value) == null ? void 0 : x.id] == !0 ? "success" : "primary",
              onClick: k
            }, {
              default: D(() => {
                var d;
                return [
                  le(Dt(n[(d = _.value) == null ? void 0 : d.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : It("", !0)
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
}, Rt = { "min-w-50": "" }, Gt = /* @__PURE__ */ B("div", { "h-50": "" }, null, -1), Jt = {
  "h-48": "",
  flex: "",
  "items-center": "",
  "justify-center": ""
}, At = {
  key: 0,
  class: "i-mingcute:arrow-right-fill w-2em h-2em c-#409EFF"
}, Ht = {
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
  setup(E, { emit: M }) {
    const L = E, { inputProps: j, outputProps: R, formdata: z, outputFileds: G, inputFileds: J, data: I = [] } = L, F = M, O = Z(() => f(z, J) || []), s = Z(() => f(z, G) || []), n = Z(() => {
      const a = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, R || {});
      return t(s).map((i) => ({ label: f(i, a.label) || f(i, a.value), value: f(i, a.value), name: f(i, a.name) || f(i, a.value), type: f(i, a.type), remark: f(i, a.remark) })) || [];
    }), _ = Z(() => {
      const a = Object.assign({ name: "name", type: "type", remark: "remark" }, j || {});
      return t(O).map((i) => ({ name: f(i, a.name), type: f(i, a.type), remark: f(i, a.remark) }));
    }), g = ne(I), k = () => {
      const a = [];
      for (const i of t(_)) {
        const r = t(n).find((b) => b.name == i.name);
        r ? a.push({ ...r }) : a.push({});
      }
      g.value = a;
    };
    ve([O, s], ([a, i]) => {
      k(), i.length > 0 && a.length > 0 && V();
    });
    const h = (a, i) => {
      const r = t(n).find((b) => b.value == a);
      r && Object.assign(i.row, r), V();
    }, T = (a, i) => {
      a.row.$enabled = i, V();
    }, V = () => {
      if (t(g).length > 0) {
        const a = t(g).map((i, r) => i.$enabled == !1 ? void 0 : [_.value[r], { ...i }]).filter((i) => i != null);
        F("change", a), F("update:data", t(g));
      }
    };
    return Ft(() => {
      I.length != t(O).length && k();
    }), (a, i) => (y(), q("div", Bt, [
      B("div", Mt, [
        w(t(ue), {
          data: _.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: D(() => [
            w(t(U), {
              label: "输入表字段",
              prop: "name"
            }),
            w(t(U), {
              label: "类型",
              prop: "type",
              width: "120"
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      B("div", Rt, [
        Gt,
        (y(!0), q(_e, null, re(g.value, (r) => (y(), q("div", Jt, [
          r.$enabled != !1 ? (y(), q("div", At)) : (y(), q("div", Ht))
        ]))), 256))
      ]),
      B("div", Kt, [
        w(t(ue), {
          data: g.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: D(() => [
            w(t(U), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: D((r) => [
                w(t(oe), {
                  modelValue: r.row.name,
                  "onUpdate:modelValue": (b) => r.row.name = b,
                  disabled: r.row.$enabled == !1,
                  onChange: (b) => h(b, r),
                  size: "small"
                }, {
                  default: D(() => [
                    (y(!0), q(_e, null, re(n.value, (b) => (y(), te(t(Lt), {
                      label: b.label,
                      value: b.value
                    }, null, 8, ["label", "value"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
              ]),
              _: 1
            }),
            w(t(U), {
              label: "类型",
              prop: "type",
              width: "120"
            }),
            w(t(U), {
              label: "主键",
              prop: "main",
              width: "80"
            }),
            w(t(U), {
              label: "操作",
              width: "120"
            }, {
              default: D((r) => [
                r.row.$enabled != !1 ? (y(), te(t(se), {
                  key: 0,
                  size: "small",
                  onClick: ce(() => T(r, !1), ["stop"])
                }, {
                  default: D(() => [
                    le("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (y(), te(t(se), {
                  key: 1,
                  size: "small",
                  onClick: ce(() => T(r, !0), ["stop"])
                }, {
                  default: D(() => [
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
}), ia = (E) => {
  const M = "TableOutput", L = {
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
    ports: { items: [{ id: "in", group: "left" }] }
  }, j = async (s, n) => {
    const _ = ge(s, n);
    return await E.api.testConnect({ connection: _ });
  }, R = (s, n) => {
    console.log(n, s);
  }, z = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "Y", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: "N", ignore_errors: "Y", use_batch: "Y", specify_fields: "Y", partitioning_enabled: "N", partitioning_field: "", partitioning_daily: "N", partitioning_monthly: "Y", tablename_in_field: "N", tablename_field: "", tablename_in_table: "N", return_keys: "N", return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, G = async (s, n) => {
    const [_, g, k, h] = n;
    if (console.log("initFields ====> ", n, g, k, h), !_) {
      de.warning("请选择数据源");
      return;
    }
    if (!g || !k) {
      de.warning("请选择数据表");
      return;
    }
    h && h[1] && H(s, "schema", h[1].name), h && h[2] && H(s, "table", h[2].name), H(s, "connection", _.id);
    const T = ge(_, g), V = await E.api.getFieldInfo({ connectionDetailVO: { connection: T }, querySql: k });
    V && H(s, "$fields", V);
  }, J = (s, n) => {
    if (n && n.length > 0) {
      const _ = n.map(([g, k]) => ({ column_name: g.name, stream_name: k.name }));
      H(s, "fields", { field: _ });
    }
  };
  return { name: M, step: z, markup: L, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Ut, "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$tableIds", "@change": ({ formData: s, $: n }) => G(s, n), testConnect: j },
      { tag: ae },
      { tag: jt, label: "数据入表方式", prop: "$truncate", tip: { content: `
  <p>清空覆盖：删除表数据后再插入新数据</p>
  <p>追加：将数据直接追加到表中，如果遇到主键（唯一约束）冲突，则直接报错并结束</p>
  <p>插入且更新：将数据追加到表中，遇到主键冲突时覆盖这条数据</p>
  <p>插入不更新：只追加不同主键的数据，相同主键的数据直接舍弃</p>
  `, rawContent: !0 }, "@change": ({ formData: s, $: n }) => R(s, n[0]), cls: [{ cls: "清空覆盖", label: "over" }, { cls: "追加", label: "insert" }, { cls: "插入且更新", label: "update" }, { cls: "插入不更新", label: "add" }] },
      { tag: ae },
      { tag: Qt, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: s, $: n }) => J(s, n[0]) }
    ] },
    { type: "form", label: "高级配置", column: [
      { label: "提交记录数量", prop: "commit" },
      { label: "裁剪表", tag: N, prop: "truncate", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "忽略插入错误", tag: N, prop: "ignore_errors", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "指定数据可字段", tag: N, prop: "specify_fields", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      // {prop:"",label:"",tag:ElSwitch,trueLabel:"Y",falseLabel:"N"}
      { tag: ae, cls: "主选项" },
      { label: "表分区数据", tag: N, prop: "partitioning_enabled", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "分区字段", tag: oe, prop: "partitioning_field", cls: [] },
      //  item in step.outFields
      { label: "每月分区数据", tag: N, prop: "partitioning_daily", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "每天分区数据", tag: N, prop: "partitioning_monthly", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "使用批量插入", tag: N, prop: "use_batch", ":disabled": "formData['return_keys'] == true", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "表名定义在一个字段里", tag: N, prop: "tablename_in_field", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "包含表名的字段", tag: oe, prop: "tablename_field", clearable: !0, ":disabled": "formData['tablename_in_field'] == 'N'", cls: [] },
      { label: "存储表名字段", tag: N, prop: "tablename_in_table", ":disabled": "formData['tablename_in_field'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "返回一个自动产生的关键字", tag: N, prop: "return_keys", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "自动产生关键字的名称", prop: "return_field", ":disabled": "formData['return_keys'] == 'N'" }
    ] }
  ], metadata: {} };
};
export {
  ia as default
};
