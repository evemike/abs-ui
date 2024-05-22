import { _ as m } from "./kafka.vue_vue_type_script_setup_true_lang.BfhtWYOw.js";
import { a as i } from "./vendor.CawUkpaF.js";
const c = (t) => ({
  graphShadow: t.graphShadow,
  cell: t.cell
}), S = () => ({ name: ["org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6_01"], excludeKeys: [
  "topic",
  "bootstrap.servers",
  "input字段（自动填入）",
  "output字段（自动填入）"
], selfFormColumn: [
  {
    tag: m,
    ":formdata": "formData",
    prop: "config.properties",
    isFormElem: !1,
    label: "",
    ":data": "formData",
    setup({ params: e }) {
      return { graphShadowCell: c(e) };
    },
    ":graphShadowCell": "graphShadowCell"
  }
], hooksSubmit: (e, a) => {
  var s, p, l, u, n;
  let r = (s = a.event.form) == null ? void 0 : s.data.value[e.id].config.properties;
  if (!r.topic)
    return i.error("请选择TOPIC"), !1;
  let o = (l = (p = a.event.shadow) == null ? void 0 : p.cells.get(
    e.id
  )) == null ? void 0 : l.my_topic_output;
  o = o.length === 0 ? "" : JSON.stringify(o), r["input字段（自动填入）"] = r["output字段（自动填入）"] = o, (n = (u = a.event.shadow) == null ? void 0 : u.cells.get(e.id)) == null || delete n.my_topic_output;
} });
export {
  S as default
};
