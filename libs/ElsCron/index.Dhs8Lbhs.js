import "../../css/ElsCron-8YhZr14n.css";
import { ref as z, reactive as K, watch as g, onMounted as S, unref as c, isRef as U, defineComponent as J, toRefs as Q, openBlock as C, createElementBlock as w, normalizeClass as X, createBlock as A, withCtx as O, createVNode as D, normalizeProps as Z, guardReactiveProps as ee, createCommentVNode as te, createElementVNode as ne } from "vue";
import { _ as se } from "../../chunks/main.vue_vue_type_script_setup_true_lang.MTvVqFmn.js";
import { f as oe, m as P, b as ae, u as le, c as re, d as ce, i as ie, e as ue, g as me, j as fe, k as de, l as pe, n as xe, o as be, q as F } from "../../chunks/vendor.4pP_Prrf.js";
function ve(e, n) {
  const s = z(e ?? ""), t = K({});
  let l = !1, a = !0, o = "0 0 0 * * ? *";
  const u = [ze(n)], m = (r) => {
    o = r, s.value = r;
  };
  return e ? o = e : s.value = o, P(t, M(o)), g(
    t,
    () => {
      if (!l || !a) {
        setTimeout(() => {
          a = !0;
        }, 50);
        return;
      }
      const r = Ge(t);
      r !== o && m(r);
    },
    { deep: !0 }
  ), g(s, (r) => {
    if (r != o) {
      const x = M(r);
      o = r, a = !1, P(t, x);
    }
  }), S(() => {
    l = !0;
  }), { cronData: t, cronText: s, column: u, validator: Oe };
}
const N = [
  "",
  "",
  "to",
  "interval",
  "next",
  "last",
  "float",
  "",
  "",
  "the"
], k = [
  /^\?$/,
  /^\*$/,
  /^(\d+)-(\d+)$/,
  /^(\d+)\/(\d+)$/,
  /^(\d+)W$/,
  /^(\d+)L$/,
  /^(\d+)#(\d+)$/,
  /^\s+$/,
  // 暂时未使用的
  /^L$/,
  /^(,?\d+)+$/
], Ee = [
  "?",
  "*",
  ([e, n]) => `${e}-${n}`,
  ([e, n]) => `${e}/${n}`,
  ([e]) => `${e}W`,
  ([e]) => `${e}L`,
  ([e, n]) => `${e}#${n}`,
  "",
  // 暂时未使用的
  "L",
  (e) => e.sort((n, s) => n - s).join(",")
], ge = { tag: ce }, he = { tag: me, elFormItem: !1, onClick: (e) => {
  e == null || e.preventDefault();
} }, $e = {
  tag: fe,
  controlsPosition: "right",
  elFormItem: !1
}, ye = (e, n) => {
  const { attrs: s, prefix: t = "", suffix: l = "", connect: a = [] } = n, o = [t], i = new Array().concat(a);
  let u = 0;
  for (const m of s) {
    const r = `${e}.${u}`, x = i[u] || "";
    ie(m) ? o.push({ ...he, prop: r, value: m[0].value, cls: m }) : o.push({ ...$e, prop: r, value: m == null ? void 0 : m.min, ...m }), x && o.push(x), u++;
  }
  return o.push(l), o;
}, Ce = { tag: de, class: "_item _checkbox-group" }, Ne = { tag: pe }, Re = (e, n = {}) => {
  const { min: s = 0, max: t = 59, getLabel: l } = n, a = [];
  for (let o = s; o <= t; o++) {
    const i = l ? l(o) : `${o}`;
    a.push({ ...Ne, label: o, cls: i });
  }
  return [{ ...Ce, prop: e, cls: a }];
}, Te = (e, n, s) => {
  const t = N[Number(e)];
  let l = "";
  t ? t === "the" ? l = Re(`^${s}.${t}`, n) : l = ye(`^${s}.${t}`, n) : l = n;
  const a = `_radio-item _label-${e}`;
  return { ...ge, class: a, label: e, cls: l };
}, _e = (e, n) => {
  const s = { type: String(n) }, t = N[n], l = k[n], [a, ...o] = n == 9 ? [""].concat(le(e.split(","))) : l.exec(e) || [];
  return s[t] = o.map((i) => Number(i)), s;
}, De = (e) => {
  const n = Number(e.type), s = k[n], t = N[n], l = Ee[n], a = typeof l == "string", o = e[t] || [], i = a ? l : l(o);
  return !a && !s.test(i) ? l : i;
}, ke = [
  ["1", "每秒 允许的通配符[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 0, max: 59 },
        { min: 0, max: 60 }
      ],
      prefix: "周期从",
      connect: "秒 到",
      suffix: "秒"
    },
    [0, 0]
  ],
  [
    "3",
    {
      attrs: [{ min: 0, max: 59 }, { min: 0 }],
      prefix: "周期从",
      connect: "秒开始，每隔",
      suffix: "秒执行一次"
    },
    [0, 0]
  ],
  ["9", {}, [0]]
], Ve = [
  ["1", "每分 允许的通配符[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 0, max: 59 },
        { min: 0, max: 60 }
      ],
      prefix: "周期从",
      connect: "分 到",
      suffix: "分钟"
    },
    [0, 0]
  ],
  [
    "3",
    {
      attrs: [{ min: 0, max: 59 }, { min: 0 }],
      prefix: "周期从",
      connect: "分钟开始，每隔",
      suffix: "分钟执行一次"
    },
    [0, 0]
  ],
  ["9", {}, [0]]
], Ie = [
  ["1", "每小时 允许的通配符[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 0, max: 59 },
        { min: 0, max: 60 }
      ],
      prefix: "周期从",
      connect: "时 到",
      suffix: "小时"
    },
    [0, 0]
  ],
  [
    "3",
    {
      attrs: [{ min: 0, max: 59 }, { min: 0 }],
      prefix: "周期从",
      connect: "时开始，每隔",
      suffix: "小时执行一次"
    },
    [0, 0]
  ],
  ["9", { max: 23 }, [0]]
], Be = [
  ["0", "不指定", ""],
  ["1", "每日 允许的通配符[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 1, max: 31 },
        { min: 1, max: 31 }
      ],
      prefix: "周期从",
      connect: "日 到",
      suffix: "日"
    },
    [1, 1]
  ],
  [
    "3",
    {
      attrs: [{ min: 1, max: 31 }, { min: 1 }],
      prefix: "周期从",
      connect: "日开始，每隔",
      suffix: "日执行一次"
    },
    [1, 1]
  ],
  [
    "4",
    {
      attrs: [{ min: 1, max: 31 }],
      prefix: "每月",
      suffix: "日最近的那个工作日"
    },
    [1]
  ],
  ["8", "本月最后一天", ""],
  ["9", { min: 1, max: 31 }, [1]]
], Le = [
  ["0", "不指定", ""],
  ["1", "每月 允许的通配符[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 1, max: 12 },
        { min: 1, max: 12 }
      ],
      prefix: "周期从",
      connect: "月 到",
      suffix: "月"
    },
    [1, 1]
  ],
  [
    "3",
    {
      attrs: [{ min: 1, max: 12 }, { min: 1 }],
      prefix: "周期从",
      connect: "月开始，每隔",
      suffix: "个月执行一次"
    },
    [1, 1]
  ],
  ["9", { min: 1, max: 12 }, [1]]
], E = [
  { value: 1, label: "一" },
  { value: 2, label: "二" },
  { value: 3, label: "三" },
  { value: 4, label: "四" },
  { value: 5, label: "五" },
  { value: 6, label: "六" },
  { value: 7, label: "日" }
], we = [
  ["0", "不指定", ""],
  ["1", "每周 允许的通配符[, - * /]", ""],
  [
    "2",
    {
      attrs: [E, E],
      prefix: "周期从星期",
      connect: " 到星期"
    },
    [1, 1]
  ],
  [
    "6",
    {
      attrs: [{ min: 1, max: 4 }, E],
      prefix: "每月第",
      connect: "周的星期"
    },
    [1, 1]
  ],
  [
    "5",
    {
      attrs: [E],
      prefix: "本月的最后一周的星期"
    },
    [1]
  ],
  [
    "9",
    { min: 1, max: 7, getLabel: (e) => E[e - 1].label },
    [1]
  ]
], Ae = [
  ["0", "不指定", ""],
  ["1", "每年 允许的通配符[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 1970, max: 3e3, value: (/* @__PURE__ */ new Date()).getFullYear() },
        { min: 1970, max: 3e3, value: (/* @__PURE__ */ new Date()).getFullYear() }
      ]
    },
    [1970, (/* @__PURE__ */ new Date()).getFullYear()]
  ]
], G = (e, n) => {
  let s = -1;
  for (let t = 0, l = n.length; t < l; t++) {
    const a = n[t];
    if (k[a].test(e)) {
      s = a;
      break;
    }
  }
  return s;
}, V = [
  ["second", ke, "[* 数字（-，/）]"],
  ["minute", Ve, ""],
  ["hour", Ie, ""],
  ["day", Be, ""],
  ["month", Le, ""],
  ["week", we, ""],
  ["year", Ae, "[? * ]"]
], h = V.map((e) => e[0]), I = oe(V), Oe = (e) => {
  const n = e.trim().split(" ");
  if (n.length !== 7)
    return `ERROR_LENGTH :${n.length} : ${e} - [${h.join(" ")}]`;
  for (let s = 0, t = n.length; s < t; s++) {
    const l = n[s], [a, o, i] = V[s], u = o.map((r) => Number(r[0]));
    if (G(l, u) == -1)
      return `ERROR_VALUE :${e} :: ${a} ==> ${i}`;
  }
  return "";
}, Pe = {
  second: "秒",
  minute: "分",
  hour: "时",
  day: "日",
  month: "月",
  week: "周",
  year: "年"
}, Fe = { tag: ue, isDirectRender: !0 }, Me = { tag: re, type: "border-card" }, ze = (e = h) => {
  const n = e.map((t) => I[t]), s = [];
  for (let t = 0, l = e.length; t < l; t++) {
    const a = n[t], o = e[t], i = Pe[o], u = { tag: "div", prop: o, cls: { tag: ae, prop: "type", cls: a.map(([r, x]) => Te(r, x, o)) } }, m = { ...Fe, label: i, cls: u };
    s.push(m);
  }
  return { ...Me, cls: s };
}, Se = {
  second: "0",
  minute: "0",
  hour: "0",
  day: "1",
  month: "1",
  week: "?",
  year: "*"
}, Ue = (e, n, s, t) => {
  t && U(t) && (t.value[e][n] = s);
}, Ge = (e, n = Ue, s = Se) => {
  const t = c(e), l = [];
  for (const a of h) {
    let o = s[a];
    if (t[a] != null && t[a].type) {
      const i = t[a].type, u = De(t[a]), m = I[a], r = N[Number(i)], $ = m.filter((R) => R[0] == i)[0][2], y = typeof u == "function" ? u($) : !1;
      y && n(a, r, $, e), o = y || u;
    }
    l.push(o);
  }
  return l.join(" ");
}, M = (e) => {
  const n = e.split(" "), s = {};
  for (let t = 0, l = h.length; t < l; t++) {
    const a = h[t], o = n[t], u = I[a].map((r) => Number(r[0])), m = G(o, u);
    s[a] = _e(o, m);
  }
  return s;
}, Ye = { class: "els-cron" }, je = { class: "els-cron-expl" }, qe = {
  name: "els-cron"
}, We = /* @__PURE__ */ J({
  ...qe,
  props: {
    modelValue: {},
    layout: { default: () => ["second", "minute", "hour", "day", "month", "year", "week"] },
    elFormItem: { default: () => ({}) },
    label: {},
    prop: {},
    required: { type: Boolean },
    rules: { default: () => [] },
    error: {},
    showMessage: { type: Boolean, default: !0 },
    inlineMessage: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    noInput: { type: Boolean },
    size: {},
    labelPosition: { default: "top" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const s = n, t = e, {
      modelValue: l,
      layout: a,
      rules: o,
      showMessage: i,
      size: u,
      noInput: m,
      disabled: r,
      labelPosition: x
    } = Q(t), { label: $, required: y, elFormItem: R, inlineMessage: Y, error: j } = t;
    let T = !0;
    const { cronData: _, cronText: v, column: q, validator: B } = ve(
      l.value,
      a == null ? void 0 : a.value
    ), f = z(c(l) || v.value), W = [
      ...c(o),
      // @ts-ignore
      {
        validator: (p, d = c(f), b) => {
          if (!d) {
            b();
            return;
          }
          const L = B(d);
          L ? b(L) : b();
        }
      }
    ], H = {
      label: $,
      required: y,
      inlineMessage: Y,
      error: j,
      ...R,
      rules: W,
      prop: "text"
    };
    return g(l, (p) => {
      p != f.value && (f.value = p);
    }), g(f, (p) => {
      if (!T) {
        T = !0;
        return;
      }
      if (B(p) != "")
        return;
      const d = p.trim();
      p != v.value && (v.value = d), d !== f.value && (T = !1, f.value = d), p != l.value && s("update:modelValue", d);
    }), g(v, (p) => {
      p !== f.value && (f.value = p);
    }), S(() => {
      c(f) || (f.value = v.value);
    }), (p, d) => (C(), w("div", Ye, [
      c(m) ? te("", !0) : (C(), w("div", {
        key: 0,
        class: X(["el-form-input", [{ "has-message": c(i), "is-top": c(x) == "top" }]])
      }, [
        c(i) ? (C(), A(c(xe), {
          key: 0,
          model: { text: f.value },
          size: c(u),
          "label-position": c(x)
        }, {
          default: O(() => [
            D(c(be), Z(ee(H)), {
              default: O(() => [
                D(c(F), {
                  modelValue: f.value,
                  "onUpdate:modelValue": d[0] || (d[0] = (b) => f.value = b),
                  disabled: c(r)
                }, null, 8, ["modelValue", "disabled"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 8, ["model", "size", "label-position"])) : (C(), A(c(F), {
          key: 1,
          modelValue: f.value,
          "onUpdate:modelValue": d[1] || (d[1] = (b) => f.value = b),
          size: c(u),
          disabled: c(r)
        }, null, 8, ["modelValue", "size", "disabled"]))
      ], 2)),
      ne("div", je, [
        D(c(se), {
          modelValue: c(_),
          "onUpdate:modelValue": d[2] || (d[2] = (b) => U(_) ? _.value = b : null),
          column: c(q),
          size: "small",
          disabled: c(r)
        }, null, 8, ["modelValue", "column", "disabled"])
      ])
    ]));
  }
}), Xe = {
  install: (e) => {
    e.component("els-cron", We);
  }
};
export {
  We as ElsCron,
  Xe as default
};
