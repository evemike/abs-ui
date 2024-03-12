import "../css/main-BMVByKCq.css";
import { defineComponent as se, toRefs as ne, reactive as ue, unref as l, shallowRef as P, ref as F, watch as re, openBlock as n, createElementBlock as w, normalizeClass as de, createElementVNode as r, createVNode as d, Fragment as C, renderList as I, toDisplayString as L, createBlock as f, withCtx as i, createCommentVNode as c, mergeProps as k, createTextVNode as h } from "vue";
import { Q as pe, d as E, p as ie, aq as fe, k as ce, a7 as me, o as N, g as p, P as _, ab as ve, aa as ye, ah as _e, ae as T, ar as be, f as Ve, K as we, a1 as H, ai as ke, as as x } from "./vendor.CNZ6m-gA.js";
import { C as q } from "./main.JrGJHiSO.js";
import { E as he } from "./main.CzNHmSIX.js";
const ge = {
  flex: "",
  "items-center": "",
  "justify-between": "",
  "gap-4": "",
  class: "_header"
}, ze = /* @__PURE__ */ r("b", { "min-w-200": "" }, "属性名", -1), Ee = /* @__PURE__ */ r("b", {
  "flex-1": "",
  "min-w-100": ""
}, "属性值", -1), xe = {
  class: "_body",
  "w-full": ""
}, Ue = {
  "w-full": "",
  "padding-0": ""
}, Ce = ["title"], Ne = {
  "not-italic": "",
  truncate: "",
  "max-w-170": ""
}, je = {
  key: 0,
  class: "_value",
  "flex-1": "",
  "fw-400": "",
  "min-w-100": ""
}, De = {
  key: 1,
  class: "_value",
  "flex-1": "",
  "fw-400": "",
  "min-w-100": ""
}, Be = {
  "float-right": "",
  "min-w-80": "",
  "text-center": ""
}, Oe = {
  flex: "",
  "items-center": ""
}, Ae = /* @__PURE__ */ r("span", { "min-w-120": "" }, "属性名称", -1), Se = {
  flex: "",
  "items-center": ""
}, Ke = /* @__PURE__ */ r("span", { "min-w-120": "" }, "值类型", -1), Fe = {
  flex: "",
  "items-center": ""
}, Ie = /* @__PURE__ */ r("span", { "min-w-120": "" }, "描述", -1), Je = {
  flex: "",
  "items-center": ""
}, Re = /* @__PURE__ */ r("span", { "min-w-120": "" }, "是否可删除", -1), $e = {
  flex: "",
  "justify-end": ""
}, Pe = {
  key: 0,
  class: "important-h-70vh"
}, Le = {
  name: "ElsListForm"
}, Ye = /* @__PURE__ */ se({
  ...Le,
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
  setup(G, { emit: Q }) {
    const j = G, D = Q, { keys: J, keyName: R, modelValue: m, format: B, size: y, isNew: Te, isAdd: M } = j, { disabled: W } = ne(j), u = ue({ ...l(m) }), V = P([]), X = (a) => {
      let o = typeof a;
      return o == "string" ? /^#[0-9a-fA-f]+$/.test(a) && (o = "color") : o == "object" && (o = "json"), o;
    }, U = F(!1), b = F({ prop: "", type: "string" }), Y = () => {
      M && (b.value = { prop: "", type: "string", isDel: !0 }, U.value = !0);
    }, Z = () => {
      const a = b.value;
      a.prop && (V.value.push({ ...a }), U.value = !1, D("add", { ...a }));
    }, ee = (a) => {
      V.value = V.value.filter((o) => o != a);
    };
    let O = !1, A = "";
    const le = (a, o) => {
      try {
        O = !0;
        const s = JSON.parse(a);
        _(l(u), o, s);
      } catch (s) {
        console.warn("JSON 格式不正确！", s);
      }
    }, oe = (a) => O ? (O = !1, A) : (A = JSON.stringify(p(l(u), a) || {}, null, 2), A);
    (() => {
      const { propKey: a, valueKey: o } = R;
      if (J.length == 0)
        Array.isArray(m) ? V.value = m.map((s) => ({ prop: p(s, a), value: p(s, o), type: X(p(s, o)) })) : V.value = Object.keys(m).map((s) => ({ prop: s, value: p(m, s), type: p(m, s) }));
      else {
        let s = m || {};
        Array.isArray(m) && (s = Object.fromEntries(m.map((v) => [v[a], v[o]]))), V.value = J.map((v) => ({ ...v, value: p(s, v.prop) ?? v.value }));
      }
      for (const s of V.value)
        _(u, s.prop, s.value);
    })();
    const S = F(!1), g = P(), K = {}, te = (a) => {
      const o = a.type, s = a.prop;
      ["json", "code"].includes(o) ? p(K, s).openDialog() : (g.value = a, S.value = !0);
    }, ae = {
      formData: u,
      elsListFormProps: j
    };
    return re(u, pe((a) => {
      let o = a;
      if (B && typeof B == "function")
        o = B(a);
      else if (Array.isArray(m)) {
        const { propKey: s, valueKey: v } = R, e = m.map((z) => z[s]);
        o = V.value.map((z) => {
          const t = e.indexOf(z.prop), $ = { ...m[t] || {} };
          return $[v] = p(a, z.prop), $;
        });
      }
      D("change", o), D("update:modelValue", o);
    }, 100), { deep: !0 }), (a, o) => {
      var s, v;
      return n(), w("div", {
        class: de(["els-list-form", `size-${l(y)}`]),
        "w-full": ""
      }, [
        r("div", ge, [
          ze,
          Ee,
          d(l(E), {
            "min-w-80": "",
            icon: l(ie),
            type: "success",
            onClick: Y
          }, null, 8, ["icon"])
        ]),
        r("div", xe, [
          r("ul", Ue, [
            (n(!0), w(C, null, I(V.value, (e, z) => (n(), w("li", {
              "list-none": "",
              flex: "",
              "w-full": "",
              "items-center": "",
              "overflow-hidden": "",
              "gap-4": "",
              class: "_item",
              key: e.prop + "-" + z
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
                r("i", Ne, L(e.label || e.prop), 1),
                e.desc ? (n(), f(l(fe), {
                  key: 0,
                  content: e.desc,
                  placement: "top-start"
                }, {
                  default: i(() => [
                    d(l(ce), {
                      "ml-1em": "",
                      c: "#909399"
                    }, {
                      default: i(() => [
                        d(l(me))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["content"])) : c("", !0)
              ], 8, Ce),
              l(W) ? (n(), w("b", De)) : (n(), w("b", je, [
                e.tag != null ? (n(), f(l(he), {
                  key: 0,
                  elem: e,
                  params: ae
                }, null, 8, ["elem"])) : (n(), w(C, { key: 1 }, [
                  e.type == "string" ? (n(), f(l(N), k({
                    key: 0,
                    "w-full": "",
                    truncate: "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}, { autosize: "" }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "select" ? (n(), f(l(ve), k({
                    key: 1,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), {
                    default: i(() => [
                      (n(!0), w(C, null, I(e.cls || [], (t) => (n(), f(l(ye), {
                        label: t.label,
                        value: t.value
                      }, null, 8, ["label", "value"]))), 256))
                    ]),
                    _: 2
                  }, 1040, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "number" ? (n(), f(l(_e), k({
                    key: 2,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "boolean" ? (n(), f(l(T), k({
                    key: 3,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "color" ? (n(), f(l(be), k({
                    key: 4,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "json" ? (n(), f(l(q), k({
                    key: 5,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (t) => l(_)(K, e.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": oe(e.prop),
                    "onUpdate:modelValue": (t) => le(t, e.prop),
                    size: l(y)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0),
                  e.type == "code" ? (n(), f(l(q), k({
                    key: 6,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (t) => l(_)(K, e.prop, t),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (t) => l(_)(u, e.prop, t),
                    size: l(y)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : c("", !0)
                ], 64))
              ])),
              r("b", Be, [
                e.isDel ? (n(), f(l(E), {
                  key: 0,
                  type: "danger",
                  link: "",
                  icon: l(Ve),
                  onClick: (t) => ee(e),
                  title: "删除"
                }, null, 8, ["icon", "onClick"])) : c("", !0),
                ["string", "code", "json"].includes(e.type) && e.tag == null ? (n(), f(l(E), {
                  key: 1,
                  link: "",
                  type: "success",
                  icon: l(we),
                  onClick: (t) => te(e),
                  title: "全屏"
                }, null, 8, ["icon", "onClick"])) : c("", !0),
                e.btns ? (n(!0), w(C, { key: 2 }, I(e.btns, (t) => (n(), f(l(E), k(t.attr || {}, {
                  link: "",
                  title: t.title,
                  onClick: () => t.handle(e, z, u)
                }), {
                  default: i(() => [
                    h(L(t.label), 1)
                  ]),
                  _: 2
                }, 1040, ["title", "onClick"]))), 256)) : c("", !0)
              ])
            ]))), 128))
          ])
        ]),
        d(l(H), {
          modelValue: U.value,
          "onUpdate:modelValue": o[5] || (o[5] = (e) => U.value = e),
          title: "新增属性"
        }, {
          default: i(() => [
            r("div", null, [
              r("p", Oe, [
                Ae,
                d(l(N), {
                  modelValue: b.value.prop,
                  "onUpdate:modelValue": o[0] || (o[0] = (e) => b.value.prop = e),
                  size: l(y),
                  placeholder: "属性名 必填"
                }, null, 8, ["modelValue", "size"])
              ]),
              r("p", Se, [
                Ke,
                d(l(ke), {
                  modelValue: b.value.type,
                  "onUpdate:modelValue": o[1] || (o[1] = (e) => b.value.type = e),
                  size: l(y)
                }, {
                  default: i(() => [
                    d(l(x), { label: "string" }, {
                      default: i(() => [
                        h("字符串")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "number" }, {
                      default: i(() => [
                        h("数字")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "boolean" }, {
                      default: i(() => [
                        h("布尔值")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "json" }, {
                      default: i(() => [
                        h("JSON 对象")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "color" }, {
                      default: i(() => [
                        h("颜色值")
                      ]),
                      _: 1
                    }),
                    d(l(x), { label: "code" }, {
                      default: i(() => [
                        h("代码")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "size"])
              ]),
              r("p", Fe, [
                Ie,
                d(l(N), {
                  modelValue: b.value.desc,
                  "onUpdate:modelValue": o[2] || (o[2] = (e) => b.value.desc = e),
                  type: "textarea",
                  autosize: "",
                  placeholder: "属性描述"
                }, null, 8, ["modelValue"])
              ]),
              r("p", Je, [
                Re,
                d(l(T), {
                  modelValue: b.value.isDel,
                  "onUpdate:modelValue": o[3] || (o[3] = (e) => b.value.isDel = e)
                }, null, 8, ["modelValue"])
              ])
            ]),
            r("div", $e, [
              d(l(E), {
                onClick: o[4] || (o[4] = (e) => U.value = !1)
              }, {
                default: i(() => [
                  h("取消")
                ]),
                _: 1
              }),
              d(l(E), {
                type: "primary",
                onClick: Z
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
        d(l(H), {
          modelValue: S.value,
          "onUpdate:modelValue": o[7] || (o[7] = (e) => S.value = e),
          title: ((s = g.value) == null ? void 0 : s.label) || ((v = g.value) == null ? void 0 : v.prop),
          "destroy-on-close": "",
          width: "80%"
        }, {
          default: i(() => [
            g.value ? (n(), w("div", Pe, [
              g.value.type == "string" ? (n(), f(l(N), k({
                key: 0,
                "important-h-full": "",
                bg: "#f8f9fc",
                class: "h-full",
                "model-value": l(p)(u, g.value.prop),
                "onUpdate:modelValue": o[6] || (o[6] = (e) => l(_)(u, g.value.prop, e)),
                type: "textarea",
                size: l(y)
              }, g.value.attr || {}, { resize: "none" }), null, 16, ["model-value", "size"])) : c("", !0)
            ])) : c("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 2);
    };
  }
});
export {
  Ye as _
};
