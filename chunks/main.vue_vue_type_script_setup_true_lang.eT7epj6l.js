import { unref as p, computed as $, useAttrs as z, ref as B, toRef as T, h as V, onUnmounted as K, defineComponent as H, useSlots as Q, reactive as C, onMounted as w, watch as N, onBeforeUnmount as Y, openBlock as J, createElementBlock as X, createVNode as Z } from "vue";
import { a as P, E as ee } from "./main.3l7vHGlx.js";
import { aL as te, aM as q, V as F, aN as D, g as b, aO as L, aP as I, aQ as se, aR as re, ai as W, C as oe, aS as ne, aT as S, y as le, aU as ce, aV as ae, x as ie, ao as ue, ad as fe, az as de, o as me, aA as he, aW as pe, ay as ge } from "./vendor.BpDCHYT3.js";
const k = (n = [], e = () => {
}, t = {}) => {
  const s = t.isSource || !1 ? n : te(n), r = t.children || "children", u = (a, c, l) => {
    const i = q(a);
    for (let f = 0, d = i.length; f < d; f++) {
      const m = i[f];
      if (m) {
        const g = e(m, a, f, c, l);
        if (g === !1)
          break;
        if (g === !0)
          continue;
        const h = typeof r == "string" ? m[r] : r(m);
        h && h.length > 0 && u(h, m, f);
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
  return k(n, (r, u, a, c, l) => {
    if (!e(r, u, a, c, l)) {
      const f = u.indexOf(r);
      if (u.splice(f, 1), c) {
        const d = typeof o == "string" ? c[o] : o(c), m = typeof o == "string" ? o : Object.keys(c).filter((g) => c[g] === d)[0];
        delete c[m];
      }
    }
  }, t);
}, je = (n = [], e, t = {}) => k(n, (s, r, u, a, c) => {
  r.sort(e);
}, t), Te = (n, e, t, o, s = {}, r) => {
  const u = s.key || "id", a = s.children || "children";
  let c, l, i, f, d, m;
  const h = k(n, (R, E, y, _) => {
    R[u] == e && (c = R, i = E, l = y, m = _), R[u] == t && (f = typeof a == "string" ? R[a] : a(R) || R, d = R);
  }, s);
  return f = f ?? h, r && c && r(c, m, d, l), c != null && (i && i.splice(l, 1), f && (Array.isArray(f) ? f.splice(o, 0, c) : typeof a == "string" ? f[a] = [c] : a(f, [c]))), h;
}, we = (n = [], e, t = {}) => (t.children, k(n, (s, r, u, a, c) => {
  if (a) {
    const [l, i = r.length] = e(a) || [];
    if (l)
      return r.splice(i, 0, ...l), !1;
  }
}, t)), Ne = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return k(n, (r, u) => {
    const [a, c = u.length] = e(r) || [], l = a && (typeof o == "string" ? a[o] : o(a));
    if (l && l.length > 0)
      return l.splice(c, 0, a), !1;
  }, t);
}, De = (n, e, t = {}) => {
  let o;
  return k(n, (r) => {
    if (e(r))
      return o = r, !1;
  }, t), o;
}, $e = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return Ee(n, (r) => !e.includes(r[o]), t);
}, qe = (n = [], e, t = {}) => {
  const o = t.key || "id";
  let s;
  return k(n, (u, a, c) => u[o] == e ? (a.splice(c, 1), s = u, !1) : !0, t), s;
}, G = (n = [], e = {}) => {
  const t = [];
  let o = [];
  return k(n, (r, u, a, c, l) => {
    if (c) {
      const i = o.indexOf(c), f = o.length;
      if (i == -1)
        o.push(c);
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
  return k(n, (u, a, c, l, i) => {
    const f = e(u, a, c, l, i);
    if (f == u && u != null)
      return;
    if (f == null) {
      a.splice(a.indexOf(u), 1);
      return;
    }
    const d = typeof o == "string" ? u[o] : o(u);
    if (!d || d.length == 0)
      return;
    Object.keys(u).forEach((h) => delete u[h]), Object.keys(f).forEach((h) => u[h] = f[h]), typeof s == "string" ? f[s] || (u[s] = d) : s(u, d);
  }, t);
}, j = {
  required: "请输入 [ {{label}} ] ！",
  pattern: "请按照要求输入正确的 [ {{label}} ] 格式! 格式：{{ pattern }}",
  common: "请输入正确的 [ {{label}} ] 格式!"
}, ye = [
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
    const t = p(e.required) ?? !1, o = p(e.trigger) ?? "blur", s = F(e, "message") ? P.getExpValue(p(e.message), e) : P.getExpValue(j.required, e), r = D(p(e.rules)) ? [...p(e.rules)] : [], u = Object.keys(j), a = [];
    let c = !1;
    return r.forEach((l) => {
      var m;
      const i = { ...p(l) }, f = ((m = u.filter((g) => F(i, g))) == null ? void 0 : m[0]) || "common", d = i.message || p(e.message) || b(j, f);
      i.message = P.getExpValue(d, { ...e, ...i }), F(i, "required") && (c = !0), F(i, "trigger") || (i.trigger = o), a.push(i);
    }), !c && t && a.push({ required: t, message: s, trigger: o }), delete e.required, delete e.trigger, delete e.message, a;
  }, n.buildElFormItemProps = (e) => {
    const t = p(b(e, "elFormItem")), o = D(t) ? t : L(t) ? Object.keys(t) : [], s = L(t) ? { ...t } : {};
    return ye.forEach((r) => {
      F(e, r) && !o.includes(r) && (s[r] = b(e, r), I(e, r));
    }), I(e, "elFormItem"), s;
  }, n.isNeedElFormItem = (e) => {
    const t = p(e.elFormItem);
    return se(t) ? t : (t == null ? void 0 : t.enabled) ?? !0;
  }, n.validateFormField = (e, t) => !0, n.valideForm = (e, t, o = {}) => {
    const s = {
      children: (l) => {
        const i = l.children || l.cls;
        return i && Array.isArray(i) ? new Array().concat(i) : [];
      }
    }, r = {}, u = {};
    k(t, (l, i, f, d) => {
      if (!L(l))
        return !0;
      if (d) {
        const m = `${d.$prop || d.prop || ""}.${l.prop || ""}`;
        l.$prop = m.split(".").filter((g) => g).join(".");
      } else
        l.prop && (l.$prop = l.prop);
      if (l.prop && (l.required || l.rules || F(o, l.$prop))) {
        const m = new Array().concat((0, n.buildRules)(l), b(o, l.$prop) || []);
        u[l.$prop] = m;
        const g = b(e, l.$prop) || l.value || l.defaultValue;
        r[l.$prop] = g;
      }
    }, s);
    const c = new re(u);
    return new Promise((l) => {
      c.validate(r, (i, f) => {
        const d = (i || []).length == 0, m = {};
        for (const g of i || []) {
          const h = g.field || "";
          m[h] ? m[h].push(g) : m[h] = [g];
        }
        l({ status: d, info: m, errors: i, fields: f });
      });
    });
  }, n.initProp = (e) => {
    var a, c, l;
    const t = (a = e == null ? void 0 : e.elem) == null ? void 0 : a.prop, o = ((l = (c = e == null ? void 0 : e.parent) == null ? void 0 : c.setupRes) == null ? void 0 : l.formProp) || [], s = typeof t == "function" ? t(e) : t, r = new Array().concat(o), u = s == null ? void 0 : s.replace(/\W/, "");
    return /^\^/.test(s) ? (r.length = 0, r.push(...u.split("."))) : /^~/.test(s) ? r.push(u) : s && r.push(u.split(".")), r;
  }, n.bindModelValue = (e, t, o) => ({
    ":modelValue": $(() => {
      let s = t;
      for (const r of e)
        r.replace(/\W+/, ""), /^\^~/.test(r) ? s = t[r.replace(/\W+/, "")] : /^\^/.test(r) ? s = b(t, r.replace(/^\W/, "")) : /^~/.test(r) ? s = s[r.replace(/^\W/, "")] : s = b(s, r);
      return s;
    }),
    "onUpdate:modelValue": (s) => {
      if (e.length > 1) {
        let r = t;
        const u = e[e.length - 1];
        for (const a of e) {
          const c = a == u, l = a.replace(/\W+/, "");
          c || /^\^/.test(a) && F(r, l);
        }
      } else
        e.length == 1 && W(t, e[0], s);
      o && o(s);
    }
  }), n.SELF_FORM_NAMES = ["elsListForm"];
})(A || (A = {}));
const be = A.buildRules, ke = A.buildElFormItemProps, Fe = A.isNeedElFormItem, Re = ({ tag: n, parent: e }) => n || (e && F(x, S(e.tagname)) ? x[S(e.tagname)] : le), _e = (n) => {
  const e = n.props, t = n.setupRes;
  if (t.isFormElem) {
    const o = t.formProp;
    if (I(e, "value"), t.isNeedElFormItem) {
      const s = {
        ...ke(e),
        prop: o
      };
      return s.rules = be(s), V(ce, s, {
        default: () => P.defaultRender(n),
        label: () => [s.label, s != null && s.tip ? Se(s.tip) : ""]
      });
    }
  }
  return P.defaultRender(n);
}, ve = (n, e) => {
  const t = n.elem;
  if (!t)
    return;
  const { formProps: o, emitChange: s } = n.context, r = n.parent, u = S(e.tagname), a = S(r == null ? void 0 : r.tagname), c = A.initProp(n), l = c.join("."), i = { isFormElem: !1 };
  if (c.length > 0 && (i.formProp = c), Ie(t, u, a)) {
    if (i.isFormElem = !0, t.isFormElem !== !1) {
      o == null || o.add(l);
      const f = p(t.modelValue ?? t.value) ?? void 0, d = n.context, m = d == null ? void 0 : d.formData;
      b(m, c) == null && (s == null || s(c, f)), i.prop = {
        ":modelValue": $(() => b(m, c)),
        // ":modelValue": get(unref(formData), formProp),
        "onUpdate:modelValue": (g) => {
          s == null || s(c, g ?? f);
        }
      };
    }
    i.excludeKeys = ["value"], i.isFormItem = !0, i.isNeedElFormItem = Fe(t), K(() => {
      o == null || o.delete(l);
    });
  }
  return i;
}, Ae = (n, e, t) => {
  const o = p(n.size) || "default", s = z(), r = e.formData, u = oe(
    { validateOnRuleChange: !1, size: o },
    s.elForm || {}
  ), a = B(), c = {
    ...u,
    tag: ne,
    ref: (f) => a.value = f,
    cls: T(n, "column"),
    model: r
  }, l = (f, d) => {
    const m = b(p(a), f);
    if (m && ae(m))
      return m(...d);
  }, i = {
    ...t,
    formData: r,
    formProps: e.formProps,
    emitChange: e.emitChange,
    tag: Re,
    setup: ve,
    render: _e,
    excludeKeys: ["isFormElem", "isNeedElFormItem"],
    params: {
      ...t,
      formData: r,
      formProps: e.formProps
    }
  };
  return {
    elem: c,
    context: i,
    formRef: a,
    formApi: l,
    refresh: () => {
    },
    validate: (...f) => l("validate", f)
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
], x = {
  elCheckboxGroup: ie,
  elRadioGroup: ue,
  elSelect: fe
}, Ie = (n, e, t) => p(n.isFormElem) === !0 ? !0 : t && F(x, t) ? S(x[t].name) !== e : !(!A.SELF_FORM_NAMES.includes(e) && !Pe.includes(e)), Se = (n) => {
  if (n == null || !n)
    return;
  const o = { ...{
    // icon:InfoFilled,
    placement: "top-start",
    effect: "dark"
  }, ...typeof n == "string" ? { content: n } : n };
  return V(de, o, { default: () => V(me, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => V(he) }) });
}, Oe = { class: "els-form" }, Ve = {
  name: "ElsForm"
}, ze = /* @__PURE__ */ H({
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
    const o = t, s = n, r = T(s, "modelValue"), u = Q(), a = typeof p(r) != "object", c = a ? C({}) : C(r.value);
    let l = !1;
    const i = () => {
      o("update:modelValue", c), l === !1 && (l = !0, setTimeout(() => {
        l = !1;
      }, 2e3));
    }, f = ge((E, y) => {
      W(c, E, y), a && (o("change", E.join("."), y), i());
    }, 200);
    w(() => {
      a && i();
    }), a && N(T(s, "modelValue"), (E) => {
      E != c && (l === !1 && E && Object.assign(c, E), l === !0 && (l = !1));
    });
    const d = C(/* @__PURE__ */ new Set()), m = { formProps: d, formData: c, emitChange: f }, h = (s.UIPluging || Ae)(s, m, { slots: u });
    if (s.autoClean) {
      let E = [];
      w(() => {
        E = Array.from(d);
      }), Y(() => {
        E = [], d.clear();
      }), N(d, (y) => {
        const _ = Array.from(y), v = pe(E, _);
        v.length > 0 && (v.forEach((O) => I(p(c), O)), E = _, o("update:modelValue", p(c)));
      });
    }
    return e({ ...h, formProps: d, submit: (E = (y, _) => [y, _]) => (a && i(), new Promise(async (y, _) => {
      try {
        await h.validate();
        const v = q(p(c));
        for (const O of Array.from(d)) {
          const U = b(c, O), M = E(O, U);
          M[0] && M[1] == null && I(v, M[0]);
        }
        y(v);
      } catch (v) {
        console.error("表单校验失败！====>", v), _(v);
      }
    })) }), (E, y) => (J(), X("div", Oe, [
      Z(p(ee), {
        elem: p(h).elem,
        params: E.params,
        context: p(h).context
      }, null, 8, ["elem", "params", "context"])
    ]));
  }
});
export {
  A as E,
  ze as _,
  Ne as a,
  G as b,
  $e as c,
  qe as d,
  Ee as e,
  De as f,
  Ge as g,
  We as h,
  k as i,
  Te as j,
  Ue as k,
  je as l,
  Le as m,
  we as t
};
