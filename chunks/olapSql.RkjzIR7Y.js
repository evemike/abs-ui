import { defineComponent as b, ref as _, toRefs as S, computed as L, resolveComponent as k, openBlock as v, createElementBlock as w, createElementVNode as t, Fragment as D, renderList as R, unref as l, createBlock as V, withCtx as x, createTextVNode as y, toDisplayString as B, createVNode as C } from "vue";
import { bb as F, f as P, v as Q, a as E } from "./vendor.CawUkpaF.js";
import { C as T } from "./main.nJRry0wr.js";
const N = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, $ = {
  flex: "",
  "items-center": "",
  "gap-16": ""
}, I = /* @__PURE__ */ t("span", {
  "w-100": "",
  "text-nowrap": "",
  "self-start": ""
}, "输入源", -1), M = {
  class: "flex flex-1 flex-wrap",
  style: { width: "calc(100% - 100px)" }
}, O = { class: "flex items-center mb-5" }, U = /* @__PURE__ */ t("div", { "w-100": "" }, "SQL 语句", -1), Y = {
  "w-full": "",
  style: { height: "calc(100% - 40px)" }
}, A = {
  relative: "",
  "w-full": "",
  "h-full": "",
  flex: "",
  "flex-col": "",
  "overflow-hidden": ""
}, G = {
  "min-h-100": "",
  style: { height: "calc(100% - 32px)" }
}, K = /* @__PURE__ */ b({
  __name: "sqlConfig",
  props: {
    sourceList: { default: () => [] },
    formData: { default: () => ({}) },
    preview: {}
  },
  setup(p) {
    const f = _([F()]), n = p, { sourceList: r, formData: e } = S(n), { preview: a } = n;
    function g(i) {
      e.value.sql += e.value.sql ? ` \`${i.id}\`` : `SELECT * FROM \`${i.id}\``;
    }
    const h = _(), s = new RegExp("(select)(?!.*(update|delete|insert))", "i"), o = L(() => s.test(e.value.sql)), m = async () => {
      if (!s.test(e.value.sql)) {
        E.warning("仅支持【SELECT】语句");
        return;
      }
      if (!e.value.sql) {
        E.warning("请输入 SQL 语句");
        return;
      }
      a && a();
    };
    return (i, c) => {
      const u = k("el-tag");
      return v(), w("div", N, [
        t("div", $, [
          I,
          t("div", M, [
            (v(!0), w(D, null, R(l(r), (d, q) => (v(), V(u, {
              key: q,
              type: "primary",
              effect: "light",
              class: "mr-10 mb-10 cursor-pointer",
              onClick: (j) => g(d)
            }, {
              default: x(() => [
                y(B(d.id), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ])
        ]),
        t("div", O, [
          U,
          C(l(P), {
            disabled: !o.value,
            text: "",
            type: "success",
            icon: l(Q),
            onClick: m
          }, {
            default: x(() => [
              y("数据预览")
            ]),
            _: 1
          }, 8, ["disabled", "icon"])
        ]),
        t("div", Y, [
          t("div", A, [
            t("div", G, [
              C(l(T), {
                ref_key: "codeEditorRef",
                ref: h,
                modelValue: l(e).sql,
                "onUpdate:modelValue": c[0] || (c[0] = (d) => l(e).sql = d),
                lang: f.value,
                class: "w-full h-full"
              }, null, 8, ["modelValue", "lang"])
            ])
          ])
        ])
      ]);
    };
  }
}), W = () => {
  const p = "OLAPSQL", f = {
    ports: { items: [{ id: "in", group: "left" }, { id: "out", group: "right" }] }
  }, n = {
    name: "统计分析SQL",
    type: "KettleSqlStep",
    description: [],
    distribute: "Y",
    copies: "1",
    partitioning: {
      method: "none"
    },
    sql: "",
    remotesteps: {
      input: `
      `,
      output: `
      `
    },
    GUI: {
      xloc: 384,
      yloc: 336,
      draw: "Y"
    }
  }, r = _([]), e = (s, o) => {
    r.value = a(s, o);
  };
  function a(s, o) {
    const { graph: m } = o;
    return (m.getPredecessors(s, { distance: 1 }) || []).map((c) => {
      var u;
      return (u = o.form) == null ? void 0 : u.getCellFormData(c);
    });
  }
  return { name: p, step: n, markup: f, tabs: [
    {
      type: "form",
      default: !0,
      label: "属性配置",
      column: [
        {
          tag: K,
          ":sourceList": r,
          ":formData": "formData",
          ":preview": "() => graphEvents.customEvent('datapreviewbysql', cell)"
        }
      ]
    }
  ], open: e, metadata: {} };
};
export {
  W as default
};
