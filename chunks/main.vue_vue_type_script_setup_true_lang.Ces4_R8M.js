import { unref as E, useAttrs as G, ref as B, toRef as T, h as x, computed as z, onUnmounted as K, defineComponent as W, useSlots as H, reactive as M, onMounted as j, watch as w, onBeforeUnmount as Q, openBlock as Y, createElementBlock as J, createVNode as X } from "vue";
import { a as P, E as Z } from "./main.3l7vHGlx.js";
import { aL as ee, aM as $, V as R, aN as N, g as b, aO as D, aP as I, aQ as te, aR as se, C as re, aS as oe, aT as S, y as ne, aU as le, aV as ae, x as ce, ao as ie, ad as ue, az as fe, o as de, aA as me, aW as pe, ay as he, ai as Ee } from "./vendor.BpDCHYT3.js";
const F = (s = [], t = () => {
}, e = {}) => {
  const n = e.isSource || !1 ? s : ee(s), o = e.children || "children", u = (c, a, l) => {
    const i = $(c);
    for (let f = 0, m = i.length; f < m; f++) {
      const d = i[f];
      if (d) {
        const p = t(d, c, f, a, l);
        if (p === !1)
          break;
        if (p === !0)
          continue;
        const h = typeof o == "string" ? d[o] : o(d);
        h && h.length > 0 && u(h, d, f);
      }
    }
  };
  return u(n, void 0, void 0), n;
}, De = (s, t = {}) => {
  const e = {}, r = t.key || "id";
  return F(s, (o) => {
    o && o[r] && (e[o[r]] = o);
  }, t), e;
}, ge = (s = [], t, e = {}) => {
  const r = e.children || "children";
  return F(s, (o, u, c, a, l) => {
    if (!t(o, u, c, a, l)) {
      const f = u.indexOf(o);
      if (u.splice(f, 1), a) {
        const m = typeof r == "string" ? a[r] : r(a), d = typeof r == "string" ? r : Object.keys(a).filter((p) => a[p] === m)[0];
        delete a[d];
      }
    }
  }, e);
}, Le = (s = [], t, e = {}) => F(s, (n, o, u, c, a) => {
  o.sort(t);
}, e), Te = (s, t, e, r, n = {}, o) => {
  const u = n.key || "id", c = n.children || "children";
  let a, l, i, f, m, d;
  const h = F(s, (k, g, y, v) => {
    k[u] == t && (a = k, i = g, l = y, d = v), k[u] == e && (f = typeof c == "string" ? k[c] : c(k) || k, m = k);
  }, n);
  return f = f ?? h, o && a && o(a, d, m, l), a != null && (i && i.splice(l, 1), f && (Array.isArray(f) ? f.splice(r, 0, a) : typeof c == "string" ? f[c] = [a] : c(f, [a]))), h;
}, je = (s = [], t, e = {}) => (e.children, F(s, (n, o, u, c, a) => {
  if (c) {
    const [l, i = o.length] = t(c) || [];
    if (l)
      return o.splice(i, 0, ...l), !1;
  }
}, e)), we = (s = [], t, e = {}) => {
  const r = e.children || "children";
  return F(s, (o, u) => {
    const [c, a = u.length] = t(o) || [], l = c && (typeof r == "string" ? c[r] : r(c));
    if (l && l.length > 0)
      return l.splice(a, 0, c), !1;
  }, e);
}, Ne = (s, t, e = {}) => {
  let r;
  return F(s, (o) => {
    if (t(o))
      return r = o, !1;
  }, e), r;
}, $e = (s = [], t = [], e = {}) => {
  const r = e.key || "id";
  return ge(s, (o) => !t.includes(o[r]), e);
}, qe = (s = [], t, e = {}) => {
  const r = e.key || "id";
  let n;
  return F(s, (u, c, a) => u[r] == t ? (c.splice(a, 1), n = u, !1) : !0, e), n;
}, q = (s = [], t = {}) => {
  const e = [];
  let r = [];
  return F(s, (o, u, c, a, l) => {
    if (a) {
      const i = r.indexOf(a), f = r.length;
      if (i == -1)
        r.push(a);
      else if (i < f - 1) {
        let m = f - 1 - i;
        for (; m-- > 0; )
          r.pop();
      }
    } else
      r = [];
    e.push([o, ...r]);
  }, t), e;
}, Ue = (s = [], t = {}) => {
  const e = t.children || "children";
  return q(s, t).filter((n) => {
    const o = typeof e == "string" ? n[0][e] : e(n[0]);
    return !o || o.length == 0;
  });
}, Ge = (s = [], t = [], e = {}) => {
  const r = e.key || "id";
  return q(s, e).filter((o) => t.includes(o[0][r]));
}, Be = (s = [], t, e = {}) => {
  const r = e.sourceChildren || e.children || "children", n = e.children || "children";
  return F(s, (u, c, a, l, i) => {
    const f = t(u, c, a, l, i);
    if (f == u && u != null)
      return;
    if (f == null) {
      c.splice(c.indexOf(u), 1);
      return;
    }
    const m = typeof r == "string" ? u[r] : r(u);
    if (!m || m.length == 0)
      return;
    Object.keys(u).forEach((h) => delete u[h]), Object.keys(f).forEach((h) => u[h] = f[h]), typeof n == "string" ? f[n] || (u[n] = m) : n(u, m);
  }, e);
}, L = {
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
((s) => {
  s.buildRules = (t) => {
    const e = E(t.required) ?? !1, r = E(t.trigger) ?? "blur", n = R(t, "message") ? P.getExpValue(E(t.message), t) : P.getExpValue(L.required, t), o = N(E(t.rules)) ? [...E(t.rules)] : [], u = Object.keys(L), c = [];
    let a = !1;
    return o.forEach((l) => {
      var d;
      const i = { ...E(l) }, f = ((d = u.filter((p) => R(i, p))) == null ? void 0 : d[0]) || "common", m = i.message || E(t.message) || b(L, f);
      i.message = P.getExpValue(m, { ...t, ...i }), R(i, "required") && (a = !0), R(i, "trigger") || (i.trigger = r), c.push(i);
    }), !a && e && c.push({ required: e, message: n, trigger: r }), delete t.required, delete t.trigger, delete t.message, c;
  }, s.buildElFormItemProps = (t) => {
    const e = E(b(t, "elFormItem")), r = N(e) ? e : D(e) ? Object.keys(e) : [], n = D(e) ? { ...e } : {};
    return ye.forEach((o) => {
      R(t, o) && !r.includes(o) && (n[o] = b(t, o), I(t, o));
    }), I(t, "elFormItem"), n;
  }, s.isNeedElFormItem = (t) => {
    const e = E(t.elFormItem);
    return te(e) ? e : (e == null ? void 0 : e.enabled) ?? !0;
  }, s.validateFormField = (t, e) => !0, s.valideForm = (t, e, r = {}) => {
    const n = {
      children: (l) => {
        const i = l.children || l.cls;
        return i && Array.isArray(i) ? new Array().concat(i) : [];
      }
    }, o = {}, u = {};
    F(e, (l, i, f, m) => {
      if (!D(l))
        return !0;
      if (m) {
        const d = `${m.$prop || m.prop || ""}.${l.prop || ""}`;
        l.$prop = d.split(".").filter((p) => p).join(".");
      } else
        l.prop && (l.$prop = l.prop);
      if (l.prop && (l.required || l.rules || R(r, l.$prop))) {
        const d = new Array().concat((0, s.buildRules)(l), b(r, l.$prop) || []);
        u[l.$prop] = d;
        const p = b(t, l.$prop) || l.value || l.defaultValue;
        o[l.$prop] = p;
      }
    }, n);
    const a = new se(u);
    return new Promise((l) => {
      a.validate(o, (i, f) => {
        const m = (i || []).length == 0, d = {};
        for (const p of i || []) {
          const h = p.field || "";
          d[h] ? d[h].push(p) : d[h] = [p];
        }
        l({ status: m, info: d, errors: i, fields: f });
      });
    });
  }, s.SELF_FORM_NAMES = ["elsListForm"];
})(A || (A = {}));
const ke = A.buildRules, Fe = A.buildElFormItemProps, be = A.isNeedElFormItem, ve = ({ tag: s, parent: t }) => s || (t && R(V, S(t.tagname)) ? V[S(t.tagname)] : ne), _e = (s) => {
  const t = s.props, e = s.setupRes;
  if (e.isFormElem) {
    const r = e.formProp;
    if (I(t, "value"), e.isNeedElFormItem) {
      const n = {
        ...Fe(t),
        prop: r
      };
      return n.rules = ke(n), x(le, n, {
        default: () => P.defaultRender(s),
        label: () => [n.label, n != null && n.tip ? Se(n.tip) : ""]
      });
    }
  }
  return P.defaultRender(s);
}, Re = (s, t) => {
  const e = s.elem;
  if (!e)
    return;
  const { formProps: r, emitChange: n } = s.context, o = s.parent, u = S(t.tagname), c = S(o == null ? void 0 : o.tagname), a = o == null ? void 0 : o.setupRes, l = E(e.prop), i = typeof l == "function" ? l(s) : l, f = E(a == null ? void 0 : a.formProp) || [], m = /^\^/.test(i) ? [i.replace("^", "")] : new Array().concat(f, i || []), d = m.join("."), p = { isFormElem: !1 };
  if (m.length > 0 && (p.formProp = d), d && (p.formProp = d), Ie(e, u, c)) {
    if (p.isFormElem = !0, e.isFormElem !== !1) {
      r == null || r.add(d);
      const h = E(e.modelValue ?? e.value) ?? void 0, k = s.context, g = k == null ? void 0 : k.formData;
      b(g, d) == null && (n == null || n(d, h)), p.prop = {
        ":modelValue": z(() => b(g, d)),
        // ":modelValue": get(unref(formData), formProp),
        "onUpdate:modelValue": (y) => {
          n == null || n(d, y ?? h);
        }
      };
    }
    p.excludeKeys = ["value"], p.isFormItem = !0, p.isNeedElFormItem = be(e), K(() => {
      r == null || r.delete(d);
    });
  }
  return p;
}, Ae = (s, t, e) => {
  const r = E(s.size) || "default", n = G(), o = t.formData, u = re(
    { validateOnRuleChange: !1, size: r },
    n.elForm || {}
  ), c = B(), a = {
    ...u,
    tag: oe,
    ref: (f) => c.value = f,
    cls: T(s, "column"),
    model: o
  }, l = (f, m) => {
    const d = b(E(c), f);
    if (d && ae(d))
      return d(...m);
  }, i = {
    ...e,
    formData: o,
    formProps: t.formProps,
    emitChange: t.emitChange,
    tag: ve,
    setup: Re,
    render: _e,
    excludeKeys: ["isFormElem", "isNeedElFormItem"],
    params: {
      ...e,
      formData: o,
      formProps: t.formProps
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
], V = {
  elCheckboxGroup: ce,
  elRadioGroup: ie,
  elSelect: ue
}, Ie = (s, t, e) => E(s.isFormElem) === !0 ? !0 : e && R(V, e) ? S(V[e].name) !== t : !(!A.SELF_FORM_NAMES.includes(t) && !Pe.includes(t)), Se = (s) => {
  if (s == null || !s)
    return;
  const r = { ...{
    // icon:InfoFilled,
    placement: "top-start",
    effect: "dark"
  }, ...typeof s == "string" ? { content: s } : s };
  return x(fe, r, { default: () => x(de, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => x(me) }) });
}, Oe = { class: "els-form" }, xe = {
  name: "ElsForm"
}, ze = /* @__PURE__ */ W({
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
  setup(s, { expose: t, emit: e }) {
    const r = e, n = s, o = T(n, "modelValue"), u = H(), c = typeof E(o) != "object", a = c ? M({}) : M(o.value);
    let l = !1;
    const i = () => {
      r("update:modelValue", a), l === !1 && (l = !0, setTimeout(() => {
        l = !1;
      }, 2e3));
    }, f = he((g, y) => {
      Ee(a, g, y), c && (r("change", g, y), i());
    }, 200);
    j(() => {
      c && i();
    }), c && w(T(n, "modelValue"), (g) => {
      g != a && (l === !1 && g && Object.assign(a, g), l === !0 && (l = !1));
    });
    const m = M(/* @__PURE__ */ new Set()), d = { formProps: m, formData: a, emitChange: f }, h = (n.UIPluging || Ae)(n, d, { slots: u });
    if (n.autoClean) {
      let g = [];
      j(() => {
        g = Array.from(m);
      }), Q(() => {
        g = [], m.clear();
      }), w(m, (y) => {
        const v = Array.from(y), _ = pe(g, v);
        _.length > 0 && (_.forEach((O) => I(E(a), O)), g = v, r("update:modelValue", E(a)));
      });
    }
    return t({ ...h, formProps: m, submit: (g = (y, v) => [y, v]) => (c && i(), new Promise(async (y, v) => {
      try {
        await h.validate();
        const _ = $(E(a));
        for (const O of Array.from(m)) {
          const U = b(a, O), C = g(O, U);
          C[0] && C[1] == null && I(_, C[0]);
        }
        y(_);
      } catch (_) {
        console.error("表单校验失败！====>", _), v(_);
      }
    })) }), (g, y) => (Y(), J("div", Oe, [
      X(E(Z), {
        elem: E(h).elem,
        params: g.params,
        context: E(h).context
      }, null, 8, ["elem", "params", "context"])
    ]));
  }
});
export {
  A as E,
  ze as _,
  we as a,
  q as b,
  $e as c,
  qe as d,
  ge as e,
  Ne as f,
  Ge as g,
  Ue as h,
  F as i,
  Te as j,
  Be as k,
  Le as l,
  De as m,
  je as t
};
