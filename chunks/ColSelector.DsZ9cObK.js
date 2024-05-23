import "../css/ColSelector-BH2zo2HB.css";
import { defineComponent as E, toRefs as D, ref as V, onMounted as w, resolveComponent as B, openBlock as I, createElementBlock as J, createTextVNode as m, createVNode as p, unref as v, withCtx as n, createElementVNode as _, toDisplayString as x } from "vue";
import { A as K, B as N, af as F, bb as M, ax as b, a as P } from "./vendor.4pP_Prrf.js";
import { _ as T } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const U = { class: "nifi-column" }, z = {
  class: "allocation_content",
  "h-360": ""
}, A = { class: "transfer_options" }, R = { class: "multi-ellipsis" }, j = { class: "allocation_footer" }, q = /* @__PURE__ */ E({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(i) {
    const y = i, { formdata: h, inputV: O, propInput: S, propOutput: k } = D(y), s = V(O.value), l = V(!1), c = () => {
      l.value = !0;
    }, r = {
      key: "name",
      label: "name"
    }, t = V([]), u = V([]), d = () => {
      l.value = !1;
    }, g = () => {
      f(), d();
    }, f = () => {
      let o = s.value.filter(
        (e) => t.value.includes(e.name)
      );
      b(
        h.value,
        S.value,
        s.value.length === 0 ? "" : JSON.stringify(s.value)
      ), b(
        h.value,
        k.value,
        o.length === 0 ? "" : JSON.stringify(o)
      );
    };
    return w(() => {
      let o = K(h.value, k.value);
      if (o) {
        let e = JSON.parse(o);
        t.value = e.map((C) => C.name);
      } else
        u.value = s.value.map(
          (e) => e.name
        );
      f();
    }), (o, e) => {
      const C = B("el-tooltip");
      return I(), J("div", U, [
        m(" 选择输出列 "),
        p(v(N), {
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
                  _("div", A, [
                    p(C, null, {
                      content: n(() => [
                        m(x(a.name), 1)
                      ]),
                      default: n(() => [
                        _("div", R, x(a.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    _("span", null, x(a.doc), 1)
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "data", "left-default-checked"])
            ]),
            _("div", j, [
              p(v(N), { onClick: d }, {
                default: n(() => [
                  m("取消")
                ]),
                _: 1
              }),
              p(v(N), {
                type: "primary",
                onClick: g
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
}), G = /* @__PURE__ */ T(q, [["__scopeId", "data-v-0e458e53"]]), X = () => {
  let i = [];
  const y = ["output-param", "output字段（自动填入）"];
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
    var g;
    i = [];
    let { id: r } = l, { source: t, shadow: u } = c.event, d = (g = u == null ? void 0 : u.cells.get(r)) == null ? void 0 : g.prevNodes;
    for (let f of d)
      if (t.get(f)) {
        let o = t.get(f).component.config.properties;
        for (let e of y)
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
