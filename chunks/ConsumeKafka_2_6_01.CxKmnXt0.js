import { _ as n } from "./kafka.vue_vue_type_script_setup_true_lang.CZL7gW8i.js";
import { p as c, c as d, d as h } from "./index.DEa1ourJ.js";
const i = (a) => ({
  graphShadow: a.graphShadow,
  cell: a.cell
}), w = () => {
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
  return { name: ["org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6_01"], excludeKeys: [
    "topic",
    "bootstrap.servers",
    "input字段（自动填入）",
    "output字段（自动填入）"
  ], selfFormColumn: [
    {
      tag: n,
      ":formdata": "formData",
      prop: "config.properties",
      isFormElem: !1,
      label: "",
      ":data": "formData",
      setup({ params: e }) {
        return { graphShadowCell: i(e) };
      },
      ":graphShadowCell": "graphShadowCell"
    }
  ], hooksSubmit: (e, o) => {
    var s, p, l, m, u;
    let r = (s = o.event.form) == null ? void 0 : s.data.value[e.id].config.properties;
    c(r, a);
    let t = ((l = (p = o.event.shadow) == null ? void 0 : p.cells.get(e.id)) == null ? void 0 : l.my_topic_output) ?? [];
    t.length === 0 && d("TOPIC中Schema为空，请重新选择TOPIC"), t = h(t), r["input字段（自动填入）"] = r["output字段（自动填入）"] = t, (u = (m = o.event.shadow) == null ? void 0 : m.get(e.id)) == null || delete u.my_topic_output;
  } };
};
export {
  w as default
};
