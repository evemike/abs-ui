var nt = Object.defineProperty;
var ot = (n, y, u) => y in n ? nt(n, y, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[y] = u;
var P = (n, y, u) => (ot(n, typeof y != "symbol" ? y + "" : y, u), u);
import { unref as v, isRef as q, computed as Y, renderSlot as it, resolveDynamicComponent as ct, createVNode as at, resolveComponent as z, h as H, mergeProps as V, isVNode as U, defineComponent as lt } from "vue";
import { b2 as tt, V as J, g as F, b3 as ut, aX as X, b4 as pt, as as dt, aW as ft, b5 as et, aV as Q, C as M, b6 as gt, b0 as N, b7 as Z } from "./vendor.DW1gWLiY.js";
var C;
((n) => {
  const y = /^\s*v-([\w-]+)\s*$/, u = /^\s*(?:(?:v-slot:|#)(\w+)|v-slot)\s*$/, e = /^\s*(?:(?:v-bind:|:)(\w+)|v-bind)\s*$/, l = /^\s*(?:v-on:|@)([\w:]+)\s*$/, f = /^\s*(?:v-model\:?)(\w+)\s*$/, h = [
    "tag",
    "setup",
    "hooks",
    "cls",
    "children",
    "contextKeys",
    "excludeKeys",
    "this",
    "slot-scope",
    "slot",
    "render",
    "beforeRender",
    "isDirectRender"
  ], m = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
  ];
  n.isHtmlTag = (t) => m.includes(t), n.getElemAttrs = (t, i, a) => {
    const r = Object.keys(t), o = { root: {}, directive: {}, prop: {}, ctx: {} };
    return r.forEach((s) => {
      var $;
      if (new Array().concat(
        t.excludeKeys || [],
        i.excludeKeys || []
      ).includes(s))
        return;
      const b = t[s], A = y.test(s) || e.test(s) || l.test(s) || f.test(s), S = new Array().concat(
        t.contextKeys || [],
        i.contextKeys || []
      ).includes(s);
      u.test(s) ? (o.root["slot-scope"] = b, o.root.slot = (($ = u.exec(s)) == null ? void 0 : $[1]) ?? "default") : A ? o.directive[s] = b : h.includes(s) && !S ? o.root[s] = b : !S && s == "contextData" && tt(b) ? o.ctx = { ...b } : o.prop[s] = b;
    }), o;
  }, n.getSlotName = (t) => {
    var a;
    const i = Object.keys(t).filter((r) => u.test(r));
    return i.length > 0 && ((a = u.exec(i[0])) == null ? void 0 : a[1]) || "default";
  };
  const d = ["this", "true", "false", "class"];
  n.doEval = (t = "", i = {}, a = !1) => {
    const r = Object.keys(i).filter((c) => typeof c == "string").filter((c) => !d.includes(c)).filter((c) => !/[^\w$]/.test(c)), o = r.map((c) => a ? v(i[c]) : i[c]), s = "return " + t;
    try {
      const c = new Function(...r, s)(...o);
      return a && q(c) ? v(c) : c;
    } catch (c) {
      console.error("字符串表达式执行异常！", t, i, a), console.error(r, o, s), console.error(c);
    }
  };
  const p = ["pointerevent"];
  n.parseDirective = (t, i) => {
    const a = Object.keys(t), r = { "v-bind": {}, "v-on": {} };
    return a.forEach((o) => {
      let s = t[o], c = t[o];
      if (typeof s == "string" && (J(i, s) ? s = F(i, s) : s = /^```.*?```$/.test(s) ? (0, n.getExpValue)(s.replace(/(^```|```$)/g, ""), i) : (0, n.doEval)(s, i, !0)), s = q(s) ? v(s) : s, e.test(o)) {
        const b = e.exec(o) ?? [];
        if (b[1] == null)
          if (ut(s))
            for (const [A, x] of s)
              y.test(A) ? r[A] = x : r["v-bind"][A] = x;
          else
            X(s) && Object.keys(s).forEach((A) => {
              y.test(A) ? r[A] = s[A] : r["v-bind"][A] = s[A];
            });
        else
          r["v-bind"][b[1]] = s;
      } else if (l.test(o)) {
        const b = l.exec(o) ?? [];
        if (b[1]) {
          const A = "on" + pt(b[1]);
          r["v-on"][A] = typeof s == "function" ? (x, ...S) => {
            const $ = Object.prototype.toString.call(x).split(" ")[1].replace("]", "").toLowerCase(), T = { ...i };
            return p.includes($) ? T.$event = x : S = [x, ...S], S.length > 0 && (T.$ = S), s.apply(i, [T]);
          } : s;
        }
      } else if (f.test(o)) {
        const A = (f.exec(o) ?? [])[1] ?? "modelValue", x = "onUpdate:" + A, S = typeof c;
        if (r["v-bind"][A] = s, S == "function")
          r["v-on"][x] = ($) => c.apply(i, [$, i]);
        else if (q(c))
          r["v-on"][x] = ($) => c.value = $;
        else if (S == "string") {
          const $ = (0, n.doEval)(c.split(".")[0], i), T = c.split(".").slice(1).join(".");
          $ && T && (X($) || q($)) ? r["v-on"][x] = (_) => dt(v($), T, _) : console.error("指令错误！ ==> ", o, c, $, T);
        } else
          console.error("指令错误！ ==> ", o, c);
      } else
        o === "v-if" ? typeof s == "function" ? r[o] = Y(() => s(i)).value : r[o] = Y(() => s).value : r[o] = s;
    }), r;
  };
  const K = (t, i, a) => {
    let r;
    for (; (r = t.exec(i)) !== null; )
      a(r);
  }, w = /\{\{\s*(.*?)\s*\}\}/g;
  n.getExpValue = (t, i = {}) => {
    if (!t)
      return "";
    let a = [], r = t;
    return K(w, t, ([o, s]) => {
      try {
        const c = (0, n.doEval)(s, i, !0);
        U(c) || Array.isArray(c) ? a = a.concat(c) : r = r.replace(o, c);
      } catch {
        console.error("=====字符串模板解析异常！=====", s, i);
      }
    }), (r != t || a.length == 0) && a.push(r), a.join("");
  };
  const G = /^\s*\[(.*)\]\s*$/, R = /^\s*\{(.*)\}\s*$/;
  n.getDestruct = (t, i = {}) => {
    const a = v(i);
    if (!t || typeof t == "boolean")
      return t === !1 ? {} : a;
    const r = {};
    if (ft(a) && G.test(t)) {
      const o = G.exec(t);
      (o != null && o[1] ? o[1].split(",").map((c) => c.trim()) : []).forEach((c, b) => {
        r[c] = a == null ? void 0 : a[b];
      });
    } else if (X(a) && R.test(t)) {
      const o = R.exec(t);
      (o != null && o[1] ? o[1].split(",").map((c) => c.trim()) : []).forEach((c) => {
        const [b, A] = c.split(":").map((x) => x.trim());
        r[A || b] = F(a, b);
      });
    } else
      r[t] = a;
    return r;
  }, n.specialRender = {
    template({ children: t }) {
      return t == null ? void 0 : t.default();
    },
    slot({ props: t, children: i, slots: a }) {
      const r = t.name || "default";
      delete t.name;
      const o = (i == null ? void 0 : i[r]) ?? (() => []);
      return it(a, r, t, () => o());
    },
    component({ props: t, children: i }) {
      const a = t.is;
      delete t.is;
      const r = ct(a);
      return at(r, t, i);
    }
  }, n.defaultRender = (t) => {
    const i = t.tagname;
    if (n.specialRender[i])
      return n.specialRender[i](t);
    const a = t.directives, r = t.children, o = typeof t.tag == "string" ? t.isHtml ? t.tag : z(t.tag) : t.tag, s = t.props;
    return a["v-text"] ? H(o, s, a["v-text"]) : H(o, s, r);
  }, n.propsFilter = (t, i) => et(t, i), n.getProps = (t, i) => {
    const { prop: a, directive: r } = (0, n.getElemAttrs)(t, {}), o = (0, n.parseDirective)(r, i);
    return V(a, o["v-bind"], o["v-on"]);
  };
})(C || (C = {}));
var k;
((n) => {
  n.dateFormat = (u, e = "yyyy-MM-dd") => {
  }, n.getDataAttr = (u, e, l) => {
    if (typeof e == "function")
      return e(u);
    const {
      multiple: f = !1,
      notValues: h = [void 0, null, ""],
      value: m
    } = l || {};
    if (typeof e == "string") {
      const p = F(u, e);
      return h != null && h.includes(p) && m !== void 0 ? m : p;
    }
    const d = [];
    return e.map((p) => {
      const K = F(u, p);
      h != null && h.includes(K) || d.push(K);
    }), m != null && d.length == 0 && d.push(m), f ? d : d[0];
  }, n.getSetGroupData = (u, e) => {
  };
  class y {
    //
    constructor(e = {}) {
      //
      P(this, "data", []);
      P(this, "group", []);
      P(this, "keys", ["id", "prop"]);
      P(this, "groupAttr", {});
      //
      P(this, "source", []);
      P(this, "list", []);
      P(this, "listKeys", []);
      //
      P(this, "groupTemp", {});
      Object.assign(this, e);
    }
    // clone
    clone() {
    }
    // 增加数据
    addData(e) {
      return this.source = new Array().concat(this.data, e), this;
    }
    //
    mergeData(e = {}) {
      return this.list = this.source.map(
        (l) => Q(M({}, l, V(l, e)))
      ), this.resetDataKeys(), this;
    }
    resetData(e) {
      return this.list = this.source.map((l) => Q(e(l))), this.resetDataKeys(), this;
    }
    resetDataKeys(e) {
      return e || (e = this.keys), e != null && this.list.length > 0 && (this.listKeys = this.list.map(
        (l) => (0, n.getDataAttr)(l, e)
      )), this;
    }
    checkKeys() {
      return !(new Set(this.listKeys).size < this.listKeys.length);
    }
    //
    getGroup(e) {
      const l = e || this.group || [], [f, ...h] = l, m = Array.isArray(f) && typeof f[0] == "string" && /^:/.test(f[0]), d = m ? h : l, p = this.getGroupItem(d, m);
      if (!m)
        return p;
    }
    // 分组结构
    getGroupStruct(e, l) {
      const f = typeof this.groupAttr == "function" ? this.groupAttr(e) : this.groupAttr, h = [], m = e.length;
      for (let d = 0; d < m; d++) {
        const p = e[d];
        if (!(d == 0 && typeof p == "string" && /^:/.test(p))) {
          if (tt(p) && p.id) {
            J(l, p.id) && h.push(M({}, f, V(f, p), { children: F(l, p.id) }));
            continue;
          }
          if (typeof p != "string" && Array.isArray(p)) {
            h.push(this.getGroupStruct(p, l));
            continue;
          }
        }
      }
      return {};
    }
    getGroupItem(e, l = !1) {
      const f = { $: [] }, h = [];
      return e.map((m) => {
        if (typeof m == "string") {
          const d = this.getListData(m);
          d && f.$.push(d) && h.push(d);
        } else if (Array.isArray(m)) {
          const [d, ...p] = m, K = /^@/.test(d) ? p : m, w = (/^@(\w+)?/.exec(d) || [])[1] || "$";
          J(f, w) || (f[w] = []);
          const G = K.map((R) => this.getListData(R)).filter((R) => R != null);
          f[w].push(...G), h.push(this.getGroupAttr({ children: G }));
        }
      }), l ? f : h;
    }
    getGroupAttr(e = {}, l = []) {
      const f = typeof this.groupAttr == "function" ? this.groupAttr(l) : this.groupAttr;
      return M({}, f, V(f, e));
    }
    getListData(e) {
      const l = this.listKeys.indexOf(e);
      if (l > -1)
        return this.list[l];
    }
  }
  n.SetGroup = y;
})(k || (k = {}));
const ht = (n) => n && typeof n == "object" && (n == null ? void 0 : n.tag) == null && (n.setup != null || n.render != null) && (n.name || n.__name), mt = C.getElemAttrs, vt = C.parseDirective, yt = C.getExpValue, bt = C.getDestruct, At = C.getSlotName, $t = C.isHtmlTag, Kt = C.defaultRender, xt = C.getProps, _t = lt({
  name: "els-elem",
  props: {
    elem: Object,
    context: Object,
    parent: Object,
    params: Object,
    slotParams: Object,
    slots: Object
  },
  setup(n, y) {
    const u = n.elem || {}, e = n.context || {}, l = n.parent, f = n.params || {}, h = gt(
      {},
      e.slots || {},
      n.slots || y.slots
    ), m = v(u == null ? void 0 : u.tag) || v(e == null ? void 0 : e.tag) || "div", d = v(e == null ? void 0 : e.tag), p = d && N(d) && typeof m == "string" ? d({ tag: m, elem: u, context: e, parent: l, params: f, slots: h }, y) : N(m) ? m({ ...n, slots: h }, y) : m, K = typeof v(p) == "string" ? v(p) : Z(v(p).name), w = $t(K);
    let G = {}, R = {};
    const t = { prop: {} };
    e.setup && (R = e.setup(
      n,
      { tag: v(p), tagname: K, isHtml: w },
      y
    ) || {}, M(t, R)), u.setup && (G = u.setup(
      n,
      { tag: v(p), tagname: K, isHtml: w },
      y
    ) || {}, M(t, G));
    const i = { $isHtml: w, ...(e == null ? void 0 : e.params) || {}, ...f, ...t }, a = mt(V(u, t.prop || {}), e, i), { root: r, prop: o, directive: s, ctx: c } = a, b = new Array().concat(
      t.excludeKeys || [],
      u.excludeKeys || [],
      e.excludeKeys || []
    ), A = { ...i, prop: o, ...c, h: H }, x = {
      $tag: v(p),
      $tagname: K,
      $isHtml: w,
      $slots: h,
      $elem: u,
      $context: e,
      $root: r,
      $prop: o,
      $directive: s,
      $elemSetupRes: G,
      $ctxSetupRes: R,
      $setupRes: t,
      $parent: l,
      $params: f
    }, S = Y(
      () => new Array().concat(v(r.children), v(r.cls)).filter((_) => _ != null)
    ), $ = (_) => {
      const I = v(S);
      if (I.length === 0)
        return;
      const D = {
        default: []
      };
      I.forEach((j) => {
        const g = v(j);
        if (U(g))
          D.default.push(() => g);
        else if (ht(g))
          D.default.push(() => H(g));
        else if (N(g))
          D.default.push((O) => g(_, O, x));
        else if (X(g)) {
          const O = At(g);
          if (D[O] || (D[O] = []), g.isDirectRender === !0) {
            const L = v(g == null ? void 0 : g.tag) ?? v(e == null ? void 0 : e.tag) ?? "div", B = N(d) ? d({ tag: L, elem: g, context: e, params: _, parent: l }, y) : N(L) ? L({ elem: g, context: e, params: _ }, y) : L, st = typeof v(B) == "string" ? v(B) : Z(v(B).name);
            D[O].push(
              (W = {}) => H(B, xt(g, { ..._, ...W }), {
                default: (rt = {}) => [
                  H(z("els-elem"), {
                    elem: { tag: "template", cls: g.cls },
                    context: e,
                    parent: { elem: g, tagname: st, setupRes: t },
                    params: _,
                    slotParams: { ...W, ...rt },
                    slots: h
                  })
                ]
              })
            );
          } else
            D[O].push(
              (L) => H(z("els-elem"), {
                elem: g,
                context: e,
                parent: { elem: u, tagname: K, setupRes: t },
                params: _,
                slotParams: L,
                slots: h
              })
            );
        } else
          D.default.push((O) => yt(String(g), _));
      });
      const E = {};
      return Object.keys(D).forEach((j) => {
        E[j] = (g) => D[j].map((O) => O(g));
      }), E;
    };
    return () => {
      const _ = bt(r["slot-scope"], n.slotParams), I = { ...A, ..._ }, D = vt(s, I);
      if (D["v-if"] === !1)
        return;
      const E = et(
        V(o, D["v-bind"], D["v-on"]),
        b
      ), j = $(I), g = {
        tag: v(p),
        tagname: K,
        isHtml: w,
        props: E,
        children: j,
        context: e,
        elem: u,
        slots: h,
        parent: l,
        directives: D,
        setupRes: t
      }, O = (G == null ? void 0 : G.render) || (r == null ? void 0 : r.render) || (R == null ? void 0 : R.render) || (e == null ? void 0 : e.render);
      if (O) {
        if (N(O))
          return O(g);
        if (O[K] != null)
          return O[K](g);
      }
      return Kt(g);
    };
  }
});
export {
  k as D,
  _t as E,
  C as a,
  ht as i
};
