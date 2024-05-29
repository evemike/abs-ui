import "../css/main-BIB0qmSg.css";
import { defineComponent as G, useSlots as P, toRefs as X, ref as i, shallowRef as x, watch as T, onMounted as Y, openBlock as c, createElementBlock as b, createElementVNode as f, normalizeClass as q, renderSlot as B, normalizeStyle as J, withDirectives as K, createVNode as Q, unref as l, createCommentVNode as C, createBlock as Z, vShow as ee, markRaw as te } from "vue";
import { aS as oe, aT as ae, aU as le, aV as s, aW as v, aX as O, aO as se, C as R, a0 as re, aY as ne } from "./vendor.oF5jPd5s.js";
import { _ as ie } from "./_plugin-vue_export-helper.CHgC5LLL.js";
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
}, ue = {
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
}, de = {
  relative: "",
  "h-full": "",
  "w-full": "",
  class: "CodeEditor"
}, ce = {
  relative: "",
  "w-full": "",
  "h-full": "",
  flex: "",
  class: "_container"
}, fe = {
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
}, ve = { key: 0 }, pe = ["innerHTML"], he = {
  name: "CodeEditor"
}, ge = /* @__PURE__ */ G({
  ...he,
  props: {
    modelValue: {},
    mode: { default: "javascript" },
    readOnly: { type: Boolean, default: !1 },
    options: { default: () => ({}) },
    theme: { default: () => ue },
    format: {},
    teleport: { default: "body" },
    dialog: { default: () => ({ width: "80%", draggable: !0 }) },
    dialogTitle: {},
    lang: { default: () => [oe(), ae()] },
    showOperate: { type: Boolean, default: !0 },
    maxHeight: { default: "none" },
    size: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(H, { expose: L, emit: D }) {
    const M = D, j = H;
    P(), le();
    const { modelValue: k, showOperate: N, theme: m, format: n, teleport: _e, dialog: be, dialogTitle: Ce, lang: p, readOnly: u } = X(j), y = i(), E = i();
    i();
    const r = x(), d = x();
    let a = k.value || "";
    const o = i(!0), w = i("");
    let h = s.theme(m.value), g = v.create({
      doc: a,
      extensions: [
        O,
        h,
        ...p.value,
        s.updateListener.of((e) => {
          e.docChanged && V(e);
        }),
        s.editable.of(!u.value),
        v.readOnly.of(u.value)
      ]
    });
    const _ = (e = a, t = l(o) ? d.value : r.value) => {
      t == null || t.dispatch({ changes: { from: 0, to: t == null ? void 0 : t.state.doc.length, insert: e } }), t == null || t.focus();
    }, z = (e = "", t = l(o) ? d.value : r.value) => {
      t == null || t.dispatch(t == null ? void 0 : t.state.replaceSelection(e)), t == null || t.focus();
    }, F = (e = l(o) ? d.value : r.value) => e == null ? void 0 : e.state.doc.toString(), U = () => {
      h = s.theme(m.value), g = v.create({
        doc: a,
        extensions: [
          O,
          h,
          ...p.value,
          s.updateListener.of((e) => {
            e.docChanged && V(e);
          }),
          s.editable.of(!u.value),
          v.readOnly.of(u.value)
        ]
      });
    }, $ = (e = r.value) => {
      e == null || e.setState(g);
    }, A = () => {
      r.value = te(new s({ state: g, parent: E.value }));
    }, I = () => {
      S();
    }, S = () => {
      var e;
      w.value = ((e = y.value) == null ? void 0 : e.innerHTML) || "", o.value = !o.value;
    }, V = se((e) => {
      a = e.state.doc.toString(), M("update:modelValue", a);
    }, 200), W = () => {
      var t;
      const e = ((t = n.value) == null ? void 0 : t.call(n, a)) || a;
      e != a && (a = e, _(e, o.value ? d.value : r.value));
    };
    return T(k, (e) => {
      e != a && _(e);
    }), T(p, () => {
      U(), $();
    }), Y(() => {
      A(), o.value = !1;
    }), L({
      openDialog: I,
      setValue: _,
      getValue: F,
      insertValue: z
    }), (e, t) => (c(), b("div", de, [
      f("div", {
        relative: "",
        "h-full": "",
        "w-full": "",
        ref_key: "codeEditorBoxRef",
        ref: y,
        class: q(["_mask", { "is-visible": o.value }])
      }, [
        f("div", ce, [
          B(e.$slots, "default", {}, void 0, !0),
          f("div", {
            relative: "",
            "h-full": "",
            "w-full": "",
            class: "_codemirror-box",
            ref_key: "codeEditorRef",
            ref: E,
            style: J(o.value ? "" : `max-height:${e.maxHeight}`)
          }, null, 4),
          K(f("div", fe, [
            Q(l(R), {
              icon: l(re),
              title: o.value ? "恢复" : "放大",
              link: "",
              onClick: S
            }, null, 8, ["icon", "title"]),
            l(n) ? (c(), b("i", ve)) : C("", !0),
            l(n) ? (c(), Z(l(R), {
              key: 1,
              icon: l(ne),
              title: "格式化",
              link: "",
              onClick: W
            }, null, 8, ["icon"])) : C("", !0),
            B(e.$slots, "operate", {}, void 0, !0)
          ], 512), [
            [ee, l(N) || o.value]
          ])
        ])
      ], 2),
      o.value ? (c(), b("div", {
        key: 0,
        class: "_container-box",
        innerHTML: w.value
      }, null, 8, pe)) : C("", !0)
    ]));
  }
}), Se = /* @__PURE__ */ ie(ge, [["__scopeId", "data-v-5ea3eb67"]]);
export {
  Se as C,
  we as D,
  ue as a
};
