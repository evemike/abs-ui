import { ref as x, markRaw as P, unref as f, defineComponent as Q, watch as A, openBlock as O, createElementBlock as j, createElementVNode as E, createVNode as D, withCtx as N, Fragment as R, renderList as U, createBlock as M, normalizeProps as $, guardReactiveProps as z } from "vue";
import { g as W, a as X } from "./api.CF1BbFLh.js";
import { B as c, aM as L, bd as w, j as C } from "./vendor.Bh6KHC77.js";
const B = [
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
  const h = x([]), K = x([]), T = (s == null ? void 0 : s.kafkaOptionKey) || "connection.config.bootstrapServers", b = (s == null ? void 0 : s.topicOptionKey) || "name", F = (s == null ? void 0 : s.kafkaFormatKeys) || B[0], V = (s == null ? void 0 : s.topicFormatKeys) || B[1], S = 'config.properties["bootstrap.servers"]', g = 'config.properties["topic"]';
  W().then(async (e) => {
    m = e.data, h.value = e.data.map((o) => ({
      label: o.name,
      value: c(o, T),
      tag: P(L)
    }));
    let t = c(v, S);
    c(v, g) && (n && n.graphShadow.set(
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
      tag: P(L)
    })), t && I(c(v, g));
  }, y = (e, t = !1) => {
    const a = u(e);
    a && d(a.name, t);
  }, _ = (e) => {
    const t = F[T];
    return t ? f(e)[t] : "";
  }, l = (e) => {
    const t = V[b];
    return t ? f(e)[t] : "";
  }, u = (e) => {
    const t = w(h.value, (a) => a.value == e);
    if (t > -1)
      return m[t];
  }, Y = (e, t) => {
    const a = u(t);
    if (a) {
      d(a.name);
      const o = F;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), H(e);
    }
  }, q = (e) => {
    const t = w(K.value, (a) => a.value == e);
    if (t > -1)
      return k[t];
  }, G = (e, t) => {
    const a = q(t);
    if (a) {
      const o = V;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), I(t);
    }
  }, H = (e) => {
    const t = V;
    Object.keys(t).forEach((a) => {
      const o = c(t, a), r = null;
      e[o] = r;
    });
  }, I = (e) => {
    var o, r, i;
    let t = w(k, (p) => p.name == e), a = (r = (o = k[t]) == null ? void 0 : o.messageSchema) == null ? void 0 : r.schemaFields;
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
    NIFI_FORMAT_KEYS: B,
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
      getKafkaValue: F,
      getTopicValue: V
      // initTopicList,
    } = Z(v.config, n, k), S = F(c(n, m)), g = V(c(n, m)), d = x(S), y = x(g);
    return A(d, (_) => {
      const l = c(n, m);
      T(l, _);
    }), A(y, (_) => {
      const l = c(n, m);
      b(l, _);
    }), (_, l) => (O(), j("div", tt, [
      E("div", et, [
        at,
        D(f(C), {
          modelValue: d.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u)
        }, {
          default: N(() => [
            (O(!0), j(R, null, U(f(h), (u) => (O(), M(f(L), $(z(u)), null, 16))), 256))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      E("div", ot, [
        nt,
        D(f(C), {
          modelValue: y.value,
          "onUpdate:modelValue": l[1] || (l[1] = (u) => y.value = u)
        }, {
          default: N(() => [
            (O(!0), j(R, null, U(f(K), (u) => (O(), M(f(L), $(z(u)), null, 16))), 256))
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
