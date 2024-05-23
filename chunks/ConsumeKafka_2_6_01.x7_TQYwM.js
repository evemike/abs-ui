import { _ as i } from "./kafka.vue_vue_type_script_setup_true_lang.BvrfzkYp.js";
import { a as m } from "./vendor.4pP_Prrf.js";
const c = (r) => ({
  graphShadow: r.graphShadow,
  cell: r.cell
}), _ = () => ({ name: ["org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6_01"], excludeKeys: [
  "topic",
  "bootstrap.servers",
  "input字段（自动填入）",
  "output字段（自动填入）"
], selfFormColumn: [
  {
    tag: i,
    ":formdata": "formData",
    prop: "config.properties",
    isFormElem: !1,
    label: "",
    ":data": "formData",
    setup({ params: o }) {
      return { graphShadowCell: c(o) };
    },
    ":graphShadowCell": "graphShadowCell"
  }
], hooksSubmit: (o, a) => {
  var s, p, l, u, n;
  let e = (s = a.event.form) == null ? void 0 : s.data.value[o.id].config.properties;
  if (!e["bootstrap.servers"])
    throw m.error("请选择kafka连接"), new Error("请选择kafka连接");
  if (!e.topic)
    throw m.error("请选择TOPIC"), new Error("请选择TOPIC");
  let t = (l = (p = a.event.shadow) == null ? void 0 : p.cells.get(
    o.id
  )) == null ? void 0 : l.my_topic_output;
  t = t.length === 0 ? "" : JSON.stringify(t), e["input字段（自动填入）"] = e["output字段（自动填入）"] = t, (n = (u = a.event.shadow) == null ? void 0 : u.cells.get(o.id)) == null || delete n.my_topic_output;
} });
export {
  _ as default
};
