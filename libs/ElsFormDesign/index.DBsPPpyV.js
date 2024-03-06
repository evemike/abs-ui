import { defineComponent as s, openBlock as n, createElementBlock as o } from "vue";
const t = { class: "ElsFormDesign" }, r = {
  name: "ElsFormDesign"
}, c = /* @__PURE__ */ s({
  ...r,
  props: {
    name: {}
  },
  setup(e) {
    return (l, m) => (n(), o("div", t));
  }
}), a = {
  install: (e) => {
    e.component("els-form-design", c);
  }
};
export {
  c as ElsFormDesign,
  a as default
};
