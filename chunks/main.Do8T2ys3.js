import "../css/main-DQsX5Ws-.css";
import { defineComponent as X, toRefs as Y, ref as _, shallowRef as D, watch as R, onMounted as Z, openBlock as s, createElementBlock as B, Fragment as ee, createVNode as f, unref as o, withCtx as p, createElementVNode as m, renderSlot as O, createBlock as b, resolveDynamicComponent as te, withDirectives as oe, createCommentVNode as k, vShow as ae, normalizeStyle as le, mergeProps as re, markRaw as j, nextTick as ne } from "vue";
import { w as se, x as ue, y as ie, z as r, A as L, B as N, C as de, b as z, q as ce, D as fe, r as pe } from "./vendor.BakInURX.js";
import { _ as me } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const Ve = {
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
}, ve = {
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
}, ge = {
  relative: "",
  "h-full": "",
  "w-full": "",
  class: "CodeEditor"
}, he = {
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
}, Ce = { key: 1 }, _e = {
  name: "CodeEditor"
}, be = /* @__PURE__ */ X({
  ..._e,
  props: {
    modelValue: {},
    mode: { default: "javascript" },
    readOnly: { type: Boolean, default: !1 },
    options: { default: () => ({}) },
    theme: { default: () => ve },
    format: {},
    teleport: { default: "body" },
    dialog: { default: () => ({ width: "80%", draggable: !0 }) },
    dialogTitle: {},
    lang: { default: () => [se(), ue()] },
    showOperate: { type: Boolean, default: !0 },
    maxHeight: { default: "auto" },
    size: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(F, { expose: H, emit: M }) {
    const A = M, U = F, [$, w] = ie(), { modelValue: y, showOperate: I, theme: E, format: u, teleport: P, dialog: q, dialogTitle: G, lang: v } = Y(U), V = _(), g = _(), n = D(), i = D();
    let a = y.value || "";
    const l = _(!1);
    let h = r.theme(E.value), d = L.create({
      doc: a,
      extensions: [
        N,
        h,
        ...v.value,
        r.updateListener.of((e) => {
          e.docChanged && x(e);
        })
      ]
    });
    const c = (e = a, t = n.value) => {
      t == null || t.dispatch({ changes: { from: 0, to: t == null ? void 0 : t.state.doc.length, insert: e } });
    }, W = (e = n.value) => e == null ? void 0 : e.state.doc.toString(), S = () => {
      h = r.theme(E.value), d = L.create({
        doc: a,
        extensions: [
          N,
          h,
          ...v.value,
          r.updateListener.of((e) => {
            e.docChanged && x(e);
          })
        ]
      });
    }, J = (e = n.value) => {
      e == null || e.setState(d);
    }, K = () => {
      n.value = j(new r({ state: d, parent: V.value }));
    }, T = () => {
      l.value = !0, ne(() => {
        g.value && (i.value ? c(a || "", i.value) : (a = W() || "", S(), i.value = j(new r({ state: d, parent: g.value }))));
      });
    }, x = de((e) => {
      a = e.state.doc.toString(), A("update:modelValue", a);
    }, 200), Q = () => {
      var t;
      const e = ((t = u.value) == null ? void 0 : t.call(u, a)) || a;
      e != a && (a = e, c(e, l.value ? i.value : n.value));
    };
    return R(y, (e) => {
      e != a && c(e);
    }), R(v, () => {
      S(), J();
    }), Z(() => {
      K();
    }), H({
      openDialog: T
    }), (e, t) => (s(), B(ee, null, [
      f(o($), null, {
        default: p(({ $slots: C }) => [
          m("div", ge, [
            O(e.$slots, "default", {}, void 0, !0),
            (s(), b(te(C.default))),
            oe(m("div", he, [
              l.value ? k("", !0) : (s(), b(o(z), {
                key: 0,
                icon: o(ce),
                title: "放大",
                link: "",
                onClick: T
              }, null, 8, ["icon"])),
              l.value ? k("", !0) : (s(), B("i", Ce)),
              o(u) ? (s(), b(o(z), {
                key: 2,
                icon: o(fe),
                title: "格式化",
                link: "",
                onClick: Q
              }, null, 8, ["icon"])) : k("", !0),
              O(e.$slots, "operate", {}, void 0, !0)
            ], 512), [
              [ae, o(I) || l.value]
            ])
          ])
        ]),
        _: 3
      }),
      f(o(w), null, {
        default: p(() => [
          m("div", {
            relative: "",
            "h-full": "",
            "w-full": "",
            ref_key: "codeEditorRef",
            ref: V,
            class: "_container",
            style: le(`max-height:${e.maxHeight}`)
          }, null, 4)
        ]),
        _: 1
      }),
      f(o(pe), re({
        "append-to": o(P),
        width: "80%",
        modelValue: l.value,
        "onUpdate:modelValue": t[0] || (t[0] = (C) => l.value = C)
      }, o(q), {
        title: o(G) || "代码编辑器",
        onClose: t[1] || (t[1] = () => c())
      }), {
        default: p(() => [
          f(o(w), { class: "important-h-70vh" }, {
            default: p(() => [
              m("div", {
                relative: "",
                "h-full": "",
                "w-full": "",
                ref_key: "codeEditorCopyRef",
                ref: g,
                class: "_container"
              }, null, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16, ["append-to", "modelValue", "title"])
    ], 64));
  }
}), Se = /* @__PURE__ */ me(be, [["__scopeId", "data-v-8dba98ff"]]);
export {
  Se as C,
  Ve as D,
  ve as a
};
