var _p = Object.defineProperty;
var $p = (e, t, n) => t in e ? _p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $e = (e, t, n) => ($p(e, typeof t != "symbol" ? t + "" : t, n), n);
import { unref as v, renderSlot as ge, resolveDynamicComponent as xt, createVNode as xe, h as $n, mergeProps as Kt, defineComponent as Z, computed as A, isVNode as Ep, resolveComponent as Ht, openBlock as k, createElementBlock as q, createElementVNode as te, ref as R, watch as J, getCurrentScope as fc, onScopeDispose as dc, getCurrentInstance as St, onMounted as Ue, nextTick as ye, warn as Tp, inject as he, isRef as kn, shallowRef as xn, onBeforeUnmount as wt, onBeforeMount as pc, provide as Ot, toRef as Mt, onUnmounted as Ss, reactive as kt, toRefs as Hn, normalizeClass as V, onUpdated as vc, Fragment as At, useSlots as ta, withCtx as se, createBlock as ve, normalizeStyle as Me, createTextVNode as na, toDisplayString as Ye, createCommentVNode as re, TransitionGroup as Op, useAttrs as mc, withDirectives as Qe, withModifiers as bt, vShow as Tn, Transition as Br, cloneVNode as Sp, Text as gc, Comment as wp, Teleport as Cp, readonly as Ap, onDeactivated as Ip, toRaw as sr, vModelCheckbox as Na, vModelRadio as hc, triggerRef as Ar, resolveDirective as Lp, renderList as Lo, withKeys as Rt, vModelText as Np, createSlots as Pp } from "vue";
var ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Rp(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xt = Rp;
const Ur = /* @__PURE__ */ tt(Xt);
var Fp = typeof ga == "object" && ga && ga.Object === Object && ga, bc = Fp, xp = bc, Mp = typeof self == "object" && self && self.Object === Object && self, kp = xp || Mp || Function("return this")(), Jt = kp, Dp = Jt, jp = Dp.Symbol, ra = jp, Ii = ra, yc = Object.prototype, Vp = yc.hasOwnProperty, Bp = yc.toString, Ir = Ii ? Ii.toStringTag : void 0;
function Up(e) {
  var t = Vp.call(e, Ir), n = e[Ir];
  try {
    e[Ir] = void 0;
    var r = !0;
  } catch {
  }
  var a = Bp.call(e);
  return r && (t ? e[Ir] = n : delete e[Ir]), a;
}
var Hp = Up, Wp = Object.prototype, zp = Wp.toString;
function Kp(e) {
  return zp.call(e);
}
var Gp = Kp, Li = ra, qp = Hp, Yp = Gp, Xp = "[object Null]", Jp = "[object Undefined]", Ni = Li ? Li.toStringTag : void 0;
function Zp(e) {
  return e == null ? e === void 0 ? Jp : Xp : Ni && Ni in Object(e) ? qp(e) : Yp(e);
}
var Wn = Zp, Qp = Wn, ev = Xt, tv = "[object AsyncFunction]", nv = "[object Function]", rv = "[object GeneratorFunction]", av = "[object Proxy]";
function ov(e) {
  if (!ev(e))
    return !1;
  var t = Qp(e);
  return t == nv || t == rv || t == tv || t == av;
}
var Ya = ov;
const Rr = /* @__PURE__ */ tt(Ya);
var sv = Jt, iv = sv["__core-js_shared__"], lv = iv, No = lv, Pi = function() {
  var e = /[^.]+$/.exec(No && No.keys && No.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function uv(e) {
  return !!Pi && Pi in e;
}
var cv = uv, fv = Function.prototype, dv = fv.toString;
function pv(e) {
  if (e != null) {
    try {
      return dv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var _c = pv, vv = Ya, mv = cv, gv = Xt, hv = _c, bv = /[\\^$.*+?()[\]{}|]/g, yv = /^\[object .+?Constructor\]$/, _v = Function.prototype, $v = Object.prototype, Ev = _v.toString, Tv = $v.hasOwnProperty, Ov = RegExp(
  "^" + Ev.call(Tv).replace(bv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Sv(e) {
  if (!gv(e) || mv(e))
    return !1;
  var t = vv(e) ? Ov : yv;
  return t.test(hv(e));
}
var wv = Sv;
function Cv(e, t) {
  return e == null ? void 0 : e[t];
}
var Av = Cv, Iv = wv, Lv = Av;
function Nv(e, t) {
  var n = Lv(e, t);
  return Iv(n) ? n : void 0;
}
var zn = Nv, Pv = zn, Rv = Jt, Fv = Pv(Rv, "DataView"), xv = Fv, Mv = zn, kv = Jt, Dv = Mv(kv, "Map"), ws = Dv, jv = zn, Vv = Jt, Bv = jv(Vv, "Promise"), Uv = Bv, Hv = zn, Wv = Jt, zv = Hv(Wv, "Set"), Kv = zv, Gv = zn, qv = Jt, Yv = Gv(qv, "WeakMap"), Xv = Yv, Wo = xv, zo = ws, Ko = Uv, Go = Kv, qo = Xv, $c = Wn, hr = _c, Ri = "[object Map]", Jv = "[object Object]", Fi = "[object Promise]", xi = "[object Set]", Mi = "[object WeakMap]", ki = "[object DataView]", Zv = hr(Wo), Qv = hr(zo), em = hr(Ko), tm = hr(Go), nm = hr(qo), Nn = $c;
(Wo && Nn(new Wo(new ArrayBuffer(1))) != ki || zo && Nn(new zo()) != Ri || Ko && Nn(Ko.resolve()) != Fi || Go && Nn(new Go()) != xi || qo && Nn(new qo()) != Mi) && (Nn = function(e) {
  var t = $c(e), n = t == Jv ? e.constructor : void 0, r = n ? hr(n) : "";
  if (r)
    switch (r) {
      case Zv:
        return ki;
      case Qv:
        return Ri;
      case em:
        return Fi;
      case tm:
        return xi;
      case nm:
        return Mi;
    }
  return t;
});
var Cs = Nn;
function rm(e) {
  return e != null && typeof e == "object";
}
var dn = rm, am = Cs, om = dn, sm = "[object Map]";
function im(e) {
  return om(e) && am(e) == sm;
}
var lm = im;
function um(e) {
  return function(t) {
    return e(t);
  };
}
var Xa = um, Pa = { exports: {} };
Pa.exports;
(function(e, t) {
  var n = bc, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, s = o && n.process, i = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Pa, Pa.exports);
var As = Pa.exports, cm = lm, fm = Xa, Di = As, ji = Di && Di.isMap, dm = ji ? fm(ji) : cm, Ec = dm;
const pm = /* @__PURE__ */ tt(Ec);
function vm(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = e[r + t];
  return o;
}
var Tc = vm, mm = Tc;
function gm(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : mm(e, t, n);
}
var hm = gm, bm = "\\ud800-\\udfff", ym = "\\u0300-\\u036f", _m = "\\ufe20-\\ufe2f", $m = "\\u20d0-\\u20ff", Em = ym + _m + $m, Tm = "\\ufe0e\\ufe0f", Om = "\\u200d", Sm = RegExp("[" + Om + bm + Em + Tm + "]");
function wm(e) {
  return Sm.test(e);
}
var Oc = wm;
function Cm(e) {
  return e.split("");
}
var Am = Cm, Sc = "\\ud800-\\udfff", Im = "\\u0300-\\u036f", Lm = "\\ufe20-\\ufe2f", Nm = "\\u20d0-\\u20ff", Pm = Im + Lm + Nm, Rm = "\\ufe0e\\ufe0f", Fm = "[" + Sc + "]", Yo = "[" + Pm + "]", Xo = "\\ud83c[\\udffb-\\udfff]", xm = "(?:" + Yo + "|" + Xo + ")", wc = "[^" + Sc + "]", Cc = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ac = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mm = "\\u200d", Ic = xm + "?", Lc = "[" + Rm + "]?", km = "(?:" + Mm + "(?:" + [wc, Cc, Ac].join("|") + ")" + Lc + Ic + ")*", Dm = Lc + Ic + km, jm = "(?:" + [wc + Yo + "?", Yo, Cc, Ac, Fm].join("|") + ")", Vm = RegExp(Xo + "(?=" + Xo + ")|" + jm + Dm, "g");
function Bm(e) {
  return e.match(Vm) || [];
}
var Um = Bm, Hm = Am, Wm = Oc, zm = Um;
function Km(e) {
  return Wm(e) ? zm(e) : Hm(e);
}
var Gm = Km;
function qm(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Is = qm, Ym = Array.isArray, Zt = Ym;
const Jo = /* @__PURE__ */ tt(Zt);
var Xm = Wn, Jm = dn, Zm = "[object Symbol]";
function Qm(e) {
  return typeof e == "symbol" || Jm(e) && Xm(e) == Zm;
}
var Ls = Qm, Vi = ra, eg = Is, tg = Zt, ng = Ls, rg = 1 / 0, Bi = Vi ? Vi.prototype : void 0, Ui = Bi ? Bi.toString : void 0;
function Nc(e) {
  if (typeof e == "string")
    return e;
  if (tg(e))
    return eg(e, Nc) + "";
  if (ng(e))
    return Ui ? Ui.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -rg ? "-0" : t;
}
var ag = Nc, og = ag;
function sg(e) {
  return e == null ? "" : og(e);
}
var aa = sg, ig = hm, lg = Oc, ug = Gm, cg = aa;
function fg(e) {
  return function(t) {
    t = cg(t);
    var n = lg(t) ? ug(t) : void 0, r = n ? n[0] : t.charAt(0), a = n ? ig(n, 1).join("") : t.slice(1);
    return r[e]() + a;
  };
}
var dg = fg, pg = dg, vg = pg("toUpperCase"), Pc = vg;
const mg = /* @__PURE__ */ tt(Pc);
var gg = Zt, hg = Ls, bg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yg = /^\w*$/;
function _g(e, t) {
  if (gg(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || hg(e) ? !0 : yg.test(e) || !bg.test(e) || t != null && e in Object(t);
}
var $g = _g, Eg = zn, Tg = Eg(Object, "create"), Ja = Tg, Hi = Ja;
function Og() {
  this.__data__ = Hi ? Hi(null) : {}, this.size = 0;
}
var Sg = Og;
function wg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Cg = wg, Ag = Ja, Ig = "__lodash_hash_undefined__", Lg = Object.prototype, Ng = Lg.hasOwnProperty;
function Pg(e) {
  var t = this.__data__;
  if (Ag) {
    var n = t[e];
    return n === Ig ? void 0 : n;
  }
  return Ng.call(t, e) ? t[e] : void 0;
}
var Rg = Pg, Fg = Ja, xg = Object.prototype, Mg = xg.hasOwnProperty;
function kg(e) {
  var t = this.__data__;
  return Fg ? t[e] !== void 0 : Mg.call(t, e);
}
var Dg = kg, jg = Ja, Vg = "__lodash_hash_undefined__";
function Bg(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = jg && t === void 0 ? Vg : t, this;
}
var Ug = Bg, Hg = Sg, Wg = Cg, zg = Rg, Kg = Dg, Gg = Ug;
function br(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
br.prototype.clear = Hg;
br.prototype.delete = Wg;
br.prototype.get = zg;
br.prototype.has = Kg;
br.prototype.set = Gg;
var qg = br;
function Yg() {
  this.__data__ = [], this.size = 0;
}
var Xg = Yg;
function Jg(e, t) {
  return e === t || e !== e && t !== t;
}
var Za = Jg, Zg = Za;
function Qg(e, t) {
  for (var n = e.length; n--; )
    if (Zg(e[n][0], t))
      return n;
  return -1;
}
var Qa = Qg, eh = Qa, th = Array.prototype, nh = th.splice;
function rh(e) {
  var t = this.__data__, n = eh(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : nh.call(t, n, 1), --this.size, !0;
}
var ah = rh, oh = Qa;
function sh(e) {
  var t = this.__data__, n = oh(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var ih = sh, lh = Qa;
function uh(e) {
  return lh(this.__data__, e) > -1;
}
var ch = uh, fh = Qa;
function dh(e, t) {
  var n = this.__data__, r = fh(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var ph = dh, vh = Xg, mh = ah, gh = ih, hh = ch, bh = ph;
function yr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
yr.prototype.clear = vh;
yr.prototype.delete = mh;
yr.prototype.get = gh;
yr.prototype.has = hh;
yr.prototype.set = bh;
var eo = yr, Wi = qg, yh = eo, _h = ws;
function $h() {
  this.size = 0, this.__data__ = {
    hash: new Wi(),
    map: new (_h || yh)(),
    string: new Wi()
  };
}
var Eh = $h;
function Th(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Oh = Th, Sh = Oh;
function wh(e, t) {
  var n = e.__data__;
  return Sh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var to = wh, Ch = to;
function Ah(e) {
  var t = Ch(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ih = Ah, Lh = to;
function Nh(e) {
  return Lh(this, e).get(e);
}
var Ph = Nh, Rh = to;
function Fh(e) {
  return Rh(this, e).has(e);
}
var xh = Fh, Mh = to;
function kh(e, t) {
  var n = Mh(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Dh = kh, jh = Eh, Vh = Ih, Bh = Ph, Uh = xh, Hh = Dh;
function _r(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_r.prototype.clear = jh;
_r.prototype.delete = Vh;
_r.prototype.get = Bh;
_r.prototype.has = Uh;
_r.prototype.set = Hh;
var Ns = _r, Rc = Ns, Wh = "Expected a function";
function Ps(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wh);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, r);
    return n.cache = o.set(a, s) || o, s;
  };
  return n.cache = new (Ps.Cache || Rc)(), n;
}
Ps.Cache = Rc;
var zh = Ps, Kh = zh, Gh = 500;
function qh(e) {
  var t = Kh(e, function(r) {
    return n.size === Gh && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Yh = qh, Xh = Yh, Jh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zh = /\\(\\)?/g, Qh = Xh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Jh, function(n, r, a, o) {
    t.push(a ? o.replace(Zh, "$1") : r || n);
  }), t;
}), eb = Qh, tb = Zt, nb = $g, rb = eb, ab = aa;
function ob(e, t) {
  return tb(e) ? e : nb(e, t) ? [e] : rb(ab(e));
}
var oa = ob, sb = Ls, ib = 1 / 0;
function lb(e) {
  if (typeof e == "string" || sb(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ib ? "-0" : t;
}
var no = lb, ub = oa, cb = no;
function fb(e, t) {
  t = ub(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[cb(t[n++])];
  return n && n == r ? e : void 0;
}
var Fc = fb, db = Fc;
function pb(e, t, n) {
  var r = e == null ? void 0 : db(e, t);
  return r === void 0 ? n : r;
}
var vb = pb;
const En = /* @__PURE__ */ tt(vb);
var mb = eo;
function gb() {
  this.__data__ = new mb(), this.size = 0;
}
var hb = gb;
function bb(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var yb = bb;
function _b(e) {
  return this.__data__.get(e);
}
var $b = _b;
function Eb(e) {
  return this.__data__.has(e);
}
var Tb = Eb, Ob = eo, Sb = ws, wb = Ns, Cb = 200;
function Ab(e, t) {
  var n = this.__data__;
  if (n instanceof Ob) {
    var r = n.__data__;
    if (!Sb || r.length < Cb - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new wb(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Ib = Ab, Lb = eo, Nb = hb, Pb = yb, Rb = $b, Fb = Tb, xb = Ib;
function $r(e) {
  var t = this.__data__ = new Lb(e);
  this.size = t.size;
}
$r.prototype.clear = Nb;
$r.prototype.delete = Pb;
$r.prototype.get = Rb;
$r.prototype.has = Fb;
$r.prototype.set = xb;
var xc = $r;
function Mb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var kb = Mb, Db = zn, jb = function() {
  try {
    var e = Db(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Mc = jb, zi = Mc;
function Vb(e, t, n) {
  t == "__proto__" && zi ? zi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Rs = Vb, Bb = Rs, Ub = Za, Hb = Object.prototype, Wb = Hb.hasOwnProperty;
function zb(e, t, n) {
  var r = e[t];
  (!(Wb.call(e, t) && Ub(r, n)) || n === void 0 && !(t in e)) && Bb(e, t, n);
}
var ro = zb, Kb = ro, Gb = Rs;
function qb(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var i = t[o], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), a ? Gb(n, i, l) : Kb(n, i, l);
  }
  return n;
}
var Kn = qb;
function Yb(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Xb = Yb, Jb = Wn, Zb = dn, Qb = "[object Arguments]";
function ey(e) {
  return Zb(e) && Jb(e) == Qb;
}
var ty = ey, Ki = ty, ny = dn, kc = Object.prototype, ry = kc.hasOwnProperty, ay = kc.propertyIsEnumerable, oy = Ki(function() {
  return arguments;
}()) ? Ki : function(e) {
  return ny(e) && ry.call(e, "callee") && !ay.call(e, "callee");
}, ao = oy, Ra = { exports: {} };
function sy() {
  return !1;
}
var iy = sy;
Ra.exports;
(function(e, t) {
  var n = Jt, r = iy, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, i = s ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, u = l || r;
  e.exports = u;
})(Ra, Ra.exports);
var Fs = Ra.exports, ly = 9007199254740991, uy = /^(?:0|[1-9]\d*)$/;
function cy(e, t) {
  var n = typeof e;
  return t = t ?? ly, !!t && (n == "number" || n != "symbol" && uy.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var oo = cy, fy = 9007199254740991;
function dy(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fy;
}
var xs = dy, py = Wn, vy = xs, my = dn, gy = "[object Arguments]", hy = "[object Array]", by = "[object Boolean]", yy = "[object Date]", _y = "[object Error]", $y = "[object Function]", Ey = "[object Map]", Ty = "[object Number]", Oy = "[object Object]", Sy = "[object RegExp]", wy = "[object Set]", Cy = "[object String]", Ay = "[object WeakMap]", Iy = "[object ArrayBuffer]", Ly = "[object DataView]", Ny = "[object Float32Array]", Py = "[object Float64Array]", Ry = "[object Int8Array]", Fy = "[object Int16Array]", xy = "[object Int32Array]", My = "[object Uint8Array]", ky = "[object Uint8ClampedArray]", Dy = "[object Uint16Array]", jy = "[object Uint32Array]", Ie = {};
Ie[Ny] = Ie[Py] = Ie[Ry] = Ie[Fy] = Ie[xy] = Ie[My] = Ie[ky] = Ie[Dy] = Ie[jy] = !0;
Ie[gy] = Ie[hy] = Ie[Iy] = Ie[by] = Ie[Ly] = Ie[yy] = Ie[_y] = Ie[$y] = Ie[Ey] = Ie[Ty] = Ie[Oy] = Ie[Sy] = Ie[wy] = Ie[Cy] = Ie[Ay] = !1;
function Vy(e) {
  return my(e) && vy(e.length) && !!Ie[py(e)];
}
var By = Vy, Uy = By, Hy = Xa, Gi = As, qi = Gi && Gi.isTypedArray, Wy = qi ? Hy(qi) : Uy, Dc = Wy, zy = Xb, Ky = ao, Gy = Zt, qy = Fs, Yy = oo, Xy = Dc, Jy = Object.prototype, Zy = Jy.hasOwnProperty;
function Qy(e, t) {
  var n = Gy(e), r = !n && Ky(e), a = !n && !r && qy(e), o = !n && !r && !a && Xy(e), s = n || r || a || o, i = s ? zy(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || Zy.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Yy(u, l))) && i.push(u);
  return i;
}
var jc = Qy, e0 = Object.prototype;
function t0(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || e0;
  return e === n;
}
var so = t0;
function n0(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Vc = n0, r0 = Vc, a0 = r0(Object.keys, Object), o0 = a0, s0 = so, i0 = o0, l0 = Object.prototype, u0 = l0.hasOwnProperty;
function c0(e) {
  if (!s0(e))
    return i0(e);
  var t = [];
  for (var n in Object(e))
    u0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var f0 = c0, d0 = Ya, p0 = xs;
function v0(e) {
  return e != null && p0(e.length) && !d0(e);
}
var sa = v0, m0 = jc, g0 = f0, h0 = sa;
function b0(e) {
  return h0(e) ? m0(e) : g0(e);
}
var io = b0, y0 = Kn, _0 = io;
function $0(e, t) {
  return e && y0(t, _0(t), e);
}
var E0 = $0;
function T0(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var O0 = T0, S0 = Xt, w0 = so, C0 = O0, A0 = Object.prototype, I0 = A0.hasOwnProperty;
function L0(e) {
  if (!S0(e))
    return C0(e);
  var t = w0(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !I0.call(e, r)) || n.push(r);
  return n;
}
var N0 = L0, P0 = jc, R0 = N0, F0 = sa;
function x0(e) {
  return F0(e) ? P0(e, !0) : R0(e);
}
var ia = x0, M0 = Kn, k0 = ia;
function D0(e, t) {
  return e && M0(t, k0(t), e);
}
var j0 = D0, Fa = { exports: {} };
Fa.exports;
(function(e, t) {
  var n = Jt, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, s = o ? n.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function l(u, d) {
    if (d)
      return u.slice();
    var p = u.length, g = i ? i(p) : new u.constructor(p);
    return u.copy(g), g;
  }
  e.exports = l;
})(Fa, Fa.exports);
var Bc = Fa.exports;
function V0(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Uc = V0;
function B0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[a++] = s);
  }
  return o;
}
var U0 = B0;
function H0() {
  return [];
}
var Hc = H0, W0 = U0, z0 = Hc, K0 = Object.prototype, G0 = K0.propertyIsEnumerable, Yi = Object.getOwnPropertySymbols, q0 = Yi ? function(e) {
  return e == null ? [] : (e = Object(e), W0(Yi(e), function(t) {
    return G0.call(e, t);
  }));
} : z0, Ms = q0, Y0 = Kn, X0 = Ms;
function J0(e, t) {
  return Y0(e, X0(e), t);
}
var Z0 = J0;
function Q0(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var ks = Q0, e_ = Vc, t_ = e_(Object.getPrototypeOf, Object), Ds = t_, n_ = ks, r_ = Ds, a_ = Ms, o_ = Hc, s_ = Object.getOwnPropertySymbols, i_ = s_ ? function(e) {
  for (var t = []; e; )
    n_(t, a_(e)), e = r_(e);
  return t;
} : o_, Wc = i_, l_ = Kn, u_ = Wc;
function c_(e, t) {
  return l_(e, u_(e), t);
}
var f_ = c_, d_ = ks, p_ = Zt;
function v_(e, t, n) {
  var r = t(e);
  return p_(e) ? r : d_(r, n(e));
}
var zc = v_, m_ = zc, g_ = Ms, h_ = io;
function b_(e) {
  return m_(e, h_, g_);
}
var y_ = b_, __ = zc, $_ = Wc, E_ = ia;
function T_(e) {
  return __(e, E_, $_);
}
var Kc = T_, O_ = Object.prototype, S_ = O_.hasOwnProperty;
function w_(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && S_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var C_ = w_, A_ = Jt, I_ = A_.Uint8Array, L_ = I_, Xi = L_;
function N_(e) {
  var t = new e.constructor(e.byteLength);
  return new Xi(t).set(new Xi(e)), t;
}
var js = N_, P_ = js;
function R_(e, t) {
  var n = t ? P_(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var F_ = R_, x_ = /\w*$/;
function M_(e) {
  var t = new e.constructor(e.source, x_.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var k_ = M_, Ji = ra, Zi = Ji ? Ji.prototype : void 0, Qi = Zi ? Zi.valueOf : void 0;
function D_(e) {
  return Qi ? Object(Qi.call(e)) : {};
}
var j_ = D_, V_ = js;
function B_(e, t) {
  var n = t ? V_(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Gc = B_, U_ = js, H_ = F_, W_ = k_, z_ = j_, K_ = Gc, G_ = "[object Boolean]", q_ = "[object Date]", Y_ = "[object Map]", X_ = "[object Number]", J_ = "[object RegExp]", Z_ = "[object Set]", Q_ = "[object String]", e1 = "[object Symbol]", t1 = "[object ArrayBuffer]", n1 = "[object DataView]", r1 = "[object Float32Array]", a1 = "[object Float64Array]", o1 = "[object Int8Array]", s1 = "[object Int16Array]", i1 = "[object Int32Array]", l1 = "[object Uint8Array]", u1 = "[object Uint8ClampedArray]", c1 = "[object Uint16Array]", f1 = "[object Uint32Array]";
function d1(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case t1:
      return U_(e);
    case G_:
    case q_:
      return new r(+e);
    case n1:
      return H_(e, n);
    case r1:
    case a1:
    case o1:
    case s1:
    case i1:
    case l1:
    case u1:
    case c1:
    case f1:
      return K_(e, n);
    case Y_:
      return new r();
    case X_:
    case Q_:
      return new r(e);
    case J_:
      return W_(e);
    case Z_:
      return new r();
    case e1:
      return z_(e);
  }
}
var p1 = d1, v1 = Xt, el = Object.create, m1 = function() {
  function e() {
  }
  return function(t) {
    if (!v1(t))
      return {};
    if (el)
      return el(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), g1 = m1, h1 = g1, b1 = Ds, y1 = so;
function _1(e) {
  return typeof e.constructor == "function" && !y1(e) ? h1(b1(e)) : {};
}
var qc = _1, $1 = Cs, E1 = dn, T1 = "[object Set]";
function O1(e) {
  return E1(e) && $1(e) == T1;
}
var S1 = O1, w1 = S1, C1 = Xa, tl = As, nl = tl && tl.isSet, A1 = nl ? C1(nl) : w1, I1 = A1, L1 = xc, N1 = kb, P1 = ro, R1 = E0, F1 = j0, x1 = Bc, M1 = Uc, k1 = Z0, D1 = f_, j1 = y_, V1 = Kc, B1 = Cs, U1 = C_, H1 = p1, W1 = qc, z1 = Zt, K1 = Fs, G1 = Ec, q1 = Xt, Y1 = I1, X1 = io, J1 = ia, Z1 = 1, Q1 = 2, e$ = 4, Yc = "[object Arguments]", t$ = "[object Array]", n$ = "[object Boolean]", r$ = "[object Date]", a$ = "[object Error]", Xc = "[object Function]", o$ = "[object GeneratorFunction]", s$ = "[object Map]", i$ = "[object Number]", Jc = "[object Object]", l$ = "[object RegExp]", u$ = "[object Set]", c$ = "[object String]", f$ = "[object Symbol]", d$ = "[object WeakMap]", p$ = "[object ArrayBuffer]", v$ = "[object DataView]", m$ = "[object Float32Array]", g$ = "[object Float64Array]", h$ = "[object Int8Array]", b$ = "[object Int16Array]", y$ = "[object Int32Array]", _$ = "[object Uint8Array]", $$ = "[object Uint8ClampedArray]", E$ = "[object Uint16Array]", T$ = "[object Uint32Array]", Se = {};
Se[Yc] = Se[t$] = Se[p$] = Se[v$] = Se[n$] = Se[r$] = Se[m$] = Se[g$] = Se[h$] = Se[b$] = Se[y$] = Se[s$] = Se[i$] = Se[Jc] = Se[l$] = Se[u$] = Se[c$] = Se[f$] = Se[_$] = Se[$$] = Se[E$] = Se[T$] = !0;
Se[a$] = Se[Xc] = Se[d$] = !1;
function wa(e, t, n, r, a, o) {
  var s, i = t & Z1, l = t & Q1, u = t & e$;
  if (n && (s = a ? n(e, r, a, o) : n(e)), s !== void 0)
    return s;
  if (!q1(e))
    return e;
  var d = z1(e);
  if (d) {
    if (s = U1(e), !i)
      return M1(e, s);
  } else {
    var p = B1(e), g = p == Xc || p == o$;
    if (K1(e))
      return x1(e, i);
    if (p == Jc || p == Yc || g && !a) {
      if (s = l || g ? {} : W1(e), !i)
        return l ? D1(e, F1(s, e)) : k1(e, R1(s, e));
    } else {
      if (!Se[p])
        return a ? e : {};
      s = H1(e, p, i);
    }
  }
  o || (o = new L1());
  var b = o.get(e);
  if (b)
    return b;
  o.set(e, s), Y1(e) ? e.forEach(function(h) {
    s.add(wa(h, t, n, h, e, o));
  }) : G1(e) && e.forEach(function(h, f) {
    s.set(f, wa(h, t, n, f, e, o));
  });
  var m = u ? l ? V1 : j1 : l ? J1 : X1, c = d ? void 0 : m(e);
  return N1(c || e, function(h, f) {
    c && (f = h, h = e[f]), P1(s, f, wa(h, t, n, f, e, o));
  }), s;
}
var Zc = wa;
function O$(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var S$ = O$, w$ = Fc, C$ = Tc;
function A$(e, t) {
  return t.length < 2 ? e : w$(e, C$(t, 0, -1));
}
var I$ = A$, L$ = oa, N$ = S$, P$ = I$, R$ = no;
function F$(e, t) {
  return t = L$(t, e), e = P$(e, t), e == null || delete e[R$(N$(t))];
}
var Qc = F$, x$ = Wn, M$ = Ds, k$ = dn, D$ = "[object Object]", j$ = Function.prototype, V$ = Object.prototype, ef = j$.toString, B$ = V$.hasOwnProperty, U$ = ef.call(Object);
function H$(e) {
  if (!k$(e) || x$(e) != D$)
    return !1;
  var t = M$(e);
  if (t === null)
    return !0;
  var n = B$.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ef.call(n) == U$;
}
var tf = H$, W$ = tf;
function z$(e) {
  return W$(e) ? void 0 : e;
}
var K$ = z$, rl = ra, G$ = ao, q$ = Zt, al = rl ? rl.isConcatSpreadable : void 0;
function Y$(e) {
  return q$(e) || G$(e) || !!(al && e && e[al]);
}
var X$ = Y$, J$ = ks, Z$ = X$;
function nf(e, t, n, r, a) {
  var o = -1, s = e.length;
  for (n || (n = Z$), a || (a = []); ++o < s; ) {
    var i = e[o];
    t > 0 && n(i) ? t > 1 ? nf(i, t - 1, n, r, a) : J$(a, i) : r || (a[a.length] = i);
  }
  return a;
}
var rf = nf, Q$ = rf;
function eE(e) {
  var t = e == null ? 0 : e.length;
  return t ? Q$(e, 1) : [];
}
var tE = eE;
function nE(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var rE = nE, aE = rE, ol = Math.max;
function oE(e, t, n) {
  return t = ol(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = ol(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(s), aE(e, this, i);
  };
}
var af = oE;
function sE(e) {
  return function() {
    return e;
  };
}
var iE = sE;
function lE(e) {
  return e;
}
var of = lE, uE = iE, sl = Mc, cE = of, fE = sl ? function(e, t) {
  return sl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: uE(t),
    writable: !0
  });
} : cE, dE = fE, pE = 800, vE = 16, mE = Date.now;
function gE(e) {
  var t = 0, n = 0;
  return function() {
    var r = mE(), a = vE - (r - n);
    if (n = r, a > 0) {
      if (++t >= pE)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var hE = gE, bE = dE, yE = hE, _E = yE(bE), sf = _E, $E = tE, EE = af, TE = sf;
function OE(e) {
  return TE(EE(e, void 0, $E), e + "");
}
var SE = OE, wE = Is, CE = Zc, AE = Qc, IE = oa, LE = Kn, NE = K$, PE = SE, RE = Kc, FE = 1, xE = 2, ME = 4, kE = PE(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = wE(t, function(o) {
    return o = IE(o, e), r || (r = o.length > 1), o;
  }), LE(e, RE(e), n), r && (n = CE(n, FE | xE | ME, NE));
  for (var a = t.length; a--; )
    AE(n, t[a]);
  return n;
}), DE = kE;
const lf = /* @__PURE__ */ tt(DE);
var ct;
((e) => {
  const t = /^\s*v-([\w-]+)\s*$/, n = /^\s*(?:(?:v-slot:|#)(\w+)|v-slot)\s*$/, r = /^\s*(?:(?:v-bind:|:)(\w+)|v-bind)\s*$/, a = /^\s*(?:v-on:|@)([\w:]+)\s*$/, o = [
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
  ], s = [
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
  e.isHtmlTag = (m) => s.includes(m), e.getElemAttrs = (m, c) => {
    const h = Object.keys(m), f = { root: {}, directive: {}, prop: {} };
    return h.forEach((y) => {
      var w;
      const E = m[y], $ = t.test(y) || r.test(y) || a.test(y), T = new Array().concat(
        m.contextKeys || [],
        c.contextKeys || []
      );
      new Array().concat(
        m.excludeKeys || [],
        c.excludeKeys || []
      );
      const S = T.includes(y);
      n.test(y) ? (f.root["slot-scope"] = E, f.root.slot = ((w = n.exec(y)) == null ? void 0 : w[1]) ?? "default") : $ ? f.directive[y] = E : o.includes(y) && !S ? f.root[y] = E : f.prop[y] = E;
    }), f;
  }, e.getSlotName = (m) => {
    var h;
    const c = Object.keys(m).filter((f) => n.test(f));
    return c.length > 0 && ((h = n.exec(c[0])) == null ? void 0 : h[1]) || "default";
  };
  const i = ["this", "true", "false"], l = (m = "", c = {}, h = !1) => {
    const f = Object.keys(c).filter(($) => typeof $ == "string").filter(($) => !i.includes($)).filter(($) => !/[^\w$]/.test($)), y = f.map(($) => h ? v(c[$]) : c[$]), E = "return " + m;
    try {
      return new Function(...f, E)(...y);
    } catch ($) {
      console.error("字符串表达式执行异常！", m, c, h), console.error(f, y, E), console.error($);
    }
  }, u = ["pointerevent"];
  e.parseDirective = (m, c) => {
    const h = Object.keys(m), f = { "v-bind": {}, "v-on": {} };
    return h.forEach((y) => {
      let E = m[y];
      if (typeof E == "string" ? E = l(E, c, !0) : E = v(E), r.test(y)) {
        const $ = r.exec(y) ?? [];
        if ($[1] == null)
          if (pm(E))
            for (const [T, S] of E)
              t.test(T) ? f[T] = S : f["v-bind"][T] = S;
          else
            Ur(E) && Object.keys(E).forEach((T) => {
              t.test(T) ? f[T] = E[T] : f["v-bind"][T] = E[T];
            });
        else
          f["v-bind"][$[1]] = E;
      } else if (a.test(y)) {
        const $ = a.exec(y) ?? [];
        if ($[1]) {
          const T = "on" + mg($[1]);
          f["v-on"][T] = typeof E == "function" ? (S, ...w) => {
            const N = Object.prototype.toString.call(S).split(" ")[1].replace("]", "").toLowerCase(), F = { ...c };
            return u.includes(N) ? F.$event = S : w = [S, ...w], w.length > 0 && (F.$ = w), E.apply(c, [F]);
          } : E;
        }
      } else
        f[y] = E;
    }), f;
  };
  const d = (m, c, h) => {
    let f;
    for (; (f = m.exec(c)) !== null; )
      h(f);
  }, p = /\{\{\s*(.*?)\s*\}\}/g;
  e.getExpValue = (m, c = {}) => {
    if (!m)
      return "";
    let h = m;
    return d(p, m, ([f, y]) => {
      try {
        const E = l(y, c, !0);
        h = h.replace(f, E);
      } catch {
        console.error("=====字符串模板解析异常！=====", y, c);
      }
    }), h;
  };
  const g = /^\s*\[(.*)\]\s*$/, b = /^\s*\{(.*)\}\s*$/;
  e.getDestruct = (m, c = {}) => {
    const h = v(c);
    if (!m || typeof m == "boolean")
      return m === !1 ? {} : h;
    const f = {};
    if (Jo(h) && g.test(m)) {
      const y = g.exec(m);
      (y != null && y[1] ? y[1].split(",").map(($) => $.trim()) : []).forEach(($, T) => {
        f[$] = h == null ? void 0 : h[T];
      });
    } else if (Ur(h) && b.test(m)) {
      const y = b.exec(m);
      (y != null && y[1] ? y[1].split(",").map(($) => $.trim()) : []).forEach(($) => {
        const [T, S] = $.split(":").map((w) => w.trim());
        f[S || T] = En(h, T);
      });
    } else
      f[m] = h;
    return f;
  }, e.specialRender = {
    template({ children: m }) {
      return m == null ? void 0 : m.default();
    },
    slot({ props: m, children: c, slots: h }) {
      const f = m.name || "default";
      delete m.name;
      const y = (c == null ? void 0 : c[f]) ?? (() => []);
      return ge(h, f, m, () => y());
    },
    component({ props: m, children: c }) {
      const h = m.is;
      delete m.is;
      const f = xt(h);
      return xe(f, m, c);
    }
  }, e.defaultRender = (m) => {
    const c = m.tagname;
    if (e.specialRender[c])
      return e.specialRender[c](m);
    const h = m.directives, f = m.children, y = m.tag, E = m.props;
    return h["v-text"] ? $n(y, E, h["v-text"]) : $n(y, E, f);
  }, e.propsFilter = (m, c) => lf(m, c), e.getProps = (m, c) => {
    const { prop: h, directive: f } = (0, e.getElemAttrs)(m, {}), y = (0, e.parseDirective)(f, c);
    return Kt(h, y["v-bind"], y["v-on"]);
  };
})(ct || (ct = {}));
var jE = Rs, VE = Za;
function BE(e, t, n) {
  (n !== void 0 && !VE(e[t], n) || n === void 0 && !(t in e)) && jE(e, t, n);
}
var uf = BE;
function UE(e) {
  return function(t, n, r) {
    for (var a = -1, o = Object(t), s = r(t), i = s.length; i--; ) {
      var l = s[e ? i : ++a];
      if (n(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var HE = UE, WE = HE, zE = WE(), KE = zE, GE = sa, qE = dn;
function YE(e) {
  return qE(e) && GE(e);
}
var cf = YE;
function XE(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var ff = XE, JE = Kn, ZE = ia;
function QE(e) {
  return JE(e, ZE(e));
}
var eT = QE, il = uf, tT = Bc, nT = Gc, rT = Uc, aT = qc, ll = ao, ul = Zt, oT = cf, sT = Fs, iT = Ya, lT = Xt, uT = tf, cT = Dc, cl = ff, fT = eT;
function dT(e, t, n, r, a, o, s) {
  var i = cl(e, n), l = cl(t, n), u = s.get(l);
  if (u) {
    il(e, n, u);
    return;
  }
  var d = o ? o(i, l, n + "", e, t, s) : void 0, p = d === void 0;
  if (p) {
    var g = ul(l), b = !g && sT(l), m = !g && !b && cT(l);
    d = l, g || b || m ? ul(i) ? d = i : oT(i) ? d = rT(i) : b ? (p = !1, d = tT(l, !0)) : m ? (p = !1, d = nT(l, !0)) : d = [] : uT(l) || ll(l) ? (d = i, ll(i) ? d = fT(i) : (!lT(i) || iT(i)) && (d = aT(l))) : p = !1;
  }
  p && (s.set(l, d), a(d, l, r, o, s), s.delete(l)), il(e, n, d);
}
var pT = dT, vT = xc, mT = uf, gT = KE, hT = pT, bT = Xt, yT = ia, _T = ff;
function df(e, t, n, r, a) {
  e !== t && gT(t, function(o, s) {
    if (a || (a = new vT()), bT(o))
      hT(e, t, s, n, df, r, a);
    else {
      var i = r ? r(_T(e, s), o, s + "", e, t, a) : void 0;
      i === void 0 && (i = o), mT(e, s, i);
    }
  }, yT);
}
var $T = df, ET = of, TT = af, OT = sf;
function ST(e, t) {
  return OT(TT(e, t, ET), e + "");
}
var pf = ST, wT = Za, CT = sa, AT = oo, IT = Xt;
function LT(e, t, n) {
  if (!IT(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? CT(n) && AT(t, n.length) : r == "string" && t in n) ? wT(n[t], e) : !1;
}
var NT = LT, PT = pf, RT = NT;
function FT(e) {
  return PT(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && RT(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var i = n[r];
      i && e(t, i, r, o);
    }
    return t;
  });
}
var vf = FT, xT = $T, MT = vf, kT = MT(function(e, t, n) {
  xT(e, t, n);
}), DT = kT;
const Zo = /* @__PURE__ */ tt(DT);
function jT(e, t, n, r) {
  var a = -1, o = e == null ? 0 : e.length;
  for (r && o && (n = e[++a]); ++a < o; )
    n = t(n, e[a], a, e);
  return n;
}
var VT = jT;
function BT(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var UT = BT, HT = UT, WT = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, zT = HT(WT), KT = zT, GT = KT, qT = aa, YT = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, XT = "\\u0300-\\u036f", JT = "\\ufe20-\\ufe2f", ZT = "\\u20d0-\\u20ff", QT = XT + JT + ZT, eO = "[" + QT + "]", tO = RegExp(eO, "g");
function nO(e) {
  return e = qT(e), e && e.replace(YT, GT).replace(tO, "");
}
var rO = nO, aO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function oO(e) {
  return e.match(aO) || [];
}
var sO = oO, iO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function lO(e) {
  return iO.test(e);
}
var uO = lO, mf = "\\ud800-\\udfff", cO = "\\u0300-\\u036f", fO = "\\ufe20-\\ufe2f", dO = "\\u20d0-\\u20ff", pO = cO + fO + dO, gf = "\\u2700-\\u27bf", hf = "a-z\\xdf-\\xf6\\xf8-\\xff", vO = "\\xac\\xb1\\xd7\\xf7", mO = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gO = "\\u2000-\\u206f", hO = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bf = "A-Z\\xc0-\\xd6\\xd8-\\xde", bO = "\\ufe0e\\ufe0f", yf = vO + mO + gO + hO, _f = "['’]", fl = "[" + yf + "]", yO = "[" + pO + "]", $f = "\\d+", _O = "[" + gf + "]", Ef = "[" + hf + "]", Tf = "[^" + mf + yf + $f + gf + hf + bf + "]", $O = "\\ud83c[\\udffb-\\udfff]", EO = "(?:" + yO + "|" + $O + ")", TO = "[^" + mf + "]", Of = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sf = "[\\ud800-\\udbff][\\udc00-\\udfff]", tr = "[" + bf + "]", OO = "\\u200d", dl = "(?:" + Ef + "|" + Tf + ")", SO = "(?:" + tr + "|" + Tf + ")", pl = "(?:" + _f + "(?:d|ll|m|re|s|t|ve))?", vl = "(?:" + _f + "(?:D|LL|M|RE|S|T|VE))?", wf = EO + "?", Cf = "[" + bO + "]?", wO = "(?:" + OO + "(?:" + [TO, Of, Sf].join("|") + ")" + Cf + wf + ")*", CO = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", AO = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", IO = Cf + wf + wO, LO = "(?:" + [_O, Of, Sf].join("|") + ")" + IO, NO = RegExp([
  tr + "?" + Ef + "+" + pl + "(?=" + [fl, tr, "$"].join("|") + ")",
  SO + "+" + vl + "(?=" + [fl, tr + dl, "$"].join("|") + ")",
  tr + "?" + dl + "+" + pl,
  tr + "+" + vl,
  AO,
  CO,
  $f,
  LO
].join("|"), "g");
function PO(e) {
  return e.match(NO) || [];
}
var RO = PO, FO = sO, xO = uO, MO = aa, kO = RO;
function DO(e, t, n) {
  return e = MO(e), t = n ? void 0 : t, t === void 0 ? xO(e) ? kO(e) : FO(e) : e.match(t) || [];
}
var jO = DO, VO = VT, BO = rO, UO = jO, HO = "['’]", WO = RegExp(HO, "g");
function zO(e) {
  return function(t) {
    return VO(UO(BO(t).replace(WO, "")), e, "");
  };
}
var Af = zO, KO = Af, GO = KO(function(e, t, n) {
  return e + (n ? "-" : "") + t.toLowerCase();
}), qO = GO;
const ml = /* @__PURE__ */ tt(qO);
var YO = ro, XO = Kn, JO = vf, ZO = sa, QO = so, eS = io, tS = Object.prototype, nS = tS.hasOwnProperty, rS = JO(function(e, t) {
  if (QO(t) || ZO(t)) {
    XO(t, eS(t), e);
    return;
  }
  for (var n in t)
    nS.call(t, n) && YO(e, n, t[n]);
}), aS = rS;
const oS = /* @__PURE__ */ tt(aS), sS = ct.getElemAttrs, iS = ct.parseDirective, lS = ct.getExpValue, uS = ct.getDestruct, cS = ct.getSlotName, fS = ct.isHtmlTag, dS = ct.defaultRender, pS = ct.getProps, If = Z({
  name: "els-elem",
  props: {
    elem: Object,
    context: Object,
    parent: Object,
    params: Object,
    slotParams: Object,
    slots: Object
  },
  setup(e, t) {
    const n = e.elem || {}, r = e.context || {}, a = e.parent, o = e.params || {}, s = oS(
      {},
      r.slots || {},
      e.slots || t.slots
    ), i = v(n == null ? void 0 : n.tag) ?? v(r == null ? void 0 : r.tag) ?? "div", l = Rr(i) ? i(e, t) : i, u = typeof v(l) == "string" ? v(l) : ml(v(l).name), d = fS(u);
    let p = {}, g = {};
    const b = { prop: {} };
    r.setup && (g = r.setup(
      e,
      { tag: v(l), tagname: v(u), isHtml: v(d) },
      t
    ) || {}, Zo(b, g)), n.setup && (p = n.setup(
      e,
      { tag: v(l), tagname: v(u), isHtml: v(d) },
      t
    ) || {}, Zo(b, p));
    const m = sS(Kt(n, b.prop || {}), r), c = m.root, h = m.prop, f = m.directive, y = new Array().concat(
      b.excludeKeys || [],
      n.excludeKeys || [],
      r.excludeKeys || []
    ), E = { ...o, ...h, ...b }, $ = {
      $tag: v(l),
      $tagname: v(u),
      $isHtml: v(d),
      $slots: s,
      $elem: n,
      $context: r,
      $root: c,
      $prop: h,
      $directive: f,
      $elemSetupRes: p,
      $ctxSetupRes: g,
      $setupRes: b,
      $parent: a,
      $params: o
    }, T = A(
      () => new Array().concat(v(c.children), v(c.cls)).filter((N) => N != null)
    ), S = (N) => {
      const F = v(T);
      if (F.length === 0)
        return;
      const x = {
        default: []
      };
      F.forEach((U) => {
        const D = v(U);
        if (Ep(D))
          x.default.push(() => D);
        else if (Rr(D))
          x.default.push((Q) => D(N, Q, $));
        else if (Ur(D)) {
          const Q = cS(D);
          if (x[Q] || (x[Q] = []), D.isDirectRender === !0) {
            const ue = v(D == null ? void 0 : D.tag) ?? v(r == null ? void 0 : r.tag) ?? "div", K = Rr(ue) ? ue({ elem: D, context: r, params: N }, t) : ue, j = typeof v(K) == "string" ? v(K) : ml(v(K).name);
            x[Q].push(
              (ie = {}) => $n(K, pS(D, { ...N, ...ie }), {
                default: (me = {}) => [
                  $n(Ht("els-elem"), {
                    elem: { tag: "template", cls: D.cls },
                    context: r,
                    parent: { elem: D, tagname: j, setupRes: b },
                    params: N,
                    slotParams: { ...ie, ...me },
                    slots: s
                  })
                ]
              })
            );
          } else
            x[Q].push(
              (ue) => $n(Ht("els-elem"), {
                elem: D,
                context: r,
                parent: { elem: n, tagname: v(u), setupRes: b },
                params: N,
                slotParams: ue,
                slots: s
              })
            );
        } else
          x.default.push((Q) => lS(String(D), N));
      });
      const H = {};
      return Object.keys(x).forEach((U) => {
        H[U] = (D) => x[U].map((Q) => Q(D));
      }), H;
    };
    return () => {
      const N = uS(c["slot-scope"], e.slotParams), F = { ...E, ...N }, x = iS(f, F);
      if (x["v-if"] === !1)
        return;
      const H = lf(
        Kt(h, x["v-bind"], x["v-on"]),
        y
      ), U = S(F), D = {
        tag: v(l),
        tagname: u,
        isHtml: F.$isHtml,
        props: H,
        children: U,
        context: r,
        elem: n,
        slots: s,
        parent: a,
        directives: x,
        setupRes: b
      }, Q = (p == null ? void 0 : p.render) || (c == null ? void 0 : c.render) || (g == null ? void 0 : g.render) || (r == null ? void 0 : r.render);
      if (Q) {
        if (Rr(Q))
          return Q(D);
        if (Q[u] != null)
          return Q[u](D);
      }
      return dS(D);
    };
  }
}), vS = {
  install: (e) => {
    e.component("els-elem", If);
  }
};
/*! Element Plus Icons Vue v2.1.0 */
var Gn = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, a] of t)
    n[r] = a;
  return n;
}, mS = {
  name: "ArrowDown"
}, gS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), bS = [
  hS
];
function yS(e, t, n, r, a, o) {
  return k(), q("svg", gS, bS);
}
var _S = /* @__PURE__ */ Gn(mS, [["render", yS], ["__file", "arrow-down.vue"]]), $S = {
  name: "CircleCheck"
}, ES = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, TS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), OS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), SS = [
  TS,
  OS
];
function wS(e, t, n, r, a, o) {
  return k(), q("svg", ES, SS);
}
var CS = /* @__PURE__ */ Gn($S, [["render", wS], ["__file", "circle-check.vue"]]), AS = {
  name: "CircleClose"
}, IS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, LS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), NS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), PS = [
  LS,
  NS
];
function RS(e, t, n, r, a, o) {
  return k(), q("svg", IS, PS);
}
var Vs = /* @__PURE__ */ Gn(AS, [["render", RS], ["__file", "circle-close.vue"]]), FS = {
  name: "Close"
}, xS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, MS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), kS = [
  MS
];
function DS(e, t, n, r, a, o) {
  return k(), q("svg", xS, kS);
}
var gl = /* @__PURE__ */ Gn(FS, [["render", DS], ["__file", "close.vue"]]), jS = {
  name: "Hide"
}, VS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, BS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), US = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), HS = [
  BS,
  US
];
function WS(e, t, n, r, a, o) {
  return k(), q("svg", VS, HS);
}
var zS = /* @__PURE__ */ Gn(jS, [["render", WS], ["__file", "hide.vue"]]), KS = {
  name: "Loading"
}, GS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qS = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), YS = [
  qS
];
function XS(e, t, n, r, a, o) {
  return k(), q("svg", GS, YS);
}
var JS = /* @__PURE__ */ Gn(KS, [["render", XS], ["__file", "loading.vue"]]), ZS = {
  name: "View"
}, QS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ew = /* @__PURE__ */ te(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), tw = [
  ew
];
function nw(e, t, n, r, a, o) {
  return k(), q("svg", QS, tw);
}
var rw = /* @__PURE__ */ Gn(ZS, [["render", nw], ["__file", "view.vue"]]), aw = Object.prototype, ow = aw.hasOwnProperty;
function sw(e, t) {
  return e != null && ow.call(e, t);
}
var iw = sw, lw = oa, uw = ao, cw = Zt, fw = oo, dw = xs, pw = no;
function vw(e, t, n) {
  t = lw(t, e);
  for (var r = -1, a = t.length, o = !1; ++r < a; ) {
    var s = pw(t[r]);
    if (!(o = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return o || ++r != a ? o : (a = e == null ? 0 : e.length, !!a && dw(a) && fw(s, a) && (cw(e) || uw(e)));
}
var mw = vw, gw = iw, hw = mw;
function bw(e, t) {
  return e != null && hw(e, t, gw);
}
var yw = bw;
const Rn = /* @__PURE__ */ tt(yw);
var _w = Qc;
function $w(e, t) {
  return e == null ? !0 : _w(e, t);
}
var Ew = $w;
const xa = /* @__PURE__ */ tt(Ew);
var Tw = Wn, Ow = dn, Sw = "[object Boolean]";
function ww(e) {
  return e === !0 || e === !1 || Ow(e) && Tw(e) == Sw;
}
var Cw = ww;
const Aw = /* @__PURE__ */ tt(Cw), Po = {
  required: "请输入 [ {{label}} ] ！",
  pattern: "请按照要求输入正确的 [ {{label}} ] 格式! 格式：{{ pattern }}",
  common: "请输入正确的 [ {{label}} ] 格式!"
}, Iw = [
  "label",
  "labelWidth",
  "error",
  "showMessage",
  "inlineMessage",
  "required",
  "rules",
  "trigger",
  "message"
];
var Hr;
((e) => {
  e.buildRules = (t) => {
    const n = v(t.required) ?? !1, r = v(t.trigger) ?? "blur", a = Rn(t, "message") ? ct.getExpValue(v(t.message), t) : ct.getExpValue(Po.required, t), o = Jo(v(t.rules)) ? [...v(t.rules)] : [], s = Object.keys(Po), i = [];
    let l = !1;
    return o.forEach((u) => {
      var b;
      const d = { ...v(u) }, p = ((b = s.filter((m) => Rn(d, m))) == null ? void 0 : b[0]) || "common", g = d.message || v(t.message) || En(Po, p);
      d.message = ct.getExpValue(g, { ...t, ...d }), Rn(d, "required") && (l = !0), Rn(d, "trigger") || (d.trigger = r), i.push(d);
    }), !l && n && i.push({ required: n, message: a, trigger: r }), delete t.required, delete t.trigger, delete t.message, i;
  }, e.buildElFormItemProps = (t) => {
    const n = v(En(t, "elFormItem")), r = Jo(n) ? n : Ur(n) ? Object.keys(n) : [], a = Ur(n) ? { ...n } : {};
    return Iw.forEach((o) => {
      Rn(t, o) && !r.includes(o) && (a[o] = En(t, o), xa(t, o));
    }), xa(t, "elFormItem"), a;
  }, e.isNeedElFormItem = (t) => {
    const n = v(t.elFormItem);
    return Aw(n) ? n : (n == null ? void 0 : n.enabled) ?? !0;
  };
})(Hr || (Hr = {}));
const rn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const o = e == null ? void 0 : e(a);
  if (n === !1 || !o)
    return t == null ? void 0 : t(a);
};
var hl;
const at = typeof window < "u", Lw = (e) => typeof e == "string", Ma = () => {
}, Lf = at && ((hl = window == null ? void 0 : window.navigator) == null ? void 0 : hl.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ka(e) {
  return typeof e == "function" ? e() : v(e);
}
function Nw(e, t) {
  function n(...r) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return n;
}
function Pw(e, t = {}) {
  let n, r, a = Ma;
  const o = (i) => {
    clearTimeout(i), a(), a = Ma;
  };
  return (i) => {
    const l = ka(e), u = ka(t.maxWait);
    return n && o(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (o(r), r = null), Promise.resolve(i())) : new Promise((d, p) => {
      a = t.rejectOnCancel ? p : d, u && !r && (r = setTimeout(() => {
        n && o(n), r = null, d(i());
      }, u)), n = setTimeout(() => {
        r && o(r), r = null, d(i());
      }, l);
    });
  };
}
function Rw(e) {
  return e;
}
function Bs(e) {
  return fc() ? (dc(e), !0) : !1;
}
function Fw(e, t = 200, n = {}) {
  return Nw(Pw(t, n), e);
}
function xw(e, t = 200, n = {}) {
  const r = R(e.value), a = Fw(() => {
    r.value = e.value;
  }, t, n);
  return J(e, () => a()), r;
}
function Mw(e, t = !0) {
  St() ? Ue(e) : t ? e() : ye(e);
}
function _n(e) {
  var t;
  const n = ka(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Us = at ? window : void 0;
function or(...e) {
  let t, n, r, a;
  if (Lw(e[0]) || Array.isArray(e[0]) ? ([n, r, a] = e, t = Us) : [t, n, r, a] = e, !t)
    return Ma;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], s = () => {
    o.forEach((d) => d()), o.length = 0;
  }, i = (d, p, g, b) => (d.addEventListener(p, g, b), () => d.removeEventListener(p, g, b)), l = J(() => [_n(t), ka(a)], ([d, p]) => {
    s(), d && o.push(...n.flatMap((g) => r.map((b) => i(d, g, b, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Bs(u), u;
}
let bl = !1;
function kw(e, t, n = {}) {
  const { window: r = Us, ignore: a = [], capture: o = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Lf && !bl && (bl = !0, Array.from(r.document.body.children).forEach((g) => g.addEventListener("click", Ma)));
  let i = !0;
  const l = (g) => a.some((b) => {
    if (typeof b == "string")
      return Array.from(r.document.querySelectorAll(b)).some((m) => m === g.target || g.composedPath().includes(m));
    {
      const m = _n(b);
      return m && (g.target === m || g.composedPath().includes(m));
    }
  }), d = [
    or(r, "click", (g) => {
      const b = _n(e);
      if (!(!b || b === g.target || g.composedPath().includes(b))) {
        if (g.detail === 0 && (i = !l(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: o }),
    or(r, "pointerdown", (g) => {
      const b = _n(e);
      b && (i = !g.composedPath().includes(b) && !l(g));
    }, { passive: !0 }),
    s && or(r, "blur", (g) => {
      var b;
      const m = _n(e);
      ((b = r.document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !(m != null && m.contains(r.document.activeElement)) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function Dw(e, t = !1) {
  const n = R(), r = () => n.value = !!e();
  return r(), Mw(r, t), n;
}
const yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _l = "__vueuse_ssr_handlers__";
yl[_l] = yl[_l] || {};
var $l = Object.getOwnPropertySymbols, jw = Object.prototype.hasOwnProperty, Vw = Object.prototype.propertyIsEnumerable, Bw = (e, t) => {
  var n = {};
  for (var r in e)
    jw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $l)
    for (var r of $l(e))
      t.indexOf(r) < 0 && Vw.call(e, r) && (n[r] = e[r]);
  return n;
};
function la(e, t, n = {}) {
  const r = n, { window: a = Us } = r, o = Bw(r, ["window"]);
  let s;
  const i = Dw(() => a && "ResizeObserver" in a), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = J(() => _n(e), (p) => {
    l(), i.value && a && p && (s = new ResizeObserver(t), s.observe(p, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return Bs(d), {
    isSupported: i,
    stop: d
  };
}
var El;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(El || (El = {}));
var Uw = Object.defineProperty, Tl = Object.getOwnPropertySymbols, Hw = Object.prototype.hasOwnProperty, Ww = Object.prototype.propertyIsEnumerable, Ol = (e, t, n) => t in e ? Uw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zw = (e, t) => {
  for (var n in t || (t = {}))
    Hw.call(t, n) && Ol(e, n, t[n]);
  if (Tl)
    for (var n of Tl(t))
      Ww.call(t, n) && Ol(e, n, t[n]);
  return e;
};
const Kw = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
zw({
  linear: Rw
}, Kw);
const Gw = () => at && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Wr = () => {
}, qw = Object.prototype.hasOwnProperty, Sl = (e, t) => qw.call(e, t), Dn = Array.isArray, _t = (e) => typeof e == "function", ot = (e) => typeof e == "string", un = (e) => e !== null && typeof e == "object", Yw = Object.prototype.toString, Xw = (e) => Yw.call(e), Ro = (e) => Xw(e).slice(8, -1);
var Jw = typeof global == "object" && global && global.Object === Object && global;
const Nf = Jw;
var Zw = typeof self == "object" && self && self.Object === Object && self, Qw = Nf || Zw || Function("return this")();
const jt = Qw;
var e2 = jt.Symbol;
const Lt = e2;
var Pf = Object.prototype, t2 = Pf.hasOwnProperty, n2 = Pf.toString, Lr = Lt ? Lt.toStringTag : void 0;
function r2(e) {
  var t = t2.call(e, Lr), n = e[Lr];
  try {
    e[Lr] = void 0;
    var r = !0;
  } catch {
  }
  var a = n2.call(e);
  return r && (t ? e[Lr] = n : delete e[Lr]), a;
}
var a2 = Object.prototype, o2 = a2.toString;
function s2(e) {
  return o2.call(e);
}
var i2 = "[object Null]", l2 = "[object Undefined]", wl = Lt ? Lt.toStringTag : void 0;
function Er(e) {
  return e == null ? e === void 0 ? l2 : i2 : wl && wl in Object(e) ? r2(e) : s2(e);
}
function On(e) {
  return e != null && typeof e == "object";
}
var u2 = "[object Symbol]";
function lo(e) {
  return typeof e == "symbol" || On(e) && Er(e) == u2;
}
function c2(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var f2 = Array.isArray;
const Dt = f2;
var d2 = 1 / 0, Cl = Lt ? Lt.prototype : void 0, Al = Cl ? Cl.toString : void 0;
function Rf(e) {
  if (typeof e == "string")
    return e;
  if (Dt(e))
    return c2(e, Rf) + "";
  if (lo(e))
    return Al ? Al.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -d2 ? "-0" : t;
}
var p2 = /\s/;
function v2(e) {
  for (var t = e.length; t-- && p2.test(e.charAt(t)); )
    ;
  return t;
}
var m2 = /^\s+/;
function g2(e) {
  return e && e.slice(0, v2(e) + 1).replace(m2, "");
}
function qt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Il = 0 / 0, h2 = /^[-+]0x[0-9a-f]+$/i, b2 = /^0b[01]+$/i, y2 = /^0o[0-7]+$/i, _2 = parseInt;
function Ll(e) {
  if (typeof e == "number")
    return e;
  if (lo(e))
    return Il;
  if (qt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = qt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = g2(e);
  var n = b2.test(e);
  return n || y2.test(e) ? _2(e.slice(2), n ? 2 : 8) : h2.test(e) ? Il : +e;
}
function $2(e) {
  return e;
}
var E2 = "[object AsyncFunction]", T2 = "[object Function]", O2 = "[object GeneratorFunction]", S2 = "[object Proxy]";
function Ff(e) {
  if (!qt(e))
    return !1;
  var t = Er(e);
  return t == T2 || t == O2 || t == E2 || t == S2;
}
var w2 = jt["__core-js_shared__"];
const Fo = w2;
var Nl = function() {
  var e = /[^.]+$/.exec(Fo && Fo.keys && Fo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function C2(e) {
  return !!Nl && Nl in e;
}
var A2 = Function.prototype, I2 = A2.toString;
function qn(e) {
  if (e != null) {
    try {
      return I2.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var L2 = /[\\^$.*+?()[\]{}|]/g, N2 = /^\[object .+?Constructor\]$/, P2 = Function.prototype, R2 = Object.prototype, F2 = P2.toString, x2 = R2.hasOwnProperty, M2 = RegExp(
  "^" + F2.call(x2).replace(L2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function k2(e) {
  if (!qt(e) || C2(e))
    return !1;
  var t = Ff(e) ? M2 : N2;
  return t.test(qn(e));
}
function D2(e, t) {
  return e == null ? void 0 : e[t];
}
function Yn(e, t) {
  var n = D2(e, t);
  return k2(n) ? n : void 0;
}
var j2 = Yn(jt, "WeakMap");
const Qo = j2;
var Pl = Object.create, V2 = function() {
  function e() {
  }
  return function(t) {
    if (!qt(t))
      return {};
    if (Pl)
      return Pl(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const B2 = V2;
function U2(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function H2(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var W2 = 800, z2 = 16, K2 = Date.now;
function G2(e) {
  var t = 0, n = 0;
  return function() {
    var r = K2(), a = z2 - (r - n);
    if (n = r, a > 0) {
      if (++t >= W2)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function q2(e) {
  return function() {
    return e;
  };
}
var Y2 = function() {
  try {
    var e = Yn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Da = Y2;
var X2 = Da ? function(e, t) {
  return Da(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: q2(t),
    writable: !0
  });
} : $2;
const J2 = X2;
var Z2 = G2(J2);
const Q2 = Z2;
function eC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var tC = 9007199254740991, nC = /^(?:0|[1-9]\d*)$/;
function Hs(e, t) {
  var n = typeof e;
  return t = t ?? tC, !!t && (n == "number" || n != "symbol" && nC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function xf(e, t, n) {
  t == "__proto__" && Da ? Da(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ws(e, t) {
  return e === t || e !== e && t !== t;
}
var rC = Object.prototype, aC = rC.hasOwnProperty;
function zs(e, t, n) {
  var r = e[t];
  (!(aC.call(e, t) && Ws(r, n)) || n === void 0 && !(t in e)) && xf(e, t, n);
}
function uo(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var i = t[o], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), a ? xf(n, i, l) : zs(n, i, l);
  }
  return n;
}
var Rl = Math.max;
function oC(e, t, n) {
  return t = Rl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = Rl(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(s), U2(e, this, i);
  };
}
var sC = 9007199254740991;
function Ks(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sC;
}
function Mf(e) {
  return e != null && Ks(e.length) && !Ff(e);
}
var iC = Object.prototype;
function Gs(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || iC;
  return e === n;
}
function lC(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var uC = "[object Arguments]";
function Fl(e) {
  return On(e) && Er(e) == uC;
}
var kf = Object.prototype, cC = kf.hasOwnProperty, fC = kf.propertyIsEnumerable, dC = Fl(function() {
  return arguments;
}()) ? Fl : function(e) {
  return On(e) && cC.call(e, "callee") && !fC.call(e, "callee");
};
const qs = dC;
function pC() {
  return !1;
}
var Df = typeof exports == "object" && exports && !exports.nodeType && exports, xl = Df && typeof module == "object" && module && !module.nodeType && module, vC = xl && xl.exports === Df, Ml = vC ? jt.Buffer : void 0, mC = Ml ? Ml.isBuffer : void 0, gC = mC || pC;
const ja = gC;
var hC = "[object Arguments]", bC = "[object Array]", yC = "[object Boolean]", _C = "[object Date]", $C = "[object Error]", EC = "[object Function]", TC = "[object Map]", OC = "[object Number]", SC = "[object Object]", wC = "[object RegExp]", CC = "[object Set]", AC = "[object String]", IC = "[object WeakMap]", LC = "[object ArrayBuffer]", NC = "[object DataView]", PC = "[object Float32Array]", RC = "[object Float64Array]", FC = "[object Int8Array]", xC = "[object Int16Array]", MC = "[object Int32Array]", kC = "[object Uint8Array]", DC = "[object Uint8ClampedArray]", jC = "[object Uint16Array]", VC = "[object Uint32Array]", Le = {};
Le[PC] = Le[RC] = Le[FC] = Le[xC] = Le[MC] = Le[kC] = Le[DC] = Le[jC] = Le[VC] = !0;
Le[hC] = Le[bC] = Le[LC] = Le[yC] = Le[NC] = Le[_C] = Le[$C] = Le[EC] = Le[TC] = Le[OC] = Le[SC] = Le[wC] = Le[CC] = Le[AC] = Le[IC] = !1;
function BC(e) {
  return On(e) && Ks(e.length) && !!Le[Er(e)];
}
function Ys(e) {
  return function(t) {
    return e(t);
  };
}
var jf = typeof exports == "object" && exports && !exports.nodeType && exports, xr = jf && typeof module == "object" && module && !module.nodeType && module, UC = xr && xr.exports === jf, xo = UC && Nf.process, HC = function() {
  try {
    var e = xr && xr.require && xr.require("util").types;
    return e || xo && xo.binding && xo.binding("util");
  } catch {
  }
}();
const ir = HC;
var kl = ir && ir.isTypedArray, WC = kl ? Ys(kl) : BC;
const Vf = WC;
var zC = Object.prototype, KC = zC.hasOwnProperty;
function Bf(e, t) {
  var n = Dt(e), r = !n && qs(e), a = !n && !r && ja(e), o = !n && !r && !a && Vf(e), s = n || r || a || o, i = s ? lC(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || KC.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Hs(u, l))) && i.push(u);
  return i;
}
function Uf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var GC = Uf(Object.keys, Object);
const qC = GC;
var YC = Object.prototype, XC = YC.hasOwnProperty;
function JC(e) {
  if (!Gs(e))
    return qC(e);
  var t = [];
  for (var n in Object(e))
    XC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Xs(e) {
  return Mf(e) ? Bf(e) : JC(e);
}
function ZC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var QC = Object.prototype, eA = QC.hasOwnProperty;
function tA(e) {
  if (!qt(e))
    return ZC(e);
  var t = Gs(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !eA.call(e, r)) || n.push(r);
  return n;
}
function Js(e) {
  return Mf(e) ? Bf(e, !0) : tA(e);
}
var nA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rA = /^\w*$/;
function aA(e, t) {
  if (Dt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || lo(e) ? !0 : rA.test(e) || !nA.test(e) || t != null && e in Object(t);
}
var oA = Yn(Object, "create");
const zr = oA;
function sA() {
  this.__data__ = zr ? zr(null) : {}, this.size = 0;
}
function iA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var lA = "__lodash_hash_undefined__", uA = Object.prototype, cA = uA.hasOwnProperty;
function fA(e) {
  var t = this.__data__;
  if (zr) {
    var n = t[e];
    return n === lA ? void 0 : n;
  }
  return cA.call(t, e) ? t[e] : void 0;
}
var dA = Object.prototype, pA = dA.hasOwnProperty;
function vA(e) {
  var t = this.__data__;
  return zr ? t[e] !== void 0 : pA.call(t, e);
}
var mA = "__lodash_hash_undefined__";
function gA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = zr && t === void 0 ? mA : t, this;
}
function jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
jn.prototype.clear = sA;
jn.prototype.delete = iA;
jn.prototype.get = fA;
jn.prototype.has = vA;
jn.prototype.set = gA;
function hA() {
  this.__data__ = [], this.size = 0;
}
function co(e, t) {
  for (var n = e.length; n--; )
    if (Ws(e[n][0], t))
      return n;
  return -1;
}
var bA = Array.prototype, yA = bA.splice;
function _A(e) {
  var t = this.__data__, n = co(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : yA.call(t, n, 1), --this.size, !0;
}
function $A(e) {
  var t = this.__data__, n = co(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function EA(e) {
  return co(this.__data__, e) > -1;
}
function TA(e, t) {
  var n = this.__data__, r = co(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pn.prototype.clear = hA;
pn.prototype.delete = _A;
pn.prototype.get = $A;
pn.prototype.has = EA;
pn.prototype.set = TA;
var OA = Yn(jt, "Map");
const Kr = OA;
function SA() {
  this.size = 0, this.__data__ = {
    hash: new jn(),
    map: new (Kr || pn)(),
    string: new jn()
  };
}
function wA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fo(e, t) {
  var n = e.__data__;
  return wA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function CA(e) {
  var t = fo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function AA(e) {
  return fo(this, e).get(e);
}
function IA(e) {
  return fo(this, e).has(e);
}
function LA(e, t) {
  var n = fo(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vn.prototype.clear = SA;
vn.prototype.delete = CA;
vn.prototype.get = AA;
vn.prototype.has = IA;
vn.prototype.set = LA;
var NA = "Expected a function";
function Zs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(NA);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, r);
    return n.cache = o.set(a, s) || o, s;
  };
  return n.cache = new (Zs.Cache || vn)(), n;
}
Zs.Cache = vn;
var PA = 500;
function RA(e) {
  var t = Zs(e, function(r) {
    return n.size === PA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var FA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xA = /\\(\\)?/g, MA = RA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(FA, function(n, r, a, o) {
    t.push(a ? o.replace(xA, "$1") : r || n);
  }), t;
});
const kA = MA;
function DA(e) {
  return e == null ? "" : Rf(e);
}
function po(e, t) {
  return Dt(e) ? e : aA(e, t) ? [e] : kA(DA(e));
}
var jA = 1 / 0;
function Qs(e) {
  if (typeof e == "string" || lo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -jA ? "-0" : t;
}
function Hf(e, t) {
  t = po(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Qs(t[n++])];
  return n && n == r ? e : void 0;
}
function yt(e, t, n) {
  var r = e == null ? void 0 : Hf(e, t);
  return r === void 0 ? n : r;
}
function ei(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var Dl = Lt ? Lt.isConcatSpreadable : void 0;
function VA(e) {
  return Dt(e) || qs(e) || !!(Dl && e && e[Dl]);
}
function Wf(e, t, n, r, a) {
  var o = -1, s = e.length;
  for (n || (n = VA), a || (a = []); ++o < s; ) {
    var i = e[o];
    t > 0 && n(i) ? t > 1 ? Wf(i, t - 1, n, r, a) : ei(a, i) : r || (a[a.length] = i);
  }
  return a;
}
function BA(e) {
  var t = e == null ? 0 : e.length;
  return t ? Wf(e, 1) : [];
}
function UA(e) {
  return Q2(oC(e, void 0, BA), e + "");
}
var HA = Uf(Object.getPrototypeOf, Object);
const zf = HA;
function es() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Dt(e) ? e : [e];
}
function WA() {
  this.__data__ = new pn(), this.size = 0;
}
function zA(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function KA(e) {
  return this.__data__.get(e);
}
function GA(e) {
  return this.__data__.has(e);
}
var qA = 200;
function YA(e, t) {
  var n = this.__data__;
  if (n instanceof pn) {
    var r = n.__data__;
    if (!Kr || r.length < qA - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new vn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function sn(e) {
  var t = this.__data__ = new pn(e);
  this.size = t.size;
}
sn.prototype.clear = WA;
sn.prototype.delete = zA;
sn.prototype.get = KA;
sn.prototype.has = GA;
sn.prototype.set = YA;
function XA(e, t) {
  return e && uo(t, Xs(t), e);
}
function JA(e, t) {
  return e && uo(t, Js(t), e);
}
var Kf = typeof exports == "object" && exports && !exports.nodeType && exports, jl = Kf && typeof module == "object" && module && !module.nodeType && module, ZA = jl && jl.exports === Kf, Vl = ZA ? jt.Buffer : void 0, Bl = Vl ? Vl.allocUnsafe : void 0;
function QA(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Bl ? Bl(n) : new e.constructor(n);
  return e.copy(r), r;
}
function eI(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[a++] = s);
  }
  return o;
}
function Gf() {
  return [];
}
var tI = Object.prototype, nI = tI.propertyIsEnumerable, Ul = Object.getOwnPropertySymbols, rI = Ul ? function(e) {
  return e == null ? [] : (e = Object(e), eI(Ul(e), function(t) {
    return nI.call(e, t);
  }));
} : Gf;
const ti = rI;
function aI(e, t) {
  return uo(e, ti(e), t);
}
var oI = Object.getOwnPropertySymbols, sI = oI ? function(e) {
  for (var t = []; e; )
    ei(t, ti(e)), e = zf(e);
  return t;
} : Gf;
const qf = sI;
function iI(e, t) {
  return uo(e, qf(e), t);
}
function Yf(e, t, n) {
  var r = t(e);
  return Dt(e) ? r : ei(r, n(e));
}
function ts(e) {
  return Yf(e, Xs, ti);
}
function lI(e) {
  return Yf(e, Js, qf);
}
var uI = Yn(jt, "DataView");
const ns = uI;
var cI = Yn(jt, "Promise");
const rs = cI;
var fI = Yn(jt, "Set");
const as = fI;
var Hl = "[object Map]", dI = "[object Object]", Wl = "[object Promise]", zl = "[object Set]", Kl = "[object WeakMap]", Gl = "[object DataView]", pI = qn(ns), vI = qn(Kr), mI = qn(rs), gI = qn(as), hI = qn(Qo), Pn = Er;
(ns && Pn(new ns(new ArrayBuffer(1))) != Gl || Kr && Pn(new Kr()) != Hl || rs && Pn(rs.resolve()) != Wl || as && Pn(new as()) != zl || Qo && Pn(new Qo()) != Kl) && (Pn = function(e) {
  var t = Er(e), n = t == dI ? e.constructor : void 0, r = n ? qn(n) : "";
  if (r)
    switch (r) {
      case pI:
        return Gl;
      case vI:
        return Hl;
      case mI:
        return Wl;
      case gI:
        return zl;
      case hI:
        return Kl;
    }
  return t;
});
const Gr = Pn;
var bI = Object.prototype, yI = bI.hasOwnProperty;
function _I(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && yI.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var $I = jt.Uint8Array;
const Va = $I;
function ni(e) {
  var t = new e.constructor(e.byteLength);
  return new Va(t).set(new Va(e)), t;
}
function EI(e, t) {
  var n = t ? ni(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var TI = /\w*$/;
function OI(e) {
  var t = new e.constructor(e.source, TI.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ql = Lt ? Lt.prototype : void 0, Yl = ql ? ql.valueOf : void 0;
function SI(e) {
  return Yl ? Object(Yl.call(e)) : {};
}
function wI(e, t) {
  var n = t ? ni(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var CI = "[object Boolean]", AI = "[object Date]", II = "[object Map]", LI = "[object Number]", NI = "[object RegExp]", PI = "[object Set]", RI = "[object String]", FI = "[object Symbol]", xI = "[object ArrayBuffer]", MI = "[object DataView]", kI = "[object Float32Array]", DI = "[object Float64Array]", jI = "[object Int8Array]", VI = "[object Int16Array]", BI = "[object Int32Array]", UI = "[object Uint8Array]", HI = "[object Uint8ClampedArray]", WI = "[object Uint16Array]", zI = "[object Uint32Array]";
function KI(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case xI:
      return ni(e);
    case CI:
    case AI:
      return new r(+e);
    case MI:
      return EI(e, n);
    case kI:
    case DI:
    case jI:
    case VI:
    case BI:
    case UI:
    case HI:
    case WI:
    case zI:
      return wI(e, n);
    case II:
      return new r();
    case LI:
    case RI:
      return new r(e);
    case NI:
      return OI(e);
    case PI:
      return new r();
    case FI:
      return SI(e);
  }
}
function GI(e) {
  return typeof e.constructor == "function" && !Gs(e) ? B2(zf(e)) : {};
}
var qI = "[object Map]";
function YI(e) {
  return On(e) && Gr(e) == qI;
}
var Xl = ir && ir.isMap, XI = Xl ? Ys(Xl) : YI;
const JI = XI;
var ZI = "[object Set]";
function QI(e) {
  return On(e) && Gr(e) == ZI;
}
var Jl = ir && ir.isSet, eL = Jl ? Ys(Jl) : QI;
const tL = eL;
var nL = 1, rL = 2, aL = 4, Xf = "[object Arguments]", oL = "[object Array]", sL = "[object Boolean]", iL = "[object Date]", lL = "[object Error]", Jf = "[object Function]", uL = "[object GeneratorFunction]", cL = "[object Map]", fL = "[object Number]", Zf = "[object Object]", dL = "[object RegExp]", pL = "[object Set]", vL = "[object String]", mL = "[object Symbol]", gL = "[object WeakMap]", hL = "[object ArrayBuffer]", bL = "[object DataView]", yL = "[object Float32Array]", _L = "[object Float64Array]", $L = "[object Int8Array]", EL = "[object Int16Array]", TL = "[object Int32Array]", OL = "[object Uint8Array]", SL = "[object Uint8ClampedArray]", wL = "[object Uint16Array]", CL = "[object Uint32Array]", we = {};
we[Xf] = we[oL] = we[hL] = we[bL] = we[sL] = we[iL] = we[yL] = we[_L] = we[$L] = we[EL] = we[TL] = we[cL] = we[fL] = we[Zf] = we[dL] = we[pL] = we[vL] = we[mL] = we[OL] = we[SL] = we[wL] = we[CL] = !0;
we[lL] = we[Jf] = we[gL] = !1;
function Ca(e, t, n, r, a, o) {
  var s, i = t & nL, l = t & rL, u = t & aL;
  if (n && (s = a ? n(e, r, a, o) : n(e)), s !== void 0)
    return s;
  if (!qt(e))
    return e;
  var d = Dt(e);
  if (d) {
    if (s = _I(e), !i)
      return H2(e, s);
  } else {
    var p = Gr(e), g = p == Jf || p == uL;
    if (ja(e))
      return QA(e, i);
    if (p == Zf || p == Xf || g && !a) {
      if (s = l || g ? {} : GI(e), !i)
        return l ? iI(e, JA(s, e)) : aI(e, XA(s, e));
    } else {
      if (!we[p])
        return a ? e : {};
      s = KI(e, p, i);
    }
  }
  o || (o = new sn());
  var b = o.get(e);
  if (b)
    return b;
  o.set(e, s), tL(e) ? e.forEach(function(h) {
    s.add(Ca(h, t, n, h, e, o));
  }) : JI(e) && e.forEach(function(h, f) {
    s.set(f, Ca(h, t, n, f, e, o));
  });
  var m = u ? l ? lI : ts : l ? Js : Xs, c = d ? void 0 : m(e);
  return eC(c || e, function(h, f) {
    c && (f = h, h = e[f]), zs(s, f, Ca(h, t, n, f, e, o));
  }), s;
}
var AL = 4;
function Zl(e) {
  return Ca(e, AL);
}
var IL = "__lodash_hash_undefined__";
function LL(e) {
  return this.__data__.set(e, IL), this;
}
function NL(e) {
  return this.__data__.has(e);
}
function Ba(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new vn(); ++t < n; )
    this.add(e[t]);
}
Ba.prototype.add = Ba.prototype.push = LL;
Ba.prototype.has = NL;
function PL(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function RL(e, t) {
  return e.has(t);
}
var FL = 1, xL = 2;
function Qf(e, t, n, r, a, o) {
  var s = n & FL, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = o.get(e), d = o.get(t);
  if (u && d)
    return u == t && d == e;
  var p = -1, g = !0, b = n & xL ? new Ba() : void 0;
  for (o.set(e, t), o.set(t, e); ++p < i; ) {
    var m = e[p], c = t[p];
    if (r)
      var h = s ? r(c, m, p, t, e, o) : r(m, c, p, e, t, o);
    if (h !== void 0) {
      if (h)
        continue;
      g = !1;
      break;
    }
    if (b) {
      if (!PL(t, function(f, y) {
        if (!RL(b, y) && (m === f || a(m, f, n, r, o)))
          return b.push(y);
      })) {
        g = !1;
        break;
      }
    } else if (!(m === c || a(m, c, n, r, o))) {
      g = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), g;
}
function ML(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
function kL(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var DL = 1, jL = 2, VL = "[object Boolean]", BL = "[object Date]", UL = "[object Error]", HL = "[object Map]", WL = "[object Number]", zL = "[object RegExp]", KL = "[object Set]", GL = "[object String]", qL = "[object Symbol]", YL = "[object ArrayBuffer]", XL = "[object DataView]", Ql = Lt ? Lt.prototype : void 0, Mo = Ql ? Ql.valueOf : void 0;
function JL(e, t, n, r, a, o, s) {
  switch (n) {
    case XL:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case YL:
      return !(e.byteLength != t.byteLength || !o(new Va(e), new Va(t)));
    case VL:
    case BL:
    case WL:
      return Ws(+e, +t);
    case UL:
      return e.name == t.name && e.message == t.message;
    case zL:
    case GL:
      return e == t + "";
    case HL:
      var i = ML;
    case KL:
      var l = r & DL;
      if (i || (i = kL), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= jL, s.set(e, t);
      var d = Qf(i(e), i(t), r, a, o, s);
      return s.delete(e), d;
    case qL:
      if (Mo)
        return Mo.call(e) == Mo.call(t);
  }
  return !1;
}
var ZL = 1, QL = Object.prototype, eN = QL.hasOwnProperty;
function tN(e, t, n, r, a, o) {
  var s = n & ZL, i = ts(e), l = i.length, u = ts(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var p = l; p--; ) {
    var g = i[p];
    if (!(s ? g in t : eN.call(t, g)))
      return !1;
  }
  var b = o.get(e), m = o.get(t);
  if (b && m)
    return b == t && m == e;
  var c = !0;
  o.set(e, t), o.set(t, e);
  for (var h = s; ++p < l; ) {
    g = i[p];
    var f = e[g], y = t[g];
    if (r)
      var E = s ? r(y, f, g, t, e, o) : r(f, y, g, e, t, o);
    if (!(E === void 0 ? f === y || a(f, y, n, r, o) : E)) {
      c = !1;
      break;
    }
    h || (h = g == "constructor");
  }
  if (c && !h) {
    var $ = e.constructor, T = t.constructor;
    $ != T && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof T == "function" && T instanceof T) && (c = !1);
  }
  return o.delete(e), o.delete(t), c;
}
var nN = 1, eu = "[object Arguments]", tu = "[object Array]", ha = "[object Object]", rN = Object.prototype, nu = rN.hasOwnProperty;
function aN(e, t, n, r, a, o) {
  var s = Dt(e), i = Dt(t), l = s ? tu : Gr(e), u = i ? tu : Gr(t);
  l = l == eu ? ha : l, u = u == eu ? ha : u;
  var d = l == ha, p = u == ha, g = l == u;
  if (g && ja(e)) {
    if (!ja(t))
      return !1;
    s = !0, d = !1;
  }
  if (g && !d)
    return o || (o = new sn()), s || Vf(e) ? Qf(e, t, n, r, a, o) : JL(e, t, l, n, r, a, o);
  if (!(n & nN)) {
    var b = d && nu.call(e, "__wrapped__"), m = p && nu.call(t, "__wrapped__");
    if (b || m) {
      var c = b ? e.value() : e, h = m ? t.value() : t;
      return o || (o = new sn()), a(c, h, n, r, o);
    }
  }
  return g ? (o || (o = new sn()), tN(e, t, n, r, a, o)) : !1;
}
function ed(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !On(e) && !On(t) ? e !== e && t !== t : aN(e, t, n, r, ed, a);
}
function oN(e, t) {
  return e != null && t in Object(e);
}
function sN(e, t, n) {
  t = po(t, e);
  for (var r = -1, a = t.length, o = !1; ++r < a; ) {
    var s = Qs(t[r]);
    if (!(o = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return o || ++r != a ? o : (a = e == null ? 0 : e.length, !!a && Ks(a) && Hs(s, a) && (Dt(e) || qs(e)));
}
function iN(e, t) {
  return e != null && sN(e, t, oN);
}
var lN = function() {
  return jt.Date.now();
};
const ko = lN;
var uN = "Expected a function", cN = Math.max, fN = Math.min;
function ru(e, t, n) {
  var r, a, o, s, i, l, u = 0, d = !1, p = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(uN);
  t = Ll(t) || 0, qt(n) && (d = !!n.leading, p = "maxWait" in n, o = p ? cN(Ll(n.maxWait) || 0, t) : o, g = "trailing" in n ? !!n.trailing : g);
  function b(S) {
    var w = r, N = a;
    return r = a = void 0, u = S, s = e.apply(N, w), s;
  }
  function m(S) {
    return u = S, i = setTimeout(f, t), d ? b(S) : s;
  }
  function c(S) {
    var w = S - l, N = S - u, F = t - w;
    return p ? fN(F, o - N) : F;
  }
  function h(S) {
    var w = S - l, N = S - u;
    return l === void 0 || w >= t || w < 0 || p && N >= o;
  }
  function f() {
    var S = ko();
    if (h(S))
      return y(S);
    i = setTimeout(f, c(S));
  }
  function y(S) {
    return i = void 0, g && r ? b(S) : (r = a = void 0, s);
  }
  function E() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = a = i = void 0;
  }
  function $() {
    return i === void 0 ? s : y(ko());
  }
  function T() {
    var S = ko(), w = h(S);
    if (r = arguments, a = this, l = S, w) {
      if (i === void 0)
        return m(l);
      if (p)
        return clearTimeout(i), i = setTimeout(f, t), b(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return T.cancel = E, T.flush = $, T;
}
function Ua(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var a = e[t];
    r[a[0]] = a[1];
  }
  return r;
}
function os(e, t) {
  return ed(e, t);
}
function vo(e) {
  return e == null;
}
function dN(e) {
  return e === void 0;
}
function td(e, t, n, r) {
  if (!qt(e))
    return e;
  t = po(t, e);
  for (var a = -1, o = t.length, s = o - 1, i = e; i != null && ++a < o; ) {
    var l = Qs(t[a]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (a != s) {
      var d = i[l];
      u = r ? r(d, l, i) : void 0, u === void 0 && (u = qt(d) ? d : Hs(t[a + 1]) ? [] : {});
    }
    zs(i, l, u), i = i[l];
  }
  return e;
}
function pN(e, t, n) {
  for (var r = -1, a = t.length, o = {}; ++r < a; ) {
    var s = t[r], i = Hf(e, s);
    n(i, s) && td(o, po(s, e), i);
  }
  return o;
}
function vN(e, t) {
  return pN(e, t, function(n, r) {
    return iN(e, r);
  });
}
var mN = UA(function(e, t) {
  return e == null ? {} : vN(e, t);
});
const gN = mN;
function hN(e, t, n) {
  return e == null ? e : td(e, t, n);
}
const Ha = (e) => e === void 0, cn = (e) => typeof e == "boolean", ut = (e) => typeof e == "number", qr = (e) => typeof Element > "u" ? !1 : e instanceof Element, bN = (e) => ot(e) ? !Number.isNaN(Number(e)) : !1, yN = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Do = (e, t, n) => ({
  get value() {
    return yt(e, t, n);
  },
  set value(r) {
    hN(e, t, r);
  }
});
class nd extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rd(e, t) {
  throw new nd(`[${e}] ${t}`);
}
function We(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ot(e) ? new nd(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const _N = "utils/dom/style";
function Yr(e, t = "px") {
  if (!e)
    return "";
  if (ut(e) || bN(e))
    return `${e}${t}`;
  if (ot(e))
    return e;
  We(_N, "binding value must be a string or number");
}
function $N(e, t) {
  if (!at)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const a = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), o = a + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  a < s ? e.scrollTop = a : o > i && (e.scrollTop = o - e.clientHeight);
}
const ad = "__epPropKey", be = (e) => e, EN = (e) => un(e) && !!e[ad], mo = (e, t) => {
  if (!un(e) || EN(e))
    return e;
  const { values: n, required: r, default: a, type: o, validator: s } = e, l = {
    type: o,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), Sl(e, "default") && p.push(a), d || (d = p.includes(u))), s && (d || (d = s(u))), !d && p.length > 0) {
        const g = [...new Set(p)].map((b) => JSON.stringify(b)).join(", ");
        Tp(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [ad]: !0
  };
  return Sl(e, "default") && (l.default = a), l;
}, ke = (e) => Ua(Object.entries(e).map(([t, n]) => [
  t,
  mo(n, t)
])), Wa = be([
  String,
  Object,
  Function
]), TN = {
  validating: JS,
  success: CS,
  error: Vs
}, Qt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Xn = (e) => (e.install = Wr, e), lr = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Ze = "update:modelValue", ri = "change", ua = ["", "default", "small", "large"], ON = {
  large: 40,
  default: 32,
  small: 24
}, SN = (e) => ON[e || "default"], wN = (e) => ["", ...ua].includes(e), od = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), CN = (e) => e, AN = ["class", "style"], IN = /^on[A-Z]/, LN = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = A(() => ((n == null ? void 0 : n.value) || []).concat(AN)), a = St();
  return a ? A(() => {
    var o;
    return Ua(Object.entries((o = a.proxy) == null ? void 0 : o.$attrs).filter(([s]) => !r.value.includes(s) && !(t && IN.test(s))));
  }) : (We("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), A(() => ({})));
}, NN = ({ from: e, replacement: t, scope: n, version: r, ref: a, type: o = "API" }, s) => {
  J(() => v(s), (i) => {
    i && We(n, `[${o}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: !0
  });
}, PN = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
});
var RN = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const FN = (e) => (t, n) => xN(t, n, v(e)), xN = (e, t, n) => yt(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var o;
  return `${(o = t == null ? void 0 : t[a]) != null ? o : `{${a}}`}`;
}), MN = (e) => {
  const t = A(() => v(e).name), n = kn(e) ? e : R(e);
  return {
    lang: t,
    locale: n,
    t: FN(e)
  };
}, kN = Symbol("localeContextKey"), ai = (e) => {
  const t = e || he(kN, R());
  return MN(A(() => t.value || RN));
}, au = "el", DN = "is-", Ln = (e, t, n, r, a) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), a && (o += `--${a}`), o;
}, jN = Symbol("namespaceContextKey"), oi = (e) => {
  const t = e || he(jN, R(au));
  return A(() => v(t) || au);
}, Ce = (e, t) => {
  const n = oi(t);
  return {
    namespace: n,
    b: (c = "") => Ln(n.value, e, c, "", ""),
    e: (c) => c ? Ln(n.value, e, "", c, "") : "",
    m: (c) => c ? Ln(n.value, e, "", "", c) : "",
    be: (c, h) => c && h ? Ln(n.value, e, c, h, "") : "",
    em: (c, h) => c && h ? Ln(n.value, e, "", c, h) : "",
    bm: (c, h) => c && h ? Ln(n.value, e, c, "", h) : "",
    bem: (c, h, f) => c && h && f ? Ln(n.value, e, c, h, f) : "",
    is: (c, ...h) => {
      const f = h.length >= 1 ? h[0] : !0;
      return c && f ? `${DN}${c}` : "";
    },
    cssVar: (c) => {
      const h = {};
      for (const f in c)
        c[f] && (h[`--${n.value}-${f}`] = c[f]);
      return h;
    },
    cssVarName: (c) => `--${n.value}-${c}`,
    cssVarBlock: (c) => {
      const h = {};
      for (const f in c)
        c[f] && (h[`--${n.value}-${e}-${f}`] = c[f]);
      return h;
    },
    cssVarBlockName: (c) => `--${n.value}-${e}-${c}`
  };
}, VN = mo({
  type: be(Boolean),
  default: null
}), BN = mo({
  type: be(Function)
}), sd = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], a = {
    [e]: VN,
    [n]: BN
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: d,
      onHide: p
    }) => {
      const g = St(), { emit: b } = g, m = g.props, c = A(() => _t(m[n])), h = A(() => m[e] === null), f = (w) => {
        s.value !== !0 && (s.value = !0, i && (i.value = w), _t(d) && d(w));
      }, y = (w) => {
        s.value !== !1 && (s.value = !1, i && (i.value = w), _t(p) && p(w));
      }, E = (w) => {
        if (m.disabled === !0 || _t(u) && !u())
          return;
        const N = c.value && at;
        N && b(t, !0), (h.value || !N) && f(w);
      }, $ = (w) => {
        if (m.disabled === !0 || !at)
          return;
        const N = c.value && at;
        N && b(t, !1), (h.value || !N) && y(w);
      }, T = (w) => {
        cn(w) && (m.disabled && w ? c.value && b(t, !1) : s.value !== w && (w ? f() : y()));
      }, S = () => {
        s.value ? $() : E();
      };
      return J(() => m[e], T), l && g.appContext.config.globalProperties.$route !== void 0 && J(() => ({
        ...g.proxy.$route
      }), () => {
        l.value && s.value && $();
      }), Ue(() => {
        T(m[e]);
      }), {
        hide: $,
        show: E,
        toggle: S,
        hasUpdateHandler: c
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: r
  };
};
sd("modelValue");
const id = (e) => {
  const t = St();
  return A(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var pt = "top", Nt = "bottom", Pt = "right", vt = "left", si = "auto", ca = [pt, Nt, Pt, vt], ur = "start", Xr = "end", UN = "clippingParents", ld = "viewport", Nr = "popper", HN = "reference", ou = ca.reduce(function(e, t) {
  return e.concat([t + "-" + ur, t + "-" + Xr]);
}, []), go = [].concat(ca, [si]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ur, t + "-" + Xr]);
}, []), WN = "beforeRead", zN = "read", KN = "afterRead", GN = "beforeMain", qN = "main", YN = "afterMain", XN = "beforeWrite", JN = "write", ZN = "afterWrite", QN = [WN, zN, KN, GN, qN, YN, XN, JN, ZN];
function Yt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Vt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function cr(e) {
  var t = Vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function It(e) {
  var t = Vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ii(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function eP(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, o = t.elements[n];
    !It(o) || !Yt(o) || (Object.assign(o.style, r), Object.keys(a).forEach(function(s) {
      var i = a[s];
      i === !1 ? o.removeAttribute(s) : o.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function tP(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var a = t.elements[r], o = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !It(a) || !Yt(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
var ud = { name: "applyStyles", enabled: !0, phase: "write", fn: eP, effect: tP, requires: ["computeStyles"] };
function Gt(e) {
  return e.split("-")[0];
}
var Mn = Math.max, za = Math.min, fr = Math.round;
function dr(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, a = 1;
  if (It(e) && t) {
    var o = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (r = fr(n.width) / s || 1), o > 0 && (a = fr(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / a, top: n.top / a, right: n.right / r, bottom: n.bottom / a, left: n.left / r, x: n.left / r, y: n.top / a };
}
function li(e) {
  var t = dr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function cd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ii(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fn(e) {
  return Vt(e).getComputedStyle(e);
}
function nP(e) {
  return ["table", "td", "th"].indexOf(Yt(e)) >= 0;
}
function Cn(e) {
  return ((cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ho(e) {
  return Yt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ii(e) ? e.host : null) || Cn(e);
}
function su(e) {
  return !It(e) || fn(e).position === "fixed" ? null : e.offsetParent;
}
function rP(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && It(e)) {
    var r = fn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = ho(e);
  for (ii(a) && (a = a.host); It(a) && ["html", "body"].indexOf(Yt(a)) < 0; ) {
    var o = fn(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function fa(e) {
  for (var t = Vt(e), n = su(e); n && nP(n) && fn(n).position === "static"; )
    n = su(n);
  return n && (Yt(n) === "html" || Yt(n) === "body" && fn(n).position === "static") ? t : n || rP(e) || t;
}
function ui(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Mr(e, t, n) {
  return Mn(e, za(t, n));
}
function aP(e, t, n) {
  var r = Mr(e, t, n);
  return r > n ? n : r;
}
function fd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function dd(e) {
  return Object.assign({}, fd(), e);
}
function pd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var oP = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, dd(typeof e != "number" ? e : pd(e, ca));
};
function sP(e) {
  var t, n = e.state, r = e.name, a = e.options, o = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Gt(n.placement), l = ui(i), u = [vt, Pt].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!o || !s)) {
    var p = oP(a.padding, n), g = li(o), b = l === "y" ? pt : vt, m = l === "y" ? Nt : Pt, c = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], h = s[l] - n.rects.reference[l], f = fa(o), y = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, E = c / 2 - h / 2, $ = p[b], T = y - g[d] - p[m], S = y / 2 - g[d] / 2 + E, w = Mr($, S, T), N = l;
    n.modifiersData[r] = (t = {}, t[N] = w, t.centerOffset = w - S, t);
  }
}
function iP(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || !cd(t.elements.popper, a) || (t.elements.arrow = a));
}
var lP = { name: "arrow", enabled: !0, phase: "main", fn: sP, effect: iP, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function pr(e) {
  return e.split("-")[1];
}
var uP = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function cP(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return { x: fr(t * a) / a || 0, y: fr(n * a) / a || 0 };
}
function iu(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, o = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, g = s.x, b = g === void 0 ? 0 : g, m = s.y, c = m === void 0 ? 0 : m, h = typeof d == "function" ? d({ x: b, y: c }) : { x: b, y: c };
  b = h.x, c = h.y;
  var f = s.hasOwnProperty("x"), y = s.hasOwnProperty("y"), E = vt, $ = pt, T = window;
  if (u) {
    var S = fa(n), w = "clientHeight", N = "clientWidth";
    if (S === Vt(n) && (S = Cn(n), fn(S).position !== "static" && i === "absolute" && (w = "scrollHeight", N = "scrollWidth")), S = S, a === pt || (a === vt || a === Pt) && o === Xr) {
      $ = Nt;
      var F = p && S === T && T.visualViewport ? T.visualViewport.height : S[w];
      c -= F - r.height, c *= l ? 1 : -1;
    }
    if (a === vt || (a === pt || a === Nt) && o === Xr) {
      E = Pt;
      var x = p && S === T && T.visualViewport ? T.visualViewport.width : S[N];
      b -= x - r.width, b *= l ? 1 : -1;
    }
  }
  var H = Object.assign({ position: i }, u && uP), U = d === !0 ? cP({ x: b, y: c }) : { x: b, y: c };
  if (b = U.x, c = U.y, l) {
    var D;
    return Object.assign({}, H, (D = {}, D[$] = y ? "0" : "", D[E] = f ? "0" : "", D.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + c + "px)" : "translate3d(" + b + "px, " + c + "px, 0)", D));
  }
  return Object.assign({}, H, (t = {}, t[$] = y ? c + "px" : "", t[E] = f ? b + "px" : "", t.transform = "", t));
}
function fP(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, o = n.adaptive, s = o === void 0 ? !0 : o, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Gt(t.placement), variation: pr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, iu(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, iu(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var vd = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: fP, data: {} }, ba = { passive: !0 };
function dP(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, o = a === void 0 ? !0 : a, s = r.resize, i = s === void 0 ? !0 : s, l = Vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, ba);
  }), i && l.addEventListener("resize", n.update, ba), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ba);
    }), i && l.removeEventListener("resize", n.update, ba);
  };
}
var md = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: dP, data: {} }, pP = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Aa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return pP[t];
  });
}
var vP = { start: "end", end: "start" };
function lu(e) {
  return e.replace(/start|end/g, function(t) {
    return vP[t];
  });
}
function ci(e) {
  var t = Vt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function fi(e) {
  return dr(Cn(e)).left + ci(e).scrollLeft;
}
function mP(e) {
  var t = Vt(e), n = Cn(e), r = t.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, i = 0;
  return r && (a = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, i = r.offsetTop)), { width: a, height: o, x: s + fi(e), y: i };
}
function gP(e) {
  var t, n = Cn(e), r = ci(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Mn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Mn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -r.scrollLeft + fi(e), l = -r.scrollTop;
  return fn(a || n).direction === "rtl" && (i += Mn(n.clientWidth, a ? a.clientWidth : 0) - o), { width: o, height: s, x: i, y: l };
}
function di(e) {
  var t = fn(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function gd(e) {
  return ["html", "body", "#document"].indexOf(Yt(e)) >= 0 ? e.ownerDocument.body : It(e) && di(e) ? e : gd(ho(e));
}
function kr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = gd(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Vt(r), s = a ? [o].concat(o.visualViewport || [], di(r) ? r : []) : r, i = t.concat(s);
  return a ? i : i.concat(kr(ho(s)));
}
function ss(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function hP(e) {
  var t = dr(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function uu(e, t) {
  return t === ld ? ss(mP(e)) : cr(t) ? hP(t) : ss(gP(Cn(e)));
}
function bP(e) {
  var t = kr(ho(e)), n = ["absolute", "fixed"].indexOf(fn(e).position) >= 0, r = n && It(e) ? fa(e) : e;
  return cr(r) ? t.filter(function(a) {
    return cr(a) && cd(a, r) && Yt(a) !== "body";
  }) : [];
}
function yP(e, t, n) {
  var r = t === "clippingParents" ? bP(e) : [].concat(t), a = [].concat(r, [n]), o = a[0], s = a.reduce(function(i, l) {
    var u = uu(e, l);
    return i.top = Mn(u.top, i.top), i.right = za(u.right, i.right), i.bottom = za(u.bottom, i.bottom), i.left = Mn(u.left, i.left), i;
  }, uu(e, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function hd(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? Gt(r) : null, o = r ? pr(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case pt:
      l = { x: s, y: t.y - n.height };
      break;
    case Nt:
      l = { x: s, y: t.y + t.height };
      break;
    case Pt:
      l = { x: t.x + t.width, y: i };
      break;
    case vt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = a ? ui(a) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case ur:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Xr:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Jr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, o = n.boundary, s = o === void 0 ? UN : o, i = n.rootBoundary, l = i === void 0 ? ld : i, u = n.elementContext, d = u === void 0 ? Nr : u, p = n.altBoundary, g = p === void 0 ? !1 : p, b = n.padding, m = b === void 0 ? 0 : b, c = dd(typeof m != "number" ? m : pd(m, ca)), h = d === Nr ? HN : Nr, f = e.rects.popper, y = e.elements[g ? h : d], E = yP(cr(y) ? y : y.contextElement || Cn(e.elements.popper), s, l), $ = dr(e.elements.reference), T = hd({ reference: $, element: f, strategy: "absolute", placement: a }), S = ss(Object.assign({}, f, T)), w = d === Nr ? S : $, N = { top: E.top - w.top + c.top, bottom: w.bottom - E.bottom + c.bottom, left: E.left - w.left + c.left, right: w.right - E.right + c.right }, F = e.modifiersData.offset;
  if (d === Nr && F) {
    var x = F[a];
    Object.keys(N).forEach(function(H) {
      var U = [Pt, Nt].indexOf(H) >= 0 ? 1 : -1, D = [pt, Nt].indexOf(H) >= 0 ? "y" : "x";
      N[H] += x[D] * U;
    });
  }
  return N;
}
function _P(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, o = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? go : l, d = pr(r), p = d ? i ? ou : ou.filter(function(m) {
    return pr(m) === d;
  }) : ca, g = p.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  g.length === 0 && (g = p);
  var b = g.reduce(function(m, c) {
    return m[c] = Jr(e, { placement: c, boundary: a, rootBoundary: o, padding: s })[Gt(c)], m;
  }, {});
  return Object.keys(b).sort(function(m, c) {
    return b[m] - b[c];
  });
}
function $P(e) {
  if (Gt(e) === si)
    return [];
  var t = Aa(e);
  return [lu(e), t, lu(t)];
}
function EP(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, o = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, g = n.altBoundary, b = n.flipVariations, m = b === void 0 ? !0 : b, c = n.allowedAutoPlacements, h = t.options.placement, f = Gt(h), y = f === h, E = l || (y || !m ? [Aa(h)] : $P(h)), $ = [h].concat(E).reduce(function(Ve, Te) {
      return Ve.concat(Gt(Te) === si ? _P(t, { placement: Te, boundary: d, rootBoundary: p, padding: u, flipVariations: m, allowedAutoPlacements: c }) : Te);
    }, []), T = t.rects.reference, S = t.rects.popper, w = /* @__PURE__ */ new Map(), N = !0, F = $[0], x = 0; x < $.length; x++) {
      var H = $[x], U = Gt(H), D = pr(H) === ur, Q = [pt, Nt].indexOf(U) >= 0, ue = Q ? "width" : "height", K = Jr(t, { placement: H, boundary: d, rootBoundary: p, altBoundary: g, padding: u }), j = Q ? D ? Pt : vt : D ? Nt : pt;
      T[ue] > S[ue] && (j = Aa(j));
      var ie = Aa(j), me = [];
      if (o && me.push(K[U] <= 0), i && me.push(K[j] <= 0, K[ie] <= 0), me.every(function(Ve) {
        return Ve;
      })) {
        F = H, N = !1;
        break;
      }
      w.set(H, me);
    }
    if (N)
      for (var De = m ? 3 : 1, ze = function(Ve) {
        var Te = $.find(function(Ge) {
          var W = w.get(Ge);
          if (W)
            return W.slice(0, Ve).every(function(G) {
              return G;
            });
        });
        if (Te)
          return F = Te, "break";
      }, je = De; je > 0; je--) {
        var Ke = ze(je);
        if (Ke === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0);
  }
}
var TP = { name: "flip", enabled: !0, phase: "main", fn: EP, requiresIfExists: ["offset"], data: { _skip: !1 } };
function cu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function fu(e) {
  return [pt, Pt, Nt, vt].some(function(t) {
    return e[t] >= 0;
  });
}
function OP(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, s = Jr(t, { elementContext: "reference" }), i = Jr(t, { altBoundary: !0 }), l = cu(s, r), u = cu(i, a, o), d = fu(l), p = fu(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var SP = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: OP };
function wP(e, t, n) {
  var r = Gt(e), a = [vt, pt].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = o[0], i = o[1];
  return s = s || 0, i = (i || 0) * a, [vt, Pt].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function CP(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, o = a === void 0 ? [0, 0] : a, s = go.reduce(function(d, p) {
    return d[p] = wP(p, t.rects, o), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var AP = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: CP };
function IP(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = hd({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var bd = { name: "popperOffsets", enabled: !0, phase: "read", fn: IP, data: {} };
function LP(e) {
  return e === "x" ? "y" : "x";
}
function NP(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, o = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, g = n.tether, b = g === void 0 ? !0 : g, m = n.tetherOffset, c = m === void 0 ? 0 : m, h = Jr(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: d }), f = Gt(t.placement), y = pr(t.placement), E = !y, $ = ui(f), T = LP($), S = t.modifiersData.popperOffsets, w = t.rects.reference, N = t.rects.popper, F = typeof c == "function" ? c(Object.assign({}, t.rects, { placement: t.placement })) : c, x = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var D, Q = $ === "y" ? pt : vt, ue = $ === "y" ? Nt : Pt, K = $ === "y" ? "height" : "width", j = S[$], ie = j + h[Q], me = j - h[ue], De = b ? -N[K] / 2 : 0, ze = y === ur ? w[K] : N[K], je = y === ur ? -N[K] : -w[K], Ke = t.elements.arrow, Ve = b && Ke ? li(Ke) : { width: 0, height: 0 }, Te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fd(), Ge = Te[Q], W = Te[ue], G = Mr(0, w[K], Ve[K]), le = E ? w[K] / 2 - De - G - Ge - x.mainAxis : ze - G - Ge - x.mainAxis, ce = E ? -w[K] / 2 + De + G + W + x.mainAxis : je + G + W + x.mainAxis, _e = t.elements.arrow && fa(t.elements.arrow), Re = _e ? $ === "y" ? _e.clientTop || 0 : _e.clientLeft || 0 : 0, O = (D = H == null ? void 0 : H[$]) != null ? D : 0, _ = j + le - O - Re, I = j + ce - O, B = Mr(b ? za(ie, _) : ie, j, b ? Mn(me, I) : me);
      S[$] = B, U[$] = B - j;
    }
    if (i) {
      var X, oe = $ === "x" ? pt : vt, He = $ === "x" ? Nt : Pt, Fe = S[T], mt = T === "y" ? "height" : "width", Ee = Fe + h[oe], P = Fe - h[He], C = [pt, vt].indexOf(f) !== -1, ee = (X = H == null ? void 0 : H[T]) != null ? X : 0, pe = C ? Ee : Fe - w[mt] - N[mt] - ee + x.altAxis, st = C ? Fe + w[mt] + N[mt] - ee - x.altAxis : P, it = b && C ? aP(pe, Fe, st) : Mr(b ? pe : Ee, Fe, b ? st : P);
      S[T] = it, U[T] = it - Fe;
    }
    t.modifiersData[r] = U;
  }
}
var PP = { name: "preventOverflow", enabled: !0, phase: "main", fn: NP, requiresIfExists: ["offset"] };
function RP(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function FP(e) {
  return e === Vt(e) || !It(e) ? ci(e) : RP(e);
}
function xP(e) {
  var t = e.getBoundingClientRect(), n = fr(t.width) / e.offsetWidth || 1, r = fr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function MP(e, t, n) {
  n === void 0 && (n = !1);
  var r = It(t), a = It(t) && xP(t), o = Cn(t), s = dr(e, a), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Yt(t) !== "body" || di(o)) && (i = FP(t)), It(t) ? (l = dr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = fi(o))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function kP(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && a(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || a(o);
  }), r;
}
function DP(e) {
  var t = kP(e);
  return QN.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function jP(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function VP(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, { options: Object.assign({}, a.options, r.options), data: Object.assign({}, a.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var du = { placement: "bottom", modifiers: [], strategy: "absolute" };
function pu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function pi(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, o = a === void 0 ? du : a;
  return function(s, i, l) {
    l === void 0 && (l = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, du, o), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, g = { state: u, setOptions: function(c) {
      var h = typeof c == "function" ? c(u.options) : c;
      m(), u.options = Object.assign({}, o, u.options, h), u.scrollParents = { reference: cr(s) ? kr(s) : s.contextElement ? kr(s.contextElement) : [], popper: kr(i) };
      var f = DP(VP([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(y) {
        return y.enabled;
      }), b(), g.update();
    }, forceUpdate: function() {
      if (!p) {
        var c = u.elements, h = c.reference, f = c.popper;
        if (pu(h, f)) {
          u.rects = { reference: MP(h, fa(f), u.options.strategy === "fixed"), popper: li(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(N) {
            return u.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var y = 0; y < u.orderedModifiers.length; y++) {
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var E = u.orderedModifiers[y], $ = E.fn, T = E.options, S = T === void 0 ? {} : T, w = E.name;
            typeof $ == "function" && (u = $({ state: u, options: S, name: w, instance: g }) || u);
          }
        }
      }
    }, update: jP(function() {
      return new Promise(function(c) {
        g.forceUpdate(), c(u);
      });
    }), destroy: function() {
      m(), p = !0;
    } };
    if (!pu(s, i))
      return g;
    g.setOptions(l).then(function(c) {
      !p && l.onFirstUpdate && l.onFirstUpdate(c);
    });
    function b() {
      u.orderedModifiers.forEach(function(c) {
        var h = c.name, f = c.options, y = f === void 0 ? {} : f, E = c.effect;
        if (typeof E == "function") {
          var $ = E({ state: u, name: h, instance: g, options: y }), T = function() {
          };
          d.push($ || T);
        }
      });
    }
    function m() {
      d.forEach(function(c) {
        return c();
      }), d = [];
    }
    return g;
  };
}
pi();
var BP = [md, bd, vd, ud];
pi({ defaultModifiers: BP });
var UP = [md, bd, vd, ud, AP, TP, PP, lP, SP], HP = pi({ defaultModifiers: UP });
const WP = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = zP(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, a = A(() => {
    const { onFirstUpdate: l, placement: u, strategy: d, modifiers: p } = v(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = xn(), s = R({
    styles: {
      popper: {
        position: v(a).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    o.value && (o.value.destroy(), o.value = void 0);
  };
  return J(a, (l) => {
    const u = v(o);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), J([e, t], ([l, u]) => {
    i(), !(!l || !u) && (o.value = HP(l, u, v(a)));
  }), wt(() => {
    i();
  }), {
    state: A(() => {
      var l;
      return { ...((l = v(o)) == null ? void 0 : l.state) || {} };
    }),
    styles: A(() => v(s).styles),
    attributes: A(() => v(s).attributes),
    update: () => {
      var l;
      return (l = v(o)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = v(o)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: A(() => v(o))
  };
};
function zP(e) {
  const t = Object.keys(e.elements), n = Ua(t.map((a) => [a, e.styles[a] || {}])), r = Ua(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: r
  };
}
function vu() {
  let e;
  const t = (r, a) => {
    n(), e = window.setTimeout(r, a);
  }, n = () => window.clearTimeout(e);
  return Bs(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const is = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, KP = Symbol("elIdInjection"), yd = () => St() ? he(KP, is) : is, bo = (e) => {
  const t = yd();
  !at && t === is && We("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = oi();
  return A(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let nr = [];
const mu = (e) => {
  const t = e;
  t.key === lr.esc && nr.forEach((n) => n(t));
}, GP = (e) => {
  Ue(() => {
    nr.length === 0 && document.addEventListener("keydown", mu), at && nr.push(e);
  }), wt(() => {
    nr = nr.filter((t) => t !== e), nr.length === 0 && at && document.removeEventListener("keydown", mu);
  });
};
let gu;
const _d = () => {
  const e = oi(), t = yd(), n = A(() => `${e.value}-popper-container-${t.prefix}`), r = A(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, qP = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, YP = () => {
  const { id: e, selector: t } = _d();
  return pc(() => {
    at && (process.env.NODE_ENV === "test" || !gu && !document.body.querySelector(t.value)) && (gu = qP(e.value));
  }), {
    id: e,
    selector: t
  };
}, XP = ke({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), JP = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: a
}) => {
  const { registerTimeout: o } = vu(), {
    registerTimeout: s,
    cancelTimeout: i
  } = vu();
  return {
    onOpen: (d) => {
      o(() => {
        r(d);
        const p = v(n);
        ut(p) && p > 0 && s(() => {
          a(d);
        }, p);
      }, v(e));
    },
    onClose: (d) => {
      i(), o(() => {
        a(d);
      }, v(t));
    }
  };
}, $d = Symbol("elForwardRef"), ZP = (e) => {
  Ot($d, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, QP = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), hu = R(0), eR = 2e3, tR = Symbol("zIndexContextKey"), nR = (e) => {
  const t = e || he(tR, void 0), n = A(() => {
    const o = v(t);
    return ut(o) ? o : eR;
  }), r = A(() => n.value + hu.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (hu.value++, r.value)
  };
};
function rR(e) {
  const t = R();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: o, value: s } = e.value;
    if (a == null || o == null)
      return;
    const i = s.slice(0, Math.max(0, a)), l = s.slice(Math.max(0, o));
    t.value = {
      selectionStart: a,
      selectionEnd: o,
      value: s,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: a } = e.value, { beforeTxt: o, afterTxt: s, selectionStart: i } = t.value;
    if (o == null || s == null || i == null)
      return;
    let l = a.length;
    if (a.endsWith(s))
      l = a.length - s.length;
    else if (a.startsWith(o))
      l = o.length;
    else {
      const u = o[i - 1], d = a.indexOf(u, i - 1);
      d !== -1 && (l = d + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const da = mo({
  type: String,
  values: ua,
  required: !1
}), aR = Symbol("size"), oR = () => {
  const e = he(aR, {});
  return A(() => v(e.size) || "");
};
var Ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
};
const sR = ke({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
}), iR = Z({
  name: "ElIcon",
  inheritAttrs: !1
}), lR = /* @__PURE__ */ Z({
  ...iR,
  props: sR,
  setup(e) {
    const t = e, n = Ce("icon"), r = A(() => {
      const { size: a, color: o } = t;
      return !a && !o ? {} : {
        fontSize: Ha(a) ? void 0 : Yr(a),
        "--color": o
      };
    });
    return (a, o) => (k(), q("i", Kt({
      class: v(n).b(),
      style: v(r)
    }, a.$attrs), [
      ge(a.$slots, "default")
    ], 16));
  }
});
var uR = /* @__PURE__ */ Ae(lR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const yn = Qt(uR), Tr = Symbol("formContextKey"), Vn = Symbol("formItemContextKey"), Sn = (e, t = {}) => {
  const n = R(void 0), r = t.prop ? n : id("size"), a = t.global ? n : oR(), o = t.form ? { size: void 0 } : he(Tr, void 0), s = t.formItem ? { size: void 0 } : he(Vn, void 0);
  return A(() => r.value || v(e) || (s == null ? void 0 : s.size) || (o == null ? void 0 : o.size) || a.value || "");
}, vi = (e) => {
  const t = id("disabled"), n = he(Tr, void 0);
  return A(() => t.value || v(e) || (n == null ? void 0 : n.disabled) || !1);
}, Or = () => {
  const e = he(Tr, void 0), t = he(Vn, void 0);
  return {
    form: e,
    formItem: t
  };
}, yo = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = R(!1)), r || (r = R(!1));
  const a = R();
  let o;
  const s = A(() => {
    var i;
    return !!(!e.label && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Ue(() => {
    o = J([Mt(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : bo().value);
      u !== a.value && (t != null && t.removeInputId && (a.value && t.removeInputId(a.value), !(r != null && r.value) && !l && u && t.addInputId(u)), a.value = u);
    }, { immediate: !0 });
  }), Ss(() => {
    o && o(), t != null && t.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: s,
    inputId: a
  };
}, cR = ke({
  size: {
    type: String,
    values: ua
  },
  disabled: Boolean
}), fR = ke({
  ...cR,
  model: Object,
  rules: {
    type: be(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: !0
  },
  validateOnRuleChange: {
    type: Boolean,
    default: !0
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: !1
  },
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
}), dR = {
  validate: (e, t, n) => (Dn(e) || ot(e)) && cn(t) && ot(n)
}, pR = "ElForm";
function vR() {
  const e = R([]), t = A(() => {
    if (!e.value.length)
      return "0";
    const o = Math.max(...e.value);
    return o ? `${o}px` : "";
  });
  function n(o) {
    const s = e.value.indexOf(o);
    return s === -1 && t.value === "0" && We(pR, `unexpected width ${o}`), s;
  }
  function r(o, s) {
    if (o && s) {
      const i = n(s);
      e.value.splice(i, 1, o);
    } else
      o && e.value.push(o);
  }
  function a(o) {
    const s = n(o);
    s > -1 && e.value.splice(s, 1);
  }
  return {
    autoLabelWidth: t,
    registerLabelWidth: r,
    deregisterLabelWidth: a
  };
}
const ya = (e, t) => {
  const n = es(t);
  return n.length > 0 ? e.filter((r) => r.prop && n.includes(r.prop)) : e;
}, Ia = "ElForm", mR = Z({
  name: Ia
}), gR = /* @__PURE__ */ Z({
  ...mR,
  props: fR,
  emits: dR,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = [], o = Sn(), s = Ce("form"), i = A(() => {
      const { labelPosition: y, inline: E } = r;
      return [
        s.b(),
        s.m(o.value || "default"),
        {
          [s.m(`label-${y}`)]: y,
          [s.m("inline")]: E
        }
      ];
    }), l = (y) => {
      a.push(y);
    }, u = (y) => {
      y.prop && a.splice(a.indexOf(y), 1);
    }, d = (y = []) => {
      if (!r.model) {
        We(Ia, "model is required for resetFields to work.");
        return;
      }
      ya(a, y).forEach((E) => E.resetField());
    }, p = (y = []) => {
      ya(a, y).forEach((E) => E.clearValidate());
    }, g = A(() => {
      const y = !!r.model;
      return y || We(Ia, "model is required for validate to work."), y;
    }), b = (y) => {
      if (a.length === 0)
        return [];
      const E = ya(a, y);
      return E.length ? E : (We(Ia, "please pass correct props!"), []);
    }, m = async (y) => h(void 0, y), c = async (y = []) => {
      if (!g.value)
        return !1;
      const E = b(y);
      if (E.length === 0)
        return !0;
      let $ = {};
      for (const T of E)
        try {
          await T.validate("");
        } catch (S) {
          $ = {
            ...$,
            ...S
          };
        }
      return Object.keys($).length === 0 ? !0 : Promise.reject($);
    }, h = async (y = [], E) => {
      const $ = !_t(E);
      try {
        const T = await c(y);
        return T === !0 && (E == null || E(T)), T;
      } catch (T) {
        if (T instanceof Error)
          throw T;
        const S = T;
        return r.scrollToError && f(Object.keys(S)[0]), E == null || E(!1, S), $ && Promise.reject(S);
      }
    }, f = (y) => {
      var E;
      const $ = ya(a, y)[0];
      $ && ((E = $.$el) == null || E.scrollIntoView(r.scrollIntoViewOptions));
    };
    return J(() => r.rules, () => {
      r.validateOnRuleChange && m().catch((y) => We(y));
    }, { deep: !0 }), Ot(Tr, kt({
      ...Hn(r),
      emit: n,
      resetFields: d,
      clearValidate: p,
      validateField: h,
      addField: l,
      removeField: u,
      ...vR()
    })), t({
      validate: m,
      validateField: h,
      resetFields: d,
      clearValidate: p,
      scrollToField: f
    }), (y, E) => (k(), q("form", {
      class: V(v(i))
    }, [
      ge(y.$slots, "default")
    ], 2));
  }
});
var hR = /* @__PURE__ */ Ae(gR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function Fn() {
  return Fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fn.apply(this, arguments);
}
function bR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zr(e, t);
}
function ls(e) {
  return ls = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ls(e);
}
function Zr(e, t) {
  return Zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Zr(e, t);
}
function yR() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function La(e, t, n) {
  return yR() ? La = Reflect.construct.bind() : La = function(a, o, s) {
    var i = [null];
    i.push.apply(i, o);
    var l = Function.bind.apply(a, i), u = new l();
    return s && Zr(u, s.prototype), u;
  }, La.apply(null, arguments);
}
function _R(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function us(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return us = function(r) {
    if (r === null || !_R(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, a);
    }
    function a() {
      return La(r, arguments, ls(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Zr(a, r);
  }, us(e);
}
var $R = /%[sdj%]/g, Ed = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ed = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function cs(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Et(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var s = e.replace($R, function(i) {
      if (i === "%%")
        return "%";
      if (a >= o)
        return i;
      switch (i) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return i;
      }
    });
    return s;
  }
  return e;
}
function ER(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Je(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || ER(t) && typeof e == "string" && !e);
}
function TR(e, t, n) {
  var r = [], a = 0, o = e.length;
  function s(i) {
    r.push.apply(r, i || []), a++, a === o && n(r);
  }
  e.forEach(function(i) {
    t(i, s);
  });
}
function bu(e, t, n) {
  var r = 0, a = e.length;
  function o(s) {
    if (s && s.length) {
      n(s);
      return;
    }
    var i = r;
    r = r + 1, i < a ? t(e[i], o) : n([]);
  }
  o([]);
}
function OR(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var yu = /* @__PURE__ */ function(e) {
  bR(t, e);
  function t(n, r) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return t;
}(/* @__PURE__ */ us(Error));
function SR(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(g, b) {
      var m = function(f) {
        return r(f), f.length ? b(new yu(f, cs(f))) : g(a);
      }, c = OR(e);
      bu(c, n, m);
    });
    return o.catch(function(g) {
      return g;
    }), o;
  }
  var s = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], i = Object.keys(e), l = i.length, u = 0, d = [], p = new Promise(function(g, b) {
    var m = function(h) {
      if (d.push.apply(d, h), u++, u === l)
        return r(d), d.length ? b(new yu(d, cs(d))) : g(a);
    };
    i.length || (r(d), g(a)), i.forEach(function(c) {
      var h = e[c];
      s.indexOf(c) !== -1 ? bu(h, n, m) : TR(h, n, m);
    });
  });
  return p.catch(function(g) {
    return g;
  }), p;
}
function wR(e) {
  return !!(e && e.message !== void 0);
}
function CR(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function _u(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = CR(t, e.fullFields) : r = t[n.field || e.fullField], wR(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function $u(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Fn({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Td = function(t, n, r, a, o, s) {
  t.required && (!r.hasOwnProperty(t.field) || Je(n, s || t.type)) && a.push(Et(o.messages.required, t.fullField));
}, AR = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(Et(o.messages.whitespace, t.fullField));
}, _a, IR = function() {
  if (_a)
    return _a;
  var e = "[a-fA-F\\d:]", t = function($) {
    return $ && $.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), s = new RegExp("^" + n + "$"), i = new RegExp("^" + a + "$"), l = function($) {
    return $ && $.exact ? o : new RegExp("(?:" + t($) + n + t($) + ")|(?:" + t($) + a + t($) + ")", "g");
  };
  l.v4 = function(E) {
    return E && E.exact ? s : new RegExp("" + t(E) + n + t(E), "g");
  }, l.v6 = function(E) {
    return E && E.exact ? i : new RegExp("" + t(E) + a + t(E), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", p = l.v4().source, g = l.v6().source, b = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", c = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h = "(?::\\d{2,5})?", f = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + d + "(?:localhost|" + p + "|" + g + "|" + b + m + c + ")" + h + f;
  return _a = new RegExp("(?:^" + y + "$)", "i"), _a;
}, Eu = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Fr = {
  integer: function(t) {
    return Fr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Fr.number(t) && !Fr.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Fr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Eu.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(IR());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Eu.hex);
  }
}, LR = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    Td(t, n, r, a, o);
    return;
  }
  var s = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], i = t.type;
  s.indexOf(i) > -1 ? Fr[i](n) || a.push(Et(o.messages.types[i], t.fullField, t.type)) : i && typeof n !== t.type && a.push(Et(o.messages.types[i], t.fullField, t.type));
}, NR = function(t, n, r, a, o) {
  var s = typeof t.len == "number", i = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, p = null, g = typeof n == "number", b = typeof n == "string", m = Array.isArray(n);
  if (g ? p = "number" : b ? p = "string" : m && (p = "array"), !p)
    return !1;
  m && (d = n.length), b && (d = n.replace(u, "_").length), s ? d !== t.len && a.push(Et(o.messages[p].len, t.fullField, t.len)) : i && !l && d < t.min ? a.push(Et(o.messages[p].min, t.fullField, t.min)) : l && !i && d > t.max ? a.push(Et(o.messages[p].max, t.fullField, t.max)) : i && l && (d < t.min || d > t.max) && a.push(Et(o.messages[p].range, t.fullField, t.min, t.max));
}, Zn = "enum", PR = function(t, n, r, a, o) {
  t[Zn] = Array.isArray(t[Zn]) ? t[Zn] : [], t[Zn].indexOf(n) === -1 && a.push(Et(o.messages[Zn], t.fullField, t[Zn].join(", ")));
}, RR = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(Et(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var s = new RegExp(t.pattern);
      s.test(n) || a.push(Et(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, de = {
  required: Td,
  whitespace: AR,
  type: LR,
  range: NR,
  enum: PR,
  pattern: RR
}, FR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n, "string") && !t.required)
      return r();
    de.required(t, n, a, s, o, "string"), Je(n, "string") || (de.type(t, n, a, s, o), de.range(t, n, a, s, o), de.pattern(t, n, a, s, o), t.whitespace === !0 && de.whitespace(t, n, a, s, o));
  }
  r(s);
}, xR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), n !== void 0 && de.type(t, n, a, s, o);
  }
  r(s);
}, MR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (n === "" && (n = void 0), Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), n !== void 0 && (de.type(t, n, a, s, o), de.range(t, n, a, s, o));
  }
  r(s);
}, kR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), n !== void 0 && de.type(t, n, a, s, o);
  }
  r(s);
}, DR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), Je(n) || de.type(t, n, a, s, o);
  }
  r(s);
}, jR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), n !== void 0 && (de.type(t, n, a, s, o), de.range(t, n, a, s, o));
  }
  r(s);
}, VR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), n !== void 0 && (de.type(t, n, a, s, o), de.range(t, n, a, s, o));
  }
  r(s);
}, BR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (n == null && !t.required)
      return r();
    de.required(t, n, a, s, o, "array"), n != null && (de.type(t, n, a, s, o), de.range(t, n, a, s, o));
  }
  r(s);
}, UR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), n !== void 0 && de.type(t, n, a, s, o);
  }
  r(s);
}, HR = "enum", WR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o), n !== void 0 && de[HR](t, n, a, s, o);
  }
  r(s);
}, zR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n, "string") && !t.required)
      return r();
    de.required(t, n, a, s, o), Je(n, "string") || de.pattern(t, n, a, s, o);
  }
  r(s);
}, KR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n, "date") && !t.required)
      return r();
    if (de.required(t, n, a, s, o), !Je(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), de.type(t, l, a, s, o), l && de.range(t, l.getTime(), a, s, o);
    }
  }
  r(s);
}, GR = function(t, n, r, a, o) {
  var s = [], i = Array.isArray(n) ? "array" : typeof n;
  de.required(t, n, a, s, o, i), r(s);
}, jo = function(t, n, r, a, o) {
  var s = t.type, i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Je(n, s) && !t.required)
      return r();
    de.required(t, n, a, i, o, s), Je(n, s) || de.type(t, n, a, i, o);
  }
  r(i);
}, qR = function(t, n, r, a, o) {
  var s = [], i = t.required || !t.required && a.hasOwnProperty(t.field);
  if (i) {
    if (Je(n) && !t.required)
      return r();
    de.required(t, n, a, s, o);
  }
  r(s);
}, Dr = {
  string: FR,
  method: xR,
  number: MR,
  boolean: kR,
  regexp: DR,
  integer: jR,
  float: VR,
  array: BR,
  object: UR,
  enum: WR,
  pattern: zR,
  date: KR,
  url: jo,
  hex: jo,
  email: jo,
  required: GR,
  any: qR
};
function fs() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ds = fs(), pa = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = ds, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var s = r[o];
      a.rules[o] = Array.isArray(s) ? s : [s];
    });
  }, t.messages = function(r) {
    return r && (this._messages = $u(fs(), r)), this._messages;
  }, t.validate = function(r, a, o) {
    var s = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var i = r, l = a, u = o;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, i), Promise.resolve(i);
    function d(c) {
      var h = [], f = {};
      function y($) {
        if (Array.isArray($)) {
          var T;
          h = (T = h).concat.apply(T, $);
        } else
          h.push($);
      }
      for (var E = 0; E < c.length; E++)
        y(c[E]);
      h.length ? (f = cs(h), u(h, f)) : u(null, i);
    }
    if (l.messages) {
      var p = this.messages();
      p === ds && (p = fs()), $u(p, l.messages), l.messages = p;
    } else
      l.messages = this.messages();
    var g = {}, b = l.keys || Object.keys(this.rules);
    b.forEach(function(c) {
      var h = s.rules[c], f = i[c];
      h.forEach(function(y) {
        var E = y;
        typeof E.transform == "function" && (i === r && (i = Fn({}, i)), f = i[c] = E.transform(f)), typeof E == "function" ? E = {
          validator: E
        } : E = Fn({}, E), E.validator = s.getValidationMethod(E), E.validator && (E.field = c, E.fullField = E.fullField || c, E.type = s.getType(E), g[c] = g[c] || [], g[c].push({
          rule: E,
          value: f,
          source: i,
          field: c
        }));
      });
    });
    var m = {};
    return SR(g, l, function(c, h) {
      var f = c.rule, y = (f.type === "object" || f.type === "array") && (typeof f.fields == "object" || typeof f.defaultField == "object");
      y = y && (f.required || !f.required && c.value), f.field = c.field;
      function E(S, w) {
        return Fn({}, w, {
          fullField: f.fullField + "." + S,
          fullFields: f.fullFields ? [].concat(f.fullFields, [S]) : [S]
        });
      }
      function $(S) {
        S === void 0 && (S = []);
        var w = Array.isArray(S) ? S : [S];
        !l.suppressWarning && w.length && e.warning("async-validator:", w), w.length && f.message !== void 0 && (w = [].concat(f.message));
        var N = w.map(_u(f, i));
        if (l.first && N.length)
          return m[f.field] = 1, h(N);
        if (!y)
          h(N);
        else {
          if (f.required && !c.value)
            return f.message !== void 0 ? N = [].concat(f.message).map(_u(f, i)) : l.error && (N = [l.error(f, Et(l.messages.required, f.field))]), h(N);
          var F = {};
          f.defaultField && Object.keys(c.value).map(function(U) {
            F[U] = f.defaultField;
          }), F = Fn({}, F, c.rule.fields);
          var x = {};
          Object.keys(F).forEach(function(U) {
            var D = F[U], Q = Array.isArray(D) ? D : [D];
            x[U] = Q.map(E.bind(null, U));
          });
          var H = new e(x);
          H.messages(l.messages), c.rule.options && (c.rule.options.messages = l.messages, c.rule.options.error = l.error), H.validate(c.value, c.rule.options || l, function(U) {
            var D = [];
            N && N.length && D.push.apply(D, N), U && U.length && D.push.apply(D, U), h(D.length ? D : null);
          });
        }
      }
      var T;
      if (f.asyncValidator)
        T = f.asyncValidator(f, c.value, $, c.source, l);
      else if (f.validator) {
        try {
          T = f.validator(f, c.value, $, c.source, l);
        } catch (S) {
          console.error == null || console.error(S), l.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), $(S.message);
        }
        T === !0 ? $() : T === !1 ? $(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || (f.fullField || f.field) + " fails") : T instanceof Array ? $(T) : T instanceof Error && $(T.message);
      }
      T && T.then && T.then(function() {
        return $();
      }, function(S) {
        return $(S);
      });
    }, function(c) {
      d(c);
    }, i);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Dr.hasOwnProperty(r.type))
      throw new Error(Et("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? Dr.required : Dr[this.getType(r)] || void 0;
  }, e;
}();
pa.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Dr[t] = n;
};
pa.warning = Ed;
pa.messages = ds;
pa.validators = Dr;
const YR = [
  "",
  "error",
  "validating",
  "success"
], XR = ke({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: be([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: be([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: YR
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: ua
  }
}), Tu = "ElLabelWrap";
var JR = Z({
  name: Tu,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = he(Tr, void 0), r = he(Vn);
    r || rd(Tu, "usage: <el-form-item><label-wrap /></el-form-item>");
    const a = Ce("form"), o = R(), s = R(0), i = () => {
      var d;
      if ((d = o.value) != null && d.firstElementChild) {
        const p = window.getComputedStyle(o.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(p));
      } else
        return 0;
    }, l = (d = "update") => {
      ye(() => {
        t.default && e.isAutoWidth && (d === "update" ? s.value = i() : d === "remove" && (n == null || n.deregisterLabelWidth(s.value)));
      });
    }, u = () => l("update");
    return Ue(() => {
      u();
    }), wt(() => {
      l("remove");
    }), vc(() => u()), J(s, (d, p) => {
      e.updateAll && (n == null || n.registerLabelWidth(d, p));
    }), la(A(() => {
      var d, p;
      return (p = (d = o.value) == null ? void 0 : d.firstElementChild) != null ? p : null;
    }), u), () => {
      var d, p;
      if (!t)
        return null;
      const {
        isAutoWidth: g
      } = e;
      if (g) {
        const b = n == null ? void 0 : n.autoLabelWidth, m = r == null ? void 0 : r.hasLabel, c = {};
        if (m && b && b !== "auto") {
          const h = Math.max(0, Number.parseInt(b, 10) - s.value), f = n.labelPosition === "left" ? "marginRight" : "marginLeft";
          h && (c[f] = `${h}px`);
        }
        return xe("div", {
          ref: o,
          class: [a.be("item", "label-wrap")],
          style: c
        }, [(d = t.default) == null ? void 0 : d.call(t)]);
      } else
        return xe(At, {
          ref: o
        }, [(p = t.default) == null ? void 0 : p.call(t)]);
    };
  }
});
const ZR = ["role", "aria-labelledby"], QR = Z({
  name: "ElFormItem"
}), eF = /* @__PURE__ */ Z({
  ...QR,
  props: XR,
  setup(e, { expose: t }) {
    const n = e, r = ta(), a = he(Tr, void 0), o = he(Vn, void 0), s = Sn(void 0, { formItem: !1 }), i = Ce("form-item"), l = bo().value, u = R([]), d = R(""), p = xw(d, 100), g = R(""), b = R();
    let m, c = !1;
    const h = A(() => {
      if ((a == null ? void 0 : a.labelPosition) === "top")
        return {};
      const W = Yr(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
      return W ? { width: W } : {};
    }), f = A(() => {
      if ((a == null ? void 0 : a.labelPosition) === "top" || a != null && a.inline)
        return {};
      if (!n.label && !n.labelWidth && F)
        return {};
      const W = Yr(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
      return !n.label && !r.label ? { marginLeft: W } : {};
    }), y = A(() => [
      i.b(),
      i.m(s.value),
      i.is("error", d.value === "error"),
      i.is("validating", d.value === "validating"),
      i.is("success", d.value === "success"),
      i.is("required", Q.value || n.required),
      i.is("no-asterisk", a == null ? void 0 : a.hideRequiredAsterisk),
      (a == null ? void 0 : a.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [i.m("feedback")]: a == null ? void 0 : a.statusIcon }
    ]), E = A(() => cn(n.inlineMessage) ? n.inlineMessage : (a == null ? void 0 : a.inlineMessage) || !1), $ = A(() => [
      i.e("error"),
      { [i.em("error", "inline")]: E.value }
    ]), T = A(() => n.prop ? ot(n.prop) ? n.prop : n.prop.join(".") : ""), S = A(() => !!(n.label || r.label)), w = A(() => n.for || u.value.length === 1 ? u.value[0] : void 0), N = A(() => !w.value && S.value), F = !!o, x = A(() => {
      const W = a == null ? void 0 : a.model;
      if (!(!W || !n.prop))
        return Do(W, n.prop).value;
    }), H = A(() => {
      const { required: W } = n, G = [];
      n.rules && G.push(...es(n.rules));
      const le = a == null ? void 0 : a.rules;
      if (le && n.prop) {
        const ce = Do(le, n.prop).value;
        ce && G.push(...es(ce));
      }
      if (W !== void 0) {
        const ce = G.map((_e, Re) => [_e, Re]).filter(([_e]) => Object.keys(_e).includes("required"));
        if (ce.length > 0)
          for (const [_e, Re] of ce)
            _e.required !== W && (G[Re] = { ..._e, required: W });
        else
          G.push({ required: W });
      }
      return G;
    }), U = A(() => H.value.length > 0), D = (W) => H.value.filter((le) => !le.trigger || !W ? !0 : Array.isArray(le.trigger) ? le.trigger.includes(W) : le.trigger === W).map(({ trigger: le, ...ce }) => ce), Q = A(() => H.value.some((W) => W.required)), ue = A(() => {
      var W;
      return p.value === "error" && n.showMessage && ((W = a == null ? void 0 : a.showMessage) != null ? W : !0);
    }), K = A(() => `${n.label || ""}${(a == null ? void 0 : a.labelSuffix) || ""}`), j = (W) => {
      d.value = W;
    }, ie = (W) => {
      var G, le;
      const { errors: ce, fields: _e } = W;
      (!ce || !_e) && console.error(W), j("error"), g.value = ce ? (le = (G = ce == null ? void 0 : ce[0]) == null ? void 0 : G.message) != null ? le : `${n.prop} is required` : "", a == null || a.emit("validate", n.prop, !1, g.value);
    }, me = () => {
      j("success"), a == null || a.emit("validate", n.prop, !0, "");
    }, De = async (W) => {
      const G = T.value;
      return new pa({
        [G]: W
      }).validate({ [G]: x.value }, { firstFields: !0 }).then(() => (me(), !0)).catch((ce) => (ie(ce), Promise.reject(ce)));
    }, ze = async (W, G) => {
      if (c || !n.prop)
        return !1;
      const le = _t(G);
      if (!U.value)
        return G == null || G(!1), !1;
      const ce = D(W);
      return ce.length === 0 ? (G == null || G(!0), !0) : (j("validating"), De(ce).then(() => (G == null || G(!0), !0)).catch((_e) => {
        const { fields: Re } = _e;
        return G == null || G(!1, Re), le ? !1 : Promise.reject(Re);
      }));
    }, je = () => {
      j(""), g.value = "", c = !1;
    }, Ke = async () => {
      const W = a == null ? void 0 : a.model;
      if (!W || !n.prop)
        return;
      const G = Do(W, n.prop);
      c = !0, G.value = Zl(m), await ye(), je(), c = !1;
    }, Ve = (W) => {
      u.value.includes(W) || u.value.push(W);
    }, Te = (W) => {
      u.value = u.value.filter((G) => G !== W);
    };
    J(() => n.error, (W) => {
      g.value = W || "", j(W ? "error" : "");
    }, { immediate: !0 }), J(() => n.validateStatus, (W) => j(W || ""));
    const Ge = kt({
      ...Hn(n),
      $el: b,
      size: s,
      validateState: d,
      labelId: l,
      inputIds: u,
      isGroup: N,
      hasLabel: S,
      addInputId: Ve,
      removeInputId: Te,
      resetField: Ke,
      clearValidate: je,
      validate: ze
    });
    return Ot(Vn, Ge), Ue(() => {
      n.prop && (a == null || a.addField(Ge), m = Zl(x.value));
    }), wt(() => {
      a == null || a.removeField(Ge);
    }), t({
      size: s,
      validateMessage: g,
      validateState: d,
      validate: ze,
      clearValidate: je,
      resetField: Ke
    }), (W, G) => {
      var le;
      return k(), q("div", {
        ref_key: "formItemRef",
        ref: b,
        class: V(v(y)),
        role: v(N) ? "group" : void 0,
        "aria-labelledby": v(N) ? v(l) : void 0
      }, [
        xe(v(JR), {
          "is-auto-width": v(h).width === "auto",
          "update-all": ((le = v(a)) == null ? void 0 : le.labelWidth) === "auto"
        }, {
          default: se(() => [
            v(S) ? (k(), ve(xt(v(w) ? "label" : "div"), {
              key: 0,
              id: v(l),
              for: v(w),
              class: V(v(i).e("label")),
              style: Me(v(h))
            }, {
              default: se(() => [
                ge(W.$slots, "label", { label: v(K) }, () => [
                  na(Ye(v(K)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        te("div", {
          class: V(v(i).e("content")),
          style: Me(v(f))
        }, [
          ge(W.$slots, "default"),
          xe(Op, {
            name: `${v(i).namespace.value}-zoom-in-top`
          }, {
            default: se(() => [
              v(ue) ? ge(W.$slots, "error", {
                key: 0,
                error: g.value
              }, () => [
                te("div", {
                  class: V(v($))
                }, Ye(g.value), 3)
              ]) : re("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, ZR);
    };
  }
});
var Od = /* @__PURE__ */ Ae(eF, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const tF = Qt(hR, {
  FormItem: Od
}), nF = Xn(Od);
let Ft;
const rF = `
  height:0 !important;
  visibility:hidden !important;
  ${Gw() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, aF = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function oF(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: aF.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: r, borderSize: a, boxSizing: n };
}
function Ou(e, t = 1, n) {
  var r;
  Ft || (Ft = document.createElement("textarea"), document.body.appendChild(Ft));
  const { paddingSize: a, borderSize: o, boxSizing: s, contextStyle: i } = oF(e);
  Ft.setAttribute("style", `${i};${rF}`), Ft.value = e.value || e.placeholder || "";
  let l = Ft.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + o : s === "content-box" && (l = l - a), Ft.value = "";
  const d = Ft.scrollHeight - a;
  if (ut(t)) {
    let p = d * t;
    s === "border-box" && (p = p + a + o), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (ut(n)) {
    let p = d * n;
    s === "border-box" && (p = p + a + o), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = Ft.parentNode) == null || r.removeChild(Ft), Ft = void 0, u;
}
const sF = ke({
  id: {
    type: String,
    default: void 0
  },
  size: da,
  disabled: Boolean,
  modelValue: {
    type: be([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: be([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Wa
  },
  prefixIcon: {
    type: Wa
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: be([Object, Array, String]),
    default: () => CN({})
  }
}), iF = {
  [Ze]: (e) => ot(e),
  input: (e) => ot(e),
  change: (e) => ot(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, lF = ["role"], uF = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], cF = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], fF = Z({
  name: "ElInput",
  inheritAttrs: !1
}), dF = /* @__PURE__ */ Z({
  ...fF,
  props: sF,
  emits: iF,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = mc(), o = ta(), s = A(() => {
      const C = {};
      return r.containerRole === "combobox" && (C["aria-haspopup"] = a["aria-haspopup"], C["aria-owns"] = a["aria-owns"], C["aria-expanded"] = a["aria-expanded"]), C;
    }), i = A(() => [
      r.type === "textarea" ? h.b() : c.b(),
      c.m(b.value),
      c.is("disabled", m.value),
      c.is("exceed", ze.value),
      {
        [c.b("group")]: o.prepend || o.append,
        [c.bm("group", "append")]: o.append,
        [c.bm("group", "prepend")]: o.prepend,
        [c.m("prefix")]: o.prefix || r.prefixIcon,
        [c.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [c.bm("suffix", "password-clear")]: j.value && ie.value
      },
      a.class
    ]), l = A(() => [
      c.e("wrapper"),
      c.is("focus", E.value)
    ]), u = LN({
      excludeKeys: A(() => Object.keys(s.value))
    }), { form: d, formItem: p } = Or(), { inputId: g } = yo(r, {
      formItemContext: p
    }), b = Sn(), m = vi(), c = Ce("input"), h = Ce("textarea"), f = xn(), y = xn(), E = R(!1), $ = R(!1), T = R(!1), S = R(!1), w = R(), N = xn(r.inputStyle), F = A(() => f.value || y.value), x = A(() => {
      var C;
      return (C = d == null ? void 0 : d.statusIcon) != null ? C : !1;
    }), H = A(() => (p == null ? void 0 : p.validateState) || ""), U = A(() => H.value && TN[H.value]), D = A(() => S.value ? rw : zS), Q = A(() => [
      a.style,
      r.inputStyle
    ]), ue = A(() => [
      r.inputStyle,
      N.value,
      { resize: r.resize }
    ]), K = A(() => vo(r.modelValue) ? "" : String(r.modelValue)), j = A(() => r.clearable && !m.value && !r.readonly && !!K.value && (E.value || $.value)), ie = A(() => r.showPassword && !m.value && !r.readonly && !!K.value && (!!K.value || E.value)), me = A(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !m.value && !r.readonly && !r.showPassword), De = A(() => K.value.length), ze = A(() => !!me.value && De.value > Number(u.value.maxlength)), je = A(() => !!o.suffix || !!r.suffixIcon || j.value || r.showPassword || me.value || !!H.value && x.value), [Ke, Ve] = rR(f);
    la(y, (C) => {
      if (W(), !me.value || r.resize !== "both")
        return;
      const ee = C[0], { width: pe } = ee.contentRect;
      w.value = {
        right: `calc(100% - ${pe + 15 + 6}px)`
      };
    });
    const Te = () => {
      const { type: C, autosize: ee } = r;
      if (!(!at || C !== "textarea" || !y.value))
        if (ee) {
          const pe = un(ee) ? ee.minRows : void 0, st = un(ee) ? ee.maxRows : void 0, it = Ou(y.value, pe, st);
          N.value = {
            overflowY: "hidden",
            ...it
          }, ye(() => {
            y.value.offsetHeight, N.value = it;
          });
        } else
          N.value = {
            minHeight: Ou(y.value).minHeight
          };
    }, W = ((C) => {
      let ee = !1;
      return () => {
        var pe;
        if (ee || !r.autosize)
          return;
        ((pe = y.value) == null ? void 0 : pe.offsetParent) === null || (C(), ee = !0);
      };
    })(Te), G = () => {
      const C = F.value;
      !C || C.value === K.value || (C.value = K.value);
    }, le = async (C) => {
      Ke();
      let { value: ee } = C.target;
      if (r.formatter && (ee = r.parser ? r.parser(ee) : ee, ee = r.formatter(ee)), !T.value) {
        if (ee === K.value) {
          G();
          return;
        }
        n(Ze, ee), n("input", ee), await ye(), G(), Ve();
      }
    }, ce = (C) => {
      n("change", C.target.value);
    }, _e = (C) => {
      n("compositionstart", C), T.value = !0;
    }, Re = (C) => {
      var ee;
      n("compositionupdate", C);
      const pe = (ee = C.target) == null ? void 0 : ee.value, st = pe[pe.length - 1] || "";
      T.value = !od(st);
    }, O = (C) => {
      n("compositionend", C), T.value && (T.value = !1, le(C));
    }, _ = () => {
      S.value = !S.value, I();
    }, I = async () => {
      var C;
      await ye(), (C = F.value) == null || C.focus();
    }, B = () => {
      var C;
      return (C = F.value) == null ? void 0 : C.blur();
    }, X = (C) => {
      E.value = !0, n("focus", C);
    }, oe = (C) => {
      var ee;
      E.value = !1, n("blur", C), r.validateEvent && ((ee = p == null ? void 0 : p.validate) == null || ee.call(p, "blur").catch((pe) => We(pe)));
    }, He = (C) => {
      $.value = !1, n("mouseleave", C);
    }, Fe = (C) => {
      $.value = !0, n("mouseenter", C);
    }, mt = (C) => {
      n("keydown", C);
    }, Ee = () => {
      var C;
      (C = F.value) == null || C.select();
    }, P = () => {
      n(Ze, ""), n("change", ""), n("clear"), n("input", "");
    };
    return J(() => r.modelValue, () => {
      var C;
      ye(() => Te()), r.validateEvent && ((C = p == null ? void 0 : p.validate) == null || C.call(p, "change").catch((ee) => We(ee)));
    }), J(K, () => G()), J(() => r.type, async () => {
      await ye(), G(), Te();
    }), Ue(() => {
      !r.formatter && r.parser && We("ElInput", "If you set the parser, you also need to set the formatter."), G(), ye(Te);
    }), t({
      input: f,
      textarea: y,
      ref: F,
      textareaStyle: ue,
      autosize: Mt(r, "autosize"),
      focus: I,
      blur: B,
      select: Ee,
      clear: P,
      resizeTextarea: Te
    }), (C, ee) => Qe((k(), q("div", Kt(v(s), {
      class: v(i),
      style: v(Q),
      role: C.containerRole,
      onMouseenter: Fe,
      onMouseleave: He
    }), [
      re(" input "),
      C.type !== "textarea" ? (k(), q(At, { key: 0 }, [
        re(" prepend slot "),
        C.$slots.prepend ? (k(), q("div", {
          key: 0,
          class: V(v(c).be("group", "prepend"))
        }, [
          ge(C.$slots, "prepend")
        ], 2)) : re("v-if", !0),
        te("div", {
          class: V(v(l))
        }, [
          re(" prefix slot "),
          C.$slots.prefix || C.prefixIcon ? (k(), q("span", {
            key: 0,
            class: V(v(c).e("prefix"))
          }, [
            te("span", {
              class: V(v(c).e("prefix-inner")),
              onClick: I
            }, [
              ge(C.$slots, "prefix"),
              C.prefixIcon ? (k(), ve(v(yn), {
                key: 0,
                class: V(v(c).e("icon"))
              }, {
                default: se(() => [
                  (k(), ve(xt(C.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0)
            ], 2)
          ], 2)) : re("v-if", !0),
          te("input", Kt({
            id: v(g),
            ref_key: "input",
            ref: f,
            class: v(c).e("inner")
          }, v(u), {
            type: C.showPassword ? S.value ? "text" : "password" : C.type,
            disabled: v(m),
            formatter: C.formatter,
            parser: C.parser,
            readonly: C.readonly,
            autocomplete: C.autocomplete,
            tabindex: C.tabindex,
            "aria-label": C.label,
            placeholder: C.placeholder,
            style: C.inputStyle,
            form: r.form,
            onCompositionstart: _e,
            onCompositionupdate: Re,
            onCompositionend: O,
            onInput: le,
            onFocus: X,
            onBlur: oe,
            onChange: ce,
            onKeydown: mt
          }), null, 16, uF),
          re(" suffix slot "),
          v(je) ? (k(), q("span", {
            key: 1,
            class: V(v(c).e("suffix"))
          }, [
            te("span", {
              class: V(v(c).e("suffix-inner")),
              onClick: I
            }, [
              !v(j) || !v(ie) || !v(me) ? (k(), q(At, { key: 0 }, [
                ge(C.$slots, "suffix"),
                C.suffixIcon ? (k(), ve(v(yn), {
                  key: 0,
                  class: V(v(c).e("icon"))
                }, {
                  default: se(() => [
                    (k(), ve(xt(C.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : re("v-if", !0)
              ], 64)) : re("v-if", !0),
              v(j) ? (k(), ve(v(yn), {
                key: 1,
                class: V([v(c).e("icon"), v(c).e("clear")]),
                onMousedown: bt(v(Wr), ["prevent"]),
                onClick: P
              }, {
                default: se(() => [
                  xe(v(Vs))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : re("v-if", !0),
              v(ie) ? (k(), ve(v(yn), {
                key: 2,
                class: V([v(c).e("icon"), v(c).e("password")]),
                onClick: _
              }, {
                default: se(() => [
                  (k(), ve(xt(v(D))))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0),
              v(me) ? (k(), q("span", {
                key: 3,
                class: V(v(c).e("count"))
              }, [
                te("span", {
                  class: V(v(c).e("count-inner"))
                }, Ye(v(De)) + " / " + Ye(v(u).maxlength), 3)
              ], 2)) : re("v-if", !0),
              v(H) && v(U) && v(x) ? (k(), ve(v(yn), {
                key: 4,
                class: V([
                  v(c).e("icon"),
                  v(c).e("validateIcon"),
                  v(c).is("loading", v(H) === "validating")
                ])
              }, {
                default: se(() => [
                  (k(), ve(xt(v(U))))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0)
            ], 2)
          ], 2)) : re("v-if", !0)
        ], 2),
        re(" append slot "),
        C.$slots.append ? (k(), q("div", {
          key: 1,
          class: V(v(c).be("group", "append"))
        }, [
          ge(C.$slots, "append")
        ], 2)) : re("v-if", !0)
      ], 64)) : (k(), q(At, { key: 1 }, [
        re(" textarea "),
        te("textarea", Kt({
          id: v(g),
          ref_key: "textarea",
          ref: y,
          class: v(h).e("inner")
        }, v(u), {
          tabindex: C.tabindex,
          disabled: v(m),
          readonly: C.readonly,
          autocomplete: C.autocomplete,
          style: v(ue),
          "aria-label": C.label,
          placeholder: C.placeholder,
          form: r.form,
          onCompositionstart: _e,
          onCompositionupdate: Re,
          onCompositionend: O,
          onInput: le,
          onFocus: X,
          onBlur: oe,
          onChange: ce,
          onKeydown: mt
        }), null, 16, cF),
        v(me) ? (k(), q("span", {
          key: 0,
          style: Me(w.value),
          class: V(v(c).e("count"))
        }, Ye(v(De)) + " / " + Ye(v(u).maxlength), 7)) : re("v-if", !0)
      ], 64))
    ], 16, lF)), [
      [Tn, C.type !== "hidden"]
    ]);
  }
});
var pF = /* @__PURE__ */ Ae(dF, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Sd = Qt(pF), rr = 4, vF = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, mF = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), wd = Symbol("scrollbarContextKey"), gF = ke({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), hF = "Thumb", bF = /* @__PURE__ */ Z({
  __name: "thumb",
  props: gF,
  setup(e) {
    const t = e, n = he(wd), r = Ce("scrollbar");
    n || rd(hF, "can not inject scrollbar context");
    const a = R(), o = R(), s = R({}), i = R(!1);
    let l = !1, u = !1, d = at ? document.onselectstart : null;
    const p = A(() => vF[t.vertical ? "vertical" : "horizontal"]), g = A(() => mF({
      size: t.size,
      move: t.move,
      bar: p.value
    })), b = A(() => a.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / o.value[p.value.offset]), m = (S) => {
      var w;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      (w = window.getSelection()) == null || w.removeAllRanges(), h(S);
      const N = S.currentTarget;
      N && (s.value[p.value.axis] = N[p.value.offset] - (S[p.value.client] - N.getBoundingClientRect()[p.value.direction]));
    }, c = (S) => {
      if (!o.value || !a.value || !n.wrapElement)
        return;
      const w = Math.abs(S.target.getBoundingClientRect()[p.value.direction] - S[p.value.client]), N = o.value[p.value.offset] / 2, F = (w - N) * 100 * b.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = F * n.wrapElement[p.value.scrollSize] / 100;
    }, h = (S) => {
      S.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", y), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (S) => {
      if (!a.value || !o.value || l === !1)
        return;
      const w = s.value[p.value.axis];
      if (!w)
        return;
      const N = (a.value.getBoundingClientRect()[p.value.direction] - S[p.value.client]) * -1, F = o.value[p.value.offset] - w, x = (N - F) * 100 * b.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = x * n.wrapElement[p.value.scrollSize] / 100;
    }, y = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", y), T(), u && (i.value = !1);
    }, E = () => {
      u = !1, i.value = !!t.size;
    }, $ = () => {
      u = !0, i.value = l;
    };
    wt(() => {
      T(), document.removeEventListener("mouseup", y);
    });
    const T = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return or(Mt(n, "scrollbarElement"), "mousemove", E), or(Mt(n, "scrollbarElement"), "mouseleave", $), (S, w) => (k(), ve(Br, {
      name: v(r).b("fade"),
      persisted: ""
    }, {
      default: se(() => [
        Qe(te("div", {
          ref_key: "instance",
          ref: a,
          class: V([v(r).e("bar"), v(r).is(v(p).key)]),
          onMousedown: c
        }, [
          te("div", {
            ref_key: "thumb",
            ref: o,
            class: V(v(r).e("thumb")),
            style: Me(v(g)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [Tn, S.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Su = /* @__PURE__ */ Ae(bF, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const yF = ke({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), _F = /* @__PURE__ */ Z({
  __name: "bar",
  props: yF,
  setup(e, { expose: t }) {
    const n = e, r = R(0), a = R(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const i = s.offsetHeight - rr, l = s.offsetWidth - rr;
          a.value = s.scrollTop * 100 / i * n.ratioY, r.value = s.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (s, i) => (k(), q(At, null, [
      xe(Su, {
        move: r.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      xe(Su, {
        move: a.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var $F = /* @__PURE__ */ Ae(_F, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const EF = ke({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: be([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), TF = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ut)
}, ps = "ElScrollbar", OF = Z({
  name: ps
}), SF = /* @__PURE__ */ Z({
  ...OF,
  props: EF,
  emits: TF,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = Ce("scrollbar");
    let o, s;
    const i = R(), l = R(), u = R(), d = R("0"), p = R("0"), g = R(), b = R(1), m = R(1), c = A(() => {
      const w = {};
      return r.height && (w.height = Yr(r.height)), r.maxHeight && (w.maxHeight = Yr(r.maxHeight)), [r.wrapStyle, w];
    }), h = A(() => [
      r.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !r.native }
    ]), f = A(() => [a.e("view"), r.viewClass]), y = () => {
      var w;
      l.value && ((w = g.value) == null || w.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function E(w, N) {
      un(w) ? l.value.scrollTo(w) : ut(w) && ut(N) && l.value.scrollTo(w, N);
    }
    const $ = (w) => {
      if (!ut(w)) {
        We(ps, "value must be a number");
        return;
      }
      l.value.scrollTop = w;
    }, T = (w) => {
      if (!ut(w)) {
        We(ps, "value must be a number");
        return;
      }
      l.value.scrollLeft = w;
    }, S = () => {
      if (!l.value)
        return;
      const w = l.value.offsetHeight - rr, N = l.value.offsetWidth - rr, F = w ** 2 / l.value.scrollHeight, x = N ** 2 / l.value.scrollWidth, H = Math.max(F, r.minSize), U = Math.max(x, r.minSize);
      b.value = F / (w - F) / (H / (w - H)), m.value = x / (N - x) / (U / (N - U)), p.value = H + rr < w ? `${H}px` : "", d.value = U + rr < N ? `${U}px` : "";
    };
    return J(() => r.noresize, (w) => {
      w ? (o == null || o(), s == null || s()) : ({ stop: o } = la(u, S), s = or("resize", S));
    }, { immediate: !0 }), J(() => [r.maxHeight, r.height], () => {
      r.native || ye(() => {
        var w;
        S(), l.value && ((w = g.value) == null || w.handleScroll(l.value));
      });
    }), Ot(wd, kt({
      scrollbarElement: i,
      wrapElement: l
    })), Ue(() => {
      r.native || ye(() => {
        S();
      });
    }), vc(() => S()), t({
      wrapRef: l,
      update: S,
      scrollTo: E,
      setScrollTop: $,
      setScrollLeft: T,
      handleScroll: y
    }), (w, N) => (k(), q("div", {
      ref_key: "scrollbarRef",
      ref: i,
      class: V(v(a).b())
    }, [
      te("div", {
        ref_key: "wrapRef",
        ref: l,
        class: V(v(h)),
        style: Me(v(c)),
        onScroll: y
      }, [
        (k(), ve(xt(w.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: V(v(f)),
          style: Me(w.viewStyle)
        }, {
          default: se(() => [
            ge(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      w.native ? re("v-if", !0) : (k(), ve($F, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        height: p.value,
        width: d.value,
        always: w.always,
        "ratio-x": m.value,
        "ratio-y": b.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var wF = /* @__PURE__ */ Ae(SF, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const CF = Qt(wF), mi = Symbol("popper"), Cd = Symbol("popperContent"), AF = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Ad = ke({
  role: {
    type: String,
    values: AF,
    default: "tooltip"
  }
}), IF = Z({
  name: "ElPopper",
  inheritAttrs: !1
}), LF = /* @__PURE__ */ Z({
  ...IF,
  props: Ad,
  setup(e, { expose: t }) {
    const n = e, r = R(), a = R(), o = R(), s = R(), i = A(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: a,
      contentRef: o,
      referenceRef: s,
      role: i
    };
    return t(l), Ot(mi, l), (u, d) => ge(u.$slots, "default");
  }
});
var NF = /* @__PURE__ */ Ae(LF, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Id = ke({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), PF = Z({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), RF = /* @__PURE__ */ Z({
  ...PF,
  props: Id,
  setup(e, { expose: t }) {
    const n = e, r = Ce("popper"), { arrowOffset: a, arrowRef: o, arrowStyle: s } = he(Cd, void 0);
    return J(() => n.arrowOffset, (i) => {
      a.value = i;
    }), wt(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (i, l) => (k(), q("span", {
      ref_key: "arrowRef",
      ref: o,
      class: V(v(r).e("arrow")),
      style: Me(v(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var FF = /* @__PURE__ */ Ae(RF, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Vo = "ElOnlyChild", xF = Z({
  name: Vo,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const a = he($d), o = QP((r = a == null ? void 0 : a.setForwardRef) != null ? r : Wr);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return We(Vo, "requires exact only one valid child."), null;
      const l = Ld(i);
      return l ? Qe(Sp(l, n), [[o]]) : (We(Vo, "no valid child node found"), null);
    };
  }
});
function Ld(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (un(n))
      switch (n.type) {
        case wp:
          continue;
        case gc:
        case "svg":
          return wu(n);
        case At:
          return Ld(n.children);
        default:
          return n;
      }
    return wu(n);
  }
  return null;
}
function wu(e) {
  const t = Ce("only-child");
  return xe("span", {
    class: t.e("content")
  }, [e]);
}
const Nd = ke({
  virtualRef: {
    type: be(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: be(Function)
  },
  onMouseleave: {
    type: be(Function)
  },
  onClick: {
    type: be(Function)
  },
  onKeydown: {
    type: be(Function)
  },
  onFocus: {
    type: be(Function)
  },
  onBlur: {
    type: be(Function)
  },
  onContextmenu: {
    type: be(Function)
  },
  id: String,
  open: Boolean
}), MF = Z({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), kF = /* @__PURE__ */ Z({
  ...MF,
  props: Nd,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: a } = he(mi, void 0);
    ZP(a);
    const o = A(() => i.value ? n.id : void 0), s = A(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = A(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = A(() => i.value ? `${n.open}` : void 0);
    let u;
    return Ue(() => {
      J(() => n.virtualRef, (d) => {
        d && (a.value = _n(d));
      }, {
        immediate: !0
      }), J(a, (d, p) => {
        u == null || u(), u = void 0, qr(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((g) => {
          var b;
          const m = n[g];
          m && (d.addEventListener(g.slice(2).toLowerCase(), m), (b = p == null ? void 0 : p.removeEventListener) == null || b.call(p, g.slice(2).toLowerCase(), m));
        }), u = J([o, s, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((b, m) => {
            vo(g[m]) ? d.removeAttribute(b) : d.setAttribute(b, g[m]);
          });
        }, { immediate: !0 })), qr(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => p.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), wt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: a
    }), (d, p) => d.virtualTriggering ? re("v-if", !0) : (k(), ve(v(xF), Kt({ key: 0 }, d.$attrs, {
      "aria-controls": v(o),
      "aria-describedby": v(s),
      "aria-expanded": v(l),
      "aria-haspopup": v(i)
    }), {
      default: se(() => [
        ge(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var DF = /* @__PURE__ */ Ae(kF, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Bo = "focus-trap.focus-after-trapped", Uo = "focus-trap.focus-after-released", jF = "focus-trap.focusout-prevented", Cu = {
  cancelable: !0,
  bubbles: !1
}, VF = {
  cancelable: !0,
  bubbles: !1
}, Au = "focusAfterTrapped", Iu = "focusAfterReleased", BF = Symbol("elFocusTrap"), gi = R(), _o = R(0), hi = R(0);
let $a = 0;
const Pd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Lu = (e, t) => {
  for (const n of e)
    if (!UF(n, t))
      return n;
}, UF = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, HF = (e) => {
  const t = Pd(e), n = Lu(t, e), r = Lu(t.reverse(), e);
  return [n, r];
}, WF = (e) => e instanceof HTMLInputElement && "select" in e, hn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), hi.value = window.performance.now(), e !== n && WF(e) && t && e.select();
  }
};
function Nu(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const zF = () => {
  let e = [];
  return {
    push: (r) => {
      const a = e[0];
      a && r !== a && a.pause(), e = Nu(e, r), e.unshift(r);
    },
    remove: (r) => {
      var a, o;
      e = Nu(e, r), (o = (a = e[0]) == null ? void 0 : a.resume) == null || o.call(a);
    }
  };
}, KF = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (hn(r, t), document.activeElement !== n)
      return;
}, Pu = zF(), GF = () => _o.value > hi.value, Ea = () => {
  gi.value = "pointer", _o.value = window.performance.now();
}, Ru = () => {
  gi.value = "keyboard", _o.value = window.performance.now();
}, qF = () => (Ue(() => {
  $a === 0 && (document.addEventListener("mousedown", Ea), document.addEventListener("touchstart", Ea), document.addEventListener("keydown", Ru)), $a++;
}), wt(() => {
  $a--, $a <= 0 && (document.removeEventListener("mousedown", Ea), document.removeEventListener("touchstart", Ea), document.removeEventListener("keydown", Ru));
}), {
  focusReason: gi,
  lastUserFocusTimestamp: _o,
  lastAutomatedFocusTimestamp: hi
}), Ta = (e) => new CustomEvent(jF, {
  ...VF,
  detail: e
}), YF = Z({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Au,
    Iu,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = R();
    let r, a;
    const { focusReason: o } = qF();
    GP((m) => {
      e.trapped && !s.paused && t("release-requested", m);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (m) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: c, altKey: h, ctrlKey: f, metaKey: y, currentTarget: E, shiftKey: $ } = m, { loop: T } = e, S = c === lr.tab && !h && !f && !y, w = document.activeElement;
      if (S && w) {
        const N = E, [F, x] = HF(N);
        if (F && x) {
          if (!$ && w === x) {
            const U = Ta({
              focusReason: o.value
            });
            t("focusout-prevented", U), U.defaultPrevented || (m.preventDefault(), T && hn(F, !0));
          } else if ($ && [F, N].includes(w)) {
            const U = Ta({
              focusReason: o.value
            });
            t("focusout-prevented", U), U.defaultPrevented || (m.preventDefault(), T && hn(x, !0));
          }
        } else if (w === N) {
          const U = Ta({
            focusReason: o.value
          });
          t("focusout-prevented", U), U.defaultPrevented || m.preventDefault();
        }
      }
    };
    Ot(BF, {
      focusTrapRef: n,
      onKeydown: i
    }), J(() => e.focusTrapEl, (m) => {
      m && (n.value = m);
    }, { immediate: !0 }), J([n], ([m], [c]) => {
      m && (m.addEventListener("keydown", i), m.addEventListener("focusin", d), m.addEventListener("focusout", p)), c && (c.removeEventListener("keydown", i), c.removeEventListener("focusin", d), c.removeEventListener("focusout", p));
    });
    const l = (m) => {
      t(Au, m);
    }, u = (m) => t(Iu, m), d = (m) => {
      const c = v(n);
      if (!c)
        return;
      const h = m.target, f = m.relatedTarget, y = h && c.contains(h);
      e.trapped || f && c.contains(f) || (r = f), y && t("focusin", m), !s.paused && e.trapped && (y ? a = h : hn(a, !0));
    }, p = (m) => {
      const c = v(n);
      if (!(s.paused || !c))
        if (e.trapped) {
          const h = m.relatedTarget;
          !vo(h) && !c.contains(h) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = Ta({
                focusReason: o.value
              });
              t("focusout-prevented", f), f.defaultPrevented || hn(a, !0);
            }
          }, 0);
        } else {
          const h = m.target;
          h && c.contains(h) || t("focusout", m);
        }
    };
    async function g() {
      await ye();
      const m = v(n);
      if (m) {
        Pu.push(s);
        const c = m.contains(document.activeElement) ? r : document.activeElement;
        if (r = c, !m.contains(c)) {
          const f = new Event(Bo, Cu);
          m.addEventListener(Bo, l), m.dispatchEvent(f), f.defaultPrevented || ye(() => {
            let y = e.focusStartEl;
            ot(y) || (hn(y), document.activeElement !== y && (y = "first")), y === "first" && KF(Pd(m), !0), (document.activeElement === c || y === "container") && hn(m);
          });
        }
      }
    }
    function b() {
      const m = v(n);
      if (m) {
        m.removeEventListener(Bo, l);
        const c = new CustomEvent(Uo, {
          ...Cu,
          detail: {
            focusReason: o.value
          }
        });
        m.addEventListener(Uo, u), m.dispatchEvent(c), !c.defaultPrevented && (o.value == "keyboard" || !GF() || m.contains(document.activeElement)) && hn(r ?? document.body), m.removeEventListener(Uo, l), Pu.remove(s);
      }
    }
    return Ue(() => {
      e.trapped && g(), J(() => e.trapped, (m) => {
        m ? g() : b();
      });
    }), wt(() => {
      e.trapped && b();
    }), {
      onKeydown: i
    };
  }
});
function XF(e, t, n, r, a, o) {
  return ge(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var JF = /* @__PURE__ */ Ae(YF, [["render", XF], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const ZF = ["fixed", "absolute"], QF = ke({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: be(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: go,
    default: "bottom"
  },
  popperOptions: {
    type: be(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ZF,
    default: "absolute"
  }
}), Rd = ke({
  ...QF,
  id: String,
  style: {
    type: be([String, Array, Object])
  },
  className: {
    type: be([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: be([String, Array, Object])
  },
  popperStyle: {
    type: be([String, Array, Object])
  },
  referenceEl: {
    type: be(Object)
  },
  triggerTargetEl: {
    type: be(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), ex = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, tx = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: a } = e, o = {
    placement: n,
    strategy: r,
    ...a,
    modifiers: [...rx(e), ...t]
  };
  return ax(o, a == null ? void 0 : a.modifiers), o;
}, nx = (e) => {
  if (at)
    return _n(e);
};
function rx(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function ax(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ox = 0, sx = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: a } = he(mi, void 0), o = R(), s = R(), i = A(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = A(() => {
    var f;
    const y = v(o), E = (f = v(s)) != null ? f : ox;
    return {
      name: "arrow",
      enabled: !dN(y),
      options: {
        element: y,
        padding: E
      }
    };
  }), u = A(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...tx(e, [
      v(l),
      v(i)
    ])
  })), d = A(() => nx(e.referenceEl) || v(r)), { attributes: p, state: g, styles: b, update: m, forceUpdate: c, instanceRef: h } = WP(d, n, u);
  return J(h, (f) => t.value = f), Ue(() => {
    J(() => {
      var f;
      return (f = v(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: p,
    arrowRef: o,
    contentRef: n,
    instanceRef: h,
    state: g,
    styles: b,
    role: a,
    forceUpdate: c,
    update: m
  };
}, ix = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: a } = nR(), o = Ce("popper"), s = A(() => v(t).popper), i = R(e.zIndex || a()), l = A(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), u = A(() => [
    { zIndex: v(i) },
    e.popperStyle || {},
    v(n).popper
  ]), d = A(() => r.value === "dialog" ? "false" : void 0), p = A(() => v(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = e.zIndex || a();
    }
  };
}, lx = (e, t) => {
  const n = R(!1), r = R();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, ux = Z({
  name: "ElPopperContent"
}), cx = /* @__PURE__ */ Z({
  ...ux,
  props: Rd,
  emits: ex,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: a,
      trapped: o,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = lx(r, n), { attributes: p, arrowRef: g, contentRef: b, styles: m, instanceRef: c, role: h, update: f } = sx(r), {
      ariaModal: y,
      arrowStyle: E,
      contentAttrs: $,
      contentClass: T,
      contentStyle: S,
      updateZIndex: w
    } = ix(r, {
      styles: m,
      attributes: p,
      role: h
    }), N = he(Vn, void 0), F = R();
    Ot(Cd, {
      arrowStyle: E,
      arrowRef: g,
      arrowOffset: F
    }), N && (N.addInputId || N.removeInputId) && Ot(Vn, {
      ...N,
      addInputId: Wr,
      removeInputId: Wr
    });
    let x;
    const H = (D = !0) => {
      f(), D && w();
    }, U = () => {
      H(!1), r.visible && r.focusOnShow ? o.value = !0 : r.visible === !1 && (o.value = !1);
    };
    return Ue(() => {
      J(() => r.triggerTargetEl, (D, Q) => {
        x == null || x(), x = void 0;
        const ue = v(D || b.value), K = v(Q || b.value);
        qr(ue) && (x = J([h, () => r.ariaLabel, y, () => r.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ie, me) => {
            vo(j[me]) ? ue.removeAttribute(ie) : ue.setAttribute(ie, j[me]);
          });
        }, { immediate: !0 })), K !== ue && qr(K) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          K.removeAttribute(j);
        });
      }, { immediate: !0 }), J(() => r.visible, U, { immediate: !0 });
    }), wt(() => {
      x == null || x(), x = void 0;
    }), t({
      popperContentRef: b,
      popperInstanceRef: c,
      updatePopper: H,
      contentStyle: S
    }), (D, Q) => (k(), q("div", Kt({
      ref_key: "contentRef",
      ref: b
    }, v($), {
      style: v(S),
      class: v(T),
      tabindex: "-1",
      onMouseenter: Q[0] || (Q[0] = (ue) => D.$emit("mouseenter", ue)),
      onMouseleave: Q[1] || (Q[1] = (ue) => D.$emit("mouseleave", ue))
    }), [
      xe(v(JF), {
        trapped: v(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": v(b),
        "focus-start-el": v(a),
        onFocusAfterTrapped: v(i),
        onFocusAfterReleased: v(s),
        onFocusin: v(l),
        onFocusoutPrevented: v(u),
        onReleaseRequested: v(d)
      }, {
        default: se(() => [
          ge(D.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var fx = /* @__PURE__ */ Ae(cx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const dx = Qt(NF), bi = Symbol("elTooltip"), yi = ke({
  ...XP,
  ...Rd,
  appendTo: {
    type: be([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: be(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), Fd = ke({
  ...Nd,
  disabled: Boolean,
  trigger: {
    type: be([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: be(Array),
    default: () => [lr.enter, lr.space]
  }
}), {
  useModelToggleProps: px,
  useModelToggleEmits: vx,
  useModelToggle: mx
} = sd("visible"), gx = ke({
  ...Ad,
  ...px,
  ...yi,
  ...Fd,
  ...Id,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), hx = [
  ...vx,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], bx = (e, t) => Dn(e) ? e.includes(t) : e === t, Qn = (e, t, n) => (r) => {
  bx(v(e), t) && n(r);
}, yx = Z({
  name: "ElTooltipTrigger"
}), _x = /* @__PURE__ */ Z({
  ...yx,
  props: Fd,
  setup(e, { expose: t }) {
    const n = e, r = Ce("tooltip"), { controlled: a, id: o, open: s, onOpen: i, onClose: l, onToggle: u } = he(bi, void 0), d = R(null), p = () => {
      if (v(a) || n.disabled)
        return !0;
    }, g = Mt(n, "trigger"), b = rn(p, Qn(g, "hover", i)), m = rn(p, Qn(g, "hover", l)), c = rn(p, Qn(g, "click", ($) => {
      $.button === 0 && u($);
    })), h = rn(p, Qn(g, "focus", i)), f = rn(p, Qn(g, "focus", l)), y = rn(p, Qn(g, "contextmenu", ($) => {
      $.preventDefault(), u($);
    })), E = rn(p, ($) => {
      const { code: T } = $;
      n.triggerKeys.includes(T) && ($.preventDefault(), u($));
    });
    return t({
      triggerRef: d
    }), ($, T) => (k(), ve(v(DF), {
      id: v(o),
      "virtual-ref": $.virtualRef,
      open: v(s),
      "virtual-triggering": $.virtualTriggering,
      class: V(v(r).e("trigger")),
      onBlur: v(f),
      onClick: v(c),
      onContextmenu: v(y),
      onFocus: v(h),
      onMouseenter: v(b),
      onMouseleave: v(m),
      onKeydown: v(E)
    }, {
      default: se(() => [
        ge($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var $x = /* @__PURE__ */ Ae(_x, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const Ex = Z({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Tx = /* @__PURE__ */ Z({
  ...Ex,
  props: yi,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = _d(), a = Ce("tooltip"), o = R(null), s = R(!1), {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: p,
      onOpen: g,
      onShow: b,
      onHide: m,
      onBeforeShow: c,
      onBeforeHide: h
    } = he(bi, void 0), f = A(() => n.transition || `${a.namespace.value}-fade-in-linear`), y = A(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    wt(() => {
      s.value = !0;
    });
    const E = A(() => v(y) ? !0 : v(u)), $ = A(() => n.disabled ? !1 : v(u)), T = A(() => n.appendTo || r.value), S = A(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), w = A(() => !v(u)), N = () => {
      m();
    }, F = () => {
      if (v(i))
        return !0;
    }, x = rn(F, () => {
      n.enterable && v(d) === "hover" && g();
    }), H = rn(F, () => {
      v(d) === "hover" && p();
    }), U = () => {
      var j, ie;
      (ie = (j = o.value) == null ? void 0 : j.updatePopper) == null || ie.call(j), c == null || c();
    }, D = () => {
      h == null || h();
    }, Q = () => {
      b(), K = kw(A(() => {
        var j;
        return (j = o.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (v(i))
          return;
        v(d) !== "hover" && p();
      });
    }, ue = () => {
      n.virtualTriggering || p();
    };
    let K;
    return J(() => v(u), (j) => {
      j || K == null || K();
    }, {
      flush: "post"
    }), J(() => n.content, () => {
      var j, ie;
      (ie = (j = o.value) == null ? void 0 : j.updatePopper) == null || ie.call(j);
    }), t({
      contentRef: o
    }), (j, ie) => (k(), ve(Cp, {
      disabled: !j.teleported,
      to: v(T)
    }, [
      xe(Br, {
        name: v(f),
        onAfterLeave: N,
        onBeforeEnter: U,
        onAfterEnter: Q,
        onBeforeLeave: D
      }, {
        default: se(() => [
          v(E) ? Qe((k(), ve(v(fx), Kt({
            key: 0,
            id: v(l),
            ref_key: "contentRef",
            ref: o
          }, j.$attrs, {
            "aria-label": j.ariaLabel,
            "aria-hidden": v(w),
            "boundaries-padding": j.boundariesPadding,
            "fallback-placements": j.fallbackPlacements,
            "gpu-acceleration": j.gpuAcceleration,
            offset: j.offset,
            placement: j.placement,
            "popper-options": j.popperOptions,
            strategy: j.strategy,
            effect: j.effect,
            enterable: j.enterable,
            pure: j.pure,
            "popper-class": j.popperClass,
            "popper-style": [j.popperStyle, v(S)],
            "reference-el": j.referenceEl,
            "trigger-target-el": j.triggerTargetEl,
            visible: v($),
            "z-index": j.zIndex,
            onMouseenter: v(x),
            onMouseleave: v(H),
            onBlur: ue,
            onClose: v(p)
          }), {
            default: se(() => [
              s.value ? re("v-if", !0) : ge(j.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Tn, v($)]
          ]) : re("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Ox = /* @__PURE__ */ Ae(Tx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Sx = ["innerHTML"], wx = { key: 1 }, Cx = Z({
  name: "ElTooltip"
}), Ax = /* @__PURE__ */ Z({
  ...Cx,
  props: gx,
  emits: hx,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    YP();
    const a = bo(), o = R(), s = R(), i = () => {
      var f;
      const y = v(o);
      y && ((f = y.popperInstanceRef) == null || f.update());
    }, l = R(!1), u = R(), { show: d, hide: p, hasUpdateHandler: g } = mx({
      indicator: l,
      toggleReason: u
    }), { onOpen: b, onClose: m } = JP({
      showAfter: Mt(r, "showAfter"),
      hideAfter: Mt(r, "hideAfter"),
      autoClose: Mt(r, "autoClose"),
      open: d,
      close: p
    }), c = A(() => cn(r.visible) && !g.value);
    Ot(bi, {
      controlled: c,
      id: a,
      open: Ap(l),
      trigger: Mt(r, "trigger"),
      onOpen: (f) => {
        b(f);
      },
      onClose: (f) => {
        m(f);
      },
      onToggle: (f) => {
        v(l) ? m(f) : b(f);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: i
    }), J(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const h = () => {
      var f, y;
      const E = (y = (f = s.value) == null ? void 0 : f.contentRef) == null ? void 0 : y.popperContentRef;
      return E && E.contains(document.activeElement);
    };
    return Ip(() => l.value && p()), t({
      popperRef: o,
      contentRef: s,
      isFocusInsideContent: h,
      updatePopper: i,
      onOpen: b,
      onClose: m,
      hide: p
    }), (f, y) => (k(), ve(v(dx), {
      ref_key: "popperRef",
      ref: o,
      role: f.role
    }, {
      default: se(() => [
        xe($x, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: se(() => [
            f.$slots.default ? ge(f.$slots, "default", { key: 0 }) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        xe(Ox, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": f.ariaLabel,
          "boundaries-padding": f.boundariesPadding,
          content: f.content,
          disabled: f.disabled,
          effect: f.effect,
          enterable: f.enterable,
          "fallback-placements": f.fallbackPlacements,
          "hide-after": f.hideAfter,
          "gpu-acceleration": f.gpuAcceleration,
          offset: f.offset,
          persistent: f.persistent,
          "popper-class": f.popperClass,
          "popper-style": f.popperStyle,
          placement: f.placement,
          "popper-options": f.popperOptions,
          pure: f.pure,
          "raw-content": f.rawContent,
          "reference-el": f.referenceEl,
          "trigger-target-el": f.triggerTargetEl,
          "show-after": f.showAfter,
          strategy: f.strategy,
          teleported: f.teleported,
          transition: f.transition,
          "virtual-triggering": f.virtualTriggering,
          "z-index": f.zIndex,
          "append-to": f.appendTo
        }, {
          default: se(() => [
            ge(f.$slots, "content", {}, () => [
              f.rawContent ? (k(), q("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, Sx)) : (k(), q("span", wx, Ye(f.content), 1))
            ]),
            f.showArrow ? (k(), ve(v(FF), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : re("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Ix = /* @__PURE__ */ Ae(Ax, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Lx = Qt(Ix), bn = /* @__PURE__ */ new Map();
let Fu;
at && (document.addEventListener("mousedown", (e) => Fu = e), document.addEventListener("mouseup", (e) => {
  for (const t of bn.values())
    for (const { documentHandler: n } of t)
      n(e, Fu);
}));
function xu(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : qr(t.arg) && n.push(t.arg), function(r, a) {
    const o = t.instance.popperRef, s = r.target, i = a == null ? void 0 : a.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, g = n.length && n.some((m) => m == null ? void 0 : m.contains(s)) || n.length && n.includes(i), b = o && (o.contains(s) || o.contains(i));
    l || u || d || p || g || b || t.value(r, a);
  };
}
const Nx = {
  beforeMount(e, t) {
    bn.has(e) || bn.set(e, []), bn.get(e).push({
      documentHandler: xu(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    bn.has(e) || bn.set(e, []);
    const n = bn.get(e), r = n.findIndex((o) => o.bindingFn === t.oldValue), a = {
      documentHandler: xu(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, a) : n.push(a);
  },
  unmounted(e) {
    bn.delete(e);
  }
}, xd = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: da,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Md = {
  [Ze]: (e) => ot(e) || ut(e) || cn(e),
  change: (e) => ot(e) || ut(e) || cn(e)
}, Sr = Symbol("checkboxGroupContextKey"), Px = ({
  model: e,
  isChecked: t
}) => {
  const n = he(Sr, void 0), r = A(() => {
    var o, s;
    const i = (o = n == null ? void 0 : n.max) == null ? void 0 : o.value, l = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !Ha(i) && e.value.length >= i && !t.value || !Ha(l) && e.value.length <= l && t.value;
  });
  return {
    isDisabled: vi(A(() => (n == null ? void 0 : n.disabled.value) || r.value)),
    isLimitDisabled: r
  };
}, Rx = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: a,
  isLabeledByFormItem: o
}) => {
  const s = he(Sr, void 0), { formItem: i } = Or(), { emit: l } = St();
  function u(m) {
    var c, h;
    return m === e.trueLabel || m === !0 ? (c = e.trueLabel) != null ? c : !0 : (h = e.falseLabel) != null ? h : !1;
  }
  function d(m, c) {
    l("change", u(m), c);
  }
  function p(m) {
    if (n.value)
      return;
    const c = m.target;
    l("change", u(c.checked), m);
  }
  async function g(m) {
    n.value || !r.value && !a.value && o.value && (m.composedPath().some((f) => f.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await ye(), d(t.value, m)));
  }
  const b = A(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return J(() => e.modelValue, () => {
    b.value && (i == null || i.validate("change").catch((m) => We(m)));
  }), {
    handleChange: p,
    onClickRoot: g
  };
}, Fx = (e) => {
  const t = R(!1), { emit: n } = St(), r = he(Sr, void 0), a = A(() => Ha(r) === !1), o = R(!1);
  return {
    model: A({
      get() {
        var i, l;
        return a.value ? (i = r == null ? void 0 : r.modelValue) == null ? void 0 : i.value : (l = e.modelValue) != null ? l : t.value;
      },
      set(i) {
        var l, u;
        a.value && Dn(i) ? (o.value = ((l = r == null ? void 0 : r.max) == null ? void 0 : l.value) !== void 0 && i.length > (r == null ? void 0 : r.max.value), o.value === !1 && ((u = r == null ? void 0 : r.changeEvent) == null || u.call(r, i))) : (n(Ze, i), t.value = i);
      }
    }),
    isGroup: a,
    isLimitExceeded: o
  };
}, xx = (e, t, { model: n }) => {
  const r = he(Sr, void 0), a = R(!1), o = A(() => {
    const u = n.value;
    return cn(u) ? u : Dn(u) ? un(e.label) ? u.map(sr).some((d) => os(d, e.label)) : u.map(sr).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), s = Sn(A(() => {
    var u;
    return (u = r == null ? void 0 : r.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), i = Sn(A(() => {
    var u;
    return (u = r == null ? void 0 : r.size) == null ? void 0 : u.value;
  })), l = A(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: s,
    isChecked: o,
    isFocused: a,
    checkboxSize: i,
    hasOwnLabel: l
  };
}, Mx = (e, { model: t }) => {
  function n() {
    Dn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, kd = (e, t) => {
  const { formItem: n } = Or(), { model: r, isGroup: a, isLimitExceeded: o } = Fx(e), {
    isFocused: s,
    isChecked: i,
    checkboxButtonSize: l,
    checkboxSize: u,
    hasOwnLabel: d
  } = xx(e, t, { model: r }), { isDisabled: p } = Px({ model: r, isChecked: i }), { inputId: g, isLabeledByFormItem: b } = yo(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: a
  }), { handleChange: m, onClickRoot: c } = Rx(e, {
    model: r,
    isLimitExceeded: o,
    hasOwnLabel: d,
    isDisabled: p,
    isLabeledByFormItem: b
  });
  return Mx(e, { model: r }), {
    inputId: g,
    isLabeledByFormItem: b,
    isChecked: i,
    isDisabled: p,
    isFocused: s,
    checkboxButtonSize: l,
    checkboxSize: u,
    hasOwnLabel: d,
    model: r,
    handleChange: m,
    onClickRoot: c
  };
}, kx = ["tabindex", "role", "aria-checked"], Dx = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], jx = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], Vx = Z({
  name: "ElCheckbox"
}), Bx = /* @__PURE__ */ Z({
  ...Vx,
  props: xd,
  emits: Md,
  setup(e) {
    const t = e, n = ta(), {
      inputId: r,
      isLabeledByFormItem: a,
      isChecked: o,
      isDisabled: s,
      isFocused: i,
      checkboxSize: l,
      hasOwnLabel: u,
      model: d,
      handleChange: p,
      onClickRoot: g
    } = kd(t, n), b = Ce("checkbox"), m = A(() => [
      b.b(),
      b.m(l.value),
      b.is("disabled", s.value),
      b.is("bordered", t.border),
      b.is("checked", o.value)
    ]), c = A(() => [
      b.e("input"),
      b.is("disabled", s.value),
      b.is("checked", o.value),
      b.is("indeterminate", t.indeterminate),
      b.is("focus", i.value)
    ]);
    return (h, f) => (k(), ve(xt(!v(u) && v(a) ? "span" : "label"), {
      class: V(v(m)),
      "aria-controls": h.indeterminate ? h.controls : null,
      onClick: v(g)
    }, {
      default: se(() => [
        te("span", {
          class: V(v(c)),
          tabindex: h.indeterminate ? 0 : void 0,
          role: h.indeterminate ? "checkbox" : void 0,
          "aria-checked": h.indeterminate ? "mixed" : void 0
        }, [
          h.trueLabel || h.falseLabel ? Qe((k(), q("input", {
            key: 0,
            id: v(r),
            "onUpdate:modelValue": f[0] || (f[0] = (y) => kn(d) ? d.value = y : null),
            class: V(v(b).e("original")),
            type: "checkbox",
            "aria-hidden": h.indeterminate ? "true" : "false",
            name: h.name,
            tabindex: h.tabindex,
            disabled: v(s),
            "true-value": h.trueLabel,
            "false-value": h.falseLabel,
            onChange: f[1] || (f[1] = (...y) => v(p) && v(p)(...y)),
            onFocus: f[2] || (f[2] = (y) => i.value = !0),
            onBlur: f[3] || (f[3] = (y) => i.value = !1)
          }, null, 42, Dx)), [
            [Na, v(d)]
          ]) : Qe((k(), q("input", {
            key: 1,
            id: v(r),
            "onUpdate:modelValue": f[4] || (f[4] = (y) => kn(d) ? d.value = y : null),
            class: V(v(b).e("original")),
            type: "checkbox",
            "aria-hidden": h.indeterminate ? "true" : "false",
            disabled: v(s),
            value: h.label,
            name: h.name,
            tabindex: h.tabindex,
            onChange: f[5] || (f[5] = (...y) => v(p) && v(p)(...y)),
            onFocus: f[6] || (f[6] = (y) => i.value = !0),
            onBlur: f[7] || (f[7] = (y) => i.value = !1)
          }, null, 42, jx)), [
            [Na, v(d)]
          ]),
          te("span", {
            class: V(v(b).e("inner"))
          }, null, 2)
        ], 10, kx),
        v(u) ? (k(), q("span", {
          key: 0,
          class: V(v(b).e("label"))
        }, [
          ge(h.$slots, "default"),
          h.$slots.default ? re("v-if", !0) : (k(), q(At, { key: 0 }, [
            na(Ye(h.label), 1)
          ], 64))
        ], 2)) : re("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Ux = /* @__PURE__ */ Ae(Bx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Hx = ["name", "tabindex", "disabled", "true-value", "false-value"], Wx = ["name", "tabindex", "disabled", "value"], zx = Z({
  name: "ElCheckboxButton"
}), Kx = /* @__PURE__ */ Z({
  ...zx,
  props: xd,
  emits: Md,
  setup(e) {
    const t = e, n = ta(), {
      isFocused: r,
      isChecked: a,
      isDisabled: o,
      checkboxButtonSize: s,
      model: i,
      handleChange: l
    } = kd(t, n), u = he(Sr, void 0), d = Ce("checkbox"), p = A(() => {
      var b, m, c, h;
      const f = (m = (b = u == null ? void 0 : u.fill) == null ? void 0 : b.value) != null ? m : "";
      return {
        backgroundColor: f,
        borderColor: f,
        color: (h = (c = u == null ? void 0 : u.textColor) == null ? void 0 : c.value) != null ? h : "",
        boxShadow: f ? `-1px 0 0 0 ${f}` : void 0
      };
    }), g = A(() => [
      d.b("button"),
      d.bm("button", s.value),
      d.is("disabled", o.value),
      d.is("checked", a.value),
      d.is("focus", r.value)
    ]);
    return (b, m) => (k(), q("label", {
      class: V(v(g))
    }, [
      b.trueLabel || b.falseLabel ? Qe((k(), q("input", {
        key: 0,
        "onUpdate:modelValue": m[0] || (m[0] = (c) => kn(i) ? i.value = c : null),
        class: V(v(d).be("button", "original")),
        type: "checkbox",
        name: b.name,
        tabindex: b.tabindex,
        disabled: v(o),
        "true-value": b.trueLabel,
        "false-value": b.falseLabel,
        onChange: m[1] || (m[1] = (...c) => v(l) && v(l)(...c)),
        onFocus: m[2] || (m[2] = (c) => r.value = !0),
        onBlur: m[3] || (m[3] = (c) => r.value = !1)
      }, null, 42, Hx)), [
        [Na, v(i)]
      ]) : Qe((k(), q("input", {
        key: 1,
        "onUpdate:modelValue": m[4] || (m[4] = (c) => kn(i) ? i.value = c : null),
        class: V(v(d).be("button", "original")),
        type: "checkbox",
        name: b.name,
        tabindex: b.tabindex,
        disabled: v(o),
        value: b.label,
        onChange: m[5] || (m[5] = (...c) => v(l) && v(l)(...c)),
        onFocus: m[6] || (m[6] = (c) => r.value = !0),
        onBlur: m[7] || (m[7] = (c) => r.value = !1)
      }, null, 42, Wx)), [
        [Na, v(i)]
      ]),
      b.$slots.default || b.label ? (k(), q("span", {
        key: 2,
        class: V(v(d).be("button", "inner")),
        style: Me(v(a) ? v(p) : void 0)
      }, [
        ge(b.$slots, "default", {}, () => [
          na(Ye(b.label), 1)
        ])
      ], 6)) : re("v-if", !0)
    ], 2));
  }
});
var Dd = /* @__PURE__ */ Ae(Kx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const Gx = ke({
  modelValue: {
    type: be(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: da,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), qx = {
  [Ze]: (e) => Dn(e),
  change: (e) => Dn(e)
}, Yx = Z({
  name: "ElCheckboxGroup"
}), Xx = /* @__PURE__ */ Z({
  ...Yx,
  props: Gx,
  emits: qx,
  setup(e, { emit: t }) {
    const n = e, r = Ce("checkbox"), { formItem: a } = Or(), { inputId: o, isLabeledByFormItem: s } = yo(n, {
      formItemContext: a
    }), i = async (u) => {
      t(Ze, u), await ye(), t("change", u);
    }, l = A({
      get() {
        return n.modelValue;
      },
      set(u) {
        i(u);
      }
    });
    return Ot(Sr, {
      ...gN(Hn(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: l,
      changeEvent: i
    }), J(() => n.modelValue, () => {
      n.validateEvent && (a == null || a.validate("change").catch((u) => We(u)));
    }), (u, d) => {
      var p;
      return k(), ve(xt(u.tag), {
        id: v(o),
        class: V(v(r).b("group")),
        role: "group",
        "aria-label": v(s) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": v(s) ? (p = v(a)) == null ? void 0 : p.labelId : void 0
      }, {
        default: se(() => [
          ge(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var jd = /* @__PURE__ */ Ae(Xx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Jx = Qt(Ux, {
  CheckboxButton: Dd,
  CheckboxGroup: jd
});
Xn(Dd);
Xn(jd);
const Vd = ke({
  size: da,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), Zx = ke({
  ...Vd,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), Bd = {
  [Ze]: (e) => ot(e) || ut(e) || cn(e),
  [ri]: (e) => ot(e) || ut(e) || cn(e)
}, Ud = Symbol("radioGroupKey"), Hd = (e, t) => {
  const n = R(), r = he(Ud, void 0), a = A(() => !!r), o = A({
    get() {
      return a.value ? r.modelValue : e.modelValue;
    },
    set(d) {
      a.value ? r.changeEvent(d) : t && t(Ze, d), n.value.checked = e.modelValue === e.label;
    }
  }), s = Sn(A(() => r == null ? void 0 : r.size)), i = vi(A(() => r == null ? void 0 : r.disabled)), l = R(!1), u = A(() => i.value || a.value && o.value !== e.label ? -1 : 0);
  return {
    radioRef: n,
    isGroup: a,
    radioGroup: r,
    focus: l,
    size: s,
    disabled: i,
    tabIndex: u,
    modelValue: o
  };
}, Qx = ["value", "name", "disabled"], eM = Z({
  name: "ElRadio"
}), tM = /* @__PURE__ */ Z({
  ...eM,
  props: Zx,
  emits: Bd,
  setup(e, { emit: t }) {
    const n = e, r = Ce("radio"), { radioRef: a, radioGroup: o, focus: s, size: i, disabled: l, modelValue: u } = Hd(n, t);
    function d() {
      ye(() => t("change", u.value));
    }
    return (p, g) => {
      var b;
      return k(), q("label", {
        class: V([
          v(r).b(),
          v(r).is("disabled", v(l)),
          v(r).is("focus", v(s)),
          v(r).is("bordered", p.border),
          v(r).is("checked", v(u) === p.label),
          v(r).m(v(i))
        ])
      }, [
        te("span", {
          class: V([
            v(r).e("input"),
            v(r).is("disabled", v(l)),
            v(r).is("checked", v(u) === p.label)
          ])
        }, [
          Qe(te("input", {
            ref_key: "radioRef",
            ref: a,
            "onUpdate:modelValue": g[0] || (g[0] = (m) => kn(u) ? u.value = m : null),
            class: V(v(r).e("original")),
            value: p.label,
            name: p.name || ((b = v(o)) == null ? void 0 : b.name),
            disabled: v(l),
            type: "radio",
            onFocus: g[1] || (g[1] = (m) => s.value = !0),
            onBlur: g[2] || (g[2] = (m) => s.value = !1),
            onChange: d
          }, null, 42, Qx), [
            [hc, v(u)]
          ]),
          te("span", {
            class: V(v(r).e("inner"))
          }, null, 2)
        ], 2),
        te("span", {
          class: V(v(r).e("label")),
          onKeydown: g[3] || (g[3] = bt(() => {
          }, ["stop"]))
        }, [
          ge(p.$slots, "default", {}, () => [
            na(Ye(p.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var nM = /* @__PURE__ */ Ae(tM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const rM = ke({
  ...Vd,
  name: {
    type: String,
    default: ""
  }
}), aM = ["value", "name", "disabled"], oM = Z({
  name: "ElRadioButton"
}), sM = /* @__PURE__ */ Z({
  ...oM,
  props: rM,
  setup(e) {
    const t = e, n = Ce("radio"), { radioRef: r, focus: a, size: o, disabled: s, modelValue: i, radioGroup: l } = Hd(t), u = A(() => ({
      backgroundColor: (l == null ? void 0 : l.fill) || "",
      borderColor: (l == null ? void 0 : l.fill) || "",
      boxShadow: l != null && l.fill ? `-1px 0 0 0 ${l.fill}` : "",
      color: (l == null ? void 0 : l.textColor) || ""
    }));
    return (d, p) => {
      var g;
      return k(), q("label", {
        class: V([
          v(n).b("button"),
          v(n).is("active", v(i) === d.label),
          v(n).is("disabled", v(s)),
          v(n).is("focus", v(a)),
          v(n).bm("button", v(o))
        ])
      }, [
        Qe(te("input", {
          ref_key: "radioRef",
          ref: r,
          "onUpdate:modelValue": p[0] || (p[0] = (b) => kn(i) ? i.value = b : null),
          class: V(v(n).be("button", "original-radio")),
          value: d.label,
          type: "radio",
          name: d.name || ((g = v(l)) == null ? void 0 : g.name),
          disabled: v(s),
          onFocus: p[1] || (p[1] = (b) => a.value = !0),
          onBlur: p[2] || (p[2] = (b) => a.value = !1)
        }, null, 42, aM), [
          [hc, v(i)]
        ]),
        te("span", {
          class: V(v(n).be("button", "inner")),
          style: Me(v(i) === d.label ? v(u) : {}),
          onKeydown: p[3] || (p[3] = bt(() => {
          }, ["stop"]))
        }, [
          ge(d.$slots, "default", {}, () => [
            na(Ye(d.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var Wd = /* @__PURE__ */ Ae(sM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const iM = ke({
  id: {
    type: String,
    default: void 0
  },
  size: da,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), lM = Bd, uM = ["id", "aria-label", "aria-labelledby"], cM = Z({
  name: "ElRadioGroup"
}), fM = /* @__PURE__ */ Z({
  ...cM,
  props: iM,
  emits: lM,
  setup(e, { emit: t }) {
    const n = e, r = Ce("radio"), a = bo(), o = R(), { formItem: s } = Or(), { inputId: i, isLabeledByFormItem: l } = yo(n, {
      formItemContext: s
    }), u = (p) => {
      t(Ze, p), ye(() => t("change", p));
    };
    Ue(() => {
      const p = o.value.querySelectorAll("[type=radio]"), g = p[0];
      !Array.from(p).some((b) => b.checked) && g && (g.tabIndex = 0);
    });
    const d = A(() => n.name || a.value);
    return Ot(Ud, kt({
      ...Hn(n),
      changeEvent: u,
      name: d
    })), J(() => n.modelValue, () => {
      n.validateEvent && (s == null || s.validate("change").catch((p) => We(p)));
    }), (p, g) => (k(), q("div", {
      id: v(i),
      ref_key: "radioGroupRef",
      ref: o,
      class: V(v(r).b("group")),
      role: "radiogroup",
      "aria-label": v(l) ? void 0 : p.label || "radio-group",
      "aria-labelledby": v(l) ? v(s).labelId : void 0
    }, [
      ge(p.$slots, "default")
    ], 10, uM));
  }
});
var zd = /* @__PURE__ */ Ae(fM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const dM = Qt(nM, {
  RadioButton: Wd,
  RadioGroup: zd
});
Xn(zd);
Xn(Wd);
const Kd = ke({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ua,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), pM = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, vM = Z({
  name: "ElTag"
}), mM = /* @__PURE__ */ Z({
  ...vM,
  props: Kd,
  emits: pM,
  setup(e, { emit: t }) {
    const n = e, r = Sn(), a = Ce("tag"), o = A(() => {
      const { type: l, hit: u, effect: d, closable: p, round: g } = n;
      return [
        a.b(),
        a.is("closable", p),
        a.m(l),
        a.m(r.value),
        a.m(d),
        a.is("hit", u),
        a.is("round", g)
      ];
    }), s = (l) => {
      t("close", l);
    }, i = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (k(), q("span", {
      key: 0,
      class: V(v(o)),
      style: Me({ backgroundColor: l.color }),
      onClick: i
    }, [
      te("span", {
        class: V(v(a).e("content"))
      }, [
        ge(l.$slots, "default")
      ], 2),
      l.closable ? (k(), ve(v(yn), {
        key: 0,
        class: V(v(a).e("close")),
        onClick: bt(s, ["stop"])
      }, {
        default: se(() => [
          xe(v(gl))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : re("v-if", !0)
    ], 6)) : (k(), ve(Br, {
      key: 1,
      name: `${v(a).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: se(() => [
        te("span", {
          class: V(v(o)),
          style: Me({ backgroundColor: l.color }),
          onClick: i
        }, [
          te("span", {
            class: V(v(a).e("content"))
          }, [
            ge(l.$slots, "default")
          ], 2),
          l.closable ? (k(), ve(v(yn), {
            key: 0,
            class: V(v(a).e("close")),
            onClick: bt(s, ["stop"])
          }, {
            default: se(() => [
              xe(v(gl))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : re("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var gM = /* @__PURE__ */ Ae(mM, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const hM = Qt(gM), Gd = Symbol("ElSelectGroup"), $o = Symbol("ElSelect");
function bM(e, t) {
  const n = he($o), r = he(Gd, { disabled: !1 }), a = A(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), o = A(() => n.props.multiple ? p(n.props.modelValue, e.value) : g(e.value, n.props.modelValue)), s = A(() => {
    if (n.props.multiple) {
      const c = n.props.modelValue || [];
      return !o.value && c.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), i = A(() => e.label || (a.value ? "" : e.value)), l = A(() => e.value || e.label || ""), u = A(() => e.disabled || t.groupDisabled || s.value), d = St(), p = (c = [], h) => {
    if (a.value) {
      const f = n.props.valueKey;
      return c && c.some((y) => sr(yt(y, f)) === yt(h, f));
    } else
      return c && c.includes(h);
  }, g = (c, h) => {
    if (a.value) {
      const { valueKey: f } = n.props;
      return yt(c, f) === yt(h, f);
    } else
      return c === h;
  }, b = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  J(() => i.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), J(() => e.value, (c, h) => {
    const { remote: f, valueKey: y } = n.props;
    if (Object.is(c, h) || (n.onOptionDestroy(h, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !f) {
      if (y && typeof c == "object" && typeof h == "object" && c[y] === h[y])
        return;
      n.setSelected();
    }
  }), J(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: m } = sr(n);
  return J(m, (c) => {
    const { query: h } = v(c), f = new RegExp(yN(h), "i");
    t.visible = f.test(i.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: i,
    currentValue: l,
    itemSelected: o,
    isDisabled: u,
    hoverItem: b
  };
}
const yM = Z({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ce("select"), n = kt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: r, itemSelected: a, isDisabled: o, select: s, hoverItem: i } = bM(e, n), { visible: l, hover: u } = Hn(n), d = St().proxy;
    s.onOptionCreate(d), wt(() => {
      const g = d.value, { selected: b } = s, c = (s.props.multiple ? b : [b]).some((h) => h.value === d.value);
      ye(() => {
        s.cachedOptions.get(g) === d && !c && s.cachedOptions.delete(g);
      }), s.onOptionDestroy(g, d);
    });
    function p() {
      e.disabled !== !0 && n.groupDisabled !== !0 && s.handleOptionSelect(d, !0);
    }
    return {
      ns: t,
      currentLabel: r,
      itemSelected: a,
      isDisabled: o,
      select: s,
      hoverItem: i,
      visible: l,
      hover: u,
      selectOptionClick: p,
      states: n
    };
  }
});
function _M(e, t, n, r, a, o) {
  return Qe((k(), q("li", {
    class: V([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...s) => e.hoverItem && e.hoverItem(...s)),
    onClick: t[1] || (t[1] = bt((...s) => e.selectOptionClick && e.selectOptionClick(...s), ["stop"]))
  }, [
    ge(e.$slots, "default", {}, () => [
      te("span", null, Ye(e.currentLabel), 1)
    ])
  ], 34)), [
    [Tn, e.visible]
  ]);
}
var _i = /* @__PURE__ */ Ae(yM, [["render", _M], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const $M = Z({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = he($o), t = Ce("select"), n = A(() => e.props.popperClass), r = A(() => e.props.multiple), a = A(() => e.props.fitInputWidth), o = R("");
    function s() {
      var i;
      o.value = `${(i = e.selectWrapper) == null ? void 0 : i.offsetWidth}px`;
    }
    return Ue(() => {
      s(), la(e.selectWrapper, s);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: a
    };
  }
});
function EM(e, t, n, r, a, o) {
  return k(), q("div", {
    class: V([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Me({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    ge(e.$slots, "default")
  ], 6);
}
var TM = /* @__PURE__ */ Ae($M, [["render", EM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function OM(e) {
  const { t } = ai();
  return kt({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
    mouseEnter: !1
  });
}
const SM = (e, t, n) => {
  const { t: r } = ai(), a = Ce("select");
  NN({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, A(() => e.suffixTransition === !1));
  const o = R(null), s = R(null), i = R(null), l = R(null), u = R(null), d = R(null), p = R(null), g = R(-1), b = xn({ query: "" }), m = xn(""), c = R([]);
  let h = 0;
  const { form: f, formItem: y } = Or(), E = A(() => !e.filterable || e.multiple || !t.visible), $ = A(() => e.disabled || (f == null ? void 0 : f.disabled)), T = A(() => {
    const L = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !$.value && t.inputHovering && L;
  }), S = A(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), w = A(() => a.is("reverse", S.value && t.visible && e.suffixTransition)), N = A(() => e.remote ? 300 : 0), F = A(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), x = A(() => {
    const L = Array.from(t.options.values()), M = [];
    return c.value.forEach((Y) => {
      const ae = L.findIndex((qe) => qe.currentLabel === Y);
      ae > -1 && M.push(L[ae]);
    }), M.length ? M : L;
  }), H = A(() => Array.from(t.cachedOptions.values())), U = A(() => {
    const L = x.value.filter((M) => !M.created).some((M) => M.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !L;
  }), D = Sn(), Q = A(() => ["small"].includes(D.value) ? "small" : "default"), ue = A({
    get() {
      return t.visible && F.value !== !1;
    },
    set(L) {
      t.visible = L;
    }
  });
  J([() => $.value, () => D.value, () => f == null ? void 0 : f.size], () => {
    ye(() => {
      K();
    });
  }), J(() => e.placeholder, (L) => {
    t.cachedPlaceHolder = t.currentPlaceholder = L;
  }), J(() => e.modelValue, (L, M) => {
    e.multiple && (K(), L && L.length > 0 || s.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", j(t.query))), De(), e.filterable && !e.multiple && (t.inputLength = 20), !os(L, M) && e.validateEvent && (y == null || y.validate("change").catch((Y) => We(Y)));
  }, {
    flush: "post",
    deep: !0
  }), J(() => t.visible, (L) => {
    var M, Y, ae, qe, nt;
    L ? ((Y = (M = l.value) == null ? void 0 : M.updatePopper) == null || Y.call(M), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (qe = (ae = i.value) == null ? void 0 : ae.focus) == null || qe.call(ae), e.multiple ? (nt = s.value) == null || nt.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), j(t.query), !e.multiple && !e.remote && (b.value.query = "", Ar(b), Ar(m)))) : (e.filterable && (_t(e.filterMethod) && e.filterMethod(""), _t(e.remoteMethod) && e.remoteMethod("")), s.value && s.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, je(), ye(() => {
      s.value && s.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", L);
  }), J(() => t.options.entries(), () => {
    var L, M, Y;
    if (!at)
      return;
    (M = (L = l.value) == null ? void 0 : L.updatePopper) == null || M.call(L), e.multiple && K();
    const ae = ((Y = d.value) == null ? void 0 : Y.querySelectorAll("input")) || [];
    Array.from(ae).includes(document.activeElement) || De(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && me();
  }, {
    flush: "post"
  }), J(() => t.hoverIndex, (L) => {
    ut(L) && L > -1 ? g.value = x.value[L] || {} : g.value = {}, x.value.forEach((M) => {
      M.hover = g.value === M;
    });
  });
  const K = () => {
    ye(() => {
      var L, M;
      if (!o.value)
        return;
      const Y = o.value.$el.querySelector("input");
      h = h || (Y.clientHeight > 0 ? Y.clientHeight + 2 : 0);
      const ae = u.value, qe = SN(D.value || (f == null ? void 0 : f.size)), nt = D.value || qe === h || h <= 0 ? qe : h;
      !(Y.offsetParent === null) && (Y.style.height = `${(t.selected.length === 0 ? nt : Math.max(ae ? ae.clientHeight + (ae.clientHeight > nt ? 6 : 0) : 0, nt)) - 2}px`), t.tagInMultiLine = Number.parseFloat(Y.style.height) >= nt, t.visible && F.value !== !1 && ((M = (L = l.value) == null ? void 0 : L.updatePopper) == null || M.call(L));
    });
  }, j = async (L) => {
    if (!(t.previousQuery === L || t.isOnComposition)) {
      if (t.previousQuery === null && (_t(e.filterMethod) || _t(e.remoteMethod))) {
        t.previousQuery = L;
        return;
      }
      t.previousQuery = L, ye(() => {
        var M, Y;
        t.visible && ((Y = (M = l.value) == null ? void 0 : M.updatePopper) == null || Y.call(M));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ye(() => {
        const M = s.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, M) : M, ie(), K();
      }), e.remote && _t(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(L)) : _t(e.filterMethod) ? (e.filterMethod(L), Ar(m)) : (t.filteredOptionsCount = t.optionsCount, b.value.query = L, Ar(b), Ar(m)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ye(), me());
    }
  }, ie = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = s.value.value ? "" : t.cachedPlaceHolder);
  }, me = () => {
    const L = x.value.filter((ae) => ae.visible && !ae.disabled && !ae.states.groupDisabled), M = L.find((ae) => ae.created), Y = L[0];
    t.hoverIndex = O(x.value, M || Y);
  }, De = () => {
    var L;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const Y = ze(e.modelValue);
      (L = Y.props) != null && L.created ? (t.createdLabel = Y.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = Y.currentLabel, t.selected = Y, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const M = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((Y) => {
      M.push(ze(Y));
    }), t.selected = M, ye(() => {
      K();
    });
  }, ze = (L) => {
    let M;
    const Y = Ro(L).toLowerCase() === "object", ae = Ro(L).toLowerCase() === "null", qe = Ro(L).toLowerCase() === "undefined";
    for (let tn = t.cachedOptions.size - 1; tn >= 0; tn--) {
      const Ct = H.value[tn];
      if (Y ? yt(Ct.value, e.valueKey) === yt(L, e.valueKey) : Ct.value === L) {
        M = {
          value: L,
          currentLabel: Ct.currentLabel,
          isDisabled: Ct.isDisabled
        };
        break;
      }
    }
    if (M)
      return M;
    const nt = Y ? L.label : !ae && !qe ? L : "", en = {
      value: L,
      currentLabel: nt
    };
    return e.multiple && (en.hitState = !1), en;
  }, je = () => {
    setTimeout(() => {
      const L = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((M) => x.value.findIndex((Y) => yt(Y, L) === yt(M, L)))) : t.hoverIndex = -1 : t.hoverIndex = x.value.findIndex((M) => ft(M) === ft(t.selected));
    }, 300);
  }, Ke = () => {
    var L, M;
    Ve(), (M = (L = l.value) == null ? void 0 : L.updatePopper) == null || M.call(L), e.multiple && K();
  }, Ve = () => {
    var L;
    t.inputWidth = (L = o.value) == null ? void 0 : L.$el.offsetWidth;
  }, Te = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, j(t.query));
  }, Ge = ru(() => {
    Te();
  }, N.value), W = ru((L) => {
    j(L.target.value);
  }, N.value), G = (L) => {
    os(e.modelValue, L) || n.emit(ri, L);
  }, le = (L) => {
    if (L.code !== lr.delete) {
      if (L.target.value.length <= 0 && !He()) {
        const M = e.modelValue.slice();
        M.pop(), n.emit(Ze, M), G(M);
      }
      L.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, ce = (L, M) => {
    const Y = t.selected.indexOf(M);
    if (Y > -1 && !$.value) {
      const ae = e.modelValue.slice();
      ae.splice(Y, 1), n.emit(Ze, ae), G(ae), n.emit("remove-tag", M.value);
    }
    L.stopPropagation();
  }, _e = (L) => {
    L.stopPropagation();
    const M = e.multiple ? [] : "";
    if (!ot(M))
      for (const Y of t.selected)
        Y.isDisabled && M.push(Y.value);
    n.emit(Ze, M), G(M), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, Re = (L, M) => {
    var Y;
    if (e.multiple) {
      const ae = (e.modelValue || []).slice(), qe = O(ae, L.value);
      qe > -1 ? ae.splice(qe, 1) : (e.multipleLimit <= 0 || ae.length < e.multipleLimit) && ae.push(L.value), n.emit(Ze, ae), G(ae), L.created && (t.query = "", j(""), t.inputLength = 20), e.filterable && ((Y = s.value) == null || Y.focus());
    } else
      n.emit(Ze, L.value), G(L.value), t.visible = !1;
    t.isSilentBlur = M, _(), !t.visible && ye(() => {
      I(L);
    });
  }, O = (L = [], M) => {
    if (!un(M))
      return L.indexOf(M);
    const Y = e.valueKey;
    let ae = -1;
    return L.some((qe, nt) => sr(yt(qe, Y)) === yt(M, Y) ? (ae = nt, !0) : !1), ae;
  }, _ = () => {
    t.softFocus = !0;
    const L = s.value || o.value;
    L && (L == null || L.focus());
  }, I = (L) => {
    var M, Y, ae, qe, nt;
    const en = Array.isArray(L) ? L[0] : L;
    let tn = null;
    if (en != null && en.value) {
      const Ct = x.value.filter((Io) => Io.value === en.value);
      Ct.length > 0 && (tn = Ct[0].$el);
    }
    if (l.value && tn) {
      const Ct = (qe = (ae = (Y = (M = l.value) == null ? void 0 : M.popperRef) == null ? void 0 : Y.contentRef) == null ? void 0 : ae.querySelector) == null ? void 0 : qe.call(ae, `.${a.be("dropdown", "wrap")}`);
      Ct && $N(Ct, tn);
    }
    (nt = p.value) == null || nt.handleScroll();
  }, B = (L) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(L.value, L), t.cachedOptions.set(L.value, L);
  }, X = (L, M) => {
    t.options.get(L) === M && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(L));
  }, oe = (L) => {
    L.code !== lr.backspace && He(!1), t.inputLength = s.value.value.length * 15 + 20, K();
  }, He = (L) => {
    if (!Array.isArray(t.selected))
      return;
    const M = t.selected[t.selected.length - 1];
    if (M)
      return L === !0 || L === !1 ? (M.hitState = L, L) : (M.hitState = !M.hitState, M.hitState);
  }, Fe = (L) => {
    const M = L.target.value;
    if (L.type === "compositionend")
      t.isOnComposition = !1, ye(() => j(M));
    else {
      const Y = M[M.length - 1] || "";
      t.isOnComposition = !od(Y);
    }
  }, mt = () => {
    ye(() => I(t.selected));
  }, Ee = (L) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", L));
  }, P = () => {
    var L, M, Y;
    t.visible = !1, (L = o.value) == null || L.blur(), (Y = (M = i.value) == null ? void 0 : M.blur) == null || Y.call(M);
  }, C = (L) => {
    ye(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", L);
    }), t.softFocus = !1;
  }, ee = (L) => {
    _e(L);
  }, pe = () => {
    t.visible = !1;
  }, st = (L) => {
    t.visible && (L.preventDefault(), L.stopPropagation(), t.visible = !1);
  }, it = (L) => {
    var M;
    L && !t.mouseEnter || $.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((M = s.value || o.value) == null || M.focus()));
  }, Bt = () => {
    t.visible ? x.value[t.hoverIndex] && Re(x.value[t.hoverIndex], void 0) : it();
  }, ft = (L) => un(L.value) ? yt(L.value, e.valueKey) : L.value, wr = A(() => x.value.filter((L) => L.visible).every((L) => L.disabled)), Jn = A(() => t.selected.slice(0, e.maxCollapseTags)), Cr = A(() => t.selected.slice(e.maxCollapseTags)), ma = (L) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !wr.value) {
      L === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : L === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const M = x.value[t.hoverIndex];
      (M.disabled === !0 || M.states.groupDisabled === !0 || !M.visible) && ma(L), ye(() => I(g.value));
    }
  };
  return {
    optionList: c,
    optionsArray: x,
    selectSize: D,
    handleResize: Ke,
    debouncedOnInputChange: Ge,
    debouncedQueryChange: W,
    deletePrevTag: le,
    deleteTag: ce,
    deleteSelected: _e,
    handleOptionSelect: Re,
    scrollToOption: I,
    readonly: E,
    resetInputHeight: K,
    showClose: T,
    iconComponent: S,
    iconReverse: w,
    showNewOption: U,
    collapseTagSize: Q,
    setSelected: De,
    managePlaceholder: ie,
    selectDisabled: $,
    emptyText: F,
    toggleLastOptionHitState: He,
    resetInputState: oe,
    handleComposition: Fe,
    onOptionCreate: B,
    onOptionDestroy: X,
    handleMenuEnter: mt,
    handleFocus: Ee,
    blur: P,
    handleBlur: C,
    handleClearClick: ee,
    handleClose: pe,
    handleKeydownEscape: st,
    toggleMenu: it,
    selectOption: Bt,
    getValueKey: ft,
    navigateOptions: ma,
    dropMenuVisible: ue,
    queryChange: b,
    groupQueryChange: m,
    showTagList: Jn,
    collapseTagList: Cr,
    reference: o,
    input: s,
    iOSInput: i,
    tooltipRef: l,
    tags: u,
    selectWrapper: d,
    scrollbar: p,
    handleMouseEnter: () => {
      t.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      t.mouseEnter = !1;
    }
  };
};
var wM = Z({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function a(o, s) {
      if (o.length !== s.length)
        return !1;
      for (const [i] of o.entries())
        if (o[i] != s[i])
          return !1;
      return !0;
    }
    return () => {
      var o, s;
      const i = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function u(d) {
        Array.isArray(d) && d.forEach((p) => {
          var g, b, m, c;
          const h = (g = (p == null ? void 0 : p.type) || {}) == null ? void 0 : g.name;
          h === "ElOptionGroup" ? u(!ot(p.children) && !Array.isArray(p.children) && _t((b = p.children) == null ? void 0 : b.default) ? (m = p.children) == null ? void 0 : m.default() : p.children) : h === "ElOption" ? l.push((c = p.props) == null ? void 0 : c.label) : Array.isArray(p.children) && u(p.children);
        });
      }
      return i.length && u((s = i[0]) == null ? void 0 : s.children), a(l, r) || (r = l, n("update-options", l)), i;
    };
  }
});
const Mu = "ElSelect", CM = Z({
  name: Mu,
  componentName: Mu,
  components: {
    ElInput: Sd,
    ElSelectMenu: TM,
    ElOption: _i,
    ElOptions: wM,
    ElTag: hM,
    ElScrollbar: CF,
    ElTooltip: Lx,
    ElIcon: yn
  },
  directives: { ClickOutside: Nx },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: wN
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: yi.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Wa,
      default: Vs
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: Wa,
      default: _S
    },
    tagType: { ...Kd.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: go,
      default: "bottom-start"
    }
  },
  emits: [
    Ze,
    ri,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = Ce("select"), r = Ce("input"), { t: a } = ai(), o = OM(e), {
      optionList: s,
      optionsArray: i,
      selectSize: l,
      readonly: u,
      handleResize: d,
      collapseTagSize: p,
      debouncedOnInputChange: g,
      debouncedQueryChange: b,
      deletePrevTag: m,
      deleteTag: c,
      deleteSelected: h,
      handleOptionSelect: f,
      scrollToOption: y,
      setSelected: E,
      resetInputHeight: $,
      managePlaceholder: T,
      showClose: S,
      selectDisabled: w,
      iconComponent: N,
      iconReverse: F,
      showNewOption: x,
      emptyText: H,
      toggleLastOptionHitState: U,
      resetInputState: D,
      handleComposition: Q,
      onOptionCreate: ue,
      onOptionDestroy: K,
      handleMenuEnter: j,
      handleFocus: ie,
      blur: me,
      handleBlur: De,
      handleClearClick: ze,
      handleClose: je,
      handleKeydownEscape: Ke,
      toggleMenu: Ve,
      selectOption: Te,
      getValueKey: Ge,
      navigateOptions: W,
      dropMenuVisible: G,
      reference: le,
      input: ce,
      iOSInput: _e,
      tooltipRef: Re,
      tags: O,
      selectWrapper: _,
      scrollbar: I,
      queryChange: B,
      groupQueryChange: X,
      handleMouseEnter: oe,
      handleMouseLeave: He,
      showTagList: Fe,
      collapseTagList: mt
    } = SM(e, o, t), { focus: Ee } = PN(le), {
      inputWidth: P,
      selected: C,
      inputLength: ee,
      filteredOptionsCount: pe,
      visible: st,
      softFocus: it,
      selectedLabel: Bt,
      hoverIndex: ft,
      query: wr,
      inputHovering: Jn,
      currentPlaceholder: Cr,
      menuVisibleOnFocus: ma,
      isOnComposition: Ci,
      isSilentBlur: Ai,
      options: L,
      cachedOptions: M,
      optionsCount: Y,
      prefixWidth: ae,
      tagInMultiLine: qe
    } = Hn(o), nt = A(() => {
      const gt = [n.b()], In = v(l);
      return In && gt.push(n.m(In)), e.disabled && gt.push(n.m("disabled")), gt;
    }), en = A(() => ({
      maxWidth: `${v(P) - 32}px`,
      width: "100%"
    })), tn = A(() => ({ maxWidth: `${v(P) > 123 ? v(P) - 123 : v(P) - 75}px` }));
    Ot($o, kt({
      props: e,
      options: L,
      optionsArray: i,
      cachedOptions: M,
      optionsCount: Y,
      filteredOptionsCount: pe,
      hoverIndex: ft,
      handleOptionSelect: f,
      onOptionCreate: ue,
      onOptionDestroy: K,
      selectWrapper: _,
      selected: C,
      setSelected: E,
      queryChange: B,
      groupQueryChange: X
    })), Ue(() => {
      o.cachedPlaceHolder = Cr.value = e.placeholder || (() => a("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Cr.value = ""), la(_, d), e.remote && e.multiple && $(), ye(() => {
        const gt = le.value && le.value.$el;
        if (gt && (P.value = gt.getBoundingClientRect().width, t.slots.prefix)) {
          const In = gt.querySelector(`.${r.e("prefix")}`);
          ae.value = Math.max(In.getBoundingClientRect().width + 5, 30);
        }
      }), E();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Ze, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Ze, "");
    const Ct = A(() => {
      var gt, In;
      return (In = (gt = Re.value) == null ? void 0 : gt.popperRef) == null ? void 0 : In.contentRef;
    });
    return {
      isIOS: Lf,
      onOptionsRendered: (gt) => {
        s.value = gt;
      },
      tagInMultiLine: qe,
      prefixWidth: ae,
      selectSize: l,
      readonly: u,
      handleResize: d,
      collapseTagSize: p,
      debouncedOnInputChange: g,
      debouncedQueryChange: b,
      deletePrevTag: m,
      deleteTag: c,
      deleteSelected: h,
      handleOptionSelect: f,
      scrollToOption: y,
      inputWidth: P,
      selected: C,
      inputLength: ee,
      filteredOptionsCount: pe,
      visible: st,
      softFocus: it,
      selectedLabel: Bt,
      hoverIndex: ft,
      query: wr,
      inputHovering: Jn,
      currentPlaceholder: Cr,
      menuVisibleOnFocus: ma,
      isOnComposition: Ci,
      isSilentBlur: Ai,
      options: L,
      resetInputHeight: $,
      managePlaceholder: T,
      showClose: S,
      selectDisabled: w,
      iconComponent: N,
      iconReverse: F,
      showNewOption: x,
      emptyText: H,
      toggleLastOptionHitState: U,
      resetInputState: D,
      handleComposition: Q,
      handleMenuEnter: j,
      handleFocus: ie,
      blur: me,
      handleBlur: De,
      handleClearClick: ze,
      handleClose: je,
      handleKeydownEscape: Ke,
      toggleMenu: Ve,
      selectOption: Te,
      getValueKey: Ge,
      navigateOptions: W,
      dropMenuVisible: G,
      focus: Ee,
      reference: le,
      input: ce,
      iOSInput: _e,
      tooltipRef: Re,
      popperPaneRef: Ct,
      tags: O,
      selectWrapper: _,
      scrollbar: I,
      wrapperKls: nt,
      selectTagsStyle: en,
      nsSelect: n,
      tagTextStyle: tn,
      handleMouseEnter: oe,
      handleMouseLeave: He,
      showTagList: Fe,
      collapseTagList: mt
    };
  }
}), AM = ["disabled", "autocomplete"], IM = ["disabled"], LM = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function NM(e, t, n, r, a, o) {
  const s = Ht("el-tag"), i = Ht("el-tooltip"), l = Ht("el-icon"), u = Ht("el-input"), d = Ht("el-option"), p = Ht("el-options"), g = Ht("el-scrollbar"), b = Ht("el-select-menu"), m = Lp("click-outside");
  return Qe((k(), q("div", {
    ref: "selectWrapper",
    class: V(e.wrapperKls),
    onMouseenter: t[21] || (t[21] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[22] || (t[22] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[23] || (t[23] = bt((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
  }, [
    xe(i, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: se(() => [
        te("div", {
          class: "select-trigger",
          onMouseenter: t[19] || (t[19] = (c) => e.inputHovering = !0),
          onMouseleave: t[20] || (t[20] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (k(), q("div", {
            key: 0,
            ref: "tags",
            class: V([
              e.nsSelect.e("tags"),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            style: Me(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (k(), ve(Br, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: se(() => [
                te("span", {
                  class: V([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (k(!0), q(At, null, Lo(e.showTagList, (c) => (k(), ve(s, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, c)
                  }, {
                    default: se(() => [
                      te("span", {
                        class: V(e.nsSelect.e("tags-text")),
                        style: Me(e.tagTextStyle)
                      }, Ye(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                  e.selected.length > e.maxCollapseTags ? (k(), ve(s, {
                    key: 0,
                    closable: !1,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": ""
                  }, {
                    default: se(() => [
                      e.collapseTagsTooltip ? (k(), ve(i, {
                        key: 0,
                        disabled: e.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: e.effect,
                        placement: "bottom",
                        teleported: e.teleported
                      }, {
                        default: se(() => [
                          te("span", {
                            class: V(e.nsSelect.e("tags-text"))
                          }, "+ " + Ye(e.selected.length - e.maxCollapseTags), 3)
                        ]),
                        content: se(() => [
                          te("div", {
                            class: V(e.nsSelect.e("collapse-tags"))
                          }, [
                            (k(!0), q(At, null, Lo(e.collapseTagList, (c) => (k(), q("div", {
                              key: e.getValueKey(c),
                              class: V(e.nsSelect.e("collapse-tag"))
                            }, [
                              xe(s, {
                                class: "in-tooltip",
                                closable: !e.selectDisabled && !c.isDisabled,
                                size: e.collapseTagSize,
                                hit: c.hitState,
                                type: e.tagType,
                                "disable-transitions": "",
                                style: { margin: "2px" },
                                onClose: (h) => e.deleteTag(h, c)
                              }, {
                                default: se(() => [
                                  te("span", {
                                    class: V(e.nsSelect.e("tags-text")),
                                    style: Me({
                                      maxWidth: e.inputWidth - 75 + "px"
                                    })
                                  }, Ye(c.currentLabel), 7)
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "hit", "type", "onClose"])
                            ], 2))), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (k(), q("span", {
                        key: 1,
                        class: V(e.nsSelect.e("tags-text"))
                      }, "+ " + Ye(e.selected.length - e.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : re("v-if", !0)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : re("v-if", !0),
            e.collapseTags ? re("v-if", !0) : (k(), ve(Br, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: se(() => [
                te("span", {
                  class: V([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (k(!0), q(At, null, Lo(e.selected, (c) => (k(), ve(s, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, c)
                  }, {
                    default: se(() => [
                      te("span", {
                        class: V(e.nsSelect.e("tags-text")),
                        style: Me({ maxWidth: e.inputWidth - 75 + "px" })
                      }, Ye(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable ? Qe((k(), q("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (c) => e.query = c),
              type: "text",
              class: V([
                e.nsSelect.e("input"),
                e.nsSelect.is(e.selectSize),
                e.nsSelect.is("disabled", e.selectDisabled)
              ]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Me({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[1] || (t[1] = (...c) => e.handleFocus && e.handleFocus(...c)),
              onBlur: t[2] || (t[2] = (...c) => e.handleBlur && e.handleBlur(...c)),
              onKeyup: t[3] || (t[3] = (...c) => e.managePlaceholder && e.managePlaceholder(...c)),
              onKeydown: [
                t[4] || (t[4] = (...c) => e.resetInputState && e.resetInputState(...c)),
                t[5] || (t[5] = Rt(bt((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = Rt(bt((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = Rt((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[8] || (t[8] = Rt(bt((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = Rt((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[10] || (t[10] = Rt((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[14] || (t[14] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, AM)), [
              [Np, e.query]
            ]) : re("v-if", !0)
          ], 6)) : re("v-if", !0),
          re(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (k(), q("input", {
            key: 1,
            ref: "iOSInput",
            class: V([
              e.nsSelect.e("input"),
              e.nsSelect.is(e.selectSize),
              e.nsSelect.em("input", "iOS")
            ]),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, IM)) : re("v-if", !0),
          xe(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[15] || (t[15] = (c) => e.selectedLabel = c),
            type: "text",
            placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: V([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[16] || (t[16] = Rt(bt((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[17] || (t[17] = Rt(bt((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Rt(bt(e.selectOption, ["stop", "prevent"]), ["enter"]),
              Rt(e.handleKeydownEscape, ["esc"]),
              t[18] || (t[18] = Rt((c) => e.visible = !1, ["tab"]))
            ]
          }, Pp({
            suffix: se(() => [
              e.iconComponent && !e.showClose ? (k(), ve(l, {
                key: 0,
                class: V([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: se(() => [
                  (k(), ve(xt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : re("v-if", !0),
              e.showClose && e.clearIcon ? (k(), ve(l, {
                key: 1,
                class: V([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: se(() => [
                  (k(), ve(xt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : re("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: se(() => [
                te("div", LM, [
                  ge(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: se(() => [
        xe(b, null, {
          default: se(() => [
            Qe(xe(g, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: V([
                e.nsSelect.is("empty", !e.allowCreate && !!e.query && e.filteredOptionsCount === 0)
              ])
            }, {
              default: se(() => [
                e.showNewOption ? (k(), ve(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : re("v-if", !0),
                xe(p, { onUpdateOptions: e.onOptionsRendered }, {
                  default: se(() => [
                    ge(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [Tn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (k(), q(At, { key: 0 }, [
              e.$slots.empty ? ge(e.$slots, "empty", { key: 0 }) : (k(), q("p", {
                key: 1,
                class: V(e.nsSelect.be("dropdown", "empty"))
              }, Ye(e.emptyText), 3))
            ], 64)) : re("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [m, e.handleClose, e.popperPaneRef]
  ]);
}
var PM = /* @__PURE__ */ Ae(CM, [["render", NM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const RM = Z({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ce("select"), n = R(!0), r = St(), a = R([]);
    Ot(Gd, kt({
      ...Hn(e)
    }));
    const o = he($o);
    Ue(() => {
      a.value = s(r.subTree);
    });
    const s = (l) => {
      const u = [];
      return Array.isArray(l.children) && l.children.forEach((d) => {
        var p;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (p = d.children) != null && p.length && u.push(...s(d));
      }), u;
    }, { groupQueryChange: i } = sr(o);
    return J(i, () => {
      n.value = a.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function FM(e, t, n, r, a, o) {
  return Qe((k(), q("ul", {
    class: V(e.ns.be("group", "wrap"))
  }, [
    te("li", {
      class: V(e.ns.be("group", "title"))
    }, Ye(e.label), 3),
    te("li", null, [
      te("ul", {
        class: V(e.ns.b("group"))
      }, [
        ge(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Tn, e.visible]
  ]);
}
var qd = /* @__PURE__ */ Ae(RM, [["render", FM], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
Qt(PM, {
  Option: _i,
  OptionGroup: qd
});
const xM = Xn(_i);
Xn(qd);
var MM = aa, kM = Pc;
function DM(e) {
  return kM(MM(e).toLowerCase());
}
var jM = DM, VM = jM, BM = Af, UM = BM(function(e, t, n) {
  return t = t.toLowerCase(), e + (n ? VM(t) : t);
}), HM = UM;
const Qr = /* @__PURE__ */ tt(HM);
var WM = ro, zM = oa, KM = oo, ku = Xt, GM = no;
function qM(e, t, n, r) {
  if (!ku(e))
    return e;
  t = zM(t, e);
  for (var a = -1, o = t.length, s = o - 1, i = e; i != null && ++a < o; ) {
    var l = GM(t[a]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (a != s) {
      var d = i[l];
      u = r ? r(d, l, i) : void 0, u === void 0 && (u = ku(d) ? d : KM(t[a + 1]) ? [] : {});
    }
    WM(i, l, u), i = i[l];
  }
  return e;
}
var YM = qM, XM = YM;
function JM(e, t, n) {
  return e == null ? e : XM(e, t, n);
}
var ZM = JM;
const vs = /* @__PURE__ */ tt(ZM), QM = Hr.buildRules, ek = Hr.buildElFormItemProps, tk = Hr.isNeedElFormItem, nk = ({ parent: e }) => e && Rn(Ka, Qr(e.tagname)) ? Ka[Qr(e.tagname)] : Sd, rk = (e) => {
  const t = e.props, n = e.setupRes;
  if (n.isFormElem) {
    const r = n.formProp;
    if (xa(t, "value"), n.isNeedElFormItem) {
      const a = {
        ...ek(t),
        prop: r
      };
      return a.rules = QM(a), $n(nF, a, {
        default: () => ct.defaultRender(e)
      });
    }
  }
  return ct.defaultRender(e);
}, ak = (e, t) => {
  const n = e.elem, { formProps: r, emitChange: a } = e.context, o = e.parent, s = Qr(t.tagname), i = Qr(o == null ? void 0 : o.tagname), l = o == null ? void 0 : o.setupRes, u = v(n.prop), d = typeof u == "function" ? u(e) : u, p = v(l == null ? void 0 : l.formProp) || [], g = /^\^/.test(d) ? [d.replace("^", "")] : new Array().concat(p, d || []), b = g.join("."), m = { isFormElem: !1 };
  if (g.length > 0 && (m.formProp = b), ik(n, s, i)) {
    r == null || r.add(b), m.isFormElem = !0;
    const c = v(n.modelValue ?? n.value) ?? void 0, f = e.context.modelValue;
    En(v(f), b) == null && vs(v(f), b, c), m.prop = {
      ":modelValue": A(() => En(v(f), b)),
      "onUpdate:modelValue": (y) => {
        vs(v(f), b, y ?? c), a == null || a(b, y);
      }
    }, m.excludeKeys = ["value"], m.isFormItem = !0, m.isNeedElFormItem = tk(n), Ss(() => {
      r == null || r.delete(b);
    });
  }
  return m;
}, ok = (e, t, n) => {
  const r = v(e.size) || "default", a = mc(), o = t.formData, s = Zo(
    { validateOnRuleChange: !1, size: r },
    a.elForm || {}
  ), i = R(), l = {
    ...s,
    tag: tF,
    ref: (p) => i.value = p,
    cls: Mt(e, "column"),
    model: o
  }, u = (p, ...g) => {
    const b = En(v(i), p);
    if (b && Rr(b))
      return b(...g);
  }, d = {
    ...n,
    modelValue: o,
    formProps: t.formProps,
    emitChange: t.emitChange,
    tag: nk,
    setup: ak,
    render: rk
  };
  return {
    elem: l,
    context: d,
    formRef: i,
    formApi: u,
    refresh: () => {
    },
    validate: (...p) => u("validate", p)
  };
}, sk = [
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
], Ka = {
  elCheckboxGroup: Jx,
  elRadioGroup: dM,
  elSelect: xM
}, ik = (e, t, n) => v(e.isFormElem) === !0 ? !0 : sk.includes(t) ? n && Rn(Ka, n) ? Qr(Ka[n].name) !== t : !0 : !1;
var lk = "__lodash_hash_undefined__";
function uk(e) {
  return this.__data__.set(e, lk), this;
}
var ck = uk;
function fk(e) {
  return this.__data__.has(e);
}
var dk = fk, pk = Ns, vk = ck, mk = dk;
function Ga(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new pk(); ++t < n; )
    this.add(e[t]);
}
Ga.prototype.add = Ga.prototype.push = vk;
Ga.prototype.has = mk;
var gk = Ga;
function hk(e, t, n, r) {
  for (var a = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var bk = hk;
function yk(e) {
  return e !== e;
}
var _k = yk;
function $k(e, t, n) {
  for (var r = n - 1, a = e.length; ++r < a; )
    if (e[r] === t)
      return r;
  return -1;
}
var Ek = $k, Tk = bk, Ok = _k, Sk = Ek;
function wk(e, t, n) {
  return t === t ? Sk(e, t, n) : Tk(e, Ok, n);
}
var Ck = wk, Ak = Ck;
function Ik(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Ak(e, t, 0) > -1;
}
var Lk = Ik;
function Nk(e, t, n) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var Pk = Nk;
function Rk(e, t) {
  return e.has(t);
}
var Fk = Rk, xk = gk, Mk = Lk, kk = Pk, Dk = Is, jk = Xa, Vk = Fk, Bk = 200;
function Uk(e, t, n, r) {
  var a = -1, o = Mk, s = !0, i = e.length, l = [], u = t.length;
  if (!i)
    return l;
  n && (t = Dk(t, jk(n))), r ? (o = kk, s = !1) : t.length >= Bk && (o = Vk, s = !1, t = new xk(t));
  e:
    for (; ++a < i; ) {
      var d = e[a], p = n == null ? d : n(d);
      if (d = r || d !== 0 ? d : 0, s && p === p) {
        for (var g = u; g--; )
          if (t[g] === p)
            continue e;
        l.push(d);
      } else
        o(t, p, r) || l.push(d);
    }
  return l;
}
var Hk = Uk, Wk = Hk, zk = rf, Kk = pf, Du = cf, Gk = Kk(function(e, t) {
  return Du(e) ? Wk(e, zk(t, 1, Du, !0)) : [];
}), qk = Gk;
const Yk = /* @__PURE__ */ tt(qk);
function Xk(e) {
  return fc() ? (dc(e), !0) : !1;
}
function zt(e) {
  return typeof e == "function" ? e() : v(e);
}
const Jk = typeof window < "u", Bn = () => {
};
function Yd(e, t) {
  function n(...r) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return n;
}
function Zk(e, t = {}) {
  let n, r, a = Bn;
  const o = (i) => {
    clearTimeout(i), a(), a = Bn;
  };
  return (i) => {
    const l = zt(e), u = zt(t.maxWait);
    return n && o(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (o(r), r = null), Promise.resolve(i())) : new Promise((d, p) => {
      a = t.rejectOnCancel ? p : d, u && !r && (r = setTimeout(() => {
        n && o(n), r = null, d(i());
      }, u)), n = setTimeout(() => {
        r && o(r), r = null, d(i());
      }, l);
    });
  };
}
function Qk(e, t = !0, n = !0, r = !1) {
  let a = 0, o, s = !0, i = Bn, l;
  const u = () => {
    o && (clearTimeout(o), o = void 0, i(), i = Bn);
  };
  return (p) => {
    const g = zt(e), b = Date.now() - a, m = () => l = p();
    return u(), g <= 0 ? (a = Date.now(), m()) : (b > g && (n || !s) ? (a = Date.now(), m()) : t && (l = new Promise((c, h) => {
      i = r ? h : c, o = setTimeout(() => {
        a = Date.now(), s = !0, c(m()), u();
      }, Math.max(0, g - b));
    })), !n && !o && (o = setTimeout(() => s = !0, g)), s = !1, l);
  };
}
function Xd(e, t = 200, n = {}) {
  return Yd(
    Zk(t, n),
    e
  );
}
function e4(e, t = 200, n = !1, r = !0, a = !1) {
  return Yd(
    Qk(t, n, r, a),
    e
  );
}
function t4(e) {
  var t;
  const n = zt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Jd = Jk ? window : void 0;
function ht(...e) {
  let t, n, r, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, a] = e, t = Jd) : [t, n, r, a] = e, !t)
    return Bn;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], s = () => {
    o.forEach((d) => d()), o.length = 0;
  }, i = (d, p, g, b) => (d.addEventListener(p, g, b), () => d.removeEventListener(p, g, b)), l = J(
    () => [t4(t), zt(a)],
    ([d, p]) => {
      s(), d && o.push(
        ...n.flatMap((g) => r.map((b) => i(d, g, b, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), s();
  };
  return Xk(u), u;
}
function n4(e, t = {}) {
  const {
    delayEnter: n = 0,
    delayLeave: r = 0,
    window: a = Jd
  } = t, o = R(!1);
  let s;
  const i = (l) => {
    const u = l ? n : r;
    s && (clearTimeout(s), s = void 0), u ? s = setTimeout(() => o.value = l, u) : o.value = l;
  };
  return a && (ht(e, "mouseenter", () => i(!0), { passive: !0 }), ht(e, "mouseleave", () => i(!1), { passive: !0 })), o;
}
const ju = 1;
function r4(e, t = {}) {
  const {
    throttle: n = 0,
    idle: r = 200,
    onStop: a = Bn,
    onScroll: o = Bn,
    offset: s = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: i = {
      capture: !1,
      passive: !0
    },
    behavior: l = "auto"
  } = t, u = R(0), d = R(0), p = A({
    get() {
      return u.value;
    },
    set(T) {
      b(T, void 0);
    }
  }), g = A({
    get() {
      return d.value;
    },
    set(T) {
      b(void 0, T);
    }
  });
  function b(T, S) {
    var w, N, F;
    const x = zt(e);
    x && ((F = x instanceof Document ? document.body : x) == null || F.scrollTo({
      top: (w = zt(S)) != null ? w : g.value,
      left: (N = zt(T)) != null ? N : p.value,
      behavior: zt(l)
    }));
  }
  const m = R(!1), c = kt({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), h = kt({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), f = (T) => {
    m.value && (m.value = !1, h.left = !1, h.right = !1, h.top = !1, h.bottom = !1, a(T));
  }, y = Xd(f, n + r), E = (T) => {
    const S = T === document ? T.documentElement : T, { display: w, flexDirection: N } = getComputedStyle(S), F = S.scrollLeft;
    h.left = F < u.value, h.right = F > u.value;
    const x = Math.abs(F) <= 0 + (s.left || 0), H = Math.abs(F) + S.clientWidth >= S.scrollWidth - (s.right || 0) - ju;
    w === "flex" && N === "row-reverse" ? (c.left = H, c.right = x) : (c.left = x, c.right = H), u.value = F;
    let U = S.scrollTop;
    T === document && !U && (U = document.body.scrollTop), h.top = U < d.value, h.bottom = U > d.value;
    const D = Math.abs(U) <= 0 + (s.top || 0), Q = Math.abs(U) + S.clientHeight >= S.scrollHeight - (s.bottom || 0) - ju;
    w === "flex" && N === "column-reverse" ? (c.top = Q, c.bottom = D) : (c.top = D, c.bottom = Q), d.value = U;
  }, $ = (T) => {
    const S = T.target === document ? T.target.documentElement : T.target;
    E(S), m.value = !0, y(T), o(T);
  };
  return ht(
    e,
    "scroll",
    n ? e4($, n, !0, !1) : $,
    i
  ), ht(
    e,
    "scrollend",
    f,
    i
  ), {
    x: p,
    y: g,
    isScrolling: m,
    arrivedState: c,
    directions: h,
    measure() {
      const T = zt(e);
      T && E(T);
    }
  };
}
var a4 = Zc, o4 = 4;
function s4(e) {
  return a4(e, o4);
}
var i4 = s4;
const Oa = /* @__PURE__ */ tt(i4), l4 = { class: "els-form" }, u4 = {
  name: "ElsForm"
}, c4 = /* @__PURE__ */ Z({
  ...u4,
  props: {
    modelValue: { default: () => ({}) },
    column: null,
    size: { default: "small" },
    UIPluging: null,
    autoClean: { default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = ta(), o = R(Oa(v(r.modelValue)));
    let s = !1;
    const i = Xd((b, m) => {
      n("change", b, m), n("update:modelValue", Oa(v(o))), s === !1 && (s = !0, setTimeout(() => {
        s = !1;
      }, 2e3));
    }, 200);
    Ue(() => {
      n("update:modelValue", Oa(v(o)));
    }), J(Mt(r, "modelValue"), (b) => {
      s === !1 && b && (o.value = Oa(b)), s === !0 && (s = !1);
    });
    const l = kt(/* @__PURE__ */ new Set()), u = { formProps: l, formData: o, emitChange: i }, p = (r.UIPluging || ok)(r, u, { slots: a });
    if (r.autoClean) {
      let b = [];
      Ue(() => {
        b = Array.from(l);
      }), wt(() => {
        b = [], l.clear();
      }), J(l, (m) => {
        const c = Array.from(m), h = Yk(b, c);
        h.length > 0 && (h.forEach((f) => xa(v(o), f)), b = c, n("update:modelValue", v(o)));
      });
    }
    return t({ ...p, formProps: l, submit: async (b = (m, c) => c == null ? void 0 : [m, c]) => {
      try {
        await p.validate();
      } catch (c) {
        console.error("表单校验失败！====>", c);
      }
      const m = {};
      for (const c in l) {
        const h = En(v(o), c), f = b(c, h);
        if (f != null) {
          const [y, E] = f;
          vs(m, y, E);
        }
      }
      return m;
    } }), (b, m) => (k(), q("div", l4, [
      xe(v(If), {
        elem: v(p).elem,
        context: v(p).context
      }, null, 8, ["elem", "context"])
    ]));
  }
}), f4 = {
  install: (e) => {
    e.component("els-form", c4);
  }
};
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const wn = typeof window < "u";
let Tt, Un;
if (process.env.NODE_ENV !== "production") {
  const e = wn && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (Tt = (t) => e.mark(t), Un = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const d4 = /\{([0-9a-zA-Z]+)\}/g;
function Eo(e, ...t) {
  return t.length === 1 && Oe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(d4, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const p4 = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", mn = (e) => p4 ? Symbol(e) : e, v4 = (e, t, n) => m4({ l: e, k: t, s: n }), m4 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), rt = (e) => typeof e == "number" && isFinite(e), g4 = (e) => Ei(e) === "[object Date]", vr = (e) => Ei(e) === "[object RegExp]", To = (e) => fe(e) && Object.keys(e).length === 0;
function va(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const et = Object.assign;
let Vu;
const jr = () => Vu || (Vu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bu(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const h4 = Object.prototype.hasOwnProperty;
function $i(e, t) {
  return h4.call(e, t);
}
const Be = Array.isArray, Xe = (e) => typeof e == "function", z = (e) => typeof e == "string", Ne = (e) => typeof e == "boolean", Oe = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), Zd = Object.prototype.toString, Ei = (e) => Zd.call(e), fe = (e) => Ei(e) === "[object Object]", b4 = (e) => e == null ? "" : Be(e) || fe(e) && e.toString === Zd ? JSON.stringify(e, null, 2) : String(e), Uu = 2;
function y4(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const o = [];
  for (let s = 0; s < r.length; s++)
    if (a += r[s].length + 1, a >= t) {
      for (let i = s - Uu; i <= s + Uu || n > a; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        o.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const u = r[i].length;
        if (i === s) {
          const d = t - (a - u) + 1, p = Math.max(1, n > a ? u - d : n - t);
          o.push("   |  " + " ".repeat(d) + "^".repeat(p));
        } else if (i > s) {
          if (n > a) {
            const d = Math.max(Math.min(n - a, u), 1);
            o.push("   |  " + "^".repeat(d));
          }
          a += u + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function _4() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const a = e.get(n);
      a && a.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const a = e.get(n);
      a && a.splice(a.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((a) => a(r)), (e.get("*") || []).slice().map((a) => a(n, r));
    }
  };
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ne = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 15
}, $4 = {
  // tokenizer error messages
  [ne.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ne.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ne.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ne.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ne.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ne.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ne.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ne.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ne.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ne.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ne.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ne.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ne.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ne.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function Oo(e, t, n = {}) {
  const { domain: r, messages: a, args: o } = n, s = process.env.NODE_ENV !== "production" ? Eo((a || $4)[e] || "", ...o || []) : e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function E4(e) {
  throw e;
}
function T4(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ms(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const nn = " ", O4 = "\r", lt = `
`, S4 = String.fromCharCode(8232), w4 = String.fromCharCode(8233);
function C4(e) {
  const t = e;
  let n = 0, r = 1, a = 1, o = 0;
  const s = (w) => t[w] === O4 && t[w + 1] === lt, i = (w) => t[w] === lt, l = (w) => t[w] === w4, u = (w) => t[w] === S4, d = (w) => s(w) || i(w) || l(w) || u(w), p = () => n, g = () => r, b = () => a, m = () => o, c = (w) => s(w) || l(w) || u(w) ? lt : t[w], h = () => c(n), f = () => c(n + o);
  function y() {
    return o = 0, d(n) && (r++, a = 0), s(n) && n++, n++, a++, t[n];
  }
  function E() {
    return s(n + o) && o++, o++, t[n + o];
  }
  function $() {
    n = 0, r = 1, a = 1, o = 0;
  }
  function T(w = 0) {
    o = w;
  }
  function S() {
    const w = n + o;
    for (; w !== n; )
      y();
    o = 0;
  }
  return {
    index: p,
    line: g,
    column: b,
    peekOffset: m,
    charAt: c,
    currentChar: h,
    currentPeek: f,
    next: y,
    peek: E,
    reset: $,
    resetPeek: T,
    skipToPeek: S
  };
}
const gn = void 0, Hu = "'", A4 = "tokenizer";
function I4(e, t = {}) {
  const n = t.location !== !1, r = C4(e), a = () => r.index(), o = () => T4(r.line(), r.column(), r.index()), s = o(), i = a(), l = {
    currentType: 14,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: d } = t;
  function p(O, _, I, ...B) {
    const X = u();
    if (_.column += I, _.offset += I, d) {
      const oe = ms(X.startLoc, _), He = Oo(O, oe, {
        domain: A4,
        args: B
      });
      d(He);
    }
  }
  function g(O, _, I) {
    O.endLoc = o(), O.currentType = _;
    const B = { type: _ };
    return n && (B.loc = ms(O.startLoc, O.endLoc)), I != null && (B.value = I), B;
  }
  const b = (O) => g(
    O,
    14
    /* EOF */
  );
  function m(O, _) {
    return O.currentChar() === _ ? (O.next(), _) : (p(ne.EXPECTED_TOKEN, o(), 0, _), "");
  }
  function c(O) {
    let _ = "";
    for (; O.currentPeek() === nn || O.currentPeek() === lt; )
      _ += O.currentPeek(), O.peek();
    return _;
  }
  function h(O) {
    const _ = c(O);
    return O.skipToPeek(), _;
  }
  function f(O) {
    if (O === gn)
      return !1;
    const _ = O.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ === 95;
  }
  function y(O) {
    if (O === gn)
      return !1;
    const _ = O.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function E(O, _) {
    const { currentType: I } = _;
    if (I !== 2)
      return !1;
    c(O);
    const B = f(O.currentPeek());
    return O.resetPeek(), B;
  }
  function $(O, _) {
    const { currentType: I } = _;
    if (I !== 2)
      return !1;
    c(O);
    const B = O.currentPeek() === "-" ? O.peek() : O.currentPeek(), X = y(B);
    return O.resetPeek(), X;
  }
  function T(O, _) {
    const { currentType: I } = _;
    if (I !== 2)
      return !1;
    c(O);
    const B = O.currentPeek() === Hu;
    return O.resetPeek(), B;
  }
  function S(O, _) {
    const { currentType: I } = _;
    if (I !== 8)
      return !1;
    c(O);
    const B = O.currentPeek() === ".";
    return O.resetPeek(), B;
  }
  function w(O, _) {
    const { currentType: I } = _;
    if (I !== 9)
      return !1;
    c(O);
    const B = f(O.currentPeek());
    return O.resetPeek(), B;
  }
  function N(O, _) {
    const { currentType: I } = _;
    if (!(I === 8 || I === 12))
      return !1;
    c(O);
    const B = O.currentPeek() === ":";
    return O.resetPeek(), B;
  }
  function F(O, _) {
    const { currentType: I } = _;
    if (I !== 10)
      return !1;
    const B = () => {
      const oe = O.currentPeek();
      return oe === "{" ? f(O.peek()) : oe === "@" || oe === "%" || oe === "|" || oe === ":" || oe === "." || oe === nn || !oe ? !1 : oe === lt ? (O.peek(), B()) : f(oe);
    }, X = B();
    return O.resetPeek(), X;
  }
  function x(O) {
    c(O);
    const _ = O.currentPeek() === "|";
    return O.resetPeek(), _;
  }
  function H(O) {
    const _ = c(O), I = O.currentPeek() === "%" && O.peek() === "{";
    return O.resetPeek(), {
      isModulo: I,
      hasSpace: _.length > 0
    };
  }
  function U(O, _ = !0) {
    const I = (X = !1, oe = "", He = !1) => {
      const Fe = O.currentPeek();
      return Fe === "{" ? oe === "%" ? !1 : X : Fe === "@" || !Fe ? oe === "%" ? !0 : X : Fe === "%" ? (O.peek(), I(X, "%", !0)) : Fe === "|" ? oe === "%" || He ? !0 : !(oe === nn || oe === lt) : Fe === nn ? (O.peek(), I(!0, nn, He)) : Fe === lt ? (O.peek(), I(!0, lt, He)) : !0;
    }, B = I();
    return _ && O.resetPeek(), B;
  }
  function D(O, _) {
    const I = O.currentChar();
    return I === gn ? gn : _(I) ? (O.next(), I) : null;
  }
  function Q(O) {
    return D(O, (I) => {
      const B = I.charCodeAt(0);
      return B >= 97 && B <= 122 || // a-z
      B >= 65 && B <= 90 || // A-Z
      B >= 48 && B <= 57 || // 0-9
      B === 95 || // _
      B === 36;
    });
  }
  function ue(O) {
    return D(O, (I) => {
      const B = I.charCodeAt(0);
      return B >= 48 && B <= 57;
    });
  }
  function K(O) {
    return D(O, (I) => {
      const B = I.charCodeAt(0);
      return B >= 48 && B <= 57 || // 0-9
      B >= 65 && B <= 70 || // A-F
      B >= 97 && B <= 102;
    });
  }
  function j(O) {
    let _ = "", I = "";
    for (; _ = ue(O); )
      I += _;
    return I;
  }
  function ie(O) {
    h(O);
    const _ = O.currentChar();
    return _ !== "%" && p(ne.EXPECTED_TOKEN, o(), 0, _), O.next(), "%";
  }
  function me(O) {
    let _ = "";
    for (; ; ) {
      const I = O.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
        break;
      if (I === "%")
        if (U(O))
          _ += I, O.next();
        else
          break;
      else if (I === nn || I === lt)
        if (U(O))
          _ += I, O.next();
        else {
          if (x(O))
            break;
          _ += I, O.next();
        }
      else
        _ += I, O.next();
    }
    return _;
  }
  function De(O) {
    h(O);
    let _ = "", I = "";
    for (; _ = Q(O); )
      I += _;
    return O.currentChar() === gn && p(ne.UNTERMINATED_CLOSING_BRACE, o(), 0), I;
  }
  function ze(O) {
    h(O);
    let _ = "";
    return O.currentChar() === "-" ? (O.next(), _ += `-${j(O)}`) : _ += j(O), O.currentChar() === gn && p(ne.UNTERMINATED_CLOSING_BRACE, o(), 0), _;
  }
  function je(O) {
    h(O), m(O, "'");
    let _ = "", I = "";
    const B = (oe) => oe !== Hu && oe !== lt;
    for (; _ = D(O, B); )
      _ === "\\" ? I += Ke(O) : I += _;
    const X = O.currentChar();
    return X === lt || X === gn ? (p(ne.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), X === lt && (O.next(), m(O, "'")), I) : (m(O, "'"), I);
  }
  function Ke(O) {
    const _ = O.currentChar();
    switch (_) {
      case "\\":
      case "'":
        return O.next(), `\\${_}`;
      case "u":
        return Ve(O, _, 4);
      case "U":
        return Ve(O, _, 6);
      default:
        return p(ne.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, _), "";
    }
  }
  function Ve(O, _, I) {
    m(O, _);
    let B = "";
    for (let X = 0; X < I; X++) {
      const oe = K(O);
      if (!oe) {
        p(ne.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${_}${B}${O.currentChar()}`);
        break;
      }
      B += oe;
    }
    return `\\${_}${B}`;
  }
  function Te(O) {
    h(O);
    let _ = "", I = "";
    const B = (X) => X !== "{" && X !== "}" && X !== nn && X !== lt;
    for (; _ = D(O, B); )
      I += _;
    return I;
  }
  function Ge(O) {
    let _ = "", I = "";
    for (; _ = Q(O); )
      I += _;
    return I;
  }
  function W(O) {
    const _ = (I = !1, B) => {
      const X = O.currentChar();
      return X === "{" || X === "%" || X === "@" || X === "|" || !X || X === nn ? B : X === lt ? (B += X, O.next(), _(I, B)) : (B += X, O.next(), _(!0, B));
    };
    return _(!1, "");
  }
  function G(O) {
    h(O);
    const _ = m(
      O,
      "|"
      /* Pipe */
    );
    return h(O), _;
  }
  function le(O, _) {
    let I = null;
    switch (O.currentChar()) {
      case "{":
        return _.braceNest >= 1 && p(ne.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), O.next(), I = g(
          _,
          2,
          "{"
          /* BraceLeft */
        ), h(O), _.braceNest++, I;
      case "}":
        return _.braceNest > 0 && _.currentType === 2 && p(ne.EMPTY_PLACEHOLDER, o(), 0), O.next(), I = g(
          _,
          3,
          "}"
          /* BraceRight */
        ), _.braceNest--, _.braceNest > 0 && h(O), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), I;
      case "@":
        return _.braceNest > 0 && p(ne.UNTERMINATED_CLOSING_BRACE, o(), 0), I = ce(O, _) || b(_), _.braceNest = 0, I;
      default:
        let X = !0, oe = !0, He = !0;
        if (x(O))
          return _.braceNest > 0 && p(ne.UNTERMINATED_CLOSING_BRACE, o(), 0), I = g(_, 1, G(O)), _.braceNest = 0, _.inLinked = !1, I;
        if (_.braceNest > 0 && (_.currentType === 5 || _.currentType === 6 || _.currentType === 7))
          return p(ne.UNTERMINATED_CLOSING_BRACE, o(), 0), _.braceNest = 0, _e(O, _);
        if (X = E(O, _))
          return I = g(_, 5, De(O)), h(O), I;
        if (oe = $(O, _))
          return I = g(_, 6, ze(O)), h(O), I;
        if (He = T(O, _))
          return I = g(_, 7, je(O)), h(O), I;
        if (!X && !oe && !He)
          return I = g(_, 13, Te(O)), p(ne.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, I.value), h(O), I;
        break;
    }
    return I;
  }
  function ce(O, _) {
    const { currentType: I } = _;
    let B = null;
    const X = O.currentChar();
    switch ((I === 8 || I === 9 || I === 12 || I === 10) && (X === lt || X === nn) && p(ne.INVALID_LINKED_FORMAT, o(), 0), X) {
      case "@":
        return O.next(), B = g(
          _,
          8,
          "@"
          /* LinkedAlias */
        ), _.inLinked = !0, B;
      case ".":
        return h(O), O.next(), g(
          _,
          9,
          "."
          /* LinkedDot */
        );
      case ":":
        return h(O), O.next(), g(
          _,
          10,
          ":"
          /* LinkedDelimiter */
        );
      default:
        return x(O) ? (B = g(_, 1, G(O)), _.braceNest = 0, _.inLinked = !1, B) : S(O, _) || N(O, _) ? (h(O), ce(O, _)) : w(O, _) ? (h(O), g(_, 12, Ge(O))) : F(O, _) ? (h(O), X === "{" ? le(O, _) || B : g(_, 11, W(O))) : (I === 8 && p(ne.INVALID_LINKED_FORMAT, o(), 0), _.braceNest = 0, _.inLinked = !1, _e(O, _));
    }
  }
  function _e(O, _) {
    let I = {
      type: 14
      /* EOF */
    };
    if (_.braceNest > 0)
      return le(O, _) || b(_);
    if (_.inLinked)
      return ce(O, _) || b(_);
    switch (O.currentChar()) {
      case "{":
        return le(O, _) || b(_);
      case "}":
        return p(ne.UNBALANCED_CLOSING_BRACE, o(), 0), O.next(), g(
          _,
          3,
          "}"
          /* BraceRight */
        );
      case "@":
        return ce(O, _) || b(_);
      default:
        if (x(O))
          return I = g(_, 1, G(O)), _.braceNest = 0, _.inLinked = !1, I;
        const { isModulo: X, hasSpace: oe } = H(O);
        if (X)
          return oe ? g(_, 0, me(O)) : g(_, 4, ie(O));
        if (U(O))
          return g(_, 0, me(O));
        break;
    }
    return I;
  }
  function Re() {
    const { currentType: O, offset: _, startLoc: I, endLoc: B } = l;
    return l.lastType = O, l.lastOffset = _, l.lastStartLoc = I, l.lastEndLoc = B, l.offset = a(), l.startLoc = o(), r.currentChar() === gn ? g(
      l,
      14
      /* EOF */
    ) : _e(r, l);
  }
  return {
    nextToken: Re,
    currentOffset: a,
    currentPosition: o,
    context: u
  };
}
const L4 = "parser", N4 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function P4(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function R4(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, y, E, $, ...T) {
    const S = f.currentPosition();
    if (S.offset += $, S.column += $, n) {
      const w = ms(E, S), N = Oo(y, w, {
        domain: L4,
        args: T
      });
      n(N);
    }
  }
  function a(f, y, E) {
    const $ = {
      type: f,
      start: y,
      end: y
    };
    return t && ($.loc = { start: E, end: E }), $;
  }
  function o(f, y, E, $) {
    f.end = y, $ && (f.type = $), t && f.loc && (f.loc.end = E);
  }
  function s(f, y) {
    const E = f.context(), $ = a(3, E.offset, E.startLoc);
    return $.value = y, o($, f.currentOffset(), f.currentPosition()), $;
  }
  function i(f, y) {
    const E = f.context(), { lastOffset: $, lastStartLoc: T } = E, S = a(5, $, T);
    return S.index = parseInt(y, 10), f.nextToken(), o(S, f.currentOffset(), f.currentPosition()), S;
  }
  function l(f, y) {
    const E = f.context(), { lastOffset: $, lastStartLoc: T } = E, S = a(4, $, T);
    return S.key = y, f.nextToken(), o(S, f.currentOffset(), f.currentPosition()), S;
  }
  function u(f, y) {
    const E = f.context(), { lastOffset: $, lastStartLoc: T } = E, S = a(9, $, T);
    return S.value = y.replace(N4, P4), f.nextToken(), o(S, f.currentOffset(), f.currentPosition()), S;
  }
  function d(f) {
    const y = f.nextToken(), E = f.context(), { lastOffset: $, lastStartLoc: T } = E, S = a(8, $, T);
    return y.type !== 12 ? (r(f, ne.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), S.value = "", o(S, $, T), {
      nextConsumeToken: y,
      node: S
    }) : (y.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ut(y)), S.value = y.value || "", o(S, f.currentOffset(), f.currentPosition()), {
      node: S
    });
  }
  function p(f, y) {
    const E = f.context(), $ = a(7, E.offset, E.startLoc);
    return $.value = y, o($, f.currentOffset(), f.currentPosition()), $;
  }
  function g(f) {
    const y = f.context(), E = a(6, y.offset, y.startLoc);
    let $ = f.nextToken();
    if ($.type === 9) {
      const T = d(f);
      E.modifier = T.node, $ = T.nextConsumeToken || f.nextToken();
    }
    switch ($.type !== 10 && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut($)), $ = f.nextToken(), $.type === 2 && ($ = f.nextToken()), $.type) {
      case 11:
        $.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut($)), E.key = p(f, $.value || "");
        break;
      case 5:
        $.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut($)), E.key = l(f, $.value || "");
        break;
      case 6:
        $.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut($)), E.key = i(f, $.value || "");
        break;
      case 7:
        $.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut($)), E.key = u(f, $.value || "");
        break;
      default:
        r(f, ne.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const T = f.context(), S = a(7, T.offset, T.startLoc);
        return S.value = "", o(S, T.offset, T.startLoc), E.key = S, o(E, T.offset, T.startLoc), {
          nextConsumeToken: $,
          node: E
        };
    }
    return o(E, f.currentOffset(), f.currentPosition()), {
      node: E
    };
  }
  function b(f) {
    const y = f.context(), E = y.currentType === 1 ? f.currentOffset() : y.offset, $ = y.currentType === 1 ? y.endLoc : y.startLoc, T = a(2, E, $);
    T.items = [];
    let S = null;
    do {
      const F = S || f.nextToken();
      switch (S = null, F.type) {
        case 0:
          F.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(F)), T.items.push(s(f, F.value || ""));
          break;
        case 6:
          F.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(F)), T.items.push(i(f, F.value || ""));
          break;
        case 5:
          F.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(F)), T.items.push(l(f, F.value || ""));
          break;
        case 7:
          F.value == null && r(f, ne.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(F)), T.items.push(u(f, F.value || ""));
          break;
        case 8:
          const x = g(f);
          T.items.push(x.node), S = x.nextConsumeToken || null;
          break;
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const w = y.currentType === 1 ? y.lastOffset : f.currentOffset(), N = y.currentType === 1 ? y.lastEndLoc : f.currentPosition();
    return o(T, w, N), T;
  }
  function m(f, y, E, $) {
    const T = f.context();
    let S = $.items.length === 0;
    const w = a(1, y, E);
    w.cases = [], w.cases.push($);
    do {
      const N = b(f);
      S || (S = N.items.length === 0), w.cases.push(N);
    } while (T.currentType !== 14);
    return S && r(f, ne.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), o(w, f.currentOffset(), f.currentPosition()), w;
  }
  function c(f) {
    const y = f.context(), { offset: E, startLoc: $ } = y, T = b(f);
    return y.currentType === 14 ? T : m(f, E, $, T);
  }
  function h(f) {
    const y = I4(f, et({}, e)), E = y.context(), $ = a(0, E.offset, E.startLoc);
    return t && $.loc && ($.loc.source = f), $.body = c(y), E.currentType !== 14 && r(y, ne.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, f[E.offset] || ""), o($, y.currentOffset(), y.currentPosition()), $;
  }
  return { parse: h };
}
function Ut(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function F4(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function Wu(e, t) {
  for (let n = 0; n < e.length; n++)
    Ti(e[n], t);
}
function Ti(e, t) {
  switch (e.type) {
    case 1:
      Wu(e.cases, t), t.helper(
        "plural"
        /* PLURAL */
      );
      break;
    case 2:
      Wu(e.items, t);
      break;
    case 6:
      Ti(e.key, t), t.helper(
        "linked"
        /* LINKED */
      ), t.helper(
        "type"
        /* TYPE */
      );
      break;
    case 5:
      t.helper(
        "interpolate"
        /* INTERPOLATE */
      ), t.helper(
        "list"
        /* LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* INTERPOLATE */
      ), t.helper(
        "named"
        /* NAMED */
      );
      break;
  }
}
function x4(e, t = {}) {
  const n = F4(e);
  n.helper(
    "normalize"
    /* NORMALIZE */
  ), e.body && Ti(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function M4(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: a, needIndent: o } = t, s = {
    source: e.loc.source,
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: o,
    indentLevel: 0
  }, i = () => s;
  function l(c, h) {
    s.code += c;
  }
  function u(c, h = !0) {
    const f = h ? a : "";
    l(o ? f + "  ".repeat(c) : f);
  }
  function d(c = !0) {
    const h = ++s.indentLevel;
    c && u(h);
  }
  function p(c = !0) {
    const h = --s.indentLevel;
    c && u(h);
  }
  function g() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: d,
    deindent: p,
    newline: g,
    helper: (c) => `_${c}`,
    needIndent: () => s.needIndent
  };
}
function k4(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* LINKED */
  )}(`), mr(e, t.key), t.modifier ? (e.push(", "), mr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function D4(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let o = 0; o < a && (mr(e, t.items[o]), o !== a - 1); o++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function j4(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let o = 0; o < a && (mr(e, t.cases[o]), o !== a - 1); o++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function V4(e, t) {
  t.body ? mr(e, t.body) : e.push("null");
}
function mr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      V4(e, t);
      break;
    case 1:
      j4(e, t);
      break;
    case 2:
      D4(e, t);
      break;
    case 6:
      k4(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* INTERPOLATE */
      )}(${n(
        "list"
        /* LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* INTERPOLATE */
      )}(${n(
        "named"
        /* NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw new Error(`unhandled codegen node type: ${t.type}`);
  }
}
const B4 = (e, t = {}) => {
  const n = z(t.mode) ? t.mode : "normal", r = z(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = M4(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: o,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), i.length > 0 && (l.push(`const { ${i.map((p) => `${p}: _${p}`).join(", ")} } = ctx`), l.newline()), l.push("return "), mr(l, e), l.deindent(s), l.push("}");
  const { code: u, map: d } = l.context();
  return {
    ast: e,
    code: u,
    map: d ? d.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function U4(e, t = {}) {
  const n = et({}, t), a = R4(n).parse(e);
  return x4(a, n), B4(a, n);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Qd = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const An = [];
An[
  0
  /* BEFORE_PATH */
] = {
  w: [
    0
    /* BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  o: [
    7
    /* AFTER_PATH */
  ]
};
An[
  1
  /* IN_PATH */
] = {
  w: [
    1
    /* IN_PATH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2
    /* BEFORE_IDENT */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  o: [
    7
    /* AFTER_PATH */
  ]
};
An[
  2
  /* BEFORE_IDENT */
] = {
  w: [
    2
    /* BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* APPEND */
  ],
  [
    0
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ]
};
An[
  3
  /* IN_IDENT */
] = {
  i: [
    3,
    0
    /* APPEND */
  ],
  [
    0
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ],
  w: [
    1,
    1
    /* PUSH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2,
    1
    /* PUSH */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    1
    /* PUSH */
  ],
  o: [
    7,
    1
    /* PUSH */
  ]
};
An[
  4
  /* IN_SUB_PATH */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    5,
    0
    /* APPEND */
  ],
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    2
    /* INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* RIGHT_BRACKET */
  ]: [
    1,
    3
    /* PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* APPEND */
  ]
};
An[
  5
  /* IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* APPEND */
  ]
};
An[
  6
  /* IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* APPEND */
  ]
};
const H4 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function W4(e) {
  return H4.test(e);
}
function z4(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function K4(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function G4(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : W4(t) ? z4(t) : "*" + t;
}
function q4(e) {
  const t = [];
  let n = -1, r = 0, a = 0, o, s, i, l, u, d, p;
  const g = [];
  g[
    0
    /* APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, g[
    1
    /* PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, g[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    g[
      0
      /* APPEND */
    ](), a++;
  }, g[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, r = 4, g[
        0
        /* APPEND */
      ]();
    else {
      if (a = 0, s === void 0 || (s = G4(s), s === !1))
        return !1;
      g[
        1
        /* PUSH */
      ]();
    }
  };
  function b() {
    const m = e[n + 1];
    if (r === 5 && m === "'" || r === 6 && m === '"')
      return n++, i = "\\" + m, g[
        0
        /* APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, o = e[n], !(o === "\\" && b())) {
      if (l = K4(o), p = An[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = g[u[1]], d && (i = o, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const zu = /* @__PURE__ */ new Map();
function Y4(e, t) {
  return Oe(e) ? e[t] : null;
}
function X4(e, t) {
  if (!Oe(e))
    return null;
  let n = zu.get(t);
  if (n || (n = q4(t), n && zu.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, o = 0;
  for (; o < r; ) {
    const s = a[n[o]];
    if (s === void 0)
      return null;
    a = s, o++;
  }
  return a;
}
const J4 = (e) => e, Z4 = (e) => "", Q4 = "text", eD = (e) => e.length === 0 ? "" : e.join(""), tD = b4;
function Ku(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function nD(e) {
  const t = rt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (rt(e.named.count) || rt(e.named.n)) ? rt(e.named.count) ? e.named.count : rt(e.named.n) ? e.named.n : t : t;
}
function rD(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function aD(e = {}) {
  const t = e.locale, n = nD(e), r = Oe(e.pluralRules) && z(t) && Xe(e.pluralRules[t]) ? e.pluralRules[t] : Ku, a = Oe(e.pluralRules) && z(t) && Xe(e.pluralRules[t]) ? Ku : void 0, o = (f) => f[r(n, f.length, a)], s = e.list || [], i = (f) => s[f], l = e.named || {};
  rt(e.pluralIndex) && rD(n, l);
  const u = (f) => l[f];
  function d(f) {
    const y = Xe(e.messages) ? e.messages(f) : Oe(e.messages) ? e.messages[f] : !1;
    return y || (e.parent ? e.parent.message(f) : Z4);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : J4, g = fe(e.processor) && Xe(e.processor.normalize) ? e.processor.normalize : eD, b = fe(e.processor) && Xe(e.processor.interpolate) ? e.processor.interpolate : tD, m = fe(e.processor) && z(e.processor.type) ? e.processor.type : Q4, h = {
    list: i,
    named: u,
    plural: o,
    linked: (f, ...y) => {
      const [E, $] = y;
      let T = "text", S = "";
      y.length === 1 ? Oe(E) ? (S = E.modifier || S, T = E.type || T) : z(E) && (S = E || S) : y.length === 2 && (z(E) && (S = E || S), z($) && (T = $ || T));
      let w = d(f)(h);
      return T === "vnode" && Be(w) && S && (w = w[0]), S ? p(S)(w, T) : w;
    },
    message: d,
    type: m,
    interpolate: b,
    normalize: g
  };
  return h;
}
let ea = null;
function oD(e) {
  ea = e;
}
function sD(e, t, n) {
  ea && ea.emit(Qd.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const iD = /* @__PURE__ */ lD(Qd.FunctionTranslate);
function lD(e) {
  return (t) => ea && ea.emit(e, t);
}
const $t = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, uD = {
  [$t.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [$t.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [$t.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [$t.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [$t.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [$t.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function gr(e, ...t) {
  return Eo(uD[e], ...t);
}
function cD(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Be(t) ? t : Oe(t) ? Object.keys(t) : z(t) ? [t] : [n]
  ])];
}
function ep(e, t, n) {
  const r = z(n) ? n : wo, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let o = a.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let s = [n];
    for (; Be(s); )
      s = Gu(o, s, t);
    const i = Be(t) || !fe(t) ? t : t.default ? t.default : null;
    s = z(i) ? [i] : i, Be(s) && Gu(o, s, !1), a.__localeChainCache.set(r, o);
  }
  return o;
}
function Gu(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && Ne(r); a++) {
    const o = t[a];
    z(o) && (r = fD(e, t[a], n));
  }
  return r;
}
function fD(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const o = a.join("-");
    r = dD(e, o, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function dD(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (Be(n) || fe(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const pD = "9.2.2", So = -1, wo = "en-US", qa = "", qu = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function vD() {
  return {
    upper: (e, t) => t === "text" && z(e) ? e.toUpperCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && z(e) ? e.toLowerCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && z(e) ? qu(e) : t === "vnode" && Oe(e) && "__v_isVNode" in e ? qu(e.children) : e
  };
}
let tp;
function mD(e) {
  tp = e;
}
let np;
function gD(e) {
  np = e;
}
let rp;
function hD(e) {
  rp = e;
}
let ap = null;
const Yu = (e) => {
  ap = e;
}, bD = () => ap;
let op = null;
const Xu = (e) => {
  op = e;
}, yD = () => op;
let Ju = 0;
function _D(e = {}) {
  const t = z(e.version) ? e.version : pD, n = z(e.locale) ? e.locale : wo, r = Be(e.fallbackLocale) || fe(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, a = fe(e.messages) ? e.messages : { [n]: {} }, o = fe(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, s = fe(e.numberFormats) ? e.numberFormats : { [n]: {} }, i = et({}, e.modifiers || {}, vD()), l = e.pluralRules || {}, u = Xe(e.missing) ? e.missing : null, d = Ne(e.missingWarn) || vr(e.missingWarn) ? e.missingWarn : !0, p = Ne(e.fallbackWarn) || vr(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, b = !!e.unresolving, m = Xe(e.postTranslation) ? e.postTranslation : null, c = fe(e.processor) ? e.processor : null, h = Ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, f = !!e.escapeParameter, y = Xe(e.messageCompiler) ? e.messageCompiler : tp, E = Xe(e.messageResolver) ? e.messageResolver : np || Y4, $ = Xe(e.localeFallbacker) ? e.localeFallbacker : rp || cD, T = Oe(e.fallbackContext) ? e.fallbackContext : void 0, S = Xe(e.onWarn) ? e.onWarn : va, w = e, N = Oe(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), F = Oe(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), x = Oe(w.__meta) ? w.__meta : {};
  Ju++;
  const H = {
    version: t,
    cid: Ju,
    locale: n,
    fallbackLocale: r,
    messages: a,
    modifiers: i,
    pluralRules: l,
    missing: u,
    missingWarn: d,
    fallbackWarn: p,
    fallbackFormat: g,
    unresolving: b,
    postTranslation: m,
    processor: c,
    warnHtmlMessage: h,
    escapeParameter: f,
    messageCompiler: y,
    messageResolver: E,
    localeFallbacker: $,
    fallbackContext: T,
    onWarn: S,
    __meta: x
  };
  return H.datetimeFormats = o, H.numberFormats = s, H.__datetimeFormatters = N, H.__numberFormatters = F, process.env.NODE_ENV !== "production" && (H.__v_emitter = w.__v_emitter != null ? w.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && sD(H, t, x), H;
}
function Co(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function sp(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Oi(e, t, n, r, a) {
  const { missing: o, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (o !== null) {
    const i = o(e, n, t, a);
    return z(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && sp(r, t) && s(gr($t.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Pr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
const $D = /<\/?[\w\s="/.':;#-\/]+>/, ED = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function TD(e, t) {
  (Ne(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && $D.test(e) && va(Eo(ED, { source: e }));
}
const OD = (e) => e;
let Zu = /* @__PURE__ */ Object.create(null);
function SD(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && TD(e, t);
    const r = (t.onCacheKey || OD)(e), a = Zu[r];
    if (a)
      return a;
    let o = !1;
    const s = t.onError || E4;
    t.onError = (u) => {
      o = !0, s(u);
    };
    const { code: i } = U4(e, t), l = new Function(`return ${i}`)();
    return o ? l : Zu[r] = l;
  }
}
let ip = ne.__EXTEND_POINT__;
const Ho = () => ++ip, on = {
  INVALID_ARGUMENT: ip,
  INVALID_DATE_ARGUMENT: Ho(),
  INVALID_ISO_DATE_ARGUMENT: Ho(),
  __EXTEND_POINT__: Ho()
  // 18
};
function ar(e) {
  return Oo(e, null, process.env.NODE_ENV !== "production" ? { messages: wD } : void 0);
}
const wD = {
  [on.INVALID_ARGUMENT]: "Invalid arguments",
  [on.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [on.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, Qu = () => "", Wt = (e) => Xe(e);
function ec(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: o, fallbackLocale: s, messages: i } = e, [l, u] = gs(...t), d = Ne(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Ne(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = Ne(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, m = z(u.default) || Ne(u.default) ? Ne(u.default) ? o ? l : () => l : u.default : n ? o ? l : () => l : "", c = n || m !== "", h = z(u.locale) ? u.locale : e.locale;
  g && CD(u);
  let [f, y, E] = b ? [
    l,
    h,
    i[h] || {}
  ] : lp(e, l, h, s, p, d), $ = f, T = l;
  if (!b && !(z($) || Wt($)) && c && ($ = m, T = $), !b && (!(z($) || Wt($)) || !z(y)))
    return a ? So : l;
  if (process.env.NODE_ENV !== "production" && z($) && e.messageCompiler == null)
    return va(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let S = !1;
  const w = () => {
    S = !0;
  }, N = Wt($) ? $ : up(e, l, y, $, T, w);
  if (S)
    return $;
  const F = LD(e, y, E, u), x = aD(F), H = AD(e, N, x), U = r ? r(H, l) : H;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const D = {
      timestamp: Date.now(),
      key: z(l) ? l : Wt($) ? $.key : "",
      locale: y || (Wt($) ? $.locale : ""),
      format: z($) ? $ : Wt($) ? $.source : "",
      message: U
    };
    D.meta = et({}, e.__meta, bD() || {}), iD(D);
  }
  return U;
}
function CD(e) {
  Be(e.list) ? e.list = e.list.map((t) => z(t) ? Bu(t) : t) : Oe(e.named) && Object.keys(e.named).forEach((t) => {
    z(e.named[t]) && (e.named[t] = Bu(e.named[t]));
  });
}
function lp(e, t, n, r, a, o) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let p = {}, g, b = null, m = n, c = null;
  const h = "translate";
  for (let f = 0; f < d.length; f++) {
    if (g = c = d[f], process.env.NODE_ENV !== "production" && n !== g && Co(a, t) && i(gr($t.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: g
    })), process.env.NODE_ENV !== "production" && n !== g) {
      const S = e.__v_emitter;
      S && S.emit("fallback", {
        type: h,
        key: t,
        from: m,
        to: c,
        groupId: `${h}:${t}`
      });
    }
    p = s[g] || {};
    let y = null, E, $;
    if (process.env.NODE_ENV !== "production" && wn && (y = window.performance.now(), E = "intlify-message-resolve-start", $ = "intlify-message-resolve-end", Tt && Tt(E)), (b = l(p, t)) === null && (b = p[t]), process.env.NODE_ENV !== "production" && wn) {
      const S = window.performance.now(), w = e.__v_emitter;
      w && y && b && w.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: b,
        time: S - y,
        groupId: `${h}:${t}`
      }), E && $ && Tt && Un && (Tt($), Un("intlify message resolve", E, $));
    }
    if (z(b) || Xe(b))
      break;
    const T = Oi(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      g,
      o,
      h
    );
    T !== t && (b = T), m = c;
  }
  return [b, g, p];
}
function up(e, t, n, r, a, o) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Wt(r)) {
    const g = r;
    return g.locale = g.locale || n, g.key = g.key || t, g;
  }
  if (s == null) {
    const g = () => r;
    return g.locale = n, g.key = t, g;
  }
  let l = null, u, d;
  process.env.NODE_ENV !== "production" && wn && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", Tt && Tt(u));
  const p = s(r, ID(e, n, a, r, i, o));
  if (process.env.NODE_ENV !== "production" && wn) {
    const g = window.performance.now(), b = e.__v_emitter;
    b && l && b.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: g - l,
      groupId: `translate:${t}`
    }), u && d && Tt && Un && (Tt(d), Un("intlify message compilation", u, d));
  }
  return p.locale = n, p.key = t, p.source = r, p;
}
function AD(e, t, n) {
  let r = null, a, o;
  process.env.NODE_ENV !== "production" && wn && (r = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", Tt && Tt(a));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && wn) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: i - r,
      groupId: `translate:${t.key}`
    }), a && o && Tt && Un && (Tt(o), Un("intlify message evaluation", a, o));
  }
  return s;
}
function gs(...e) {
  const [t, n, r] = e, a = {};
  if (!z(t) && !rt(t) && !Wt(t))
    throw ar(on.INVALID_ARGUMENT);
  const o = rt(t) ? String(t) : (Wt(t), t);
  return rt(n) ? a.plural = n : z(n) ? a.default = n : fe(n) && !To(n) ? a.named = n : Be(n) && (a.list = n), rt(r) ? a.plural = r : z(r) ? a.default = r : fe(r) && et(a, r), [o, a];
}
function ID(e, t, n, r, a, o) {
  return {
    warnHtmlMessage: a,
    onError: (s) => {
      if (o && o(s), process.env.NODE_ENV !== "production") {
        const i = `Message compilation error: ${s.message}`, l = s.location && y4(r, s.location.start.offset, s.location.end.offset), u = e.__v_emitter;
        u && u.emit("compile-error", {
          message: r,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(l ? `${i}
${l}` : i);
      } else
        throw s;
    },
    onCacheKey: (s) => v4(t, n, s)
  };
}
function LD(e, t, n, r) {
  const { modifiers: a, pluralRules: o, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, g = {
    locale: t,
    modifiers: a,
    pluralRules: o,
    messages: (b) => {
      let m = s(n, b);
      if (m == null && d) {
        const [, , c] = lp(d, b, t, i, l, u);
        m = s(c, b);
      }
      if (z(m)) {
        let c = !1;
        const f = up(e, b, t, m, b, () => {
          c = !0;
        });
        return c ? Qu : f;
      } else
        return Wt(m) ? m : Qu;
    }
  };
  return e.processor && (g.processor = e.processor), r.list && (g.list = r.list), r.named && (g.named = r.named), rt(r.plural) && (g.pluralIndex = r.plural), g;
}
const tc = typeof Intl < "u", cp = {
  dateTimeFormat: tc && typeof Intl.DateTimeFormat < "u",
  numberFormat: tc && typeof Intl.NumberFormat < "u"
};
function nc(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: o, localeFallbacker: s } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !cp.dateTimeFormat)
    return o(gr($t.CANNOT_FORMAT_DATE)), qa;
  const [l, u, d, p] = hs(...t), g = Ne(d.missingWarn) ? d.missingWarn : e.missingWarn, b = Ne(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, m = !!d.part, c = z(d.locale) ? d.locale : e.locale, h = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    c
  );
  if (!z(l) || l === "")
    return new Intl.DateTimeFormat(c, p).format(u);
  let f = {}, y, E = null, $ = c, T = null;
  const S = "datetime format";
  for (let F = 0; F < h.length; F++) {
    if (y = T = h[F], process.env.NODE_ENV !== "production" && c !== y && Co(b, l) && o(gr($t.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && c !== y) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: S,
        key: l,
        from: $,
        to: T,
        groupId: `${S}:${l}`
      });
    }
    if (f = n[y] || {}, E = f[l], fe(E))
      break;
    Oi(e, l, y, g, S), $ = T;
  }
  if (!fe(E) || !z(y))
    return r ? So : l;
  let w = `${y}__${l}`;
  To(p) || (w = `${w}__${JSON.stringify(p)}`);
  let N = i.get(w);
  return N || (N = new Intl.DateTimeFormat(y, et({}, E, p)), i.set(w, N)), m ? N.formatToParts(u) : N.format(u);
}
const fp = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function hs(...e) {
  const [t, n, r, a] = e, o = {};
  let s = {}, i;
  if (z(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw ar(on.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw ar(on.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (g4(t)) {
    if (isNaN(t.getTime()))
      throw ar(on.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (rt(t))
    i = t;
  else
    throw ar(on.INVALID_ARGUMENT);
  return z(n) ? o.key = n : fe(n) && Object.keys(n).forEach((l) => {
    fp.includes(l) ? s[l] = n[l] : o[l] = n[l];
  }), z(r) ? o.locale = r : fe(r) && (s = r), fe(a) && (s = a), [o.key || "", i, o, s];
}
function rc(e, t, n) {
  const r = e;
  for (const a in n) {
    const o = `${t}__${a}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function ac(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: o, localeFallbacker: s } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !cp.numberFormat)
    return o(gr($t.CANNOT_FORMAT_NUMBER)), qa;
  const [l, u, d, p] = bs(...t), g = Ne(d.missingWarn) ? d.missingWarn : e.missingWarn, b = Ne(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, m = !!d.part, c = z(d.locale) ? d.locale : e.locale, h = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    c
  );
  if (!z(l) || l === "")
    return new Intl.NumberFormat(c, p).format(u);
  let f = {}, y, E = null, $ = c, T = null;
  const S = "number format";
  for (let F = 0; F < h.length; F++) {
    if (y = T = h[F], process.env.NODE_ENV !== "production" && c !== y && Co(b, l) && o(gr($t.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && c !== y) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: S,
        key: l,
        from: $,
        to: T,
        groupId: `${S}:${l}`
      });
    }
    if (f = n[y] || {}, E = f[l], fe(E))
      break;
    Oi(e, l, y, g, S), $ = T;
  }
  if (!fe(E) || !z(y))
    return r ? So : l;
  let w = `${y}__${l}`;
  To(p) || (w = `${w}__${JSON.stringify(p)}`);
  let N = i.get(w);
  return N || (N = new Intl.NumberFormat(y, et({}, E, p)), i.set(w, N)), m ? N.formatToParts(u) : N.format(u);
}
const dp = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function bs(...e) {
  const [t, n, r, a] = e, o = {};
  let s = {};
  if (!rt(t))
    throw ar(on.INVALID_ARGUMENT);
  const i = t;
  return z(n) ? o.key = n : fe(n) && Object.keys(n).forEach((l) => {
    dp.includes(l) ? s[l] = n[l] : o[l] = n[l];
  }), z(r) ? o.locale = r : fe(r) && (s = r), fe(a) && (s = a), [o.key || "", i, o, s];
}
function oc(e, t, n) {
  const r = e;
  for (const a in n) {
    const o = `${t}__${a}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (jr().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ND = "9.2.2";
function PD() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, jr().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, jr().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (jr().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let pp = $t.__EXTEND_POINT__;
const er = () => ++pp, an = {
  FALLBACK_TO_ROOT: pp,
  NOT_SUPPORTED_PRESERVE: er(),
  NOT_SUPPORTED_FORMATTER: er(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: er(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: er(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: er(),
  NOT_FOUND_PARENT_SCOPE: er()
  // 13
}, RD = {
  [an.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [an.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [an.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [an.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [an.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [an.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [an.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function vp(e, ...t) {
  return Eo(RD[e], ...t);
}
let mp = ne.__EXTEND_POINT__;
const dt = () => ++mp, Pe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: mp,
  // legacy module errors
  INVALID_ARGUMENT: dt(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: dt(),
  NOT_INSLALLED: dt(),
  NOT_AVAILABLE_IN_LEGACY_MODE: dt(),
  // directive module errors
  REQUIRED_VALUE: dt(),
  INVALID_VALUE: dt(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: dt(),
  NOT_INSLALLED_WITH_PROVIDE: dt(),
  // unexpected error
  UNEXPECTED_ERROR: dt(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: dt(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: dt(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: dt(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: dt(),
  // for enhancement
  __EXTEND_POINT__: dt()
  // 29
};
function ln(e, ...t) {
  return Oo(e, null, process.env.NODE_ENV !== "production" ? { messages: FD, args: t } : void 0);
}
const FD = {
  [Pe.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Pe.INVALID_ARGUMENT]: "Invalid argument",
  [Pe.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Pe.NOT_INSLALLED]: "Need to install with `app.use` function",
  [Pe.UNEXPECTED_ERROR]: "Unexpected error",
  [Pe.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [Pe.REQUIRED_VALUE]: "Required in value: {0}",
  [Pe.INVALID_VALUE]: "Invalid value",
  [Pe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Pe.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Pe.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Pe.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [Pe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [Pe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, ys = /* @__PURE__ */ mn("__transrateVNode"), _s = /* @__PURE__ */ mn("__datetimeParts"), $s = /* @__PURE__ */ mn("__numberParts"), Es = /* @__PURE__ */ mn("__enableEmitter"), Ts = /* @__PURE__ */ mn("__disableEmitter"), xD = mn("__setPluralRules");
mn("__intlifyMeta");
const gp = /* @__PURE__ */ mn("__injectWithOption");
function Os(e) {
  if (!Oe(e))
    return e;
  for (const t in e)
    if ($i(e, t))
      if (!t.includes("."))
        Oe(e[t]) && Os(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e;
        for (let o = 0; o < r; o++)
          n[o] in a || (a[n[o]] = {}), a = a[n[o]];
        a[n[r]] = e[t], delete e[t], Oe(a[n[r]]) && Os(a[n[r]]);
      }
  return e;
}
function Si(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: o } = t, s = fe(n) ? n : Be(r) ? {} : { [e]: {} };
  if (Be(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || {}, Vr(u, s[l])) : Vr(u, s);
    } else
      z(i) && Vr(JSON.parse(i), s);
  }), a == null && o)
    for (const i in s)
      $i(s, i) && Os(s[i]);
  return s;
}
const Sa = (e) => !Oe(e) || Be(e);
function Vr(e, t) {
  if (Sa(e) || Sa(t))
    throw ln(Pe.INVALID_VALUE);
  for (const n in e)
    $i(e, n) && (Sa(e[n]) || Sa(t[n]) ? t[n] = e[n] : Vr(e[n], t[n]));
}
function hp(e) {
  return e.type;
}
function MD(e, t, n) {
  let r = Oe(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Si(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((o) => {
    e.mergeLocaleMessage(o, r[o]);
  });
  {
    if (Oe(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Oe(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function sc(e) {
  return xe(gc, null, e, 0);
}
const ic = "__INTLIFY_META__";
let lc = 0;
function uc(e) {
  return (t, n, r, a) => e(n, r, St() || void 0, a);
}
const kD = () => {
  const e = St();
  let t = null;
  return e && (t = hp(e)[ic]) ? { [ic]: t } : null;
};
function DD(e = {}, t) {
  const { __root: n } = e, r = n === void 0;
  let a = Ne(e.inheritLocale) ? e.inheritLocale : !0;
  const o = R(
    // prettier-ignore
    n && a ? n.locale.value : z(e.locale) ? e.locale : wo
  ), s = R(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : z(e.fallbackLocale) || Be(e.fallbackLocale) || fe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), i = R(Si(o.value, e)), l = R(fe(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), u = R(fe(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let d = n ? n.missingWarn : Ne(e.missingWarn) || vr(e.missingWarn) ? e.missingWarn : !0, p = n ? n.fallbackWarn : Ne(e.fallbackWarn) || vr(e.fallbackWarn) ? e.fallbackWarn : !0, g = n ? n.fallbackRoot : Ne(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, m = Xe(e.missing) ? e.missing : null, c = Xe(e.missing) ? uc(e.missing) : null, h = Xe(e.postTranslation) ? e.postTranslation : null, f = n ? n.warnHtmlMessage : Ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const E = n ? n.modifiers : fe(e.modifiers) ? e.modifiers : {};
  let $ = e.pluralRules || n && n.pluralRules, T;
  T = (() => {
    r && Xu(null);
    const P = {
      version: ND,
      locale: o.value,
      fallbackLocale: s.value,
      messages: i.value,
      modifiers: E,
      pluralRules: $,
      missing: c === null ? void 0 : c,
      missingWarn: d,
      fallbackWarn: p,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: h === null ? void 0 : h,
      warnHtmlMessage: f,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    P.datetimeFormats = l.value, P.numberFormats = u.value, P.__datetimeFormatters = fe(T) ? T.__datetimeFormatters : void 0, P.__numberFormatters = fe(T) ? T.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (P.__v_emitter = fe(T) ? T.__v_emitter : void 0);
    const C = _D(P);
    return r && Xu(C), C;
  })(), Pr(T, o.value, s.value);
  function w() {
    return [
      o.value,
      s.value,
      i.value,
      l.value,
      u.value
    ];
  }
  const N = A({
    get: () => o.value,
    set: (P) => {
      o.value = P, T.locale = o.value;
    }
  }), F = A({
    get: () => s.value,
    set: (P) => {
      s.value = P, T.fallbackLocale = s.value, Pr(T, o.value, P);
    }
  }), x = A(() => i.value), H = /* @__PURE__ */ A(() => l.value), U = /* @__PURE__ */ A(() => u.value);
  function D() {
    return Xe(h) ? h : null;
  }
  function Q(P) {
    h = P, T.postTranslation = P;
  }
  function ue() {
    return m;
  }
  function K(P) {
    P !== null && (c = uc(P)), m = P, T.missing = c;
  }
  function j(P, C) {
    return P !== "translate" || !C.resolvedMessage;
  }
  const ie = (P, C, ee, pe, st, it) => {
    w();
    let Bt;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        Yu(kD()), r || (T.fallbackContext = n ? yD() : void 0), Bt = P(T);
      } finally {
        Yu(null), r || (T.fallbackContext = void 0);
      }
    else
      Bt = P(T);
    if (rt(Bt) && Bt === So) {
      const [ft, wr] = C();
      if (process.env.NODE_ENV !== "production" && n && z(ft) && j(ee, wr) && (g && (Co(p, ft) || sp(d, ft)) && va(vp(an.FALLBACK_TO_ROOT, {
        key: ft,
        type: ee
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Jn } = T;
        Jn && g && Jn.emit("fallback", {
          type: ee,
          key: ft,
          to: "global",
          groupId: `${ee}:${ft}`
        });
      }
      return n && g ? pe(n) : st(ft);
    } else {
      if (it(Bt))
        return Bt;
      throw ln(Pe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function me(...P) {
    return ie((C) => Reflect.apply(ec, null, [C, ...P]), () => gs(...P), "translate", (C) => Reflect.apply(C.t, C, [...P]), (C) => C, (C) => z(C));
  }
  function De(...P) {
    const [C, ee, pe] = P;
    if (pe && !Oe(pe))
      throw ln(Pe.INVALID_ARGUMENT);
    return me(C, ee, et({ resolvedMessage: !0 }, pe || {}));
  }
  function ze(...P) {
    return ie((C) => Reflect.apply(nc, null, [C, ...P]), () => hs(...P), "datetime format", (C) => Reflect.apply(C.d, C, [...P]), () => qa, (C) => z(C));
  }
  function je(...P) {
    return ie((C) => Reflect.apply(ac, null, [C, ...P]), () => bs(...P), "number format", (C) => Reflect.apply(C.n, C, [...P]), () => qa, (C) => z(C));
  }
  function Ke(P) {
    return P.map((C) => z(C) || rt(C) || Ne(C) ? sc(String(C)) : C);
  }
  const Te = {
    normalize: Ke,
    interpolate: (P) => P,
    type: "vnode"
  };
  function Ge(...P) {
    return ie(
      (C) => {
        let ee;
        const pe = C;
        try {
          pe.processor = Te, ee = Reflect.apply(ec, null, [pe, ...P]);
        } finally {
          pe.processor = null;
        }
        return ee;
      },
      () => gs(...P),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (C) => C[ys](...P),
      (C) => [sc(C)],
      (C) => Be(C)
    );
  }
  function W(...P) {
    return ie(
      (C) => Reflect.apply(ac, null, [C, ...P]),
      () => bs(...P),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (C) => C[$s](...P),
      () => [],
      (C) => z(C) || Be(C)
    );
  }
  function G(...P) {
    return ie(
      (C) => Reflect.apply(nc, null, [C, ...P]),
      () => hs(...P),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (C) => C[_s](...P),
      () => [],
      (C) => z(C) || Be(C)
    );
  }
  function le(P) {
    $ = P, T.pluralRules = $;
  }
  function ce(P, C) {
    const ee = z(C) ? C : o.value, pe = O(ee);
    return T.messageResolver(pe, P) !== null;
  }
  function _e(P) {
    let C = null;
    const ee = ep(T, s.value, o.value);
    for (let pe = 0; pe < ee.length; pe++) {
      const st = i.value[ee[pe]] || {}, it = T.messageResolver(st, P);
      if (it != null) {
        C = it;
        break;
      }
    }
    return C;
  }
  function Re(P) {
    const C = _e(P);
    return C ?? (n ? n.tm(P) || {} : {});
  }
  function O(P) {
    return i.value[P] || {};
  }
  function _(P, C) {
    i.value[P] = C, T.messages = i.value;
  }
  function I(P, C) {
    i.value[P] = i.value[P] || {}, Vr(C, i.value[P]), T.messages = i.value;
  }
  function B(P) {
    return l.value[P] || {};
  }
  function X(P, C) {
    l.value[P] = C, T.datetimeFormats = l.value, rc(T, P, C);
  }
  function oe(P, C) {
    l.value[P] = et(l.value[P] || {}, C), T.datetimeFormats = l.value, rc(T, P, C);
  }
  function He(P) {
    return u.value[P] || {};
  }
  function Fe(P, C) {
    u.value[P] = C, T.numberFormats = u.value, oc(T, P, C);
  }
  function mt(P, C) {
    u.value[P] = et(u.value[P] || {}, C), T.numberFormats = u.value, oc(T, P, C);
  }
  lc++, n && wn && (J(n.locale, (P) => {
    a && (o.value = P, T.locale = P, Pr(T, o.value, s.value));
  }), J(n.fallbackLocale, (P) => {
    a && (s.value = P, T.fallbackLocale = P, Pr(T, o.value, s.value));
  }));
  const Ee = {
    id: lc,
    locale: N,
    fallbackLocale: F,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(P) {
      a = P, P && n && (o.value = n.locale.value, s.value = n.fallbackLocale.value, Pr(T, o.value, s.value));
    },
    get availableLocales() {
      return Object.keys(i.value).sort();
    },
    messages: x,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return $ || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(P) {
      d = P, T.missingWarn = d;
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(P) {
      p = P, T.fallbackWarn = p;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(P) {
      g = P;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(P) {
      b = P, T.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return f;
    },
    set warnHtmlMessage(P) {
      f = P, T.warnHtmlMessage = P;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(P) {
      y = P, T.escapeParameter = P;
    },
    t: me,
    getLocaleMessage: O,
    setLocaleMessage: _,
    mergeLocaleMessage: I,
    getPostTranslationHandler: D,
    setPostTranslationHandler: Q,
    getMissingHandler: ue,
    setMissingHandler: K,
    [xD]: le
  };
  return Ee.datetimeFormats = H, Ee.numberFormats = U, Ee.rt = De, Ee.te = ce, Ee.tm = Re, Ee.d = ze, Ee.n = je, Ee.getDateTimeFormat = B, Ee.setDateTimeFormat = X, Ee.mergeDateTimeFormat = oe, Ee.getNumberFormat = He, Ee.setNumberFormat = Fe, Ee.mergeNumberFormat = mt, Ee[gp] = e.__injectWithOption, Ee[ys] = Ge, Ee[_s] = G, Ee[$s] = W, process.env.NODE_ENV !== "production" && (Ee[Es] = (P) => {
    T.__v_emitter = P;
  }, Ee[Ts] = () => {
    T.__v_emitter = void 0;
  }), Ee;
}
const wi = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponetI18nScope */
  },
  i18n: {
    type: Object
  }
};
function jD({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => r = [
    ...r,
    ...Be(a.children) ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function bp(e) {
  return At;
}
et({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => rt(e) || !isNaN(e)
  }
}, wi);
function VD(e) {
  return Be(e) && !z(e[0]);
}
function yp(e, t, n, r) {
  const { slots: a, attrs: o } = t;
  return () => {
    const s = { part: !0 };
    let i = {};
    e.locale && (s.locale = e.locale), z(e.format) ? s.key = e.format : Oe(e.format) && (z(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((g, b) => n.includes(b) ? et({}, g, { [b]: e.format[b] }) : g, {}));
    const l = r(e.value, s, i);
    let u = [s.key];
    Be(l) ? u = l.map((g, b) => {
      const m = a[g.type], c = m ? m({ [g.type]: g.value, index: b, parts: l }) : [g.value];
      return VD(c) && (c[0].key = `${g.type}-${b}`), c;
    }) : z(l) && (u = [l]);
    const d = et({}, o), p = z(e.tag) || Oe(e.tag) ? e.tag : bp();
    return $n(p, d, u);
  };
}
et({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, wi);
et({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, wi);
function cc(e, t) {
}
const BD = /* @__PURE__ */ mn("global-vue-i18n");
function Ao(e = {}) {
  const t = St();
  if (t == null)
    throw ln(Pe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw ln(Pe.NOT_INSLALLED);
  const n = UD(t), r = WD(n), a = hp(t), o = HD(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw ln(Pe.NOT_AVAILABLE_IN_LEGACY_MODE);
    return GD(t, o, r, e);
  }
  if (o === "global")
    return MD(r, e, a), r;
  if (o === "parent") {
    let l = zD(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && va(vp(an.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = et({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), r && (l.__root = r), i = DD(l), KD(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function UD(e) {
  {
    const t = he(e.isCE ? BD : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw ln(e.isCE ? Pe.NOT_INSLALLED_WITH_PROVIDE : Pe.UNEXPECTED_ERROR);
    return t;
  }
}
function HD(e, t) {
  return To(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function WD(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function zD(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let o = t.parent;
  for (; o != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(o);
      i != null && (r = i.__composer, n && r && !r[gp] && (r = null));
    }
    if (r != null || a === o)
      break;
    o = o.parent;
  }
  return r;
}
function KD(e, t, n) {
  let r = null;
  Ue(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = _4();
      const a = n;
      a[Es] && a[Es](r), r.on("*", cc);
    }
  }, t), Ss(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      r && r.off("*", cc);
      const a = n;
      a[Ts] && a[Ts](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
function GD(e, t, n, r = {}) {
  const a = t === "local", o = xn(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw ln(Pe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = Ne(r.inheritLocale) ? r.inheritLocale : !0, i = R(
    // prettier-ignore
    a && s ? n.locale.value : z(r.locale) ? r.locale : wo
  ), l = R(
    // prettier-ignore
    a && s ? n.fallbackLocale.value : z(r.fallbackLocale) || Be(r.fallbackLocale) || fe(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = R(Si(i.value, r)), d = R(fe(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), p = R(fe(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), g = a ? n.missingWarn : Ne(r.missingWarn) || vr(r.missingWarn) ? r.missingWarn : !0, b = a ? n.fallbackWarn : Ne(r.fallbackWarn) || vr(r.fallbackWarn) ? r.fallbackWarn : !0, m = a ? n.fallbackRoot : Ne(r.fallbackRoot) ? r.fallbackRoot : !0, c = !!r.fallbackFormat, h = Xe(r.missing) ? r.missing : null, f = Xe(r.postTranslation) ? r.postTranslation : null, y = a ? n.warnHtmlMessage : Ne(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, $ = a ? n.modifiers : fe(r.modifiers) ? r.modifiers : {}, T = r.pluralRules || a && n.pluralRules;
  function S() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      p.value
    ];
  }
  const w = A({
    get: () => o.value ? o.value.locale.value : i.value,
    set: (_) => {
      o.value && (o.value.locale.value = _), i.value = _;
    }
  }), N = A({
    get: () => o.value ? o.value.fallbackLocale.value : l.value,
    set: (_) => {
      o.value && (o.value.fallbackLocale.value = _), l.value = _;
    }
  }), F = A(() => o.value ? o.value.messages.value : u.value), x = A(() => d.value), H = A(() => p.value);
  function U() {
    return o.value ? o.value.getPostTranslationHandler() : f;
  }
  function D(_) {
    o.value && o.value.setPostTranslationHandler(_);
  }
  function Q() {
    return o.value ? o.value.getMissingHandler() : h;
  }
  function ue(_) {
    o.value && o.value.setMissingHandler(_);
  }
  function K(_) {
    return S(), _();
  }
  function j(..._) {
    return o.value ? K(() => Reflect.apply(o.value.t, null, [..._])) : K(() => "");
  }
  function ie(..._) {
    return o.value ? Reflect.apply(o.value.rt, null, [..._]) : "";
  }
  function me(..._) {
    return o.value ? K(() => Reflect.apply(o.value.d, null, [..._])) : K(() => "");
  }
  function De(..._) {
    return o.value ? K(() => Reflect.apply(o.value.n, null, [..._])) : K(() => "");
  }
  function ze(_) {
    return o.value ? o.value.tm(_) : {};
  }
  function je(_, I) {
    return o.value ? o.value.te(_, I) : !1;
  }
  function Ke(_) {
    return o.value ? o.value.getLocaleMessage(_) : {};
  }
  function Ve(_, I) {
    o.value && (o.value.setLocaleMessage(_, I), u.value[_] = I);
  }
  function Te(_, I) {
    o.value && o.value.mergeLocaleMessage(_, I);
  }
  function Ge(_) {
    return o.value ? o.value.getDateTimeFormat(_) : {};
  }
  function W(_, I) {
    o.value && (o.value.setDateTimeFormat(_, I), d.value[_] = I);
  }
  function G(_, I) {
    o.value && o.value.mergeDateTimeFormat(_, I);
  }
  function le(_) {
    return o.value ? o.value.getNumberFormat(_) : {};
  }
  function ce(_, I) {
    o.value && (o.value.setNumberFormat(_, I), p.value[_] = I);
  }
  function _e(_, I) {
    o.value && o.value.mergeNumberFormat(_, I);
  }
  const Re = {
    get id() {
      return o.value ? o.value.id : -1;
    },
    locale: w,
    fallbackLocale: N,
    messages: F,
    datetimeFormats: x,
    numberFormats: H,
    get inheritLocale() {
      return o.value ? o.value.inheritLocale : s;
    },
    set inheritLocale(_) {
      o.value && (o.value.inheritLocale = _);
    },
    get availableLocales() {
      return o.value ? o.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return o.value ? o.value.modifiers : $;
    },
    get pluralRules() {
      return o.value ? o.value.pluralRules : T;
    },
    get isGlobal() {
      return o.value ? o.value.isGlobal : !1;
    },
    get missingWarn() {
      return o.value ? o.value.missingWarn : g;
    },
    set missingWarn(_) {
      o.value && (o.value.missingWarn = _);
    },
    get fallbackWarn() {
      return o.value ? o.value.fallbackWarn : b;
    },
    set fallbackWarn(_) {
      o.value && (o.value.missingWarn = _);
    },
    get fallbackRoot() {
      return o.value ? o.value.fallbackRoot : m;
    },
    set fallbackRoot(_) {
      o.value && (o.value.fallbackRoot = _);
    },
    get fallbackFormat() {
      return o.value ? o.value.fallbackFormat : c;
    },
    set fallbackFormat(_) {
      o.value && (o.value.fallbackFormat = _);
    },
    get warnHtmlMessage() {
      return o.value ? o.value.warnHtmlMessage : y;
    },
    set warnHtmlMessage(_) {
      o.value && (o.value.warnHtmlMessage = _);
    },
    get escapeParameter() {
      return o.value ? o.value.escapeParameter : E;
    },
    set escapeParameter(_) {
      o.value && (o.value.escapeParameter = _);
    },
    t: j,
    getPostTranslationHandler: U,
    setPostTranslationHandler: D,
    getMissingHandler: Q,
    setMissingHandler: ue,
    rt: ie,
    d: me,
    n: De,
    tm: ze,
    te: je,
    getLocaleMessage: Ke,
    setLocaleMessage: Ve,
    mergeLocaleMessage: Te,
    getDateTimeFormat: Ge,
    setDateTimeFormat: W,
    mergeDateTimeFormat: G,
    getNumberFormat: le,
    setNumberFormat: ce,
    mergeNumberFormat: _e
  };
  function O(_) {
    _.locale.value = i.value, _.fallbackLocale.value = l.value, Object.keys(u.value).forEach((I) => {
      _.mergeLocaleMessage(I, u.value[I]);
    }), Object.keys(d.value).forEach((I) => {
      _.mergeDateTimeFormat(I, d.value[I]);
    }), Object.keys(p.value).forEach((I) => {
      _.mergeNumberFormat(I, p.value[I]);
    }), _.escapeParameter = E, _.fallbackFormat = c, _.fallbackRoot = m, _.fallbackWarn = b, _.missingWarn = g, _.warnHtmlMessage = y;
  }
  return pc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw ln(Pe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = o.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = _.locale.value, l.value = _.fallbackLocale.value, u.value = _.messages.value, d.value = _.datetimeFormats.value, p.value = _.numberFormats.value) : a && O(_);
  }), Re;
}
mD(SD);
gD(X4);
hD(ep);
PD();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = jr();
  e.__INTLIFY__ = !0, oD(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
class qD {
  constructor(t) {
    $e(this, "containerRef");
    $e(this, "contentRef");
    $e(this, "trackXRef");
    $e(this, "trackYRef");
    $e(this, "thumbXRef");
    $e(this, "thumbYRef");
    $e(this, "thumbXSize", R(0));
    $e(this, "thumbYSize", R(0));
    $e(this, "contentWidth", R(0));
    $e(this, "contentHeight", R(0));
    $e(this, "contentScrollWidth", 0);
    $e(this, "contentScrollHeight", 0);
    $e(this, "speedX", 1);
    $e(this, "speedY", 1);
    $e(this, "offsetX", R(0));
    $e(this, "offsetY", R(0));
    $e(this, "scrollX", R(0));
    $e(this, "scrollY", R(0));
    $e(this, "isScroll", R(!1));
    $e(this, "isScrollX", R(!1));
    $e(this, "isScrollY", R(!1));
    $e(this, "showX", R(!1));
    $e(this, "showY", R(!1));
    $e(this, "isHover", R(!1));
    $e(this, "alignSize", R([0, 0]));
    $e(this, "maxOffsetX", 0);
    $e(this, "maxOffsetY", 0);
    // 事件
    $e(this, "dragEventHandle");
    $e(this, "moveEventHandle");
    this.containerRef = t.containerRef, this.contentRef = t.contentRef, this.trackXRef = t.trackXRef, this.trackYRef = t.trackYRef, this.thumbXRef = t.thumbXRef, this.thumbYRef = t.thumbYRef, this.thumbXSize.value = t.minThumbSize, this.thumbYSize.value = t.minThumbSize;
  }
  init() {
    this.setContentSize(), this.showScrollBar(), this.initContentScroll(), this.calcThumbSize(), this.calcAlignSize();
  }
  // 初始化 content size
  setContentSize() {
    this.contentRef.value && (this.contentWidth.value = this.contentRef.value.clientWidth, this.contentHeight.value = this.contentRef.value.clientHeight, this.contentScrollWidth = this.contentRef.value.scrollWidth, this.contentScrollHeight = this.contentRef.value.scrollHeight);
  }
  initContentScroll() {
    this.isHover = n4(this.containerRef, { delayLeave: 1e3 });
    const { x: t, y: n } = r4(this.contentRef);
    this.scrollX = t, this.scrollY = n;
  }
  // 是否需要显示滚动条
  showScrollBar() {
    this.showX.value = this.contentScrollWidth > this.contentWidth.value, this.showY.value = this.contentScrollHeight > this.contentHeight.value;
  }
  // 计算两个导轨互相叠加的部分
  calcAlignSize() {
    var r, a;
    const t = this.showX.value && this.showY.value;
    let n = [0, 0];
    t && (n = [((r = this.thumbYRef.value) == null ? void 0 : r.clientWidth) || 0, ((a = this.thumbXRef.value) == null ? void 0 : a.clientHeight) || 0]), !(this.alignSize.value[0] == n[0] && this.alignSize.value[1] == n[1]) && (this.alignSize.value = n, this.calcThumbSize());
  }
  // 滑块大小计算
  calcThumbSize() {
    const t = this.contentScrollWidth - this.contentWidth.value, n = this.contentScrollHeight - this.contentHeight.value, r = this.contentWidth.value - this.thumbXSize.value - this.alignSize.value[0], a = this.contentHeight.value - this.thumbYSize.value - this.alignSize.value[1];
    r >= t ? this.thumbXSize.value = this.contentWidth.value - t : this.speedX = t / r, a >= n ? this.thumbYSize.value = this.contentHeight.value - n : this.speedY = n / a, this.maxOffsetX = this.contentWidth.value - this.thumbXSize.value - this.alignSize.value[0], this.maxOffsetY = this.contentHeight.value - this.thumbYSize.value - this.alignSize.value[1];
  }
  // 滑块位置计算
  calcThumbXPos(t) {
    let n = this.offsetX.value + t;
    return n < 0 ? n = 0 : n > this.maxOffsetX && (n = this.maxOffsetX), this.offsetX.value = n, !0;
  }
  calcThumbYPos(t) {
    let n = this.offsetY.value + t;
    return n < 0 ? n = 0 : n > this.maxOffsetY && (n = this.maxOffsetY), this.offsetY.value = n, !0;
  }
  // 重新计算内容页的滚动位置
  calcScrollXPos() {
    return this.scrollX.value = Math.round(this.offsetX.value * this.speedX), !0;
  }
  calcScrollYPos() {
    return this.scrollY.value = Math.round(this.offsetY.value * this.speedY), !0;
  }
  // 取消move 事件
  unregistMoveEvet() {
    this.moveEventHandle && (this.moveEventHandle(), this.moveEventHandle = void 0), this.isScrollX.value = !1, this.isScrollY.value = !1, this.isScroll.value = !1;
  }
  // 滑块拖拽事件
  thumbDragHandle(t, n) {
    t.stopPropagation(), t.preventDefault(), this.unregistMoveEvet(), this.isScroll.value = !0, n == "X" ? this.isScrollX.value = !0 : this.isScrollY.value = !0;
    let { x: r, y: a } = t;
    this.moveEventHandle = ht(document, "mousemove", (o) => {
      const s = o.x - r, i = o.y - a;
      n == "X" ? this.calcThumbXPos(s) && this.calcScrollXPos() : this.calcThumbYPos(i) && this.calcScrollYPos(), r = o.x, a = o.y;
    });
  }
  // 轨道点击事件
  trackClickHandle(t, n) {
    t.stopPropagation(), t.preventDefault(), console.log("====>", t);
  }
  // 由滚动事件触发的位置变化重新计算滑块的位置
  scrollEventHandle(t) {
    t.stopPropagation(), t.preventDefault(), console.log("..............", this.scrollY.value, this.offsetY.value), this.scrollX.value > 0 && (this.offsetX.value = Math.round(this.scrollX.value / this.speedX)), this.scrollY.value > 0 && (this.offsetY.value = Math.round(this.scrollY.value / this.speedY));
  }
  // 常驻事件注册
  registEvent() {
    ht(this.containerRef, "mouseenter", () => this.calcAlignSize()), ht(this.thumbXRef, "mousedown", (t) => this.thumbDragHandle(t, "X")), ht(this.thumbYRef, "mousedown", (t) => this.thumbDragHandle(t, "Y")), ht(this.trackXRef, "click", (t) => this.trackClickHandle(t, "X")), ht(this.trackYRef, "click", (t) => this.trackClickHandle(t, "Y")), ht(this.contentRef, "scroll", (t) => this.scrollEventHandle(t)), ht(document, "mouseup", () => this.unregistMoveEvet()), ht(this.contentRef, "resize", () => {
      this.setContentSize(), this.calcThumbSize(), this.showScrollBar();
    });
  }
}
const YD = {
  name: "ElsScroll"
}, XD = /* @__PURE__ */ Z({
  ...YD,
  props: {
    class: null,
    style: null,
    autoHide: { type: Boolean, default: !0 },
    barClass: { default: () => ["h-10", "w-10"] },
    thumbClass: { default: "bg-dark rd-10 op-30 hover-op-70 hover-shadow" },
    thumbXClass: null,
    thumbYClass: null,
    trackClass: { default: "" },
    thumbMinSize: { default: 20 },
    scrollClass: { default: "important-op-70" }
  },
  setup(e) {
    const t = e;
    Ao();
    const n = A(
      () => Array.isArray(t.barClass) ? t.barClass[0] : t.barClass
    ), r = A(
      () => Array.isArray(t.barClass) ? t.barClass[1] : t.barClass
    ), a = R(), o = R(), s = R(), i = R(), l = R(), u = R(), d = new qD({ containerRef: a, contentRef: o, trackXRef: s, trackYRef: i, thumbXRef: l, thumbYRef: u, minThumbSize: t.thumbMinSize });
    return Ue(() => {
      d.init(), d.registEvent(), console.log(d.contentWidth.value, d);
    }), (p, g) => (k(), q("div", {
      ref_key: "containerRef",
      ref: a,
      class: "relative block",
      style: Me(`width:${v(d).contentWidth.value}px;height:${v(d).contentHeight.value}px;`)
    }, [
      te("div", {
        ref_key: "contentRef",
        ref: o,
        class: V(["_scroll-wapper relative overflow-auto", t.class || ""]),
        style: Me(t.style || "")
      }, [
        ge(p.$slots, "default", {}, void 0, !0)
      ], 6),
      v(d).showX.value ? Qe((k(), q("div", {
        key: 0,
        ref_key: "trackXRef",
        ref: s,
        class: V([
          "absolute transition-all left-0 bottom-0",
          v(n),
          e.trackClass
        ]),
        style: Me(`width:calc(100% - ${v(d).alignSize.value[0]}px)`)
      }, [
        te("div", {
          ref_key: "thumbXRef",
          ref: l,
          class: V(["h-100% transition-all", `w-${v(d).thumbXSize.value}`, e.thumbXClass, v(d).isScrollX.value ? e.scrollClass : ""]),
          style: Me(`transform:translateX(${v(d).offsetX.value}px)`)
        }, null, 6)
      ], 6)), [
        [Tn, v(d).isHover.value || v(d).isScroll.value || !e.autoHide]
      ]) : re("", !0),
      v(d).showY.value ? Qe((k(), q("div", {
        key: 1,
        ref_key: "trackYRef",
        ref: i,
        class: V(["absolute transition-all right-0 top-0", v(r), e.trackClass]),
        style: Me(`height:calc(100% - ${v(d).alignSize.value[1]}px)`)
      }, [
        te("div", {
          ref_key: "thumbYRef",
          ref: u,
          class: V(["transition-all w-20% hover-w-100% float-right", `h-${v(d).thumbYSize.value}`, e.thumbYClass, v(d).isScrollY.value ? e.scrollClass : ""]),
          style: Me(`transform:translateY(${v(d).offsetY.value}px)`)
        }, null, 6)
      ], 6)), [
        [Tn, v(d).isHover.value || v(d).isScroll.value || !e.autoHide]
      ]) : re("", !0)
    ], 4));
  }
});
const JD = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, ZD = /* @__PURE__ */ JD(XD, [["__scopeId", "data-v-f673a514"]]), QD = {
  install: (e) => {
    e.component("els-scroll", ZD);
  }
}, n3 = {
  install: (e) => {
    vS.install(e), f4.install(e), QD.install(e);
  }
};
export {
  If as ElsElem,
  ct as ElsElemUtil,
  c4 as ElsForm,
  ZD as ElsScroll,
  n3 as default
};
