import { defineComponent as n, openBlock as o, createElementBlock as e } from "vue";
const s = { class: "ElsButton" }, l = /* @__PURE__ */ n({
  name: "ElsButton",
  __name: "main",
  props: {
    elems: {},
    layout: {}
  },
  setup(t) {
    return (a, c) => (o(), e("div", s));
  }
}), p = {
  install: (t) => {
    t.component("els-button", l);
  }
};
export {
  l as ElsButton,
  p as default
};
