import { unref as n, useAttrs as N, ref as T, toRef as O, h as A, computed as $, onUnmounted as G, defineComponent as j, useSlots as B, onMounted as M, watch as w, reactive as U, onBeforeUnmount as z, openBlock as K, createElementBlock as Y, createVNode as H } from "vue";
import { a as y, E as W } from "./main.DxNtyuEA.js";
import { ao as J, ap as R, a5 as _, aq as D, g as b, ar as k, as as P, at as Q, au as X, Y as Z, av as ee, aw as S, e as te, ax as se, f as L, ay as oe, T as re, az as ae, k as le, c as ne, d as ce, i as ue, aA as ie, C as me } from "./vendor.BakInURX.js";
const fe = (o = [], e = () => {
}, t = {}) => {
  const l = t.isSource || !1 ? o : J(o), u = t.children || "children", m = (f, E, s) => {
    const c = R(f);
    for (let d = 0, p = c.length; d < p; d++) {
      const a = c[d];
      if (a) {
        const r = e(a, f, d, E, s);
        if (r === !1)
          break;
        if (r === !0)
          continue;
        const g = typeof u == "string" ? a[u] : u(a);
        g && g.length > 0 && m(g, a, d);
      }
    }
  };
  return m(l, void 0, void 0), l;
}, x = {
  required: "请输入 [ {{label}} ] ！",
  pattern: "请按照要求输入正确的 [ {{label}} ] 格式! 格式：{{ pattern }}",
  common: "请输入正确的 [ {{label}} ] 格式!"
}, de = [
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
var I;
((o) => {
  o.buildRules = (e) => {
    const t = n(e.required) ?? !1, i = n(e.trigger) ?? "blur", l = _(e, "message") ? y.getExpValue(n(e.message), e) : y.getExpValue(x.required, e), u = D(n(e.rules)) ? [...n(e.rules)] : [], m = Object.keys(x), f = [];
    let E = !1;
    return u.forEach((s) => {
      var a;
      const c = { ...n(s) }, d = ((a = m.filter((r) => _(c, r))) == null ? void 0 : a[0]) || "common", p = c.message || n(e.message) || b(x, d);
      c.message = y.getExpValue(p, { ...e, ...c }), _(c, "required") && (E = !0), _(c, "trigger") || (c.trigger = i), f.push(c);
    }), !E && t && f.push({ required: t, message: l, trigger: i }), delete e.required, delete e.trigger, delete e.message, f;
  }, o.buildElFormItemProps = (e) => {
    const t = n(b(e, "elFormItem")), i = D(t) ? t : k(t) ? Object.keys(t) : [], l = k(t) ? { ...t } : {};
    return de.forEach((u) => {
      _(e, u) && !i.includes(u) && (l[u] = b(e, u), P(e, u));
    }), P(e, "elFormItem"), l;
  }, o.isNeedElFormItem = (e) => {
    const t = n(e.elFormItem);
    return Q(t) ? t : (t == null ? void 0 : t.enabled) ?? !0;
  }, o.validateFormField = (e, t) => !0, o.valideForm = (e, t, i = {}) => {
    const l = {
      children: (s) => {
        const c = s.children || s.cls;
        return c && Array.isArray(c) ? new Array().concat(c) : [];
      }
    }, u = {}, m = {};
    fe(t, (s, c, d, p) => {
      if (!k(s))
        return !0;
      if (p) {
        const a = `${p.$prop || p.prop || ""}.${s.prop || ""}`;
        s.$prop = a.split(".").filter((r) => r).join(".");
      } else
        s.prop && (s.$prop = s.prop);
      if (s.prop && (s.required || s.rules || _(i, s.$prop))) {
        const a = new Array().concat((0, o.buildRules)(s), b(i, s.$prop) || []);
        m[s.$prop] = a;
        const r = b(e, s.$prop) || s.value || s.defaultValue;
        u[s.$prop] = r;
      }
    }, l);
    const E = new X(m);
    return new Promise((s) => {
      E.validate(u, (c, d) => {
        const p = (c || []).length == 0, a = {};
        for (const r of c || []) {
          const g = r.field || "";
          a[g] ? a[g].push(r) : a[g] = [r];
        }
        s({ status: p, info: a, errors: c, fields: d });
      });
    });
  }, o.SELF_FORM_NAMES = ["elsListForm"];
})(I || (I = {}));
const pe = I.buildRules, ge = I.buildElFormItemProps, Ee = I.isNeedElFormItem, he = ({ tag: o, parent: e }) => o || (e && _(C, S(e.tagname)) ? C[S(e.tagname)] : te), Fe = (o) => {
  const e = o.props, t = o.setupRes;
  if (t.isFormElem) {
    const i = t.formProp;
    if (P(e, "value"), t.isNeedElFormItem) {
      const l = {
        ...ge(e),
        prop: i
      };
      return l.rules = pe(l), A(se, l, {
        default: () => y.defaultRender(o),
        label: () => [l.label, l != null && l.tip ? Ie(l.tip) : ""]
      });
    }
  }
  return y.defaultRender(o);
}, be = (o, e) => {
  const t = o.elem, { formProps: i, emitChange: l } = o.context, u = o.parent, m = S(e.tagname), f = S(u == null ? void 0 : u.tagname), E = u == null ? void 0 : u.setupRes, s = n(t.prop), c = typeof s == "function" ? s(o) : s, d = n(E == null ? void 0 : E.formProp) || [], p = /^\^/.test(c) ? [c.replace("^", "")] : new Array().concat(d, c || []), a = p.join("."), r = { isFormElem: !1 };
  if (p.length > 0 && (r.formProp = a), Re(t, m, f)) {
    if (r.isFormElem = !0, t.isFormElem !== !1) {
      i == null || i.add(a);
      const g = n(t.modelValue ?? t.value) ?? void 0, F = o.context, h = F == null ? void 0 : F.formData;
      b(n(h), a) == null && L(n(h), a, g), r.prop = {
        ":modelValue": $(() => b(n(h), a)),
        "onUpdate:modelValue": (v) => {
          L(n(h), a, v ?? g), l == null || l(a, v);
        }
      };
    }
    r.excludeKeys = ["value"], r.isFormItem = !0, r.isNeedElFormItem = Ee(t), G(() => {
      i == null || i.delete(a);
    });
  }
  return r;
}, _e = (o, e, t) => {
  const i = n(o.size) || "default", l = N(), u = e.formData, m = Z(
    { validateOnRuleChange: !1, size: i },
    l.elForm || {}
  ), f = T(), E = {
    ...m,
    tag: ee,
    ref: (d) => f.value = d,
    cls: O(o, "column"),
    model: u
  }, s = (d, p) => {
    const a = b(n(f), d);
    if (a && oe(a))
      return a(...p);
  }, c = {
    ...t,
    formData: u,
    formProps: e.formProps,
    emitChange: e.emitChange,
    tag: he,
    setup: be,
    render: Fe,
    excludeKeys: ["isFormElem", "isNeedElFormItem"],
    params: {
      ...t,
      formData: u,
      formProps: e.formProps
    }
  };
  return {
    elem: E,
    context: c,
    formRef: f,
    formApi: s,
    refresh: () => {
    },
    validate: (...d) => s("validate", d)
  };
}, ve = [
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
], C = {
  elCheckboxGroup: re,
  elRadioGroup: ae,
  elSelect: le
}, Re = (o, e, t) => n(o.isFormElem) === !0 ? !0 : t && _(C, t) ? S(C[t].name) !== e : !(!I.SELF_FORM_NAMES.includes(e) && !ve.includes(e)), Ie = (o) => {
  if (o == null || !o)
    return;
  const i = { ...{
    // icon:InfoFilled,
    placement: "top-start",
    effect: "dark"
  }, ...typeof o == "string" ? { content: o } : o };
  return A(ne, i, { default: () => A(ce, { style: "margin-left:1em;height:100%;color:#909399" }, { default: () => A(ue) }) });
}, ye = { class: "els-form" }, Pe = {
  name: "ElsForm"
}, Ve = /* @__PURE__ */ j({
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
  setup(o, { expose: e, emit: t }) {
    const i = t, l = o, u = B(), m = T(R(n(l.modelValue || {})));
    let f = !1;
    const E = me((r, g) => {
      i("change", r, g), i("update:modelValue", R(n(m))), f === !1 && (f = !0, setTimeout(() => {
        f = !1;
      }, 2e3));
    }, 200);
    M(() => {
      i("update:modelValue", R(n(m)));
    }), w(O(l, "modelValue"), (r) => {
      f === !1 && r && (m.value = R(r)), f === !0 && (f = !1);
    });
    const s = U(/* @__PURE__ */ new Set()), c = { formProps: s, formData: m, emitChange: E }, p = (l.UIPluging || _e)(l, c, { slots: u });
    if (l.autoClean) {
      let r = [];
      M(() => {
        r = Array.from(s);
      }), z(() => {
        r = [], s.clear();
      }), w(s, (g) => {
        const F = Array.from(g), h = ie(r, F);
        h.length > 0 && (h.forEach((v) => P(n(m), v)), r = F, i("update:modelValue", n(m)));
      });
    }
    return e({ ...p, formProps: s, submit: (r = (g, F) => [g, F]) => new Promise(async (g, F) => {
      try {
        await p.validate();
        const h = R(n(m));
        for (const v of Array.from(s)) {
          const q = b(n(m), v), V = r(v, q);
          V[0] && V[1] == null && P(h, V[0]);
        }
        g(h);
      } catch (h) {
        console.error("表单校验失败！====>", h), F(h);
      }
    }) }), (r, g) => (K(), Y("div", ye, [
      H(n(W), {
        elem: n(p).elem,
        params: r.params,
        context: n(p).context
      }, null, 8, ["elem", "params", "context"])
    ]));
  }
});
export {
  I as E,
  Ve as _
};
