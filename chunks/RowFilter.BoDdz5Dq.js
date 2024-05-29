import "../css/RowFilter-Be5T7N-7.css";
import { defineComponent as z, toRefs as G, resolveComponent as r, openBlock as s, createElementBlock as _, createElementVNode as w, normalizeClass as P, unref as e, createVNode as l, withCtx as o, Fragment as L, renderList as q, ref as b, createBlock as U, createCommentVNode as le, createTextVNode as V, onMounted as oe } from "vue";
import { F as te, B as ae, C as T, ag as ne, az as H } from "./vendor.oF5jPd5s.js";
import { _ as j } from "./_plugin-vue_export-helper.CHgC5LLL.js";
import { d as Q, b as se, e as ue } from "./index.DqFN_72b.js";
const re = {
  class: "filter-logical",
  flex: "",
  "flex-col": "",
  "items-center": "",
  "justify-center": ""
}, ie = /* @__PURE__ */ z({
  __name: "logical",
  props: {
    modelValue: {
      type: String,
      default: "or"
    },
    isView: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(f, { emit: C }) {
    const g = f, I = C, { modelValue: t, isView: i } = G(g), d = [
      { label: "或", value: "or" },
      { label: "且", value: "and" }
    ], m = (n) => {
      I("update:modelValue", n);
    };
    return (n, k) => {
      const p = r("el-option"), y = r("el-select");
      return s(), _("div", re, [
        w("div", {
          class: P(["logical-line", [e(t) == "or" ? "border-or" : "border-and"]])
        }, null, 2),
        w("div", {
          class: P(["logical-content", [e(t) == "or" ? "or" : "and"]])
        }, [
          l(y, {
            "model-value": e(t),
            disabled: e(i),
            onChange: m
          }, {
            default: o(() => [
              (s(), _(L, null, q(d, (h) => l(p, {
                label: h.label,
                value: h.value,
                key: h.value
              }, null, 8, ["label", "value"])), 64))
            ]),
            _: 1
          }, 8, ["model-value", "disabled"])
        ], 2)
      ]);
    };
  }
}), de = /* @__PURE__ */ j(ie, [["__scopeId", "data-v-49d003c7"]]), pe = { class: "filter-wrap flex" }, ce = { class: "filter-rules flex-1" }, fe = {
  key: 0,
  class: "filter-rule-item"
}, me = { class: "rule-item-btns flex items-center" }, ve = { class: "flex flex-col items-start" }, _e = /* @__PURE__ */ z({
  __name: "filter",
  props: {
    condition: {},
    isView: { type: Boolean },
    inputValue: {}
  },
  emits: ["delAllNode"],
  setup(f, { expose: C, emit: g }) {
    const I = f, { condition: t, isView: i, inputValue: d } = G(I), m = g, n = b(), k = b({
      field: [{ required: !0, message: "字段不能为空", trigger: "change" }],
      compare: [{ required: !0, message: "规则不能为空", trigger: "change" }],
      value: [{ required: !0, message: "值不能为空", trigger: "blur" }]
    }), p = [
      { label: "等于", value: "==" },
      { label: "不等于", value: "!=" },
      { label: "模糊匹配	", value: "like" },
      { label: "包含", value: "in" },
      { label: "不包含	", value: "notin" },
      { label: "大于", value: ">" },
      { label: "小于", value: "<" },
      { label: "大于等于", value: ">=" },
      { label: "小于等于", value: "<=" }
      // { label: "属于区间", value: "between" },
    ], y = b(!1), h = () => {
      y.value = !0;
    }, $ = () => {
      y.value = !1;
    }, A = () => ({
      field: "",
      compare: "",
      value: ""
    }), O = () => ({
      operator: "or",
      subCondition: [A()]
    }), N = (c = []) => {
      c.push(A()), $();
    }, D = (c = []) => {
      c.push(O()), $();
    }, x = (c = [], v) => {
      c.splice(v, 1), c.length == 0 && m("delAllNode");
    }, E = b(), B = b(!0);
    return C({
      validateEvent: async () => {
        B.value = !0;
        try {
          if (E.value && E.value.length > 0)
            for (const c of E.value)
              await c.validateEvent() || (B.value = !1);
          await n.value.validate();
        } catch {
          B.value = !1;
        }
        return B.value;
      }
    }), (c, v) => {
      const J = r("el-option"), M = r("el-select"), K = r("el-form-item"), F = r("el-col"), X = r("el-input"), S = r("el-button"), Y = r("el-row"), Z = r("el-form"), ee = r("el-popover");
      return s(), _("div", pe, [
        l(de, {
          class: "logical-container",
          modelValue: e(t).operator,
          "onUpdate:modelValue": v[0] || (v[0] = (u) => e(t).operator = u),
          isView: e(i)
        }, null, 8, ["modelValue", "isView"]),
        w("div", ce, [
          l(Z, {
            ref_key: "formRef",
            ref: n,
            model: e(t)
          }, {
            default: o(() => [
              (s(!0), _(L, null, q(e(t).subCondition, (u, R) => (s(), _("div", { key: R }, [
                u.subCondition ? (s(), U(W, {
                  key: 1,
                  ref_for: !0,
                  ref_key: "filterRef",
                  ref: E,
                  condition: u,
                  "input-value": e(d),
                  isView: !1,
                  onDelAllNode: (a) => x(e(t).subCondition, R)
                }, null, 8, ["condition", "input-value", "onDelAllNode"])) : (s(), _("div", fe, [
                  l(Y, { gutter: 10 }, {
                    default: o(() => [
                      l(F, { span: 8 }, {
                        default: o(() => [
                          l(K, {
                            prop: `subCondition.${R}.field`,
                            rules: k.value.field
                          }, {
                            default: o(() => [
                              l(M, {
                                "popper-class": "select_popper",
                                modelValue: u.field,
                                "onUpdate:modelValue": (a) => u.field = a,
                                placeholder: "请选择",
                                clearable: "",
                                disabled: e(i)
                              }, {
                                default: o(() => [
                                  (s(!0), _(L, null, q(e(d), (a) => (s(), U(J, {
                                    label: a.name,
                                    value: a.name,
                                    key: a.name
                                  }, null, 8, ["label", "value"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 2
                      }, 1024),
                      l(F, { span: 6 }, {
                        default: o(() => [
                          l(K, {
                            prop: `subCondition.${R}.compare`,
                            rules: k.value.compare
                          }, {
                            default: o(() => [
                              l(M, {
                                "popper-class": "select_popper",
                                modelValue: u.compare,
                                "onUpdate:modelValue": (a) => u.compare = a,
                                placeholder: "请选择",
                                clearable: "",
                                disabled: e(i)
                              }, {
                                default: o(() => [
                                  (s(), _(L, null, q(p, (a) => l(J, {
                                    label: a.label,
                                    value: a.value,
                                    key: a.value
                                  }, null, 8, ["label", "value"])), 64))
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 2
                      }, 1024),
                      l(F, { span: 8 }, {
                        default: o(() => [
                          l(K, {
                            prop: `subCondition.${R}.value`,
                            rules: k.value.value
                          }, {
                            default: o(() => [
                              l(X, {
                                modelValue: u.value,
                                "onUpdate:modelValue": (a) => u.value = a,
                                placeholder: "请输入，多个值请用,隔开",
                                disabled: e(i)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 2
                      }, 1024),
                      l(F, { span: 2 }, {
                        default: o(() => [
                          w("div", me, [
                            e(i) ? le("", !0) : (s(), U(S, {
                              key: 0,
                              link: "",
                              icon: e(te),
                              style: { height: "32px" },
                              onClick: (a) => x(e(t).subCondition, R)
                            }, null, 8, ["icon", "onClick"]))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]))
              ]))), 128))
            ]),
            _: 1
          }, 8, ["model"]),
          l(ee, {
            "popper-class": "select_popper",
            visible: y.value,
            trigger: "click"
          }, {
            reference: o(() => [
              l(S, {
                type: "primary",
                class: "btn-add",
                onClick: h
              }, {
                default: o(() => [
                  V(" 添加 ")
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              w("div", ve, [
                l(S, {
                  link: "",
                  onClick: v[1] || (v[1] = (u) => N(e(t).subCondition))
                }, {
                  default: o(() => [
                    V(" 条件 ")
                  ]),
                  _: 1
                }),
                l(S, {
                  link: "",
                  style: { "margin-left": "0" },
                  onClick: v[2] || (v[2] = (u) => D(e(t).subCondition))
                }, {
                  default: o(() => [
                    V(" 条件组 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["visible"])
        ])
      ]);
    };
  }
}), W = /* @__PURE__ */ j(_e, [["__scopeId", "data-v-4cc61394"]]), be = { class: "nifi-filter" }, ge = {
  class: "filter_content",
  "h-468": ""
}, Ve = { class: "filter_footer" }, Ce = /* @__PURE__ */ z({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(f) {
    const C = f, { formdata: g, inputV: I, propInput: t, propOutput: i } = G(C), d = b(!1), m = () => {
      d.value = !0;
    }, n = () => {
      d.value = !1;
    }, k = b(I.value), p = b({}), y = () => {
      p.value = {};
    }, h = () => {
      p.value = {
        operator: "or",
        isTop: !0,
        // 最外层
        subCondition: [
          {
            field: "",
            compare: "",
            value: ""
          }
        ]
      };
    }, $ = b(), A = async () => {
      $.value ? await $.value.validateEvent() && (O(), n()) : (O(), n());
    }, O = () => {
      H(g.value, i.value, Q(k.value)), H(g.value, t.value, Q(p.value));
    };
    return oe(() => {
      let N = ae(g.value, t.value);
      N && (p.value = JSON.parse(N)), O();
    }), (N, D) => (s(), _("div", be, [
      V(" 行过滤配置: "),
      l(e(T), {
        type: "primary",
        onClick: m,
        style: { "margin-left": "12px" }
      }, {
        default: o(() => [
          V(" 行过滤配置 ")
        ]),
        _: 1
      }),
      l(e(ne), {
        modelValue: d.value,
        "onUpdate:modelValue": D[0] || (D[0] = (x) => d.value = x),
        title: "行过滤配置",
        "destroy-on-close": "",
        "h-642": "",
        "before-close": n
      }, {
        default: o(() => {
          var x;
          return [
            w("div", ge, [
              (x = p.value) != null && x.isTop ? (s(), U(W, {
                key: 0,
                ref_key: "filterRef",
                ref: $,
                condition: p.value,
                "input-value": k.value,
                "is-view": !1,
                onDelAllNode: y
              }, null, 8, ["condition", "input-value"])) : (s(), U(e(T), {
                key: 1,
                onClick: h
              }, {
                default: o(() => [
                  V(" 添加 ")
                ]),
                _: 1
              }))
            ]),
            w("div", Ve, [
              l(e(T), { onClick: n }, {
                default: o(() => [
                  V("取消")
                ]),
                _: 1
              }),
              l(e(T), {
                type: "primary",
                onClick: A
              }, {
                default: o(() => [
                  V("保存")
                ]),
                _: 1
              })
            ])
          ];
        }),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), ke = /* @__PURE__ */ j(Ce, [["__scopeId", "data-v-a87cf31a"]]), Ne = () => {
  let f = [];
  const C = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.RowFilter_1_0"], excludeKeys: ["expression", "output-param"], selfFormColumn: [
    {
      tag: ke,
      propInput: "config.properties['expression']",
      propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup() {
        return { inputV: f };
      },
      ":inputV": "inputV"
    }
  ], hooksOpen: (m, n) => {
    f = [], f = se(m, n, C);
  }, hooksSubmit: (m, n) => {
    ue(m, n);
  } };
};
export {
  Ne as default
};
