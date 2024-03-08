import "../css/main-BbXZ0kQb.css";
import { defineComponent as ae, toRefs as se, ref as N, unref as e, shallowRef as H, watch as ue, openBlock as u, createElementBlock as k, normalizeClass as ne, createElementVNode as r, createVNode as d, Fragment as j, renderList as J, toDisplayString as L, createBlock as f, withCtx as i, createCommentVNode as v, mergeProps as w, createTextVNode as h } from "vue";
import { g as p, d as z, p as re, am as de, k as pe, a3 as ie, o as B, K as _, a7 as fe, a6 as ce, ad as ve, aa as P, an as me, f as ye, F as _e, Z as G, ae as be, ao as E } from "./vendor.3wbU5Pec.js";
import { C as Z } from "./main.BSar4gEM.js";
import { E as Ve } from "./main.BeuaEiRW.js";
const ke = {
  flex: "",
  "items-center": "",
  "justify-between": "",
  class: "_header"
}, we = /* @__PURE__ */ r("b", { "min-w-150": "" }, "属性名", -1), he = /* @__PURE__ */ r("b", {
  "flex-1": "",
  "m-x-2em": ""
}, "属性值", -1), ge = {
  class: "_body",
  "w-full": ""
}, xe = { "w-full": "" }, ze = ["title"], Ee = {
  "not-italic": "",
  truncate: "",
  "max-w-120": ""
}, Ue = {
  key: 0,
  class: "_value",
  "m-x-2em": "",
  "flex-1": "",
  "fw-400": ""
}, Ce = {
  key: 1,
  class: "_value",
  "m-x-2em": "",
  "flex-1": "",
  "fw-400": ""
}, Ne = {
  "float-right": "",
  "min-w-80": "",
  "text-center": ""
}, je = {
  flex: "",
  "items-center": ""
}, Be = /* @__PURE__ */ r("span", { "min-w-120": "" }, "属性名称", -1), De = {
  flex: "",
  "items-center": ""
}, Oe = /* @__PURE__ */ r("span", { "min-w-120": "" }, "值类型", -1), Ae = {
  flex: "",
  "items-center": ""
}, Se = /* @__PURE__ */ r("span", { "min-w-120": "" }, "描述", -1), Ke = {
  flex: "",
  "items-center": ""
}, Ie = /* @__PURE__ */ r("span", { "min-w-120": "" }, "是否可删除", -1), Je = {
  flex: "",
  "justify-end": ""
}, Fe = {
  key: 0,
  class: "important-h-70vh"
}, Re = {
  name: "ElsListForm"
}, Me = /* @__PURE__ */ ae({
  ...Re,
  props: {
    label: {},
    modelValue: { default: () => ({}) },
    keyName: { default: () => ({ propKey: "prop", valueKey: "value" }) },
    excludeKeys: {},
    keys: { default: () => [] },
    isAdd: { type: Boolean, default: !0 },
    isDel: { type: Boolean },
    isNew: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    format: {},
    size: { default: "default" },
    prop: {}
  },
  emits: ["update:modelValue", "change", "add"],
  setup(q, { emit: M }) {
    const F = q, D = M, { keys: O, keyName: R, modelValue: c, format: C, size: m, isNew: $e, isAdd: Q } = F, { disabled: $ } = se(F), n = N(e(c) || {}), V = H([]), W = (a) => {
      let o = typeof a;
      return o == "string" ? /^#[0-9a-fA-f]+$/.test(a) && (o = "color") : o == "object" && (o = "json"), o;
    }, U = N(!1), b = N({ prop: "", type: "string" }), X = () => {
      Q && (b.value = { prop: "", type: "string", isDel: !0 }, U.value = !0);
    }, Y = () => {
      const a = b.value;
      a.prop && (V.value.push({ ...a }), U.value = !1, D("add", { ...a }));
    }, ee = (a) => {
      V.value = V.value.filter((o) => o != a);
    };
    let A = !1, S = "";
    const le = (a, o) => {
      try {
        A = !0;
        const s = JSON.parse(a);
        _(e(n), o, s);
      } catch (s) {
        console.warn("JSON 格式不正确！", s);
      }
    }, oe = (a) => A ? (A = !1, S) : (S = JSON.stringify(p(e(n), a) || {}, null, 2), S);
    (() => {
      const { propKey: a, valueKey: o } = R;
      if (O.length == 0)
        Array.isArray(c) ? V.value = c.map((s) => ({ prop: p(s, a), value: p(s, o), type: W(p(s, o)) })) : V.value = Object.keys(c).map((s) => ({ prop: s, value: p(c, s), type: p(c, s) }));
      else {
        let s = c || {};
        Array.isArray(c) && (s = Object.fromEntries(c.map((y) => [y[a], y[o]]))), V.value = O.map((y) => ({ ...y, value: p(s, y.prop) ?? y.value }));
      }
      for (const s of V.value)
        _(n.value, s.prop, s.value);
    })();
    const K = N(!1), g = H(), I = {}, te = (a) => {
      const o = a.type, s = a.prop;
      ["json", "code"].includes(o) ? p(I, s).openDialog() : (g.value = a, K.value = !0);
    };
    return ue(n, (a) => {
      let o = a;
      if (C && typeof C == "function")
        o = C(a);
      else if (Array.isArray(c)) {
        const { propKey: s, valueKey: y } = R, l = c.map((x) => x[s]);
        o = V.value.map((x) => {
          const t = l.indexOf(x.prop), T = { ...c[t] || {} };
          return T[y] = p(a, x.prop), T;
        });
      }
      D("change", o), C || D("update:modelValue", o);
    }, { deep: !0 }), (a, o) => {
      var s, y;
      return u(), k("div", {
        class: ne(["els-list-form", `size-${e(m)}`]),
        "w-full": ""
      }, [
        r("div", ke, [
          we,
          he,
          d(e(z), {
            "min-w-80": "",
            icon: e(re),
            type: "success",
            onClick: X
          }, null, 8, ["icon"])
        ]),
        r("div", ge, [
          r("ul", xe, [
            (u(!0), k(j, null, J(V.value, (l, x) => (u(), k("li", {
              "list-none": "",
              flex: "",
              "w-full": "",
              "items-center": "",
              "justify-between": "",
              "overflow-hidden": "",
              class: "_item",
              key: l.prop + "-" + x
            }, [
              r("b", {
                class: "_label",
                "h-24": "",
                "fw-400": "",
                "inline-flex": "",
                "items-center": "",
                "min-w-150": "",
                title: l.label || l.prop
              }, [
                r("i", Ee, L(l.label || l.prop), 1),
                l.desc ? (u(), f(e(de), {
                  key: 0,
                  content: l.desc,
                  placement: "top-start"
                }, {
                  default: i(() => [
                    d(e(pe), {
                      "ml-1em": "",
                      c: "#909399"
                    }, {
                      default: i(() => [
                        d(e(ie))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["content"])) : v("", !0)
              ], 8, ze),
              e($) ? (u(), k("b", Ce)) : (u(), k("b", Ue, [
                l.tag != null ? (u(), f(e(Ve), {
                  key: 0,
                  elem: l,
                  params: { modelValue: e(c), item: l, keys: e(O), disabled: e($), formData: n.value, prop: l.prop, size: e(m) }
                }, null, 8, ["elem", "params"])) : (u(), k(j, { key: 1 }, [
                  l.type == "string" ? (u(), f(e(B), w({
                    key: 0,
                    "w-full": "",
                    truncate: "",
                    "model-value": e(p)(n.value, l.prop),
                    "onUpdate:modelValue": (t) => e(_)(n.value, l.prop, t),
                    size: e(m)
                  }, l.attr || {}, { autosize: "" }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : v("", !0),
                  l.type == "select" ? (u(), f(e(fe), w({
                    key: 1,
                    "w-full": "",
                    "model-value": e(p)(n.value, l.prop),
                    "onUpdate:modelValue": (t) => e(_)(n.value, l.prop, t),
                    size: e(m)
                  }, l.attr || {}), {
                    default: i(() => [
                      (u(!0), k(j, null, J(l.cls || [], (t) => (u(), f(e(ce), {
                        label: t.label,
                        value: t.value
                      }, null, 8, ["label", "value"]))), 256))
                    ]),
                    _: 2
                  }, 1040, ["model-value", "onUpdate:modelValue", "size"])) : v("", !0),
                  l.type == "number" ? (u(), f(e(ve), w({
                    key: 2,
                    "w-full": "",
                    "model-value": e(p)(n.value, l.prop),
                    "onUpdate:modelValue": (t) => e(_)(n.value, l.prop, t),
                    size: e(m)
                  }, l.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : v("", !0),
                  l.type == "boolean" ? (u(), f(e(P), w({
                    key: 3,
                    "w-full": "",
                    "model-value": e(p)(n.value, l.prop),
                    "onUpdate:modelValue": (t) => e(_)(n.value, l.prop, t),
                    size: e(m)
                  }, l.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : v("", !0),
                  l.type == "color" ? (u(), f(e(me), w({
                    key: 4,
                    "w-full": "",
                    "model-value": e(p)(n.value, l.prop),
                    "onUpdate:modelValue": (t) => e(_)(n.value, l.prop, t),
                    size: e(m)
                  }, l.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : v("", !0),
                  l.type == "json" ? (u(), f(e(Z), w({
                    key: 5,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, l.attr || {}, {
                    ref_for: !0,
                    ref: (t) => e(_)(I, l.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": oe(l.prop),
                    "onUpdate:modelValue": (t) => le(t, l.prop),
                    size: e(m)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : v("", !0),
                  l.type == "code" ? (u(), f(e(Z), w({
                    key: 6,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, l.attr || {}, {
                    ref_for: !0,
                    ref: (t) => e(_)(I, l.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": e(p)(n.value, l.prop),
                    "onUpdate:modelValue": (t) => e(_)(n.value, l.prop, t),
                    size: e(m)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : v("", !0)
                ], 64))
              ])),
              r("b", Ne, [
                l.isDel ? (u(), f(e(z), {
                  key: 0,
                  type: "danger",
                  link: "",
                  icon: e(ye),
                  onClick: (t) => ee(l),
                  title: "删除"
                }, null, 8, ["icon", "onClick"])) : v("", !0),
                ["string", "code", "json"].includes(l.type) && l.tag == null ? (u(), f(e(z), {
                  key: 1,
                  link: "",
                  type: "success",
                  icon: e(_e),
                  onClick: (t) => te(l),
                  title: "全屏"
                }, null, 8, ["icon", "onClick"])) : v("", !0),
                l.btns ? (u(!0), k(j, { key: 2 }, J(l.btns, (t) => (u(), f(e(z), w(t.attr || {}, {
                  link: "",
                  title: t.title,
                  onClick: () => t.handle(l, x, n.value)
                }), {
                  default: i(() => [
                    h(L(t.label), 1)
                  ]),
                  _: 2
                }, 1040, ["title", "onClick"]))), 256)) : v("", !0)
              ])
            ]))), 128))
          ])
        ]),
        d(e(G), {
          modelValue: U.value,
          "onUpdate:modelValue": o[5] || (o[5] = (l) => U.value = l),
          title: "新增属性"
        }, {
          default: i(() => [
            r("div", null, [
              r("p", je, [
                Be,
                d(e(B), {
                  modelValue: b.value.prop,
                  "onUpdate:modelValue": o[0] || (o[0] = (l) => b.value.prop = l),
                  size: e(m),
                  placeholder: "属性名 必填"
                }, null, 8, ["modelValue", "size"])
              ]),
              r("p", De, [
                Oe,
                d(e(be), {
                  modelValue: b.value.type,
                  "onUpdate:modelValue": o[1] || (o[1] = (l) => b.value.type = l),
                  size: e(m)
                }, {
                  default: i(() => [
                    d(e(E), { label: "string" }, {
                      default: i(() => [
                        h("字符串")
                      ]),
                      _: 1
                    }),
                    d(e(E), { label: "number" }, {
                      default: i(() => [
                        h("数字")
                      ]),
                      _: 1
                    }),
                    d(e(E), { label: "boolean" }, {
                      default: i(() => [
                        h("布尔值")
                      ]),
                      _: 1
                    }),
                    d(e(E), { label: "json" }, {
                      default: i(() => [
                        h("JSON 对象")
                      ]),
                      _: 1
                    }),
                    d(e(E), { label: "color" }, {
                      default: i(() => [
                        h("颜色值")
                      ]),
                      _: 1
                    }),
                    d(e(E), { label: "code" }, {
                      default: i(() => [
                        h("代码")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "size"])
              ]),
              r("p", Ae, [
                Se,
                d(e(B), {
                  modelValue: b.value.desc,
                  "onUpdate:modelValue": o[2] || (o[2] = (l) => b.value.desc = l),
                  type: "textarea",
                  autosize: "",
                  placeholder: "属性描述"
                }, null, 8, ["modelValue"])
              ]),
              r("p", Ke, [
                Ie,
                d(e(P), {
                  modelValue: b.value.isDel,
                  "onUpdate:modelValue": o[3] || (o[3] = (l) => b.value.isDel = l)
                }, null, 8, ["modelValue"])
              ])
            ]),
            r("div", Je, [
              d(e(z), {
                onClick: o[4] || (o[4] = (l) => U.value = !1)
              }, {
                default: i(() => [
                  h("取消")
                ]),
                _: 1
              }),
              d(e(z), {
                type: "primary",
                onClick: Y
              }, {
                default: i(() => [
                  h("确定")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        d(e(G), {
          modelValue: K.value,
          "onUpdate:modelValue": o[7] || (o[7] = (l) => K.value = l),
          title: ((s = g.value) == null ? void 0 : s.label) || ((y = g.value) == null ? void 0 : y.prop),
          "destroy-on-close": "",
          width: "80%"
        }, {
          default: i(() => [
            g.value ? (u(), k("div", Fe, [
              g.value.type == "string" ? (u(), f(e(B), w({
                key: 0,
                "important-h-full": "",
                bg: "#f8f9fc",
                class: "h-full",
                "model-value": e(p)(n.value, g.value.prop),
                "onUpdate:modelValue": o[6] || (o[6] = (l) => e(_)(n.value, g.value.prop, l)),
                type: "textarea",
                size: e(m)
              }, g.value.attr || {}, { resize: "none" }), null, 16, ["model-value", "size"])) : v("", !0)
            ])) : v("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 2);
    };
  }
});
export {
  Me as _
};
