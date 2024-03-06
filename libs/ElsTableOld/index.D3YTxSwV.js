import "../../css/ElsTableOld-D1aEQt7J.css";
import { defineComponent as Me, toRefs as De, ref as f, onMounted as Ke, openBlock as g, createBlock as A, unref as l, withCtx as Oe, createElementBlock as z, Fragment as ce, renderList as de, useAttrs as $e, computed as D, onUpdated as Ue, createVNode as re, mergeProps as se, createCommentVNode as B, createElementVNode as ue } from "vue";
import { E as me } from "../../chunks/main.DxNtyuEA.js";
import { J as je, K as Je, g as Ee, b as v, p as Qe, L as We, v as Ge, o as Pe, M as Te, N as He, O as Xe, P as Ye, Q as Ze, d as qe, R as _e, S as et, T as Ae } from "../../chunks/vendor.BakInURX.js";
import { _ as Le } from "../../chunks/main.vue_vue_type_script_setup_true_lang.DgBc8WZK.js";
const tt = {
  name: "els-table-base"
}, lt = /* @__PURE__ */ Me({
  ...tt,
  props: {
    column: {},
    data: {},
    size: {},
    width: {},
    maxHeight: {},
    fit: { type: Boolean, default: !0 },
    stripe: { type: Boolean, default: !0 },
    border: { type: Boolean, default: !1 },
    showHeader: { type: Boolean, default: !0 },
    showSummary: { type: Boolean, default: !1 },
    sumText: {},
    summaryMethod: {},
    rowClassName: {},
    rowStyle: {},
    cellClassName: {},
    cellStyle: {},
    headerRowClassName: {},
    headerRowStyle: {},
    headerCellClassName: {},
    headerCellStyle: {},
    highlightCurrentRow: { type: Boolean, default: !1 },
    rowKey: { type: [String, Function], default: "id" },
    currentRowKey: {},
    emptyText: { default: "无数据" },
    expandRowKeys: {},
    defaultExpandAll: { type: Boolean, default: !1 },
    defaultSort: {},
    tooltipEffect: { default: "dark" },
    spanMethod: {},
    selectOnIndeterminate: { type: Boolean },
    indent: {},
    treeProps: {},
    lazy: { type: Boolean },
    load: {},
    style: {},
    className: {}
  },
  emits: ["select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-click", "cell-dblclick", "cell-contextmenu", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "header-dragend", "sort-change", "filter-change", "current-change", "expand-change"],
  setup($, { expose: fe, emit: pe }) {
    var V, ae, W, G, S, oe, X, Y, ne;
    const n = pe, ge = $, {
      column: L,
      data: he,
      maxHeight: ye,
      stripe: we,
      border: ve,
      size: E,
      fit: Ne,
      showHeader: Z,
      highlightCurrentRow: M,
      currentRowKey: k,
      rowClassName: h,
      rowStyle: q,
      cellClassName: Ce,
      cellStyle: _,
      headerRowClassName: ee,
      headerRowStyle: K,
      headerCellClassName: O,
      headerCellStyle: U,
      rowKey: N,
      emptyText: te,
      defaultExpandAll: P,
      expandRowKeys: x,
      defaultSort: ke,
      tooltipEffect: xe,
      showSummary: be,
      sumText: Se,
      summaryMethod: j,
      spanMethod: le,
      selectOnIndeterminate: Re,
      indent: T,
      lazy: R,
      load: J,
      treeProps: C
    } = De(ge), y = f(), Be = { tag: Je }, b = f([]), Q = f([]), p = (H) => {
      b.value = H, Q.value = H.map((s) => Ee(s, l(N)) || ""), n("selection-change", H);
    };
    return Ke(() => {
      console.log(L.value);
    }), fe({
      elTableRef: y,
      clearSelection: (V = y.value) == null ? void 0 : V.clearSelection,
      toggleRowSelection: (ae = y.value) == null ? void 0 : ae.toggleRowSelection,
      toggleAllSelection: (W = y.value) == null ? void 0 : W.toggleAllSelection,
      toggleRowExpansion: (G = y.value) == null ? void 0 : G.toggleRowExpansion,
      setCurrentRow: (S = y.value) == null ? void 0 : S.setCurrentRow,
      clearSort: (oe = y.value) == null ? void 0 : oe.clearSort,
      clearFilter: (X = y.value) == null ? void 0 : X.clearFilter,
      doLayout: (Y = y.value) == null ? void 0 : Y.doLayout,
      sort: (ne = y.value) == null ? void 0 : ne.sort,
      selectIds: Q,
      selection: b
    }), (H, s) => (g(), A(l(je), {
      ref_key: "elTableRef",
      ref: y,
      class: "els-table-base w-100%",
      data: l(he),
      "max-height": l(ye),
      stripe: l(we),
      border: l(ve),
      size: l(E),
      fit: l(Ne),
      "show-header": l(Z),
      "highlight-current-row": l(M),
      "current-row-key": l(k),
      "row-class-name": l(h),
      "row-style": l(q),
      "cell-class-name": l(Ce),
      "cell-style": l(_),
      "header-row-class-name": l(ee),
      "header-row-style": l(K),
      "header-cell-class-name": l(O),
      "header-cell-style": l(U),
      "row-key": l(N),
      "empty-text": l(te),
      "default-expand-all": l(P),
      "expand-row-keys": l(x),
      "default-sort": l(ke),
      "tooltip-effect": l(xe),
      "show-summary": l(be),
      "sum-text": l(Se),
      "summary-method": l(j),
      "span-method": l(le),
      "select-on-indeterminate": l(Re),
      indent: l(T),
      lazy: l(R),
      load: l(J),
      "tree-props": l(C),
      onSelect: s[0] || (s[0] = (r, i) => n("select", r, i)),
      onSelectAll: s[1] || (s[1] = (r) => n("select-all", r)),
      onSelectionChange: p,
      onCellMouseEnter: s[2] || (s[2] = (r, i, d, w) => n("cell-mouse-enter", r, i, d, w)),
      onCellMouseLeave: s[3] || (s[3] = (r, i, d, w) => n("cell-mouse-leave", r, i, d, w)),
      onCellClick: s[4] || (s[4] = (r, i, d, w) => n("cell-click", r, i, d, w)),
      onCellDblclick: s[5] || (s[5] = (r, i, d, w) => n("cell-dblclick", r, i, d, w)),
      onCellContextmenu: s[6] || (s[6] = (r, i, d, w) => n("cell-contextmenu", r, i, d, w)),
      onRowClick: s[7] || (s[7] = (r, i, d) => n("row-click", r, i, d)),
      onRowDblclick: s[8] || (s[8] = (r, i, d) => n("row-dblclick", r, i, d)),
      onRowContextmenu: s[9] || (s[9] = (r, i, d) => n("row-contextmenu", r, i, d)),
      onHeaderClick: s[10] || (s[10] = (r, i) => n("header-click", r, i)),
      onHeaderContextmenu: s[11] || (s[11] = (r, i) => n("header-contextmenu", r, i)),
      onHeaderDragend: s[12] || (s[12] = (r, i, d, w) => n("header-dragend", r, i, d, w)),
      onSortChange: s[13] || (s[13] = (r) => n("sort-change", r)),
      onFilterChange: s[14] || (s[14] = (r) => n("filter-change", r)),
      onCurrentChange: s[15] || (s[15] = (r, i) => n("current-change", r, i)),
      onExpandChange: s[16] || (s[16] = (r, i) => n("expand-change", r, i))
    }, {
      default: Oe(() => [
        (g(!0), z(ce, null, de(l(L), (r) => (g(), A(l(me), {
          key: r.label + (r == null ? void 0 : r.prop),
          elem: r,
          context: Be
        }, null, 8, ["elem"]))), 128))
      ]),
      _: 1
    }, 8, ["data", "max-height", "stripe", "border", "size", "fit", "show-header", "highlight-current-row", "current-row-key", "row-class-name", "row-style", "cell-class-name", "cell-style", "header-row-class-name", "header-row-style", "header-cell-class-name", "header-cell-style", "row-key", "empty-text", "default-expand-all", "expand-row-keys", "default-sort", "tooltip-effect", "show-summary", "sum-text", "summary-method", "span-method", "select-on-indeterminate", "indent", "lazy", "load", "tree-props"]));
  }
}), ie = {
  add: { tag: v, icon: Qe, cls: "新增", type: "primary" },
  edit: { tag: v, icon: We, cls: "编辑", type: "primary" },
  view: { tag: v, icon: Ge, cls: "查看", type: "primary" },
  delete: { tag: v, icon: Pe, cls: "删除", type: "danger" },
  deletes: { tag: v, icon: Pe, cls: "批量删除" },
  import: { tag: v, icon: Te, cls: "导入" },
  upload: { tag: v, icon: Te, cls: "上传" },
  export: { tag: v, icon: He, cls: "导出" },
  download: { tag: v, icon: He, cls: "下载" },
  search: { tag: v, icon: Xe, cls: "搜索" },
  reset: { tag: v, icon: Ye, cls: "重置" }
}, at = { class: "eto--left" }, ot = { class: "eto--center" }, nt = { class: "eto--right" }, rt = {
  name: "ElsTableOld"
}, st = /* @__PURE__ */ Me({
  ...rt,
  props: {
    data: {},
    size: {},
    width: { default: "100%" },
    height: {},
    maxHeight: {},
    fit: { type: Boolean, default: !0 },
    stripe: { type: Boolean, default: !0 },
    border: { type: Boolean, default: !1 },
    showHeader: { type: Boolean, default: !0 },
    showSummary: { type: Boolean, default: !1 },
    sumText: {},
    summaryMethod: {},
    rowClassName: {},
    rowStyle: {},
    cellClassName: {},
    cellStyle: {},
    headerRowClassName: {},
    headerRowStyle: {},
    headerCellClassName: {},
    headerCellStyle: {},
    highlightCurrentRow: { type: Boolean, default: !1 },
    rowKey: { type: [String, Function], default: "id" },
    currentRowKey: {},
    emptyText: { default: "无数据" },
    expandRowKeys: {},
    defaultExpandAll: { type: Boolean, default: !1 },
    defaultSort: {},
    tooltipEffect: { default: "dark" },
    spanMethod: {},
    selectOnIndeterminate: { type: Boolean },
    indent: {},
    treeProps: {},
    lazy: { type: Boolean },
    load: {},
    style: {},
    className: {},
    column: { default: () => [] },
    autoLoad: { type: Boolean, default: !0 },
    showIndex: { type: Boolean, default: !0 },
    showSelect: { type: Boolean, default: !1 },
    selectProps: { default: () => ({}) },
    pagination: { type: [Boolean, Object], default: !0 },
    refresh: {},
    search: { type: [Boolean, Object], default: () => ({ type: "mini", enabled: !0, noLabel: !0 }) },
    operate: {},
    menu: {},
    showSwitch: { type: Boolean, default: !1 }
  },
  emits: ["operate-click", "select", "select-all", "select-change", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-click", "cell-dblclick", "cell-contextmenu", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "header-dragend", "sort-change", "filter-change", "current-change", "expand-change", "change-emit", "reset-click"],
  setup($, { expose: fe, emit: pe }) {
    const n = pe, ge = $, L = f(!0), he = $e(), {
      autoLoad: ye,
      showIndex: we,
      showSelect: ve,
      pagination: E,
      selectProps: Ne,
      menu: Z,
      refresh: M,
      search: k,
      operate: h,
      column: q,
      data: Ce = [],
      height: _,
      rowKey: ee,
      ...K
    } = { ...ge, ...he }, O = f(Ce), U = f([]), N = f(!1), te = f([]), P = f(/* @__PURE__ */ new Set()), x = D(() => {
      const a = U.value.length;
      return [O.value.length, a];
    }), ke = D(() => x.value[0] > 0 && x.value[1] > 0 && x.value[0] - x.value[1] > 0), xe = D(() => x.value[0] > 0 && x.value[0] - x.value[1] == 0), be = (a, e) => {
      e ?? !P.value.has(a) ? P.value.add(a) : P.value.delete(a);
    }, Se = (a) => {
      if (a.length == 0 && N.value) {
        N.value = !1;
        return;
      }
      U.value = a, te.value = a.map((e) => Ee(e, l(ee)) || ""), a.length == 0 && P.value.clear(), n("selection-change", a), N.value = !1;
    }, j = [];
    ve && j.push({
      type: "index",
      width: 55,
      setup: () => ({ selection: U, selectIds: te, indeterminateRows: P }),
      cls: [
        {
          tag: Ae,
          "v-slot:header": "{store}",
          ":modelValue": xe,
          ":indeterminate": ke,
          "@change": (a, e, { store: t }) => {
            t.toggleAllSelection();
          }
        },
        {
          tag: Ae,
          "v-slot": "scope",
          ":modelValue": "selection.includes(scope.row)",
          ":indeterminate": "indeterminateRows.has(scope.row)",
          "@change": (a, e, { scope: t }) => {
            t.store.toggleRowSelection(t.row, a), n("select-change", t.row);
          }
        }
      ]
    }), we && j.push({
      label: "序号",
      type: "index",
      width: 58,
      index: (a) => (p.value.currentPage - 1) * (p.value.pageSize ?? 10) + a + 1
    });
    const le = [];
    if (Z != null) {
      const a = Z.map((e) => {
        const t = typeof e == "string" ? Ee(ie, e) : e;
        return {
          tag: v,
          // text: true,
          link: !0,
          size: K.size ?? "default",
          ...t,
          "@click": (...o) => {
            var u;
            return ((u = t == null ? void 0 : t.handle) == null ? void 0 : u.call(t, ...o)) ?? n(
              "operate-click",
              typeof e == "string" ? e : e.handleName || e,
              ...o
            );
          }
        };
      });
      le.push({
        label: "操作",
        width: a.length * 66 + 32,
        minWidth: a.length * 66 + 32,
        cls: [
          {
            tag: "div",
            class: "els-table--col-menus",
            "slot-scope": "scope",
            cls: a
          }
        ]
      });
    }
    const Re = j.concat(
      q.map((a) => {
        const { dict: e, format: t, ...o } = a, u = a.prop;
        let c = t;
        return e && Array.isArray(l(e)) && (c = (I, F) => {
          const m = I[F], ze = l(e).filter((Fe) => Fe.value == m)[0] || {}, { label: Ve, value: ut, ...Ie } = ze;
          return { "v-text": Ve, ...Ie };
        }), c && typeof c == "function" ? {
          ...o,
          cls: [
            {
              tag: "div",
              "v-slot:default": "{ row }",
              setup: () => ({ format: c, name: u }),
              "v-bind": "format(row,name)"
            }
          ]
        } : a;
      }),
      le
    ), T = k !== void 0 && (typeof k == "boolean" ? k === !0 : k.enabled === !0), R = {
      enabled: T,
      type: "default",
      noLabel: !1,
      formConfig: {},
      ...k && typeof k != "boolean" ? k : {}
    }, J = R.type, C = f({}), y = D(() => {
      if (!T)
        return [];
      const a = K.size ?? "default";
      let e = [];
      return R.column == null ? e = q.filter((t) => t.search === !0 || t.search != null).map(({ prop: t, label: o, search: u = {} }) => ({
        prop: t,
        label: o,
        size: a,
        placeholder: o,
        ...typeof u == "boolean" ? {} : u,
        ...R.noLabel ? { label: "" } : {}
      })) : e = R.column, e.push({
        tag: "div",
        class: "search-button",
        cls: [
          {
            ...ie.search,
            type: "primary",
            plain: !0,
            size: a,
            "@click": () => S(1)
          },
          {
            ...ie.reset,
            size: a,
            "@click": (t) => {
              C.value = {}, n("reset-click", t), S(1);
            }
          }
        ]
      }), e;
    }), Be = h !== void 0, b = D(() => {
      var c, I, F;
      const a = K.size ?? "default", e = (m) => ({
        ...typeof m == "string" ? ie[m] : m,
        size: a,
        "@click": () => {
          n("operate-click", typeof m == "string" ? m : m.handleName || m);
        }
      });
      if (Array.isArray(h))
        return { left: h.map((ze) => e(ze)), center: void 0, right: void 0 };
      const t = ((c = h == null ? void 0 : h.left) == null ? void 0 : c.map((m) => e(m))) ?? [], o = ((I = h == null ? void 0 : h.center) == null ? void 0 : I.map((m) => e(m))) ?? [], u = ((F = h == null ? void 0 : h.right) == null ? void 0 : F.map((m) => e(m))) ?? [];
      return { left: t, center: o, right: u };
    }), Q = E !== !1, p = f({
      total: O.value.length ?? 0,
      currentPage: 1,
      pageSize: 10,
      layout: "total, sizes, prev, pager, next"
    });
    E && typeof E != "boolean" && (p.value = {
      ...l(p),
      ...l(E)
    });
    const V = (a) => {
      p.value.currentPage = a;
    }, ae = (a) => {
      p.value.pageSize = a;
    }, W = async (a) => {
      if (a != p.value.currentPage)
        try {
          N.value = !0, await S(a, p.value.pageSize, C.value), V(a);
        } catch (e) {
          console.error("pageNumChange", e);
        }
    }, G = async (a) => {
      if (a != p.value.pageSize)
        try {
          await S(1, a, C.value), ae(a), V(1);
        } catch (e) {
          console.error("pageSizeChange", e);
        }
    }, S = async (a = p.value.currentPage, e = p.value.pageSize, t = C.value) => {
      if (M == null)
        return Promise.resolve();
      try {
        let o;
        Q ? o = await M(t, a, e) : o = await M(t);
        const { data: u, total: c } = o;
        V(a), O.value = u, p.value.total = c ?? u.length;
      } catch (o) {
        console.error("表格数据刷新失败！"), console.error(o);
      }
      return Promise.resolve();
    }, oe = D(() => {
      const a = O.value;
      if (E === !1)
        return a;
      const e = p.value.pageSize ?? 10;
      if (a.length <= e)
        return a;
      const t = p.value.currentPage;
      return Ze(a, e)[t - 1];
    }), X = f();
    fe({
      refreshTable: S,
      pageNumChange: W,
      pageSizeChange: G,
      elsTableBaseRef: X,
      toggleIndeterminateRow: be
      // elTableRef: elsTableBaseRef.value?.elTableRef,
      // clearSelection: elsTableBaseRef.clearSelection,
      // toggleRowSelection: elsTableBaseRef.toggleRowSelection,
      // toggleAllSelection: elsTableBaseRef.toggleAllSelection,
      // toggleRowExpansion: elsTableBaseRef.toggleRowExpansion,
      // setCurrentRow: elsTableBaseRef.setCurrentRow,
      // clearSort: elsTableBaseRef.clearSort,
      // clearFilter: elsTableBaseRef.clearFilter,
      // doLayout: elsTableBaseRef.doLayout,
      // sort: elsTableBaseRef.sort,
    }), ye && M && S();
    const Y = f(), ne = f(), H = f(), s = f(), r = f(), i = f(_ ?? "100%"), d = () => {
      var a, e, t, o;
      if (_ == null && typeof l(i) != "number") {
        const u = ((a = Y.value) == null ? void 0 : a.offsetHeight) ?? 0, c = ((e = H.value) == null ? void 0 : e.offsetHeight) || 0, I = ((t = s.value) == null ? void 0 : t.offsetHeight) || 0, F = ((o = r.value) == null ? void 0 : o.offsetHeight) || 0, m = u - c - I - F;
        m > 0 && (i.value = m);
      }
    }, w = () => {
      L.value = !L.value, n("change-emit", L.value);
    };
    return Ke(() => {
      d();
    }), Ue(() => {
      d();
    }), (a, e) => (g(), z("div", {
      ref_key: "elstableRef",
      ref: Y,
      class: "els-table w-100%"
    }, [
      l(T) && l(J) === "default" ? (g(), z("div", {
        key: 0,
        ref_key: "searchRef",
        ref: H,
        class: "et--search"
      }, [
        re(l(Le), se({
          modelValue: C.value,
          "onUpdate:modelValue": e[0] || (e[0] = (t) => C.value = t),
          column: y.value,
          inline: "",
          "label-width": "50px"
        }, R.formConfig), null, 16, ["modelValue", "column"])
      ], 512)) : B("", !0),
      Be || l(T) && l(J) === "mini" ? (g(), z("div", {
        key: 1,
        ref_key: "operateRef",
        ref: s,
        class: "et--operate"
      }, [
        ue("div", at, [
          a.showSwitch ? (g(), A(l(qe), {
            key: 0,
            class: "icon-style"
          }, {
            default: Oe(() => [
              re(l(_e), {
                color: "#909399",
                onClick: w
              })
            ]),
            _: 1
          })) : B("", !0),
          b.value.left ? (g(!0), z(ce, { key: 1 }, de(b.value.left, (t, o) => (g(), A(l(me), {
            key: `left-${o}`,
            elem: t
          }, null, 8, ["elem"]))), 128)) : B("", !0)
        ]),
        ue("div", ot, [
          b.value.center ? (g(!0), z(ce, { key: 0 }, de(b.value.center, (t, o) => (g(), A(l(me), {
            key: `center-${o}`,
            elem: t
          }, null, 8, ["elem"]))), 128)) : B("", !0)
        ]),
        ue("div", nt, [
          b.value.right ? (g(!0), z(ce, { key: 0 }, de(b.value.right, (t, o) => (g(), A(l(me), {
            key: `right-${o}`,
            elem: t
          }, null, 8, ["elem"]))), 128)) : B("", !0),
          l(T) && l(J) === "mini" ? (g(), A(l(Le), se({
            key: 1,
            modelValue: C.value,
            "onUpdate:modelValue": e[1] || (e[1] = (t) => C.value = t),
            column: y.value
          }, R.formConfig, {
            class: "els-form--search",
            inline: ""
          }), null, 16, ["modelValue", "column"])) : B("", !0)
        ])
      ], 512)) : B("", !0),
      ue("div", {
        ref_key: "elTableContainerRef",
        ref: ne,
        class: "et--table w-100%"
      }, [
        re(lt, se({
          ref_key: "elsTableBaseRef",
          ref: X,
          class: "w-100%"
        }, K, {
          data: oe.value,
          column: l(Re),
          "max-height": i.value,
          "row-key": l(ee),
          onSelect: e[2] || (e[2] = (t, o) => n("select", t, o)),
          onSelectAll: e[3] || (e[3] = (t) => n("select-all", t)),
          onSelectionChange: Se,
          onCellMouseEnter: e[4] || (e[4] = (t, o, u, c) => n("cell-mouse-enter", t, o, u, c)),
          onCellMouseLeave: e[5] || (e[5] = (t, o, u, c) => n("cell-mouse-leave", t, o, u, c)),
          onCellClick: e[6] || (e[6] = (t, o, u, c) => n("cell-click", t, o, u, c)),
          onCellDblclick: e[7] || (e[7] = (t, o, u, c) => n("cell-dblclick", t, o, u, c)),
          onCellContextmenu: e[8] || (e[8] = (t, o, u, c) => n("cell-contextmenu", t, o, u, c)),
          onRowClick: e[9] || (e[9] = (t, o, u) => n("row-click", t, o, u)),
          onRowDblclick: e[10] || (e[10] = (t, o, u) => n("row-dblclick", t, o, u)),
          onRowContextmenu: e[11] || (e[11] = (t, o, u) => n("row-contextmenu", t, o, u)),
          onHeaderClick: e[12] || (e[12] = (t, o) => n("header-click", t, o)),
          onHeaderContextmenu: e[13] || (e[13] = (t, o) => n("header-contextmenu", t, o)),
          onHeaderDragend: e[14] || (e[14] = (t, o, u, c) => n("header-dragend", t, o, u, c)),
          onSortChange: e[15] || (e[15] = (t) => n("sort-change", t)),
          onFilterChange: e[16] || (e[16] = (t) => n("filter-change", t)),
          onCurrentChange: e[17] || (e[17] = (t, o) => n("current-change", t, o)),
          onExpandChange: e[18] || (e[18] = (t, o) => n("expand-change", t, o))
        }), null, 16, ["data", "column", "max-height", "row-key"])
      ], 512),
      Q ? (g(), z("div", {
        key: 2,
        ref_key: "paginationRef",
        ref: r,
        class: "et--pagination"
      }, [
        re(l(et), se(p.value, {
          onCurrentChange: W,
          onSizeChange: G
        }), null, 16)
      ], 512)) : B("", !0)
    ], 512));
  }
}), pt = {
  install: ($) => {
    $.component("els-table-old", st);
  }
};
export {
  st as ElsTableOld,
  pt as default
};