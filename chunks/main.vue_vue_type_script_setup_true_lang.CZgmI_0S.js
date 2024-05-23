import { unref as g, computed as D, useAttrs as B, ref as K, toRef as w, h as x, onUnmounted as z, defineComponent as Y, useSlots as H, reactive as M, onMounted as T, watch as N, onBeforeUnmount as J, openBlock as X, createElementBlock as Z, createVNode as Q } from "vue";
import { a as I, E as ee } from "./main.BG0bARjT.js";
import { aC as te, aV as q, V as F, aW as $, g as y, aX as L, aY as P, aZ as se, a_ as re, as as W, C as oe, at as ne, a$ as S, y as le, au as ce, b0 as ae, x as ie, ap as ue, aI as fe, ay as de, o as me, aK as he, b1 as pe, aJ as ge } from "./vendor.DW1gWLiY.js";
const b = (n = [], e = () => {
}, t = {}) => {
  const s = t.isSource || !1 ? n : te(n), r = t.children || "children", u = (a, c, l) => {
    const i = q(a);
    for (let f = 0, d = i.length; f < d; f++) {
      const m = i[f];
      if (m) {
        const h = e(m, a, f, c, l);
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
  return b(n, (r, u, a, c, l) => {
    if (!e(r, u, a, c, l)) {
      const f = u.indexOf(r);
      if (u.splice(f, 1), c) {
        const d = typeof o == "string" ? c[o] : o(c), m = typeof o == "string" ? o : Object.keys(c).filter((h) => c[h] === d)[0];
        delete c[m];
      }
    }
  }, t);
}, je = (n = [], e, t = {}) => b(n, (s, r, u, a, c) => {
  r.sort(e);
}, t), we = (n, e, t, o, s = {}, r) => {
  const u = s.key || "id", a = s.children || "children";
  let c, l, i, f, d, m;
  const p = b(n, (_, E, k, v) => {
    _[u] == e && (c = _, i = E, l = k, m = v), _[u] == t && (f = typeof a == "string" ? _[a] : a(_) || _, d = _);
  }, s);
  return f = f ?? p, r && c && r(c, m, d, l), c != null && (i && i.splice(l, 1), f && (Array.isArray(f) ? f.splice(o, 0, c) : typeof a == "string" ? f[a] = [c] : a(f, [c]))), p;
}, Te = (n = [], e, t = {}) => (t.children, b(n, (s, r, u, a, c) => {
  if (a) {
    const [l, i = r.length] = e(a) || [];
    if (l)
      return r.splice(i, 0, ...l), !1;
  }
}, t)), Ne = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return b(n, (r, u) => {
    const [a, c = u.length] = e(r) || [], l = a && (typeof o == "string" ? a[o] : o(a));
    if (l && l.length > 0)
      return l.splice(c, 0, a), !1;
  }, t);
}, $e = (n, e, t = {}) => {
  let o;
  return b(n, (r) => {
    if (e(r))
      return o = r, !1;
  }, t), o;
}, De = (n = [], e = [], t = {}) => {
  const o = t.key || "id";
  return Ee(n, (r) => !e.includes(r[o]), t);
}, qe = (n = [], e, t = {}) => {
  const o = t.key || "id";
  let s;
  return b(n, (u, a, c) => u[o] == e ? (a.splice(c, 1), s = u, !1) : !0, t), s;
}, G = (n = [], e = {}) => {
  const t = [];
  let o = [];
  return b(n, (r, u, a, c, l) => {
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
  return b(n, (u, a, c, l, i) => {
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
    const t = g(e.required) ?? !1, o = g(e.trigger) ?? "blur", s = F(e, "message") ? I.getExpValue(g(e.message), e) : I.getExpValue(j.required, e), r = $(g(e.rules)) ? [...g(e.rules)] : [], u = Object.keys(j), a = [];
    let c = !1;
    return r.forEach((l) => {
      var m;
      const i = { ...g(l) }, f = ((m = u.filter((h) => F(i, h))) == null ? void 0 : m[0]) || "common", d = i.message || g(e.message) || y(j, f);
      i.message = I.getExpValue(d, { ...e, ...i }), F(i, "required") && (c = !0), F(i, "trigger") || (i.trigger = o), a.push(i);
    }), !c && t && a.push({ required: t, message: s, trigger: o }), delete e.required, delete e.trigger, delete e.message, a;
  }, n.buildElFormItemProps = (e) => {
    const t = g(y(e, "elFormItem")), o = $(t) ? t : L(t) ? Object.keys(t) : [], s = L(t) ? { ...t } : {};
    return ye.forEach((r) => {
      F(e, r) && !o.includes(r) && (s[r] = y(e, r), P(e, r));
    }), P(e, "elFormItem"), s;
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
    const c = new re(u);
    return new Promise((l) => {
      c.validate(r, (i, f) => {
        const d = (i || []).length == 0, m = {};
        for (const h of i || []) {
          const p = h.field || "";
          m[p] ? m[p].push(h) : m[p] = [h];
        }
        l({ status: d, info: m, errors: i, fields: f });
      });
    });
  }, n.initProp = (e) => {
    var a, c, l;
    const t = (a = e == null ? void 0 : e.elem) == null ? void 0 : a.prop, o = ((l = (c = e == null ? void 0 : e.parent) == null ? void 0 : c.setupRes) == null ? void 0 : l.formProp) || [], s = typeof t == "function" ? t(e) : t, r = new Array().concat(o), u = s == null ? void 0 : s.replace(/^(\^|\~)/, "");
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
          const c = a == u, l = a.replace(/\W+/, "");
          c || /^\^/.test(a) && F(r, l);
        }
      } else
        e.length == 1 && W(t, e[0], s);
      o && o(s);
    }
  }), n.SELF_FORM_NAMES = ["elsListForm"];
})(A || (A = {}));
const be = A.buildRules, ke = A.buildElFormItemProps, Fe = A.isNeedElFormItem, _e = ({ tag: n, parent: e }) => n || (e && F(O, S(e.tagname)) ? O[S(e.tagname)] : le), ve = (n) => {
  const e = n.props, t = n.setupRes;
  if (t.isFormElem) {
    const o = t.formProp;
    if (P(e, "value"), t.isNeedElFormItem) {
      const s = {
        ...ke(e),
        prop: o
      };
      return s.rules = be(s), x(ce, s, {
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
  const { formProps: o, emitChange: s } = n.context, r = n.parent, u = S(e.tagname), a = S(r == null ? void 0 : r.tagname), c = A.initProp(n), l = c.join("."), i = { isFormElem: !1 };
  if (c.length > 0 && (i.formProp = c), Pe(t, u, a)) {
    if (i.isFormElem = !0, t.isFormElem !== !1) {
      o == null || o.add(l);
      const f = g(t.modelValue ?? t.value) ?? void 0, d = n.context, m = d == null ? void 0 : d.formData;
      y(m, c) == null && (s == null || s(c, f)), i.prop = {
        ":modelValue": D(() => y(m, c)),
        // ":modelValue": get(unref(formData), formProp),
        "onUpdate:modelValue": (h) => {
          W(m, c, h ?? f), s == null || s(c, h ?? f);
        }
      };
    }
    i.excludeKeys = ["value"], i.isFormItem = !0, i.isNeedElFormItem = Fe(t), z(() => {
      o == null || o.delete(l);
    });
  }
  return i;
}, Ae = (n, e, t) => {
  const o = g(n.size) || "default", s = B(), r = e.formData, u = oe(
    { validateOnRuleChange: !1, size: o },
    s.elForm || {}
  ), a = K(), c = {
    ...u,
    tag: ne,
    class: "w-full h-full",
    ref: (f) => a.value = f,
    cls: w(n, "column"),
    model: r
  }, l = (f, d) => {
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
    elem: c,
    context: i,
    formRef: a,
    formApi: l,
    refresh: () => {
    },
    validate: (...f) => l("validate", f)
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
], O = {
  elCheckboxGroup: ie,
  elRadioGroup: ue,
  elSelect: fe
}, Pe = (n, e, t) => g(n.isFormElem) === !0 ? !0 : t && F(O, t) ? S(O[t].name) !== e : !(!A.SELF_FORM_NAMES.includes(e) && !Ie.includes(e)), Se = (n) => {
  if (n == null || !n)
    return;
  const o = { ...{
    placement: "top-start",
    effect: "dark"
  }, ...typeof n == "string" ? { content: n } : n };
  return x(de, o, { default: () => x(me, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => x(he) }) });
}, Ve = { class: "els-form" }, xe = {
  name: "ElsForm"
}, Be = /* @__PURE__ */ Y({
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
    const o = t, s = n, r = w(s, "modelValue"), u = H(), a = typeof g(r) != "object", c = a ? M({}) : M(r.value);
    let l = !1;
    const i = () => {
      o("update:modelValue", c), l === !1 && (l = !0, setTimeout(() => {
        l = !1;
      }, 2e3));
    }, f = ge((E, k) => {
      a && (o("change", E.join("."), k), i());
    }, 200);
    T(() => {
      a && i();
    }), a && N(w(s, "modelValue"), (E) => {
      E != c && (l === !1 && E && Object.assign(c, E), l === !0 && (l = !1));
    });
    const d = M(/* @__PURE__ */ new Set()), m = { formProps: d, formData: c, emitChange: f }, p = (s.UIPluging || Ae)(s, m, { slots: u });
    if (s.autoClean) {
      let E = [];
      T(() => {
        E = Array.from(d);
      }), J(() => {
        E = [], d.clear();
      }), N(d, (k) => {
        const v = Array.from(k), R = pe(E, v);
        R.length > 0 && (R.forEach((V) => P(g(c), V)), E = v, o("update:modelValue", g(c)));
      });
    }
    return e({ ...p, formProps: d, submit: (E = (k, v) => [k, v]) => (a && i(), new Promise(async (k, v) => {
      try {
        await p.validate();
        const R = q(g(c));
        for (const V of Array.from(d)) {
          const U = y(c, V), C = E(V, U);
          C[0] && C[1] == null && P(R, C[0]);
        }
        k(R);
      } catch (R) {
        console.error("表单校验失败！====>", R), v(R);
      }
    })) }), (E, k) => (X(), Z("div", Ve, [
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
  b as i,
  we as j,
  Ue as k,
  je as l,
  Le as m,
  Te as t
};
