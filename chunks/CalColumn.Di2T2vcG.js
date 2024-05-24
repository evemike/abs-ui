import "../css/CalColumn-Cz4wzwO1.css";
import { defineComponent as Z, toRefs as ee, ref as c, watch as Q, resolveComponent as E, openBlock as J, createElementBlock as z, createVNode as a, unref as d, isRef as oe, withCtx as s, createElementVNode as f, createTextVNode as F, toDisplayString as D, createCommentVNode as q, computed as ae, reactive as W, onMounted as ne, createBlock as G } from "vue";
import { ag as se, I as X, aD as Y, C as I, a as P, D as ie, F as re, ay as H } from "./vendor.Bh6KHC77.js";
import { C as de } from "./main.DF-kfnLt.js";
import { _ as ue } from "./_plugin-vue_export-helper.CHgC5LLL.js";
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
], ce = ["int", "long", "short", "float", "double"], fe = { class: "nifi-calculate-field" }, me = { class: "field-name" }, _e = {
  class: "field_content",
  "h-468": ""
}, ve = { class: "fun_tree" }, he = { class: "custom-tree-node" }, ge = { class: "multi-ellipsis" }, be = { key: 0 }, Ve = { class: "fun_tree field_tree" }, xe = { class: "custom-tree-node" }, ke = { class: "multi-ellipsis" }, Ne = { key: 0 }, ye = { class: "field_body" }, Ce = { class: "field_top" }, De = { class: "field_bottom" }, Fe = { class: "field_footer" }, Se = /* @__PURE__ */ Z({
  __name: "Dialog",
  props: {
    modelValue: { type: Boolean },
    fieldData: {},
    inputValue: {}
  },
  emits: ["update:modelValue", "handleUpdateValue"],
  setup(S, { emit: R }) {
    const y = R, K = S, { modelValue: M, fieldData: T, inputValue: L } = ee(K), w = c(), $ = c(), i = c(), u = c(""), p = c(""), x = c([
      {
        name: "字段",
        children: L.value
      }
    ]), _ = c("从左侧列表选择或直接输入函数、字段"), V = c(T.value.fieldName), v = c(T.value.expression), k = {
      children: "children",
      label: "name"
    }, C = (t, o) => {
      var e;
      o.isLeaf && ((e = w.value) == null || e.insertValue(t.name));
    }, n = (t, o) => {
      var e;
      if (o.isLeaf) {
        if (!ce.includes(t == null ? void 0 : t.type.toLowerCase())) {
          _.value = "所选字段需时数值类型的字段";
          return;
        }
        (e = w.value) == null || e.insertValue(t.name), _.value = "从左侧列表选择或直接输入函数、字段";
      }
    }, h = () => {
      y("update:modelValue", !1);
    }, U = () => {
      var o;
      if (!V.value) {
        P.error("字段名不可为空");
        return;
      }
      let t = (o = w.value) == null ? void 0 : o.getValue();
      if (t === "") {
        P.error("表达式不可为空");
        return;
      }
      y("handleUpdateValue", {
        ...T.value,
        fieldName: V.value,
        expression: t
      }), h();
    };
    Q(u, (t) => {
      $.value.filter(t);
    });
    const g = (t, o) => t ? o.name.includes(t) : !0;
    Q(p, (t) => {
      i.value.filter(t);
    });
    const O = (t, o) => t ? o.name.includes(t) : !0;
    return (t, o) => {
      const e = E("el-input"), r = E("el-tooltip");
      return J(), z("div", fe, [
        a(d(se), {
          modelValue: d(M),
          "onUpdate:modelValue": o[3] || (o[3] = (l) => oe(M) ? M.value = l : null),
          title: "新增字段",
          "destroy-on-close": "",
          "w-900": "",
          "before-close": h
        }, {
          default: s(() => [
            f("div", me, [
              F(" 新增字段名 "),
              a(e, {
                modelValue: V.value,
                "onUpdate:modelValue": o[0] || (o[0] = (l) => V.value = l)
              }, null, 8, ["modelValue"])
            ]),
            f("div", _e, [
              f("div", ve, [
                a(e, {
                  modelValue: u.value,
                  "onUpdate:modelValue": o[1] || (o[1] = (l) => u.value = l),
                  placeholder: "搜索函数",
                  "prefix-icon": d(X)
                }, null, 8, ["modelValue", "prefix-icon"]),
                a(d(Y), {
                  ref_key: "funTreeRef",
                  ref: $,
                  "default-expand-all": "",
                  data: d(pe),
                  props: k,
                  onNodeClick: C,
                  "filter-node-method": g
                }, {
                  default: s(({ node: l, data: m }) => [
                    f("div", he, [
                      a(r, null, {
                        content: s(() => [
                          F(D(l.label), 1)
                        ]),
                        default: s(() => [
                          f("div", ge, D(l.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      m.children && m.children.length > 0 ? (J(), z("span", be, " (" + D(m.children.length) + ") ", 1)) : q("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              f("div", Ve, [
                a(e, {
                  modelValue: p.value,
                  "onUpdate:modelValue": o[2] || (o[2] = (l) => p.value = l),
                  placeholder: "搜索字段",
                  "prefix-icon": d(X)
                }, null, 8, ["modelValue", "prefix-icon"]),
                a(d(Y), {
                  ref_key: "fieldTreeRef",
                  ref: i,
                  "default-expand-all": "",
                  data: x.value,
                  props: k,
                  onNodeClick: n,
                  "filter-node-method": O
                }, {
                  default: s(({ node: l, data: m }) => [
                    f("div", xe, [
                      a(r, null, {
                        content: s(() => [
                          F(D(l.label), 1)
                        ]),
                        default: s(() => [
                          f("div", ke, D(l.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      m.children && m.children.length > 0 ? (J(), z("span", Ne, " (" + D(m.children.length) + ") ", 1)) : q("", !0)
                    ])
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              f("div", ye, [
                f("div", Ce, [
                  a(de, {
                    ref_key: "codeEditorRef",
                    ref: w,
                    "model-value": v.value
                  }, null, 8, ["model-value"])
                ]),
                f("div", De, D(_.value), 1)
              ])
            ]),
            f("div", Fe, [
              a(d(I), { onClick: h }, {
                default: s(() => [
                  F("取消")
                ]),
                _: 1
              }),
              a(d(I), {
                type: "primary",
                onClick: U
              }, {
                default: s(() => [
                  F("保存")
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
}), we = { class: "multi-ellipsis" }, Ee = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    formdata: {},
    graphShadow: {},
    inputV: {},
    expression: {},
    newField: {},
    step: {}
  },
  setup(S) {
    const R = S, { formdata: y, inputV: K, step: M, expression: T, newField: L, graphShadow: w } = ee(R);
    let $ = ae(() => M.value === "running");
    const i = c(), u = c(K.value), p = c(!1), x = c(), _ = c(0), V = () => {
      n.tableData.push({
        fieldName: "",
        expression: "",
        prompt: ""
      });
    }, v = (e, r) => {
      x.value = e, _.value = r, p.value = !0;
    }, k = (e) => {
      n.tableData[_.value] = e;
    }, C = (e) => {
      n.tableData.splice(e, 1);
    }, n = W({
      tableData: []
    });
    T.value.length > 0 && L.value.length > 0 && (n.tableData = L.value.map((e, r) => ({
      fieldName: L.value[r],
      expression: T.value[r],
      prompt: "",
      visible: !1
    })));
    const h = (e, r, l) => {
      if (r === "")
        return l(new Error("字段名不能为空"));
      if (n.tableData.filter((j) => j.fieldName === r).length > 1)
        return l(new Error("不可与其他字段重名"));
      l();
    }, U = c(), g = W({
      fieldName: [
        {
          // required: true,
          // message: "字段名不能为空",
          validator: h,
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
    }), O = (e, r) => {
      if (e) {
        if (e.prompt = "", e.visible = !1, e.fieldName === "") {
          e.prompt = "字段名不能为空", e.visible = !0;
          return;
        }
        for (let l = 0; l < n.tableData.length; l++)
          if (n.tableData[l].fieldName === e.fieldName && l !== r) {
            e.prompt = "不可与其他新增字段重名", e.visible = !0;
            return;
          }
        e.prompt = "", e.visible = !1;
      }
    }, t = (e) => {
      e && (e.prompt = "", e.visible = !1);
    };
    ne(() => {
      w.value.set(y.value.id, "checkForm", o), w.value.set(y.value.id, "tableData", n.tableData);
    });
    const o = () => new Promise((e) => {
      var r;
      (r = U.value) == null || r.validate((l, m) => {
        l ? e(n.tableData) : (P.error(Object.values({ ...m })[0][0].message), e(!1));
      });
    });
    return (e, r) => {
      const l = E("el-input"), m = E("el-tooltip"), j = E("el-form-item"), A = E("el-table-column"), te = E("el-table"), le = E("el-form");
      return J(), z("div", {
        class: "nifi-calculate",
        ref_key: "calculateRef",
        ref: i
      }, [
        F(" 新增字段 "),
        a(d(I), {
          type: "primary",
          onClick: V,
          style: { "margin-left": "12px" }
        }, {
          default: s(() => [
            F(" 新增字段 ")
          ]),
          _: 1
        }),
        a(le, {
          ref_key: "formRef",
          ref: U,
          model: n,
          rules: g,
          "label-width": "108px",
          inline: !0,
          disabled: d($)
        }, {
          default: s(() => [
            a(te, {
              data: n.tableData,
              "max-height": "400",
              "row-style": { height: "45px" },
              "header-cell-style": {
                backgroundColor: "#F8F9FC",
                borderColor: "transparent"
              }
            }, {
              default: s(() => [
                a(A, { label: "字段名" }, {
                  default: s(({ $index: b, row: N }) => [
                    a(j, {
                      prop: "tableData." + b + ".fieldName",
                      rules: g.fieldName
                    }, {
                      default: s(() => [
                        a(m, {
                          effect: "customized",
                          content: N.prompt,
                          visible: N.visible
                        }, {
                          default: s(() => [
                            a(l, {
                              modelValue: N.fieldName,
                              "onUpdate:modelValue": (B) => N.fieldName = B,
                              placeholder: "请输入",
                              class: "item__input",
                              clearable: "",
                              onBlur: (B) => N.fieldName = B.target.value.trim(),
                              onMouseenter: (B) => O(N, b),
                              onMouseleave: (B) => t(N)
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
                a(A, {
                  label: "字段值",
                  width: "300"
                }, {
                  default: s(({ row: b, $index: N }) => [
                    b.expression ? (J(), G(m, { key: 0 }, {
                      content: s(() => [
                        F(D(b.expression), 1)
                      ]),
                      default: s(() => [
                        f("div", we, [
                          f("div", null, D(b.expression), 1),
                          a(d(I), {
                            icon: d(ie),
                            onClick: (B) => v(b, N)
                          }, null, 8, ["icon", "onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1024)) : (J(), G(d(I), {
                      key: 1,
                      type: "primary",
                      link: "",
                      onClick: (B) => v(b, N)
                    }, {
                      default: s(() => [
                        F(" 添加字段值 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))
                  ]),
                  _: 1
                }),
                a(A, { label: "操作" }, {
                  default: s(({ $index: b }) => [
                    a(d(I), {
                      icon: d(re),
                      onClick: () => C(b)
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
        p.value ? (J(), G(Se, {
          key: 0,
          modelValue: p.value,
          "onUpdate:modelValue": r[0] || (r[0] = (b) => p.value = b),
          fieldData: x.value,
          inputValue: u.value,
          onHandleUpdateValue: k
        }, null, 8, ["modelValue", "fieldData", "inputValue"])) : q("", !0)
      ], 512);
    };
  }
}), Re = /* @__PURE__ */ ue(Ee, [["__scopeId", "data-v-f6a43327"]]), Me = () => {
  let S = [], R = [], y = [];
  const K = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.CalColumn_2_0"], excludeKeys: ["new-field", "expression", "output-param"], selfFormColumn: [
    {
      tag: Re,
      // propInput: "config.properties['col-selector-input']",
      // propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup({ params: i }) {
        return {
          inputV: S,
          expression: R,
          newField: y,
          step: i.step.value,
          graphShadow: i.graphShadow
        };
      },
      ":inputV": "inputV",
      ":expression": "expression",
      ":newField": "newField",
      ":step": "step",
      ":graphShadow": "graphShadow"
    }
  ], hooksOpen: (i, u) => {
    var k;
    S = [], R = [], y = [];
    let { id: p } = i, { source: x, shadow: _ } = u.event, V = (k = _ == null ? void 0 : _.cells.get(p)) == null ? void 0 : k.prevNodes, v = x.get(i.id).component.config.properties;
    R = v.expression === "" ? [] : JSON.parse(v.expression), y = v["new-field"] === "" ? [] : JSON.parse(v["new-field"]);
    for (let C of V)
      if (x.get(C)) {
        let n = x.get(C).component.config.properties;
        for (let h of K)
          n.hasOwnProperty(h) && (S = n[h] === "" ? [] : JSON.parse(n[h]));
      }
  }, hooksSubmit: (i, u) => {
    var V, v, k, C, n, h, U;
    if (((v = (V = u.event.shadow) == null ? void 0 : V.cells.get(i.id)) == null ? void 0 : v.inCells.size) === 0)
      throw P.error("暂无上游算子，请进行连接"), new Error("暂无上游算子，请进行连接");
    let p = (k = u.event.shadow) == null ? void 0 : k.get(i.id).tableData, x = p.filter((g) => g.fieldName === ""), _ = new Set(
      p.filter((g) => g.fieldName)
    );
    if (x.length > 0)
      throw (C = u.event.shadow) == null || C.get(i.id).checkForm(), new Error("字段名不能为空");
    if (_.size !== p.length)
      throw (n = u.event.shadow) == null || n.get(i.id).checkForm(), new Error("不可与其他字段重名");
    {
      let g = [], O = [], t = [...S], o = u.event.source.get(i.id).component;
      p.forEach((e) => {
        g.push(e.expression), O.push(e.fieldName), t.push({
          doc: "",
          name: e.fieldName,
          originalValue: "",
          type: "STRING"
        });
      }), H(
        o,
        "config.properties['expression']",
        g.length === 0 ? "" : JSON.stringify(g)
      ), H(
        o,
        "config.properties['new-field']",
        O.length === 0 ? "" : JSON.stringify(O)
      ), H(
        o,
        "config.properties['output-param']",
        t.length === 0 ? "" : JSON.stringify(t)
      ), (h = u.event.shadow) == null || delete h.get(i.id).tableData, (U = u.event.shadow) == null || delete U.get(i.id).checkForm;
    }
  } };
};
export {
  Me as default
};
