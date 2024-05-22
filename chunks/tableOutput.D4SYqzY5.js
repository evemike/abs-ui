import "../css/tableOutput-DWvU-FoH.css";
import { _ as be, a as fe, b as he, c as ye, d as ke, e as we, f as xe, g as Ne, h as Te, i as Ve, j as Ce, k as Ye, l as $e, m as De, n as Ie, o as Fe, p as Oe, q as Pe, r as qe, s as Ee, t as Le, u as je, v as ze, w as Se, x as Ue, y as Be, z as Me, A as Re, B as Ge, C as Je, D as Ae, E as He, F as Ke, G as Qe, H as We, I as Xe, J as Ze, K as ea, L as aa, M as ta, N as ia, O as na, P as la, Q as sa, R as oa, S as _a, T as ra, U as ca, V as pa, W as ua, X as da, Y as ga, Z as va, $ as ma, a0 as ba, a1 as fa, a2 as ha, a3 as ya, a4 as ka, a5 as wa, a6 as xa, a7 as Na, a8 as Ta, a9 as Va, aa as Ca, ab as Ya } from "./table.DtQlpGd_.js";
import { defineComponent as ee, ref as ne, reactive as X, h as $, toRefs as $a, watch as ve, openBlock as y, createElementBlock as q, createElementVNode as B, createVNode as k, unref as a, createBlock as ae, withCtx as D, createTextVNode as le, toDisplayString as Da, createCommentVNode as Ia, computed as Z, onMounted as Fa, Fragment as _e, renderList as re, withModifiers as ce } from "vue";
import { bc as pe, f as se, aB as Oa, bg as Pa, _ as qa, aJ as Ea, g as f, d as ue, e as U, ap as oe, aI as La, O as te, an as ja, aq as N, a as de, ar as H } from "./vendor.CawUkpaF.js";
import { b as ie } from "./api.CF1BbFLh.js";
import { u as ge } from "./index.X8lr866V.js";
const za = {
  "w-full": "",
  "overflow-auto": ""
}, Sa = {
  flex: "",
  "gap-2em": "",
  "h-32": "",
  "flex-wrap": ""
}, Ua = /* @__PURE__ */ ee({
  __name: "data-table-new",
  props: {
    serverId: { default: "" },
    schemaIds: { default: () => [] },
    groups: { default: () => [] },
    testConnect: {}
  },
  emits: ["update:serverId", "update:schemaIds", "put:server", "put:schema", "change"],
  setup(E, { emit: M }) {
    const L = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": be, "./icon/airflow.png": fe, "./icon/amazon-s3.png": he, "./icon/amundsen.png": ye, "./icon/athena.png": ke, "./icon/atlas.png": we, "./icon/azuresql.png": xe, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": Te, "./icon/databrick.png": Ve, "./icon/dbt.png": Ce, "./icon/delta-lake.png": Ye, "./icon/domo.png": $e, "./icon/doris.png": De, "./icon/druid.png": Ie, "./icon/dynamodb.png": Fe, "./icon/glue.png": Oe, "./icon/googleCloudService.png": Pe, "./icon/hive.png": qe, "./icon/ibmdb2.png": Ee, "./icon/iceberg.png": Le, "./icon/impala.png": je, "./icon/kafka.png": ze, "./icon/kinesis.png": Se, "./icon/looker.png": Ue, "./icon/mariadb.png": Be, "./icon/metabase.png": Me, "./icon/mlflow.png": Re, "./icon/mode.png": Ge, "./icon/mongodb.png": Je, "./icon/mssql.png": Ae, "./icon/mysql.png": He, "./icon/oracle.png": Ke, "./icon/pinot.png": Qe, "./icon/postgres.png": We, "./icon/power-bi.png": Xe, "./icon/presto.png": Ze, "./icon/qliksense.png": ea, "./icon/quicksight.png": aa, "./icon/redash.png": ta, "./icon/redpanda.png": ia, "./icon/redshift.png": na, "./icon/sagemaker.png": la, "./icon/salesforce.png": sa, "./icon/saphana.png": oa, "./icon/singlestore.png": _a, "./icon/snowflakes.png": ra, "./icon/sqlalchemy.png": ca, "./icon/sqlite.png": pa, "./icon/superset.png": ua, "./icon/tableau.png": da, "./icon/trino.png": ga, "./icon/vertica.png": va }), j = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ma, "./svg/database.svg": ba, "./svg/field.svg": fa, "./svg/icon_clickhouse.svg": ha, "./svg/liebiaoziduanguanli.svg": ya, "./svg/mongodb.svg": ka, "./svg/mysql.svg": wa, "./svg/oracle.svg": xa, "./svg/postgresql.svg": Na, "./svg/schema.svg": Ta, "./svg/server.svg": Va, "./svg/shujuku.svg": Ca, "./svg/table.svg": Ya }), R = E, { serverId: z, schemaIds: G, groups: J, testConnect: I } = R, F = M, O = (c, p) => {
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
    }, s = ne(!1), l = X({}), _ = ne(), g = (c) => {
      _.value = c;
    }, w = async () => {
      if (I) {
        s.value = !0;
        try {
          console.log("testConnect....", T);
          const c = await I(_.value, T);
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
        const { id: v = "", groups: x } = c, d = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, m = X([]), C = async () => {
          m.length = 0;
          const u = await ie(), Y = qa(u.data, "serviceType"), n = Object.keys(Y).filter((e) => x.length > 0 ? x.includes(e) : !0).map((e) => ({ label: e, value: e, data: e, icon: e, type: "group", children: Y[e].map((o) => ({ group: e, label: o.displayName || o.name, type: u.type, value: o.id, data: o, isLeaf: !0 })) }));
          if (m.push(...n), v) {
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
    let T, V = "", t = [];
    const i = (c, p = []) => {
      V = c ? `select * from ${c}` : "", t = p, c && me();
    }, r = (c) => {
      console.log("..234234......", c), T = c;
    }, b = ee({
      props: ["ids", "server"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(c, p) {
        const { server: v } = $a(c), { ids: x = [] } = c, d = X([...x]), m = X([]), C = (n = []) => {
          m.length = 0, m.push(...n);
        }, K = (n) => n.data.map((e) => ({ label: e.displayName || e.name, type: n.type, value: e.id, data: e, isLeaf: e.columns != null })), Q = async (n) => {
          var e;
          if (n) {
            const o = await ie(n);
            C(K(o)), p.emit("up:database", (e = o.data) == null ? void 0 : e[0]);
          } else
            C();
        }, u = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !0, multiple: !1, checkStrictly: !1 }, Y = async (n, e) => {
          console.log("123123============>", n);
          const o = n.data;
          let S = [];
          if (o && o.children)
            S = o.children;
          else if (o && o.data && o.value) {
            const W = await ie(o.data);
            S = W.data.map((P) => ({ label: P.displayName || P.name, type: W.type, value: P.id, parent: o, data: P, isLeaf: P.columns != null }));
          }
          e(S);
        }, A = (n) => {
          if (!n.isLeaf)
            return;
          let e = n;
          const o = [n.data];
          for (; e != null && e.parent; )
            o.push(e.parent.data), e = e.parent;
          const S = o.reverse().map((P) => P.id), W = n.data.name;
          d.length = 0, d.push(...S), p.emit("up:database", o[0]), p.emit("up:ids", S), p.emit("up:name", W, o);
        };
        return v.value && Q(v.value), ve(v, (n, e) => {
          Q(n), e != null && (d.length = 0, p.emit("up:ids", []), p.emit("up:name", ""));
        }), () => $(pe, { modelValue: d, options: m, props: { ...u, lazyLoad: Y }, "onUpdate:modelValue": (n) => {
          console.log("------->", n);
        } }, {
          default: ({ data: n }) => $("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => A(n) }, [
            $("img", { style: "height:1em;max-height:1em;", src: O(n.type), title: `${n.type} - ${n.label}` }),
            $("span", n.label)
          ])
        });
      }
    }), me = Ea(() => {
      F("change", _.value, T, V, t);
    }, 500);
    return (c, p) => {
      var v, x;
      return y(), q("div", za, [
        B("div", Sa, [
          k(a(h), {
            class: "min-w-400",
            id: a(z),
            groups: a(J),
            "onUp:server": g,
            "onUp:id": p[0] || (p[0] = (d) => F("update:serverId", d))
          }, null, 8, ["id", "groups"]),
          k(a(b), {
            class: "min-w-400",
            ids: a(G),
            server: _.value,
            "onUp:ids": p[1] || (p[1] = (d) => F("update:schemaIds", d)),
            "onUp:database": r,
            "onUp:name": i
          }, null, 8, ["ids", "server"]),
          B("div", null, [
            a(I) != null ? (y(), ae(a(se), {
              key: 0,
              loading: s.value,
              icon: l[(v = _.value) == null ? void 0 : v.id] == !0 ? a(Oa) : a(Pa),
              type: l[(x = _.value) == null ? void 0 : x.id] == !0 ? "success" : "primary",
              onClick: w
            }, {
              default: D(() => {
                var d;
                return [
                  le(Da(l[(d = _.value) == null ? void 0 : d.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : Ia("", !0)
          ])
        ])
      ]);
    };
  }
}), Ba = {
  class: "comp-fields",
  flex: "",
  "w-full": "",
  "gap-20": "",
  "overflow-auto": ""
}, Ma = {
  "flex-1": "",
  class: "max-w-40% min-w-30%"
}, Ra = { "min-w-50": "" }, Ga = /* @__PURE__ */ B("div", { "h-50": "" }, null, -1), Ja = {
  "h-48": "",
  flex: "",
  "items-center": "",
  "justify-center": ""
}, Aa = {
  key: 0,
  class: "i-mingcute:arrow-right-fill w-2em h-2em c-#409EFF"
}, Ha = {
  key: 1,
  class: "i-nimbus:stop w-2em h-2em c-#ddd"
}, Ka = {
  "flex-2": "",
  "w-full": ""
}, Qa = /* @__PURE__ */ ee({
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
    const L = E, { inputProps: j, outputProps: R, formdata: z, outputFileds: G, inputFileds: J, data: I = [] } = L, F = M, O = Z(() => f(z, J) || []), s = Z(() => f(z, G) || []), l = Z(() => {
      const t = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, R || {});
      return a(s).map((i) => ({ label: f(i, t.label) || f(i, t.value), value: f(i, t.value), name: f(i, t.name) || f(i, t.value), type: f(i, t.type), remark: f(i, t.remark) })) || [];
    }), _ = Z(() => {
      const t = Object.assign({ name: "name", type: "type", remark: "remark" }, j || {});
      return a(O).map((i) => ({ name: f(i, t.name), type: f(i, t.type), remark: f(i, t.remark) }));
    }), g = ne(I), w = () => {
      const t = [];
      for (const i of a(_)) {
        const r = a(l).find((b) => b.name == i.name);
        r ? t.push({ ...r }) : t.push({});
      }
      g.value = t;
    };
    ve([O, s], ([t, i]) => {
      w(), i.length > 0 && t.length > 0 && V();
    });
    const h = (t, i) => {
      const r = a(l).find((b) => b.value == t);
      r && Object.assign(i.row, r), V();
    }, T = (t, i) => {
      t.row.$enabled = i, V();
    }, V = () => {
      if (a(g).length > 0) {
        const t = a(g).map((i, r) => i.$enabled == !1 ? void 0 : [_.value[r], { ...i }]).filter((i) => i != null);
        F("change", t), F("update:data", a(g));
      }
    };
    return Fa(() => {
      I.length != a(O).length && w();
    }), (t, i) => (y(), q("div", Ba, [
      B("div", Ma, [
        k(a(ue), {
          data: _.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: D(() => [
            k(a(U), {
              label: "输入表字段",
              prop: "name"
            }),
            k(a(U), {
              label: "类型",
              prop: "type",
              width: "120"
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      B("div", Ra, [
        Ga,
        (y(!0), q(_e, null, re(g.value, (r) => (y(), q("div", Ja, [
          r.$enabled != !1 ? (y(), q("div", Aa)) : (y(), q("div", Ha))
        ]))), 256))
      ]),
      B("div", Ka, [
        k(a(ue), {
          data: g.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: D(() => [
            k(a(U), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: D((r) => [
                k(a(oe), {
                  modelValue: r.row.name,
                  "onUpdate:modelValue": (b) => r.row.name = b,
                  disabled: r.row.$enabled == !1,
                  onChange: (b) => h(b, r),
                  size: "small"
                }, {
                  default: D(() => [
                    (y(!0), q(_e, null, re(l.value, (b) => (y(), ae(a(La), {
                      label: b.label,
                      value: b.value
                    }, null, 8, ["label", "value"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
              ]),
              _: 1
            }),
            k(a(U), {
              label: "类型",
              prop: "type",
              width: "120"
            }),
            k(a(U), {
              label: "主键",
              prop: "main",
              width: "80"
            }),
            k(a(U), {
              label: "操作",
              width: "120"
            }, {
              default: D((r) => [
                r.row.$enabled != !1 ? (y(), ae(a(se), {
                  key: 0,
                  size: "small",
                  onClick: ce(() => T(r, !1), ["stop"])
                }, {
                  default: D(() => [
                    le("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (y(), ae(a(se), {
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
}), it = (E) => {
  const M = "TableOutput", L = {
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
    ports: { items: [{ id: "in", group: "left" }] }
  }, j = async (s, l) => {
    const _ = ge(s, l);
    return await E.api.testConnect({ connection: _ });
  }, R = (s, l) => {
    console.log(l, s);
  }, z = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "Y", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: "N", ignore_errors: "Y", use_batch: "Y", specify_fields: "Y", partitioning_enabled: "N", partitioning_field: "", partitioning_daily: "N", partitioning_monthly: "Y", tablename_in_field: "N", tablename_field: "", tablename_in_table: "N", return_keys: "N", return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, G = async (s, l) => {
    const [_, g, w, h] = l;
    if (console.log("initFields ====> ", l, g, w, h), !_) {
      de.warning("请选择数据源");
      return;
    }
    if (!g || !w) {
      de.warning("请选择数据表");
      return;
    }
    h && h[1] && H(s, "schema", h[1].name), h && h[2] && H(s, "table", h[2].name), H(s, "connection", _.id);
    const T = ge(_, g), V = await E.api.getFieldInfo({ connectionDetailVO: { connection: T }, querySql: w });
    V && H(s, "$fields", V);
  }, J = (s, l) => {
    if (l && l.length > 0) {
      const _ = l.map(([g, w]) => ({ stream_name: g.name, column_name: w.name }));
      H(s, "fields", { field: _ });
    }
  };
  return { name: M, step: z, markup: L, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Ua, "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$tableIds", "@change": ({ formData: s, $: l }) => G(s, l), testConnect: j },
      { tag: te },
      { tag: ja, label: "数据入表方式", prop: "$truncate", tip: { content: `
  <p>清空覆盖：删除表数据后再插入新数据</p>
  <p>追加：将数据直接追加到表中，如果遇到主键（唯一约束）冲突，则直接报错并结束</p>
  <p>插入且更新：将数据追加到表中，遇到主键冲突时覆盖这条数据</p>
  <p>插入不更新：只追加不同主键的数据，相同主键的数据直接舍弃</p>
  `, rawContent: !0 }, "@change": ({ formData: s, $: l }) => R(s, l[0]), cls: [{ cls: "清空覆盖", label: "over" }, { cls: "追加", label: "insert" }, { cls: "插入且更新", label: "update" }, { cls: "插入不更新", label: "add" }] },
      { tag: te },
      { tag: Qa, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: s, $: l }) => J(s, l[0]) }
    ] },
    { type: "form", label: "高级配置", column: [
      { label: "提交记录数量", prop: "commit" },
      { label: "裁剪表", tag: N, prop: "truncate", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "忽略插入错误", tag: N, prop: "ignore_errors", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "指定数据可字段", tag: N, prop: "specify_fields", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      // {prop:"",label:"",tag:ElSwitch,trueLabel:"Y",falseLabel:"N"}
      { tag: te, cls: "主选项" },
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
  it as default
};
