import "../css/main-BMVByKCq.css";
import { defineComponent as ae, toRefs as se, reactive as ne, unref as l, shallowRef as P, ref as I, watch as ue, openBlock as n, createElementBlock as z, normalizeClass as re, createElementVNode as r, createVNode as d, Fragment as C, renderList as J, toDisplayString as H, createBlock as f, withCtx as i, createCommentVNode as c, mergeProps as w, createTextVNode as k } from "vue";
import { aF as de, f as E, p as pe, aG as ie, o as fe, aH as ce, y as N, g as p, an as _, af as me, ad as ve, ar as ye, aq as L, aI as _e, j as Ve, P as be, a5 as T, as as we, aJ as x } from "./vendor.BI0B3R_R.js";
import { C as G } from "./main.DwkzpibS.js";
import { E as ke } from "./main.CvSGwvbi.js";
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
}, Be = /* @__PURE__ */ r("span", { "min-w-120": "" }, "属性名称", -1), Oe = {
  flex: "",
  "items-center": ""
}, Ae = /* @__PURE__ */ r("span", { "min-w-120": "" }, "值类型", -1), Se = {
  flex: "",
  "items-center": ""
}, Fe = /* @__PURE__ */ r("span", { "min-w-120": "" }, "描述", -1), Ie = {
  flex: "",
  "items-center": ""
}, Je = /* @__PURE__ */ r("span", { "min-w-120": "" }, "是否可删除", -1), Ke = {
  flex: "",
  "justify-end": ""
}, Re = {
  key: 0,
  class: "important-h-70vh"
}, $e = {
  name: "ElsListForm"
}, We = /* @__PURE__ */ ae({
  ...$e,
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
  setup(q, { emit: M }) {
    const j = q, D = M, { keys: K, keyName: R, modelValue: m, format: B, size: y, isNew: Pe, isAdd: Q } = j;
    se(j);
    const u = ne({ ...l(m) }), b = P([]), W = (a) => {
      let o = typeof a;
      return o == "string" ? /^#[0-9a-fA-f]+$/.test(a) && (o = "color") : o == "object" && (o = "json"), o;
    }, U = I(!1), V = I({ prop: "", type: "string" }), X = () => {
      Q && (V.value = { prop: "", type: "string", isDel: !0 }, U.value = !0);
    }, Y = () => {
      const a = V.value;
      a.prop && (b.value.push({ ...a }), U.value = !1, D("add", { ...a }));
    }, Z = (a) => {
      b.value = b.value.filter((o) => o != a);
    };
    let O = !1, A = "";
    const ee = (a, o) => {
      try {
        O = !0;
        const s = JSON.parse(a);
        _(l(u), o, s);
      } catch (s) {
        console.warn("JSON 格式不正确！", s);
      }
    }, le = (a) => O ? (O = !1, A) : (A = JSON.stringify(p(l(u), a) || {}, null, 2), A);
    (() => {
      const { propKey: a, valueKey: o } = R;
      if (K.length == 0)
        Array.isArray(m) ? b.value = m.map((s) => ({ prop: p(s, a), value: p(s, o), type: W(p(s, o)) })) : b.value = Object.keys(m).map((s) => ({ prop: s, value: p(m, s), type: p(m, s) }));
      else {
        let s = m || {};
        Array.isArray(m) && (s = Object.fromEntries(m.map((v) => [v[a], v[o]]))), b.value = K.map((v) => ({ ...v, value: p(s, v.prop) ?? v.value }));
      }
      for (const s of b.value)
        _(u, s.prop, s.value);
    })();
    const S = I(!1), h = P(), F = {}, oe = (a) => {
      const o = a.type, s = a.prop;
      ["json", "code"].includes(o) ? p(F, s).openDialog() : (h.value = a, S.value = !0);
    }, te = {
      formData: u,
      elsListFormProps: j
    };
    return ue(u, de((a) => {
      let o = a;
      if (B && typeof B == "function")
        o = B(a);
      else if (Array.isArray(m)) {
        const { propKey: s, valueKey: v } = R, e = m.map((g) => g[s]);
        o = b.value.map((g) => {
          const t = e.indexOf(g.prop), $ = { ...m[t] || {} };
          return $[v] = p(a, g.prop), $;
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
          d(l(E), {
            "min-w-80": "",
            icon: l(pe),
            type: "success",
            onClick: X
          }, null, 8, ["icon"])
        ]),
        r("div", Ee, [
          r("ul", xe, [
            (n(!0), z(C, null, J(b.value, (e, g) => (n(), z("li", {
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
                r("i", Ce, H(e.label || e.prop), 1),
                e.desc ? (n(), f(l(ie), {
                  key: 0,
                  content: e.desc,
                  placement: "top-start"
                }, {
                  default: i(() => [
                    d(l(fe), {
                      "ml-1em": "",
                      c: "#909399"
                    }, {
                      default: i(() => [
                        d(l(ce))
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
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}, { autosize: "" }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "select" ? (n(), f(l(me), w({
                    key: 1,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), {
                    default: i(() => [
                      (n(!0), z(C, null, J(e.cls || [], (t) => (n(), f(l(ve), {
                        label: t.label,
                        value: t.value
                      }, null, 8, ["label", "value"]))), 256))
                    ]),
                    _: 2
                  }, 1040, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "number" ? (n(), f(l(ye), w({
                    key: 2,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "boolean" ? (n(), f(l(L), w({
                    key: 3,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "color" ? (n(), f(l(_e), w({
                    key: 4,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "json" ? (n(), f(l(G), w({
                    key: 5,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (t) => l(_)(F, e.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": le(e.prop),
                    "onUpdate:modelValue": (t) => ee(t, e.prop),
                    size: l(y)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "code" ? (n(), f(l(G), w({
                    key: 6,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (t) => l(_)(F, e.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": l(p)(u, e.prop),
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
                e.btns ? (n(!0), z(C, { key: 2 }, J(e.btns, (t) => (n(), f(l(E), w(t.attr || {}, {
                  link: "",
                  title: t.title,
                  onClick: () => t.handle(e, g, u)
                }), {
                  default: i(() => [
                    k(H(t.label), 1)
                  ]),
                  _: 2
                }, 1040, ["title", "onClick"]))), 256)) : c("", !0)
              ])
            ]))), 128))
          ])
        ]),
        d(l(T), {
          modelValue: U.value,
          "onUpdate:modelValue": o[5] || (o[5] = (e) => U.value = e),
          title: "新增属性"
        }, {
          default: i(() => [
            r("div", null, [
              r("p", De, [
                Be,
                d(l(N), {
                  modelValue: V.value.prop,
                  "onUpdate:modelValue": o[0] || (o[0] = (e) => V.value.prop = e),
                  size: l(y),
                  placeholder: "属性名 必填"
                }, null, 8, ["modelValue", "size"])
              ]),
              r("p", Oe, [
                Ae,
                d(l(we), {
                  modelValue: V.value.type,
                  "onUpdate:modelValue": o[1] || (o[1] = (e) => V.value.type = e),
                  size: l(y)
                }, {
                  default: i(() => [
                    d(l(x), { label: "string" }, {
                      default: i(() => [
                        k("字符串")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "number" }, {
                      default: i(() => [
                        k("数字")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "boolean" }, {
                      default: i(() => [
                        k("布尔值")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "json" }, {
                      default: i(() => [
                        k("JSON 对象")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "color" }, {
                      default: i(() => [
                        k("颜色值")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "code" }, {
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
                Fe,
                d(l(N), {
                  modelValue: V.value.desc,
                  "onUpdate:modelValue": o[2] || (o[2] = (e) => V.value.desc = e),
                  type: "textarea",
                  autosize: "",
                  placeholder: "属性描述"
                }, null, 8, ["modelValue"])
              ]),
              r("p", Ie, [
                Je,
                d(l(L), {
                  modelValue: V.value.isDel,
                  "onUpdate:modelValue": o[3] || (o[3] = (e) => V.value.isDel = e)
                }, null, 8, ["modelValue"])
              ])
            ]),
            r("div", Ke, [
              d(l(E), {
                onClick: o[4] || (o[4] = (e) => U.value = !1)
              }, {
                default: i(() => [
                  k("取消")
                ]),
                _: 1
              }),
              d(l(E), {
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
        d(l(T), {
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
                "model-value": l(p)(u, h.value.prop),
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
