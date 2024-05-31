import { _ as t } from "./kafka.vue_vue_type_script_setup_true_lang.C6wSuoHk.js";
import { p } from "./index.CtJfHKlH.js";
const l = (a) => ({
  graphShadow: a.graphShadow,
  graphForm: a.graphForm,
  cell: a.cell
}), i = () => {
  let a = [
    {
      parameter: "bootstrap.servers",
      message: "请选择kafka连接"
    },
    {
      parameter: "topic",
      message: "请选择TOPIC"
    }
  ];
  return { name: [
    "org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6",
    "org.apache.nifi.processors.kafka.pubsub.PublishKafka_2_6"
  ], excludeKeys: ["topic", "bootstrap.servers"], selfFormColumn: [
    {
      tag: t,
      ":formdata": "formData",
      prop: "config.properties",
      isFormElem: !1,
      label: "",
      ":data": "formData",
      setup({ params: e }) {
        return { graphShadowCell: l(e) };
      },
      ":graphShadowCell": "graphShadowCell"
    }
  ], hooksSubmit: (e, o) => {
    var r;
    let s = (r = o.event.form) == null ? void 0 : r.data.value[e.id].config.properties;
    p(s, a);
  } };
};
export {
  i as default
};
