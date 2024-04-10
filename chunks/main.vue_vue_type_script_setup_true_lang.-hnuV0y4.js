import { unref as g, computed as $, useAttrs as z, ref as B, toRef as T, h as V, onUnmounted as K, defineComponent as H, useSlots as Q, reactive as C, onMounted as w, watch as N, onBeforeUnmount as Y, openBlock as J, createElementBlock as X, createVNode as Z } from "vue";
import { a as P, E as ee } from "./main.3l7vHGlx.js";
import { aL as te, aM as q, V as F, aN as D, g as y, aO as L, aP as I, aQ as se, aR as re, ai as W, C as oe, aS as ne, aT as S, y as le, aU as ae, aV as ce, x as ie, ao as ue, ad as fe, az as de, o as me, aA as he, aW as pe, ay as ge } from "./vendor.BpDCHYT3.js";
const b = (n = [], e = () => {
}, t = {}) => {
  const s = t.isSource || !1 ? n : te(n), r = t.children || "children", u = (c, a, l) => {
    const i = q(c);
    for (let f = 0, d = i.length; f < d; f++) {
      const m = i[f];
      if (m) {
        const h = e(m, c, f, a, l);
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
  return b(n, (r) => {
    r && r[o] && (t[r[o]] = r);
  }, e), t;
}, Ee = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return b(n, (r, u, c, a, l) => {
    if (!e(r, u, c, a, l)) {
      const f = u.indexOf(r);
      if (u.splice(f, 1), a) {
        const d = typeof o == "string" ? a[o] : o(a), m = typeof o == "string" ? o : Object.keys(a).filter((h) => a[h] === d)[0];
        delete a[m];
      }
    }
  }, t);
}, je = (n = [], e, t = {}) => b(n, (s, r, u, c, a) => {
  r.sort(e);
}, t), Te = (n, e, t, o, s = {}, r) => {
  const u = s.key || "id", c = s.children || "children";
  let a, l, i, f, d, m;
  const p = b(n, (R, E, k, _) => {
    R[u] == e && (a = R, i = E, l = k, m = _), R[u] == t && (f = typeof c == "string" ? R[c] : c(R) || R, d = R);
  }, s);
  return f = f ?? p, r && a && r(a, m, d, l), a != null && (i && i.splice(l, 1), f && (Array.isArray(f) ? f.splice(o, 0, a) : typeof c == "string" ? f[c] = [a] : c(f, [a]))), p;
}, we = (n = [], e, t = {}) => (t.children, b(n, (s, r, u, c, a) => {
  if (c) {
    const [l, i = r.length] = e(c) || [];
    if (l)
      return r.splice(i, 0, ...l), !1;
  }
}, t)), Ne = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return b(n, (r, u) => {
    const [c, a = u.length] = e(r) || [], l = c && (typeof o == "string" ? c[o] : o(c));
    if (l && l.length > 0)
      return l.splice(a, 0, c), !1;
  }, t);
}, De = (n, e, t = {}) => {
  let o;
  return b(n, (r) => {
    if (e(r))
      return o = r, !1;
  }, t), o;
}, $e = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return Ee(n, (r) => !e.includes(r[o]), t);
}, qe = (n = [], e, t = {}) => {
  const o = t.key || "id";
  let s;
  return b(n, (u, c, a) => u[o] == e ? (c.splice(a, 1), s = u, !1) : !0, t), s;
}, G = (n = [], e = {}) => {
  const t = [];
  let o = [];
  return b(n, (r, u, c, a, l) => {
    if (a) {
      const i = o.indexOf(a), f = o.length;
      if (i == -1)
        o.push(a);
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
  return b(n, (u, c, a, l, i) => {
    const f = e(u, c, a, l, i);
    if (f == u && u != null)
      return;
    if (f == null) {
      c.splice(c.indexOf(u), 1);
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
    const t = g(e.required) ?? !1, o = g(e.trigger) ?? "blur", s = F(e, "message") ? P.getExpValue(g(e.message), e) : P.getExpValue(j.required, e), r = D(g(e.rules)) ? [...g(e.rules)] : [], u = Object.keys(j), c = [];
    let a = !1;
    return r.forEach((l) => {
      var m;
      const i = { ...g(l) }, f = ((m = u.filter((h) => F(i, h))) == null ? void 0 : m[0]) || "common", d = i.message || g(e.message) || y(j, f);
      i.message = P.getExpValue(d, { ...e, ...i }), F(i, "required") && (a = !0), F(i, "trigger") || (i.trigger = o), c.push(i);
    }), !a && t && c.push({ required: t, message: s, trigger: o }), delete e.required, delete e.trigger, delete e.message, c;
  }, n.buildElFormItemProps = (e) => {
    const t = g(y(e, "elFormItem")), o = D(t) ? t : L(t) ? Object.keys(t) : [], s = L(t) ? { ...t } : {};
    return ye.forEach((r) => {
      F(e, r) && !o.includes(r) && (s[r] = y(e, r), I(e, r));
    }), I(e, "elFormItem"), s;
  }, n.isNeedElFormItem = (e) => {
    const t = g(e.elFormItem);
    return se(t) ? t : (t == null ? void 0 : t.enabled) ?? !0;
  }, n.validateFormField = (e, t) => !0, n.valideForm = (e, t, o = {}) => {
    const s = {
      children: (l) => {
        const i = l.children || l.cls;
        return i && Array.isArray(i) ? new Array().concat(i) : [];
      }
    }, r = {}, u = {};
    b(t, (l, i, f, d) => {
      if (!L(l))
        return !0;
      if (d) {
        const m = `${d.$prop || d.prop || ""}.${l.prop || ""}`;
        l.$prop = m.split(".").filter((h) => h).join(".");
      } else
        l.prop && (l.$prop = l.prop);
      if (l.prop && (l.required || l.rules || F(o, l.$prop))) {
        const m = new Array().concat((0, n.buildRules)(l), y(o, l.$prop) || []);
        u[l.$prop] = m;
        const h = y(e, l.$prop) || l.value || l.defaultValue;
        r[l.$prop] = h;
      }
    }, s);
    const a = new re(u);
    return new Promise((l) => {
      a.validate(r, (i, f) => {
        const d = (i || []).length == 0, m = {};
        for (const h of i || []) {
          const p = h.field || "";
          m[p] ? m[p].push(h) : m[p] = [h];
        }
        l({ status: d, info: m, errors: i, fields: f });
      });
    });
  }, n.initProp = (e) => {
    var c, a, l;
    const t = (c = e == null ? void 0 : e.elem) == null ? void 0 : c.prop, o = ((l = (a = e == null ? void 0 : e.parent) == null ? void 0 : a.setupRes) == null ? void 0 : l.formProp) || [], s = typeof t == "function" ? t(e) : t, r = new Array().concat(o), u = s == null ? void 0 : s.replace(/^\W/, "");
    return /^\^/.test(s) ? (r.length = 0, r.push(...u.split("."))) : /^~/.test(s) ? r.push(u) : s && r.push(...u.split(".")), r;
  }, n.bindModelValue = (e, t, o) => ({
    ":modelValue": $(() => {
      let s = t;
      for (const r of e)
        r.replace(/\W+/, ""), /^\^~/.test(r) ? s = t[r.replace(/\W+/, "")] : /^\^/.test(r) ? s = y(t, r.replace(/^\W/, "")) : /^~/.test(r) ? s = s[r.replace(/^\W/, "")] : s = y(s, r);
      return s;
    }),
    "onUpdate:modelValue": (s) => {
      if (e.length > 1) {
        let r = t;
        const u = e[e.length - 1];
        for (const c of e) {
          const a = c == u, l = c.replace(/\W+/, "");
          a || /^\^/.test(c) && F(r, l);
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
      return s.rules = be(s), V(ae, s, {
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
  const { formProps: o, emitChange: s } = n.context, r = n.parent, u = S(e.tagname), c = S(r == null ? void 0 : r.tagname), a = A.initProp(n), l = a.join("."), i = { isFormElem: !1 };
  if (a.length > 0 && (i.formProp = a), Ie(t, u, c)) {
    if (i.isFormElem = !0, t.isFormElem !== !1) {
      o == null || o.add(l);
      const f = g(t.modelValue ?? t.value) ?? void 0, d = n.context, m = d == null ? void 0 : d.formData;
      y(m, a) == null && (s == null || s(a, f)), i.prop = {
        ":modelValue": $(() => y(m, a)),
        // ":modelValue": get(unref(formData), formProp),
        "onUpdate:modelValue": (h) => {
          W(m, a, h ?? f), s == null || s(a, h ?? f);
        }
      };
    }
    i.excludeKeys = ["value"], i.isFormItem = !0, i.isNeedElFormItem = Fe(t), K(() => {
      o == null || o.delete(l);
    });
  }
  return i;
}, Ae = (n, e, t) => {
  const o = g(n.size) || "default", s = z(), r = e.formData, u = oe(
    { validateOnRuleChange: !1, size: o },
    s.elForm || {}
  ), c = B(), a = {
    ...u,
    tag: ne,
    ref: (f) => c.value = f,
    cls: T(n, "column"),
    model: r
  }, l = (f, d) => {
    const m = y(g(c), f);
    if (m && ce(m))
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
    elem: a,
    context: i,
    formRef: c,
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
}, Ie = (n, e, t) => g(n.isFormElem) === !0 ? !0 : t && F(x, t) ? S(x[t].name) !== e : !(!A.SELF_FORM_NAMES.includes(e) && !Pe.includes(e)), Se = (n) => {
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
    const o = t, s = n, r = T(s, "modelValue"), u = Q(), c = typeof g(r) != "object", a = c ? C({}) : C(r.value);
    let l = !1;
    const i = () => {
      o("update:modelValue", a), l === !1 && (l = !0, setTimeout(() => {
        l = !1;
      }, 2e3));
    }, f = ge((E, k) => {
      c && (o("change", E.join("."), k), i());
    }, 200);
    w(() => {
      c && i();
    }), c && N(T(s, "modelValue"), (E) => {
      E != a && (l === !1 && E && Object.assign(a, E), l === !0 && (l = !1));
    });
    const d = C(/* @__PURE__ */ new Set()), m = { formProps: d, formData: a, emitChange: f }, p = (s.UIPluging || Ae)(s, m, { slots: u });
    if (s.autoClean) {
      let E = [];
      w(() => {
        E = Array.from(d);
      }), Y(() => {
        E = [], d.clear();
      }), N(d, (k) => {
        const _ = Array.from(k), v = pe(E, _);
        v.length > 0 && (v.forEach((O) => I(g(a), O)), E = _, o("update:modelValue", g(a)));
      });
    }
    return e({ ...p, formProps: d, submit: (E = (k, _) => [k, _]) => (c && i(), new Promise(async (k, _) => {
      try {
        await p.validate();
        const v = q(g(a));
        for (const O of Array.from(d)) {
          const U = y(a, O), M = E(O, U);
          M[0] && M[1] == null && I(v, M[0]);
        }
        k(v);
      } catch (v) {
        console.error("表单校验失败！====>", v), _(v);
      }
    })) }), (E, k) => (J(), X("div", Oe, [
      Z(g(ee), {
        elem: g(p).elem,
        params: E.params,
        context: g(p).context
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
  b as i,
  Te as j,
  Ue as k,
  je as l,
  Le as m,
  we as t
};
