import { unref as g, computed as D, useAttrs as U, ref as K, toRef as w, h as O, onUnmounted as z, defineComponent as Y, useSlots as H, reactive as C, onMounted as T, watch as $, onBeforeUnmount as Z, openBlock as J, createElementBlock as Q, createVNode as X } from "vue";
import { a as P, E as ee } from "./main.BrWO7REl.js";
import { aF as te, aY as G, a3 as b, i as q, A as y, aZ as L, a_ as I, a$ as se, b0 as re, ax as N, m as oe, n as ne, b1 as S, q as le, o as ce, b2 as ae, l as ie, d as ue, aL as fe, aB as de, K as me, aN as he, b3 as pe, aM as ge } from "./vendor.4pP_Prrf.js";
const k = (n = [], e = () => {
}, t = {}) => {
  const s = t.isSource || !1 ? n : te(n), r = t.children || "children", u = (a, l, c) => {
    const i = G(a);
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
  const p = k(n, (_, E, F, v) => {
    _[u] == e && (l = _, i = E, c = F, m = v), _[u] == t && (f = typeof a == "string" ? _[a] : a(_) || _, d = _);
  }, s);
  return f = f ?? p, r && l && r(l, m, d, c), l != null && (i && i.splice(c, 1), f && (Array.isArray(f) ? f.splice(o, 0, l) : typeof a == "string" ? f[a] = [l] : a(f, [l]))), p;
}, Ne = (n = [], e, t = {}) => (t.children, k(n, (s, r, u, a, l) => {
  if (a) {
    const [c, i = r.length] = e(a) || [];
    if (c)
      return r.splice(i, 0, ...c), !1;
  }
}, t)), Te = (n = [], e, t = {}) => {
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
}, qe = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return Ee(n, (r) => !e.includes(r[o]), t);
}, De = (n = [], e, t = {}) => {
  const o = t.key || "id";
  let s;
  return k(n, (u, a, l) => u[o] == e ? (a.splice(l, 1), s = u, !1) : !0, t), s;
}, W = (n = [], e = {}) => {
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
    const t = g(e.required) ?? !1, o = g(e.trigger) ?? "blur", s = b(e, "message") ? P.getExpValue(g(e.message), e) : b(e, "label") ? P.getExpValue(j.required, e) : "", r = q(g(e.rules)) ? [...g(e.rules)] : [], u = Object.keys(j), a = [];
    let l = !1;
    return r.forEach((c) => {
      var m;
      const i = { ...g(c) }, f = ((m = u.filter((h) => b(i, h))) == null ? void 0 : m[0]) || "common", d = i.message || g(e.message) || b(e, "label") ? y(j, f) : "";
      i.message = d ? P.getExpValue(d, { ...e, ...i }) : "", b(i, "required") && (l = !0), b(i, "trigger") || (i.trigger = o), a.push(i);
    }), !l && t && a.push({ required: t, message: s, trigger: o }), delete e.required, delete e.trigger, delete e.message, a;
  }, n.buildElFormItemProps = (e) => {
    const t = g(y(e, "elFormItem")), o = q(t) ? t : L(t) ? Object.keys(t) : [], s = L(t) ? { ...t } : {};
    return be.forEach((r) => {
      b(e, r) && !o.includes(r) && (s[r] = y(e, r), I(e, r));
    }), I(e, "elFormItem"), s;
  }, n.isNeedElFormItem = (e) => {
    const t = g(e.elFormItem);
    return se(t) ? t : (t == null ? void 0 : t.enabled) ?? !0;
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
        for (const a of e) {
          const l = a == u, c = a.replace(/\W+/, "");
          l || /^\^/.test(a) && b(r, c);
        }
      } else
        e.length == 1 && N(t, e[0], s);
      o && o(s);
    }
  }), n.SELF_FORM_NAMES = ["elsListForm"];
})(A || (A = {}));
const ye = A.buildRules, ke = A.buildElFormItemProps, Fe = A.isNeedElFormItem, _e = ({ tag: n, parent: e }) => n || (e && b(V, S(e.tagname)) ? V[S(e.tagname)] : le), ve = (n) => {
  const e = n.props, t = n.setupRes;
  if (t.isFormElem) {
    const o = t.formProp;
    if (I(e, "value"), t.isNeedElFormItem) {
      const s = {
        ...ke(e),
        prop: o
      };
      return s.rules = ye(s), O(ce, s, {
        default: () => P.defaultRender(n),
        label: () => [s.label, s != null && s.tip ? Se(s.tip) : ""]
      });
    }
  }
  return P.defaultRender(n);
}, Re = (n, e) => {
  const t = n.elem;
  if (!t)
    return;
  const { formProps: o, emitChange: s } = n.context, r = n.parent, u = S(e.tagname), a = S(r == null ? void 0 : r.tagname), l = A.initProp(n), c = l.join("."), i = { isFormElem: !1 };
  if (l.length > 0 && (i.formProp = l), Ie(t, u, a)) {
    if (i.isFormElem = !0, t.isFormElem !== !1) {
      o == null || o.add(c);
      const f = g(t.modelValue ?? t.value) ?? void 0, d = n.context, m = d == null ? void 0 : d.formData;
      y(m, l) == null && f != null && (N(m, l, f), s == null || s(l, f)), i.prop = {
        ":modelValue": D(() => y(m, l)),
        // ":modelValue": get(unref(formData), formProp),
        "onUpdate:modelValue": (h) => {
          N(m, l, h ?? f), s == null || s(l, h ?? f);
        }
      };
    }
    i.excludeKeys = ["value"], i.isFormItem = !0, i.isNeedElFormItem = Fe(t), z(() => {
      o == null || o.delete(c);
    });
  }
  return i;
}, Ae = (n, e, t) => {
  const o = g(n.size) || "default", s = U(), r = e.formData, u = oe(
    { validateOnRuleChange: !1, size: o },
    s.elForm || {}
  ), a = K(), l = {
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
    tag: _e,
    setup: Re,
    render: ve,
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
}, Pe = [
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
  elCheckboxGroup: ie,
  elRadioGroup: ue,
  elSelect: fe
}, Ie = (n, e, t) => g(n.isFormElem) === !0 ? !0 : t && b(V, t) ? S(V[t].name) !== e : !(!A.SELF_FORM_NAMES.includes(e) && !Pe.includes(e)), Se = (n) => {
  if (n == null || !n)
    return;
  const o = { ...{
    placement: "top-start",
    effect: "dark"
  }, ...typeof n == "string" ? { content: n } : n };
  return O(de, o, { default: () => O(me, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => O(he) }) });
}, xe = { class: "els-form" }, Oe = {
  name: "ElsForm"
}, Ue = /* @__PURE__ */ Y({
  ...Oe,
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
      console.log("emitChange ==> "), a && (o("change", E.join("."), F), i());
    }, 200);
    T(() => {
      a && i();
    }), a && $(w(s, "modelValue"), (E) => {
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
        const v = Array.from(F), R = pe(E, v);
        R.length > 0 && (R.forEach((x) => I(g(l), x)), E = v, o("update:modelValue", g(l)));
      });
    }
    return e({ ...p, formProps: d, submit: (E = (F, v) => [F, v]) => (a && i(), new Promise(async (F, v) => {
      try {
        await p.validate();
        const R = G(g(l));
        for (const x of Array.from(d)) {
          const B = y(l, x), M = E(x, B);
          M[0] && M[1] == null && I(R, M[0]);
        }
        F(R);
      } catch (R) {
        console.error("表单校验失败！====>", R), v(R);
      }
    })) }), (E, F) => (J(), Q("div", xe, [
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