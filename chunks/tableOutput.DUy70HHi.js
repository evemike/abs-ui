import "../css/tableOutput-DWvU-FoH.css";
import { b as ye, c as ke, d as we, e as xe, h as Te, i as Ne, j as Ce, k as Ve, l as Pe, m as $e, n as De, p as Ie, q as Fe, r as qe, s as Oe, t as Ye, u as Le, v as je, w as Se, x as Ee, y as ze, z as Be, A as Re, B as Ue, C as Ae, D as Me, F as Xe, H as Ge, I as Ke, J as Qe, K as He, L as Je, M as We, N as Ze, O as ea, P as aa, Q as ta, R as la, S as na, T as ia, U as sa, V as oa, W as _a, X as ra, Y as ca, Z as da, $ as pa, a0 as ua, a1 as ga, a2 as ba, a3 as va, a4 as ma, a5 as fa, a6 as ha, a7 as ya, a8 as ka, a9 as wa, aa as xa, ab as Ta, ac as Na, ad as Ca, ae as Va, af as Pa, ag as $a, ah as Da, ai as Ia, aj as oe, ak as _e, al as X } from "./index.Dh7tBm9V.js";
import { defineComponent as ve, ref as S, openBlock as f, createElementBlock as D, createVNode as x, unref as a, withCtx as y, createElementVNode as T, createBlock as E, toDisplayString as Z, isRef as Fa, createTextVNode as te, createCommentVNode as re, markRaw as ce, computed as G, watch as qa, onMounted as Oa, Fragment as de, renderList as pe, withModifiers as ue } from "vue";
import { aj as ge, o as ee, f as le, b6 as Ya, _ as La, g as h, d as be, e as j, af as ne, ad as ja, O as ae, as as Sa, aq as N, an as C } from "./vendor.BI0B3R_R.js";
const Ea = {
  key: 0,
  flex: "",
  "items-center": "",
  "gap-16": "",
  "h-40": ""
}, za = /* @__PURE__ */ T("span", {
  "w-120": "",
  "text-nowrap": ""
}, "选择数据源", -1), Ba = {
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Ra = ["src"], Ua = ["src"], Aa = {
  flex: "",
  "items-center": "",
  "gap-4": ""
}, Ma = ["src"], Xa = /* @__PURE__ */ ve({
  __name: "data-table",
  props: {
    cascaderProps: { default: () => ({ label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !1 }) },
    loadCascaderData: {},
    treeProps: { default: () => ({ label: "label", isLeaf: "isLeaf", children: "children" }) },
    loadTreeData: {},
    preview: {},
    linkTest: {},
    treeNodeClick: {},
    formatConnection: {},
    getSql: {},
    leafType: { default: "table" },
    autoSql: { type: Boolean, default: !0 },
    showCascader: { type: Boolean, default: !0 },
    showSql: { type: Boolean, default: !0 },
    showConfig: { type: Boolean, default: !1 },
    showPreivew: { type: Boolean, default: !0 },
    showLink: { type: Boolean, default: !0 },
    sqlQuery: {},
    serverId: {},
    server: {},
    tableIds: {},
    database: {},
    schema: {},
    table: {},
    field: {},
    tableData: {}
  },
  emits: ["update:connection", "update:server", "update:serverId", "update:tableIds", "update:database", "update:schema", "update:table", "update:field", "update:tableData", "change"],
  setup(z, { expose: B, emit: R }) {
    const F = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": ye, "./icon/airflow.png": ke, "./icon/amazon-s3.png": we, "./icon/amundsen.png": xe, "./icon/athena.png": Te, "./icon/atlas.png": Ne, "./icon/azuresql.png": Ce, "./icon/bigquery.png": Ve, "./icon/clickhouse.png": Pe, "./icon/databrick.png": $e, "./icon/dbt.png": De, "./icon/delta-lake.png": Ie, "./icon/domo.png": Fe, "./icon/doris.png": qe, "./icon/druid.png": Oe, "./icon/dynamodb.png": Ye, "./icon/glue.png": Le, "./icon/googleCloudService.png": je, "./icon/hive.png": Se, "./icon/ibmdb2.png": Ee, "./icon/iceberg.png": ze, "./icon/impala.png": Be, "./icon/kafka.png": Re, "./icon/kinesis.png": Ue, "./icon/looker.png": Ae, "./icon/mariadb.png": Me, "./icon/metabase.png": Xe, "./icon/mlflow.png": Ge, "./icon/mode.png": Ke, "./icon/mongodb.png": Qe, "./icon/mssql.png": He, "./icon/mysql.png": Je, "./icon/oracle.png": We, "./icon/pinot.png": Ze, "./icon/postgres.png": ea, "./icon/power-bi.png": aa, "./icon/presto.png": ta, "./icon/qliksense.png": la, "./icon/quicksight.png": na, "./icon/redash.png": ia, "./icon/redpanda.png": sa, "./icon/redshift.png": oa, "./icon/sagemaker.png": _a, "./icon/salesforce.png": ra, "./icon/saphana.png": ca, "./icon/singlestore.png": da, "./icon/snowflakes.png": pa, "./icon/sqlalchemy.png": ua, "./icon/sqlite.png": ga, "./icon/superset.png": ba, "./icon/tableau.png": va, "./icon/trino.png": ma, "./icon/vertica.png": fa }), V = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ha, "./svg/database.svg": ya, "./svg/field.svg": ka, "./svg/icon_clickhouse.svg": wa, "./svg/liebiaoziduanguanli.svg": xa, "./svg/mongodb.svg": Ta, "./svg/mysql.svg": Na, "./svg/oracle.svg": Ca, "./svg/postgresql.svg": Va, "./svg/schema.svg": Pa, "./svg/server.svg": $a, "./svg/shujuku.svg": Da, "./svg/table.svg": Ia }), q = z, m = R, { showLink: U, leafType: O, loadCascaderData: P, linkTest: $, formatConnection: Y, serverId: L = "", server: t = {}, tableIds: l = [] } = q, r = S(L);
    let s = t;
    const k = S(), w = S(), i = (d) => {
      const p = b(d);
      s = p, m("update:server", p), m("update:serverId", d), Y && m("update:connection", Y(p)), A.value = !1, c = [];
    };
    let n = [];
    const _ = async (d, p) => {
      let e = [];
      if (P)
        e = await P();
      else {
        const o = await oe(), u = La(o.data, "serviceType");
        e = Object.keys(u).map((g) => ({ label: g, value: g, data: g, icon: g, type: "group", children: u[g].map((v) => ({ id: v.id, label: v.displayName || v.name, type: o.type, value: v.id, data: ce(v), isLeaf: !0 })) })), n = [].concat(...e.map((g) => g.children));
      }
      p(e);
    };
    let c = l;
    const K = async (d, p) => {
      let e = [];
      const o = d.data, u = o.label ? o.data : s;
      if (u && u.type != O)
        if (P)
          e = await P(u);
        else {
          const g = await oe(u);
          e = g.data.map((v) => ({ label: v.displayName || v.name, type: g.type, value: v.id, data: ce(v), isLeaf: g.type == O }));
        }
      p(e);
    }, Q = (d) => {
      var g, v, I, ie;
      const p = ((v = (g = w.value) == null ? void 0 : g.cascaderPanelRef) == null ? void 0 : v.menus) || [], e = [];
      let o = 0;
      for (const J of d) {
        const he = p[o];
        e[o] = (ie = (I = he.find((W) => {
          var se;
          return ((se = W == null ? void 0 : W.data) == null ? void 0 : se.data.id) == J;
        })) == null ? void 0 : I.data) == null ? void 0 : ie.data, o++;
      }
      o > 0 && m("update:database", e[0]), o > 1 && m("update:schema", e[1]), o > 2 && m("update:table", e[2]), o > 3 && m("update:field", e[3]);
      let u = "";
      o > 2 && (u = me([e[0], e[1], e[2]].map((J) => J.name), s == null ? void 0 : s.serviceType)), m("update:tableIds", d), m("update:tableData", e), m("change", { tableIds: d, tableData: e, server: s, serverId: r.value, sql: u });
    }, b = (d) => {
      var p, e;
      return (e = (p = n.filter((o) => o.id == d)) == null ? void 0 : p[0]) == null ? void 0 : e.data;
    }, M = {
      Postgres: ['"', "", ""]
    }, me = (d, p) => {
      var g;
      let e = p || "";
      e || (e = ((g = b(a(r))) == null ? void 0 : g.serviceType) || "");
      const o = h(M, e) || [];
      return `select * from ${d.map((v, I) => `${o[I] ? o[I] : ""}${v}${o[I] ? o[I] : ""}`).join(".")}`;
    }, A = S(!1), H = S(!1), fe = async () => {
      H.value = !0;
      try {
        A.value = await ($ == null ? void 0 : $(s)) || !1;
      } catch (d) {
        console.warn("testLink error ==> ", d);
      }
      H.value = !1;
    };
    return B({
      serverRef: k,
      dataRef: w,
      selectDataServer: s
    }), (d, p) => (f(), D("div", null, [
      d.showCascader ? (f(), D("div", Ea, [
        za,
        x(a(ge), {
          "flex-1": "",
          ref_key: "serverRef",
          ref: k,
          modelValue: r.value,
          "onUpdate:modelValue": p[0] || (p[0] = (e) => r.value = e),
          onChange: i,
          props: { ...d.cascaderProps, lazyLoad: _ }
        }, {
          default: y(({ data: e }) => [
            T("div", Ba, [
              e.type == "group" ? (f(), E(a(ee), {
                key: 0,
                title: e.label
              }, {
                default: y(() => {
                  var o;
                  return [
                    T("img", {
                      src: ((o = a(F)[Object.keys(a(F)).find((u) => u.includes(e.label.toLowerCase())) || ""]) == null ? void 0 : o.default) || ""
                    }, null, 8, Ra)
                  ];
                }),
                _: 2
              }, 1032, ["title"])) : (f(), E(a(ee), {
                key: 1,
                title: e.type
              }, {
                default: y(() => {
                  var o;
                  return [
                    T("img", {
                      src: (o = a(V)[Object.keys(a(V)).find((u) => u.includes(e.type)) || ""]) == null ? void 0 : o.default
                    }, null, 8, Ua)
                  ];
                }),
                _: 2
              }, 1032, ["title"])),
              T("span", null, Z(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        x(a(ge), {
          "flex-1": "",
          ref_key: "dataRef",
          ref: w,
          modelValue: a(c),
          "onUpdate:modelValue": p[1] || (p[1] = (e) => Fa(c) ? c.value = e : c = e),
          onChange: Q,
          props: { ...d.cascaderProps, lazyLoad: K, emitPath: !0 }
        }, {
          default: y(({ data: e }) => [
            T("div", Aa, [
              x(a(ee), {
                title: e.type
              }, {
                default: y(() => {
                  var o;
                  return [
                    T("img", {
                      src: (o = a(V)[Object.keys(a(V)).find((u) => u.includes(e.type)) || ""]) == null ? void 0 : o.default
                    }, null, 8, Ma)
                  ];
                }),
                _: 2
              }, 1032, ["title"]),
              T("span", null, Z(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        a(U) ? (f(), E(a(le), {
          key: 0,
          text: "",
          type: A.value ? "success" : "primary",
          disabled: A.value,
          icon: a(Ya),
          loading: H.value,
          onClick: fe
        }, {
          default: y(() => [
            te(Z(A.value ? "连接成功" : "测试连接"), 1)
          ]),
          _: 1
        }, 8, ["type", "disabled", "icon", "loading"])) : re("", !0)
      ])) : re("", !0)
    ]));
  }
}), Ga = {
  class: "comp-fields",
  flex: "",
  "w-full": "",
  "gap-20": "",
  "overflow-auto": ""
}, Ka = {
  "flex-1": "",
  class: "max-w-40% min-w-30%"
}, Qa = { "min-w-50": "" }, Ha = /* @__PURE__ */ T("div", { "h-50": "" }, null, -1), Ja = {
  "h-48": "",
  flex: "",
  "items-center": "",
  "justify-center": ""
}, Wa = {
  key: 0,
  class: "i-mingcute:arrow-right-fill w-2em h-2em c-#409EFF"
}, Za = {
  key: 1,
  class: "i-solar:close-square-bold w-2em h-2em c-rose"
}, et = {
  "flex-2": "",
  "w-full": ""
}, at = /* @__PURE__ */ ve({
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
  setup(z, { emit: B }) {
    const R = z, { inputProps: F, outputProps: V, formdata: q, outputFileds: m, inputFileds: U, data: O = [] } = R, P = B, $ = G(() => h(q, U) || []), Y = G(() => h(q, m) || []), L = G(() => {
      const i = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, V || {});
      return a(Y).map((n) => ({ label: h(n, i.label) || h(n, i.value), value: h(n, i.value), name: h(n, i.name) || h(n, i.value), type: h(n, i.type), remark: h(n, i.remark) })) || [];
    }), t = G(() => {
      const i = Object.assign({ name: "name", type: "type", remark: "remark" }, F || {});
      return a($).map((n) => ({ name: h(n, i.name), type: h(n, i.type), remark: h(n, i.remark) }));
    }), l = S(O), r = () => {
      const i = [];
      for (const n of a(t)) {
        const _ = a(L).find((c) => c.name == n.name);
        _ ? i.push({ ..._ }) : i.push({ ...n });
      }
      l.value = i;
    };
    qa([$, Y], ([i, n]) => {
      i.length > 0 && n.length > 0 && (r(), w());
    });
    const s = (i, n) => {
      const _ = a(L).find((c) => c.value == i);
      _ && Object.assign(n.row, _), console.log("....", l.value), w();
    }, k = (i, n) => {
      i.row.$enabled = n, w();
    }, w = () => {
      if (a(l).length > 0) {
        const i = a(l).map((n, _) => n.$enabled == !1 ? void 0 : [t.value[_], { ...n }]).filter((n) => n != null);
        P("change", i), P("update:data", a(l));
      }
    };
    return Oa(() => {
      if (O.length == 0 && a($).length > 0) {
        debugger;
        r();
      }
    }), (i, n) => (f(), D("div", Ga, [
      T("div", Ka, [
        x(a(be), {
          data: t.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: y(() => [
            x(a(j), {
              label: "输入表字段",
              prop: "name"
            }),
            x(a(j), {
              label: "类型",
              prop: "type",
              width: "120"
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      T("div", Qa, [
        Ha,
        (f(!0), D(de, null, pe(l.value, (_) => (f(), D("div", Ja, [
          _.$enabled != !1 ? (f(), D("div", Wa)) : (f(), D("div", Za))
        ]))), 256))
      ]),
      T("div", et, [
        x(a(be), {
          data: l.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: y(() => [
            x(a(j), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: y((_) => [
                x(a(ne), {
                  modelValue: _.row.name,
                  "onUpdate:modelValue": (c) => _.row.name = c,
                  disabled: _.row.$enabled == !1,
                  onChange: (c) => s(c, _),
                  size: "small"
                }, {
                  default: y(() => [
                    (f(!0), D(de, null, pe(L.value, (c) => (f(), E(a(ja), {
                      label: c.label,
                      value: c.value
                    }, null, 8, ["label", "value"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
              ]),
              _: 1
            }),
            x(a(j), {
              label: "类型",
              prop: "type",
              width: "120"
            }),
            x(a(j), {
              label: "主键",
              prop: "main",
              width: "80"
            }),
            x(a(j), {
              label: "操作",
              width: "120"
            }, {
              default: y((_) => [
                _.row.$enabled != !1 ? (f(), E(a(le), {
                  key: 0,
                  size: "small",
                  onClick: ue(() => k(_, !1), ["stop"])
                }, {
                  default: y(() => [
                    te("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (f(), E(a(le), {
                  key: 1,
                  size: "small",
                  onClick: ue(() => k(_, !0), ["stop"])
                }, {
                  default: y(() => [
                    te("恢复")
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
}), st = () => {
  const z = "TableOutput", B = {
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
    ports: { items: [{ id: "in", group: "left" }] }
  }, R = async (t) => {
    const l = X.PREFIX + "/database/testConnect", r = _e(t), s = await X.POST(l, { connection: r });
    return s.result || s.content;
  }, F = (t, l) => {
    console.log(l, t);
  }, V = async (t) => {
    const l = X.PREFIX + "/database/getFieldInfo", r = await X.POST(l, t);
    return r.result || r.content || [];
  }, q = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "Y", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: !1, ignore_errors: !1, use_batch: !0, specify_fields: !0, partitioning_enabled: !1, partitioning_field: "", partitioning_daily: !1, partitioning_monthly: !0, tablename_in_field: !1, tablename_field: "", tablename_in_table: !1, return_keys: !1, return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, m = async (t, l) => {
    const { tableData: r, server: s, tableIds: k, sql: w } = l;
    if (C(t, "$tableIds", k), C(t, "$server", s), s && r) {
      r[1] && C(t, "schema", r[1].name), r[2] && C(t, "table", r[2].name);
      const i = _e(s);
      C(t, "connection", s.id), C(t, "$connection", { ...i, name: s.id, dataSourceName: s.name, dsName: s.name, dataSourceId: s.id });
      const _ = await V({
        connectionDetailVO: { connection: i },
        querySql: w
      });
      _ && C(t, "$fields", _);
    } else
      console.error("没有获取到足够的数据来初始化字段 ===> ", t);
  }, U = (t, l) => {
    if (l && l.length > 0) {
      const r = l.map(([s, k]) => ({ column_name: s.name, stream_name: k.name }));
      C(t, "fields", { field: r });
    }
  };
  return { name: z, step: q, markup: B, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Xa, "v-model:serverId": "formData.$serverId", ":server": "formData.$server", ":tableIds": "formData.$tableIds", "@change": ({ formData: t, $: l }) => m(t, l[0]), linkTest: R },
      { tag: ae },
      { tag: Sa, label: "数据入表方式", prop: "$truncate", tip: { content: `
  <p>清空覆盖：删除表数据后再插入新数据</p>
  <p>追加：将数据直接追加到表中，如果遇到主键（唯一约束）冲突，则直接报错并结束</p>
  <p>插入且更新：将数据追加到表中，遇到主键冲突时覆盖这条数据</p>
  <p>插入不更新：只追加不同主键的数据，相同主键的数据直接舍弃</p>
  `, rawContent: !0 }, "@change": ({ formData: t, $: l }) => F(t, l[0]), cls: [{ cls: "清空覆盖", label: "over" }, { cls: "追加", label: "insert" }, { cls: "插入且更新", label: "update" }, { cls: "插入不更新", label: "add" }] },
      { tag: ae },
      { tag: at, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: t, $: l }) => U(t, l[0]) }
    ] },
    { type: "form", label: "高级配置", column: [
      { label: "提交记录数量", prop: "commit" },
      { label: "裁剪表", tag: N, prop: "truncate", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "忽略插入错误", tag: N, prop: "ignore_errors", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      // {label:"指定数据可字段",tag:ElSwitch,prop:"specify_fields", activeValue: "Y", inactiveValue: "N",inlinePrompt: true, activeText: "Y", inactiveText: "N"},
      // {prop:"",label:"",tag:ElSwitch,trueLabel:"Y",falseLabel:"N"}
      { tag: ae, cls: "主选项" },
      { label: "表分区数据", tag: N, prop: "partitioning_enabled", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "分区字段", tag: ne, prop: "partitioning_field", cls: [] },
      //  item in step.outFields
      { label: "每月分区数据", tag: N, prop: "partitioning_daily", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "每天分区数据", tag: N, prop: "partitioning_monthly", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "使用批量插入", tag: N, prop: "use_batch", ":disabled": "formData['return_keys'] == true", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "表名定义在一个字段里", tag: N, prop: "tablename_in_field", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "包含表名的字段", tag: ne, prop: "tablename_field", clearable: !0, ":disabled": "formData['tablename_in_field'] == 'N'", cls: [] },
      { label: "存储表名字段", tag: N, prop: "tablename_in_table", ":disabled": "formData['tablename_in_field'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "返回一个自动产生的关键字", tag: N, prop: "return_keys", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "自动产生关键字的名称", prop: "return_field", ":disabled": "formData['return_keys'] == 'N'" }
    ] }
  ], submit: async (t, l) => {
    var s;
    ((s = l.form) == null ? void 0 : s.getCellFormData(t)) != null;
  }, open: (t, l) => {
    var k, w, i, n, _;
    const r = ((k = l.form) == null ? void 0 : k.getCellFormData(t)) || {}, s = (w = l.shadow) == null ? void 0 : w.get(t);
    if (s) {
      const c = [], K = s.prevNodes, Q = Array.from(K).map((b) => {
        var M;
        return (M = l.form) == null ? void 0 : M.getCellFormData(b);
      });
      for (const b of Q)
        b && (b.outFields || b.fields) && (((i = b == null ? void 0 : b.outFields) == null ? void 0 : i.length) > 0 ? c.push(...b.outFields) : ((_ = (n = b == null ? void 0 : b.fields) == null ? void 0 : n.field) == null ? void 0 : _.length) > 0 && c.push(...b.fields.field));
      r && C(r, "outFields", c);
    }
  }, metadata: {} };
};
export {
  st as default
};
