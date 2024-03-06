import { defineComponent as f, computed as y, unref as e, onMounted as k, openBlock as o, createBlock as g, mergeProps as h, withCtx as C, createElementBlock as t, normalizeClass as a, createElementVNode as i, Fragment as v } from "vue";
import { aH as B, a as E, d as x } from "./vendor.BakInURX.js";
const I = ["src"], b = {
  key: 2,
  "aria-hidden": "true",
  class: "svg-icon"
}, j = ["href"], w = ["src"], z = {
  key: 2,
  "aria-hidden": "true",
  class: "svg-icon click-copy"
}, F = ["href"], M = {
  name: "ElsIcon"
}, P = /* @__PURE__ */ f({
  ...M,
  props: {
    name: { default: "" },
    color: { default: "#333" },
    size: {},
    noel: { type: Boolean },
    autoCopy: { type: Boolean }
  },
  setup(u) {
    const p = u, { noel: d = !1, name: s, autoCopy: _ = !1, ...m } = p, l = y(
      () => /^#/.test(e(s)) ? e(s) : "#" + e(s)
    ), n = /^data:/.test(e(s)) || /^http/.test(e(s)) || /\.(png|jpeg|ico|svg|jpg|bmp|gif)$/.test(e(s)), r = /\s+/.test(e(s));
    return k(() => {
      _ && new B(".click-copy", {
        text: () => s || ""
      }).on("success", (c) => {
        E.success("copy success");
      }).on("error", (c) => {
        console.error(c);
      });
    }), (c, H) => e(d) ? (o(), t(v, { key: 1 }, [
      e(n) ? (o(), t("img", {
        key: 0,
        src: e(s),
        class: "click-copy"
      }, null, 8, w)) : e(r) ? (o(), t("i", {
        key: 1,
        class: a([e(s), "click-copy"])
      }, null, 2)) : (o(), t("svg", z, [
        i("use", {
          href: l.value,
          fill: "currentColor"
        }, null, 8, F)
      ]))
    ], 64)) : (o(), g(e(x), h({ key: 0 }, m, { class: "click-copy" }), {
      default: C(() => [
        e(n) ? (o(), t("img", {
          key: 0,
          src: e(s)
        }, null, 8, I)) : e(r) ? (o(), t("i", {
          key: 1,
          class: a(e(s))
        }, null, 2)) : (o(), t("svg", b, [
          i("use", {
            href: l.value,
            fill: "currentColor"
          }, null, 8, j)
        ]))
      ]),
      _: 1
    }, 16));
  }
});
export {
  P as _
};