var et = Object.defineProperty;
var st = (n, v, u) => v in n ? et(n, v, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[v] = u;
var _ = (n, v, u) => (st(n, typeof v != "symbol" ? v + "" : v, u), u);
import { unref as y, computed as M, renderSlot as rt, resolveDynamicComponent as nt, createVNode as ot, resolveComponent as q, h as w, mergeProps as F, isVNode as W, defineComponent as it } from "vue";
import { aB as Z, aC as at, ar as V, aD as ct, aq as lt, g as B, aE as k, ap as z, Y as I, a5 as J, aF as ut, ay as H, aG as X } from "./vendor.BakInURX.js";
var S;
((n) => {
  const v = /^\s*v-([\w-]+)\s*$/, u = /^\s*(?:(?:v-slot:|#)(\w+)|v-slot)\s*$/, e = /^\s*(?:(?:v-bind:|:)(\w+)|v-bind)\s*$/, l = /^\s*(?:v-on:|@)([\w:]+)\s*$/, g = [
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
  ], h = [
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
  n.isHtmlTag = (t) => h.includes(t), n.getElemAttrs = (t, o) => {
    const i = Object.keys(t), s = { root: {}, directive: {}, prop: {}, ctx: {} };
    return i.forEach((r) => {
      var P;
      if (new Array().concat(
        t.excludeKeys || [],
        o.excludeKeys || []
      ).includes(r))
        return;
      const a = t[r], b = v.test(r) || e.test(r) || l.test(r), R = new Array().concat(
        t.contextKeys || [],
        o.contextKeys || []
      ).includes(r);
      u.test(r) ? (s.root["slot-scope"] = a, s.root.slot = ((P = u.exec(r)) == null ? void 0 : P[1]) ?? "default") : b ? s.directive[r] = a : g.includes(r) && !R ? s.root[r] = a : !R && r == "contextData" && Z(a) ? s.ctx = { ...a } : s.prop[r] = a;
    }), s;
  }, n.getSlotName = (t) => {
    var i;
    const o = Object.keys(t).filter((s) => u.test(s));
    return o.length > 0 && ((i = u.exec(o[0])) == null ? void 0 : i[1]) || "default";
  };
  const m = ["this", "true", "false", "class"];
  n.doEval = (t = "", o = {}, i = !1) => {
    const s = Object.keys(o).filter((a) => typeof a == "string").filter((a) => !m.includes(a)).filter((a) => !/[^\w$]/.test(a)), r = s.map((a) => i ? y(o[a]) : o[a]), c = "return " + t;
    try {
      return i ? y(new Function(...s, c)(...r)) : new Function(...s, c)(...r);
    } catch (a) {
      console.error("字符串表达式执行异常！", t, o, i), console.error(s, r, c), console.error(a);
    }
  };
  const d = ["pointerevent"];
  n.parseDirective = (t, o) => {
    const i = Object.keys(t), s = { "v-bind": {}, "v-on": {} };
    return i.forEach((r) => {
      let c = t[r];
      if (typeof c == "string" ? c = (0, n.doEval)(c, o, !0) : c = y(c), e.test(r)) {
        const a = e.exec(r) ?? [];
        if (a[1] == null)
          if (at(c))
            for (const [b, O] of c)
              v.test(b) ? s[b] = O : s["v-bind"][b] = O;
          else
            V(c) && Object.keys(c).forEach((b) => {
              v.test(b) ? s[b] = c[b] : s["v-bind"][b] = c[b];
            });
        else
          s["v-bind"][a[1]] = c;
      } else if (l.test(r)) {
        const a = l.exec(r) ?? [];
        if (a[1]) {
          const b = "on" + ct(a[1]);
          s["v-on"][b] = typeof c == "function" ? (O, ...R) => {
            const P = Object.prototype.toString.call(O).split(" ")[1].replace("]", "").toLowerCase(), L = { ...o };
            return d.includes(P) ? L.$event = O : R = [O, ...R], R.length > 0 && (L.$ = R), c.apply(o, [L]);
          } : c;
        }
      } else
        r === "v-if" ? typeof c == "function" ? s[r] = M(() => c(o)).value : s[r] = M(() => c).value : s[r] = c;
    }), s;
  };
  const p = (t, o, i) => {
    let s;
    for (; (s = t.exec(o)) !== null; )
      i(s);
  }, A = /\{\{\s*(.*?)\s*\}\}/g;
  n.getExpValue = (t, o = {}) => {
    if (!t)
      return "";
    let i = [], s = t;
    return p(A, t, ([r, c]) => {
      try {
        const a = (0, n.doEval)(c, o, !0);
        W(a) || Array.isArray(a) ? i = i.concat(a) : s = s.replace(r, a);
      } catch {
        console.error("=====字符串模板解析异常！=====", c, o);
      }
    }), (s != t || i.length == 0) && i.push(s), i;
  };
  const D = /^\s*\[(.*)\]\s*$/, x = /^\s*\{(.*)\}\s*$/;
  n.getDestruct = (t, o = {}) => {
    const i = y(o);
    if (!t || typeof t == "boolean")
      return t === !1 ? {} : i;
    const s = {};
    if (lt(i) && D.test(t)) {
      const r = D.exec(t);
      (r != null && r[1] ? r[1].split(",").map((a) => a.trim()) : []).forEach((a, b) => {
        s[a] = i == null ? void 0 : i[b];
      });
    } else if (V(i) && x.test(t)) {
      const r = x.exec(t);
      (r != null && r[1] ? r[1].split(",").map((a) => a.trim()) : []).forEach((a) => {
        const [b, O] = a.split(":").map((R) => R.trim());
        s[O || b] = B(i, b);
      });
    } else
      s[t] = i;
    return s;
  }, n.specialRender = {
    template({ children: t }) {
      return t == null ? void 0 : t.default();
    },
    slot({ props: t, children: o, slots: i }) {
      const s = t.name || "default";
      delete t.name;
      const r = (o == null ? void 0 : o[s]) ?? (() => []);
      return rt(i, s, t, () => r());
    },
    component({ props: t, children: o }) {
      const i = t.is;
      delete t.is;
      const s = nt(i);
      return ot(s, t, o);
    }
  }, n.defaultRender = (t) => {
    const o = t.tagname;
    if (n.specialRender[o])
      return n.specialRender[o](t);
    const i = t.directives, s = t.children, r = typeof t.tag == "string" ? t.isHtml ? t.tag : q(t.tag) : t.tag, c = t.props;
    return i["v-text"] ? w(r, c, i["v-text"]) : w(r, c, s);
  }, n.propsFilter = (t, o) => k(t, o), n.getProps = (t, o) => {
    const { prop: i, directive: s } = (0, n.getElemAttrs)(t, {}), r = (0, n.parseDirective)(s, o);
    return F(i, r["v-bind"], r["v-on"]);
  };
})(S || (S = {}));
var Q;
((n) => {
  n.dateFormat = (u, e = "yyyy-MM-dd") => {
  }, n.getDataAttr = (u, e, l) => {
    if (typeof e == "function")
      return e(u);
    const {
      multiple: g = !1,
      notValues: h = [void 0, null, ""],
      value: m
    } = l || {};
    if (typeof e == "string") {
      const p = B(u, e);
      return h != null && h.includes(p) && m !== void 0 ? m : p;
    }
    const d = [];
    return e.map((p) => {
      const A = B(u, p);
      h != null && h.includes(A) || d.push(A);
    }), m != null && d.length == 0 && d.push(m), g ? d : d[0];
  }, n.getSetGroupData = (u, e) => {
  };
  class v {
    //
    constructor(e = {}) {
      //
      _(this, "data", []);
      _(this, "group", []);
      _(this, "keys", ["id", "prop"]);
      _(this, "groupAttr", {});
      //
      _(this, "source", []);
      _(this, "list", []);
      _(this, "listKeys", []);
      //
      _(this, "groupTemp", {});
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
        (l) => z(I({}, l, F(l, e)))
      ), this.resetDataKeys(), this;
    }
    resetData(e) {
      return this.list = this.source.map((l) => z(e(l))), this.resetDataKeys(), this;
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
      const l = e || this.group || [], [g, ...h] = l, m = Array.isArray(g) && typeof g[0] == "string" && /^:/.test(g[0]), d = m ? h : l, p = this.getGroupItem(d, m);
      if (!m)
        return p;
    }
    // 分组结构
    getGroupStruct(e, l) {
      const g = typeof this.groupAttr == "function" ? this.groupAttr(e) : this.groupAttr, h = [], m = e.length;
      for (let d = 0; d < m; d++) {
        const p = e[d];
        if (!(d == 0 && typeof p == "string" && /^:/.test(p))) {
          if (Z(p) && p.id) {
            J(l, p.id) && h.push(I({}, g, F(g, p), { children: B(l, p.id) }));
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
      const g = { $: [] }, h = [];
      return e.map((m) => {
        if (typeof m == "string") {
          const d = this.getListData(m);
          d && g.$.push(d) && h.push(d);
        } else if (Array.isArray(m)) {
          const [d, ...p] = m, A = /^@/.test(d) ? p : m, D = (/^@(\w+)?/.exec(d) || [])[1] || "$";
          J(g, D) || (g[D] = []);
          const x = A.map((t) => this.getListData(t)).filter((t) => t != null);
          g[D].push(...x), h.push(this.getGroupAttr({ children: x }));
        }
      }), l ? g : h;
    }
    getGroupAttr(e = {}, l = []) {
      const g = typeof this.groupAttr == "function" ? this.groupAttr(l) : this.groupAttr;
      return I({}, g, F(g, e));
    }
    getListData(e) {
      const l = this.listKeys.indexOf(e);
      if (l > -1)
        return this.list[l];
    }
  }
  n.SetGroup = v;
})(Q || (Q = {}));
const pt = (n) => n && typeof n == "object" && (n == null ? void 0 : n.tag) == null && (n.setup != null || n.render != null) && (n.name || n.__name), dt = S.getElemAttrs, ft = S.parseDirective, gt = S.getExpValue, ht = S.getDestruct, mt = S.getSlotName, yt = S.isHtmlTag, vt = S.defaultRender, bt = S.getProps, Dt = it({
  name: "els-elem",
  props: {
    elem: Object,
    context: Object,
    parent: Object,
    params: Object,
    slotParams: Object,
    slots: Object
  },
  setup(n, v) {
    const u = n.elem || {}, e = n.context || {}, l = n.parent, g = n.params || {}, h = ut(
      {},
      e.slots || {},
      n.slots || v.slots
    ), m = y(u == null ? void 0 : u.tag) || y(e == null ? void 0 : e.tag) || "div", d = y(e == null ? void 0 : e.tag), p = d && H(d) && typeof m == "string" ? d({ tag: m, elem: u, context: e, parent: l, params: g, slots: h }, v) : H(m) ? m({ elem: u, context: e, parent: l, params: g, slots: h }, v) : m, A = typeof y(p) == "string" ? y(p) : X(y(p).name), D = yt(A);
    let x = {}, t = {};
    const o = { prop: {} };
    e.setup && (t = e.setup(
      n,
      { tag: y(p), tagname: A, isHtml: D },
      v
    ) || {}, I(o, t)), u.setup && (x = u.setup(
      n,
      { tag: y(p), tagname: A, isHtml: D },
      v
    ) || {}, I(o, x));
    const i = dt(F(u, o.prop || {}), e), s = i.root, r = i.prop, c = i.directive, a = new Array().concat(
      o.excludeKeys || [],
      u.excludeKeys || [],
      e.excludeKeys || []
    ), b = { $isHtml: D, ...(e == null ? void 0 : e.params) || {}, ...g, ...r, ...i.ctx, ...o, h: w }, O = {
      $tag: y(p),
      $tagname: A,
      $isHtml: D,
      $slots: h,
      $elem: u,
      $context: e,
      $root: s,
      $prop: r,
      $directive: c,
      $elemSetupRes: x,
      $ctxSetupRes: t,
      $setupRes: o,
      $parent: l,
      $params: g
    }, R = M(
      () => new Array().concat(y(s.children), y(s.cls)).filter((G) => G != null)
    ), P = (G) => {
      const N = y(R);
      if (N.length === 0)
        return;
      const $ = {
        default: []
      };
      N.forEach((C) => {
        const f = y(C);
        if (W(f))
          $.default.push(() => f);
        else if (pt(f))
          $.default.push(() => w(f));
        else if (H(f))
          $.default.push((K) => f(G, K, O));
        else if (V(f)) {
          const K = mt(f);
          if ($[K] || ($[K] = []), f.isDirectRender === !0) {
            const T = y(f == null ? void 0 : f.tag) ?? y(e == null ? void 0 : e.tag) ?? "div", E = H(d) ? d({ tag: T, elem: f, context: e, params: G, parent: l }, v) : H(T) ? T({ elem: f, context: e, params: G }, v) : T, U = typeof y(E) == "string" ? y(E) : X(y(E).name);
            $[K].push(
              (Y = {}) => w(E, bt(f, { ...G, ...Y }), {
                default: (tt = {}) => [
                  w(q("els-elem"), {
                    elem: { tag: "template", cls: f.cls },
                    context: e,
                    parent: { elem: f, tagname: U, setupRes: o },
                    params: G,
                    slotParams: { ...Y, ...tt },
                    slots: h
                  })
                ]
              })
            );
          } else
            $[K].push(
              (T) => w(q("els-elem"), {
                elem: f,
                context: e,
                parent: { elem: u, tagname: A, setupRes: o },
                params: G,
                slotParams: T,
                slots: h
              })
            );
        } else
          $.default.push((K) => gt(String(f), G));
      });
      const j = {};
      return Object.keys($).forEach((C) => {
        j[C] = (f) => $[C].map((K) => K(f));
      }), j;
    };
    return () => {
      const G = ht(s["slot-scope"], n.slotParams), N = { ...b, ...G }, $ = ft(c, N);
      if ($["v-if"] === !1)
        return;
      const j = k(
        F(r, $["v-bind"], $["v-on"]),
        a
      ), C = P(N), f = {
        tag: y(p),
        tagname: A,
        isHtml: D,
        props: j,
        children: C,
        context: e,
        elem: u,
        slots: h,
        parent: l,
        directives: $,
        setupRes: o
      }, K = (x == null ? void 0 : x.render) || (s == null ? void 0 : s.render) || (t == null ? void 0 : t.render) || (e == null ? void 0 : e.render);
      if (K) {
        if (H(K))
          return K(f);
        if (K[A] != null)
          return K[A](f);
      }
      return vt(f);
    };
  }
});
export {
  Q as D,
  Dt as E,
  S as a,
  pt as i
};
