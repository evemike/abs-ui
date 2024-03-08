import "../css/main-DQsX5Ws-.css";
import { defineComponent as Q, toRefs as X, ref as C, shallowRef as D, watch as R, onMounted as Y, openBlock as s, createElementBlock as B, Fragment as ee, createVNode as f, unref as o, withCtx as p, createElementVNode as m, renderSlot as L, createBlock as k, resolveDynamicComponent as te, withDirectives as oe, createCommentVNode as b, vShow as ae, normalizeStyle as le, mergeProps as re, markRaw as O, nextTick as ne } from "vue";
import { ap as se, aq as ue, ar as ie, as as r, at as j, au as F, L as de, d as N, F as ce, av as fe, Z as pe } from "./vendor.3wbU5Pec.js";
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
}, _e = { key: 1 }, Ce = {
  name: "CodeEditor"
}, ke = /* @__PURE__ */ Q({
  ...Ce,
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
  setup(H, { expose: M, emit: z }) {
    const U = z, $ = H, [A, w] = ie(), { modelValue: y, showOperate: I, theme: E, format: u, teleport: P, dialog: q, dialogTitle: G, lang: v } = X($), V = C(), g = C(), n = D(), i = D();
    let a = y.value || "";
    const l = C(!1);
    let h = r.theme(E.value), d = j.create({
      doc: a,
      extensions: [
        F,
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
      h = r.theme(E.value), d = j.create({
        doc: a,
        extensions: [
          F,
          h,
          ...v.value,
          r.updateListener.of((e) => {
            e.docChanged && x(e);
          })
        ]
      });
    }, Z = (e = n.value) => {
      e == null || e.setState(d);
    }, J = () => {
      n.value = O(new r({ state: d, parent: V.value }));
    }, T = () => {
      l.value = !0, ne(() => {
        g.value && (i.value ? c(a || "", i.value) : (a = W() || "", S(), i.value = O(new r({ state: d, parent: g.value }))));
      });
    }, x = de((e) => {
      a = e.state.doc.toString(), U("update:modelValue", a);
    }, 200), K = () => {
      var t;
      const e = ((t = u.value) == null ? void 0 : t.call(u, a)) || a;
      e != a && (a = e, c(e, l.value ? i.value : n.value));
    };
    return R(y, (e) => {
      e != a && c(e);
    }), R(v, () => {
      S(), Z();
    }), Y(() => {
      J();
    }), M({
      openDialog: T
    }), (e, t) => (s(), B(ee, null, [
      f(o(A), null, {
        default: p(({ $slots: _ }) => [
          m("div", ge, [
            L(e.$slots, "default", {}, void 0, !0),
            (s(), k(te(_.default))),
            oe(m("div", he, [
              l.value ? b("", !0) : (s(), k(o(N), {
                key: 0,
                icon: o(ce),
                title: "放大",
                link: "",
                onClick: T
              }, null, 8, ["icon"])),
              l.value ? b("", !0) : (s(), B("i", _e)),
              o(u) ? (s(), k(o(N), {
                key: 2,
                icon: o(fe),
                title: "格式化",
                link: "",
                onClick: K
              }, null, 8, ["icon"])) : b("", !0),
              L(e.$slots, "operate", {}, void 0, !0)
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
        "onUpdate:modelValue": t[0] || (t[0] = (_) => l.value = _)
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
}), Se = /* @__PURE__ */ me(ke, [["__scopeId", "data-v-8dba98ff"]]);
export {
  Se as C,
  Ve as D,
  ve as a
};
