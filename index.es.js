var Xo = Object.defineProperty;
var es = (n, e, t) => e in n ? Xo(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Q = (n, e, t) => (es(n, typeof e != "symbol" ? e + "" : e, t), t), kn = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var h = (n, e, t) => (kn(n, e, "read from private field"), t ? t.call(n) : e.get(n)), B = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, I = (n, e, t, r) => (kn(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t);
var $t = (n, e, t, r) => ({
  set _(o) {
    I(n, e, o, t);
  },
  get _() {
    return h(n, e, r);
  }
}), R = (n, e, t) => (kn(n, e, "access private method"), t);
import { defineComponent as Zn, onBeforeUnmount as ts, createVNode as Ke, inject as he, Fragment as ns, provide as Ue, computed as rt, onMounted as Xe, watch as Ye, toRef as uo, ref as hr, nextTick as In, shallowRef as en, toRefs as rs, openBlock as os, createElementBlock as ss, unref as fr } from "vue";
const U = "md-editor", is = "md-editor-v3", cs = "https://at.alicdn.com/t/c/font_2605852_prouiefeic.js", as = "https://at.alicdn.com/t/c/font_2605852_prouiefeic.css", Z = "https://cdnjs.cloudflare.com/ajax/libs", ls = `${Z}/highlight.js/11.7.0/highlight.min.js`, us = [
  "bold",
  "underline",
  "italic",
  "strikeThrough",
  "-",
  "title",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",
  "=",
  "prettier",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
  "github"
], hs = ["markdownTotal", "=", "scrollSwitch"], pr = {
  "zh-CN": {
    toolbarTips: {
      bold: "加粗",
      underline: "下划线",
      italic: "斜体",
      strikeThrough: "删除线",
      title: "标题",
      sub: "下标",
      sup: "上标",
      quote: "引用",
      unorderedList: "无序列表",
      orderedList: "有序列表",
      task: "任务列表",
      codeRow: "行内代码",
      code: "块级代码",
      link: "链接",
      image: "图片",
      table: "表格",
      mermaid: "mermaid图",
      katex: "katex公式",
      revoke: "后退",
      next: "前进",
      save: "保存",
      prettier: "美化",
      pageFullscreen: "浏览器全屏",
      fullscreen: "屏幕全屏",
      preview: "预览",
      htmlPreview: "html代码预览",
      catalog: "目录",
      github: "源码地址"
    },
    titleItem: {
      h1: "一级标题",
      h2: "二级标题",
      h3: "三级标题",
      h4: "四级标题",
      h5: "五级标题",
      h6: "六级标题"
    },
    imgTitleItem: {
      link: "添加链接",
      upload: "上传图片",
      clip2upload: "裁剪上传"
    },
    linkModalTips: {
      linkTitle: "添加链接",
      imageTitle: "添加图片",
      descLabel: "链接描述：",
      descLabelPlaceHolder: "请输入描述...",
      urlLabel: "链接地址：",
      urlLabelPlaceHolder: "请输入链接...",
      buttonOK: "确定"
    },
    clipModalTips: {
      title: "裁剪图片上传",
      buttonUpload: "上传"
    },
    copyCode: {
      text: "复制代码",
      successTips: "已复制！",
      failTips: "复制失败！"
    },
    mermaid: {
      flow: "流程图",
      sequence: "时序图",
      gantt: "甘特图",
      class: "类图",
      state: "状态图",
      pie: "饼图",
      relationship: "关系图",
      journey: "旅程图"
    },
    katex: {
      inline: "行内公式",
      block: "块级公式"
    },
    footer: {
      markdownTotal: "字数",
      scrollAuto: "同步滚动"
    }
  },
  "en-US": {
    toolbarTips: {
      bold: "bold",
      underline: "underline",
      italic: "italic",
      strikeThrough: "strikeThrough",
      title: "title",
      sub: "subscript",
      sup: "superscript",
      quote: "quote",
      unorderedList: "unordered list",
      orderedList: "ordered list",
      task: "task list",
      codeRow: "inline code",
      code: "block-level code",
      link: "link",
      image: "image",
      table: "table",
      mermaid: "mermaid",
      katex: "formula",
      revoke: "revoke",
      next: "undo revoke",
      save: "save",
      prettier: "prettier",
      pageFullscreen: "fullscreen in page",
      fullscreen: "fullscreen",
      preview: "preview",
      htmlPreview: "html preview",
      catalog: "catalog",
      github: "source code"
    },
    titleItem: {
      h1: "Lv1 Heading",
      h2: "Lv2 Heading",
      h3: "Lv3 Heading",
      h4: "Lv4 Heading",
      h5: "Lv5 Heading",
      h6: "Lv6 Heading"
    },
    imgTitleItem: {
      link: "Add Img Link",
      upload: "Upload Img",
      clip2upload: "Clip Upload"
    },
    linkModalTips: {
      linkTitle: "Add Link",
      imageTitle: "Add Image",
      descLabel: "Desc:",
      descLabelPlaceHolder: "Enter a description...",
      urlLabel: "Link:",
      urlLabelPlaceHolder: "Enter a link...",
      buttonOK: "OK"
    },
    clipModalTips: {
      title: "Crop Image",
      buttonUpload: "Upload"
    },
    copyCode: {
      text: "Copy",
      successTips: "Copied!",
      failTips: "Copy failed!"
    },
    mermaid: {
      flow: "flow",
      sequence: "sequence",
      gantt: "gantt",
      class: "class",
      state: "state",
      pie: "pie",
      relationship: "relationship",
      journey: "journey"
    },
    katex: {
      inline: "inline",
      block: "block"
    },
    footer: {
      markdownTotal: "Word Count",
      scrollAuto: "Scroll Auto"
    }
  }
}, fs = `${Z}/mermaid/10.1.0/mermaid.esm.min.mjs`, dr = {
  js: `${Z}/KaTeX/0.16.3/katex.min.js`,
  css: `${Z}/KaTeX/0.16.3/katex.min.css`
}, mr = {
  a11y: {
    light: `${Z}/highlight.js/11.7.0/styles/a11y-light.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/a11y-dark.min.css`
  },
  atom: {
    light: `${Z}/highlight.js/11.7.0/styles/atom-one-light.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/atom-one-dark.min.css`
  },
  github: {
    light: `${Z}/highlight.js/11.7.0/styles/github.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/github-dark.min.css`
  },
  gradient: {
    light: `${Z}/highlight.js/11.7.0/styles/gradient-light.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/gradient-dark.min.css`
  },
  kimbie: {
    light: `${Z}/highlight.js/11.7.0/styles/kimbie-light.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/kimbie-dark.min.css`
  },
  paraiso: {
    light: `${Z}/highlight.js/11.7.0/styles/paraiso-light.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/paraiso-dark.min.css`
  },
  qtcreator: {
    light: `${Z}/highlight.js/11.7.0/styles/qtcreator-light.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/qtcreator-dark.min.css`
  },
  stackoverflow: {
    light: `${Z}/highlight.js/11.7.0/styles/stackoverflow-light.min.css`,
    dark: `${Z}/highlight.js/11.7.0/styles/stackoverflow-dark.min.css`
  }
}, Fe = {
  editorExtensions: {},
  editorConfig: {},
  codeMirrorExtensions: (n, e) => e,
  markdownItConfig: () => {
  },
  markdownItPlugins: (n) => n,
  iconfontType: "svg"
}, Wn = (n, e = 200) => {
  let t = 0;
  return (...r) => new Promise((o) => {
    t && (clearTimeout(t), o("cancel")), t = window.setTimeout(() => {
      n.apply(void 0, r), t = 0, o("done");
    }, e);
  });
};
var ps = Object.defineProperty, ds = (n, e, t) => e in n ? ps(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, ms = (n, e, t) => (ds(n, typeof e != "symbol" ? e + "" : e, t), t);
let gs = class {
  constructor() {
    ms(this, "pools", {});
  }
  // 移除事件监听
  remove(e, t, r) {
    const o = this.pools[e] && this.pools[e][t];
    o && (this.pools[e][t] = o.filter((s) => s !== r));
  }
  // 清空全部事件，由于单一实例，多次注册会被共享内容
  clear(e) {
    this.pools[e] = {};
  }
  // 注册事件监听
  on(e, t) {
    return this.pools[e] || (this.pools[e] = {}), this.pools[e][t.name] || (this.pools[e][t.name] = []), this.pools[e][t.name].push(t.callback), this.pools[e][t.name].includes(t.callback);
  }
  // 触发事件
  emit(e, t, ...r) {
    this.pools[e] || (this.pools[e] = {});
    const o = this.pools[e][t];
    o && o.forEach((s) => {
      try {
        s(...r);
      } catch (i) {
        console.error(`${t} monitor event exception！`, i);
      }
    });
  }
};
const At = new gs(), bs = "buildFinished", gr = "catalogChanged", vs = "pushCatalog", ks = (n) => {
  if (!n)
    return n;
  const e = n.split(`
`), t = ['<span rn-wrapper aria-hidden="true">'];
  return e.forEach(() => {
    t.push("<span></span>");
  }), t.push("</span>"), `<span class="code-block">${n}</span>${t.join("")}`;
}, ys = () => `${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`, ut = (n, e = "") => {
  const t = document.getElementById(n.id), r = n.onload;
  n.onload = null;
  const o = function(s) {
    typeof r == "function" && r.bind(this)(s), n.removeEventListener("load", o);
  };
  t ? e !== "" && (t.addEventListener("load", o), Reflect.get(window, e) && t.dispatchEvent(new Event("load"))) : (n.addEventListener("load", o), document.head.appendChild(n));
}, _s = Wn((n, e, t) => {
  const r = document.getElementById(n);
  r && r.setAttribute(e, t);
}, 10), xs = 1024;
let ws = 0;
class W {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = ws++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = Me.match(e)), (t) => {
      let r = e(t);
      return r === void 0 ? null : [this, r];
    };
  }
}
W.closedBy = new W({ deserialize: (n) => n.split(" ") });
W.openedBy = new W({ deserialize: (n) => n.split(" ") });
W.group = new W({ deserialize: (n) => n.split(" ") });
W.contextHash = new W({ perNode: !0 });
W.lookAhead = new W({ perNode: !0 });
W.mounted = new W({ perNode: !0 });
class tn {
  constructor(e, t, r) {
    this.tree = e, this.overlay = t, this.parser = r;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[W.mounted.id];
  }
}
const Cs = /* @__PURE__ */ Object.create(null);
class Me {
  /**
  @internal
  */
  constructor(e, t, r, o = 0) {
    this.name = e, this.props = t, this.id = r, this.flags = o;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Cs, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), o = new Me(e.name || "", t, e.id, r);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(o)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return o;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(W.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let r in e)
      for (let o of r.split(" "))
        t[o] = e[r];
    return (r) => {
      for (let o = r.prop(W.group), s = -1; s < (o ? o.length : 0); s++) {
        let i = t[s < 0 ? r.name : o[s]];
        if (i)
          return i;
      }
    };
  }
}
Me.none = new Me(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const Mt = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap();
var re;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(re || (re = {}));
class Le {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, r, o, s) {
    if (this.type = e, this.children = t, this.positions = r, this.length = o, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [i, c] of s)
        this.props[typeof i == "number" ? i : i.id] = c;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = tn.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let r of this.children) {
      let o = r.toString();
      o && (t && (t += ","), t += o);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new On(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, r = 0) {
    let o = Mt.get(this) || this.topNode, s = new On(o);
    return s.moveTo(e, t), Mt.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new fe(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let r = Dt(Mt.get(this) || this.topNode, e, t, !1);
    return Mt.set(this, r), r;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let r = Dt(br.get(this) || this.topNode, e, t, !0);
    return br.set(this, r), r;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return Ss(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: r, from: o = 0, to: s = this.length } = e, i = e.mode || 0, c = (i & re.IncludeAnonymous) > 0;
    for (let a = this.cursor(i | re.IncludeAnonymous); ; ) {
      let l = !1;
      if (a.from <= s && a.to >= o && (!c && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        l = !0;
      }
      for (; l && r && (c || !a.type.isAnonymous) && r(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        l = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : Yn(Me.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, r, o) => new Le(this.type, t, r, o, this.propValues), e.makeTree || ((t, r, o) => new Le(Me.none, t, r, o)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return Ds(e);
  }
}
Le.empty = new Le(Me.none, [], [], 0);
class Kn {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Kn(this.buffer, this.index);
  }
}
class et {
  /**
  Create a tree buffer.
  */
  constructor(e, t, r) {
    this.buffer = e, this.length = t, this.set = r;
  }
  /**
  @internal
  */
  get type() {
    return Me.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], r = this.buffer[e + 3], o = this.set.types[t], s = o.name;
    if (/\W/.test(s) && !o.isError && (s = JSON.stringify(s)), e += 4, r == e)
      return s;
    let i = [];
    for (; e < r; )
      i.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + i.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, r, o, s) {
    let { buffer: i } = this, c = -1;
    for (let a = e; a != t && !(ho(s, o, i[a + 1], i[a + 2]) && (c = a, r > 0)); a = i[a + 3])
      ;
    return c;
  }
  /**
  @internal
  */
  slice(e, t, r) {
    let o = this.buffer, s = new Uint16Array(t - e), i = 0;
    for (let c = e, a = 0; c < t; ) {
      s[a++] = o[c++], s[a++] = o[c++] - r;
      let l = s[a++] = o[c++] - r;
      s[a++] = o[c++] - e, i = Math.max(i, l);
    }
    return new et(s, i, this.set);
  }
}
function ho(n, e, t, r) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return r >= e && t < e;
    case 0:
      return t < e && r > e;
    case 1:
      return t <= e && r > e;
    case 2:
      return r > e;
    case 4:
      return !0;
  }
}
function Dt(n, e, t, r) {
  for (var o; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let i = !r && n instanceof fe && n.index < 0 ? null : n.parent;
    if (!i)
      return n;
    n = i;
  }
  let s = r ? 0 : re.IgnoreOverlays;
  if (r)
    for (let i = n, c = i.parent; c; i = c, c = i.parent)
      i instanceof fe && i.index < 0 && ((o = c.enter(e, t, s)) === null || o === void 0 ? void 0 : o.from) != i.from && (n = c);
  for (; ; ) {
    let i = n.enter(e, t, s);
    if (!i)
      return n;
    n = i;
  }
}
class fo {
  cursor(e = 0) {
    return new On(this, e);
  }
  getChild(e, t = null, r = null) {
    let o = vr(this, e, t, r);
    return o.length ? o[0] : null;
  }
  getChildren(e, t = null, r = null) {
    return vr(this, e, t, r);
  }
  resolve(e, t = 0) {
    return Dt(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Dt(this, e, t, !0);
  }
  matchContext(e) {
    return Nn(this, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), r = this;
    for (; t; ) {
      let o = t.lastChild;
      if (!o || o.to != t.to)
        break;
      o.type.isError && o.from == o.to ? (r = t, t = o.prevSibling) : t = o;
    }
    return r;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class fe extends fo {
  constructor(e, t, r, o) {
    super(), this._tree = e, this.from = t, this.index = r, this._parent = o;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, r, o, s = 0) {
    for (let i = this; ; ) {
      for (let { children: c, positions: a } = i._tree, l = t > 0 ? c.length : -1; e != l; e += t) {
        let u = c[e], f = a[e] + i.from;
        if (ho(o, r, f, f + u.length)) {
          if (u instanceof et) {
            if (s & re.ExcludeBuffers)
              continue;
            let d = u.findChild(0, u.buffer.length, t, r - f, o);
            if (d > -1)
              return new Qe(new As(i, u, e, f), null, d);
          } else if (s & re.IncludeAnonymous || !u.type.isAnonymous || Jn(u)) {
            let d;
            if (!(s & re.IgnoreMounts) && (d = tn.get(u)) && !d.overlay)
              return new fe(d.tree, f, e, i);
            let p = new fe(u, f, e, i);
            return s & re.IncludeAnonymous || !p.type.isAnonymous ? p : p.nextChild(t < 0 ? u.children.length - 1 : 0, t, r, o);
          }
        }
      }
      if (s & re.IncludeAnonymous || !i.type.isAnonymous || (i.index >= 0 ? e = i.index + t : e = t < 0 ? -1 : i._parent._tree.children.length, i = i._parent, !i))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, r = 0) {
    let o;
    if (!(r & re.IgnoreOverlays) && (o = tn.get(this._tree)) && o.overlay) {
      let s = e - this.from;
      for (let { from: i, to: c } of o.overlay)
        if ((t > 0 ? i <= s : i < s) && (t < 0 ? c >= s : c > s))
          return new fe(o.tree, o.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, r);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function vr(n, e, t, r) {
  let o = n.cursor(), s = [];
  if (!o.firstChild())
    return s;
  if (t != null) {
    for (; !o.type.is(t); )
      if (!o.nextSibling())
        return s;
  }
  for (; ; ) {
    if (r != null && o.type.is(r))
      return s;
    if (o.type.is(e) && s.push(o.node), !o.nextSibling())
      return r == null ? s : [];
  }
}
function Nn(n, e, t = e.length - 1) {
  for (let r = n.parent; t >= 0; r = r.parent) {
    if (!r)
      return !1;
    if (!r.type.isAnonymous) {
      if (e[t] && e[t] != r.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class As {
  constructor(e, t, r, o) {
    this.parent = e, this.buffer = t, this.index = r, this.start = o;
  }
}
class Qe extends fo {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, r) {
    super(), this.context = e, this._parent = t, this.index = r, this.type = e.buffer.set.types[e.buffer.buffer[r]];
  }
  child(e, t, r) {
    let { buffer: o } = this.context, s = o.findChild(this.index + 4, o.buffer[this.index + 3], e, t - this.context.start, r);
    return s < 0 ? null : new Qe(this.context, this, s);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, r = 0) {
    if (r & re.ExcludeBuffers)
      return null;
    let { buffer: o } = this.context, s = o.findChild(this.index + 4, o.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return s < 0 ? null : new Qe(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Qe(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Qe(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: r } = this.context, o = this.index + 4, s = r.buffer[this.index + 3];
    if (s > o) {
      let i = r.buffer[this.index + 1];
      e.push(r.slice(o, s, i)), t.push(0);
    }
    return new Le(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function po(n) {
  if (!n.length)
    return null;
  let e = 0, t = n[0];
  for (let s = 1; s < n.length; s++) {
    let i = n[s];
    (i.from > t.from || i.to < t.to) && (t = i, e = s);
  }
  let r = t instanceof fe && t.index < 0 ? null : t.parent, o = n.slice();
  return r ? o[e] = r : o.splice(e, 1), new Es(o, t);
}
class Es {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return po(this.heads);
  }
}
function Ss(n, e, t) {
  let r = n.resolveInner(e, t), o = null;
  for (let s = r instanceof fe ? r : r.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let i = s.parent;
      (o || (o = [r])).push(i.resolve(e, t)), s = i;
    } else {
      let i = tn.get(s.tree);
      if (i && i.overlay && i.overlay[0].from <= e && i.overlay[i.overlay.length - 1].to >= e) {
        let c = new fe(i.tree, i.overlay[0].from + s.from, -1, s);
        (o || (o = [r])).push(Dt(c, e, t, !1));
      }
    }
  return o ? po(o) : r;
}
class On {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof fe)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let r = e._parent; r; r = r._parent)
        this.stack.unshift(r.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: r, buffer: o } = this.buffer;
    return this.type = t || o.set.types[o.buffer[e]], this.from = r + o.buffer[e + 1], this.to = r + o.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof fe ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, r) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, r, this.mode));
    let { buffer: o } = this.buffer, s = o.findChild(this.index + 4, o.buffer[this.index + 3], e, t - this.buffer.start, r);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, r = this.mode) {
    return this.buffer ? r & re.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, r));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & re.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & re.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, r = this.stack.length - 1;
    if (e < 0) {
      let o = r < 0 ? 0 : this.stack[r] + 4;
      if (this.index != o)
        return this.yieldBuf(t.findChild(
          o,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let o = t.buffer[this.index + 3];
      if (o < (r < 0 ? t.buffer.length : t.buffer[this.stack[r] + 3]))
        return this.yieldBuf(o);
    }
    return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, r, { buffer: o } = this;
    if (o) {
      if (e > 0) {
        if (this.index < o.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (o.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: t, parent: r } = o);
    } else
      ({ index: t, _parent: r } = this._tree);
    for (; r; { index: t, _parent: r } = r)
      if (t > -1)
        for (let s = t + e, i = e < 0 ? -1 : r._tree.children.length; s != i; s += e) {
          let c = r._tree.children[s];
          if (this.mode & re.IncludeAnonymous || c instanceof et || !c.type.isAnonymous || Jn(c))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traveral. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, r = 0;
    if (e && e.context == this.buffer)
      e:
        for (let o = this.index, s = this.stack.length; s >= 0; ) {
          for (let i = e; i; i = i._parent)
            if (i.index == o) {
              if (o == this.index)
                return i;
              t = i, r = s + 1;
              break e;
            }
          o = this.stack[--s];
        }
    for (let o = r; o < this.stack.length; o++)
      t = new Qe(this.buffer, t, this.stack[o]);
    return this.bufferNode = new Qe(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let r = 0; ; ) {
      let o = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          r++;
          continue;
        }
        this.type.isAnonymous || (o = !0);
      }
      for (; o && t && t(this), o = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!r)
          return;
        this.parent(), r--, o = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return Nn(this.node, e);
    let { buffer: t } = this.buffer, { types: r } = t.set;
    for (let o = e.length - 1, s = this.stack.length - 1; o >= 0; s--) {
      if (s < 0)
        return Nn(this.node, e, o);
      let i = r[t.buffer[this.stack[s]]];
      if (!i.isAnonymous) {
        if (e[o] && e[o] != i.name)
          return !1;
        o--;
      }
    }
    return !0;
  }
}
function Jn(n) {
  return n.children.some((e) => e instanceof et || !e.type.isAnonymous || Jn(e));
}
function Ds(n) {
  var e;
  let { buffer: t, nodeSet: r, maxBufferLength: o = xs, reused: s = [], minRepeatType: i = r.types.length } = n, c = Array.isArray(t) ? new Kn(t, t.length) : t, a = r.types, l = 0, u = 0;
  function f(E, y, v, b, N, S) {
    let { id: z, start: D, end: L, size: k } = c, F = u;
    for (; k < 0; )
      if (c.next(), k == -1) {
        let Y = s[z];
        v.push(Y), b.push(D - E);
        return;
      } else if (k == -3) {
        l = z;
        return;
      } else if (k == -4) {
        u = z;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${k}`);
    let A = a[z], M, G, Ie = D - E;
    if (L - D <= o && (G = x(c.pos - y, N))) {
      let Y = new Uint16Array(G.size - G.skip), te = c.pos - G.size, ue = Y.length;
      for (; c.pos > te; )
        ue = w(G.start, Y, ue);
      M = new et(Y, L - G.start, r), Ie = G.start - E;
    } else {
      let Y = c.pos - k;
      c.next();
      let te = [], ue = [], Ne = z >= i ? z : -1, Pe = 0, ye = L;
      for (; c.pos > Y; )
        Ne >= 0 && c.id == Ne && c.size >= 0 ? (c.end <= ye - o && (g(te, ue, D, Pe, c.end, ye, Ne, F), Pe = te.length, ye = c.end), c.next()) : S > 2500 ? d(D, Y, te, ue) : f(D, Y, te, ue, Ne, S + 1);
      if (Ne >= 0 && Pe > 0 && Pe < te.length && g(te, ue, D, Pe, D, ye, Ne, F), te.reverse(), ue.reverse(), Ne > -1 && Pe > 0) {
        let Ot = p(A);
        M = Yn(A, te, ue, 0, te.length, 0, L - D, Ot, Ot);
      } else
        M = m(A, te, ue, L - D, F - L);
    }
    v.push(M), b.push(Ie);
  }
  function d(E, y, v, b) {
    let N = [], S = 0, z = -1;
    for (; c.pos > y; ) {
      let { id: D, start: L, end: k, size: F } = c;
      if (F > 4)
        c.next();
      else {
        if (z > -1 && L < z)
          break;
        z < 0 && (z = k - o), N.push(D, L, k), S++, c.next();
      }
    }
    if (S) {
      let D = new Uint16Array(S * 4), L = N[N.length - 2];
      for (let k = N.length - 3, F = 0; k >= 0; k -= 3)
        D[F++] = N[k], D[F++] = N[k + 1] - L, D[F++] = N[k + 2] - L, D[F++] = F;
      v.push(new et(D, N[2] - L, r)), b.push(L - E);
    }
  }
  function p(E) {
    return (y, v, b) => {
      let N = 0, S = y.length - 1, z, D;
      if (S >= 0 && (z = y[S]) instanceof Le) {
        if (!S && z.type == E && z.length == b)
          return z;
        (D = z.prop(W.lookAhead)) && (N = v[S] + z.length + D);
      }
      return m(E, y, v, b, N);
    };
  }
  function g(E, y, v, b, N, S, z, D) {
    let L = [], k = [];
    for (; E.length > b; )
      L.push(E.pop()), k.push(y.pop() + v - N);
    E.push(m(r.types[z], L, k, S - N, D - S)), y.push(N - v);
  }
  function m(E, y, v, b, N = 0, S) {
    if (l) {
      let z = [W.contextHash, l];
      S = S ? [z].concat(S) : [z];
    }
    if (N > 25) {
      let z = [W.lookAhead, N];
      S = S ? [z].concat(S) : [z];
    }
    return new Le(E, y, v, b, S);
  }
  function x(E, y) {
    let v = c.fork(), b = 0, N = 0, S = 0, z = v.end - o, D = { size: 0, start: 0, skip: 0 };
    e:
      for (let L = v.pos - E; v.pos > L; ) {
        let k = v.size;
        if (v.id == y && k >= 0) {
          D.size = b, D.start = N, D.skip = S, S += 4, b += 4, v.next();
          continue;
        }
        let F = v.pos - k;
        if (k < 0 || F < L || v.start < z)
          break;
        let A = v.id >= i ? 4 : 0, M = v.start;
        for (v.next(); v.pos > F; ) {
          if (v.size < 0)
            if (v.size == -3)
              A += 4;
            else
              break e;
          else
            v.id >= i && (A += 4);
          v.next();
        }
        N = M, b += k, S += A;
      }
    return (y < 0 || b == E) && (D.size = b, D.start = N, D.skip = S), D.size > 4 ? D : void 0;
  }
  function w(E, y, v) {
    let { id: b, start: N, end: S, size: z } = c;
    if (c.next(), z >= 0 && b < i) {
      let D = v;
      if (z > 4) {
        let L = c.pos - (z - 4);
        for (; c.pos > L; )
          v = w(E, y, v);
      }
      y[--v] = D, y[--v] = S - E, y[--v] = N - E, y[--v] = b;
    } else
      z == -3 ? l = b : z == -4 && (u = b);
    return v;
  }
  let _ = [], C = [];
  for (; c.pos > 0; )
    f(n.start || 0, n.bufferStart || 0, _, C, -1, 0);
  let q = (e = n.length) !== null && e !== void 0 ? e : _.length ? C[0] + _[0].length : 0;
  return new Le(a[n.topID], _.reverse(), C.reverse(), q);
}
const kr = /* @__PURE__ */ new WeakMap();
function Wt(n, e) {
  if (!n.isAnonymous || e instanceof et || e.type != n)
    return 1;
  let t = kr.get(e);
  if (t == null) {
    t = 1;
    for (let r of e.children) {
      if (r.type != n || !(r instanceof Le)) {
        t = 1;
        break;
      }
      t += Wt(n, r);
    }
    kr.set(e, t);
  }
  return t;
}
function Yn(n, e, t, r, o, s, i, c, a) {
  let l = 0;
  for (let g = r; g < o; g++)
    l += Wt(n, e[g]);
  let u = Math.ceil(
    l * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], d = [];
  function p(g, m, x, w, _) {
    for (let C = x; C < w; ) {
      let q = C, E = m[C], y = Wt(n, g[C]);
      for (C++; C < w; C++) {
        let v = Wt(n, g[C]);
        if (y + v >= u)
          break;
        y += v;
      }
      if (C == q + 1) {
        if (y > u) {
          let v = g[q];
          p(v.children, v.positions, 0, v.children.length, m[q] + _);
          continue;
        }
        f.push(g[q]);
      } else {
        let v = m[C - 1] + g[C - 1].length - E;
        f.push(Yn(n, g, m, q, C, E, v, null, a));
      }
      d.push(E + _ - s);
    }
  }
  return p(e, t, r, o, 0), (c || a)(f, d, i);
}
new W({ perNode: !0 });
let qs = 0;
class De {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.set = e, this.base = t, this.modified = r, this.id = qs++;
  }
  /**
  Define a new tag. If `parent` is given, the tag is treated as a
  sub-tag of that parent, and
  [highlighters](#highlight.tagHighlighter) that don't mention
  this tag will try to fall back to the parent tag (or grandparent
  tag, etc).
  */
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let t = new De([], null, []);
    if (t.set.push(t), e)
      for (let r of e.set)
        t.set.push(r);
    return t;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier() {
    let e = new nn();
    return (t) => t.modified.indexOf(e) > -1 ? t : nn.get(t.base || t, t.modified.concat(e).sort((r, o) => r.id - o.id));
  }
}
let Ts = 0;
class nn {
  constructor() {
    this.instances = [], this.id = Ts++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let r = t[0].instances.find((c) => c.base == e && Fs(t, c.modified));
    if (r)
      return r;
    let o = [], s = new De(o, e, t);
    for (let c of t)
      c.instances.push(s);
    let i = Ls(t);
    for (let c of e.set)
      if (!c.modified.length)
        for (let a of i)
          o.push(nn.get(c, a));
    return s;
  }
}
function Fs(n, e) {
  return n.length == e.length && n.every((t, r) => t == e[r]);
}
function Ls(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let r = 0, o = e.length; r < o; r++)
      e.push(e[r].concat(n[t]));
  return e.sort((t, r) => r.length - t.length);
}
new W();
function zs(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of n)
    if (!Array.isArray(s.tag))
      t[s.tag.id] = s.class;
    else
      for (let i of s.tag)
        t[i.id] = s.class;
  let { scope: r, all: o = null } = e || {};
  return {
    style: (s) => {
      let i = o;
      for (let c of s)
        for (let a of c.set) {
          let l = t[a.id];
          if (l) {
            i = i ? i + " " + l : l;
            break;
          }
        }
      return i;
    },
    scope: r
  };
}
const T = De.define, Pt = T(), Ge = T(), yr = T(Ge), _r = T(Ge), Ze = T(), Ut = T(Ze), yn = T(Ze), we = T(), tt = T(we), _e = T(), xe = T(), Bn = T(), wt = T(Bn), jt = T(), $ = {
  /**
  A comment.
  */
  comment: Pt,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: T(Pt),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: T(Pt),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: T(Pt),
  /**
  Any kind of identifier.
  */
  name: Ge,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: T(Ge),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: yr,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: T(yr),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: _r,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: T(_r),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: T(Ge),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: T(Ge),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: T(Ge),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: T(Ge),
  /**
  A literal value.
  */
  literal: Ze,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Ut,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: T(Ut),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: T(Ut),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: T(Ut),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: yn,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: T(yn),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: T(yn),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: T(Ze),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: T(Ze),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: T(Ze),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: T(Ze),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: T(Ze),
  /**
  A language keyword.
  */
  keyword: _e,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: T(_e),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: T(_e),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: T(_e),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: T(_e),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: T(_e),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: T(_e),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: T(_e),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: T(_e),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: T(_e),
  /**
  An operator.
  */
  operator: xe,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: T(xe),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: T(xe),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: T(xe),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: T(xe),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: T(xe),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: T(xe),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: T(xe),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: T(xe),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: T(xe),
  /**
  Program or markup punctuation.
  */
  punctuation: Bn,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: T(Bn),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: wt,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: T(wt),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: T(wt),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: T(wt),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: T(wt),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: we,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: tt,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: T(tt),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: T(tt),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: T(tt),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: T(tt),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: T(tt),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: T(tt),
  /**
  A prose separator (such as a horizontal rule).
  */
  contentSeparator: T(we),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: T(we),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: T(we),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: T(we),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: T(we),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: T(we),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: T(we),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: T(we),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: T(),
  /**
  Deleted text.
  */
  deleted: T(),
  /**
  Changed text.
  */
  changed: T(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: T(),
  /**
  Metadata or meta-instruction.
  */
  meta: jt,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: T(jt),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: T(jt),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: T(jt),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: De.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: De.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: De.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: De.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: De.defineModifier(),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: De.defineModifier()
};
zs([
  { tag: $.link, class: "tok-link" },
  { tag: $.heading, class: "tok-heading" },
  { tag: $.emphasis, class: "tok-emphasis" },
  { tag: $.strong, class: "tok-strong" },
  { tag: $.keyword, class: "tok-keyword" },
  { tag: $.atom, class: "tok-atom" },
  { tag: $.bool, class: "tok-bool" },
  { tag: $.url, class: "tok-url" },
  { tag: $.labelName, class: "tok-labelName" },
  { tag: $.inserted, class: "tok-inserted" },
  { tag: $.deleted, class: "tok-deleted" },
  { tag: $.literal, class: "tok-literal" },
  { tag: $.string, class: "tok-string" },
  { tag: $.number, class: "tok-number" },
  { tag: [$.regexp, $.escape, $.special($.string)], class: "tok-string2" },
  { tag: $.variableName, class: "tok-variableName" },
  { tag: $.local($.variableName), class: "tok-variableName tok-local" },
  { tag: $.definition($.variableName), class: "tok-variableName tok-definition" },
  { tag: $.special($.variableName), class: "tok-variableName2" },
  { tag: $.definition($.propertyName), class: "tok-propertyName tok-definition" },
  { tag: $.typeName, class: "tok-typeName" },
  { tag: $.namespace, class: "tok-namespace" },
  { tag: $.className, class: "tok-className" },
  { tag: $.macroName, class: "tok-macroName" },
  { tag: $.propertyName, class: "tok-propertyName" },
  { tag: $.operator, class: "tok-operator" },
  { tag: $.comment, class: "tok-comment" },
  { tag: $.meta, class: "tok-meta" },
  { tag: $.invalid, class: "tok-invalid" },
  { tag: $.punctuation, class: "tok-punctuation" }
]);
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
var ot = Object.assign || function(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e];
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  }
  return n;
}, Ht = function(e) {
  return e.tagName === "IMG";
}, Rs = function(e) {
  return NodeList.prototype.isPrototypeOf(e);
}, Kt = function(e) {
  return e && e.nodeType === 1;
}, xr = function(e) {
  var t = e.currentSrc || e.src;
  return t.substr(-4).toLowerCase() === ".svg";
}, wr = function(e) {
  try {
    return Array.isArray(e) ? e.filter(Ht) : Rs(e) ? [].slice.call(e).filter(Ht) : Kt(e) ? [e].filter(Ht) : typeof e == "string" ? [].slice.call(document.querySelectorAll(e)).filter(Ht) : [];
  } catch {
    throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
  }
}, Is = function(e) {
  var t = document.createElement("div");
  return t.classList.add("medium-zoom-overlay"), t.style.background = e, t;
}, Ns = function(e) {
  var t = e.getBoundingClientRect(), r = t.top, o = t.left, s = t.width, i = t.height, c = e.cloneNode(), a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, l = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  return c.removeAttribute("id"), c.style.position = "absolute", c.style.top = r + a + "px", c.style.left = o + l + "px", c.style.width = s + "px", c.style.height = i + "px", c.style.transform = "", c;
}, ft = function(e, t) {
  var r = ot({
    bubbles: !1,
    cancelable: !1,
    detail: void 0
  }, t);
  if (typeof window.CustomEvent == "function")
    return new CustomEvent(e, r);
  var o = document.createEvent("CustomEvent");
  return o.initCustomEvent(e, r.bubbles, r.cancelable, r.detail), o;
}, Os = function n(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = window.Promise || function(D) {
    function L() {
    }
    D(L, L);
  }, o = function(D) {
    var L = D.target;
    if (L === N) {
      g();
      return;
    }
    C.indexOf(L) !== -1 && m({ target: L });
  }, s = function() {
    if (!(E || !b.original)) {
      var D = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      Math.abs(y - D) > v.scrollOffset && setTimeout(g, 150);
    }
  }, i = function(D) {
    var L = D.key || D.keyCode;
    (L === "Escape" || L === "Esc" || L === 27) && g();
  }, c = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, L = D;
    if (D.background && (N.style.background = D.background), D.container && D.container instanceof Object && (L.container = ot({}, v.container, D.container)), D.template) {
      var k = Kt(D.template) ? D.template : document.querySelector(D.template);
      L.template = k;
    }
    return v = ot({}, v, L), C.forEach(function(F) {
      F.dispatchEvent(ft("medium-zoom:update", {
        detail: { zoom: S }
      }));
    }), S;
  }, a = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return n(ot({}, v, D));
  }, l = function() {
    for (var D = arguments.length, L = Array(D), k = 0; k < D; k++)
      L[k] = arguments[k];
    var F = L.reduce(function(A, M) {
      return [].concat(A, wr(M));
    }, []);
    return F.filter(function(A) {
      return C.indexOf(A) === -1;
    }).forEach(function(A) {
      C.push(A), A.classList.add("medium-zoom-image");
    }), q.forEach(function(A) {
      var M = A.type, G = A.listener, Ie = A.options;
      F.forEach(function(Y) {
        Y.addEventListener(M, G, Ie);
      });
    }), S;
  }, u = function() {
    for (var D = arguments.length, L = Array(D), k = 0; k < D; k++)
      L[k] = arguments[k];
    b.zoomed && g();
    var F = L.length > 0 ? L.reduce(function(A, M) {
      return [].concat(A, wr(M));
    }, []) : C;
    return F.forEach(function(A) {
      A.classList.remove("medium-zoom-image"), A.dispatchEvent(ft("medium-zoom:detach", {
        detail: { zoom: S }
      }));
    }), C = C.filter(function(A) {
      return F.indexOf(A) === -1;
    }), S;
  }, f = function(D, L) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return C.forEach(function(F) {
      F.addEventListener("medium-zoom:" + D, L, k);
    }), q.push({ type: "medium-zoom:" + D, listener: L, options: k }), S;
  }, d = function(D, L) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return C.forEach(function(F) {
      F.removeEventListener("medium-zoom:" + D, L, k);
    }), q = q.filter(function(F) {
      return !(F.type === "medium-zoom:" + D && F.listener.toString() === L.toString());
    }), S;
  }, p = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, L = D.target, k = function() {
      var A = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }, M = void 0, G = void 0;
      if (v.container)
        if (v.container instanceof Object)
          A = ot({}, A, v.container), M = A.width - A.left - A.right - v.margin * 2, G = A.height - A.top - A.bottom - v.margin * 2;
        else {
          var Ie = Kt(v.container) ? v.container : document.querySelector(v.container), Y = Ie.getBoundingClientRect(), te = Y.width, ue = Y.height, Ne = Y.left, Pe = Y.top;
          A = ot({}, A, {
            width: te,
            height: ue,
            left: Ne,
            top: Pe
          });
        }
      M = M || A.width - v.margin * 2, G = G || A.height - v.margin * 2;
      var ye = b.zoomedHd || b.original, Ot = xr(ye) ? M : ye.naturalWidth || M, Go = xr(ye) ? G : ye.naturalHeight || G, Bt = ye.getBoundingClientRect(), Zo = Bt.top, Wo = Bt.left, gn = Bt.width, bn = Bt.height, Ko = Math.min(Math.max(gn, Ot), M) / gn, Jo = Math.min(Math.max(bn, Go), G) / bn, vn = Math.min(Ko, Jo), Yo = (-Wo + (M - gn) / 2 + v.margin + A.left) / vn, Qo = (-Zo + (G - bn) / 2 + v.margin + A.top) / vn, ur = "scale(" + vn + ") translate3d(" + Yo + "px, " + Qo + "px, 0)";
      b.zoomed.style.transform = ur, b.zoomedHd && (b.zoomedHd.style.transform = ur);
    };
    return new r(function(F) {
      if (L && C.indexOf(L) === -1) {
        F(S);
        return;
      }
      var A = function te() {
        E = !1, b.zoomed.removeEventListener("transitionend", te), b.original.dispatchEvent(ft("medium-zoom:opened", {
          detail: { zoom: S }
        })), F(S);
      };
      if (b.zoomed) {
        F(S);
        return;
      }
      if (L)
        b.original = L;
      else if (C.length > 0) {
        var M = C;
        b.original = M[0];
      } else {
        F(S);
        return;
      }
      if (b.original.dispatchEvent(ft("medium-zoom:open", {
        detail: { zoom: S }
      })), y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, E = !0, b.zoomed = Ns(b.original), document.body.appendChild(N), v.template) {
        var G = Kt(v.template) ? v.template : document.querySelector(v.template);
        b.template = document.createElement("div"), b.template.appendChild(G.content.cloneNode(!0)), document.body.appendChild(b.template);
      }
      if (b.original.parentElement && b.original.parentElement.tagName === "PICTURE" && b.original.currentSrc && (b.zoomed.src = b.original.currentSrc), document.body.appendChild(b.zoomed), window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      }), b.original.classList.add("medium-zoom-image--hidden"), b.zoomed.classList.add("medium-zoom-image--opened"), b.zoomed.addEventListener("click", g), b.zoomed.addEventListener("transitionend", A), b.original.getAttribute("data-zoom-src")) {
        b.zoomedHd = b.zoomed.cloneNode(), b.zoomedHd.removeAttribute("srcset"), b.zoomedHd.removeAttribute("sizes"), b.zoomedHd.removeAttribute("loading"), b.zoomedHd.src = b.zoomed.getAttribute("data-zoom-src"), b.zoomedHd.onerror = function() {
          clearInterval(Ie), console.warn("Unable to reach the zoom image target " + b.zoomedHd.src), b.zoomedHd = null, k();
        };
        var Ie = setInterval(function() {
          b.zoomedHd.complete && (clearInterval(Ie), b.zoomedHd.classList.add("medium-zoom-image--opened"), b.zoomedHd.addEventListener("click", g), document.body.appendChild(b.zoomedHd), k());
        }, 10);
      } else if (b.original.hasAttribute("srcset")) {
        b.zoomedHd = b.zoomed.cloneNode(), b.zoomedHd.removeAttribute("sizes"), b.zoomedHd.removeAttribute("loading");
        var Y = b.zoomedHd.addEventListener("load", function() {
          b.zoomedHd.removeEventListener("load", Y), b.zoomedHd.classList.add("medium-zoom-image--opened"), b.zoomedHd.addEventListener("click", g), document.body.appendChild(b.zoomedHd), k();
        });
      } else
        k();
    });
  }, g = function() {
    return new r(function(D) {
      if (E || !b.original) {
        D(S);
        return;
      }
      var L = function k() {
        b.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(b.zoomed), b.zoomedHd && document.body.removeChild(b.zoomedHd), document.body.removeChild(N), b.zoomed.classList.remove("medium-zoom-image--opened"), b.template && document.body.removeChild(b.template), E = !1, b.zoomed.removeEventListener("transitionend", k), b.original.dispatchEvent(ft("medium-zoom:closed", {
          detail: { zoom: S }
        })), b.original = null, b.zoomed = null, b.zoomedHd = null, b.template = null, D(S);
      };
      E = !0, document.body.classList.remove("medium-zoom--opened"), b.zoomed.style.transform = "", b.zoomedHd && (b.zoomedHd.style.transform = ""), b.template && (b.template.style.transition = "opacity 150ms", b.template.style.opacity = 0), b.original.dispatchEvent(ft("medium-zoom:close", {
        detail: { zoom: S }
      })), b.zoomed.addEventListener("transitionend", L);
    });
  }, m = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, L = D.target;
    return b.original ? g() : p({ target: L });
  }, x = function() {
    return v;
  }, w = function() {
    return C;
  }, _ = function() {
    return b.original;
  }, C = [], q = [], E = !1, y = 0, v = t, b = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
    // If the selector is omitted, it's replaced by the options
  };
  Object.prototype.toString.call(e) === "[object Object]" ? v = e : (e || typeof e == "string") && l(e), v = ot({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, v);
  var N = Is(v.background);
  document.addEventListener("click", o), document.addEventListener("keyup", i), document.addEventListener("scroll", s), window.addEventListener("resize", g);
  var S = {
    open: p,
    close: g,
    toggle: m,
    update: c,
    clone: a,
    attach: l,
    detach: u,
    on: f,
    off: d,
    getOptions: x,
    getImages: w,
    getZoomedImage: _
  };
  return S;
};
function Bs(n, e) {
  e === void 0 && (e = {});
  var t = e.insertAt;
  if (!(!n || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n));
  }
}
var $s = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
Bs($s);
const Ms = Os;
function Qn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Ps(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var Us = function() {
  var n = document.getSelection();
  if (!n.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, t = [], r = 0; r < n.rangeCount; r++)
    t.push(n.getRangeAt(r));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return n.removeAllRanges(), function() {
    n.type === "Caret" && n.removeAllRanges(), n.rangeCount || t.forEach(function(o) {
      n.addRange(o);
    }), e && e.focus();
  };
}, js = Us, Cr = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, Hs = "Copy to clipboard: #{key}, Enter";
function Vs(n) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return n.replace(/#{\s*key\s*}/g, e);
}
function Gs(n, e) {
  var t, r, o, s, i, c, a = !1;
  e || (e = {}), t = e.debug || !1;
  try {
    o = js(), s = document.createRange(), i = document.getSelection(), c = document.createElement("span"), c.textContent = n, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", function(u) {
      if (u.stopPropagation(), e.format)
        if (u.preventDefault(), typeof u.clipboardData > "u") {
          t && console.warn("unable to use e.clipboardData"), t && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var f = Cr[e.format] || Cr.default;
          window.clipboardData.setData(f, n);
        } else
          u.clipboardData.clearData(), u.clipboardData.setData(e.format, n);
      e.onCopy && (u.preventDefault(), e.onCopy(u.clipboardData));
    }), document.body.appendChild(c), s.selectNodeContents(c), i.addRange(s);
    var l = document.execCommand("copy");
    if (!l)
      throw new Error("copy command was unsuccessful");
    a = !0;
  } catch (u) {
    t && console.error("unable to copy using execCommand: ", u), t && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", n), e.onCopy && e.onCopy(window.clipboardData), a = !0;
    } catch (f) {
      t && console.error("unable to copy using clipboardData: ", f), t && console.error("falling back to prompt"), r = Vs("message" in e ? e.message : Hs), window.prompt(r, n);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(s) : i.removeAllRanges()), c && document.body.removeChild(c), o();
  }
  return a;
}
var Zs = Gs;
const Ws = /* @__PURE__ */ Qn(Zs);
var P = {};
const Ks = "Á", Js = "á", Ys = "Ă", Qs = "ă", Xs = "∾", ei = "∿", ti = "∾̳", ni = "Â", ri = "â", oi = "´", si = "А", ii = "а", ci = "Æ", ai = "æ", li = "⁡", ui = "𝔄", hi = "𝔞", fi = "À", pi = "à", di = "ℵ", mi = "ℵ", gi = "Α", bi = "α", vi = "Ā", ki = "ā", yi = "⨿", _i = "&", xi = "&", wi = "⩕", Ci = "⩓", Ai = "∧", Ei = "⩜", Si = "⩘", Di = "⩚", qi = "∠", Ti = "⦤", Fi = "∠", Li = "⦨", zi = "⦩", Ri = "⦪", Ii = "⦫", Ni = "⦬", Oi = "⦭", Bi = "⦮", $i = "⦯", Mi = "∡", Pi = "∟", Ui = "⊾", ji = "⦝", Hi = "∢", Vi = "Å", Gi = "⍼", Zi = "Ą", Wi = "ą", Ki = "𝔸", Ji = "𝕒", Yi = "⩯", Qi = "≈", Xi = "⩰", ec = "≊", tc = "≋", nc = "'", rc = "⁡", oc = "≈", sc = "≊", ic = "Å", cc = "å", ac = "𝒜", lc = "𝒶", uc = "≔", hc = "*", fc = "≈", pc = "≍", dc = "Ã", mc = "ã", gc = "Ä", bc = "ä", vc = "∳", kc = "⨑", yc = "≌", _c = "϶", xc = "‵", wc = "∽", Cc = "⋍", Ac = "∖", Ec = "⫧", Sc = "⊽", Dc = "⌅", qc = "⌆", Tc = "⌅", Fc = "⎵", Lc = "⎶", zc = "≌", Rc = "Б", Ic = "б", Nc = "„", Oc = "∵", Bc = "∵", $c = "∵", Mc = "⦰", Pc = "϶", Uc = "ℬ", jc = "ℬ", Hc = "Β", Vc = "β", Gc = "ℶ", Zc = "≬", Wc = "𝔅", Kc = "𝔟", Jc = "⋂", Yc = "◯", Qc = "⋃", Xc = "⨀", ea = "⨁", ta = "⨂", na = "⨆", ra = "★", oa = "▽", sa = "△", ia = "⨄", ca = "⋁", aa = "⋀", la = "⤍", ua = "⧫", ha = "▪", fa = "▴", pa = "▾", da = "◂", ma = "▸", ga = "␣", ba = "▒", va = "░", ka = "▓", ya = "█", _a = "=⃥", xa = "≡⃥", wa = "⫭", Ca = "⌐", Aa = "𝔹", Ea = "𝕓", Sa = "⊥", Da = "⊥", qa = "⋈", Ta = "⧉", Fa = "┐", La = "╕", za = "╖", Ra = "╗", Ia = "┌", Na = "╒", Oa = "╓", Ba = "╔", $a = "─", Ma = "═", Pa = "┬", Ua = "╤", ja = "╥", Ha = "╦", Va = "┴", Ga = "╧", Za = "╨", Wa = "╩", Ka = "⊟", Ja = "⊞", Ya = "⊠", Qa = "┘", Xa = "╛", el = "╜", tl = "╝", nl = "└", rl = "╘", ol = "╙", sl = "╚", il = "│", cl = "║", al = "┼", ll = "╪", ul = "╫", hl = "╬", fl = "┤", pl = "╡", dl = "╢", ml = "╣", gl = "├", bl = "╞", vl = "╟", kl = "╠", yl = "‵", _l = "˘", xl = "˘", wl = "¦", Cl = "𝒷", Al = "ℬ", El = "⁏", Sl = "∽", Dl = "⋍", ql = "⧅", Tl = "\\", Fl = "⟈", Ll = "•", zl = "•", Rl = "≎", Il = "⪮", Nl = "≏", Ol = "≎", Bl = "≏", $l = "Ć", Ml = "ć", Pl = "⩄", Ul = "⩉", jl = "⩋", Hl = "∩", Vl = "⋒", Gl = "⩇", Zl = "⩀", Wl = "ⅅ", Kl = "∩︀", Jl = "⁁", Yl = "ˇ", Ql = "ℭ", Xl = "⩍", eu = "Č", tu = "č", nu = "Ç", ru = "ç", ou = "Ĉ", su = "ĉ", iu = "∰", cu = "⩌", au = "⩐", lu = "Ċ", uu = "ċ", hu = "¸", fu = "¸", pu = "⦲", du = "¢", mu = "·", gu = "·", bu = "𝔠", vu = "ℭ", ku = "Ч", yu = "ч", _u = "✓", xu = "✓", wu = "Χ", Cu = "χ", Au = "ˆ", Eu = "≗", Su = "↺", Du = "↻", qu = "⊛", Tu = "⊚", Fu = "⊝", Lu = "⊙", zu = "®", Ru = "Ⓢ", Iu = "⊖", Nu = "⊕", Ou = "⊗", Bu = "○", $u = "⧃", Mu = "≗", Pu = "⨐", Uu = "⫯", ju = "⧂", Hu = "∲", Vu = "”", Gu = "’", Zu = "♣", Wu = "♣", Ku = ":", Ju = "∷", Yu = "⩴", Qu = "≔", Xu = "≔", eh = ",", th = "@", nh = "∁", rh = "∘", oh = "∁", sh = "ℂ", ih = "≅", ch = "⩭", ah = "≡", lh = "∮", uh = "∯", hh = "∮", fh = "𝕔", ph = "ℂ", dh = "∐", mh = "∐", gh = "©", bh = "©", vh = "℗", kh = "∳", yh = "↵", _h = "✗", xh = "⨯", wh = "𝒞", Ch = "𝒸", Ah = "⫏", Eh = "⫑", Sh = "⫐", Dh = "⫒", qh = "⋯", Th = "⤸", Fh = "⤵", Lh = "⋞", zh = "⋟", Rh = "↶", Ih = "⤽", Nh = "⩈", Oh = "⩆", Bh = "≍", $h = "∪", Mh = "⋓", Ph = "⩊", Uh = "⊍", jh = "⩅", Hh = "∪︀", Vh = "↷", Gh = "⤼", Zh = "⋞", Wh = "⋟", Kh = "⋎", Jh = "⋏", Yh = "¤", Qh = "↶", Xh = "↷", ef = "⋎", tf = "⋏", nf = "∲", rf = "∱", of = "⌭", sf = "†", cf = "‡", af = "ℸ", lf = "↓", uf = "↡", hf = "⇓", ff = "‐", pf = "⫤", df = "⊣", mf = "⤏", gf = "˝", bf = "Ď", vf = "ď", kf = "Д", yf = "д", _f = "‡", xf = "⇊", wf = "ⅅ", Cf = "ⅆ", Af = "⤑", Ef = "⩷", Sf = "°", Df = "∇", qf = "Δ", Tf = "δ", Ff = "⦱", Lf = "⥿", zf = "𝔇", Rf = "𝔡", If = "⥥", Nf = "⇃", Of = "⇂", Bf = "´", $f = "˙", Mf = "˝", Pf = "`", Uf = "˜", jf = "⋄", Hf = "⋄", Vf = "⋄", Gf = "♦", Zf = "♦", Wf = "¨", Kf = "ⅆ", Jf = "ϝ", Yf = "⋲", Qf = "÷", Xf = "÷", ep = "⋇", tp = "⋇", np = "Ђ", rp = "ђ", op = "⌞", sp = "⌍", ip = "$", cp = "𝔻", ap = "𝕕", lp = "¨", up = "˙", hp = "⃜", fp = "≐", pp = "≑", dp = "≐", mp = "∸", gp = "∔", bp = "⊡", vp = "⌆", kp = "∯", yp = "¨", _p = "⇓", xp = "⇐", wp = "⇔", Cp = "⫤", Ap = "⟸", Ep = "⟺", Sp = "⟹", Dp = "⇒", qp = "⊨", Tp = "⇑", Fp = "⇕", Lp = "∥", zp = "⤓", Rp = "↓", Ip = "↓", Np = "⇓", Op = "⇵", Bp = "̑", $p = "⇊", Mp = "⇃", Pp = "⇂", Up = "⥐", jp = "⥞", Hp = "⥖", Vp = "↽", Gp = "⥟", Zp = "⥗", Wp = "⇁", Kp = "↧", Jp = "⊤", Yp = "⤐", Qp = "⌟", Xp = "⌌", ed = "𝒟", td = "𝒹", nd = "Ѕ", rd = "ѕ", od = "⧶", sd = "Đ", id = "đ", cd = "⋱", ad = "▿", ld = "▾", ud = "⇵", hd = "⥯", fd = "⦦", pd = "Џ", dd = "џ", md = "⟿", gd = "É", bd = "é", vd = "⩮", kd = "Ě", yd = "ě", _d = "Ê", xd = "ê", wd = "≖", Cd = "≕", Ad = "Э", Ed = "э", Sd = "⩷", Dd = "Ė", qd = "ė", Td = "≑", Fd = "ⅇ", Ld = "≒", zd = "𝔈", Rd = "𝔢", Id = "⪚", Nd = "È", Od = "è", Bd = "⪖", $d = "⪘", Md = "⪙", Pd = "∈", Ud = "⏧", jd = "ℓ", Hd = "⪕", Vd = "⪗", Gd = "Ē", Zd = "ē", Wd = "∅", Kd = "∅", Jd = "◻", Yd = "∅", Qd = "▫", Xd = " ", em = " ", tm = " ", nm = "Ŋ", rm = "ŋ", om = " ", sm = "Ę", im = "ę", cm = "𝔼", am = "𝕖", lm = "⋕", um = "⧣", hm = "⩱", fm = "ε", pm = "Ε", dm = "ε", mm = "ϵ", gm = "≖", bm = "≕", vm = "≂", km = "⪖", ym = "⪕", _m = "⩵", xm = "=", wm = "≂", Cm = "≟", Am = "⇌", Em = "≡", Sm = "⩸", Dm = "⧥", qm = "⥱", Tm = "≓", Fm = "ℯ", Lm = "ℰ", zm = "≐", Rm = "⩳", Im = "≂", Nm = "Η", Om = "η", Bm = "Ð", $m = "ð", Mm = "Ë", Pm = "ë", Um = "€", jm = "!", Hm = "∃", Vm = "∃", Gm = "ℰ", Zm = "ⅇ", Wm = "ⅇ", Km = "≒", Jm = "Ф", Ym = "ф", Qm = "♀", Xm = "ﬃ", eg = "ﬀ", tg = "ﬄ", ng = "𝔉", rg = "𝔣", og = "ﬁ", sg = "◼", ig = "▪", cg = "fj", ag = "♭", lg = "ﬂ", ug = "▱", hg = "ƒ", fg = "𝔽", pg = "𝕗", dg = "∀", mg = "∀", gg = "⋔", bg = "⫙", vg = "ℱ", kg = "⨍", yg = "½", _g = "⅓", xg = "¼", wg = "⅕", Cg = "⅙", Ag = "⅛", Eg = "⅔", Sg = "⅖", Dg = "¾", qg = "⅗", Tg = "⅜", Fg = "⅘", Lg = "⅚", zg = "⅝", Rg = "⅞", Ig = "⁄", Ng = "⌢", Og = "𝒻", Bg = "ℱ", $g = "ǵ", Mg = "Γ", Pg = "γ", Ug = "Ϝ", jg = "ϝ", Hg = "⪆", Vg = "Ğ", Gg = "ğ", Zg = "Ģ", Wg = "Ĝ", Kg = "ĝ", Jg = "Г", Yg = "г", Qg = "Ġ", Xg = "ġ", e0 = "≥", t0 = "≧", n0 = "⪌", r0 = "⋛", o0 = "≥", s0 = "≧", i0 = "⩾", c0 = "⪩", a0 = "⩾", l0 = "⪀", u0 = "⪂", h0 = "⪄", f0 = "⋛︀", p0 = "⪔", d0 = "𝔊", m0 = "𝔤", g0 = "≫", b0 = "⋙", v0 = "⋙", k0 = "ℷ", y0 = "Ѓ", _0 = "ѓ", x0 = "⪥", w0 = "≷", C0 = "⪒", A0 = "⪤", E0 = "⪊", S0 = "⪊", D0 = "⪈", q0 = "≩", T0 = "⪈", F0 = "≩", L0 = "⋧", z0 = "𝔾", R0 = "𝕘", I0 = "`", N0 = "≥", O0 = "⋛", B0 = "≧", $0 = "⪢", M0 = "≷", P0 = "⩾", U0 = "≳", j0 = "𝒢", H0 = "ℊ", V0 = "≳", G0 = "⪎", Z0 = "⪐", W0 = "⪧", K0 = "⩺", J0 = ">", Y0 = ">", Q0 = "≫", X0 = "⋗", eb = "⦕", tb = "⩼", nb = "⪆", rb = "⥸", ob = "⋗", sb = "⋛", ib = "⪌", cb = "≷", ab = "≳", lb = "≩︀", ub = "≩︀", hb = "ˇ", fb = " ", pb = "½", db = "ℋ", mb = "Ъ", gb = "ъ", bb = "⥈", vb = "↔", kb = "⇔", yb = "↭", _b = "^", xb = "ℏ", wb = "Ĥ", Cb = "ĥ", Ab = "♥", Eb = "♥", Sb = "…", Db = "⊹", qb = "𝔥", Tb = "ℌ", Fb = "ℋ", Lb = "⤥", zb = "⤦", Rb = "⇿", Ib = "∻", Nb = "↩", Ob = "↪", Bb = "𝕙", $b = "ℍ", Mb = "―", Pb = "─", Ub = "𝒽", jb = "ℋ", Hb = "ℏ", Vb = "Ħ", Gb = "ħ", Zb = "≎", Wb = "≏", Kb = "⁃", Jb = "‐", Yb = "Í", Qb = "í", Xb = "⁣", ev = "Î", tv = "î", nv = "И", rv = "и", ov = "İ", sv = "Е", iv = "е", cv = "¡", av = "⇔", lv = "𝔦", uv = "ℑ", hv = "Ì", fv = "ì", pv = "ⅈ", dv = "⨌", mv = "∭", gv = "⧜", bv = "℩", vv = "Ĳ", kv = "ĳ", yv = "Ī", _v = "ī", xv = "ℑ", wv = "ⅈ", Cv = "ℐ", Av = "ℑ", Ev = "ı", Sv = "ℑ", Dv = "⊷", qv = "Ƶ", Tv = "⇒", Fv = "℅", Lv = "∞", zv = "⧝", Rv = "ı", Iv = "⊺", Nv = "∫", Ov = "∬", Bv = "ℤ", $v = "∫", Mv = "⊺", Pv = "⋂", Uv = "⨗", jv = "⨼", Hv = "⁣", Vv = "⁢", Gv = "Ё", Zv = "ё", Wv = "Į", Kv = "į", Jv = "𝕀", Yv = "𝕚", Qv = "Ι", Xv = "ι", ek = "⨼", tk = "¿", nk = "𝒾", rk = "ℐ", ok = "∈", sk = "⋵", ik = "⋹", ck = "⋴", ak = "⋳", lk = "∈", uk = "⁢", hk = "Ĩ", fk = "ĩ", pk = "І", dk = "і", mk = "Ï", gk = "ï", bk = "Ĵ", vk = "ĵ", kk = "Й", yk = "й", _k = "𝔍", xk = "𝔧", wk = "ȷ", Ck = "𝕁", Ak = "𝕛", Ek = "𝒥", Sk = "𝒿", Dk = "Ј", qk = "ј", Tk = "Є", Fk = "є", Lk = "Κ", zk = "κ", Rk = "ϰ", Ik = "Ķ", Nk = "ķ", Ok = "К", Bk = "к", $k = "𝔎", Mk = "𝔨", Pk = "ĸ", Uk = "Х", jk = "х", Hk = "Ќ", Vk = "ќ", Gk = "𝕂", Zk = "𝕜", Wk = "𝒦", Kk = "𝓀", Jk = "⇚", Yk = "Ĺ", Qk = "ĺ", Xk = "⦴", ey = "ℒ", ty = "Λ", ny = "λ", ry = "⟨", oy = "⟪", sy = "⦑", iy = "⟨", cy = "⪅", ay = "ℒ", ly = "«", uy = "⇤", hy = "⤟", fy = "←", py = "↞", dy = "⇐", my = "⤝", gy = "↩", by = "↫", vy = "⤹", ky = "⥳", yy = "↢", _y = "⤙", xy = "⤛", wy = "⪫", Cy = "⪭", Ay = "⪭︀", Ey = "⤌", Sy = "⤎", Dy = "❲", qy = "{", Ty = "[", Fy = "⦋", Ly = "⦏", zy = "⦍", Ry = "Ľ", Iy = "ľ", Ny = "Ļ", Oy = "ļ", By = "⌈", $y = "{", My = "Л", Py = "л", Uy = "⤶", jy = "“", Hy = "„", Vy = "⥧", Gy = "⥋", Zy = "↲", Wy = "≤", Ky = "≦", Jy = "⟨", Yy = "⇤", Qy = "←", Xy = "←", e_ = "⇐", t_ = "⇆", n_ = "↢", r_ = "⌈", o_ = "⟦", s_ = "⥡", i_ = "⥙", c_ = "⇃", a_ = "⌊", l_ = "↽", u_ = "↼", h_ = "⇇", f_ = "↔", p_ = "↔", d_ = "⇔", m_ = "⇆", g_ = "⇋", b_ = "↭", v_ = "⥎", k_ = "↤", y_ = "⊣", __ = "⥚", x_ = "⋋", w_ = "⧏", C_ = "⊲", A_ = "⊴", E_ = "⥑", S_ = "⥠", D_ = "⥘", q_ = "↿", T_ = "⥒", F_ = "↼", L_ = "⪋", z_ = "⋚", R_ = "≤", I_ = "≦", N_ = "⩽", O_ = "⪨", B_ = "⩽", $_ = "⩿", M_ = "⪁", P_ = "⪃", U_ = "⋚︀", j_ = "⪓", H_ = "⪅", V_ = "⋖", G_ = "⋚", Z_ = "⪋", W_ = "⋚", K_ = "≦", J_ = "≶", Y_ = "≶", Q_ = "⪡", X_ = "≲", ex = "⩽", tx = "≲", nx = "⥼", rx = "⌊", ox = "𝔏", sx = "𝔩", ix = "≶", cx = "⪑", ax = "⥢", lx = "↽", ux = "↼", hx = "⥪", fx = "▄", px = "Љ", dx = "љ", mx = "⇇", gx = "≪", bx = "⋘", vx = "⌞", kx = "⇚", yx = "⥫", _x = "◺", xx = "Ŀ", wx = "ŀ", Cx = "⎰", Ax = "⎰", Ex = "⪉", Sx = "⪉", Dx = "⪇", qx = "≨", Tx = "⪇", Fx = "≨", Lx = "⋦", zx = "⟬", Rx = "⇽", Ix = "⟦", Nx = "⟵", Ox = "⟵", Bx = "⟸", $x = "⟷", Mx = "⟷", Px = "⟺", Ux = "⟼", jx = "⟶", Hx = "⟶", Vx = "⟹", Gx = "↫", Zx = "↬", Wx = "⦅", Kx = "𝕃", Jx = "𝕝", Yx = "⨭", Qx = "⨴", Xx = "∗", ew = "_", tw = "↙", nw = "↘", rw = "◊", ow = "◊", sw = "⧫", iw = "(", cw = "⦓", aw = "⇆", lw = "⌟", uw = "⇋", hw = "⥭", fw = "‎", pw = "⊿", dw = "‹", mw = "𝓁", gw = "ℒ", bw = "↰", vw = "↰", kw = "≲", yw = "⪍", _w = "⪏", xw = "[", ww = "‘", Cw = "‚", Aw = "Ł", Ew = "ł", Sw = "⪦", Dw = "⩹", qw = "<", Tw = "<", Fw = "≪", Lw = "⋖", zw = "⋋", Rw = "⋉", Iw = "⥶", Nw = "⩻", Ow = "◃", Bw = "⊴", $w = "◂", Mw = "⦖", Pw = "⥊", Uw = "⥦", jw = "≨︀", Hw = "≨︀", Vw = "¯", Gw = "♂", Zw = "✠", Ww = "✠", Kw = "↦", Jw = "↦", Yw = "↧", Qw = "↤", Xw = "↥", e1 = "▮", t1 = "⨩", n1 = "М", r1 = "м", o1 = "—", s1 = "∺", i1 = "∡", c1 = " ", a1 = "ℳ", l1 = "𝔐", u1 = "𝔪", h1 = "℧", f1 = "µ", p1 = "*", d1 = "⫰", m1 = "∣", g1 = "·", b1 = "⊟", v1 = "−", k1 = "∸", y1 = "⨪", _1 = "∓", x1 = "⫛", w1 = "…", C1 = "∓", A1 = "⊧", E1 = "𝕄", S1 = "𝕞", D1 = "∓", q1 = "𝓂", T1 = "ℳ", F1 = "∾", L1 = "Μ", z1 = "μ", R1 = "⊸", I1 = "⊸", N1 = "∇", O1 = "Ń", B1 = "ń", $1 = "∠⃒", M1 = "≉", P1 = "⩰̸", U1 = "≋̸", j1 = "ŉ", H1 = "≉", V1 = "♮", G1 = "ℕ", Z1 = "♮", W1 = " ", K1 = "≎̸", J1 = "≏̸", Y1 = "⩃", Q1 = "Ň", X1 = "ň", eC = "Ņ", tC = "ņ", nC = "≇", rC = "⩭̸", oC = "⩂", sC = "Н", iC = "н", cC = "–", aC = "⤤", lC = "↗", uC = "⇗", hC = "↗", fC = "≠", pC = "≐̸", dC = "​", mC = "​", gC = "​", bC = "​", vC = "≢", kC = "⤨", yC = "≂̸", _C = "≫", xC = "≪", wC = `
`, CC = "∄", AC = "∄", EC = "𝔑", SC = "𝔫", DC = "≧̸", qC = "≱", TC = "≱", FC = "≧̸", LC = "⩾̸", zC = "⩾̸", RC = "⋙̸", IC = "≵", NC = "≫⃒", OC = "≯", BC = "≯", $C = "≫̸", MC = "↮", PC = "⇎", UC = "⫲", jC = "∋", HC = "⋼", VC = "⋺", GC = "∋", ZC = "Њ", WC = "њ", KC = "↚", JC = "⇍", YC = "‥", QC = "≦̸", XC = "≰", eA = "↚", tA = "⇍", nA = "↮", rA = "⇎", oA = "≰", sA = "≦̸", iA = "⩽̸", cA = "⩽̸", aA = "≮", lA = "⋘̸", uA = "≴", hA = "≪⃒", fA = "≮", pA = "⋪", dA = "⋬", mA = "≪̸", gA = "∤", bA = "⁠", vA = " ", kA = "𝕟", yA = "ℕ", _A = "⫬", xA = "¬", wA = "≢", CA = "≭", AA = "∦", EA = "∉", SA = "≠", DA = "≂̸", qA = "∄", TA = "≯", FA = "≱", LA = "≧̸", zA = "≫̸", RA = "≹", IA = "⩾̸", NA = "≵", OA = "≎̸", BA = "≏̸", $A = "∉", MA = "⋵̸", PA = "⋹̸", UA = "∉", jA = "⋷", HA = "⋶", VA = "⧏̸", GA = "⋪", ZA = "⋬", WA = "≮", KA = "≰", JA = "≸", YA = "≪̸", QA = "⩽̸", XA = "≴", eE = "⪢̸", tE = "⪡̸", nE = "∌", rE = "∌", oE = "⋾", sE = "⋽", iE = "⊀", cE = "⪯̸", aE = "⋠", lE = "∌", uE = "⧐̸", hE = "⋫", fE = "⋭", pE = "⊏̸", dE = "⋢", mE = "⊐̸", gE = "⋣", bE = "⊂⃒", vE = "⊈", kE = "⊁", yE = "⪰̸", _E = "⋡", xE = "≿̸", wE = "⊃⃒", CE = "⊉", AE = "≁", EE = "≄", SE = "≇", DE = "≉", qE = "∤", TE = "∦", FE = "∦", LE = "⫽⃥", zE = "∂̸", RE = "⨔", IE = "⊀", NE = "⋠", OE = "⊀", BE = "⪯̸", $E = "⪯̸", ME = "⤳̸", PE = "↛", UE = "⇏", jE = "↝̸", HE = "↛", VE = "⇏", GE = "⋫", ZE = "⋭", WE = "⊁", KE = "⋡", JE = "⪰̸", YE = "𝒩", QE = "𝓃", XE = "∤", eS = "∦", tS = "≁", nS = "≄", rS = "≄", oS = "∤", sS = "∦", iS = "⋢", cS = "⋣", aS = "⊄", lS = "⫅̸", uS = "⊈", hS = "⊂⃒", fS = "⊈", pS = "⫅̸", dS = "⊁", mS = "⪰̸", gS = "⊅", bS = "⫆̸", vS = "⊉", kS = "⊃⃒", yS = "⊉", _S = "⫆̸", xS = "≹", wS = "Ñ", CS = "ñ", AS = "≸", ES = "⋪", SS = "⋬", DS = "⋫", qS = "⋭", TS = "Ν", FS = "ν", LS = "#", zS = "№", RS = " ", IS = "≍⃒", NS = "⊬", OS = "⊭", BS = "⊮", $S = "⊯", MS = "≥⃒", PS = ">⃒", US = "⤄", jS = "⧞", HS = "⤂", VS = "≤⃒", GS = "<⃒", ZS = "⊴⃒", WS = "⤃", KS = "⊵⃒", JS = "∼⃒", YS = "⤣", QS = "↖", XS = "⇖", eD = "↖", tD = "⤧", nD = "Ó", rD = "ó", oD = "⊛", sD = "Ô", iD = "ô", cD = "⊚", aD = "О", lD = "о", uD = "⊝", hD = "Ő", fD = "ő", pD = "⨸", dD = "⊙", mD = "⦼", gD = "Œ", bD = "œ", vD = "⦿", kD = "𝔒", yD = "𝔬", _D = "˛", xD = "Ò", wD = "ò", CD = "⧁", AD = "⦵", ED = "Ω", SD = "∮", DD = "↺", qD = "⦾", TD = "⦻", FD = "‾", LD = "⧀", zD = "Ō", RD = "ō", ID = "Ω", ND = "ω", OD = "Ο", BD = "ο", $D = "⦶", MD = "⊖", PD = "𝕆", UD = "𝕠", jD = "⦷", HD = "“", VD = "‘", GD = "⦹", ZD = "⊕", WD = "↻", KD = "⩔", JD = "∨", YD = "⩝", QD = "ℴ", XD = "ℴ", eq = "ª", tq = "º", nq = "⊶", rq = "⩖", oq = "⩗", sq = "⩛", iq = "Ⓢ", cq = "𝒪", aq = "ℴ", lq = "Ø", uq = "ø", hq = "⊘", fq = "Õ", pq = "õ", dq = "⨶", mq = "⨷", gq = "⊗", bq = "Ö", vq = "ö", kq = "⌽", yq = "‾", _q = "⏞", xq = "⎴", wq = "⏜", Cq = "¶", Aq = "∥", Eq = "∥", Sq = "⫳", Dq = "⫽", qq = "∂", Tq = "∂", Fq = "П", Lq = "п", zq = "%", Rq = ".", Iq = "‰", Nq = "⊥", Oq = "‱", Bq = "𝔓", $q = "𝔭", Mq = "Φ", Pq = "φ", Uq = "ϕ", jq = "ℳ", Hq = "☎", Vq = "Π", Gq = "π", Zq = "⋔", Wq = "ϖ", Kq = "ℏ", Jq = "ℎ", Yq = "ℏ", Qq = "⨣", Xq = "⊞", eT = "⨢", tT = "+", nT = "∔", rT = "⨥", oT = "⩲", sT = "±", iT = "±", cT = "⨦", aT = "⨧", lT = "±", uT = "ℌ", hT = "⨕", fT = "𝕡", pT = "ℙ", dT = "£", mT = "⪷", gT = "⪻", bT = "≺", vT = "≼", kT = "⪷", yT = "≺", _T = "≼", xT = "≺", wT = "⪯", CT = "≼", AT = "≾", ET = "⪯", ST = "⪹", DT = "⪵", qT = "⋨", TT = "⪯", FT = "⪳", LT = "≾", zT = "′", RT = "″", IT = "ℙ", NT = "⪹", OT = "⪵", BT = "⋨", $T = "∏", MT = "∏", PT = "⌮", UT = "⌒", jT = "⌓", HT = "∝", VT = "∝", GT = "∷", ZT = "∝", WT = "≾", KT = "⊰", JT = "𝒫", YT = "𝓅", QT = "Ψ", XT = "ψ", eF = " ", tF = "𝔔", nF = "𝔮", rF = "⨌", oF = "𝕢", sF = "ℚ", iF = "⁗", cF = "𝒬", aF = "𝓆", lF = "ℍ", uF = "⨖", hF = "?", fF = "≟", pF = '"', dF = '"', mF = "⇛", gF = "∽̱", bF = "Ŕ", vF = "ŕ", kF = "√", yF = "⦳", _F = "⟩", xF = "⟫", wF = "⦒", CF = "⦥", AF = "⟩", EF = "»", SF = "⥵", DF = "⇥", qF = "⤠", TF = "⤳", FF = "→", LF = "↠", zF = "⇒", RF = "⤞", IF = "↪", NF = "↬", OF = "⥅", BF = "⥴", $F = "⤖", MF = "↣", PF = "↝", UF = "⤚", jF = "⤜", HF = "∶", VF = "ℚ", GF = "⤍", ZF = "⤏", WF = "⤐", KF = "❳", JF = "}", YF = "]", QF = "⦌", XF = "⦎", eL = "⦐", tL = "Ř", nL = "ř", rL = "Ŗ", oL = "ŗ", sL = "⌉", iL = "}", cL = "Р", aL = "р", lL = "⤷", uL = "⥩", hL = "”", fL = "”", pL = "↳", dL = "ℜ", mL = "ℛ", gL = "ℜ", bL = "ℝ", vL = "ℜ", kL = "▭", yL = "®", _L = "®", xL = "∋", wL = "⇋", CL = "⥯", AL = "⥽", EL = "⌋", SL = "𝔯", DL = "ℜ", qL = "⥤", TL = "⇁", FL = "⇀", LL = "⥬", zL = "Ρ", RL = "ρ", IL = "ϱ", NL = "⟩", OL = "⇥", BL = "→", $L = "→", ML = "⇒", PL = "⇄", UL = "↣", jL = "⌉", HL = "⟧", VL = "⥝", GL = "⥕", ZL = "⇂", WL = "⌋", KL = "⇁", JL = "⇀", YL = "⇄", QL = "⇌", XL = "⇉", ez = "↝", tz = "↦", nz = "⊢", rz = "⥛", oz = "⋌", sz = "⧐", iz = "⊳", cz = "⊵", az = "⥏", lz = "⥜", uz = "⥔", hz = "↾", fz = "⥓", pz = "⇀", dz = "˚", mz = "≓", gz = "⇄", bz = "⇌", vz = "‏", kz = "⎱", yz = "⎱", _z = "⫮", xz = "⟭", wz = "⇾", Cz = "⟧", Az = "⦆", Ez = "𝕣", Sz = "ℝ", Dz = "⨮", qz = "⨵", Tz = "⥰", Fz = ")", Lz = "⦔", zz = "⨒", Rz = "⇉", Iz = "⇛", Nz = "›", Oz = "𝓇", Bz = "ℛ", $z = "↱", Mz = "↱", Pz = "]", Uz = "’", jz = "’", Hz = "⋌", Vz = "⋊", Gz = "▹", Zz = "⊵", Wz = "▸", Kz = "⧎", Jz = "⧴", Yz = "⥨", Qz = "℞", Xz = "Ś", e2 = "ś", t2 = "‚", n2 = "⪸", r2 = "Š", o2 = "š", s2 = "⪼", i2 = "≻", c2 = "≽", a2 = "⪰", l2 = "⪴", u2 = "Ş", h2 = "ş", f2 = "Ŝ", p2 = "ŝ", d2 = "⪺", m2 = "⪶", g2 = "⋩", b2 = "⨓", v2 = "≿", k2 = "С", y2 = "с", _2 = "⊡", x2 = "⋅", w2 = "⩦", C2 = "⤥", A2 = "↘", E2 = "⇘", S2 = "↘", D2 = "§", q2 = ";", T2 = "⤩", F2 = "∖", L2 = "∖", z2 = "✶", R2 = "𝔖", I2 = "𝔰", N2 = "⌢", O2 = "♯", B2 = "Щ", $2 = "щ", M2 = "Ш", P2 = "ш", U2 = "↓", j2 = "←", H2 = "∣", V2 = "∥", G2 = "→", Z2 = "↑", W2 = "­", K2 = "Σ", J2 = "σ", Y2 = "ς", Q2 = "ς", X2 = "∼", eR = "⩪", tR = "≃", nR = "≃", rR = "⪞", oR = "⪠", sR = "⪝", iR = "⪟", cR = "≆", aR = "⨤", lR = "⥲", uR = "←", hR = "∘", fR = "∖", pR = "⨳", dR = "⧤", mR = "∣", gR = "⌣", bR = "⪪", vR = "⪬", kR = "⪬︀", yR = "Ь", _R = "ь", xR = "⌿", wR = "⧄", CR = "/", AR = "𝕊", ER = "𝕤", SR = "♠", DR = "♠", qR = "∥", TR = "⊓", FR = "⊓︀", LR = "⊔", zR = "⊔︀", RR = "√", IR = "⊏", NR = "⊑", OR = "⊏", BR = "⊑", $R = "⊐", MR = "⊒", PR = "⊐", UR = "⊒", jR = "□", HR = "□", VR = "⊓", GR = "⊏", ZR = "⊑", WR = "⊐", KR = "⊒", JR = "⊔", YR = "▪", QR = "□", XR = "▪", eI = "→", tI = "𝒮", nI = "𝓈", rI = "∖", oI = "⌣", sI = "⋆", iI = "⋆", cI = "☆", aI = "★", lI = "ϵ", uI = "ϕ", hI = "¯", fI = "⊂", pI = "⋐", dI = "⪽", mI = "⫅", gI = "⊆", bI = "⫃", vI = "⫁", kI = "⫋", yI = "⊊", _I = "⪿", xI = "⥹", wI = "⊂", CI = "⋐", AI = "⊆", EI = "⫅", SI = "⊆", DI = "⊊", qI = "⫋", TI = "⫇", FI = "⫕", LI = "⫓", zI = "⪸", RI = "≻", II = "≽", NI = "≻", OI = "⪰", BI = "≽", $I = "≿", MI = "⪰", PI = "⪺", UI = "⪶", jI = "⋩", HI = "≿", VI = "∋", GI = "∑", ZI = "∑", WI = "♪", KI = "¹", JI = "²", YI = "³", QI = "⊃", XI = "⋑", eN = "⪾", tN = "⫘", nN = "⫆", rN = "⊇", oN = "⫄", sN = "⊃", iN = "⊇", cN = "⟉", aN = "⫗", lN = "⥻", uN = "⫂", hN = "⫌", fN = "⊋", pN = "⫀", dN = "⊃", mN = "⋑", gN = "⊇", bN = "⫆", vN = "⊋", kN = "⫌", yN = "⫈", _N = "⫔", xN = "⫖", wN = "⤦", CN = "↙", AN = "⇙", EN = "↙", SN = "⤪", DN = "ß", qN = "	", TN = "⌖", FN = "Τ", LN = "τ", zN = "⎴", RN = "Ť", IN = "ť", NN = "Ţ", ON = "ţ", BN = "Т", $N = "т", MN = "⃛", PN = "⌕", UN = "𝔗", jN = "𝔱", HN = "∴", VN = "∴", GN = "∴", ZN = "Θ", WN = "θ", KN = "ϑ", JN = "ϑ", YN = "≈", QN = "∼", XN = "  ", eO = " ", tO = " ", nO = "≈", rO = "∼", oO = "Þ", sO = "þ", iO = "˜", cO = "∼", aO = "≃", lO = "≅", uO = "≈", hO = "⨱", fO = "⊠", pO = "×", dO = "⨰", mO = "∭", gO = "⤨", bO = "⌶", vO = "⫱", kO = "⊤", yO = "𝕋", _O = "𝕥", xO = "⫚", wO = "⤩", CO = "‴", AO = "™", EO = "™", SO = "▵", DO = "▿", qO = "◃", TO = "⊴", FO = "≜", LO = "▹", zO = "⊵", RO = "◬", IO = "≜", NO = "⨺", OO = "⃛", BO = "⨹", $O = "⧍", MO = "⨻", PO = "⏢", UO = "𝒯", jO = "𝓉", HO = "Ц", VO = "ц", GO = "Ћ", ZO = "ћ", WO = "Ŧ", KO = "ŧ", JO = "≬", YO = "↞", QO = "↠", XO = "Ú", eB = "ú", tB = "↑", nB = "↟", rB = "⇑", oB = "⥉", sB = "Ў", iB = "ў", cB = "Ŭ", aB = "ŭ", lB = "Û", uB = "û", hB = "У", fB = "у", pB = "⇅", dB = "Ű", mB = "ű", gB = "⥮", bB = "⥾", vB = "𝔘", kB = "𝔲", yB = "Ù", _B = "ù", xB = "⥣", wB = "↿", CB = "↾", AB = "▀", EB = "⌜", SB = "⌜", DB = "⌏", qB = "◸", TB = "Ū", FB = "ū", LB = "¨", zB = "_", RB = "⏟", IB = "⎵", NB = "⏝", OB = "⋃", BB = "⊎", $B = "Ų", MB = "ų", PB = "𝕌", UB = "𝕦", jB = "⤒", HB = "↑", VB = "↑", GB = "⇑", ZB = "⇅", WB = "↕", KB = "↕", JB = "⇕", YB = "⥮", QB = "↿", XB = "↾", e$ = "⊎", t$ = "↖", n$ = "↗", r$ = "υ", o$ = "ϒ", s$ = "ϒ", i$ = "Υ", c$ = "υ", a$ = "↥", l$ = "⊥", u$ = "⇈", h$ = "⌝", f$ = "⌝", p$ = "⌎", d$ = "Ů", m$ = "ů", g$ = "◹", b$ = "𝒰", v$ = "𝓊", k$ = "⋰", y$ = "Ũ", _$ = "ũ", x$ = "▵", w$ = "▴", C$ = "⇈", A$ = "Ü", E$ = "ü", S$ = "⦧", D$ = "⦜", q$ = "ϵ", T$ = "ϰ", F$ = "∅", L$ = "ϕ", z$ = "ϖ", R$ = "∝", I$ = "↕", N$ = "⇕", O$ = "ϱ", B$ = "ς", $$ = "⊊︀", M$ = "⫋︀", P$ = "⊋︀", U$ = "⫌︀", j$ = "ϑ", H$ = "⊲", V$ = "⊳", G$ = "⫨", Z$ = "⫫", W$ = "⫩", K$ = "В", J$ = "в", Y$ = "⊢", Q$ = "⊨", X$ = "⊩", eM = "⊫", tM = "⫦", nM = "⊻", rM = "∨", oM = "⋁", sM = "≚", iM = "⋮", cM = "|", aM = "‖", lM = "|", uM = "‖", hM = "∣", fM = "|", pM = "❘", dM = "≀", mM = " ", gM = "𝔙", bM = "𝔳", vM = "⊲", kM = "⊂⃒", yM = "⊃⃒", _M = "𝕍", xM = "𝕧", wM = "∝", CM = "⊳", AM = "𝒱", EM = "𝓋", SM = "⫋︀", DM = "⊊︀", qM = "⫌︀", TM = "⊋︀", FM = "⊪", LM = "⦚", zM = "Ŵ", RM = "ŵ", IM = "⩟", NM = "∧", OM = "⋀", BM = "≙", $M = "℘", MM = "𝔚", PM = "𝔴", UM = "𝕎", jM = "𝕨", HM = "℘", VM = "≀", GM = "≀", ZM = "𝒲", WM = "𝓌", KM = "⋂", JM = "◯", YM = "⋃", QM = "▽", XM = "𝔛", e3 = "𝔵", t3 = "⟷", n3 = "⟺", r3 = "Ξ", o3 = "ξ", s3 = "⟵", i3 = "⟸", c3 = "⟼", a3 = "⋻", l3 = "⨀", u3 = "𝕏", h3 = "𝕩", f3 = "⨁", p3 = "⨂", d3 = "⟶", m3 = "⟹", g3 = "𝒳", b3 = "𝓍", v3 = "⨆", k3 = "⨄", y3 = "△", _3 = "⋁", x3 = "⋀", w3 = "Ý", C3 = "ý", A3 = "Я", E3 = "я", S3 = "Ŷ", D3 = "ŷ", q3 = "Ы", T3 = "ы", F3 = "¥", L3 = "𝔜", z3 = "𝔶", R3 = "Ї", I3 = "ї", N3 = "𝕐", O3 = "𝕪", B3 = "𝒴", $3 = "𝓎", M3 = "Ю", P3 = "ю", U3 = "ÿ", j3 = "Ÿ", H3 = "Ź", V3 = "ź", G3 = "Ž", Z3 = "ž", W3 = "З", K3 = "з", J3 = "Ż", Y3 = "ż", Q3 = "ℨ", X3 = "​", eP = "Ζ", tP = "ζ", nP = "𝔷", rP = "ℨ", oP = "Ж", sP = "ж", iP = "⇝", cP = "𝕫", aP = "ℤ", lP = "𝒵", uP = "𝓏", hP = "‍", fP = "‌", pP = {
  Aacute: Ks,
  aacute: Js,
  Abreve: Ys,
  abreve: Qs,
  ac: Xs,
  acd: ei,
  acE: ti,
  Acirc: ni,
  acirc: ri,
  acute: oi,
  Acy: si,
  acy: ii,
  AElig: ci,
  aelig: ai,
  af: li,
  Afr: ui,
  afr: hi,
  Agrave: fi,
  agrave: pi,
  alefsym: di,
  aleph: mi,
  Alpha: gi,
  alpha: bi,
  Amacr: vi,
  amacr: ki,
  amalg: yi,
  amp: _i,
  AMP: xi,
  andand: wi,
  And: Ci,
  and: Ai,
  andd: Ei,
  andslope: Si,
  andv: Di,
  ang: qi,
  ange: Ti,
  angle: Fi,
  angmsdaa: Li,
  angmsdab: zi,
  angmsdac: Ri,
  angmsdad: Ii,
  angmsdae: Ni,
  angmsdaf: Oi,
  angmsdag: Bi,
  angmsdah: $i,
  angmsd: Mi,
  angrt: Pi,
  angrtvb: Ui,
  angrtvbd: ji,
  angsph: Hi,
  angst: Vi,
  angzarr: Gi,
  Aogon: Zi,
  aogon: Wi,
  Aopf: Ki,
  aopf: Ji,
  apacir: Yi,
  ap: Qi,
  apE: Xi,
  ape: ec,
  apid: tc,
  apos: nc,
  ApplyFunction: rc,
  approx: oc,
  approxeq: sc,
  Aring: ic,
  aring: cc,
  Ascr: ac,
  ascr: lc,
  Assign: uc,
  ast: hc,
  asymp: fc,
  asympeq: pc,
  Atilde: dc,
  atilde: mc,
  Auml: gc,
  auml: bc,
  awconint: vc,
  awint: kc,
  backcong: yc,
  backepsilon: _c,
  backprime: xc,
  backsim: wc,
  backsimeq: Cc,
  Backslash: Ac,
  Barv: Ec,
  barvee: Sc,
  barwed: Dc,
  Barwed: qc,
  barwedge: Tc,
  bbrk: Fc,
  bbrktbrk: Lc,
  bcong: zc,
  Bcy: Rc,
  bcy: Ic,
  bdquo: Nc,
  becaus: Oc,
  because: Bc,
  Because: $c,
  bemptyv: Mc,
  bepsi: Pc,
  bernou: Uc,
  Bernoullis: jc,
  Beta: Hc,
  beta: Vc,
  beth: Gc,
  between: Zc,
  Bfr: Wc,
  bfr: Kc,
  bigcap: Jc,
  bigcirc: Yc,
  bigcup: Qc,
  bigodot: Xc,
  bigoplus: ea,
  bigotimes: ta,
  bigsqcup: na,
  bigstar: ra,
  bigtriangledown: oa,
  bigtriangleup: sa,
  biguplus: ia,
  bigvee: ca,
  bigwedge: aa,
  bkarow: la,
  blacklozenge: ua,
  blacksquare: ha,
  blacktriangle: fa,
  blacktriangledown: pa,
  blacktriangleleft: da,
  blacktriangleright: ma,
  blank: ga,
  blk12: ba,
  blk14: va,
  blk34: ka,
  block: ya,
  bne: _a,
  bnequiv: xa,
  bNot: wa,
  bnot: Ca,
  Bopf: Aa,
  bopf: Ea,
  bot: Sa,
  bottom: Da,
  bowtie: qa,
  boxbox: Ta,
  boxdl: Fa,
  boxdL: La,
  boxDl: za,
  boxDL: Ra,
  boxdr: Ia,
  boxdR: Na,
  boxDr: Oa,
  boxDR: Ba,
  boxh: $a,
  boxH: Ma,
  boxhd: Pa,
  boxHd: Ua,
  boxhD: ja,
  boxHD: Ha,
  boxhu: Va,
  boxHu: Ga,
  boxhU: Za,
  boxHU: Wa,
  boxminus: Ka,
  boxplus: Ja,
  boxtimes: Ya,
  boxul: Qa,
  boxuL: Xa,
  boxUl: el,
  boxUL: tl,
  boxur: nl,
  boxuR: rl,
  boxUr: ol,
  boxUR: sl,
  boxv: il,
  boxV: cl,
  boxvh: al,
  boxvH: ll,
  boxVh: ul,
  boxVH: hl,
  boxvl: fl,
  boxvL: pl,
  boxVl: dl,
  boxVL: ml,
  boxvr: gl,
  boxvR: bl,
  boxVr: vl,
  boxVR: kl,
  bprime: yl,
  breve: _l,
  Breve: xl,
  brvbar: wl,
  bscr: Cl,
  Bscr: Al,
  bsemi: El,
  bsim: Sl,
  bsime: Dl,
  bsolb: ql,
  bsol: Tl,
  bsolhsub: Fl,
  bull: Ll,
  bullet: zl,
  bump: Rl,
  bumpE: Il,
  bumpe: Nl,
  Bumpeq: Ol,
  bumpeq: Bl,
  Cacute: $l,
  cacute: Ml,
  capand: Pl,
  capbrcup: Ul,
  capcap: jl,
  cap: Hl,
  Cap: Vl,
  capcup: Gl,
  capdot: Zl,
  CapitalDifferentialD: Wl,
  caps: Kl,
  caret: Jl,
  caron: Yl,
  Cayleys: Ql,
  ccaps: Xl,
  Ccaron: eu,
  ccaron: tu,
  Ccedil: nu,
  ccedil: ru,
  Ccirc: ou,
  ccirc: su,
  Cconint: iu,
  ccups: cu,
  ccupssm: au,
  Cdot: lu,
  cdot: uu,
  cedil: hu,
  Cedilla: fu,
  cemptyv: pu,
  cent: du,
  centerdot: mu,
  CenterDot: gu,
  cfr: bu,
  Cfr: vu,
  CHcy: ku,
  chcy: yu,
  check: _u,
  checkmark: xu,
  Chi: wu,
  chi: Cu,
  circ: Au,
  circeq: Eu,
  circlearrowleft: Su,
  circlearrowright: Du,
  circledast: qu,
  circledcirc: Tu,
  circleddash: Fu,
  CircleDot: Lu,
  circledR: zu,
  circledS: Ru,
  CircleMinus: Iu,
  CirclePlus: Nu,
  CircleTimes: Ou,
  cir: Bu,
  cirE: $u,
  cire: Mu,
  cirfnint: Pu,
  cirmid: Uu,
  cirscir: ju,
  ClockwiseContourIntegral: Hu,
  CloseCurlyDoubleQuote: Vu,
  CloseCurlyQuote: Gu,
  clubs: Zu,
  clubsuit: Wu,
  colon: Ku,
  Colon: Ju,
  Colone: Yu,
  colone: Qu,
  coloneq: Xu,
  comma: eh,
  commat: th,
  comp: nh,
  compfn: rh,
  complement: oh,
  complexes: sh,
  cong: ih,
  congdot: ch,
  Congruent: ah,
  conint: lh,
  Conint: uh,
  ContourIntegral: hh,
  copf: fh,
  Copf: ph,
  coprod: dh,
  Coproduct: mh,
  copy: gh,
  COPY: bh,
  copysr: vh,
  CounterClockwiseContourIntegral: kh,
  crarr: yh,
  cross: _h,
  Cross: xh,
  Cscr: wh,
  cscr: Ch,
  csub: Ah,
  csube: Eh,
  csup: Sh,
  csupe: Dh,
  ctdot: qh,
  cudarrl: Th,
  cudarrr: Fh,
  cuepr: Lh,
  cuesc: zh,
  cularr: Rh,
  cularrp: Ih,
  cupbrcap: Nh,
  cupcap: Oh,
  CupCap: Bh,
  cup: $h,
  Cup: Mh,
  cupcup: Ph,
  cupdot: Uh,
  cupor: jh,
  cups: Hh,
  curarr: Vh,
  curarrm: Gh,
  curlyeqprec: Zh,
  curlyeqsucc: Wh,
  curlyvee: Kh,
  curlywedge: Jh,
  curren: Yh,
  curvearrowleft: Qh,
  curvearrowright: Xh,
  cuvee: ef,
  cuwed: tf,
  cwconint: nf,
  cwint: rf,
  cylcty: of,
  dagger: sf,
  Dagger: cf,
  daleth: af,
  darr: lf,
  Darr: uf,
  dArr: hf,
  dash: ff,
  Dashv: pf,
  dashv: df,
  dbkarow: mf,
  dblac: gf,
  Dcaron: bf,
  dcaron: vf,
  Dcy: kf,
  dcy: yf,
  ddagger: _f,
  ddarr: xf,
  DD: wf,
  dd: Cf,
  DDotrahd: Af,
  ddotseq: Ef,
  deg: Sf,
  Del: Df,
  Delta: qf,
  delta: Tf,
  demptyv: Ff,
  dfisht: Lf,
  Dfr: zf,
  dfr: Rf,
  dHar: If,
  dharl: Nf,
  dharr: Of,
  DiacriticalAcute: Bf,
  DiacriticalDot: $f,
  DiacriticalDoubleAcute: Mf,
  DiacriticalGrave: Pf,
  DiacriticalTilde: Uf,
  diam: jf,
  diamond: Hf,
  Diamond: Vf,
  diamondsuit: Gf,
  diams: Zf,
  die: Wf,
  DifferentialD: Kf,
  digamma: Jf,
  disin: Yf,
  div: Qf,
  divide: Xf,
  divideontimes: ep,
  divonx: tp,
  DJcy: np,
  djcy: rp,
  dlcorn: op,
  dlcrop: sp,
  dollar: ip,
  Dopf: cp,
  dopf: ap,
  Dot: lp,
  dot: up,
  DotDot: hp,
  doteq: fp,
  doteqdot: pp,
  DotEqual: dp,
  dotminus: mp,
  dotplus: gp,
  dotsquare: bp,
  doublebarwedge: vp,
  DoubleContourIntegral: kp,
  DoubleDot: yp,
  DoubleDownArrow: _p,
  DoubleLeftArrow: xp,
  DoubleLeftRightArrow: wp,
  DoubleLeftTee: Cp,
  DoubleLongLeftArrow: Ap,
  DoubleLongLeftRightArrow: Ep,
  DoubleLongRightArrow: Sp,
  DoubleRightArrow: Dp,
  DoubleRightTee: qp,
  DoubleUpArrow: Tp,
  DoubleUpDownArrow: Fp,
  DoubleVerticalBar: Lp,
  DownArrowBar: zp,
  downarrow: Rp,
  DownArrow: Ip,
  Downarrow: Np,
  DownArrowUpArrow: Op,
  DownBreve: Bp,
  downdownarrows: $p,
  downharpoonleft: Mp,
  downharpoonright: Pp,
  DownLeftRightVector: Up,
  DownLeftTeeVector: jp,
  DownLeftVectorBar: Hp,
  DownLeftVector: Vp,
  DownRightTeeVector: Gp,
  DownRightVectorBar: Zp,
  DownRightVector: Wp,
  DownTeeArrow: Kp,
  DownTee: Jp,
  drbkarow: Yp,
  drcorn: Qp,
  drcrop: Xp,
  Dscr: ed,
  dscr: td,
  DScy: nd,
  dscy: rd,
  dsol: od,
  Dstrok: sd,
  dstrok: id,
  dtdot: cd,
  dtri: ad,
  dtrif: ld,
  duarr: ud,
  duhar: hd,
  dwangle: fd,
  DZcy: pd,
  dzcy: dd,
  dzigrarr: md,
  Eacute: gd,
  eacute: bd,
  easter: vd,
  Ecaron: kd,
  ecaron: yd,
  Ecirc: _d,
  ecirc: xd,
  ecir: wd,
  ecolon: Cd,
  Ecy: Ad,
  ecy: Ed,
  eDDot: Sd,
  Edot: Dd,
  edot: qd,
  eDot: Td,
  ee: Fd,
  efDot: Ld,
  Efr: zd,
  efr: Rd,
  eg: Id,
  Egrave: Nd,
  egrave: Od,
  egs: Bd,
  egsdot: $d,
  el: Md,
  Element: Pd,
  elinters: Ud,
  ell: jd,
  els: Hd,
  elsdot: Vd,
  Emacr: Gd,
  emacr: Zd,
  empty: Wd,
  emptyset: Kd,
  EmptySmallSquare: Jd,
  emptyv: Yd,
  EmptyVerySmallSquare: Qd,
  emsp13: Xd,
  emsp14: em,
  emsp: tm,
  ENG: nm,
  eng: rm,
  ensp: om,
  Eogon: sm,
  eogon: im,
  Eopf: cm,
  eopf: am,
  epar: lm,
  eparsl: um,
  eplus: hm,
  epsi: fm,
  Epsilon: pm,
  epsilon: dm,
  epsiv: mm,
  eqcirc: gm,
  eqcolon: bm,
  eqsim: vm,
  eqslantgtr: km,
  eqslantless: ym,
  Equal: _m,
  equals: xm,
  EqualTilde: wm,
  equest: Cm,
  Equilibrium: Am,
  equiv: Em,
  equivDD: Sm,
  eqvparsl: Dm,
  erarr: qm,
  erDot: Tm,
  escr: Fm,
  Escr: Lm,
  esdot: zm,
  Esim: Rm,
  esim: Im,
  Eta: Nm,
  eta: Om,
  ETH: Bm,
  eth: $m,
  Euml: Mm,
  euml: Pm,
  euro: Um,
  excl: jm,
  exist: Hm,
  Exists: Vm,
  expectation: Gm,
  exponentiale: Zm,
  ExponentialE: Wm,
  fallingdotseq: Km,
  Fcy: Jm,
  fcy: Ym,
  female: Qm,
  ffilig: Xm,
  fflig: eg,
  ffllig: tg,
  Ffr: ng,
  ffr: rg,
  filig: og,
  FilledSmallSquare: sg,
  FilledVerySmallSquare: ig,
  fjlig: cg,
  flat: ag,
  fllig: lg,
  fltns: ug,
  fnof: hg,
  Fopf: fg,
  fopf: pg,
  forall: dg,
  ForAll: mg,
  fork: gg,
  forkv: bg,
  Fouriertrf: vg,
  fpartint: kg,
  frac12: yg,
  frac13: _g,
  frac14: xg,
  frac15: wg,
  frac16: Cg,
  frac18: Ag,
  frac23: Eg,
  frac25: Sg,
  frac34: Dg,
  frac35: qg,
  frac38: Tg,
  frac45: Fg,
  frac56: Lg,
  frac58: zg,
  frac78: Rg,
  frasl: Ig,
  frown: Ng,
  fscr: Og,
  Fscr: Bg,
  gacute: $g,
  Gamma: Mg,
  gamma: Pg,
  Gammad: Ug,
  gammad: jg,
  gap: Hg,
  Gbreve: Vg,
  gbreve: Gg,
  Gcedil: Zg,
  Gcirc: Wg,
  gcirc: Kg,
  Gcy: Jg,
  gcy: Yg,
  Gdot: Qg,
  gdot: Xg,
  ge: e0,
  gE: t0,
  gEl: n0,
  gel: r0,
  geq: o0,
  geqq: s0,
  geqslant: i0,
  gescc: c0,
  ges: a0,
  gesdot: l0,
  gesdoto: u0,
  gesdotol: h0,
  gesl: f0,
  gesles: p0,
  Gfr: d0,
  gfr: m0,
  gg: g0,
  Gg: b0,
  ggg: v0,
  gimel: k0,
  GJcy: y0,
  gjcy: _0,
  gla: x0,
  gl: w0,
  glE: C0,
  glj: A0,
  gnap: E0,
  gnapprox: S0,
  gne: D0,
  gnE: q0,
  gneq: T0,
  gneqq: F0,
  gnsim: L0,
  Gopf: z0,
  gopf: R0,
  grave: I0,
  GreaterEqual: N0,
  GreaterEqualLess: O0,
  GreaterFullEqual: B0,
  GreaterGreater: $0,
  GreaterLess: M0,
  GreaterSlantEqual: P0,
  GreaterTilde: U0,
  Gscr: j0,
  gscr: H0,
  gsim: V0,
  gsime: G0,
  gsiml: Z0,
  gtcc: W0,
  gtcir: K0,
  gt: J0,
  GT: Y0,
  Gt: Q0,
  gtdot: X0,
  gtlPar: eb,
  gtquest: tb,
  gtrapprox: nb,
  gtrarr: rb,
  gtrdot: ob,
  gtreqless: sb,
  gtreqqless: ib,
  gtrless: cb,
  gtrsim: ab,
  gvertneqq: lb,
  gvnE: ub,
  Hacek: hb,
  hairsp: fb,
  half: pb,
  hamilt: db,
  HARDcy: mb,
  hardcy: gb,
  harrcir: bb,
  harr: vb,
  hArr: kb,
  harrw: yb,
  Hat: _b,
  hbar: xb,
  Hcirc: wb,
  hcirc: Cb,
  hearts: Ab,
  heartsuit: Eb,
  hellip: Sb,
  hercon: Db,
  hfr: qb,
  Hfr: Tb,
  HilbertSpace: Fb,
  hksearow: Lb,
  hkswarow: zb,
  hoarr: Rb,
  homtht: Ib,
  hookleftarrow: Nb,
  hookrightarrow: Ob,
  hopf: Bb,
  Hopf: $b,
  horbar: Mb,
  HorizontalLine: Pb,
  hscr: Ub,
  Hscr: jb,
  hslash: Hb,
  Hstrok: Vb,
  hstrok: Gb,
  HumpDownHump: Zb,
  HumpEqual: Wb,
  hybull: Kb,
  hyphen: Jb,
  Iacute: Yb,
  iacute: Qb,
  ic: Xb,
  Icirc: ev,
  icirc: tv,
  Icy: nv,
  icy: rv,
  Idot: ov,
  IEcy: sv,
  iecy: iv,
  iexcl: cv,
  iff: av,
  ifr: lv,
  Ifr: uv,
  Igrave: hv,
  igrave: fv,
  ii: pv,
  iiiint: dv,
  iiint: mv,
  iinfin: gv,
  iiota: bv,
  IJlig: vv,
  ijlig: kv,
  Imacr: yv,
  imacr: _v,
  image: xv,
  ImaginaryI: wv,
  imagline: Cv,
  imagpart: Av,
  imath: Ev,
  Im: Sv,
  imof: Dv,
  imped: qv,
  Implies: Tv,
  incare: Fv,
  in: "∈",
  infin: Lv,
  infintie: zv,
  inodot: Rv,
  intcal: Iv,
  int: Nv,
  Int: Ov,
  integers: Bv,
  Integral: $v,
  intercal: Mv,
  Intersection: Pv,
  intlarhk: Uv,
  intprod: jv,
  InvisibleComma: Hv,
  InvisibleTimes: Vv,
  IOcy: Gv,
  iocy: Zv,
  Iogon: Wv,
  iogon: Kv,
  Iopf: Jv,
  iopf: Yv,
  Iota: Qv,
  iota: Xv,
  iprod: ek,
  iquest: tk,
  iscr: nk,
  Iscr: rk,
  isin: ok,
  isindot: sk,
  isinE: ik,
  isins: ck,
  isinsv: ak,
  isinv: lk,
  it: uk,
  Itilde: hk,
  itilde: fk,
  Iukcy: pk,
  iukcy: dk,
  Iuml: mk,
  iuml: gk,
  Jcirc: bk,
  jcirc: vk,
  Jcy: kk,
  jcy: yk,
  Jfr: _k,
  jfr: xk,
  jmath: wk,
  Jopf: Ck,
  jopf: Ak,
  Jscr: Ek,
  jscr: Sk,
  Jsercy: Dk,
  jsercy: qk,
  Jukcy: Tk,
  jukcy: Fk,
  Kappa: Lk,
  kappa: zk,
  kappav: Rk,
  Kcedil: Ik,
  kcedil: Nk,
  Kcy: Ok,
  kcy: Bk,
  Kfr: $k,
  kfr: Mk,
  kgreen: Pk,
  KHcy: Uk,
  khcy: jk,
  KJcy: Hk,
  kjcy: Vk,
  Kopf: Gk,
  kopf: Zk,
  Kscr: Wk,
  kscr: Kk,
  lAarr: Jk,
  Lacute: Yk,
  lacute: Qk,
  laemptyv: Xk,
  lagran: ey,
  Lambda: ty,
  lambda: ny,
  lang: ry,
  Lang: oy,
  langd: sy,
  langle: iy,
  lap: cy,
  Laplacetrf: ay,
  laquo: ly,
  larrb: uy,
  larrbfs: hy,
  larr: fy,
  Larr: py,
  lArr: dy,
  larrfs: my,
  larrhk: gy,
  larrlp: by,
  larrpl: vy,
  larrsim: ky,
  larrtl: yy,
  latail: _y,
  lAtail: xy,
  lat: wy,
  late: Cy,
  lates: Ay,
  lbarr: Ey,
  lBarr: Sy,
  lbbrk: Dy,
  lbrace: qy,
  lbrack: Ty,
  lbrke: Fy,
  lbrksld: Ly,
  lbrkslu: zy,
  Lcaron: Ry,
  lcaron: Iy,
  Lcedil: Ny,
  lcedil: Oy,
  lceil: By,
  lcub: $y,
  Lcy: My,
  lcy: Py,
  ldca: Uy,
  ldquo: jy,
  ldquor: Hy,
  ldrdhar: Vy,
  ldrushar: Gy,
  ldsh: Zy,
  le: Wy,
  lE: Ky,
  LeftAngleBracket: Jy,
  LeftArrowBar: Yy,
  leftarrow: Qy,
  LeftArrow: Xy,
  Leftarrow: e_,
  LeftArrowRightArrow: t_,
  leftarrowtail: n_,
  LeftCeiling: r_,
  LeftDoubleBracket: o_,
  LeftDownTeeVector: s_,
  LeftDownVectorBar: i_,
  LeftDownVector: c_,
  LeftFloor: a_,
  leftharpoondown: l_,
  leftharpoonup: u_,
  leftleftarrows: h_,
  leftrightarrow: f_,
  LeftRightArrow: p_,
  Leftrightarrow: d_,
  leftrightarrows: m_,
  leftrightharpoons: g_,
  leftrightsquigarrow: b_,
  LeftRightVector: v_,
  LeftTeeArrow: k_,
  LeftTee: y_,
  LeftTeeVector: __,
  leftthreetimes: x_,
  LeftTriangleBar: w_,
  LeftTriangle: C_,
  LeftTriangleEqual: A_,
  LeftUpDownVector: E_,
  LeftUpTeeVector: S_,
  LeftUpVectorBar: D_,
  LeftUpVector: q_,
  LeftVectorBar: T_,
  LeftVector: F_,
  lEg: L_,
  leg: z_,
  leq: R_,
  leqq: I_,
  leqslant: N_,
  lescc: O_,
  les: B_,
  lesdot: $_,
  lesdoto: M_,
  lesdotor: P_,
  lesg: U_,
  lesges: j_,
  lessapprox: H_,
  lessdot: V_,
  lesseqgtr: G_,
  lesseqqgtr: Z_,
  LessEqualGreater: W_,
  LessFullEqual: K_,
  LessGreater: J_,
  lessgtr: Y_,
  LessLess: Q_,
  lesssim: X_,
  LessSlantEqual: ex,
  LessTilde: tx,
  lfisht: nx,
  lfloor: rx,
  Lfr: ox,
  lfr: sx,
  lg: ix,
  lgE: cx,
  lHar: ax,
  lhard: lx,
  lharu: ux,
  lharul: hx,
  lhblk: fx,
  LJcy: px,
  ljcy: dx,
  llarr: mx,
  ll: gx,
  Ll: bx,
  llcorner: vx,
  Lleftarrow: kx,
  llhard: yx,
  lltri: _x,
  Lmidot: xx,
  lmidot: wx,
  lmoustache: Cx,
  lmoust: Ax,
  lnap: Ex,
  lnapprox: Sx,
  lne: Dx,
  lnE: qx,
  lneq: Tx,
  lneqq: Fx,
  lnsim: Lx,
  loang: zx,
  loarr: Rx,
  lobrk: Ix,
  longleftarrow: Nx,
  LongLeftArrow: Ox,
  Longleftarrow: Bx,
  longleftrightarrow: $x,
  LongLeftRightArrow: Mx,
  Longleftrightarrow: Px,
  longmapsto: Ux,
  longrightarrow: jx,
  LongRightArrow: Hx,
  Longrightarrow: Vx,
  looparrowleft: Gx,
  looparrowright: Zx,
  lopar: Wx,
  Lopf: Kx,
  lopf: Jx,
  loplus: Yx,
  lotimes: Qx,
  lowast: Xx,
  lowbar: ew,
  LowerLeftArrow: tw,
  LowerRightArrow: nw,
  loz: rw,
  lozenge: ow,
  lozf: sw,
  lpar: iw,
  lparlt: cw,
  lrarr: aw,
  lrcorner: lw,
  lrhar: uw,
  lrhard: hw,
  lrm: fw,
  lrtri: pw,
  lsaquo: dw,
  lscr: mw,
  Lscr: gw,
  lsh: bw,
  Lsh: vw,
  lsim: kw,
  lsime: yw,
  lsimg: _w,
  lsqb: xw,
  lsquo: ww,
  lsquor: Cw,
  Lstrok: Aw,
  lstrok: Ew,
  ltcc: Sw,
  ltcir: Dw,
  lt: qw,
  LT: Tw,
  Lt: Fw,
  ltdot: Lw,
  lthree: zw,
  ltimes: Rw,
  ltlarr: Iw,
  ltquest: Nw,
  ltri: Ow,
  ltrie: Bw,
  ltrif: $w,
  ltrPar: Mw,
  lurdshar: Pw,
  luruhar: Uw,
  lvertneqq: jw,
  lvnE: Hw,
  macr: Vw,
  male: Gw,
  malt: Zw,
  maltese: Ww,
  Map: "⤅",
  map: Kw,
  mapsto: Jw,
  mapstodown: Yw,
  mapstoleft: Qw,
  mapstoup: Xw,
  marker: e1,
  mcomma: t1,
  Mcy: n1,
  mcy: r1,
  mdash: o1,
  mDDot: s1,
  measuredangle: i1,
  MediumSpace: c1,
  Mellintrf: a1,
  Mfr: l1,
  mfr: u1,
  mho: h1,
  micro: f1,
  midast: p1,
  midcir: d1,
  mid: m1,
  middot: g1,
  minusb: b1,
  minus: v1,
  minusd: k1,
  minusdu: y1,
  MinusPlus: _1,
  mlcp: x1,
  mldr: w1,
  mnplus: C1,
  models: A1,
  Mopf: E1,
  mopf: S1,
  mp: D1,
  mscr: q1,
  Mscr: T1,
  mstpos: F1,
  Mu: L1,
  mu: z1,
  multimap: R1,
  mumap: I1,
  nabla: N1,
  Nacute: O1,
  nacute: B1,
  nang: $1,
  nap: M1,
  napE: P1,
  napid: U1,
  napos: j1,
  napprox: H1,
  natural: V1,
  naturals: G1,
  natur: Z1,
  nbsp: W1,
  nbump: K1,
  nbumpe: J1,
  ncap: Y1,
  Ncaron: Q1,
  ncaron: X1,
  Ncedil: eC,
  ncedil: tC,
  ncong: nC,
  ncongdot: rC,
  ncup: oC,
  Ncy: sC,
  ncy: iC,
  ndash: cC,
  nearhk: aC,
  nearr: lC,
  neArr: uC,
  nearrow: hC,
  ne: fC,
  nedot: pC,
  NegativeMediumSpace: dC,
  NegativeThickSpace: mC,
  NegativeThinSpace: gC,
  NegativeVeryThinSpace: bC,
  nequiv: vC,
  nesear: kC,
  nesim: yC,
  NestedGreaterGreater: _C,
  NestedLessLess: xC,
  NewLine: wC,
  nexist: CC,
  nexists: AC,
  Nfr: EC,
  nfr: SC,
  ngE: DC,
  nge: qC,
  ngeq: TC,
  ngeqq: FC,
  ngeqslant: LC,
  nges: zC,
  nGg: RC,
  ngsim: IC,
  nGt: NC,
  ngt: OC,
  ngtr: BC,
  nGtv: $C,
  nharr: MC,
  nhArr: PC,
  nhpar: UC,
  ni: jC,
  nis: HC,
  nisd: VC,
  niv: GC,
  NJcy: ZC,
  njcy: WC,
  nlarr: KC,
  nlArr: JC,
  nldr: YC,
  nlE: QC,
  nle: XC,
  nleftarrow: eA,
  nLeftarrow: tA,
  nleftrightarrow: nA,
  nLeftrightarrow: rA,
  nleq: oA,
  nleqq: sA,
  nleqslant: iA,
  nles: cA,
  nless: aA,
  nLl: lA,
  nlsim: uA,
  nLt: hA,
  nlt: fA,
  nltri: pA,
  nltrie: dA,
  nLtv: mA,
  nmid: gA,
  NoBreak: bA,
  NonBreakingSpace: vA,
  nopf: kA,
  Nopf: yA,
  Not: _A,
  not: xA,
  NotCongruent: wA,
  NotCupCap: CA,
  NotDoubleVerticalBar: AA,
  NotElement: EA,
  NotEqual: SA,
  NotEqualTilde: DA,
  NotExists: qA,
  NotGreater: TA,
  NotGreaterEqual: FA,
  NotGreaterFullEqual: LA,
  NotGreaterGreater: zA,
  NotGreaterLess: RA,
  NotGreaterSlantEqual: IA,
  NotGreaterTilde: NA,
  NotHumpDownHump: OA,
  NotHumpEqual: BA,
  notin: $A,
  notindot: MA,
  notinE: PA,
  notinva: UA,
  notinvb: jA,
  notinvc: HA,
  NotLeftTriangleBar: VA,
  NotLeftTriangle: GA,
  NotLeftTriangleEqual: ZA,
  NotLess: WA,
  NotLessEqual: KA,
  NotLessGreater: JA,
  NotLessLess: YA,
  NotLessSlantEqual: QA,
  NotLessTilde: XA,
  NotNestedGreaterGreater: eE,
  NotNestedLessLess: tE,
  notni: nE,
  notniva: rE,
  notnivb: oE,
  notnivc: sE,
  NotPrecedes: iE,
  NotPrecedesEqual: cE,
  NotPrecedesSlantEqual: aE,
  NotReverseElement: lE,
  NotRightTriangleBar: uE,
  NotRightTriangle: hE,
  NotRightTriangleEqual: fE,
  NotSquareSubset: pE,
  NotSquareSubsetEqual: dE,
  NotSquareSuperset: mE,
  NotSquareSupersetEqual: gE,
  NotSubset: bE,
  NotSubsetEqual: vE,
  NotSucceeds: kE,
  NotSucceedsEqual: yE,
  NotSucceedsSlantEqual: _E,
  NotSucceedsTilde: xE,
  NotSuperset: wE,
  NotSupersetEqual: CE,
  NotTilde: AE,
  NotTildeEqual: EE,
  NotTildeFullEqual: SE,
  NotTildeTilde: DE,
  NotVerticalBar: qE,
  nparallel: TE,
  npar: FE,
  nparsl: LE,
  npart: zE,
  npolint: RE,
  npr: IE,
  nprcue: NE,
  nprec: OE,
  npreceq: BE,
  npre: $E,
  nrarrc: ME,
  nrarr: PE,
  nrArr: UE,
  nrarrw: jE,
  nrightarrow: HE,
  nRightarrow: VE,
  nrtri: GE,
  nrtrie: ZE,
  nsc: WE,
  nsccue: KE,
  nsce: JE,
  Nscr: YE,
  nscr: QE,
  nshortmid: XE,
  nshortparallel: eS,
  nsim: tS,
  nsime: nS,
  nsimeq: rS,
  nsmid: oS,
  nspar: sS,
  nsqsube: iS,
  nsqsupe: cS,
  nsub: aS,
  nsubE: lS,
  nsube: uS,
  nsubset: hS,
  nsubseteq: fS,
  nsubseteqq: pS,
  nsucc: dS,
  nsucceq: mS,
  nsup: gS,
  nsupE: bS,
  nsupe: vS,
  nsupset: kS,
  nsupseteq: yS,
  nsupseteqq: _S,
  ntgl: xS,
  Ntilde: wS,
  ntilde: CS,
  ntlg: AS,
  ntriangleleft: ES,
  ntrianglelefteq: SS,
  ntriangleright: DS,
  ntrianglerighteq: qS,
  Nu: TS,
  nu: FS,
  num: LS,
  numero: zS,
  numsp: RS,
  nvap: IS,
  nvdash: NS,
  nvDash: OS,
  nVdash: BS,
  nVDash: $S,
  nvge: MS,
  nvgt: PS,
  nvHarr: US,
  nvinfin: jS,
  nvlArr: HS,
  nvle: VS,
  nvlt: GS,
  nvltrie: ZS,
  nvrArr: WS,
  nvrtrie: KS,
  nvsim: JS,
  nwarhk: YS,
  nwarr: QS,
  nwArr: XS,
  nwarrow: eD,
  nwnear: tD,
  Oacute: nD,
  oacute: rD,
  oast: oD,
  Ocirc: sD,
  ocirc: iD,
  ocir: cD,
  Ocy: aD,
  ocy: lD,
  odash: uD,
  Odblac: hD,
  odblac: fD,
  odiv: pD,
  odot: dD,
  odsold: mD,
  OElig: gD,
  oelig: bD,
  ofcir: vD,
  Ofr: kD,
  ofr: yD,
  ogon: _D,
  Ograve: xD,
  ograve: wD,
  ogt: CD,
  ohbar: AD,
  ohm: ED,
  oint: SD,
  olarr: DD,
  olcir: qD,
  olcross: TD,
  oline: FD,
  olt: LD,
  Omacr: zD,
  omacr: RD,
  Omega: ID,
  omega: ND,
  Omicron: OD,
  omicron: BD,
  omid: $D,
  ominus: MD,
  Oopf: PD,
  oopf: UD,
  opar: jD,
  OpenCurlyDoubleQuote: HD,
  OpenCurlyQuote: VD,
  operp: GD,
  oplus: ZD,
  orarr: WD,
  Or: KD,
  or: JD,
  ord: YD,
  order: QD,
  orderof: XD,
  ordf: eq,
  ordm: tq,
  origof: nq,
  oror: rq,
  orslope: oq,
  orv: sq,
  oS: iq,
  Oscr: cq,
  oscr: aq,
  Oslash: lq,
  oslash: uq,
  osol: hq,
  Otilde: fq,
  otilde: pq,
  otimesas: dq,
  Otimes: mq,
  otimes: gq,
  Ouml: bq,
  ouml: vq,
  ovbar: kq,
  OverBar: yq,
  OverBrace: _q,
  OverBracket: xq,
  OverParenthesis: wq,
  para: Cq,
  parallel: Aq,
  par: Eq,
  parsim: Sq,
  parsl: Dq,
  part: qq,
  PartialD: Tq,
  Pcy: Fq,
  pcy: Lq,
  percnt: zq,
  period: Rq,
  permil: Iq,
  perp: Nq,
  pertenk: Oq,
  Pfr: Bq,
  pfr: $q,
  Phi: Mq,
  phi: Pq,
  phiv: Uq,
  phmmat: jq,
  phone: Hq,
  Pi: Vq,
  pi: Gq,
  pitchfork: Zq,
  piv: Wq,
  planck: Kq,
  planckh: Jq,
  plankv: Yq,
  plusacir: Qq,
  plusb: Xq,
  pluscir: eT,
  plus: tT,
  plusdo: nT,
  plusdu: rT,
  pluse: oT,
  PlusMinus: sT,
  plusmn: iT,
  plussim: cT,
  plustwo: aT,
  pm: lT,
  Poincareplane: uT,
  pointint: hT,
  popf: fT,
  Popf: pT,
  pound: dT,
  prap: mT,
  Pr: gT,
  pr: bT,
  prcue: vT,
  precapprox: kT,
  prec: yT,
  preccurlyeq: _T,
  Precedes: xT,
  PrecedesEqual: wT,
  PrecedesSlantEqual: CT,
  PrecedesTilde: AT,
  preceq: ET,
  precnapprox: ST,
  precneqq: DT,
  precnsim: qT,
  pre: TT,
  prE: FT,
  precsim: LT,
  prime: zT,
  Prime: RT,
  primes: IT,
  prnap: NT,
  prnE: OT,
  prnsim: BT,
  prod: $T,
  Product: MT,
  profalar: PT,
  profline: UT,
  profsurf: jT,
  prop: HT,
  Proportional: VT,
  Proportion: GT,
  propto: ZT,
  prsim: WT,
  prurel: KT,
  Pscr: JT,
  pscr: YT,
  Psi: QT,
  psi: XT,
  puncsp: eF,
  Qfr: tF,
  qfr: nF,
  qint: rF,
  qopf: oF,
  Qopf: sF,
  qprime: iF,
  Qscr: cF,
  qscr: aF,
  quaternions: lF,
  quatint: uF,
  quest: hF,
  questeq: fF,
  quot: pF,
  QUOT: dF,
  rAarr: mF,
  race: gF,
  Racute: bF,
  racute: vF,
  radic: kF,
  raemptyv: yF,
  rang: _F,
  Rang: xF,
  rangd: wF,
  range: CF,
  rangle: AF,
  raquo: EF,
  rarrap: SF,
  rarrb: DF,
  rarrbfs: qF,
  rarrc: TF,
  rarr: FF,
  Rarr: LF,
  rArr: zF,
  rarrfs: RF,
  rarrhk: IF,
  rarrlp: NF,
  rarrpl: OF,
  rarrsim: BF,
  Rarrtl: $F,
  rarrtl: MF,
  rarrw: PF,
  ratail: UF,
  rAtail: jF,
  ratio: HF,
  rationals: VF,
  rbarr: GF,
  rBarr: ZF,
  RBarr: WF,
  rbbrk: KF,
  rbrace: JF,
  rbrack: YF,
  rbrke: QF,
  rbrksld: XF,
  rbrkslu: eL,
  Rcaron: tL,
  rcaron: nL,
  Rcedil: rL,
  rcedil: oL,
  rceil: sL,
  rcub: iL,
  Rcy: cL,
  rcy: aL,
  rdca: lL,
  rdldhar: uL,
  rdquo: hL,
  rdquor: fL,
  rdsh: pL,
  real: dL,
  realine: mL,
  realpart: gL,
  reals: bL,
  Re: vL,
  rect: kL,
  reg: yL,
  REG: _L,
  ReverseElement: xL,
  ReverseEquilibrium: wL,
  ReverseUpEquilibrium: CL,
  rfisht: AL,
  rfloor: EL,
  rfr: SL,
  Rfr: DL,
  rHar: qL,
  rhard: TL,
  rharu: FL,
  rharul: LL,
  Rho: zL,
  rho: RL,
  rhov: IL,
  RightAngleBracket: NL,
  RightArrowBar: OL,
  rightarrow: BL,
  RightArrow: $L,
  Rightarrow: ML,
  RightArrowLeftArrow: PL,
  rightarrowtail: UL,
  RightCeiling: jL,
  RightDoubleBracket: HL,
  RightDownTeeVector: VL,
  RightDownVectorBar: GL,
  RightDownVector: ZL,
  RightFloor: WL,
  rightharpoondown: KL,
  rightharpoonup: JL,
  rightleftarrows: YL,
  rightleftharpoons: QL,
  rightrightarrows: XL,
  rightsquigarrow: ez,
  RightTeeArrow: tz,
  RightTee: nz,
  RightTeeVector: rz,
  rightthreetimes: oz,
  RightTriangleBar: sz,
  RightTriangle: iz,
  RightTriangleEqual: cz,
  RightUpDownVector: az,
  RightUpTeeVector: lz,
  RightUpVectorBar: uz,
  RightUpVector: hz,
  RightVectorBar: fz,
  RightVector: pz,
  ring: dz,
  risingdotseq: mz,
  rlarr: gz,
  rlhar: bz,
  rlm: vz,
  rmoustache: kz,
  rmoust: yz,
  rnmid: _z,
  roang: xz,
  roarr: wz,
  robrk: Cz,
  ropar: Az,
  ropf: Ez,
  Ropf: Sz,
  roplus: Dz,
  rotimes: qz,
  RoundImplies: Tz,
  rpar: Fz,
  rpargt: Lz,
  rppolint: zz,
  rrarr: Rz,
  Rrightarrow: Iz,
  rsaquo: Nz,
  rscr: Oz,
  Rscr: Bz,
  rsh: $z,
  Rsh: Mz,
  rsqb: Pz,
  rsquo: Uz,
  rsquor: jz,
  rthree: Hz,
  rtimes: Vz,
  rtri: Gz,
  rtrie: Zz,
  rtrif: Wz,
  rtriltri: Kz,
  RuleDelayed: Jz,
  ruluhar: Yz,
  rx: Qz,
  Sacute: Xz,
  sacute: e2,
  sbquo: t2,
  scap: n2,
  Scaron: r2,
  scaron: o2,
  Sc: s2,
  sc: i2,
  sccue: c2,
  sce: a2,
  scE: l2,
  Scedil: u2,
  scedil: h2,
  Scirc: f2,
  scirc: p2,
  scnap: d2,
  scnE: m2,
  scnsim: g2,
  scpolint: b2,
  scsim: v2,
  Scy: k2,
  scy: y2,
  sdotb: _2,
  sdot: x2,
  sdote: w2,
  searhk: C2,
  searr: A2,
  seArr: E2,
  searrow: S2,
  sect: D2,
  semi: q2,
  seswar: T2,
  setminus: F2,
  setmn: L2,
  sext: z2,
  Sfr: R2,
  sfr: I2,
  sfrown: N2,
  sharp: O2,
  SHCHcy: B2,
  shchcy: $2,
  SHcy: M2,
  shcy: P2,
  ShortDownArrow: U2,
  ShortLeftArrow: j2,
  shortmid: H2,
  shortparallel: V2,
  ShortRightArrow: G2,
  ShortUpArrow: Z2,
  shy: W2,
  Sigma: K2,
  sigma: J2,
  sigmaf: Y2,
  sigmav: Q2,
  sim: X2,
  simdot: eR,
  sime: tR,
  simeq: nR,
  simg: rR,
  simgE: oR,
  siml: sR,
  simlE: iR,
  simne: cR,
  simplus: aR,
  simrarr: lR,
  slarr: uR,
  SmallCircle: hR,
  smallsetminus: fR,
  smashp: pR,
  smeparsl: dR,
  smid: mR,
  smile: gR,
  smt: bR,
  smte: vR,
  smtes: kR,
  SOFTcy: yR,
  softcy: _R,
  solbar: xR,
  solb: wR,
  sol: CR,
  Sopf: AR,
  sopf: ER,
  spades: SR,
  spadesuit: DR,
  spar: qR,
  sqcap: TR,
  sqcaps: FR,
  sqcup: LR,
  sqcups: zR,
  Sqrt: RR,
  sqsub: IR,
  sqsube: NR,
  sqsubset: OR,
  sqsubseteq: BR,
  sqsup: $R,
  sqsupe: MR,
  sqsupset: PR,
  sqsupseteq: UR,
  square: jR,
  Square: HR,
  SquareIntersection: VR,
  SquareSubset: GR,
  SquareSubsetEqual: ZR,
  SquareSuperset: WR,
  SquareSupersetEqual: KR,
  SquareUnion: JR,
  squarf: YR,
  squ: QR,
  squf: XR,
  srarr: eI,
  Sscr: tI,
  sscr: nI,
  ssetmn: rI,
  ssmile: oI,
  sstarf: sI,
  Star: iI,
  star: cI,
  starf: aI,
  straightepsilon: lI,
  straightphi: uI,
  strns: hI,
  sub: fI,
  Sub: pI,
  subdot: dI,
  subE: mI,
  sube: gI,
  subedot: bI,
  submult: vI,
  subnE: kI,
  subne: yI,
  subplus: _I,
  subrarr: xI,
  subset: wI,
  Subset: CI,
  subseteq: AI,
  subseteqq: EI,
  SubsetEqual: SI,
  subsetneq: DI,
  subsetneqq: qI,
  subsim: TI,
  subsub: FI,
  subsup: LI,
  succapprox: zI,
  succ: RI,
  succcurlyeq: II,
  Succeeds: NI,
  SucceedsEqual: OI,
  SucceedsSlantEqual: BI,
  SucceedsTilde: $I,
  succeq: MI,
  succnapprox: PI,
  succneqq: UI,
  succnsim: jI,
  succsim: HI,
  SuchThat: VI,
  sum: GI,
  Sum: ZI,
  sung: WI,
  sup1: KI,
  sup2: JI,
  sup3: YI,
  sup: QI,
  Sup: XI,
  supdot: eN,
  supdsub: tN,
  supE: nN,
  supe: rN,
  supedot: oN,
  Superset: sN,
  SupersetEqual: iN,
  suphsol: cN,
  suphsub: aN,
  suplarr: lN,
  supmult: uN,
  supnE: hN,
  supne: fN,
  supplus: pN,
  supset: dN,
  Supset: mN,
  supseteq: gN,
  supseteqq: bN,
  supsetneq: vN,
  supsetneqq: kN,
  supsim: yN,
  supsub: _N,
  supsup: xN,
  swarhk: wN,
  swarr: CN,
  swArr: AN,
  swarrow: EN,
  swnwar: SN,
  szlig: DN,
  Tab: qN,
  target: TN,
  Tau: FN,
  tau: LN,
  tbrk: zN,
  Tcaron: RN,
  tcaron: IN,
  Tcedil: NN,
  tcedil: ON,
  Tcy: BN,
  tcy: $N,
  tdot: MN,
  telrec: PN,
  Tfr: UN,
  tfr: jN,
  there4: HN,
  therefore: VN,
  Therefore: GN,
  Theta: ZN,
  theta: WN,
  thetasym: KN,
  thetav: JN,
  thickapprox: YN,
  thicksim: QN,
  ThickSpace: XN,
  ThinSpace: eO,
  thinsp: tO,
  thkap: nO,
  thksim: rO,
  THORN: oO,
  thorn: sO,
  tilde: iO,
  Tilde: cO,
  TildeEqual: aO,
  TildeFullEqual: lO,
  TildeTilde: uO,
  timesbar: hO,
  timesb: fO,
  times: pO,
  timesd: dO,
  tint: mO,
  toea: gO,
  topbot: bO,
  topcir: vO,
  top: kO,
  Topf: yO,
  topf: _O,
  topfork: xO,
  tosa: wO,
  tprime: CO,
  trade: AO,
  TRADE: EO,
  triangle: SO,
  triangledown: DO,
  triangleleft: qO,
  trianglelefteq: TO,
  triangleq: FO,
  triangleright: LO,
  trianglerighteq: zO,
  tridot: RO,
  trie: IO,
  triminus: NO,
  TripleDot: OO,
  triplus: BO,
  trisb: $O,
  tritime: MO,
  trpezium: PO,
  Tscr: UO,
  tscr: jO,
  TScy: HO,
  tscy: VO,
  TSHcy: GO,
  tshcy: ZO,
  Tstrok: WO,
  tstrok: KO,
  twixt: JO,
  twoheadleftarrow: YO,
  twoheadrightarrow: QO,
  Uacute: XO,
  uacute: eB,
  uarr: tB,
  Uarr: nB,
  uArr: rB,
  Uarrocir: oB,
  Ubrcy: sB,
  ubrcy: iB,
  Ubreve: cB,
  ubreve: aB,
  Ucirc: lB,
  ucirc: uB,
  Ucy: hB,
  ucy: fB,
  udarr: pB,
  Udblac: dB,
  udblac: mB,
  udhar: gB,
  ufisht: bB,
  Ufr: vB,
  ufr: kB,
  Ugrave: yB,
  ugrave: _B,
  uHar: xB,
  uharl: wB,
  uharr: CB,
  uhblk: AB,
  ulcorn: EB,
  ulcorner: SB,
  ulcrop: DB,
  ultri: qB,
  Umacr: TB,
  umacr: FB,
  uml: LB,
  UnderBar: zB,
  UnderBrace: RB,
  UnderBracket: IB,
  UnderParenthesis: NB,
  Union: OB,
  UnionPlus: BB,
  Uogon: $B,
  uogon: MB,
  Uopf: PB,
  uopf: UB,
  UpArrowBar: jB,
  uparrow: HB,
  UpArrow: VB,
  Uparrow: GB,
  UpArrowDownArrow: ZB,
  updownarrow: WB,
  UpDownArrow: KB,
  Updownarrow: JB,
  UpEquilibrium: YB,
  upharpoonleft: QB,
  upharpoonright: XB,
  uplus: e$,
  UpperLeftArrow: t$,
  UpperRightArrow: n$,
  upsi: r$,
  Upsi: o$,
  upsih: s$,
  Upsilon: i$,
  upsilon: c$,
  UpTeeArrow: a$,
  UpTee: l$,
  upuparrows: u$,
  urcorn: h$,
  urcorner: f$,
  urcrop: p$,
  Uring: d$,
  uring: m$,
  urtri: g$,
  Uscr: b$,
  uscr: v$,
  utdot: k$,
  Utilde: y$,
  utilde: _$,
  utri: x$,
  utrif: w$,
  uuarr: C$,
  Uuml: A$,
  uuml: E$,
  uwangle: S$,
  vangrt: D$,
  varepsilon: q$,
  varkappa: T$,
  varnothing: F$,
  varphi: L$,
  varpi: z$,
  varpropto: R$,
  varr: I$,
  vArr: N$,
  varrho: O$,
  varsigma: B$,
  varsubsetneq: $$,
  varsubsetneqq: M$,
  varsupsetneq: P$,
  varsupsetneqq: U$,
  vartheta: j$,
  vartriangleleft: H$,
  vartriangleright: V$,
  vBar: G$,
  Vbar: Z$,
  vBarv: W$,
  Vcy: K$,
  vcy: J$,
  vdash: Y$,
  vDash: Q$,
  Vdash: X$,
  VDash: eM,
  Vdashl: tM,
  veebar: nM,
  vee: rM,
  Vee: oM,
  veeeq: sM,
  vellip: iM,
  verbar: cM,
  Verbar: aM,
  vert: lM,
  Vert: uM,
  VerticalBar: hM,
  VerticalLine: fM,
  VerticalSeparator: pM,
  VerticalTilde: dM,
  VeryThinSpace: mM,
  Vfr: gM,
  vfr: bM,
  vltri: vM,
  vnsub: kM,
  vnsup: yM,
  Vopf: _M,
  vopf: xM,
  vprop: wM,
  vrtri: CM,
  Vscr: AM,
  vscr: EM,
  vsubnE: SM,
  vsubne: DM,
  vsupnE: qM,
  vsupne: TM,
  Vvdash: FM,
  vzigzag: LM,
  Wcirc: zM,
  wcirc: RM,
  wedbar: IM,
  wedge: NM,
  Wedge: OM,
  wedgeq: BM,
  weierp: $M,
  Wfr: MM,
  wfr: PM,
  Wopf: UM,
  wopf: jM,
  wp: HM,
  wr: VM,
  wreath: GM,
  Wscr: ZM,
  wscr: WM,
  xcap: KM,
  xcirc: JM,
  xcup: YM,
  xdtri: QM,
  Xfr: XM,
  xfr: e3,
  xharr: t3,
  xhArr: n3,
  Xi: r3,
  xi: o3,
  xlarr: s3,
  xlArr: i3,
  xmap: c3,
  xnis: a3,
  xodot: l3,
  Xopf: u3,
  xopf: h3,
  xoplus: f3,
  xotime: p3,
  xrarr: d3,
  xrArr: m3,
  Xscr: g3,
  xscr: b3,
  xsqcup: v3,
  xuplus: k3,
  xutri: y3,
  xvee: _3,
  xwedge: x3,
  Yacute: w3,
  yacute: C3,
  YAcy: A3,
  yacy: E3,
  Ycirc: S3,
  ycirc: D3,
  Ycy: q3,
  ycy: T3,
  yen: F3,
  Yfr: L3,
  yfr: z3,
  YIcy: R3,
  yicy: I3,
  Yopf: N3,
  yopf: O3,
  Yscr: B3,
  yscr: $3,
  YUcy: M3,
  yucy: P3,
  yuml: U3,
  Yuml: j3,
  Zacute: H3,
  zacute: V3,
  Zcaron: G3,
  zcaron: Z3,
  Zcy: W3,
  zcy: K3,
  Zdot: J3,
  zdot: Y3,
  zeetrf: Q3,
  ZeroWidthSpace: X3,
  Zeta: eP,
  zeta: tP,
  zfr: nP,
  Zfr: rP,
  ZHcy: oP,
  zhcy: sP,
  zigrarr: iP,
  zopf: cP,
  Zopf: aP,
  Zscr: lP,
  zscr: uP,
  zwj: hP,
  zwnj: fP
};
var mo = pP, Xn = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, yt = {}, Ar = {};
function dP(n) {
  var e, t, r = Ar[n];
  if (r)
    return r;
  for (r = Ar[n] = [], e = 0; e < 128; e++)
    t = String.fromCharCode(e), /^[0-9a-z]$/i.test(t) ? r.push(t) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < n.length; e++)
    r[n.charCodeAt(e)] = n[e];
  return r;
}
function cn(n, e, t) {
  var r, o, s, i, c, a = "";
  for (typeof e != "string" && (t = e, e = cn.defaultChars), typeof t > "u" && (t = !0), c = dP(e), r = 0, o = n.length; r < o; r++) {
    if (s = n.charCodeAt(r), t && s === 37 && r + 2 < o && /^[0-9a-f]{2}$/i.test(n.slice(r + 1, r + 3))) {
      a += n.slice(r, r + 3), r += 2;
      continue;
    }
    if (s < 128) {
      a += c[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && r + 1 < o && (i = n.charCodeAt(r + 1), i >= 56320 && i <= 57343)) {
        a += encodeURIComponent(n[r] + n[r + 1]), r++;
        continue;
      }
      a += "%EF%BF%BD";
      continue;
    }
    a += encodeURIComponent(n[r]);
  }
  return a;
}
cn.defaultChars = ";/?:@&=+$,-_.!~*'()#";
cn.componentChars = "-_.!~*'()";
var mP = cn, Er = {};
function gP(n) {
  var e, t, r = Er[n];
  if (r)
    return r;
  for (r = Er[n] = [], e = 0; e < 128; e++)
    t = String.fromCharCode(e), r.push(t);
  for (e = 0; e < n.length; e++)
    t = n.charCodeAt(e), r[t] = "%" + ("0" + t.toString(16).toUpperCase()).slice(-2);
  return r;
}
function an(n, e) {
  var t;
  return typeof e != "string" && (e = an.defaultChars), t = gP(e), n.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    var o, s, i, c, a, l, u, f = "";
    for (o = 0, s = r.length; o < s; o += 3) {
      if (i = parseInt(r.slice(o + 1, o + 3), 16), i < 128) {
        f += t[i];
        continue;
      }
      if ((i & 224) === 192 && o + 3 < s && (c = parseInt(r.slice(o + 4, o + 6), 16), (c & 192) === 128)) {
        u = i << 6 & 1984 | c & 63, u < 128 ? f += "��" : f += String.fromCharCode(u), o += 3;
        continue;
      }
      if ((i & 240) === 224 && o + 6 < s && (c = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16), (c & 192) === 128 && (a & 192) === 128)) {
        u = i << 12 & 61440 | c << 6 & 4032 | a & 63, u < 2048 || u >= 55296 && u <= 57343 ? f += "���" : f += String.fromCharCode(u), o += 6;
        continue;
      }
      if ((i & 248) === 240 && o + 9 < s && (c = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16), l = parseInt(r.slice(o + 10, o + 12), 16), (c & 192) === 128 && (a & 192) === 128 && (l & 192) === 128)) {
        u = i << 18 & 1835008 | c << 12 & 258048 | a << 6 & 4032 | l & 63, u < 65536 || u > 1114111 ? f += "����" : (u -= 65536, f += String.fromCharCode(55296 + (u >> 10), 56320 + (u & 1023))), o += 9;
        continue;
      }
      f += "�";
    }
    return f;
  });
}
an.defaultChars = ";/?:@&=+$,#";
an.componentChars = "";
var bP = an, vP = function(e) {
  var t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
};
function rn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var kP = /^([a-z0-9.+-]+:)/i, yP = /:[0-9]*$/, _P = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, xP = ["<", ">", '"', "`", " ", "\r", `
`, "	"], wP = ["{", "}", "|", "\\", "^", "`"].concat(xP), CP = ["'"].concat(wP), Sr = ["%", "/", "?", ";", "#"].concat(CP), Dr = ["/", "?", "#"], AP = 255, qr = /^[+a-z0-9A-Z_-]{0,63}$/, EP = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Tr = {
  javascript: !0,
  "javascript:": !0
}, Fr = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function SP(n, e) {
  if (n && n instanceof rn)
    return n;
  var t = new rn();
  return t.parse(n, e), t;
}
rn.prototype.parse = function(n, e) {
  var t, r, o, s, i, c = n;
  if (c = c.trim(), !e && n.split("#").length === 1) {
    var a = _P.exec(c);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  var l = kP.exec(c);
  if (l && (l = l[0], o = l.toLowerCase(), this.protocol = l, c = c.substr(l.length)), (e || l || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = c.substr(0, 2) === "//", i && !(l && Tr[l]) && (c = c.substr(2), this.slashes = !0)), !Tr[l] && (i || l && !Fr[l])) {
    var u = -1;
    for (t = 0; t < Dr.length; t++)
      s = c.indexOf(Dr[t]), s !== -1 && (u === -1 || s < u) && (u = s);
    var f, d;
    for (u === -1 ? d = c.lastIndexOf("@") : d = c.lastIndexOf("@", u), d !== -1 && (f = c.slice(0, d), c = c.slice(d + 1), this.auth = f), u = -1, t = 0; t < Sr.length; t++)
      s = c.indexOf(Sr[t]), s !== -1 && (u === -1 || s < u) && (u = s);
    u === -1 && (u = c.length), c[u - 1] === ":" && u--;
    var p = c.slice(0, u);
    c = c.slice(u), this.parseHost(p), this.hostname = this.hostname || "";
    var g = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!g) {
      var m = this.hostname.split(/\./);
      for (t = 0, r = m.length; t < r; t++) {
        var x = m[t];
        if (x && !x.match(qr)) {
          for (var w = "", _ = 0, C = x.length; _ < C; _++)
            x.charCodeAt(_) > 127 ? w += "x" : w += x[_];
          if (!w.match(qr)) {
            var q = m.slice(0, t), E = m.slice(t + 1), y = x.match(EP);
            y && (q.push(y[1]), E.unshift(y[2])), E.length && (c = E.join(".") + c), this.hostname = q.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > AP && (this.hostname = ""), g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var v = c.indexOf("#");
  v !== -1 && (this.hash = c.substr(v), c = c.slice(0, v));
  var b = c.indexOf("?");
  return b !== -1 && (this.search = c.substr(b), c = c.slice(0, b)), c && (this.pathname = c), Fr[o] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
rn.prototype.parseHost = function(n) {
  var e = yP.exec(n);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), n = n.substr(0, n.length - e.length)), n && (this.hostname = n);
};
var DP = SP;
yt.encode = mP;
yt.decode = bP;
yt.format = vP;
yt.parse = DP;
var nt = {}, _n, Lr;
function go() {
  return Lr || (Lr = 1, _n = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), _n;
}
var xn, zr;
function bo() {
  return zr || (zr = 1, xn = /[\0-\x1F\x7F-\x9F]/), xn;
}
var wn, Rr;
function qP() {
  return Rr || (Rr = 1, wn = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), wn;
}
var Cn, Ir;
function vo() {
  return Ir || (Ir = 1, Cn = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Cn;
}
var Nr;
function TP() {
  return Nr || (Nr = 1, nt.Any = go(), nt.Cc = bo(), nt.Cf = qP(), nt.P = Xn, nt.Z = vo()), nt;
}
(function(n) {
  function e(k) {
    return Object.prototype.toString.call(k);
  }
  function t(k) {
    return e(k) === "[object String]";
  }
  var r = Object.prototype.hasOwnProperty;
  function o(k, F) {
    return r.call(k, F);
  }
  function s(k) {
    var F = Array.prototype.slice.call(arguments, 1);
    return F.forEach(function(A) {
      if (A) {
        if (typeof A != "object")
          throw new TypeError(A + "must be object");
        Object.keys(A).forEach(function(M) {
          k[M] = A[M];
        });
      }
    }), k;
  }
  function i(k, F, A) {
    return [].concat(k.slice(0, F), A, k.slice(F + 1));
  }
  function c(k) {
    return !(k >= 55296 && k <= 57343 || k >= 64976 && k <= 65007 || (k & 65535) === 65535 || (k & 65535) === 65534 || k >= 0 && k <= 8 || k === 11 || k >= 14 && k <= 31 || k >= 127 && k <= 159 || k > 1114111);
  }
  function a(k) {
    if (k > 65535) {
      k -= 65536;
      var F = 55296 + (k >> 10), A = 56320 + (k & 1023);
      return String.fromCharCode(F, A);
    }
    return String.fromCharCode(k);
  }
  var l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, u = /&([a-z#][a-z0-9]{1,31});/gi, f = new RegExp(l.source + "|" + u.source, "gi"), d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, p = mo;
  function g(k, F) {
    var A;
    return o(p, F) ? p[F] : F.charCodeAt(0) === 35 && d.test(F) && (A = F[1].toLowerCase() === "x" ? parseInt(F.slice(2), 16) : parseInt(F.slice(1), 10), c(A)) ? a(A) : k;
  }
  function m(k) {
    return k.indexOf("\\") < 0 ? k : k.replace(l, "$1");
  }
  function x(k) {
    return k.indexOf("\\") < 0 && k.indexOf("&") < 0 ? k : k.replace(f, function(F, A, M) {
      return A || g(F, M);
    });
  }
  var w = /[&<>"]/, _ = /[&<>"]/g, C = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function q(k) {
    return C[k];
  }
  function E(k) {
    return w.test(k) ? k.replace(_, q) : k;
  }
  var y = /[.?*+^$[\]\\(){}|-]/g;
  function v(k) {
    return k.replace(y, "\\$&");
  }
  function b(k) {
    switch (k) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function N(k) {
    if (k >= 8192 && k <= 8202)
      return !0;
    switch (k) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  var S = Xn;
  function z(k) {
    return S.test(k);
  }
  function D(k) {
    switch (k) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function L(k) {
    return k = k.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (k = k.replace(/ẞ/g, "ß")), k.toLowerCase().toUpperCase();
  }
  n.lib = {}, n.lib.mdurl = yt, n.lib.ucmicro = TP(), n.assign = s, n.isString = t, n.has = o, n.unescapeMd = m, n.unescapeAll = x, n.isValidEntityCode = c, n.fromCodePoint = a, n.escapeHtml = E, n.arrayReplaceAt = i, n.isSpace = b, n.isWhiteSpace = N, n.isMdAsciiPunct = D, n.isPunctChar = z, n.escapeRE = v, n.normalizeReference = L;
})(P);
var ln = {}, FP = function(e, t, r) {
  var o, s, i, c, a = -1, l = e.posMax, u = e.pos;
  for (e.pos = t + 1, o = 1; e.pos < l; ) {
    if (i = e.src.charCodeAt(e.pos), i === 93 && (o--, o === 0)) {
      s = !0;
      break;
    }
    if (c = e.pos, e.md.inline.skipToken(e), i === 91) {
      if (c === e.pos - 1)
        o++;
      else if (r)
        return e.pos = u, -1;
    }
  }
  return s && (a = e.pos), e.pos = u, a;
}, Or = P.unescapeAll, LP = function(e, t, r) {
  var o, s, i = t, c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(i) === 60) {
    for (i++; i < r; ) {
      if (o = e.charCodeAt(i), o === 10 || o === 60)
        return c;
      if (o === 62)
        return c.pos = i + 1, c.str = Or(e.slice(t + 1, i)), c.ok = !0, c;
      if (o === 92 && i + 1 < r) {
        i += 2;
        continue;
      }
      i++;
    }
    return c;
  }
  for (s = 0; i < r && (o = e.charCodeAt(i), !(o === 32 || o < 32 || o === 127)); ) {
    if (o === 92 && i + 1 < r) {
      if (e.charCodeAt(i + 1) === 32)
        break;
      i += 2;
      continue;
    }
    if (o === 40 && (s++, s > 32))
      return c;
    if (o === 41) {
      if (s === 0)
        break;
      s--;
    }
    i++;
  }
  return t === i || s !== 0 || (c.str = Or(e.slice(t, i)), c.pos = i, c.ok = !0), c;
}, zP = P.unescapeAll, RP = function(e, t, r) {
  var o, s, i = 0, c = t, a = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (c >= r || (s = e.charCodeAt(c), s !== 34 && s !== 39 && s !== 40))
    return a;
  for (c++, s === 40 && (s = 41); c < r; ) {
    if (o = e.charCodeAt(c), o === s)
      return a.pos = c + 1, a.lines = i, a.str = zP(e.slice(t + 1, c)), a.ok = !0, a;
    if (o === 40 && s === 41)
      return a;
    o === 10 ? i++ : o === 92 && c + 1 < r && (c++, e.charCodeAt(c) === 10 && i++), c++;
  }
  return a;
};
ln.parseLinkLabel = FP;
ln.parseLinkDestination = LP;
ln.parseLinkTitle = RP;
var IP = P.assign, NP = P.unescapeAll, ht = P.escapeHtml, ze = {};
ze.code_inline = function(n, e, t, r, o) {
  var s = n[e];
  return "<code" + o.renderAttrs(s) + ">" + ht(s.content) + "</code>";
};
ze.code_block = function(n, e, t, r, o) {
  var s = n[e];
  return "<pre" + o.renderAttrs(s) + "><code>" + ht(n[e].content) + `</code></pre>
`;
};
ze.fence = function(n, e, t, r, o) {
  var s = n[e], i = s.info ? NP(s.info).trim() : "", c = "", a = "", l, u, f, d, p;
  return i && (f = i.split(/(\s+)/g), c = f[0], a = f.slice(2).join("")), t.highlight ? l = t.highlight(s.content, c, a) || ht(s.content) : l = ht(s.content), l.indexOf("<pre") === 0 ? l + `
` : i ? (u = s.attrIndex("class"), d = s.attrs ? s.attrs.slice() : [], u < 0 ? d.push(["class", t.langPrefix + c]) : (d[u] = d[u].slice(), d[u][1] += " " + t.langPrefix + c), p = {
    attrs: d
  }, "<pre><code" + o.renderAttrs(p) + ">" + l + `</code></pre>
`) : "<pre><code" + o.renderAttrs(s) + ">" + l + `</code></pre>
`;
};
ze.image = function(n, e, t, r, o) {
  var s = n[e];
  return s.attrs[s.attrIndex("alt")][1] = o.renderInlineAsText(s.children, t, r), o.renderToken(n, e, t);
};
ze.hardbreak = function(n, e, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
ze.softbreak = function(n, e, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
ze.text = function(n, e) {
  return ht(n[e].content);
};
ze.html_block = function(n, e) {
  return n[e].content;
};
ze.html_inline = function(n, e) {
  return n[e].content;
};
function _t() {
  this.rules = IP({}, ze);
}
_t.prototype.renderAttrs = function(e) {
  var t, r, o;
  if (!e.attrs)
    return "";
  for (o = "", t = 0, r = e.attrs.length; t < r; t++)
    o += " " + ht(e.attrs[t][0]) + '="' + ht(e.attrs[t][1]) + '"';
  return o;
};
_t.prototype.renderToken = function(e, t, r) {
  var o, s = "", i = !1, c = e[t];
  return c.hidden ? "" : (c.block && c.nesting !== -1 && t && e[t - 1].hidden && (s += `
`), s += (c.nesting === -1 ? "</" : "<") + c.tag, s += this.renderAttrs(c), c.nesting === 0 && r.xhtmlOut && (s += " /"), c.block && (i = !0, c.nesting === 1 && t + 1 < e.length && (o = e[t + 1], (o.type === "inline" || o.hidden || o.nesting === -1 && o.tag === c.tag) && (i = !1))), s += i ? `>
` : ">", s);
};
_t.prototype.renderInline = function(n, e, t) {
  for (var r, o = "", s = this.rules, i = 0, c = n.length; i < c; i++)
    r = n[i].type, typeof s[r] < "u" ? o += s[r](n, i, e, t, this) : o += this.renderToken(n, i, e);
  return o;
};
_t.prototype.renderInlineAsText = function(n, e, t) {
  for (var r = "", o = 0, s = n.length; o < s; o++)
    n[o].type === "text" ? r += n[o].content : n[o].type === "image" ? r += this.renderInlineAsText(n[o].children, e, t) : n[o].type === "softbreak" && (r += `
`);
  return r;
};
_t.prototype.render = function(n, e, t) {
  var r, o, s, i = "", c = this.rules;
  for (r = 0, o = n.length; r < o; r++)
    s = n[r].type, s === "inline" ? i += this.renderInline(n[r].children, e, t) : typeof c[s] < "u" ? i += c[s](n, r, e, t, this) : i += this.renderToken(n, r, e, t);
  return i;
};
var OP = _t;
function ke() {
  this.__rules__ = [], this.__cache__ = null;
}
ke.prototype.__find__ = function(n) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === n)
      return e;
  return -1;
};
ke.prototype.__compile__ = function() {
  var n = this, e = [""];
  n.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(r) {
      e.indexOf(r) < 0 && e.push(r);
    });
  }), n.__cache__ = {}, e.forEach(function(t) {
    n.__cache__[t] = [], n.__rules__.forEach(function(r) {
      r.enabled && (t && r.alt.indexOf(t) < 0 || n.__cache__[t].push(r.fn));
    });
  });
};
ke.prototype.at = function(n, e, t) {
  var r = this.__find__(n), o = t || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__[r].fn = e, this.__rules__[r].alt = o.alt || [], this.__cache__ = null;
};
ke.prototype.before = function(n, e, t, r) {
  var o = this.__find__(n), s = r || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(o, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: s.alt || []
  }), this.__cache__ = null;
};
ke.prototype.after = function(n, e, t, r) {
  var o = this.__find__(n), s = r || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(o + 1, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: s.alt || []
  }), this.__cache__ = null;
};
ke.prototype.push = function(n, e, t) {
  var r = t || {};
  this.__rules__.push({
    name: n,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
ke.prototype.enable = function(n, e) {
  Array.isArray(n) || (n = [n]);
  var t = [];
  return n.forEach(function(r) {
    var o = this.__find__(r);
    if (o < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[o].enabled = !0, t.push(r);
  }, this), this.__cache__ = null, t;
};
ke.prototype.enableOnly = function(n, e) {
  Array.isArray(n) || (n = [n]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(n, e);
};
ke.prototype.disable = function(n, e) {
  Array.isArray(n) || (n = [n]);
  var t = [];
  return n.forEach(function(r) {
    var o = this.__find__(r);
    if (o < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[o].enabled = !1, t.push(r);
  }, this), this.__cache__ = null, t;
};
ke.prototype.getRules = function(n) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[n] || [];
};
var er = ke, BP = /\r\n?|\n/g, $P = /\0/g, MP = function(e) {
  var t;
  t = e.src.replace(BP, `
`), t = t.replace($P, "�"), e.src = t;
}, PP = function(e) {
  var t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}, UP = function(e) {
  var t = e.tokens, r, o, s;
  for (o = 0, s = t.length; o < s; o++)
    r = t[o], r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
}, jP = P.arrayReplaceAt;
function HP(n) {
  return /^<a[>\s]/i.test(n);
}
function VP(n) {
  return /^<\/a\s*>/i.test(n);
}
var GP = function(e) {
  var t, r, o, s, i, c, a, l, u, f, d, p, g, m, x, w, _ = e.tokens, C;
  if (e.md.options.linkify) {
    for (r = 0, o = _.length; r < o; r++)
      if (!(_[r].type !== "inline" || !e.md.linkify.pretest(_[r].content)))
        for (s = _[r].children, g = 0, t = s.length - 1; t >= 0; t--) {
          if (c = s[t], c.type === "link_close") {
            for (t--; s[t].level !== c.level && s[t].type !== "link_open"; )
              t--;
            continue;
          }
          if (c.type === "html_inline" && (HP(c.content) && g > 0 && g--, VP(c.content) && g++), !(g > 0) && c.type === "text" && e.md.linkify.test(c.content)) {
            for (u = c.content, C = e.md.linkify.match(u), a = [], p = c.level, d = 0, C.length > 0 && C[0].index === 0 && t > 0 && s[t - 1].type === "text_special" && (C = C.slice(1)), l = 0; l < C.length; l++)
              m = C[l].url, x = e.md.normalizeLink(m), e.md.validateLink(x) && (w = C[l].text, C[l].schema ? C[l].schema === "mailto:" && !/^mailto:/i.test(w) ? w = e.md.normalizeLinkText("mailto:" + w).replace(/^mailto:/, "") : w = e.md.normalizeLinkText(w) : w = e.md.normalizeLinkText("http://" + w).replace(/^http:\/\//, ""), f = C[l].index, f > d && (i = new e.Token("text", "", 0), i.content = u.slice(d, f), i.level = p, a.push(i)), i = new e.Token("link_open", "a", 1), i.attrs = [["href", x]], i.level = p++, i.markup = "linkify", i.info = "auto", a.push(i), i = new e.Token("text", "", 0), i.content = w, i.level = p, a.push(i), i = new e.Token("link_close", "a", -1), i.level = --p, i.markup = "linkify", i.info = "auto", a.push(i), d = C[l].lastIndex);
            d < u.length && (i = new e.Token("text", "", 0), i.content = u.slice(d), i.level = p, a.push(i)), _[r].children = s = jP(s, t, a);
          }
        }
  }
}, ko = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, ZP = /\((c|tm|r)\)/i, WP = /\((c|tm|r)\)/ig, KP = {
  c: "©",
  r: "®",
  tm: "™"
};
function JP(n, e) {
  return KP[e.toLowerCase()];
}
function YP(n) {
  var e, t, r = 0;
  for (e = n.length - 1; e >= 0; e--)
    t = n[e], t.type === "text" && !r && (t.content = t.content.replace(WP, JP)), t.type === "link_open" && t.info === "auto" && r--, t.type === "link_close" && t.info === "auto" && r++;
}
function QP(n) {
  var e, t, r = 0;
  for (e = n.length - 1; e >= 0; e--)
    t = n[e], t.type === "text" && !r && ko.test(t.content) && (t.content = t.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), t.type === "link_open" && t.info === "auto" && r--, t.type === "link_close" && t.info === "auto" && r++;
}
var XP = function(e) {
  var t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (ZP.test(e.tokens[t].content) && YP(e.tokens[t].children), ko.test(e.tokens[t].content) && QP(e.tokens[t].children));
}, Br = P.isWhiteSpace, $r = P.isPunctChar, Mr = P.isMdAsciiPunct, eU = /['"]/, Pr = /['"]/g, Ur = "’";
function Vt(n, e, t) {
  return n.slice(0, e) + t + n.slice(e + 1);
}
function tU(n, e) {
  var t, r, o, s, i, c, a, l, u, f, d, p, g, m, x, w, _, C, q, E, y;
  for (q = [], t = 0; t < n.length; t++) {
    for (r = n[t], a = n[t].level, _ = q.length - 1; _ >= 0 && !(q[_].level <= a); _--)
      ;
    if (q.length = _ + 1, r.type === "text") {
      o = r.content, i = 0, c = o.length;
      e:
        for (; i < c && (Pr.lastIndex = i, s = Pr.exec(o), !!s); ) {
          if (x = w = !0, i = s.index + 1, C = s[0] === "'", u = 32, s.index - 1 >= 0)
            u = o.charCodeAt(s.index - 1);
          else
            for (_ = t - 1; _ >= 0 && !(n[_].type === "softbreak" || n[_].type === "hardbreak"); _--)
              if (n[_].content) {
                u = n[_].content.charCodeAt(n[_].content.length - 1);
                break;
              }
          if (f = 32, i < c)
            f = o.charCodeAt(i);
          else
            for (_ = t + 1; _ < n.length && !(n[_].type === "softbreak" || n[_].type === "hardbreak"); _++)
              if (n[_].content) {
                f = n[_].content.charCodeAt(0);
                break;
              }
          if (d = Mr(u) || $r(String.fromCharCode(u)), p = Mr(f) || $r(String.fromCharCode(f)), g = Br(u), m = Br(f), m ? x = !1 : p && (g || d || (x = !1)), g ? w = !1 : d && (m || p || (w = !1)), f === 34 && s[0] === '"' && u >= 48 && u <= 57 && (w = x = !1), x && w && (x = d, w = p), !x && !w) {
            C && (r.content = Vt(r.content, s.index, Ur));
            continue;
          }
          if (w) {
            for (_ = q.length - 1; _ >= 0 && (l = q[_], !(q[_].level < a)); _--)
              if (l.single === C && q[_].level === a) {
                l = q[_], C ? (E = e.md.options.quotes[2], y = e.md.options.quotes[3]) : (E = e.md.options.quotes[0], y = e.md.options.quotes[1]), r.content = Vt(r.content, s.index, y), n[l.token].content = Vt(
                  n[l.token].content,
                  l.pos,
                  E
                ), i += y.length - 1, l.token === t && (i += E.length - 1), o = r.content, c = o.length, q.length = _;
                continue e;
              }
          }
          x ? q.push({
            token: t,
            pos: s.index,
            single: C,
            level: a
          }) : w && C && (r.content = Vt(r.content, s.index, Ur));
        }
    }
  }
}
var nU = function(e) {
  var t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !eU.test(e.tokens[t].content) || tU(e.tokens[t].children, e);
}, rU = function(e) {
  var t, r, o, s, i, c, a = e.tokens;
  for (t = 0, r = a.length; t < r; t++)
    if (a[t].type === "inline") {
      for (o = a[t].children, i = o.length, s = 0; s < i; s++)
        o[s].type === "text_special" && (o[s].type = "text");
      for (s = c = 0; s < i; s++)
        o[s].type === "text" && s + 1 < i && o[s + 1].type === "text" ? o[s + 1].content = o[s].content + o[s + 1].content : (s !== c && (o[c] = o[s]), c++);
      s !== c && (o.length = c);
    }
};
function xt(n, e, t) {
  this.type = n, this.tag = e, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
xt.prototype.attrIndex = function(e) {
  var t, r, o;
  if (!this.attrs)
    return -1;
  for (t = this.attrs, r = 0, o = t.length; r < o; r++)
    if (t[r][0] === e)
      return r;
  return -1;
};
xt.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
xt.prototype.attrSet = function(e, t) {
  var r = this.attrIndex(e), o = [e, t];
  r < 0 ? this.attrPush(o) : this.attrs[r] = o;
};
xt.prototype.attrGet = function(e) {
  var t = this.attrIndex(e), r = null;
  return t >= 0 && (r = this.attrs[t][1]), r;
};
xt.prototype.attrJoin = function(e, t) {
  var r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, t]) : this.attrs[r][1] = this.attrs[r][1] + " " + t;
};
var tr = xt, oU = tr;
function yo(n, e, t) {
  this.src = n, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = e;
}
yo.prototype.Token = oU;
var sU = yo, iU = er, An = [
  ["normalize", MP],
  ["block", PP],
  ["inline", UP],
  ["linkify", GP],
  ["replacements", XP],
  ["smartquotes", nU],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", rU]
];
function nr() {
  this.ruler = new iU();
  for (var n = 0; n < An.length; n++)
    this.ruler.push(An[n][0], An[n][1]);
}
nr.prototype.process = function(n) {
  var e, t, r;
  for (r = this.ruler.getRules(""), e = 0, t = r.length; e < t; e++)
    r[e](n);
};
nr.prototype.State = sU;
var cU = nr, En = P.isSpace;
function Sn(n, e) {
  var t = n.bMarks[e] + n.tShift[e], r = n.eMarks[e];
  return n.src.slice(t, r);
}
function jr(n) {
  var e = [], t = 0, r = n.length, o, s = !1, i = 0, c = "";
  for (o = n.charCodeAt(t); t < r; )
    o === 124 && (s ? (c += n.substring(i, t - 1), i = t) : (e.push(c + n.substring(i, t)), c = "", i = t + 1)), s = o === 92, t++, o = n.charCodeAt(t);
  return e.push(c + n.substring(i)), e;
}
var aU = function(e, t, r, o) {
  var s, i, c, a, l, u, f, d, p, g, m, x, w, _, C, q, E, y;
  if (t + 2 > r || (u = t + 1, e.sCount[u] < e.blkIndent) || e.sCount[u] - e.blkIndent >= 4 || (c = e.bMarks[u] + e.tShift[u], c >= e.eMarks[u]) || (E = e.src.charCodeAt(c++), E !== 124 && E !== 45 && E !== 58) || c >= e.eMarks[u] || (y = e.src.charCodeAt(c++), y !== 124 && y !== 45 && y !== 58 && !En(y)) || E === 45 && En(y))
    return !1;
  for (; c < e.eMarks[u]; ) {
    if (s = e.src.charCodeAt(c), s !== 124 && s !== 45 && s !== 58 && !En(s))
      return !1;
    c++;
  }
  for (i = Sn(e, t + 1), f = i.split("|"), g = [], a = 0; a < f.length; a++) {
    if (m = f[a].trim(), !m) {
      if (a === 0 || a === f.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(m))
      return !1;
    m.charCodeAt(m.length - 1) === 58 ? g.push(m.charCodeAt(0) === 58 ? "center" : "right") : m.charCodeAt(0) === 58 ? g.push("left") : g.push("");
  }
  if (i = Sn(e, t).trim(), i.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4 || (f = jr(i), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), d = f.length, d === 0 || d !== g.length))
    return !1;
  if (o)
    return !0;
  for (_ = e.parentType, e.parentType = "table", q = e.md.block.ruler.getRules("blockquote"), p = e.push("table_open", "table", 1), p.map = x = [t, 0], p = e.push("thead_open", "thead", 1), p.map = [t, t + 1], p = e.push("tr_open", "tr", 1), p.map = [t, t + 1], a = 0; a < f.length; a++)
    p = e.push("th_open", "th", 1), g[a] && (p.attrs = [["style", "text-align:" + g[a]]]), p = e.push("inline", "", 0), p.content = f[a].trim(), p.children = [], p = e.push("th_close", "th", -1);
  for (p = e.push("tr_close", "tr", -1), p = e.push("thead_close", "thead", -1), u = t + 2; u < r && !(e.sCount[u] < e.blkIndent); u++) {
    for (C = !1, a = 0, l = q.length; a < l; a++)
      if (q[a](e, u, r, !0)) {
        C = !0;
        break;
      }
    if (C || (i = Sn(e, u).trim(), !i) || e.sCount[u] - e.blkIndent >= 4)
      break;
    for (f = jr(i), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), u === t + 2 && (p = e.push("tbody_open", "tbody", 1), p.map = w = [t + 2, 0]), p = e.push("tr_open", "tr", 1), p.map = [u, u + 1], a = 0; a < d; a++)
      p = e.push("td_open", "td", 1), g[a] && (p.attrs = [["style", "text-align:" + g[a]]]), p = e.push("inline", "", 0), p.content = f[a] ? f[a].trim() : "", p.children = [], p = e.push("td_close", "td", -1);
    p = e.push("tr_close", "tr", -1);
  }
  return w && (p = e.push("tbody_close", "tbody", -1), w[1] = u), p = e.push("table_close", "table", -1), x[1] = u, e.parentType = _, e.line = u, !0;
}, lU = function(e, t, r) {
  var o, s, i;
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  for (s = o = t + 1; o < r; ) {
    if (e.isEmpty(o)) {
      o++;
      continue;
    }
    if (e.sCount[o] - e.blkIndent >= 4) {
      o++, s = o;
      continue;
    }
    break;
  }
  return e.line = s, i = e.push("code_block", "code", 0), i.content = e.getLines(t, s, 4 + e.blkIndent, !1) + `
`, i.map = [t, e.line], !0;
}, uU = function(e, t, r, o) {
  var s, i, c, a, l, u, f, d = !1, p = e.bMarks[t] + e.tShift[t], g = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || p + 3 > g || (s = e.src.charCodeAt(p), s !== 126 && s !== 96) || (l = p, p = e.skipChars(p, s), i = p - l, i < 3) || (f = e.src.slice(l, p), c = e.src.slice(p, g), s === 96 && c.indexOf(String.fromCharCode(s)) >= 0))
    return !1;
  if (o)
    return !0;
  for (a = t; a++, !(a >= r || (p = l = e.bMarks[a] + e.tShift[a], g = e.eMarks[a], p < g && e.sCount[a] < e.blkIndent)); )
    if (e.src.charCodeAt(p) === s && !(e.sCount[a] - e.blkIndent >= 4) && (p = e.skipChars(p, s), !(p - l < i) && (p = e.skipSpaces(p), !(p < g)))) {
      d = !0;
      break;
    }
  return i = e.sCount[t], e.line = a + (d ? 1 : 0), u = e.push("fence", "code", 0), u.info = c, u.content = e.getLines(t + 1, a, i, !0), u.markup = f, u.map = [t, e.line], !0;
}, hU = P.isSpace, fU = function(e, t, r, o) {
  var s, i, c, a, l, u, f, d, p, g, m, x, w, _, C, q, E, y, v, b, N = e.lineMax, S = e.bMarks[t] + e.tShift[t], z = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(S) !== 62)
    return !1;
  if (o)
    return !0;
  for (g = [], m = [], _ = [], C = [], y = e.md.block.ruler.getRules("blockquote"), w = e.parentType, e.parentType = "blockquote", d = t; d < r && (b = e.sCount[d] < e.blkIndent, S = e.bMarks[d] + e.tShift[d], z = e.eMarks[d], !(S >= z)); d++) {
    if (e.src.charCodeAt(S++) === 62 && !b) {
      for (a = e.sCount[d] + 1, e.src.charCodeAt(S) === 32 ? (S++, a++, s = !1, q = !0) : e.src.charCodeAt(S) === 9 ? (q = !0, (e.bsCount[d] + a) % 4 === 3 ? (S++, a++, s = !1) : s = !0) : q = !1, p = a, g.push(e.bMarks[d]), e.bMarks[d] = S; S < z && (i = e.src.charCodeAt(S), hU(i)); ) {
        i === 9 ? p += 4 - (p + e.bsCount[d] + (s ? 1 : 0)) % 4 : p++;
        S++;
      }
      u = S >= z, m.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (q ? 1 : 0), _.push(e.sCount[d]), e.sCount[d] = p - a, C.push(e.tShift[d]), e.tShift[d] = S - e.bMarks[d];
      continue;
    }
    if (u)
      break;
    for (E = !1, c = 0, l = y.length; c < l; c++)
      if (y[c](e, d, r, !0)) {
        E = !0;
        break;
      }
    if (E) {
      e.lineMax = d, e.blkIndent !== 0 && (g.push(e.bMarks[d]), m.push(e.bsCount[d]), C.push(e.tShift[d]), _.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    g.push(e.bMarks[d]), m.push(e.bsCount[d]), C.push(e.tShift[d]), _.push(e.sCount[d]), e.sCount[d] = -1;
  }
  for (x = e.blkIndent, e.blkIndent = 0, v = e.push("blockquote_open", "blockquote", 1), v.markup = ">", v.map = f = [t, 0], e.md.block.tokenize(e, t, d), v = e.push("blockquote_close", "blockquote", -1), v.markup = ">", e.lineMax = N, e.parentType = w, f[1] = e.line, c = 0; c < C.length; c++)
    e.bMarks[c + t] = g[c], e.tShift[c + t] = C[c], e.sCount[c + t] = _[c], e.bsCount[c + t] = m[c];
  return e.blkIndent = x, !0;
}, pU = P.isSpace, dU = function(e, t, r, o) {
  var s, i, c, a, l = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || (s = e.src.charCodeAt(l++), s !== 42 && s !== 45 && s !== 95))
    return !1;
  for (i = 1; l < u; ) {
    if (c = e.src.charCodeAt(l++), c !== s && !pU(c))
      return !1;
    c === s && i++;
  }
  return i < 3 ? !1 : (o || (e.line = t + 1, a = e.push("hr", "hr", 0), a.map = [t, e.line], a.markup = Array(i + 1).join(String.fromCharCode(s))), !0);
}, _o = P.isSpace;
function Hr(n, e) {
  var t, r, o, s;
  return r = n.bMarks[e] + n.tShift[e], o = n.eMarks[e], t = n.src.charCodeAt(r++), t !== 42 && t !== 45 && t !== 43 || r < o && (s = n.src.charCodeAt(r), !_o(s)) ? -1 : r;
}
function Vr(n, e) {
  var t, r = n.bMarks[e] + n.tShift[e], o = r, s = n.eMarks[e];
  if (o + 1 >= s || (t = n.src.charCodeAt(o++), t < 48 || t > 57))
    return -1;
  for (; ; ) {
    if (o >= s)
      return -1;
    if (t = n.src.charCodeAt(o++), t >= 48 && t <= 57) {
      if (o - r >= 10)
        return -1;
      continue;
    }
    if (t === 41 || t === 46)
      break;
    return -1;
  }
  return o < s && (t = n.src.charCodeAt(o), !_o(t)) ? -1 : o;
}
function mU(n, e) {
  var t, r, o = n.level + 2;
  for (t = e + 2, r = n.tokens.length - 2; t < r; t++)
    n.tokens[t].level === o && n.tokens[t].type === "paragraph_open" && (n.tokens[t + 2].hidden = !0, n.tokens[t].hidden = !0, t += 2);
}
var gU = function(e, t, r, o) {
  var s, i, c, a, l, u, f, d, p, g, m, x, w, _, C, q, E, y, v, b, N, S, z, D, L, k, F, A = t, M = !1, G = !0;
  if (e.sCount[A] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[A] - e.listIndent >= 4 && e.sCount[A] < e.blkIndent)
    return !1;
  if (o && e.parentType === "paragraph" && e.sCount[A] >= e.blkIndent && (M = !0), (S = Vr(e, A)) >= 0) {
    if (f = !0, D = e.bMarks[A] + e.tShift[A], w = Number(e.src.slice(D, S - 1)), M && w !== 1)
      return !1;
  } else if ((S = Hr(e, A)) >= 0)
    f = !1;
  else
    return !1;
  if (M && e.skipSpaces(S) >= e.eMarks[A])
    return !1;
  if (o)
    return !0;
  for (x = e.src.charCodeAt(S - 1), m = e.tokens.length, f ? (F = e.push("ordered_list_open", "ol", 1), w !== 1 && (F.attrs = [["start", w]])) : F = e.push("bullet_list_open", "ul", 1), F.map = g = [A, 0], F.markup = String.fromCharCode(x), z = !1, k = e.md.block.ruler.getRules("list"), E = e.parentType, e.parentType = "list"; A < r; ) {
    for (N = S, _ = e.eMarks[A], u = C = e.sCount[A] + S - (e.bMarks[A] + e.tShift[A]); N < _; ) {
      if (s = e.src.charCodeAt(N), s === 9)
        C += 4 - (C + e.bsCount[A]) % 4;
      else if (s === 32)
        C++;
      else
        break;
      N++;
    }
    if (i = N, i >= _ ? l = 1 : l = C - u, l > 4 && (l = 1), a = u + l, F = e.push("list_item_open", "li", 1), F.markup = String.fromCharCode(x), F.map = d = [A, 0], f && (F.info = e.src.slice(D, S - 1)), b = e.tight, v = e.tShift[A], y = e.sCount[A], q = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = a, e.tight = !0, e.tShift[A] = i - e.bMarks[A], e.sCount[A] = C, i >= _ && e.isEmpty(A + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, A, r, !0), (!e.tight || z) && (G = !1), z = e.line - A > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = q, e.tShift[A] = v, e.sCount[A] = y, e.tight = b, F = e.push("list_item_close", "li", -1), F.markup = String.fromCharCode(x), A = e.line, d[1] = A, A >= r || e.sCount[A] < e.blkIndent || e.sCount[A] - e.blkIndent >= 4)
      break;
    for (L = !1, c = 0, p = k.length; c < p; c++)
      if (k[c](e, A, r, !0)) {
        L = !0;
        break;
      }
    if (L)
      break;
    if (f) {
      if (S = Vr(e, A), S < 0)
        break;
      D = e.bMarks[A] + e.tShift[A];
    } else if (S = Hr(e, A), S < 0)
      break;
    if (x !== e.src.charCodeAt(S - 1))
      break;
  }
  return f ? F = e.push("ordered_list_close", "ol", -1) : F = e.push("bullet_list_close", "ul", -1), F.markup = String.fromCharCode(x), g[1] = A, e.line = A, e.parentType = E, G && mU(e, m), !0;
}, bU = P.normalizeReference, Gt = P.isSpace, vU = function(e, t, r, o) {
  var s, i, c, a, l, u, f, d, p, g, m, x, w, _, C, q, E = 0, y = e.bMarks[t] + e.tShift[t], v = e.eMarks[t], b = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(y) !== 91)
    return !1;
  for (; ++y < v; )
    if (e.src.charCodeAt(y) === 93 && e.src.charCodeAt(y - 1) !== 92) {
      if (y + 1 === v || e.src.charCodeAt(y + 1) !== 58)
        return !1;
      break;
    }
  for (a = e.lineMax, C = e.md.block.ruler.getRules("reference"), g = e.parentType, e.parentType = "reference"; b < a && !e.isEmpty(b); b++)
    if (!(e.sCount[b] - e.blkIndent > 3) && !(e.sCount[b] < 0)) {
      for (_ = !1, u = 0, f = C.length; u < f; u++)
        if (C[u](e, b, a, !0)) {
          _ = !0;
          break;
        }
      if (_)
        break;
    }
  for (w = e.getLines(t, b, e.blkIndent, !1).trim(), v = w.length, y = 1; y < v; y++) {
    if (s = w.charCodeAt(y), s === 91)
      return !1;
    if (s === 93) {
      p = y;
      break;
    } else
      s === 10 ? E++ : s === 92 && (y++, y < v && w.charCodeAt(y) === 10 && E++);
  }
  if (p < 0 || w.charCodeAt(p + 1) !== 58)
    return !1;
  for (y = p + 2; y < v; y++)
    if (s = w.charCodeAt(y), s === 10)
      E++;
    else if (!Gt(s))
      break;
  if (m = e.md.helpers.parseLinkDestination(w, y, v), !m.ok || (l = e.md.normalizeLink(m.str), !e.md.validateLink(l)))
    return !1;
  for (y = m.pos, E += m.lines, i = y, c = E, x = y; y < v; y++)
    if (s = w.charCodeAt(y), s === 10)
      E++;
    else if (!Gt(s))
      break;
  for (m = e.md.helpers.parseLinkTitle(w, y, v), y < v && x !== y && m.ok ? (q = m.str, y = m.pos, E += m.lines) : (q = "", y = i, E = c); y < v && (s = w.charCodeAt(y), !!Gt(s)); )
    y++;
  if (y < v && w.charCodeAt(y) !== 10 && q)
    for (q = "", y = i, E = c; y < v && (s = w.charCodeAt(y), !!Gt(s)); )
      y++;
  return y < v && w.charCodeAt(y) !== 10 || (d = bU(w.slice(1, p)), !d) ? !1 : (o || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[d] > "u" && (e.env.references[d] = { title: q, href: l }), e.parentType = g, e.line = t + E + 1), !0);
}, kU = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], un = {}, yU = "[a-zA-Z_:][a-zA-Z0-9:._-]*", _U = "[^\"'=<>`\\x00-\\x20]+", xU = "'[^']*'", wU = '"[^"]*"', CU = "(?:" + _U + "|" + xU + "|" + wU + ")", AU = "(?:\\s+" + yU + "(?:\\s*=\\s*" + CU + ")?)", xo = "<[A-Za-z][A-Za-z0-9\\-]*" + AU + "*\\s*\\/?>", wo = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", EU = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", SU = "<[?][\\s\\S]*?[?]>", DU = "<![A-Z]+\\s+[^>]*>", qU = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", TU = new RegExp("^(?:" + xo + "|" + wo + "|" + EU + "|" + SU + "|" + DU + "|" + qU + ")"), FU = new RegExp("^(?:" + xo + "|" + wo + ")");
un.HTML_TAG_RE = TU;
un.HTML_OPEN_CLOSE_TAG_RE = FU;
var LU = kU, zU = un.HTML_OPEN_CLOSE_TAG_RE, pt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + LU.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(zU.source + "\\s*$"), /^$/, !1]
], RU = function(e, t, r, o) {
  var s, i, c, a, l = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(l) !== 60)
    return !1;
  for (a = e.src.slice(l, u), s = 0; s < pt.length && !pt[s][0].test(a); s++)
    ;
  if (s === pt.length)
    return !1;
  if (o)
    return pt[s][2];
  if (i = t + 1, !pt[s][1].test(a)) {
    for (; i < r && !(e.sCount[i] < e.blkIndent); i++)
      if (l = e.bMarks[i] + e.tShift[i], u = e.eMarks[i], a = e.src.slice(l, u), pt[s][1].test(a)) {
        a.length !== 0 && i++;
        break;
      }
  }
  return e.line = i, c = e.push("html_block", "", 0), c.map = [t, i], c.content = e.getLines(t, i, e.blkIndent, !0), !0;
}, Gr = P.isSpace, IU = function(e, t, r, o) {
  var s, i, c, a, l = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || (s = e.src.charCodeAt(l), s !== 35 || l >= u))
    return !1;
  for (i = 1, s = e.src.charCodeAt(++l); s === 35 && l < u && i <= 6; )
    i++, s = e.src.charCodeAt(++l);
  return i > 6 || l < u && !Gr(s) ? !1 : (o || (u = e.skipSpacesBack(u, l), c = e.skipCharsBack(u, 35, l), c > l && Gr(e.src.charCodeAt(c - 1)) && (u = c), e.line = t + 1, a = e.push("heading_open", "h" + String(i), 1), a.markup = "########".slice(0, i), a.map = [t, e.line], a = e.push("inline", "", 0), a.content = e.src.slice(l, u).trim(), a.map = [t, e.line], a.children = [], a = e.push("heading_close", "h" + String(i), -1), a.markup = "########".slice(0, i)), !0);
}, NU = function(e, t, r) {
  var o, s, i, c, a, l, u, f, d, p = t + 1, g, m = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  for (g = e.parentType, e.parentType = "paragraph"; p < r && !e.isEmpty(p); p++)
    if (!(e.sCount[p] - e.blkIndent > 3)) {
      if (e.sCount[p] >= e.blkIndent && (l = e.bMarks[p] + e.tShift[p], u = e.eMarks[p], l < u && (d = e.src.charCodeAt(l), (d === 45 || d === 61) && (l = e.skipChars(l, d), l = e.skipSpaces(l), l >= u)))) {
        f = d === 61 ? 1 : 2;
        break;
      }
      if (!(e.sCount[p] < 0)) {
        for (s = !1, i = 0, c = m.length; i < c; i++)
          if (m[i](e, p, r, !0)) {
            s = !0;
            break;
          }
        if (s)
          break;
      }
    }
  return f ? (o = e.getLines(t, p, e.blkIndent, !1).trim(), e.line = p + 1, a = e.push("heading_open", "h" + String(f), 1), a.markup = String.fromCharCode(d), a.map = [t, e.line], a = e.push("inline", "", 0), a.content = o, a.map = [t, e.line - 1], a.children = [], a = e.push("heading_close", "h" + String(f), -1), a.markup = String.fromCharCode(d), e.parentType = g, !0) : !1;
}, OU = function(e, t, r) {
  var o, s, i, c, a, l, u = t + 1, f = e.md.block.ruler.getRules("paragraph");
  for (l = e.parentType, e.parentType = "paragraph"; u < r && !e.isEmpty(u); u++)
    if (!(e.sCount[u] - e.blkIndent > 3) && !(e.sCount[u] < 0)) {
      for (s = !1, i = 0, c = f.length; i < c; i++)
        if (f[i](e, u, r, !0)) {
          s = !0;
          break;
        }
      if (s)
        break;
    }
  return o = e.getLines(t, u, e.blkIndent, !1).trim(), e.line = u, a = e.push("paragraph_open", "p", 1), a.map = [t, e.line], a = e.push("inline", "", 0), a.content = o, a.map = [t, e.line], a.children = [], a = e.push("paragraph_close", "p", -1), e.parentType = l, !0;
}, Co = tr, hn = P.isSpace;
function Re(n, e, t, r) {
  var o, s, i, c, a, l, u, f;
  for (this.src = n, this.md = e, this.env = t, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", s = this.src, f = !1, i = c = l = u = 0, a = s.length; c < a; c++) {
    if (o = s.charCodeAt(c), !f)
      if (hn(o)) {
        l++, o === 9 ? u += 4 - u % 4 : u++;
        continue;
      } else
        f = !0;
    (o === 10 || c === a - 1) && (o !== 10 && c++, this.bMarks.push(i), this.eMarks.push(c), this.tShift.push(l), this.sCount.push(u), this.bsCount.push(0), f = !1, l = 0, u = 0, i = c + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Re.prototype.push = function(n, e, t) {
  var r = new Co(n, e, t);
  return r.block = !0, t < 0 && this.level--, r.level = this.level, t > 0 && this.level++, this.tokens.push(r), r;
};
Re.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
Re.prototype.skipEmptyLines = function(e) {
  for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
Re.prototype.skipSpaces = function(e) {
  for (var t, r = this.src.length; e < r && (t = this.src.charCodeAt(e), !!hn(t)); e++)
    ;
  return e;
};
Re.prototype.skipSpacesBack = function(e, t) {
  if (e <= t)
    return e;
  for (; e > t; )
    if (!hn(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
Re.prototype.skipChars = function(e, t) {
  for (var r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++)
    ;
  return e;
};
Re.prototype.skipCharsBack = function(e, t, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (t !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
Re.prototype.getLines = function(e, t, r, o) {
  var s, i, c, a, l, u, f, d = e;
  if (e >= t)
    return "";
  for (u = new Array(t - e), s = 0; d < t; d++, s++) {
    for (i = 0, f = a = this.bMarks[d], d + 1 < t || o ? l = this.eMarks[d] + 1 : l = this.eMarks[d]; a < l && i < r; ) {
      if (c = this.src.charCodeAt(a), hn(c))
        c === 9 ? i += 4 - (i + this.bsCount[d]) % 4 : i++;
      else if (a - f < this.tShift[d])
        i++;
      else
        break;
      a++;
    }
    i > r ? u[s] = new Array(i - r + 1).join(" ") + this.src.slice(a, l) : u[s] = this.src.slice(a, l);
  }
  return u.join("");
};
Re.prototype.Token = Co;
var BU = Re, $U = er, Zt = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", aU, ["paragraph", "reference"]],
  ["code", lU],
  ["fence", uU, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", fU, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", dU, ["paragraph", "reference", "blockquote", "list"]],
  ["list", gU, ["paragraph", "reference", "blockquote"]],
  ["reference", vU],
  ["html_block", RU, ["paragraph", "reference", "blockquote"]],
  ["heading", IU, ["paragraph", "reference", "blockquote"]],
  ["lheading", NU],
  ["paragraph", OU]
];
function fn() {
  this.ruler = new $U();
  for (var n = 0; n < Zt.length; n++)
    this.ruler.push(Zt[n][0], Zt[n][1], { alt: (Zt[n][2] || []).slice() });
}
fn.prototype.tokenize = function(n, e, t) {
  for (var r, o, s, i = this.ruler.getRules(""), c = i.length, a = e, l = !1, u = n.md.options.maxNesting; a < t && (n.line = a = n.skipEmptyLines(a), !(a >= t || n.sCount[a] < n.blkIndent)); ) {
    if (n.level >= u) {
      n.line = t;
      break;
    }
    for (s = n.line, o = 0; o < c; o++)
      if (r = i[o](n, a, t, !1), r) {
        if (s >= n.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!r)
      throw new Error("none of the block rules matched");
    n.tight = !l, n.isEmpty(n.line - 1) && (l = !0), a = n.line, a < t && n.isEmpty(a) && (l = !0, a++, n.line = a);
  }
};
fn.prototype.parse = function(n, e, t, r) {
  var o;
  n && (o = new this.State(n, e, t, r), this.tokenize(o, o.line, o.lineMax));
};
fn.prototype.State = BU;
var MU = fn;
function PU(n) {
  switch (n) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
var UU = function(e, t) {
  for (var r = e.pos; r < e.posMax && !PU(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}, jU = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i, HU = function(e, t) {
  var r, o, s, i, c, a, l, u;
  return !e.md.options.linkify || e.linkLevel > 0 || (r = e.pos, o = e.posMax, r + 3 > o) || e.src.charCodeAt(r) !== 58 || e.src.charCodeAt(r + 1) !== 47 || e.src.charCodeAt(r + 2) !== 47 || (s = e.pending.match(jU), !s) || (i = s[1], c = e.md.linkify.matchAtStart(e.src.slice(r - i.length)), !c) || (a = c.url, a.length <= i.length) || (a = a.replace(/\*+$/, ""), l = e.md.normalizeLink(a), !e.md.validateLink(l)) ? !1 : (t || (e.pending = e.pending.slice(0, -i.length), u = e.push("link_open", "a", 1), u.attrs = [["href", l]], u.markup = "linkify", u.info = "auto", u = e.push("text", "", 0), u.content = e.md.normalizeLinkText(a), u = e.push("link_close", "a", -1), u.markup = "linkify", u.info = "auto"), e.pos += a.length - i.length, !0);
}, VU = P.isSpace, GU = function(e, t) {
  var r, o, s, i = e.pos;
  if (e.src.charCodeAt(i) !== 10)
    return !1;
  if (r = e.pending.length - 1, o = e.posMax, !t)
    if (r >= 0 && e.pending.charCodeAt(r) === 32)
      if (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
        for (s = r - 1; s >= 1 && e.pending.charCodeAt(s - 1) === 32; )
          s--;
        e.pending = e.pending.slice(0, s), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (i++; i < o && VU(e.src.charCodeAt(i)); )
    i++;
  return e.pos = i, !0;
}, ZU = P.isSpace, rr = [];
for (var Zr = 0; Zr < 256; Zr++)
  rr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n) {
  rr[n.charCodeAt(0)] = 1;
});
var WU = function(e, t) {
  var r, o, s, i, c, a = e.pos, l = e.posMax;
  if (e.src.charCodeAt(a) !== 92 || (a++, a >= l))
    return !1;
  if (r = e.src.charCodeAt(a), r === 10) {
    for (t || e.push("hardbreak", "br", 0), a++; a < l && (r = e.src.charCodeAt(a), !!ZU(r)); )
      a++;
    return e.pos = a, !0;
  }
  return i = e.src[a], r >= 55296 && r <= 56319 && a + 1 < l && (o = e.src.charCodeAt(a + 1), o >= 56320 && o <= 57343 && (i += e.src[a + 1], a++)), s = "\\" + i, t || (c = e.push("text_special", "", 0), r < 256 && rr[r] !== 0 ? c.content = i : c.content = s, c.markup = s, c.info = "escape"), e.pos = a + 1, !0;
}, KU = function(e, t) {
  var r, o, s, i, c, a, l, u, f = e.pos, d = e.src.charCodeAt(f);
  if (d !== 96)
    return !1;
  for (r = f, f++, o = e.posMax; f < o && e.src.charCodeAt(f) === 96; )
    f++;
  if (s = e.src.slice(r, f), l = s.length, e.backticksScanned && (e.backticks[l] || 0) <= r)
    return t || (e.pending += s), e.pos += l, !0;
  for (a = f; (c = e.src.indexOf("`", a)) !== -1; ) {
    for (a = c + 1; a < o && e.src.charCodeAt(a) === 96; )
      a++;
    if (u = a - c, u === l)
      return t || (i = e.push("code_inline", "code", 0), i.markup = s, i.content = e.src.slice(f, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = a, !0;
    e.backticks[u] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += s), e.pos += l, !0;
}, pn = {};
pn.tokenize = function(e, t) {
  var r, o, s, i, c, a = e.pos, l = e.src.charCodeAt(a);
  if (t || l !== 126 || (o = e.scanDelims(e.pos, !0), i = o.length, c = String.fromCharCode(l), i < 2))
    return !1;
  for (i % 2 && (s = e.push("text", "", 0), s.content = c, i--), r = 0; r < i; r += 2)
    s = e.push("text", "", 0), s.content = c + c, e.delimiters.push({
      marker: l,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: o.can_open,
      close: o.can_close
    });
  return e.pos += o.length, !0;
};
function Wr(n, e) {
  var t, r, o, s, i, c = [], a = e.length;
  for (t = 0; t < a; t++)
    o = e[t], o.marker === 126 && o.end !== -1 && (s = e[o.end], i = n.tokens[o.token], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = n.tokens[s.token], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", n.tokens[s.token - 1].type === "text" && n.tokens[s.token - 1].content === "~" && c.push(s.token - 1));
  for (; c.length; ) {
    for (t = c.pop(), r = t + 1; r < n.tokens.length && n.tokens[r].type === "s_close"; )
      r++;
    r--, t !== r && (i = n.tokens[r], n.tokens[r] = n.tokens[t], n.tokens[t] = i);
  }
}
pn.postProcess = function(e) {
  var t, r = e.tokens_meta, o = e.tokens_meta.length;
  for (Wr(e, e.delimiters), t = 0; t < o; t++)
    r[t] && r[t].delimiters && Wr(e, r[t].delimiters);
};
var dn = {};
dn.tokenize = function(e, t) {
  var r, o, s, i = e.pos, c = e.src.charCodeAt(i);
  if (t || c !== 95 && c !== 42)
    return !1;
  for (o = e.scanDelims(e.pos, c === 42), r = 0; r < o.length; r++)
    s = e.push("text", "", 0), s.content = String.fromCharCode(c), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: c,
      // Total length of these series of delimiters.
      //
      length: o.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: o.can_open,
      close: o.can_close
    });
  return e.pos += o.length, !0;
};
function Kr(n, e) {
  var t, r, o, s, i, c, a = e.length;
  for (t = a - 1; t >= 0; t--)
    r = e[t], !(r.marker !== 95 && r.marker !== 42) && r.end !== -1 && (o = e[r.end], c = t > 0 && e[t - 1].end === r.end + 1 && // check that first two markers match and adjacent
    e[t - 1].marker === r.marker && e[t - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[r.end + 1].token === o.token + 1, i = String.fromCharCode(r.marker), s = n.tokens[r.token], s.type = c ? "strong_open" : "em_open", s.tag = c ? "strong" : "em", s.nesting = 1, s.markup = c ? i + i : i, s.content = "", s = n.tokens[o.token], s.type = c ? "strong_close" : "em_close", s.tag = c ? "strong" : "em", s.nesting = -1, s.markup = c ? i + i : i, s.content = "", c && (n.tokens[e[t - 1].token].content = "", n.tokens[e[r.end + 1].token].content = "", t--));
}
dn.postProcess = function(e) {
  var t, r = e.tokens_meta, o = e.tokens_meta.length;
  for (Kr(e, e.delimiters), t = 0; t < o; t++)
    r[t] && r[t].delimiters && Kr(e, r[t].delimiters);
};
var JU = P.normalizeReference, Dn = P.isSpace, YU = function(e, t) {
  var r, o, s, i, c, a, l, u, f, d = "", p = "", g = e.pos, m = e.posMax, x = e.pos, w = !0;
  if (e.src.charCodeAt(e.pos) !== 91 || (c = e.pos + 1, i = e.md.helpers.parseLinkLabel(e, e.pos, !0), i < 0))
    return !1;
  if (a = i + 1, a < m && e.src.charCodeAt(a) === 40) {
    for (w = !1, a++; a < m && (o = e.src.charCodeAt(a), !(!Dn(o) && o !== 10)); a++)
      ;
    if (a >= m)
      return !1;
    if (x = a, l = e.md.helpers.parseLinkDestination(e.src, a, e.posMax), l.ok) {
      for (d = e.md.normalizeLink(l.str), e.md.validateLink(d) ? a = l.pos : d = "", x = a; a < m && (o = e.src.charCodeAt(a), !(!Dn(o) && o !== 10)); a++)
        ;
      if (l = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < m && x !== a && l.ok)
        for (p = l.str, a = l.pos; a < m && (o = e.src.charCodeAt(a), !(!Dn(o) && o !== 10)); a++)
          ;
    }
    (a >= m || e.src.charCodeAt(a) !== 41) && (w = !0), a++;
  }
  if (w) {
    if (typeof e.env.references > "u")
      return !1;
    if (a < m && e.src.charCodeAt(a) === 91 ? (x = a + 1, a = e.md.helpers.parseLinkLabel(e, a), a >= 0 ? s = e.src.slice(x, a++) : a = i + 1) : a = i + 1, s || (s = e.src.slice(c, i)), u = e.env.references[JU(s)], !u)
      return e.pos = g, !1;
    d = u.href, p = u.title;
  }
  return t || (e.pos = c, e.posMax = i, f = e.push("link_open", "a", 1), f.attrs = r = [["href", d]], p && r.push(["title", p]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, f = e.push("link_close", "a", -1)), e.pos = a, e.posMax = m, !0;
}, QU = P.normalizeReference, qn = P.isSpace, XU = function(e, t) {
  var r, o, s, i, c, a, l, u, f, d, p, g, m, x = "", w = e.pos, _ = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (a = e.pos + 2, c = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1), c < 0))
    return !1;
  if (l = c + 1, l < _ && e.src.charCodeAt(l) === 40) {
    for (l++; l < _ && (o = e.src.charCodeAt(l), !(!qn(o) && o !== 10)); l++)
      ;
    if (l >= _)
      return !1;
    for (m = l, f = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), f.ok && (x = e.md.normalizeLink(f.str), e.md.validateLink(x) ? l = f.pos : x = ""), m = l; l < _ && (o = e.src.charCodeAt(l), !(!qn(o) && o !== 10)); l++)
      ;
    if (f = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < _ && m !== l && f.ok)
      for (d = f.str, l = f.pos; l < _ && (o = e.src.charCodeAt(l), !(!qn(o) && o !== 10)); l++)
        ;
    else
      d = "";
    if (l >= _ || e.src.charCodeAt(l) !== 41)
      return e.pos = w, !1;
    l++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (l < _ && e.src.charCodeAt(l) === 91 ? (m = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? i = e.src.slice(m, l++) : l = c + 1) : l = c + 1, i || (i = e.src.slice(a, c)), u = e.env.references[QU(i)], !u)
      return e.pos = w, !1;
    x = u.href, d = u.title;
  }
  return t || (s = e.src.slice(a, c), e.md.inline.parse(
    s,
    e.md,
    e.env,
    g = []
  ), p = e.push("image", "img", 0), p.attrs = r = [["src", x], ["alt", ""]], p.children = g, p.content = s, d && r.push(["title", d])), e.pos = l, e.posMax = _, !0;
}, ej = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, tj = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, nj = function(e, t) {
  var r, o, s, i, c, a, l = e.pos;
  if (e.src.charCodeAt(l) !== 60)
    return !1;
  for (c = e.pos, a = e.posMax; ; ) {
    if (++l >= a || (i = e.src.charCodeAt(l), i === 60))
      return !1;
    if (i === 62)
      break;
  }
  return r = e.src.slice(c + 1, l), tj.test(r) ? (o = e.md.normalizeLink(r), e.md.validateLink(o) ? (t || (s = e.push("link_open", "a", 1), s.attrs = [["href", o]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(r), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += r.length + 2, !0) : !1) : ej.test(r) ? (o = e.md.normalizeLink("mailto:" + r), e.md.validateLink(o) ? (t || (s = e.push("link_open", "a", 1), s.attrs = [["href", o]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(r), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += r.length + 2, !0) : !1) : !1;
}, rj = un.HTML_TAG_RE;
function oj(n) {
  return /^<a[>\s]/i.test(n);
}
function sj(n) {
  return /^<\/a\s*>/i.test(n);
}
function ij(n) {
  var e = n | 32;
  return e >= 97 && e <= 122;
}
var cj = function(e, t) {
  var r, o, s, i, c = e.pos;
  return !e.md.options.html || (s = e.posMax, e.src.charCodeAt(c) !== 60 || c + 2 >= s) || (r = e.src.charCodeAt(c + 1), r !== 33 && r !== 63 && r !== 47 && !ij(r)) || (o = e.src.slice(c).match(rj), !o) ? !1 : (t || (i = e.push("html_inline", "", 0), i.content = o[0], oj(i.content) && e.linkLevel++, sj(i.content) && e.linkLevel--), e.pos += o[0].length, !0);
}, Jr = mo, aj = P.has, lj = P.isValidEntityCode, Yr = P.fromCodePoint, uj = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, hj = /^&([a-z][a-z0-9]{1,31});/i, fj = function(e, t) {
  var r, o, s, i, c = e.pos, a = e.posMax;
  if (e.src.charCodeAt(c) !== 38 || c + 1 >= a)
    return !1;
  if (r = e.src.charCodeAt(c + 1), r === 35) {
    if (s = e.src.slice(c).match(uj), s)
      return t || (o = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), i = e.push("text_special", "", 0), i.content = lj(o) ? Yr(o) : Yr(65533), i.markup = s[0], i.info = "entity"), e.pos += s[0].length, !0;
  } else if (s = e.src.slice(c).match(hj), s && aj(Jr, s[1]))
    return t || (i = e.push("text_special", "", 0), i.content = Jr[s[1]], i.markup = s[0], i.info = "entity"), e.pos += s[0].length, !0;
  return !1;
};
function Qr(n) {
  var e, t, r, o, s, i, c, a, l = {}, u = n.length;
  if (u) {
    var f = 0, d = -2, p = [];
    for (e = 0; e < u; e++)
      if (r = n[e], p.push(0), (n[f].marker !== r.marker || d !== r.token - 1) && (f = e), d = r.token, r.length = r.length || 0, !!r.close) {
        for (l.hasOwnProperty(r.marker) || (l[r.marker] = [-1, -1, -1, -1, -1, -1]), s = l[r.marker][(r.open ? 3 : 0) + r.length % 3], t = f - p[f] - 1, i = t; t > s; t -= p[t] + 1)
          if (o = n[t], o.marker === r.marker && o.open && o.end < 0 && (c = !1, (o.close || r.open) && (o.length + r.length) % 3 === 0 && (o.length % 3 !== 0 || r.length % 3 !== 0) && (c = !0), !c)) {
            a = t > 0 && !n[t - 1].open ? p[t - 1] + 1 : 0, p[e] = e - t + a, p[t] = a, r.open = !1, o.end = e, o.close = !1, i = -1, d = -2;
            break;
          }
        i !== -1 && (l[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = i);
      }
  }
}
var pj = function(e) {
  var t, r = e.tokens_meta, o = e.tokens_meta.length;
  for (Qr(e.delimiters), t = 0; t < o; t++)
    r[t] && r[t].delimiters && Qr(r[t].delimiters);
}, dj = function(e) {
  var t, r, o = 0, s = e.tokens, i = e.tokens.length;
  for (t = r = 0; t < i; t++)
    s[t].nesting < 0 && o--, s[t].level = o, s[t].nesting > 0 && o++, s[t].type === "text" && t + 1 < i && s[t + 1].type === "text" ? s[t + 1].content = s[t].content + s[t + 1].content : (t !== r && (s[r] = s[t]), r++);
  t !== r && (s.length = r);
}, or = tr, Xr = P.isWhiteSpace, eo = P.isPunctChar, to = P.isMdAsciiPunct;
function It(n, e, t, r) {
  this.src = n, this.env = t, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
It.prototype.pushPending = function() {
  var n = new or("text", "", 0);
  return n.content = this.pending, n.level = this.pendingLevel, this.tokens.push(n), this.pending = "", n;
};
It.prototype.push = function(n, e, t) {
  this.pending && this.pushPending();
  var r = new or(n, e, t), o = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], o = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(o), r;
};
It.prototype.scanDelims = function(n, e) {
  var t = n, r, o, s, i, c, a, l, u, f, d = !0, p = !0, g = this.posMax, m = this.src.charCodeAt(n);
  for (r = n > 0 ? this.src.charCodeAt(n - 1) : 32; t < g && this.src.charCodeAt(t) === m; )
    t++;
  return s = t - n, o = t < g ? this.src.charCodeAt(t) : 32, l = to(r) || eo(String.fromCharCode(r)), f = to(o) || eo(String.fromCharCode(o)), a = Xr(r), u = Xr(o), u ? d = !1 : f && (a || l || (d = !1)), a ? p = !1 : l && (u || f || (p = !1)), e ? (i = d, c = p) : (i = d && (!p || l), c = p && (!d || f)), {
    can_open: i,
    can_close: c,
    length: s
  };
};
It.prototype.Token = or;
var mj = It, no = er, Tn = [
  ["text", UU],
  ["linkify", HU],
  ["newline", GU],
  ["escape", WU],
  ["backticks", KU],
  ["strikethrough", pn.tokenize],
  ["emphasis", dn.tokenize],
  ["link", YU],
  ["image", XU],
  ["autolink", nj],
  ["html_inline", cj],
  ["entity", fj]
], Fn = [
  ["balance_pairs", pj],
  ["strikethrough", pn.postProcess],
  ["emphasis", dn.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", dj]
];
function Nt() {
  var n;
  for (this.ruler = new no(), n = 0; n < Tn.length; n++)
    this.ruler.push(Tn[n][0], Tn[n][1]);
  for (this.ruler2 = new no(), n = 0; n < Fn.length; n++)
    this.ruler2.push(Fn[n][0], Fn[n][1]);
}
Nt.prototype.skipToken = function(n) {
  var e, t, r = n.pos, o = this.ruler.getRules(""), s = o.length, i = n.md.options.maxNesting, c = n.cache;
  if (typeof c[r] < "u") {
    n.pos = c[r];
    return;
  }
  if (n.level < i) {
    for (t = 0; t < s; t++)
      if (n.level++, e = o[t](n, !0), n.level--, e) {
        if (r >= n.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    n.pos = n.posMax;
  e || n.pos++, c[r] = n.pos;
};
Nt.prototype.tokenize = function(n) {
  for (var e, t, r, o = this.ruler.getRules(""), s = o.length, i = n.posMax, c = n.md.options.maxNesting; n.pos < i; ) {
    if (r = n.pos, n.level < c) {
      for (t = 0; t < s; t++)
        if (e = o[t](n, !1), e) {
          if (r >= n.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (e) {
      if (n.pos >= i)
        break;
      continue;
    }
    n.pending += n.src[n.pos++];
  }
  n.pending && n.pushPending();
};
Nt.prototype.parse = function(n, e, t, r) {
  var o, s, i, c = new this.State(n, e, t, r);
  for (this.tokenize(c), s = this.ruler2.getRules(""), i = s.length, o = 0; o < i; o++)
    s[o](c);
};
Nt.prototype.State = mj;
var gj = Nt, Ln, ro;
function bj() {
  return ro || (ro = 1, Ln = function(n) {
    var e = {};
    n = n || {}, e.src_Any = go().source, e.src_Cc = bo().source, e.src_Z = vo().source, e.src_P = Xn.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var t = "[><｜]";
    return e.src_pseudo_letter = "(?:(?!" + t + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + t + "|" + e.src_ZPCc + ")(?!" + (n["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (n["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), Ln;
}
function $n(n) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.forEach(function(t) {
    t && Object.keys(t).forEach(function(r) {
      n[r] = t[r];
    });
  }), n;
}
function mn(n) {
  return Object.prototype.toString.call(n);
}
function vj(n) {
  return mn(n) === "[object String]";
}
function kj(n) {
  return mn(n) === "[object Object]";
}
function yj(n) {
  return mn(n) === "[object RegExp]";
}
function oo(n) {
  return mn(n) === "[object Function]";
}
function _j(n) {
  return n.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var Ao = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function xj(n) {
  return Object.keys(n || {}).reduce(function(e, t) {
    return e || Ao.hasOwnProperty(t);
  }, !1);
}
var wj = {
  "http:": {
    validate: function(n, e, t) {
      var r = n.slice(e);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(r) ? r.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(n, e, t) {
      var r = n.slice(e);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(r) ? e >= 3 && n[e - 3] === ":" || e >= 3 && n[e - 3] === "/" ? 0 : r.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(n, e, t) {
      var r = n.slice(e);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(r) ? r.match(t.re.mailto)[0].length : 0;
    }
  }
}, Cj = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Aj = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Ej(n) {
  n.__index__ = -1, n.__text_cache__ = "";
}
function Sj(n) {
  return function(e, t) {
    var r = e.slice(t);
    return n.test(r) ? r.match(n)[0].length : 0;
  };
}
function so() {
  return function(n, e) {
    e.normalize(n);
  };
}
function on(n) {
  var e = n.re = bj()(n.__opts__), t = n.__tlds__.slice();
  n.onCompile(), n.__tlds_replaced__ || t.push(Cj), t.push(e.src_xn), e.src_tlds = t.join("|");
  function r(c) {
    return c.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
  var o = [];
  n.__compiled__ = {};
  function s(c, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + c + '": ' + a);
  }
  Object.keys(n.__schemas__).forEach(function(c) {
    var a = n.__schemas__[c];
    if (a !== null) {
      var l = { validate: null, link: null };
      if (n.__compiled__[c] = l, kj(a)) {
        yj(a.validate) ? l.validate = Sj(a.validate) : oo(a.validate) ? l.validate = a.validate : s(c, a), oo(a.normalize) ? l.normalize = a.normalize : a.normalize ? s(c, a) : l.normalize = so();
        return;
      }
      if (vj(a)) {
        o.push(c);
        return;
      }
      s(c, a);
    }
  }), o.forEach(function(c) {
    n.__compiled__[n.__schemas__[c]] && (n.__compiled__[c].validate = n.__compiled__[n.__schemas__[c]].validate, n.__compiled__[c].normalize = n.__compiled__[n.__schemas__[c]].normalize);
  }), n.__compiled__[""] = { validate: null, normalize: so() };
  var i = Object.keys(n.__compiled__).filter(function(c) {
    return c.length > 0 && n.__compiled__[c];
  }).map(_j).join("|");
  n.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + i + ")", "i"), n.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + i + ")", "ig"), n.re.schema_at_start = RegExp("^" + n.re.schema_search.source, "i"), n.re.pretest = RegExp(
    "(" + n.re.schema_test.source + ")|(" + n.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Ej(n);
}
function Dj(n, e) {
  var t = n.__index__, r = n.__last_index__, o = n.__text_cache__.slice(t, r);
  this.schema = n.__schema__.toLowerCase(), this.index = t + e, this.lastIndex = r + e, this.raw = o, this.text = o, this.url = o;
}
function Mn(n, e) {
  var t = new Dj(n, e);
  return n.__compiled__[t.schema].normalize(t, n), t;
}
function le(n, e) {
  if (!(this instanceof le))
    return new le(n, e);
  e || xj(n) && (e = n, n = {}), this.__opts__ = $n({}, Ao, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = $n({}, wj, n), this.__compiled__ = {}, this.__tlds__ = Aj, this.__tlds_replaced__ = !1, this.re = {}, on(this);
}
le.prototype.add = function(e, t) {
  return this.__schemas__[e] = t, on(this), this;
};
le.prototype.set = function(e) {
  return this.__opts__ = $n(this.__opts__, e), this;
};
le.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  var t, r, o, s, i, c, a, l, u;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (t = a.exec(e)) !== null; )
      if (s = this.testSchemaAt(e, t[2], a.lastIndex), s) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test), l >= 0 && (this.__index__ < 0 || l < this.__index__) && (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = e.indexOf("@"), u >= 0 && (o = e.match(this.re.email_fuzzy)) !== null && (i = o.index + o[1].length, c = o.index + o[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && c > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = c))), this.__index__ >= 0;
};
le.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
le.prototype.testSchemaAt = function(e, t, r) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0;
};
le.prototype.match = function(e) {
  var t = 0, r = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(Mn(this, t)), t = this.__last_index__);
  for (var o = t ? e.slice(t) : e; this.test(o); )
    r.push(Mn(this, t)), o = o.slice(this.__last_index__), t += this.__last_index__;
  return r.length ? r : null;
};
le.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return null;
  var t = this.re.schema_at_start.exec(e);
  if (!t)
    return null;
  var r = this.testSchemaAt(e, t[2], t[0].length);
  return r ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r, Mn(this, 0)) : null;
};
le.prototype.tlds = function(e, t) {
  return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, o, s) {
    return r !== s[o - 1];
  }).reverse(), on(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, on(this), this);
};
le.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
le.prototype.onCompile = function() {
};
var qj = le;
const dt = 2147483647, qe = 36, sr = 1, qt = 26, Tj = 38, Fj = 700, Eo = 72, So = 128, Do = "-", Lj = /^xn--/, zj = /[^\0-\x7F]/, Rj = /[\x2E\u3002\uFF0E\uFF61]/g, Ij = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, zn = qe - sr, Te = Math.floor, Rn = String.fromCharCode;
function We(n) {
  throw new RangeError(Ij[n]);
}
function Nj(n, e) {
  const t = [];
  let r = n.length;
  for (; r--; )
    t[r] = e(n[r]);
  return t;
}
function qo(n, e) {
  const t = n.split("@");
  let r = "";
  t.length > 1 && (r = t[0] + "@", n = t[1]), n = n.replace(Rj, ".");
  const o = n.split("."), s = Nj(o, e).join(".");
  return r + s;
}
function ir(n) {
  const e = [];
  let t = 0;
  const r = n.length;
  for (; t < r; ) {
    const o = n.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      const s = n.charCodeAt(t++);
      (s & 64512) == 56320 ? e.push(((o & 1023) << 10) + (s & 1023) + 65536) : (e.push(o), t--);
    } else
      e.push(o);
  }
  return e;
}
const To = (n) => String.fromCodePoint(...n), Oj = function(n) {
  return n >= 48 && n < 58 ? 26 + (n - 48) : n >= 65 && n < 91 ? n - 65 : n >= 97 && n < 123 ? n - 97 : qe;
}, io = function(n, e) {
  return n + 22 + 75 * (n < 26) - ((e != 0) << 5);
}, Fo = function(n, e, t) {
  let r = 0;
  for (n = t ? Te(n / Fj) : n >> 1, n += Te(n / e); n > zn * qt >> 1; r += qe)
    n = Te(n / zn);
  return Te(r + (zn + 1) * n / (n + Tj));
}, cr = function(n) {
  const e = [], t = n.length;
  let r = 0, o = So, s = Eo, i = n.lastIndexOf(Do);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    n.charCodeAt(c) >= 128 && We("not-basic"), e.push(n.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < t; ) {
    const a = r;
    for (let u = 1, f = qe; ; f += qe) {
      c >= t && We("invalid-input");
      const d = Oj(n.charCodeAt(c++));
      d >= qe && We("invalid-input"), d > Te((dt - r) / u) && We("overflow"), r += d * u;
      const p = f <= s ? sr : f >= s + qt ? qt : f - s;
      if (d < p)
        break;
      const g = qe - p;
      u > Te(dt / g) && We("overflow"), u *= g;
    }
    const l = e.length + 1;
    s = Fo(r - a, l, a == 0), Te(r / l) > dt - o && We("overflow"), o += Te(r / l), r %= l, e.splice(r++, 0, o);
  }
  return String.fromCodePoint(...e);
}, ar = function(n) {
  const e = [];
  n = ir(n);
  const t = n.length;
  let r = So, o = 0, s = Eo;
  for (const a of n)
    a < 128 && e.push(Rn(a));
  const i = e.length;
  let c = i;
  for (i && e.push(Do); c < t; ) {
    let a = dt;
    for (const u of n)
      u >= r && u < a && (a = u);
    const l = c + 1;
    a - r > Te((dt - o) / l) && We("overflow"), o += (a - r) * l, r = a;
    for (const u of n)
      if (u < r && ++o > dt && We("overflow"), u === r) {
        let f = o;
        for (let d = qe; ; d += qe) {
          const p = d <= s ? sr : d >= s + qt ? qt : d - s;
          if (f < p)
            break;
          const g = f - p, m = qe - p;
          e.push(
            Rn(io(p + g % m, 0))
          ), f = Te(g / m);
        }
        e.push(Rn(io(f, 0))), s = Fo(o, l, c === i), o = 0, ++c;
      }
    ++o, ++r;
  }
  return e.join("");
}, Lo = function(n) {
  return qo(n, function(e) {
    return Lj.test(e) ? cr(e.slice(4).toLowerCase()) : e;
  });
}, zo = function(n) {
  return qo(n, function(e) {
    return zj.test(e) ? "xn--" + ar(e) : e;
  });
}, Bj = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: ir,
    encode: To
  },
  decode: cr,
  encode: ar,
  toASCII: zo,
  toUnicode: Lo
}, $j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: cr,
  default: Bj,
  encode: ar,
  toASCII: zo,
  toUnicode: Lo,
  ucs2decode: ir,
  ucs2encode: To
}, Symbol.toStringTag, { value: "Module" })), Mj = /* @__PURE__ */ Ps($j);
var Pj = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 100
    // Internal protection, recursion limit
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Uj = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, jj = {
  options: {
    html: !0,
    // Enable HTML tags in source
    xhtmlOut: !0,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, St = P, Hj = ln, Vj = OP, Gj = cU, Zj = MU, Wj = gj, Kj = qj, it = yt, Ro = Mj, Jj = {
  default: Pj,
  zero: Uj,
  commonmark: jj
}, Yj = /^(vbscript|javascript|file|data):/, Qj = /^data:image\/(gif|png|jpeg|webp);/;
function Xj(n) {
  var e = n.trim().toLowerCase();
  return Yj.test(e) ? !!Qj.test(e) : !0;
}
var Io = ["http:", "https:", "mailto:"];
function eH(n) {
  var e = it.parse(n, !0);
  if (e.hostname && (!e.protocol || Io.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Ro.toASCII(e.hostname);
    } catch {
    }
  return it.encode(it.format(e));
}
function tH(n) {
  var e = it.parse(n, !0);
  if (e.hostname && (!e.protocol || Io.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Ro.toUnicode(e.hostname);
    } catch {
    }
  return it.decode(it.format(e), it.decode.defaultChars + "%");
}
function pe(n, e) {
  if (!(this instanceof pe))
    return new pe(n, e);
  e || St.isString(n) || (e = n || {}, n = "default"), this.inline = new Wj(), this.block = new Zj(), this.core = new Gj(), this.renderer = new Vj(), this.linkify = new Kj(), this.validateLink = Xj, this.normalizeLink = eH, this.normalizeLinkText = tH, this.utils = St, this.helpers = St.assign({}, Hj), this.options = {}, this.configure(n), e && this.set(e);
}
pe.prototype.set = function(n) {
  return St.assign(this.options, n), this;
};
pe.prototype.configure = function(n) {
  var e = this, t;
  if (St.isString(n) && (t = n, n = Jj[t], !n))
    throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  if (!n)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return n.options && e.set(n.options), n.components && Object.keys(n.components).forEach(function(r) {
    n.components[r].rules && e[r].ruler.enableOnly(n.components[r].rules), n.components[r].rules2 && e[r].ruler2.enableOnly(n.components[r].rules2);
  }), this;
};
pe.prototype.enable = function(n, e) {
  var t = [];
  Array.isArray(n) || (n = [n]), ["core", "block", "inline"].forEach(function(o) {
    t = t.concat(this[o].ruler.enable(n, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(n, !0));
  var r = n.filter(function(o) {
    return t.indexOf(o) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
pe.prototype.disable = function(n, e) {
  var t = [];
  Array.isArray(n) || (n = [n]), ["core", "block", "inline"].forEach(function(o) {
    t = t.concat(this[o].ruler.disable(n, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(n, !0));
  var r = n.filter(function(o) {
    return t.indexOf(o) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
pe.prototype.use = function(n) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return n.apply(n, e), this;
};
pe.prototype.parse = function(n, e) {
  if (typeof n != "string")
    throw new Error("Input data should be a String");
  var t = new this.core.State(n, this, e);
  return this.core.process(t), t.tokens;
};
pe.prototype.render = function(n, e) {
  return e = e || {}, this.renderer.render(this.parse(n, e), this.options, e);
};
pe.prototype.parseInline = function(n, e) {
  var t = new this.core.State(n, this, e);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
pe.prototype.renderInline = function(n, e) {
  return e = e || {}, this.renderer.render(this.parseInline(n, e), this.options, e);
};
var nH = pe, rH = nH;
const oH = /* @__PURE__ */ Qn(rH), co = /* @__PURE__ */ new Set([!0, !1, "alt", "title"]);
function No(n, e) {
  return (Array.isArray(n) ? n : []).filter(([t]) => t !== e);
}
function Oo(n, e) {
  n && n.attrs && (n.attrs = No(n.attrs, e));
}
function sH(n, e) {
  if (!co.has(n))
    throw new TypeError(`figcaption must be one of: ${[...co]}.`);
  if (n === "alt")
    return e.content;
  const t = e.attrs.find(([r]) => r === "title");
  return Array.isArray(t) && t[1] ? (Oo(e, "title"), t[1]) : void 0;
}
function iH(n, e) {
  e = e || {}, n.core.ruler.before("linkify", "image_figures", function(t) {
    let r = 1;
    for (let o = 1, s = t.tokens.length; o < s - 1; ++o) {
      const i = t.tokens[o];
      if (i.type !== "inline" || !i.children || i.children.length !== 1 && i.children.length !== 3 || i.children.length === 1 && i.children[0].type !== "image")
        continue;
      if (i.children.length === 3) {
        const [l, u, f] = i.children;
        if (l.type !== "link_open" || u.type !== "image" || f.type !== "link_close")
          continue;
      }
      if (o !== 0 && t.tokens[o - 1].type !== "paragraph_open" || o !== s - 1 && t.tokens[o + 1].type !== "paragraph_close")
        continue;
      const c = t.tokens[o - 1];
      let a;
      if (c.type = "figure_open", c.tag = "figure", t.tokens[o + 1].type = "figure_close", t.tokens[o + 1].tag = "figure", e.dataType && t.tokens[o - 1].attrPush(["data-type", "image"]), e.link && i.children.length === 1) {
        [a] = i.children;
        const l = new t.Token("link_open", "a", 1);
        l.attrPush(["href", a.attrGet("src")]), i.children.unshift(l), i.children.push(new t.Token("link_close", "a", -1));
      }
      if (a = i.children.length === 1 ? i.children[0] : i.children[1], e.figcaption) {
        const l = sH(e.figcaption, a);
        if (l) {
          const [u] = n.parseInline(l, t.env);
          i.children.push(new t.Token("figcaption_open", "figcaption", 1)), i.children.push(...u.children), i.children.push(new t.Token("figcaption_close", "figcaption", -1)), a.attrs && (a.attrs = No(a.attrs, "title"));
        }
      }
      if (e.copyAttrs && a.attrs) {
        const l = e.copyAttrs === !0 ? "" : e.copyAttrs;
        c.attrs = a.attrs.filter(([u]) => u.match(l)).map((u) => Array.from(u));
      }
      if (e.tabindex && (t.tokens[o - 1].attrPush(["tabindex", r]), r++), e.lazy && (a.attrs.some(([l]) => l === "loading") || a.attrs.push(["loading", "lazy"])), e.async && (a.attrs.some(([l]) => l === "decoding") || a.attrs.push(["decoding", "async"])), e.classes && typeof e.classes == "string") {
        let l = !1;
        for (let u = 0, f = a.attrs.length; u < f && !l; u++) {
          const d = a.attrs[u];
          d[0] === "class" && (d[1] = `${d[1]} ${e.classes}`, l = !0);
        }
        l || a.attrs.push(["class", e.classes]);
      }
      if (e.removeSrc) {
        const l = a.attrs.find(([u]) => u === "src");
        a.attrs.push(["data-src", l[1]]), Oo(a, "src");
      }
    }
  });
}
var Pn = !0, Bo = !1, $o = !1, cH = function(n, e) {
  e && (Pn = !e.enabled, Bo = !!e.label, $o = !!e.labelAfter), n.core.ruler.after("inline", "github-task-lists", function(t) {
    for (var r = t.tokens, o = 2; o < r.length; o++)
      lH(r, o) && (uH(r[o], t.Token), ao(r[o - 2], "class", "task-list-item" + (Pn ? "" : " enabled")), ao(r[aH(r, o - 2)], "class", "contains-task-list"));
  });
};
function ao(n, e, t) {
  var r = n.attrIndex(e), o = [e, t];
  r < 0 ? n.attrPush(o) : n.attrs[r] = o;
}
function aH(n, e) {
  for (var t = n[e].level - 1, r = e - 1; r >= 0; r--)
    if (n[r].level === t)
      return r;
  return -1;
}
function lH(n, e) {
  return mH(n[e]) && gH(n[e - 1]) && bH(n[e - 2]) && vH(n[e]);
}
function uH(n, e) {
  if (n.children.unshift(hH(n, e)), n.children[1].content = n.children[1].content.slice(3), n.content = n.content.slice(3), Bo)
    if ($o) {
      n.children.pop();
      var t = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
      n.children[0].content = n.children[0].content.slice(0, -1) + ' id="' + t + '">', n.children.push(dH(n.content, t, e));
    } else
      n.children.unshift(fH(e)), n.children.push(pH(e));
}
function hH(n, e) {
  var t = new e("html_inline", "", 0), r = Pn ? ' disabled="" ' : "";
  return n.content.indexOf("[ ] ") === 0 ? t.content = '<input class="task-list-item-checkbox"' + r + 'type="checkbox">' : (n.content.indexOf("[x] ") === 0 || n.content.indexOf("[X] ") === 0) && (t.content = '<input class="task-list-item-checkbox" checked=""' + r + 'type="checkbox">'), t;
}
function fH(n) {
  var e = new n("html_inline", "", 0);
  return e.content = "<label>", e;
}
function pH(n) {
  var e = new n("html_inline", "", 0);
  return e.content = "</label>", e;
}
function dH(n, e, t) {
  var r = new t("html_inline", "", 0);
  return r.content = '<label class="task-list-item-label" for="' + e + '">' + n + "</label>", r.attrs = [{ for: e }], r;
}
function mH(n) {
  return n.type === "inline";
}
function gH(n) {
  return n.type === "paragraph_open";
}
function bH(n) {
  return n.type === "list_item_open";
}
function vH(n) {
  return n.content.indexOf("[ ] ") === 0 || n.content.indexOf("[x] ") === 0 || n.content.indexOf("[X] ") === 0;
}
const kH = /* @__PURE__ */ Qn(cH), Ct = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, Mo = /* @__PURE__ */ new Set(), yH = (n, e, t, r) => {
  typeof process == "object" && process && typeof process.emitWarning == "function" ? process.emitWarning(n, e, t, r) : console.error(`[${t}] ${e}: ${n}`);
}, _H = (n) => !Mo.has(n), je = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n), Po = (n) => je(n) ? n <= Math.pow(2, 8) ? Uint8Array : n <= Math.pow(2, 16) ? Uint16Array : n <= Math.pow(2, 32) ? Uint32Array : n <= Number.MAX_SAFE_INTEGER ? Jt : null : null;
class Jt extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
}
var mt;
const st = class st {
  constructor(e, t) {
    Q(this, "heap");
    Q(this, "length");
    if (!h(st, mt))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new t(e), this.length = 0;
  }
  static create(e) {
    const t = Po(e);
    if (!t)
      return [];
    I(st, mt, !0);
    const r = new st(e, t);
    return I(st, mt, !1), r;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
};
mt = new WeakMap(), // private constructor
B(st, mt, !1);
let Un = st;
var de, ie, Ce, me, gt, K, ge, J, H, O, oe, ce, ne, X, be, ee, Oe, Be, ve, Ae, Je, se, Tt, Hn, ct, $e, Ft, ae, sn, Uo, at, bt, Lt, Ee, He, Se, Ve, zt, Vn, vt, Yt, kt, Qt, j, V, Rt, Gn, lt, Et;
const lr = class lr {
  constructor(e) {
    B(this, Tt);
    B(this, sn);
    B(this, Ee);
    B(this, Se);
    B(this, zt);
    B(this, vt);
    B(this, kt);
    B(this, j);
    B(this, Rt);
    B(this, lt);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    B(this, de, void 0);
    B(this, ie, void 0);
    B(this, Ce, void 0);
    B(this, me, void 0);
    B(this, gt, void 0);
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    Q(this, "ttl");
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    Q(this, "ttlResolution");
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    Q(this, "ttlAutopurge");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    Q(this, "updateAgeOnGet");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    Q(this, "updateAgeOnHas");
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    Q(this, "allowStale");
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    Q(this, "noDisposeOnSet");
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    Q(this, "noUpdateTTL");
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    Q(this, "maxEntrySize");
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    Q(this, "sizeCalculation");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    Q(this, "noDeleteOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    Q(this, "noDeleteOnStaleGet");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    Q(this, "allowStaleOnFetchAbort");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    Q(this, "allowStaleOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    Q(this, "ignoreFetchAbort");
    // computed properties
    B(this, K, void 0);
    B(this, ge, void 0);
    B(this, J, void 0);
    B(this, H, void 0);
    B(this, O, void 0);
    B(this, oe, void 0);
    B(this, ce, void 0);
    B(this, ne, void 0);
    B(this, X, void 0);
    B(this, be, void 0);
    B(this, ee, void 0);
    B(this, Oe, void 0);
    B(this, Be, void 0);
    B(this, ve, void 0);
    B(this, Ae, void 0);
    B(this, Je, void 0);
    B(this, se, void 0);
    // conditionally set private methods related to TTL
    B(this, ct, () => {
    });
    B(this, $e, () => {
    });
    B(this, Ft, () => {
    });
    /* c8 ignore stop */
    B(this, ae, () => !1);
    B(this, at, (e) => {
    });
    B(this, bt, (e, t, r) => {
    });
    B(this, Lt, (e, t, r, o) => {
      if (r || o)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    });
    const { max: t = 0, ttl: r, ttlResolution: o = 1, ttlAutopurge: s, updateAgeOnGet: i, updateAgeOnHas: c, allowStale: a, dispose: l, disposeAfter: u, noDisposeOnSet: f, noUpdateTTL: d, maxSize: p = 0, maxEntrySize: g = 0, sizeCalculation: m, fetchMethod: x, noDeleteOnFetchRejection: w, noDeleteOnStaleGet: _, allowStaleOnFetchRejection: C, allowStaleOnFetchAbort: q, ignoreFetchAbort: E } = e;
    if (t !== 0 && !je(t))
      throw new TypeError("max option must be a nonnegative integer");
    const y = t ? Po(t) : Array;
    if (!y)
      throw new Error("invalid max value: " + t);
    if (I(this, de, t), I(this, ie, p), this.maxEntrySize = g || h(this, ie), this.sizeCalculation = m, this.sizeCalculation) {
      if (!h(this, ie) && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (x !== void 0 && typeof x != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (I(this, gt, x), I(this, Je, !!x), I(this, J, /* @__PURE__ */ new Map()), I(this, H, new Array(t).fill(void 0)), I(this, O, new Array(t).fill(void 0)), I(this, oe, new y(t)), I(this, ce, new y(t)), I(this, ne, 0), I(this, X, 0), I(this, be, Un.create(t)), I(this, K, 0), I(this, ge, 0), typeof l == "function" && I(this, Ce, l), typeof u == "function" ? (I(this, me, u), I(this, ee, [])) : (I(this, me, void 0), I(this, ee, void 0)), I(this, Ae, !!h(this, Ce)), I(this, se, !!h(this, me)), this.noDisposeOnSet = !!f, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!w, this.allowStaleOnFetchRejection = !!C, this.allowStaleOnFetchAbort = !!q, this.ignoreFetchAbort = !!E, this.maxEntrySize !== 0) {
      if (h(this, ie) !== 0 && !je(h(this, ie)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!je(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      R(this, sn, Uo).call(this);
    }
    if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!_, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!c, this.ttlResolution = je(o) || o === 0 ? o : 1, this.ttlAutopurge = !!s, this.ttl = r || 0, this.ttl) {
      if (!je(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      R(this, Tt, Hn).call(this);
    }
    if (h(this, de) === 0 && this.ttl === 0 && h(this, ie) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !h(this, de) && !h(this, ie)) {
      const v = "LRU_CACHE_UNBOUNDED";
      _H(v) && (Mo.add(v), yH("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", v, lr));
    }
  }
  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals(e) {
    return {
      // properties
      starts: h(e, Be),
      ttls: h(e, ve),
      sizes: h(e, Oe),
      keyMap: h(e, J),
      keyList: h(e, H),
      valList: h(e, O),
      next: h(e, oe),
      prev: h(e, ce),
      get head() {
        return h(e, ne);
      },
      get tail() {
        return h(e, X);
      },
      free: h(e, be),
      // methods
      isBackgroundFetch: (t) => {
        var r;
        return R(r = e, j, V).call(r, t);
      },
      backgroundFetch: (t, r, o, s) => {
        var i;
        return R(i = e, kt, Qt).call(i, t, r, o, s);
      },
      moveToTail: (t) => {
        var r;
        return R(r = e, lt, Et).call(r, t);
      },
      indexes: (t) => {
        var r;
        return R(r = e, Ee, He).call(r, t);
      },
      rindexes: (t) => {
        var r;
        return R(r = e, Se, Ve).call(r, t);
      },
      isStale: (t) => {
        var r;
        return h(r = e, ae).call(r, t);
      }
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return h(this, de);
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return h(this, ie);
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return h(this, ge);
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return h(this, K);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return h(this, gt);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return h(this, Ce);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return h(this, me);
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(e) {
    return h(this, J).has(e) ? 1 / 0 : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const e of R(this, Ee, He).call(this))
      h(this, O)[e] !== void 0 && h(this, H)[e] !== void 0 && !R(this, j, V).call(this, h(this, O)[e]) && (yield [h(this, H)[e], h(this, O)[e]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const e of R(this, Se, Ve).call(this))
      h(this, O)[e] !== void 0 && h(this, H)[e] !== void 0 && !R(this, j, V).call(this, h(this, O)[e]) && (yield [h(this, H)[e], h(this, O)[e]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const e of R(this, Ee, He).call(this)) {
      const t = h(this, H)[e];
      t !== void 0 && !R(this, j, V).call(this, h(this, O)[e]) && (yield t);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const e of R(this, Se, Ve).call(this)) {
      const t = h(this, H)[e];
      t !== void 0 && !R(this, j, V).call(this, h(this, O)[e]) && (yield t);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const e of R(this, Ee, He).call(this))
      h(this, O)[e] !== void 0 && !R(this, j, V).call(this, h(this, O)[e]) && (yield h(this, O)[e]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const e of R(this, Se, Ve).call(this))
      h(this, O)[e] !== void 0 && !R(this, j, V).call(this, h(this, O)[e]) && (yield h(this, O)[e]);
  }
  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to Array.find().  fn is called as fn(value, key, cache).
   */
  find(e, t = {}) {
    for (const r of R(this, Ee, He).call(this)) {
      const o = h(this, O)[r], s = R(this, j, V).call(this, o) ? o.__staleWhileFetching : o;
      if (s !== void 0 && e(s, h(this, H)[r], this))
        return this.get(h(this, H)[r], t);
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(e, t = this) {
    for (const r of R(this, Ee, He).call(this)) {
      const o = h(this, O)[r], s = R(this, j, V).call(this, o) ? o.__staleWhileFetching : o;
      s !== void 0 && e.call(t, s, h(this, H)[r], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(e, t = this) {
    for (const r of R(this, Se, Ve).call(this)) {
      const o = h(this, O)[r], s = R(this, j, V).call(this, o) ? o.__staleWhileFetching : o;
      s !== void 0 && e.call(t, s, h(this, H)[r], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let e = !1;
    for (const t of R(this, Se, Ve).call(this, { allowStale: !0 }))
      h(this, ae).call(this, t) && (this.delete(h(this, H)[t]), e = !0);
    return e;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const e = [];
    for (const t of R(this, Ee, He).call(this, { allowStale: !0 })) {
      const r = h(this, H)[t], o = h(this, O)[t], s = R(this, j, V).call(this, o) ? o.__staleWhileFetching : o;
      if (s === void 0 || r === void 0)
        continue;
      const i = { value: s };
      if (h(this, ve) && h(this, Be)) {
        i.ttl = h(this, ve)[t];
        const c = Ct.now() - h(this, Be)[t];
        i.start = Math.floor(Date.now() - c);
      }
      h(this, Oe) && (i.size = h(this, Oe)[t]), e.unshift([r, i]);
    }
    return e;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */
  load(e) {
    this.clear();
    for (const [t, r] of e) {
      if (r.start) {
        const o = Date.now() - r.start;
        r.start = Ct.now() - o;
      }
      this.set(t, r.value, r);
    }
  }
  /**
   * Add a value to the cache.
   */
  set(e, t, r = {}) {
    var d, p, g;
    const { ttl: o = this.ttl, start: s, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: c = this.sizeCalculation, status: a } = r;
    let { noUpdateTTL: l = this.noUpdateTTL } = r;
    const u = h(this, Lt).call(this, e, t, r.size || 0, c);
    if (this.maxEntrySize && u > this.maxEntrySize)
      return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.delete(e), this;
    let f = h(this, K) === 0 ? void 0 : h(this, J).get(e);
    if (f === void 0)
      f = h(this, K) === 0 ? h(this, X) : h(this, be).length !== 0 ? h(this, be).pop() : h(this, K) === h(this, de) ? R(this, vt, Yt).call(this, !1) : h(this, K), h(this, H)[f] = e, h(this, O)[f] = t, h(this, J).set(e, f), h(this, oe)[h(this, X)] = f, h(this, ce)[f] = h(this, X), I(this, X, f), $t(this, K)._++, h(this, bt).call(this, f, u, a), a && (a.set = "add"), l = !1;
    else {
      R(this, lt, Et).call(this, f);
      const m = h(this, O)[f];
      if (t !== m) {
        if (h(this, Je) && R(this, j, V).call(this, m) ? m.__abortController.abort(new Error("replaced")) : i || (h(this, Ae) && ((d = h(this, Ce)) == null || d.call(this, m, e, "set")), h(this, se) && ((p = h(this, ee)) == null || p.push([m, e, "set"]))), h(this, at).call(this, f), h(this, bt).call(this, f, u, a), h(this, O)[f] = t, a) {
          a.set = "replace";
          const x = m && R(this, j, V).call(this, m) ? m.__staleWhileFetching : m;
          x !== void 0 && (a.oldValue = x);
        }
      } else
        a && (a.set = "update");
    }
    if (o !== 0 && !h(this, ve) && R(this, Tt, Hn).call(this), h(this, ve) && (l || h(this, Ft).call(this, f, o, s), a && h(this, $e).call(this, a, f)), !i && h(this, se) && h(this, ee)) {
      const m = h(this, ee);
      let x;
      for (; x = m == null ? void 0 : m.shift(); )
        (g = h(this, me)) == null || g.call(this, ...x);
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    var e;
    try {
      for (; h(this, K); ) {
        const t = h(this, O)[h(this, ne)];
        if (R(this, vt, Yt).call(this, !0), R(this, j, V).call(this, t)) {
          if (t.__staleWhileFetching)
            return t.__staleWhileFetching;
        } else if (t !== void 0)
          return t;
      }
    } finally {
      if (h(this, se) && h(this, ee)) {
        const t = h(this, ee);
        let r;
        for (; r = t == null ? void 0 : t.shift(); )
          (e = h(this, me)) == null || e.call(this, ...r);
      }
    }
  }
  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(e, t = {}) {
    const { updateAgeOnHas: r = this.updateAgeOnHas, status: o } = t, s = h(this, J).get(e);
    if (s !== void 0) {
      const i = h(this, O)[s];
      if (R(this, j, V).call(this, i) && i.__staleWhileFetching === void 0)
        return !1;
      if (h(this, ae).call(this, s))
        o && (o.has = "stale", h(this, $e).call(this, o, s));
      else
        return r && h(this, ct).call(this, s), o && (o.has = "hit", h(this, $e).call(this, o, s)), !0;
    } else
      o && (o.has = "miss");
    return !1;
  }
  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(e, t = {}) {
    const { allowStale: r = this.allowStale } = t, o = h(this, J).get(e);
    if (o !== void 0 && (r || !h(this, ae).call(this, o))) {
      const s = h(this, O)[o];
      return R(this, j, V).call(this, s) ? s.__staleWhileFetching : s;
    }
  }
  async fetch(e, t = {}) {
    const {
      // get options
      allowStale: r = this.allowStale,
      updateAgeOnGet: o = this.updateAgeOnGet,
      noDeleteOnStaleGet: s = this.noDeleteOnStaleGet,
      // set options
      ttl: i = this.ttl,
      noDisposeOnSet: c = this.noDisposeOnSet,
      size: a = 0,
      sizeCalculation: l = this.sizeCalculation,
      noUpdateTTL: u = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection: f = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: p = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort,
      context: m,
      forceRefresh: x = !1,
      status: w,
      signal: _
    } = t;
    if (!h(this, Je))
      return w && (w.fetch = "get"), this.get(e, {
        allowStale: r,
        updateAgeOnGet: o,
        noDeleteOnStaleGet: s,
        status: w
      });
    const C = {
      allowStale: r,
      updateAgeOnGet: o,
      noDeleteOnStaleGet: s,
      ttl: i,
      noDisposeOnSet: c,
      size: a,
      sizeCalculation: l,
      noUpdateTTL: u,
      noDeleteOnFetchRejection: f,
      allowStaleOnFetchRejection: d,
      allowStaleOnFetchAbort: g,
      ignoreFetchAbort: p,
      status: w,
      signal: _
    };
    let q = h(this, J).get(e);
    if (q === void 0) {
      w && (w.fetch = "miss");
      const E = R(this, kt, Qt).call(this, e, q, C, m);
      return E.__returned = E;
    } else {
      const E = h(this, O)[q];
      if (R(this, j, V).call(this, E)) {
        const S = r && E.__staleWhileFetching !== void 0;
        return w && (w.fetch = "inflight", S && (w.returnedStale = !0)), S ? E.__staleWhileFetching : E.__returned = E;
      }
      const y = h(this, ae).call(this, q);
      if (!x && !y)
        return w && (w.fetch = "hit"), R(this, lt, Et).call(this, q), o && h(this, ct).call(this, q), w && h(this, $e).call(this, w, q), E;
      const v = R(this, kt, Qt).call(this, e, q, C, m), N = v.__staleWhileFetching !== void 0 && r;
      return w && (w.fetch = y ? "stale" : "refresh", N && y && (w.returnedStale = !0)), N ? v.__staleWhileFetching : v.__returned = v;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(e, t = {}) {
    const { allowStale: r = this.allowStale, updateAgeOnGet: o = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, status: i } = t, c = h(this, J).get(e);
    if (c !== void 0) {
      const a = h(this, O)[c], l = R(this, j, V).call(this, a);
      return i && h(this, $e).call(this, i, c), h(this, ae).call(this, c) ? (i && (i.get = "stale"), l ? (i && r && a.__staleWhileFetching !== void 0 && (i.returnedStale = !0), r ? a.__staleWhileFetching : void 0) : (s || this.delete(e), i && r && (i.returnedStale = !0), r ? a : void 0)) : (i && (i.get = "hit"), l ? a.__staleWhileFetching : (R(this, lt, Et).call(this, c), o && h(this, ct).call(this, c), a));
    } else
      i && (i.get = "miss");
  }
  /**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */
  delete(e) {
    var r, o, s, i;
    let t = !1;
    if (h(this, K) !== 0) {
      const c = h(this, J).get(e);
      if (c !== void 0)
        if (t = !0, h(this, K) === 1)
          this.clear();
        else {
          h(this, at).call(this, c);
          const a = h(this, O)[c];
          R(this, j, V).call(this, a) ? a.__abortController.abort(new Error("deleted")) : (h(this, Ae) || h(this, se)) && (h(this, Ae) && ((r = h(this, Ce)) == null || r.call(this, a, e, "delete")), h(this, se) && ((o = h(this, ee)) == null || o.push([a, e, "delete"]))), h(this, J).delete(e), h(this, H)[c] = void 0, h(this, O)[c] = void 0, c === h(this, X) ? I(this, X, h(this, ce)[c]) : c === h(this, ne) ? I(this, ne, h(this, oe)[c]) : (h(this, oe)[h(this, ce)[c]] = h(this, oe)[c], h(this, ce)[h(this, oe)[c]] = h(this, ce)[c]), $t(this, K)._--, h(this, be).push(c);
        }
    }
    if (h(this, se) && ((s = h(this, ee)) != null && s.length)) {
      const c = h(this, ee);
      let a;
      for (; a = c == null ? void 0 : c.shift(); )
        (i = h(this, me)) == null || i.call(this, ...a);
    }
    return t;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var e, t, r;
    for (const o of R(this, Se, Ve).call(this, { allowStale: !0 })) {
      const s = h(this, O)[o];
      if (R(this, j, V).call(this, s))
        s.__abortController.abort(new Error("deleted"));
      else {
        const i = h(this, H)[o];
        h(this, Ae) && ((e = h(this, Ce)) == null || e.call(this, s, i, "delete")), h(this, se) && ((t = h(this, ee)) == null || t.push([s, i, "delete"]));
      }
    }
    if (h(this, J).clear(), h(this, O).fill(void 0), h(this, H).fill(void 0), h(this, ve) && h(this, Be) && (h(this, ve).fill(0), h(this, Be).fill(0)), h(this, Oe) && h(this, Oe).fill(0), I(this, ne, 0), I(this, X, 0), h(this, be).length = 0, I(this, ge, 0), I(this, K, 0), h(this, se) && h(this, ee)) {
      const o = h(this, ee);
      let s;
      for (; s = o == null ? void 0 : o.shift(); )
        (r = h(this, me)) == null || r.call(this, ...s);
    }
  }
};
de = new WeakMap(), ie = new WeakMap(), Ce = new WeakMap(), me = new WeakMap(), gt = new WeakMap(), K = new WeakMap(), ge = new WeakMap(), J = new WeakMap(), H = new WeakMap(), O = new WeakMap(), oe = new WeakMap(), ce = new WeakMap(), ne = new WeakMap(), X = new WeakMap(), be = new WeakMap(), ee = new WeakMap(), Oe = new WeakMap(), Be = new WeakMap(), ve = new WeakMap(), Ae = new WeakMap(), Je = new WeakMap(), se = new WeakMap(), Tt = new WeakSet(), Hn = function() {
  const e = new Jt(h(this, de)), t = new Jt(h(this, de));
  I(this, ve, e), I(this, Be, t), I(this, Ft, (s, i, c = Ct.now()) => {
    if (t[s] = i !== 0 ? c : 0, e[s] = i, i !== 0 && this.ttlAutopurge) {
      const a = setTimeout(() => {
        h(this, ae).call(this, s) && this.delete(h(this, H)[s]);
      }, i + 1);
      a.unref && a.unref();
    }
  }), I(this, ct, (s) => {
    t[s] = e[s] !== 0 ? Ct.now() : 0;
  }), I(this, $e, (s, i) => {
    if (e[i]) {
      const c = e[i], a = t[i];
      s.ttl = c, s.start = a, s.now = r || o(), s.remainingTTL = s.now + c - a;
    }
  });
  let r = 0;
  const o = () => {
    const s = Ct.now();
    if (this.ttlResolution > 0) {
      r = s;
      const i = setTimeout(() => r = 0, this.ttlResolution);
      i.unref && i.unref();
    }
    return s;
  };
  this.getRemainingTTL = (s) => {
    const i = h(this, J).get(s);
    return i === void 0 ? 0 : e[i] === 0 || t[i] === 0 ? 1 / 0 : t[i] + e[i] - (r || o());
  }, I(this, ae, (s) => e[s] !== 0 && t[s] !== 0 && (r || o()) - t[s] > e[s]);
}, ct = new WeakMap(), $e = new WeakMap(), Ft = new WeakMap(), ae = new WeakMap(), sn = new WeakSet(), Uo = function() {
  const e = new Jt(h(this, de));
  I(this, ge, 0), I(this, Oe, e), I(this, at, (t) => {
    I(this, ge, h(this, ge) - e[t]), e[t] = 0;
  }), I(this, Lt, (t, r, o, s) => {
    if (R(this, j, V).call(this, r))
      return 0;
    if (!je(o))
      if (s) {
        if (typeof s != "function")
          throw new TypeError("sizeCalculation must be a function");
        if (o = s(r, t), !je(o))
          throw new TypeError("sizeCalculation return invalid (expect positive integer)");
      } else
        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
    return o;
  }), I(this, bt, (t, r, o) => {
    if (e[t] = r, h(this, ie)) {
      const s = h(this, ie) - e[t];
      for (; h(this, ge) > s; )
        R(this, vt, Yt).call(this, !0);
    }
    I(this, ge, h(this, ge) + e[t]), o && (o.entrySize = r, o.totalCalculatedSize = h(this, ge));
  });
}, at = new WeakMap(), bt = new WeakMap(), Lt = new WeakMap(), Ee = new WeakSet(), He = function* ({ allowStale: e = this.allowStale } = {}) {
  if (h(this, K))
    for (let t = h(this, X); !(!R(this, zt, Vn).call(this, t) || ((e || !h(this, ae).call(this, t)) && (yield t), t === h(this, ne))); )
      t = h(this, ce)[t];
}, Se = new WeakSet(), Ve = function* ({ allowStale: e = this.allowStale } = {}) {
  if (h(this, K))
    for (let t = h(this, ne); !(!R(this, zt, Vn).call(this, t) || ((e || !h(this, ae).call(this, t)) && (yield t), t === h(this, X))); )
      t = h(this, oe)[t];
}, zt = new WeakSet(), Vn = function(e) {
  return e !== void 0 && h(this, J).get(h(this, H)[e]) === e;
}, vt = new WeakSet(), Yt = function(e) {
  var s, i;
  const t = h(this, ne), r = h(this, H)[t], o = h(this, O)[t];
  return h(this, Je) && R(this, j, V).call(this, o) ? o.__abortController.abort(new Error("evicted")) : (h(this, Ae) || h(this, se)) && (h(this, Ae) && ((s = h(this, Ce)) == null || s.call(this, o, r, "evict")), h(this, se) && ((i = h(this, ee)) == null || i.push([o, r, "evict"]))), h(this, at).call(this, t), e && (h(this, H)[t] = void 0, h(this, O)[t] = void 0, h(this, be).push(t)), h(this, K) === 1 ? (I(this, ne, I(this, X, 0)), h(this, be).length = 0) : I(this, ne, h(this, oe)[t]), h(this, J).delete(r), $t(this, K)._--, t;
}, kt = new WeakSet(), Qt = function(e, t, r, o) {
  const s = t === void 0 ? void 0 : h(this, O)[t];
  if (R(this, j, V).call(this, s))
    return s;
  const i = new AbortController(), { signal: c } = r;
  c == null || c.addEventListener("abort", () => i.abort(c.reason), {
    signal: i.signal
  });
  const a = {
    signal: i.signal,
    options: r,
    context: o
  }, l = (m, x = !1) => {
    const { aborted: w } = i.signal, _ = r.ignoreFetchAbort && m !== void 0;
    if (r.status && (w && !x ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, _ && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), w && !_ && !x)
      return f(i.signal.reason);
    const C = p;
    return h(this, O)[t] === p && (m === void 0 ? C.__staleWhileFetching ? h(this, O)[t] = C.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), this.set(e, m, a.options))), m;
  }, u = (m) => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = m), f(m)), f = (m) => {
    const { aborted: x } = i.signal, w = x && r.allowStaleOnFetchAbort, _ = w || r.allowStaleOnFetchRejection, C = _ || r.noDeleteOnFetchRejection, q = p;
    if (h(this, O)[t] === p && (!C || q.__staleWhileFetching === void 0 ? this.delete(e) : w || (h(this, O)[t] = q.__staleWhileFetching)), _)
      return r.status && q.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), q.__staleWhileFetching;
    if (q.__returned === q)
      throw m;
  }, d = (m, x) => {
    var _;
    const w = (_ = h(this, gt)) == null ? void 0 : _.call(this, e, s, a);
    w && w instanceof Promise && w.then((C) => m(C), x), i.signal.addEventListener("abort", () => {
      (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (m(), r.allowStaleOnFetchAbort && (m = (C) => l(C, !0)));
    });
  };
  r.status && (r.status.fetchDispatched = !0);
  const p = new Promise(d).then(l, u), g = Object.assign(p, {
    __abortController: i,
    __staleWhileFetching: s,
    __returned: void 0
  });
  return t === void 0 ? (this.set(e, g, { ...a.options, status: void 0 }), t = h(this, J).get(e)) : h(this, O)[t] = g, g;
}, j = new WeakSet(), V = function(e) {
  if (!h(this, Je))
    return !1;
  const t = e;
  return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof AbortController;
}, Rt = new WeakSet(), Gn = function(e, t) {
  h(this, ce)[t] = e, h(this, oe)[e] = t;
}, lt = new WeakSet(), Et = function(e) {
  e !== h(this, X) && (e === h(this, ne) ? I(this, ne, h(this, oe)[e]) : R(this, Rt, Gn).call(this, h(this, ce)[e], h(this, oe)[e]), R(this, Rt, Gn).call(this, h(this, X), e), I(this, X, e));
};
let jn = lr;
const xH = jn, wH = (n, e) => {
  const t = he("editorId"), { noImgZoomIn: r } = n, o = Wn(() => {
    const s = document.querySelectorAll(`#${t}-preview img`);
    s.length !== 0 && Ms(s, {
      background: "#00000073"
    });
  });
  Xe(() => {
    !r && o();
  }), Ye([e, uo(n.setting, "preview")], () => {
    !r && o();
  });
}, CH = wH, AH = (n, e) => {
  if (typeof e[n] == "string")
    return e[n];
  const t = `<i class="${U}-iconfont ${U}-icon-${n}"></i>`;
  switch (Fe.iconfontType) {
    case "svg":
      return `<svg class="${U}-icon" aria-hidden="true"><use xlink:href="#${U}-icon-${n}"></use></svg>`;
    default:
      return t;
  }
}, EH = (n, e) => {
  const t = he("editorId"), r = he("usedLanguageText"), o = he("customIcon"), s = () => {
    document.querySelectorAll(`#${t}-preview pre`).forEach((a) => {
      var l, u;
      let f = -1;
      (l = a.querySelector(".copy-button")) == null || l.remove();
      const d = ((u = r.value.copyCode) == null ? void 0 : u.text) || "复制代码", p = document.createElement("span");
      p.setAttribute("class", "copy-button"), p.dataset.tips = d, p.innerHTML = AH("copy", o.value), p.addEventListener("click", () => {
        var g, m;
        clearTimeout(f);
        const x = a.querySelector("code").innerText, w = Ws(n.formatCopiedText(x)), _ = ((g = r.value.copyCode) == null ? void 0 : g.successTips) || "已复制！", C = ((m = r.value.copyCode) == null ? void 0 : m.failTips) || "已复制！";
        p.dataset.tips = w ? _ : C, f = window.setTimeout(() => {
          p.dataset.tips = d;
        }, 1500);
      }), a.appendChild(p);
    });
  }, i = () => {
    In(s);
  }, c = (a) => {
    a && In(s);
  };
  Ye(() => e.value, i), Ye(() => n.setting.preview, c), Ye(() => n.setting.htmlPreview, c), Ye(() => r.value, s), Xe(s);
}, SH = EH, DH = (n) => {
  var e;
  const t = (e = Fe.editorExtensions) == null ? void 0 : e.highlight, r = t == null ? void 0 : t.instance, o = he("highlight"), s = en(r);
  return Xe(() => {
    if (!n.noHighlight && !s.value) {
      const i = document.createElement("script");
      i.src = o.value.js, i.onload = () => {
        s.value = window.hljs;
      }, i.id = `${U}-hljs`, ut(i, "hljs");
      const c = document.createElement("link");
      c.rel = "stylesheet", c.href = o.value.css, c.id = `${U}-hlCss`, ut(c);
    }
  }), Ye(
    () => o.value.css,
    (i) => {
      _s(`${U}-hlCss`, "href", i);
    }
  ), s;
}, qH = DH, TH = (n) => {
  const e = he("theme"), { editorExtensions: t } = Fe, r = t == null ? void 0 : t.mermaid, o = en(r == null ? void 0 : r.instance), s = en(-1), i = new xH({
    max: 1e3,
    // 缓存10分钟
    ttl: 6e5
  }), c = () => {
    const a = o.value;
    !n.noMermaid && a && (a.initialize({
      startOnLoad: !1,
      theme: e.value === "dark" ? "dark" : "default"
    }), s.value = s.value + 1);
  };
  return Ye(
    () => e.value,
    () => {
      i.clear(), c();
    }
  ), Xe(() => {
    if (!n.noMermaid && !(r != null && r.instance)) {
      const a = (r == null ? void 0 : r.js) || fs;
      if (/\.mjs/.test(a))
        import(
          /* @vite-ignore */
          /* webpackIgnore: true */
          a
        ).then((l) => {
          o.value = l.default, c();
        });
      else {
        const l = document.createElement("script");
        l.id = `${U}-mermaid`, l.src = a, l.onload = () => {
          o.value = window.mermaid, c();
        }, ut(l, "mermaid");
      }
    }
  }), { mermaidRef: o, reRenderRef: s, replaceMermaid: () => {
    In(() => {
      if (!n.noMermaid && o.value) {
        const a = document.querySelectorAll(
          `div.${U}-mermaid`
        ), l = document.createElement("div");
        l.style.width = document.body.offsetWidth + "px", l.style.height = document.body.offsetHeight + "px", l.style.position = "fixed", l.style.zIndex = "-10000", l.style.top = "-10000";
        let u = a.length;
        u > 0 && document.body.appendChild(l), a.forEach(async (f) => {
          let d = i.get(f.innerText);
          if (!d) {
            const g = ys(), m = o.value.renderAsync || o.value.render;
            let x = "";
            try {
              x = await m(g, f.innerText, l);
            } catch {
            }
            d = typeof x == "string" ? x : x.svg, i.set(f.innerText, d);
          }
          const p = document.createElement("p");
          p.className = `${U}-mermaid`, p.setAttribute("data-processed", ""), p.innerHTML = d, f.dataset.line !== void 0 && (p.dataset.line = f.dataset.line), f.replaceWith(p), --u === 0 && l.remove();
        });
      }
    });
  } };
}, FH = TH, LH = (n) => {
  var e;
  const t = (e = Fe.editorExtensions) == null ? void 0 : e.katex, r = t == null ? void 0 : t.instance, o = en(r);
  return Xe(() => {
    if (!n.noKatex && !o.value) {
      const s = document.createElement("script");
      s.src = (t == null ? void 0 : t.js) || dr.js, s.onload = () => {
        o.value = window.katex;
      }, s.id = `${U}-katex`;
      const i = document.createElement("link");
      i.rel = "stylesheet", i.href = (t == null ? void 0 : t.css) || dr.css, i.id = `${U}-katexCss`, ut(s, "katex"), ut(i);
    }
  }), o;
}, zH = LH, RH = (n, e) => {
  const t = n.renderer.rules.fence.bind(n.renderer.rules);
  n.renderer.rules.fence = (r, o, s, i, c) => {
    const a = r[o], l = a.content.trim();
    if (a.info === "mermaid") {
      let u;
      return r[o].map && r[o].level === 0 && (u = r[o].map[0], r[o].attrSet("data-line", String(u))), `<div class="${U}-mermaid" ${u !== void 0 ? "data-line=" + u : ""} data-mermaid-theme=${e.themeRef.value}>${l}</div>`;
    }
    return t(r, o, s, i, c);
  };
}, IH = RH, lo = (n, e) => {
  let t = !0, r = !0;
  const o = n.posMax, s = e > 0 ? n.src.charCodeAt(e - 1) : -1, i = e + 1 <= o ? n.src.charCodeAt(e + 1) : -1;
  return (s === 32 || s === 9 || i >= 48 && i <= 57) && (r = !1), (i === 32 || i === 9) && (t = !1), {
    can_open: t,
    can_close: r
  };
}, NH = (n, e) => {
  let t, r, o, s;
  if (n.src[n.pos] !== "$")
    return !1;
  if (o = lo(n, n.pos), !o.can_open)
    return e || (n.pending += "$"), n.pos += 1, !0;
  const i = n.pos + 1;
  for (t = i; (t = n.src.indexOf("$", t)) !== -1; ) {
    for (s = t - 1; n.src[s] === "\\"; )
      s -= 1;
    if ((t - s) % 2 == 1)
      break;
    t += 1;
  }
  return t === -1 ? (e || (n.pending += "$"), n.pos = i, !0) : t - i === 0 ? (e || (n.pending += "$$"), n.pos = i + 1, !0) : (o = lo(n, t), o.can_close ? (e || (r = n.push("math_inline", "math", 0), r.markup = "$", r.content = n.src.slice(i, t)), n.pos = t + 1, !0) : (e || (n.pending += "$"), n.pos = i, !0));
}, OH = (n, e, t, r) => {
  let o, s, i, c, a = !1, l = n.bMarks[e] + n.tShift[e], u = n.eMarks[e];
  if (l + 2 > u || n.src.slice(l, l + 2) !== "$$")
    return !1;
  if (l += 2, o = n.src.slice(l, u), r)
    return !0;
  for (o.trim().slice(-2) === "$$" && (o = o.trim().slice(0, -2), a = !0), i = e; !a && (i++, !(i >= t || (l = n.bMarks[i] + n.tShift[i], u = n.eMarks[i], l < u && n.tShift[i] < n.blkIndent))); )
    n.src.slice(l, u).trim().slice(-2) === "$$" && (c = n.src.slice(0, u).lastIndexOf("$$"), s = n.src.slice(l, c), a = !0);
  n.line = i + 1;
  const f = n.push("math_block", "math", 0);
  return f.block = !0, f.content = (o && o.trim() ? o + `
` : "") + n.getLines(e + 1, i, n.tShift[e], !0) + (s && s.trim() ? s : ""), f.map = [e, n.line], f.markup = "$$", !0;
}, BH = (n, e) => {
  const t = (o) => {
    if (e.katexRef.value) {
      const s = e.katexRef.value.renderToString(o, {
        throwOnError: !1
      });
      return `<span class="${U}-katex-inline" data-processed>${s}</span>`;
    } else
      return `<span class="${U}-katex-inline">${o}</span>`;
  }, r = (o, s) => {
    if (e.katexRef.value) {
      const i = e.katexRef.value.renderToString(o, {
        throwOnError: !1,
        displayMode: !0
      });
      return `<p class="${U}-katex-block" data-line=${s} data-processed>${i}</p>`;
    } else
      return `<p class="${U}-katex-block" data-line=${s}>${o}</p>`;
  };
  n.inline.ruler.after("escape", "math_inline", NH), n.block.ruler.after("blockquote", "math_block", OH, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  }), n.renderer.rules.math_inline = (o, s) => t(o[s].content), n.renderer.rules.math_block = (o, s) => r(o[s].content, o[s].map[0]) + `
`;
}, $H = BH, MH = (n, e) => {
  e = e || {};
  const t = 3, r = e.marker || "!", o = r.charCodeAt(0), s = r.length;
  let i = "", c = "";
  const a = (u, f, d, p, g) => {
    const m = u[f];
    return m.type === "admonition_open" ? (u[f].attrPush([
      "class",
      `${U}-admonition ${U}-admonition-${m.info}`
    ]), u[f].attrSet("data-line", String(u[f].map[0]))) : m.type === "admonition_title_open" && u[f].attrPush(["class", `${U}-admonition-title`]), g.renderToken(u, f, d);
  }, l = (u) => {
    const f = u.trim().split(" ", 2);
    c = "", i = f[0], f.length > 1 && (c = u.substring(i.length + 2)), (c === "" || !c) && (c = i);
  };
  n.block.ruler.before(
    "code",
    "admonition",
    (u, f, d, p) => {
      let g, m, x, w = !1, _ = u.bMarks[f] + u.tShift[f], C = u.eMarks[f];
      if (o !== u.src.charCodeAt(_))
        return !1;
      for (g = _ + 1; g <= C && r[(g - _) % s] === u.src[g]; g++)
        ;
      const q = Math.floor((g - _) / s);
      if (q !== t)
        return !1;
      g -= (g - _) % s;
      const E = u.src.slice(_, g), y = u.src.slice(g, C);
      if (l(y), p)
        return !0;
      for (m = f; m++, !(m >= d || (_ = u.bMarks[m] + u.tShift[m], C = u.eMarks[m], _ < C && u.sCount[m] < u.blkIndent)); )
        if (o === u.src.charCodeAt(_) && !(u.sCount[m] - u.blkIndent >= 4)) {
          for (g = _ + 1; g <= C && r[(g - _) % s] === u.src[g]; g++)
            ;
          if (!(Math.floor((g - _) / s) < q) && (g -= (g - _) % s, g = u.skipSpaces(g), !(g < C))) {
            w = !0;
            break;
          }
        }
      const v = u.parentType, b = u.lineMax;
      return u.parentType = "root", u.lineMax = m, x = u.push("admonition_open", "div", 1), x.markup = E, x.block = !0, x.info = i, x.map = [f, m], x = u.push("admonition_title_open", "p", 1), x.markup = E + " " + i, x.map = [f, m], x = u.push("inline", "", 0), x.content = c, x.map = [f, u.line - 1], x.children = [], x = u.push("admonition_title_close", "p", -1), x.markup = E + " " + i, u.md.block.tokenize(u, f + 1, m), x = u.push("admonition_close", "div", -1), x.markup = u.src.slice(_, g), x.block = !0, u.parentType = v, u.lineMax = b, u.line = m + (w ? 1 : 0), !0;
    },
    {
      alt: ["paragraph", "reference", "blockquote", "list"]
    }
  ), n.renderer.rules.admonition_open = a, n.renderer.rules.admonition_title_open = a, n.renderer.rules.admonition_title_close = a, n.renderer.rules.admonition_close = a;
}, PH = MH, UH = (n, e) => {
  n.renderer.rules.heading_open = (t, r) => {
    var o;
    const s = t[r], i = ((o = t[r + 1].children) == null ? void 0 : o.reduce((a, l) => a + (l.content || ""), "")) || "", c = s.markup.length;
    return e.headsRef.value.push({
      text: i,
      level: c
    }), s.map && s.level === 0 && (s.attrSet("data-line", String(s.map[0])), s.attrSet(
      "id",
      e.mdHeadingId(i, c, e.headsRef.value.length)
    )), n.renderer.renderToken(t, r, e);
  }, n.renderer.rules.heading_close = (t, r, o, s, i) => i.renderToken(t, r, o);
}, jH = UH, HH = (n, e) => {
  const t = n.renderer.rules.fence, r = n.utils.unescapeAll, o = /\[(\w*)(?::([\w ]*))?\]/;
  function s(l) {
    return l.info ? r(l.info).trim() : "";
  }
  function i(l) {
    const u = s(l), [f = null, d = ""] = (o.exec(u) || []).slice(1);
    return [f, d];
  }
  function c(l) {
    const u = s(l);
    return u ? u.split(/(\s+)/g)[0] : "";
  }
  const a = (l, u, f, d, p) => {
    if (l[u].hidden)
      return "";
    const [g, m] = i(l[u]);
    if (g === null)
      return t(l, u, f, d, p);
    let x, w, _, C, q = "", E = "";
    for (let y = u; y < l.length && (x = l[y], [w, _] = i(x), w === g); y++)
      x.info = x.info.replace(o, ""), x.hidden = !0, C = y - u > 0 ? "" : " checked", q += `<li><input type="radio" name="label-group-${e.editorId}-${u}"${C}><label for="group-${e.editorId}-${u}-tab-${y - u}" onclick="this.previousElementSibling.click()">${_ || c(x)}</label></li>
`, E += `<input type="radio" id="group-${e.editorId}-${u}-tab-${y - u}" name="group-${e.editorId}-${u}"${C}>
` + t(l, y, f, d, p);
    return `<div class="code-tabs">
<ul>
` + q + `</ul>
` + E + "</div>";
  };
  n.renderer.rules.fence = a;
}, VH = HH, GH = (n) => {
  [
    "paragraph_open",
    "table_open",
    "ordered_list_open",
    "bullet_list_open",
    "blockquote_open",
    "hr",
    "html_block",
    "fence"
  ].forEach((e) => {
    const t = n.renderer.rules[e];
    t ? n.renderer.rules[e] = (r, o, s, i, c) => {
      let a;
      const l = t(r, o, s, i, c);
      return r[o].map && r[o].level === 0 && !/^<!--/.test(l) ? (a = r[o].map[0], l.replace(/^(<[^>]*)/, `$1 data-line="${a}"`)) : l;
    } : n.renderer.rules[e] = (r, o, s, i, c) => {
      let a;
      return r[o].map && r[o].level === 0 && (a = r[o].map[0], r[o].attrSet("data-line", String(a))), c.renderToken(r, o, s);
    };
  });
}, ZH = (n, e) => {
  const { editorConfig: t, markdownItConfig: r, markdownItPlugins: o } = Fe, s = he("editorId"), i = he("showCodeRowNumber"), c = he("theme"), a = hr([]), l = qH(n), u = zH(n), { reRenderRef: f, replaceMermaid: d } = FH(n), p = oH({
    html: !0,
    breaks: !0
  });
  r(p);
  const g = [
    {
      type: "katex",
      plugin: $H,
      options: { katexRef: u }
    },
    {
      type: "image",
      plugin: iH,
      options: { figcaption: !0, classes: "md-zoom" }
    },
    {
      type: "admonition",
      plugin: PH,
      options: {}
    },
    {
      type: "taskList",
      plugin: kH,
      options: {}
    },
    {
      type: "heading",
      plugin: jH,
      options: { mdHeadingId: n.mdHeadingId, headsRef: a }
    },
    {
      type: "codeTabs",
      plugin: VH,
      options: { editorId: s }
    }
  ];
  n.noMermaid || g.push({
    type: "mermaid",
    plugin: IH,
    options: { themeRef: c }
  }), o(g).forEach((q) => {
    p.use(q.plugin, q.options);
  });
  const m = p.options.highlight;
  p.set({
    highlight: (q, E, y) => {
      if (m) {
        const N = m(q, E, y);
        if (N)
          return N;
      }
      let v;
      !n.noHighlight && l.value ? l.value.getLanguage(E) ? v = l.value.highlight(q, {
        language: E,
        ignoreIllegals: !0
      }).value : v = l.value.highlightAuto(q).value : v = p.utils.escapeHtml(q);
      const b = i ? ks(v.replace(/^\n+|\n+$/g, "")) : `<span class="code-block">${v.replace(/^\n+|\n+$/g, "")}</span>`;
      return `<pre><code class="language-${E}" language=${E}>${b}</code></pre>`;
    }
  }), GH(p);
  const x = hr(n.sanitize(p.render(n.modelValue))), w = () => {
    At.emit(s, bs, x.value), n.onHtmlChanged(x.value), n.onGetCatalog(a.value), At.emit(s, gr, a.value), d();
  };
  Xe(w);
  const _ = Wn(
    async () => {
      a.value = [], x.value = n.sanitize(p.render(n.modelValue)), w();
    },
    (t == null ? void 0 : t.renderDelay) !== void 0 ? t == null ? void 0 : t.renderDelay : e ? 0 : 500
  ), C = rt(() => (n.noKatex || u.value) && (n.noHighlight || l.value));
  return Ye([uo(n, "modelValue"), C, f], _), Xe(() => {
    At.on(s, {
      name: vs,
      callback() {
        At.emit(s, gr, a.value);
      }
    });
  }), { html: x };
}, WH = ZH, jo = {
  modelValue: {
    type: String,
    default: ""
  },
  setting: {
    type: Object,
    default: () => ({})
  },
  onHtmlChanged: {
    type: Function,
    default: () => {
    }
  },
  onGetCatalog: {
    type: Function,
    default: () => {
    }
  },
  mdHeadingId: {
    type: Function,
    default: () => ""
  },
  noMermaid: {
    type: Boolean,
    default: !1
  },
  sanitize: {
    type: Function,
    default: (n) => n
  },
  // 不使用该函数功能
  noKatex: {
    type: Boolean,
    default: !1
  },
  formatCopiedText: {
    type: Function,
    default: (n) => n
  },
  noHighlight: {
    type: Boolean,
    default: !1
  },
  previewOnly: {
    type: Boolean,
    default: !1
  },
  noImgZoomIn: {
    type: Boolean
  }
};
({
  ...jo
});
const KH = /* @__PURE__ */ Zn({
  name: "ContentPreview",
  props: jo,
  setup(n) {
    const e = he("editorId"), t = he("previewTheme"), r = he("showCodeRowNumber"), {
      html: o
    } = WH(n, n.previewOnly);
    return SH(n, o), CH(n, o), () => Ke(ns, null, [Ke("div", {
      id: `${e}-preview-wrapper`,
      class: `${U}-preview-wrapper`,
      "data-show": n.setting.preview,
      key: "content-preview-wrapper"
    }, [Ke("article", {
      id: `${e}-preview`,
      class: [`${U}-preview`, `${t == null ? void 0 : t.value}-theme`, r && `${U}-scrn`],
      innerHTML: o.value
    }, null)]), !n.previewOnly && Ke("div", {
      id: `${e}-html-wrapper`,
      class: `${U}-preview-wrapper`,
      "data-show": n.setting.htmlPreview,
      key: "html-preview-wrapper"
    }, [Ke("div", {
      class: `${U}-html`
    }, [o.value])])]);
  }
}), JH = (n) => {
  var e, t;
  const { editorId: r } = n, o = (t = (e = Fe) == null ? void 0 : e.editorExtensions) == null ? void 0 : t.highlight;
  Ue("editorId", r), Ue(
    "theme",
    rt(() => n.theme)
  ), Ue(
    "language",
    rt(() => n.language)
  ), Ue(
    "highlight",
    rt(() => {
      const i = {
        ...mr,
        ...o == null ? void 0 : o.css
      }, c = n.codeStyleReverse && n.codeStyleReverseList.includes(n.previewTheme) ? "dark" : n.theme;
      return {
        js: (o == null ? void 0 : o.js) || ls,
        css: i[n.codeTheme] ? i[n.codeTheme][c] : mr.atom[c]
      };
    })
  ), Ue("showCodeRowNumber", n.showCodeRowNumber);
  const s = rt(() => {
    var i, c;
    const a = {
      ...pr,
      ...(c = (i = Fe) == null ? void 0 : i.editorConfig) == null ? void 0 : c.languageUserDefined
    };
    return a[n.language] ? a[n.language] : pr["zh-CN"];
  });
  Ue("usedLanguageText", s), Ue(
    "previewTheme",
    rt(() => n.previewTheme)
  ), Ue(
    "customIcon",
    rt(() => n.customIcon)
  );
}, YH = (n) => {
  Xe(() => {
    var e, t;
    if (!n.noIconfont)
      if (Fe.iconfontType === "svg") {
        const r = document.createElement("script");
        r.src = ((e = Fe.editorExtensions) == null ? void 0 : e.iconfont) || cs, r.id = `${U}-icon`, ut(r);
      } else {
        const r = document.createElement("link");
        r.rel = "stylesheet", r.href = ((t = Fe.editorExtensions) == null ? void 0 : t.iconfontClass) || as, r.id = `${U}-icon-class`, ut(r);
      }
  });
}, QH = (n) => n, Ho = {
  /**
   * markdown content.
   *
   * @default ''
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * 主题，支持light和dark
   *
   * @default 'light'
   */
  theme: {
    type: String,
    default: "light"
  },
  /**
   * 外层类名
   *
   * @default ''
   */
  class: {
    type: String,
    default: ""
  },
  /**
   * 预设语言名称
   *
   * @default 'zh-CN'
   */
  language: {
    type: String,
    default: "zh-CN"
  },
  /**
   * html变化事件
   */
  onHtmlChanged: {
    type: Function
  },
  /**
   * 获取目录结构
   */
  onGetCatalog: {
    type: Function
  },
  /**
   * 编辑器唯一标识
   *
   * @default 'md-editor-v3'
   */
  editorId: {
    type: String,
    default: is
  },
  /**
   * 预览中代码是否显示行号
   *
   * @default false
   */
  showCodeRowNumber: {
    type: Boolean,
    default: !1
  },
  /**
   * 预览内容样式
   *
   * @default 'default'
   */
  previewTheme: {
    type: String,
    default: "default"
  },
  /**
   * 编辑器样式
   */
  style: {
    type: Object,
    default: () => ({})
  },
  /**
   * 标题的id生成方式
   *
   * @default (text: string) => text
   */
  mdHeadingId: {
    type: Function,
    default: QH
  },
  /**
   *
   * 不能保证文本正确的情况，在marked编译md文本后通过该方法处理
   * 推荐DOMPurify、sanitize-html
   *
   * @default (text: string) => text
   */
  sanitize: {
    type: Function,
    default: (n) => n
  },
  /**
   * 不使用该mermaid
   *
   * @default false
   */
  noMermaid: {
    type: Boolean,
    default: !1
  },
  /**
   * 不使用katex
   *
   * @default false
   */
  noKatex: {
    type: Boolean,
    default: !1
  },
  /**
   * 代码主题
   *
   * @default 'atom'
   */
  codeTheme: {
    type: String,
    default: "atom"
  },
  /**
   * 不插入iconfont链接
   *
   * @default false
   */
  noIconfont: {
    type: Boolean
  },
  /**
   * 复制代码格式化方法
   *
   * @default (text) => text
   */
  formatCopiedText: {
    type: Function,
    default: (n) => n
  },
  /**
   * 某些预览主题的代码模块背景是暗色系
   * 将这个属性设置为true，会自动在该主题下的light模式下使用暗色系的代码风格
   *
   * @default true
   */
  codeStyleReverse: {
    type: Boolean,
    default: !0
  },
  /**
   * 需要自动调整的预览主题
   *
   * @default ['default', 'mk-cute']
   */
  codeStyleReverseList: {
    type: Array,
    default: ["default", "mk-cute"]
  },
  noHighlight: {
    type: Boolean,
    default: !1
  },
  /**
   * 是否关闭编辑器默认的放大缩小功能
   */
  noImgZoomIn: {
    type: Boolean,
    default: !1
  },
  /**
   * 自定义的图标
   */
  customIcon: {
    type: Object,
    default: {}
  }
};
({
  ...Ho
});
const Vo = ["onHtmlChanged", "onGetCatalog"];
[
  ...Vo
];
const XH = /* @__PURE__ */ Zn({
  name: "MdPreview",
  props: Ho,
  emits: Vo,
  setup(n, e) {
    const {
      editorId: t,
      noKatex: r,
      noMermaid: o,
      noHighlight: s
    } = n;
    return JH(n), YH(n), ts(() => {
      At.clear(t);
    }), () => Ke("div", {
      id: t,
      class: [U, n.class, n.theme === "dark" && `${U}-dark`, `${U}-previewOnly`],
      style: n.style
    }, [Ke(KH, {
      modelValue: n.modelValue,
      onHtmlChanged: (i) => {
        n.onHtmlChanged ? n.onHtmlChanged(i) : e.emit("onHtmlChanged", i);
      },
      onGetCatalog: (i) => {
        n.onGetCatalog ? n.onGetCatalog(i) : e.emit("onGetCatalog", i);
      },
      mdHeadingId: n.mdHeadingId,
      noMermaid: o,
      sanitize: n.sanitize,
      noKatex: r,
      formatCopiedText: n.formatCopiedText,
      noHighlight: s,
      noImgZoomIn: n.noImgZoomIn,
      previewOnly: !0
    }, null)]);
  }
}), Xt = XH;
Xt.install = (n) => (n.component(Xt.name, Xt), n);
const e4 = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": "",
  class: "els-markdown-view"
}, o4 = /* @__PURE__ */ Zn({
  __name: "view",
  props: {
    value: {},
    theme: {}
  },
  setup(n) {
    const e = n, { value: t } = rs(e);
    return (r, o) => (os(), ss("div", e4, [
      Ke(fr(Xt), { "model-value": fr(t) }, null, 8, ["model-value"])
    ]));
  }
}), s4 = {
  install: (n) => {
  }
};
export {
  o4 as ElsMarkdownView,
  s4 as default
};
