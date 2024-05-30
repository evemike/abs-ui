import "../css/CalColumn-Cz4wzwO1.css";
import { defineComponent as ee, toRefs as te, ref as p, watch as W, resolveComponent as N, openBlock as M, createElementBlock as H, createVNode as a, unref as u, isRef as oe, withCtx as n, createElementVNode as f, createTextVNode as k, toDisplayString as x, createCommentVNode as J, computed as ne, reactive as X, onMounted as se, createBlock as A } from "vue";
import { r as ie, H as Y, aG as Z, b as $, a as Q, D as re, o as de, f as q } from "./vendor.CTqz3lQh.js";
import { C as ue } from "./main.BzEWEJBT.js";
import { _ as ce } from "./_plugin-vue_export-helper.CHgC5LLL.js";
import { d as G, b as pe, e as fe } from "./index.Bv3tHJqj.js";
const me = [
  {
    name: "四则运算函数",
    children: [
      {
        name: "+"
      },
      {
        name: "-"
      },
      {
        name: "*"
      },
      {
        name: "/"
      }
    ]
  }
], _e = ["int", "long", "short", "float", "double"], ve = { class: "nifi-calculate-field" }, he = { class: "field-name" }, be = {
  class: "field_content",
  "h-468": ""
}, Ve = { class: "fun_tree" }, ge = { class: "custom-tree-node" }, xe = { class: "multi-ellipsis" }, ke = { key: 0 }, Ce = { class: "fun_tree field_tree" }, De = { class: "custom-tree-node" }, ye = { class: "multi-ellipsis" }, Ne = { key: 0 }, Fe = { class: "field_body" }, Ee = { class: "field_top" }, Re = { class: "field_bottom" }, we = { class: "field_footer" }, Se = /* @__PURE__ */ ee({
  __name: "Dialog",
  props: {
    modelValue: { type: Boolean },
    fieldData: {},
    inputValue: {}
  },
  emits: ["update:modelValue", "handleUpdateValue"],
  setup(C, { emit: F }) {
    const b = F, K = C, { modelValue: L, fieldData: E, inputValue: I } = te(K), D = p(), z = p(), s = p(), r = p(""), c = p(""), V = p([
      {
        name: "字段",
        children: I.value
      }
    ]), y = p("从左侧列表选择或直接输入函数、字段"), g = p(E.value.fieldName), R = p(E.value.expression), w = {
      children: "children",
      label: "name"
    }, O = (t, o) => {
      var e;
      o.isLeaf && ((e = D.value) == null || e.insertValue(t.name));
    }, d = (t, o) => {
      var e;
      if (o.isLeaf) {
        if (!_e.includes(t == null ? void 0 : t.type.toLowerCase())) {
          y.value = "所选字段需时数值类型的字段";
          return;
        }
        (e = D.value) == null || e.insertValue(t.name), y.value = "从左侧列表选择或直接输入函数、字段";
      }
    }, _ = () => {
      b("update:modelValue", !1);
    }, S = () => {
      var o;
      if (!g.value) {
        Q.error("字段名不可为空");
        return;
      }
      let t = (o = D.value) == null ? void 0 : o.getValue();
      if (t === "") {
        Q.error("表达式不可为空");
        return;
      }
      b("handleUpdateValue", {
        ...E.value,
        fieldName: g.value,
        expression: t
      }), _();
    };
    W(r, (t) => {
      z.value.filter(t);
    });
    const U = (t, o) => t ? o.name.includes(t) : !0;
    W(c, (t) => {
      s.value.filter(t);
    });
    const T = (t, o) => t ? o.name.includes(t) : !0;
    return (t, o) => {
      const e = N("el-input"), i = N("el-tooltip");
      return M(), H("div", ve, [
        a(u(ie), {
          modelValue: u(L),
          "onUpdate:modelValue": o[3] || (o[3] = (l) => oe(L) ? L.value = l : null),
          title: "新增字段",
          "destroy-on-close": "",
          "w-900": "",
          "before-close": _
        }, {
          default: n(() => [
            f("div", he, [
              k(" 新增字段名 "),
              a(e, {
                modelValue: g.value,
                "onUpdate:modelValue": o[0] || (o[0] = (l) => g.value = l)
              }, null, 8, ["modelValue"])
            ]),
            f("div", be, [
              f("div", Ve, [
                a(e, {
                  modelValue: r.value,
                  "onUpdate:modelValue": o[1] || (o[1] = (l) => r.value = l),
                  placeholder: "搜索函数",
                  "prefix-icon": u(Y)
                }, null, 8, ["modelValue", "prefix-icon"]),
                a(u(Z), {
                  ref_key: "funTreeRef",
                  ref: z,
                  "default-expand-all": "",
                  data: u(me),
                  props: w,
                  onNodeClick: O,
                  "filter-node-method": U
                }, {
                  default: n(({ node: l, data: m }) => [
                    f("div", ge, [
                      a(i, null, {
                        content: n(() => [
                          k(x(l.label), 1)
                        ]),
                        default: n(() => [
                          f("div", xe, x(l.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      m.children && m.children.length > 0 ? (M(), H("span", ke, " (" + x(m.children.length) + ") ", 1)) : J("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              f("div", Ce, [
                a(e, {
                  modelValue: c.value,
                  "onUpdate:modelValue": o[2] || (o[2] = (l) => c.value = l),
                  placeholder: "搜索字段",
                  "prefix-icon": u(Y)
                }, null, 8, ["modelValue", "prefix-icon"]),
                a(u(Z), {
                  ref_key: "fieldTreeRef",
                  ref: s,
                  "default-expand-all": "",
                  data: V.value,
                  props: w,
                  onNodeClick: d,
                  "filter-node-method": T
                }, {
                  default: n(({ node: l, data: m }) => [
                    f("div", De, [
                      a(i, null, {
                        content: n(() => [
                          k(x(l.label), 1)
                        ]),
                        default: n(() => [
                          f("div", ye, x(l.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      m.children && m.children.length > 0 ? (M(), H("span", Ne, " (" + x(m.children.length) + ") ", 1)) : J("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              f("div", Fe, [
                f("div", Ee, [
                  a(ue, {
                    ref_key: "codeEditorRef",
                    ref: D,
                    "model-value": R.value
                  }, null, 8, ["model-value"])
                ]),
                f("div", Re, x(y.value), 1)
              ])
            ]),
            f("div", we, [
              a(u($), { onClick: _ }, {
                default: n(() => [
                  k("取消")
                ]),
                _: 1
              }),
              a(u($), {
                type: "primary",
                onClick: S
              }, {
                default: n(() => [
                  k("保存")
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
}), Ue = { class: "multi-ellipsis" }, Te = /* @__PURE__ */ ee({
  __name: "index",
  props: {
    formdata: {},
    graphShadow: {},
    inputV: {},
    expression: {},
    newField: {},
    step: {}
  },
  setup(C) {
    const F = C, { formdata: b, inputV: K, step: L, expression: E, newField: I, graphShadow: D } = te(F);
    let z = ne(() => L.value === "running");
    const s = p(), r = p(K.value), c = p(!1), V = p(), y = p(0), g = () => {
      d.tableData.push({
        fieldName: "",
        expression: "",
        prompt: ""
      });
    }, R = (e, i) => {
      V.value = e, y.value = i, c.value = !0;
    }, w = (e) => {
      d.tableData[y.value] = e;
    }, O = (e) => {
      d.tableData.splice(e, 1);
    }, d = X({
      tableData: []
    });
    E.value.length > 0 && I.value.length > 0 && (d.tableData = I.value.map((e, i) => ({
      fieldName: I.value[i],
      expression: E.value[i],
      prompt: "",
      visible: !1
    })));
    const _ = (e, i, l) => {
      if (i === "")
        return l(new Error("字段名不能为空"));
      if (d.tableData.filter((P) => P.fieldName === i).length > 1)
        return l(new Error("不可与其他字段重名"));
      l();
    }, S = p(), U = X({
      fieldName: [
        {
          // required: true,
          // message: "字段名不能为空",
          validator: _,
          trigger: "blur"
        }
      ]
      // expression: [
      //   {
      //     required: true,
      //     message: "字段值不能为空",
      //     trigger: "blur",
      //   },
      // ],
    }), T = (e, i) => {
      if (e) {
        if (e.prompt = "", e.visible = !1, e.fieldName === "") {
          e.prompt = "字段名不能为空", e.visible = !0;
          return;
        }
        for (let l = 0; l < d.tableData.length; l++)
          if (d.tableData[l].fieldName === e.fieldName && l !== i) {
            e.prompt = "不可与其他新增字段重名", e.visible = !0;
            return;
          }
        e.prompt = "", e.visible = !1;
      }
    }, t = (e) => {
      e && (e.prompt = "", e.visible = !1);
    };
    se(() => {
      D.value.set(b.value.id, "checkForm", o), D.value.set(b.value.id, "tableData", d.tableData);
    });
    const o = () => new Promise((e) => {
      var i;
      (i = S.value) == null || i.validate((l, m) => {
        l ? e(d.tableData) : (Q.error(Object.values({ ...m })[0][0].message), e(!1));
      });
    });
    return (e, i) => {
      const l = N("el-input"), m = N("el-tooltip"), P = N("el-form-item"), j = N("el-table-column"), le = N("el-table"), ae = N("el-form");
      return M(), H("div", {
        class: "nifi-calculate",
        ref_key: "calculateRef",
        ref: s
      }, [
        k(" 新增字段 "),
        a(u($), {
          type: "primary",
          onClick: g,
          style: { "margin-left": "12px" }
        }, {
          default: n(() => [
            k(" 新增字段 ")
          ]),
          _: 1
        }),
        a(ae, {
          ref_key: "formRef",
          ref: S,
          model: d,
          rules: U,
          "label-width": "108px",
          inline: !0,
          disabled: u(z)
        }, {
          default: n(() => [
            a(le, {
              data: d.tableData,
              "max-height": "400",
              "row-style": { height: "45px" },
              "header-cell-style": {
                backgroundColor: "#F8F9FC",
                borderColor: "transparent"
              }
            }, {
              default: n(() => [
                a(j, { label: "字段名" }, {
                  default: n(({ $index: v, row: h }) => [
                    a(P, {
                      prop: "tableData." + v + ".fieldName",
                      rules: U.fieldName
                    }, {
                      default: n(() => [
                        a(m, {
                          effect: "customized",
                          content: h.prompt,
                          visible: h.visible
                        }, {
                          default: n(() => [
                            a(l, {
                              modelValue: h.fieldName,
                              "onUpdate:modelValue": (B) => h.fieldName = B,
                              placeholder: "请输入",
                              class: "item__input",
                              clearable: "",
                              onBlur: (B) => h.fieldName = B.target.value.trim(),
                              onMouseenter: (B) => T(h, v),
                              onMouseleave: (B) => t(h)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "onMouseenter", "onMouseleave"])
                          ]),
                          _: 2
                        }, 1032, ["content", "visible"])
                      ]),
                      _: 2
                    }, 1032, ["prop", "rules"])
                  ]),
                  _: 1
                }),
                a(j, {
                  label: "字段值",
                  width: "300"
                }, {
                  default: n(({ row: v, $index: h }) => [
                    v.expression ? (M(), A(m, { key: 0 }, {
                      content: n(() => [
                        k(x(v.expression), 1)
                      ]),
                      default: n(() => [
                        f("div", Ue, [
                          f("div", null, x(v.expression), 1),
                          a(u($), {
                            icon: u(re),
                            onClick: (B) => R(v, h)
                          }, null, 8, ["icon", "onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1024)) : (M(), A(u($), {
                      key: 1,
                      type: "primary",
                      link: "",
                      onClick: (B) => R(v, h)
                    }, {
                      default: n(() => [
                        k(" 添加字段值 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))
                  ]),
                  _: 1
                }),
                a(j, { label: "操作" }, {
                  default: n(({ $index: v }) => [
                    a(u($), {
                      icon: u(de),
                      onClick: () => O(v)
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])
          ]),
          _: 1
        }, 8, ["model", "rules", "disabled"]),
        c.value ? (M(), A(Se, {
          key: 0,
          modelValue: c.value,
          "onUpdate:modelValue": i[0] || (i[0] = (v) => c.value = v),
          fieldData: V.value,
          inputValue: r.value,
          onHandleUpdateValue: w
        }, null, 8, ["modelValue", "fieldData", "inputValue"])) : J("", !0)
      ], 512);
    };
  }
}), Be = /* @__PURE__ */ ce(Te, [["__scopeId", "data-v-f6a43327"]]), ze = () => {
  let C = [], F = [], b = [];
  const K = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.CalColumn_2_0"], excludeKeys: ["new-field", "expression", "output-param"], selfFormColumn: [
    {
      tag: Be,
      // propInput: "config.properties['col-selector-input']",
      // propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup({ params: s }) {
        return {
          inputV: C,
          expression: F,
          newField: b,
          step: s.step.value,
          graphShadow: s.graphShadow
        };
      },
      ":inputV": "inputV",
      ":expression": "expression",
      ":newField": "newField",
      ":step": "step",
      ":graphShadow": "graphShadow"
    }
  ], hooksOpen: (s, r) => {
    C = [], F = [], b = [];
    let { source: c } = r.event, V = c.get(s.id).component.config.properties;
    F = G(V.expression), b = G(V["new-field"]), C = pe(s, r, K);
  }, hooksSubmit: (s, r) => {
    var g, R, w, O, d;
    fe(s, r);
    let c = ((g = r.event.shadow) == null ? void 0 : g.get(s.id).tableData) ?? [], V = c.filter((_) => _.fieldName === ""), y = new Set(
      c.filter((_) => _.fieldName)
    );
    if (V.length > 0)
      throw (R = r.event.shadow) == null || R.get(s.id).checkForm(), new Error("字段名不能为空");
    if (y.size !== c.length)
      throw (w = r.event.shadow) == null || w.get(s.id).checkForm(), new Error("不可与其他字段重名");
    {
      let _ = [], S = [], U = [...C], T = r.event.source.get(s.id).component;
      c.forEach((t) => {
        _.push(t.expression), S.push(t.fieldName), U.push({
          doc: "",
          name: t.fieldName,
          originalValue: "",
          type: "STRING"
        });
      }), q(
        T,
        "config.properties['expression']",
        G(_)
      ), q(
        T,
        "config.properties['new-field']",
        G(S)
      ), q(
        T,
        "config.properties['output-param']",
        G(U)
      ), (O = r.event.shadow) == null || delete O.get(s.id).tableData, (d = r.event.shadow) == null || delete d.get(s.id).checkForm;
    }
  } };
};
export {
  ze as default
};
