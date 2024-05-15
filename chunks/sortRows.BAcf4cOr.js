import "../css/sortRows-CpmA-vp_.css";
import { defineComponent as A, toRefs as j, ref as Y, computed as D, resolveComponent as y, openBlock as U, createElementBlock as N, createVNode as e, withCtx as n, createElementVNode as E, unref as t, Fragment as P, renderList as I, createTextVNode as G } from "vue";
import { m as K, d as L, e as s, f as w, bc as O, af as B, ad as F, bd as H, be as J, ah as M, as as R } from "./vendor.C4BzA6n6.js";
import { _ as Q } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const W = { class: "container-lef" }, X = { class: "h-full flex justify-center items-center" }, Z = { class: "flex" }, $ = /* @__PURE__ */ A({
  __name: "transformTable",
  props: {
    targetData: { default: () => ({}) },
    sourceList: { default: () => [] }
  },
  setup(k) {
    const T = k, { targetData: r, sourceList: x } = j(T), p = Y(""), d = Y([]), z = [
      {
        key: "Y",
        label: "升序"
      },
      {
        key: "N",
        label: "降序"
      }
    ], S = ["0", "1", "2", "3", "4"], m = D(() => d.value.length > 0), f = D(() => {
      let a = x.value.filter((i) => !i.isTarget);
      return p.value ? a.filter((i) => i.name.includes(p.value)) : a;
    });
    function _(a) {
      d.value = a;
    }
    function v() {
      d.value.forEach((a) => {
        a.isTarget = !0;
      }), r.value.push(...d.value), d.value = [];
    }
    function c(a) {
      a > 0 && h(r.value, a, a - 1);
    }
    function u(a) {
      a < r.value.length - 1 && h(r.value, a, a + 1);
    }
    function h(a, i, V) {
      let g = a[i];
      a[i] = a[V], a[V] = g;
    }
    function b(a, i) {
      a.isTarget = !1, r.value.splice(i, 1);
    }
    return (a, i) => {
      const V = y("el-input"), g = y("el-col"), C = y("el-switch"), q = y("el-row");
      return U(), N("div", null, [
        e(q, { gutter: 10 }, {
          default: n(() => [
            e(g, { span: 8 }, {
              default: n(() => [
                E("div", W, [
                  e(V, {
                    class: "container-input mt-0",
                    modelValue: p.value,
                    "onUpdate:modelValue": i[0] || (i[0] = (l) => p.value = l),
                    size: "large",
                    placeholder: "请输入",
                    "suffix-icon": t(K)
                  }, null, 8, ["modelValue", "suffix-icon"]),
                  e(t(L), {
                    class: "container-table",
                    data: f.value,
                    "row-key": "name",
                    border: "",
                    onSelectionChange: _
                  }, {
                    default: n(() => [
                      e(t(s), {
                        type: "selection",
                        width: "40"
                      }),
                      e(t(s), {
                        label: "字段名",
                        prop: "name"
                      }),
                      e(t(s), {
                        label: "字段类型",
                        prop: "type"
                      })
                    ]),
                    _: 1
                  }, 8, ["data"])
                ])
              ]),
              _: 1
            }),
            e(g, { span: 1 }, {
              default: n(() => [
                E("div", X, [
                  e(t(w), {
                    type: "primary",
                    disabled: !m.value,
                    icon: t(O),
                    onClick: v
                  }, null, 8, ["disabled", "icon"])
                ])
              ]),
              _: 1
            }),
            e(g, { span: 15 }, {
              default: n(() => [
                e(t(L), {
                  class: "container-table",
                  data: t(r),
                  border: ""
                }, {
                  default: n(() => [
                    e(t(s), {
                      label: "字段名",
                      prop: "name"
                    }),
                    e(t(s), {
                      label: "字段类型",
                      prop: "type"
                    }),
                    e(t(s), {
                      label: "排序方式",
                      width: "120",
                      prop: "ascending"
                    }, {
                      default: n(({ row: l }) => [
                        e(t(B), {
                          modelValue: l.ascending,
                          "onUpdate:modelValue": (o) => l.ascending = o,
                          size: "mini",
                          placeholder: "请选择",
                          clearable: ""
                        }, {
                          default: n(() => [
                            (U(), N(P, null, I(z, (o) => e(t(F), {
                              key: o.key,
                              label: o.label,
                              value: o.key
                            }, null, 8, ["label", "value"])), 64))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    e(t(s), {
                      label: "大小写敏感",
                      width: "120",
                      prop: "case_sensitive"
                    }, {
                      default: n(({ row: l }) => [
                        e(C, {
                          modelValue: l.case_sensitive,
                          "onUpdate:modelValue": (o) => l.case_sensitive = o,
                          size: "mini",
                          inlinePrompt: "",
                          "active-value": "Y",
                          "inactive-value": "N",
                          "active-text": "是",
                          "inactive-text": "否"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    e(t(s), {
                      label: "根据当前区域设置排序",
                      width: "120",
                      prop: "collator_enabled"
                    }, {
                      default: n(({ row: l }) => [
                        e(C, {
                          modelValue: l.collator_enabled,
                          "onUpdate:modelValue": (o) => l.collator_enabled = o,
                          size: "mini",
                          inlinePrompt: "",
                          "active-value": "Y",
                          "inactive-value": "N",
                          "active-text": "是",
                          "inactive-text": "否"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    e(t(s), {
                      label: "排序优先级",
                      width: "120",
                      prop: "collator_strength"
                    }, {
                      default: n(({ row: l }) => [
                        e(t(B), {
                          modelValue: l.collator_strength,
                          "onUpdate:modelValue": (o) => l.collator_strength = o,
                          size: "mini",
                          placeholder: "请选择",
                          clearable: ""
                        }, {
                          default: n(() => [
                            (U(), N(P, null, I(S, (o) => e(t(F), {
                              key: o,
                              label: o,
                              value: o
                            }, null, 8, ["label", "value"])), 64))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    e(t(s), {
                      label: "预先分类",
                      width: "120",
                      prop: "presorted"
                    }, {
                      default: n(({ row: l }) => [
                        e(C, {
                          modelValue: l.presorted,
                          "onUpdate:modelValue": (o) => l.presorted = o,
                          size: "mini",
                          inlinePrompt: "",
                          "active-value": "Y",
                          "inactive-value": "N",
                          "active-text": "是",
                          "inactive-text": "否"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    e(t(s), {
                      label: "调整顺序",
                      width: "140"
                    }, {
                      default: n(({ $index: l }) => [
                        E("div", Z, [
                          e(t(w), {
                            disabled: l === 0,
                            icon: t(H),
                            onClick: (o) => c(l)
                          }, null, 8, ["disabled", "icon", "onClick"]),
                          e(t(w), {
                            disabled: l === t(r).length - 1,
                            icon: t(J),
                            onClick: (o) => u(l)
                          }, null, 8, ["disabled", "icon", "onClick"])
                        ])
                      ]),
                      _: 1
                    }),
                    e(t(s), {
                      label: "操作",
                      width: "100"
                    }, {
                      default: n(({ row: l, $index: o }) => [
                        e(t(w), {
                          onClick: (te) => b(l, o)
                        }, {
                          default: n(() => [
                            G("删除")
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
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), ee = /* @__PURE__ */ Q($, [["__scopeId", "data-v-ff04be00"]]), se = () => {
  const k = "SortRows", T = {
    ports: { items: [{ id: "in", group: "left" }, { id: "out", group: "right" }] }
  }, r = Y([]), x = {
    name: "排序记录",
    type: "SortRows",
    description: [],
    distribute: "Y",
    custom_distribution: [],
    copies: "1",
    partitioning: {
      method: "none",
      schema_name: []
    },
    fields: {
      field: []
    },
    ftp_username: "",
    ftp_password: "",
    directory: "%%java.io.tmpdir%%",
    prefix: "out",
    sort_size: 1e6,
    free_memory: " ",
    compress: !1,
    compress_variable: [],
    unique_rows: !1,
    attributes: [],
    cluster_schema: [],
    remotesteps: {
      input: `
      `,
      output: `
      `
    },
    GUI: {
      xloc: 320,
      yloc: 64,
      draw: "Y"
    }
  }, p = (m, f) => {
    const _ = M(d(m, f)), v = f.steps.find((c) => c.name == m.id);
    if (v) {
      const c = v.fields.field.map((u) => u.name);
      _.forEach((u) => {
        u.isTarget = !!c.includes(u.name);
      });
    }
    r.value = _;
  };
  function d(m, f) {
    const { graph: _, steps: v } = f, c = _.getPredecessors(m, { distance: 1 });
    if (c.length <= 0)
      return;
    const u = c.map((b) => b.id), h = [];
    return v.filter((b) => {
      u.includes(b.name) && h.push(...b.fields.field);
    }), h;
  }
  return { name: k, step: x, markup: T, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        { label: "排序目录", prop: "directory" },
        { label: "临时文件前缀", prop: "prefix" },
        { label: "排序缓存大小(内存里存放的记录数)", prop: "sort_size" },
        { label: "未使用内存限值(%)", prop: "free_memory" },
        { label: "临时压缩文件?", prop: "compress", tag: R, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { label: "仅仅传递非重复的记录?(仅仅校验关键字)", prop: "unique_rows", tag: R, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" }
      ]
    },
    {
      type: "form",
      label: "高级配置",
      column: [
        {
          tag: ee,
          ":targetData": "formData.fields.field",
          ":sourceList": r
        }
      ]
    }
  ], open: p, metadata: {} };
};
export {
  se as default
};
