import "../css/KafkaSQL-CGOlqb0J.css";
import { _ as q } from "./kafka.vue_vue_type_script_setup_true_lang.BvrfzkYp.js";
import { C as L } from "./main.ClmZZr2j.js";
import { defineComponent as T, toRefs as K, ref as V, reactive as D, resolveComponent as m, openBlock as y, createElementBlock as w, createTextVNode as c, createVNode as e, unref as t, withCtx as l, createElementVNode as k, Fragment as I, renderList as Q, createBlock as z } from "vue";
import { B as f, af as A, p as G, y as H, z as g } from "./vendor.4pP_Prrf.js";
import { _ as J } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const O = [
  { label: "string", value: "string" },
  { label: "boolean", value: "boolean" },
  { label: "date", value: "date" },
  { label: "timestamp", value: "timestamp" },
  { label: "double", value: "double" },
  { label: "float", value: "float" },
  { label: "integer", value: "integer" },
  { label: "long", value: "long" },
  { label: "short", value: "short" }
], $ = { class: "nifi-field" }, j = { class: "field_content" }, M = { class: "allocation_footer" }, P = /* @__PURE__ */ T({
  __name: "index",
  props: {
    formdata: {},
    prop: {},
    datas: {}
  },
  setup(r) {
    const x = r, { formdata: b } = K(x), u = V(!1), S = () => {
      u.value = !0;
      let n = b.value.config.properties["output字段（自动填入）"], s = typeof n == "string" ? JSON.parse(n) : n;
      s || (s = []), console.log(s), d.tableData = s.filter((i) => !i.originalValue);
    }, d = D({
      tableData: []
    }), F = () => {
      d.tableData.push({
        doc: "",
        name: "",
        type: ""
      });
    }, h = () => {
      u.value = !1, d.tableData = [];
    }, B = (n) => {
      d.tableData.splice(n, 1);
    }, C = V(), _ = D({
      name: [{ required: !0, message: "字段名不能为空", trigger: "blur" }],
      // doc: [{ required: true, message: "字段中文名不能为空", trigger: "blur" }],
      type: [{ required: !0, message: "字段类型不能为空", trigger: "change" }]
    }), E = async () => {
      var n;
      await ((n = C.value) == null ? void 0 : n.validate((s, i) => {
        s ? (b.value.config.properties["output字段（自动填入）"] = d.tableData, h()) : console.log("error submit!", i);
      }));
    };
    return (n, s) => {
      const i = m("el-input"), v = m("el-form-item"), U = m("el-option"), R = m("el-select"), N = m("el-form");
      return y(), w("div", $, [
        c(" 字段设置 "),
        e(t(f), {
          type: "primary",
          onClick: S,
          style: { "margin-left": "12px" }
        }, {
          default: l(() => [
            c(" 字段设置 ")
          ]),
          _: 1
        }),
        e(t(A), {
          modelValue: u.value,
          "onUpdate:modelValue": s[0] || (s[0] = (p) => u.value = p),
          title: "字段设置",
          "destroy-on-close": "",
          "w-40vw": "",
          "h-70vh": "",
          "before-close": h
        }, {
          default: l(() => [
            e(t(f), {
              type: "primary",
              icon: t(G),
              onClick: F
            }, {
              default: l(() => [
                c(" 添加字段 ")
              ]),
              _: 1
            }, 8, ["icon"]),
            k("div", j, [
              e(N, {
                ref_key: "formRef",
                ref: C,
                model: d,
                rules: _,
                "label-width": "108px",
                inline: !0
              }, {
                default: l(() => [
                  e(t(H), {
                    "max-height": "400",
                    data: d.tableData,
                    "cell-style": { textAlign: "center" },
                    "header-cell-style": { "text-align": "center" }
                  }, {
                    default: l(() => [
                      e(t(g), {
                        prop: "name",
                        label: "字段名",
                        "show-overflow-tooltip": ""
                      }, {
                        default: l(({ $index: p, row: o }) => [
                          e(v, {
                            prop: "tableData." + p + ".name",
                            rules: _.name
                          }, {
                            default: l(() => [
                              e(i, {
                                modelValue: o.name,
                                "onUpdate:modelValue": (a) => o.name = a,
                                placeholder: "请输入",
                                class: "item__input",
                                clearable: "",
                                onBlur: (a) => o.name = a.target.value.trim()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 1
                      }),
                      e(t(g), {
                        prop: "doc",
                        label: "字段中文名",
                        "show-overflow-tooltip": ""
                      }, {
                        default: l(({ $index: p, row: o }) => [
                          e(v, {
                            prop: "tableData." + p + ".doc",
                            rules: _.doc
                          }, {
                            default: l(() => [
                              e(i, {
                                modelValue: o.doc,
                                "onUpdate:modelValue": (a) => o.doc = a,
                                placeholder: "请输入",
                                class: "item__input",
                                clearable: "",
                                onBlur: (a) => o.doc = a.target.value.trim()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 1
                      }),
                      e(t(g), {
                        prop: "type",
                        label: "字段类型",
                        "show-overflow-tooltip": ""
                      }, {
                        default: l(({ $index: p, row: o }) => [
                          e(v, {
                            prop: "tableData." + p + ".type",
                            rules: _.type
                          }, {
                            default: l(() => [
                              e(R, {
                                modelValue: o.type,
                                "onUpdate:modelValue": (a) => o.type = a,
                                placeholder: "请选择",
                                class: "item__input",
                                filterable: "",
                                clearable: "",
                                "popper-class": "select_popper"
                              }, {
                                default: l(() => [
                                  (y(!0), w(I, null, Q(t(O), (a) => (y(), z(U, {
                                    label: a.label,
                                    value: a.value
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
                      e(t(g), { label: "操作" }, {
                        default: l(({ $index: p }) => [
                          e(t(f), {
                            text: "",
                            onClick: () => B(p),
                            style: { "margin-bottom": "18px" }
                          }, {
                            default: l(() => [
                              c(" 删除 ")
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
            k("div", M, [
              e(t(f), { onClick: h }, {
                default: l(() => [
                  c("取消")
                ]),
                _: 1
              }),
              e(t(f), {
                type: "primary",
                onClick: E
              }, {
                default: l(() => [
                  c("保存")
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
}), W = /* @__PURE__ */ J(P, [["__scopeId", "data-v-731b22d7"]]), X = (r) => ({
  graphShadow: r.graphShadow,
  drawerRef: r.drawerRef,
  graphForm: r.graphForm,
  cell: r.cell
}), Y = (r) => r, re = () => ({ name: [
  "org.apache.nifi.kafka.sql.processors.KafkaSQL_1_0"
], excludeKeys: ["topic", "bootstrap.servers", "input字段（自动填入）", "output字段（自动填入）", "web预留（自动填入）", "SQL语句"], selfFormColumn: [
  {
    tag: q,
    ":formdata": "formData",
    prop: "config.properties",
    isFormElem: !1,
    label: "",
    ":data": "formData",
    setup({ params: u }) {
      return { graphShadowCell: X(u) };
    },
    ":graphShadowCell": "graphShadowCell"
  },
  {
    tag: W,
    ":formdata": "formData",
    prop: "config.properties['input字段（自动填入）']",
    setup({ params: u }) {
      return { datas: Y(u) };
    },
    ":datas": "datas"
  },
  {
    tag: L,
    style: "min-height:100px",
    maxHeight: "100px",
    dialogTitle: "header-name-regex",
    isFormElem: !0,
    label: "sql语句",
    elFormItem: { class: "flex-column" }
  }
] });
export {
  re as default
};
