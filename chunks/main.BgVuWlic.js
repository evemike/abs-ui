var et = Object.defineProperty;
var st = (n, v, l) => v in n ? et(n, v, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[v] = l;
var _ = (n, v, l) => (st(n, typeof v != "symbol" ? v + "" : v, l), l);
import { unref as y, computed as B, renderSlot as rt, resolveDynamicComponent as nt, createVNode as ot, resolveComponent as E, h as w, mergeProps as I, isVNode as W, defineComponent as at } from "vue";
import { aT as Z, aU as it, aK as Y, aV as ct, aJ as ut, g as M, aW as k, aI as J, y as L, Q as X, aX as lt, aR as H, aY as z } from "./vendor.BlYUAX4D.js";
var S;
((n) => {
  const v = /^\s*v-([\w-]+)\s*$/, l = /^\s*(?:(?:v-slot:|#)(\w+)|v-slot)\s*$/, e = /^\s*(?:(?:v-bind:|:)(\w+)|v-bind)\s*$/, u = /^\s*(?:v-on:|@)([\w:]+)\s*$/, m = [
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
  ], g = [
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
  n.isHtmlTag = (t) => g.includes(t), n.getElemAttrs = (t, o) => {
    const i = Object.keys(t), s = { root: {}, directive: {}, prop: {}, ctx: {} };
    return i.forEach((r) => {
      var P;
      if (new Array().concat(
        t.excludeKeys || [],
        o.excludeKeys || []
      ).includes(r))
        return;
      const a = t[r], b = v.test(r) || e.test(r) || u.test(r), R = new Array().concat(
        t.contextKeys || [],
        o.contextKeys || []
      ).includes(r);
      l.test(r) ? (s.root["slot-scope"] = a, s.root.slot = ((P = l.exec(r)) == null ? void 0 : P[1]) ?? "default") : b ? s.directive[r] = a : m.includes(r) && !R ? s.root[r] = a : !R && r == "contextData" && Z(a) ? s.ctx = { ...a } : s.prop[r] = a;
    }), s;
  }, n.getSlotName = (t) => {
    var i;
    const o = Object.keys(t).filter((s) => l.test(s));
    return o.length > 0 && ((i = l.exec(o[0])) == null ? void 0 : i[1]) || "default";
  };
  const h = ["this", "true", "false", "class"];
  n.doEval = (t = "", o = {}, i = !1) => {
    const s = Object.keys(o).filter((a) => typeof a == "string").filter((a) => !h.includes(a)).filter((a) => !/[^\w$]/.test(a)), r = s.map((a) => i ? y(o[a]) : o[a]), c = "return " + t;
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
      if (typeof c == "string" ? c = /^```.*?```$/.test(c) ? (0, n.getExpValue)(c.replace(/(^```|```$)/g, ""), o) : (0, n.doEval)(c, o, !0) : c = y(c), e.test(r)) {
        const a = e.exec(r) ?? [];
        if (a[1] == null)
          if (it(c))
            for (const [b, O] of c)
              v.test(b) ? s[b] = O : s["v-bind"][b] = O;
          else
            Y(c) && Object.keys(c).forEach((b) => {
              v.test(b) ? s[b] = c[b] : s["v-bind"][b] = c[b];
            });
        else
          s["v-bind"][a[1]] = c;
      } else if (u.test(r)) {
        const a = u.exec(r) ?? [];
        if (a[1]) {
          const b = "on" + ct(a[1]);
          s["v-on"][b] = typeof c == "function" ? (O, ...R) => {
            const P = Object.prototype.toString.call(O).split(" ")[1].replace("]", "").toLowerCase(), N = { ...o };
            return d.includes(P) ? N.$event = O : R = [O, ...R], R.length > 0 && (N.$ = R), c.apply(o, [N]);
          } : c;
        }
      } else
        r === "v-if" ? typeof c == "function" ? s[r] = B(() => c(o)).value : s[r] = B(() => c).value : s[r] = c;
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
  const x = /^\s*\[(.*)\]\s*$/, D = /^\s*\{(.*)\}\s*$/;
  n.getDestruct = (t, o = {}) => {
    const i = y(o);
    if (!t || typeof t == "boolean")
      return t === !1 ? {} : i;
    const s = {};
    if (ut(i) && x.test(t)) {
      const r = x.exec(t);
      (r != null && r[1] ? r[1].split(",").map((a) => a.trim()) : []).forEach((a, b) => {
        s[a] = i == null ? void 0 : i[b];
      });
    } else if (Y(i) && D.test(t)) {
      const r = D.exec(t);
      (r != null && r[1] ? r[1].split(",").map((a) => a.trim()) : []).forEach((a) => {
        const [b, O] = a.split(":").map((R) => R.trim());
        s[O || b] = M(i, b);
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
    const i = t.directives, s = t.children, r = typeof t.tag == "string" ? t.isHtml ? t.tag : E(t.tag) : t.tag, c = t.props;
    return i["v-text"] ? w(r, c, i["v-text"]) : w(r, c, s);
  }, n.propsFilter = (t, o) => k(t, o), n.getProps = (t, o) => {
    const { prop: i, directive: s } = (0, n.getElemAttrs)(t, {}), r = (0, n.parseDirective)(s, o);
    return I(i, r["v-bind"], r["v-on"]);
  };
})(S || (S = {}));
var Q;
((n) => {
  n.dateFormat = (l, e = "yyyy-MM-dd") => {
  }, n.getDataAttr = (l, e, u) => {
    if (typeof e == "function")
      return e(l);
    const {
      multiple: m = !1,
      notValues: g = [void 0, null, ""],
      value: h
    } = u || {};
    if (typeof e == "string") {
      const p = M(l, e);
      return g != null && g.includes(p) && h !== void 0 ? h : p;
    }
    const d = [];
    return e.map((p) => {
      const A = M(l, p);
      g != null && g.includes(A) || d.push(A);
    }), h != null && d.length == 0 && d.push(h), m ? d : d[0];
  }, n.getSetGroupData = (l, e) => {
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
        (u) => J(L({}, u, I(u, e)))
      ), this.resetDataKeys(), this;
    }
    resetData(e) {
      return this.list = this.source.map((u) => J(e(u))), this.resetDataKeys(), this;
    }
    resetDataKeys(e) {
      return e || (e = this.keys), e != null && this.list.length > 0 && (this.listKeys = this.list.map(
        (u) => (0, n.getDataAttr)(u, e)
      )), this;
    }
    checkKeys() {
      return !(new Set(this.listKeys).size < this.listKeys.length);
    }
    //
    getGroup(e) {
      const u = e || this.group || [], [m, ...g] = u, h = Array.isArray(m) && typeof m[0] == "string" && /^:/.test(m[0]), d = h ? g : u, p = this.getGroupItem(d, h);
      if (!h)
        return p;
    }
    // 分组结构
    getGroupStruct(e, u) {
      const m = typeof this.groupAttr == "function" ? this.groupAttr(e) : this.groupAttr, g = [], h = e.length;
      for (let d = 0; d < h; d++) {
        const p = e[d];
        if (!(d == 0 && typeof p == "string" && /^:/.test(p))) {
          if (Z(p) && p.id) {
            X(u, p.id) && g.push(L({}, m, I(m, p), { children: M(u, p.id) }));
            continue;
          }
          if (typeof p != "string" && Array.isArray(p)) {
            g.push(this.getGroupStruct(p, u));
            continue;
          }
        }
      }
      return {};
    }
    getGroupItem(e, u = !1) {
      const m = { $: [] }, g = [];
      return e.map((h) => {
        if (typeof h == "string") {
          const d = this.getListData(h);
          d && m.$.push(d) && g.push(d);
        } else if (Array.isArray(h)) {
          const [d, ...p] = h, A = /^@/.test(d) ? p : h, x = (/^@(\w+)?/.exec(d) || [])[1] || "$";
          X(m, x) || (m[x] = []);
          const D = A.map((t) => this.getListData(t)).filter((t) => t != null);
          m[x].push(...D), g.push(this.getGroupAttr({ children: D }));
        }
      }), u ? m : g;
    }
    getGroupAttr(e = {}, u = []) {
      const m = typeof this.groupAttr == "function" ? this.groupAttr(u) : this.groupAttr;
      return L({}, m, I(m, e));
    }
    getListData(e) {
      const u = this.listKeys.indexOf(e);
      if (u > -1)
        return this.list[u];
    }
  }
  n.SetGroup = v;
})(Q || (Q = {}));
const pt = (n) => n && typeof n == "object" && (n == null ? void 0 : n.tag) == null && (n.setup != null || n.render != null) && (n.name || n.__name), dt = S.getElemAttrs, ft = S.parseDirective, gt = S.getExpValue, ht = S.getDestruct, mt = S.getSlotName, yt = S.isHtmlTag, vt = S.defaultRender, bt = S.getProps, Dt = at({
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
    const l = n.elem || {}, e = n.context || {}, u = n.parent, m = n.params || {}, g = lt(
      {},
      e.slots || {},
      n.slots || v.slots
    ), h = y(l == null ? void 0 : l.tag) || y(e == null ? void 0 : e.tag) || "div", d = y(e == null ? void 0 : e.tag), p = d && H(d) && typeof h == "string" ? d({ tag: h, elem: l, context: e, parent: u, params: m, slots: g }, v) : H(h) ? h({ ...n, slots: g }, v) : h, A = typeof y(p) == "string" ? y(p) : z(y(p).name), x = yt(A);
    let D = {}, t = {};
    const o = { prop: {} };
    e.setup && (t = e.setup(
      n,
      { tag: y(p), tagname: A, isHtml: x },
      v
    ) || {}, L(o, t)), l.setup && (D = l.setup(
      n,
      { tag: y(p), tagname: A, isHtml: x },
      v
    ) || {}, L(o, D));
    const i = dt(I(l, o.prop || {}), e), { root: s, prop: r, directive: c, ctx: a } = i, b = new Array().concat(
      o.excludeKeys || [],
      l.excludeKeys || [],
      e.excludeKeys || []
    ), O = { $isHtml: x, ...(e == null ? void 0 : e.params) || {}, ...m, prop: r, ...a, ...o, h: w }, R = {
      $tag: y(p),
      $tagname: A,
      $isHtml: x,
      $slots: g,
      $elem: l,
      $context: e,
      $root: s,
      $prop: r,
      $directive: c,
      $elemSetupRes: D,
      $ctxSetupRes: t,
      $setupRes: o,
      $parent: u,
      $params: m
    }, P = B(
      () => new Array().concat(y(s.children), y(s.cls)).filter((G) => G != null)
    ), N = (G) => {
      const F = y(P);
      if (F.length === 0)
        return;
      const $ = {
        default: []
      };
      F.forEach((T) => {
        const f = y(T);
        if (W(f))
          $.default.push(() => f);
        else if (pt(f))
          $.default.push(() => w(f));
        else if (H(f))
          $.default.push((K) => f(G, K, R));
        else if (Y(f)) {
          const K = mt(f);
          if ($[K] || ($[K] = []), f.isDirectRender === !0) {
            const C = y(f == null ? void 0 : f.tag) ?? y(e == null ? void 0 : e.tag) ?? "div", V = H(d) ? d({ tag: C, elem: f, context: e, params: G, parent: u }, v) : H(C) ? C({ elem: f, context: e, params: G }, v) : C, U = typeof y(V) == "string" ? y(V) : z(y(V).name);
            $[K].push(
              (q = {}) => w(V, bt(f, { ...G, ...q }), {
                default: (tt = {}) => [
                  w(E("els-elem"), {
                    elem: { tag: "template", cls: f.cls },
                    context: e,
                    parent: { elem: f, tagname: U, setupRes: o },
                    params: G,
                    slotParams: { ...q, ...tt },
                    slots: g
                  })
                ]
              })
            );
          } else
            $[K].push(
              (C) => w(E("els-elem"), {
                elem: f,
                context: e,
                parent: { elem: l, tagname: A, setupRes: o },
                params: G,
                slotParams: C,
                slots: g
              })
            );
        } else
          $.default.push((K) => gt(String(f), G));
      });
      const j = {};
      return Object.keys($).forEach((T) => {
        j[T] = (f) => $[T].map((K) => K(f));
      }), j;
    };
    return () => {
      const G = ht(s["slot-scope"], n.slotParams), F = { ...O, ...G }, $ = ft(c, F);
      if ($["v-if"] === !1)
        return;
      const j = k(
        I(r, $["v-bind"], $["v-on"]),
        b
      ), T = N(F), f = {
        tag: y(p),
        tagname: A,
        isHtml: x,
        props: j,
        children: T,
        context: e,
        elem: l,
        slots: g,
        parent: u,
        directives: $,
        setupRes: o
      }, K = (D == null ? void 0 : D.render) || (s == null ? void 0 : s.render) || (t == null ? void 0 : t.render) || (e == null ? void 0 : e.render);
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
