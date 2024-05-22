import "../css/RowFilter-BL-u_3Z8.css";
import { defineComponent as j, toRefs as q, resolveComponent as d, openBlock as r, createElementBlock as k, createElementVNode as I, normalizeClass as P, unref as e, createVNode as l, withCtx as o, Fragment as L, renderList as J, ref as C, createBlock as S, createCommentVNode as ee, createTextVNode as x, onMounted as le } from "vue";
import { j as oe, g as te, f as T, a5 as ae, ar as H, a as ne } from "./vendor.CawUkpaF.js";
import { _ as z } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const se = {
  class: "filter-logical",
  flex: "",
  "flex-col": "",
  "items-center": "",
  "justify-center": ""
}, re = /* @__PURE__ */ j({
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
  setup(_, { emit: N }) {
    const h = _, R = N, { modelValue: a, isView: c } = q(h), f = [
      { label: "或", value: "or" },
      { label: "且", value: "and" }
    ], b = (s) => {
      R("update:modelValue", s);
    };
    return (s, u) => {
      const t = d("el-option"), p = d("el-select");
      return r(), k("div", se, [
        I("div", {
          class: P(["logical-line", [e(a) == "or" ? "border-or" : "border-and"]])
        }, null, 2),
        I("div", {
          class: P(["logical-content", [e(a) == "or" ? "or" : "and"]])
        }, [
          l(p, {
            "model-value": e(a),
            disabled: e(c),
            onChange: b
          }, {
            default: o(() => [
              (r(), k(L, null, J(f, (g) => l(t, {
                label: g.label,
                value: g.value,
                key: g.value
              }, null, 8, ["label", "value"])), 64))
            ]),
            _: 1
          }, 8, ["model-value", "disabled"])
        ], 2)
      ]);
    };
  }
}), ue = /* @__PURE__ */ z(re, [["__scopeId", "data-v-49d003c7"]]), ie = { class: "filter-wrap flex" }, pe = { class: "filter-rules flex-1" }, de = {
  key: 0,
  class: "filter-rule-item"
}, ce = { class: "rule-item-btns flex items-center" }, fe = { class: "flex flex-col items-start" }, ve = /* @__PURE__ */ j({
  __name: "filter",
  props: {
    condition: {},
    isView: { type: Boolean },
    inputValue: {}
  },
  emits: ["delAllNode"],
  setup(_, { expose: N, emit: h }) {
    const R = _, { condition: a, isView: c, inputValue: f } = q(R), b = h, s = C(), u = C({
      field: [{ required: !0, message: "字段不能为空", trigger: "change" }],
      compare: [{ required: !0, message: "规则不能为空", trigger: "change" }],
      value: [{ required: !0, message: "值不能为空", trigger: "blur" }]
    }), t = [
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
    ], p = C(!1), g = () => {
      p.value = !0;
    }, V = () => {
      p.value = !1;
    }, O = () => ({
      field: "",
      compare: "",
      value: ""
    }), w = () => ({
      operator: "or",
      subCondition: [O()]
    }), v = (m = []) => {
      m.push(O()), V();
    }, A = (m = []) => {
      m.push(w()), V();
    }, $ = (m = [], y) => {
      m.splice(y, 1), m.length == 0 && b("delAllNode");
    }, D = C(), U = C(!0);
    return N({
      validateEvent: async () => {
        U.value = !0;
        try {
          if (D.value && D.value.length > 0)
            for (const m of D.value)
              await m.validateEvent() || (U.value = !1);
          await s.value.validate();
        } catch {
          U.value = !1;
        }
        return U.value;
      }
    }), (m, y) => {
      const G = d("el-option"), M = d("el-select"), K = d("el-form-item"), B = d("el-col"), W = d("el-input"), F = d("el-button"), X = d("el-row"), Y = d("el-form"), Z = d("el-popover");
      return r(), k("div", ie, [
        l(ue, {
          class: "logical-container",
          modelValue: e(a).operator,
          "onUpdate:modelValue": y[0] || (y[0] = (i) => e(a).operator = i),
          isView: e(c)
        }, null, 8, ["modelValue", "isView"]),
        I("div", pe, [
          l(Y, {
            ref_key: "formRef",
            ref: s,
            model: e(a)
          }, {
            default: o(() => [
              (r(!0), k(L, null, J(e(a).subCondition, (i, E) => (r(), k("div", { key: E }, [
                i.subCondition ? (r(), S(Q, {
                  key: 1,
                  ref_for: !0,
                  ref_key: "filterRef",
                  ref: D,
                  condition: i,
                  "input-value": e(f),
                  isView: !1,
                  onDelAllNode: (n) => $(e(a).subCondition, E)
                }, null, 8, ["condition", "input-value", "onDelAllNode"])) : (r(), k("div", de, [
                  l(X, { gutter: 10 }, {
                    default: o(() => [
                      l(B, { span: 8 }, {
                        default: o(() => [
                          l(K, {
                            prop: `subCondition.${E}.field`,
                            rules: u.value.field
                          }, {
                            default: o(() => [
                              l(M, {
                                "popper-class": "select_popper",
                                modelValue: i.field,
                                "onUpdate:modelValue": (n) => i.field = n,
                                placeholder: "请选择",
                                clearable: "",
                                disabled: e(c)
                              }, {
                                default: o(() => [
                                  (r(!0), k(L, null, J(e(f), (n) => (r(), S(G, {
                                    label: n.name,
                                    value: n.name,
                                    key: n.name
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
                      l(B, { span: 6 }, {
                        default: o(() => [
                          l(K, {
                            prop: `subCondition.${E}.compare`,
                            rules: u.value.compare
                          }, {
                            default: o(() => [
                              l(M, {
                                "popper-class": "select_popper",
                                modelValue: i.compare,
                                "onUpdate:modelValue": (n) => i.compare = n,
                                placeholder: "请选择",
                                clearable: "",
                                disabled: e(c)
                              }, {
                                default: o(() => [
                                  (r(), k(L, null, J(t, (n) => l(G, {
                                    label: n.label,
                                    value: n.value,
                                    key: n.value
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
                      l(B, { span: 8 }, {
                        default: o(() => [
                          l(K, {
                            prop: `subCondition.${E}.value`,
                            rules: u.value.value
                          }, {
                            default: o(() => [
                              l(W, {
                                modelValue: i.value,
                                "onUpdate:modelValue": (n) => i.value = n,
                                placeholder: "请输入，多个值请用,隔开",
                                disabled: e(c)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 2
                      }, 1024),
                      l(B, { span: 2 }, {
                        default: o(() => [
                          I("div", ce, [
                            e(c) ? ee("", !0) : (r(), S(F, {
                              key: 0,
                              link: "",
                              icon: e(oe),
                              style: { height: "32px" },
                              onClick: (n) => $(e(a).subCondition, E)
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
          l(Z, {
            "popper-class": "select_popper",
            visible: p.value,
            trigger: "click"
          }, {
            reference: o(() => [
              l(F, {
                type: "primary",
                class: "btn-add",
                onClick: g
              }, {
                default: o(() => [
                  x(" 添加 ")
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              I("div", fe, [
                l(F, {
                  link: "",
                  onClick: y[1] || (y[1] = (i) => v(e(a).subCondition))
                }, {
                  default: o(() => [
                    x(" 条件 ")
                  ]),
                  _: 1
                }),
                l(F, {
                  link: "",
                  style: { "margin-left": "0" },
                  onClick: y[2] || (y[2] = (i) => A(e(a).subCondition))
                }, {
                  default: o(() => [
                    x(" 条件组 ")
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
}), Q = /* @__PURE__ */ z(ve, [["__scopeId", "data-v-4cc61394"]]), me = { class: "nifi-filter" }, _e = {
  class: "filter_content",
  "h-468": ""
}, be = { class: "filter_footer" }, ge = /* @__PURE__ */ j({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(_) {
    const N = _, { formdata: h, inputV: R, propInput: a, propOutput: c } = q(N), f = C(!1), b = () => {
      f.value = !0;
    }, s = () => {
      f.value = !1;
    }, u = C(R.value), t = C({}), p = () => {
      t.value = {};
    }, g = () => {
      t.value = {
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
    }, V = C(), O = async () => {
      V.value ? await V.value.validateEvent() && (w(), s()) : s();
    }, w = () => {
      H(
        h.value,
        c.value,
        u.value.length === 0 ? "" : JSON.stringify(u.value)
      ), H(
        h.value,
        a.value,
        Object.keys(t.value).length === 0 ? "" : JSON.stringify(t.value)
      );
    };
    return le(() => {
      let v = te(h.value, a.value);
      v && (t.value = JSON.parse(v)), w();
    }), (v, A) => (r(), k("div", me, [
      x(" 行过滤配置: "),
      l(e(T), {
        type: "primary",
        onClick: b,
        style: { "margin-left": "12px" }
      }, {
        default: o(() => [
          x(" 行过滤配置 ")
        ]),
        _: 1
      }),
      l(e(ae), {
        modelValue: f.value,
        "onUpdate:modelValue": A[0] || (A[0] = ($) => f.value = $),
        title: "行过滤配置",
        "destroy-on-close": "",
        "h-642": "",
        "before-close": s
      }, {
        default: o(() => {
          var $;
          return [
            I("div", _e, [
              ($ = t.value) != null && $.isTop ? (r(), S(Q, {
                key: 0,
                ref_key: "filterRef",
                ref: V,
                condition: t.value,
                "input-value": u.value,
                "is-view": !1,
                onDelAllNode: p
              }, null, 8, ["condition", "input-value"])) : (r(), S(e(T), {
                key: 1,
                onClick: g
              }, {
                default: o(() => [
                  x(" 添加 ")
                ]),
                _: 1
              }))
            ]),
            I("div", be, [
              l(e(T), { onClick: s }, {
                default: o(() => [
                  x("取消")
                ]),
                _: 1
              }),
              l(e(T), {
                type: "primary",
                onClick: O
              }, {
                default: o(() => [
                  x("保存")
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
}), Ve = /* @__PURE__ */ z(ge, [["__scopeId", "data-v-a074d3ad"]]), xe = () => {
  let _ = [];
  const N = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.RowFilter_1_0"], excludeKeys: ["expression", "output-param"], selfFormColumn: [
    {
      tag: Ve,
      propInput: "config.properties['expression']",
      propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup() {
        return { inputV: _ };
      },
      ":inputV": "inputV"
    }
  ], hooksOpen: (b, s) => {
    var V;
    _ = [];
    let { id: u } = b, { source: t, shadow: p } = s.event, g = (V = p == null ? void 0 : p.cells.get(u)) == null ? void 0 : V.prevNodes;
    for (let O of g)
      if (t.get(O)) {
        let w = t.get(O).component.config.properties;
        for (let v of N)
          w.hasOwnProperty(v) && (_ = w[v] === "" ? [] : JSON.parse(w[v]));
      }
  }, hooksSubmit: (b, s) => {
    var u, t;
    if (((t = (u = s.event.shadow) == null ? void 0 : u.cells.get(b.id)) == null ? void 0 : t.inCells.size) === 0)
      return ne.error("暂无上游算子，请进行连接"), !1;
  } };
};
export {
  xe as default
};
