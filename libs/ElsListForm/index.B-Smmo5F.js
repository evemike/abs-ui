import "../../css/ElsListForm-BMVByKCq.css";
import { defineComponent as ae, toRefs as se, reactive as ne, unref as l, shallowRef as P, ref as I, watch as ue, openBlock as n, createElementBlock as E, normalizeClass as re, createElementVNode as r, createVNode as d, Fragment as C, renderList as J, toDisplayString as T, createBlock as c, withCtx as i, createCommentVNode as f, mergeProps as w, createTextVNode as k } from "vue";
import { u as de, b as z, p as pe, c as ie, d as ce, i as fe, e as N, g as p, f as _, j as me, k as ve, l as ye, m as H, n as _e, o as Ve, q as be, r as q, t as we, w as x } from "../../chunks/vendor.DBgIaorj.js";
import { C as G } from "../../chunks/main.sNAJhfuv.js";
import { E as ke } from "../../chunks/main.DGfZx2Z8.js";
const he = {
  flex: "",
  "items-center": "",
  "justify-between": "",
  "gap-4": "",
  class: "_header"
}, ge = /* @__PURE__ */ r("b", { "min-w-200": "" }, "属性名", -1), Ee = /* @__PURE__ */ r("b", {
  "flex-1": "",
  "min-w-100": ""
}, "属性值", -1), ze = {
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
}, Fe = /* @__PURE__ */ r("span", { "min-w-120": "" }, "描述", -1), Ke = {
  flex: "",
  "items-center": ""
}, Ie = /* @__PURE__ */ r("span", { "min-w-120": "" }, "是否可删除", -1), Je = {
  flex: "",
  "justify-end": ""
}, Le = {
  key: 0,
  class: "important-h-70vh"
}, Re = {
  name: "ElsListForm"
}, $e = /* @__PURE__ */ ae({
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
    prop: {},
    column: {}
  },
  emits: ["update:modelValue", "change", "add"],
  setup(j, { emit: M }) {
    const D = j, B = M, { keys: L, keyName: R, modelValue: m, format: O, size: y, isNew: Pe, isAdd: Q } = D;
    se(D);
    const u = ne({ ...l(m) }), b = P([]), W = (a) => {
      let t = typeof a;
      return t == "string" ? /^#[0-9a-fA-f]+$/.test(a) && (t = "color") : t == "object" && (t = "json"), t;
    }, U = I(!1), V = I({ prop: "", type: "string" }), X = () => {
      Q && (V.value = { prop: "", type: "string", isDel: !0 }, U.value = !0);
    }, Y = () => {
      const a = V.value;
      a.prop && (b.value.push({ ...a }), U.value = !1, B("add", { ...a }));
    }, Z = (a) => {
      b.value = b.value.filter((t) => t != a);
    };
    let A = !1, S = "";
    const ee = (a, t) => {
      try {
        A = !0;
        const s = JSON.parse(a);
        _(l(u), t, s);
      } catch (s) {
        console.warn("JSON 格式不正确！", s);
      }
    }, le = (a) => A ? (A = !1, S) : (S = JSON.stringify(p(l(u), a) || {}, null, 2), S);
    (() => {
      const { propKey: a, valueKey: t } = R;
      if (L.length == 0)
        Array.isArray(m) ? b.value = m.map((s) => ({ prop: p(s, a), value: p(s, t), type: W(p(s, t)) })) : b.value = Object.keys(m).map((s) => ({ prop: s, value: p(m, s), type: p(m, s) }));
      else {
        let s = m || {};
        Array.isArray(m) && (s = Object.fromEntries(m.map((v) => [v[a], v[t]]))), b.value = L.map((v) => ({ ...v, value: p(s, v.prop) ?? v.value }));
      }
      for (const s of b.value)
        _(u, s.prop, s.value);
    })();
    const F = I(!1), h = P(), K = {}, te = (a) => {
      const t = a.type, s = a.prop;
      ["json", "code"].includes(t) ? p(K, s).openDialog() : (h.value = a, F.value = !0);
    }, oe = {
      formData: u,
      elsListFormProps: D
    };
    return ue(u, de((a) => {
      let t = a;
      if (O && typeof O == "function")
        t = O(a);
      else if (Array.isArray(m)) {
        const { propKey: s, valueKey: v } = R, e = m.map((g) => g[s]);
        t = b.value.map((g) => {
          const o = e.indexOf(g.prop), $ = { ...m[o] || {} };
          return $[v] = p(a, g.prop), $;
        });
      }
      B("change", t), B("update:modelValue", t);
    }, 100), { deep: !0 }), (a, t) => {
      var s, v;
      return n(), E("div", {
        class: re(["els-list-form", `size-${l(y)}`]),
        "w-full": ""
      }, [
        r("div", he, [
          ge,
          Ee,
          d(l(z), {
            "min-w-80": "",
            icon: l(pe),
            type: "success",
            onClick: X
          }, null, 8, ["icon"])
        ]),
        r("div", ze, [
          r("ul", xe, [
            (n(!0), E(C, null, J(b.value, (e, g) => (n(), E("li", {
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
                r("i", Ce, T(e.label || e.prop), 1),
                e.desc ? (n(), c(l(ie), {
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
                        d(l(fe))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["content"])) : f("", !0)
              ], 8, Ue),
              r("b", Ne, [
                e.tag != null ? (n(), c(l(ke), {
                  key: 0,
                  elem: e,
                  params: oe
                }, null, 8, ["elem"])) : (n(), E(C, { key: 1 }, [
                  e.type == "string" ? (n(), c(l(N), w({
                    key: 0,
                    "w-full": "",
                    truncate: "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (o) => l(_)(u, e.prop, o),
                    size: l(y)
                  }, e.attr || {}, { autosize: "" }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : f("", !0),
                  e.type == "select" ? (n(), c(l(me), w({
                    key: 1,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (o) => l(_)(u, e.prop, o),
                    size: l(y)
                  }, e.attr || {}), {
                    default: i(() => [
                      (n(!0), E(C, null, J(e.cls || [], (o) => (n(), c(l(ve), {
                        label: o.label,
                        value: o.value
                      }, null, 8, ["label", "value"]))), 256))
                    ]),
                    _: 2
                  }, 1040, ["model-value", "onUpdate:modelValue", "size"])) : f("", !0),
                  e.type == "number" ? (n(), c(l(ye), w({
                    key: 2,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (o) => l(_)(u, e.prop, o),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : f("", !0),
                  e.type == "boolean" ? (n(), c(l(H), w({
                    key: 3,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (o) => l(_)(u, e.prop, o),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : f("", !0),
                  e.type == "color" ? (n(), c(l(_e), w({
                    key: 4,
                    "w-full": "",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (o) => l(_)(u, e.prop, o),
                    size: l(y)
                  }, e.attr || {}), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : f("", !0),
                  e.type == "json" ? (n(), c(l(G), w({
                    key: 5,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (o) => l(_)(K, e.prop, o),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": le(e.prop),
                    "onUpdate:modelValue": (o) => ee(o, e.prop),
                    size: l(y)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : f("", !0),
                  e.type == "code" ? (n(), c(l(G), w({
                    key: 6,
                    class: "b-1 b-solid b-#E6E8EB rd-8 w-full overflow-hidden"
                  }, e.attr || {}, {
                    ref_for: !0,
                    ref: (o) => l(_)(K, e.prop, o),
                    showOperate: !1,
                    maxHeight: "32px",
                    "model-value": l(p)(u, e.prop),
                    "onUpdate:modelValue": (o) => l(_)(u, e.prop, o),
                    size: l(y)
                  }), null, 16, ["model-value", "onUpdate:modelValue", "size"])) : f("", !0)
                ], 64))
              ]),
              r("b", je, [
                e.isDel ? (n(), c(l(z), {
                  key: 0,
                  type: "danger",
                  link: "",
                  icon: l(Ve),
                  onClick: (o) => Z(e),
                  title: "删除"
                }, null, 8, ["icon", "onClick"])) : f("", !0),
                ["string", "code", "json"].includes(e.type) && e.tag == null ? (n(), c(l(z), {
                  key: 1,
                  link: "",
                  type: "success",
                  icon: l(be),
                  onClick: (o) => te(e),
                  title: "全屏"
                }, null, 8, ["icon", "onClick"])) : f("", !0),
                e.btns ? (n(!0), E(C, { key: 2 }, J(e.btns, (o) => (n(), c(l(z), w(o.attr || {}, {
                  link: "",
                  title: o.title,
                  onClick: () => o.handle(e, g, u)
                }), {
                  default: i(() => [
                    k(T(o.label), 1)
                  ]),
                  _: 2
                }, 1040, ["title", "onClick"]))), 256)) : f("", !0)
              ])
            ]))), 128))
          ])
        ]),
        d(l(q), {
          modelValue: U.value,
          "onUpdate:modelValue": t[5] || (t[5] = (e) => U.value = e),
          title: "新增属性"
        }, {
          default: i(() => [
            r("div", null, [
              r("p", De, [
                Be,
                d(l(N), {
                  modelValue: V.value.prop,
                  "onUpdate:modelValue": t[0] || (t[0] = (e) => V.value.prop = e),
                  size: l(y),
                  placeholder: "属性名 必填"
                }, null, 8, ["modelValue", "size"])
              ]),
              r("p", Oe, [
                Ae,
                d(l(we), {
                  modelValue: V.value.type,
                  "onUpdate:modelValue": t[1] || (t[1] = (e) => V.value.type = e),
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
                  "onUpdate:modelValue": t[2] || (t[2] = (e) => V.value.desc = e),
                  type: "textarea",
                  autosize: "",
                  placeholder: "属性描述"
                }, null, 8, ["modelValue"])
              ]),
              r("p", Ke, [
                Ie,
                d(l(H), {
                  modelValue: V.value.isDel,
                  "onUpdate:modelValue": t[3] || (t[3] = (e) => V.value.isDel = e)
                }, null, 8, ["modelValue"])
              ])
            ]),
            r("div", Je, [
              d(l(z), {
                onClick: t[4] || (t[4] = (e) => U.value = !1)
              }, {
                default: i(() => [
                  k("取消")
                ]),
                _: 1
              }),
              d(l(z), {
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
        d(l(q), {
          modelValue: F.value,
          "onUpdate:modelValue": t[7] || (t[7] = (e) => F.value = e),
          title: ((s = h.value) == null ? void 0 : s.label) || ((v = h.value) == null ? void 0 : v.prop),
          "destroy-on-close": "",
          width: "80%"
        }, {
          default: i(() => [
            h.value ? (n(), E("div", Le, [
              h.value.type == "string" ? (n(), c(l(N), w({
                key: 0,
                "important-h-full": "",
                bg: "#f8f9fc",
                class: "h-full",
                "model-value": l(p)(u, h.value.prop),
                "onUpdate:modelValue": t[6] || (t[6] = (e) => l(_)(u, h.value.prop, e)),
                type: "textarea",
                size: l(y)
              }, h.value.attr || {}, { resize: "none" }), null, 16, ["model-value", "size"])) : f("", !0)
            ])) : f("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 2);
    };
  }
}), Xe = {
  install: (j) => {
    j.component("els-list-form", $e);
  }
};
export {
  $e as ElsListForm,
  Xe as default
};
