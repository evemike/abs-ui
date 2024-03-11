import { defineComponent as p, openBlock as e, createElementBlock as l, normalizeStyle as x, unref as r, Fragment as a, renderList as i, normalizeClass as c, renderSlot as u } from "vue";
const z = {
  name: "ElsResizeBox"
}, y = /* @__PURE__ */ p({
  ...z,
  props: {
    name: {},
    direction: {},
    names: { default: () => ["RS_1", "RS_2"] },
    size: { default: "100%" },
    min: {},
    max: {},
    bar: { default: () => ["left"] }
  },
  setup(t) {
    const d = t, { direction: n, bar: m } = d, f = n ? n == "horizontal" ? "display:flex;" : "display:flex;flex-direction:column;" : "";
    return (o, _) => (e(), l("div", {
      class: "ElsResizeBox",
      style: x(r(f)),
      relative: ""
    }, [
      r(n) ? (e(!0), l(a, { key: 0 }, i(o.names, (s) => (e(), l("div", {
        key: s,
        class: c([s]),
        relative: ""
      }, [
        u(o.$slots, s)
      ], 2))), 128)) : (e(), l(a, { key: 1 }, [
        (e(!0), l(a, null, i(r(m), (s) => (e(), l("i", {
          class: c([`_bar-${s}`])
        }, null, 2))), 256)),
        u(o.$slots, "default")
      ], 64))
    ], 4));
  }
}), R = {
  install: (t) => {
    t.component("els-resize-box", y);
  }
};
export {
  y as ElsResizeBox,
  R as default
};
