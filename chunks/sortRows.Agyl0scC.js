import "../css/sortRows-CptFRggr.css";
import { defineComponent as F, toRefs as I, ref as x, computed as D, resolveComponent as V, openBlock as S, createElementBlock as Y, createVNode as a, withCtx as n, createElementVNode as E, unref as t, Fragment as q, renderList as B, createTextVNode as A, toRaw as L } from "vue";
import { m as O, d as R, e as i, f as g, be as P, aq as j, aI as G, bf as K, bg as H, aC as J, ar as U } from "./vendor.DW1gWLiY.js";
import { _ as M } from "./_plugin-vue_export-helper.CHgC5LLL.js";
import { d as Q } from "./index.C61KVsTJ.js";
const W = { class: "container-lef" }, X = { class: "h-full flex justify-center items-center" }, Z = { class: "flex" }, $ = /* @__PURE__ */ F({
  __name: "transformTable",
  props: {
    targetData: { default: () => ({}) },
    sourceList: { default: () => [] }
  },
  setup(h) {
    const w = h, { targetData: s, sourceList: y } = I(w), p = x(""), d = x([]), N = [
      {
        key: "Y",
        label: "升序"
      },
      {
        key: "N",
        label: "降序"
      }
    ], f = D(() => d.value.length > 0), m = D(() => {
      let e = y.value.filter((l) => !l.isTarget);
      return p.value ? e.filter((l) => l.name.includes(p.value)) : e;
    });
    function k(e) {
      d.value = e;
    }
    function T() {
      d.value.forEach((e) => {
        e.isTarget = !0;
      }), s.value.push(...d.value), d.value = [];
    }
    function C(e) {
      e > 0 && b(s.value, e, e - 1);
    }
    function _(e) {
      e < s.value.length - 1 && b(s.value, e, e + 1);
    }
    function b(e, l, c) {
      let u = e[l];
      e[l] = e[c], e[c] = u;
    }
    function v(e, l) {
      let c = y.value.find((u) => u.name == e.name);
      c && (c.isTarget = !1), s.value.splice(l, 1);
    }
    return (e, l) => {
      const c = V("el-input"), u = V("el-col"), z = V("el-row");
      return S(), Y("div", null, [
        a(z, { gutter: 10 }, {
          default: n(() => [
            a(u, { span: 8 }, {
              default: n(() => [
                E("div", W, [
                  a(c, {
                    class: "container-input mt-0",
                    modelValue: p.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (o) => p.value = o),
                    size: "large",
                    placeholder: "请输入",
                    "suffix-icon": t(O)
                  }, null, 8, ["modelValue", "suffix-icon"]),
                  a(t(R), {
                    class: "container-table",
                    data: m.value,
                    "row-key": "name",
                    border: "",
                    onSelectionChange: k
                  }, {
                    default: n(() => [
                      a(t(i), {
                        type: "selection",
                        width: "40"
                      }),
                      a(t(i), {
                        label: "字段名",
                        prop: "name"
                      }),
                      a(t(i), {
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
            a(u, { span: 1 }, {
              default: n(() => [
                E("div", X, [
                  a(t(g), {
                    type: "primary",
                    disabled: !f.value,
                    icon: t(P),
                    onClick: T
                  }, null, 8, ["disabled", "icon"])
                ])
              ]),
              _: 1
            }),
            a(u, { span: 15 }, {
              default: n(() => [
                a(t(R), {
                  class: "container-table",
                  data: t(s),
                  border: ""
                }, {
                  default: n(() => [
                    a(t(i), {
                      label: "字段名",
                      prop: "name"
                    }),
                    a(t(i), {
                      label: "字段类型",
                      prop: "type"
                    }),
                    a(t(i), {
                      label: "排序方式",
                      width: "120",
                      prop: "ascending"
                    }, {
                      default: n(({ row: o }) => [
                        a(t(j), {
                          modelValue: o.ascending,
                          "onUpdate:modelValue": (r) => o.ascending = r,
                          size: "mini",
                          placeholder: "请选择",
                          clearable: ""
                        }, {
                          default: n(() => [
                            (S(), Y(q, null, B(N, (r) => a(t(G), {
                              key: r.key,
                              label: r.label,
                              value: r.key
                            }, null, 8, ["label", "value"])), 64))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    a(t(i), {
                      label: "调整顺序",
                      width: "140"
                    }, {
                      default: n(({ $index: o }) => [
                        E("div", Z, [
                          a(t(g), {
                            disabled: o === 0,
                            icon: t(K),
                            onClick: (r) => C(o)
                          }, null, 8, ["disabled", "icon", "onClick"]),
                          a(t(g), {
                            disabled: o === t(s).length - 1,
                            icon: t(H),
                            onClick: (r) => _(o)
                          }, null, 8, ["disabled", "icon", "onClick"])
                        ])
                      ]),
                      _: 1
                    }),
                    a(t(i), {
                      label: "操作",
                      width: "100"
                    }, {
                      default: n(({ row: o, $index: r }) => [
                        a(t(g), {
                          onClick: (te) => v(o, r)
                        }, {
                          default: n(() => [
                            A("删除")
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
}), ee = /* @__PURE__ */ M($, [["__scopeId", "data-v-7168d1d7"]]), re = () => {
  const h = "SortRows", w = {
    ports: { items: [{ id: "in", group: "left" }, { id: "out", group: "right" }] }
  }, s = x([]);
  return { name: h, step: {
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
  }, markup: w, tabs: [
    {
      default: !0,
      type: "form",
      label: "属性配置",
      column: [
        {
          tag: ee,
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
        { label: "临时压缩文件?", prop: "compress", tag: U, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
        { label: "仅仅传递非重复的记录?(仅仅校验关键字)", prop: "unique_rows", tag: U, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" }
      ]
    }
  ], open: (f, m) => {
    var v;
    Q(f, m);
    const k = (v = m.form) == null ? void 0 : v.getCellFormData(f), { fields: T, outFields: C } = k, _ = J(L(C) || []), b = (L(T.field) || []).map((e) => e.name);
    _.forEach((e) => {
      e.isTarget = !!b.includes(e.name);
    }), s.value = _;
  }, metadata: {} };
};
export {
  re as default
};
