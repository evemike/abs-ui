import { defineComponent as r, openBlock as l, createElementBlock as c, createElementVNode as t, createVNode as n, unref as a, renderSlot as s, toRefs as _, useSlots as d, withCtx as h } from "vue";
import { E as p } from "../../chunks/main.SrVeZPSl.js";
import { E as f } from "../../chunks/main.BeuaEiRW.js";
import { _ as m } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
const u = { class: "_header inline-flex relative sticky z-99 top-0" }, v = { class: "sticky h-100% left-0 z-90" }, $ = { class: "relative h-100%" }, y = { class: "sticky h-100% right-0 z-90" }, E = /* @__PURE__ */ r({
  __name: "header",
  setup(e) {
    return (o, i) => (l(), c("div", u, [
      t("div", v, [
        n(a(f))
      ]),
      t("div", $, [
        s(o.$slots, "header-center")
      ]),
      t("div", y, [
        s(o.$slots, "header-right")
      ])
    ]));
  }
}), b = {}, k = { class: "_content inline-flex relative" }, B = { class: "sticky h-100% left-0 z-90" }, x = { class: "relative h-100%" }, z = { class: "sticky h-100% right-0 z-90" };
function g(e, o) {
  return l(), c("div", k, [
    t("div", B, [
      s(e.$slots, "content-left")
    ]),
    t("div", x, [
      s(e.$slots, "content-center")
    ]),
    t("div", z, [
      s(e.$slots, "content-right")
    ])
  ]);
}
const j = /* @__PURE__ */ m(b, [["render", g]]), O = { class: "relative els-table" }, C = {
  name: "ElsTable"
}, S = /* @__PURE__ */ r({
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
    return _(e), d(), (i, N) => (l(), c("div", O, [
      n(a(p), null, {
        default: h(() => [
          n(E),
          n(j)
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
