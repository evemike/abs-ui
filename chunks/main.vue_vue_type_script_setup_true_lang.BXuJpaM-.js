import { unref as g, computed as $, useAttrs as B, ref as z, toRef as w, h as x, onUnmounted as K, defineComponent as Y, useSlots as H, reactive as M, onMounted as T, watch as D, onBeforeUnmount as Q, openBlock as X, createElementBlock as Z, createVNode as J } from "vue";
import { a as A, E as ee } from "./main.s-trtcju.js";
import { aP as te, aQ as q, V as F, aR as N, g as y, aS as L, aT as I, aU as se, aV as re, am as W, C as oe, aW as ne, aX as S, y as le, aY as ae, aZ as ce, x as ie, as as ue, ad as fe, aD as de, o as me, aE as he, a_ as pe, aC as ge } from "./vendor.ufXmPQRI.js";
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
}, t), we = (n, e, t, o, s = {}, r) => {
  const u = s.key || "id", c = s.children || "children";
  let a, l, i, f, d, m;
  const p = b(n, (_, E, k, R) => {
    _[u] == e && (a = _, i = E, l = k, m = R), _[u] == t && (f = typeof c == "string" ? _[c] : c(_) || _, d = _);
  }, s);
  return f = f ?? p, r && a && r(a, m, d, l), a != null && (i && i.splice(l, 1), f && (Array.isArray(f) ? f.splice(o, 0, a) : typeof c == "string" ? f[c] = [a] : c(f, [a]))), p;
}, Te = (n = [], e, t = {}) => (t.children, b(n, (s, r, u, c, a) => {
  if (c) {
    const [l, i = r.length] = e(c) || [];
    if (l)
      return r.splice(i, 0, ...l), !1;
  }
}, t)), De = (n = [], e, t = {}) => {
  const o = t.children || "children";
  return b(n, (r, u) => {
    const [c, a = u.length] = e(r) || [], l = c && (typeof o == "string" ? c[o] : o(c));
    if (l && l.length > 0)
      return l.splice(a, 0, c), !1;
  }, t);
}, Ne = (n, e, t = {}) => {
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
var P;
((n) => {
  n.buildRules = (e) => {
    const t = g(e.required) ?? !1, o = g(e.trigger) ?? "blur", s = F(e, "message") ? A.getExpValue(g(e.message), e) : A.getExpValue(j.required, e), r = N(g(e.rules)) ? [...g(e.rules)] : [], u = Object.keys(j), c = [];
    let a = !1;
    return r.forEach((l) => {
      var m;
      const i = { ...g(l) }, f = ((m = u.filter((h) => F(i, h))) == null ? void 0 : m[0]) || "common", d = i.message || g(e.message) || y(j, f);
      i.message = A.getExpValue(d, { ...e, ...i }), F(i, "required") && (a = !0), F(i, "trigger") || (i.trigger = o), c.push(i);
    }), !a && t && c.push({ required: t, message: s, trigger: o }), delete e.required, delete e.trigger, delete e.message, c;
  }, n.buildElFormItemProps = (e) => {
    const t = g(y(e, "elFormItem")), o = N(t) ? t : L(t) ? Object.keys(t) : [], s = L(t) ? { ...t } : {};
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
})(P || (P = {}));
const be = P.buildRules, ke = P.buildElFormItemProps, Fe = P.isNeedElFormItem, _e = ({ tag: n, parent: e }) => n || (e && F(O, S(e.tagname)) ? O[S(e.tagname)] : le), Re = (n) => {
  const e = n.props, t = n.setupRes;
  if (t.isFormElem) {
    const o = t.formProp;
    if (I(e, "value"), t.isNeedElFormItem) {
      const s = {
        ...ke(e),
        prop: o
      };
      return s.rules = be(s), x(ae, s, {
        default: () => A.defaultRender(n),
        label: () => [s.label, s != null && s.tip ? Se(s.tip) : ""]
      });
    }
  }
  return A.defaultRender(n);
}, ve = (n, e) => {
  const t = n.elem;
  if (!t)
    return;
  const { formProps: o, emitChange: s } = n.context, r = n.parent, u = S(e.tagname), c = S(r == null ? void 0 : r.tagname), a = P.initProp(n), l = a.join("."), i = { isFormElem: !1 };
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
}, Pe = (n, e, t) => {
  const o = g(n.size) || "default", s = B(), r = e.formData, u = oe(
    { validateOnRuleChange: !1, size: o },
    s.elForm || {}
  ), c = z(), a = {
    ...u,
    tag: ne,
    class: "w-full h-full",
    ref: (f) => c.value = f,
    cls: w(n, "column"),
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
    tag: _e,
    setup: ve,
    render: Re,
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
}, Ae = [
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
}, Ie = (n, e, t) => g(n.isFormElem) === !0 ? !0 : t && F(O, t) ? S(O[t].name) !== e : !(!P.SELF_FORM_NAMES.includes(e) && !Ae.includes(e)), Se = (n) => {
  if (n == null || !n)
    return;
  const o = { ...{
    // icon:InfoFilled,
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
    const o = t, s = n, r = w(s, "modelValue"), u = H(), c = typeof g(r) != "object", a = c ? M({}) : M(r.value);
    let l = !1;
    const i = () => {
      o("update:modelValue", a), l === !1 && (l = !0, setTimeout(() => {
        l = !1;
      }, 2e3));
    }, f = ge((E, k) => {
      c && (o("change", E.join("."), k), i());
    }, 200);
    T(() => {
      c && i();
    }), c && D(w(s, "modelValue"), (E) => {
      E != a && (l === !1 && E && Object.assign(a, E), l === !0 && (l = !1));
    });
    const d = M(/* @__PURE__ */ new Set()), m = { formProps: d, formData: a, emitChange: f }, p = (s.UIPluging || Pe)(s, m, { slots: u });
    if (s.autoClean) {
      let E = [];
      T(() => {
        E = Array.from(d);
      }), Q(() => {
        E = [], d.clear();
      }), D(d, (k) => {
        const R = Array.from(k), v = pe(E, R);
        v.length > 0 && (v.forEach((V) => I(g(a), V)), E = R, o("update:modelValue", g(a)));
      });
    }
    return e({ ...p, formProps: d, submit: (E = (k, R) => [k, R]) => (c && i(), new Promise(async (k, R) => {
      try {
        await p.validate();
        const v = q(g(a));
        for (const V of Array.from(d)) {
          const U = y(a, V), C = E(V, U);
          C[0] && C[1] == null && I(v, C[0]);
        }
        k(v);
      } catch (v) {
        console.error("表单校验失败！====>", v), R(v);
      }
    })) }), (E, k) => (X(), Z("div", Ve, [
      J(g(ee), {
        elem: g(p).elem,
        params: E.params,
        context: g(p).context
      }, null, 8, ["elem", "params", "context"])
    ]));
  }
});
export {
  P as E,
  Be as _,
  De as a,
  G as b,
  $e as c,
  qe as d,
  Ee as e,
  Ne as f,
  Ge as g,
  We as h,
  b as i,
  we as j,
  Ue as k,
  je as l,
  Le as m,
  Te as t
};