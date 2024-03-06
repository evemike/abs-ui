import { defineComponent as n, openBlock as o, createElementBlock as s } from "vue";
const t = { class: "JsonView" }, c = {
  name: "JsonView"
}, _ = /* @__PURE__ */ n({
  ...c,
  props: {
    name: {}
  },
  setup(e) {
    return (a, i) => (o(), s("div", t));
  }
}), r = {
  install: (e) => {
    e.component("json-view", _);
  }
};
export {
  _ as JsonView,
  r as default
};
