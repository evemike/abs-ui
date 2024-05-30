import "../css/KafkaSQL-Bs3kt1mL.css";
import { _ as K } from "./kafka.vue_vue_type_script_setup_true_lang.C6wSuoHk.js";
import { C as A } from "./main.BzEWEJBT.js";
import { defineComponent as G, toRefs as H, ref as Q, reactive as U, onMounted as J, resolveComponent as y, openBlock as L, createElementBlock as R, createTextVNode as _, createVNode as t, unref as r, withCtx as a, createElementVNode as q, Fragment as W, renderList as $, createBlock as j } from "vue";
import { b as V, r as z, p as X, B as Y, C as D, f as B } from "./vendor.CTqz3lQh.js";
import { _ as Z } from "./_plugin-vue_export-helper.CHgC5LLL.js";
import { p as ee, c as N, d as E } from "./index.ecrm0g-a.js";
const te = [
  { label: "string", value: "string" },
  { label: "boolean", value: "boolean" },
  { label: "date", value: "date" },
  { label: "timestamp", value: "timestamp" },
  { label: "double", value: "double" },
  { label: "float", value: "float" },
  { label: "integer", value: "integer" },
  { label: "long", value: "long" },
  { label: "short", value: "short" }
], ae = { class: "nifi-field" }, le = { class: "field_content" }, oe = { class: "allocation_footer" }, re = /* @__PURE__ */ G({
  __name: "index",
  props: {
    formdata: {},
    propOutput: {},
    graphShadow: {},
    inputV: {}
  },
  setup(d) {
    const k = d, { formdata: O, inputV: T, graphShadow: F } = H(k), h = Q(!1), I = () => {
      h.value = !0, e.tableData = [...F.value.get(O.value.id).tableData];
    }, e = U({
      tableData: [...T.value]
    }), p = () => {
      e.tableData.push({
        doc: "",
        name: "",
        type: ""
      });
    }, u = () => {
      h.value = !1;
    }, n = (i) => {
      e.tableData.splice(i, 1);
    }, m = Q(), b = U({
      name: [{ required: !0, message: "字段名不能为空", trigger: "blur" }],
      // doc: [{ required: true, message: "字段中文名不能为空", trigger: "blur" }],
      type: [{ required: !0, message: "字段类型不能为空", trigger: "change" }]
    }), v = async () => {
      var i;
      await ((i = m.value) == null ? void 0 : i.validate((c, f) => {
        c ? (C(), u()) : console.log("error submit!", f);
      }));
    }, C = () => {
      F.value.set(O.value.id, "tableData", e.tableData);
    };
    return J(() => {
      C();
    }), (i, c) => {
      const f = y("el-input"), g = y("el-form-item"), S = y("el-option"), x = y("el-select"), w = y("el-form");
      return L(), R("div", ae, [
        _(" 字段设置 "),
        t(r(V), {
          type: "primary",
          onClick: I,
          style: { "margin-left": "12px" }
        }, {
          default: a(() => [
            _(" 字段设置 ")
          ]),
          _: 1
        }),
        t(r(z), {
          modelValue: h.value,
          "onUpdate:modelValue": c[0] || (c[0] = (s) => h.value = s),
          title: "字段设置",
          "destroy-on-close": "",
          "w-40vw": "",
          "h-70vh": "",
          "before-close": u
        }, {
          default: a(() => [
            t(r(V), {
              type: "primary",
              icon: r(X),
              onClick: p
            }, {
              default: a(() => [
                _(" 添加字段 ")
              ]),
              _: 1
            }, 8, ["icon"]),
            q("div", le, [
              t(w, {
                ref_key: "formRef",
                ref: m,
                model: e,
                rules: b,
                "label-width": "108px",
                inline: !0
              }, {
                default: a(() => [
                  t(r(Y), {
                    "max-height": "400",
                    data: e.tableData,
                    "cell-style": { textAlign: "center" },
                    "header-cell-style": { "text-align": "center" }
                  }, {
                    default: a(() => [
                      t(r(D), {
                        prop: "name",
                        label: "字段名",
                        "show-overflow-tooltip": ""
                      }, {
                        default: a(({ $index: s, row: l }) => [
                          t(g, {
                            prop: "tableData." + s + ".name",
                            rules: b.name
                          }, {
                            default: a(() => [
                              t(f, {
                                modelValue: l.name,
                                "onUpdate:modelValue": (o) => l.name = o,
                                placeholder: "请输入",
                                class: "item__input",
                                clearable: "",
                                onBlur: (o) => l.name = o.target.value.trim()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 1
                      }),
                      t(r(D), {
                        prop: "doc",
                        label: "字段中文名",
                        "show-overflow-tooltip": ""
                      }, {
                        default: a(({ $index: s, row: l }) => [
                          t(g, {
                            prop: "tableData." + s + ".doc",
                            rules: b.doc
                          }, {
                            default: a(() => [
                              t(f, {
                                modelValue: l.doc,
                                "onUpdate:modelValue": (o) => l.doc = o,
                                placeholder: "请输入",
                                class: "item__input",
                                clearable: "",
                                onBlur: (o) => l.doc = o.target.value.trim()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 1
                      }),
                      t(r(D), {
                        prop: "type",
                        label: "字段类型",
                        "show-overflow-tooltip": ""
                      }, {
                        default: a(({ $index: s, row: l }) => [
                          t(g, {
                            prop: "tableData." + s + ".type",
                            rules: b.type
                          }, {
                            default: a(() => [
                              t(x, {
                                modelValue: l.type,
                                "onUpdate:modelValue": (o) => l.type = o,
                                placeholder: "请选择",
                                class: "item__input",
                                filterable: "",
                                clearable: "",
                                "popper-class": "select_popper"
                              }, {
                                default: a(() => [
                                  (L(!0), R(W, null, $(r(te), (o) => (L(), j(S, {
                                    label: o.label,
                                    value: o.value
                                  }, null, 8, ["label", "value"]))), 256))
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 1
                      }),
                      t(r(D), { label: "操作" }, {
                        default: a(({ $index: s }) => [
                          t(r(V), {
                            text: "",
                            onClick: () => n(s),
                            style: { "margin-bottom": "18px" }
                          }, {
                            default: a(() => [
                              _(" 删除 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                _: 1
              }, 8, ["model", "rules"])
            ]),
            q("div", oe, [
              t(r(V), { onClick: u }, {
                default: a(() => [
                  _("取消")
                ]),
                _: 1
              }),
              t(r(V), {
                type: "primary",
                onClick: v
              }, {
                default: a(() => [
                  _("保存")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), ne = /* @__PURE__ */ Z(re, [["__scopeId", "data-v-4e8c5d18"]]), se = (d) => ({
  graphShadow: d.graphShadow,
  cell: d.cell
}), ge = () => {
  let d = [], k = [
    {
      parameter: "bootstrap.servers",
      message: "请选择kafka连接"
    },
    {
      parameter: "topic",
      message: "请选择TOPIC"
    },
    {
      parameter: "SQL语句",
      message: "请输入SQL语句"
    }
  ];
  return { name: ["org.apache.nifi.kafka.sql.processors.KafkaSQL_1_0"], excludeKeys: [
    "topic",
    "bootstrap.servers",
    "input字段（自动填入）",
    "output字段（自动填入）",
    "web预留（自动填入）",
    "SQL语句"
  ], selfFormColumn: [
    {
      tag: K,
      ":formdata": "formData",
      prop: "config.properties",
      isFormElem: !1,
      label: "",
      ":data": "formData",
      setup({ params: e }) {
        return { graphShadowCell: se(e) };
      },
      ":graphShadowCell": "graphShadowCell"
    },
    {
      tag: ne,
      ":formdata": "formData",
      propOutput: "config.properties['output字段（自动填入）']",
      setup({ params: e }) {
        return {
          inputV: d,
          graphShadow: e.graphShadow
        };
      },
      ":inputV": "inputV",
      ":graphShadow": "graphShadow",
      style: "margin-bottom: 18px"
    },
    {
      prop: "config.properties.SQL语句",
      tag: A,
      style: "min-height: 100px",
      maxHeight: "100px",
      dialogTitle: "SQL语句",
      isFormElem: !0,
      label: "sql语句",
      elFormItem: { class: "flex-column" },
      setup({ params: e }) {
        return {
          readOnly: e.step.value === "running"
        };
      },
      ":readOnly": "readOnly"
    }
  ], hooksOpen: (e, p) => {
    d = [];
    let { source: u } = p.event, n = u.get(e.id).component.config.properties[
      // "output字段（自动填入）"
      "input字段（自动填入）"
    ];
    d = n ? JSON.parse(n).filter(
      (m) => !m.originalValue
    ) : [];
  }, hooksSubmit: (e, p) => {
    var f, g, S, x, w, s;
    let u = (f = p.event.form) == null ? void 0 : f.data.value[e.id].config.properties;
    ee(u, k);
    let n = u.SQL语句, m = n.split("from");
    n.indexOf("from") === -1 && (m = n.split("FROM")), m[m.length - 1].replace(/[' "]/g, "") !== u.topic && N("表名应于TOPIC一致");
    let v = p.event.source.get(e.id).component, C = ((g = p.event.shadow) == null ? void 0 : g.get(e.id).tableData) ?? [], i = ((S = p.event.shadow) == null ? void 0 : S.get(e.id).my_topic_output) ?? [];
    i.length === 0 && N("TOPIC中Schema为空，请重新选择TOPIC");
    let c = [...C, ...i];
    if (B(
      v,
      "config.properties['input字段（自动填入）']",
      E(c)
    ), n.includes("*"))
      B(
        v,
        "config.properties['output字段（自动填入）']",
        E(c)
      );
    else {
      let l = n.indexOf("FROM");
      l === -1 && (l = n.indexOf("from"));
      let o = n.substring(6, l).replace(/\s+/g, "").split(","), M = i.filter((P) => o.includes(P.name));
      B(
        v,
        "config.properties['output字段（自动填入）']",
        E(M)
      );
    }
    (x = p.event.shadow) == null || delete x.get(e.id).tableData, (s = (w = p.event.shadow) == null ? void 0 : w.get(e.id)) == null || delete s.my_topic_output;
  } };
};
export {
  ge as default
};
