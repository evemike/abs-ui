import "../css/tableOutput-DWvU-FoH.css";
import { _ as me, a as be, b as fe, c as he, d as ye, e as we, f as ke, g as Ne, h as xe, i as Te, j as Ve, k as Ce, l as Ye, m as $e, n as De, o as Ie, p as Fe, q as Pe, r as Oe, s as je, t as qe, u as Ee, v as Le, w as ze, x as Se, y as Ue, z as Be, A as Me, B as Re, C as Ge, D as Ae, E as He, F as Je, G as Ke, H as Qe, I as We, J as Xe, K as Ze, L as ea, M as aa, N as ta, O as ia, P as na, Q as la, R as sa, S as oa, T as _a, U as ra, V as ca, W as pa, X as ua, Y as da, Z as ga, $ as va, a0 as ma, a1 as ba, a2 as fa, a3 as ha, a4 as ya, a5 as wa, a6 as ka, a7 as Na, a8 as xa, a9 as Ta, aa as Va, ab as Ca } from "./table.DtQlpGd_.js";
import { defineComponent as ee, ref as ne, reactive as X, h as F, toRefs as Ya, watch as ge, openBlock as y, createElementBlock as E, createElementVNode as M, createVNode as w, unref as t, createBlock as ae, withCtx as P, createTextVNode as le, toDisplayString as $a, createCommentVNode as Da, computed as Z, onMounted as Ia, Fragment as _e, renderList as re, withModifiers as ce } from "vue";
import { ba as pe, b as se, aI as Fa, bf as Pa, aa as Oa, u as ja, g as f, B as ue, C as B, j as oe, k as qa, $ as te, t as Ea, m as T, a as de, f as K } from "./vendor.CTqz3lQh.js";
import { b as ie } from "./api.CF1BbFLh.js";
const La = {
  "w-full": "",
  "overflow-auto": ""
}, za = {
  flex: "",
  "gap-2em": "",
  "h-32": "",
  "flex-wrap": ""
}, Sa = /* @__PURE__ */ ee({
  __name: "data-table-new",
  props: {
    serverId: { default: "" },
    schemaIds: { default: () => [] },
    groups: { default: () => [] },
    testConnect: {}
  },
  emits: ["update:serverId", "update:schemaIds", "put:server", "put:schema", "change"],
  setup(Y, { emit: R }) {
    const L = /* @__PURE__ */ Object.assign({ "./icon/airbyte.png": me, "./icon/airflow.png": be, "./icon/amazon-s3.png": fe, "./icon/amundsen.png": he, "./icon/athena.png": ye, "./icon/atlas.png": we, "./icon/azuresql.png": ke, "./icon/bigquery.png": Ne, "./icon/clickhouse.png": xe, "./icon/databrick.png": Te, "./icon/dbt.png": Ve, "./icon/delta-lake.png": Ce, "./icon/domo.png": Ye, "./icon/doris.png": $e, "./icon/druid.png": De, "./icon/dynamodb.png": Ie, "./icon/glue.png": Fe, "./icon/googleCloudService.png": Pe, "./icon/hive.png": Oe, "./icon/ibmdb2.png": je, "./icon/iceberg.png": qe, "./icon/impala.png": Ee, "./icon/kafka.png": Le, "./icon/kinesis.png": ze, "./icon/looker.png": Se, "./icon/mariadb.png": Ue, "./icon/metabase.png": Be, "./icon/mlflow.png": Me, "./icon/mode.png": Re, "./icon/mongodb.png": Ge, "./icon/mssql.png": Ae, "./icon/mysql.png": He, "./icon/oracle.png": Je, "./icon/pinot.png": Ke, "./icon/postgres.png": Qe, "./icon/power-bi.png": We, "./icon/presto.png": Xe, "./icon/qliksense.png": Ze, "./icon/quicksight.png": ea, "./icon/redash.png": aa, "./icon/redpanda.png": ta, "./icon/redshift.png": ia, "./icon/sagemaker.png": na, "./icon/salesforce.png": la, "./icon/saphana.png": sa, "./icon/singlestore.png": oa, "./icon/snowflakes.png": _a, "./icon/sqlalchemy.png": ra, "./icon/sqlite.png": ca, "./icon/superset.png": pa, "./icon/tableau.png": ua, "./icon/trino.png": da, "./icon/vertica.png": ga }), z = /* @__PURE__ */ Object.assign({ "./svg/dakaishujukulianjie.svg": va, "./svg/database.svg": ma, "./svg/field.svg": ba, "./svg/icon_clickhouse.svg": fa, "./svg/liebiaoziduanguanli.svg": ha, "./svg/mongodb.svg": ya, "./svg/mysql.svg": wa, "./svg/oracle.svg": ka, "./svg/postgresql.svg": Na, "./svg/schema.svg": xa, "./svg/server.svg": Ta, "./svg/shujuku.svg": Va, "./svg/table.svg": Ca }), G = Y, { serverId: S, schemaIds: A, groups: H, testConnect: O } = G, j = R, q = (r, c) => {
      let v = "";
      const N = r.toLowerCase();
      if (c && c == "group") {
        const m = (Object.keys(L) || []).find((D) => D.includes(N));
        m && (v = L[m].default);
      } else {
        const m = (Object.keys(z) || []).find((D) => D.includes(N));
        m && (v = z[m].default);
      }
      return v;
    }, s = ne(!1), l = X({}), p = ne(), g = (r) => {
      p.value = r;
    }, k = async () => {
      if (O) {
        s.value = !0;
        try {
          console.log("testConnect....", V);
          const r = await O(p.value, V);
          l[p.value.id] = r;
        } catch (r) {
          console.error(r);
        }
        s.value = !1;
      }
    }, h = ee({
      props: ["id", "groups"],
      emits: ["up:server", "up:id"],
      setup(r, c) {
        const { id: v = "", groups: N } = r, d = { label: "label", leaf: "isLeaf", children: "children", value: "value", emitPath: !1 }, m = X([]), D = async () => {
          m.length = 0;
          const u = await ie(), I = Oa(u.data, "serviceType"), n = Object.keys(I).filter((a) => N.length > 0 ? N.includes(a) : !0).map((a) => ({ label: a, value: a, data: a, icon: a, type: "group", children: I[a].map((o) => ({ group: a, label: o.displayName || o.name, type: u.type, value: o.id, data: o, isLeaf: !0 })) }));
          if (m.push(...n), v) {
            const a = u.data.find((o) => o.id == v);
            c.emit("up:server", a);
          }
        };
        let Q = v;
        const W = (u) => {
          if (u.isLeaf) {
            const I = u.value, J = u.data;
            Q = I, c.emit("up:id", I), c.emit("up:server", J), console.log("Server --------------", I, J);
          }
        };
        return D(), () => F(pe, { modelValue: Q, options: m, props: { ...d } }, {
          default: ({ data: u }) => F("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => W(u) }, [
            F("img", { style: "height:1em;max-height:1em;", src: q(u.type == "group" ? u.label : u.type, u.type), title: `${u.type} - ${u.label}` }),
            F("span", u.label)
          ])
        });
      }
    });
    let V, $ = "", e = [];
    const i = (r, c = []) => {
      $ = r ? `select * from ${r}` : "", e = c, r && ve();
    }, _ = (r) => {
      console.log("..234234......", r), V = r;
    }, b = ee({
      props: ["ids", "server"],
      emits: ["up:ids", "up:name", "up:database"],
      setup(r, c) {
        const { server: v } = Ya(r), { ids: N = [] } = r, d = X([...N]), m = X([]), D = (n = []) => {
          m.length = 0, m.push(...n);
        }, Q = (n) => n.data.map((a) => ({ label: a.displayName || a.name, type: n.type, value: a.id, data: a, isLeaf: a.columns != null })), W = async (n) => {
          var a, o;
          if (n) {
            const x = await ie(n);
            D(Q(x));
            const U = d.length > 0 ? (a = x.data) == null ? void 0 : a.find((C) => C.id == d[0]) : (o = x.data) == null ? void 0 : o[0];
            c.emit("up:database", U);
          } else
            D();
        }, u = { label: "label", leaf: "isLeaf", children: "children", value: "value", lazy: !0, emitPath: !0, multiple: !1, checkStrictly: !1 }, I = async (n, a) => {
          const o = n.data;
          let x = [];
          if (o && o.children)
            x = o.children;
          else if (o && o.data && o.value) {
            const U = await ie(o.data);
            x = U.data.map((C) => ({ label: C.displayName || C.name, type: U.type, value: C.id, parent: o, data: C, isLeaf: C.columns != null }));
          }
          a(x);
        }, J = (n) => {
          if (!n.isLeaf)
            return;
          let a = n;
          const o = [n.data];
          for (; a != null && a.parent; )
            o.push(a.parent.data), a = a.parent;
          const x = o.reverse().map((C) => C.id), U = `${n.parent.data.name}.${n.data.name}`;
          d.length = 0, d.push(...x), c.emit("up:database", o[0]), c.emit("up:ids", x), c.emit("up:name", U, o);
        };
        return v.value && W(v.value), ge(v, (n, a) => {
          W(n), a != null && (d.length = 0, c.emit("up:ids", []), c.emit("up:name", ""));
        }), () => F(pe, { modelValue: d, options: m, props: { ...u, lazyLoad: I }, "onUpdate:modelValue": (n) => {
          console.log("------->", n);
        } }, {
          default: ({ data: n }) => F("div", { style: "display:flex;align-items:center;gap:.5em;", onClick: () => J(n) }, [
            F("img", { style: "height:1em;max-height:1em;", src: q(n.type), title: `${n.type} - ${n.label}` }),
            F("span", n.label)
          ])
        });
      }
    }), ve = ja(() => {
      j("change", p.value, V, $, e);
    }, 500);
    return (r, c) => {
      var v, N;
      return y(), E("div", La, [
        M("div", za, [
          w(t(h), {
            class: "min-w-400",
            id: t(S),
            groups: t(H),
            "onUp:server": g,
            "onUp:id": c[0] || (c[0] = (d) => j("update:serverId", d))
          }, null, 8, ["id", "groups"]),
          w(t(b), {
            class: "min-w-400",
            ids: t(A),
            server: p.value,
            "onUp:ids": c[1] || (c[1] = (d) => j("update:schemaIds", d)),
            "onUp:database": _,
            "onUp:name": i
          }, null, 8, ["ids", "server"]),
          M("div", null, [
            t(O) != null ? (y(), ae(t(se), {
              key: 0,
              loading: s.value,
              icon: l[(v = p.value) == null ? void 0 : v.id] == !0 ? t(Fa) : t(Pa),
              type: l[(N = p.value) == null ? void 0 : N.id] == !0 ? "success" : "primary",
              onClick: k
            }, {
              default: P(() => {
                var d;
                return [
                  le($a(l[(d = p.value) == null ? void 0 : d.id] == !0 ? "重新测试" : "测试连接"), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "icon", "type"])) : Da("", !0)
          ])
        ])
      ]);
    };
  }
}), Ua = {
  class: "comp-fields",
  flex: "",
  "w-full": "",
  "gap-20": "",
  "overflow-auto": ""
}, Ba = {
  "flex-1": "",
  class: "max-w-40% min-w-30%"
}, Ma = { "min-w-50": "" }, Ra = /* @__PURE__ */ M("div", { "h-50": "" }, null, -1), Ga = {
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
}, Ja = {
  "flex-2": "",
  "w-full": ""
}, Ka = /* @__PURE__ */ ee({
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
  setup(Y, { emit: R }) {
    const L = Y, { inputProps: z, outputProps: G, formdata: S, outputFileds: A, inputFileds: H, data: O = [] } = L, j = R, q = Z(() => f(S, H) || []), s = Z(() => f(S, A) || []), l = Z(() => {
      const e = Object.assign({ name: "name", type: "type", remark: "remark", main: "main", isNull: "isNull", label: "name", value: "name" }, G || {});
      return t(s).map((i) => ({ label: f(i, e.label) || f(i, e.value), value: f(i, e.value), name: f(i, e.name) || f(i, e.value), type: f(i, e.type), remark: f(i, e.remark) })) || [];
    }), p = Z(() => {
      const e = Object.assign({ name: "name", type: "type", remark: "remark" }, z || {});
      return t(q).map((i) => ({ name: f(i, e.name), type: f(i, e.type), remark: f(i, e.remark) }));
    }), g = ne(O), k = () => {
      const e = [];
      for (const i of t(p)) {
        const _ = t(l).find((b) => b.name == i.name);
        _ ? e.push({ ..._ }) : e.push({});
      }
      g.value = e;
    };
    ge([q, s], ([e, i]) => {
      k(), i.length > 0 && e.length > 0 && $();
    });
    const h = (e, i) => {
      const _ = t(l).find((b) => b.value == e);
      _ && Object.assign(i.row, _), $();
    }, V = (e, i) => {
      e.row.$enabled = i, $();
    }, $ = () => {
      if (t(g).length > 0) {
        const e = t(g).map((i, _) => i.$enabled == !1 ? void 0 : [p.value[_], { ...i }]).filter((i) => i != null);
        j("change", e), j("update:data", t(g));
      }
    };
    return Ia(() => {
      O.length != t(q).length && k();
    }), (e, i) => (y(), E("div", Ua, [
      M("div", Ba, [
        w(t(ue), {
          data: p.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: P(() => [
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
      M("div", Ma, [
        Ra,
        (y(!0), E(_e, null, re(g.value, (_) => (y(), E("div", Ga, [
          _.$enabled != !1 ? (y(), E("div", Aa)) : (y(), E("div", Ha))
        ]))), 256))
      ]),
      M("div", Ja, [
        w(t(ue), {
          data: g.value,
          "row-style": { height: "48px", "box-sizing": "border-box" },
          "header-row-style": { height: "50px", "box-sizing": "border-box" }
        }, {
          default: P(() => [
            w(t(B), {
              label: "目标表字段",
              prop: "name"
            }, {
              default: P((_) => [
                w(t(oe), {
                  modelValue: _.row.name,
                  "onUpdate:modelValue": (b) => _.row.name = b,
                  disabled: _.row.$enabled == !1,
                  onChange: (b) => h(b, _),
                  size: "small"
                }, {
                  default: P(() => [
                    (y(!0), E(_e, null, re(l.value, (b) => (y(), ae(t(qa), {
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
              default: P((_) => [
                _.row.$enabled != !1 ? (y(), ae(t(se), {
                  key: 0,
                  size: "small",
                  onClick: ce(() => V(_, !1), ["stop"])
                }, {
                  default: P(() => [
                    le("删除")
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : (y(), ae(t(se), {
                  key: 1,
                  size: "small",
                  onClick: ce(() => V(_, !0), ["stop"])
                }, {
                  default: P(() => [
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
}), at = (Y) => {
  const R = "TableOutput", L = {
    // ports: { items: [{ "id": "in", "group": "left" }, { "id": "out", "group": "right" }] },
    ports: { items: [{ id: "in", group: "left" }] }
  }, z = async (s, l) => {
    const [p] = Y.util.createConnectionData(s, l);
    return await Y.api.testConnect({ connection: p });
  }, G = (s, l) => {
    console.log(l, s);
  }, S = { name: "表输出", $truncate: "over", type: "TableOutput", description: [], distribute: "N", custom_distribution: [], copies: "1", partitioning: { method: "none", schema_name: [] }, connection: "", schema: "", table: "", commit: "1000", truncate: "N", ignore_errors: "Y", use_batch: "Y", specify_fields: "Y", partitioning_enabled: "N", partitioning_field: "", partitioning_daily: "N", partitioning_monthly: "Y", tablename_in_field: "N", tablename_field: "", tablename_in_table: "N", return_keys: "N", return_field: "", fields: { field: [] }, attributes: "", cluster_schema: "", remotesteps: { input: "", output: "" }, GUI: { xloc: 448, yloc: 160, draw: "Y" } }, A = async (s, l) => {
    const [p, g, k, h] = l;
    if (console.log("initFields ====> ", l, g, k, h), !p) {
      de.warning("请选择数据源");
      return;
    }
    if (!g || !k) {
      de.warning("请选择数据表");
      return;
    }
    h && h[1] && K(s, "schema", h[1].name), h && h[2] && K(s, "table", h[2].name);
    const [V, $] = Y.util.createConnectionData(p, g);
    K(s, "connection", $);
    const e = await Y.api.getFieldInfo({ connectionDetailVO: { connection: V }, querySql: k });
    e && K(s, "$fields", e);
  }, H = (s, l) => {
    if (l && l.length > 0) {
      const p = l.map(([g, k]) => ({ stream_name: g.name, column_name: k.name }));
      K(s, "fields", { field: p });
    }
  };
  return { name: R, step: S, markup: L, tabs: [
    { default: !0, type: "form", label: "属性配置", column: [
      { tag: Sa, "v-model:serverId": "formData.$serverId", "v-model:schemaIds": "formData.$tableIds", "@change": ({ formData: s, $: l }) => A(s, l), testConnect: z },
      { tag: te },
      { tag: Ea, label: "数据入表方式", prop: "$truncate", tip: { content: `
  <p>清空覆盖：删除表数据后再插入新数据</p>
  <p>追加：将数据直接追加到表中，如果遇到主键（唯一约束）冲突，则直接报错并结束</p>
  <p>插入且更新：将数据追加到表中，遇到主键冲突时覆盖这条数据</p>
  <p>插入不更新：只追加不同主键的数据，相同主键的数据直接舍弃</p>
  `, rawContent: !0 }, "@change": ({ formData: s, $: l }) => G(s, l[0]), cls: [{ cls: "清空覆盖", label: "over" }, { cls: "追加", label: "insert" }, { cls: "插入且更新", label: "update" }, { cls: "插入不更新", label: "add" }] },
      { tag: te },
      { tag: Ka, "v-model:data": "formData.$fieldsOutData", ":formdata": "formData", outputFileds: "$fields", inputFileds: "outFields", outputProps: { value: "fieldName", type: "fieldType" }, "@change": ({ formData: s, $: l }) => H(s, l[0]) }
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
  at as default
};
