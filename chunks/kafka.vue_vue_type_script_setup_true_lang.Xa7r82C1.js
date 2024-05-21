import { ref as x, markRaw as D, unref as f, defineComponent as W, watch as N, openBlock as T, createElementBlock as P, createElementVNode as E, createVNode as R, withCtx as S, Fragment as U, renderList as $, createBlock as w, normalizeProps as z, guardReactiveProps as M } from "vue";
import { g as X, a as Z } from "./api.CF1BbFLh.js";
import { g as c, aI as L, ba as j, ap as Y } from "./vendor.CawUkpaF.js";
const A = [
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
  const K = x([]), V = x([]), b = (s == null ? void 0 : s.kafkaOptionKey) || "connection.config.bootstrapServers", h = (s == null ? void 0 : s.topicOptionKey) || "name", F = (s == null ? void 0 : s.kafkaFormatKeys) || A[0], O = (s == null ? void 0 : s.topicFormatKeys) || A[1], I = 'config.properties["bootstrap.servers"]', g = 'config.properties["topic"]';
  X().then(async (e) => {
    m = e.data, K.value = e.data.map((a) => ({
      label: a.name,
      value: c(a, b),
      tag: D(L)
    }));
    let t = c(v, I);
    c(v, g) && (n && n.graphShadow.set(
      n.cell,
      "my_topic_output",
      []
    ), y(t, !0));
  });
  const d = async (e, t) => {
    if (!e)
      return;
    const o = await Z(e);
    k = o.data, V.value = o.data.map((a) => ({
      label: a.name,
      value: c(a, h),
      tag: D(L)
    })), t && B(c(v, g));
  }, y = (e, t = !1) => {
    const o = p(e);
    o && d(o.name, t);
  }, _ = (e) => {
    const t = F[b];
    return t ? f(e)[t] : "";
  }, l = (e) => {
    const t = O[h];
    return t ? f(e)[t] : "";
  }, p = (e) => {
    const t = j(K.value, (o) => o.value == e);
    if (t > -1)
      return m[t];
  }, q = (e, t) => {
    const o = p(t);
    if (o) {
      d(o.name);
      const a = F;
      Object.keys(a).forEach((r) => {
        const i = c(a, r), u = c(o, r);
        e[i] = u;
      }), J(e);
    }
  }, G = (e) => {
    const t = j(V.value, (o) => o.value == e);
    if (t > -1)
      return k[t];
  }, H = (e, t) => {
    const o = G(t);
    if (o) {
      const a = O;
      Object.keys(a).forEach((r) => {
        const i = c(a, r), u = c(o, r);
        e[i] = u;
      }), n && n.cell.data.component.config.properties["output字段（自动填入）"] && (n.cell.data.component.config.properties["output字段（自动填入）"] = []), B(t);
    }
  }, J = (e) => {
    const t = O;
    Object.keys(t).forEach((o) => {
      const a = c(t, o), r = null;
      e[a] = r;
    });
  }, B = (e) => {
    var a, r, i;
    let t = j(k, (u) => u.name == e), o = (r = (a = k[t]) == null ? void 0 : a.messageSchema) == null ? void 0 : r.schemaFields;
    if (o && o.length > 0) {
      let u = (i = o[0]) == null ? void 0 : i.children;
      if (u.length === 0)
        return;
      n && n.graphShadow.set(
        n.cell,
        "my_topic_output",
        Q(u)
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
    function o(a, r = "") {
      let i = {
        name: a.name,
        type: a.dataType,
        doc: a.description ?? "",
        originalValue: a.name
      };
      if (r !== "" && (i.name = `${r}.${i.name}`), t.push(i), a.children)
        for (const u of a.children)
          o(u, i.name);
    }
    for (const a of e)
      o(a);
    return t;
  }
  return {
    kafkaList: m,
    topicList: k,
    kafkaOptions: K,
    topicOptions: V,
    NIFI_FORMAT_KEYS: A,
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
}, ot = /* @__PURE__ */ E("b", null, "选择 kafka 连接", -1), at = {
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
      kafkaServerChange: b,
      topicChange: h,
      getKafkaValue: F,
      getTopicValue: O
      // initTopicList,
    } = C(v.config, n, k), I = F(c(n, m)), g = O(c(n, m)), d = x(I), y = x(g);
    return N(d, (_) => {
      const l = c(n, m);
      b(l, _);
    }), N(y, (_) => {
      const l = c(n, m);
      h(l, _);
    }), (_, l) => (T(), P("div", tt, [
      E("div", et, [
        ot,
        R(f(Y), {
          modelValue: d.value,
          "onUpdate:modelValue": l[0] || (l[0] = (p) => d.value = p)
        }, {
          default: S(() => [
            (T(!0), P(U, null, $(f(K), (p) => (T(), w(f(L), z(M(p)), null, 16))), 256))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      E("div", at, [
        nt,
        R(f(Y), {
          modelValue: y.value,
          "onUpdate:modelValue": l[1] || (l[1] = (p) => y.value = p)
        }, {
          default: S(() => [
            (T(!0), P(U, null, $(f(V), (p) => (T(), w(f(L), z(M(p)), null, 16))), 256))
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
