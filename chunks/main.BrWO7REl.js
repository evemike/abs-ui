var nt = Object.defineProperty;
var ot = (n, y, u) => y in n ? nt(n, y, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[y] = u;
var C = (n, y, u) => (ot(n, typeof y != "symbol" ? y + "" : y, u), u);
import { unref as v, isRef as Y, computed as z, renderSlot as it, resolveDynamicComponent as ct, createVNode as at, resolveComponent as J, h as H, mergeProps as I, isVNode as U, defineComponent as lt } from "vue";
import { b4 as tt, a3 as X, A as M, b5 as ut, aZ as q, b6 as pt, ax as dt, i as ft, b7 as et, aY as Q, m as V, b8 as gt, b2 as N, b9 as W } from "./vendor.4pP_Prrf.js";
var P;
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
      return a && Y(c) ? v(c) : c;
    } catch (c) {
      console.error("字符串表达式执行异常！", t, i, a), console.error(r, o, s), console.error(c);
    }
  };
  const p = ["pointerevent"];
  n.parseDirective = (t, i) => {
    const a = Object.keys(t), r = { "v-bind": {}, "v-on": {} };
    return a.forEach((o) => {
      let s = t[o], c = t[o];
      if (typeof s == "string" && (X(i, s) ? s = M(i, s) : s = /^```.*?```$/.test(s) ? (0, n.getExpValue)(s.replace(/(^```|```$)/g, ""), i) : (0, n.doEval)(s, i, !0)), s = Y(s) ? v(s) : s, e.test(o)) {
        const b = e.exec(o) ?? [];
        if (b[1] == null)
          if (ut(s))
            for (const [A, K] of s)
              y.test(A) ? r[A] = K : r["v-bind"][A] = K;
          else
            q(s) && Object.keys(s).forEach((A) => {
              y.test(A) ? r[A] = s[A] : r["v-bind"][A] = s[A];
            });
        else
          r["v-bind"][b[1]] = s;
      } else if (l.test(o)) {
        const b = l.exec(o) ?? [];
        if (b[1]) {
          const A = "on" + pt(b[1]);
          r["v-on"][A] = typeof s == "function" ? (K, ...S) => {
            const $ = Object.prototype.toString.call(K).split(" ")[1].replace("]", "").toLowerCase(), T = { ...i };
            return p.includes($) ? T.$event = K : S = [K, ...S], S.length > 0 && (T.$ = S), s.apply(i, [T]);
          } : s;
        }
      } else if (f.test(o)) {
        const A = (f.exec(o) ?? [])[1] ?? "modelValue", K = "onUpdate:" + A, S = typeof c;
        if (r["v-bind"][A] = s, S == "function")
          r["v-on"][K] = ($) => c.apply(i, [$, i]);
        else if (Y(c))
          r["v-on"][K] = ($) => c.value = $;
        else if (S == "string") {
          const $ = (0, n.doEval)(c.split(".")[0], i), T = c.split(".").slice(1).join(".");
          $ && T && (q($) || Y($)) ? r["v-on"][K] = (_) => dt(v($), T, _) : console.error("指令错误！ ==> ", o, c, $, T);
        } else
          console.error("指令错误！ ==> ", o, c);
      } else
        o === "v-if" ? typeof s == "function" ? r[o] = z(() => s(i)).value : r[o] = z(() => s).value : r[o] = s;
    }), r;
  };
  const x = (t, i, a) => {
    let r;
    for (; (r = t.exec(i)) !== null; )
      a(r);
  }, w = /\{\{\s*(.*?)\s*\}\}/g;
  n.getExpValue = (t, i = {}) => {
    if (!t)
      return "";
    let a = [], r = t;
    return x(w, t, ([o, s]) => {
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
    } else if (q(a) && R.test(t)) {
      const o = R.exec(t);
      (o != null && o[1] ? o[1].split(",").map((c) => c.trim()) : []).forEach((c) => {
        const [b, A] = c.split(":").map((K) => K.trim());
        r[A || b] = M(a, b);
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
    const a = t.directives, r = t.children, o = typeof t.tag == "string" ? t.isHtml ? t.tag : J(t.tag) : t.tag, s = t.props;
    return a["v-text"] ? H(o, s, a["v-text"]) : H(o, s, r);
  }, n.propsFilter = (t, i) => et(t, i), n.getProps = (t, i) => {
    const { prop: a, directive: r } = (0, n.getElemAttrs)(t, {}), o = (0, n.parseDirective)(r, i);
    return I(a, o["v-bind"], o["v-on"]);
  };
})(P || (P = {}));
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
      const p = M(u, e);
      return h != null && h.includes(p) && m !== void 0 ? m : p;
    }
    const d = [];
    return e.map((p) => {
      const x = M(u, p);
      h != null && h.includes(x) || d.push(x);
    }), m != null && d.length == 0 && d.push(m), f ? d : d[0];
  }, n.getSetGroupData = (u, e) => {
  };
  class y {
    //
    constructor(e = {}) {
      //
      C(this, "data", []);
      C(this, "group", []);
      C(this, "keys", ["id", "prop"]);
      C(this, "groupAttr", {});
      //
      C(this, "source", []);
      C(this, "list", []);
      C(this, "listKeys", []);
      //
      C(this, "groupTemp", {});
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
        (l) => Q(V({}, l, I(l, e)))
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
            X(l, p.id) && h.push(V({}, f, I(f, p), { children: M(l, p.id) }));
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
          const [d, ...p] = m, x = /^@/.test(d) ? p : m, w = (/^@(\w+)?/.exec(d) || [])[1] || "$";
          X(f, w) || (f[w] = []);
          const G = x.map((R) => this.getListData(R)).filter((R) => R != null);
          f[w].push(...G), h.push(this.getGroupAttr({ children: G }));
        }
      }), l ? f : h;
    }
    getGroupAttr(e = {}, l = []) {
      const f = typeof this.groupAttr == "function" ? this.groupAttr(l) : this.groupAttr;
      return V({}, f, I(f, e));
    }
    getListData(e) {
      const l = this.listKeys.indexOf(e);
      if (l > -1)
        return this.list[l];
    }
  }
  n.SetGroup = y;
})(k || (k = {}));
const ht = (n) => n && typeof n == "object" && (n == null ? void 0 : n.tag) == null && (n.setup != null || n.render != null) && (n.name || n.__name), mt = P.getElemAttrs, vt = P.parseDirective, yt = P.getExpValue, bt = P.getDestruct, At = P.getSlotName, $t = P.isHtmlTag, xt = P.defaultRender, Kt = P.getProps, _t = lt({
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
    ), m = v(u == null ? void 0 : u.tag) || v(e == null ? void 0 : e.tag) || "div", d = v(e == null ? void 0 : e.tag), p = d && N(d) && typeof m == "string" ? d({ tag: m, elem: u, context: e, parent: l, params: f, slots: h }, y) : N(m) ? m({ ...n, slots: h }, y) : m, x = typeof v(p) == "string" ? v(p) : W(v(p).name), w = $t(x);
    let G = {}, R = {};
    const t = { prop: {} };
    e.setup && (R = e.setup(
      n,
      { tag: v(p), tagname: x, isHtml: w },
      y
    ) || {}, V(t, R)), u.setup && (G = u.setup(
      n,
      { tag: v(p), tagname: x, isHtml: w },
      y
    ) || {}, V(t, G));
    const i = { $isHtml: w, ...(e == null ? void 0 : e.params) || {}, ...f, ...t }, a = mt(I(u, t.prop || {}), e, i), { root: r, prop: o, directive: s, ctx: c } = a, b = new Array().concat(
      t.excludeKeys || [],
      u.excludeKeys || [],
      e.excludeKeys || []
    ), A = { ...i, prop: o, ...c, h: H }, K = {
      $tag: v(p),
      $tagname: x,
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
    }, S = z(
      () => new Array().concat(v(r.children), v(r.cls)).filter((_) => _ != null)
    ), $ = (_) => {
      const F = v(S);
      if (F.length === 0)
        return;
      const D = {
        default: []
      };
      F.forEach((j) => {
        const g = v(j);
        if (U(g))
          D.default.push(() => g);
        else if (ht(g))
          D.default.push(() => H(g));
        else if (N(g))
          D.default.push((O) => g(_, O, K));
        else if (q(g)) {
          const O = At(g);
          if (D[O] || (D[O] = []), g.isDirectRender === !0) {
            const L = v(g == null ? void 0 : g.tag) ?? v(e == null ? void 0 : e.tag) ?? "div", B = N(d) ? d({ tag: L, elem: g, context: e, params: _, parent: l }, y) : N(L) ? L({ elem: g, context: e, params: _ }, y) : L, st = typeof v(B) == "string" ? v(B) : W(v(B).name);
            D[O].push(
              (Z = {}) => H(B, Kt(g, { ..._, ...Z }), {
                default: (rt = {}) => [
                  H(J("els-elem"), {
                    elem: { tag: "template", cls: g.cls },
                    context: e,
                    parent: { elem: g, tagname: st, setupRes: t },
                    params: _,
                    slotParams: { ...Z, ...rt },
                    slots: h
                  })
                ]
              })
            );
          } else
            D[O].push(
              (L) => H(J("els-elem"), {
                elem: g,
                context: e,
                parent: { elem: u, tagname: x, setupRes: t },
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
      const _ = bt(r["slot-scope"], n.slotParams), F = { ...A, ..._ }, D = vt(s, F);
      if (D["v-if"] === !1)
        return;
      const E = et(
        I(o, D["v-bind"], D["v-on"]),
        b
      ), j = $(F), g = {
        tag: v(p),
        tagname: x,
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
        if (O[x] != null)
          return O[x](g);
      }
      return xt(g);
    };
  }
});
export {
  k as D,
  _t as E,
  P as a,
  ht as i
};