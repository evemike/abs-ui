import { defineComponent as j, toRefs as B, computed as L, ref as b, resolveComponent as I, openBlock as k, createElementBlock as R, createElementVNode as i, Fragment as K, renderList as Q, unref as _, createBlock as T, withCtx as F, createTextVNode as O, toDisplayString as V, createVNode as N } from "vue";
import { bg as Y, be as z, C as J, v as M, a as D } from "./vendor.Bh6KHC77.js";
import { C as U } from "./main.DF-kfnLt.js";
const A = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, G = {
  flex: "",
  "items-center": "",
  "gap-16": ""
}, H = /* @__PURE__ */ i("span", {
  "w-100": "",
  "text-nowrap": "",
  "self-start": ""
}, "输入源", -1), W = {
  class: "flex flex-1 flex-wrap",
  style: { width: "calc(100% - 100px)" }
}, X = { class: "flex items-center mb-5" }, Z = /* @__PURE__ */ i("div", { "w-100": "" }, "SQL 语句", -1), ee = {
  "w-full": "",
  style: { height: "calc(100% - 40px)" }
}, te = {
  relative: "",
  "w-full": "",
  "h-full": "",
  flex: "",
  "flex-col": "",
  "overflow-hidden": ""
}, le = {
  "min-h-100": "",
  style: { height: "calc(100% - 32px)" }
}, se = /* @__PURE__ */ j({
  __name: "sqlConfig",
  props: {
    sql: { default: "" },
    sourceList: { default: () => [] },
    preview: {}
  },
  emits: ["change", "update:sql"],
  setup(y, { emit: x }) {
    const m = y, v = x, { sourceList: d, sql: p } = B(m), { preview: g } = m, o = L({
      get: () => h(p.value, !1),
      set: (e) => {
        const l = h(e, !0);
        v("update:sql", l), q();
      }
    }), E = L(() => d.value.map((e) => ({
      label: e.label,
      id: e.id
    })).sort((e, l) => l.label.length - e.label.length)), q = Y(() => {
      v("change");
    }, 1e3), C = (e) => {
      o.value = e;
    };
    function h(e, l = !1) {
      let r = e, u = l ? "label" : "id", f = l ? "id" : "label";
      return (E.value || []).forEach((S) => {
        let w = S[f];
        l && w.includes("-") && (w = `${w}`);
        let $ = new RegExp(`\`*${S[u]}\`*`);
        r = r.replace($, w);
      }), r;
    }
    function P(e) {
      let l = e.label;
      o.value += o.value ? l : `SELECT * FROM ${l}`;
    }
    const t = b([z()]), s = b(), n = new RegExp("(select)(?!.*(update|delete|insert))", "i"), a = L(() => n.test(o.value)), c = async () => {
      if (!n.test(o.value)) {
        D.warning("仅支持【SELECT】语句");
        return;
      }
      if (!o.value) {
        D.warning("请输入 SQL 语句");
        return;
      }
      g && g();
    };
    return (e, l) => {
      const r = I("el-tag");
      return k(), R("div", A, [
        i("div", G, [
          H,
          i("div", W, [
            (k(!0), R(K, null, Q(_(d), (u, f) => (k(), T(r, {
              key: f,
              type: "primary",
              effect: "light",
              class: "mr-10 mb-10 cursor-pointer",
              onClick: (S) => P(u)
            }, {
              default: F(() => [
                O(V(u.label), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ])
        ]),
        i("div", X, [
          Z,
          N(_(J), {
            disabled: !a.value,
            text: "",
            type: "success",
            icon: _(M),
            onClick: c
          }, {
            default: F(() => [
              O("数据预览")
            ]),
            _: 1
          }, 8, ["disabled", "icon"])
        ]),
        i("div", ee, [
          i("div", te, [
            i("div", le, [
              N(_(U), {
                ref_key: "codeEditorRef",
                ref: s,
                "model-value": o.value,
                "onUpdate:modelValue": C,
                lang: t.value,
                class: "w-full h-full"
              }, null, 8, ["model-value", "lang"])
            ])
          ])
        ])
      ]);
    };
  }
}), re = (y) => {
  const x = "OLAPSQL", m = {
    ports: { items: [{ id: "in", group: "left" }, { id: "out", group: "right" }] }
  }, v = {
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
  }, d = b(""), p = b([]), g = (t, s) => {
    d.value = t.id, p.value = E(t, s), o(p.value.map((n) => n.label)) && D.warning("输入源名称重复了，请检查并重新命名");
  };
  function o(t) {
    return new Set(t).size !== t.length;
  }
  function E(t, s) {
    const { graph: n } = s;
    return (n.getPredecessors(t, { distance: 1 }) || []).map((c) => {
      var e;
      return (e = y.event.shadow) == null ? void 0 : e.get(c);
    });
  }
  const q = {}, C = (t, s) => {
    let { projectFile: n } = s.getProjectFile(), a = JSON.parse(n);
    a.transformation.step.forEach((e) => {
      e.name === d.value && (e.only_query_sql_meta = "Y");
    }), delete a.transformation.nodeList;
    const c = {
      useOutLimit: !0,
      params: {
        projectId: s.kettle.id,
        relatedPreviousSteps: !0,
        previewSize: 1e3
      },
      onlyLoadData: !0
    };
    Object.assign(t, {
      file: JSON.stringify(a),
      config: c
    });
  }, h = (t, s) => {
    if (!t)
      return;
    const { previewFieldNames: n, previewRows: a } = t, c = (n || []).map((l) => l.replace("field", "").toLowerCase()), e = (a || []).map((l) => {
      const r = {};
      return l.forEach((u, f) => {
        r[c[f]] = u;
      }), r;
    });
    s.fields = { field: e };
  };
  return { name: x, step: v, markup: m, tabs: [
    {
      type: "form",
      default: !0,
      label: "属性配置",
      column: [
        {
          tag: se,
          setup({ params: t }) {
            const { formData: s } = t;
            return { preConfig: { handleData: C, getPreviewData: (n) => h(n, s) } };
          },
          ":sourceList": p,
          "v-model:sql": "formData.sql",
          ":preview": "() => graphEvents.customEvent('datapreviewbysql', cell)",
          "@change": "() => graphEvents.customEvent('datapreviewbysql', cell, preConfig)"
        }
      ]
    }
  ], open: g, metadata: q };
};
export {
  re as default
};
