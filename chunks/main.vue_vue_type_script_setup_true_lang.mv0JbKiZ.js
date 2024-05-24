import { unref as g, computed as D, useAttrs as U, ref as z, toRef as w, h as x, onUnmounted as K, defineComponent as H, useSlots as Y, reactive as C, onMounted as T, watch as $, onBeforeUnmount as Z, openBlock as J, createElementBlock as Q, createVNode as X } from "vue";
import { a as I, E as ee } from "./main.B9WXvT3v.js";
import { aG as te, aZ as G, a4 as b, i as q, B as y, a_ as L, a$ as P, b0 as se, b1 as re, ay as N, m as oe, o as ne, b2 as O, r as le, q as ce, b3 as ie, n as ae, e as ue, aM as fe, aC as de, L as me, aO as he, b4 as pe, aN as ge } from "./vendor.Bh6KHC77.js";
const k = (n = [], e = () => {
}, t = {}) => {
  const s = t.isSource || !1 ? n : te(n), r = t.children || "children", u = (i, l, c) => {
    const a = G(i);
    for (let f = 0, d = a.length; f < d; f++) {
      const m = a[f];
      if (m) {
        const h = e(m, i, f, l, c);
        if (h === !1)
          break;
        if (h === !0)
          continue;
        const p = typeof r == "string" ? m[r] : r(m);
        p && p.length > 0 && u(p, m, f);
      }
    }
  };
  return u(s, void 0, void 0), s;
}, Le = (n, e = {}) => {
  const t = {}, o = e.key || "id";
  return k(n, (r) => {
    r && r[o] && (t[r[o]] = r);
  }, e), t;
}, Ee = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return k(n, (r, u, i, l, c) => {
    if (!e(r, u, i, l, c)) {
      const f = u.indexOf(r);
      if (u.splice(f, 1), l) {
        const d = typeof o == "string" ? l[o] : o(l), m = typeof o == "string" ? o : Object.keys(l).filter((h) => l[h] === d)[0];
        delete l[m];
      }
    }
  }, t);
}, je = (n = [], e, t = {}) => k(n, (s, r, u, i, l) => {
  r.sort(e);
}, t), we = (n, e, t, o, s = {}, r) => {
  const u = s.key || "id", i = s.children || "children";
  let l, c, a, f, d, m;
  const p = k(n, (v, E, F, _) => {
    v[u] == e && (l = v, a = E, c = F, m = _), v[u] == t && (f = typeof i == "string" ? v[i] : i(v) || v, d = v);
  }, s);
  return f = f ?? p, r && l && r(l, m, d, c), l != null && (a && a.splice(c, 1), f && (Array.isArray(f) ? f.splice(o, 0, l) : typeof i == "string" ? f[i] = [l] : i(f, [l]))), p;
}, Ne = (n = [], e, t = {}) => (t.children, k(n, (s, r, u, i, l) => {
  if (i) {
    const [c, a = r.length] = e(i) || [];
    if (c)
      return r.splice(a, 0, ...c), !1;
  }
}, t)), Te = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return k(n, (r, u) => {
    const [i, l = u.length] = e(r) || [], c = i && (typeof o == "string" ? i[o] : o(i));
    if (c && c.length > 0)
      return c.splice(l, 0, i), !1;
  }, t);
}, $e = (n, e, t = {}) => {
  let o;
  return k(n, (r) => {
    if (e(r))
      return o = r, !1;
  }, t), o;
}, qe = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return Ee(n, (r) => !e.includes(r[o]), t);
}, De = (n = [], e, t = {}) => {
  const o = t.key || "id";
  let s;
  return k(n, (u, i, l) => u[o] == e ? (i.splice(l, 1), s = u, !1) : !0, t), s;
}, W = (n = [], e = {}) => {
  const t = [];
  let o = [];
  return k(n, (r, u, i, l, c) => {
    if (l) {
      const a = o.indexOf(l), f = o.length;
      if (a == -1)
        o.push(l);
      else if (a < f - 1) {
        let d = f - 1 - a;
        for (; d-- > 0; )
          o.pop();
      }
    } else
      o = [];
    t.push([r, ...o]);
  }, e), t;
}, Ge = (n = [], e = {}) => {
  const t = e.children || "children";
  return W(n, e).filter((s) => {
    const r = typeof t == "string" ? s[0][t] : t(s[0]);
    return !r || r.length == 0;
  });
}, We = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return W(n, t).filter((r) => e.includes(r[0][o]));
}, Be = (n = [], e, t = {}) => {
  const o = t.sourceChildren || t.children || "children", s = t.children || "children";
  return k(n, (u, i, l, c, a) => {
    const f = e(u, i, l, c, a);
    if (f == u && u != null)
      return;
    if (f == null) {
      i.splice(i.indexOf(u), 1);
      return;
    }
    const d = typeof o == "string" ? u[o] : o(u);
    if (!d || d.length == 0)
      return;
    Object.keys(u).forEach((p) => delete u[p]), Object.keys(f).forEach((p) => u[p] = f[p]), typeof s == "string" ? f[s] || (u[s] = d) : s(u, d);
  }, t);
}, j = {
  required: "请输入 [ {{label}} ] ！",
  pattern: "请按照要求输入正确的 [ {{label}} ] 格式! 格式：{{ pattern }}",
  common: "请输入正确的 [ {{label}} ] 格式!"
}, be = [
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
var A;
((n) => {
  n.buildRules = (e) => {
    const t = g(e.required) ?? !1, o = g(e.trigger) ?? "blur", s = b(e, "message") ? I.getExpValue(g(e.message), e) : b(e, "label") ? I.getExpValue(j.required, e) : "", r = q(g(e.rules)) ? [...g(e.rules)] : [], u = Object.keys(j), i = [];
    let l = !1;
    return r.forEach((c) => {
      var m;
      const a = { ...g(c) }, f = ((m = u.filter((h) => b(a, h))) == null ? void 0 : m[0]) || "common", d = a.message || g(e.message) || b(e, "label") ? y(j, f) : "";
      a.message = d ? I.getExpValue(d, { ...e, ...a }) : "", b(a, "required") && (l = !0), b(a, "trigger") || (a.trigger = o), i.push(a);
    }), !l && t && i.push({ required: t, message: s, trigger: o }), delete e.required, delete e.trigger, delete e.message, i;
  }, n.buildElFormItemProps = (e) => {
    const t = g(y(e, "elFormItem")), o = q(t) ? t : L(t) ? Object.keys(t) : [], s = L(t) ? { ...t } : {};
    return be.forEach((r) => {
      b(e, r) && !o.includes(r) && (s[r] = y(e, r), P(e, r));
    }), P(e, "elFormItem"), s;
  }, n.isNeedElFormItem = (e) => {
    const t = g(e.elFormItem);
    return t != null && delete e.elFormItem, se(t) ? t : (t == null ? void 0 : t.enabled) ?? !0;
  }, n.validateFormField = (e, t) => !0, n.valideForm = (e, t, o = {}) => {
    const s = {
      children: (c) => {
        const a = c.children || c.cls;
        return a && Array.isArray(a) ? new Array().concat(a) : [];
      }
    }, r = {}, u = {};
    k(t, (c, a, f, d) => {
      if (!L(c))
        return !0;
      if (d) {
        const m = `${d.$prop || d.prop || ""}.${c.prop || ""}`;
        c.$prop = m.split(".").filter((h) => h).join(".");
      } else
        c.prop && (c.$prop = c.prop);
      if (c.prop && (c.required || c.rules || b(o, c.$prop))) {
        const m = new Array().concat((0, n.buildRules)(c), y(o, c.$prop) || []);
        u[c.$prop] = m;
        const h = y(e, c.$prop) || c.value || c.defaultValue;
        r[c.$prop] = h;
      }
    }, s);
    const l = new re(u);
    return new Promise((c) => {
      l.validate(r, (a, f) => {
        const d = (a || []).length == 0, m = {};
        for (const h of a || []) {
          const p = h.field || "";
          m[p] ? m[p].push(h) : m[p] = [h];
        }
        c({ status: d, info: m, errors: a, fields: f });
      });
    });
  }, n.initProp = (e) => {
    var i, l, c;
    const t = (i = e == null ? void 0 : e.elem) == null ? void 0 : i.prop, o = ((c = (l = e == null ? void 0 : e.parent) == null ? void 0 : l.setupRes) == null ? void 0 : c.formProp) || [], s = typeof t == "function" ? t(e) : t, r = new Array().concat(o), u = s == null ? void 0 : s.replace(/^(\^|\~)/, "");
    return /^\^/.test(s) ? (r.length = 0, r.push(...u.split("."))) : /^~/.test(s) ? r.push(u) : s && r.push(...u.split(".")), r;
  }, n.bindModelValue = (e, t, o) => ({
    ":modelValue": D(() => {
      let s = t;
      for (const r of e)
        r.replace(/\W+/, ""), /^\^~/.test(r) ? s = t[r.replace(/\W+/, "")] : /^\^/.test(r) ? s = y(t, r.replace(/^\W/, "")) : /^~/.test(r) ? s = s[r.replace(/^\W/, "")] : s = y(s, r);
      return s;
    }),
    "onUpdate:modelValue": (s) => {
      if (e.length > 1) {
        let r = t;
        const u = e[e.length - 1];
        for (const i of e) {
          const l = i == u, c = i.replace(/\W+/, "");
          l || /^\^/.test(i) && b(r, c);
        }
      } else
        e.length == 1 && N(t, e[0], s);
      o && o(s);
    }
  }), n.SELF_FORM_NAMES = ["elsListForm"];
})(A || (A = {}));
const ye = A.buildRules, ke = A.buildElFormItemProps, Fe = A.isNeedElFormItem, ve = ({ tag: n, parent: e }) => n || (e && b(V, O(e.tagname)) ? V[O(e.tagname)] : le), _e = (n) => {
  const e = n.props, t = n.setupRes;
  if (t.isFormElem) {
    const o = t.formProp;
    if (P(e, "value"), t.isNeedElFormItem) {
      const s = {
        ...ke(e),
        prop: o
      };
      return s.rules = ye(s), x(ce, s, {
        default: () => I.defaultRender(n),
        label: () => [s.label, s != null && s.tip ? Oe(s.tip) : ""]
      });
    }
  }
  return I.defaultRender(n);
}, Re = (n, e) => {
  const t = n.elem;
  if (!t)
    return;
  const { formProps: o, emitChange: s } = n.context, r = n.parent, u = O(e.tagname), i = O(r == null ? void 0 : r.tagname), l = A.initProp(n), c = l.join("."), a = { isFormElem: !1 };
  if (l.length > 0 && (a.formProp = l), Pe(t, u, i)) {
    if (a.isFormElem = !0, t.isFormElem !== !1) {
      o == null || o.add(c);
      const f = g(t.modelValue ?? t.value) ?? void 0, d = n.context, m = d == null ? void 0 : d.formData;
      y(m, l) == null && f != null && (N(m, l, f), s == null || s(l, f)), a.prop = {
        ":modelValue": D(() => y(m, l)),
        // ":modelValue": get(unref(formData), formProp),
        "onUpdate:modelValue": (h) => {
          N(m, l, h ?? f), s == null || s(l, h ?? f);
        }
      };
    }
    a.excludeKeys = ["value"], a.isFormItem = !0, a.isNeedElFormItem = Fe(t), K(() => {
      o == null || o.delete(c);
    });
  }
  return a;
}, Ae = (n, e, t) => {
  const o = g(n.size) || "default", s = U(), r = e.formData, u = oe(
    { validateOnRuleChange: !1, size: o },
    s.elForm || {}
  ), i = z(), l = {
    ...u,
    tag: ne,
    class: "w-full h-full",
    ref: (f) => i.value = f,
    cls: w(n, "column"),
    model: r
  }, c = (f, d) => {
    const m = y(g(i), f);
    if (m && ie(m))
      return m(...d);
  }, a = {
    ...t,
    formData: r,
    formProps: e.formProps,
    emitChange: e.emitChange,
    tag: ve,
    setup: Re,
    render: _e,
    excludeKeys: ["isFormElem", "isNeedElFormItem"],
    params: {
      ...t,
      formData: r,
      formProps: e.formProps
    }
  };
  return {
    elem: l,
    context: a,
    formRef: i,
    formApi: c,
    refresh: () => {
    },
    validate: (...f) => c("validate", f)
  };
}, Ie = [
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
], V = {
  elCheckboxGroup: ae,
  elRadioGroup: ue,
  elSelect: fe
}, Pe = (n, e, t) => g(n.isFormElem) === !0 ? !0 : t && b(V, t) ? O(V[t].name) !== e : !(!A.SELF_FORM_NAMES.includes(e) && !Ie.includes(e)), Oe = (n) => {
  if (n == null || !n)
    return;
  const o = { ...{
    placement: "top-start",
    effect: "dark"
  }, ...typeof n == "string" ? { content: n } : n };
  return x(de, o, { default: () => x(me, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => x(he) }) });
}, Se = { class: "els-form" }, xe = {
  name: "ElsForm"
}, Ue = /* @__PURE__ */ H({
  ...xe,
  props: {
    modelValue: { default: () => ({}) },
    column: {},
    size: { default: "default" },
    UIPluging: {},
    autoClean: { type: Boolean, default: !0 },
    params: { default: () => ({}) }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { expose: e, emit: t }) {
    const o = t, s = n, r = w(s, "modelValue"), u = Y(), i = typeof g(r) != "object", l = i ? C({}) : C(r.value);
    let c = !1;
    const a = () => {
      o("update:modelValue", l), c === !1 && (c = !0, setTimeout(() => {
        c = !1;
      }, 2e3));
    }, f = ge((E, F) => {
      i && (o("change", E.join("."), F), a());
    }, 200);
    T(() => {
      i && a();
    }), i && $(w(s, "modelValue"), (E) => {
      E != l && (c === !1 && E && Object.assign(l, E), c === !0 && (c = !1));
    });
    const d = C(/* @__PURE__ */ new Set()), m = { formProps: d, formData: l, emitChange: f }, p = (s.UIPluging || Ae)(s, m, { slots: u });
    if (s.autoClean) {
      let E = [];
      T(() => {
        E = Array.from(d);
      }), Z(() => {
        E = [], d.clear();
      }), $(d, (F) => {
        const _ = Array.from(F), R = pe(E, _);
        R.length > 0 && (R.forEach((S) => P(g(l), S)), E = _, o("update:modelValue", g(l)));
      });
    }
    return e({ ...p, formProps: d, submit: (E = (F, _) => [F, _]) => (i && a(), new Promise(async (F, _) => {
      try {
        await p.validate();
        const R = G(g(l));
        for (const S of Array.from(d)) {
          const B = y(l, S), M = E(S, B);
          M[0] && M[1] == null && P(R, M[0]);
        }
        F(R);
      } catch (R) {
        console.error("表单校验失败！====>", R), _(R);
      }
    })) }), (E, F) => (J(), Q("div", Se, [
      X(g(ee), {
        elem: g(p).elem,
        params: E.params,
        context: g(p).context
      }, null, 8, ["elem", "params", "context"])
    ]));
  }
});
export {
  A as E,
  Ue as _,
  Te as a,
  W as b,
  qe as c,
  De as d,
  Ee as e,
  $e as f,
  We as g,
  Ge as h,
  k as i,
  we as j,
  Be as k,
  je as l,
  Le as m,
  Ne as t
};
