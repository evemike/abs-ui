import "../css/main-8YhZr14n.css";
import { ref as z, reactive as H, watch as $, onMounted as F, unref as c, isRef as S, defineComponent as K, toRefs as Q, openBlock as R, createElementBlock as L, normalizeClass as J, createBlock as w, withCtx as M, createVNode as D, normalizeProps as X, guardReactiveProps as Z, createCommentVNode as ee, createElementVNode as te } from "vue";
import { _ as ne } from "./main.vue_vue_type_script_setup_true_lang.BmWwuW6z.js";
import { aQ as se, R as oe, aR as ae, t as le, aS as re, a3 as ce, aA as ie, ao as ue, a4 as me, j as fe, l as de, az as pe, M as xe, aB as be, aC as ve, e as O } from "./vendor.DBgIaorj.js";
function ge(e, n) {
  const s = z(e ?? ""), t = H({});
  let l = !1, a = !0, o = "0 0 0 * * ? *";
  const u = [Se(n)], m = (r) => {
    o = r, s.value = r;
  };
  return e ? o = e : s.value = o, oe(t, P(o)), $(
    t,
    () => {
      if (!l || !a) {
        setTimeout(() => {
          a = !0;
        }, 50);
        return;
      }
      const r = Ye(t);
      r !== o && m(r);
    },
    { deep: !0 }
  ), $(s, (r) => {
    if (r != o) {
      const x = P(r);
      o = r, a = !1, ae(t, x, (g, v) => {
        if (Array.isArray(g) && Array.isArray(v))
          return v;
      });
    }
  }), F(() => {
    l = !0;
  }), { cronData: t, cronText: s, column: u, validator: Oe };
}
const _ = [
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
], he = { tag: ie }, $e = { tag: fe, elFormItem: !1, onClick: (e) => {
  e == null || e.preventDefault();
} }, ye = {
  tag: de,
  controlsPosition: "right",
  elFormItem: !1
}, Re = (e, n) => {
  const { attrs: s, prefix: t = "", suffix: l = "", connect: a = [] } = n, o = [t], i = new Array().concat(a);
  let u = 0;
  for (const m of s) {
    const r = `${e}.${u}`, x = i[u] || "";
    ue(m) ? o.push({ ...$e, prop: r, value: m[0].value, cls: m }) : o.push({ ...ye, prop: r, value: m == null ? void 0 : m.min, ...m }), x && o.push(x), u++;
  }
  return o.push(l), o;
}, _e = { tag: pe, class: "_item _checkbox-group" }, Ne = { tag: xe }, Te = (e, n = {}) => {
  const { min: s = 0, max: t = 59, getLabel: l } = n, a = [];
  for (let o = s; o <= t; o++) {
    const i = l ? l(o) : `${o}`;
    a.push({ ...Ne, label: o, cls: i });
  }
  return [{ ..._e, prop: e, cls: a }];
}, Ce = (e, n, s) => {
  const t = _[Number(e)];
  let l = "";
  t ? t === "the" ? l = Te(`^${s}.${t}`, n) : l = Re(`^${s}.${t}`, n) : l = n;
  const a = `_radio-item _label-${e}`;
  return { ...he, class: a, label: e, cls: l };
}, De = (e, n) => {
  const s = { type: String(n) }, t = _[n], l = k[n], [a, ...o] = n == 9 ? [""].concat(re(e.split(","))) : l.exec(e) || [];
  return s[t] = o.map((i) => Number(i)), s;
}, ke = (e) => {
  const n = Number(e.type), s = k[n], t = _[n], l = Ee[n], a = typeof l == "string", o = e[t] || [], i = a ? l : l(o);
  return !a && !s.test(i) ? l : i;
}, Ve = [
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
], Ae = [
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
], Be = [
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
], Ie = [
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
], h = [
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
      attrs: [h, h],
      prefix: "周期从星期",
      connect: " 到星期"
    },
    [1, 1]
  ],
  [
    "6",
    {
      attrs: [{ min: 1, max: 4 }, h],
      prefix: "每月第",
      connect: "周的星期"
    },
    [1, 1]
  ],
  [
    "5",
    {
      attrs: [h],
      prefix: "本月的最后一周的星期"
    },
    [1]
  ],
  [
    "9",
    { min: 1, max: 7, getLabel: (e) => h[e - 1].label },
    [1]
  ]
], Me = [
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
], U = (e, n) => {
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
  ["second", Ve, "[* 数字（-，/）]"],
  ["minute", Ae, ""],
  ["hour", Be, ""],
  ["day", Ie, ""],
  ["month", Le, ""],
  ["week", we, ""],
  ["year", Me, "[? * ]"]
], y = V.map((e) => e[0]), A = se(V), Oe = (e) => {
  const n = e.trim().split(" ");
  if (n.length !== 7)
    return `ERROR_LENGTH :${n.length} : ${e} - [${y.join(" ")}]`;
  for (let s = 0, t = n.length; s < t; s++) {
    const l = n[s], [a, o, i] = V[s], u = o.map((r) => Number(r[0]));
    if (U(l, u) == -1)
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
}, ze = { tag: me, isDirectRender: !0 }, Fe = { tag: ce, type: "border-card" }, Se = (e = y) => {
  const n = e.map((t) => A[t]), s = [];
  for (let t = 0, l = e.length; t < l; t++) {
    const a = n[t], o = e[t], i = Pe[o], u = { tag: "div", prop: o, cls: { tag: le, prop: "type", cls: a.map(([r, x]) => Ce(r, x, o)) } }, m = { ...ze, label: i, cls: u };
    s.push(m);
  }
  return { ...Fe, cls: s };
}, Ue = {
  second: "0",
  minute: "0",
  hour: "0",
  day: "1",
  month: "1",
  week: "?",
  year: "*"
}, Ge = (e, n, s, t) => {
  t && S(t) && (t.value[e][n] = s);
}, Ye = (e, n = Ge, s = Ue) => {
  const t = c(e), l = [];
  for (const a of y) {
    let o = s[a];
    if (t[a] != null && t[a].type) {
      const i = t[a].type, u = ke(t[a]), m = A[a], r = _[Number(i)], g = m.filter((N) => N[0] == i)[0][2], v = typeof u == "function" ? u(g) : !1;
      v && n(a, r, g, e), o = v || u;
    }
    l.push(o);
  }
  return l.join(" ");
}, P = (e) => {
  const n = e.split(" "), s = {};
  for (let t = 0, l = y.length; t < l; t++) {
    const a = y[t], o = n[t], u = A[a].map((r) => Number(r[0])), m = U(o, u);
    s[a] = De(o, m);
  }
  return s;
}, We = { class: "els-cron" }, je = { class: "els-cron-expl" }, qe = {
  name: "els-cron"
}, Xe = /* @__PURE__ */ K({
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
    } = Q(t), { label: g, required: v, elFormItem: N, inlineMessage: G, error: Y } = t;
    let T = !0;
    const { cronData: C, cronText: E, column: W, validator: B } = ge(
      l.value,
      a == null ? void 0 : a.value
    ), f = z(c(l) || E.value), j = [
      ...c(o),
      // @ts-ignore
      {
        validator: (p, d = c(f), b) => {
          if (!d) {
            b();
            return;
          }
          const I = B(d);
          I ? b(I) : b();
        }
      }
    ], q = {
      label: g,
      required: v,
      inlineMessage: G,
      error: Y,
      ...N,
      rules: j,
      prop: "text"
    };
    return $(l, (p) => {
      p != f.value && (f.value = p);
    }), $(f, (p) => {
      if (!T) {
        T = !0;
        return;
      }
      if (B(p) != "")
        return;
      const d = p.trim();
      p != E.value && (E.value = d), d !== f.value && (T = !1, f.value = d), p != l.value && s("update:modelValue", d);
    }), $(E, (p) => {
      p !== f.value && (f.value = p);
    }), F(() => {
      c(f) || (f.value = E.value);
    }), (p, d) => (R(), L("div", We, [
      c(m) ? ee("", !0) : (R(), L("div", {
        key: 0,
        class: J(["el-form-input", [{ "has-message": c(i), "is-top": c(x) == "top" }]])
      }, [
        c(i) ? (R(), w(c(be), {
          key: 0,
          model: { text: f.value },
          size: c(u),
          "label-position": c(x)
        }, {
          default: M(() => [
            D(c(ve), X(Z(q)), {
              default: M(() => [
                D(c(O), {
                  modelValue: f.value,
                  "onUpdate:modelValue": d[0] || (d[0] = (b) => f.value = b),
                  disabled: c(r)
                }, null, 8, ["modelValue", "disabled"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 8, ["model", "size", "label-position"])) : (R(), w(c(O), {
          key: 1,
          modelValue: f.value,
          "onUpdate:modelValue": d[1] || (d[1] = (b) => f.value = b),
          size: c(u),
          disabled: c(r)
        }, null, 8, ["modelValue", "size", "disabled"]))
      ], 2)),
      te("div", je, [
        D(c(ne), {
          modelValue: c(C),
          "onUpdate:modelValue": d[2] || (d[2] = (b) => S(C) ? C.value = b : null),
          column: c(W),
          size: "small",
          disabled: c(r)
        }, null, 8, ["modelValue", "column", "disabled"])
      ])
    ]));
  }
});
export {
  Xe as _
};
