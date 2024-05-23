import { _ as o } from "./kafka.vue_vue_type_script_setup_true_lang.BvrfzkYp.js";
const r = (e) => ({
  graphShadow: e.graphShadow,
  drawerRef: e.drawerRef,
  graphForm: e.graphForm,
  cell: e.cell
}), p = () => ({ name: [
  "org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6",
  "org.apache.nifi.processors.kafka.pubsub.PublishKafka_2_6"
], excludeKeys: ["topic", "bootstrap.servers"], selfFormColumn: [
  {
    tag: o,
    ":formdata": "formData",
    prop: "config.properties",
    isFormElem: !1,
    label: "",
    ":data": "formData",
    setup({ params: a }) {
      return { graphShadowCell: r(a) };
    },
    ":graphShadowCell": "graphShadowCell"
  }
] });
export {
  p as default
};
