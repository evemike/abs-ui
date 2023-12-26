var ei = Object.defineProperty;
var ni = (n, t, e) => t in n ? ei(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var X = (n, t, e) => (ni(n, typeof t != "symbol" ? t + "" : t, e), e), On = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var h = (n, t, e) => (On(n, t, "read from private field"), e ? e.call(n) : t.get(n)), N = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, I = (n, t, e, r) => (On(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e);
var Je = (n, t, e, r) => ({
  set _(o) {
    I(n, t, o, e);
  },
  get _() {
    return h(n, t, r);
  }
}), R = (n, t, e) => (On(n, t, "access private method"), e);
import { defineComponent as mr, onBeforeUnmount as ri, createVNode as Qt, inject as ft, Fragment as oi, provide as Vt, computed as ie, onMounted as ne, watch as te, toRef as Jo, ref as Nr, nextTick as er, shallowRef as fn, toRefs as si, openBlock as ii, createElementBlock as ci, unref as $n, mergeProps as ai } from "vue";
const j = "md-editor", li = "md-editor-v3", ui = "https://at.alicdn.com/t/c/font_2605852_prouiefeic.js", hi = "https://at.alicdn.com/t/c/font_2605852_prouiefeic.css", W = "https://cdnjs.cloudflare.com/ajax/libs", fi = `${W}/highlight.js/11.7.0/highlight.min.js`, pi = [
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
], di = ["markdownTotal", "=", "scrollSwitch"], Br = {
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
}, gi = `${W}/mermaid/10.1.0/mermaid.esm.min.mjs`, Pr = {
  js: `${W}/KaTeX/0.16.3/katex.min.js`,
  css: `${W}/KaTeX/0.16.3/katex.min.css`
}, Mr = {
  a11y: {
    light: `${W}/highlight.js/11.7.0/styles/a11y-light.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/a11y-dark.min.css`
  },
  atom: {
    light: `${W}/highlight.js/11.7.0/styles/atom-one-light.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/atom-one-dark.min.css`
  },
  github: {
    light: `${W}/highlight.js/11.7.0/styles/github.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/github-dark.min.css`
  },
  gradient: {
    light: `${W}/highlight.js/11.7.0/styles/gradient-light.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/gradient-dark.min.css`
  },
  kimbie: {
    light: `${W}/highlight.js/11.7.0/styles/kimbie-light.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/kimbie-dark.min.css`
  },
  paraiso: {
    light: `${W}/highlight.js/11.7.0/styles/paraiso-light.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/paraiso-dark.min.css`
  },
  qtcreator: {
    light: `${W}/highlight.js/11.7.0/styles/qtcreator-light.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/qtcreator-dark.min.css`
  },
  stackoverflow: {
    light: `${W}/highlight.js/11.7.0/styles/stackoverflow-light.min.css`,
    dark: `${W}/highlight.js/11.7.0/styles/stackoverflow-dark.min.css`
  }
}, zt = {
  editorExtensions: {},
  editorConfig: {},
  codeMirrorExtensions: (n, t) => t,
  markdownItConfig: () => {
  },
  markdownItPlugins: (n) => n,
  iconfontType: "svg"
}, br = (n, t = 200) => {
  let e = 0;
  return (...r) => new Promise((o) => {
    e && (clearTimeout(e), o("cancel")), e = window.setTimeout(() => {
      n.apply(void 0, r), e = 0, o("done");
    }, t);
  });
};
var mi = Object.defineProperty, bi = (n, t, e) => t in n ? mi(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, vi = (n, t, e) => (bi(n, typeof t != "symbol" ? t + "" : t, e), e);
let yi = class {
  constructor() {
    vi(this, "pools", {});
  }
  // 移除事件监听
  remove(t, e, r) {
    const o = this.pools[t] && this.pools[t][e];
    o && (this.pools[t][e] = o.filter((s) => s !== r));
  }
  // 清空全部事件，由于单一实例，多次注册会被共享内容
  clear(t) {
    this.pools[t] = {};
  }
  // 注册事件监听
  on(t, e) {
    return this.pools[t] || (this.pools[t] = {}), this.pools[t][e.name] || (this.pools[t][e.name] = []), this.pools[t][e.name].push(e.callback), this.pools[t][e.name].includes(e.callback);
  }
  // 触发事件
  emit(t, e, ...r) {
    this.pools[t] || (this.pools[t] = {});
    const o = this.pools[t][e];
    o && o.forEach((s) => {
      try {
        s(...r);
      } catch (i) {
        console.error(`${e} monitor event exception！`, i);
      }
    });
  }
};
const Le = new yi(), _i = "buildFinished", jr = "catalogChanged", ki = "pushCatalog", xi = (n) => {
  if (!n)
    return n;
  const t = n.split(`
`), e = ['<span rn-wrapper aria-hidden="true">'];
  return t.forEach(() => {
    e.push("<span></span>");
  }), e.push("</span>"), `<span class="code-block">${n}</span>${e.join("")}`;
}, wi = () => `${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`, fe = (n, t = "") => {
  const e = document.getElementById(n.id), r = n.onload;
  n.onload = null;
  const o = function(s) {
    typeof r == "function" && r.bind(this)(s), n.removeEventListener("load", o);
  };
  e ? t !== "" && (e.addEventListener("load", o), Reflect.get(window, t) && e.dispatchEvent(new Event("load"))) : (n.addEventListener("load", o), document.head.appendChild(n));
}, Ci = br((n, t, e) => {
  const r = document.getElementById(n);
  r && r.setAttribute(t, e);
}, 10), Ai = 1024;
let Ei = 0;
class K {
  /**
  Create a new node prop type.
  */
  constructor(t = {}) {
    this.id = Ei++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
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
  add(t) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof t != "function" && (t = jt.match(t)), (e) => {
      let r = t(e);
      return r === void 0 ? null : [this, r];
    };
  }
}
K.closedBy = new K({ deserialize: (n) => n.split(" ") });
K.openedBy = new K({ deserialize: (n) => n.split(" ") });
K.group = new K({ deserialize: (n) => n.split(" ") });
K.contextHash = new K({ perNode: !0 });
K.lookAhead = new K({ perNode: !0 });
K.mounted = new K({ perNode: !0 });
class pn {
  constructor(t, e, r) {
    this.tree = t, this.overlay = e, this.parser = r;
  }
  /**
  @internal
  */
  static get(t) {
    return t && t.props && t.props[K.mounted.id];
  }
}
const Si = /* @__PURE__ */ Object.create(null);
class jt {
  /**
  @internal
  */
  constructor(t, e, r, o = 0) {
    this.name = t, this.props = e, this.id = r, this.flags = o;
  }
  /**
  Define a node type.
  */
  static define(t) {
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : Si, r = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), o = new jt(t.name || "", e, t.id, r);
    if (t.props) {
      for (let s of t.props)
        if (Array.isArray(s) || (s = s(o)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          e[s[0].id] = s[1];
        }
    }
    return o;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(t) {
    return this.props[t.id];
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
  is(t) {
    if (typeof t == "string") {
      if (this.name == t)
        return !0;
      let e = this.prop(K.group);
      return e ? e.indexOf(t) > -1 : !1;
    }
    return this.id == t;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let r in t)
      for (let o of r.split(" "))
        e[o] = t[r];
    return (r) => {
      for (let o = r.prop(K.group), s = -1; s < (o ? o.length : 0); s++) {
        let i = e[s < 0 ? r.name : o[s]];
        if (i)
          return i;
      }
    };
  }
}
jt.none = new jt(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const Ye = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap();
var ot;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(ot || (ot = {}));
class Lt {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(t, e, r, o, s) {
    if (this.type = t, this.children = e, this.positions = r, this.length = o, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [i, c] of s)
        this.props[typeof i == "number" ? i : i.id] = c;
    }
  }
  /**
  @internal
  */
  toString() {
    let t = pn.get(this);
    if (t && !t.overlay)
      return t.tree.toString();
    let e = "";
    for (let r of this.children) {
      let o = r.toString();
      o && (e && (e += ","), e += o);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(t = 0) {
    return new rr(this.topNode, t);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(t, e = 0, r = 0) {
    let o = Ye.get(this) || this.topNode, s = new rr(o);
    return s.moveTo(t, e), Ye.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new pt(this, 0, 0, null);
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
  resolve(t, e = 0) {
    let r = $e(Ye.get(this) || this.topNode, t, e, !1);
    return Ye.set(this, r), r;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(t, e = 0) {
    let r = $e(Ur.get(this) || this.topNode, t, e, !0);
    return Ur.set(this, r), r;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(t, e = 0) {
    return qi(this, t, e);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(t) {
    let { enter: e, leave: r, from: o = 0, to: s = this.length } = t, i = t.mode || 0, c = (i & ot.IncludeAnonymous) > 0;
    for (let a = this.cursor(i | ot.IncludeAnonymous); ; ) {
      let l = !1;
      if (a.from <= s && a.to >= o && (!c && a.type.isAnonymous || e(a) !== !1)) {
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
  prop(t) {
    return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let t = [];
    if (this.props)
      for (let e in this.props)
        t.push([+e, this.props[e]]);
    return t;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(t = {}) {
    return this.children.length <= 8 ? this : _r(jt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, r, o) => new Lt(this.type, e, r, o, this.propValues), t.makeTree || ((e, r, o) => new Lt(jt.none, e, r, o)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(t) {
    return Fi(t);
  }
}
Lt.empty = new Lt(jt.none, [], [], 0);
class vr {
  constructor(t, e) {
    this.buffer = t, this.index = e;
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
    return new vr(this.buffer, this.index);
  }
}
class re {
  /**
  Create a tree buffer.
  */
  constructor(t, e, r) {
    this.buffer = t, this.length = e, this.set = r;
  }
  /**
  @internal
  */
  get type() {
    return jt.none;
  }
  /**
  @internal
  */
  toString() {
    let t = [];
    for (let e = 0; e < this.buffer.length; )
      t.push(this.childString(e)), e = this.buffer[e + 3];
    return t.join(",");
  }
  /**
  @internal
  */
  childString(t) {
    let e = this.buffer[t], r = this.buffer[t + 3], o = this.set.types[e], s = o.name;
    if (/\W/.test(s) && !o.isError && (s = JSON.stringify(s)), t += 4, r == t)
      return s;
    let i = [];
    for (; t < r; )
      i.push(this.childString(t)), t = this.buffer[t + 3];
    return s + "(" + i.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(t, e, r, o, s) {
    let { buffer: i } = this, c = -1;
    for (let a = t; a != e && !(Yo(s, o, i[a + 1], i[a + 2]) && (c = a, r > 0)); a = i[a + 3])
      ;
    return c;
  }
  /**
  @internal
  */
  slice(t, e, r) {
    let o = this.buffer, s = new Uint16Array(e - t), i = 0;
    for (let c = t, a = 0; c < e; ) {
      s[a++] = o[c++], s[a++] = o[c++] - r;
      let l = s[a++] = o[c++] - r;
      s[a++] = o[c++] - t, i = Math.max(i, l);
    }
    return new re(s, i, this.set);
  }
}
function Yo(n, t, e, r) {
  switch (n) {
    case -2:
      return e < t;
    case -1:
      return r >= t && e < t;
    case 0:
      return e < t && r > t;
    case 1:
      return e <= t && r > t;
    case 2:
      return r > t;
    case 4:
      return !0;
  }
}
function $e(n, t, e, r) {
  for (var o; n.from == n.to || (e < 1 ? n.from >= t : n.from > t) || (e > -1 ? n.to <= t : n.to < t); ) {
    let i = !r && n instanceof pt && n.index < 0 ? null : n.parent;
    if (!i)
      return n;
    n = i;
  }
  let s = r ? 0 : ot.IgnoreOverlays;
  if (r)
    for (let i = n, c = i.parent; c; i = c, c = i.parent)
      i instanceof pt && i.index < 0 && ((o = c.enter(t, e, s)) === null || o === void 0 ? void 0 : o.from) != i.from && (n = c);
  for (; ; ) {
    let i = n.enter(t, e, s);
    if (!i)
      return n;
    n = i;
  }
}
class Qo {
  cursor(t = 0) {
    return new rr(this, t);
  }
  getChild(t, e = null, r = null) {
    let o = Hr(this, t, e, r);
    return o.length ? o[0] : null;
  }
  getChildren(t, e = null, r = null) {
    return Hr(this, t, e, r);
  }
  resolve(t, e = 0) {
    return $e(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return $e(this, t, e, !0);
  }
  matchContext(t) {
    return nr(this, t);
  }
  enterUnfinishedNodesBefore(t) {
    let e = this.childBefore(t), r = this;
    for (; e; ) {
      let o = e.lastChild;
      if (!o || o.to != e.to)
        break;
      o.type.isError && o.from == o.to ? (r = e, e = o.prevSibling) : e = o;
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
class pt extends Qo {
  constructor(t, e, r, o) {
    super(), this._tree = t, this.from = e, this.index = r, this._parent = o;
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
  nextChild(t, e, r, o, s = 0) {
    for (let i = this; ; ) {
      for (let { children: c, positions: a } = i._tree, l = e > 0 ? c.length : -1; t != l; t += e) {
        let u = c[t], f = a[t] + i.from;
        if (Yo(o, r, f, f + u.length)) {
          if (u instanceof re) {
            if (s & ot.ExcludeBuffers)
              continue;
            let d = u.findChild(0, u.buffer.length, e, r - f, o);
            if (d > -1)
              return new ee(new Di(i, u, t, f), null, d);
          } else if (s & ot.IncludeAnonymous || !u.type.isAnonymous || yr(u)) {
            let d;
            if (!(s & ot.IgnoreMounts) && (d = pn.get(u)) && !d.overlay)
              return new pt(d.tree, f, t, i);
            let p = new pt(u, f, t, i);
            return s & ot.IncludeAnonymous || !p.type.isAnonymous ? p : p.nextChild(e < 0 ? u.children.length - 1 : 0, e, r, o);
          }
        }
      }
      if (s & ot.IncludeAnonymous || !i.type.isAnonymous || (i.index >= 0 ? t = i.index + e : t = e < 0 ? -1 : i._parent._tree.children.length, i = i._parent, !i))
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
  childAfter(t) {
    return this.nextChild(
      0,
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  enter(t, e, r = 0) {
    let o;
    if (!(r & ot.IgnoreOverlays) && (o = pn.get(this._tree)) && o.overlay) {
      let s = t - this.from;
      for (let { from: i, to: c } of o.overlay)
        if ((e > 0 ? i <= s : i < s) && (e < 0 ? c >= s : c > s))
          return new pt(o.tree, o.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t, e, r);
  }
  nextSignificantParent() {
    let t = this;
    for (; t.type.isAnonymous && t._parent; )
      t = t._parent;
    return t;
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
function Hr(n, t, e, r) {
  let o = n.cursor(), s = [];
  if (!o.firstChild())
    return s;
  if (e != null) {
    for (; !o.type.is(e); )
      if (!o.nextSibling())
        return s;
  }
  for (; ; ) {
    if (r != null && o.type.is(r))
      return s;
    if (o.type.is(t) && s.push(o.node), !o.nextSibling())
      return r == null ? s : [];
  }
}
function nr(n, t, e = t.length - 1) {
  for (let r = n.parent; e >= 0; r = r.parent) {
    if (!r)
      return !1;
    if (!r.type.isAnonymous) {
      if (t[e] && t[e] != r.name)
        return !1;
      e--;
    }
  }
  return !0;
}
class Di {
  constructor(t, e, r, o) {
    this.parent = t, this.buffer = e, this.index = r, this.start = o;
  }
}
class ee extends Qo {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t, e, r) {
    super(), this.context = t, this._parent = e, this.index = r, this.type = t.buffer.set.types[t.buffer.buffer[r]];
  }
  child(t, e, r) {
    let { buffer: o } = this.context, s = o.findChild(this.index + 4, o.buffer[this.index + 3], t, e - this.context.start, r);
    return s < 0 ? null : new ee(this.context, this, s);
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
  childAfter(t) {
    return this.child(
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.child(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  enter(t, e, r = 0) {
    if (r & ot.ExcludeBuffers)
      return null;
    let { buffer: o } = this.context, s = o.findChild(this.index + 4, o.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return s < 0 ? null : new ee(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + t,
      t,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: t } = this.context, e = t.buffer[this.index + 3];
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new ee(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new ee(this.context, this._parent, t.findChild(
      e,
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
    let t = [], e = [], { buffer: r } = this.context, o = this.index + 4, s = r.buffer[this.index + 3];
    if (s > o) {
      let i = r.buffer[this.index + 1];
      t.push(r.slice(o, s, i)), e.push(0);
    }
    return new Lt(this.type, t, e, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Xo(n) {
  if (!n.length)
    return null;
  let t = 0, e = n[0];
  for (let s = 1; s < n.length; s++) {
    let i = n[s];
    (i.from > e.from || i.to < e.to) && (e = i, t = s);
  }
  let r = e instanceof pt && e.index < 0 ? null : e.parent, o = n.slice();
  return r ? o[t] = r : o.splice(t, 1), new Ti(o, e);
}
class Ti {
  constructor(t, e) {
    this.heads = t, this.node = e;
  }
  get next() {
    return Xo(this.heads);
  }
}
function qi(n, t, e) {
  let r = n.resolveInner(t, e), o = null;
  for (let s = r instanceof pt ? r : r.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let i = s.parent;
      (o || (o = [r])).push(i.resolve(t, e)), s = i;
    } else {
      let i = pn.get(s.tree);
      if (i && i.overlay && i.overlay[0].from <= t && i.overlay[i.overlay.length - 1].to >= t) {
        let c = new pt(i.tree, i.overlay[0].from + s.from, -1, s);
        (o || (o = [r])).push($e(c, t, e, !1));
      }
    }
  return o ? Xo(o) : r;
}
class rr {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(t, e = 0) {
    if (this.mode = e, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t instanceof pt)
      this.yieldNode(t);
    else {
      this._tree = t.context.parent, this.buffer = t.context;
      for (let r = t._parent; r; r = r._parent)
        this.stack.unshift(r.index);
      this.bufferNode = t, this.yieldBuf(t.index);
    }
  }
  yieldNode(t) {
    return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, !0) : !1;
  }
  yieldBuf(t, e) {
    this.index = t;
    let { start: r, buffer: o } = this.buffer;
    return this.type = e || o.set.types[o.buffer[t]], this.from = r + o.buffer[t + 1], this.to = r + o.buffer[t + 2], !0;
  }
  /**
  @internal
  */
  yield(t) {
    return t ? t instanceof pt ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : !1;
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
  enterChild(t, e, r) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, r, this.mode));
    let { buffer: o } = this.buffer, s = o.findChild(this.index + 4, o.buffer[this.index + 3], t, e - this.buffer.start, r);
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
  childAfter(t) {
    return this.enterChild(
      1,
      t,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(t) {
    return this.enterChild(
      -1,
      t,
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
  enter(t, e, r = this.mode) {
    return this.buffer ? r & ot.ExcludeBuffers ? !1 : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, r));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & ot.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let t = this.mode & ot.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t);
  }
  /**
  @internal
  */
  sibling(t) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : !1;
    let { buffer: e } = this.buffer, r = this.stack.length - 1;
    if (t < 0) {
      let o = r < 0 ? 0 : this.stack[r] + 4;
      if (this.index != o)
        return this.yieldBuf(e.findChild(
          o,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let o = e.buffer[this.index + 3];
      if (o < (r < 0 ? e.buffer.length : e.buffer[this.stack[r] + 3]))
        return this.yieldBuf(o);
    }
    return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : !1;
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
  atLastNode(t) {
    let e, r, { buffer: o } = this;
    if (o) {
      if (t > 0) {
        if (this.index < o.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (o.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: e, parent: r } = o);
    } else
      ({ index: e, _parent: r } = this._tree);
    for (; r; { index: e, _parent: r } = r)
      if (e > -1)
        for (let s = e + t, i = t < 0 ? -1 : r._tree.children.length; s != i; s += t) {
          let c = r._tree.children[s];
          if (this.mode & ot.IncludeAnonymous || c instanceof re || !c.type.isAnonymous || yr(c))
            return !1;
        }
    return !0;
  }
  move(t, e) {
    if (e && this.enterChild(
      t,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(t))
        return !0;
      if (this.atLastNode(t) || !this.parent())
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
  next(t = !0) {
    return this.move(1, t);
  }
  /**
  Move to the next node in a last-to-first pre-order traveral. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(t = !0) {
    return this.move(-1, t);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(t, e = 0) {
    for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); )
      ;
    for (; this.enterChild(1, t, e); )
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
    let t = this.bufferNode, e = null, r = 0;
    if (t && t.context == this.buffer)
      t:
        for (let o = this.index, s = this.stack.length; s >= 0; ) {
          for (let i = t; i; i = i._parent)
            if (i.index == o) {
              if (o == this.index)
                return i;
              e = i, r = s + 1;
              break t;
            }
          o = this.stack[--s];
        }
    for (let o = r; o < this.stack.length; o++)
      e = new ee(this.buffer, e, this.stack[o]);
    return this.bufferNode = new ee(this.buffer, e, this.index);
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
  iterate(t, e) {
    for (let r = 0; ; ) {
      let o = !1;
      if (this.type.isAnonymous || t(this) !== !1) {
        if (this.firstChild()) {
          r++;
          continue;
        }
        this.type.isAnonymous || (o = !0);
      }
      for (; o && e && e(this), o = this.type.isAnonymous, !this.nextSibling(); ) {
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
  matchContext(t) {
    if (!this.buffer)
      return nr(this.node, t);
    let { buffer: e } = this.buffer, { types: r } = e.set;
    for (let o = t.length - 1, s = this.stack.length - 1; o >= 0; s--) {
      if (s < 0)
        return nr(this.node, t, o);
      let i = r[e.buffer[this.stack[s]]];
      if (!i.isAnonymous) {
        if (t[o] && t[o] != i.name)
          return !1;
        o--;
      }
    }
    return !0;
  }
}
function yr(n) {
  return n.children.some((t) => t instanceof re || !t.type.isAnonymous || yr(t));
}
function Fi(n) {
  var t;
  let { buffer: e, nodeSet: r, maxBufferLength: o = Ai, reused: s = [], minRepeatType: i = r.types.length } = n, c = Array.isArray(e) ? new vr(e, e.length) : e, a = r.types, l = 0, u = 0;
  function f(E, _, v, b, O, S) {
    let { id: L, start: D, end: z, size: y } = c, F = u;
    for (; y < 0; )
      if (c.next(), y == -1) {
        let Q = s[L];
        v.push(Q), b.push(D - E);
        return;
      } else if (y == -3) {
        l = L;
        return;
      } else if (y == -4) {
        u = L;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${y}`);
    let A = a[L], P, Z, Ot = D - E;
    if (z - D <= o && (Z = x(c.pos - _, O))) {
      let Q = new Uint16Array(Z.size - Z.skip), nt = c.pos - Z.size, ht = Q.length;
      for (; c.pos > nt; )
        ht = w(Z.start, Q, ht);
      P = new re(Q, z - Z.start, r), Ot = Z.start - E;
    } else {
      let Q = c.pos - y;
      c.next();
      let nt = [], ht = [], $t = L >= i ? L : -1, Ht = 0, kt = z;
      for (; c.pos > Q; )
        $t >= 0 && c.id == $t && c.size >= 0 ? (c.end <= kt - o && (m(nt, ht, D, Ht, c.end, kt, $t, F), Ht = nt.length, kt = c.end), c.next()) : S > 2500 ? d(D, Q, nt, ht) : f(D, Q, nt, ht, $t, S + 1);
      if ($t >= 0 && Ht > 0 && Ht < nt.length && m(nt, ht, D, Ht, D, kt, $t, F), nt.reverse(), ht.reverse(), $t > -1 && Ht > 0) {
        let We = p(A);
        P = _r(A, nt, ht, 0, nt.length, 0, z - D, We, We);
      } else
        P = g(A, nt, ht, z - D, F - z);
    }
    v.push(P), b.push(Ot);
  }
  function d(E, _, v, b) {
    let O = [], S = 0, L = -1;
    for (; c.pos > _; ) {
      let { id: D, start: z, end: y, size: F } = c;
      if (F > 4)
        c.next();
      else {
        if (L > -1 && z < L)
          break;
        L < 0 && (L = y - o), O.push(D, z, y), S++, c.next();
      }
    }
    if (S) {
      let D = new Uint16Array(S * 4), z = O[O.length - 2];
      for (let y = O.length - 3, F = 0; y >= 0; y -= 3)
        D[F++] = O[y], D[F++] = O[y + 1] - z, D[F++] = O[y + 2] - z, D[F++] = F;
      v.push(new re(D, O[2] - z, r)), b.push(z - E);
    }
  }
  function p(E) {
    return (_, v, b) => {
      let O = 0, S = _.length - 1, L, D;
      if (S >= 0 && (L = _[S]) instanceof Lt) {
        if (!S && L.type == E && L.length == b)
          return L;
        (D = L.prop(K.lookAhead)) && (O = v[S] + L.length + D);
      }
      return g(E, _, v, b, O);
    };
  }
  function m(E, _, v, b, O, S, L, D) {
    let z = [], y = [];
    for (; E.length > b; )
      z.push(E.pop()), y.push(_.pop() + v - O);
    E.push(g(r.types[L], z, y, S - O, D - S)), _.push(O - v);
  }
  function g(E, _, v, b, O = 0, S) {
    if (l) {
      let L = [K.contextHash, l];
      S = S ? [L].concat(S) : [L];
    }
    if (O > 25) {
      let L = [K.lookAhead, O];
      S = S ? [L].concat(S) : [L];
    }
    return new Lt(E, _, v, b, S);
  }
  function x(E, _) {
    let v = c.fork(), b = 0, O = 0, S = 0, L = v.end - o, D = { size: 0, start: 0, skip: 0 };
    t:
      for (let z = v.pos - E; v.pos > z; ) {
        let y = v.size;
        if (v.id == _ && y >= 0) {
          D.size = b, D.start = O, D.skip = S, S += 4, b += 4, v.next();
          continue;
        }
        let F = v.pos - y;
        if (y < 0 || F < z || v.start < L)
          break;
        let A = v.id >= i ? 4 : 0, P = v.start;
        for (v.next(); v.pos > F; ) {
          if (v.size < 0)
            if (v.size == -3)
              A += 4;
            else
              break t;
          else
            v.id >= i && (A += 4);
          v.next();
        }
        O = P, b += y, S += A;
      }
    return (_ < 0 || b == E) && (D.size = b, D.start = O, D.skip = S), D.size > 4 ? D : void 0;
  }
  function w(E, _, v) {
    let { id: b, start: O, end: S, size: L } = c;
    if (c.next(), L >= 0 && b < i) {
      let D = v;
      if (L > 4) {
        let z = c.pos - (L - 4);
        for (; c.pos > z; )
          v = w(E, _, v);
      }
      _[--v] = D, _[--v] = S - E, _[--v] = O - E, _[--v] = b;
    } else
      L == -3 ? l = b : L == -4 && (u = b);
    return v;
  }
  let k = [], C = [];
  for (; c.pos > 0; )
    f(n.start || 0, n.bufferStart || 0, k, C, -1, 0);
  let T = (t = n.length) !== null && t !== void 0 ? t : k.length ? C[0] + k[0].length : 0;
  return new Lt(a[n.topID], k.reverse(), C.reverse(), T);
}
const Vr = /* @__PURE__ */ new WeakMap();
function sn(n, t) {
  if (!n.isAnonymous || t instanceof re || t.type != n)
    return 1;
  let e = Vr.get(t);
  if (e == null) {
    e = 1;
    for (let r of t.children) {
      if (r.type != n || !(r instanceof Lt)) {
        e = 1;
        break;
      }
      e += sn(n, r);
    }
    Vr.set(t, e);
  }
  return e;
}
function _r(n, t, e, r, o, s, i, c, a) {
  let l = 0;
  for (let m = r; m < o; m++)
    l += sn(n, t[m]);
  let u = Math.ceil(
    l * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], d = [];
  function p(m, g, x, w, k) {
    for (let C = x; C < w; ) {
      let T = C, E = g[C], _ = sn(n, m[C]);
      for (C++; C < w; C++) {
        let v = sn(n, m[C]);
        if (_ + v >= u)
          break;
        _ += v;
      }
      if (C == T + 1) {
        if (_ > u) {
          let v = m[T];
          p(v.children, v.positions, 0, v.children.length, g[T] + k);
          continue;
        }
        f.push(m[T]);
      } else {
        let v = g[C - 1] + m[C - 1].length - E;
        f.push(_r(n, m, g, T, C, E, v, null, a));
      }
      d.push(E + k - s);
    }
  }
  return p(t, e, r, o, 0), (c || a)(f, d, i);
}
new K({ perNode: !0 });
let zi = 0;
class Tt {
  /**
  @internal
  */
  constructor(t, e, r) {
    this.set = t, this.base = e, this.modified = r, this.id = zi++;
  }
  /**
  Define a new tag. If `parent` is given, the tag is treated as a
  sub-tag of that parent, and
  [highlighters](#highlight.tagHighlighter) that don't mention
  this tag will try to fall back to the parent tag (or grandparent
  tag, etc).
  */
  static define(t) {
    if (t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let e = new Tt([], null, []);
    if (e.set.push(e), t)
      for (let r of t.set)
        e.set.push(r);
    return e;
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
    let t = new dn();
    return (e) => e.modified.indexOf(t) > -1 ? e : dn.get(e.base || e, e.modified.concat(t).sort((r, o) => r.id - o.id));
  }
}
let Li = 0;
class dn {
  constructor() {
    this.instances = [], this.id = Li++;
  }
  static get(t, e) {
    if (!e.length)
      return t;
    let r = e[0].instances.find((c) => c.base == t && Ri(e, c.modified));
    if (r)
      return r;
    let o = [], s = new Tt(o, t, e);
    for (let c of e)
      c.instances.push(s);
    let i = Ii(e);
    for (let c of t.set)
      if (!c.modified.length)
        for (let a of i)
          o.push(dn.get(c, a));
    return s;
  }
}
function Ri(n, t) {
  return n.length == t.length && n.every((e, r) => e == t[r]);
}
function Ii(n) {
  let t = [[]];
  for (let e = 0; e < n.length; e++)
    for (let r = 0, o = t.length; r < o; r++)
      t.push(t[r].concat(n[e]));
  return t.sort((e, r) => r.length - e.length);
}
new K();
function Oi(n, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let s of n)
    if (!Array.isArray(s.tag))
      e[s.tag.id] = s.class;
    else
      for (let i of s.tag)
        e[i.id] = s.class;
  let { scope: r, all: o = null } = t || {};
  return {
    style: (s) => {
      let i = o;
      for (let c of s)
        for (let a of c.set) {
          let l = e[a.id];
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
const q = Tt.define, Qe = q(), Kt = q(), Gr = q(Kt), Zr = q(Kt), Jt = q(), Xe = q(Jt), Nn = q(Jt), Ct = q(), oe = q(Ct), xt = q(), wt = q(), or = q(), qe = q(or), tn = q(), B = {
  /**
  A comment.
  */
  comment: Qe,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: q(Qe),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: q(Qe),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: q(Qe),
  /**
  Any kind of identifier.
  */
  name: Kt,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: q(Kt),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Gr,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: q(Gr),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Zr,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: q(Zr),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: q(Kt),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: q(Kt),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: q(Kt),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: q(Kt),
  /**
  A literal value.
  */
  literal: Jt,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Xe,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: q(Xe),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: q(Xe),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: q(Xe),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Nn,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: q(Nn),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: q(Nn),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: q(Jt),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: q(Jt),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: q(Jt),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: q(Jt),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: q(Jt),
  /**
  A language keyword.
  */
  keyword: xt,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: q(xt),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: q(xt),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: q(xt),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: q(xt),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: q(xt),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: q(xt),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: q(xt),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: q(xt),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: q(xt),
  /**
  An operator.
  */
  operator: wt,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: q(wt),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: q(wt),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: q(wt),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: q(wt),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: q(wt),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: q(wt),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: q(wt),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: q(wt),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: q(wt),
  /**
  Program or markup punctuation.
  */
  punctuation: or,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: q(or),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: qe,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: q(qe),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: q(qe),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: q(qe),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: q(qe),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Ct,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: oe,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: q(oe),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: q(oe),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: q(oe),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: q(oe),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: q(oe),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: q(oe),
  /**
  A prose separator (such as a horizontal rule).
  */
  contentSeparator: q(Ct),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: q(Ct),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: q(Ct),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: q(Ct),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: q(Ct),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: q(Ct),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: q(Ct),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: q(Ct),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: q(),
  /**
  Deleted text.
  */
  deleted: q(),
  /**
  Changed text.
  */
  changed: q(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: q(),
  /**
  Metadata or meta-instruction.
  */
  meta: tn,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: q(tn),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: q(tn),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: q(tn),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Tt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Tt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Tt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Tt.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Tt.defineModifier(),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Tt.defineModifier()
};
Oi([
  { tag: B.link, class: "tok-link" },
  { tag: B.heading, class: "tok-heading" },
  { tag: B.emphasis, class: "tok-emphasis" },
  { tag: B.strong, class: "tok-strong" },
  { tag: B.keyword, class: "tok-keyword" },
  { tag: B.atom, class: "tok-atom" },
  { tag: B.bool, class: "tok-bool" },
  { tag: B.url, class: "tok-url" },
  { tag: B.labelName, class: "tok-labelName" },
  { tag: B.inserted, class: "tok-inserted" },
  { tag: B.deleted, class: "tok-deleted" },
  { tag: B.literal, class: "tok-literal" },
  { tag: B.string, class: "tok-string" },
  { tag: B.number, class: "tok-number" },
  { tag: [B.regexp, B.escape, B.special(B.string)], class: "tok-string2" },
  { tag: B.variableName, class: "tok-variableName" },
  { tag: B.local(B.variableName), class: "tok-variableName tok-local" },
  { tag: B.definition(B.variableName), class: "tok-variableName tok-definition" },
  { tag: B.special(B.variableName), class: "tok-variableName2" },
  { tag: B.definition(B.propertyName), class: "tok-propertyName tok-definition" },
  { tag: B.typeName, class: "tok-typeName" },
  { tag: B.namespace, class: "tok-namespace" },
  { tag: B.className, class: "tok-className" },
  { tag: B.macroName, class: "tok-macroName" },
  { tag: B.propertyName, class: "tok-propertyName" },
  { tag: B.operator, class: "tok-operator" },
  { tag: B.comment, class: "tok-comment" },
  { tag: B.meta, class: "tok-meta" },
  { tag: B.invalid, class: "tok-invalid" },
  { tag: B.punctuation, class: "tok-punctuation" }
]);
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
var ce = Object.assign || function(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t];
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  }
  return n;
}, en = function(t) {
  return t.tagName === "IMG";
}, $i = function(t) {
  return NodeList.prototype.isPrototypeOf(t);
}, cn = function(t) {
  return t && t.nodeType === 1;
}, Wr = function(t) {
  var e = t.currentSrc || t.src;
  return e.substr(-4).toLowerCase() === ".svg";
}, Kr = function(t) {
  try {
    return Array.isArray(t) ? t.filter(en) : $i(t) ? [].slice.call(t).filter(en) : cn(t) ? [t].filter(en) : typeof t == "string" ? [].slice.call(document.querySelectorAll(t)).filter(en) : [];
  } catch {
    throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
  }
}, Ni = function(t) {
  var e = document.createElement("div");
  return e.classList.add("medium-zoom-overlay"), e.style.background = t, e;
}, Bi = function(t) {
  var e = t.getBoundingClientRect(), r = e.top, o = e.left, s = e.width, i = e.height, c = t.cloneNode(), a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, l = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  return c.removeAttribute("id"), c.style.position = "absolute", c.style.top = r + a + "px", c.style.left = o + l + "px", c.style.width = s + "px", c.style.height = i + "px", c.style.transform = "", c;
}, me = function(t, e) {
  var r = ce({
    bubbles: !1,
    cancelable: !1,
    detail: void 0
  }, e);
  if (typeof window.CustomEvent == "function")
    return new CustomEvent(t, r);
  var o = document.createEvent("CustomEvent");
  return o.initCustomEvent(t, r.bubbles, r.cancelable, r.detail), o;
}, Pi = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = window.Promise || function(D) {
    function z() {
    }
    D(z, z);
  }, o = function(D) {
    var z = D.target;
    if (z === O) {
      m();
      return;
    }
    C.indexOf(z) !== -1 && g({ target: z });
  }, s = function() {
    if (!(E || !b.original)) {
      var D = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      Math.abs(_ - D) > v.scrollOffset && setTimeout(m, 150);
    }
  }, i = function(D) {
    var z = D.key || D.keyCode;
    (z === "Escape" || z === "Esc" || z === 27) && m();
  }, c = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = D;
    if (D.background && (O.style.background = D.background), D.container && D.container instanceof Object && (z.container = ce({}, v.container, D.container)), D.template) {
      var y = cn(D.template) ? D.template : document.querySelector(D.template);
      z.template = y;
    }
    return v = ce({}, v, z), C.forEach(function(F) {
      F.dispatchEvent(me("medium-zoom:update", {
        detail: { zoom: S }
      }));
    }), S;
  }, a = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return n(ce({}, v, D));
  }, l = function() {
    for (var D = arguments.length, z = Array(D), y = 0; y < D; y++)
      z[y] = arguments[y];
    var F = z.reduce(function(A, P) {
      return [].concat(A, Kr(P));
    }, []);
    return F.filter(function(A) {
      return C.indexOf(A) === -1;
    }).forEach(function(A) {
      C.push(A), A.classList.add("medium-zoom-image");
    }), T.forEach(function(A) {
      var P = A.type, Z = A.listener, Ot = A.options;
      F.forEach(function(Q) {
        Q.addEventListener(P, Z, Ot);
      });
    }), S;
  }, u = function() {
    for (var D = arguments.length, z = Array(D), y = 0; y < D; y++)
      z[y] = arguments[y];
    b.zoomed && m();
    var F = z.length > 0 ? z.reduce(function(A, P) {
      return [].concat(A, Kr(P));
    }, []) : C;
    return F.forEach(function(A) {
      A.classList.remove("medium-zoom-image"), A.dispatchEvent(me("medium-zoom:detach", {
        detail: { zoom: S }
      }));
    }), C = C.filter(function(A) {
      return F.indexOf(A) === -1;
    }), S;
  }, f = function(D, z) {
    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return C.forEach(function(F) {
      F.addEventListener("medium-zoom:" + D, z, y);
    }), T.push({ type: "medium-zoom:" + D, listener: z, options: y }), S;
  }, d = function(D, z) {
    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return C.forEach(function(F) {
      F.removeEventListener("medium-zoom:" + D, z, y);
    }), T = T.filter(function(F) {
      return !(F.type === "medium-zoom:" + D && F.listener.toString() === z.toString());
    }), S;
  }, p = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = D.target, y = function() {
      var A = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }, P = void 0, Z = void 0;
      if (v.container)
        if (v.container instanceof Object)
          A = ce({}, A, v.container), P = A.width - A.left - A.right - v.margin * 2, Z = A.height - A.top - A.bottom - v.margin * 2;
        else {
          var Ot = cn(v.container) ? v.container : document.querySelector(v.container), Q = Ot.getBoundingClientRect(), nt = Q.width, ht = Q.height, $t = Q.left, Ht = Q.top;
          A = ce({}, A, {
            width: nt,
            height: ht,
            left: $t,
            top: Ht
          });
        }
      P = P || A.width - v.margin * 2, Z = Z || A.height - v.margin * 2;
      var kt = b.zoomedHd || b.original, We = Wr(kt) ? P : kt.naturalWidth || P, Ws = Wr(kt) ? Z : kt.naturalHeight || Z, Ke = kt.getBoundingClientRect(), Ks = Ke.top, Js = Ke.left, Ln = Ke.width, Rn = Ke.height, Ys = Math.min(Math.max(Ln, We), P) / Ln, Qs = Math.min(Math.max(Rn, Ws), Z) / Rn, In = Math.min(Ys, Qs), Xs = (-Js + (P - Ln) / 2 + v.margin + A.left) / In, ti = (-Ks + (Z - Rn) / 2 + v.margin + A.top) / In, $r = "scale(" + In + ") translate3d(" + Xs + "px, " + ti + "px, 0)";
      b.zoomed.style.transform = $r, b.zoomedHd && (b.zoomedHd.style.transform = $r);
    };
    return new r(function(F) {
      if (z && C.indexOf(z) === -1) {
        F(S);
        return;
      }
      var A = function nt() {
        E = !1, b.zoomed.removeEventListener("transitionend", nt), b.original.dispatchEvent(me("medium-zoom:opened", {
          detail: { zoom: S }
        })), F(S);
      };
      if (b.zoomed) {
        F(S);
        return;
      }
      if (z)
        b.original = z;
      else if (C.length > 0) {
        var P = C;
        b.original = P[0];
      } else {
        F(S);
        return;
      }
      if (b.original.dispatchEvent(me("medium-zoom:open", {
        detail: { zoom: S }
      })), _ = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, E = !0, b.zoomed = Bi(b.original), document.body.appendChild(O), v.template) {
        var Z = cn(v.template) ? v.template : document.querySelector(v.template);
        b.template = document.createElement("div"), b.template.appendChild(Z.content.cloneNode(!0)), document.body.appendChild(b.template);
      }
      if (b.original.parentElement && b.original.parentElement.tagName === "PICTURE" && b.original.currentSrc && (b.zoomed.src = b.original.currentSrc), document.body.appendChild(b.zoomed), window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      }), b.original.classList.add("medium-zoom-image--hidden"), b.zoomed.classList.add("medium-zoom-image--opened"), b.zoomed.addEventListener("click", m), b.zoomed.addEventListener("transitionend", A), b.original.getAttribute("data-zoom-src")) {
        b.zoomedHd = b.zoomed.cloneNode(), b.zoomedHd.removeAttribute("srcset"), b.zoomedHd.removeAttribute("sizes"), b.zoomedHd.removeAttribute("loading"), b.zoomedHd.src = b.zoomed.getAttribute("data-zoom-src"), b.zoomedHd.onerror = function() {
          clearInterval(Ot), console.warn("Unable to reach the zoom image target " + b.zoomedHd.src), b.zoomedHd = null, y();
        };
        var Ot = setInterval(function() {
          b.zoomedHd.complete && (clearInterval(Ot), b.zoomedHd.classList.add("medium-zoom-image--opened"), b.zoomedHd.addEventListener("click", m), document.body.appendChild(b.zoomedHd), y());
        }, 10);
      } else if (b.original.hasAttribute("srcset")) {
        b.zoomedHd = b.zoomed.cloneNode(), b.zoomedHd.removeAttribute("sizes"), b.zoomedHd.removeAttribute("loading");
        var Q = b.zoomedHd.addEventListener("load", function() {
          b.zoomedHd.removeEventListener("load", Q), b.zoomedHd.classList.add("medium-zoom-image--opened"), b.zoomedHd.addEventListener("click", m), document.body.appendChild(b.zoomedHd), y();
        });
      } else
        y();
    });
  }, m = function() {
    return new r(function(D) {
      if (E || !b.original) {
        D(S);
        return;
      }
      var z = function y() {
        b.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(b.zoomed), b.zoomedHd && document.body.removeChild(b.zoomedHd), document.body.removeChild(O), b.zoomed.classList.remove("medium-zoom-image--opened"), b.template && document.body.removeChild(b.template), E = !1, b.zoomed.removeEventListener("transitionend", y), b.original.dispatchEvent(me("medium-zoom:closed", {
          detail: { zoom: S }
        })), b.original = null, b.zoomed = null, b.zoomedHd = null, b.template = null, D(S);
      };
      E = !0, document.body.classList.remove("medium-zoom--opened"), b.zoomed.style.transform = "", b.zoomedHd && (b.zoomedHd.style.transform = ""), b.template && (b.template.style.transition = "opacity 150ms", b.template.style.opacity = 0), b.original.dispatchEvent(me("medium-zoom:close", {
        detail: { zoom: S }
      })), b.zoomed.addEventListener("transitionend", z);
    });
  }, g = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = D.target;
    return b.original ? m() : p({ target: z });
  }, x = function() {
    return v;
  }, w = function() {
    return C;
  }, k = function() {
    return b.original;
  }, C = [], T = [], E = !1, _ = 0, v = e, b = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
    // If the selector is omitted, it's replaced by the options
  };
  Object.prototype.toString.call(t) === "[object Object]" ? v = t : (t || typeof t == "string") && l(t), v = ce({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, v);
  var O = Ni(v.background);
  document.addEventListener("click", o), document.addEventListener("keyup", i), document.addEventListener("scroll", s), window.addEventListener("resize", m);
  var S = {
    open: p,
    close: m,
    toggle: g,
    update: c,
    clone: a,
    attach: l,
    detach: u,
    on: f,
    off: d,
    getOptions: x,
    getImages: w,
    getZoomedImage: k
  };
  return S;
};
function Mi(n, t) {
  t === void 0 && (t = {});
  var e = t.insertAt;
  if (!(!n || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", e === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n));
  }
}
var ji = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
Mi(ji);
const Ui = Pi;
function kr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Hi(n) {
  if (n.__esModule)
    return n;
  var t = n.default;
  if (typeof t == "function") {
    var e = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(e, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), e;
}
var Vi = function() {
  var n = document.getSelection();
  if (!n.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, e = [], r = 0; r < n.rangeCount; r++)
    e.push(n.getRangeAt(r));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
      break;
  }
  return n.removeAllRanges(), function() {
    n.type === "Caret" && n.removeAllRanges(), n.rangeCount || e.forEach(function(o) {
      n.addRange(o);
    }), t && t.focus();
  };
}, Gi = Vi, Jr = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, Zi = "Copy to clipboard: #{key}, Enter";
function Wi(n) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return n.replace(/#{\s*key\s*}/g, t);
}
function Ki(n, t) {
  var e, r, o, s, i, c, a = !1;
  t || (t = {}), e = t.debug || !1;
  try {
    o = Gi(), s = document.createRange(), i = document.getSelection(), c = document.createElement("span"), c.textContent = n, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", function(u) {
      if (u.stopPropagation(), t.format)
        if (u.preventDefault(), typeof u.clipboardData > "u") {
          e && console.warn("unable to use e.clipboardData"), e && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var f = Jr[t.format] || Jr.default;
          window.clipboardData.setData(f, n);
        } else
          u.clipboardData.clearData(), u.clipboardData.setData(t.format, n);
      t.onCopy && (u.preventDefault(), t.onCopy(u.clipboardData));
    }), document.body.appendChild(c), s.selectNodeContents(c), i.addRange(s);
    var l = document.execCommand("copy");
    if (!l)
      throw new Error("copy command was unsuccessful");
    a = !0;
  } catch (u) {
    e && console.error("unable to copy using execCommand: ", u), e && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", n), t.onCopy && t.onCopy(window.clipboardData), a = !0;
    } catch (f) {
      e && console.error("unable to copy using clipboardData: ", f), e && console.error("falling back to prompt"), r = Wi("message" in t ? t.message : Zi), window.prompt(r, n);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(s) : i.removeAllRanges()), c && document.body.removeChild(c), o();
  }
  return a;
}
var Ji = Ki;
const Yi = /* @__PURE__ */ kr(Ji);
var M = {};
const Qi = "Á", Xi = "á", tc = "Ă", ec = "ă", nc = "∾", rc = "∿", oc = "∾̳", sc = "Â", ic = "â", cc = "´", ac = "А", lc = "а", uc = "Æ", hc = "æ", fc = "⁡", pc = "𝔄", dc = "𝔞", gc = "À", mc = "à", bc = "ℵ", vc = "ℵ", yc = "Α", _c = "α", kc = "Ā", xc = "ā", wc = "⨿", Cc = "&", Ac = "&", Ec = "⩕", Sc = "⩓", Dc = "∧", Tc = "⩜", qc = "⩘", Fc = "⩚", zc = "∠", Lc = "⦤", Rc = "∠", Ic = "⦨", Oc = "⦩", $c = "⦪", Nc = "⦫", Bc = "⦬", Pc = "⦭", Mc = "⦮", jc = "⦯", Uc = "∡", Hc = "∟", Vc = "⊾", Gc = "⦝", Zc = "∢", Wc = "Å", Kc = "⍼", Jc = "Ą", Yc = "ą", Qc = "𝔸", Xc = "𝕒", ta = "⩯", ea = "≈", na = "⩰", ra = "≊", oa = "≋", sa = "'", ia = "⁡", ca = "≈", aa = "≊", la = "Å", ua = "å", ha = "𝒜", fa = "𝒶", pa = "≔", da = "*", ga = "≈", ma = "≍", ba = "Ã", va = "ã", ya = "Ä", _a = "ä", ka = "∳", xa = "⨑", wa = "≌", Ca = "϶", Aa = "‵", Ea = "∽", Sa = "⋍", Da = "∖", Ta = "⫧", qa = "⊽", Fa = "⌅", za = "⌆", La = "⌅", Ra = "⎵", Ia = "⎶", Oa = "≌", $a = "Б", Na = "б", Ba = "„", Pa = "∵", Ma = "∵", ja = "∵", Ua = "⦰", Ha = "϶", Va = "ℬ", Ga = "ℬ", Za = "Β", Wa = "β", Ka = "ℶ", Ja = "≬", Ya = "𝔅", Qa = "𝔟", Xa = "⋂", tl = "◯", el = "⋃", nl = "⨀", rl = "⨁", ol = "⨂", sl = "⨆", il = "★", cl = "▽", al = "△", ll = "⨄", ul = "⋁", hl = "⋀", fl = "⤍", pl = "⧫", dl = "▪", gl = "▴", ml = "▾", bl = "◂", vl = "▸", yl = "␣", _l = "▒", kl = "░", xl = "▓", wl = "█", Cl = "=⃥", Al = "≡⃥", El = "⫭", Sl = "⌐", Dl = "𝔹", Tl = "𝕓", ql = "⊥", Fl = "⊥", zl = "⋈", Ll = "⧉", Rl = "┐", Il = "╕", Ol = "╖", $l = "╗", Nl = "┌", Bl = "╒", Pl = "╓", Ml = "╔", jl = "─", Ul = "═", Hl = "┬", Vl = "╤", Gl = "╥", Zl = "╦", Wl = "┴", Kl = "╧", Jl = "╨", Yl = "╩", Ql = "⊟", Xl = "⊞", tu = "⊠", eu = "┘", nu = "╛", ru = "╜", ou = "╝", su = "└", iu = "╘", cu = "╙", au = "╚", lu = "│", uu = "║", hu = "┼", fu = "╪", pu = "╫", du = "╬", gu = "┤", mu = "╡", bu = "╢", vu = "╣", yu = "├", _u = "╞", ku = "╟", xu = "╠", wu = "‵", Cu = "˘", Au = "˘", Eu = "¦", Su = "𝒷", Du = "ℬ", Tu = "⁏", qu = "∽", Fu = "⋍", zu = "⧅", Lu = "\\", Ru = "⟈", Iu = "•", Ou = "•", $u = "≎", Nu = "⪮", Bu = "≏", Pu = "≎", Mu = "≏", ju = "Ć", Uu = "ć", Hu = "⩄", Vu = "⩉", Gu = "⩋", Zu = "∩", Wu = "⋒", Ku = "⩇", Ju = "⩀", Yu = "ⅅ", Qu = "∩︀", Xu = "⁁", th = "ˇ", eh = "ℭ", nh = "⩍", rh = "Č", oh = "č", sh = "Ç", ih = "ç", ch = "Ĉ", ah = "ĉ", lh = "∰", uh = "⩌", hh = "⩐", fh = "Ċ", ph = "ċ", dh = "¸", gh = "¸", mh = "⦲", bh = "¢", vh = "·", yh = "·", _h = "𝔠", kh = "ℭ", xh = "Ч", wh = "ч", Ch = "✓", Ah = "✓", Eh = "Χ", Sh = "χ", Dh = "ˆ", Th = "≗", qh = "↺", Fh = "↻", zh = "⊛", Lh = "⊚", Rh = "⊝", Ih = "⊙", Oh = "®", $h = "Ⓢ", Nh = "⊖", Bh = "⊕", Ph = "⊗", Mh = "○", jh = "⧃", Uh = "≗", Hh = "⨐", Vh = "⫯", Gh = "⧂", Zh = "∲", Wh = "”", Kh = "’", Jh = "♣", Yh = "♣", Qh = ":", Xh = "∷", tf = "⩴", ef = "≔", nf = "≔", rf = ",", of = "@", sf = "∁", cf = "∘", af = "∁", lf = "ℂ", uf = "≅", hf = "⩭", ff = "≡", pf = "∮", df = "∯", gf = "∮", mf = "𝕔", bf = "ℂ", vf = "∐", yf = "∐", _f = "©", kf = "©", xf = "℗", wf = "∳", Cf = "↵", Af = "✗", Ef = "⨯", Sf = "𝒞", Df = "𝒸", Tf = "⫏", qf = "⫑", Ff = "⫐", zf = "⫒", Lf = "⋯", Rf = "⤸", If = "⤵", Of = "⋞", $f = "⋟", Nf = "↶", Bf = "⤽", Pf = "⩈", Mf = "⩆", jf = "≍", Uf = "∪", Hf = "⋓", Vf = "⩊", Gf = "⊍", Zf = "⩅", Wf = "∪︀", Kf = "↷", Jf = "⤼", Yf = "⋞", Qf = "⋟", Xf = "⋎", tp = "⋏", ep = "¤", np = "↶", rp = "↷", op = "⋎", sp = "⋏", ip = "∲", cp = "∱", ap = "⌭", lp = "†", up = "‡", hp = "ℸ", fp = "↓", pp = "↡", dp = "⇓", gp = "‐", mp = "⫤", bp = "⊣", vp = "⤏", yp = "˝", _p = "Ď", kp = "ď", xp = "Д", wp = "д", Cp = "‡", Ap = "⇊", Ep = "ⅅ", Sp = "ⅆ", Dp = "⤑", Tp = "⩷", qp = "°", Fp = "∇", zp = "Δ", Lp = "δ", Rp = "⦱", Ip = "⥿", Op = "𝔇", $p = "𝔡", Np = "⥥", Bp = "⇃", Pp = "⇂", Mp = "´", jp = "˙", Up = "˝", Hp = "`", Vp = "˜", Gp = "⋄", Zp = "⋄", Wp = "⋄", Kp = "♦", Jp = "♦", Yp = "¨", Qp = "ⅆ", Xp = "ϝ", td = "⋲", ed = "÷", nd = "÷", rd = "⋇", od = "⋇", sd = "Ђ", id = "ђ", cd = "⌞", ad = "⌍", ld = "$", ud = "𝔻", hd = "𝕕", fd = "¨", pd = "˙", dd = "⃜", gd = "≐", md = "≑", bd = "≐", vd = "∸", yd = "∔", _d = "⊡", kd = "⌆", xd = "∯", wd = "¨", Cd = "⇓", Ad = "⇐", Ed = "⇔", Sd = "⫤", Dd = "⟸", Td = "⟺", qd = "⟹", Fd = "⇒", zd = "⊨", Ld = "⇑", Rd = "⇕", Id = "∥", Od = "⤓", $d = "↓", Nd = "↓", Bd = "⇓", Pd = "⇵", Md = "̑", jd = "⇊", Ud = "⇃", Hd = "⇂", Vd = "⥐", Gd = "⥞", Zd = "⥖", Wd = "↽", Kd = "⥟", Jd = "⥗", Yd = "⇁", Qd = "↧", Xd = "⊤", tg = "⤐", eg = "⌟", ng = "⌌", rg = "𝒟", og = "𝒹", sg = "Ѕ", ig = "ѕ", cg = "⧶", ag = "Đ", lg = "đ", ug = "⋱", hg = "▿", fg = "▾", pg = "⇵", dg = "⥯", gg = "⦦", mg = "Џ", bg = "џ", vg = "⟿", yg = "É", _g = "é", kg = "⩮", xg = "Ě", wg = "ě", Cg = "Ê", Ag = "ê", Eg = "≖", Sg = "≕", Dg = "Э", Tg = "э", qg = "⩷", Fg = "Ė", zg = "ė", Lg = "≑", Rg = "ⅇ", Ig = "≒", Og = "𝔈", $g = "𝔢", Ng = "⪚", Bg = "È", Pg = "è", Mg = "⪖", jg = "⪘", Ug = "⪙", Hg = "∈", Vg = "⏧", Gg = "ℓ", Zg = "⪕", Wg = "⪗", Kg = "Ē", Jg = "ē", Yg = "∅", Qg = "∅", Xg = "◻", tm = "∅", em = "▫", nm = " ", rm = " ", om = " ", sm = "Ŋ", im = "ŋ", cm = " ", am = "Ę", lm = "ę", um = "𝔼", hm = "𝕖", fm = "⋕", pm = "⧣", dm = "⩱", gm = "ε", mm = "Ε", bm = "ε", vm = "ϵ", ym = "≖", _m = "≕", km = "≂", xm = "⪖", wm = "⪕", Cm = "⩵", Am = "=", Em = "≂", Sm = "≟", Dm = "⇌", Tm = "≡", qm = "⩸", Fm = "⧥", zm = "⥱", Lm = "≓", Rm = "ℯ", Im = "ℰ", Om = "≐", $m = "⩳", Nm = "≂", Bm = "Η", Pm = "η", Mm = "Ð", jm = "ð", Um = "Ë", Hm = "ë", Vm = "€", Gm = "!", Zm = "∃", Wm = "∃", Km = "ℰ", Jm = "ⅇ", Ym = "ⅇ", Qm = "≒", Xm = "Ф", t0 = "ф", e0 = "♀", n0 = "ﬃ", r0 = "ﬀ", o0 = "ﬄ", s0 = "𝔉", i0 = "𝔣", c0 = "ﬁ", a0 = "◼", l0 = "▪", u0 = "fj", h0 = "♭", f0 = "ﬂ", p0 = "▱", d0 = "ƒ", g0 = "𝔽", m0 = "𝕗", b0 = "∀", v0 = "∀", y0 = "⋔", _0 = "⫙", k0 = "ℱ", x0 = "⨍", w0 = "½", C0 = "⅓", A0 = "¼", E0 = "⅕", S0 = "⅙", D0 = "⅛", T0 = "⅔", q0 = "⅖", F0 = "¾", z0 = "⅗", L0 = "⅜", R0 = "⅘", I0 = "⅚", O0 = "⅝", $0 = "⅞", N0 = "⁄", B0 = "⌢", P0 = "𝒻", M0 = "ℱ", j0 = "ǵ", U0 = "Γ", H0 = "γ", V0 = "Ϝ", G0 = "ϝ", Z0 = "⪆", W0 = "Ğ", K0 = "ğ", J0 = "Ģ", Y0 = "Ĝ", Q0 = "ĝ", X0 = "Г", tb = "г", eb = "Ġ", nb = "ġ", rb = "≥", ob = "≧", sb = "⪌", ib = "⋛", cb = "≥", ab = "≧", lb = "⩾", ub = "⪩", hb = "⩾", fb = "⪀", pb = "⪂", db = "⪄", gb = "⋛︀", mb = "⪔", bb = "𝔊", vb = "𝔤", yb = "≫", _b = "⋙", kb = "⋙", xb = "ℷ", wb = "Ѓ", Cb = "ѓ", Ab = "⪥", Eb = "≷", Sb = "⪒", Db = "⪤", Tb = "⪊", qb = "⪊", Fb = "⪈", zb = "≩", Lb = "⪈", Rb = "≩", Ib = "⋧", Ob = "𝔾", $b = "𝕘", Nb = "`", Bb = "≥", Pb = "⋛", Mb = "≧", jb = "⪢", Ub = "≷", Hb = "⩾", Vb = "≳", Gb = "𝒢", Zb = "ℊ", Wb = "≳", Kb = "⪎", Jb = "⪐", Yb = "⪧", Qb = "⩺", Xb = ">", tv = ">", ev = "≫", nv = "⋗", rv = "⦕", ov = "⩼", sv = "⪆", iv = "⥸", cv = "⋗", av = "⋛", lv = "⪌", uv = "≷", hv = "≳", fv = "≩︀", pv = "≩︀", dv = "ˇ", gv = " ", mv = "½", bv = "ℋ", vv = "Ъ", yv = "ъ", _v = "⥈", kv = "↔", xv = "⇔", wv = "↭", Cv = "^", Av = "ℏ", Ev = "Ĥ", Sv = "ĥ", Dv = "♥", Tv = "♥", qv = "…", Fv = "⊹", zv = "𝔥", Lv = "ℌ", Rv = "ℋ", Iv = "⤥", Ov = "⤦", $v = "⇿", Nv = "∻", Bv = "↩", Pv = "↪", Mv = "𝕙", jv = "ℍ", Uv = "―", Hv = "─", Vv = "𝒽", Gv = "ℋ", Zv = "ℏ", Wv = "Ħ", Kv = "ħ", Jv = "≎", Yv = "≏", Qv = "⁃", Xv = "‐", ty = "Í", ey = "í", ny = "⁣", ry = "Î", oy = "î", sy = "И", iy = "и", cy = "İ", ay = "Е", ly = "е", uy = "¡", hy = "⇔", fy = "𝔦", py = "ℑ", dy = "Ì", gy = "ì", my = "ⅈ", by = "⨌", vy = "∭", yy = "⧜", _y = "℩", ky = "Ĳ", xy = "ĳ", wy = "Ī", Cy = "ī", Ay = "ℑ", Ey = "ⅈ", Sy = "ℐ", Dy = "ℑ", Ty = "ı", qy = "ℑ", Fy = "⊷", zy = "Ƶ", Ly = "⇒", Ry = "℅", Iy = "∞", Oy = "⧝", $y = "ı", Ny = "⊺", By = "∫", Py = "∬", My = "ℤ", jy = "∫", Uy = "⊺", Hy = "⋂", Vy = "⨗", Gy = "⨼", Zy = "⁣", Wy = "⁢", Ky = "Ё", Jy = "ё", Yy = "Į", Qy = "į", Xy = "𝕀", t_ = "𝕚", e_ = "Ι", n_ = "ι", r_ = "⨼", o_ = "¿", s_ = "𝒾", i_ = "ℐ", c_ = "∈", a_ = "⋵", l_ = "⋹", u_ = "⋴", h_ = "⋳", f_ = "∈", p_ = "⁢", d_ = "Ĩ", g_ = "ĩ", m_ = "І", b_ = "і", v_ = "Ï", y_ = "ï", __ = "Ĵ", k_ = "ĵ", x_ = "Й", w_ = "й", C_ = "𝔍", A_ = "𝔧", E_ = "ȷ", S_ = "𝕁", D_ = "𝕛", T_ = "𝒥", q_ = "𝒿", F_ = "Ј", z_ = "ј", L_ = "Є", R_ = "є", I_ = "Κ", O_ = "κ", $_ = "ϰ", N_ = "Ķ", B_ = "ķ", P_ = "К", M_ = "к", j_ = "𝔎", U_ = "𝔨", H_ = "ĸ", V_ = "Х", G_ = "х", Z_ = "Ќ", W_ = "ќ", K_ = "𝕂", J_ = "𝕜", Y_ = "𝒦", Q_ = "𝓀", X_ = "⇚", tk = "Ĺ", ek = "ĺ", nk = "⦴", rk = "ℒ", ok = "Λ", sk = "λ", ik = "⟨", ck = "⟪", ak = "⦑", lk = "⟨", uk = "⪅", hk = "ℒ", fk = "«", pk = "⇤", dk = "⤟", gk = "←", mk = "↞", bk = "⇐", vk = "⤝", yk = "↩", _k = "↫", kk = "⤹", xk = "⥳", wk = "↢", Ck = "⤙", Ak = "⤛", Ek = "⪫", Sk = "⪭", Dk = "⪭︀", Tk = "⤌", qk = "⤎", Fk = "❲", zk = "{", Lk = "[", Rk = "⦋", Ik = "⦏", Ok = "⦍", $k = "Ľ", Nk = "ľ", Bk = "Ļ", Pk = "ļ", Mk = "⌈", jk = "{", Uk = "Л", Hk = "л", Vk = "⤶", Gk = "“", Zk = "„", Wk = "⥧", Kk = "⥋", Jk = "↲", Yk = "≤", Qk = "≦", Xk = "⟨", tx = "⇤", ex = "←", nx = "←", rx = "⇐", ox = "⇆", sx = "↢", ix = "⌈", cx = "⟦", ax = "⥡", lx = "⥙", ux = "⇃", hx = "⌊", fx = "↽", px = "↼", dx = "⇇", gx = "↔", mx = "↔", bx = "⇔", vx = "⇆", yx = "⇋", _x = "↭", kx = "⥎", xx = "↤", wx = "⊣", Cx = "⥚", Ax = "⋋", Ex = "⧏", Sx = "⊲", Dx = "⊴", Tx = "⥑", qx = "⥠", Fx = "⥘", zx = "↿", Lx = "⥒", Rx = "↼", Ix = "⪋", Ox = "⋚", $x = "≤", Nx = "≦", Bx = "⩽", Px = "⪨", Mx = "⩽", jx = "⩿", Ux = "⪁", Hx = "⪃", Vx = "⋚︀", Gx = "⪓", Zx = "⪅", Wx = "⋖", Kx = "⋚", Jx = "⪋", Yx = "⋚", Qx = "≦", Xx = "≶", tw = "≶", ew = "⪡", nw = "≲", rw = "⩽", ow = "≲", sw = "⥼", iw = "⌊", cw = "𝔏", aw = "𝔩", lw = "≶", uw = "⪑", hw = "⥢", fw = "↽", pw = "↼", dw = "⥪", gw = "▄", mw = "Љ", bw = "љ", vw = "⇇", yw = "≪", _w = "⋘", kw = "⌞", xw = "⇚", ww = "⥫", Cw = "◺", Aw = "Ŀ", Ew = "ŀ", Sw = "⎰", Dw = "⎰", Tw = "⪉", qw = "⪉", Fw = "⪇", zw = "≨", Lw = "⪇", Rw = "≨", Iw = "⋦", Ow = "⟬", $w = "⇽", Nw = "⟦", Bw = "⟵", Pw = "⟵", Mw = "⟸", jw = "⟷", Uw = "⟷", Hw = "⟺", Vw = "⟼", Gw = "⟶", Zw = "⟶", Ww = "⟹", Kw = "↫", Jw = "↬", Yw = "⦅", Qw = "𝕃", Xw = "𝕝", t1 = "⨭", e1 = "⨴", n1 = "∗", r1 = "_", o1 = "↙", s1 = "↘", i1 = "◊", c1 = "◊", a1 = "⧫", l1 = "(", u1 = "⦓", h1 = "⇆", f1 = "⌟", p1 = "⇋", d1 = "⥭", g1 = "‎", m1 = "⊿", b1 = "‹", v1 = "𝓁", y1 = "ℒ", _1 = "↰", k1 = "↰", x1 = "≲", w1 = "⪍", C1 = "⪏", A1 = "[", E1 = "‘", S1 = "‚", D1 = "Ł", T1 = "ł", q1 = "⪦", F1 = "⩹", z1 = "<", L1 = "<", R1 = "≪", I1 = "⋖", O1 = "⋋", $1 = "⋉", N1 = "⥶", B1 = "⩻", P1 = "◃", M1 = "⊴", j1 = "◂", U1 = "⦖", H1 = "⥊", V1 = "⥦", G1 = "≨︀", Z1 = "≨︀", W1 = "¯", K1 = "♂", J1 = "✠", Y1 = "✠", Q1 = "↦", X1 = "↦", tC = "↧", eC = "↤", nC = "↥", rC = "▮", oC = "⨩", sC = "М", iC = "м", cC = "—", aC = "∺", lC = "∡", uC = " ", hC = "ℳ", fC = "𝔐", pC = "𝔪", dC = "℧", gC = "µ", mC = "*", bC = "⫰", vC = "∣", yC = "·", _C = "⊟", kC = "−", xC = "∸", wC = "⨪", CC = "∓", AC = "⫛", EC = "…", SC = "∓", DC = "⊧", TC = "𝕄", qC = "𝕞", FC = "∓", zC = "𝓂", LC = "ℳ", RC = "∾", IC = "Μ", OC = "μ", $C = "⊸", NC = "⊸", BC = "∇", PC = "Ń", MC = "ń", jC = "∠⃒", UC = "≉", HC = "⩰̸", VC = "≋̸", GC = "ŉ", ZC = "≉", WC = "♮", KC = "ℕ", JC = "♮", YC = " ", QC = "≎̸", XC = "≏̸", tA = "⩃", eA = "Ň", nA = "ň", rA = "Ņ", oA = "ņ", sA = "≇", iA = "⩭̸", cA = "⩂", aA = "Н", lA = "н", uA = "–", hA = "⤤", fA = "↗", pA = "⇗", dA = "↗", gA = "≠", mA = "≐̸", bA = "​", vA = "​", yA = "​", _A = "​", kA = "≢", xA = "⤨", wA = "≂̸", CA = "≫", AA = "≪", EA = `
`, SA = "∄", DA = "∄", TA = "𝔑", qA = "𝔫", FA = "≧̸", zA = "≱", LA = "≱", RA = "≧̸", IA = "⩾̸", OA = "⩾̸", $A = "⋙̸", NA = "≵", BA = "≫⃒", PA = "≯", MA = "≯", jA = "≫̸", UA = "↮", HA = "⇎", VA = "⫲", GA = "∋", ZA = "⋼", WA = "⋺", KA = "∋", JA = "Њ", YA = "њ", QA = "↚", XA = "⇍", tE = "‥", eE = "≦̸", nE = "≰", rE = "↚", oE = "⇍", sE = "↮", iE = "⇎", cE = "≰", aE = "≦̸", lE = "⩽̸", uE = "⩽̸", hE = "≮", fE = "⋘̸", pE = "≴", dE = "≪⃒", gE = "≮", mE = "⋪", bE = "⋬", vE = "≪̸", yE = "∤", _E = "⁠", kE = " ", xE = "𝕟", wE = "ℕ", CE = "⫬", AE = "¬", EE = "≢", SE = "≭", DE = "∦", TE = "∉", qE = "≠", FE = "≂̸", zE = "∄", LE = "≯", RE = "≱", IE = "≧̸", OE = "≫̸", $E = "≹", NE = "⩾̸", BE = "≵", PE = "≎̸", ME = "≏̸", jE = "∉", UE = "⋵̸", HE = "⋹̸", VE = "∉", GE = "⋷", ZE = "⋶", WE = "⧏̸", KE = "⋪", JE = "⋬", YE = "≮", QE = "≰", XE = "≸", tS = "≪̸", eS = "⩽̸", nS = "≴", rS = "⪢̸", oS = "⪡̸", sS = "∌", iS = "∌", cS = "⋾", aS = "⋽", lS = "⊀", uS = "⪯̸", hS = "⋠", fS = "∌", pS = "⧐̸", dS = "⋫", gS = "⋭", mS = "⊏̸", bS = "⋢", vS = "⊐̸", yS = "⋣", _S = "⊂⃒", kS = "⊈", xS = "⊁", wS = "⪰̸", CS = "⋡", AS = "≿̸", ES = "⊃⃒", SS = "⊉", DS = "≁", TS = "≄", qS = "≇", FS = "≉", zS = "∤", LS = "∦", RS = "∦", IS = "⫽⃥", OS = "∂̸", $S = "⨔", NS = "⊀", BS = "⋠", PS = "⊀", MS = "⪯̸", jS = "⪯̸", US = "⤳̸", HS = "↛", VS = "⇏", GS = "↝̸", ZS = "↛", WS = "⇏", KS = "⋫", JS = "⋭", YS = "⊁", QS = "⋡", XS = "⪰̸", tD = "𝒩", eD = "𝓃", nD = "∤", rD = "∦", oD = "≁", sD = "≄", iD = "≄", cD = "∤", aD = "∦", lD = "⋢", uD = "⋣", hD = "⊄", fD = "⫅̸", pD = "⊈", dD = "⊂⃒", gD = "⊈", mD = "⫅̸", bD = "⊁", vD = "⪰̸", yD = "⊅", _D = "⫆̸", kD = "⊉", xD = "⊃⃒", wD = "⊉", CD = "⫆̸", AD = "≹", ED = "Ñ", SD = "ñ", DD = "≸", TD = "⋪", qD = "⋬", FD = "⋫", zD = "⋭", LD = "Ν", RD = "ν", ID = "#", OD = "№", $D = " ", ND = "≍⃒", BD = "⊬", PD = "⊭", MD = "⊮", jD = "⊯", UD = "≥⃒", HD = ">⃒", VD = "⤄", GD = "⧞", ZD = "⤂", WD = "≤⃒", KD = "<⃒", JD = "⊴⃒", YD = "⤃", QD = "⊵⃒", XD = "∼⃒", tT = "⤣", eT = "↖", nT = "⇖", rT = "↖", oT = "⤧", sT = "Ó", iT = "ó", cT = "⊛", aT = "Ô", lT = "ô", uT = "⊚", hT = "О", fT = "о", pT = "⊝", dT = "Ő", gT = "ő", mT = "⨸", bT = "⊙", vT = "⦼", yT = "Œ", _T = "œ", kT = "⦿", xT = "𝔒", wT = "𝔬", CT = "˛", AT = "Ò", ET = "ò", ST = "⧁", DT = "⦵", TT = "Ω", qT = "∮", FT = "↺", zT = "⦾", LT = "⦻", RT = "‾", IT = "⧀", OT = "Ō", $T = "ō", NT = "Ω", BT = "ω", PT = "Ο", MT = "ο", jT = "⦶", UT = "⊖", HT = "𝕆", VT = "𝕠", GT = "⦷", ZT = "“", WT = "‘", KT = "⦹", JT = "⊕", YT = "↻", QT = "⩔", XT = "∨", tq = "⩝", eq = "ℴ", nq = "ℴ", rq = "ª", oq = "º", sq = "⊶", iq = "⩖", cq = "⩗", aq = "⩛", lq = "Ⓢ", uq = "𝒪", hq = "ℴ", fq = "Ø", pq = "ø", dq = "⊘", gq = "Õ", mq = "õ", bq = "⨶", vq = "⨷", yq = "⊗", _q = "Ö", kq = "ö", xq = "⌽", wq = "‾", Cq = "⏞", Aq = "⎴", Eq = "⏜", Sq = "¶", Dq = "∥", Tq = "∥", qq = "⫳", Fq = "⫽", zq = "∂", Lq = "∂", Rq = "П", Iq = "п", Oq = "%", $q = ".", Nq = "‰", Bq = "⊥", Pq = "‱", Mq = "𝔓", jq = "𝔭", Uq = "Φ", Hq = "φ", Vq = "ϕ", Gq = "ℳ", Zq = "☎", Wq = "Π", Kq = "π", Jq = "⋔", Yq = "ϖ", Qq = "ℏ", Xq = "ℎ", tF = "ℏ", eF = "⨣", nF = "⊞", rF = "⨢", oF = "+", sF = "∔", iF = "⨥", cF = "⩲", aF = "±", lF = "±", uF = "⨦", hF = "⨧", fF = "±", pF = "ℌ", dF = "⨕", gF = "𝕡", mF = "ℙ", bF = "£", vF = "⪷", yF = "⪻", _F = "≺", kF = "≼", xF = "⪷", wF = "≺", CF = "≼", AF = "≺", EF = "⪯", SF = "≼", DF = "≾", TF = "⪯", qF = "⪹", FF = "⪵", zF = "⋨", LF = "⪯", RF = "⪳", IF = "≾", OF = "′", $F = "″", NF = "ℙ", BF = "⪹", PF = "⪵", MF = "⋨", jF = "∏", UF = "∏", HF = "⌮", VF = "⌒", GF = "⌓", ZF = "∝", WF = "∝", KF = "∷", JF = "∝", YF = "≾", QF = "⊰", XF = "𝒫", tz = "𝓅", ez = "Ψ", nz = "ψ", rz = " ", oz = "𝔔", sz = "𝔮", iz = "⨌", cz = "𝕢", az = "ℚ", lz = "⁗", uz = "𝒬", hz = "𝓆", fz = "ℍ", pz = "⨖", dz = "?", gz = "≟", mz = '"', bz = '"', vz = "⇛", yz = "∽̱", _z = "Ŕ", kz = "ŕ", xz = "√", wz = "⦳", Cz = "⟩", Az = "⟫", Ez = "⦒", Sz = "⦥", Dz = "⟩", Tz = "»", qz = "⥵", Fz = "⇥", zz = "⤠", Lz = "⤳", Rz = "→", Iz = "↠", Oz = "⇒", $z = "⤞", Nz = "↪", Bz = "↬", Pz = "⥅", Mz = "⥴", jz = "⤖", Uz = "↣", Hz = "↝", Vz = "⤚", Gz = "⤜", Zz = "∶", Wz = "ℚ", Kz = "⤍", Jz = "⤏", Yz = "⤐", Qz = "❳", Xz = "}", tL = "]", eL = "⦌", nL = "⦎", rL = "⦐", oL = "Ř", sL = "ř", iL = "Ŗ", cL = "ŗ", aL = "⌉", lL = "}", uL = "Р", hL = "р", fL = "⤷", pL = "⥩", dL = "”", gL = "”", mL = "↳", bL = "ℜ", vL = "ℛ", yL = "ℜ", _L = "ℝ", kL = "ℜ", xL = "▭", wL = "®", CL = "®", AL = "∋", EL = "⇋", SL = "⥯", DL = "⥽", TL = "⌋", qL = "𝔯", FL = "ℜ", zL = "⥤", LL = "⇁", RL = "⇀", IL = "⥬", OL = "Ρ", $L = "ρ", NL = "ϱ", BL = "⟩", PL = "⇥", ML = "→", jL = "→", UL = "⇒", HL = "⇄", VL = "↣", GL = "⌉", ZL = "⟧", WL = "⥝", KL = "⥕", JL = "⇂", YL = "⌋", QL = "⇁", XL = "⇀", t2 = "⇄", e2 = "⇌", n2 = "⇉", r2 = "↝", o2 = "↦", s2 = "⊢", i2 = "⥛", c2 = "⋌", a2 = "⧐", l2 = "⊳", u2 = "⊵", h2 = "⥏", f2 = "⥜", p2 = "⥔", d2 = "↾", g2 = "⥓", m2 = "⇀", b2 = "˚", v2 = "≓", y2 = "⇄", _2 = "⇌", k2 = "‏", x2 = "⎱", w2 = "⎱", C2 = "⫮", A2 = "⟭", E2 = "⇾", S2 = "⟧", D2 = "⦆", T2 = "𝕣", q2 = "ℝ", F2 = "⨮", z2 = "⨵", L2 = "⥰", R2 = ")", I2 = "⦔", O2 = "⨒", $2 = "⇉", N2 = "⇛", B2 = "›", P2 = "𝓇", M2 = "ℛ", j2 = "↱", U2 = "↱", H2 = "]", V2 = "’", G2 = "’", Z2 = "⋌", W2 = "⋊", K2 = "▹", J2 = "⊵", Y2 = "▸", Q2 = "⧎", X2 = "⧴", tR = "⥨", eR = "℞", nR = "Ś", rR = "ś", oR = "‚", sR = "⪸", iR = "Š", cR = "š", aR = "⪼", lR = "≻", uR = "≽", hR = "⪰", fR = "⪴", pR = "Ş", dR = "ş", gR = "Ŝ", mR = "ŝ", bR = "⪺", vR = "⪶", yR = "⋩", _R = "⨓", kR = "≿", xR = "С", wR = "с", CR = "⊡", AR = "⋅", ER = "⩦", SR = "⤥", DR = "↘", TR = "⇘", qR = "↘", FR = "§", zR = ";", LR = "⤩", RR = "∖", IR = "∖", OR = "✶", $R = "𝔖", NR = "𝔰", BR = "⌢", PR = "♯", MR = "Щ", jR = "щ", UR = "Ш", HR = "ш", VR = "↓", GR = "←", ZR = "∣", WR = "∥", KR = "→", JR = "↑", YR = "­", QR = "Σ", XR = "σ", tI = "ς", eI = "ς", nI = "∼", rI = "⩪", oI = "≃", sI = "≃", iI = "⪞", cI = "⪠", aI = "⪝", lI = "⪟", uI = "≆", hI = "⨤", fI = "⥲", pI = "←", dI = "∘", gI = "∖", mI = "⨳", bI = "⧤", vI = "∣", yI = "⌣", _I = "⪪", kI = "⪬", xI = "⪬︀", wI = "Ь", CI = "ь", AI = "⌿", EI = "⧄", SI = "/", DI = "𝕊", TI = "𝕤", qI = "♠", FI = "♠", zI = "∥", LI = "⊓", RI = "⊓︀", II = "⊔", OI = "⊔︀", $I = "√", NI = "⊏", BI = "⊑", PI = "⊏", MI = "⊑", jI = "⊐", UI = "⊒", HI = "⊐", VI = "⊒", GI = "□", ZI = "□", WI = "⊓", KI = "⊏", JI = "⊑", YI = "⊐", QI = "⊒", XI = "⊔", tO = "▪", eO = "□", nO = "▪", rO = "→", oO = "𝒮", sO = "𝓈", iO = "∖", cO = "⌣", aO = "⋆", lO = "⋆", uO = "☆", hO = "★", fO = "ϵ", pO = "ϕ", dO = "¯", gO = "⊂", mO = "⋐", bO = "⪽", vO = "⫅", yO = "⊆", _O = "⫃", kO = "⫁", xO = "⫋", wO = "⊊", CO = "⪿", AO = "⥹", EO = "⊂", SO = "⋐", DO = "⊆", TO = "⫅", qO = "⊆", FO = "⊊", zO = "⫋", LO = "⫇", RO = "⫕", IO = "⫓", OO = "⪸", $O = "≻", NO = "≽", BO = "≻", PO = "⪰", MO = "≽", jO = "≿", UO = "⪰", HO = "⪺", VO = "⪶", GO = "⋩", ZO = "≿", WO = "∋", KO = "∑", JO = "∑", YO = "♪", QO = "¹", XO = "²", t$ = "³", e$ = "⊃", n$ = "⋑", r$ = "⪾", o$ = "⫘", s$ = "⫆", i$ = "⊇", c$ = "⫄", a$ = "⊃", l$ = "⊇", u$ = "⟉", h$ = "⫗", f$ = "⥻", p$ = "⫂", d$ = "⫌", g$ = "⊋", m$ = "⫀", b$ = "⊃", v$ = "⋑", y$ = "⊇", _$ = "⫆", k$ = "⊋", x$ = "⫌", w$ = "⫈", C$ = "⫔", A$ = "⫖", E$ = "⤦", S$ = "↙", D$ = "⇙", T$ = "↙", q$ = "⤪", F$ = "ß", z$ = "	", L$ = "⌖", R$ = "Τ", I$ = "τ", O$ = "⎴", $$ = "Ť", N$ = "ť", B$ = "Ţ", P$ = "ţ", M$ = "Т", j$ = "т", U$ = "⃛", H$ = "⌕", V$ = "𝔗", G$ = "𝔱", Z$ = "∴", W$ = "∴", K$ = "∴", J$ = "Θ", Y$ = "θ", Q$ = "ϑ", X$ = "ϑ", tN = "≈", eN = "∼", nN = "  ", rN = " ", oN = " ", sN = "≈", iN = "∼", cN = "Þ", aN = "þ", lN = "˜", uN = "∼", hN = "≃", fN = "≅", pN = "≈", dN = "⨱", gN = "⊠", mN = "×", bN = "⨰", vN = "∭", yN = "⤨", _N = "⌶", kN = "⫱", xN = "⊤", wN = "𝕋", CN = "𝕥", AN = "⫚", EN = "⤩", SN = "‴", DN = "™", TN = "™", qN = "▵", FN = "▿", zN = "◃", LN = "⊴", RN = "≜", IN = "▹", ON = "⊵", $N = "◬", NN = "≜", BN = "⨺", PN = "⃛", MN = "⨹", jN = "⧍", UN = "⨻", HN = "⏢", VN = "𝒯", GN = "𝓉", ZN = "Ц", WN = "ц", KN = "Ћ", JN = "ћ", YN = "Ŧ", QN = "ŧ", XN = "≬", tB = "↞", eB = "↠", nB = "Ú", rB = "ú", oB = "↑", sB = "↟", iB = "⇑", cB = "⥉", aB = "Ў", lB = "ў", uB = "Ŭ", hB = "ŭ", fB = "Û", pB = "û", dB = "У", gB = "у", mB = "⇅", bB = "Ű", vB = "ű", yB = "⥮", _B = "⥾", kB = "𝔘", xB = "𝔲", wB = "Ù", CB = "ù", AB = "⥣", EB = "↿", SB = "↾", DB = "▀", TB = "⌜", qB = "⌜", FB = "⌏", zB = "◸", LB = "Ū", RB = "ū", IB = "¨", OB = "_", $B = "⏟", NB = "⎵", BB = "⏝", PB = "⋃", MB = "⊎", jB = "Ų", UB = "ų", HB = "𝕌", VB = "𝕦", GB = "⤒", ZB = "↑", WB = "↑", KB = "⇑", JB = "⇅", YB = "↕", QB = "↕", XB = "⇕", tP = "⥮", eP = "↿", nP = "↾", rP = "⊎", oP = "↖", sP = "↗", iP = "υ", cP = "ϒ", aP = "ϒ", lP = "Υ", uP = "υ", hP = "↥", fP = "⊥", pP = "⇈", dP = "⌝", gP = "⌝", mP = "⌎", bP = "Ů", vP = "ů", yP = "◹", _P = "𝒰", kP = "𝓊", xP = "⋰", wP = "Ũ", CP = "ũ", AP = "▵", EP = "▴", SP = "⇈", DP = "Ü", TP = "ü", qP = "⦧", FP = "⦜", zP = "ϵ", LP = "ϰ", RP = "∅", IP = "ϕ", OP = "ϖ", $P = "∝", NP = "↕", BP = "⇕", PP = "ϱ", MP = "ς", jP = "⊊︀", UP = "⫋︀", HP = "⊋︀", VP = "⫌︀", GP = "ϑ", ZP = "⊲", WP = "⊳", KP = "⫨", JP = "⫫", YP = "⫩", QP = "В", XP = "в", tM = "⊢", eM = "⊨", nM = "⊩", rM = "⊫", oM = "⫦", sM = "⊻", iM = "∨", cM = "⋁", aM = "≚", lM = "⋮", uM = "|", hM = "‖", fM = "|", pM = "‖", dM = "∣", gM = "|", mM = "❘", bM = "≀", vM = " ", yM = "𝔙", _M = "𝔳", kM = "⊲", xM = "⊂⃒", wM = "⊃⃒", CM = "𝕍", AM = "𝕧", EM = "∝", SM = "⊳", DM = "𝒱", TM = "𝓋", qM = "⫋︀", FM = "⊊︀", zM = "⫌︀", LM = "⊋︀", RM = "⊪", IM = "⦚", OM = "Ŵ", $M = "ŵ", NM = "⩟", BM = "∧", PM = "⋀", MM = "≙", jM = "℘", UM = "𝔚", HM = "𝔴", VM = "𝕎", GM = "𝕨", ZM = "℘", WM = "≀", KM = "≀", JM = "𝒲", YM = "𝓌", QM = "⋂", XM = "◯", t3 = "⋃", e3 = "▽", n3 = "𝔛", r3 = "𝔵", o3 = "⟷", s3 = "⟺", i3 = "Ξ", c3 = "ξ", a3 = "⟵", l3 = "⟸", u3 = "⟼", h3 = "⋻", f3 = "⨀", p3 = "𝕏", d3 = "𝕩", g3 = "⨁", m3 = "⨂", b3 = "⟶", v3 = "⟹", y3 = "𝒳", _3 = "𝓍", k3 = "⨆", x3 = "⨄", w3 = "△", C3 = "⋁", A3 = "⋀", E3 = "Ý", S3 = "ý", D3 = "Я", T3 = "я", q3 = "Ŷ", F3 = "ŷ", z3 = "Ы", L3 = "ы", R3 = "¥", I3 = "𝔜", O3 = "𝔶", $3 = "Ї", N3 = "ї", B3 = "𝕐", P3 = "𝕪", M3 = "𝒴", j3 = "𝓎", U3 = "Ю", H3 = "ю", V3 = "ÿ", G3 = "Ÿ", Z3 = "Ź", W3 = "ź", K3 = "Ž", J3 = "ž", Y3 = "З", Q3 = "з", X3 = "Ż", tj = "ż", ej = "ℨ", nj = "​", rj = "Ζ", oj = "ζ", sj = "𝔷", ij = "ℨ", cj = "Ж", aj = "ж", lj = "⇝", uj = "𝕫", hj = "ℤ", fj = "𝒵", pj = "𝓏", dj = "‍", gj = "‌", mj = {
  Aacute: Qi,
  aacute: Xi,
  Abreve: tc,
  abreve: ec,
  ac: nc,
  acd: rc,
  acE: oc,
  Acirc: sc,
  acirc: ic,
  acute: cc,
  Acy: ac,
  acy: lc,
  AElig: uc,
  aelig: hc,
  af: fc,
  Afr: pc,
  afr: dc,
  Agrave: gc,
  agrave: mc,
  alefsym: bc,
  aleph: vc,
  Alpha: yc,
  alpha: _c,
  Amacr: kc,
  amacr: xc,
  amalg: wc,
  amp: Cc,
  AMP: Ac,
  andand: Ec,
  And: Sc,
  and: Dc,
  andd: Tc,
  andslope: qc,
  andv: Fc,
  ang: zc,
  ange: Lc,
  angle: Rc,
  angmsdaa: Ic,
  angmsdab: Oc,
  angmsdac: $c,
  angmsdad: Nc,
  angmsdae: Bc,
  angmsdaf: Pc,
  angmsdag: Mc,
  angmsdah: jc,
  angmsd: Uc,
  angrt: Hc,
  angrtvb: Vc,
  angrtvbd: Gc,
  angsph: Zc,
  angst: Wc,
  angzarr: Kc,
  Aogon: Jc,
  aogon: Yc,
  Aopf: Qc,
  aopf: Xc,
  apacir: ta,
  ap: ea,
  apE: na,
  ape: ra,
  apid: oa,
  apos: sa,
  ApplyFunction: ia,
  approx: ca,
  approxeq: aa,
  Aring: la,
  aring: ua,
  Ascr: ha,
  ascr: fa,
  Assign: pa,
  ast: da,
  asymp: ga,
  asympeq: ma,
  Atilde: ba,
  atilde: va,
  Auml: ya,
  auml: _a,
  awconint: ka,
  awint: xa,
  backcong: wa,
  backepsilon: Ca,
  backprime: Aa,
  backsim: Ea,
  backsimeq: Sa,
  Backslash: Da,
  Barv: Ta,
  barvee: qa,
  barwed: Fa,
  Barwed: za,
  barwedge: La,
  bbrk: Ra,
  bbrktbrk: Ia,
  bcong: Oa,
  Bcy: $a,
  bcy: Na,
  bdquo: Ba,
  becaus: Pa,
  because: Ma,
  Because: ja,
  bemptyv: Ua,
  bepsi: Ha,
  bernou: Va,
  Bernoullis: Ga,
  Beta: Za,
  beta: Wa,
  beth: Ka,
  between: Ja,
  Bfr: Ya,
  bfr: Qa,
  bigcap: Xa,
  bigcirc: tl,
  bigcup: el,
  bigodot: nl,
  bigoplus: rl,
  bigotimes: ol,
  bigsqcup: sl,
  bigstar: il,
  bigtriangledown: cl,
  bigtriangleup: al,
  biguplus: ll,
  bigvee: ul,
  bigwedge: hl,
  bkarow: fl,
  blacklozenge: pl,
  blacksquare: dl,
  blacktriangle: gl,
  blacktriangledown: ml,
  blacktriangleleft: bl,
  blacktriangleright: vl,
  blank: yl,
  blk12: _l,
  blk14: kl,
  blk34: xl,
  block: wl,
  bne: Cl,
  bnequiv: Al,
  bNot: El,
  bnot: Sl,
  Bopf: Dl,
  bopf: Tl,
  bot: ql,
  bottom: Fl,
  bowtie: zl,
  boxbox: Ll,
  boxdl: Rl,
  boxdL: Il,
  boxDl: Ol,
  boxDL: $l,
  boxdr: Nl,
  boxdR: Bl,
  boxDr: Pl,
  boxDR: Ml,
  boxh: jl,
  boxH: Ul,
  boxhd: Hl,
  boxHd: Vl,
  boxhD: Gl,
  boxHD: Zl,
  boxhu: Wl,
  boxHu: Kl,
  boxhU: Jl,
  boxHU: Yl,
  boxminus: Ql,
  boxplus: Xl,
  boxtimes: tu,
  boxul: eu,
  boxuL: nu,
  boxUl: ru,
  boxUL: ou,
  boxur: su,
  boxuR: iu,
  boxUr: cu,
  boxUR: au,
  boxv: lu,
  boxV: uu,
  boxvh: hu,
  boxvH: fu,
  boxVh: pu,
  boxVH: du,
  boxvl: gu,
  boxvL: mu,
  boxVl: bu,
  boxVL: vu,
  boxvr: yu,
  boxvR: _u,
  boxVr: ku,
  boxVR: xu,
  bprime: wu,
  breve: Cu,
  Breve: Au,
  brvbar: Eu,
  bscr: Su,
  Bscr: Du,
  bsemi: Tu,
  bsim: qu,
  bsime: Fu,
  bsolb: zu,
  bsol: Lu,
  bsolhsub: Ru,
  bull: Iu,
  bullet: Ou,
  bump: $u,
  bumpE: Nu,
  bumpe: Bu,
  Bumpeq: Pu,
  bumpeq: Mu,
  Cacute: ju,
  cacute: Uu,
  capand: Hu,
  capbrcup: Vu,
  capcap: Gu,
  cap: Zu,
  Cap: Wu,
  capcup: Ku,
  capdot: Ju,
  CapitalDifferentialD: Yu,
  caps: Qu,
  caret: Xu,
  caron: th,
  Cayleys: eh,
  ccaps: nh,
  Ccaron: rh,
  ccaron: oh,
  Ccedil: sh,
  ccedil: ih,
  Ccirc: ch,
  ccirc: ah,
  Cconint: lh,
  ccups: uh,
  ccupssm: hh,
  Cdot: fh,
  cdot: ph,
  cedil: dh,
  Cedilla: gh,
  cemptyv: mh,
  cent: bh,
  centerdot: vh,
  CenterDot: yh,
  cfr: _h,
  Cfr: kh,
  CHcy: xh,
  chcy: wh,
  check: Ch,
  checkmark: Ah,
  Chi: Eh,
  chi: Sh,
  circ: Dh,
  circeq: Th,
  circlearrowleft: qh,
  circlearrowright: Fh,
  circledast: zh,
  circledcirc: Lh,
  circleddash: Rh,
  CircleDot: Ih,
  circledR: Oh,
  circledS: $h,
  CircleMinus: Nh,
  CirclePlus: Bh,
  CircleTimes: Ph,
  cir: Mh,
  cirE: jh,
  cire: Uh,
  cirfnint: Hh,
  cirmid: Vh,
  cirscir: Gh,
  ClockwiseContourIntegral: Zh,
  CloseCurlyDoubleQuote: Wh,
  CloseCurlyQuote: Kh,
  clubs: Jh,
  clubsuit: Yh,
  colon: Qh,
  Colon: Xh,
  Colone: tf,
  colone: ef,
  coloneq: nf,
  comma: rf,
  commat: of,
  comp: sf,
  compfn: cf,
  complement: af,
  complexes: lf,
  cong: uf,
  congdot: hf,
  Congruent: ff,
  conint: pf,
  Conint: df,
  ContourIntegral: gf,
  copf: mf,
  Copf: bf,
  coprod: vf,
  Coproduct: yf,
  copy: _f,
  COPY: kf,
  copysr: xf,
  CounterClockwiseContourIntegral: wf,
  crarr: Cf,
  cross: Af,
  Cross: Ef,
  Cscr: Sf,
  cscr: Df,
  csub: Tf,
  csube: qf,
  csup: Ff,
  csupe: zf,
  ctdot: Lf,
  cudarrl: Rf,
  cudarrr: If,
  cuepr: Of,
  cuesc: $f,
  cularr: Nf,
  cularrp: Bf,
  cupbrcap: Pf,
  cupcap: Mf,
  CupCap: jf,
  cup: Uf,
  Cup: Hf,
  cupcup: Vf,
  cupdot: Gf,
  cupor: Zf,
  cups: Wf,
  curarr: Kf,
  curarrm: Jf,
  curlyeqprec: Yf,
  curlyeqsucc: Qf,
  curlyvee: Xf,
  curlywedge: tp,
  curren: ep,
  curvearrowleft: np,
  curvearrowright: rp,
  cuvee: op,
  cuwed: sp,
  cwconint: ip,
  cwint: cp,
  cylcty: ap,
  dagger: lp,
  Dagger: up,
  daleth: hp,
  darr: fp,
  Darr: pp,
  dArr: dp,
  dash: gp,
  Dashv: mp,
  dashv: bp,
  dbkarow: vp,
  dblac: yp,
  Dcaron: _p,
  dcaron: kp,
  Dcy: xp,
  dcy: wp,
  ddagger: Cp,
  ddarr: Ap,
  DD: Ep,
  dd: Sp,
  DDotrahd: Dp,
  ddotseq: Tp,
  deg: qp,
  Del: Fp,
  Delta: zp,
  delta: Lp,
  demptyv: Rp,
  dfisht: Ip,
  Dfr: Op,
  dfr: $p,
  dHar: Np,
  dharl: Bp,
  dharr: Pp,
  DiacriticalAcute: Mp,
  DiacriticalDot: jp,
  DiacriticalDoubleAcute: Up,
  DiacriticalGrave: Hp,
  DiacriticalTilde: Vp,
  diam: Gp,
  diamond: Zp,
  Diamond: Wp,
  diamondsuit: Kp,
  diams: Jp,
  die: Yp,
  DifferentialD: Qp,
  digamma: Xp,
  disin: td,
  div: ed,
  divide: nd,
  divideontimes: rd,
  divonx: od,
  DJcy: sd,
  djcy: id,
  dlcorn: cd,
  dlcrop: ad,
  dollar: ld,
  Dopf: ud,
  dopf: hd,
  Dot: fd,
  dot: pd,
  DotDot: dd,
  doteq: gd,
  doteqdot: md,
  DotEqual: bd,
  dotminus: vd,
  dotplus: yd,
  dotsquare: _d,
  doublebarwedge: kd,
  DoubleContourIntegral: xd,
  DoubleDot: wd,
  DoubleDownArrow: Cd,
  DoubleLeftArrow: Ad,
  DoubleLeftRightArrow: Ed,
  DoubleLeftTee: Sd,
  DoubleLongLeftArrow: Dd,
  DoubleLongLeftRightArrow: Td,
  DoubleLongRightArrow: qd,
  DoubleRightArrow: Fd,
  DoubleRightTee: zd,
  DoubleUpArrow: Ld,
  DoubleUpDownArrow: Rd,
  DoubleVerticalBar: Id,
  DownArrowBar: Od,
  downarrow: $d,
  DownArrow: Nd,
  Downarrow: Bd,
  DownArrowUpArrow: Pd,
  DownBreve: Md,
  downdownarrows: jd,
  downharpoonleft: Ud,
  downharpoonright: Hd,
  DownLeftRightVector: Vd,
  DownLeftTeeVector: Gd,
  DownLeftVectorBar: Zd,
  DownLeftVector: Wd,
  DownRightTeeVector: Kd,
  DownRightVectorBar: Jd,
  DownRightVector: Yd,
  DownTeeArrow: Qd,
  DownTee: Xd,
  drbkarow: tg,
  drcorn: eg,
  drcrop: ng,
  Dscr: rg,
  dscr: og,
  DScy: sg,
  dscy: ig,
  dsol: cg,
  Dstrok: ag,
  dstrok: lg,
  dtdot: ug,
  dtri: hg,
  dtrif: fg,
  duarr: pg,
  duhar: dg,
  dwangle: gg,
  DZcy: mg,
  dzcy: bg,
  dzigrarr: vg,
  Eacute: yg,
  eacute: _g,
  easter: kg,
  Ecaron: xg,
  ecaron: wg,
  Ecirc: Cg,
  ecirc: Ag,
  ecir: Eg,
  ecolon: Sg,
  Ecy: Dg,
  ecy: Tg,
  eDDot: qg,
  Edot: Fg,
  edot: zg,
  eDot: Lg,
  ee: Rg,
  efDot: Ig,
  Efr: Og,
  efr: $g,
  eg: Ng,
  Egrave: Bg,
  egrave: Pg,
  egs: Mg,
  egsdot: jg,
  el: Ug,
  Element: Hg,
  elinters: Vg,
  ell: Gg,
  els: Zg,
  elsdot: Wg,
  Emacr: Kg,
  emacr: Jg,
  empty: Yg,
  emptyset: Qg,
  EmptySmallSquare: Xg,
  emptyv: tm,
  EmptyVerySmallSquare: em,
  emsp13: nm,
  emsp14: rm,
  emsp: om,
  ENG: sm,
  eng: im,
  ensp: cm,
  Eogon: am,
  eogon: lm,
  Eopf: um,
  eopf: hm,
  epar: fm,
  eparsl: pm,
  eplus: dm,
  epsi: gm,
  Epsilon: mm,
  epsilon: bm,
  epsiv: vm,
  eqcirc: ym,
  eqcolon: _m,
  eqsim: km,
  eqslantgtr: xm,
  eqslantless: wm,
  Equal: Cm,
  equals: Am,
  EqualTilde: Em,
  equest: Sm,
  Equilibrium: Dm,
  equiv: Tm,
  equivDD: qm,
  eqvparsl: Fm,
  erarr: zm,
  erDot: Lm,
  escr: Rm,
  Escr: Im,
  esdot: Om,
  Esim: $m,
  esim: Nm,
  Eta: Bm,
  eta: Pm,
  ETH: Mm,
  eth: jm,
  Euml: Um,
  euml: Hm,
  euro: Vm,
  excl: Gm,
  exist: Zm,
  Exists: Wm,
  expectation: Km,
  exponentiale: Jm,
  ExponentialE: Ym,
  fallingdotseq: Qm,
  Fcy: Xm,
  fcy: t0,
  female: e0,
  ffilig: n0,
  fflig: r0,
  ffllig: o0,
  Ffr: s0,
  ffr: i0,
  filig: c0,
  FilledSmallSquare: a0,
  FilledVerySmallSquare: l0,
  fjlig: u0,
  flat: h0,
  fllig: f0,
  fltns: p0,
  fnof: d0,
  Fopf: g0,
  fopf: m0,
  forall: b0,
  ForAll: v0,
  fork: y0,
  forkv: _0,
  Fouriertrf: k0,
  fpartint: x0,
  frac12: w0,
  frac13: C0,
  frac14: A0,
  frac15: E0,
  frac16: S0,
  frac18: D0,
  frac23: T0,
  frac25: q0,
  frac34: F0,
  frac35: z0,
  frac38: L0,
  frac45: R0,
  frac56: I0,
  frac58: O0,
  frac78: $0,
  frasl: N0,
  frown: B0,
  fscr: P0,
  Fscr: M0,
  gacute: j0,
  Gamma: U0,
  gamma: H0,
  Gammad: V0,
  gammad: G0,
  gap: Z0,
  Gbreve: W0,
  gbreve: K0,
  Gcedil: J0,
  Gcirc: Y0,
  gcirc: Q0,
  Gcy: X0,
  gcy: tb,
  Gdot: eb,
  gdot: nb,
  ge: rb,
  gE: ob,
  gEl: sb,
  gel: ib,
  geq: cb,
  geqq: ab,
  geqslant: lb,
  gescc: ub,
  ges: hb,
  gesdot: fb,
  gesdoto: pb,
  gesdotol: db,
  gesl: gb,
  gesles: mb,
  Gfr: bb,
  gfr: vb,
  gg: yb,
  Gg: _b,
  ggg: kb,
  gimel: xb,
  GJcy: wb,
  gjcy: Cb,
  gla: Ab,
  gl: Eb,
  glE: Sb,
  glj: Db,
  gnap: Tb,
  gnapprox: qb,
  gne: Fb,
  gnE: zb,
  gneq: Lb,
  gneqq: Rb,
  gnsim: Ib,
  Gopf: Ob,
  gopf: $b,
  grave: Nb,
  GreaterEqual: Bb,
  GreaterEqualLess: Pb,
  GreaterFullEqual: Mb,
  GreaterGreater: jb,
  GreaterLess: Ub,
  GreaterSlantEqual: Hb,
  GreaterTilde: Vb,
  Gscr: Gb,
  gscr: Zb,
  gsim: Wb,
  gsime: Kb,
  gsiml: Jb,
  gtcc: Yb,
  gtcir: Qb,
  gt: Xb,
  GT: tv,
  Gt: ev,
  gtdot: nv,
  gtlPar: rv,
  gtquest: ov,
  gtrapprox: sv,
  gtrarr: iv,
  gtrdot: cv,
  gtreqless: av,
  gtreqqless: lv,
  gtrless: uv,
  gtrsim: hv,
  gvertneqq: fv,
  gvnE: pv,
  Hacek: dv,
  hairsp: gv,
  half: mv,
  hamilt: bv,
  HARDcy: vv,
  hardcy: yv,
  harrcir: _v,
  harr: kv,
  hArr: xv,
  harrw: wv,
  Hat: Cv,
  hbar: Av,
  Hcirc: Ev,
  hcirc: Sv,
  hearts: Dv,
  heartsuit: Tv,
  hellip: qv,
  hercon: Fv,
  hfr: zv,
  Hfr: Lv,
  HilbertSpace: Rv,
  hksearow: Iv,
  hkswarow: Ov,
  hoarr: $v,
  homtht: Nv,
  hookleftarrow: Bv,
  hookrightarrow: Pv,
  hopf: Mv,
  Hopf: jv,
  horbar: Uv,
  HorizontalLine: Hv,
  hscr: Vv,
  Hscr: Gv,
  hslash: Zv,
  Hstrok: Wv,
  hstrok: Kv,
  HumpDownHump: Jv,
  HumpEqual: Yv,
  hybull: Qv,
  hyphen: Xv,
  Iacute: ty,
  iacute: ey,
  ic: ny,
  Icirc: ry,
  icirc: oy,
  Icy: sy,
  icy: iy,
  Idot: cy,
  IEcy: ay,
  iecy: ly,
  iexcl: uy,
  iff: hy,
  ifr: fy,
  Ifr: py,
  Igrave: dy,
  igrave: gy,
  ii: my,
  iiiint: by,
  iiint: vy,
  iinfin: yy,
  iiota: _y,
  IJlig: ky,
  ijlig: xy,
  Imacr: wy,
  imacr: Cy,
  image: Ay,
  ImaginaryI: Ey,
  imagline: Sy,
  imagpart: Dy,
  imath: Ty,
  Im: qy,
  imof: Fy,
  imped: zy,
  Implies: Ly,
  incare: Ry,
  in: "∈",
  infin: Iy,
  infintie: Oy,
  inodot: $y,
  intcal: Ny,
  int: By,
  Int: Py,
  integers: My,
  Integral: jy,
  intercal: Uy,
  Intersection: Hy,
  intlarhk: Vy,
  intprod: Gy,
  InvisibleComma: Zy,
  InvisibleTimes: Wy,
  IOcy: Ky,
  iocy: Jy,
  Iogon: Yy,
  iogon: Qy,
  Iopf: Xy,
  iopf: t_,
  Iota: e_,
  iota: n_,
  iprod: r_,
  iquest: o_,
  iscr: s_,
  Iscr: i_,
  isin: c_,
  isindot: a_,
  isinE: l_,
  isins: u_,
  isinsv: h_,
  isinv: f_,
  it: p_,
  Itilde: d_,
  itilde: g_,
  Iukcy: m_,
  iukcy: b_,
  Iuml: v_,
  iuml: y_,
  Jcirc: __,
  jcirc: k_,
  Jcy: x_,
  jcy: w_,
  Jfr: C_,
  jfr: A_,
  jmath: E_,
  Jopf: S_,
  jopf: D_,
  Jscr: T_,
  jscr: q_,
  Jsercy: F_,
  jsercy: z_,
  Jukcy: L_,
  jukcy: R_,
  Kappa: I_,
  kappa: O_,
  kappav: $_,
  Kcedil: N_,
  kcedil: B_,
  Kcy: P_,
  kcy: M_,
  Kfr: j_,
  kfr: U_,
  kgreen: H_,
  KHcy: V_,
  khcy: G_,
  KJcy: Z_,
  kjcy: W_,
  Kopf: K_,
  kopf: J_,
  Kscr: Y_,
  kscr: Q_,
  lAarr: X_,
  Lacute: tk,
  lacute: ek,
  laemptyv: nk,
  lagran: rk,
  Lambda: ok,
  lambda: sk,
  lang: ik,
  Lang: ck,
  langd: ak,
  langle: lk,
  lap: uk,
  Laplacetrf: hk,
  laquo: fk,
  larrb: pk,
  larrbfs: dk,
  larr: gk,
  Larr: mk,
  lArr: bk,
  larrfs: vk,
  larrhk: yk,
  larrlp: _k,
  larrpl: kk,
  larrsim: xk,
  larrtl: wk,
  latail: Ck,
  lAtail: Ak,
  lat: Ek,
  late: Sk,
  lates: Dk,
  lbarr: Tk,
  lBarr: qk,
  lbbrk: Fk,
  lbrace: zk,
  lbrack: Lk,
  lbrke: Rk,
  lbrksld: Ik,
  lbrkslu: Ok,
  Lcaron: $k,
  lcaron: Nk,
  Lcedil: Bk,
  lcedil: Pk,
  lceil: Mk,
  lcub: jk,
  Lcy: Uk,
  lcy: Hk,
  ldca: Vk,
  ldquo: Gk,
  ldquor: Zk,
  ldrdhar: Wk,
  ldrushar: Kk,
  ldsh: Jk,
  le: Yk,
  lE: Qk,
  LeftAngleBracket: Xk,
  LeftArrowBar: tx,
  leftarrow: ex,
  LeftArrow: nx,
  Leftarrow: rx,
  LeftArrowRightArrow: ox,
  leftarrowtail: sx,
  LeftCeiling: ix,
  LeftDoubleBracket: cx,
  LeftDownTeeVector: ax,
  LeftDownVectorBar: lx,
  LeftDownVector: ux,
  LeftFloor: hx,
  leftharpoondown: fx,
  leftharpoonup: px,
  leftleftarrows: dx,
  leftrightarrow: gx,
  LeftRightArrow: mx,
  Leftrightarrow: bx,
  leftrightarrows: vx,
  leftrightharpoons: yx,
  leftrightsquigarrow: _x,
  LeftRightVector: kx,
  LeftTeeArrow: xx,
  LeftTee: wx,
  LeftTeeVector: Cx,
  leftthreetimes: Ax,
  LeftTriangleBar: Ex,
  LeftTriangle: Sx,
  LeftTriangleEqual: Dx,
  LeftUpDownVector: Tx,
  LeftUpTeeVector: qx,
  LeftUpVectorBar: Fx,
  LeftUpVector: zx,
  LeftVectorBar: Lx,
  LeftVector: Rx,
  lEg: Ix,
  leg: Ox,
  leq: $x,
  leqq: Nx,
  leqslant: Bx,
  lescc: Px,
  les: Mx,
  lesdot: jx,
  lesdoto: Ux,
  lesdotor: Hx,
  lesg: Vx,
  lesges: Gx,
  lessapprox: Zx,
  lessdot: Wx,
  lesseqgtr: Kx,
  lesseqqgtr: Jx,
  LessEqualGreater: Yx,
  LessFullEqual: Qx,
  LessGreater: Xx,
  lessgtr: tw,
  LessLess: ew,
  lesssim: nw,
  LessSlantEqual: rw,
  LessTilde: ow,
  lfisht: sw,
  lfloor: iw,
  Lfr: cw,
  lfr: aw,
  lg: lw,
  lgE: uw,
  lHar: hw,
  lhard: fw,
  lharu: pw,
  lharul: dw,
  lhblk: gw,
  LJcy: mw,
  ljcy: bw,
  llarr: vw,
  ll: yw,
  Ll: _w,
  llcorner: kw,
  Lleftarrow: xw,
  llhard: ww,
  lltri: Cw,
  Lmidot: Aw,
  lmidot: Ew,
  lmoustache: Sw,
  lmoust: Dw,
  lnap: Tw,
  lnapprox: qw,
  lne: Fw,
  lnE: zw,
  lneq: Lw,
  lneqq: Rw,
  lnsim: Iw,
  loang: Ow,
  loarr: $w,
  lobrk: Nw,
  longleftarrow: Bw,
  LongLeftArrow: Pw,
  Longleftarrow: Mw,
  longleftrightarrow: jw,
  LongLeftRightArrow: Uw,
  Longleftrightarrow: Hw,
  longmapsto: Vw,
  longrightarrow: Gw,
  LongRightArrow: Zw,
  Longrightarrow: Ww,
  looparrowleft: Kw,
  looparrowright: Jw,
  lopar: Yw,
  Lopf: Qw,
  lopf: Xw,
  loplus: t1,
  lotimes: e1,
  lowast: n1,
  lowbar: r1,
  LowerLeftArrow: o1,
  LowerRightArrow: s1,
  loz: i1,
  lozenge: c1,
  lozf: a1,
  lpar: l1,
  lparlt: u1,
  lrarr: h1,
  lrcorner: f1,
  lrhar: p1,
  lrhard: d1,
  lrm: g1,
  lrtri: m1,
  lsaquo: b1,
  lscr: v1,
  Lscr: y1,
  lsh: _1,
  Lsh: k1,
  lsim: x1,
  lsime: w1,
  lsimg: C1,
  lsqb: A1,
  lsquo: E1,
  lsquor: S1,
  Lstrok: D1,
  lstrok: T1,
  ltcc: q1,
  ltcir: F1,
  lt: z1,
  LT: L1,
  Lt: R1,
  ltdot: I1,
  lthree: O1,
  ltimes: $1,
  ltlarr: N1,
  ltquest: B1,
  ltri: P1,
  ltrie: M1,
  ltrif: j1,
  ltrPar: U1,
  lurdshar: H1,
  luruhar: V1,
  lvertneqq: G1,
  lvnE: Z1,
  macr: W1,
  male: K1,
  malt: J1,
  maltese: Y1,
  Map: "⤅",
  map: Q1,
  mapsto: X1,
  mapstodown: tC,
  mapstoleft: eC,
  mapstoup: nC,
  marker: rC,
  mcomma: oC,
  Mcy: sC,
  mcy: iC,
  mdash: cC,
  mDDot: aC,
  measuredangle: lC,
  MediumSpace: uC,
  Mellintrf: hC,
  Mfr: fC,
  mfr: pC,
  mho: dC,
  micro: gC,
  midast: mC,
  midcir: bC,
  mid: vC,
  middot: yC,
  minusb: _C,
  minus: kC,
  minusd: xC,
  minusdu: wC,
  MinusPlus: CC,
  mlcp: AC,
  mldr: EC,
  mnplus: SC,
  models: DC,
  Mopf: TC,
  mopf: qC,
  mp: FC,
  mscr: zC,
  Mscr: LC,
  mstpos: RC,
  Mu: IC,
  mu: OC,
  multimap: $C,
  mumap: NC,
  nabla: BC,
  Nacute: PC,
  nacute: MC,
  nang: jC,
  nap: UC,
  napE: HC,
  napid: VC,
  napos: GC,
  napprox: ZC,
  natural: WC,
  naturals: KC,
  natur: JC,
  nbsp: YC,
  nbump: QC,
  nbumpe: XC,
  ncap: tA,
  Ncaron: eA,
  ncaron: nA,
  Ncedil: rA,
  ncedil: oA,
  ncong: sA,
  ncongdot: iA,
  ncup: cA,
  Ncy: aA,
  ncy: lA,
  ndash: uA,
  nearhk: hA,
  nearr: fA,
  neArr: pA,
  nearrow: dA,
  ne: gA,
  nedot: mA,
  NegativeMediumSpace: bA,
  NegativeThickSpace: vA,
  NegativeThinSpace: yA,
  NegativeVeryThinSpace: _A,
  nequiv: kA,
  nesear: xA,
  nesim: wA,
  NestedGreaterGreater: CA,
  NestedLessLess: AA,
  NewLine: EA,
  nexist: SA,
  nexists: DA,
  Nfr: TA,
  nfr: qA,
  ngE: FA,
  nge: zA,
  ngeq: LA,
  ngeqq: RA,
  ngeqslant: IA,
  nges: OA,
  nGg: $A,
  ngsim: NA,
  nGt: BA,
  ngt: PA,
  ngtr: MA,
  nGtv: jA,
  nharr: UA,
  nhArr: HA,
  nhpar: VA,
  ni: GA,
  nis: ZA,
  nisd: WA,
  niv: KA,
  NJcy: JA,
  njcy: YA,
  nlarr: QA,
  nlArr: XA,
  nldr: tE,
  nlE: eE,
  nle: nE,
  nleftarrow: rE,
  nLeftarrow: oE,
  nleftrightarrow: sE,
  nLeftrightarrow: iE,
  nleq: cE,
  nleqq: aE,
  nleqslant: lE,
  nles: uE,
  nless: hE,
  nLl: fE,
  nlsim: pE,
  nLt: dE,
  nlt: gE,
  nltri: mE,
  nltrie: bE,
  nLtv: vE,
  nmid: yE,
  NoBreak: _E,
  NonBreakingSpace: kE,
  nopf: xE,
  Nopf: wE,
  Not: CE,
  not: AE,
  NotCongruent: EE,
  NotCupCap: SE,
  NotDoubleVerticalBar: DE,
  NotElement: TE,
  NotEqual: qE,
  NotEqualTilde: FE,
  NotExists: zE,
  NotGreater: LE,
  NotGreaterEqual: RE,
  NotGreaterFullEqual: IE,
  NotGreaterGreater: OE,
  NotGreaterLess: $E,
  NotGreaterSlantEqual: NE,
  NotGreaterTilde: BE,
  NotHumpDownHump: PE,
  NotHumpEqual: ME,
  notin: jE,
  notindot: UE,
  notinE: HE,
  notinva: VE,
  notinvb: GE,
  notinvc: ZE,
  NotLeftTriangleBar: WE,
  NotLeftTriangle: KE,
  NotLeftTriangleEqual: JE,
  NotLess: YE,
  NotLessEqual: QE,
  NotLessGreater: XE,
  NotLessLess: tS,
  NotLessSlantEqual: eS,
  NotLessTilde: nS,
  NotNestedGreaterGreater: rS,
  NotNestedLessLess: oS,
  notni: sS,
  notniva: iS,
  notnivb: cS,
  notnivc: aS,
  NotPrecedes: lS,
  NotPrecedesEqual: uS,
  NotPrecedesSlantEqual: hS,
  NotReverseElement: fS,
  NotRightTriangleBar: pS,
  NotRightTriangle: dS,
  NotRightTriangleEqual: gS,
  NotSquareSubset: mS,
  NotSquareSubsetEqual: bS,
  NotSquareSuperset: vS,
  NotSquareSupersetEqual: yS,
  NotSubset: _S,
  NotSubsetEqual: kS,
  NotSucceeds: xS,
  NotSucceedsEqual: wS,
  NotSucceedsSlantEqual: CS,
  NotSucceedsTilde: AS,
  NotSuperset: ES,
  NotSupersetEqual: SS,
  NotTilde: DS,
  NotTildeEqual: TS,
  NotTildeFullEqual: qS,
  NotTildeTilde: FS,
  NotVerticalBar: zS,
  nparallel: LS,
  npar: RS,
  nparsl: IS,
  npart: OS,
  npolint: $S,
  npr: NS,
  nprcue: BS,
  nprec: PS,
  npreceq: MS,
  npre: jS,
  nrarrc: US,
  nrarr: HS,
  nrArr: VS,
  nrarrw: GS,
  nrightarrow: ZS,
  nRightarrow: WS,
  nrtri: KS,
  nrtrie: JS,
  nsc: YS,
  nsccue: QS,
  nsce: XS,
  Nscr: tD,
  nscr: eD,
  nshortmid: nD,
  nshortparallel: rD,
  nsim: oD,
  nsime: sD,
  nsimeq: iD,
  nsmid: cD,
  nspar: aD,
  nsqsube: lD,
  nsqsupe: uD,
  nsub: hD,
  nsubE: fD,
  nsube: pD,
  nsubset: dD,
  nsubseteq: gD,
  nsubseteqq: mD,
  nsucc: bD,
  nsucceq: vD,
  nsup: yD,
  nsupE: _D,
  nsupe: kD,
  nsupset: xD,
  nsupseteq: wD,
  nsupseteqq: CD,
  ntgl: AD,
  Ntilde: ED,
  ntilde: SD,
  ntlg: DD,
  ntriangleleft: TD,
  ntrianglelefteq: qD,
  ntriangleright: FD,
  ntrianglerighteq: zD,
  Nu: LD,
  nu: RD,
  num: ID,
  numero: OD,
  numsp: $D,
  nvap: ND,
  nvdash: BD,
  nvDash: PD,
  nVdash: MD,
  nVDash: jD,
  nvge: UD,
  nvgt: HD,
  nvHarr: VD,
  nvinfin: GD,
  nvlArr: ZD,
  nvle: WD,
  nvlt: KD,
  nvltrie: JD,
  nvrArr: YD,
  nvrtrie: QD,
  nvsim: XD,
  nwarhk: tT,
  nwarr: eT,
  nwArr: nT,
  nwarrow: rT,
  nwnear: oT,
  Oacute: sT,
  oacute: iT,
  oast: cT,
  Ocirc: aT,
  ocirc: lT,
  ocir: uT,
  Ocy: hT,
  ocy: fT,
  odash: pT,
  Odblac: dT,
  odblac: gT,
  odiv: mT,
  odot: bT,
  odsold: vT,
  OElig: yT,
  oelig: _T,
  ofcir: kT,
  Ofr: xT,
  ofr: wT,
  ogon: CT,
  Ograve: AT,
  ograve: ET,
  ogt: ST,
  ohbar: DT,
  ohm: TT,
  oint: qT,
  olarr: FT,
  olcir: zT,
  olcross: LT,
  oline: RT,
  olt: IT,
  Omacr: OT,
  omacr: $T,
  Omega: NT,
  omega: BT,
  Omicron: PT,
  omicron: MT,
  omid: jT,
  ominus: UT,
  Oopf: HT,
  oopf: VT,
  opar: GT,
  OpenCurlyDoubleQuote: ZT,
  OpenCurlyQuote: WT,
  operp: KT,
  oplus: JT,
  orarr: YT,
  Or: QT,
  or: XT,
  ord: tq,
  order: eq,
  orderof: nq,
  ordf: rq,
  ordm: oq,
  origof: sq,
  oror: iq,
  orslope: cq,
  orv: aq,
  oS: lq,
  Oscr: uq,
  oscr: hq,
  Oslash: fq,
  oslash: pq,
  osol: dq,
  Otilde: gq,
  otilde: mq,
  otimesas: bq,
  Otimes: vq,
  otimes: yq,
  Ouml: _q,
  ouml: kq,
  ovbar: xq,
  OverBar: wq,
  OverBrace: Cq,
  OverBracket: Aq,
  OverParenthesis: Eq,
  para: Sq,
  parallel: Dq,
  par: Tq,
  parsim: qq,
  parsl: Fq,
  part: zq,
  PartialD: Lq,
  Pcy: Rq,
  pcy: Iq,
  percnt: Oq,
  period: $q,
  permil: Nq,
  perp: Bq,
  pertenk: Pq,
  Pfr: Mq,
  pfr: jq,
  Phi: Uq,
  phi: Hq,
  phiv: Vq,
  phmmat: Gq,
  phone: Zq,
  Pi: Wq,
  pi: Kq,
  pitchfork: Jq,
  piv: Yq,
  planck: Qq,
  planckh: Xq,
  plankv: tF,
  plusacir: eF,
  plusb: nF,
  pluscir: rF,
  plus: oF,
  plusdo: sF,
  plusdu: iF,
  pluse: cF,
  PlusMinus: aF,
  plusmn: lF,
  plussim: uF,
  plustwo: hF,
  pm: fF,
  Poincareplane: pF,
  pointint: dF,
  popf: gF,
  Popf: mF,
  pound: bF,
  prap: vF,
  Pr: yF,
  pr: _F,
  prcue: kF,
  precapprox: xF,
  prec: wF,
  preccurlyeq: CF,
  Precedes: AF,
  PrecedesEqual: EF,
  PrecedesSlantEqual: SF,
  PrecedesTilde: DF,
  preceq: TF,
  precnapprox: qF,
  precneqq: FF,
  precnsim: zF,
  pre: LF,
  prE: RF,
  precsim: IF,
  prime: OF,
  Prime: $F,
  primes: NF,
  prnap: BF,
  prnE: PF,
  prnsim: MF,
  prod: jF,
  Product: UF,
  profalar: HF,
  profline: VF,
  profsurf: GF,
  prop: ZF,
  Proportional: WF,
  Proportion: KF,
  propto: JF,
  prsim: YF,
  prurel: QF,
  Pscr: XF,
  pscr: tz,
  Psi: ez,
  psi: nz,
  puncsp: rz,
  Qfr: oz,
  qfr: sz,
  qint: iz,
  qopf: cz,
  Qopf: az,
  qprime: lz,
  Qscr: uz,
  qscr: hz,
  quaternions: fz,
  quatint: pz,
  quest: dz,
  questeq: gz,
  quot: mz,
  QUOT: bz,
  rAarr: vz,
  race: yz,
  Racute: _z,
  racute: kz,
  radic: xz,
  raemptyv: wz,
  rang: Cz,
  Rang: Az,
  rangd: Ez,
  range: Sz,
  rangle: Dz,
  raquo: Tz,
  rarrap: qz,
  rarrb: Fz,
  rarrbfs: zz,
  rarrc: Lz,
  rarr: Rz,
  Rarr: Iz,
  rArr: Oz,
  rarrfs: $z,
  rarrhk: Nz,
  rarrlp: Bz,
  rarrpl: Pz,
  rarrsim: Mz,
  Rarrtl: jz,
  rarrtl: Uz,
  rarrw: Hz,
  ratail: Vz,
  rAtail: Gz,
  ratio: Zz,
  rationals: Wz,
  rbarr: Kz,
  rBarr: Jz,
  RBarr: Yz,
  rbbrk: Qz,
  rbrace: Xz,
  rbrack: tL,
  rbrke: eL,
  rbrksld: nL,
  rbrkslu: rL,
  Rcaron: oL,
  rcaron: sL,
  Rcedil: iL,
  rcedil: cL,
  rceil: aL,
  rcub: lL,
  Rcy: uL,
  rcy: hL,
  rdca: fL,
  rdldhar: pL,
  rdquo: dL,
  rdquor: gL,
  rdsh: mL,
  real: bL,
  realine: vL,
  realpart: yL,
  reals: _L,
  Re: kL,
  rect: xL,
  reg: wL,
  REG: CL,
  ReverseElement: AL,
  ReverseEquilibrium: EL,
  ReverseUpEquilibrium: SL,
  rfisht: DL,
  rfloor: TL,
  rfr: qL,
  Rfr: FL,
  rHar: zL,
  rhard: LL,
  rharu: RL,
  rharul: IL,
  Rho: OL,
  rho: $L,
  rhov: NL,
  RightAngleBracket: BL,
  RightArrowBar: PL,
  rightarrow: ML,
  RightArrow: jL,
  Rightarrow: UL,
  RightArrowLeftArrow: HL,
  rightarrowtail: VL,
  RightCeiling: GL,
  RightDoubleBracket: ZL,
  RightDownTeeVector: WL,
  RightDownVectorBar: KL,
  RightDownVector: JL,
  RightFloor: YL,
  rightharpoondown: QL,
  rightharpoonup: XL,
  rightleftarrows: t2,
  rightleftharpoons: e2,
  rightrightarrows: n2,
  rightsquigarrow: r2,
  RightTeeArrow: o2,
  RightTee: s2,
  RightTeeVector: i2,
  rightthreetimes: c2,
  RightTriangleBar: a2,
  RightTriangle: l2,
  RightTriangleEqual: u2,
  RightUpDownVector: h2,
  RightUpTeeVector: f2,
  RightUpVectorBar: p2,
  RightUpVector: d2,
  RightVectorBar: g2,
  RightVector: m2,
  ring: b2,
  risingdotseq: v2,
  rlarr: y2,
  rlhar: _2,
  rlm: k2,
  rmoustache: x2,
  rmoust: w2,
  rnmid: C2,
  roang: A2,
  roarr: E2,
  robrk: S2,
  ropar: D2,
  ropf: T2,
  Ropf: q2,
  roplus: F2,
  rotimes: z2,
  RoundImplies: L2,
  rpar: R2,
  rpargt: I2,
  rppolint: O2,
  rrarr: $2,
  Rrightarrow: N2,
  rsaquo: B2,
  rscr: P2,
  Rscr: M2,
  rsh: j2,
  Rsh: U2,
  rsqb: H2,
  rsquo: V2,
  rsquor: G2,
  rthree: Z2,
  rtimes: W2,
  rtri: K2,
  rtrie: J2,
  rtrif: Y2,
  rtriltri: Q2,
  RuleDelayed: X2,
  ruluhar: tR,
  rx: eR,
  Sacute: nR,
  sacute: rR,
  sbquo: oR,
  scap: sR,
  Scaron: iR,
  scaron: cR,
  Sc: aR,
  sc: lR,
  sccue: uR,
  sce: hR,
  scE: fR,
  Scedil: pR,
  scedil: dR,
  Scirc: gR,
  scirc: mR,
  scnap: bR,
  scnE: vR,
  scnsim: yR,
  scpolint: _R,
  scsim: kR,
  Scy: xR,
  scy: wR,
  sdotb: CR,
  sdot: AR,
  sdote: ER,
  searhk: SR,
  searr: DR,
  seArr: TR,
  searrow: qR,
  sect: FR,
  semi: zR,
  seswar: LR,
  setminus: RR,
  setmn: IR,
  sext: OR,
  Sfr: $R,
  sfr: NR,
  sfrown: BR,
  sharp: PR,
  SHCHcy: MR,
  shchcy: jR,
  SHcy: UR,
  shcy: HR,
  ShortDownArrow: VR,
  ShortLeftArrow: GR,
  shortmid: ZR,
  shortparallel: WR,
  ShortRightArrow: KR,
  ShortUpArrow: JR,
  shy: YR,
  Sigma: QR,
  sigma: XR,
  sigmaf: tI,
  sigmav: eI,
  sim: nI,
  simdot: rI,
  sime: oI,
  simeq: sI,
  simg: iI,
  simgE: cI,
  siml: aI,
  simlE: lI,
  simne: uI,
  simplus: hI,
  simrarr: fI,
  slarr: pI,
  SmallCircle: dI,
  smallsetminus: gI,
  smashp: mI,
  smeparsl: bI,
  smid: vI,
  smile: yI,
  smt: _I,
  smte: kI,
  smtes: xI,
  SOFTcy: wI,
  softcy: CI,
  solbar: AI,
  solb: EI,
  sol: SI,
  Sopf: DI,
  sopf: TI,
  spades: qI,
  spadesuit: FI,
  spar: zI,
  sqcap: LI,
  sqcaps: RI,
  sqcup: II,
  sqcups: OI,
  Sqrt: $I,
  sqsub: NI,
  sqsube: BI,
  sqsubset: PI,
  sqsubseteq: MI,
  sqsup: jI,
  sqsupe: UI,
  sqsupset: HI,
  sqsupseteq: VI,
  square: GI,
  Square: ZI,
  SquareIntersection: WI,
  SquareSubset: KI,
  SquareSubsetEqual: JI,
  SquareSuperset: YI,
  SquareSupersetEqual: QI,
  SquareUnion: XI,
  squarf: tO,
  squ: eO,
  squf: nO,
  srarr: rO,
  Sscr: oO,
  sscr: sO,
  ssetmn: iO,
  ssmile: cO,
  sstarf: aO,
  Star: lO,
  star: uO,
  starf: hO,
  straightepsilon: fO,
  straightphi: pO,
  strns: dO,
  sub: gO,
  Sub: mO,
  subdot: bO,
  subE: vO,
  sube: yO,
  subedot: _O,
  submult: kO,
  subnE: xO,
  subne: wO,
  subplus: CO,
  subrarr: AO,
  subset: EO,
  Subset: SO,
  subseteq: DO,
  subseteqq: TO,
  SubsetEqual: qO,
  subsetneq: FO,
  subsetneqq: zO,
  subsim: LO,
  subsub: RO,
  subsup: IO,
  succapprox: OO,
  succ: $O,
  succcurlyeq: NO,
  Succeeds: BO,
  SucceedsEqual: PO,
  SucceedsSlantEqual: MO,
  SucceedsTilde: jO,
  succeq: UO,
  succnapprox: HO,
  succneqq: VO,
  succnsim: GO,
  succsim: ZO,
  SuchThat: WO,
  sum: KO,
  Sum: JO,
  sung: YO,
  sup1: QO,
  sup2: XO,
  sup3: t$,
  sup: e$,
  Sup: n$,
  supdot: r$,
  supdsub: o$,
  supE: s$,
  supe: i$,
  supedot: c$,
  Superset: a$,
  SupersetEqual: l$,
  suphsol: u$,
  suphsub: h$,
  suplarr: f$,
  supmult: p$,
  supnE: d$,
  supne: g$,
  supplus: m$,
  supset: b$,
  Supset: v$,
  supseteq: y$,
  supseteqq: _$,
  supsetneq: k$,
  supsetneqq: x$,
  supsim: w$,
  supsub: C$,
  supsup: A$,
  swarhk: E$,
  swarr: S$,
  swArr: D$,
  swarrow: T$,
  swnwar: q$,
  szlig: F$,
  Tab: z$,
  target: L$,
  Tau: R$,
  tau: I$,
  tbrk: O$,
  Tcaron: $$,
  tcaron: N$,
  Tcedil: B$,
  tcedil: P$,
  Tcy: M$,
  tcy: j$,
  tdot: U$,
  telrec: H$,
  Tfr: V$,
  tfr: G$,
  there4: Z$,
  therefore: W$,
  Therefore: K$,
  Theta: J$,
  theta: Y$,
  thetasym: Q$,
  thetav: X$,
  thickapprox: tN,
  thicksim: eN,
  ThickSpace: nN,
  ThinSpace: rN,
  thinsp: oN,
  thkap: sN,
  thksim: iN,
  THORN: cN,
  thorn: aN,
  tilde: lN,
  Tilde: uN,
  TildeEqual: hN,
  TildeFullEqual: fN,
  TildeTilde: pN,
  timesbar: dN,
  timesb: gN,
  times: mN,
  timesd: bN,
  tint: vN,
  toea: yN,
  topbot: _N,
  topcir: kN,
  top: xN,
  Topf: wN,
  topf: CN,
  topfork: AN,
  tosa: EN,
  tprime: SN,
  trade: DN,
  TRADE: TN,
  triangle: qN,
  triangledown: FN,
  triangleleft: zN,
  trianglelefteq: LN,
  triangleq: RN,
  triangleright: IN,
  trianglerighteq: ON,
  tridot: $N,
  trie: NN,
  triminus: BN,
  TripleDot: PN,
  triplus: MN,
  trisb: jN,
  tritime: UN,
  trpezium: HN,
  Tscr: VN,
  tscr: GN,
  TScy: ZN,
  tscy: WN,
  TSHcy: KN,
  tshcy: JN,
  Tstrok: YN,
  tstrok: QN,
  twixt: XN,
  twoheadleftarrow: tB,
  twoheadrightarrow: eB,
  Uacute: nB,
  uacute: rB,
  uarr: oB,
  Uarr: sB,
  uArr: iB,
  Uarrocir: cB,
  Ubrcy: aB,
  ubrcy: lB,
  Ubreve: uB,
  ubreve: hB,
  Ucirc: fB,
  ucirc: pB,
  Ucy: dB,
  ucy: gB,
  udarr: mB,
  Udblac: bB,
  udblac: vB,
  udhar: yB,
  ufisht: _B,
  Ufr: kB,
  ufr: xB,
  Ugrave: wB,
  ugrave: CB,
  uHar: AB,
  uharl: EB,
  uharr: SB,
  uhblk: DB,
  ulcorn: TB,
  ulcorner: qB,
  ulcrop: FB,
  ultri: zB,
  Umacr: LB,
  umacr: RB,
  uml: IB,
  UnderBar: OB,
  UnderBrace: $B,
  UnderBracket: NB,
  UnderParenthesis: BB,
  Union: PB,
  UnionPlus: MB,
  Uogon: jB,
  uogon: UB,
  Uopf: HB,
  uopf: VB,
  UpArrowBar: GB,
  uparrow: ZB,
  UpArrow: WB,
  Uparrow: KB,
  UpArrowDownArrow: JB,
  updownarrow: YB,
  UpDownArrow: QB,
  Updownarrow: XB,
  UpEquilibrium: tP,
  upharpoonleft: eP,
  upharpoonright: nP,
  uplus: rP,
  UpperLeftArrow: oP,
  UpperRightArrow: sP,
  upsi: iP,
  Upsi: cP,
  upsih: aP,
  Upsilon: lP,
  upsilon: uP,
  UpTeeArrow: hP,
  UpTee: fP,
  upuparrows: pP,
  urcorn: dP,
  urcorner: gP,
  urcrop: mP,
  Uring: bP,
  uring: vP,
  urtri: yP,
  Uscr: _P,
  uscr: kP,
  utdot: xP,
  Utilde: wP,
  utilde: CP,
  utri: AP,
  utrif: EP,
  uuarr: SP,
  Uuml: DP,
  uuml: TP,
  uwangle: qP,
  vangrt: FP,
  varepsilon: zP,
  varkappa: LP,
  varnothing: RP,
  varphi: IP,
  varpi: OP,
  varpropto: $P,
  varr: NP,
  vArr: BP,
  varrho: PP,
  varsigma: MP,
  varsubsetneq: jP,
  varsubsetneqq: UP,
  varsupsetneq: HP,
  varsupsetneqq: VP,
  vartheta: GP,
  vartriangleleft: ZP,
  vartriangleright: WP,
  vBar: KP,
  Vbar: JP,
  vBarv: YP,
  Vcy: QP,
  vcy: XP,
  vdash: tM,
  vDash: eM,
  Vdash: nM,
  VDash: rM,
  Vdashl: oM,
  veebar: sM,
  vee: iM,
  Vee: cM,
  veeeq: aM,
  vellip: lM,
  verbar: uM,
  Verbar: hM,
  vert: fM,
  Vert: pM,
  VerticalBar: dM,
  VerticalLine: gM,
  VerticalSeparator: mM,
  VerticalTilde: bM,
  VeryThinSpace: vM,
  Vfr: yM,
  vfr: _M,
  vltri: kM,
  vnsub: xM,
  vnsup: wM,
  Vopf: CM,
  vopf: AM,
  vprop: EM,
  vrtri: SM,
  Vscr: DM,
  vscr: TM,
  vsubnE: qM,
  vsubne: FM,
  vsupnE: zM,
  vsupne: LM,
  Vvdash: RM,
  vzigzag: IM,
  Wcirc: OM,
  wcirc: $M,
  wedbar: NM,
  wedge: BM,
  Wedge: PM,
  wedgeq: MM,
  weierp: jM,
  Wfr: UM,
  wfr: HM,
  Wopf: VM,
  wopf: GM,
  wp: ZM,
  wr: WM,
  wreath: KM,
  Wscr: JM,
  wscr: YM,
  xcap: QM,
  xcirc: XM,
  xcup: t3,
  xdtri: e3,
  Xfr: n3,
  xfr: r3,
  xharr: o3,
  xhArr: s3,
  Xi: i3,
  xi: c3,
  xlarr: a3,
  xlArr: l3,
  xmap: u3,
  xnis: h3,
  xodot: f3,
  Xopf: p3,
  xopf: d3,
  xoplus: g3,
  xotime: m3,
  xrarr: b3,
  xrArr: v3,
  Xscr: y3,
  xscr: _3,
  xsqcup: k3,
  xuplus: x3,
  xutri: w3,
  xvee: C3,
  xwedge: A3,
  Yacute: E3,
  yacute: S3,
  YAcy: D3,
  yacy: T3,
  Ycirc: q3,
  ycirc: F3,
  Ycy: z3,
  ycy: L3,
  yen: R3,
  Yfr: I3,
  yfr: O3,
  YIcy: $3,
  yicy: N3,
  Yopf: B3,
  yopf: P3,
  Yscr: M3,
  yscr: j3,
  YUcy: U3,
  yucy: H3,
  yuml: V3,
  Yuml: G3,
  Zacute: Z3,
  zacute: W3,
  Zcaron: K3,
  zcaron: J3,
  Zcy: Y3,
  zcy: Q3,
  Zdot: X3,
  zdot: tj,
  zeetrf: ej,
  ZeroWidthSpace: nj,
  Zeta: rj,
  zeta: oj,
  zfr: sj,
  Zfr: ij,
  ZHcy: cj,
  zhcy: aj,
  zigrarr: lj,
  zopf: uj,
  Zopf: hj,
  Zscr: fj,
  zscr: pj,
  zwj: dj,
  zwnj: gj
};
var ts = mj, xr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Ce = {}, Yr = {};
function bj(n) {
  var t, e, r = Yr[n];
  if (r)
    return r;
  for (r = Yr[n] = [], t = 0; t < 128; t++)
    e = String.fromCharCode(t), /^[0-9a-z]$/i.test(e) ? r.push(e) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  for (t = 0; t < n.length; t++)
    r[n.charCodeAt(t)] = n[t];
  return r;
}
function _n(n, t, e) {
  var r, o, s, i, c, a = "";
  for (typeof t != "string" && (e = t, t = _n.defaultChars), typeof e > "u" && (e = !0), c = bj(t), r = 0, o = n.length; r < o; r++) {
    if (s = n.charCodeAt(r), e && s === 37 && r + 2 < o && /^[0-9a-f]{2}$/i.test(n.slice(r + 1, r + 3))) {
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
_n.defaultChars = ";/?:@&=+$,-_.!~*'()#";
_n.componentChars = "-_.!~*'()";
var vj = _n, Qr = {};
function yj(n) {
  var t, e, r = Qr[n];
  if (r)
    return r;
  for (r = Qr[n] = [], t = 0; t < 128; t++)
    e = String.fromCharCode(t), r.push(e);
  for (t = 0; t < n.length; t++)
    e = n.charCodeAt(t), r[e] = "%" + ("0" + e.toString(16).toUpperCase()).slice(-2);
  return r;
}
function kn(n, t) {
  var e;
  return typeof t != "string" && (t = kn.defaultChars), e = yj(t), n.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    var o, s, i, c, a, l, u, f = "";
    for (o = 0, s = r.length; o < s; o += 3) {
      if (i = parseInt(r.slice(o + 1, o + 3), 16), i < 128) {
        f += e[i];
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
kn.defaultChars = ";/?:@&=+$,#";
kn.componentChars = "";
var _j = kn, kj = function(t) {
  var e = "";
  return e += t.protocol || "", e += t.slashes ? "//" : "", e += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? e += "[" + t.hostname + "]" : e += t.hostname || "", e += t.port ? ":" + t.port : "", e += t.pathname || "", e += t.search || "", e += t.hash || "", e;
};
function gn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var xj = /^([a-z0-9.+-]+:)/i, wj = /:[0-9]*$/, Cj = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Aj = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Ej = ["{", "}", "|", "\\", "^", "`"].concat(Aj), Sj = ["'"].concat(Ej), Xr = ["%", "/", "?", ";", "#"].concat(Sj), to = ["/", "?", "#"], Dj = 255, eo = /^[+a-z0-9A-Z_-]{0,63}$/, Tj = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, no = {
  javascript: !0,
  "javascript:": !0
}, ro = {
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
function qj(n, t) {
  if (n && n instanceof gn)
    return n;
  var e = new gn();
  return e.parse(n, t), e;
}
gn.prototype.parse = function(n, t) {
  var e, r, o, s, i, c = n;
  if (c = c.trim(), !t && n.split("#").length === 1) {
    var a = Cj.exec(c);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  var l = xj.exec(c);
  if (l && (l = l[0], o = l.toLowerCase(), this.protocol = l, c = c.substr(l.length)), (t || l || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = c.substr(0, 2) === "//", i && !(l && no[l]) && (c = c.substr(2), this.slashes = !0)), !no[l] && (i || l && !ro[l])) {
    var u = -1;
    for (e = 0; e < to.length; e++)
      s = c.indexOf(to[e]), s !== -1 && (u === -1 || s < u) && (u = s);
    var f, d;
    for (u === -1 ? d = c.lastIndexOf("@") : d = c.lastIndexOf("@", u), d !== -1 && (f = c.slice(0, d), c = c.slice(d + 1), this.auth = f), u = -1, e = 0; e < Xr.length; e++)
      s = c.indexOf(Xr[e]), s !== -1 && (u === -1 || s < u) && (u = s);
    u === -1 && (u = c.length), c[u - 1] === ":" && u--;
    var p = c.slice(0, u);
    c = c.slice(u), this.parseHost(p), this.hostname = this.hostname || "";
    var m = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!m) {
      var g = this.hostname.split(/\./);
      for (e = 0, r = g.length; e < r; e++) {
        var x = g[e];
        if (x && !x.match(eo)) {
          for (var w = "", k = 0, C = x.length; k < C; k++)
            x.charCodeAt(k) > 127 ? w += "x" : w += x[k];
          if (!w.match(eo)) {
            var T = g.slice(0, e), E = g.slice(e + 1), _ = x.match(Tj);
            _ && (T.push(_[1]), E.unshift(_[2])), E.length && (c = E.join(".") + c), this.hostname = T.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Dj && (this.hostname = ""), m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var v = c.indexOf("#");
  v !== -1 && (this.hash = c.substr(v), c = c.slice(0, v));
  var b = c.indexOf("?");
  return b !== -1 && (this.search = c.substr(b), c = c.slice(0, b)), c && (this.pathname = c), ro[o] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
gn.prototype.parseHost = function(n) {
  var t = wj.exec(n);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), n = n.substr(0, n.length - t.length)), n && (this.hostname = n);
};
var Fj = qj;
Ce.encode = vj;
Ce.decode = _j;
Ce.format = kj;
Ce.parse = Fj;
var se = {}, Bn, oo;
function es() {
  return oo || (oo = 1, Bn = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), Bn;
}
var Pn, so;
function ns() {
  return so || (so = 1, Pn = /[\0-\x1F\x7F-\x9F]/), Pn;
}
var Mn, io;
function zj() {
  return io || (io = 1, Mn = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Mn;
}
var jn, co;
function rs() {
  return co || (co = 1, jn = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), jn;
}
var ao;
function Lj() {
  return ao || (ao = 1, se.Any = es(), se.Cc = ns(), se.Cf = zj(), se.P = xr, se.Z = rs()), se;
}
(function(n) {
  function t(y) {
    return Object.prototype.toString.call(y);
  }
  function e(y) {
    return t(y) === "[object String]";
  }
  var r = Object.prototype.hasOwnProperty;
  function o(y, F) {
    return r.call(y, F);
  }
  function s(y) {
    var F = Array.prototype.slice.call(arguments, 1);
    return F.forEach(function(A) {
      if (A) {
        if (typeof A != "object")
          throw new TypeError(A + "must be object");
        Object.keys(A).forEach(function(P) {
          y[P] = A[P];
        });
      }
    }), y;
  }
  function i(y, F, A) {
    return [].concat(y.slice(0, F), A, y.slice(F + 1));
  }
  function c(y) {
    return !(y >= 55296 && y <= 57343 || y >= 64976 && y <= 65007 || (y & 65535) === 65535 || (y & 65535) === 65534 || y >= 0 && y <= 8 || y === 11 || y >= 14 && y <= 31 || y >= 127 && y <= 159 || y > 1114111);
  }
  function a(y) {
    if (y > 65535) {
      y -= 65536;
      var F = 55296 + (y >> 10), A = 56320 + (y & 1023);
      return String.fromCharCode(F, A);
    }
    return String.fromCharCode(y);
  }
  var l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, u = /&([a-z#][a-z0-9]{1,31});/gi, f = new RegExp(l.source + "|" + u.source, "gi"), d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, p = ts;
  function m(y, F) {
    var A;
    return o(p, F) ? p[F] : F.charCodeAt(0) === 35 && d.test(F) && (A = F[1].toLowerCase() === "x" ? parseInt(F.slice(2), 16) : parseInt(F.slice(1), 10), c(A)) ? a(A) : y;
  }
  function g(y) {
    return y.indexOf("\\") < 0 ? y : y.replace(l, "$1");
  }
  function x(y) {
    return y.indexOf("\\") < 0 && y.indexOf("&") < 0 ? y : y.replace(f, function(F, A, P) {
      return A || m(F, P);
    });
  }
  var w = /[&<>"]/, k = /[&<>"]/g, C = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function T(y) {
    return C[y];
  }
  function E(y) {
    return w.test(y) ? y.replace(k, T) : y;
  }
  var _ = /[.?*+^$[\]\\(){}|-]/g;
  function v(y) {
    return y.replace(_, "\\$&");
  }
  function b(y) {
    switch (y) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function O(y) {
    if (y >= 8192 && y <= 8202)
      return !0;
    switch (y) {
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
  var S = xr;
  function L(y) {
    return S.test(y);
  }
  function D(y) {
    switch (y) {
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
  function z(y) {
    return y = y.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (y = y.replace(/ẞ/g, "ß")), y.toLowerCase().toUpperCase();
  }
  n.lib = {}, n.lib.mdurl = Ce, n.lib.ucmicro = Lj(), n.assign = s, n.isString = e, n.has = o, n.unescapeMd = g, n.unescapeAll = x, n.isValidEntityCode = c, n.fromCodePoint = a, n.escapeHtml = E, n.arrayReplaceAt = i, n.isSpace = b, n.isWhiteSpace = O, n.isMdAsciiPunct = D, n.isPunctChar = L, n.escapeRE = v, n.normalizeReference = z;
})(M);
var xn = {}, Rj = function(t, e, r) {
  var o, s, i, c, a = -1, l = t.posMax, u = t.pos;
  for (t.pos = e + 1, o = 1; t.pos < l; ) {
    if (i = t.src.charCodeAt(t.pos), i === 93 && (o--, o === 0)) {
      s = !0;
      break;
    }
    if (c = t.pos, t.md.inline.skipToken(t), i === 91) {
      if (c === t.pos - 1)
        o++;
      else if (r)
        return t.pos = u, -1;
    }
  }
  return s && (a = t.pos), t.pos = u, a;
}, lo = M.unescapeAll, Ij = function(t, e, r) {
  var o, s, i = e, c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (t.charCodeAt(i) === 60) {
    for (i++; i < r; ) {
      if (o = t.charCodeAt(i), o === 10 || o === 60)
        return c;
      if (o === 62)
        return c.pos = i + 1, c.str = lo(t.slice(e + 1, i)), c.ok = !0, c;
      if (o === 92 && i + 1 < r) {
        i += 2;
        continue;
      }
      i++;
    }
    return c;
  }
  for (s = 0; i < r && (o = t.charCodeAt(i), !(o === 32 || o < 32 || o === 127)); ) {
    if (o === 92 && i + 1 < r) {
      if (t.charCodeAt(i + 1) === 32)
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
  return e === i || s !== 0 || (c.str = lo(t.slice(e, i)), c.pos = i, c.ok = !0), c;
}, Oj = M.unescapeAll, $j = function(t, e, r) {
  var o, s, i = 0, c = e, a = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (c >= r || (s = t.charCodeAt(c), s !== 34 && s !== 39 && s !== 40))
    return a;
  for (c++, s === 40 && (s = 41); c < r; ) {
    if (o = t.charCodeAt(c), o === s)
      return a.pos = c + 1, a.lines = i, a.str = Oj(t.slice(e + 1, c)), a.ok = !0, a;
    if (o === 40 && s === 41)
      return a;
    o === 10 ? i++ : o === 92 && c + 1 < r && (c++, t.charCodeAt(c) === 10 && i++), c++;
  }
  return a;
};
xn.parseLinkLabel = Rj;
xn.parseLinkDestination = Ij;
xn.parseLinkTitle = $j;
var Nj = M.assign, Bj = M.unescapeAll, pe = M.escapeHtml, Rt = {};
Rt.code_inline = function(n, t, e, r, o) {
  var s = n[t];
  return "<code" + o.renderAttrs(s) + ">" + pe(s.content) + "</code>";
};
Rt.code_block = function(n, t, e, r, o) {
  var s = n[t];
  return "<pre" + o.renderAttrs(s) + "><code>" + pe(n[t].content) + `</code></pre>
`;
};
Rt.fence = function(n, t, e, r, o) {
  var s = n[t], i = s.info ? Bj(s.info).trim() : "", c = "", a = "", l, u, f, d, p;
  return i && (f = i.split(/(\s+)/g), c = f[0], a = f.slice(2).join("")), e.highlight ? l = e.highlight(s.content, c, a) || pe(s.content) : l = pe(s.content), l.indexOf("<pre") === 0 ? l + `
` : i ? (u = s.attrIndex("class"), d = s.attrs ? s.attrs.slice() : [], u < 0 ? d.push(["class", e.langPrefix + c]) : (d[u] = d[u].slice(), d[u][1] += " " + e.langPrefix + c), p = {
    attrs: d
  }, "<pre><code" + o.renderAttrs(p) + ">" + l + `</code></pre>
`) : "<pre><code" + o.renderAttrs(s) + ">" + l + `</code></pre>
`;
};
Rt.image = function(n, t, e, r, o) {
  var s = n[t];
  return s.attrs[s.attrIndex("alt")][1] = o.renderInlineAsText(s.children, e, r), o.renderToken(n, t, e);
};
Rt.hardbreak = function(n, t, e) {
  return e.xhtmlOut ? `<br />
` : `<br>
`;
};
Rt.softbreak = function(n, t, e) {
  return e.breaks ? e.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Rt.text = function(n, t) {
  return pe(n[t].content);
};
Rt.html_block = function(n, t) {
  return n[t].content;
};
Rt.html_inline = function(n, t) {
  return n[t].content;
};
function Ae() {
  this.rules = Nj({}, Rt);
}
Ae.prototype.renderAttrs = function(t) {
  var e, r, o;
  if (!t.attrs)
    return "";
  for (o = "", e = 0, r = t.attrs.length; e < r; e++)
    o += " " + pe(t.attrs[e][0]) + '="' + pe(t.attrs[e][1]) + '"';
  return o;
};
Ae.prototype.renderToken = function(t, e, r) {
  var o, s = "", i = !1, c = t[e];
  return c.hidden ? "" : (c.block && c.nesting !== -1 && e && t[e - 1].hidden && (s += `
`), s += (c.nesting === -1 ? "</" : "<") + c.tag, s += this.renderAttrs(c), c.nesting === 0 && r.xhtmlOut && (s += " /"), c.block && (i = !0, c.nesting === 1 && e + 1 < t.length && (o = t[e + 1], (o.type === "inline" || o.hidden || o.nesting === -1 && o.tag === c.tag) && (i = !1))), s += i ? `>
` : ">", s);
};
Ae.prototype.renderInline = function(n, t, e) {
  for (var r, o = "", s = this.rules, i = 0, c = n.length; i < c; i++)
    r = n[i].type, typeof s[r] < "u" ? o += s[r](n, i, t, e, this) : o += this.renderToken(n, i, t);
  return o;
};
Ae.prototype.renderInlineAsText = function(n, t, e) {
  for (var r = "", o = 0, s = n.length; o < s; o++)
    n[o].type === "text" ? r += n[o].content : n[o].type === "image" ? r += this.renderInlineAsText(n[o].children, t, e) : n[o].type === "softbreak" && (r += `
`);
  return r;
};
Ae.prototype.render = function(n, t, e) {
  var r, o, s, i = "", c = this.rules;
  for (r = 0, o = n.length; r < o; r++)
    s = n[r].type, s === "inline" ? i += this.renderInline(n[r].children, t, e) : typeof c[s] < "u" ? i += c[s](n, r, t, e, this) : i += this.renderToken(n, r, t, e);
  return i;
};
var Pj = Ae;
function _t() {
  this.__rules__ = [], this.__cache__ = null;
}
_t.prototype.__find__ = function(n) {
  for (var t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === n)
      return t;
  return -1;
};
_t.prototype.__compile__ = function() {
  var n = this, t = [""];
  n.__rules__.forEach(function(e) {
    e.enabled && e.alt.forEach(function(r) {
      t.indexOf(r) < 0 && t.push(r);
    });
  }), n.__cache__ = {}, t.forEach(function(e) {
    n.__cache__[e] = [], n.__rules__.forEach(function(r) {
      r.enabled && (e && r.alt.indexOf(e) < 0 || n.__cache__[e].push(r.fn));
    });
  });
};
_t.prototype.at = function(n, t, e) {
  var r = this.__find__(n), o = e || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__[r].fn = t, this.__rules__[r].alt = o.alt || [], this.__cache__ = null;
};
_t.prototype.before = function(n, t, e, r) {
  var o = this.__find__(n), s = r || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(o, 0, {
    name: t,
    enabled: !0,
    fn: e,
    alt: s.alt || []
  }), this.__cache__ = null;
};
_t.prototype.after = function(n, t, e, r) {
  var o = this.__find__(n), s = r || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(o + 1, 0, {
    name: t,
    enabled: !0,
    fn: e,
    alt: s.alt || []
  }), this.__cache__ = null;
};
_t.prototype.push = function(n, t, e) {
  var r = e || {};
  this.__rules__.push({
    name: n,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
_t.prototype.enable = function(n, t) {
  Array.isArray(n) || (n = [n]);
  var e = [];
  return n.forEach(function(r) {
    var o = this.__find__(r);
    if (o < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[o].enabled = !0, e.push(r);
  }, this), this.__cache__ = null, e;
};
_t.prototype.enableOnly = function(n, t) {
  Array.isArray(n) || (n = [n]), this.__rules__.forEach(function(e) {
    e.enabled = !1;
  }), this.enable(n, t);
};
_t.prototype.disable = function(n, t) {
  Array.isArray(n) || (n = [n]);
  var e = [];
  return n.forEach(function(r) {
    var o = this.__find__(r);
    if (o < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[o].enabled = !1, e.push(r);
  }, this), this.__cache__ = null, e;
};
_t.prototype.getRules = function(n) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[n] || [];
};
var wr = _t, Mj = /\r\n?|\n/g, jj = /\0/g, Uj = function(t) {
  var e;
  e = t.src.replace(Mj, `
`), e = e.replace(jj, "�"), t.src = e;
}, Hj = function(t) {
  var e;
  t.inlineMode ? (e = new t.Token("inline", "", 0), e.content = t.src, e.map = [0, 1], e.children = [], t.tokens.push(e)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
}, Vj = function(t) {
  var e = t.tokens, r, o, s;
  for (o = 0, s = e.length; o < s; o++)
    r = e[o], r.type === "inline" && t.md.inline.parse(r.content, t.md, t.env, r.children);
}, Gj = M.arrayReplaceAt;
function Zj(n) {
  return /^<a[>\s]/i.test(n);
}
function Wj(n) {
  return /^<\/a\s*>/i.test(n);
}
var Kj = function(t) {
  var e, r, o, s, i, c, a, l, u, f, d, p, m, g, x, w, k = t.tokens, C;
  if (t.md.options.linkify) {
    for (r = 0, o = k.length; r < o; r++)
      if (!(k[r].type !== "inline" || !t.md.linkify.pretest(k[r].content)))
        for (s = k[r].children, m = 0, e = s.length - 1; e >= 0; e--) {
          if (c = s[e], c.type === "link_close") {
            for (e--; s[e].level !== c.level && s[e].type !== "link_open"; )
              e--;
            continue;
          }
          if (c.type === "html_inline" && (Zj(c.content) && m > 0 && m--, Wj(c.content) && m++), !(m > 0) && c.type === "text" && t.md.linkify.test(c.content)) {
            for (u = c.content, C = t.md.linkify.match(u), a = [], p = c.level, d = 0, C.length > 0 && C[0].index === 0 && e > 0 && s[e - 1].type === "text_special" && (C = C.slice(1)), l = 0; l < C.length; l++)
              g = C[l].url, x = t.md.normalizeLink(g), t.md.validateLink(x) && (w = C[l].text, C[l].schema ? C[l].schema === "mailto:" && !/^mailto:/i.test(w) ? w = t.md.normalizeLinkText("mailto:" + w).replace(/^mailto:/, "") : w = t.md.normalizeLinkText(w) : w = t.md.normalizeLinkText("http://" + w).replace(/^http:\/\//, ""), f = C[l].index, f > d && (i = new t.Token("text", "", 0), i.content = u.slice(d, f), i.level = p, a.push(i)), i = new t.Token("link_open", "a", 1), i.attrs = [["href", x]], i.level = p++, i.markup = "linkify", i.info = "auto", a.push(i), i = new t.Token("text", "", 0), i.content = w, i.level = p, a.push(i), i = new t.Token("link_close", "a", -1), i.level = --p, i.markup = "linkify", i.info = "auto", a.push(i), d = C[l].lastIndex);
            d < u.length && (i = new t.Token("text", "", 0), i.content = u.slice(d), i.level = p, a.push(i)), k[r].children = s = Gj(s, e, a);
          }
        }
  }
}, os = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Jj = /\((c|tm|r)\)/i, Yj = /\((c|tm|r)\)/ig, Qj = {
  c: "©",
  r: "®",
  tm: "™"
};
function Xj(n, t) {
  return Qj[t.toLowerCase()];
}
function tU(n) {
  var t, e, r = 0;
  for (t = n.length - 1; t >= 0; t--)
    e = n[t], e.type === "text" && !r && (e.content = e.content.replace(Yj, Xj)), e.type === "link_open" && e.info === "auto" && r--, e.type === "link_close" && e.info === "auto" && r++;
}
function eU(n) {
  var t, e, r = 0;
  for (t = n.length - 1; t >= 0; t--)
    e = n[t], e.type === "text" && !r && os.test(e.content) && (e.content = e.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), e.type === "link_open" && e.info === "auto" && r--, e.type === "link_close" && e.info === "auto" && r++;
}
var nU = function(t) {
  var e;
  if (t.md.options.typographer)
    for (e = t.tokens.length - 1; e >= 0; e--)
      t.tokens[e].type === "inline" && (Jj.test(t.tokens[e].content) && tU(t.tokens[e].children), os.test(t.tokens[e].content) && eU(t.tokens[e].children));
}, uo = M.isWhiteSpace, ho = M.isPunctChar, fo = M.isMdAsciiPunct, rU = /['"]/, po = /['"]/g, go = "’";
function nn(n, t, e) {
  return n.slice(0, t) + e + n.slice(t + 1);
}
function oU(n, t) {
  var e, r, o, s, i, c, a, l, u, f, d, p, m, g, x, w, k, C, T, E, _;
  for (T = [], e = 0; e < n.length; e++) {
    for (r = n[e], a = n[e].level, k = T.length - 1; k >= 0 && !(T[k].level <= a); k--)
      ;
    if (T.length = k + 1, r.type === "text") {
      o = r.content, i = 0, c = o.length;
      t:
        for (; i < c && (po.lastIndex = i, s = po.exec(o), !!s); ) {
          if (x = w = !0, i = s.index + 1, C = s[0] === "'", u = 32, s.index - 1 >= 0)
            u = o.charCodeAt(s.index - 1);
          else
            for (k = e - 1; k >= 0 && !(n[k].type === "softbreak" || n[k].type === "hardbreak"); k--)
              if (n[k].content) {
                u = n[k].content.charCodeAt(n[k].content.length - 1);
                break;
              }
          if (f = 32, i < c)
            f = o.charCodeAt(i);
          else
            for (k = e + 1; k < n.length && !(n[k].type === "softbreak" || n[k].type === "hardbreak"); k++)
              if (n[k].content) {
                f = n[k].content.charCodeAt(0);
                break;
              }
          if (d = fo(u) || ho(String.fromCharCode(u)), p = fo(f) || ho(String.fromCharCode(f)), m = uo(u), g = uo(f), g ? x = !1 : p && (m || d || (x = !1)), m ? w = !1 : d && (g || p || (w = !1)), f === 34 && s[0] === '"' && u >= 48 && u <= 57 && (w = x = !1), x && w && (x = d, w = p), !x && !w) {
            C && (r.content = nn(r.content, s.index, go));
            continue;
          }
          if (w) {
            for (k = T.length - 1; k >= 0 && (l = T[k], !(T[k].level < a)); k--)
              if (l.single === C && T[k].level === a) {
                l = T[k], C ? (E = t.md.options.quotes[2], _ = t.md.options.quotes[3]) : (E = t.md.options.quotes[0], _ = t.md.options.quotes[1]), r.content = nn(r.content, s.index, _), n[l.token].content = nn(
                  n[l.token].content,
                  l.pos,
                  E
                ), i += _.length - 1, l.token === e && (i += E.length - 1), o = r.content, c = o.length, T.length = k;
                continue t;
              }
          }
          x ? T.push({
            token: e,
            pos: s.index,
            single: C,
            level: a
          }) : w && C && (r.content = nn(r.content, s.index, go));
        }
    }
  }
}
var sU = function(t) {
  var e;
  if (t.md.options.typographer)
    for (e = t.tokens.length - 1; e >= 0; e--)
      t.tokens[e].type !== "inline" || !rU.test(t.tokens[e].content) || oU(t.tokens[e].children, t);
}, iU = function(t) {
  var e, r, o, s, i, c, a = t.tokens;
  for (e = 0, r = a.length; e < r; e++)
    if (a[e].type === "inline") {
      for (o = a[e].children, i = o.length, s = 0; s < i; s++)
        o[s].type === "text_special" && (o[s].type = "text");
      for (s = c = 0; s < i; s++)
        o[s].type === "text" && s + 1 < i && o[s + 1].type === "text" ? o[s + 1].content = o[s].content + o[s + 1].content : (s !== c && (o[c] = o[s]), c++);
      s !== c && (o.length = c);
    }
};
function Ee(n, t, e) {
  this.type = n, this.tag = t, this.attrs = null, this.map = null, this.nesting = e, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Ee.prototype.attrIndex = function(t) {
  var e, r, o;
  if (!this.attrs)
    return -1;
  for (e = this.attrs, r = 0, o = e.length; r < o; r++)
    if (e[r][0] === t)
      return r;
  return -1;
};
Ee.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
Ee.prototype.attrSet = function(t, e) {
  var r = this.attrIndex(t), o = [t, e];
  r < 0 ? this.attrPush(o) : this.attrs[r] = o;
};
Ee.prototype.attrGet = function(t) {
  var e = this.attrIndex(t), r = null;
  return e >= 0 && (r = this.attrs[e][1]), r;
};
Ee.prototype.attrJoin = function(t, e) {
  var r = this.attrIndex(t);
  r < 0 ? this.attrPush([t, e]) : this.attrs[r][1] = this.attrs[r][1] + " " + e;
};
var Cr = Ee, cU = Cr;
function ss(n, t, e) {
  this.src = n, this.env = e, this.tokens = [], this.inlineMode = !1, this.md = t;
}
ss.prototype.Token = cU;
var aU = ss, lU = wr, Un = [
  ["normalize", Uj],
  ["block", Hj],
  ["inline", Vj],
  ["linkify", Kj],
  ["replacements", nU],
  ["smartquotes", sU],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", iU]
];
function Ar() {
  this.ruler = new lU();
  for (var n = 0; n < Un.length; n++)
    this.ruler.push(Un[n][0], Un[n][1]);
}
Ar.prototype.process = function(n) {
  var t, e, r;
  for (r = this.ruler.getRules(""), t = 0, e = r.length; t < e; t++)
    r[t](n);
};
Ar.prototype.State = aU;
var uU = Ar, Hn = M.isSpace;
function Vn(n, t) {
  var e = n.bMarks[t] + n.tShift[t], r = n.eMarks[t];
  return n.src.slice(e, r);
}
function mo(n) {
  var t = [], e = 0, r = n.length, o, s = !1, i = 0, c = "";
  for (o = n.charCodeAt(e); e < r; )
    o === 124 && (s ? (c += n.substring(i, e - 1), i = e) : (t.push(c + n.substring(i, e)), c = "", i = e + 1)), s = o === 92, e++, o = n.charCodeAt(e);
  return t.push(c + n.substring(i)), t;
}
var hU = function(t, e, r, o) {
  var s, i, c, a, l, u, f, d, p, m, g, x, w, k, C, T, E, _;
  if (e + 2 > r || (u = e + 1, t.sCount[u] < t.blkIndent) || t.sCount[u] - t.blkIndent >= 4 || (c = t.bMarks[u] + t.tShift[u], c >= t.eMarks[u]) || (E = t.src.charCodeAt(c++), E !== 124 && E !== 45 && E !== 58) || c >= t.eMarks[u] || (_ = t.src.charCodeAt(c++), _ !== 124 && _ !== 45 && _ !== 58 && !Hn(_)) || E === 45 && Hn(_))
    return !1;
  for (; c < t.eMarks[u]; ) {
    if (s = t.src.charCodeAt(c), s !== 124 && s !== 45 && s !== 58 && !Hn(s))
      return !1;
    c++;
  }
  for (i = Vn(t, e + 1), f = i.split("|"), m = [], a = 0; a < f.length; a++) {
    if (g = f[a].trim(), !g) {
      if (a === 0 || a === f.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(g))
      return !1;
    g.charCodeAt(g.length - 1) === 58 ? m.push(g.charCodeAt(0) === 58 ? "center" : "right") : g.charCodeAt(0) === 58 ? m.push("left") : m.push("");
  }
  if (i = Vn(t, e).trim(), i.indexOf("|") === -1 || t.sCount[e] - t.blkIndent >= 4 || (f = mo(i), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), d = f.length, d === 0 || d !== m.length))
    return !1;
  if (o)
    return !0;
  for (k = t.parentType, t.parentType = "table", T = t.md.block.ruler.getRules("blockquote"), p = t.push("table_open", "table", 1), p.map = x = [e, 0], p = t.push("thead_open", "thead", 1), p.map = [e, e + 1], p = t.push("tr_open", "tr", 1), p.map = [e, e + 1], a = 0; a < f.length; a++)
    p = t.push("th_open", "th", 1), m[a] && (p.attrs = [["style", "text-align:" + m[a]]]), p = t.push("inline", "", 0), p.content = f[a].trim(), p.children = [], p = t.push("th_close", "th", -1);
  for (p = t.push("tr_close", "tr", -1), p = t.push("thead_close", "thead", -1), u = e + 2; u < r && !(t.sCount[u] < t.blkIndent); u++) {
    for (C = !1, a = 0, l = T.length; a < l; a++)
      if (T[a](t, u, r, !0)) {
        C = !0;
        break;
      }
    if (C || (i = Vn(t, u).trim(), !i) || t.sCount[u] - t.blkIndent >= 4)
      break;
    for (f = mo(i), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), u === e + 2 && (p = t.push("tbody_open", "tbody", 1), p.map = w = [e + 2, 0]), p = t.push("tr_open", "tr", 1), p.map = [u, u + 1], a = 0; a < d; a++)
      p = t.push("td_open", "td", 1), m[a] && (p.attrs = [["style", "text-align:" + m[a]]]), p = t.push("inline", "", 0), p.content = f[a] ? f[a].trim() : "", p.children = [], p = t.push("td_close", "td", -1);
    p = t.push("tr_close", "tr", -1);
  }
  return w && (p = t.push("tbody_close", "tbody", -1), w[1] = u), p = t.push("table_close", "table", -1), x[1] = u, t.parentType = k, t.line = u, !0;
}, fU = function(t, e, r) {
  var o, s, i;
  if (t.sCount[e] - t.blkIndent < 4)
    return !1;
  for (s = o = e + 1; o < r; ) {
    if (t.isEmpty(o)) {
      o++;
      continue;
    }
    if (t.sCount[o] - t.blkIndent >= 4) {
      o++, s = o;
      continue;
    }
    break;
  }
  return t.line = s, i = t.push("code_block", "code", 0), i.content = t.getLines(e, s, 4 + t.blkIndent, !1) + `
`, i.map = [e, t.line], !0;
}, pU = function(t, e, r, o) {
  var s, i, c, a, l, u, f, d = !1, p = t.bMarks[e] + t.tShift[e], m = t.eMarks[e];
  if (t.sCount[e] - t.blkIndent >= 4 || p + 3 > m || (s = t.src.charCodeAt(p), s !== 126 && s !== 96) || (l = p, p = t.skipChars(p, s), i = p - l, i < 3) || (f = t.src.slice(l, p), c = t.src.slice(p, m), s === 96 && c.indexOf(String.fromCharCode(s)) >= 0))
    return !1;
  if (o)
    return !0;
  for (a = e; a++, !(a >= r || (p = l = t.bMarks[a] + t.tShift[a], m = t.eMarks[a], p < m && t.sCount[a] < t.blkIndent)); )
    if (t.src.charCodeAt(p) === s && !(t.sCount[a] - t.blkIndent >= 4) && (p = t.skipChars(p, s), !(p - l < i) && (p = t.skipSpaces(p), !(p < m)))) {
      d = !0;
      break;
    }
  return i = t.sCount[e], t.line = a + (d ? 1 : 0), u = t.push("fence", "code", 0), u.info = c, u.content = t.getLines(e + 1, a, i, !0), u.markup = f, u.map = [e, t.line], !0;
}, dU = M.isSpace, gU = function(t, e, r, o) {
  var s, i, c, a, l, u, f, d, p, m, g, x, w, k, C, T, E, _, v, b, O = t.lineMax, S = t.bMarks[e] + t.tShift[e], L = t.eMarks[e];
  if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(S) !== 62)
    return !1;
  if (o)
    return !0;
  for (m = [], g = [], k = [], C = [], _ = t.md.block.ruler.getRules("blockquote"), w = t.parentType, t.parentType = "blockquote", d = e; d < r && (b = t.sCount[d] < t.blkIndent, S = t.bMarks[d] + t.tShift[d], L = t.eMarks[d], !(S >= L)); d++) {
    if (t.src.charCodeAt(S++) === 62 && !b) {
      for (a = t.sCount[d] + 1, t.src.charCodeAt(S) === 32 ? (S++, a++, s = !1, T = !0) : t.src.charCodeAt(S) === 9 ? (T = !0, (t.bsCount[d] + a) % 4 === 3 ? (S++, a++, s = !1) : s = !0) : T = !1, p = a, m.push(t.bMarks[d]), t.bMarks[d] = S; S < L && (i = t.src.charCodeAt(S), dU(i)); ) {
        i === 9 ? p += 4 - (p + t.bsCount[d] + (s ? 1 : 0)) % 4 : p++;
        S++;
      }
      u = S >= L, g.push(t.bsCount[d]), t.bsCount[d] = t.sCount[d] + 1 + (T ? 1 : 0), k.push(t.sCount[d]), t.sCount[d] = p - a, C.push(t.tShift[d]), t.tShift[d] = S - t.bMarks[d];
      continue;
    }
    if (u)
      break;
    for (E = !1, c = 0, l = _.length; c < l; c++)
      if (_[c](t, d, r, !0)) {
        E = !0;
        break;
      }
    if (E) {
      t.lineMax = d, t.blkIndent !== 0 && (m.push(t.bMarks[d]), g.push(t.bsCount[d]), C.push(t.tShift[d]), k.push(t.sCount[d]), t.sCount[d] -= t.blkIndent);
      break;
    }
    m.push(t.bMarks[d]), g.push(t.bsCount[d]), C.push(t.tShift[d]), k.push(t.sCount[d]), t.sCount[d] = -1;
  }
  for (x = t.blkIndent, t.blkIndent = 0, v = t.push("blockquote_open", "blockquote", 1), v.markup = ">", v.map = f = [e, 0], t.md.block.tokenize(t, e, d), v = t.push("blockquote_close", "blockquote", -1), v.markup = ">", t.lineMax = O, t.parentType = w, f[1] = t.line, c = 0; c < C.length; c++)
    t.bMarks[c + e] = m[c], t.tShift[c + e] = C[c], t.sCount[c + e] = k[c], t.bsCount[c + e] = g[c];
  return t.blkIndent = x, !0;
}, mU = M.isSpace, bU = function(t, e, r, o) {
  var s, i, c, a, l = t.bMarks[e] + t.tShift[e], u = t.eMarks[e];
  if (t.sCount[e] - t.blkIndent >= 4 || (s = t.src.charCodeAt(l++), s !== 42 && s !== 45 && s !== 95))
    return !1;
  for (i = 1; l < u; ) {
    if (c = t.src.charCodeAt(l++), c !== s && !mU(c))
      return !1;
    c === s && i++;
  }
  return i < 3 ? !1 : (o || (t.line = e + 1, a = t.push("hr", "hr", 0), a.map = [e, t.line], a.markup = Array(i + 1).join(String.fromCharCode(s))), !0);
}, is = M.isSpace;
function bo(n, t) {
  var e, r, o, s;
  return r = n.bMarks[t] + n.tShift[t], o = n.eMarks[t], e = n.src.charCodeAt(r++), e !== 42 && e !== 45 && e !== 43 || r < o && (s = n.src.charCodeAt(r), !is(s)) ? -1 : r;
}
function vo(n, t) {
  var e, r = n.bMarks[t] + n.tShift[t], o = r, s = n.eMarks[t];
  if (o + 1 >= s || (e = n.src.charCodeAt(o++), e < 48 || e > 57))
    return -1;
  for (; ; ) {
    if (o >= s)
      return -1;
    if (e = n.src.charCodeAt(o++), e >= 48 && e <= 57) {
      if (o - r >= 10)
        return -1;
      continue;
    }
    if (e === 41 || e === 46)
      break;
    return -1;
  }
  return o < s && (e = n.src.charCodeAt(o), !is(e)) ? -1 : o;
}
function vU(n, t) {
  var e, r, o = n.level + 2;
  for (e = t + 2, r = n.tokens.length - 2; e < r; e++)
    n.tokens[e].level === o && n.tokens[e].type === "paragraph_open" && (n.tokens[e + 2].hidden = !0, n.tokens[e].hidden = !0, e += 2);
}
var yU = function(t, e, r, o) {
  var s, i, c, a, l, u, f, d, p, m, g, x, w, k, C, T, E, _, v, b, O, S, L, D, z, y, F, A = e, P = !1, Z = !0;
  if (t.sCount[A] - t.blkIndent >= 4 || t.listIndent >= 0 && t.sCount[A] - t.listIndent >= 4 && t.sCount[A] < t.blkIndent)
    return !1;
  if (o && t.parentType === "paragraph" && t.sCount[A] >= t.blkIndent && (P = !0), (S = vo(t, A)) >= 0) {
    if (f = !0, D = t.bMarks[A] + t.tShift[A], w = Number(t.src.slice(D, S - 1)), P && w !== 1)
      return !1;
  } else if ((S = bo(t, A)) >= 0)
    f = !1;
  else
    return !1;
  if (P && t.skipSpaces(S) >= t.eMarks[A])
    return !1;
  if (o)
    return !0;
  for (x = t.src.charCodeAt(S - 1), g = t.tokens.length, f ? (F = t.push("ordered_list_open", "ol", 1), w !== 1 && (F.attrs = [["start", w]])) : F = t.push("bullet_list_open", "ul", 1), F.map = m = [A, 0], F.markup = String.fromCharCode(x), L = !1, y = t.md.block.ruler.getRules("list"), E = t.parentType, t.parentType = "list"; A < r; ) {
    for (O = S, k = t.eMarks[A], u = C = t.sCount[A] + S - (t.bMarks[A] + t.tShift[A]); O < k; ) {
      if (s = t.src.charCodeAt(O), s === 9)
        C += 4 - (C + t.bsCount[A]) % 4;
      else if (s === 32)
        C++;
      else
        break;
      O++;
    }
    if (i = O, i >= k ? l = 1 : l = C - u, l > 4 && (l = 1), a = u + l, F = t.push("list_item_open", "li", 1), F.markup = String.fromCharCode(x), F.map = d = [A, 0], f && (F.info = t.src.slice(D, S - 1)), b = t.tight, v = t.tShift[A], _ = t.sCount[A], T = t.listIndent, t.listIndent = t.blkIndent, t.blkIndent = a, t.tight = !0, t.tShift[A] = i - t.bMarks[A], t.sCount[A] = C, i >= k && t.isEmpty(A + 1) ? t.line = Math.min(t.line + 2, r) : t.md.block.tokenize(t, A, r, !0), (!t.tight || L) && (Z = !1), L = t.line - A > 1 && t.isEmpty(t.line - 1), t.blkIndent = t.listIndent, t.listIndent = T, t.tShift[A] = v, t.sCount[A] = _, t.tight = b, F = t.push("list_item_close", "li", -1), F.markup = String.fromCharCode(x), A = t.line, d[1] = A, A >= r || t.sCount[A] < t.blkIndent || t.sCount[A] - t.blkIndent >= 4)
      break;
    for (z = !1, c = 0, p = y.length; c < p; c++)
      if (y[c](t, A, r, !0)) {
        z = !0;
        break;
      }
    if (z)
      break;
    if (f) {
      if (S = vo(t, A), S < 0)
        break;
      D = t.bMarks[A] + t.tShift[A];
    } else if (S = bo(t, A), S < 0)
      break;
    if (x !== t.src.charCodeAt(S - 1))
      break;
  }
  return f ? F = t.push("ordered_list_close", "ol", -1) : F = t.push("bullet_list_close", "ul", -1), F.markup = String.fromCharCode(x), m[1] = A, t.line = A, t.parentType = E, Z && vU(t, g), !0;
}, _U = M.normalizeReference, rn = M.isSpace, kU = function(t, e, r, o) {
  var s, i, c, a, l, u, f, d, p, m, g, x, w, k, C, T, E = 0, _ = t.bMarks[e] + t.tShift[e], v = t.eMarks[e], b = e + 1;
  if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(_) !== 91)
    return !1;
  for (; ++_ < v; )
    if (t.src.charCodeAt(_) === 93 && t.src.charCodeAt(_ - 1) !== 92) {
      if (_ + 1 === v || t.src.charCodeAt(_ + 1) !== 58)
        return !1;
      break;
    }
  for (a = t.lineMax, C = t.md.block.ruler.getRules("reference"), m = t.parentType, t.parentType = "reference"; b < a && !t.isEmpty(b); b++)
    if (!(t.sCount[b] - t.blkIndent > 3) && !(t.sCount[b] < 0)) {
      for (k = !1, u = 0, f = C.length; u < f; u++)
        if (C[u](t, b, a, !0)) {
          k = !0;
          break;
        }
      if (k)
        break;
    }
  for (w = t.getLines(e, b, t.blkIndent, !1).trim(), v = w.length, _ = 1; _ < v; _++) {
    if (s = w.charCodeAt(_), s === 91)
      return !1;
    if (s === 93) {
      p = _;
      break;
    } else
      s === 10 ? E++ : s === 92 && (_++, _ < v && w.charCodeAt(_) === 10 && E++);
  }
  if (p < 0 || w.charCodeAt(p + 1) !== 58)
    return !1;
  for (_ = p + 2; _ < v; _++)
    if (s = w.charCodeAt(_), s === 10)
      E++;
    else if (!rn(s))
      break;
  if (g = t.md.helpers.parseLinkDestination(w, _, v), !g.ok || (l = t.md.normalizeLink(g.str), !t.md.validateLink(l)))
    return !1;
  for (_ = g.pos, E += g.lines, i = _, c = E, x = _; _ < v; _++)
    if (s = w.charCodeAt(_), s === 10)
      E++;
    else if (!rn(s))
      break;
  for (g = t.md.helpers.parseLinkTitle(w, _, v), _ < v && x !== _ && g.ok ? (T = g.str, _ = g.pos, E += g.lines) : (T = "", _ = i, E = c); _ < v && (s = w.charCodeAt(_), !!rn(s)); )
    _++;
  if (_ < v && w.charCodeAt(_) !== 10 && T)
    for (T = "", _ = i, E = c; _ < v && (s = w.charCodeAt(_), !!rn(s)); )
      _++;
  return _ < v && w.charCodeAt(_) !== 10 || (d = _U(w.slice(1, p)), !d) ? !1 : (o || (typeof t.env.references > "u" && (t.env.references = {}), typeof t.env.references[d] > "u" && (t.env.references[d] = { title: T, href: l }), t.parentType = m, t.line = e + E + 1), !0);
}, xU = [
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
], wn = {}, wU = "[a-zA-Z_:][a-zA-Z0-9:._-]*", CU = "[^\"'=<>`\\x00-\\x20]+", AU = "'[^']*'", EU = '"[^"]*"', SU = "(?:" + CU + "|" + AU + "|" + EU + ")", DU = "(?:\\s+" + wU + "(?:\\s*=\\s*" + SU + ")?)", cs = "<[A-Za-z][A-Za-z0-9\\-]*" + DU + "*\\s*\\/?>", as = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", TU = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", qU = "<[?][\\s\\S]*?[?]>", FU = "<![A-Z]+\\s+[^>]*>", zU = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", LU = new RegExp("^(?:" + cs + "|" + as + "|" + TU + "|" + qU + "|" + FU + "|" + zU + ")"), RU = new RegExp("^(?:" + cs + "|" + as + ")");
wn.HTML_TAG_RE = LU;
wn.HTML_OPEN_CLOSE_TAG_RE = RU;
var IU = xU, OU = wn.HTML_OPEN_CLOSE_TAG_RE, be = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + IU.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(OU.source + "\\s*$"), /^$/, !1]
], $U = function(t, e, r, o) {
  var s, i, c, a, l = t.bMarks[e] + t.tShift[e], u = t.eMarks[e];
  if (t.sCount[e] - t.blkIndent >= 4 || !t.md.options.html || t.src.charCodeAt(l) !== 60)
    return !1;
  for (a = t.src.slice(l, u), s = 0; s < be.length && !be[s][0].test(a); s++)
    ;
  if (s === be.length)
    return !1;
  if (o)
    return be[s][2];
  if (i = e + 1, !be[s][1].test(a)) {
    for (; i < r && !(t.sCount[i] < t.blkIndent); i++)
      if (l = t.bMarks[i] + t.tShift[i], u = t.eMarks[i], a = t.src.slice(l, u), be[s][1].test(a)) {
        a.length !== 0 && i++;
        break;
      }
  }
  return t.line = i, c = t.push("html_block", "", 0), c.map = [e, i], c.content = t.getLines(e, i, t.blkIndent, !0), !0;
}, yo = M.isSpace, NU = function(t, e, r, o) {
  var s, i, c, a, l = t.bMarks[e] + t.tShift[e], u = t.eMarks[e];
  if (t.sCount[e] - t.blkIndent >= 4 || (s = t.src.charCodeAt(l), s !== 35 || l >= u))
    return !1;
  for (i = 1, s = t.src.charCodeAt(++l); s === 35 && l < u && i <= 6; )
    i++, s = t.src.charCodeAt(++l);
  return i > 6 || l < u && !yo(s) ? !1 : (o || (u = t.skipSpacesBack(u, l), c = t.skipCharsBack(u, 35, l), c > l && yo(t.src.charCodeAt(c - 1)) && (u = c), t.line = e + 1, a = t.push("heading_open", "h" + String(i), 1), a.markup = "########".slice(0, i), a.map = [e, t.line], a = t.push("inline", "", 0), a.content = t.src.slice(l, u).trim(), a.map = [e, t.line], a.children = [], a = t.push("heading_close", "h" + String(i), -1), a.markup = "########".slice(0, i)), !0);
}, BU = function(t, e, r) {
  var o, s, i, c, a, l, u, f, d, p = e + 1, m, g = t.md.block.ruler.getRules("paragraph");
  if (t.sCount[e] - t.blkIndent >= 4)
    return !1;
  for (m = t.parentType, t.parentType = "paragraph"; p < r && !t.isEmpty(p); p++)
    if (!(t.sCount[p] - t.blkIndent > 3)) {
      if (t.sCount[p] >= t.blkIndent && (l = t.bMarks[p] + t.tShift[p], u = t.eMarks[p], l < u && (d = t.src.charCodeAt(l), (d === 45 || d === 61) && (l = t.skipChars(l, d), l = t.skipSpaces(l), l >= u)))) {
        f = d === 61 ? 1 : 2;
        break;
      }
      if (!(t.sCount[p] < 0)) {
        for (s = !1, i = 0, c = g.length; i < c; i++)
          if (g[i](t, p, r, !0)) {
            s = !0;
            break;
          }
        if (s)
          break;
      }
    }
  return f ? (o = t.getLines(e, p, t.blkIndent, !1).trim(), t.line = p + 1, a = t.push("heading_open", "h" + String(f), 1), a.markup = String.fromCharCode(d), a.map = [e, t.line], a = t.push("inline", "", 0), a.content = o, a.map = [e, t.line - 1], a.children = [], a = t.push("heading_close", "h" + String(f), -1), a.markup = String.fromCharCode(d), t.parentType = m, !0) : !1;
}, PU = function(t, e, r) {
  var o, s, i, c, a, l, u = e + 1, f = t.md.block.ruler.getRules("paragraph");
  for (l = t.parentType, t.parentType = "paragraph"; u < r && !t.isEmpty(u); u++)
    if (!(t.sCount[u] - t.blkIndent > 3) && !(t.sCount[u] < 0)) {
      for (s = !1, i = 0, c = f.length; i < c; i++)
        if (f[i](t, u, r, !0)) {
          s = !0;
          break;
        }
      if (s)
        break;
    }
  return o = t.getLines(e, u, t.blkIndent, !1).trim(), t.line = u, a = t.push("paragraph_open", "p", 1), a.map = [e, t.line], a = t.push("inline", "", 0), a.content = o, a.map = [e, t.line], a.children = [], a = t.push("paragraph_close", "p", -1), t.parentType = l, !0;
}, ls = Cr, Cn = M.isSpace;
function It(n, t, e, r) {
  var o, s, i, c, a, l, u, f;
  for (this.src = n, this.md = t, this.env = e, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", s = this.src, f = !1, i = c = l = u = 0, a = s.length; c < a; c++) {
    if (o = s.charCodeAt(c), !f)
      if (Cn(o)) {
        l++, o === 9 ? u += 4 - u % 4 : u++;
        continue;
      } else
        f = !0;
    (o === 10 || c === a - 1) && (o !== 10 && c++, this.bMarks.push(i), this.eMarks.push(c), this.tShift.push(l), this.sCount.push(u), this.bsCount.push(0), f = !1, l = 0, u = 0, i = c + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
It.prototype.push = function(n, t, e) {
  var r = new ls(n, t, e);
  return r.block = !0, e < 0 && this.level--, r.level = this.level, e > 0 && this.level++, this.tokens.push(r), r;
};
It.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
It.prototype.skipEmptyLines = function(t) {
  for (var e = this.lineMax; t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
It.prototype.skipSpaces = function(t) {
  for (var e, r = this.src.length; t < r && (e = this.src.charCodeAt(t), !!Cn(e)); t++)
    ;
  return t;
};
It.prototype.skipSpacesBack = function(t, e) {
  if (t <= e)
    return t;
  for (; t > e; )
    if (!Cn(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
It.prototype.skipChars = function(t, e) {
  for (var r = this.src.length; t < r && this.src.charCodeAt(t) === e; t++)
    ;
  return t;
};
It.prototype.skipCharsBack = function(t, e, r) {
  if (t <= r)
    return t;
  for (; t > r; )
    if (e !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
It.prototype.getLines = function(t, e, r, o) {
  var s, i, c, a, l, u, f, d = t;
  if (t >= e)
    return "";
  for (u = new Array(e - t), s = 0; d < e; d++, s++) {
    for (i = 0, f = a = this.bMarks[d], d + 1 < e || o ? l = this.eMarks[d] + 1 : l = this.eMarks[d]; a < l && i < r; ) {
      if (c = this.src.charCodeAt(a), Cn(c))
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
It.prototype.Token = ls;
var MU = It, jU = wr, on = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", hU, ["paragraph", "reference"]],
  ["code", fU],
  ["fence", pU, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", gU, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", bU, ["paragraph", "reference", "blockquote", "list"]],
  ["list", yU, ["paragraph", "reference", "blockquote"]],
  ["reference", kU],
  ["html_block", $U, ["paragraph", "reference", "blockquote"]],
  ["heading", NU, ["paragraph", "reference", "blockquote"]],
  ["lheading", BU],
  ["paragraph", PU]
];
function An() {
  this.ruler = new jU();
  for (var n = 0; n < on.length; n++)
    this.ruler.push(on[n][0], on[n][1], { alt: (on[n][2] || []).slice() });
}
An.prototype.tokenize = function(n, t, e) {
  for (var r, o, s, i = this.ruler.getRules(""), c = i.length, a = t, l = !1, u = n.md.options.maxNesting; a < e && (n.line = a = n.skipEmptyLines(a), !(a >= e || n.sCount[a] < n.blkIndent)); ) {
    if (n.level >= u) {
      n.line = e;
      break;
    }
    for (s = n.line, o = 0; o < c; o++)
      if (r = i[o](n, a, e, !1), r) {
        if (s >= n.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!r)
      throw new Error("none of the block rules matched");
    n.tight = !l, n.isEmpty(n.line - 1) && (l = !0), a = n.line, a < e && n.isEmpty(a) && (l = !0, a++, n.line = a);
  }
};
An.prototype.parse = function(n, t, e, r) {
  var o;
  n && (o = new this.State(n, t, e, r), this.tokenize(o, o.line, o.lineMax));
};
An.prototype.State = MU;
var UU = An;
function HU(n) {
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
var VU = function(t, e) {
  for (var r = t.pos; r < t.posMax && !HU(t.src.charCodeAt(r)); )
    r++;
  return r === t.pos ? !1 : (e || (t.pending += t.src.slice(t.pos, r)), t.pos = r, !0);
}, GU = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i, ZU = function(t, e) {
  var r, o, s, i, c, a, l, u;
  return !t.md.options.linkify || t.linkLevel > 0 || (r = t.pos, o = t.posMax, r + 3 > o) || t.src.charCodeAt(r) !== 58 || t.src.charCodeAt(r + 1) !== 47 || t.src.charCodeAt(r + 2) !== 47 || (s = t.pending.match(GU), !s) || (i = s[1], c = t.md.linkify.matchAtStart(t.src.slice(r - i.length)), !c) || (a = c.url, a.length <= i.length) || (a = a.replace(/\*+$/, ""), l = t.md.normalizeLink(a), !t.md.validateLink(l)) ? !1 : (e || (t.pending = t.pending.slice(0, -i.length), u = t.push("link_open", "a", 1), u.attrs = [["href", l]], u.markup = "linkify", u.info = "auto", u = t.push("text", "", 0), u.content = t.md.normalizeLinkText(a), u = t.push("link_close", "a", -1), u.markup = "linkify", u.info = "auto"), t.pos += a.length - i.length, !0);
}, WU = M.isSpace, KU = function(t, e) {
  var r, o, s, i = t.pos;
  if (t.src.charCodeAt(i) !== 10)
    return !1;
  if (r = t.pending.length - 1, o = t.posMax, !e)
    if (r >= 0 && t.pending.charCodeAt(r) === 32)
      if (r >= 1 && t.pending.charCodeAt(r - 1) === 32) {
        for (s = r - 1; s >= 1 && t.pending.charCodeAt(s - 1) === 32; )
          s--;
        t.pending = t.pending.slice(0, s), t.push("hardbreak", "br", 0);
      } else
        t.pending = t.pending.slice(0, -1), t.push("softbreak", "br", 0);
    else
      t.push("softbreak", "br", 0);
  for (i++; i < o && WU(t.src.charCodeAt(i)); )
    i++;
  return t.pos = i, !0;
}, JU = M.isSpace, Er = [];
for (var _o = 0; _o < 256; _o++)
  Er.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n) {
  Er[n.charCodeAt(0)] = 1;
});
var YU = function(t, e) {
  var r, o, s, i, c, a = t.pos, l = t.posMax;
  if (t.src.charCodeAt(a) !== 92 || (a++, a >= l))
    return !1;
  if (r = t.src.charCodeAt(a), r === 10) {
    for (e || t.push("hardbreak", "br", 0), a++; a < l && (r = t.src.charCodeAt(a), !!JU(r)); )
      a++;
    return t.pos = a, !0;
  }
  return i = t.src[a], r >= 55296 && r <= 56319 && a + 1 < l && (o = t.src.charCodeAt(a + 1), o >= 56320 && o <= 57343 && (i += t.src[a + 1], a++)), s = "\\" + i, e || (c = t.push("text_special", "", 0), r < 256 && Er[r] !== 0 ? c.content = i : c.content = s, c.markup = s, c.info = "escape"), t.pos = a + 1, !0;
}, QU = function(t, e) {
  var r, o, s, i, c, a, l, u, f = t.pos, d = t.src.charCodeAt(f);
  if (d !== 96)
    return !1;
  for (r = f, f++, o = t.posMax; f < o && t.src.charCodeAt(f) === 96; )
    f++;
  if (s = t.src.slice(r, f), l = s.length, t.backticksScanned && (t.backticks[l] || 0) <= r)
    return e || (t.pending += s), t.pos += l, !0;
  for (a = f; (c = t.src.indexOf("`", a)) !== -1; ) {
    for (a = c + 1; a < o && t.src.charCodeAt(a) === 96; )
      a++;
    if (u = a - c, u === l)
      return e || (i = t.push("code_inline", "code", 0), i.markup = s, i.content = t.src.slice(f, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = a, !0;
    t.backticks[u] = c;
  }
  return t.backticksScanned = !0, e || (t.pending += s), t.pos += l, !0;
}, En = {};
En.tokenize = function(t, e) {
  var r, o, s, i, c, a = t.pos, l = t.src.charCodeAt(a);
  if (e || l !== 126 || (o = t.scanDelims(t.pos, !0), i = o.length, c = String.fromCharCode(l), i < 2))
    return !1;
  for (i % 2 && (s = t.push("text", "", 0), s.content = c, i--), r = 0; r < i; r += 2)
    s = t.push("text", "", 0), s.content = c + c, t.delimiters.push({
      marker: l,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: t.tokens.length - 1,
      end: -1,
      open: o.can_open,
      close: o.can_close
    });
  return t.pos += o.length, !0;
};
function ko(n, t) {
  var e, r, o, s, i, c = [], a = t.length;
  for (e = 0; e < a; e++)
    o = t[e], o.marker === 126 && o.end !== -1 && (s = t[o.end], i = n.tokens[o.token], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = n.tokens[s.token], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", n.tokens[s.token - 1].type === "text" && n.tokens[s.token - 1].content === "~" && c.push(s.token - 1));
  for (; c.length; ) {
    for (e = c.pop(), r = e + 1; r < n.tokens.length && n.tokens[r].type === "s_close"; )
      r++;
    r--, e !== r && (i = n.tokens[r], n.tokens[r] = n.tokens[e], n.tokens[e] = i);
  }
}
En.postProcess = function(t) {
  var e, r = t.tokens_meta, o = t.tokens_meta.length;
  for (ko(t, t.delimiters), e = 0; e < o; e++)
    r[e] && r[e].delimiters && ko(t, r[e].delimiters);
};
var Sn = {};
Sn.tokenize = function(t, e) {
  var r, o, s, i = t.pos, c = t.src.charCodeAt(i);
  if (e || c !== 95 && c !== 42)
    return !1;
  for (o = t.scanDelims(t.pos, c === 42), r = 0; r < o.length; r++)
    s = t.push("text", "", 0), s.content = String.fromCharCode(c), t.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: c,
      // Total length of these series of delimiters.
      //
      length: o.length,
      // A position of the token this delimiter corresponds to.
      //
      token: t.tokens.length - 1,
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
  return t.pos += o.length, !0;
};
function xo(n, t) {
  var e, r, o, s, i, c, a = t.length;
  for (e = a - 1; e >= 0; e--)
    r = t[e], !(r.marker !== 95 && r.marker !== 42) && r.end !== -1 && (o = t[r.end], c = e > 0 && t[e - 1].end === r.end + 1 && // check that first two markers match and adjacent
    t[e - 1].marker === r.marker && t[e - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[r.end + 1].token === o.token + 1, i = String.fromCharCode(r.marker), s = n.tokens[r.token], s.type = c ? "strong_open" : "em_open", s.tag = c ? "strong" : "em", s.nesting = 1, s.markup = c ? i + i : i, s.content = "", s = n.tokens[o.token], s.type = c ? "strong_close" : "em_close", s.tag = c ? "strong" : "em", s.nesting = -1, s.markup = c ? i + i : i, s.content = "", c && (n.tokens[t[e - 1].token].content = "", n.tokens[t[r.end + 1].token].content = "", e--));
}
Sn.postProcess = function(t) {
  var e, r = t.tokens_meta, o = t.tokens_meta.length;
  for (xo(t, t.delimiters), e = 0; e < o; e++)
    r[e] && r[e].delimiters && xo(t, r[e].delimiters);
};
var XU = M.normalizeReference, Gn = M.isSpace, tH = function(t, e) {
  var r, o, s, i, c, a, l, u, f, d = "", p = "", m = t.pos, g = t.posMax, x = t.pos, w = !0;
  if (t.src.charCodeAt(t.pos) !== 91 || (c = t.pos + 1, i = t.md.helpers.parseLinkLabel(t, t.pos, !0), i < 0))
    return !1;
  if (a = i + 1, a < g && t.src.charCodeAt(a) === 40) {
    for (w = !1, a++; a < g && (o = t.src.charCodeAt(a), !(!Gn(o) && o !== 10)); a++)
      ;
    if (a >= g)
      return !1;
    if (x = a, l = t.md.helpers.parseLinkDestination(t.src, a, t.posMax), l.ok) {
      for (d = t.md.normalizeLink(l.str), t.md.validateLink(d) ? a = l.pos : d = "", x = a; a < g && (o = t.src.charCodeAt(a), !(!Gn(o) && o !== 10)); a++)
        ;
      if (l = t.md.helpers.parseLinkTitle(t.src, a, t.posMax), a < g && x !== a && l.ok)
        for (p = l.str, a = l.pos; a < g && (o = t.src.charCodeAt(a), !(!Gn(o) && o !== 10)); a++)
          ;
    }
    (a >= g || t.src.charCodeAt(a) !== 41) && (w = !0), a++;
  }
  if (w) {
    if (typeof t.env.references > "u")
      return !1;
    if (a < g && t.src.charCodeAt(a) === 91 ? (x = a + 1, a = t.md.helpers.parseLinkLabel(t, a), a >= 0 ? s = t.src.slice(x, a++) : a = i + 1) : a = i + 1, s || (s = t.src.slice(c, i)), u = t.env.references[XU(s)], !u)
      return t.pos = m, !1;
    d = u.href, p = u.title;
  }
  return e || (t.pos = c, t.posMax = i, f = t.push("link_open", "a", 1), f.attrs = r = [["href", d]], p && r.push(["title", p]), t.linkLevel++, t.md.inline.tokenize(t), t.linkLevel--, f = t.push("link_close", "a", -1)), t.pos = a, t.posMax = g, !0;
}, eH = M.normalizeReference, Zn = M.isSpace, nH = function(t, e) {
  var r, o, s, i, c, a, l, u, f, d, p, m, g, x = "", w = t.pos, k = t.posMax;
  if (t.src.charCodeAt(t.pos) !== 33 || t.src.charCodeAt(t.pos + 1) !== 91 || (a = t.pos + 2, c = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1), c < 0))
    return !1;
  if (l = c + 1, l < k && t.src.charCodeAt(l) === 40) {
    for (l++; l < k && (o = t.src.charCodeAt(l), !(!Zn(o) && o !== 10)); l++)
      ;
    if (l >= k)
      return !1;
    for (g = l, f = t.md.helpers.parseLinkDestination(t.src, l, t.posMax), f.ok && (x = t.md.normalizeLink(f.str), t.md.validateLink(x) ? l = f.pos : x = ""), g = l; l < k && (o = t.src.charCodeAt(l), !(!Zn(o) && o !== 10)); l++)
      ;
    if (f = t.md.helpers.parseLinkTitle(t.src, l, t.posMax), l < k && g !== l && f.ok)
      for (d = f.str, l = f.pos; l < k && (o = t.src.charCodeAt(l), !(!Zn(o) && o !== 10)); l++)
        ;
    else
      d = "";
    if (l >= k || t.src.charCodeAt(l) !== 41)
      return t.pos = w, !1;
    l++;
  } else {
    if (typeof t.env.references > "u")
      return !1;
    if (l < k && t.src.charCodeAt(l) === 91 ? (g = l + 1, l = t.md.helpers.parseLinkLabel(t, l), l >= 0 ? i = t.src.slice(g, l++) : l = c + 1) : l = c + 1, i || (i = t.src.slice(a, c)), u = t.env.references[eH(i)], !u)
      return t.pos = w, !1;
    x = u.href, d = u.title;
  }
  return e || (s = t.src.slice(a, c), t.md.inline.parse(
    s,
    t.md,
    t.env,
    m = []
  ), p = t.push("image", "img", 0), p.attrs = r = [["src", x], ["alt", ""]], p.children = m, p.content = s, d && r.push(["title", d])), t.pos = l, t.posMax = k, !0;
}, rH = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, oH = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, sH = function(t, e) {
  var r, o, s, i, c, a, l = t.pos;
  if (t.src.charCodeAt(l) !== 60)
    return !1;
  for (c = t.pos, a = t.posMax; ; ) {
    if (++l >= a || (i = t.src.charCodeAt(l), i === 60))
      return !1;
    if (i === 62)
      break;
  }
  return r = t.src.slice(c + 1, l), oH.test(r) ? (o = t.md.normalizeLink(r), t.md.validateLink(o) ? (e || (s = t.push("link_open", "a", 1), s.attrs = [["href", o]], s.markup = "autolink", s.info = "auto", s = t.push("text", "", 0), s.content = t.md.normalizeLinkText(r), s = t.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), t.pos += r.length + 2, !0) : !1) : rH.test(r) ? (o = t.md.normalizeLink("mailto:" + r), t.md.validateLink(o) ? (e || (s = t.push("link_open", "a", 1), s.attrs = [["href", o]], s.markup = "autolink", s.info = "auto", s = t.push("text", "", 0), s.content = t.md.normalizeLinkText(r), s = t.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), t.pos += r.length + 2, !0) : !1) : !1;
}, iH = wn.HTML_TAG_RE;
function cH(n) {
  return /^<a[>\s]/i.test(n);
}
function aH(n) {
  return /^<\/a\s*>/i.test(n);
}
function lH(n) {
  var t = n | 32;
  return t >= 97 && t <= 122;
}
var uH = function(t, e) {
  var r, o, s, i, c = t.pos;
  return !t.md.options.html || (s = t.posMax, t.src.charCodeAt(c) !== 60 || c + 2 >= s) || (r = t.src.charCodeAt(c + 1), r !== 33 && r !== 63 && r !== 47 && !lH(r)) || (o = t.src.slice(c).match(iH), !o) ? !1 : (e || (i = t.push("html_inline", "", 0), i.content = o[0], cH(i.content) && t.linkLevel++, aH(i.content) && t.linkLevel--), t.pos += o[0].length, !0);
}, wo = ts, hH = M.has, fH = M.isValidEntityCode, Co = M.fromCodePoint, pH = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, dH = /^&([a-z][a-z0-9]{1,31});/i, gH = function(t, e) {
  var r, o, s, i, c = t.pos, a = t.posMax;
  if (t.src.charCodeAt(c) !== 38 || c + 1 >= a)
    return !1;
  if (r = t.src.charCodeAt(c + 1), r === 35) {
    if (s = t.src.slice(c).match(pH), s)
      return e || (o = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), i = t.push("text_special", "", 0), i.content = fH(o) ? Co(o) : Co(65533), i.markup = s[0], i.info = "entity"), t.pos += s[0].length, !0;
  } else if (s = t.src.slice(c).match(dH), s && hH(wo, s[1]))
    return e || (i = t.push("text_special", "", 0), i.content = wo[s[1]], i.markup = s[0], i.info = "entity"), t.pos += s[0].length, !0;
  return !1;
};
function Ao(n) {
  var t, e, r, o, s, i, c, a, l = {}, u = n.length;
  if (u) {
    var f = 0, d = -2, p = [];
    for (t = 0; t < u; t++)
      if (r = n[t], p.push(0), (n[f].marker !== r.marker || d !== r.token - 1) && (f = t), d = r.token, r.length = r.length || 0, !!r.close) {
        for (l.hasOwnProperty(r.marker) || (l[r.marker] = [-1, -1, -1, -1, -1, -1]), s = l[r.marker][(r.open ? 3 : 0) + r.length % 3], e = f - p[f] - 1, i = e; e > s; e -= p[e] + 1)
          if (o = n[e], o.marker === r.marker && o.open && o.end < 0 && (c = !1, (o.close || r.open) && (o.length + r.length) % 3 === 0 && (o.length % 3 !== 0 || r.length % 3 !== 0) && (c = !0), !c)) {
            a = e > 0 && !n[e - 1].open ? p[e - 1] + 1 : 0, p[t] = t - e + a, p[e] = a, r.open = !1, o.end = t, o.close = !1, i = -1, d = -2;
            break;
          }
        i !== -1 && (l[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = i);
      }
  }
}
var mH = function(t) {
  var e, r = t.tokens_meta, o = t.tokens_meta.length;
  for (Ao(t.delimiters), e = 0; e < o; e++)
    r[e] && r[e].delimiters && Ao(r[e].delimiters);
}, bH = function(t) {
  var e, r, o = 0, s = t.tokens, i = t.tokens.length;
  for (e = r = 0; e < i; e++)
    s[e].nesting < 0 && o--, s[e].level = o, s[e].nesting > 0 && o++, s[e].type === "text" && e + 1 < i && s[e + 1].type === "text" ? s[e + 1].content = s[e].content + s[e + 1].content : (e !== r && (s[r] = s[e]), r++);
  e !== r && (s.length = r);
}, Sr = Cr, Eo = M.isWhiteSpace, So = M.isPunctChar, Do = M.isMdAsciiPunct;
function Ve(n, t, e, r) {
  this.src = n, this.env = e, this.md = t, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Ve.prototype.pushPending = function() {
  var n = new Sr("text", "", 0);
  return n.content = this.pending, n.level = this.pendingLevel, this.tokens.push(n), this.pending = "", n;
};
Ve.prototype.push = function(n, t, e) {
  this.pending && this.pushPending();
  var r = new Sr(n, t, e), o = null;
  return e < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, e > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], o = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(o), r;
};
Ve.prototype.scanDelims = function(n, t) {
  var e = n, r, o, s, i, c, a, l, u, f, d = !0, p = !0, m = this.posMax, g = this.src.charCodeAt(n);
  for (r = n > 0 ? this.src.charCodeAt(n - 1) : 32; e < m && this.src.charCodeAt(e) === g; )
    e++;
  return s = e - n, o = e < m ? this.src.charCodeAt(e) : 32, l = Do(r) || So(String.fromCharCode(r)), f = Do(o) || So(String.fromCharCode(o)), a = Eo(r), u = Eo(o), u ? d = !1 : f && (a || l || (d = !1)), a ? p = !1 : l && (u || f || (p = !1)), t ? (i = d, c = p) : (i = d && (!p || l), c = p && (!d || f)), {
    can_open: i,
    can_close: c,
    length: s
  };
};
Ve.prototype.Token = Sr;
var vH = Ve, To = wr, Wn = [
  ["text", VU],
  ["linkify", ZU],
  ["newline", KU],
  ["escape", YU],
  ["backticks", QU],
  ["strikethrough", En.tokenize],
  ["emphasis", Sn.tokenize],
  ["link", tH],
  ["image", nH],
  ["autolink", sH],
  ["html_inline", uH],
  ["entity", gH]
], Kn = [
  ["balance_pairs", mH],
  ["strikethrough", En.postProcess],
  ["emphasis", Sn.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", bH]
];
function Ge() {
  var n;
  for (this.ruler = new To(), n = 0; n < Wn.length; n++)
    this.ruler.push(Wn[n][0], Wn[n][1]);
  for (this.ruler2 = new To(), n = 0; n < Kn.length; n++)
    this.ruler2.push(Kn[n][0], Kn[n][1]);
}
Ge.prototype.skipToken = function(n) {
  var t, e, r = n.pos, o = this.ruler.getRules(""), s = o.length, i = n.md.options.maxNesting, c = n.cache;
  if (typeof c[r] < "u") {
    n.pos = c[r];
    return;
  }
  if (n.level < i) {
    for (e = 0; e < s; e++)
      if (n.level++, t = o[e](n, !0), n.level--, t) {
        if (r >= n.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    n.pos = n.posMax;
  t || n.pos++, c[r] = n.pos;
};
Ge.prototype.tokenize = function(n) {
  for (var t, e, r, o = this.ruler.getRules(""), s = o.length, i = n.posMax, c = n.md.options.maxNesting; n.pos < i; ) {
    if (r = n.pos, n.level < c) {
      for (e = 0; e < s; e++)
        if (t = o[e](n, !1), t) {
          if (r >= n.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (t) {
      if (n.pos >= i)
        break;
      continue;
    }
    n.pending += n.src[n.pos++];
  }
  n.pending && n.pushPending();
};
Ge.prototype.parse = function(n, t, e, r) {
  var o, s, i, c = new this.State(n, t, e, r);
  for (this.tokenize(c), s = this.ruler2.getRules(""), i = s.length, o = 0; o < i; o++)
    s[o](c);
};
Ge.prototype.State = vH;
var yH = Ge, Jn, qo;
function _H() {
  return qo || (qo = 1, Jn = function(n) {
    var t = {};
    n = n || {}, t.src_Any = es().source, t.src_Cc = ns().source, t.src_Z = rs().source, t.src_P = xr.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var e = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + e + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + e + "|" + t.src_ZPCc + ")(?!" + (n["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + e + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (n["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + e + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), Jn;
}
function sr(n) {
  var t = Array.prototype.slice.call(arguments, 1);
  return t.forEach(function(e) {
    e && Object.keys(e).forEach(function(r) {
      n[r] = e[r];
    });
  }), n;
}
function Dn(n) {
  return Object.prototype.toString.call(n);
}
function kH(n) {
  return Dn(n) === "[object String]";
}
function xH(n) {
  return Dn(n) === "[object Object]";
}
function wH(n) {
  return Dn(n) === "[object RegExp]";
}
function Fo(n) {
  return Dn(n) === "[object Function]";
}
function CH(n) {
  return n.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var us = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function AH(n) {
  return Object.keys(n || {}).reduce(function(t, e) {
    return t || us.hasOwnProperty(e);
  }, !1);
}
var EH = {
  "http:": {
    validate: function(n, t, e) {
      var r = n.slice(t);
      return e.re.http || (e.re.http = new RegExp(
        "^\\/\\/" + e.re.src_auth + e.re.src_host_port_strict + e.re.src_path,
        "i"
      )), e.re.http.test(r) ? r.match(e.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(n, t, e) {
      var r = n.slice(t);
      return e.re.no_http || (e.re.no_http = new RegExp(
        "^" + e.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + e.re.src_domain + ")\\.)+" + e.re.src_domain_root + ")" + e.re.src_port + e.re.src_host_terminator + e.re.src_path,
        "i"
      )), e.re.no_http.test(r) ? t >= 3 && n[t - 3] === ":" || t >= 3 && n[t - 3] === "/" ? 0 : r.match(e.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(n, t, e) {
      var r = n.slice(t);
      return e.re.mailto || (e.re.mailto = new RegExp(
        "^" + e.re.src_email_name + "@" + e.re.src_host_strict,
        "i"
      )), e.re.mailto.test(r) ? r.match(e.re.mailto)[0].length : 0;
    }
  }
}, SH = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", DH = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function TH(n) {
  n.__index__ = -1, n.__text_cache__ = "";
}
function qH(n) {
  return function(t, e) {
    var r = t.slice(e);
    return n.test(r) ? r.match(n)[0].length : 0;
  };
}
function zo() {
  return function(n, t) {
    t.normalize(n);
  };
}
function mn(n) {
  var t = n.re = _H()(n.__opts__), e = n.__tlds__.slice();
  n.onCompile(), n.__tlds_replaced__ || e.push(SH), e.push(t.src_xn), t.src_tlds = e.join("|");
  function r(c) {
    return c.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
  var o = [];
  n.__compiled__ = {};
  function s(c, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + c + '": ' + a);
  }
  Object.keys(n.__schemas__).forEach(function(c) {
    var a = n.__schemas__[c];
    if (a !== null) {
      var l = { validate: null, link: null };
      if (n.__compiled__[c] = l, xH(a)) {
        wH(a.validate) ? l.validate = qH(a.validate) : Fo(a.validate) ? l.validate = a.validate : s(c, a), Fo(a.normalize) ? l.normalize = a.normalize : a.normalize ? s(c, a) : l.normalize = zo();
        return;
      }
      if (kH(a)) {
        o.push(c);
        return;
      }
      s(c, a);
    }
  }), o.forEach(function(c) {
    n.__compiled__[n.__schemas__[c]] && (n.__compiled__[c].validate = n.__compiled__[n.__schemas__[c]].validate, n.__compiled__[c].normalize = n.__compiled__[n.__schemas__[c]].normalize);
  }), n.__compiled__[""] = { validate: null, normalize: zo() };
  var i = Object.keys(n.__compiled__).filter(function(c) {
    return c.length > 0 && n.__compiled__[c];
  }).map(CH).join("|");
  n.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "i"), n.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "ig"), n.re.schema_at_start = RegExp("^" + n.re.schema_search.source, "i"), n.re.pretest = RegExp(
    "(" + n.re.schema_test.source + ")|(" + n.re.host_fuzzy_test.source + ")|@",
    "i"
  ), TH(n);
}
function FH(n, t) {
  var e = n.__index__, r = n.__last_index__, o = n.__text_cache__.slice(e, r);
  this.schema = n.__schema__.toLowerCase(), this.index = e + t, this.lastIndex = r + t, this.raw = o, this.text = o, this.url = o;
}
function ir(n, t) {
  var e = new FH(n, t);
  return n.__compiled__[e.schema].normalize(e, n), e;
}
function ut(n, t) {
  if (!(this instanceof ut))
    return new ut(n, t);
  t || AH(n) && (t = n, n = {}), this.__opts__ = sr({}, us, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = sr({}, EH, n), this.__compiled__ = {}, this.__tlds__ = DH, this.__tlds_replaced__ = !1, this.re = {}, mn(this);
}
ut.prototype.add = function(t, e) {
  return this.__schemas__[t] = e, mn(this), this;
};
ut.prototype.set = function(t) {
  return this.__opts__ = sr(this.__opts__, t), this;
};
ut.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  var e, r, o, s, i, c, a, l, u;
  if (this.re.schema_test.test(t)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (e = a.exec(t)) !== null; )
      if (s = this.testSchemaAt(t, e[2], a.lastIndex), s) {
        this.__schema__ = e[2], this.__index__ = e.index + e[1].length, this.__last_index__ = e.index + e[0].length + s;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = t.search(this.re.host_fuzzy_test), l >= 0 && (this.__index__ < 0 || l < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = t.indexOf("@"), u >= 0 && (o = t.match(this.re.email_fuzzy)) !== null && (i = o.index + o[1].length, c = o.index + o[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && c > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = c))), this.__index__ >= 0;
};
ut.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
ut.prototype.testSchemaAt = function(t, e, r) {
  return this.__compiled__[e.toLowerCase()] ? this.__compiled__[e.toLowerCase()].validate(t, r, this) : 0;
};
ut.prototype.match = function(t) {
  var e = 0, r = [];
  this.__index__ >= 0 && this.__text_cache__ === t && (r.push(ir(this, e)), e = this.__last_index__);
  for (var o = e ? t.slice(e) : t; this.test(o); )
    r.push(ir(this, e)), o = o.slice(this.__last_index__), e += this.__last_index__;
  return r.length ? r : null;
};
ut.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return null;
  var e = this.re.schema_at_start.exec(t);
  if (!e)
    return null;
  var r = this.testSchemaAt(t, e[2], e[0].length);
  return r ? (this.__schema__ = e[2], this.__index__ = e.index + e[1].length, this.__last_index__ = e.index + e[0].length + r, ir(this, 0)) : null;
};
ut.prototype.tlds = function(t, e) {
  return t = Array.isArray(t) ? t : [t], e ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(r, o, s) {
    return r !== s[o - 1];
  }).reverse(), mn(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, mn(this), this);
};
ut.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
ut.prototype.onCompile = function() {
};
var zH = ut;
const ve = 2147483647, qt = 36, Dr = 1, Ne = 26, LH = 38, RH = 700, hs = 72, fs = 128, ps = "-", IH = /^xn--/, OH = /[^\0-\x7F]/, $H = /[\x2E\u3002\uFF0E\uFF61]/g, NH = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Yn = qt - Dr, Ft = Math.floor, Qn = String.fromCharCode;
function Yt(n) {
  throw new RangeError(NH[n]);
}
function BH(n, t) {
  const e = [];
  let r = n.length;
  for (; r--; )
    e[r] = t(n[r]);
  return e;
}
function ds(n, t) {
  const e = n.split("@");
  let r = "";
  e.length > 1 && (r = e[0] + "@", n = e[1]), n = n.replace($H, ".");
  const o = n.split("."), s = BH(o, t).join(".");
  return r + s;
}
function Tr(n) {
  const t = [];
  let e = 0;
  const r = n.length;
  for (; e < r; ) {
    const o = n.charCodeAt(e++);
    if (o >= 55296 && o <= 56319 && e < r) {
      const s = n.charCodeAt(e++);
      (s & 64512) == 56320 ? t.push(((o & 1023) << 10) + (s & 1023) + 65536) : (t.push(o), e--);
    } else
      t.push(o);
  }
  return t;
}
const gs = (n) => String.fromCodePoint(...n), PH = function(n) {
  return n >= 48 && n < 58 ? 26 + (n - 48) : n >= 65 && n < 91 ? n - 65 : n >= 97 && n < 123 ? n - 97 : qt;
}, Lo = function(n, t) {
  return n + 22 + 75 * (n < 26) - ((t != 0) << 5);
}, ms = function(n, t, e) {
  let r = 0;
  for (n = e ? Ft(n / RH) : n >> 1, n += Ft(n / t); n > Yn * Ne >> 1; r += qt)
    n = Ft(n / Yn);
  return Ft(r + (Yn + 1) * n / (n + LH));
}, qr = function(n) {
  const t = [], e = n.length;
  let r = 0, o = fs, s = hs, i = n.lastIndexOf(ps);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    n.charCodeAt(c) >= 128 && Yt("not-basic"), t.push(n.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < e; ) {
    const a = r;
    for (let u = 1, f = qt; ; f += qt) {
      c >= e && Yt("invalid-input");
      const d = PH(n.charCodeAt(c++));
      d >= qt && Yt("invalid-input"), d > Ft((ve - r) / u) && Yt("overflow"), r += d * u;
      const p = f <= s ? Dr : f >= s + Ne ? Ne : f - s;
      if (d < p)
        break;
      const m = qt - p;
      u > Ft(ve / m) && Yt("overflow"), u *= m;
    }
    const l = t.length + 1;
    s = ms(r - a, l, a == 0), Ft(r / l) > ve - o && Yt("overflow"), o += Ft(r / l), r %= l, t.splice(r++, 0, o);
  }
  return String.fromCodePoint(...t);
}, Fr = function(n) {
  const t = [];
  n = Tr(n);
  const e = n.length;
  let r = fs, o = 0, s = hs;
  for (const a of n)
    a < 128 && t.push(Qn(a));
  const i = t.length;
  let c = i;
  for (i && t.push(ps); c < e; ) {
    let a = ve;
    for (const u of n)
      u >= r && u < a && (a = u);
    const l = c + 1;
    a - r > Ft((ve - o) / l) && Yt("overflow"), o += (a - r) * l, r = a;
    for (const u of n)
      if (u < r && ++o > ve && Yt("overflow"), u === r) {
        let f = o;
        for (let d = qt; ; d += qt) {
          const p = d <= s ? Dr : d >= s + Ne ? Ne : d - s;
          if (f < p)
            break;
          const m = f - p, g = qt - p;
          t.push(
            Qn(Lo(p + m % g, 0))
          ), f = Ft(m / g);
        }
        t.push(Qn(Lo(f, 0))), s = ms(o, l, c === i), o = 0, ++c;
      }
    ++o, ++r;
  }
  return t.join("");
}, bs = function(n) {
  return ds(n, function(t) {
    return IH.test(t) ? qr(t.slice(4).toLowerCase()) : t;
  });
}, vs = function(n) {
  return ds(n, function(t) {
    return OH.test(t) ? "xn--" + Fr(t) : t;
  });
}, MH = {
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
    decode: Tr,
    encode: gs
  },
  decode: qr,
  encode: Fr,
  toASCII: vs,
  toUnicode: bs
}, jH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: qr,
  default: MH,
  encode: Fr,
  toASCII: vs,
  toUnicode: bs,
  ucs2decode: Tr,
  ucs2encode: gs
}, Symbol.toStringTag, { value: "Module" })), UH = /* @__PURE__ */ Hi(jH);
var HH = {
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
}, VH = {
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
}, GH = {
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
}, Ie = M, ZH = xn, WH = Pj, KH = uU, JH = UU, YH = yH, QH = zH, ae = Ce, ys = UH, XH = {
  default: HH,
  zero: VH,
  commonmark: GH
}, t4 = /^(vbscript|javascript|file|data):/, e4 = /^data:image\/(gif|png|jpeg|webp);/;
function n4(n) {
  var t = n.trim().toLowerCase();
  return t4.test(t) ? !!e4.test(t) : !0;
}
var _s = ["http:", "https:", "mailto:"];
function r4(n) {
  var t = ae.parse(n, !0);
  if (t.hostname && (!t.protocol || _s.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ys.toASCII(t.hostname);
    } catch {
    }
  return ae.encode(ae.format(t));
}
function o4(n) {
  var t = ae.parse(n, !0);
  if (t.hostname && (!t.protocol || _s.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ys.toUnicode(t.hostname);
    } catch {
    }
  return ae.decode(ae.format(t), ae.decode.defaultChars + "%");
}
function dt(n, t) {
  if (!(this instanceof dt))
    return new dt(n, t);
  t || Ie.isString(n) || (t = n || {}, n = "default"), this.inline = new YH(), this.block = new JH(), this.core = new KH(), this.renderer = new WH(), this.linkify = new QH(), this.validateLink = n4, this.normalizeLink = r4, this.normalizeLinkText = o4, this.utils = Ie, this.helpers = Ie.assign({}, ZH), this.options = {}, this.configure(n), t && this.set(t);
}
dt.prototype.set = function(n) {
  return Ie.assign(this.options, n), this;
};
dt.prototype.configure = function(n) {
  var t = this, e;
  if (Ie.isString(n) && (e = n, n = XH[e], !n))
    throw new Error('Wrong `markdown-it` preset "' + e + '", check name');
  if (!n)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return n.options && t.set(n.options), n.components && Object.keys(n.components).forEach(function(r) {
    n.components[r].rules && t[r].ruler.enableOnly(n.components[r].rules), n.components[r].rules2 && t[r].ruler2.enableOnly(n.components[r].rules2);
  }), this;
};
dt.prototype.enable = function(n, t) {
  var e = [];
  Array.isArray(n) || (n = [n]), ["core", "block", "inline"].forEach(function(o) {
    e = e.concat(this[o].ruler.enable(n, !0));
  }, this), e = e.concat(this.inline.ruler2.enable(n, !0));
  var r = n.filter(function(o) {
    return e.indexOf(o) < 0;
  });
  if (r.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
dt.prototype.disable = function(n, t) {
  var e = [];
  Array.isArray(n) || (n = [n]), ["core", "block", "inline"].forEach(function(o) {
    e = e.concat(this[o].ruler.disable(n, !0));
  }, this), e = e.concat(this.inline.ruler2.disable(n, !0));
  var r = n.filter(function(o) {
    return e.indexOf(o) < 0;
  });
  if (r.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
dt.prototype.use = function(n) {
  var t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return n.apply(n, t), this;
};
dt.prototype.parse = function(n, t) {
  if (typeof n != "string")
    throw new Error("Input data should be a String");
  var e = new this.core.State(n, this, t);
  return this.core.process(e), e.tokens;
};
dt.prototype.render = function(n, t) {
  return t = t || {}, this.renderer.render(this.parse(n, t), this.options, t);
};
dt.prototype.parseInline = function(n, t) {
  var e = new this.core.State(n, this, t);
  return e.inlineMode = !0, this.core.process(e), e.tokens;
};
dt.prototype.renderInline = function(n, t) {
  return t = t || {}, this.renderer.render(this.parseInline(n, t), this.options, t);
};
var s4 = dt, i4 = s4;
const c4 = /* @__PURE__ */ kr(i4), Ro = /* @__PURE__ */ new Set([!0, !1, "alt", "title"]);
function ks(n, t) {
  return (Array.isArray(n) ? n : []).filter(([e]) => e !== t);
}
function xs(n, t) {
  n && n.attrs && (n.attrs = ks(n.attrs, t));
}
function a4(n, t) {
  if (!Ro.has(n))
    throw new TypeError(`figcaption must be one of: ${[...Ro]}.`);
  if (n === "alt")
    return t.content;
  const e = t.attrs.find(([r]) => r === "title");
  return Array.isArray(e) && e[1] ? (xs(t, "title"), e[1]) : void 0;
}
function l4(n, t) {
  t = t || {}, n.core.ruler.before("linkify", "image_figures", function(e) {
    let r = 1;
    for (let o = 1, s = e.tokens.length; o < s - 1; ++o) {
      const i = e.tokens[o];
      if (i.type !== "inline" || !i.children || i.children.length !== 1 && i.children.length !== 3 || i.children.length === 1 && i.children[0].type !== "image")
        continue;
      if (i.children.length === 3) {
        const [l, u, f] = i.children;
        if (l.type !== "link_open" || u.type !== "image" || f.type !== "link_close")
          continue;
      }
      if (o !== 0 && e.tokens[o - 1].type !== "paragraph_open" || o !== s - 1 && e.tokens[o + 1].type !== "paragraph_close")
        continue;
      const c = e.tokens[o - 1];
      let a;
      if (c.type = "figure_open", c.tag = "figure", e.tokens[o + 1].type = "figure_close", e.tokens[o + 1].tag = "figure", t.dataType && e.tokens[o - 1].attrPush(["data-type", "image"]), t.link && i.children.length === 1) {
        [a] = i.children;
        const l = new e.Token("link_open", "a", 1);
        l.attrPush(["href", a.attrGet("src")]), i.children.unshift(l), i.children.push(new e.Token("link_close", "a", -1));
      }
      if (a = i.children.length === 1 ? i.children[0] : i.children[1], t.figcaption) {
        const l = a4(t.figcaption, a);
        if (l) {
          const [u] = n.parseInline(l, e.env);
          i.children.push(new e.Token("figcaption_open", "figcaption", 1)), i.children.push(...u.children), i.children.push(new e.Token("figcaption_close", "figcaption", -1)), a.attrs && (a.attrs = ks(a.attrs, "title"));
        }
      }
      if (t.copyAttrs && a.attrs) {
        const l = t.copyAttrs === !0 ? "" : t.copyAttrs;
        c.attrs = a.attrs.filter(([u]) => u.match(l)).map((u) => Array.from(u));
      }
      if (t.tabindex && (e.tokens[o - 1].attrPush(["tabindex", r]), r++), t.lazy && (a.attrs.some(([l]) => l === "loading") || a.attrs.push(["loading", "lazy"])), t.async && (a.attrs.some(([l]) => l === "decoding") || a.attrs.push(["decoding", "async"])), t.classes && typeof t.classes == "string") {
        let l = !1;
        for (let u = 0, f = a.attrs.length; u < f && !l; u++) {
          const d = a.attrs[u];
          d[0] === "class" && (d[1] = `${d[1]} ${t.classes}`, l = !0);
        }
        l || a.attrs.push(["class", t.classes]);
      }
      if (t.removeSrc) {
        const l = a.attrs.find(([u]) => u === "src");
        a.attrs.push(["data-src", l[1]]), xs(a, "src");
      }
    }
  });
}
var cr = !0, ws = !1, Cs = !1, u4 = function(n, t) {
  t && (cr = !t.enabled, ws = !!t.label, Cs = !!t.labelAfter), n.core.ruler.after("inline", "github-task-lists", function(e) {
    for (var r = e.tokens, o = 2; o < r.length; o++)
      f4(r, o) && (p4(r[o], e.Token), Io(r[o - 2], "class", "task-list-item" + (cr ? "" : " enabled")), Io(r[h4(r, o - 2)], "class", "contains-task-list"));
  });
};
function Io(n, t, e) {
  var r = n.attrIndex(t), o = [t, e];
  r < 0 ? n.attrPush(o) : n.attrs[r] = o;
}
function h4(n, t) {
  for (var e = n[t].level - 1, r = t - 1; r >= 0; r--)
    if (n[r].level === e)
      return r;
  return -1;
}
function f4(n, t) {
  return v4(n[t]) && y4(n[t - 1]) && _4(n[t - 2]) && k4(n[t]);
}
function p4(n, t) {
  if (n.children.unshift(d4(n, t)), n.children[1].content = n.children[1].content.slice(3), n.content = n.content.slice(3), ws)
    if (Cs) {
      n.children.pop();
      var e = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
      n.children[0].content = n.children[0].content.slice(0, -1) + ' id="' + e + '">', n.children.push(b4(n.content, e, t));
    } else
      n.children.unshift(g4(t)), n.children.push(m4(t));
}
function d4(n, t) {
  var e = new t("html_inline", "", 0), r = cr ? ' disabled="" ' : "";
  return n.content.indexOf("[ ] ") === 0 ? e.content = '<input class="task-list-item-checkbox"' + r + 'type="checkbox">' : (n.content.indexOf("[x] ") === 0 || n.content.indexOf("[X] ") === 0) && (e.content = '<input class="task-list-item-checkbox" checked=""' + r + 'type="checkbox">'), e;
}
function g4(n) {
  var t = new n("html_inline", "", 0);
  return t.content = "<label>", t;
}
function m4(n) {
  var t = new n("html_inline", "", 0);
  return t.content = "</label>", t;
}
function b4(n, t, e) {
  var r = new e("html_inline", "", 0);
  return r.content = '<label class="task-list-item-label" for="' + t + '">' + n + "</label>", r.attrs = [{ for: t }], r;
}
function v4(n) {
  return n.type === "inline";
}
function y4(n) {
  return n.type === "paragraph_open";
}
function _4(n) {
  return n.type === "list_item_open";
}
function k4(n) {
  return n.content.indexOf("[ ] ") === 0 || n.content.indexOf("[x] ") === 0 || n.content.indexOf("[X] ") === 0;
}
const x4 = /* @__PURE__ */ kr(u4), Fe = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, As = /* @__PURE__ */ new Set(), w4 = (n, t, e, r) => {
  typeof process == "object" && process && typeof process.emitWarning == "function" ? process.emitWarning(n, t, e, r) : console.error(`[${e}] ${t}: ${n}`);
}, C4 = (n) => !As.has(n), Gt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n), Es = (n) => Gt(n) ? n <= Math.pow(2, 8) ? Uint8Array : n <= Math.pow(2, 16) ? Uint16Array : n <= Math.pow(2, 32) ? Uint32Array : n <= Number.MAX_SAFE_INTEGER ? an : null : null;
class an extends Array {
  constructor(t) {
    super(t), this.fill(0);
  }
}
var Mt, ye;
let A4 = (Mt = class {
  constructor(t, e) {
    X(this, "heap");
    X(this, "length");
    if (!h(Mt, ye))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new e(t), this.length = 0;
  }
  static create(t) {
    const e = Es(t);
    if (!e)
      return [];
    I(Mt, ye, !0);
    const r = new Mt(t, e);
    return I(Mt, ye, !1), r;
  }
  push(t) {
    this.heap[this.length++] = t;
  }
  pop() {
    return this.heap[--this.length];
  }
}, ye = new WeakMap(), // private constructor
N(Mt, ye, !1), Mt);
var gt, ct, At, mt, _e, J, bt, Y, H, $, st, at, rt, tt, vt, et, Nt, Bt, yt, Et, Xt, it, Pe, lr, le, Pt, Me, lt, yn, Ss, ue, ke, je, St, Zt, Dt, Wt, Ue, ur, xe, ln, we, un, U, G, He, hr, he, Re;
const Or = class Or {
  constructor(t) {
    N(this, Pe);
    N(this, yn);
    N(this, St);
    N(this, Dt);
    N(this, Ue);
    N(this, xe);
    N(this, we);
    N(this, U);
    N(this, He);
    N(this, he);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    N(this, gt, void 0);
    N(this, ct, void 0);
    N(this, At, void 0);
    N(this, mt, void 0);
    N(this, _e, void 0);
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    X(this, "ttl");
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    X(this, "ttlResolution");
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    X(this, "ttlAutopurge");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    X(this, "updateAgeOnGet");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    X(this, "updateAgeOnHas");
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    X(this, "allowStale");
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    X(this, "noDisposeOnSet");
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    X(this, "noUpdateTTL");
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    X(this, "maxEntrySize");
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    X(this, "sizeCalculation");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    X(this, "noDeleteOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    X(this, "noDeleteOnStaleGet");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    X(this, "allowStaleOnFetchAbort");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    X(this, "allowStaleOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    X(this, "ignoreFetchAbort");
    // computed properties
    N(this, J, void 0);
    N(this, bt, void 0);
    N(this, Y, void 0);
    N(this, H, void 0);
    N(this, $, void 0);
    N(this, st, void 0);
    N(this, at, void 0);
    N(this, rt, void 0);
    N(this, tt, void 0);
    N(this, vt, void 0);
    N(this, et, void 0);
    N(this, Nt, void 0);
    N(this, Bt, void 0);
    N(this, yt, void 0);
    N(this, Et, void 0);
    N(this, Xt, void 0);
    N(this, it, void 0);
    // conditionally set private methods related to TTL
    N(this, le, () => {
    });
    N(this, Pt, () => {
    });
    N(this, Me, () => {
    });
    /* c8 ignore stop */
    N(this, lt, () => !1);
    N(this, ue, (t) => {
    });
    N(this, ke, (t, e, r) => {
    });
    N(this, je, (t, e, r, o) => {
      if (r || o)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    });
    const { max: e = 0, ttl: r, ttlResolution: o = 1, ttlAutopurge: s, updateAgeOnGet: i, updateAgeOnHas: c, allowStale: a, dispose: l, disposeAfter: u, noDisposeOnSet: f, noUpdateTTL: d, maxSize: p = 0, maxEntrySize: m = 0, sizeCalculation: g, fetchMethod: x, noDeleteOnFetchRejection: w, noDeleteOnStaleGet: k, allowStaleOnFetchRejection: C, allowStaleOnFetchAbort: T, ignoreFetchAbort: E } = t;
    if (e !== 0 && !Gt(e))
      throw new TypeError("max option must be a nonnegative integer");
    const _ = e ? Es(e) : Array;
    if (!_)
      throw new Error("invalid max value: " + e);
    if (I(this, gt, e), I(this, ct, p), this.maxEntrySize = m || h(this, ct), this.sizeCalculation = g, this.sizeCalculation) {
      if (!h(this, ct) && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (x !== void 0 && typeof x != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (I(this, _e, x), I(this, Xt, !!x), I(this, Y, /* @__PURE__ */ new Map()), I(this, H, new Array(e).fill(void 0)), I(this, $, new Array(e).fill(void 0)), I(this, st, new _(e)), I(this, at, new _(e)), I(this, rt, 0), I(this, tt, 0), I(this, vt, A4.create(e)), I(this, J, 0), I(this, bt, 0), typeof l == "function" && I(this, At, l), typeof u == "function" ? (I(this, mt, u), I(this, et, [])) : (I(this, mt, void 0), I(this, et, void 0)), I(this, Et, !!h(this, At)), I(this, it, !!h(this, mt)), this.noDisposeOnSet = !!f, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!w, this.allowStaleOnFetchRejection = !!C, this.allowStaleOnFetchAbort = !!T, this.ignoreFetchAbort = !!E, this.maxEntrySize !== 0) {
      if (h(this, ct) !== 0 && !Gt(h(this, ct)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!Gt(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      R(this, yn, Ss).call(this);
    }
    if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!k, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!c, this.ttlResolution = Gt(o) || o === 0 ? o : 1, this.ttlAutopurge = !!s, this.ttl = r || 0, this.ttl) {
      if (!Gt(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      R(this, Pe, lr).call(this);
    }
    if (h(this, gt) === 0 && this.ttl === 0 && h(this, ct) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !h(this, gt) && !h(this, ct)) {
      const v = "LRU_CACHE_UNBOUNDED";
      C4(v) && (As.add(v), w4("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", v, Or));
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
  static unsafeExposeInternals(t) {
    return {
      // properties
      starts: h(t, Bt),
      ttls: h(t, yt),
      sizes: h(t, Nt),
      keyMap: h(t, Y),
      keyList: h(t, H),
      valList: h(t, $),
      next: h(t, st),
      prev: h(t, at),
      get head() {
        return h(t, rt);
      },
      get tail() {
        return h(t, tt);
      },
      free: h(t, vt),
      // methods
      isBackgroundFetch: (e) => {
        var r;
        return R(r = t, U, G).call(r, e);
      },
      backgroundFetch: (e, r, o, s) => {
        var i;
        return R(i = t, we, un).call(i, e, r, o, s);
      },
      moveToTail: (e) => {
        var r;
        return R(r = t, he, Re).call(r, e);
      },
      indexes: (e) => {
        var r;
        return R(r = t, St, Zt).call(r, e);
      },
      rindexes: (e) => {
        var r;
        return R(r = t, Dt, Wt).call(r, e);
      },
      isStale: (e) => {
        var r;
        return h(r = t, lt).call(r, e);
      }
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return h(this, gt);
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return h(this, ct);
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return h(this, bt);
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return h(this, J);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return h(this, _e);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return h(this, At);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return h(this, mt);
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(t) {
    return h(this, Y).has(t) ? 1 / 0 : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const t of R(this, St, Zt).call(this))
      h(this, $)[t] !== void 0 && h(this, H)[t] !== void 0 && !R(this, U, G).call(this, h(this, $)[t]) && (yield [h(this, H)[t], h(this, $)[t]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const t of R(this, Dt, Wt).call(this))
      h(this, $)[t] !== void 0 && h(this, H)[t] !== void 0 && !R(this, U, G).call(this, h(this, $)[t]) && (yield [h(this, H)[t], h(this, $)[t]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const t of R(this, St, Zt).call(this)) {
      const e = h(this, H)[t];
      e !== void 0 && !R(this, U, G).call(this, h(this, $)[t]) && (yield e);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const t of R(this, Dt, Wt).call(this)) {
      const e = h(this, H)[t];
      e !== void 0 && !R(this, U, G).call(this, h(this, $)[t]) && (yield e);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const t of R(this, St, Zt).call(this))
      h(this, $)[t] !== void 0 && !R(this, U, G).call(this, h(this, $)[t]) && (yield h(this, $)[t]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const t of R(this, Dt, Wt).call(this))
      h(this, $)[t] !== void 0 && !R(this, U, G).call(this, h(this, $)[t]) && (yield h(this, $)[t]);
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
  find(t, e = {}) {
    for (const r of R(this, St, Zt).call(this)) {
      const o = h(this, $)[r], s = R(this, U, G).call(this, o) ? o.__staleWhileFetching : o;
      if (s !== void 0 && t(s, h(this, H)[r], this))
        return this.get(h(this, H)[r], e);
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(t, e = this) {
    for (const r of R(this, St, Zt).call(this)) {
      const o = h(this, $)[r], s = R(this, U, G).call(this, o) ? o.__staleWhileFetching : o;
      s !== void 0 && t.call(e, s, h(this, H)[r], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(t, e = this) {
    for (const r of R(this, Dt, Wt).call(this)) {
      const o = h(this, $)[r], s = R(this, U, G).call(this, o) ? o.__staleWhileFetching : o;
      s !== void 0 && t.call(e, s, h(this, H)[r], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let t = !1;
    for (const e of R(this, Dt, Wt).call(this, { allowStale: !0 }))
      h(this, lt).call(this, e) && (this.delete(h(this, H)[e]), t = !0);
    return t;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const t = [];
    for (const e of R(this, St, Zt).call(this, { allowStale: !0 })) {
      const r = h(this, H)[e], o = h(this, $)[e], s = R(this, U, G).call(this, o) ? o.__staleWhileFetching : o;
      if (s === void 0 || r === void 0)
        continue;
      const i = { value: s };
      if (h(this, yt) && h(this, Bt)) {
        i.ttl = h(this, yt)[e];
        const c = Fe.now() - h(this, Bt)[e];
        i.start = Math.floor(Date.now() - c);
      }
      h(this, Nt) && (i.size = h(this, Nt)[e]), t.unshift([r, i]);
    }
    return t;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */
  load(t) {
    this.clear();
    for (const [e, r] of t) {
      if (r.start) {
        const o = Date.now() - r.start;
        r.start = Fe.now() - o;
      }
      this.set(e, r.value, r);
    }
  }
  /**
   * Add a value to the cache.
   */
  set(t, e, r = {}) {
    var d, p, m;
    const { ttl: o = this.ttl, start: s, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: c = this.sizeCalculation, status: a } = r;
    let { noUpdateTTL: l = this.noUpdateTTL } = r;
    const u = h(this, je).call(this, t, e, r.size || 0, c);
    if (this.maxEntrySize && u > this.maxEntrySize)
      return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.delete(t), this;
    let f = h(this, J) === 0 ? void 0 : h(this, Y).get(t);
    if (f === void 0)
      f = h(this, J) === 0 ? h(this, tt) : h(this, vt).length !== 0 ? h(this, vt).pop() : h(this, J) === h(this, gt) ? R(this, xe, ln).call(this, !1) : h(this, J), h(this, H)[f] = t, h(this, $)[f] = e, h(this, Y).set(t, f), h(this, st)[h(this, tt)] = f, h(this, at)[f] = h(this, tt), I(this, tt, f), Je(this, J)._++, h(this, ke).call(this, f, u, a), a && (a.set = "add"), l = !1;
    else {
      R(this, he, Re).call(this, f);
      const g = h(this, $)[f];
      if (e !== g) {
        if (h(this, Xt) && R(this, U, G).call(this, g) ? g.__abortController.abort(new Error("replaced")) : i || (h(this, Et) && ((d = h(this, At)) == null || d.call(this, g, t, "set")), h(this, it) && ((p = h(this, et)) == null || p.push([g, t, "set"]))), h(this, ue).call(this, f), h(this, ke).call(this, f, u, a), h(this, $)[f] = e, a) {
          a.set = "replace";
          const x = g && R(this, U, G).call(this, g) ? g.__staleWhileFetching : g;
          x !== void 0 && (a.oldValue = x);
        }
      } else
        a && (a.set = "update");
    }
    if (o !== 0 && !h(this, yt) && R(this, Pe, lr).call(this), h(this, yt) && (l || h(this, Me).call(this, f, o, s), a && h(this, Pt).call(this, a, f)), !i && h(this, it) && h(this, et)) {
      const g = h(this, et);
      let x;
      for (; x = g == null ? void 0 : g.shift(); )
        (m = h(this, mt)) == null || m.call(this, ...x);
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    var t;
    try {
      for (; h(this, J); ) {
        const e = h(this, $)[h(this, rt)];
        if (R(this, xe, ln).call(this, !0), R(this, U, G).call(this, e)) {
          if (e.__staleWhileFetching)
            return e.__staleWhileFetching;
        } else if (e !== void 0)
          return e;
      }
    } finally {
      if (h(this, it) && h(this, et)) {
        const e = h(this, et);
        let r;
        for (; r = e == null ? void 0 : e.shift(); )
          (t = h(this, mt)) == null || t.call(this, ...r);
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
  has(t, e = {}) {
    const { updateAgeOnHas: r = this.updateAgeOnHas, status: o } = e, s = h(this, Y).get(t);
    if (s !== void 0) {
      const i = h(this, $)[s];
      if (R(this, U, G).call(this, i) && i.__staleWhileFetching === void 0)
        return !1;
      if (h(this, lt).call(this, s))
        o && (o.has = "stale", h(this, Pt).call(this, o, s));
      else
        return r && h(this, le).call(this, s), o && (o.has = "hit", h(this, Pt).call(this, o, s)), !0;
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
  peek(t, e = {}) {
    const { allowStale: r = this.allowStale } = e, o = h(this, Y).get(t);
    if (o !== void 0 && (r || !h(this, lt).call(this, o))) {
      const s = h(this, $)[o];
      return R(this, U, G).call(this, s) ? s.__staleWhileFetching : s;
    }
  }
  async fetch(t, e = {}) {
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
      allowStaleOnFetchAbort: m = this.allowStaleOnFetchAbort,
      context: g,
      forceRefresh: x = !1,
      status: w,
      signal: k
    } = e;
    if (!h(this, Xt))
      return w && (w.fetch = "get"), this.get(t, {
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
      allowStaleOnFetchAbort: m,
      ignoreFetchAbort: p,
      status: w,
      signal: k
    };
    let T = h(this, Y).get(t);
    if (T === void 0) {
      w && (w.fetch = "miss");
      const E = R(this, we, un).call(this, t, T, C, g);
      return E.__returned = E;
    } else {
      const E = h(this, $)[T];
      if (R(this, U, G).call(this, E)) {
        const S = r && E.__staleWhileFetching !== void 0;
        return w && (w.fetch = "inflight", S && (w.returnedStale = !0)), S ? E.__staleWhileFetching : E.__returned = E;
      }
      const _ = h(this, lt).call(this, T);
      if (!x && !_)
        return w && (w.fetch = "hit"), R(this, he, Re).call(this, T), o && h(this, le).call(this, T), w && h(this, Pt).call(this, w, T), E;
      const v = R(this, we, un).call(this, t, T, C, g), O = v.__staleWhileFetching !== void 0 && r;
      return w && (w.fetch = _ ? "stale" : "refresh", O && _ && (w.returnedStale = !0)), O ? v.__staleWhileFetching : v.__returned = v;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(t, e = {}) {
    const { allowStale: r = this.allowStale, updateAgeOnGet: o = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, status: i } = e, c = h(this, Y).get(t);
    if (c !== void 0) {
      const a = h(this, $)[c], l = R(this, U, G).call(this, a);
      return i && h(this, Pt).call(this, i, c), h(this, lt).call(this, c) ? (i && (i.get = "stale"), l ? (i && r && a.__staleWhileFetching !== void 0 && (i.returnedStale = !0), r ? a.__staleWhileFetching : void 0) : (s || this.delete(t), i && r && (i.returnedStale = !0), r ? a : void 0)) : (i && (i.get = "hit"), l ? a.__staleWhileFetching : (R(this, he, Re).call(this, c), o && h(this, le).call(this, c), a));
    } else
      i && (i.get = "miss");
  }
  /**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */
  delete(t) {
    var r, o, s, i;
    let e = !1;
    if (h(this, J) !== 0) {
      const c = h(this, Y).get(t);
      if (c !== void 0)
        if (e = !0, h(this, J) === 1)
          this.clear();
        else {
          h(this, ue).call(this, c);
          const a = h(this, $)[c];
          R(this, U, G).call(this, a) ? a.__abortController.abort(new Error("deleted")) : (h(this, Et) || h(this, it)) && (h(this, Et) && ((r = h(this, At)) == null || r.call(this, a, t, "delete")), h(this, it) && ((o = h(this, et)) == null || o.push([a, t, "delete"]))), h(this, Y).delete(t), h(this, H)[c] = void 0, h(this, $)[c] = void 0, c === h(this, tt) ? I(this, tt, h(this, at)[c]) : c === h(this, rt) ? I(this, rt, h(this, st)[c]) : (h(this, st)[h(this, at)[c]] = h(this, st)[c], h(this, at)[h(this, st)[c]] = h(this, at)[c]), Je(this, J)._--, h(this, vt).push(c);
        }
    }
    if (h(this, it) && ((s = h(this, et)) != null && s.length)) {
      const c = h(this, et);
      let a;
      for (; a = c == null ? void 0 : c.shift(); )
        (i = h(this, mt)) == null || i.call(this, ...a);
    }
    return e;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var t, e, r;
    for (const o of R(this, Dt, Wt).call(this, { allowStale: !0 })) {
      const s = h(this, $)[o];
      if (R(this, U, G).call(this, s))
        s.__abortController.abort(new Error("deleted"));
      else {
        const i = h(this, H)[o];
        h(this, Et) && ((t = h(this, At)) == null || t.call(this, s, i, "delete")), h(this, it) && ((e = h(this, et)) == null || e.push([s, i, "delete"]));
      }
    }
    if (h(this, Y).clear(), h(this, $).fill(void 0), h(this, H).fill(void 0), h(this, yt) && h(this, Bt) && (h(this, yt).fill(0), h(this, Bt).fill(0)), h(this, Nt) && h(this, Nt).fill(0), I(this, rt, 0), I(this, tt, 0), h(this, vt).length = 0, I(this, bt, 0), I(this, J, 0), h(this, it) && h(this, et)) {
      const o = h(this, et);
      let s;
      for (; s = o == null ? void 0 : o.shift(); )
        (r = h(this, mt)) == null || r.call(this, ...s);
    }
  }
};
gt = new WeakMap(), ct = new WeakMap(), At = new WeakMap(), mt = new WeakMap(), _e = new WeakMap(), J = new WeakMap(), bt = new WeakMap(), Y = new WeakMap(), H = new WeakMap(), $ = new WeakMap(), st = new WeakMap(), at = new WeakMap(), rt = new WeakMap(), tt = new WeakMap(), vt = new WeakMap(), et = new WeakMap(), Nt = new WeakMap(), Bt = new WeakMap(), yt = new WeakMap(), Et = new WeakMap(), Xt = new WeakMap(), it = new WeakMap(), Pe = new WeakSet(), lr = function() {
  const t = new an(h(this, gt)), e = new an(h(this, gt));
  I(this, yt, t), I(this, Bt, e), I(this, Me, (s, i, c = Fe.now()) => {
    if (e[s] = i !== 0 ? c : 0, t[s] = i, i !== 0 && this.ttlAutopurge) {
      const a = setTimeout(() => {
        h(this, lt).call(this, s) && this.delete(h(this, H)[s]);
      }, i + 1);
      a.unref && a.unref();
    }
  }), I(this, le, (s) => {
    e[s] = t[s] !== 0 ? Fe.now() : 0;
  }), I(this, Pt, (s, i) => {
    if (t[i]) {
      const c = t[i], a = e[i];
      s.ttl = c, s.start = a, s.now = r || o(), s.remainingTTL = s.now + c - a;
    }
  });
  let r = 0;
  const o = () => {
    const s = Fe.now();
    if (this.ttlResolution > 0) {
      r = s;
      const i = setTimeout(() => r = 0, this.ttlResolution);
      i.unref && i.unref();
    }
    return s;
  };
  this.getRemainingTTL = (s) => {
    const i = h(this, Y).get(s);
    return i === void 0 ? 0 : t[i] === 0 || e[i] === 0 ? 1 / 0 : e[i] + t[i] - (r || o());
  }, I(this, lt, (s) => t[s] !== 0 && e[s] !== 0 && (r || o()) - e[s] > t[s]);
}, le = new WeakMap(), Pt = new WeakMap(), Me = new WeakMap(), lt = new WeakMap(), yn = new WeakSet(), Ss = function() {
  const t = new an(h(this, gt));
  I(this, bt, 0), I(this, Nt, t), I(this, ue, (e) => {
    I(this, bt, h(this, bt) - t[e]), t[e] = 0;
  }), I(this, je, (e, r, o, s) => {
    if (R(this, U, G).call(this, r))
      return 0;
    if (!Gt(o))
      if (s) {
        if (typeof s != "function")
          throw new TypeError("sizeCalculation must be a function");
        if (o = s(r, e), !Gt(o))
          throw new TypeError("sizeCalculation return invalid (expect positive integer)");
      } else
        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
    return o;
  }), I(this, ke, (e, r, o) => {
    if (t[e] = r, h(this, ct)) {
      const s = h(this, ct) - t[e];
      for (; h(this, bt) > s; )
        R(this, xe, ln).call(this, !0);
    }
    I(this, bt, h(this, bt) + t[e]), o && (o.entrySize = r, o.totalCalculatedSize = h(this, bt));
  });
}, ue = new WeakMap(), ke = new WeakMap(), je = new WeakMap(), St = new WeakSet(), Zt = function* ({ allowStale: t = this.allowStale } = {}) {
  if (h(this, J))
    for (let e = h(this, tt); !(!R(this, Ue, ur).call(this, e) || ((t || !h(this, lt).call(this, e)) && (yield e), e === h(this, rt))); )
      e = h(this, at)[e];
}, Dt = new WeakSet(), Wt = function* ({ allowStale: t = this.allowStale } = {}) {
  if (h(this, J))
    for (let e = h(this, rt); !(!R(this, Ue, ur).call(this, e) || ((t || !h(this, lt).call(this, e)) && (yield e), e === h(this, tt))); )
      e = h(this, st)[e];
}, Ue = new WeakSet(), ur = function(t) {
  return t !== void 0 && h(this, Y).get(h(this, H)[t]) === t;
}, xe = new WeakSet(), ln = function(t) {
  var s, i;
  const e = h(this, rt), r = h(this, H)[e], o = h(this, $)[e];
  return h(this, Xt) && R(this, U, G).call(this, o) ? o.__abortController.abort(new Error("evicted")) : (h(this, Et) || h(this, it)) && (h(this, Et) && ((s = h(this, At)) == null || s.call(this, o, r, "evict")), h(this, it) && ((i = h(this, et)) == null || i.push([o, r, "evict"]))), h(this, ue).call(this, e), t && (h(this, H)[e] = void 0, h(this, $)[e] = void 0, h(this, vt).push(e)), h(this, J) === 1 ? (I(this, rt, I(this, tt, 0)), h(this, vt).length = 0) : I(this, rt, h(this, st)[e]), h(this, Y).delete(r), Je(this, J)._--, e;
}, we = new WeakSet(), un = function(t, e, r, o) {
  const s = e === void 0 ? void 0 : h(this, $)[e];
  if (R(this, U, G).call(this, s))
    return s;
  const i = new AbortController(), { signal: c } = r;
  c == null || c.addEventListener("abort", () => i.abort(c.reason), {
    signal: i.signal
  });
  const a = {
    signal: i.signal,
    options: r,
    context: o
  }, l = (g, x = !1) => {
    const { aborted: w } = i.signal, k = r.ignoreFetchAbort && g !== void 0;
    if (r.status && (w && !x ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, k && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), w && !k && !x)
      return f(i.signal.reason);
    const C = p;
    return h(this, $)[e] === p && (g === void 0 ? C.__staleWhileFetching ? h(this, $)[e] = C.__staleWhileFetching : this.delete(t) : (r.status && (r.status.fetchUpdated = !0), this.set(t, g, a.options))), g;
  }, u = (g) => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = g), f(g)), f = (g) => {
    const { aborted: x } = i.signal, w = x && r.allowStaleOnFetchAbort, k = w || r.allowStaleOnFetchRejection, C = k || r.noDeleteOnFetchRejection, T = p;
    if (h(this, $)[e] === p && (!C || T.__staleWhileFetching === void 0 ? this.delete(t) : w || (h(this, $)[e] = T.__staleWhileFetching)), k)
      return r.status && T.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), T.__staleWhileFetching;
    if (T.__returned === T)
      throw g;
  }, d = (g, x) => {
    var k;
    const w = (k = h(this, _e)) == null ? void 0 : k.call(this, t, s, a);
    w && w instanceof Promise && w.then((C) => g(C), x), i.signal.addEventListener("abort", () => {
      (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (g(), r.allowStaleOnFetchAbort && (g = (C) => l(C, !0)));
    });
  };
  r.status && (r.status.fetchDispatched = !0);
  const p = new Promise(d).then(l, u), m = Object.assign(p, {
    __abortController: i,
    __staleWhileFetching: s,
    __returned: void 0
  });
  return e === void 0 ? (this.set(t, m, { ...a.options, status: void 0 }), e = h(this, Y).get(t)) : h(this, $)[e] = m, m;
}, U = new WeakSet(), G = function(t) {
  if (!h(this, Xt))
    return !1;
  const e = t;
  return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof AbortController;
}, He = new WeakSet(), hr = function(t, e) {
  h(this, at)[e] = t, h(this, st)[t] = e;
}, he = new WeakSet(), Re = function(t) {
  t !== h(this, tt) && (t === h(this, rt) ? I(this, rt, h(this, st)[t]) : R(this, He, hr).call(this, h(this, at)[t], h(this, st)[t]), R(this, He, hr).call(this, h(this, tt), t), I(this, tt, t));
};
let ar = Or;
const E4 = ar, S4 = (n, t) => {
  const e = ft("editorId"), { noImgZoomIn: r } = n, o = br(() => {
    const s = document.querySelectorAll(`#${e}-preview img`);
    s.length !== 0 && Ui(s, {
      background: "#00000073"
    });
  });
  ne(() => {
    !r && o();
  }), te([t, Jo(n.setting, "preview")], () => {
    !r && o();
  });
}, D4 = S4, T4 = (n, t) => {
  if (typeof t[n] == "string")
    return t[n];
  const e = `<i class="${j}-iconfont ${j}-icon-${n}"></i>`;
  switch (zt.iconfontType) {
    case "svg":
      return `<svg class="${j}-icon" aria-hidden="true"><use xlink:href="#${j}-icon-${n}"></use></svg>`;
    default:
      return e;
  }
}, q4 = (n, t) => {
  const e = ft("editorId"), r = ft("usedLanguageText"), o = ft("customIcon"), s = () => {
    document.querySelectorAll(`#${e}-preview pre`).forEach((a) => {
      var l, u;
      let f = -1;
      (l = a.querySelector(".copy-button")) == null || l.remove();
      const d = ((u = r.value.copyCode) == null ? void 0 : u.text) || "复制代码", p = document.createElement("span");
      p.setAttribute("class", "copy-button"), p.dataset.tips = d, p.innerHTML = T4("copy", o.value), p.addEventListener("click", () => {
        var m, g;
        clearTimeout(f);
        const x = a.querySelector("code").innerText, w = Yi(n.formatCopiedText(x)), k = ((m = r.value.copyCode) == null ? void 0 : m.successTips) || "已复制！", C = ((g = r.value.copyCode) == null ? void 0 : g.failTips) || "已复制！";
        p.dataset.tips = w ? k : C, f = window.setTimeout(() => {
          p.dataset.tips = d;
        }, 1500);
      }), a.appendChild(p);
    });
  }, i = () => {
    er(s);
  }, c = (a) => {
    a && er(s);
  };
  te(() => t.value, i), te(() => n.setting.preview, c), te(() => n.setting.htmlPreview, c), te(() => r.value, s), ne(s);
}, F4 = q4, z4 = (n) => {
  var t;
  const e = (t = zt.editorExtensions) == null ? void 0 : t.highlight, r = e == null ? void 0 : e.instance, o = ft("highlight"), s = fn(r);
  return ne(() => {
    if (!n.noHighlight && !s.value) {
      const i = document.createElement("script");
      i.src = o.value.js, i.onload = () => {
        s.value = window.hljs;
      }, i.id = `${j}-hljs`, fe(i, "hljs");
      const c = document.createElement("link");
      c.rel = "stylesheet", c.href = o.value.css, c.id = `${j}-hlCss`, fe(c);
    }
  }), te(
    () => o.value.css,
    (i) => {
      Ci(`${j}-hlCss`, "href", i);
    }
  ), s;
}, L4 = z4, R4 = (n) => {
  const t = ft("theme"), { editorExtensions: e } = zt, r = e == null ? void 0 : e.mermaid, o = fn(r == null ? void 0 : r.instance), s = fn(-1), i = new E4({
    max: 1e3,
    // 缓存10分钟
    ttl: 6e5
  }), c = () => {
    const a = o.value;
    !n.noMermaid && a && (a.initialize({
      startOnLoad: !1,
      theme: t.value === "dark" ? "dark" : "default"
    }), s.value = s.value + 1);
  };
  return te(
    () => t.value,
    () => {
      i.clear(), c();
    }
  ), ne(() => {
    if (!n.noMermaid && !(r != null && r.instance)) {
      const a = (r == null ? void 0 : r.js) || gi;
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
        l.id = `${j}-mermaid`, l.src = a, l.onload = () => {
          o.value = window.mermaid, c();
        }, fe(l, "mermaid");
      }
    }
  }), { mermaidRef: o, reRenderRef: s, replaceMermaid: () => {
    er(() => {
      if (!n.noMermaid && o.value) {
        const a = document.querySelectorAll(
          `div.${j}-mermaid`
        ), l = document.createElement("div");
        l.style.width = document.body.offsetWidth + "px", l.style.height = document.body.offsetHeight + "px", l.style.position = "fixed", l.style.zIndex = "-10000", l.style.top = "-10000";
        let u = a.length;
        u > 0 && document.body.appendChild(l), a.forEach(async (f) => {
          let d = i.get(f.innerText);
          if (!d) {
            const m = wi(), g = o.value.renderAsync || o.value.render;
            let x = "";
            try {
              x = await g(m, f.innerText, l);
            } catch {
            }
            d = typeof x == "string" ? x : x.svg, i.set(f.innerText, d);
          }
          const p = document.createElement("p");
          p.className = `${j}-mermaid`, p.setAttribute("data-processed", ""), p.innerHTML = d, f.dataset.line !== void 0 && (p.dataset.line = f.dataset.line), f.replaceWith(p), --u === 0 && l.remove();
        });
      }
    });
  } };
}, I4 = R4, O4 = (n) => {
  var t;
  const e = (t = zt.editorExtensions) == null ? void 0 : t.katex, r = e == null ? void 0 : e.instance, o = fn(r);
  return ne(() => {
    if (!n.noKatex && !o.value) {
      const s = document.createElement("script");
      s.src = (e == null ? void 0 : e.js) || Pr.js, s.onload = () => {
        o.value = window.katex;
      }, s.id = `${j}-katex`;
      const i = document.createElement("link");
      i.rel = "stylesheet", i.href = (e == null ? void 0 : e.css) || Pr.css, i.id = `${j}-katexCss`, fe(s, "katex"), fe(i);
    }
  }), o;
}, $4 = O4, N4 = (n, t) => {
  const e = n.renderer.rules.fence.bind(n.renderer.rules);
  n.renderer.rules.fence = (r, o, s, i, c) => {
    const a = r[o], l = a.content.trim();
    if (a.info === "mermaid") {
      let u;
      return r[o].map && r[o].level === 0 && (u = r[o].map[0], r[o].attrSet("data-line", String(u))), `<div class="${j}-mermaid" ${u !== void 0 ? "data-line=" + u : ""} data-mermaid-theme=${t.themeRef.value}>${l}</div>`;
    }
    return e(r, o, s, i, c);
  };
}, B4 = N4, Oo = (n, t) => {
  let e = !0, r = !0;
  const o = n.posMax, s = t > 0 ? n.src.charCodeAt(t - 1) : -1, i = t + 1 <= o ? n.src.charCodeAt(t + 1) : -1;
  return (s === 32 || s === 9 || i >= 48 && i <= 57) && (r = !1), (i === 32 || i === 9) && (e = !1), {
    can_open: e,
    can_close: r
  };
}, P4 = (n, t) => {
  let e, r, o, s;
  if (n.src[n.pos] !== "$")
    return !1;
  if (o = Oo(n, n.pos), !o.can_open)
    return t || (n.pending += "$"), n.pos += 1, !0;
  const i = n.pos + 1;
  for (e = i; (e = n.src.indexOf("$", e)) !== -1; ) {
    for (s = e - 1; n.src[s] === "\\"; )
      s -= 1;
    if ((e - s) % 2 == 1)
      break;
    e += 1;
  }
  return e === -1 ? (t || (n.pending += "$"), n.pos = i, !0) : e - i === 0 ? (t || (n.pending += "$$"), n.pos = i + 1, !0) : (o = Oo(n, e), o.can_close ? (t || (r = n.push("math_inline", "math", 0), r.markup = "$", r.content = n.src.slice(i, e)), n.pos = e + 1, !0) : (t || (n.pending += "$"), n.pos = i, !0));
}, M4 = (n, t, e, r) => {
  let o, s, i, c, a = !1, l = n.bMarks[t] + n.tShift[t], u = n.eMarks[t];
  if (l + 2 > u || n.src.slice(l, l + 2) !== "$$")
    return !1;
  if (l += 2, o = n.src.slice(l, u), r)
    return !0;
  for (o.trim().slice(-2) === "$$" && (o = o.trim().slice(0, -2), a = !0), i = t; !a && (i++, !(i >= e || (l = n.bMarks[i] + n.tShift[i], u = n.eMarks[i], l < u && n.tShift[i] < n.blkIndent))); )
    n.src.slice(l, u).trim().slice(-2) === "$$" && (c = n.src.slice(0, u).lastIndexOf("$$"), s = n.src.slice(l, c), a = !0);
  n.line = i + 1;
  const f = n.push("math_block", "math", 0);
  return f.block = !0, f.content = (o && o.trim() ? o + `
` : "") + n.getLines(t + 1, i, n.tShift[t], !0) + (s && s.trim() ? s : ""), f.map = [t, n.line], f.markup = "$$", !0;
}, j4 = (n, t) => {
  const e = (o) => {
    if (t.katexRef.value) {
      const s = t.katexRef.value.renderToString(o, {
        throwOnError: !1
      });
      return `<span class="${j}-katex-inline" data-processed>${s}</span>`;
    } else
      return `<span class="${j}-katex-inline">${o}</span>`;
  }, r = (o, s) => {
    if (t.katexRef.value) {
      const i = t.katexRef.value.renderToString(o, {
        throwOnError: !1,
        displayMode: !0
      });
      return `<p class="${j}-katex-block" data-line=${s} data-processed>${i}</p>`;
    } else
      return `<p class="${j}-katex-block" data-line=${s}>${o}</p>`;
  };
  n.inline.ruler.after("escape", "math_inline", P4), n.block.ruler.after("blockquote", "math_block", M4, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  }), n.renderer.rules.math_inline = (o, s) => e(o[s].content), n.renderer.rules.math_block = (o, s) => r(o[s].content, o[s].map[0]) + `
`;
}, U4 = j4, H4 = (n, t) => {
  t = t || {};
  const e = 3, r = t.marker || "!", o = r.charCodeAt(0), s = r.length;
  let i = "", c = "";
  const a = (u, f, d, p, m) => {
    const g = u[f];
    return g.type === "admonition_open" ? (u[f].attrPush([
      "class",
      `${j}-admonition ${j}-admonition-${g.info}`
    ]), u[f].attrSet("data-line", String(u[f].map[0]))) : g.type === "admonition_title_open" && u[f].attrPush(["class", `${j}-admonition-title`]), m.renderToken(u, f, d);
  }, l = (u) => {
    const f = u.trim().split(" ", 2);
    c = "", i = f[0], f.length > 1 && (c = u.substring(i.length + 2)), (c === "" || !c) && (c = i);
  };
  n.block.ruler.before(
    "code",
    "admonition",
    (u, f, d, p) => {
      let m, g, x, w = !1, k = u.bMarks[f] + u.tShift[f], C = u.eMarks[f];
      if (o !== u.src.charCodeAt(k))
        return !1;
      for (m = k + 1; m <= C && r[(m - k) % s] === u.src[m]; m++)
        ;
      const T = Math.floor((m - k) / s);
      if (T !== e)
        return !1;
      m -= (m - k) % s;
      const E = u.src.slice(k, m), _ = u.src.slice(m, C);
      if (l(_), p)
        return !0;
      for (g = f; g++, !(g >= d || (k = u.bMarks[g] + u.tShift[g], C = u.eMarks[g], k < C && u.sCount[g] < u.blkIndent)); )
        if (o === u.src.charCodeAt(k) && !(u.sCount[g] - u.blkIndent >= 4)) {
          for (m = k + 1; m <= C && r[(m - k) % s] === u.src[m]; m++)
            ;
          if (!(Math.floor((m - k) / s) < T) && (m -= (m - k) % s, m = u.skipSpaces(m), !(m < C))) {
            w = !0;
            break;
          }
        }
      const v = u.parentType, b = u.lineMax;
      return u.parentType = "root", u.lineMax = g, x = u.push("admonition_open", "div", 1), x.markup = E, x.block = !0, x.info = i, x.map = [f, g], x = u.push("admonition_title_open", "p", 1), x.markup = E + " " + i, x.map = [f, g], x = u.push("inline", "", 0), x.content = c, x.map = [f, u.line - 1], x.children = [], x = u.push("admonition_title_close", "p", -1), x.markup = E + " " + i, u.md.block.tokenize(u, f + 1, g), x = u.push("admonition_close", "div", -1), x.markup = u.src.slice(k, m), x.block = !0, u.parentType = v, u.lineMax = b, u.line = g + (w ? 1 : 0), !0;
    },
    {
      alt: ["paragraph", "reference", "blockquote", "list"]
    }
  ), n.renderer.rules.admonition_open = a, n.renderer.rules.admonition_title_open = a, n.renderer.rules.admonition_title_close = a, n.renderer.rules.admonition_close = a;
}, V4 = H4, G4 = (n, t) => {
  n.renderer.rules.heading_open = (e, r) => {
    var o;
    const s = e[r], i = ((o = e[r + 1].children) == null ? void 0 : o.reduce((a, l) => a + (l.content || ""), "")) || "", c = s.markup.length;
    return t.headsRef.value.push({
      text: i,
      level: c
    }), s.map && s.level === 0 && (s.attrSet("data-line", String(s.map[0])), s.attrSet(
      "id",
      t.mdHeadingId(i, c, t.headsRef.value.length)
    )), n.renderer.renderToken(e, r, t);
  }, n.renderer.rules.heading_close = (e, r, o, s, i) => i.renderToken(e, r, o);
}, Z4 = G4, W4 = (n, t) => {
  const e = n.renderer.rules.fence, r = n.utils.unescapeAll, o = /\[(\w*)(?::([\w ]*))?\]/;
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
    const [m, g] = i(l[u]);
    if (m === null)
      return e(l, u, f, d, p);
    let x, w, k, C, T = "", E = "";
    for (let _ = u; _ < l.length && (x = l[_], [w, k] = i(x), w === m); _++)
      x.info = x.info.replace(o, ""), x.hidden = !0, C = _ - u > 0 ? "" : " checked", T += `<li><input type="radio" name="label-group-${t.editorId}-${u}"${C}><label for="group-${t.editorId}-${u}-tab-${_ - u}" onclick="this.previousElementSibling.click()">${k || c(x)}</label></li>
`, E += `<input type="radio" id="group-${t.editorId}-${u}-tab-${_ - u}" name="group-${t.editorId}-${u}"${C}>
` + e(l, _, f, d, p);
    return `<div class="code-tabs">
<ul>
` + T + `</ul>
` + E + "</div>";
  };
  n.renderer.rules.fence = a;
}, K4 = W4, J4 = (n) => {
  [
    "paragraph_open",
    "table_open",
    "ordered_list_open",
    "bullet_list_open",
    "blockquote_open",
    "hr",
    "html_block",
    "fence"
  ].forEach((t) => {
    const e = n.renderer.rules[t];
    e ? n.renderer.rules[t] = (r, o, s, i, c) => {
      let a;
      const l = e(r, o, s, i, c);
      return r[o].map && r[o].level === 0 && !/^<!--/.test(l) ? (a = r[o].map[0], l.replace(/^(<[^>]*)/, `$1 data-line="${a}"`)) : l;
    } : n.renderer.rules[t] = (r, o, s, i, c) => {
      let a;
      return r[o].map && r[o].level === 0 && (a = r[o].map[0], r[o].attrSet("data-line", String(a))), c.renderToken(r, o, s);
    };
  });
}, Y4 = (n, t) => {
  const { editorConfig: e, markdownItConfig: r, markdownItPlugins: o } = zt, s = ft("editorId"), i = ft("showCodeRowNumber"), c = ft("theme"), a = Nr([]), l = L4(n), u = $4(n), { reRenderRef: f, replaceMermaid: d } = I4(n), p = c4({
    html: !0,
    breaks: !0
  });
  r(p);
  const m = [
    {
      type: "katex",
      plugin: U4,
      options: { katexRef: u }
    },
    {
      type: "image",
      plugin: l4,
      options: { figcaption: !0, classes: "md-zoom" }
    },
    {
      type: "admonition",
      plugin: V4,
      options: {}
    },
    {
      type: "taskList",
      plugin: x4,
      options: {}
    },
    {
      type: "heading",
      plugin: Z4,
      options: { mdHeadingId: n.mdHeadingId, headsRef: a }
    },
    {
      type: "codeTabs",
      plugin: K4,
      options: { editorId: s }
    }
  ];
  n.noMermaid || m.push({
    type: "mermaid",
    plugin: B4,
    options: { themeRef: c }
  }), o(m).forEach((T) => {
    p.use(T.plugin, T.options);
  });
  const g = p.options.highlight;
  p.set({
    highlight: (T, E, _) => {
      if (g) {
        const O = g(T, E, _);
        if (O)
          return O;
      }
      let v;
      !n.noHighlight && l.value ? l.value.getLanguage(E) ? v = l.value.highlight(T, {
        language: E,
        ignoreIllegals: !0
      }).value : v = l.value.highlightAuto(T).value : v = p.utils.escapeHtml(T);
      const b = i ? xi(v.replace(/^\n+|\n+$/g, "")) : `<span class="code-block">${v.replace(/^\n+|\n+$/g, "")}</span>`;
      return `<pre><code class="language-${E}" language=${E}>${b}</code></pre>`;
    }
  }), J4(p);
  const x = Nr(n.sanitize(p.render(n.modelValue))), w = () => {
    Le.emit(s, _i, x.value), n.onHtmlChanged(x.value), n.onGetCatalog(a.value), Le.emit(s, jr, a.value), d();
  };
  ne(w);
  const k = br(
    async () => {
      a.value = [], x.value = n.sanitize(p.render(n.modelValue)), w();
    },
    (e == null ? void 0 : e.renderDelay) !== void 0 ? e == null ? void 0 : e.renderDelay : t ? 0 : 500
  ), C = ie(() => (n.noKatex || u.value) && (n.noHighlight || l.value));
  return te([Jo(n, "modelValue"), C, f], k), ne(() => {
    Le.on(s, {
      name: ki,
      callback() {
        Le.emit(s, jr, a.value);
      }
    });
  }), { html: x };
}, Q4 = Y4, Ds = {
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
  ...Ds
});
const X4 = /* @__PURE__ */ mr({
  name: "ContentPreview",
  props: Ds,
  setup(n) {
    const t = ft("editorId"), e = ft("previewTheme"), r = ft("showCodeRowNumber"), {
      html: o
    } = Q4(n, n.previewOnly);
    return F4(n, o), D4(n, o), () => Qt(oi, null, [Qt("div", {
      id: `${t}-preview-wrapper`,
      class: `${j}-preview-wrapper`,
      "data-show": n.setting.preview,
      key: "content-preview-wrapper"
    }, [Qt("article", {
      id: `${t}-preview`,
      class: [`${j}-preview`, `${e == null ? void 0 : e.value}-theme`, r && `${j}-scrn`],
      innerHTML: o.value
    }, null)]), !n.previewOnly && Qt("div", {
      id: `${t}-html-wrapper`,
      class: `${j}-preview-wrapper`,
      "data-show": n.setting.htmlPreview,
      key: "html-preview-wrapper"
    }, [Qt("div", {
      class: `${j}-html`
    }, [o.value])])]);
  }
}), tV = (n) => {
  var t, e;
  const { editorId: r } = n, o = (e = (t = zt) == null ? void 0 : t.editorExtensions) == null ? void 0 : e.highlight;
  Vt("editorId", r), Vt(
    "theme",
    ie(() => n.theme)
  ), Vt(
    "language",
    ie(() => n.language)
  ), Vt(
    "highlight",
    ie(() => {
      const i = {
        ...Mr,
        ...o == null ? void 0 : o.css
      }, c = n.codeStyleReverse && n.codeStyleReverseList.includes(n.previewTheme) ? "dark" : n.theme;
      return {
        js: (o == null ? void 0 : o.js) || fi,
        css: i[n.codeTheme] ? i[n.codeTheme][c] : Mr.atom[c]
      };
    })
  ), Vt("showCodeRowNumber", n.showCodeRowNumber);
  const s = ie(() => {
    var i, c;
    const a = {
      ...Br,
      ...(c = (i = zt) == null ? void 0 : i.editorConfig) == null ? void 0 : c.languageUserDefined
    };
    return a[n.language] ? a[n.language] : Br["zh-CN"];
  });
  Vt("usedLanguageText", s), Vt(
    "previewTheme",
    ie(() => n.previewTheme)
  ), Vt(
    "customIcon",
    ie(() => n.customIcon)
  );
}, eV = (n) => {
  ne(() => {
    var t, e;
    if (!n.noIconfont)
      if (zt.iconfontType === "svg") {
        const r = document.createElement("script");
        r.src = ((t = zt.editorExtensions) == null ? void 0 : t.iconfont) || ui, r.id = `${j}-icon`, fe(r);
      } else {
        const r = document.createElement("link");
        r.rel = "stylesheet", r.href = ((e = zt.editorExtensions) == null ? void 0 : e.iconfontClass) || hi, r.id = `${j}-icon-class`, fe(r);
      }
  });
}, nV = (n) => n, Ts = {
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
    default: li
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
    default: nV
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
  ...Ts
});
const qs = ["onHtmlChanged", "onGetCatalog"];
[
  ...qs
];
const rV = /* @__PURE__ */ mr({
  name: "MdPreview",
  props: Ts,
  emits: qs,
  setup(n, t) {
    const {
      editorId: e,
      noKatex: r,
      noMermaid: o,
      noHighlight: s
    } = n;
    return tV(n), eV(n), ri(() => {
      Le.clear(e);
    }), () => Qt("div", {
      id: e,
      class: [j, n.class, n.theme === "dark" && `${j}-dark`, `${j}-previewOnly`],
      style: n.style
    }, [Qt(X4, {
      modelValue: n.modelValue,
      onHtmlChanged: (i) => {
        n.onHtmlChanged ? n.onHtmlChanged(i) : t.emit("onHtmlChanged", i);
      },
      onGetCatalog: (i) => {
        n.onGetCatalog ? n.onGetCatalog(i) : t.emit("onGetCatalog", i);
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
}), hn = rV;
hn.install = (n) => (n.component(hn.name, hn), n);
var oV = typeof global == "object" && global && global.Object === Object && global;
const Fs = oV;
var sV = typeof self == "object" && self && self.Object === Object && self, iV = Fs || sV || Function("return this")();
const Se = iV;
var cV = Se.Symbol;
const bn = cV;
var zs = Object.prototype, aV = zs.hasOwnProperty, lV = zs.toString, ze = bn ? bn.toStringTag : void 0;
function uV(n) {
  var t = aV.call(n, ze), e = n[ze];
  try {
    n[ze] = void 0;
    var r = !0;
  } catch {
  }
  var o = lV.call(n);
  return r && (t ? n[ze] = e : delete n[ze]), o;
}
var hV = Object.prototype, fV = hV.toString;
function pV(n) {
  return fV.call(n);
}
var dV = "[object Null]", gV = "[object Undefined]", $o = bn ? bn.toStringTag : void 0;
function Tn(n) {
  return n == null ? n === void 0 ? gV : dV : $o && $o in Object(n) ? uV(n) : pV(n);
}
function Ze(n) {
  return n != null && typeof n == "object";
}
var mV = Array.isArray;
const fr = mV;
function ge(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
function Ls(n) {
  return n;
}
var bV = "[object AsyncFunction]", vV = "[object Function]", yV = "[object GeneratorFunction]", _V = "[object Proxy]";
function zr(n) {
  if (!ge(n))
    return !1;
  var t = Tn(n);
  return t == vV || t == yV || t == bV || t == _V;
}
var kV = Se["__core-js_shared__"];
const Xn = kV;
var No = function() {
  var n = /[^.]+$/.exec(Xn && Xn.keys && Xn.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function xV(n) {
  return !!No && No in n;
}
var wV = Function.prototype, CV = wV.toString;
function AV(n) {
  if (n != null) {
    try {
      return CV.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var EV = /[\\^$.*+?()[\]{}|]/g, SV = /^\[object .+?Constructor\]$/, DV = Function.prototype, TV = Object.prototype, qV = DV.toString, FV = TV.hasOwnProperty, zV = RegExp(
  "^" + qV.call(FV).replace(EV, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function LV(n) {
  if (!ge(n) || xV(n))
    return !1;
  var t = zr(n) ? zV : SV;
  return t.test(AV(n));
}
function RV(n, t) {
  return n == null ? void 0 : n[t];
}
function Lr(n, t) {
  var e = RV(n, t);
  return LV(e) ? e : void 0;
}
var Bo = Object.create, IV = /* @__PURE__ */ function() {
  function n() {
  }
  return function(t) {
    if (!ge(t))
      return {};
    if (Bo)
      return Bo(t);
    n.prototype = t;
    var e = new n();
    return n.prototype = void 0, e;
  };
}();
const OV = IV;
function $V(n, t, e) {
  switch (e.length) {
    case 0:
      return n.call(t);
    case 1:
      return n.call(t, e[0]);
    case 2:
      return n.call(t, e[0], e[1]);
    case 3:
      return n.call(t, e[0], e[1], e[2]);
  }
  return n.apply(t, e);
}
function NV(n, t) {
  var e = -1, r = n.length;
  for (t || (t = Array(r)); ++e < r; )
    t[e] = n[e];
  return t;
}
var BV = 800, PV = 16, MV = Date.now;
function jV(n) {
  var t = 0, e = 0;
  return function() {
    var r = MV(), o = PV - (r - e);
    if (e = r, o > 0) {
      if (++t >= BV)
        return arguments[0];
    } else
      t = 0;
    return n.apply(void 0, arguments);
  };
}
function UV(n) {
  return function() {
    return n;
  };
}
var HV = function() {
  try {
    var n = Lr(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}();
const vn = HV;
var VV = vn ? function(n, t) {
  return vn(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: UV(t),
    writable: !0
  });
} : Ls;
const GV = VV;
var ZV = jV(GV);
const WV = ZV;
var KV = 9007199254740991, JV = /^(?:0|[1-9]\d*)$/;
function Rs(n, t) {
  var e = typeof n;
  return t = t ?? KV, !!t && (e == "number" || e != "symbol" && JV.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function Rr(n, t, e) {
  t == "__proto__" && vn ? vn(n, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : n[t] = e;
}
function qn(n, t) {
  return n === t || n !== n && t !== t;
}
var YV = Object.prototype, QV = YV.hasOwnProperty;
function XV(n, t, e) {
  var r = n[t];
  (!(QV.call(n, t) && qn(r, e)) || e === void 0 && !(t in n)) && Rr(n, t, e);
}
function t6(n, t, e, r) {
  var o = !e;
  e || (e = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var c = t[s], a = r ? r(e[c], n[c], c, e, n) : void 0;
    a === void 0 && (a = n[c]), o ? Rr(e, c, a) : XV(e, c, a);
  }
  return e;
}
var Po = Math.max;
function e6(n, t, e) {
  return t = Po(t === void 0 ? n.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = Po(r.length - t, 0), i = Array(s); ++o < s; )
      i[o] = r[t + o];
    o = -1;
    for (var c = Array(t + 1); ++o < t; )
      c[o] = r[o];
    return c[t] = e(i), $V(n, this, c);
  };
}
function n6(n, t) {
  return WV(e6(n, t, Ls), n + "");
}
var r6 = 9007199254740991;
function Is(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= r6;
}
function Ir(n) {
  return n != null && Is(n.length) && !zr(n);
}
function o6(n, t, e) {
  if (!ge(e))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ir(e) && Rs(t, e.length) : r == "string" && t in e) ? qn(e[t], n) : !1;
}
function s6(n) {
  return n6(function(t, e) {
    var r = -1, o = e.length, s = o > 1 ? e[o - 1] : void 0, i = o > 2 ? e[2] : void 0;
    for (s = n.length > 3 && typeof s == "function" ? (o--, s) : void 0, i && o6(e[0], e[1], i) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++r < o; ) {
      var c = e[r];
      c && n(t, c, r, s);
    }
    return t;
  });
}
var i6 = Object.prototype;
function Os(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || i6;
  return n === e;
}
function c6(n, t) {
  for (var e = -1, r = Array(n); ++e < n; )
    r[e] = t(e);
  return r;
}
var a6 = "[object Arguments]";
function Mo(n) {
  return Ze(n) && Tn(n) == a6;
}
var $s = Object.prototype, l6 = $s.hasOwnProperty, u6 = $s.propertyIsEnumerable, h6 = Mo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Mo : function(n) {
  return Ze(n) && l6.call(n, "callee") && !u6.call(n, "callee");
};
const pr = h6;
function f6() {
  return !1;
}
var Ns = typeof exports == "object" && exports && !exports.nodeType && exports, jo = Ns && typeof module == "object" && module && !module.nodeType && module, p6 = jo && jo.exports === Ns, Uo = p6 ? Se.Buffer : void 0, d6 = Uo ? Uo.isBuffer : void 0, g6 = d6 || f6;
const Bs = g6;
var m6 = "[object Arguments]", b6 = "[object Array]", v6 = "[object Boolean]", y6 = "[object Date]", _6 = "[object Error]", k6 = "[object Function]", x6 = "[object Map]", w6 = "[object Number]", C6 = "[object Object]", A6 = "[object RegExp]", E6 = "[object Set]", S6 = "[object String]", D6 = "[object WeakMap]", T6 = "[object ArrayBuffer]", q6 = "[object DataView]", F6 = "[object Float32Array]", z6 = "[object Float64Array]", L6 = "[object Int8Array]", R6 = "[object Int16Array]", I6 = "[object Int32Array]", O6 = "[object Uint8Array]", $6 = "[object Uint8ClampedArray]", N6 = "[object Uint16Array]", B6 = "[object Uint32Array]", V = {};
V[F6] = V[z6] = V[L6] = V[R6] = V[I6] = V[O6] = V[$6] = V[N6] = V[B6] = !0;
V[m6] = V[b6] = V[T6] = V[v6] = V[q6] = V[y6] = V[_6] = V[k6] = V[x6] = V[w6] = V[C6] = V[A6] = V[E6] = V[S6] = V[D6] = !1;
function P6(n) {
  return Ze(n) && Is(n.length) && !!V[Tn(n)];
}
function M6(n) {
  return function(t) {
    return n(t);
  };
}
var Ps = typeof exports == "object" && exports && !exports.nodeType && exports, Oe = Ps && typeof module == "object" && module && !module.nodeType && module, j6 = Oe && Oe.exports === Ps, tr = j6 && Fs.process, U6 = function() {
  try {
    var n = Oe && Oe.require && Oe.require("util").types;
    return n || tr && tr.binding && tr.binding("util");
  } catch {
  }
}();
const Ho = U6;
var Vo = Ho && Ho.isTypedArray, H6 = Vo ? M6(Vo) : P6;
const Ms = H6;
var V6 = Object.prototype, G6 = V6.hasOwnProperty;
function Z6(n, t) {
  var e = fr(n), r = !e && pr(n), o = !e && !r && Bs(n), s = !e && !r && !o && Ms(n), i = e || r || o || s, c = i ? c6(n.length, String) : [], a = c.length;
  for (var l in n)
    (t || G6.call(n, l)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Rs(l, a))) && c.push(l);
  return c;
}
function W6(n, t) {
  return function(e) {
    return n(t(e));
  };
}
function K6(n) {
  var t = [];
  if (n != null)
    for (var e in Object(n))
      t.push(e);
  return t;
}
var J6 = Object.prototype, Y6 = J6.hasOwnProperty;
function Q6(n) {
  if (!ge(n))
    return K6(n);
  var t = Os(n), e = [];
  for (var r in n)
    r == "constructor" && (t || !Y6.call(n, r)) || e.push(r);
  return e;
}
function js(n) {
  return Ir(n) ? Z6(n, !0) : Q6(n);
}
var X6 = Lr(Object, "create");
const Be = X6;
function t5() {
  this.__data__ = Be ? Be(null) : {}, this.size = 0;
}
function e5(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var n5 = "__lodash_hash_undefined__", r5 = Object.prototype, o5 = r5.hasOwnProperty;
function s5(n) {
  var t = this.__data__;
  if (Be) {
    var e = t[n];
    return e === n5 ? void 0 : e;
  }
  return o5.call(t, n) ? t[n] : void 0;
}
var i5 = Object.prototype, c5 = i5.hasOwnProperty;
function a5(n) {
  var t = this.__data__;
  return Be ? t[n] !== void 0 : c5.call(t, n);
}
var l5 = "__lodash_hash_undefined__";
function u5(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Be && t === void 0 ? l5 : t, this;
}
function de(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
de.prototype.clear = t5;
de.prototype.delete = e5;
de.prototype.get = s5;
de.prototype.has = a5;
de.prototype.set = u5;
function h5() {
  this.__data__ = [], this.size = 0;
}
function Fn(n, t) {
  for (var e = n.length; e--; )
    if (qn(n[e][0], t))
      return e;
  return -1;
}
var f5 = Array.prototype, p5 = f5.splice;
function d5(n) {
  var t = this.__data__, e = Fn(t, n);
  if (e < 0)
    return !1;
  var r = t.length - 1;
  return e == r ? t.pop() : p5.call(t, e, 1), --this.size, !0;
}
function g5(n) {
  var t = this.__data__, e = Fn(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function m5(n) {
  return Fn(this.__data__, n) > -1;
}
function b5(n, t) {
  var e = this.__data__, r = Fn(e, n);
  return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
}
function Ut(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
Ut.prototype.clear = h5;
Ut.prototype.delete = d5;
Ut.prototype.get = g5;
Ut.prototype.has = m5;
Ut.prototype.set = b5;
var v5 = Lr(Se, "Map");
const Us = v5;
function y5() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (Us || Ut)(),
    string: new de()
  };
}
function _5(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function zn(n, t) {
  var e = n.__data__;
  return _5(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function k5(n) {
  var t = zn(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function x5(n) {
  return zn(this, n).get(n);
}
function w5(n) {
  return zn(this, n).has(n);
}
function C5(n, t) {
  var e = zn(this, n), r = e.size;
  return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
}
function De(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
De.prototype.clear = y5;
De.prototype.delete = k5;
De.prototype.get = x5;
De.prototype.has = w5;
De.prototype.set = C5;
var A5 = W6(Object.getPrototypeOf, Object);
const Hs = A5;
var E5 = "[object Object]", S5 = Function.prototype, D5 = Object.prototype, Vs = S5.toString, T5 = D5.hasOwnProperty, q5 = Vs.call(Object);
function F5(n) {
  if (!Ze(n) || Tn(n) != E5)
    return !1;
  var t = Hs(n);
  if (t === null)
    return !0;
  var e = T5.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && Vs.call(e) == q5;
}
function z5() {
  this.__data__ = new Ut(), this.size = 0;
}
function L5(n) {
  var t = this.__data__, e = t.delete(n);
  return this.size = t.size, e;
}
function R5(n) {
  return this.__data__.get(n);
}
function I5(n) {
  return this.__data__.has(n);
}
var O5 = 200;
function $5(n, t) {
  var e = this.__data__;
  if (e instanceof Ut) {
    var r = e.__data__;
    if (!Us || r.length < O5 - 1)
      return r.push([n, t]), this.size = ++e.size, this;
    e = this.__data__ = new De(r);
  }
  return e.set(n, t), this.size = e.size, this;
}
function Te(n) {
  var t = this.__data__ = new Ut(n);
  this.size = t.size;
}
Te.prototype.clear = z5;
Te.prototype.delete = L5;
Te.prototype.get = R5;
Te.prototype.has = I5;
Te.prototype.set = $5;
var Gs = typeof exports == "object" && exports && !exports.nodeType && exports, Go = Gs && typeof module == "object" && module && !module.nodeType && module, N5 = Go && Go.exports === Gs, Zo = N5 ? Se.Buffer : void 0, Wo = Zo ? Zo.allocUnsafe : void 0;
function B5(n, t) {
  if (t)
    return n.slice();
  var e = n.length, r = Wo ? Wo(e) : new n.constructor(e);
  return n.copy(r), r;
}
var P5 = Se.Uint8Array;
const Ko = P5;
function M5(n) {
  var t = new n.constructor(n.byteLength);
  return new Ko(t).set(new Ko(n)), t;
}
function j5(n, t) {
  var e = t ? M5(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.length);
}
function U5(n) {
  return typeof n.constructor == "function" && !Os(n) ? OV(Hs(n)) : {};
}
function H5(n) {
  return function(t, e, r) {
    for (var o = -1, s = Object(t), i = r(t), c = i.length; c--; ) {
      var a = i[n ? c : ++o];
      if (e(s[a], a, s) === !1)
        break;
    }
    return t;
  };
}
var V5 = H5();
const G5 = V5;
function dr(n, t, e) {
  (e !== void 0 && !qn(n[t], e) || e === void 0 && !(t in n)) && Rr(n, t, e);
}
function Z5(n) {
  return Ze(n) && Ir(n);
}
function gr(n, t) {
  if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
    return n[t];
}
function W5(n) {
  return t6(n, js(n));
}
function K5(n, t, e, r, o, s, i) {
  var c = gr(n, e), a = gr(t, e), l = i.get(a);
  if (l) {
    dr(n, e, l);
    return;
  }
  var u = s ? s(c, a, e + "", n, t, i) : void 0, f = u === void 0;
  if (f) {
    var d = fr(a), p = !d && Bs(a), m = !d && !p && Ms(a);
    u = a, d || p || m ? fr(c) ? u = c : Z5(c) ? u = NV(c) : p ? (f = !1, u = B5(a, !0)) : m ? (f = !1, u = j5(a, !0)) : u = [] : F5(a) || pr(a) ? (u = c, pr(c) ? u = W5(c) : (!ge(c) || zr(c)) && (u = U5(a))) : f = !1;
  }
  f && (i.set(a, u), o(u, a, r, s, i), i.delete(a)), dr(n, e, u);
}
function Zs(n, t, e, r, o) {
  n !== t && G5(t, function(s, i) {
    if (o || (o = new Te()), ge(s))
      K5(n, t, i, e, Zs, r, o);
    else {
      var c = r ? r(gr(n, i), s, i + "", n, t, o) : void 0;
      c === void 0 && (c = s), dr(n, i, c);
    }
  }, js);
}
var J5 = s6(function(n, t, e) {
  Zs(n, t, e);
});
const Y5 = J5, Q5 = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": "",
  class: "els-markdown-view"
}, nG = /* @__PURE__ */ mr({
  __name: "view",
  props: {
    value: {},
    theme: {},
    previewTheme: {},
    editorId: {},
    showCodeRowNumber: { type: Boolean },
    style: {},
    codeTheme: {},
    option: {}
  },
  setup(n) {
    const t = n, { value: e } = si(t), r = Y5(t.option || {}, { theme: t.theme, previewTheme: t.previewTheme, editorId: t.editorId, showCodeRowNumber: t.showCodeRowNumber, style: t.style, codeTheme: t.codeTheme });
    return (o, s) => (ii(), ci("div", Q5, [
      Qt($n(hn), ai({ "model-value": $n(e) }, $n(r)), null, 16, ["model-value"])
    ]));
  }
}), rG = {
  install: (n) => {
  }
};
export {
  nG as ElsMarkdownView,
  rG as default
};
