import { ref as x, markRaw as A, unref as m, defineComponent as W, watch as B, openBlock as h, createElementBlock as I, createElementVNode as E, createVNode as N, withCtx as R, Fragment as U, renderList as w, createBlock as $, normalizeProps as z, guardReactiveProps as M } from "vue";
import { g as X, a as Z } from "./api.CF1BbFLh.js";
import { g as c, aL as L, bf as P, as as Y } from "./vendor.jH9g53BU.js";
const S = [
  // kafka
  {
    "connection.config.bootstrapServers": "bootstrap.servers",
    "connection.config.saslUsername": "sasl.username",
    "connection.config.saslPassword": "sasl.password"
  },
  // topic
  {
    name: "topic",
    id: "group.id"
  }
], C = (n, v, s) => {
  let f = [], k = [];
  const K = x([]), V = x([]), O = (n == null ? void 0 : n.kafkaOptionKey) || "connection.config.bootstrapServers", T = (n == null ? void 0 : n.topicOptionKey) || "name", g = (n == null ? void 0 : n.kafkaFormatKeys) || S[0], b = (n == null ? void 0 : n.topicFormatKeys) || S[1], D = 'config.properties["bootstrap.servers"]', F = 'config.properties["topic"]';
  X().then(async (e) => {
    f = e.data, K.value = e.data.map((o) => ({
      label: o.name,
      value: c(o, O),
      tag: A(L)
    }));
    let t = c(v, D);
    c(v, F) && (s && s.graphShadow.set(
      s.cell,
      "my_topic_output",
      []
    ), y(t, !0));
  });
  const d = async (e, t) => {
    if (!e)
      return;
    const a = await Z(e);
    k = a.data, V.value = a.data.map((o) => ({
      label: o.name,
      value: c(o, T),
      tag: A(L)
    })), t && j(c(v, F));
  }, y = (e, t = !1) => {
    const a = u(e);
    a && d(a.name, t);
  }, _ = (e) => {
    const t = g[O];
    return t ? m(e)[t] : "";
  }, l = (e) => {
    const t = b[T];
    return t ? m(e)[t] : "";
  }, u = (e) => {
    const t = P(K.value, (a) => a.value == e);
    if (t > -1)
      return f[t];
  }, q = (e, t) => {
    const a = u(t);
    if (a) {
      d(a.name);
      const o = g;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), J(e);
    }
  }, G = (e) => {
    const t = P(V.value, (a) => a.value == e);
    if (t > -1)
      return k[t];
  }, H = (e, t) => {
    const a = G(t);
    if (a) {
      const o = b;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), s.graphShadow.get(s.cell.id).tableData && (s.graphShadow.get(s.cell.id).tableData = []), j(t);
    }
  }, J = (e) => {
    const t = b;
    Object.keys(t).forEach((a) => {
      const o = c(t, a), r = null;
      e[o] = r;
    });
  }, j = (e) => {
    var o, r, i;
    let t = P(k, (p) => p.name == e), a = (r = (o = k[t]) == null ? void 0 : o.messageSchema) == null ? void 0 : r.schemaFields;
    if (a && a.length > 0) {
      let p = (i = a[0]) == null ? void 0 : i.children;
      if (p.length === 0)
        return;
      s && s.graphShadow.set(
        s.cell,
        "my_topic_output",
        Q(p)
      );
    } else
      s && s.graphShadow.set(
        s.cell,
        "my_topic_output",
        []
      );
  };
  function Q(e) {
    let t = [];
    function a(o, r = "") {
      let i = {
        name: o.name,
        type: o.dataType,
        doc: o.description ?? "",
        originalValue: o.name
      };
      if (r !== "" && (i.name = `${r}.${i.name}`), t.push(i), o.children)
        for (const p of o.children)
          a(p, i.name);
    }
    for (const o of e)
      a(o);
    return t;
  }
  return {
    kafkaList: f,
    topicList: k,
    kafkaOptions: K,
    topicOptions: V,
    NIFI_FORMAT_KEYS: S,
    initTopicList: y,
    topicChange: H,
    kafkaServerChange: q,
    getKafkaValue: _,
    getTopicValue: l,
    initTopic: d
  };
}, tt = {
  "w-full": "",
  style: { "margin-bottom": "18px" }
}, et = {
  flex: "",
  "flex-col": ""
}, at = /* @__PURE__ */ E("b", null, "选择 kafka 连接", -1), ot = {
  flex: "",
  "flex-col": ""
}, st = /* @__PURE__ */ E("b", null, "选择 TOPIC", -1), it = /* @__PURE__ */ W({
  __name: "kafka",
  props: {
    config: {},
    formdata: {},
    data: {},
    prop: {},
    graphShadowCell: {}
  },
  setup(n) {
    const v = n, { formdata: s, prop: f = "", graphShadowCell: k } = v, {
      kafkaOptions: K,
      topicOptions: V,
      kafkaServerChange: O,
      topicChange: T,
      getKafkaValue: g,
      getTopicValue: b
      // initTopicList,
    } = C(v.config, s, k), D = g(c(s, f)), F = b(c(s, f)), d = x(D), y = x(F);
    return B(d, (_) => {
      const l = c(s, f);
      O(l, _);
    }), B(y, (_) => {
      const l = c(s, f);
      T(l, _);
    }), (_, l) => (h(), I("div", tt, [
      E("div", et, [
        at,
        N(m(Y), {
          modelValue: d.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u)
        }, {
          default: R(() => [
            (h(!0), I(U, null, w(m(K), (u) => (h(), $(m(L), z(M(u)), null, 16))), 256))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      E("div", ot, [
        st,
        N(m(Y), {
          modelValue: y.value,
          "onUpdate:modelValue": l[1] || (l[1] = (u) => y.value = u)
        }, {
          default: R(() => [
            (h(!0), I(U, null, w(m(V), (u) => (h(), $(m(L), z(M(u)), null, 16))), 256))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ])
    ]));
  }
});
export {
  it as _
};
