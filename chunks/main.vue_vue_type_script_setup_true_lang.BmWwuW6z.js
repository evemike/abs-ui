import { unref as g, computed as q, useAttrs as B, ref as z, toRef as w, h as V, onUnmounted as K, defineComponent as Y, useSlots as H, reactive as C, onMounted as N, watch as $, onBeforeUnmount as J, openBlock as X, createElementBlock as Z, createVNode as Q } from "vue";
import { a as I, E as ee } from "./main.DGfZx2Z8.js";
import { aJ as te, aU as W, a5 as b, ao as D, g as y, aV as L, aW as P, aX as se, aY as re, f as T, R as oe, aB as ne, aZ as S, e as le, aC as ce, a_ as ae, M as ie, aA as ue, k as fe, c as de, d as me, i as he, a$ as pe, u as ge } from "./vendor.DBgIaorj.js";
const k = (n = [], e = () => {
}, t = {}) => {
  const s = t.isSource || !1 ? n : te(n), r = t.children || "children", u = (a, l, c) => {
    const i = W(a);
    for (let f = 0, d = i.length; f < d; f++) {
      const m = i[f];
      if (m) {
        const h = e(m, a, f, l, c);
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
  return k(n, (r, u, a, l, c) => {
    if (!e(r, u, a, l, c)) {
      const f = u.indexOf(r);
      if (u.splice(f, 1), l) {
        const d = typeof o == "string" ? l[o] : o(l), m = typeof o == "string" ? o : Object.keys(l).filter((h) => l[h] === d)[0];
        delete l[m];
      }
    }
  }, t);
}, je = (n = [], e, t = {}) => k(n, (s, r, u, a, l) => {
  r.sort(e);
}, t), we = (n, e, t, o, s = {}, r) => {
  const u = s.key || "id", a = s.children || "children";
  let l, c, i, f, d, m;
  const p = k(n, (v, E, F, _) => {
    v[u] == e && (l = v, i = E, c = F, m = _), v[u] == t && (f = typeof a == "string" ? v[a] : a(v) || v, d = v);
  }, s);
  return f = f ?? p, r && l && r(l, m, d, c), l != null && (i && i.splice(c, 1), f && (Array.isArray(f) ? f.splice(o, 0, l) : typeof a == "string" ? f[a] = [l] : a(f, [l]))), p;
}, Te = (n = [], e, t = {}) => (t.children, k(n, (s, r, u, a, l) => {
  if (a) {
    const [c, i = r.length] = e(a) || [];
    if (c)
      return r.splice(i, 0, ...c), !1;
  }
}, t)), Ne = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return k(n, (r, u) => {
    const [a, l = u.length] = e(r) || [], c = a && (typeof o == "string" ? a[o] : o(a));
    if (c && c.length > 0)
      return c.splice(l, 0, a), !1;
  }, t);
}, $e = (n, e, t = {}) => {
  let o;
  return k(n, (r) => {
    if (e(r))
      return o = r, !1;
  }, t), o;
}, De = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return Ee(n, (r) => !e.includes(r[o]), t);
}, qe = (n = [], e, t = {}) => {
  const o = t.key || "id";
  let s;
  return k(n, (u, a, l) => u[o] == e ? (a.splice(l, 1), s = u, !1) : !0, t), s;
}, G = (n = [], e = {}) => {
  const t = [];
  let o = [];
  return k(n, (r, u, a, l, c) => {
    if (l) {
      const i = o.indexOf(l), f = o.length;
      if (i == -1)
        o.push(l);
      else if (i < f - 1) {
        let d = f - 1 - i;
        for (; d-- > 0; )
          o.pop();
      }
    } else
      o = [];
    t.push([r, ...o]);
  }, e), t;
}, We = (n = [], e = {}) => {
  const t = e.children || "children";
  return G(n, e).filter((s) => {
    const r = typeof t == "string" ? s[0][t] : t(s[0]);
    return !r || r.length == 0;
  });
}, Ge = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return G(n, t).filter((r) => e.includes(r[0][o]));
}, Ue = (n = [], e, t = {}) => {
  const o = t.sourceChildren || t.children || "children", s = t.children || "children";
  return k(n, (u, a, l, c, i) => {
    const f = e(u, a, l, c, i);
    if (f == u && u != null)
      return;
    if (f == null) {
      a.splice(a.indexOf(u), 1);
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
    const t = g(e.required) ?? !1, o = g(e.trigger) ?? "blur", s = b(e, "message") ? I.getExpValue(g(e.message), e) : b(e, "label") ? I.getExpValue(j.required, e) : "", r = D(g(e.rules)) ? [...g(e.rules)] : [], u = Object.keys(j), a = [];
    let l = !1;
    return r.forEach((c) => {
      var m;
      const i = { ...g(c) }, f = ((m = u.filter((h) => b(i, h))) == null ? void 0 : m[0]) || "common", d = i.message || g(e.message) || b(e, "label") ? y(j, f) : "";
      i.message = d ? I.getExpValue(d, { ...e, ...i }) : "", b(i, "required") && (l = !0), b(i, "trigger") || (i.trigger = o), a.push(i);
    }), !l && t && a.push({ required: t, message: s, trigger: o }), delete e.required, delete e.trigger, delete e.message, a;
  }, n.buildElFormItemProps = (e) => {
    const t = g(y(e, "elFormItem")), o = D(t) ? t : L(t) ? Object.keys(t) : [], s = L(t) ? { ...t } : {};
    return be.forEach((r) => {
      b(e, r) && !o.includes(r) && (s[r] = y(e, r), P(e, r));
    }), P(e, "elFormItem"), s;
  }, n.isNeedElFormItem = (e) => {
    const t = g(e.elFormItem);
    return t != null && delete e.elFormItem, se(t) ? t : (t == null ? void 0 : t.enabled) ?? !0;
  }, n.validateFormField = (e, t) => !0, n.valideForm = (e, t, o = {}) => {
    const s = {
      children: (c) => {
        const i = c.children || c.cls;
        return i && Array.isArray(i) ? new Array().concat(i) : [];
      }
    }, r = {}, u = {};
    k(t, (c, i, f, d) => {
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
      l.validate(r, (i, f) => {
        const d = (i || []).length == 0, m = {};
        for (const h of i || []) {
          const p = h.field || "";
          m[p] ? m[p].push(h) : m[p] = [h];
        }
        c({ status: d, info: m, errors: i, fields: f });
      });
    });
  }, n.initProp = (e) => {
    var a, l, c;
    const t = (a = e == null ? void 0 : e.elem) == null ? void 0 : a.prop, o = ((c = (l = e == null ? void 0 : e.parent) == null ? void 0 : l.setupRes) == null ? void 0 : c.formProp) || [], s = typeof t == "function" ? t(e) : t, r = new Array().concat(o), u = s == null ? void 0 : s.replace(/^(\^|\~)/, "");
    return /^\^/.test(s) ? (r.length = 0, r.push(...u.split("."))) : /^~/.test(s) ? r.push(u) : s && r.push(...u.split(".")), r;
  }, n.bindModelValue = (e, t, o) => ({
    ":modelValue": q(() => {
      let s = t;
      for (const r of e)
        r.replace(/\W+/, ""), /^\^~/.test(r) ? s = t[r.replace(/\W+/, "")] : /^\^/.test(r) ? s = y(t, r.replace(/^\W/, "")) : /^~/.test(r) ? s = s[r.replace(/^\W/, "")] : s = y(s, r);
      return s;
    }),
    "onUpdate:modelValue": (s) => {
      if (e.length > 1) {
        let r = t;
        const u = e[e.length - 1];
        for (const a of e) {
          const l = a == u, c = a.replace(/\W+/, "");
          l || /^\^/.test(a) && b(r, c);
        }
      } else
        e.length == 1 && T(t, e[0], s);
      o && o(s);
    }
  }), n.SELF_FORM_NAMES = ["elsListForm"];
})(A || (A = {}));
const ye = A.buildRules, ke = A.buildElFormItemProps, Fe = A.isNeedElFormItem, ve = ({ tag: n, parent: e }) => n || (e && b(x, S(e.tagname)) ? x[S(e.tagname)] : le), _e = (n) => {
  const e = n.props, t = n.setupRes;
  if (t.isFormElem) {
    const o = t.formProp;
    if (P(e, "value"), t.isNeedElFormItem) {
      const s = {
        ...ke(e),
        prop: o
      };
      return s.rules = ye(s), V(ce, s, {
        default: () => I.defaultRender(n),
        label: () => [s.label, s != null && s.tip ? Se(s.tip) : ""]
      });
    }
  }
  return I.defaultRender(n);
}, Re = (n, e) => {
  const t = n.elem;
  if (!t)
    return;
  const { formProps: o, emitChange: s } = n.context, r = n.parent, u = S(e.tagname), a = S(r == null ? void 0 : r.tagname), l = A.initProp(n), c = l.join("."), i = { isFormElem: !1 };
  if (l.length > 0 && (i.formProp = l), Pe(t, u, a)) {
    if (i.isFormElem = !0, t.isFormElem !== !1) {
      o == null || o.add(c);
      const f = g(t.modelValue ?? t.value) ?? void 0, d = n.context, m = d == null ? void 0 : d.formData;
      y(m, l) == null && f != null && (T(m, l, f), s == null || s(l, f)), i.prop = {
        ":modelValue": q(() => y(m, l)),
        // ":modelValue": get(unref(formData), formProp),
        "onUpdate:modelValue": (h) => {
          T(m, l, h ?? f), s == null || s(l, h ?? f);
        }
      };
    }
    i.excludeKeys = ["value"], i.isFormItem = !0, i.isNeedElFormItem = Fe(t), K(() => {
      o == null || o.delete(c);
    });
  }
  return i;
}, Ae = (n, e, t) => {
  const o = g(n.size) || "default", s = B(), r = e.formData, u = oe(
    { validateOnRuleChange: !1, size: o },
    s.elForm || {}
  ), a = z(), l = {
    ...u,
    tag: ne,
    class: "w-full h-full",
    ref: (f) => a.value = f,
    cls: w(n, "column"),
    model: r
  }, c = (f, d) => {
    const m = y(g(a), f);
    if (m && ae(m))
      return m(...d);
  }, i = {
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
    context: i,
    formRef: a,
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
], x = {
  elCheckboxGroup: ie,
  elRadioGroup: ue,
  elSelect: fe
}, Pe = (n, e, t) => g(n.isFormElem) === !0 ? !0 : t && b(x, t) ? S(x[t].name) !== e : !(!A.SELF_FORM_NAMES.includes(e) && !Ie.includes(e)), Se = (n) => {
  if (n == null || !n)
    return;
  const o = { ...{
    placement: "top-start",
    effect: "dark"
  }, ...typeof n == "string" ? { content: n } : n };
  return V(de, o, { default: () => V(me, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => V(he) }) });
}, Oe = { class: "els-form" }, Ve = {
  name: "ElsForm"
}, Be = /* @__PURE__ */ Y({
  ...Ve,
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
    const o = t, s = n, r = w(s, "modelValue"), u = H(), a = typeof g(r) != "object", l = a ? C({}) : C(r.value);
    let c = !1;
    const i = () => {
      o("update:modelValue", l), c === !1 && (c = !0, setTimeout(() => {
        c = !1;
      }, 2e3));
    }, f = ge((E, F) => {
      a && (o("change", E.join("."), F), i());
    }, 200);
    N(() => {
      a && i();
    }), a && $(w(s, "modelValue"), (E) => {
      E != l && (c === !1 && E && Object.assign(l, E), c === !0 && (c = !1));
    });
    const d = C(/* @__PURE__ */ new Set()), m = { formProps: d, formData: l, emitChange: f }, p = (s.UIPluging || Ae)(s, m, { slots: u });
    if (s.autoClean) {
      let E = [];
      N(() => {
        E = Array.from(d);
      }), J(() => {
        E = [], d.clear();
      }), $(d, (F) => {
        const _ = Array.from(F), R = pe(E, _);
        R.length > 0 && (R.forEach((O) => P(g(l), O)), E = _, o("update:modelValue", g(l)));
      });
    }
    return e({ ...p, formProps: d, submit: (E = (F, _) => [F, _]) => (a && i(), new Promise(async (F, _) => {
      try {
        await p.validate();
        const R = W(g(l));
        for (const O of Array.from(d)) {
          const U = y(l, O), M = E(O, U);
          M[0] && M[1] == null && P(R, M[0]);
        }
        F(R);
      } catch (R) {
        console.error("表单校验失败！====>", R), _(R);
      }
    })) }), (E, F) => (X(), Z("div", Oe, [
      Q(g(ee), {
        elem: g(p).elem,
        params: E.params,
        context: g(p).context
      }, null, 8, ["elem", "params", "context"])
    ]));
  }
});
export {
  A as E,
  Be as _,
  Ne as a,
  G as b,
  De as c,
  qe as d,
  Ee as e,
  $e as f,
  Ge as g,
  We as h,
  k as i,
  we as j,
  Ue as k,
  je as l,
  Le as m,
  Te as t
};
