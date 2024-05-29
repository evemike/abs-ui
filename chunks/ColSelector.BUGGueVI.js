import "../css/ColSelector-D7Cas-0_.css";
import { defineComponent as I, toRefs as N, ref as f, onMounted as B, resolveComponent as K, openBlock as U, createElementBlock as w, createTextVNode as r, createVNode as l, unref as c, withCtx as a, createElementVNode as i, toDisplayString as C } from "vue";
import { d as O, b as F, e as T } from "./index.DqFN_72b.js";
import { B as z, C as k, ag as J, bd as M, az as S } from "./vendor.oF5jPd5s.js";
import { _ as P } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const R = { class: "nifi-column" }, j = {
  class: "allocation_content",
  "h-360": ""
}, q = { class: "transfer_options" }, A = { class: "multi-ellipsis" }, G = { class: "allocation_footer" }, H = /* @__PURE__ */ I({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(n) {
    const v = n, { formdata: d, inputV: g, propInput: y, propOutput: _ } = N(v), s = f(g.value), t = f(!1), u = () => {
      t.value = !0;
    }, D = {
      key: "name",
      label: "name"
    }, m = f([]), b = f([]), V = () => {
      t.value = !1;
    }, E = () => {
      x(), V();
    }, x = () => {
      let p = s.value.filter(
        (e) => m.value.includes(e.name)
      );
      S(d.value, y.value, O(s.value)), S(d.value, _.value, O(p));
    };
    return B(() => {
      let p = z(d.value, _.value);
      if (p) {
        let e = JSON.parse(p);
        m.value = e.map((h) => h.name);
      } else
        b.value = s.value.map(
          (e) => e.name
        );
      x();
    }), (p, e) => {
      const h = K("el-tooltip");
      return U(), w("div", R, [
        r(" 选择输出列 "),
        l(c(k), {
          type: "primary",
          onClick: u,
          style: { "margin-left": "12px" }
        }, {
          default: a(() => [
            r(" 选择输出列 ")
          ]),
          _: 1
        }),
        l(c(J), {
          modelValue: t.value,
          "onUpdate:modelValue": e[1] || (e[1] = (o) => t.value = o),
          title: "选择输出列",
          "destroy-on-close": "",
          "w-960": "",
          "h-520": "",
          "before-close": V
        }, {
          default: a(() => [
            i("div", j, [
              l(c(M), {
                filterable: "",
                "filter-placeholder": "请输入",
                titles: ["已选字段", "已选字段"],
                props: D,
                modelValue: m.value,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => m.value = o),
                data: s.value,
                "left-default-checked": b.value
              }, {
                default: a(({ option: o }) => [
                  i("div", q, [
                    l(h, null, {
                      content: a(() => [
                        r(C(o.name), 1)
                      ]),
                      default: a(() => [
                        i("div", A, C(o.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    i("span", null, C(o.doc), 1)
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "data", "left-default-checked"])
            ]),
            i("div", G, [
              l(c(k), { onClick: V }, {
                default: a(() => [
                  r("取消")
                ]),
                _: 1
              }),
              l(c(k), {
                type: "primary",
                onClick: E
              }, {
                default: a(() => [
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
}), L = /* @__PURE__ */ P(H, [["__scopeId", "data-v-ac6b7b74"]]), $ = () => {
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
