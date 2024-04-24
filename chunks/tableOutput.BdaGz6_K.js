import "../css/tableOutput-DWvU-FoH.css";
import { b as ye, c as ke, d as we, e as xe, h as Ne, i as Ce, j as Ve, k as Te, l as $e, m as De, n as Ie, p as Pe, q as Fe, r as qe, s as Oe, t as Ye, u as Le, v as je, w as Se, x as Ee, y as ze, z as Be, A as Re, B as Ue, C as Ae, D as Me, F as Xe, H as Ge, I as Ke, J as Qe, K as He, L as Je, M as We, N as Ze, O as ea, P as aa, Q as ta, R as la, S as na, T as ia, U as sa, V as oa, W as _a, X as ra, Y as ca, Z as da, $ as pa, a0 as ua, a1 as ga, a2 as ba, a3 as va, a4 as ma, a5 as fa, a6 as ha, a7 as ya, a8 as ka, a9 as wa, aa as xa, ab as Na, ac as Ca, ad as Va, ae as Ta, af as $a, ag as Da, ah as Ia, ai as Pa, aj as se, ak as oe, al as X } from "./index.BgT0Dmh0.js";
import { defineComponent as be, ref as S, openBlock as h, createElementBlock as P, createVNode as x, unref as a, withCtx as w, createElementVNode as N, createBlock as E, toDisplayString as W, isRef as Fa, createTextVNode as ae, createCommentVNode as _e, markRaw as re, computed as G, watch as qa, onMounted as Oa, Fragment as ce, renderList as de, withModifiers as pe } from "vue";
import { aj as ue, o as Z, f as te, b6 as Ya, _ as La, g as k, d as ge, e as j, af as le, ad as ja, O as ee, ar as Sa, ap as V, am as T } from "./vendor.CuV1wQwX.js";
const Ea = {
  key: 0,
  flex: "",
  "items-center": "",
  "gap-16": "",
  "h-40": ""
}, za = /* @__PURE__ */ N("span", {
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
}, Ma = ["src"], Xa = /* @__PURE__ */ be({
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
    const q = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": ye, "./icon/airflow.png": ke, "./icon/amazon-s3.png": we, "./icon/amundsen.png": xe, "./icon/athena.png": Ne, "./icon/atlas.png": Ce, "./icon/azuresql.png": Ve, "./icon/bigquery.png": Te, "./icon/clickhouse.png": $e, "./icon/databrick.png": De, "./icon/dbt.png": Ie, "./icon/delta-lake.png": Pe, "./icon/domo.png": Fe, "./icon/doris.png": qe, "./icon/druid.png": Oe, "./icon/dynamodb.png": Ye, "./icon/glue.png": Le, "./icon/googleCloudService.png": je, "./icon/hive.png": Se, "./icon/ibmdb2.png": Ee, "./icon/iceberg.png": ze, "./icon/impala.png": Be, "./icon/kafka.png": Re, "./icon/kinesis.png": Ue, "./icon/looker.png": Ae, "./icon/mariadb.png": Me, "./icon/metabase.png": Xe, "./icon/mlflow.png": Ge, "./icon/mode.png": Ke, "./icon/mongodb.png": Qe, "./icon/mssql.png": He, "./icon/mysql.png": Je, "./icon/oracle.png": We, "./icon/pinot.png": Ze, "./icon/postgres.png": ea, "./icon/power-bi.png": aa, "./icon/presto.png": ta, "./icon/qliksense.png": la, "./icon/quicksight.png": na, "./icon/redash.png": ia, "./icon/redpanda.png": sa, "./icon/redshift.png": oa, "./icon/sagemaker.png": _a, "./icon/salesforce.png": ra, "./icon/saphana.png": ca, "./icon/singlestore.png": da, "./icon/snowflakes.png": pa, "./icon/sqlalchemy.png": ua, "./icon/sqlite.png": ga, "./icon/superset.png": ba, "./icon/tableau.png": va, "./icon/trino.png": ma, "./icon/vertica.png": fa }), $ = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": ha, "./svg/database.svg": ya, "./svg/field.svg": ka, "./svg/icon_clickhouse.svg": wa, "./svg/liebiaoziduanguanli.svg": xa, "./svg/mongodb.svg": Na, "./svg/mysql.svg": Ca, "./svg/oracle.svg": Va, "./svg/postgresql.svg": Ta, "./svg/schema.svg": $a, "./svg/server.svg": Da, "./svg/shujuku.svg": Ia, "./svg/table.svg": Pa }), O = z, f = R, { showLink: U, leafType: Y, loadCascaderData: D, linkTest: I, formatConnection: L, serverId: l = "", server: s = {}, tableIds: _ = [] } = O, o = S(l);
    let u = s;
    const C = S(), y = S(), n = (c) => {
      const d = A(c);
      u = d, f("update:server", d), f("update:serverId", c), L && f("update:connection", L(d)), M.value = !1, p = [];
    };
    let t = [];
    const r = async (c, d) => {
      let e = [];
      if (D)
        e = await D();
      else {
        const i = await se(), g = La(i.data, "serviceType");
        e = Object.keys(g).map((b) => ({ label: b, value: b, data: b, icon: b, type: "group", children: g[b].map((m) => ({ id: m.id, label: m.displayName || m.name, type: i.type, value: m.id, data: re(m), isLeaf: !0 })) })), t = [].concat(...e.map((b) => b.children));
      }
      d(e);
    };
    let p = _;
    const K = async (c, d) => {
      let e = [];
      const i = c.data, g = i.label ? i.data : u;
      if (g && g.type != Y)
        if (D)
          e = await D(g);
        else {
          const b = await se(g);
          e = b.data.map((m) => ({ label: m.displayName || m.name, type: b.type, value: m.id, data: re(m), isLeaf: b.type == Y }));
        }
      d(e);
    }, v = (c) => {
      var b, m, F, ne;
      const d = ((m = (b = y.value) == null ? void 0 : b.cascaderPanelRef) == null ? void 0 : m.menus) || [], e = [];
      let i = 0;
      for (const H of c) {
        const he = d[i];
        e[i] = (ne = (F = he.find((J) => {
          var ie;
          return ((ie = J == null ? void 0 : J.data) == null ? void 0 : ie.data.id) == H;
        })) == null ? void 0 : F.data) == null ? void 0 : ne.data, i++;
      }
      i > 0 && f("update:database", e[0]), i > 1 && f("update:schema", e[1]), i > 2 && f("update:table", e[2]), i > 3 && f("update:field", e[3]);
      let g = "";
      i > 2 && (g = me([e[0], e[1], e[2]].map((H) => H.name), u == null ? void 0 : u.serviceType)), f("update:tableIds", c), f("update:tableData", e), f("change", { tableIds: c, tableData: e, server: u, serverId: o.value, sql: g });
    }, A = (c) => {
      var d, e;
      return (e = (d = t.filter((i) => i.id == c)) == null ? void 0 : d[0]) == null ? void 0 : e.data;
    }, ve = {
      Postgres: ['"', "", ""]
    }, me = (c, d) => {
      var b;
      let e = d || "";
      e || (e = ((b = A(a(o))) == null ? void 0 : b.serviceType) || "");
      const i = k(ve, e) || [];
      return `select * from ${c.map((m, F) => `${i[F] ? i[F] : ""}${m}${i[F] ? i[F] : ""}`).join(".")}`;
    }, M = S(!1), Q = S(!1), fe = async () => {
      Q.value = !0;
      try {
        M.value = await (I == null ? void 0 : I(u)) || !1;
      } catch (c) {
        console.warn("testLink error ==> ", c);
      }
      Q.value = !1;
    };
    return B({
      serverRef: C,
      dataRef: y,
      selectDataServer: u
    }), (c, d) => (h(), P("div", null, [
      c.showCascader ? (h(), P("div", Ea, [
        za,
        x(a(ue), {
          "flex-1": "",
          ref_key: "serverRef",
          ref: C,
          modelValue: o.value,
          "onUpdate:modelValue": d[0] || (d[0] = (e) => o.value = e),
          onChange: n,
          props: { ...c.cascaderProps, lazyLoad: r }
        }, {
          default: w(({ data: e }) => [
            N("div", Ba, [
              e.type == "group" ? (h(), E(a(Z), {
                key: 0,
                title: e.label
              }, {
                default: w(() => {
                  var i;
                  return [
                    N("img", {
                      src: ((i = a(q)[Object.keys(a(q)).find((g) => g.includes(e.label.toLowerCase())) || ""]) == null ? void 0 : i.default) || ""
                    }, null, 8, Ra)
                  ];
                }),
                _: 2
              }, 1032, ["title"])) : (h(), E(a(Z), {
                key: 1,
                title: e.type
              }, {
                default: w(() => {
                  var i;
                  return [
                    N("img", {
                      src: (i = a($)[Object.keys(a($)).find((g) => g.includes(e.type)) || ""]) == null ? void 0 : i.default
                    }, null, 8, Ua)
                  ];
                }),
                _: 2
              }, 1032, ["title"])),
              N("span", null, W(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        x(a(ue), {
          "flex-1": "",
          ref_key: "dataRef",
          ref: y,
          modelValue: a(p),
          "onUpdate:modelValue": d[1] || (d[1] = (e) => Fa(p) ? p.value = e : p = e),
          onChange: v,
          props: { ...c.cascaderProps, lazyLoad: K, emitPath: !0 }
        }, {
          default: w(({ data: e }) => [
            N("div", Aa, [
              x(a(Z), {
                title: e.type
              }, {
                default: w(() => {
                  var i;
                  return [
                    N("img", {
                      src: (i = a($)[Object.keys(a($)).find((g) => g.includes(e.type)) || ""]) == null ? void 0 : i.default
                    }, null, 8, Ma)
                  ];
                }),
                _: 2
              }, 1032, ["title"]),
              N("span", null, W(e.label), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "props"]),
        a(U) ? (h(), E(a(te), {
          key: 0,
          text: "",
          type: M.value ? "success" : "primary",
          disabled: M.value,
          icon: a(Ya),
          loading: Q.value,
          onClick: fe
        }, {
          default: w(() => [
            ae(W(M.value ? "连接成功" : "测试连接"), 1)
          ]),
          _: 1
        }, 8, ["type", "disabled", "icon", "loading"])) : _e("", !0)
      ])) : _e("", !0)
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
}, Qa = { "min-w-50": "" }, Ha = /* @__PURE__ */ N("div", { "h-50": "" }, null, -1), Ja = {
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
}, at = /* @__PURE__ */ be({
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
    const R = z, { inputProps: q, outputProps: $, formdata: O, outputFileds: f, inputFileds: U, data: Y = [] } = R, D = B, I = G(() => k(O, U) || []), L = G(() => k(O, f) || []), l = G(() => {
      const n = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, $ || {});
      return a(L).map((t) => ({ label: k(t, n.label) || k(t, n.value), value: k(t, n.value), name: k(t, n.name) || k(t, n.value), type: k(t, n.type), remark: k(t, n.remark) })) || [];
    }), s = G(() => {
      const n = Object.assign({ name: "name", type: "type", remark: "remark" }, q || {});
      return a(I).map((t) => ({ name: k(t, n.name), type: k(t, n.type), remark: k(t, n.remark) }));
    }), _ = S(Y), o = () => {
      const n = [];
      for (const t of a(s)) {
        const r = a(l).find((p) => p.name == t.name);
        r ? n.push({ ...r }) : n.push({ ...t });
      }
      _.value = n;
    };
    qa([I, L], ([n, t]) => {
      n.length > 0 && t.length > 0 && (o(), y());
    });
    const u = (n, t) => {
      const r = a(l).find((p) => p.value == n);
      r && Object.assign(t.row, r), console.log("....", _.value), y();
    }, C = (n, t) => {
      n.row.$enabled = t, y();
    }, y = () => {
      if (a(_).length > 0) {
        const n = a(_).map((t, r) => t.$enabled == !1 ? void 0 : [s.value[r], { ...t }]).filter((t) => t != null);
        D("change", n), D("update:data", a(_));
      }
    };
    return Oa(() => {
      if (Y.length == 0 && a(I).length > 0) {
        debugger;
        o();
      }
    }), (n, t) => (h(), P("div", Ga, [
      N("div", Ka, [
        x(a(ge), {
          data: s.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: w(() => [
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
      N("div", Qa, [
        Ha,
        (h(!0), P(ce, null, de(_.value, (r) => (h(), P("div", Ja, [
          r.$enabled != !1 ? (h(), P("div", Wa)) : (h(), P("div", Za))
        ]))), 256))
      ]),
      N("div", et, [
        x(a(ge), {
          data: _.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: w(() => [
            x(a(j), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: w((r) => [
                x(a(le), {
                  modelValue: r.row.name,
                  "onUpdate:modelValue": (p) => r.row.name = p,
                  disabled: r.row.$enabled == !1,
                  onChange: (p) => u(p, r),
                  size: "small"
                }, {
                  default: w(() => [
                    (h(!0), P(ce, null, de(l.value, (p) => (h(), E(a(ja), {
                      label: p.label,
                      value: p.value
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
              default: w((r) => [
                r.row.$enabled != !1 ? (h(), E(a(te), {
                  key: 0,
                  size: "small",
                  onClick: pe(() => C(r, !1), ["stop"])
                }, {
                  default: w(() => [
                    ae("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (h(), E(a(te), {
                  key: 1,
                  size: "small",
                  onClick: pe(() => C(r, !0), ["stop"])
                }, {
                  default: w(() => [
                    ae("恢复")
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
  }, R = async (l) => {
    const s = X.PREFIX + "/database/testConnect", _ = oe(l), o = await X.POST(s, { connection: _ });
    return o.result || o.content;
  }, q = (l, s) => {
    console.log(s, l);
  }, $ = async (l) => {
    const s = X.PREFIX + "/database/getFieldInfo", _ = await X.POST(s, l);
    return _.result || _.content || [];
  }, O = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "Y", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: !1, ignore_errors: !1, use_batch: !0, specify_fields: !1, partitioning_enabled: !1, partitioning_field: "", partitioning_daily: !1, partitioning_monthly: !0, tablename_in_field: !1, tablename_field: "", tablename_in_table: !1, return_keys: !1, return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, f = async (l, s) => {
    const { tableData: _, server: o, tableIds: u, sql: C } = s;
    if (T(l, "$tableIds", u), T(l, "$server", o), o && _) {
      _[1] && T(l, "schema", _[1].name), _[2] && T(l, "table", _[2].name);
      const y = oe(o);
      T(l, "connection", o.id), T(l, "$connection", { ...y, name: o.id, dataSourceName: o.name, dsName: o.name, dataSourceId: o.id });
      const t = await $({
        connectionDetailVO: { connection: y },
        querySql: C
      });
      t && T(l, "$fields", t);
    } else
      console.error("没有获取到足够的数据来初始化字段 ===> ", l);
  }, U = (l, s) => {
    if (s && s.length > 0) {
      const _ = s.map(([o, u]) => ({ edit: !1, column_name: o.name, stream_name: u.name }));
      T(l, "fields", { field: _ });
    }
  };
  return { name: z, step: O, markup: B, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Xa, "v-model:serverId": "formData.$serverId", ":server": "formData.$server", ":tableIds": "formData.$tableIds", "@change": ({ formData: l, $: s }) => f(l, s[0]), linkTest: R },
      { tag: ee },
      { tag: Sa, label: "数据入表方式", prop: "$truncate", "@change": ({ formData: l, $: s }) => q(l, s[0]), cls: [{ cls: "插入", label: "insert" }, { cls: "覆盖", label: "over" }, { cls: "更新", label: "update" }] },
      { tag: ee },
      { tag: at, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: l, $: s }) => U(l, s[0]) }
    ] },
    { type: "form", label: "高级配置", column: [
      { label: "提交记录数量", prop: "commit" },
      { label: "裁剪表", tag: V, prop: "truncate", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "忽略插入错误", tag: V, prop: "ignore_errors", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "指定数据可字段", tag: V, prop: "specify_fields", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      // {prop:"",label:"",tag:ElSwitch,trueLabel:"Y",falseLabel:"N"}
      { tag: ee, cls: "主选项" },
      { label: "表分区数据", tag: V, prop: "partitioning_enabled", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "分区字段", tag: le, prop: "partitioning_field", cls: [] },
      //  item in step.outFields
      { label: "每月分区数据", tag: V, prop: "partitioning_daily", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "每天分区数据", tag: V, prop: "partitioning_monthly", ":disabled": "formData['partitioning_enabled'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "使用批量插入", tag: V, prop: "use_batch", ":disabled": "formData['return_keys'] == true", activeValue: "Y", inactiveValue: "N" },
      { label: "表名定义在一个字段里", tag: V, prop: "tablename_in_field", activeValue: "Y", inactiveValue: "N" },
      { label: "包含表名的字段", tag: le, prop: "tablename_field", clearable: !0, ":disabled": "formData['tablename_in_field'] == 'N'", cls: [] },
      { label: "存储表名字段", tag: V, prop: "tablename_in_table", ":disabled": "formData['tablename_in_field'] == 'N'", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "返回一个自动产生的关键字", tag: V, prop: "return_keys", activeValue: "Y", inactiveValue: "N", inlinePrompt: !0, activeText: "Y", inactiveText: "N" },
      { label: "自动产生关键字的名称", prop: "return_field", ":disabled": "formData['return_keys'] == 'N'" }
    ] }
  ], submit: async (l, s) => {
    var o;
    ((o = s.form) == null ? void 0 : o.getCellFormData(l)) != null;
  }, open: (l, s) => {
    var u, C, y, n, t;
    const _ = ((u = s.form) == null ? void 0 : u.getCellFormData(l)) || {}, o = (C = s.shadow) == null ? void 0 : C.get(l);
    if (o) {
      const r = [], p = o.prevNodes, K = Array.from(p).map((v) => {
        var A;
        return (A = s.form) == null ? void 0 : A.getCellFormData(v);
      });
      for (const v of K)
        v && (v.outFields || v.fields) && (((y = v == null ? void 0 : v.outFields) == null ? void 0 : y.length) > 0 ? r.push(...v.outFields) : ((t = (n = v == null ? void 0 : v.fields) == null ? void 0 : n.field) == null ? void 0 : t.length) > 0 && r.push(...v.fields.field));
      _ && T(_, "outFields", r);
    }
  }, metadata: {} };
};
export {
  st as default
};
