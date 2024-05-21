import "../css/DataCleaner-DxFqCP9X.css";
import { defineComponent as se, toRefs as re, ref as h, reactive as K, onMounted as de, resolveComponent as C, openBlock as T, createElementBlock as G, createTextVNode as S, createVNode as d, unref as i, withCtx as c, createElementVNode as M, toDisplayString as ie, Fragment as ce, renderList as pe, createBlock as fe, nextTick as J } from "vue";
import { av as P, a as me, f as B, a5 as ve, m as z, d as H, e as g, g as Q, aC as W } from "./vendor.CawUkpaF.js";
import { _ as he } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const ge = ["int", "long", "short", "float", "double"], X = [
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
], Y = (f) => f && ge.includes(f.toLowerCase()) ? be : X, k = (f, R) => Y(f).find((E) => E.value === R), _e = { class: "nifi-cleaning" }, De = { class: "cleaning_content" }, Ve = { "w-30vw": "" }, ye = { "w-40vw": "" }, we = { style: { "margin-bottom": "18px" } }, xe = { class: "allocation_footer" }, Ce = /* @__PURE__ */ se({
  __name: "index",
  props: {
    formdata: {},
    graphShadowCell: {},
    propInput: {},
    propOutput: {}
  },
  setup(f) {
    const R = f, { formdata: N, graphShadowCell: p, propOutput: E, propInput: Z } = re(R), L = h(!1), $ = () => {
      var t, e;
      if (L.value = !0, q(), j(), ((t = v.value) == null ? void 0 : t.length) === 0 || l.cleaningData.length === 0) {
        x.value = !0;
        return;
      }
      ((e = v.value) == null ? void 0 : e.length) === l.cleaningData.length ? J(() => {
        var a;
        (a = y.value) == null || a.toggleAllSelection(), x.value = !0;
      }) : J(() => {
        l.cleaningData.forEach((a) => {
          var o, r;
          let n = (o = v.value) == null ? void 0 : o.find((_) => _.name === a.name);
          (r = y.value) == null || r.toggleRowSelection(n, !0);
        }), x.value = !0;
      });
    }, y = h(), v = h(), O = h([]), l = K({
      tableData: [],
      // 表格真正的数据
      cleaningData: []
      // 展示的数据--可搜索
    }), ee = (t) => {
      if (x.value) {
        if (O.value = t, t.length < l.tableData.length) {
          if (t.length === 0) {
            l.cleaningData = [], l.tableData = [];
            return;
          }
          let e = l.tableData.filter(
            (a) => t.every((n) => a.name != n.name)
          );
          for (let a = 0; a < e.length; a++)
            for (let n = 0; n < l.tableData.length; n++)
              if (l.tableData[n].name === e[a].name) {
                l.tableData.splice(n, 1);
                let o = l.cleaningData.findIndex(
                  (r) => r.name === e[a].name
                );
                o > -1 && l.cleaningData.splice(o, 1), n--;
              }
        } else if (t.length > l.tableData.length) {
          let e = t.filter(
            (n) => l.cleaningData.every((o) => n.name !== o.name)
          ), a = t.filter(
            (n) => l.tableData.every((o) => n.name !== o.name)
          );
          V.value === "" && l.cleaningData.push(...e), l.tableData.push(...a), A();
        }
      }
    }, q = () => {
      v.value = [], O.value = [], l.tableData = [], l.cleaningData = [], w.value = "", V.value = "", x.value = !1;
    }, U = () => {
      L.value = !1, q();
    }, le = (t) => {
      var o;
      let e = l.cleaningData.findIndex((r) => r.name === t.name);
      l.cleaningData.splice(e, 1);
      let a = l.tableData.findIndex((r) => r.name === t.name);
      l.tableData.splice(a, 1);
      let n = O.value.find((r) => r.name === t.name);
      (o = y.value) == null || o.toggleRowSelection(n, !1);
    }, b = h(), F = K({
      testMethod: [
        { required: !0, message: "检测方法不能为空", trigger: "change" }
      ],
      sValue: [{ required: !0, message: "指定值不能为空", trigger: "blur" }]
    }), ae = async () => {
      var t;
      await ((t = b.value) == null ? void 0 : t.validate((e, a) => {
        e ? (console.log(l.tableData), p.value.graphShadow.set(
          p.value.cell,
          "My_data-cleaner-expression",
          l.tableData
        ), U()) : console.log("error submit!", a);
      }));
    }, w = h(""), V = h(""), te = P(() => {
      let t = w.value.toLowerCase();
      v.value = I.value.filter(
        (e) => e.name.toLowerCase().includes(t)
      );
    }, 500), A = P(() => {
      let t = V.value.toLowerCase();
      l.cleaningData = l.tableData.filter(
        (e) => e.name.toLowerCase().includes(t)
      );
    }, 300), oe = (t, e) => {
      var o;
      let { testMethod: a, type: n } = e;
      if (a && ((o = k(n, a)) != null && o.disabled[0])) {
        let r = `cleaningData.${t}.sValue`;
        return J(() => {
          var _, u;
          (_ = b.value) == null || _.clearValidate(r), (u = b.value) == null || u.validateField(r, async (s) => await s);
        }), [];
      }
      return [{ required: !0, message: "指定值不能为空", trigger: "blur" }];
    }, ne = (t, e) => {
      var o, r;
      let { testMethod: a, type: n } = e;
      a && ((o = k(n, a)) != null && o.disabled[0]) && (l.cleaningData[t].sValue = "", l.tableData[t].sValue = ""), a && ((r = k(n, a)) != null && r.disabled[1]) && (l.cleaningData[t].oValue = "", l.tableData[t].oValue = "");
    }, I = h([]), x = h(!1), j = () => {
      var n;
      let t = p.value.graphShadow.get(
        p.value.cell.id
      ).inCells;
      for (let o of t) {
        let r = p.value.graphShadow.get(o);
        if (r) {
          let _ = r.source.value, u = p.value.graphShadow.get(_), s = u.cell.data.component.config.properties["output字段（自动填入）"];
          s ? (v.value = JSON.parse(s), I.value = JSON.parse(s)) : (s = Q(u.cell.data.component, E.value), s && (v.value = JSON.parse(s), I.value = JSON.parse(s)));
        }
      }
      let e = [], a = Q(N.value, Z.value);
      if ((n = y.value) == null || n.clearSelection(), a) {
        let o = JSON.parse(a);
        e = W(o);
      } else
        e = W(v.value ?? []);
      e.forEach((o) => {
        let r = {
          doc: o.doc,
          name: o.name,
          type: o.type,
          sValue: o.sValue ?? "",
          oValue: o.oValue ?? "",
          testMethod: o.testMethod
        };
        l.cleaningData.push(r), l.tableData.push(r);
      }), a && p.value.graphShadow.set(
        p.value.cell,
        "My_data-cleaner-expression",
        l.tableData
      ), p.value.graphShadow.set(
        p.value.cell,
        "My_data-cleaner-output",
        I.value
      );
    };
    de(() => {
      j(), b.value && (b.value.checkForm = ue), p.value.drawerRef.value.calculateRef = b.value;
    });
    const ue = () => new Promise((t) => {
      var e;
      (e = b.value) == null || e.validate((a, n) => {
        a ? t(!0) : (me.error(Object.values({ ...n })[0][0].message), t(!1));
      });
    });
    return (t, e) => {
      const a = C("el-input"), n = C("el-option"), o = C("el-select"), r = C("el-form-item"), _ = C("el-form");
      return T(), G("div", _e, [
        S(" 数据清洗配置: "),
        d(i(B), {
          type: "primary",
          onClick: $,
          style: { "margin-left": "12px" }
        }, {
          default: c(() => [
            S(" 数据清洗配置 ")
          ]),
          _: 1
        }),
        d(i(ve), {
          modelValue: L.value,
          "onUpdate:modelValue": e[4] || (e[4] = (u) => L.value = u),
          title: "数据清洗配置",
          "destroy-on-close": "",
          "w-75vw": "",
          "h-70vh": "",
          "before-close": U
        }, {
          default: c(() => [
            M("div", De, [
              M("div", Ve, [
                d(a, {
                  modelValue: w.value,
                  "onUpdate:modelValue": e[0] || (e[0] = (u) => w.value = u),
                  placeholder: "请输入",
                  "prefix-icon": i(z),
                  onInput: i(te),
                  onBlur: e[1] || (e[1] = (u) => w.value = u.target.value.trim())
                }, null, 8, ["modelValue", "prefix-icon", "onInput"]),
                d(i(H), {
                  ref_key: "multipleTableRef",
                  ref: y,
                  "max-height": "400",
                  data: v.value,
                  "cell-style": { textAlign: "center" },
                  "header-cell-style": { "text-align": "center" },
                  "row-key": "name",
                  onSelectionChange: ee,
                  "m-t-12": ""
                }, {
                  default: c(() => [
                    d(i(g), {
                      type: "selection",
                      width: "55",
                      "reserve-selection": ""
                    }),
                    d(i(g), {
                      prop: "name",
                      label: "字段名",
                      "show-overflow-tooltip": ""
                    }),
                    d(i(g), {
                      prop: "doc",
                      label: "字段中文名",
                      "show-overflow-tooltip": ""
                    }),
                    d(i(g), {
                      prop: "type",
                      label: "字段类型",
                      "show-overflow-tooltip": ""
                    })
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              M("div", ye, [
                d(a, {
                  modelValue: V.value,
                  "onUpdate:modelValue": e[2] || (e[2] = (u) => V.value = u),
                  placeholder: "请输入",
                  "prefix-icon": i(z),
                  onInput: i(A),
                  onBlur: e[3] || (e[3] = (u) => V.value = u.target.value.trim())
                }, null, 8, ["modelValue", "prefix-icon", "onInput"]),
                d(_, {
                  ref_key: "formRef",
                  ref: b,
                  model: l,
                  rules: F,
                  "m-t-12": ""
                }, {
                  default: c(() => [
                    d(i(H), {
                      data: l.cleaningData,
                      "max-height": "400",
                      "cell-style": { textAlign: "center" },
                      "header-cell-style": { "text-align": "center" }
                    }, {
                      default: c(() => [
                        d(i(g), {
                          label: "字段名",
                          "show-overflow-tooltip": ""
                        }, {
                          default: c(({ row: u }) => [
                            M("div", we, ie(u.name), 1)
                          ]),
                          _: 1
                        }),
                        d(i(g), {
                          label: "检测方法",
                          width: "150px"
                        }, {
                          default: c(({ $index: u, row: s }) => [
                            d(r, {
                              prop: "cleaningData." + u + ".testMethod",
                              rules: F.testMethod
                            }, {
                              default: c(() => [
                                d(o, {
                                  modelValue: s.testMethod,
                                  "onUpdate:modelValue": (m) => s.testMethod = m,
                                  placeholder: "请选择",
                                  class: "item__input",
                                  "popper-class": "select_popper",
                                  onChange: (m) => ne(u, s)
                                }, {
                                  default: c(() => [
                                    (T(!0), G(ce, null, pe(i(Y)(s.type), (m) => (T(), fe(n, {
                                      label: m.label,
                                      value: m.value,
                                      key: m.value
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
                        d(i(g), {
                          label: "指定值",
                          width: "150px"
                        }, {
                          default: c(({ $index: u, row: s }) => [
                            d(r, {
                              prop: "cleaningData." + u + ".sValue",
                              rules: oe(u, s)
                            }, {
                              default: c(() => {
                                var m;
                                return [
                                  d(a, {
                                    modelValue: s.sValue,
                                    "onUpdate:modelValue": (D) => s.sValue = D,
                                    placeholder: "请输入",
                                    disabled: (m = i(k)(s.type, s.testMethod)) == null ? void 0 : m.disabled[0],
                                    class: "item__input",
                                    clearable: "",
                                    onBlur: (D) => s.sValue = D.target.value.trim()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onBlur"])
                                ];
                              }),
                              _: 2
                            }, 1032, ["prop", "rules"])
                          ]),
                          _: 1
                        }),
                        d(i(g), {
                          label: "原值",
                          width: "150px"
                        }, {
                          default: c(({ $index: u, row: s }) => [
                            d(r, {
                              prop: "cleaningData." + u + ".oValue",
                              rules: F.oValue
                            }, {
                              default: c(() => {
                                var m;
                                return [
                                  d(a, {
                                    modelValue: s.oValue,
                                    "onUpdate:modelValue": (D) => s.oValue = D,
                                    placeholder: "请输入",
                                    disabled: (m = i(k)(s.type, s.testMethod)) == null ? void 0 : m.disabled[1],
                                    class: "item__input",
                                    clearable: "",
                                    onBlur: (D) => s.oValue = D.target.value.trim()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onBlur"])
                                ];
                              }),
                              _: 2
                            }, 1032, ["prop", "rules"])
                          ]),
                          _: 1
                        }),
                        d(i(g), { label: "操作" }, {
                          default: c(({ row: u }) => [
                            d(i(B), {
                              text: "",
                              onClick: () => le(u),
                              style: { "margin-bottom": "18px" }
                            }, {
                              default: c(() => [
                                S(" 删除 ")
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
            M("div", xe, [
              d(i(B), { onClick: U }, {
                default: c(() => [
                  S("取消")
                ]),
                _: 1
              }),
              d(i(B), {
                type: "primary",
                onClick: ae
              }, {
                default: c(() => [
                  S("保存")
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
}), Se = /* @__PURE__ */ he(Ce, [["__scopeId", "data-v-0638a2ac"]]), Me = (f) => ({
  graphShadow: f.graphShadow,
  drawerRef: f.drawerRef,
  graphForm: f.graphForm,
  cell: f.cell
}), Be = () => ({ name: [
  "org.apache.nifi.column.processors.DataCleaner_1_0"
], excludeKeys: ["expression", "output-param"], selfFormColumn: [
  {
    tag: Se,
    propInput: "config.properties['expression']",
    propOutput: "config.properties['output-param']",
    ":formdata": "formData",
    setup({ params: p }) {
      return { graphShadowCell: Me(p) };
    },
    ":graphShadowCell": "graphShadowCell"
  }
] });
export {
  Be as default
};
