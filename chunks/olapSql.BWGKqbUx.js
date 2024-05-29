import { defineComponent as j, toRefs as B, computed as L, ref as b, resolveComponent as I, openBlock as k, createElementBlock as F, createElementVNode as i, Fragment as K, renderList as Q, unref as _, createBlock as V, withCtx as R, createTextVNode as N, toDisplayString as Y, createVNode as O } from "vue";
import { bh as z, bf as J, C as T, v as U, a as D } from "./vendor.oF5jPd5s.js";
import { C as A } from "./main.CwjSrSug.js";
const G = {
  "w-full": "",
  "h-full": "",
  "overflow-auto": ""
}, M = {
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
  setup(y, { emit: q }) {
    const m = y, v = q, { sourceList: d, sql: p } = B(m), { preview: g } = m, a = L({
      get: () => h(p.value, !1),
      set: (e) => {
        const l = h(e, !0);
        v("update:sql", l), C();
      }
    }), x = L(() => d.value.map((e) => ({
      label: e.label,
      id: e.id
    })).sort((e, l) => l.label.length - e.label.length)), C = z(() => {
      v("change");
    }, 1e3), E = (e) => {
      a.value = e;
    };
    function h(e, l = !1) {
      let o = e, u = l ? "label" : "id", f = l ? "id" : "label";
      return (x.value || []).forEach((S) => {
        let w = S[f];
        l && w.includes("-") && (w = `${w}`);
        let $ = new RegExp(`\`*${S[u]}\`*`, "g");
        o = o.replace($, w);
      }), o;
    }
    function P(e) {
      let l = e.label, o = a.value ? l : `select * from ${l}`;
      s.value.insertValue(o);
    }
    const t = b([J()]), s = b(), n = new RegExp("(select)(?!.*(update|delete|insert))", "i"), r = L(() => n.test(a.value)), c = async () => {
      if (!n.test(a.value)) {
        D.warning("仅支持【SELECT】语句");
        return;
      }
      if (!a.value) {
        D.warning("请输入 SQL 语句");
        return;
      }
      g && g();
    };
    return (e, l) => {
      const o = I("el-tag");
      return k(), F("div", G, [
        i("div", M, [
          H,
          i("div", W, [
            (k(!0), F(K, null, Q(_(d), (u, f) => (k(), V(o, {
              key: f,
              type: "primary",
              effect: "light",
              class: "mr-10 mb-10 cursor-pointer",
              onClick: (S) => P(u)
            }, {
              default: R(() => [
                N(Y(u.label), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ])
        ]),
        i("div", X, [
          Z,
          O(_(T), {
            disabled: !r.value,
            text: "",
            type: "success",
            icon: _(U),
            onClick: c
          }, {
            default: R(() => [
              N("数据预览")
            ]),
            _: 1
          }, 8, ["disabled", "icon"])
        ]),
        i("div", ee, [
          i("div", te, [
            i("div", le, [
              O(_(A), {
                ref_key: "codeEditorRef",
                ref: s,
                "model-value": a.value,
                "onUpdate:modelValue": E,
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
    console.log("open", t, s), d.value = t.id, p.value = x(t, s), a(p.value.map((n) => n.label)) && D.warning("输入源名称重复了，请检查并重新命名");
  };
  function a(t) {
    return new Set(t).size !== t.length;
  }
  function x(t, s) {
    const { graph: n } = s;
    return (n.getPredecessors(t, { distance: 1 }) || []).map((c) => {
      var e;
      return (e = y.event.shadow) == null ? void 0 : e.get(c);
    });
  }
  const C = {}, E = (t, s) => {
    let { projectFile: n } = s.getProjectFile(), r = JSON.parse(n);
    r.transformation.step.forEach((e) => {
      e.name === d.value && (e.only_query_sql_meta = "Y");
    }), delete r.transformation.nodeList;
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
      file: JSON.stringify(r),
      config: c
    });
  }, h = (t, s) => {
    if (!t)
      return;
    const { previewFieldNames: n, previewRows: r } = t, c = (n || []).map((l) => l.replace("field", "").toLowerCase()), e = (r || []).map((l) => {
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
          tag: se,
          setup({ params: t }) {
            const { formData: s } = t;
            return { preConfig: { handleData: E, getPreviewData: (n) => h(n, s) } };
          },
          ":sourceList": p,
          "v-model:sql": "formData.sql",
          ":preview": "() => graphEvents.customEvent('datapreviewbysql', cell)",
          "@change": "() => graphEvents.customEvent('datapreviewbysql', cell, preConfig)"
        }
      ]
    }
  ], open: g, metadata: C };
};
export {
  re as default
};
