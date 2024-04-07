import { defineComponent as a, openBlock as l, createElementBlock as c, createElementVNode as t, createVNode as n, unref as r, renderSlot as s, toRefs as _, useSlots as d, withCtx as h } from "vue";
import { E as p } from "../../chunks/main.6OLMQnuI.js";
import { E as f } from "../../chunks/main.CVII1LfA.js";
import { _ as m } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
const u = { class: "_header inline-flex relative sticky z-99 top-0" }, v = { class: "sticky h-100% left-0 z-90" }, $ = { class: "relative h-100%" }, y = { class: "sticky h-100% right-0 z-90" }, E = /* @__PURE__ */ a({
  __name: "header",
  setup(e) {
    return (o, i) => (l(), c("div", u, [
      t("div", v, [
        n(r(f))
      ]),
      t("div", $, [
        s(o.$slots, "header-center")
      ]),
      t("div", y, [
        s(o.$slots, "header-right")
      ])
    ]));
  }
}), b = {}, k = { class: "_content inline-flex relative" }, B = { class: "sticky h-100% left-0 z-90" }, z = { class: "relative h-100%" }, g = { class: "sticky h-100% right-0 z-90" };
function j(e, o) {
  return l(), c("div", k, [
    t("div", B, [
      s(e.$slots, "content-left")
    ]),
    t("div", z, [
      s(e.$slots, "content-center")
    ]),
    t("div", g, [
      s(e.$slots, "content-right")
    ])
  ]);
}
const x = /* @__PURE__ */ m(b, [["render", j]]), O = { class: "relative els-table" }, C = {
  name: "ElsTable"
}, S = /* @__PURE__ */ a({
  ...C,
  props: {
    search: { type: [Boolean, Object] },
    index: { type: [Boolean, Object], default: !0 },
    select: { type: [Boolean, Object] },
    column: {},
    layout: {},
    data: {},
    tree: { type: [Boolean, Object] },
    onload: {}
  },
  setup(e) {
    return _(e), d(), (i, T) => (l(), c("div", O, [
      n(r(p), null, {
        default: h(() => [
          n(E),
          n(x)
        ]),
        _: 1
      })
    ]));
  }
}), q = {
  install: (e) => {
    e.component("els-table", S);
  }
};
export {
  S as ElsTable,
  q as default
};
