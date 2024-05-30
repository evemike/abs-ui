import "../css/main-BMVByKCq.css";
import { defineComponent as ae, toRefs as se, reactive as ne, unref as l, shallowRef as $, ref as F, watch as ue, openBlock as n, createElementBlock as z, normalizeClass as re, createElementVNode as r, createVNode as p, Fragment as C, renderList as I, toDisplayString as L, createBlock as f, withCtx as i, createCommentVNode as c, mergeProps as w, createTextVNode as k } from "vue";
import { aP as pe, f as E, p as de, aA as ie, o as fe, aQ as ce, y as N, g as d, au as _, as as me, aL as ve, ap as ye, at as T, aR as _e, j as Ve, P as be, a5 as H, aq as we, aS as x } from "./vendor.jH9g53BU.js";
import { C as q } from "./main.CUCPbsxK.js";
import { E as ke } from "./main.DROQpkh8.js";
const he = {
  flex: "",
  "items-center": "",
  "justify-between": "",
  "gap-4": "",
  class: "_header"
}, ge = /* @__PURE__ */ r("b", { "min-w-200": "" }, "属性名", -1), ze = /* @__PURE__ */ r("b", {
  "flex-1": "",
  "min-w-100": ""
}, "属性值", -1), Ee = {
  class: "_body",
  "w-full": ""
}, xe = {
  "w-full": "",
  "padding-0": ""
}, Ue = ["title"], Ce = {
  "not-italic": "",
  truncate: "",
  "max-w-170": ""
}, Ne = {
  class: "_value",
  "flex-1": "",
  "fw-400": "",
  "min-w-100": ""
}, je = {
  "float-right": "",
  "min-w-80": "",
  "text-center": ""
}, De = {
  flex: "",
  "items-center": ""
}, Ae = /* @__PURE__ */ r("span", { "min-w-120": "" }, "属性名称", -1), Be = {
  flex: "",
  "items-center": ""
}, Oe = /* @__PURE__ */ r("span", { "min-w-120": "" }, "值类型", -1), Se = {
  flex: "",
  "items-center": ""
}, Ke = /* @__PURE__ */ r("span", { "min-w-120": "" }, "描述", -1), Fe = {
  flex: "",
  "items-center": ""
}, Ie = /* @__PURE__ */ r("span", { "min-w-120": "" }, "是否可删除", -1), Je = {
  flex: "",
  "justify-end": ""
}, Re = {
  key: 0,
  class: "important-h-70vh"
}, Pe = {
  name: "ElsListForm"
}, We = /* @__PURE__ */ ae({
  ...Pe,
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
    prop: {},
    column: {}
  },
  emits: ["update:modelValue", "change", "add"],
  setup(G, { emit: Q }) {
    const j = G, D = Q, { keys: J, keyName: R, modelValue: m, format: A, size: y, isNew: $e, isAdd: M } = j;
    se(j);
    const u = ne({ ...l(m) }), b = $([]), W = (a) => {
      let o = typeof a;
      return o == "string" ? /^#[0-9a-fA-f]+$/.test(a) && (o = "color") : o == "object" && (o = "json"), o;
    }, U = F(!1), V = F({ prop: "", type: "string" }), X = () => {
      M && (V.value = { prop: "", type: "string", isDel: !0 }, U.value = !0);
    }, Y = () => {
      const a = V.value;
      a.prop && (b.value.push({ ...a }), U.value = !1, D("add", { ...a }));
    }, Z = (a) => {
      b.value = b.value.filter((o) => o != a);
    };
    let B = !1, O = "";
    const ee = (a, o) => {
      try {
        B = !0;
        const s = JSON.parse(a);
        _(l(u), o, s);
      } catch (s) {
        console.warn("JSON 格式不正确！", s);
      }
    }, le = (a) => B ? (B = !1, O) : (O = JSON.stringify(d(l(u), a) || {}, null, 2), O);
    (() => {
      const { propKey: a, valueKey: o } = R;
      if (J.length == 0)
        Array.isArray(m) ? b.value = m.map((s) => ({ prop: d(s, a), value: d(s, o), type: W(d(s, o)) })) : b.value = Object.keys(m).map((s) => ({ prop: s, value: d(m, s), type: d(m, s) }));
      else {
        let s = m || {};
        Array.isArray(m) && (s = Object.fromEntries(m.map((v) => [v[a], v[o]]))), b.value = J.map((v) => ({ ...v, value: d(s, v.prop) ?? v.value }));
      }
      for (const s of b.value)
        _(u, s.prop, s.value);
    })();
    const S = F(!1), h = $(), K = {}, oe = (a) => {
      const o = a.type, s = a.prop;
      ["json", "code"].includes(o) ? d(K, s).openDialog() : (h.value = a, S.value = !0);
    }, te = {
      formData: u,
      elsListFormProps: j
    };
    return ue(u, pe((a) => {
      let o = a;
      if (A && typeof A == "function")
        o = A(a);
      else if (Array.isArray(m)) {
        const { propKey: s, valueKey: v } = R, e = m.map((g) => g[s]);
        o = b.value.map((g) => {
          const t = e.indexOf(g.prop), P = { ...m[t] || {} };
          return P[v] = d(a, g.prop), P;
        });
      }
      D("change", o), D("update:modelValue", o);
    }, 100), { deep: !0 }), (a, o) => {
      var s, v;
      return n(), z("div", {
        class: re(["els-list-form", `size-${l(y)}`]),
        "w-full": ""
      }, [
        r("div", he, [
          ge,
          ze,
          p(l(E), {
            "min-w-80": "",
            icon: l(de),
            type: "success",
            onClick: X
          }, null, 8, ["icon"])
        ]),
        r("div", Ee, [
          r("ul", xe, [
            (n(!0), z(C, null, I(b.value, (e, g) => (n(), z("li", {
              "list-none": "",
              flex: "",
              "w-full": "",
              "items-center": "",
              "overflow-hidden": "",
              "gap-4": "",
              class: "_item",
              key: e.prop + "-" + g
            }, [
              r("b", {
                class: "_label",
                "h-24": "",
                "fw-400": "",
                "inline-flex": "",
                "items-center": "",
                "min-w-200": "",
                title: e.label || e.prop
              }, [
                r("i", Ce, L(e.label || e.prop), 1),
                e.desc ? (n(), f(l(ie), {
                  key: 0,
                  content: e.desc,
                  placement: "top-start"
                }, {
                  default: i(() => [
                    p(l(fe), {
                      "ml-1em": "",
                      c: "#909399"
                    }, {
                      default: i(() => [
                        p(l(ce))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["content"])) : c("", !0)
              ], 8, Ue),
              r("b", Ne, [
                e.tag != null ? (n(), f(l(ke), {
                  key: 0,
                  elem: e,
                  params: te
                }, null, 8, ["elem"])) : (n(), z(C, { key: 1 }, [
                  e.type == "string" ? (n(), f(l(N), w({
                    key: 0,
                    "w-full": "",
                    truncate: "",
                    "model-value": l(d)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}, { autosize: "" }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "select" ? (n(), f(l(me), w({
                    key: 1,
                    "w-full": "",
                    "model-value": l(d)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), {
                    default: i(() => [
                      (n(!0), z(C, null, I(e.cls || [], (t) => (n(), f(l(ve), {
                        label: t.label,
                        value: t.value
                      }, null, 8, ["label", "value"]))), 256))
                    ]),
                    _: 2
                  }, 1040, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "number" ? (n(), f(l(ye), w({
                    key: 2,
                    "w-full": "",
                    "model-value": l(d)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "boolean" ? (n(), f(l(T), w({
                    key: 3,
                    "w-full": "",
                    "model-value": l(d)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "color" ? (n(), f(l(_e), w({
                    key: 4,
                    "w-full": "",
                    "model-value": l(d)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "json" ? (n(), f(l(q), w({
                    key: 5,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (t) => l(_)(K, e.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": le(e.prop),
                    "onUpdate:modelValue": (t) => ee(t, e.prop),
                    size: l(y)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "code" ? (n(), f(l(q), w({
                    key: 6,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (t) => l(_)(K, e.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": l(d)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0)
                ], 64))
              ]),
              r("b", je, [
                e.isDel ? (n(), f(l(E), {
                  key: 0,
                  type: "danger",
                  link: "",
                  icon: l(Ve),
                  onClick: (t) => Z(e),
                  title: "删除"
                }, null, 8, ["icon", "onClick"])) : c("", !0),
                ["string", "code", "json"].includes(e.type) && e.tag == null ? (n(), f(l(E), {
                  key: 1,
                  link: "",
                  type: "success",
                  icon: l(be),
                  onClick: (t) => oe(e),
                  title: "全屏"
                }, null, 8, ["icon", "onClick"])) : c("", !0),
                e.btns ? (n(!0), z(C, { key: 2 }, I(e.btns, (t) => (n(), f(l(E), w(t.attr || {}, {
                  link: "",
                  title: t.title,
                  onClick: () => t.handle(e, g, u)
                }), {
                  default: i(() => [
                    k(L(t.label), 1)
                  ]),
                  _: 2
                }, 1040, ["title", "onClick"]))), 256)) : c("", !0)
              ])
            ]))), 128))
          ])
        ]),
        p(l(H), {
          modelValue: U.value,
          "onUpdate:modelValue": o[5] || (o[5] = (e) => U.value = e),
          title: "新增属性"
        }, {
          default: i(() => [
            r("div", null, [
              r("p", De, [
                Ae,
                p(l(N), {
                  modelValue: V.value.prop,
                  "onUpdate:modelValue": o[0] || (o[0] = (e) => V.value.prop = e),
                  size: l(y),
                  placeholder: "属性名 必填"
                }, null, 8, ["modelValue", "size"])
              ]),
              r("p", Be, [
                Oe,
                p(l(we), {
                  modelValue: V.value.type,
                  "onUpdate:modelValue": o[1] || (o[1] = (e) => V.value.type = e),
                  size: l(y)
                }, {
                  default: i(() => [
                    p(l(x), { label: "string" }, {
                      default: i(() => [
                        k("字符串")
                      ]),
                      _: 1
                    }),
                    p(l(x), { label: "number" }, {
                      default: i(() => [
                        k("数字")
                      ]),
                      _: 1
                    }),
                    p(l(x), { label: "boolean" }, {
                      default: i(() => [
                        k("布尔值")
                      ]),
                      _: 1
                    }),
                    p(l(x), { label: "json" }, {
                      default: i(() => [
                        k("JSON 对象")
                      ]),
                      _: 1
                    }),
                    p(l(x), { label: "color" }, {
                      default: i(() => [
                        k("颜色值")
                      ]),
                      _: 1
                    }),
                    p(l(x), { label: "code" }, {
                      default: i(() => [
                        k("代码")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "size"])
              ]),
              r("p", Se, [
                Ke,
                p(l(N), {
                  modelValue: V.value.desc,
                  "onUpdate:modelValue": o[2] || (o[2] = (e) => V.value.desc = e),
                  type: "textarea",
                  autosize: "",
                  placeholder: "属性描述"
                }, null, 8, ["modelValue"])
              ]),
              r("p", Fe, [
                Ie,
                p(l(T), {
                  modelValue: V.value.isDel,
                  "onUpdate:modelValue": o[3] || (o[3] = (e) => V.value.isDel = e)
                }, null, 8, ["modelValue"])
              ])
            ]),
            r("div", Je, [
              p(l(E), {
                onClick: o[4] || (o[4] = (e) => U.value = !1)
              }, {
                default: i(() => [
                  k("取消")
                ]),
                _: 1
              }),
              p(l(E), {
                type: "primary",
                onClick: Y
              }, {
                default: i(() => [
                  k("确定")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        p(l(H), {
          modelValue: S.value,
          "onUpdate:modelValue": o[7] || (o[7] = (e) => S.value = e),
          title: ((s = h.value) == null ? void 0 : s.label) || ((v = h.value) == null ? void 0 : v.prop),
          "destroy-on-close": "",
          width: "80%"
        }, {
          default: i(() => [
            h.value ? (n(), z("div", Re, [
              h.value.type == "string" ? (n(), f(l(N), w({
                key: 0,
                "important-h-full": "",
                bg: "#f8f9fc",
                class: "h-full",
                "model-value": l(d)(u, h.value.prop),
                "onUpdate:modelValue": o[6] || (o[6] = (e) => l(_)(u, h.value.prop, e)),
                type: "textarea",
                size: l(y)
              }, h.value.attr || {}, { resize: "none" }), null, 16, ["model-value", "size"])) : c("", !0)
            ])) : c("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 2);
    };
  }
});
export {
  We as _
};
