import { ref as x, markRaw as j, unref as f, defineComponent as Q, watch as B, openBlock as O, createElementBlock as w, createElementVNode as E, createVNode as D, withCtx as N, Fragment as R, renderList as U, createBlock as $, normalizeProps as z, guardReactiveProps as C } from "vue";
import { g as W, a as X } from "./api.CF1BbFLh.js";
import { A as c, aL as L, bc as A, g as M } from "./vendor.4pP_Prrf.js";
const I = [
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
], Z = (s, v, n) => {
  let m = [], k = [];
  const h = x([]), K = x([]), T = (s == null ? void 0 : s.kafkaOptionKey) || "connection.config.bootstrapServers", b = (s == null ? void 0 : s.topicOptionKey) || "name", g = (s == null ? void 0 : s.kafkaFormatKeys) || I[0], V = (s == null ? void 0 : s.topicFormatKeys) || I[1], S = 'config.properties["bootstrap.servers"]', F = 'config.properties["topic"]';
  W().then(async (e) => {
    m = e.data, h.value = e.data.map((o) => ({
      label: o.name,
      value: c(o, T),
      tag: j(L)
    }));
    let t = c(v, S);
    c(v, F) && (n && n.graphShadow.set(
      n.cell,
      "my_topic_output",
      []
    ), y(t, !0));
  });
  const d = async (e, t) => {
    if (!e)
      return;
    const a = await X(e);
    k = a.data, K.value = a.data.map((o) => ({
      label: o.name,
      value: c(o, b),
      tag: j(L)
    })), t && P(c(v, F));
  }, y = (e, t = !1) => {
    const a = u(e);
    a && d(a.name, t);
  }, _ = (e) => {
    const t = g[T];
    return t ? f(e)[t] : "";
  }, l = (e) => {
    const t = V[b];
    return t ? f(e)[t] : "";
  }, u = (e) => {
    const t = A(h.value, (a) => a.value == e);
    if (t > -1)
      return m[t];
  }, Y = (e, t) => {
    const a = u(t);
    if (a) {
      d(a.name);
      const o = g;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), H(e);
    }
  }, q = (e) => {
    const t = A(K.value, (a) => a.value == e);
    if (t > -1)
      return k[t];
  }, G = (e, t) => {
    const a = q(t);
    if (a) {
      const o = V;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), P(t);
    }
  }, H = (e) => {
    const t = V;
    Object.keys(t).forEach((a) => {
      const o = c(t, a), r = null;
      e[o] = r;
    });
  }, P = (e) => {
    var o, r, i;
    let t = A(k, (p) => p.name == e), a = (r = (o = k[t]) == null ? void 0 : o.messageSchema) == null ? void 0 : r.schemaFields;
    if (a && a.length > 0) {
      let p = (i = a[0]) == null ? void 0 : i.children;
      if (p.length === 0)
        return;
      n && n.graphShadow.set(
        n.cell,
        "my_topic_output",
        J(p)
      );
    } else
      n && n.graphShadow.set(
        n.cell,
        "my_topic_output",
        []
      );
  };
  function J(e) {
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
    kafkaList: m,
    topicList: k,
    kafkaOptions: h,
    topicOptions: K,
    NIFI_FORMAT_KEYS: I,
    initTopicList: y,
    topicChange: G,
    kafkaServerChange: Y,
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
}, nt = /* @__PURE__ */ E("b", null, "选择 TOPIC", -1), it = /* @__PURE__ */ Q({
  __name: "kafka",
  props: {
    config: {},
    formdata: {},
    data: {},
    prop: {},
    graphShadowCell: {}
  },
  setup(s) {
    const v = s, { formdata: n, prop: m = "", graphShadowCell: k } = v, {
      kafkaOptions: h,
      topicOptions: K,
      kafkaServerChange: T,
      topicChange: b,
      getKafkaValue: g,
      getTopicValue: V
      // initTopicList,
    } = Z(v.config, n, k), S = g(c(n, m)), F = V(c(n, m)), d = x(S), y = x(F);
    return B(d, (_) => {
      const l = c(n, m);
      T(l, _);
    }), B(y, (_) => {
      const l = c(n, m);
      b(l, _);
    }), (_, l) => (O(), w("div", tt, [
      E("div", et, [
        at,
        D(f(M), {
          modelValue: d.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u)
        }, {
          default: N(() => [
            (O(!0), w(R, null, U(f(h), (u) => (O(), $(f(L), z(C(u)), null, 16))), 256))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      E("div", ot, [
        nt,
        D(f(M), {
          modelValue: y.value,
          "onUpdate:modelValue": l[1] || (l[1] = (u) => y.value = u)
        }, {
          default: N(() => [
            (O(!0), w(R, null, U(f(K), (u) => (O(), $(f(L), z(C(u)), null, 16))), 256))
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
