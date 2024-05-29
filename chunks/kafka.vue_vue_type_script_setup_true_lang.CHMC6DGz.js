import { ref as x, markRaw as P, unref as f, defineComponent as W, watch as S, openBlock as h, createElementBlock as j, createElementVNode as E, createVNode as A, withCtx as R, Fragment as U, renderList as w, createBlock as $, normalizeProps as z, guardReactiveProps as M } from "vue";
import { g as X, a as Z } from "./api.CF1BbFLh.js";
import { B as c, aN as L, be as B, j as Y } from "./vendor.oF5jPd5s.js";
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
], C = (s, v, n) => {
  let m = [], k = [];
  const K = x([]), V = x([]), O = (s == null ? void 0 : s.kafkaOptionKey) || "connection.config.bootstrapServers", T = (s == null ? void 0 : s.topicOptionKey) || "name", F = (s == null ? void 0 : s.kafkaFormatKeys) || I[0], b = (s == null ? void 0 : s.topicFormatKeys) || I[1], D = 'config.properties["bootstrap.servers"]', g = 'config.properties["topic"]';
  X().then(async (e) => {
    m = e.data, K.value = e.data.map((o) => ({
      label: o.name,
      value: c(o, O),
      tag: P(L)
    }));
    let t = c(v, D);
    c(v, g) && (n && n.graphShadow.set(
      n.cell,
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
      tag: P(L)
    })), t && N(c(v, g));
  }, y = (e, t = !1) => {
    const a = u(e);
    a && d(a.name, t);
  }, _ = (e) => {
    const t = F[O];
    return t ? f(e)[t] : "";
  }, l = (e) => {
    const t = b[T];
    return t ? f(e)[t] : "";
  }, u = (e) => {
    const t = B(K.value, (a) => a.value == e);
    if (t > -1)
      return m[t];
  }, q = (e, t) => {
    const a = u(t);
    if (a) {
      d(a.name);
      const o = F;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), J(e);
    }
  }, G = (e) => {
    const t = B(V.value, (a) => a.value == e);
    if (t > -1)
      return k[t];
  }, H = (e, t) => {
    const a = G(t);
    if (a) {
      const o = b;
      Object.keys(o).forEach((r) => {
        const i = c(o, r), p = c(a, r);
        e[i] = p;
      }), n.graphShadow.get(n.cell.id).tableData && (n.graphShadow.get(n.cell.id).tableData = []), N(t);
    }
  }, J = (e) => {
    const t = b;
    Object.keys(t).forEach((a) => {
      const o = c(t, a), r = null;
      e[o] = r;
    });
  }, N = (e) => {
    var o, r, i;
    let t = B(k, (p) => p.name == e), a = (r = (o = k[t]) == null ? void 0 : o.messageSchema) == null ? void 0 : r.schemaFields;
    if (a && a.length > 0) {
      let p = (i = a[0]) == null ? void 0 : i.children;
      if (p.length === 0)
        return;
      n && n.graphShadow.set(
        n.cell,
        "my_topic_output",
        Q(p)
      );
    } else
      n && n.graphShadow.set(
        n.cell,
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
    kafkaList: m,
    topicList: k,
    kafkaOptions: K,
    topicOptions: V,
    NIFI_FORMAT_KEYS: I,
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
}, nt = /* @__PURE__ */ E("b", null, "选择 TOPIC", -1), it = /* @__PURE__ */ W({
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
      kafkaOptions: K,
      topicOptions: V,
      kafkaServerChange: O,
      topicChange: T,
      getKafkaValue: F,
      getTopicValue: b
      // initTopicList,
    } = C(v.config, n, k), D = F(c(n, m)), g = b(c(n, m)), d = x(D), y = x(g);
    return S(d, (_) => {
      const l = c(n, m);
      O(l, _);
    }), S(y, (_) => {
      const l = c(n, m);
      T(l, _);
    }), (_, l) => (h(), j("div", tt, [
      E("div", et, [
        at,
        A(f(Y), {
          modelValue: d.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u)
        }, {
          default: R(() => [
            (h(!0), j(U, null, w(f(K), (u) => (h(), $(f(L), z(M(u)), null, 16))), 256))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      E("div", ot, [
        nt,
        A(f(Y), {
          modelValue: y.value,
          "onUpdate:modelValue": l[1] || (l[1] = (u) => y.value = u)
        }, {
          default: R(() => [
            (h(!0), j(U, null, w(f(V), (u) => (h(), $(f(L), z(M(u)), null, 16))), 256))
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
