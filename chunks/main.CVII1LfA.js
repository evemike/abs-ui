var rt = Object.defineProperty;
var nt = (n, y, u) => y in n ? rt(n, y, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[y] = u;
var P = (n, y, u) => (nt(n, typeof y != "symbol" ? y + "" : y, u), u);
import { unref as v, isRef as z, computed as Y, renderSlot as ot, resolveDynamicComponent as it, createVNode as at, resolveComponent as q, h as H, mergeProps as j, isVNode as k, defineComponent as ct } from "vue";
import { aX as U, aY as lt, aO as E, aZ as ut, ag as pt, aN as dt, g as B, a_ as tt, aM as J, C as F, V as Z, a$ as ft, aV as V, b0 as Q } from "./vendor.Btkc3P4Q.js";
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
  n.isHtmlTag = (t) => m.includes(t), n.getElemAttrs = (t, a) => {
    const o = Object.keys(t), r = { root: {}, directive: {}, prop: {}, ctx: {} };
    return o.forEach((s) => {
      var G;
      if (new Array().concat(
        t.excludeKeys || [],
        a.excludeKeys || []
      ).includes(s))
        return;
      const i = t[s], x = y.test(s) || e.test(s) || l.test(s) || f.test(s), $ = new Array().concat(
        t.contextKeys || [],
        a.contextKeys || []
      ).includes(s);
      u.test(s) ? (r.root["slot-scope"] = i, r.root.slot = ((G = u.exec(s)) == null ? void 0 : G[1]) ?? "default") : x ? r.directive[s] = i : h.includes(s) && !$ ? r.root[s] = i : !$ && s == "contextData" && U(i) ? r.ctx = { ...i } : r.prop[s] = i;
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
          r["v-on"][b] = typeof c == "function" ? ($, ...G) => {
            const w = Object.prototype.toString.call($).split(" ")[1].replace("]", "").toLowerCase(), A = { ...a };
            return p.includes(w) ? A.$event = $ : G = [$, ...G], G.length > 0 && (A.$ = G), c.apply(a, [A]);
          } : c;
        }
      } else if (f.test(s)) {
        const b = (f.exec(s) ?? [])[1] ?? "modelValue", $ = "onUpdate:" + b, G = typeof i;
        if (r["v-bind"][b] = c, G == "function")
          r["v-on"][$] = (w) => i.apply(a, [w, a]);
        else if (z(i))
          r["v-on"][$] = (w) => i.value = w;
        else if (G == "string") {
          const w = (0, n.doEval)(i.split(".")[0], a), A = i.split(".").slice(1).join(".");
          w && A && (E(w) || z(w)) ? r["v-on"][$] = (T) => pt(v(w), A, T) : console.error("指令错误！ ==> ", s, i, w, A);
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
  }, S = /\{\{\s*(.*?)\s*\}\}/g;
  n.getExpValue = (t, a = {}) => {
    if (!t)
      return "";
    let o = [], r = t;
    return K(S, t, ([s, c]) => {
      try {
        const i = (0, n.doEval)(c, a, !0);
        k(i) || Array.isArray(i) ? o = o.concat(i) : r = r.replace(s, i);
      } catch {
        console.error("=====字符串模板解析异常！=====", c, a);
      }
    }), (r != t || o.length == 0) && o.push(r), o;
  };
  const _ = /^\s*\[(.*)\]\s*$/, R = /^\s*\{(.*)\}\s*$/;
  n.getDestruct = (t, a = {}) => {
    const o = v(a);
    if (!t || typeof t == "boolean")
      return t === !1 ? {} : o;
    const r = {};
    if (dt(o) && _.test(t)) {
      const s = _.exec(t);
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
    return j(o, s["v-bind"], s["v-on"]);
  };
})(C || (C = {}));
var W;
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
        (l) => J(F({}, l, j(l, e)))
      ), this.resetDataKeys(), this;
    }
    resetData(e) {
      return this.list = this.source.map((l) => J(e(l))), this.resetDataKeys(), this;
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
            Z(l, p.id) && h.push(F({}, f, j(f, p), { children: B(l, p.id) }));
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
          const [d, ...p] = m, K = /^@/.test(d) ? p : m, S = (/^@(\w+)?/.exec(d) || [])[1] || "$";
          Z(f, S) || (f[S] = []);
          const _ = K.map((R) => this.getListData(R)).filter((R) => R != null);
          f[S].push(..._), h.push(this.getGroupAttr({ children: _ }));
        }
      }), l ? f : h;
    }
    getGroupAttr(e = {}, l = []) {
      const f = typeof this.groupAttr == "function" ? this.groupAttr(l) : this.groupAttr;
      return F({}, f, j(f, e));
    }
    getListData(e) {
      const l = this.listKeys.indexOf(e);
      if (l > -1)
        return this.list[l];
    }
  }
  n.SetGroup = y;
})(W || (W = {}));
const gt = (n) => n && typeof n == "object" && (n == null ? void 0 : n.tag) == null && (n.setup != null || n.render != null) && (n.name || n.__name), ht = C.getElemAttrs, mt = C.parseDirective, vt = C.getExpValue, yt = C.getDestruct, bt = C.getSlotName, At = C.isHtmlTag, $t = C.defaultRender, Kt = C.getProps, Rt = ct({
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
    ), m = v(u == null ? void 0 : u.tag) || v(e == null ? void 0 : e.tag) || "div", d = v(e == null ? void 0 : e.tag), p = d && V(d) && typeof m == "string" ? d({ tag: m, elem: u, context: e, parent: l, params: f, slots: h }, y) : V(m) ? m({ ...n, slots: h }, y) : m, K = typeof v(p) == "string" ? v(p) : Q(v(p).name), S = At(K);
    let _ = {}, R = {};
    const t = { prop: {} };
    e.setup && (R = e.setup(
      n,
      { tag: v(p), tagname: K, isHtml: S },
      y
    ) || {}, F(t, R)), u.setup && (_ = u.setup(
      n,
      { tag: v(p), tagname: K, isHtml: S },
      y
    ) || {}, F(t, _));
    const a = ht(j(u, t.prop || {}), e), { root: o, prop: r, directive: s, ctx: c } = a, i = new Array().concat(
      t.excludeKeys || [],
      u.excludeKeys || [],
      e.excludeKeys || []
    ), x = { $isHtml: S, ...(e == null ? void 0 : e.params) || {}, ...f, prop: r, ...c, ...t, h: H }, b = {
      $tag: v(p),
      $tagname: K,
      $isHtml: S,
      $slots: h,
      $elem: u,
      $context: e,
      $root: o,
      $prop: r,
      $directive: s,
      $elemSetupRes: _,
      $ctxSetupRes: R,
      $setupRes: t,
      $parent: l,
      $params: f
    }, $ = Y(
      () => new Array().concat(v(o.children), v(o.cls)).filter((A) => A != null)
    ), G = (A) => {
      const T = v($);
      if (T.length === 0)
        return;
      const O = {
        default: []
      };
      T.forEach((N) => {
        const g = v(N);
        if (k(g))
          O.default.push(() => g);
        else if (gt(g))
          O.default.push(() => H(g));
        else if (V(g))
          O.default.push((D) => g(A, D, b));
        else if (E(g)) {
          const D = bt(g);
          if (O[D] || (O[D] = []), g.isDirectRender === !0) {
            const L = v(g == null ? void 0 : g.tag) ?? v(e == null ? void 0 : e.tag) ?? "div", M = V(d) ? d({ tag: L, elem: g, context: e, params: A, parent: l }, y) : V(L) ? L({ elem: g, context: e, params: A }, y) : L, et = typeof v(M) == "string" ? v(M) : Q(v(M).name);
            O[D].push(
              (X = {}) => H(M, Kt(g, { ...A, ...X }), {
                default: (st = {}) => [
                  H(q("els-elem"), {
                    elem: { tag: "template", cls: g.cls },
                    context: e,
                    parent: { elem: g, tagname: et, setupRes: t },
                    params: A,
                    slotParams: { ...X, ...st },
                    slots: h
                  })
                ]
              })
            );
          } else
            O[D].push(
              (L) => H(q("els-elem"), {
                elem: g,
                context: e,
                parent: { elem: u, tagname: K, setupRes: t },
                params: A,
                slotParams: L,
                slots: h
              })
            );
        } else
          O.default.push((D) => vt(String(g), A));
      });
      const I = {};
      return Object.keys(O).forEach((N) => {
        I[N] = (g) => O[N].map((D) => D(g));
      }), I;
    };
    return () => {
      const A = yt(o["slot-scope"], n.slotParams), T = { ...x, ...A }, O = mt(s, T);
      if (O["v-if"] === !1)
        return;
      const I = tt(
        j(r, O["v-bind"], O["v-on"]),
        i
      ), N = G(T), g = {
        tag: v(p),
        tagname: K,
        isHtml: S,
        props: I,
        children: N,
        context: e,
        elem: u,
        slots: h,
        parent: l,
        directives: O,
        setupRes: t
      }, D = (_ == null ? void 0 : _.render) || (o == null ? void 0 : o.render) || (R == null ? void 0 : R.render) || (e == null ? void 0 : e.render);
      if (D) {
        if (V(D))
          return D(g);
        if (D[K] != null)
          return D[K](g);
      }
      return $t(g);
    };
  }
});
export {
  W as D,
  Rt as E,
  C as a,
  gt as i
};
