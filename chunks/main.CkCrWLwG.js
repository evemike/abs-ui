import "../css/main-KOnvI2t9.css";
import { defineComponent as P, useSlots as U, toRefs as J, ref as n, shallowRef as S, watch as x, onMounted as W, openBlock as d, createElementBlock as g, createElementVNode as c, normalizeClass as q, renderSlot as V, normalizeStyle as K, withDirectives as Q, createVNode as X, unref as l, createCommentVNode as _, createBlock as Y, vShow as Z, markRaw as ee } from "vue";
import { aD as te, aE as oe, aF as ae, aG as i, aH as T, aI as B, az as le, f as H, P as se, aJ as re } from "./vendor.Btkc3P4Q.js";
import { _ as ne } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const we = {
  autoCloseBrackets: !0,
  autoCloseTags: !0,
  foldGutter: !0,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  tabSize: 2,
  mode: { name: "javascript", json: !0 },
  theme: "idea",
  lineWrapping: !0,
  lineNumbers: !0,
  readOnly: !1,
  bordered: !1
}, ie = {
  "&": {
    backgroundColor: "#f8f9fc",
    color: "#223553"
  },
  ".cm-container": {
    border: "none"
  },
  ".cm-container .cm-focused": {
    outline: "none"
  },
  ".cm-content": {
    caretColor: "#0e9"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#000",
    outline: "none"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#074"
  },
  ".cm-gutters": {
    backgroundColor: "#eef1f6",
    color: "#7e8a9d",
    borderRightColor: " #e6e9ef"
  }
}, ue = {
  relative: "",
  "h-full": "",
  "w-full": "",
  class: "CodeEditor"
}, de = {
  relative: "",
  "w-full": "",
  "h-full": "",
  flex: "",
  class: "_container"
}, ce = {
  absolute: "",
  "w-auto": "",
  "h-auto": "",
  "p-4px": "",
  "top-4": "",
  "right-4": "",
  bg: "#ffffff",
  "rd-4": "",
  "text-16": "",
  class: "_operate"
}, fe = { key: 0 }, ve = ["innerHTML"], pe = {
  name: "CodeEditor"
}, he = /* @__PURE__ */ P({
  ...pe,
  props: {
    modelValue: {},
    mode: { default: "javascript" },
    readOnly: { type: Boolean, default: !1 },
    options: { default: () => ({}) },
    theme: { default: () => ie },
    format: {},
    teleport: { default: "body" },
    dialog: { default: () => ({ width: "80%", draggable: !0 }) },
    dialogTitle: {},
    lang: { default: () => [te(), oe()] },
    showOperate: { type: Boolean, default: !0 },
    maxHeight: { default: "none" },
    size: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(R, { expose: D, emit: L }) {
    const M = L, O = R;
    U(), ae();
    const { modelValue: b, showOperate: j, theme: C, format: r, teleport: ge, dialog: _e, dialogTitle: be, lang: f } = J(O), k = n(), m = n();
    n();
    const s = S(), u = S();
    let a = b.value || "";
    const o = n(!0), E = n("");
    let v = i.theme(C.value), p = T.create({
      doc: a,
      extensions: [
        B,
        v,
        ...f.value,
        i.updateListener.of((e) => {
          e.docChanged && y(e);
        })
      ]
    });
    const h = (e = a, t = l(o) ? u.value : s.value) => {
      t == null || t.dispatch({ changes: { from: 0, to: t == null ? void 0 : t.state.doc.length, insert: e } }), t == null || t.focus();
    }, z = (e = "", t = l(o) ? u.value : s.value) => {
      t == null || t.dispatch(t == null ? void 0 : t.state.replaceSelection(e)), t == null || t.focus();
    }, N = (e = l(o) ? u.value : s.value) => e == null ? void 0 : e.state.doc.toString(), F = () => {
      v = i.theme(C.value), p = T.create({
        doc: a,
        extensions: [
          B,
          v,
          ...f.value,
          i.updateListener.of((e) => {
            e.docChanged && y(e);
          })
        ]
      });
    }, I = (e = s.value) => {
      e == null || e.setState(p);
    }, $ = () => {
      s.value = ee(new i({ state: p, parent: m.value }));
    }, A = () => {
      w();
    }, w = () => {
      var e;
      E.value = ((e = k.value) == null ? void 0 : e.innerHTML) || "", o.value = !o.value;
    }, y = le((e) => {
      a = e.state.doc.toString(), M("update:modelValue", a);
    }, 200), G = () => {
      var t;
      const e = ((t = r.value) == null ? void 0 : t.call(r, a)) || a;
      e != a && (a = e, h(e, o.value ? u.value : s.value));
    };
    return x(b, (e) => {
      e != a && h(e);
    }), x(f, () => {
      F(), I();
    }), W(() => {
      $(), o.value = !1;
    }), D({
      openDialog: A,
      setValue: h,
      getValue: N,
      insertValue: z
    }), (e, t) => (d(), g("div", ue, [
      c("div", {
        relative: "",
        "h-full": "",
        "w-full": "",
        ref_key: "codeEditorBoxRef",
        ref: k,
        class: q(["_mask", { "is-visible": o.value }])
      }, [
        c("div", de, [
          V(e.$slots, "default", {}, void 0, !0),
          c("div", {
            relative: "",
            "h-full": "",
            "w-full": "",
            class: "_codemirror-box",
            ref_key: "codeEditorRef",
            ref: m,
            style: K(o.value ? "" : `max-height:${e.maxHeight}`)
          }, null, 4),
          Q(c("div", ce, [
            X(l(H), {
              icon: l(se),
              title: o.value ? "恢复" : "放大",
              link: "",
              onClick: w
            }, null, 8, ["icon", "title"]),
            l(r) ? (d(), g("i", fe)) : _("", !0),
            l(r) ? (d(), Y(l(H), {
              key: 1,
              icon: l(re),
              title: "格式化",
              link: "",
              onClick: G
            }, null, 8, ["icon"])) : _("", !0),
            V(e.$slots, "operate", {}, void 0, !0)
          ], 512), [
            [Z, l(j) || o.value]
          ])
        ])
      ], 2),
      o.value ? (d(), g("div", {
        key: 0,
        class: "_container-box",
        innerHTML: E.value
      }, null, 8, ve)) : _("", !0)
    ]));
  }
}), ye = /* @__PURE__ */ ne(he, [["__scopeId", "data-v-46a98bf8"]]);
export {
  ye as C,
  we as D,
  ie as a
};
