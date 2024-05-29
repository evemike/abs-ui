import "../css/ColSelector-D7Cas-0_.css";
import { defineComponent as I, toRefs as N, ref as f, onMounted as B, resolveComponent as K, openBlock as U, createElementBlock as w, createTextVNode as r, createVNode as a, unref as c, withCtx as l, createElementVNode as i, toDisplayString as k } from "vue";
import { d as O, b as F, e as T } from "./index.DSwYVZJp.js";
import { g as J, b as C, r as M, b7 as P, f as S } from "./vendor.DBgIaorj.js";
import { _ as R } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const j = { class: "nifi-column" }, q = {
  class: "allocation_content",
  "h-360": ""
}, z = { class: "transfer_options" }, A = { class: "multi-ellipsis" }, G = { class: "allocation_footer" }, H = /* @__PURE__ */ I({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(n) {
    const v = n, { formdata: d, inputV: b, propInput: g, propOutput: _ } = N(v), s = f(b.value), t = f(!1), u = () => {
      t.value = !0;
    }, D = {
      key: "name",
      label: "name"
    }, m = f([]), y = f([]), V = () => {
      t.value = !1;
    }, E = () => {
      x(), V();
    }, x = () => {
      let p = s.value.filter(
        (e) => m.value.includes(e.name)
      );
      S(d.value, g.value, O(s.value)), S(d.value, _.value, O(p));
    };
    return B(() => {
      let p = J(d.value, _.value);
      if (p) {
        let e = JSON.parse(p);
        m.value = e.map((h) => h.name);
      } else
        y.value = s.value.map(
          (e) => e.name
        );
      x();
    }), (p, e) => {
      const h = K("el-tooltip");
      return U(), w("div", j, [
        r(" 选择输出列 "),
        a(c(C), {
          type: "primary",
          onClick: u,
          style: { "margin-left": "12px" }
        }, {
          default: l(() => [
            r(" 选择输出列 ")
          ]),
          _: 1
        }),
        a(c(M), {
          modelValue: t.value,
          "onUpdate:modelValue": e[1] || (e[1] = (o) => t.value = o),
          title: "选择输出列",
          "destroy-on-close": "",
          "w-960": "",
          "h-520": "",
          "before-close": V
        }, {
          default: l(() => [
            i("div", q, [
              a(c(P), {
                filterable: "",
                "filter-placeholder": "请输入",
                titles: ["已选字段", "已选字段"],
                props: D,
                modelValue: m.value,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => m.value = o),
                data: s.value,
                "left-default-checked": y.value
              }, {
                default: l(({ option: o }) => [
                  i("div", z, [
                    a(h, null, {
                      content: l(() => [
                        r(k(o.name), 1)
                      ]),
                      default: l(() => [
                        i("div", A, k(o.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    i("span", null, k(o.doc), 1)
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "data", "left-default-checked"])
            ]),
            i("div", G, [
              a(c(C), { onClick: V }, {
                default: l(() => [
                  r("取消")
                ]),
                _: 1
              }),
              a(c(C), {
                type: "primary",
                onClick: E
              }, {
                default: l(() => [
                  r("保存")
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
}), L = /* @__PURE__ */ R(H, [["__scopeId", "data-v-ac6b7b74"]]), $ = () => {
  let n = [];
  const v = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.ColSelector_2_0"], excludeKeys: ["col-selector-input", "output-param"], selfFormColumn: [
    {
      tag: L,
      propInput: "config.properties['col-selector-input']",
      propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup() {
        return { inputV: n };
      },
      ":inputV": "inputV"
    }
  ], hooksOpen: (t, u) => {
    n = [], n = F(t, u, v);
  }, hooksSubmit: (t, u) => {
    T(t, u);
  } };
};
export {
  $ as default
};
