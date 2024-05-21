import { _ as r } from "./kafka.vue_vue_type_script_setup_true_lang.Xa7r82C1.js";
import { C as a } from "./main.C9B4zdL3.js";
const l = (e) => ({
  graphShadow: e.graphShadow,
  drawerRef: e.drawerRef,
  graphForm: e.graphForm,
  cell: e.cell
}), n = () => ({ name: [
  "org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6_01"
], excludeKeys: ["topic", "bootstrap.servers", "input字段（自动填入）", "output字段（自动填入）", "web预留（自动填入）", "SQL语句"], selfFormColumn: [
  {
    tag: r,
    ":formdata": "formData",
    prop: "config.properties",
    isFormElem: !1,
    label: "",
    ":data": "formData",
    setup({ params: o }) {
      return { graphShadowCell: l(o) };
    },
    ":graphShadowCell": "graphShadowCell"
  },
  {
    tag: a,
    style: "min-height:100px",
    maxHeight: "100px",
    dialogTitle: "header-name-regex",
    isFormElem: !0,
    label: "sql语句",
    elFormItem: { class: "flex-column" }
  }
] });
export {
  n as default
};
