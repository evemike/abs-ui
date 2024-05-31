import { defineComponent as j, toRefs as B, computed as L, ref as b, resolveComponent as I, openBlock as k, createElementBlock as P, createElementVNode as i, Fragment as K, renderList as Q, unref as _, createBlock as V, withCtx as O, createTextVNode as R, toDisplayString as Y, createVNode as N } from "vue";
import { bb as z, b9 as J, b as T, v as U, a as D } from "./vendor.CTqz3lQh.js";
import { C as A } from "./main.BzEWEJBT.js";
import { i as G } from "./index.CtJfHKlH.js";
const M = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, H = {
  flex: "",
  "items-center": "",
  "gap-16": ""
}, W = /* @__PURE__ */ i("span", {
  "w-100": "",
  "text-nowrap": "",
  "self-start": ""
}, "输入源", -1), X = {
  class: "flex flex-1 flex-wrap",
  style: { width: "calc(100% - 100px)" }
}, Z = { class: "flex items-center mb-5" }, ee = /* @__PURE__ */ i("div", { "w-100": "" }, "SQL 语句", -1), te = {
  "w-full": "",
  style: { height: "calc(100% - 40px)" }
}, le = {
  relative: "",
  "w-full": "",
  "h-full": "",
  flex: "",
  "flex-col": "",
  "overflow-hidden": ""
}, se = {
  "min-h-100": "",
  style: { height: "calc(100% - 32px)" }
}, ne = /* @__PURE__ */ j({
  __name: "sqlConfig",
  props: {
    sql: { default: "" },
    sourceList: { default: () => [] },
    preview: {}
  },
  emits: ["change", "update:sql"],
  setup(y, { emit: q }) {
    const m = y, v = q, { sourceList: d, sql: p } = B(m), { preview: g } = m, r = L({
      get: () => h(p.value, !1),
      set: (e) => {
        const l = h(e, !0);
        v("update:sql", l), E();
      }
    }), x = L(() => d.value.map((e) => ({
      label: e.label,
      id: e.id
    })).sort((e, l) => l.label.length - e.label.length)), E = z(() => {
      v("change");
    }, 1e3), S = (e) => {
      r.value = e;
    };
    function h(e, l = !1) {
      let o = e, u = l ? "label" : "id", f = l ? "id" : "label";
      return (x.value || []).forEach((C) => {
        let w = C[f];
        l && w.includes("-") && (w = `${w}`);
        let $ = new RegExp(`\`*${C[u]}\`*`, "g");
        o = o.replace($, w);
      }), o;
    }
    function F(e) {
      let l = e.label, o = r.value ? l : `select * from ${l}`;
      s.value.insertValue(o);
    }
    const t = b([J()]), s = b(), n = new RegExp("(select)(?!.*(update|delete|insert))", "i"), a = L(() => n.test(r.value)), c = async () => {
      if (!n.test(r.value)) {
        D.warning("仅支持【SELECT】语句");
        return;
      }
      if (!r.value) {
        D.warning("请输入 SQL 语句");
        return;
      }
      g && g();
    };
    return (e, l) => {
      const o = I("el-tag");
      return k(), P("div", M, [
        i("div", H, [
          W,
          i("div", X, [
            (k(!0), P(K, null, Q(_(d), (u, f) => (k(), V(o, {
              key: f,
              type: "primary",
              effect: "light",
              class: "mr-10 mb-10 cursor-pointer",
              onClick: (C) => F(u)
            }, {
              default: O(() => [
                R(Y(u.label), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ])
        ]),
        i("div", Z, [
          ee,
          N(_(T), {
            disabled: !a.value,
            text: "",
            type: "success",
            icon: _(U),
            onClick: c
          }, {
            default: O(() => [
              R("数据预览")
            ]),
            _: 1
          }, 8, ["disabled", "icon"])
        ]),
        i("div", te, [
          i("div", le, [
            i("div", se, [
              N(_(A), {
                ref_key: "codeEditorRef",
                ref: s,
                "model-value": r.value,
                "onUpdate:modelValue": S,
                lang: t.value,
                class: "w-full h-full"
              }, null, 8, ["model-value", "lang"])
            ])
          ])
        ])
      ]);
    };
  }
}), ce = (y) => {
  const q = "OLAPSQL", m = {
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
    G(t, s), d.value = t.id, p.value = x(t, s), r(p.value.map((n) => n.label)) && D.warning("输入源名称重复了，请检查并重新命名");
  };
  function r(t) {
    return new Set(t).size !== t.length;
  }
  function x(t, s) {
    const { graph: n } = s;
    return (n.getPredecessors(t, { distance: 1 }) || []).map((c) => {
      var e;
      return (e = y.event.shadow) == null ? void 0 : e.get(c);
    });
  }
  const E = {}, S = (t, s) => {
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
      const o = {};
      return l.forEach((u, f) => {
        o[c[f]] = u;
      }), o;
    });
    s.fields = { field: e };
  };
  return { name: q, step: v, markup: m, tabs: [
    {
      type: "form",
      default: !0,
      label: "属性配置",
      column: [
        {
          tag: ne,
          setup({ params: t }) {
            const { formData: s } = t;
            return { preConfig: { handleData: S, getPreviewData: (n) => h(n, s) } };
          },
          ":sourceList": p,
          "v-model:sql": "formData.sql",
          ":preview": "() => graphEvents.customEvent('datapreviewbysql', cell)",
          "@change": "() => graphEvents.customEvent('datapreviewbysql', cell, preConfig)"
        }
      ]
    }
  ], open: g, metadata: E };
};
export {
  ce as default
};
