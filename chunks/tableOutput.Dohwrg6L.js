import "../css/tableOutput-DWvU-FoH.css";
import { _ as be, a as fe, b as he, c as ye, d as ke, e as we, f as xe, g as Ne, h as Te, i as Ve, j as Ce, k as Ye, l as $e, m as De, n as Ie, o as Fe, p as Oe, q as Pe, r as qe, s as Ee, t as Le, u as je, v as ze, w as Se, x as Ue, y as Be, z as Me, A as Re, B as Ge, C as Je, D as Ae, E as He, F as Ke, G as Qe, H as We, I as Xe, J as Ze, K as ea, L as aa, M as ta, N as ia, O as na, P as la, Q as sa, R as oa, S as _a, T as ra, U as ca, V as pa, W as ua, X as da, Y as ga, Z as va, $ as ma, a0 as ba, a1 as fa, a2 as ha, a3 as ya, a4 as ka, a5 as wa, a6 as xa, a7 as Na, a8 as Ta, a9 as Va, aa as Ca, ab as Ya } from "./table.DtQlpGd_.js";
import { defineComponent as ee, ref as ne, reactive as X, h as I, toRefs as $a, watch as ve, openBlock as y, createElementBlock as E, createElementVNode as M, createVNode as k, unref as a, createBlock as ae, withCtx as F, createTextVNode as le, toDisplayString as Da, createCommentVNode as Ia, computed as Z, onMounted as Fa, Fragment as _e, renderList as re, withModifiers as ce } from "vue";
import { bc as pe, f as se, aB as Oa, bg as Pa, _ as qa, aJ as Ea, g as f, d as ue, e as B, ap as oe, aI as La, O as te, an as ja, aq as T, a as de, ar as K } from "./vendor.CawUkpaF.js";
import { b as ie } from "./api.CF1BbFLh.js";
import { u as ge } from "./index.C0b9TJO1.js";
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
  setup(L, { emit: R }) {
    const j = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": be, "./icon/airflow.png": fe, "./icon/amazon-s3.png": he, "./icon/amundsen.png": ye, "./icon/athena.png": ke, "./icon/atlas.png": we, "./icon/azuresql.png": xe, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": Te, "./icon/databrick.png": Ve, "./icon/dbt.png": Ce, "./icon/delta-lake.png": Ye, "./icon/domo.png": $e, "./icon/doris.png": De, "./icon/druid.png": Ie, "./icon/dynamodb.png": Fe, "./icon/glue.png": Oe, "./icon/googleCloudService.png": Pe, "./icon/hive.png": qe, "./icon/ibmdb2.png": Ee, "./icon/iceberg.png": Le, "./icon/impala.png": je, "./icon/kafka.png": ze, "./icon/kinesis.png": Se, "./icon/looker.png": Ue, "./icon/mariadb.png": Be, "./icon/metabase.png": Me, "./icon/mlflow.png": Re, "./icon/mode.png": Ge, "./icon/mongodb.png": Je, "./icon/mssql.png": Ae, "./icon/mysql.png": He, "./icon/oracle.png": Ke, "./icon/pinot.png": Qe, "./icon/postgres.png": We, "./icon/power-bi.png": Xe, "./icon/presto.png": Ze, "./icon/qliksense.png": ea, "./icon/quicksight.png": aa, "./icon/redash.png": ta, "./icon/redpanda.png": ia, "./icon/redshift.png": na, "./icon/sagemaker.png": la, "./icon/salesforce.png": sa, "./icon/saphana.png": oa, "./icon/singlestore.png": _a, "./icon/snowflakes.png": ra, "./icon/sqlalchemy.png": ca, "./icon/sqlite.png": pa, "./icon/superset.png": ua, "./icon/tableau.png": da, "./icon/trino.png": ga, "./icon/vertica.png": va }), z = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ma, "./svg/database.svg": ba, "./svg/field.svg": fa, "./svg/icon_clickhouse.svg": ha, "./svg/liebiaoziduanguanli.svg": ya, "./svg/mongodb.svg": ka, "./svg/mysql.svg": wa, "./svg/oracle.svg": xa, "./svg/postgresql.svg": Na, "./svg/schema.svg": Ta, "./svg/server.svg": Va, "./svg/shujuku.svg": Ca, "./svg/table.svg": Ya }), G = L, { serverId: S, schemaIds: J, groups: A, testConnect: O } = G, P = R, q = (c, p) => {
      let v = "";
      const x = c.toLowerCase();
      if (p && p == "group") {
        const m = (Object.keys(j) || []).find(($) => $.includes(x));
        m && (v = j[m].default);
      } else {
        const m = (Object.keys(z) || []).find(($) => $.includes(x));
        m && (v = z[m].default);
      }
      return v;
    }, s = ne(!1), l = X({}), _ = ne(), g = (c) => {
      _.value = c;
    }, w = async () => {
      if (O) {
        s.value = !0;
        try {
          console.log("testConnect....", V);
          const c = await O(_.value, V);
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
          const u = await ie(), D = qa(u.data, "serviceType"), n = Object.keys(D).filter((e) => x.length > 0 ? x.includes(e) : !0).map((e) => ({ label: e, value: e, data: e, icon: e, type: "group", children: D[e].map((o) => ({ group: e, label: o.displayName || o.name, type: u.type, value: o.id, data: o, isLeaf: !0 })) }));
          if (m.push(...n), v) {
            const e = u.data.find((o) => o.id == v);
            p.emit("up:server", e);
          }
        };
        let Q = v;
        const W = (u) => {
          if (u.isLeaf) {
            const D = u.value, H = u.data;
            Q = D, p.emit("up:id", D), p.emit("up:server", H), console.log("Server --------------", D, H);
          }
        };
        return $(), () => I(pe, { modelValue: Q, options: m, props: { ...d } }, {
          default: ({ data: u }) => I("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => W(u) }, [
            I("img", { style: "height:1em;max-height:1em;", src: q(u.type == "group" ? u.label : u.type, u.type), title: `${u.type} - ${u.label}` }),
            I("span", u.label)
          ])
        });
      }
    });
    let V, C = "", t = [];
    const i = (c, p = []) => {
      C = c ? `select * from ${c}` : "", t = p, c && me();
    }, r = (c) => {
      console.log("..234234......", c), V = c;
    }, b = ee({
      props: ["ids", "server"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(c, p) {
        const { server: v } = $a(c), { ids: x = [] } = c, d = X([...x]), m = X([]), $ = (n = []) => {
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
        }, H = (n) => {
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
        }), () => I(pe, { modelValue: d, options: m, props: { ...u, lazyLoad: D }, "onUpdate:modelValue": (n) => {
          console.log("------->", n);
        } }, {
          default: ({ data: n }) => I("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => H(n) }, [
            I("img", { style: "height:1em;max-height:1em;", src: q(n.type), title: `${n.type} - ${n.label}` }),
            I("span", n.label)
          ])
        });
      }
    }), me = Ea(() => {
      P("change", _.value, V, C, t);
    }, 500);
    return (c, p) => {
      var v, x;
      return y(), E("div", za, [
        M("div", Sa, [
          k(a(h), {
            class: "min-w-400",
            id: a(S),
            groups: a(A),
            "onUp:server": g,
            "onUp:id": p[0] || (p[0] = (d) => P("update:serverId", d))
          }, null, 8, ["id", "groups"]),
          k(a(b), {
            class: "min-w-400",
            ids: a(J),
            server: _.value,
            "onUp:ids": p[1] || (p[1] = (d) => P("update:schemaIds", d)),
            "onUp:database": r,
            "onUp:name": i
          }, null, 8, ["ids", "server"]),
          M("div", null, [
            a(O) != null ? (y(), ae(a(se), {
              key: 0,
              loading: s.value,
              icon: l[(v = _.value) == null ? void 0 : v.id] == !0 ? a(Oa) : a(Pa),
              type: l[(x = _.value) == null ? void 0 : x.id] == !0 ? "success" : "primary",
              onClick: w
            }, {
              default: F(() => {
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
}, Ra = { "min-w-50": "" }, Ga = /* @__PURE__ */ M("div", { "h-50": "" }, null, -1), Ja = {
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
  setup(L, { emit: R }) {
    const j = L, { inputProps: z, outputProps: G, formdata: S, outputFileds: J, inputFileds: A, data: O = [] } = j, P = R, q = Z(() => f(S, A) || []), s = Z(() => f(S, J) || []), l = Z(() => {
      const t = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, G || {});
      return a(s).map((i) => ({ label: f(i, t.label) || f(i, t.value), value: f(i, t.value), name: f(i, t.name) || f(i, t.value), type: f(i, t.type), remark: f(i, t.remark) })) || [];
    }), _ = Z(() => {
      const t = Object.assign({ name: "name", type: "type", remark: "remark" }, z || {});
      return a(q).map((i) => ({ name: f(i, t.name), type: f(i, t.type), remark: f(i, t.remark) }));
    }), g = ne(O), w = () => {
      const t = [];
      for (const i of a(_)) {
        const r = a(l).find((b) => b.name == i.name);
        r ? t.push({ ...r }) : t.push({});
      }
      g.value = t;
    };
    ve([q, s], ([t, i]) => {
      w(), i.length > 0 && t.length > 0 && C();
    });
    const h = (t, i) => {
      const r = a(l).find((b) => b.value == t);
      r && Object.assign(i.row, r), C();
    }, V = (t, i) => {
      t.row.$enabled = i, C();
    }, C = () => {
      if (a(g).length > 0) {
        const t = a(g).map((i, r) => i.$enabled == !1 ? void 0 : [_.value[r], { ...i }]).filter((i) => i != null);
        P("change", t), P("update:data", a(g));
      }
    };
    return Fa(() => {
      O.length != a(q).length && w();
    }), (t, i) => (y(), E("div", Ba, [
      M("div", Ma, [
        k(a(ue), {
          data: _.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: F(() => [
            k(a(B), {
              label: "输入表字段",
              prop: "name"
            }),
            k(a(B), {
              label: "类型",
              prop: "type",
              width: "120"
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      M("div", Ra, [
        Ga,
        (y(!0), E(_e, null, re(g.value, (r) => (y(), E("div", Ja, [
          r.$enabled != !1 ? (y(), E("div", Aa)) : (y(), E("div", Ha))
        ]))), 256))
      ]),
      M("div", Ka, [
        k(a(ue), {
          data: g.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: F(() => [
            k(a(B), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: F((r) => [
                k(a(oe), {
                  modelValue: r.row.name,
                  "onUpdate:modelValue": (b) => r.row.name = b,
                  disabled: r.row.$enabled == !1,
                  onChange: (b) => h(b, r),
                  size: "small"
                }, {
                  default: F(() => [
                    (y(!0), E(_e, null, re(l.value, (b) => (y(), ae(a(La), {
                      label: b.label,
                      value: b.value
                    }, null, 8, ["label", "value"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
              ]),
              _: 1
            }),
            k(a(B), {
              label: "类型",
              prop: "type",
              width: "120"
            }),
            k(a(B), {
              label: "主键",
              prop: "main",
              width: "80"
            }),
            k(a(B), {
              label: "操作",
              width: "120"
            }, {
              default: F((r) => [
                r.row.$enabled != !1 ? (y(), ae(a(se), {
                  key: 0,
                  size: "small",
                  onClick: ce(() => V(r, !1), ["stop"])
                }, {
                  default: F(() => [
                    le("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (y(), ae(a(se), {
                  key: 1,
                  size: "small",
                  onClick: ce(() => V(r, !0), ["stop"])
                }, {
                  default: F(() => [
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
}), it = (L) => {
  const R = "TableOutput", j = {
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
    ports: { items: [{ id: "in", group: "left" }] }
  }, z = async (s, l) => {
    const _ = ge(s, l);
    return await L.api.testConnect({ connection: _ });
  }, G = (s, l) => {
    console.log(l, s);
  }, S = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "Y", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: "N", ignore_errors: "Y", use_batch: "Y", specify_fields: "Y", partitioning_enabled: "N", partitioning_field: "", partitioning_daily: "N", partitioning_monthly: "Y", tablename_in_field: "N", tablename_field: "", tablename_in_table: "N", return_keys: "N", return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, J = async (s, l) => {
    const [_, g, w, h] = l;
    if (console.log("initFields ====> ", l, g, w, h), !_) {
      de.warning("请选择数据源");
      return;
    }
    if (!g || !w) {
      de.warning("请选择数据表");
      return;
    }
    h && h[1] && K(s, "schema", h[1].name), h && h[2] && K(s, "table", h[2].name), K(s, "connection", _.id);
    const V = ge(_, g), C = await L.api.getFieldInfo({ connectionDetailVO: { connection: V }, querySql: w });
    C && K(s, "$fields", C);
  }, A = (s, l) => {
    if (l && l.length > 0) {
      const _ = l.map(([g, w]) => ({ stream_name: g.name, column_name: w.name }));
      K(s, "fields", { field: _ });
    }
  };
  return { name: R, step: S, markup: j, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Ua, "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$tableIds", "@change": ({ formData: s, $: l }) => J(s, l), testConnect: z },
      { tag: te },
      { tag: ja, label: "数据入表方式", prop: "$truncate", tip: { content: `
  <p>清空覆盖：删除表数据后再插入新数据</p>
  <p>追加：将数据直接追加到表中，如果遇到主键（唯一约束）冲突，则直接报错并结束</p>
  <p>插入且更新：将数据追加到表中，遇到主键冲突时覆盖这条数据</p>
  <p>插入不更新：只追加不同主键的数据，相同主键的数据直接舍弃</p>
  `, rawContent: !0 }, "@change": ({ formData: s, $: l }) => G(s, l[0]), cls: [{ cls: "清空覆盖", label: "over" }, { cls: "追加", label: "insert" }, { cls: "插入且更新", label: "update" }, { cls: "插入不更新", label: "add" }] },
      { tag: te },
      { tag: Qa, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: s, $: l }) => A(s, l[0]) }
    ] },
    { type: "form", label: "高级配置", column: [
      { label: "提交记录数量", prop: "commit" },
      { label: "裁剪表", tag: T, prop: "truncate", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "忽略插入错误", tag: T, prop: "ignore_errors", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "指定数据可字段", tag: T, prop: "specify_fields", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      // {prop:"",label:"",tag:ElSwitch,trueLabel:"Y",falseLabel:"N"}
      { tag: te, cls: "主选项" },
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
  it as default
};
