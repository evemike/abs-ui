import "../css/ColSelector-BH2zo2HB.css";
import { defineComponent as E, toRefs as D, ref as y, onMounted as w, resolveComponent as B, openBlock as I, createElementBlock as J, createTextVNode as m, createVNode as p, unref as v, withCtx as n, createElementVNode as _, toDisplayString as N } from "vue";
import { B as K, C as O, ag as F, bc as M, ay as b, a as P } from "./vendor.Bh6KHC77.js";
import { _ as T } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const U = { class: "nifi-column" }, z = {
  class: "allocation_content",
  "h-360": ""
}, R = { class: "transfer_options" }, j = { class: "multi-ellipsis" }, q = { class: "allocation_footer" }, A = /* @__PURE__ */ E({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(i) {
    const V = i, { formdata: g, inputV: S, propInput: x, propOutput: C } = D(V), s = y(S.value), l = y(!1), c = () => {
      l.value = !0;
    }, r = {
      key: "name",
      label: "name"
    }, t = y([]), u = y([]), d = () => {
      l.value = !1;
    }, h = () => {
      f(), d();
    }, f = () => {
      let o = s.value.filter(
        (e) => t.value.includes(e.name)
      );
      b(
        g.value,
        x.value,
        s.value.length === 0 ? "" : JSON.stringify(s.value)
      ), b(
        g.value,
        C.value,
        o.length === 0 ? "" : JSON.stringify(o)
      );
    };
    return w(() => {
      let o = K(g.value, C.value);
      if (o) {
        let e = JSON.parse(o);
        t.value = e.map((k) => k.name);
      } else
        u.value = s.value.map(
          (e) => e.name
        );
      f();
    }), (o, e) => {
      const k = B("el-tooltip");
      return I(), J("div", U, [
        m(" 选择输出列 "),
        p(v(O), {
          type: "primary",
          onClick: c,
          style: { "margin-left": "12px" }
        }, {
          default: n(() => [
            m(" 选择输出列 ")
          ]),
          _: 1
        }),
        p(v(F), {
          modelValue: l.value,
          "onUpdate:modelValue": e[1] || (e[1] = (a) => l.value = a),
          title: "选择输出列",
          "destroy-on-close": "",
          "w-960": "",
          "h-520": "",
          "before-close": d
        }, {
          default: n(() => [
            _("div", z, [
              p(v(M), {
                filterable: "",
                "filter-placeholder": "请输入",
                titles: ["已选字段", "已选字段"],
                props: r,
                modelValue: t.value,
                "onUpdate:modelValue": e[0] || (e[0] = (a) => t.value = a),
                data: s.value,
                "left-default-checked": u.value
              }, {
                default: n(({ option: a }) => [
                  _("div", R, [
                    p(k, null, {
                      content: n(() => [
                        m(N(a.name), 1)
                      ]),
                      default: n(() => [
                        _("div", j, N(a.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    _("span", null, N(a.doc), 1)
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "data", "left-default-checked"])
            ]),
            _("div", q, [
              p(v(O), { onClick: d }, {
                default: n(() => [
                  m("取消")
                ]),
                _: 1
              }),
              p(v(O), {
                type: "primary",
                onClick: h
              }, {
                default: n(() => [
                  m("保存")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), G = /* @__PURE__ */ T(A, [["__scopeId", "data-v-0e458e53"]]), X = () => {
  let i = [];
  const V = ["output-param", "output字段（自动填入）"];
  return { name: ["org.apache.nifi.column.processors.ColSelector_2_0"], excludeKeys: ["col-selector-input", "output-param"], selfFormColumn: [
    {
      tag: G,
      propInput: "config.properties['col-selector-input']",
      propOutput: "config.properties['output-param']",
      ":formdata": "formData",
      setup() {
        return { inputV: i };
      },
      ":inputV": "inputV"
    }
  ], hooksOpen: (l, c) => {
    var h;
    i = [];
    let { id: r } = l, { source: t, shadow: u } = c.event, d = (h = u == null ? void 0 : u.cells.get(r)) == null ? void 0 : h.prevNodes;
    for (let f of d)
      if (t.get(f)) {
        let o = t.get(f).component.config.properties;
        for (let e of V)
          o.hasOwnProperty(e) && (i = o[e] === "" ? [] : JSON.parse(o[e]));
      }
  }, hooksSubmit: (l, c) => {
    var r, t;
    if (((t = (r = c.event.shadow) == null ? void 0 : r.cells.get(l.id)) == null ? void 0 : t.inCells.size) === 0)
      throw P.error("暂无上游算子，请进行连接"), new Error("暂无上游算子，请进行连接");
  } };
};
export {
  X as default
};
