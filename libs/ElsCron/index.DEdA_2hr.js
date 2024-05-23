import "../../css/ElsCron-BNaekIa8.css";
import { ref as S, reactive as K, watch as v, onMounted as U, unref as c, isRef as G, defineComponent as J, toRefs as Q, openBlock as T, createElementBlock as A, normalizeClass as X, createBlock as O, withCtx as P, createVNode as D, normalizeProps as Z, guardReactiveProps as ee, createCommentVNode as te, createElementVNode as ne } from "vue";
import { _ as oe } from "../../chunks/main.vue_vue_type_script_setup_true_lang.BRptxycn.js";
import { f as se, m as F, b as le, u as ae, c as re, d as ce, i as ie, e as ue, g as me, j as fe, k as de, l as pe, n as xe, o as be, q as M } from "../../chunks/vendor.4pP_Prrf.js";
function ge(e, n) {
  const o = S(e ?? ""), t = K({});
  let a = !1, l = !0, s = "0 0 0 * * ? *";
  const u = [ze(n)], m = (r) => {
    s = r, o.value = r;
  };
  return e ? s = e : o.value = s, F(t, z(s)), v(
    t,
    (r) => {
      if (console.log(r), !a || !l) {
        setTimeout(() => {
          l = !0;
        }, 50);
        return;
      }
      const p = Ge(t);
      p !== s && m(p);
    },
    { deep: !0 }
  ), v(o, (r) => {
    if (r != s) {
      const p = z(r);
      s = r, l = !1, F(t, p);
    }
  }), U(() => {
    a = !0;
  }), { cronData: t, cronText: o, column: u, validator: Oe };
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
  (e) => e.sort((n, o) => n - o).join(",")
], ve = { tag: ce }, he = { tag: me, elFormItem: !1 }, $e = {
  tag: fe,
  controlsPosition: "right",
  elFormItem: !1
}, ye = (e, n) => {
  const { attrs: o, prefix: t = "", suffix: a = "", connect: l = [] } = n, s = [t], i = new Array().concat(l);
  let u = 0;
  for (const m of o) {
    const r = `${e}.${u}`, p = i[u] || "";
    ie(m) ? s.push({ ...he, prop: r, value: m[0].value, cls: m }) : s.push({ ...$e, prop: r, value: m == null ? void 0 : m.min, ...m }), p && s.push(p), u++;
  }
  return s.push(a), s;
}, Te = { tag: de, class: "_item _checkbox-group" }, Ne = { tag: pe }, Re = (e, n = {}) => {
  const { min: o = 0, max: t = 59, getLabel: a } = n, l = [];
  for (let s = o; s <= t; s++) {
    const i = a ? a(s) : `${s}`;
    l.push({ ...Ne, label: s, cls: i });
  }
  return [{ ...Te, prop: e, cls: l }];
}, _e = (e, n, o) => {
  const t = N[Number(e)];
  let a = "";
  t ? t === "the" ? a = Re(`^${o}.${t}`, n) : a = ye(`^${o}.${t}`, n) : a = n;
  const l = `_radio-item _label-${e}`;
  return { ...ve, class: l, label: e, cls: a };
}, Ce = (e, n) => {
  const o = { type: String(n) }, t = N[n], a = k[n], [l, ...s] = n == 9 ? [""].concat(ae(e.split(","))) : a.exec(e) || [];
  return o[t] = s.map((i) => Number(i)), o;
}, De = (e) => {
  const n = Number(e.type), o = k[n], t = N[n], a = Ee[n], l = typeof a == "string", s = e[t] || [], i = l ? a : a(s);
  return !l && !o.test(i) ? a : i;
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
], Y = (e, n) => {
  let o = -1;
  for (let t = 0, a = n.length; t < a; t++) {
    const l = n[t];
    if (k[l].test(e)) {
      o = l;
      break;
    }
  }
  return o;
}, V = [
  ["second", ke, "[* 数字（-，/）]"],
  ["minute", Ve, ""],
  ["hour", Ie, ""],
  ["day", Be, ""],
  ["month", Le, ""],
  ["week", we, ""],
  ["year", Ae, "[? * ]"]
], h = V.map((e) => e[0]), I = se(V), Oe = (e) => {
  const n = e.trim().split(" ");
  if (n.length !== 7)
    return `ERROR_LENGTH :${n.length} : ${e} - [${h.join(" ")}]`;
  for (let o = 0, t = n.length; o < t; o++) {
    const a = n[o], [l, s, i] = V[o], u = s.map((r) => Number(r[0]));
    if (Y(a, u) == -1)
      return `ERROR_VALUE :${e} :: ${l} ==> ${i}`;
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
  const n = e.map((t) => I[t]), o = [];
  for (let t = 0, a = e.length; t < a; t++) {
    const l = n[t], s = e[t], i = Pe[s], u = { tag: "div", prop: s, cls: { tag: le, prop: "type", cls: l.map(([r, p]) => _e(r, p, s)) } }, m = { ...Fe, label: i, cls: u };
    o.push(m);
  }
  return { ...Me, cls: o };
}, Se = {
  second: "0",
  minute: "0",
  hour: "0",
  day: "1",
  month: "1",
  week: "?",
  year: "*"
}, Ue = (e, n, o, t) => {
  t && G(t) && (t.value[e][n] = o);
}, Ge = (e, n = Ue, o = Se) => {
  const t = c(e), a = [];
  for (const l of h) {
    let s = o[l];
    if (t[l] != null && t[l].type) {
      const i = t[l].type, u = De(t[l]), m = I[l], r = N[Number(i)], $ = m.filter((R) => R[0] == i)[0][2], y = typeof u == "function" ? u($) : !1;
      y && n(l, r, $, e), s = y || u;
    }
    a.push(s);
  }
  return a.join(" ");
}, z = (e) => {
  const n = e.split(" "), o = {};
  for (let t = 0, a = h.length; t < a; t++) {
    const l = h[t], s = n[t], u = I[l].map((r) => Number(r[0])), m = Y(s, u);
    o[l] = Ce(s, m);
  }
  return o;
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
    const o = n, t = e, {
      modelValue: a,
      layout: l,
      rules: s,
      showMessage: i,
      size: u,
      noInput: m,
      disabled: r,
      labelPosition: p
    } = Q(t), { label: $, required: y, elFormItem: R, inlineMessage: j, error: q } = t;
    let _ = !0;
    const { cronData: C, cronText: g, column: B, validator: L } = ge(
      a.value,
      l == null ? void 0 : l.value
    ), f = S(c(a) || g.value);
    console.log(B);
    const W = [
      ...c(s),
      // @ts-ignore
      {
        validator: (x, d = c(f), b) => {
          if (!d) {
            b();
            return;
          }
          const w = L(d);
          w ? b(w) : b();
        }
      }
    ], H = {
      label: $,
      required: y,
      inlineMessage: j,
      error: q,
      ...R,
      rules: W,
      prop: "text"
    };
    return v(a, (x) => {
      x != f.value && (f.value = x);
    }), v(f, (x) => {
      if (!_) {
        _ = !0;
        return;
      }
      if (L(x) != "")
        return;
      const d = x.trim();
      x != g.value && (g.value = d), d !== f.value && (_ = !1, f.value = d), x != a.value && o("update:modelValue", d);
    }), v(g, (x) => {
      console.log("cronText ===> ", x), x !== f.value && (f.value = x);
    }), U(() => {
      c(f) || (f.value = g.value);
    }), (x, d) => (T(), A("div", Ye, [
      c(m) ? te("", !0) : (T(), A("div", {
        key: 0,
        class: X(["el-form-input", [{ "has-message": c(i), "is-top": c(p) == "top" }]])
      }, [
        c(i) ? (T(), O(c(xe), {
          key: 0,
          model: { text: f.value },
          size: c(u),
          "label-position": c(p)
        }, {
          default: P(() => [
            D(c(be), Z(ee(H)), {
              default: P(() => [
                D(c(M), {
                  modelValue: f.value,
                  "onUpdate:modelValue": d[0] || (d[0] = (b) => f.value = b),
                  disabled: c(r)
                }, null, 8, ["modelValue", "disabled"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 8, ["model", "size", "label-position"])) : (T(), O(c(M), {
          key: 1,
          modelValue: f.value,
          "onUpdate:modelValue": d[1] || (d[1] = (b) => f.value = b),
          size: c(u),
          disabled: c(r)
        }, null, 8, ["modelValue", "size", "disabled"]))
      ], 2)),
      ne("div", je, [
        D(c(oe), {
          modelValue: c(C),
          "onUpdate:modelValue": d[2] || (d[2] = (b) => G(C) ? C.value = b : null),
          column: c(B),
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
