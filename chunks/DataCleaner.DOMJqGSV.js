import "../css/DataCleaner-CYbNNIYz.css";
import { defineComponent as ne, toRefs as ue, ref as f, reactive as J, onMounted as se, resolveComponent as M, openBlock as A, createElementBlock as G, createTextVNode as k, createVNode as n, unref as s, withCtx as p, createElementVNode as w, toDisplayString as re, Fragment as ie, renderList as de, createBlock as pe, nextTick as F } from "vue";
import { aA as H, B as ce, C as E, ag as me, I as P, z as Q, A as b, az as W } from "./vendor.oF5jPd5s.js";
import { d as X, b as fe, e as be } from "./index.DqFN_72b.js";
import { _ as ve } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const ge = ["int", "long", "short", "float", "double"], Y = [
  {
    label: "将空值替换为指定值",
    value: "将空值替换为指定值",
    disabled: [!1, !0]
  },
  { label: "过滤整行空值", value: "过滤整行空值", disabled: [!0, !0] },
  { label: "移除所有空格", value: "移除所有空格", disabled: [!0, !0] },
  { label: "移除首尾空格", value: "移除首尾空格", disabled: [!0, !0] },
  { label: "移除标点符号", value: "移除标点符号", disabled: [!0, !0] },
  { label: "移除数字", value: "移除数字", disabled: [!0, !0] },
  { label: "移除字母", value: "移除字母", disabled: [!0, !0] },
  { label: "设为小写", value: "设为小写", disabled: [!0, !0] },
  { label: "设为大写", value: "设为大写", disabled: [!0, !0] },
  { label: "首字母大写", value: "首字母大写", disabled: [!0, !0] },
  { label: "值替换", value: "值替换", disabled: [!1, !1] },
  { label: "字符串替换", value: "字符串替换", disabled: [!1, !1] },
  { label: "正则替换", value: "正则替换", disabled: [!1, !1] }
], he = [
  {
    label: "将空值替换为指定值",
    value: "将空值替换为指定值",
    disabled: [!1, !0]
  },
  { label: "过滤整行空值", value: "过滤整行空值", disabled: [!0, !0] },
  { label: "值替换", value: "值替换", disabled: [!1, !1] }
], Z = (m) => m && ge.includes(m.toLowerCase()) ? he : Y, I = (m, h) => Z(m).find((S) => S.value === h), _e = { class: "nifi-cleaning" }, Ve = { class: "cleaning_content" }, De = { "w-30vw": "" }, ye = { "w-40vw": "" }, xe = { style: { "margin-bottom": "18px" } }, Ce = { class: "allocation_footer" }, Me = /* @__PURE__ */ ne({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(m) {
    const h = m, { formdata: _, inputV: L, propOutput: S, propInput: T } = ue(h), V = f(!1), D = () => {
      if (V.value = !0, C.value = !1, y.value.length === 0 || t.cleaningData.length === 0) {
        C.value = !0;
        return;
      }
      y.value.length === t.cleaningData.length ? F(() => {
        var l;
        (l = v.value) == null || l.toggleAllSelection(), C.value = !0;
      }) : F(() => {
        t.cleaningData.forEach((l) => {
          var e, o;
          let a = (e = y.value) == null ? void 0 : e.find((r) => r.name === l.name);
          (o = v.value) == null || o.toggleRowSelection(a, !0);
        }), C.value = !0;
      });
    }, v = f(), y = f(L.value), q = f([]), t = J({
      tableData: [],
      // 表格真正的数据
      cleaningData: []
      // 展示的数据--可搜索
    }), $ = (l) => {
      if (C.value) {
        if (q.value = l, l.length < t.tableData.length) {
          if (l.length === 0) {
            t.cleaningData = [], t.tableData = [];
            return;
          }
          let a = t.tableData.filter(
            (e) => l.every((o) => e.name != o.name)
          );
          for (let e = 0; e < a.length; e++)
            for (let o = 0; o < t.tableData.length; o++)
              if (t.tableData[o].name === a[e].name) {
                t.tableData.splice(o, 1);
                let r = t.cleaningData.findIndex(
                  (d) => d.name === a[e].name
                );
                r > -1 && t.cleaningData.splice(r, 1), o--;
              }
        } else if (l.length > t.tableData.length) {
          let a = l.filter(
            (o) => t.cleaningData.every((r) => o.name !== r.name)
          ), e = l.filter(
            (o) => t.tableData.every((r) => o.name !== r.name)
          );
          x.value === "" && t.cleaningData.push(...a), t.tableData.push(...e), K();
        }
      }
    }, O = () => {
      V.value = !1;
    }, ee = (l) => {
      var r;
      let a = t.cleaningData.findIndex((d) => d.name === l.name);
      t.cleaningData.splice(a, 1);
      let e = t.tableData.findIndex((d) => d.name === l.name);
      t.tableData.splice(e, 1);
      let o = q.value.find((d) => d.name === l.name);
      (r = v.value) == null || r.toggleRowSelection(o, !1);
    }, B = f(), N = J({
      testMethod: [
        { required: !0, message: "检测方法不能为空", trigger: "change" }
      ],
      sValue: [{ required: !0, message: "指定值不能为空", trigger: "blur" }]
    }), le = async () => {
      var l;
      await ((l = B.value) == null ? void 0 : l.validate((a, e) => {
        a ? (j(), O()) : console.log("error submit!", e);
      }));
    }, R = f(""), x = f(""), ae = H(() => {
      let l = R.value.toLowerCase();
      y.value = z.value.filter(
        (a) => a.name.toLowerCase().includes(l)
      );
    }, 500), K = H(() => {
      let l = x.value.toLowerCase();
      t.cleaningData = t.tableData.filter(
        (a) => a.name.toLowerCase().includes(l)
      );
    }, 300), te = (l, a) => {
      var r;
      let { testMethod: e, type: o } = a;
      if (e && ((r = I(o, e)) != null && r.disabled[0])) {
        let d = `cleaningData.${l}.sValue`;
        return F(() => {
          var U, u;
          (U = B.value) == null || U.clearValidate(d), (u = B.value) == null || u.validateField(d, async (i) => await i);
        }), [];
      }
      return [{ required: !0, message: "指定值不能为空", trigger: "blur" }];
    }, oe = (l, a) => {
      var r, d;
      let { testMethod: e, type: o } = a;
      e && ((r = I(o, e)) != null && r.disabled[0]) && (t.cleaningData[l].sValue = "", t.tableData[l].sValue = ""), e && ((d = I(o, e)) != null && d.disabled[1]) && (t.cleaningData[l].oValue = "", t.tableData[l].oValue = "");
    }, z = f(L.value), C = f(!1), j = () => {
      let l = z.value.map(
        ({ name: a, doc: e, type: o, originalValue: r }) => ({
          name: a,
          doc: e,
          type: o,
          originalValue: r
        })
      );
      W(_.value, S.value, X(l)), W(_.value, T.value, X(t.tableData));
    };
    return se(() => {
      let l = ce(_.value, T.value);
      l && JSON.parse(l).forEach((e) => {
        let o = {
          doc: e.doc,
          name: e.name,
          type: e.type,
          sValue: e.sValue ?? "",
          oValue: e.oValue ?? "",
          testMethod: e.testMethod
        };
        t.cleaningData.push(o), t.tableData.push(o);
      }), j();
    }), (l, a) => {
      const e = M("el-input"), o = M("el-option"), r = M("el-select"), d = M("el-form-item"), U = M("el-form");
      return A(), G("div", _e, [
        k(" 数据清洗配置: "),
        n(s(E), {
          type: "primary",
          onClick: D,
          style: { "margin-left": "12px" }
        }, {
          default: p(() => [
            k(" 数据清洗配置 ")
          ]),
          _: 1
        }),
        n(s(me), {
          modelValue: V.value,
          "onUpdate:modelValue": a[4] || (a[4] = (u) => V.value = u),
          title: "数据清洗配置",
          "destroy-on-close": "",
          "w-75vw": "",
          "h-70vh": "",
          "before-close": O
        }, {
          default: p(() => [
            w("div", Ve, [
              w("div", De, [
                n(e, {
                  modelValue: R.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (u) => R.value = u),
                  placeholder: "请输入",
                  "prefix-icon": s(P),
                  onInput: s(ae),
                  onBlur: a[1] || (a[1] = (u) => R.value = u.target.value.trim())
                }, null, 8, ["modelValue", "prefix-icon", "onInput"]),
                n(s(Q), {
                  ref_key: "multipleTableRef",
                  ref: v,
                  "max-height": "400",
                  data: y.value,
                  "cell-style": { "text-align": "center" },
                  "header-cell-style": { "text-align": "center" },
                  "row-key": "name",
                  onSelectionChange: $,
                  "m-t-12": ""
                }, {
                  default: p(() => [
                    n(s(b), {
                      type: "selection",
                      width: "55",
                      "reserve-selection": ""
                    }),
                    n(s(b), {
                      prop: "name",
                      label: "字段名",
                      "show-overflow-tooltip": ""
                    }),
                    n(s(b), {
                      prop: "doc",
                      label: "字段中文名",
                      "show-overflow-tooltip": ""
                    }),
                    n(s(b), {
                      prop: "type",
                      label: "字段类型",
                      "show-overflow-tooltip": ""
                    })
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              w("div", ye, [
                n(e, {
                  modelValue: x.value,
                  "onUpdate:modelValue": a[2] || (a[2] = (u) => x.value = u),
                  placeholder: "请输入",
                  "prefix-icon": s(P),
                  onInput: s(K),
                  onBlur: a[3] || (a[3] = (u) => x.value = u.target.value.trim())
                }, null, 8, ["modelValue", "prefix-icon", "onInput"]),
                n(U, {
                  ref_key: "formRef",
                  ref: B,
                  model: t,
                  rules: N,
                  "m-t-12": ""
                }, {
                  default: p(() => [
                    n(s(Q), {
                      data: t.cleaningData,
                      "max-height": "400",
                      "cell-style": { textAlign: "center" },
                      "header-cell-style": { "text-align": "center" }
                    }, {
                      default: p(() => [
                        n(s(b), {
                          label: "字段名",
                          "show-overflow-tooltip": ""
                        }, {
                          default: p(({ row: u }) => [
                            w("div", xe, re(u.name), 1)
                          ]),
                          _: 1
                        }),
                        n(s(b), {
                          label: "检测方法",
                          width: "150px"
                        }, {
                          default: p(({ $index: u, row: i }) => [
                            n(d, {
                              prop: "cleaningData." + u + ".testMethod",
                              rules: N.testMethod
                            }, {
                              default: p(() => [
                                n(r, {
                                  modelValue: i.testMethod,
                                  "onUpdate:modelValue": (c) => i.testMethod = c,
                                  placeholder: "请选择",
                                  class: "item__input",
                                  "popper-class": "select_popper",
                                  onChange: (c) => oe(u, i)
                                }, {
                                  default: p(() => [
                                    (A(!0), G(ie, null, de(s(Z)(i.type), (c) => (A(), pe(o, {
                                      label: c.label,
                                      value: c.value,
                                      key: c.value
                                    }, null, 8, ["label", "value"]))), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                              ]),
                              _: 2
                            }, 1032, ["prop", "rules"])
                          ]),
                          _: 1
                        }),
                        n(s(b), {
                          label: "指定值",
                          width: "150px"
                        }, {
                          default: p(({ $index: u, row: i }) => [
                            n(d, {
                              prop: "cleaningData." + u + ".sValue",
                              rules: te(u, i)
                            }, {
                              default: p(() => {
                                var c;
                                return [
                                  n(e, {
                                    modelValue: i.sValue,
                                    "onUpdate:modelValue": (g) => i.sValue = g,
                                    placeholder: "请输入",
                                    disabled: (c = s(I)(i.type, i.testMethod)) == null ? void 0 : c.disabled[0],
                                    class: "item__input",
                                    clearable: "",
                                    onBlur: (g) => i.sValue = g.target.value.trim()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onBlur"])
                                ];
                              }),
                              _: 2
                            }, 1032, ["prop", "rules"])
                          ]),
                          _: 1
                        }),
                        n(s(b), {
                          label: "原值",
                          width: "150px"
                        }, {
                          default: p(({ $index: u, row: i }) => [
                            n(d, {
                              prop: "cleaningData." + u + ".oValue",
                              rules: N.oValue
                            }, {
                              default: p(() => {
                                var c;
                                return [
                                  n(e, {
                                    modelValue: i.oValue,
                                    "onUpdate:modelValue": (g) => i.oValue = g,
                                    placeholder: "请输入",
                                    disabled: (c = s(I)(i.type, i.testMethod)) == null ? void 0 : c.disabled[1],
                                    class: "item__input",
                                    clearable: "",
                                    onBlur: (g) => i.oValue = g.target.value.trim()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onBlur"])
                                ];
                              }),
                              _: 2
                            }, 1032, ["prop", "rules"])
                          ]),
                          _: 1
                        }),
                        n(s(b), { label: "操作" }, {
                          default: p(({ row: u }) => [
                            n(s(E), {
                              text: "",
                              onClick: () => ee(u),
                              style: { "margin-bottom": "18px" }
                            }, {
                              default: p(() => [
                                k(" 删除 ")
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
              ])
            ]),
            w("div", Ce, [
              n(s(E), { onClick: O }, {
                default: p(() => [
                  k("取消")
                ]),
                _: 1
              }),
              n(s(E), {
                type: "primary",
                onClick: le
              }, {
                default: p(() => [
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
}), ke = /* @__PURE__ */ ve(Me, [["__scopeId", "data-v-b51f1629"]]), Re = () => {
  let m = [];
  const h = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.DataCleaner_1_0"], excludeKeys: ["expression", "output-param"], selfFormColumn: [
    {
      tag: ke,
      propInput: "config.properties['expression']",
      propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup() {
        return { inputV: m };
      },
      ":inputV": "inputV"
    }
  ], hooksOpen: (D, v) => {
    m = [], m = fe(D, v, h);
  }, hooksSubmit: (D, v) => {
    be(D, v);
  } };
};
export {
  Re as default
};
