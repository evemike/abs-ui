import "../css/CalColumn-B-efF3NR.css";
import { defineComponent as le, toRefs as te, ref as r, watch as W, resolveComponent as C, openBlock as y, createElementBlock as P, createVNode as o, unref as s, isRef as oe, withCtx as i, createElementVNode as u, createTextVNode as g, toDisplayString as h, createCommentVNode as q, computed as ne, reactive as X, onMounted as ie, createBlock as H } from "vue";
import { a5 as se, m as Y, az as Z, f as E, a as Q, g as ee, i as re, j as ue } from "./vendor.CawUkpaF.js";
import { C as de } from "./main.C9B4zdL3.js";
import { _ as ce } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const pe = [
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
], fe = ["int", "long", "short", "float", "double"], me = { class: "nifi-calculate-field" }, _e = { class: "field-name" }, ve = {
  class: "field_content",
  "h-468": ""
}, he = { class: "fun_tree" }, ge = { class: "custom-tree-node" }, be = { class: "multi-ellipsis" }, Ve = { key: 0 }, Ce = { class: "fun_tree field_tree" }, xe = { class: "custom-tree-node" }, ke = { class: "multi-ellipsis" }, ye = { key: 0 }, Ne = { class: "field_body" }, De = { class: "field_top" }, Se = { class: "field_bottom" }, Re = { class: "field_footer" }, Fe = /* @__PURE__ */ le({
  __name: "Dialog",
  props: {
    modelValue: { type: Boolean },
    fieldData: {},
    inputValue: {}
  },
  emits: ["update:modelValue", "handleUpdateValue"],
  setup(v, { emit: M }) {
    const d = M, U = v, { modelValue: T, fieldData: O, inputValue: L } = te(U), N = r(), w = r(), J = r(), b = r(""), V = r(""), $ = r([
      {
        name: "字段",
        children: L.value
      }
    ]), D = r("从左侧列表选择或直接输入函数、字段"), S = r(O.value.fieldName), I = r(O.value.expression), j = {
      children: "children",
      label: "name"
    }, A = (a, n) => {
      var f;
      n.isLeaf && ((f = N.value) == null || f.insertValue(a.name));
    }, c = (a, n) => {
      var f;
      if (n.isLeaf) {
        if (!fe.includes(a == null ? void 0 : a.type.toLowerCase())) {
          D.value = "所选字段需时数值类型的字段";
          return;
        }
        (f = N.value) == null || f.insertValue(a.name), D.value = "从左侧列表选择或直接输入函数、字段";
      }
    }, B = () => {
      d("update:modelValue", !1);
    }, x = () => {
      var n;
      if (!S.value) {
        Q.error("字段名不可为空");
        return;
      }
      let a = (n = N.value) == null ? void 0 : n.getValue();
      if (a === "") {
        Q.error("表达式不可为空");
        return;
      }
      d("handleUpdateValue", {
        ...O.value,
        fieldName: S.value,
        expression: a
      }), B();
    };
    W(b, (a) => {
      w.value.filter(a);
    });
    const z = (a, n) => a ? n.name.includes(a) : !0;
    W(V, (a) => {
      J.value.filter(a);
    });
    const G = (a, n) => a ? n.name.includes(a) : !0;
    return (a, n) => {
      const f = C("el-input"), e = C("el-tooltip");
      return y(), P("div", me, [
        o(s(se), {
          modelValue: s(T),
          "onUpdate:modelValue": n[3] || (n[3] = (l) => oe(T) ? T.value = l : null),
          title: "新增字段",
          "destroy-on-close": "",
          "w-900": "",
          "h-642": "",
          "before-close": B
        }, {
          default: i(() => [
            u("div", _e, [
              g(" 新增字段名 "),
              o(f, {
                modelValue: S.value,
                "onUpdate:modelValue": n[0] || (n[0] = (l) => S.value = l)
              }, null, 8, ["modelValue"])
            ]),
            u("div", ve, [
              u("div", he, [
                o(f, {
                  modelValue: b.value,
                  "onUpdate:modelValue": n[1] || (n[1] = (l) => b.value = l),
                  placeholder: "搜索函数",
                  "prefix-icon": s(Y)
                }, null, 8, ["modelValue", "prefix-icon"]),
                o(s(Z), {
                  ref_key: "funTreeRef",
                  ref: w,
                  "default-expand-all": "",
                  data: s(pe),
                  props: j,
                  onNodeClick: A,
                  "filter-node-method": z
                }, {
                  default: i(({ node: l, data: t }) => [
                    u("div", ge, [
                      o(e, null, {
                        content: i(() => [
                          g(h(l.label), 1)
                        ]),
                        default: i(() => [
                          u("div", be, h(l.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      t.children && t.children.length > 0 ? (y(), P("span", Ve, " (" + h(t.children.length) + ") ", 1)) : q("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              u("div", Ce, [
                o(f, {
                  modelValue: V.value,
                  "onUpdate:modelValue": n[2] || (n[2] = (l) => V.value = l),
                  placeholder: "搜索字段",
                  "prefix-icon": s(Y)
                }, null, 8, ["modelValue", "prefix-icon"]),
                o(s(Z), {
                  ref_key: "fieldTreeRef",
                  ref: J,
                  "default-expand-all": "",
                  data: $.value,
                  props: j,
                  onNodeClick: c,
                  "filter-node-method": G
                }, {
                  default: i(({ node: l, data: t }) => [
                    u("div", xe, [
                      o(e, null, {
                        content: i(() => [
                          g(h(l.label), 1)
                        ]),
                        default: i(() => [
                          u("div", ke, h(l.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      t.children && t.children.length > 0 ? (y(), P("span", ye, " (" + h(t.children.length) + ") ", 1)) : q("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              u("div", Ne, [
                u("div", De, [
                  o(de, {
                    ref_key: "codeEditorRef",
                    ref: N,
                    "model-value": I.value
                  }, null, 8, ["model-value"])
                ]),
                u("div", Se, h(D.value), 1)
              ])
            ]),
            u("div", Re, [
              o(s(E), { onClick: B }, {
                default: i(() => [
                  g("取消")
                ]),
                _: 1
              }),
              o(s(E), {
                type: "primary",
                onClick: x
              }, {
                default: i(() => [
                  g("保存")
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
}), Ee = { class: "multi-ellipsis" }, Ue = /* @__PURE__ */ le({
  __name: "index",
  props: {
    formdata: {},
    graphShadowCell: {},
    propOutput: {}
  },
  setup(v) {
    const M = v, { graphShadowCell: d, propOutput: U, formdata: T } = te(M);
    let O = ne(
      () => d.value.graphShadow.get(d.value.cell.id).step.value === "running"
    ), L = ee(T.value, "config.properties"), N = L.expression, w = L["new-field"];
    const J = r(), b = r([]), V = r(!1), $ = r(), D = r(0), S = () => {
      c.tableData.push({
        fieldName: "",
        expression: "",
        prompt: ""
      });
    }, I = (e, l) => {
      $.value = e, D.value = l, V.value = !0;
    }, j = (e) => {
      c.tableData[D.value] = e;
    }, A = (e) => {
      c.tableData.splice(e, 1);
    }, c = X({
      // tableData: data.filter((f: ICalculate.TableValue) => f.originalValue !== ""),
      tableData: []
    });
    if (w !== "") {
      let e = JSON.parse(w), l = JSON.parse(N);
      c.tableData = e.map((t, m) => ({
        fieldName: e[m],
        expression: l[m],
        prompt: "",
        visible: !1
      }));
    }
    const B = (e, l, t) => {
      if (l === "")
        return t(new Error("字段名不能为空"));
      if (c.tableData.filter((R) => R.fieldName === l).length > 1)
        return t(new Error("不可与其他新增字段重名"));
      t();
    }, x = r(), z = X({
      fieldName: [
        {
          // required: true,
          // message: "字段名不能为空",
          validator: B,
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
    }), G = (e, l) => {
      if (e) {
        if (e.prompt = "", e.visible = !1, e.fieldName === "") {
          e.prompt = "字段名不能为空", e.visible = !0;
          return;
        }
        for (let t = 0; t < c.tableData.length; t++)
          if (c.tableData[t].fieldName === e.fieldName && t !== l) {
            e.prompt = "不可与其他新增字段重名", e.visible = !0;
            return;
          }
        e.prompt = "", e.visible = !1;
      }
    }, a = (e) => {
      e && (e.prompt = "", e.visible = !1);
    }, n = () => {
      let e = d.value.graphShadow.get(
        d.value.cell.id
      ).inCells;
      for (let l of e) {
        let t = d.value.graphShadow.get(l);
        if (t) {
          let m = t.source.value, R = d.value.graphShadow.get(m), F = ee(R.cell.data.component, U.value);
          if (F)
            b.value = JSON.parse(F);
          else {
            let K = R.cell.data.component.config.properties["output字段（自动填入）"];
            K && (b.value = JSON.parse(K));
          }
        }
      }
      d.value.graphShadow.set(
        d.value.cell,
        "My_cal-column-output",
        b.value
      );
    };
    ie(() => {
      n(), x.value && (x.value.checkForm = f), d.value.drawerRef.value.calculateRef = x.value;
    });
    const f = () => new Promise((e) => {
      var l;
      (l = x.value) == null || l.validate((t, m) => {
        t ? e(c.tableData) : (Q.error(Object.values({ ...m })[0][0].message), e(!1));
      });
    });
    return (e, l) => {
      const t = C("el-input"), m = C("el-tooltip"), R = C("el-form-item"), F = C("el-table-column"), K = C("el-table"), ae = C("el-form");
      return y(), P("div", {
        class: "nifi-calculate",
        ref_key: "calculateRef",
        ref: J
      }, [
        g(" 新增字段 "),
        o(s(E), {
          type: "primary",
          onClick: S,
          style: { "margin-left": "12px" }
        }, {
          default: i(() => [
            g(" 新增字段 ")
          ]),
          _: 1
        }),
        o(ae, {
          ref_key: "formRef",
          ref: x,
          model: c,
          rules: z,
          "label-width": "108px",
          inline: !0,
          disabled: s(O)
        }, {
          default: i(() => [
            o(K, {
              data: c.tableData,
              "max-height": "400",
              "row-style": { height: "45px" },
              "header-cell-style": {
                backgroundColor: "#F8F9FC",
                borderColor: "transparent"
              }
            }, {
              default: i(() => [
                o(F, { label: "字段名" }, {
                  default: i(({ $index: p, row: _ }) => [
                    o(R, {
                      prop: "tableData." + p + ".fieldName",
                      rules: z.fieldName
                    }, {
                      default: i(() => [
                        o(m, {
                          effect: "customized",
                          content: _.prompt,
                          visible: _.visible
                        }, {
                          default: i(() => [
                            o(t, {
                              modelValue: _.fieldName,
                              "onUpdate:modelValue": (k) => _.fieldName = k,
                              placeholder: "请输入",
                              class: "item__input",
                              clearable: "",
                              onBlur: (k) => _.fieldName = k.target.value.trim(),
                              onMouseenter: (k) => G(_, p),
                              onMouseleave: (k) => a(_)
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
                o(F, {
                  label: "字段值",
                  width: "300"
                }, {
                  default: i(({ row: p, $index: _ }) => [
                    p.expression ? (y(), H(m, { key: 0 }, {
                      content: i(() => [
                        g(h(p.expression), 1)
                      ]),
                      default: i(() => [
                        u("div", Ee, [
                          u("div", null, h(p.expression), 1),
                          o(s(E), {
                            icon: s(re),
                            onClick: (k) => I(p, _)
                          }, null, 8, ["icon", "onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1024)) : (y(), H(s(E), {
                      key: 1,
                      type: "primary",
                      link: "",
                      onClick: (k) => I(p, _)
                    }, {
                      default: i(() => [
                        g(" 添加字段值 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))
                  ]),
                  _: 1
                }),
                o(F, { label: "操作" }, {
                  default: i(({ $index: p }) => [
                    o(s(E), {
                      icon: s(ue),
                      onClick: () => A(p)
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
        V.value ? (y(), H(Fe, {
          key: 0,
          modelValue: V.value,
          "onUpdate:modelValue": l[0] || (l[0] = (p) => V.value = p),
          fieldData: $.value,
          inputValue: b.value,
          onHandleUpdateValue: j
        }, null, 8, ["modelValue", "fieldData", "inputValue"])) : q("", !0)
      ], 512);
    };
  }
}), Te = /* @__PURE__ */ ce(Ue, [["__scopeId", "data-v-5f7dc6cb"]]), Oe = (v) => ({
  graphShadow: v.graphShadow,
  drawerRef: v.drawerRef,
  graphForm: v.graphForm,
  cell: v.cell
}), $e = () => ({ name: [
  "org.apache.nifi.column.processors.CalColumn_2_0"
], excludeKeys: ["new-field", "expression", "output-param"], selfFormColumn: [
  {
    tag: Te,
    // propInput: "config.properties['col-selector-input']",
    propOutput: "config.properties['output-param']",
    ":formdata": "formData",
    setup({ params: U }) {
      return { graphShadowCell: Oe(U) };
    },
    ":graphShadowCell": "graphShadowCell"
  }
] });
export {
  $e as default
};
