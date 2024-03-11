import { unref as h, useAttrs as q, ref as T, toRef as j, h as S, computed as G, onUnmounted as B, defineComponent as U, useSlots as z, onMounted as D, watch as L, reactive as K, onBeforeUnmount as H, openBlock as W, createElementBlock as Y, createVNode as J } from "vue";
import { a as A, E as Q } from "./main.BeuaEiRW.js";
import { ax as X, ay as _, N as v, az as w, g as b, aA as V, aB as I, aC as Z, aD as ee, y as te, aE as se, aF as P, o as re, aG as oe, K as N, aH as ne, n as le, af as ae, a6 as ce, am as ie, k as ue, a3 as fe, aI as de, L as me } from "./vendor.3wbU5Pec.js";
const k = (r = [], t = () => {
}, e = {}) => {
  const l = e.isSource || !1 ? r : X(r), o = e.children || "children", a = (c, i, n) => {
    const u = _(c);
    for (let f = 0, p = u.length; f < p; f++) {
      const m = u[f];
      if (m) {
        const d = t(m, c, f, i, n);
        if (d === !1)
          break;
        if (d === !0)
          continue;
        const g = typeof o == "string" ? m[o] : o(m);
        g && g.length > 0 && a(g, m, f);
      }
    }
  };
  return a(l, void 0, void 0), l;
}, Ce = (r, t = {}) => {
  const e = {}, s = t.key || "id";
  return k(r, (o) => {
    o && o[s] && (e[o[s]] = o);
  }, t), e;
}, pe = (r = [], t, e = {}) => {
  const s = e.children || "children";
  return k(r, (o, a, c, i, n) => {
    if (!t(o, a, c, i, n)) {
      const f = a.indexOf(o);
      if (a.splice(f, 1), i) {
        const p = typeof s == "string" ? i[s] : s(i), m = typeof s == "string" ? s : Object.keys(i).filter((d) => i[d] === p)[0];
        delete i[m];
      }
    }
  }, e);
}, Ve = (r = [], t, e = {}) => k(r, (l, o, a, c, i) => {
  o.sort(t);
}, e), Me = (r, t, e, s, l = {}, o) => {
  const a = l.key || "id", c = l.children || "children";
  let i, n, u, f, p, m;
  const g = k(r, (E, y, F, O) => {
    E[a] == t && (i = E, u = y, n = F, m = O), E[a] == e && (f = typeof c == "string" ? E[c] : c(E) || E, p = E);
  }, l);
  return f = f ?? g, o && i && o(i, m, p, n), i != null && (u && u.splice(n, 1), f && (Array.isArray(f) ? f.splice(s, 0, i) : typeof c == "string" ? f[c] = [i] : c(f, [i]))), g;
}, De = (r = [], t, e = {}) => (e.children, k(r, (l, o, a, c, i) => {
  if (c) {
    const [n, u = o.length] = t(c) || [];
    if (n)
      return o.splice(u, 0, ...n), !1;
  }
}, e)), Le = (r = [], t, e = {}) => {
  const s = e.children || "children";
  return k(r, (o, a) => {
    const [c, i = a.length] = t(o) || [], n = c && (typeof s == "string" ? c[s] : s(c));
    if (n && n.length > 0)
      return n.splice(i, 0, c), !1;
  }, e);
}, we = (r, t, e = {}) => {
  let s;
  return k(r, (o) => {
    if (t(o))
      return s = o, !1;
  }, e), s;
}, Ne = (r = [], t = [], e = {}) => {
  const s = e.key || "id";
  return pe(r, (o) => !t.includes(o[s]), e);
}, Te = (r = [], t, e = {}) => {
  const s = e.key || "id";
  let l;
  return k(r, (a, c, i) => a[s] == t ? (c.splice(i, 1), l = a, !1) : !0, e), l;
}, $ = (r = [], t = {}) => {
  const e = [];
  let s = [];
  return k(r, (o, a, c, i, n) => {
    if (i) {
      const u = s.indexOf(i), f = s.length;
      if (u == -1)
        s.push(i);
      else if (u < f - 1) {
        let p = f - 1 - u;
        for (; p-- > 0; )
          s.pop();
      }
    } else
      s = [];
    e.push([o, ...s]);
  }, t), e;
}, je = (r = [], t = {}) => {
  const e = t.children || "children";
  return $(r, t).filter((l) => {
    const o = typeof e == "string" ? l[0][e] : e(l[0]);
    return !o || o.length == 0;
  });
}, $e = (r = [], t = [], e = {}) => {
  const s = e.key || "id";
  return $(r, e).filter((o) => t.includes(o[0][s]));
}, qe = (r = [], t, e = {}) => {
  const s = e.sourceChildren || e.children || "children", l = e.children || "children";
  return k(r, (a, c, i, n, u) => {
    const f = t(a, c, i, n, u);
    if (f == a && a != null)
      return;
    if (f == null) {
      c.splice(c.indexOf(a), 1);
      return;
    }
    const p = typeof s == "string" ? a[s] : s(a);
    if (!p || p.length == 0)
      return;
    Object.keys(a).forEach((g) => delete a[g]), Object.keys(f).forEach((g) => a[g] = f[g]), typeof l == "string" ? f[l] || (a[l] = p) : l(a, p);
  }, e);
}, M = {
  required: "请输入 [ {{label}} ] ！",
  pattern: "请按照要求输入正确的 [ {{label}} ] 格式! 格式：{{ pattern }}",
  common: "请输入正确的 [ {{label}} ] 格式!"
}, he = [
  "label",
  "labelWidth",
  "error",
  "showMessage",
  "inlineMessage",
  "required",
  "rules",
  "trigger",
  "message",
  "tip"
];
var R;
((r) => {
  r.buildRules = (t) => {
    const e = h(t.required) ?? !1, s = h(t.trigger) ?? "blur", l = v(t, "message") ? A.getExpValue(h(t.message), t) : A.getExpValue(M.required, t), o = w(h(t.rules)) ? [...h(t.rules)] : [], a = Object.keys(M), c = [];
    let i = !1;
    return o.forEach((n) => {
      var m;
      const u = { ...h(n) }, f = ((m = a.filter((d) => v(u, d))) == null ? void 0 : m[0]) || "common", p = u.message || h(t.message) || b(M, f);
      u.message = A.getExpValue(p, { ...t, ...u }), v(u, "required") && (i = !0), v(u, "trigger") || (u.trigger = s), c.push(u);
    }), !i && e && c.push({ required: e, message: l, trigger: s }), delete t.required, delete t.trigger, delete t.message, c;
  }, r.buildElFormItemProps = (t) => {
    const e = h(b(t, "elFormItem")), s = w(e) ? e : V(e) ? Object.keys(e) : [], l = V(e) ? { ...e } : {};
    return he.forEach((o) => {
      v(t, o) && !s.includes(o) && (l[o] = b(t, o), I(t, o));
    }), I(t, "elFormItem"), l;
  }, r.isNeedElFormItem = (t) => {
    const e = h(t.elFormItem);
    return Z(e) ? e : (e == null ? void 0 : e.enabled) ?? !0;
  }, r.validateFormField = (t, e) => !0, r.valideForm = (t, e, s = {}) => {
    const l = {
      children: (n) => {
        const u = n.children || n.cls;
        return u && Array.isArray(u) ? new Array().concat(u) : [];
      }
    }, o = {}, a = {};
    k(e, (n, u, f, p) => {
      if (!V(n))
        return !0;
      if (p) {
        const m = `${p.$prop || p.prop || ""}.${n.prop || ""}`;
        n.$prop = m.split(".").filter((d) => d).join(".");
      } else
        n.prop && (n.$prop = n.prop);
      if (n.prop && (n.required || n.rules || v(s, n.$prop))) {
        const m = new Array().concat((0, r.buildRules)(n), b(s, n.$prop) || []);
        a[n.$prop] = m;
        const d = b(t, n.$prop) || n.value || n.defaultValue;
        o[n.$prop] = d;
      }
    }, l);
    const i = new ee(a);
    return new Promise((n) => {
      i.validate(o, (u, f) => {
        const p = (u || []).length == 0, m = {};
        for (const d of u || []) {
          const g = d.field || "";
          m[g] ? m[g].push(d) : m[g] = [d];
        }
        n({ status: p, info: m, errors: u, fields: f });
      });
    });
  }, r.SELF_FORM_NAMES = ["elsListForm"];
})(R || (R = {}));
const ge = R.buildRules, Ee = R.buildElFormItemProps, ye = R.isNeedElFormItem, ke = ({ tag: r, parent: t }) => r || (t && v(x, P(t.tagname)) ? x[P(t.tagname)] : re), Fe = (r) => {
  const t = r.props, e = r.setupRes;
  if (e.isFormElem) {
    const s = e.formProp;
    if (I(t, "value"), e.isNeedElFormItem) {
      const l = {
        ...Ee(t),
        prop: s
      };
      return l.rules = ge(l), S(oe, l, {
        default: () => A.defaultRender(r),
        label: () => [l.label, l != null && l.tip ? Ae(l.tip) : ""]
      });
    }
  }
  return A.defaultRender(r);
}, be = (r, t) => {
  const e = r.elem, { formProps: s, emitChange: l } = r.context, o = r.parent, a = P(t.tagname), c = P(o == null ? void 0 : o.tagname), i = o == null ? void 0 : o.setupRes, n = h(e.prop), u = typeof n == "function" ? n(r) : n, f = h(i == null ? void 0 : i.formProp) || [], p = /^\^/.test(u) ? [u.replace("^", "")] : new Array().concat(f, u || []), m = p.join("."), d = { isFormElem: !1 };
  if (p.length > 0 && (d.formProp = m), Re(e, a, c)) {
    if (d.isFormElem = !0, e.isFormElem !== !1) {
      s == null || s.add(m);
      const g = h(e.modelValue ?? e.value) ?? void 0, E = r.context, y = E == null ? void 0 : E.formData;
      b(h(y), m) == null && N(h(y), m, g), d.prop = {
        ":modelValue": G(() => b(h(y), m)),
        "onUpdate:modelValue": (F) => {
          N(h(y), m, F ?? g), l == null || l(m, F);
        }
      };
    }
    d.excludeKeys = ["value"], d.isFormItem = !0, d.isNeedElFormItem = ye(e), B(() => {
      s == null || s.delete(m);
    });
  }
  return d;
}, ve = (r, t, e) => {
  const s = h(r.size) || "default", l = q(), o = t.formData, a = te(
    { validateOnRuleChange: !1, size: s },
    l.elForm || {}
  ), c = T(), i = {
    ...a,
    tag: se,
    ref: (f) => c.value = f,
    cls: j(r, "column"),
    model: o
  }, n = (f, p) => {
    const m = b(h(c), f);
    if (m && ne(m))
      return m(...p);
  }, u = {
    ...e,
    formData: o,
    formProps: t.formProps,
    emitChange: t.emitChange,
    tag: ke,
    setup: be,
    render: Fe,
    excludeKeys: ["isFormElem", "isNeedElFormItem"],
    params: {
      ...e,
      formData: o,
      formProps: t.formProps
    }
  };
  return {
    elem: i,
    context: u,
    formRef: c,
    formApi: n,
    refresh: () => {
    },
    validate: (...f) => n("validate", f)
  };
}, _e = [
  "elInput",
  "elInputNumber",
  "elSelect",
  "elSelectV2",
  "elDatePicker",
  "elRadio",
  "elRadioGroup",
  "elCheckbox",
  "elCheckboxGroup",
  "elCascader",
  "elCascaderPanel",
  "elColorPicker",
  "elRate",
  "elSlider",
  "elSwitch",
  "elTimePicker",
  "elTimeSelect",
  "elTransfer",
  "elAutocomplete"
], x = {
  elCheckboxGroup: le,
  elRadioGroup: ae,
  elSelect: ce
}, Re = (r, t, e) => h(r.isFormElem) === !0 ? !0 : e && v(x, e) ? P(x[e].name) !== t : !(!R.SELF_FORM_NAMES.includes(t) && !_e.includes(t)), Ae = (r) => {
  if (r == null || !r)
    return;
  const s = { ...{
    // icon:InfoFilled,
    placement: "top-start",
    effect: "dark"
  }, ...typeof r == "string" ? { content: r } : r };
  return S(ie, s, { default: () => S(ue, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => S(fe) }) });
}, Ie = { class: "els-form" }, Pe = {
  name: "ElsForm"
}, Ge = /* @__PURE__ */ U({
  ...Pe,
  props: {
    modelValue: { default: () => ({}) },
    column: {},
    size: { default: "default" },
    UIPluging: {},
    autoClean: { type: Boolean, default: !0 },
    params: { default: () => ({}) }
  },
  emits: ["update:modelValue", "change"],
  setup(r, { expose: t, emit: e }) {
    const s = e, l = r, o = z(), a = T(_(h(l.modelValue || {})));
    let c = !1;
    const i = me((d, g) => {
      s("change", d, g), s("update:modelValue", _(h(a))), c === !1 && (c = !0, setTimeout(() => {
        c = !1;
      }, 2e3));
    }, 200);
    D(() => {
      s("update:modelValue", _(h(a)));
    }), L(j(l, "modelValue"), (d) => {
      c === !1 && d && (a.value = _(d)), c === !0 && (c = !1);
    });
    const n = K(/* @__PURE__ */ new Set()), u = { formProps: n, formData: a, emitChange: i }, p = (l.UIPluging || ve)(l, u, { slots: o });
    if (l.autoClean) {
      let d = [];
      D(() => {
        d = Array.from(n);
      }), H(() => {
        d = [], n.clear();
      }), L(n, (g) => {
        const E = Array.from(g), y = de(d, E);
        y.length > 0 && (y.forEach((F) => I(h(a), F)), d = E, s("update:modelValue", h(a)));
      });
    }
    return t({ ...p, formProps: n, submit: (d = (g, E) => [g, E]) => new Promise(async (g, E) => {
      try {
        await p.validate();
        const y = _(h(a));
        for (const F of Array.from(n)) {
          const O = b(h(a), F), C = d(F, O);
          C[0] && C[1] == null && I(y, C[0]);
        }
        g(y);
      } catch (y) {
        console.error("表单校验失败！====>", y), E(y);
      }
    }) }), (d, g) => (W(), Y("div", Ie, [
      J(h(Q), {
        elem: h(p).elem,
        params: d.params,
        context: h(p).context
      }, null, 8, ["elem", "params", "context"])
    ]));
  }
});
export {
  R as E,
  Ge as _,
  Le as a,
  $ as b,
  Ne as c,
  Te as d,
  pe as e,
  we as f,
  $e as g,
  je as h,
  k as i,
  Me as j,
  qe as k,
  Ve as l,
  Ce as m,
  De as t
};
