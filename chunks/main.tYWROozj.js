var rt = Object.defineProperty;
var nt = (n, y, u) => y in n ? rt(n, y, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[y] = u;
var C = (n, y, u) => (nt(n, typeof y != "symbol" ? y + "" : y, u), u);
import { unref as v, isRef as X, computed as Y, renderSlot as ot, resolveDynamicComponent as it, createVNode as at, resolveComponent as q, h as H, mergeProps as F, isVNode as k, defineComponent as ct } from "vue";
import { aU as U, aV as lt, aL as E, aW as ut, ab as pt, aK as dt, g as B, aX as tt, aJ as z, y as I, Q, aY as ft, aS as j, aZ as W } from "./vendor.D9J4rVyn.js";
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
  n.isHtmlTag = (t) => m.includes(t), n.getElemAttrs = (t, a) => {
    const o = Object.keys(t), r = { root: {}, directive: {}, prop: {}, ctx: {} };
    return o.forEach((s) => {
      var S;
      if (new Array().concat(
        t.excludeKeys || [],
        a.excludeKeys || []
      ).includes(s))
        return;
      const i = t[s], x = y.test(s) || e.test(s) || l.test(s) || f.test(s), $ = new Array().concat(
        t.contextKeys || [],
        a.contextKeys || []
      ).includes(s);
      u.test(s) ? (r.root["slot-scope"] = i, r.root.slot = ((S = u.exec(s)) == null ? void 0 : S[1]) ?? "default") : x ? r.directive[s] = i : h.includes(s) && !$ ? r.root[s] = i : !$ && s == "contextData" && U(i) ? r.ctx = { ...i } : r.prop[s] = i;
    }), r;
  }, n.getSlotName = (t) => {
    var o;
    const a = Object.keys(t).filter((r) => u.test(r));
    return a.length > 0 && ((o = u.exec(a[0])) == null ? void 0 : o[1]) || "default";
  };
  const d = ["this", "true", "false", "class"];
  n.doEval = (t = "", a = {}, o = !1) => {
    const r = Object.keys(a).filter((i) => typeof i == "string").filter((i) => !d.includes(i)).filter((i) => !/[^\w$]/.test(i)), s = r.map((i) => o ? v(a[i]) : a[i]), c = "return " + t;
    try {
      return o ? v(new Function(...r, c)(...s)) : new Function(...r, c)(...s);
    } catch (i) {
      console.error("字符串表达式执行异常！", t, a, o), console.error(r, s, c), console.error(i);
    }
  };
  const p = ["pointerevent"];
  n.parseDirective = (t, a) => {
    const o = Object.keys(t), r = { "v-bind": {}, "v-on": {} };
    return o.forEach((s) => {
      let c = t[s], i = t[s];
      if (typeof c == "string" ? c = /^```.*?```$/.test(c) ? (0, n.getExpValue)(c.replace(/(^```|```$)/g, ""), a) : (0, n.doEval)(c, a, !0) : c = v(c), e.test(s)) {
        const x = e.exec(s) ?? [];
        if (x[1] == null)
          if (lt(c))
            for (const [b, $] of c)
              y.test(b) ? r[b] = $ : r["v-bind"][b] = $;
          else
            E(c) && Object.keys(c).forEach((b) => {
              y.test(b) ? r[b] = c[b] : r["v-bind"][b] = c[b];
            });
        else
          r["v-bind"][x[1]] = c;
      } else if (l.test(s)) {
        const x = l.exec(s) ?? [];
        if (x[1]) {
          const b = "on" + ut(x[1]);
          r["v-on"][b] = typeof c == "function" ? ($, ...S) => {
            const _ = Object.prototype.toString.call($).split(" ")[1].replace("]", "").toLowerCase(), A = { ...a };
            return p.includes(_) ? A.$event = $ : S = [$, ...S], S.length > 0 && (A.$ = S), c.apply(a, [A]);
          } : c;
        }
      } else if (f.test(s)) {
        const b = (f.exec(s) ?? [])[1] ?? "modelValue", $ = "onUpdate:" + b, S = typeof i;
        if (r["v-bind"][b] = c, S == "function")
          r["v-on"][$] = (_) => i.apply(a, [_, a]);
        else if (X(i))
          r["v-on"][$] = (_) => i.value = _;
        else if (S == "string") {
          const _ = (0, n.doEval)(i.split(".")[0], a), A = i.split(".").slice(1).join(".");
          _ && A && (E(_) || X(_)) ? r["v-on"][$] = (T) => pt(v(_), A, T) : console.error("指令错误！ ==> ", s, i, _, A);
        } else
          console.error("指令错误！ ==> ", s, i);
      } else
        s === "v-if" ? typeof c == "function" ? r[s] = Y(() => c(a)).value : r[s] = Y(() => c).value : r[s] = c;
    }), r;
  };
  const K = (t, a, o) => {
    let r;
    for (; (r = t.exec(a)) !== null; )
      o(r);
  }, w = /\{\{\s*(.*?)\s*\}\}/g;
  n.getExpValue = (t, a = {}) => {
    if (!t)
      return "";
    let o = [], r = t;
    return K(w, t, ([s, c]) => {
      try {
        const i = (0, n.doEval)(c, a, !0);
        k(i) || Array.isArray(i) ? o = o.concat(i) : r = r.replace(s, i);
      } catch {
        console.error("=====字符串模板解析异常！=====", c, a);
      }
    }), (r != t || o.length == 0) && o.push(r), o;
  };
  const G = /^\s*\[(.*)\]\s*$/, R = /^\s*\{(.*)\}\s*$/;
  n.getDestruct = (t, a = {}) => {
    const o = v(a);
    if (!t || typeof t == "boolean")
      return t === !1 ? {} : o;
    const r = {};
    if (dt(o) && G.test(t)) {
      const s = G.exec(t);
      (s != null && s[1] ? s[1].split(",").map((i) => i.trim()) : []).forEach((i, x) => {
        r[i] = o == null ? void 0 : o[x];
      });
    } else if (E(o) && R.test(t)) {
      const s = R.exec(t);
      (s != null && s[1] ? s[1].split(",").map((i) => i.trim()) : []).forEach((i) => {
        const [x, b] = i.split(":").map(($) => $.trim());
        r[b || x] = B(o, x);
      });
    } else
      r[t] = o;
    return r;
  }, n.specialRender = {
    template({ children: t }) {
      return t == null ? void 0 : t.default();
    },
    slot({ props: t, children: a, slots: o }) {
      const r = t.name || "default";
      delete t.name;
      const s = (a == null ? void 0 : a[r]) ?? (() => []);
      return ot(o, r, t, () => s());
    },
    component({ props: t, children: a }) {
      const o = t.is;
      delete t.is;
      const r = it(o);
      return at(r, t, a);
    }
  }, n.defaultRender = (t) => {
    const a = t.tagname;
    if (n.specialRender[a])
      return n.specialRender[a](t);
    const o = t.directives, r = t.children, s = typeof t.tag == "string" ? t.isHtml ? t.tag : q(t.tag) : t.tag, c = t.props;
    return o["v-text"] ? H(s, c, o["v-text"]) : H(s, c, r);
  }, n.propsFilter = (t, a) => tt(t, a), n.getProps = (t, a) => {
    const { prop: o, directive: r } = (0, n.getElemAttrs)(t, {}), s = (0, n.parseDirective)(r, a);
    return F(o, s["v-bind"], s["v-on"]);
  };
})(P || (P = {}));
var Z;
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
      const p = B(u, e);
      return h != null && h.includes(p) && m !== void 0 ? m : p;
    }
    const d = [];
    return e.map((p) => {
      const K = B(u, p);
      h != null && h.includes(K) || d.push(K);
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
          if (U(p) && p.id) {
            Q(l, p.id) && h.push(I({}, f, F(f, p), { children: B(l, p.id) }));
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
          Q(f, w) || (f[w] = []);
          const G = K.map((R) => this.getListData(R)).filter((R) => R != null);
          f[w].push(...G), h.push(this.getGroupAttr({ children: G }));
        }
      }), l ? f : h;
    }
    getGroupAttr(e = {}, l = []) {
      const f = typeof this.groupAttr == "function" ? this.groupAttr(l) : this.groupAttr;
      return I({}, f, F(f, e));
    }
    getListData(e) {
      const l = this.listKeys.indexOf(e);
      if (l > -1)
        return this.list[l];
    }
  }
  n.SetGroup = y;
})(Z || (Z = {}));
const gt = (n) => n && typeof n == "object" && (n == null ? void 0 : n.tag) == null && (n.setup != null || n.render != null) && (n.name || n.__name), ht = P.getElemAttrs, mt = P.parseDirective, vt = P.getExpValue, yt = P.getDestruct, bt = P.getSlotName, At = P.isHtmlTag, $t = P.defaultRender, Kt = P.getProps, Rt = ct({
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
    const u = n.elem || {}, e = n.context || {}, l = n.parent, f = n.params || {}, h = ft(
      {},
      e.slots || {},
      n.slots || y.slots
    ), m = v(u == null ? void 0 : u.tag) || v(e == null ? void 0 : e.tag) || "div", d = v(e == null ? void 0 : e.tag), p = d && j(d) && typeof m == "string" ? d({ tag: m, elem: u, context: e, parent: l, params: f, slots: h }, y) : j(m) ? m({ ...n, slots: h }, y) : m, K = typeof v(p) == "string" ? v(p) : W(v(p).name), w = At(K);
    let G = {}, R = {};
    const t = { prop: {} };
    e.setup && (R = e.setup(
      n,
      { tag: v(p), tagname: K, isHtml: w },
      y
    ) || {}, I(t, R)), u.setup && (G = u.setup(
      n,
      { tag: v(p), tagname: K, isHtml: w },
      y
    ) || {}, I(t, G));
    const a = ht(F(u, t.prop || {}), e), { root: o, prop: r, directive: s, ctx: c } = a, i = new Array().concat(
      t.excludeKeys || [],
      u.excludeKeys || [],
      e.excludeKeys || []
    ), x = { $isHtml: w, ...(e == null ? void 0 : e.params) || {}, ...f, prop: r, ...c, ...t, h: H }, b = {
      $tag: v(p),
      $tagname: K,
      $isHtml: w,
      $slots: h,
      $elem: u,
      $context: e,
      $root: o,
      $prop: r,
      $directive: s,
      $elemSetupRes: G,
      $ctxSetupRes: R,
      $setupRes: t,
      $parent: l,
      $params: f
    }, $ = Y(
      () => new Array().concat(v(o.children), v(o.cls)).filter((A) => A != null)
    ), S = (A) => {
      const T = v($);
      if (T.length === 0)
        return;
      const D = {
        default: []
      };
      T.forEach((L) => {
        const g = v(L);
        if (k(g))
          D.default.push(() => g);
        else if (gt(g))
          D.default.push(() => H(g));
        else if (j(g))
          D.default.push((O) => g(A, O, b));
        else if (E(g)) {
          const O = bt(g);
          if (D[O] || (D[O] = []), g.isDirectRender === !0) {
            const N = v(g == null ? void 0 : g.tag) ?? v(e == null ? void 0 : e.tag) ?? "div", M = j(d) ? d({ tag: N, elem: g, context: e, params: A, parent: l }, y) : j(N) ? N({ elem: g, context: e, params: A }, y) : N, et = typeof v(M) == "string" ? v(M) : W(v(M).name);
            D[O].push(
              (J = {}) => H(M, Kt(g, { ...A, ...J }), {
                default: (st = {}) => [
                  H(q("els-elem"), {
                    elem: { tag: "template", cls: g.cls },
                    context: e,
                    parent: { elem: g, tagname: et, setupRes: t },
                    params: A,
                    slotParams: { ...J, ...st },
                    slots: h
                  })
                ]
              })
            );
          } else
            D[O].push(
              (N) => H(q("els-elem"), {
                elem: g,
                context: e,
                parent: { elem: u, tagname: K, setupRes: t },
                params: A,
                slotParams: N,
                slots: h
              })
            );
        } else
          D.default.push((O) => vt(String(g), A));
      });
      const V = {};
      return Object.keys(D).forEach((L) => {
        V[L] = (g) => D[L].map((O) => O(g));
      }), V;
    };
    return () => {
      const A = yt(o["slot-scope"], n.slotParams), T = { ...x, ...A }, D = mt(s, T);
      if (D["v-if"] === !1)
        return;
      const V = tt(
        F(r, D["v-bind"], D["v-on"]),
        i
      ), L = S(T), g = {
        tag: v(p),
        tagname: K,
        isHtml: w,
        props: V,
        children: L,
        context: e,
        elem: u,
        slots: h,
        parent: l,
        directives: D,
        setupRes: t
      }, O = (G == null ? void 0 : G.render) || (o == null ? void 0 : o.render) || (R == null ? void 0 : R.render) || (e == null ? void 0 : e.render);
      if (O) {
        if (j(O))
          return O(g);
        if (O[K] != null)
          return O[K](g);
      }
      return $t(g);
    };
  }
});
export {
  Z as D,
  Rt as E,
  P as a,
  gt as i
};
