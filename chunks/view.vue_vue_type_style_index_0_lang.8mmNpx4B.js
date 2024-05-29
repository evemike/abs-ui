import "../css/view-CLp2Hp4J.css";
import { defineComponent as s, toRefs as l, openBlock as n, createElementBlock as i, createVNode as p, unref as o, mergeProps as d } from "vue";
import { m as a, aZ as c } from "./vendor.oF5jPd5s.js";
const w = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": "",
  class: "els-markdown-view"
}, T = /* @__PURE__ */ s({
  __name: "view",
  props: {
    value: {},
    theme: {},
    previewTheme: {},
    editorId: {},
    showCodeRowNumber: { type: Boolean },
    style: {},
    codeTheme: {},
    option: {}
  },
  setup(t) {
    const e = t, { value: r } = l(e), m = a(e.option || {}, { theme: e.theme, previewTheme: e.previewTheme, editorId: e.editorId || "preview-only-" + (/* @__PURE__ */ new Date()).getTime(), showCodeRowNumber: e.showCodeRowNumber, style: e.style, codeTheme: e.codeTheme });
    return (h, u) => (n(), i("div", w, [
      p(o(c), d({ "model-value": o(r) }, o(m)), null, 16, ["model-value"])
    ]));
  }
});
export {
  T as _
};
