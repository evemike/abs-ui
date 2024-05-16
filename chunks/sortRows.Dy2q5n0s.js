import "../css/sortRows-FHPOjcOZ.css";
import { defineComponent as z, toRefs as P, ref as E, computed as S, resolveComponent as C, openBlock as D, createElementBlock as Y, createVNode as a, withCtx as n, createElementVNode as V, unref as t, Fragment as q, renderList as B, createTextVNode as F } from "vue";
import { m as R, d as I, e as u, f as y, bb as A, ap as j, aE as G, bc as K, bd as O, ay as H, aq as L } from "./vendor.vR4RX31U.js";
import { _ as J } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const M = { class: "container-lef" }, Q = { class: "h-full flex justify-center items-center" }, W = { class: "flex" }, X = /* @__PURE__ */ z({
  __name: "transformTable",
  props: {
    targetData: { default: () => ({}) },
    sourceList: { default: () => [] }
  },
  setup(w) {
    const T = w, { targetData: s, sourceList: k } = P(T), p = E(""), d = E([]), x = [
      {
        key: "Y",
        label: "升序"
      },
      {
        key: "N",
        label: "降序"
      }
    ], N = S(() => d.value.length > 0), f = S(() => {
      let e = k.value.filter((l) => !l.isTarget);
      return p.value ? e.filter((l) => l.name.includes(p.value)) : e;
    });
    function m(e) {
      d.value = e;
    }
    function _() {
      d.value.forEach((e) => {
        e.isTarget = !0;
      }), s.value.push(...d.value), d.value = [];
    }
    function b(e) {
      e > 0 && r(s.value, e, e - 1);
    }
    function c(e) {
      e < s.value.length - 1 && r(s.value, e, e + 1);
    }
    function r(e, l, h) {
      let v = e[l];
      e[l] = e[h], e[h] = v;
    }
    function g(e, l) {
      e.isTarget = !1, s.value.splice(l, 1);
    }
    return (e, l) => {
      const h = C("el-input"), v = C("el-col"), U = C("el-row");
      return D(), Y("div", null, [
        a(U, { gutter: 10 }, {
          default: n(() => [
            a(v, { span: 8 }, {
              default: n(() => [
                V("div", M, [
                  a(h, {
                    class: "container-input mt-0",
                    modelValue: p.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (o) => p.value = o),
                    size: "large",
                    placeholder: "请输入",
                    "suffix-icon": t(R)
                  }, null, 8, ["modelValue", "suffix-icon"]),
                  a(t(I), {
                    class: "container-table",
                    data: f.value,
                    "row-key": "name",
                    border: "",
                    onSelectionChange: m
                  }, {
                    default: n(() => [
                      a(t(u), {
                        type: "selection",
                        width: "40"
                      }),
                      a(t(u), {
                        label: "字段名",
                        prop: "name"
                      }),
                      a(t(u), {
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
            a(v, { span: 1 }, {
              default: n(() => [
                V("div", Q, [
                  a(t(y), {
                    type: "primary",
                    disabled: !N.value,
                    icon: t(A),
                    onClick: _
                  }, null, 8, ["disabled", "icon"])
                ])
              ]),
              _: 1
            }),
            a(v, { span: 15 }, {
              default: n(() => [
                a(t(I), {
                  class: "container-table",
                  data: t(s),
                  border: ""
                }, {
                  default: n(() => [
                    a(t(u), {
                      label: "字段名",
                      prop: "name"
                    }),
                    a(t(u), {
                      label: "字段类型",
                      prop: "type"
                    }),
                    a(t(u), {
                      label: "排序方式",
                      width: "120",
                      prop: "ascending"
                    }, {
                      default: n(({ row: o }) => [
                        a(t(j), {
                          modelValue: o.ascending,
                          "onUpdate:modelValue": (i) => o.ascending = i,
                          size: "mini",
                          placeholder: "请选择",
                          clearable: ""
                        }, {
                          default: n(() => [
                            (D(), Y(q, null, B(x, (i) => a(t(G), {
                              key: i.key,
                              label: i.label,
                              value: i.key
                            }, null, 8, ["label", "value"])), 64))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    a(t(u), {
                      label: "调整顺序",
                      width: "140"
                    }, {
                      default: n(({ $index: o }) => [
                        V("div", W, [
                          a(t(y), {
                            disabled: o === 0,
                            icon: t(K),
                            onClick: (i) => b(o)
                          }, null, 8, ["disabled", "icon", "onClick"]),
                          a(t(y), {
                            disabled: o === t(s).length - 1,
                            icon: t(O),
                            onClick: (i) => c(o)
                          }, null, 8, ["disabled", "icon", "onClick"])
                        ])
                      ]),
                      _: 1
                    }),
                    a(t(u), {
                      label: "操作",
                      width: "100"
                    }, {
                      default: n(({ row: o, $index: i }) => [
                        a(t(y), {
                          onClick: ($) => g(o, i)
                        }, {
                          default: n(() => [
                            F("删除")
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
}), Z = /* @__PURE__ */ J(X, [["__scopeId", "data-v-99290900"]]), oe = () => {
  const w = "SortRows", T = {
    ports: { items: [{ id: "in", group: "left" }, { id: "out", group: "right" }] }
  }, s = E([]), k = {
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
  }, p = (f, m) => {
    const _ = H(d(f, m)), b = m.steps.find((c) => c.name == f.id);
    if (b) {
      const c = b.fields.field.map((r) => r.name);
      _.forEach((r) => {
        r.isTarget = !!c.includes(r.name);
      });
    }
    s.value = _;
  };
  function d(f, m) {
    const { graph: _, steps: b } = m, c = _.getPredecessors(f, { distance: 1 });
    if (c.length <= 0)
      return;
    const r = c.map((e) => e.id), g = [];
    return b.forEach((e) => {
      r.includes(e.name) && g.push(...e.fields.field);
    }), g;
  }
  return { name: w, step: k, markup: T, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        {
          tag: Z,
          ":targetData": "formData.fields.field",
          ":sourceList": s
        }
      ]
    },
    {
      type: "form",
      label: "高级配置",
      column: [
        { label: "排序目录", prop: "directory" },
        { label: "临时文件前缀", prop: "prefix" },
        { label: "排序缓存大小(内存里存放的记录数)", prop: "sort_size" },
        { label: "未使用内存限值(%)", prop: "free_memory" },
        { label: "临时压缩文件?", prop: "compress", tag: L, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { label: "仅仅传递非重复的记录?(仅仅校验关键字)", prop: "unique_rows", tag: L, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" }
      ]
    }
  ], open: p, metadata: {} };
};
export {
  oe as default
};
