import "../css/DataCleaner-4zi9Cx_C.css";
import { defineComponent as oe, toRefs as ne, ref as v, reactive as G, onMounted as se, resolveComponent as L, openBlock as z, createElementBlock as H, createTextVNode as B, createVNode as n, unref as u, withCtx as p, createElementVNode as I, toDisplayString as ue, Fragment as re, renderList as ie, createBlock as de, nextTick as A } from "vue";
import { az as Q, B as pe, C as F, ag as ce, I as W, z as X, A as b, ay as Y, a as fe } from "./vendor.Bh6KHC77.js";
import { _ as me } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const ve = ["int", "long", "short", "float", "double"], Z = [
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
], be = [
  {
    label: "将空值替换为指定值",
    value: "将空值替换为指定值",
    disabled: [!1, !0]
  },
  { label: "过滤整行空值", value: "过滤整行空值", disabled: [!0, !0] },
  { label: "值替换", value: "值替换", disabled: [!1, !1] }
], $ = (f) => f && ve.includes(f.toLowerCase()) ? be : Z, N = (f, x) => $(f).find((E) => E.value === x), ge = { class: "nifi-cleaning" }, he = { class: "cleaning_content" }, _e = { "w-30vw": "" }, Ve = { "w-40vw": "" }, De = { style: { "margin-bottom": "18px" } }, ye = { class: "allocation_footer" }, xe = /* @__PURE__ */ oe({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(f) {
    const x = f, { formdata: C, inputV: O, propOutput: E, propInput: J } = ne(x), M = v(!1), k = () => {
      if (M.value = !0, S.value = !1, m.value.length === 0 || e.cleaningData.length === 0) {
        S.value = !0;
        return;
      }
      m.value.length === e.cleaningData.length ? A(() => {
        var t;
        (t = g.value) == null || t.toggleAllSelection(), S.value = !0;
      }) : A(() => {
        e.cleaningData.forEach((t) => {
          var l, o;
          let a = (l = m.value) == null ? void 0 : l.find((r) => r.name === t.name);
          (o = g.value) == null || o.toggleRowSelection(a, !0);
        }), S.value = !0;
      });
    }, g = v(), m = v(O.value), h = v([]), e = G({
      tableData: [],
      // 表格真正的数据
      cleaningData: []
      // 展示的数据--可搜索
    }), K = (t) => {
      if (S.value) {
        if (h.value = t, t.length < e.tableData.length) {
          if (t.length === 0) {
            e.cleaningData = [], e.tableData = [];
            return;
          }
          let a = e.tableData.filter(
            (l) => t.every((o) => l.name != o.name)
          );
          for (let l = 0; l < a.length; l++)
            for (let o = 0; o < e.tableData.length; o++)
              if (e.tableData[o].name === a[l].name) {
                e.tableData.splice(o, 1);
                let r = e.cleaningData.findIndex(
                  (d) => d.name === a[l].name
                );
                r > -1 && e.cleaningData.splice(r, 1), o--;
              }
        } else if (t.length > e.tableData.length) {
          let a = t.filter(
            (o) => e.cleaningData.every((r) => o.name !== r.name)
          ), l = t.filter(
            (o) => e.tableData.every((r) => o.name !== r.name)
          );
          w.value === "" && e.cleaningData.push(...a), e.tableData.push(...l), j();
        }
      }
    }, y = () => {
      M.value = !1;
    }, R = (t) => {
      var r;
      let a = e.cleaningData.findIndex((d) => d.name === t.name);
      e.cleaningData.splice(a, 1);
      let l = e.tableData.findIndex((d) => d.name === t.name);
      e.tableData.splice(l, 1);
      let o = h.value.find((d) => d.name === t.name);
      (r = g.value) == null || r.toggleRowSelection(o, !1);
    }, _ = v(), V = G({
      testMethod: [
        { required: !0, message: "检测方法不能为空", trigger: "change" }
      ],
      sValue: [{ required: !0, message: "指定值不能为空", trigger: "blur" }]
    }), ee = async () => {
      var t;
      await ((t = _.value) == null ? void 0 : t.validate((a, l) => {
        a ? (P(), y()) : console.log("error submit!", l);
      }));
    }, U = v(""), w = v(""), le = Q(() => {
      let t = U.value.toLowerCase();
      m.value = q.value.filter(
        (a) => a.name.toLowerCase().includes(t)
      );
    }, 500), j = Q(() => {
      let t = w.value.toLowerCase();
      e.cleaningData = e.tableData.filter(
        (a) => a.name.toLowerCase().includes(t)
      );
    }, 300), te = (t, a) => {
      var r;
      let { testMethod: l, type: o } = a;
      if (l && ((r = N(o, l)) != null && r.disabled[0])) {
        let d = `cleaningData.${t}.sValue`;
        return A(() => {
          var T, s;
          (T = _.value) == null || T.clearValidate(d), (s = _.value) == null || s.validateField(d, async (i) => await i);
        }), [];
      }
      return [{ required: !0, message: "指定值不能为空", trigger: "blur" }];
    }, ae = (t, a) => {
      var r, d;
      let { testMethod: l, type: o } = a;
      l && ((r = N(o, l)) != null && r.disabled[0]) && (e.cleaningData[t].sValue = "", e.tableData[t].sValue = ""), l && ((d = N(o, l)) != null && d.disabled[1]) && (e.cleaningData[t].oValue = "", e.tableData[t].oValue = "");
    }, q = v(O.value), S = v(!1), P = () => {
      Y(
        C.value,
        E.value,
        q.value.length === 0 ? "" : JSON.stringify(q.value)
      ), Y(
        C.value,
        J.value,
        Object.keys(e.tableData).length === 0 ? "" : JSON.stringify(e.tableData)
      );
    };
    return se(() => {
      let t = pe(C.value, J.value);
      t && JSON.parse(t).forEach((l) => {
        let o = {
          doc: l.doc,
          name: l.name,
          type: l.type,
          sValue: l.sValue ?? "",
          oValue: l.oValue ?? "",
          testMethod: l.testMethod
        };
        e.cleaningData.push(o), e.tableData.push(o);
      }), P();
    }), (t, a) => {
      const l = L("el-input"), o = L("el-option"), r = L("el-select"), d = L("el-form-item"), T = L("el-form");
      return z(), H("div", ge, [
        B(" 数据清洗配置: "),
        n(u(F), {
          type: "primary",
          onClick: k,
          style: { "margin-left": "12px" }
        }, {
          default: p(() => [
            B(" 数据清洗配置 ")
          ]),
          _: 1
        }),
        n(u(ce), {
          modelValue: M.value,
          "onUpdate:modelValue": a[4] || (a[4] = (s) => M.value = s),
          title: "数据清洗配置",
          "destroy-on-close": "",
          "w-75vw": "",
          "h-70vh": "",
          "before-close": y
        }, {
          default: p(() => [
            I("div", he, [
              I("div", _e, [
                n(l, {
                  modelValue: U.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (s) => U.value = s),
                  placeholder: "请输入",
                  "prefix-icon": u(W),
                  onInput: u(le),
                  onBlur: a[1] || (a[1] = (s) => U.value = s.target.value.trim())
                }, null, 8, ["modelValue", "prefix-icon", "onInput"]),
                n(u(X), {
                  ref_key: "multipleTableRef",
                  ref: g,
                  "max-height": "400",
                  data: m.value,
                  "cell-style": { "text-align": "center" },
                  "header-cell-style": { "text-align": "center" },
                  "row-key": "name",
                  onSelectionChange: K,
                  "m-t-12": ""
                }, {
                  default: p(() => [
                    n(u(b), {
                      type: "selection",
                      width: "55",
                      "reserve-selection": ""
                    }),
                    n(u(b), {
                      prop: "name",
                      label: "字段名",
                      "show-overflow-tooltip": ""
                    }),
                    n(u(b), {
                      prop: "doc",
                      label: "字段中文名",
                      "show-overflow-tooltip": ""
                    }),
                    n(u(b), {
                      prop: "type",
                      label: "字段类型",
                      "show-overflow-tooltip": ""
                    })
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              I("div", Ve, [
                n(l, {
                  modelValue: w.value,
                  "onUpdate:modelValue": a[2] || (a[2] = (s) => w.value = s),
                  placeholder: "请输入",
                  "prefix-icon": u(W),
                  onInput: u(j),
                  onBlur: a[3] || (a[3] = (s) => w.value = s.target.value.trim())
                }, null, 8, ["modelValue", "prefix-icon", "onInput"]),
                n(T, {
                  ref_key: "formRef",
                  ref: _,
                  model: e,
                  rules: V,
                  "m-t-12": ""
                }, {
                  default: p(() => [
                    n(u(X), {
                      data: e.cleaningData,
                      "max-height": "400",
                      "cell-style": { textAlign: "center" },
                      "header-cell-style": { "text-align": "center" }
                    }, {
                      default: p(() => [
                        n(u(b), {
                          label: "字段名",
                          "show-overflow-tooltip": ""
                        }, {
                          default: p(({ row: s }) => [
                            I("div", De, ue(s.name), 1)
                          ]),
                          _: 1
                        }),
                        n(u(b), {
                          label: "检测方法",
                          width: "150px"
                        }, {
                          default: p(({ $index: s, row: i }) => [
                            n(d, {
                              prop: "cleaningData." + s + ".testMethod",
                              rules: V.testMethod
                            }, {
                              default: p(() => [
                                n(r, {
                                  modelValue: i.testMethod,
                                  "onUpdate:modelValue": (c) => i.testMethod = c,
                                  placeholder: "请选择",
                                  class: "item__input",
                                  "popper-class": "select_popper",
                                  onChange: (c) => ae(s, i)
                                }, {
                                  default: p(() => [
                                    (z(!0), H(re, null, ie(u($)(i.type), (c) => (z(), de(o, {
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
                        n(u(b), {
                          label: "指定值",
                          width: "150px"
                        }, {
                          default: p(({ $index: s, row: i }) => [
                            n(d, {
                              prop: "cleaningData." + s + ".sValue",
                              rules: te(s, i)
                            }, {
                              default: p(() => {
                                var c;
                                return [
                                  n(l, {
                                    modelValue: i.sValue,
                                    "onUpdate:modelValue": (D) => i.sValue = D,
                                    placeholder: "请输入",
                                    disabled: (c = u(N)(i.type, i.testMethod)) == null ? void 0 : c.disabled[0],
                                    class: "item__input",
                                    clearable: "",
                                    onBlur: (D) => i.sValue = D.target.value.trim()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onBlur"])
                                ];
                              }),
                              _: 2
                            }, 1032, ["prop", "rules"])
                          ]),
                          _: 1
                        }),
                        n(u(b), {
                          label: "原值",
                          width: "150px"
                        }, {
                          default: p(({ $index: s, row: i }) => [
                            n(d, {
                              prop: "cleaningData." + s + ".oValue",
                              rules: V.oValue
                            }, {
                              default: p(() => {
                                var c;
                                return [
                                  n(l, {
                                    modelValue: i.oValue,
                                    "onUpdate:modelValue": (D) => i.oValue = D,
                                    placeholder: "请输入",
                                    disabled: (c = u(N)(i.type, i.testMethod)) == null ? void 0 : c.disabled[1],
                                    class: "item__input",
                                    clearable: "",
                                    onBlur: (D) => i.oValue = D.target.value.trim()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onBlur"])
                                ];
                              }),
                              _: 2
                            }, 1032, ["prop", "rules"])
                          ]),
                          _: 1
                        }),
                        n(u(b), { label: "操作" }, {
                          default: p(({ row: s }) => [
                            n(u(F), {
                              text: "",
                              onClick: () => R(s),
                              style: { "margin-bottom": "18px" }
                            }, {
                              default: p(() => [
                                B(" 删除 ")
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
            I("div", ye, [
              n(u(F), { onClick: y }, {
                default: p(() => [
                  B("取消")
                ]),
                _: 1
              }),
              n(u(F), {
                type: "primary",
                onClick: ee
              }, {
                default: p(() => [
                  B("保存")
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
}), Ce = /* @__PURE__ */ me(xe, [["__scopeId", "data-v-26869eeb"]]), Le = () => {
  let f = [];
  const x = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.DataCleaner_1_0"], excludeKeys: ["expression", "output-param"], selfFormColumn: [
    {
      tag: Ce,
      propInput: "config.properties['expression']",
      propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup() {
        return { inputV: f };
      },
      ":inputV": "inputV"
    }
  ], hooksOpen: (k, g) => {
    var y;
    f = [];
    let { id: m } = k, { source: h, shadow: e } = g.event, K = (y = e == null ? void 0 : e.cells.get(m)) == null ? void 0 : y.prevNodes;
    for (let R of K)
      if (h.get(R)) {
        let _ = h.get(R).component.config.properties;
        for (let V of x)
          _.hasOwnProperty(V) && (f = _[V] === "" ? [] : JSON.parse(_[V]));
      }
  }, hooksSubmit: (k, g) => {
    var m, h;
    if (((h = (m = g.event.shadow) == null ? void 0 : m.cells.get(k.id)) == null ? void 0 : h.inCells.size) === 0)
      throw fe.error("暂无上游算子，请进行连接"), new Error("暂无上游算子，请进行连接");
  } };
};
export {
  Le as default
};
