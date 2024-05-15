import "../css/RowFilter-DaF_nI-8.css";
import { defineComponent as J, toRefs as j, resolveComponent as c, openBlock as r, createElementBlock as h, createElementVNode as k, normalizeClass as H, unref as e, createVNode as l, withCtx as o, Fragment as T, renderList as L, ref as b, createBlock as E, createCommentVNode as le, createTextVNode as C, onMounted as oe } from "vue";
import { j as te, f as B, a5 as ae, g as Q } from "./vendor.vR4RX31U.js";
import { _ as K } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const ne = {
  class: "filter-logical",
  flex: "",
  "flex-col": "",
  "items-center": "",
  "justify-center": ""
}, re = /* @__PURE__ */ J({
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
  setup(p, { emit: S }) {
    const x = p, t = S, { modelValue: n, isView: v } = j(x), _ = [
      { label: "或", value: "or" },
      { label: "且", value: "and" }
    ], R = (f) => {
      t("update:modelValue", f);
    };
    return (f, m) => {
      const $ = c("el-option"), s = c("el-select");
      return r(), h("div", ne, [
        k("div", {
          class: H(["logical-line", [e(n) == "or" ? "border-or" : "border-and"]])
        }, null, 2),
        k("div", {
          class: H(["logical-content", [e(n) == "or" ? "or" : "and"]])
        }, [
          l(s, {
            "model-value": e(n),
            disabled: e(v),
            onChange: R
          }, {
            default: o(() => [
              (r(), h(T, null, L(_, (V) => l($, {
                label: V.label,
                value: V.value,
                key: V.value
              }, null, 8, ["label", "value"])), 64))
            ]),
            _: 1
          }, 8, ["model-value", "disabled"])
        ], 2)
      ]);
    };
  }
}), se = /* @__PURE__ */ K(re, [["__scopeId", "data-v-49d003c7"]]), ue = { class: "filter-wrap flex" }, ie = { class: "filter-rules flex-1" }, de = {
  key: 0,
  class: "filter-rule-item"
}, pe = { class: "rule-item-btns flex items-center" }, ce = { class: "flex flex-col items-start" }, fe = /* @__PURE__ */ J({
  __name: "filter",
  props: {
    condition: {},
    isView: { type: Boolean },
    inputValue: {}
  },
  emits: ["delAllNode"],
  setup(p, { expose: S, emit: x }) {
    const t = p, { condition: n, isView: v, inputValue: _ } = j(t), R = x, f = b(), m = b({
      field: [{ required: !0, message: "字段不能为空", trigger: "change" }],
      compare: [{ required: !0, message: "规则不能为空", trigger: "change" }],
      value: [{ required: !0, message: "值不能为空", trigger: "blur" }]
    }), $ = [
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
    ], s = b(!1), V = () => {
      s.value = !0;
    }, F = () => {
      s.value = !1;
    }, N = () => ({
      field: "",
      compare: "",
      value: ""
    }), M = () => ({
      operator: "or",
      subCondition: [N()]
    }), O = (u = []) => {
      u.push(N()), F();
    }, w = (u = []) => {
      u.push(M()), F();
    }, g = (u = [], i) => {
      u.splice(i, 1), u.length == 0 && R("delAllNode");
    }, y = b(), A = b(!0);
    return S({
      validateEvent: async () => {
        try {
          if (y.value && y.value.length > 0)
            for (const u of y.value)
              await u.validateEvent() || (A.value = !1);
          await f.value.validate();
        } catch {
          A.value = !1;
        }
        return A.value;
      }
    }), (u, i) => {
      const z = c("el-option"), P = c("el-select"), G = c("el-form-item"), U = c("el-col"), X = c("el-input"), D = c("el-button"), Y = c("el-row"), Z = c("el-form"), ee = c("el-popover");
      return r(), h("div", ue, [
        l(se, {
          class: "logical-container",
          modelValue: e(n).operator,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => e(n).operator = d),
          isView: e(v)
        }, null, 8, ["modelValue", "isView"]),
        k("div", ie, [
          l(Z, {
            ref_key: "formRef",
            ref: f,
            model: e(n)
          }, {
            default: o(() => [
              (r(!0), h(T, null, L(e(n).subCondition, (d, I) => (r(), h("div", { key: I }, [
                d.subCondition ? (r(), E(W, {
                  key: 1,
                  ref_for: !0,
                  ref_key: "filterRef",
                  ref: y,
                  condition: d,
                  "input-value": e(_),
                  isView: !1,
                  onDelAllNode: (a) => g(e(n).subCondition, I)
                }, null, 8, ["condition", "input-value", "onDelAllNode"])) : (r(), h("div", de, [
                  l(Y, { gutter: 10 }, {
                    default: o(() => [
                      l(U, { span: 8 }, {
                        default: o(() => [
                          l(G, {
                            prop: `subCondition.${I}.field`,
                            rules: m.value.field
                          }, {
                            default: o(() => [
                              l(P, {
                                "popper-class": "select_popper",
                                modelValue: d.field,
                                "onUpdate:modelValue": (a) => d.field = a,
                                placeholder: "请选择",
                                clearable: "",
                                disabled: e(v)
                              }, {
                                default: o(() => [
                                  (r(!0), h(T, null, L(e(_), (a) => (r(), E(z, {
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
                      l(U, { span: 6 }, {
                        default: o(() => [
                          l(G, {
                            prop: `subCondition.${I}.compare`,
                            rules: m.value.compare
                          }, {
                            default: o(() => [
                              l(P, {
                                "popper-class": "select_popper",
                                modelValue: d.compare,
                                "onUpdate:modelValue": (a) => d.compare = a,
                                placeholder: "请选择",
                                clearable: "",
                                disabled: e(v)
                              }, {
                                default: o(() => [
                                  (r(), h(T, null, L($, (a) => l(z, {
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
                      l(U, { span: 8 }, {
                        default: o(() => [
                          l(G, {
                            prop: `subCondition.${I}.value`,
                            rules: m.value.value
                          }, {
                            default: o(() => [
                              l(X, {
                                modelValue: d.value,
                                "onUpdate:modelValue": (a) => d.value = a,
                                placeholder: "请输入，多个值请用,隔开",
                                disabled: e(v)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["prop", "rules"])
                        ]),
                        _: 2
                      }, 1024),
                      l(U, { span: 2 }, {
                        default: o(() => [
                          k("div", pe, [
                            e(v) ? le("", !0) : (r(), E(D, {
                              key: 0,
                              link: "",
                              icon: e(te),
                              style: { height: "32px" },
                              onClick: (a) => g(e(n).subCondition, I)
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
            visible: s.value,
            trigger: "click"
          }, {
            reference: o(() => [
              l(D, {
                type: "primary",
                class: "btn-add",
                onClick: V
              }, {
                default: o(() => [
                  C(" 添加 ")
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              k("div", ce, [
                l(D, {
                  link: "",
                  onClick: i[1] || (i[1] = (d) => O(e(n).subCondition))
                }, {
                  default: o(() => [
                    C(" 条件 ")
                  ]),
                  _: 1
                }),
                l(D, {
                  link: "",
                  style: { "margin-left": "0" },
                  onClick: i[2] || (i[2] = (d) => w(e(n).subCondition))
                }, {
                  default: o(() => [
                    C(" 条件组 ")
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
}), W = /* @__PURE__ */ K(fe, [["__scopeId", "data-v-d341b069"]]), ve = { class: "nifi-filter" }, _e = {
  class: "filter_content",
  "h-468": ""
}, me = { class: "filter_footer" }, ge = /* @__PURE__ */ J({
  __name: "index",
  props: {
    formdata: {},
    graphShadowCell: {},
    propInput: {},
    propOutput: {}
  },
  setup(p) {
    const S = p, { formdata: x, graphShadowCell: t, propInput: n, propOutput: v } = j(S), _ = b(!1), R = () => {
      _.value = !0;
    }, f = () => {
      _.value = !1;
    }, m = b([]), $ = () => {
      let O = t.value.graphShadow.get(
        t.value.cell.id
      ).inCells;
      for (let g of O) {
        let y = t.value.graphShadow.get(g);
        if (y) {
          let A = y.source.value, q = t.value.graphShadow.get(A), u = Q(q.cell.data.component, v.value);
          if (u)
            m.value = JSON.parse(u);
          else {
            let i = q.cell.data.component.config.properties["output字段（自动填入）"];
            i && (m.value = JSON.parse(i));
          }
        }
      }
      t.value.graphShadow.set(
        t.value.cell,
        "My_row-filter-output",
        m.value
      );
      let w = Q(x.value, n.value);
      w && (s.value = JSON.parse(w), t.value.graphShadow.set(
        t.value.cell,
        "My_row-filter-expression",
        s.value
      ));
    }, s = b(), V = () => {
      s.value = {};
    }, F = () => {
      s.value = {
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
    }, N = b(), M = async () => {
      N.value ? await N.value.validateEvent() && (t.value.graphShadow.set(
        t.value.cell,
        "My_row-filter-expression",
        s.value
      ), f()) : f();
    };
    return oe(() => {
      $();
    }), (O, w) => (r(), h("div", ve, [
      C(" 行过滤配置: "),
      l(e(B), {
        type: "primary",
        onClick: R,
        style: { "margin-left": "12px" }
      }, {
        default: o(() => [
          C(" 行过滤配置 ")
        ]),
        _: 1
      }),
      l(e(ae), {
        modelValue: _.value,
        "onUpdate:modelValue": w[0] || (w[0] = (g) => _.value = g),
        title: "行过滤配置",
        "destroy-on-close": "",
        "h-642": "",
        "before-close": f
      }, {
        default: o(() => {
          var g;
          return [
            k("div", _e, [
              (g = s.value) != null && g.isTop ? (r(), E(W, {
                key: 0,
                ref_key: "filterRef",
                ref: N,
                condition: s.value,
                "input-value": m.value,
                "is-view": !1,
                onDelAllNode: V
              }, null, 8, ["condition", "input-value"])) : (r(), E(e(B), {
                key: 1,
                onClick: F
              }, {
                default: o(() => [
                  C(" 添加 ")
                ]),
                _: 1
              }))
            ]),
            k("div", me, [
              l(e(B), { onClick: f }, {
                default: o(() => [
                  C("取消")
                ]),
                _: 1
              }),
              l(e(B), {
                type: "primary",
                onClick: M
              }, {
                default: o(() => [
                  C("保存")
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
}), he = /* @__PURE__ */ K(ge, [["__scopeId", "data-v-8bee76f2"]]), be = (p) => ({
  graphShadow: p.graphShadow,
  drawerRef: p.drawerRef,
  graphForm: p.graphForm,
  cell: p.cell
}), ke = () => ({ name: [
  "org.apache.nifi.column.processors.RowFilter_1_0"
], excludeKeys: ["expression", "output-param"], selfFormColumn: [
  {
    tag: he,
    propInput: "config.properties['expression']",
    propOutput: "config.properties['output-param']",
    ":formdata": "formData",
    setup({ params: t }) {
      return { graphShadowCell: be(t) };
    },
    ":graphShadowCell": "graphShadowCell"
  }
] });
export {
  ke as default
};
