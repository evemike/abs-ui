import "../css/ColSelector-BH2zo2HB.css";
import { defineComponent as D, toRefs as E, ref as V, onMounted as I, resolveComponent as J, openBlock as K, createElementBlock as w, createTextVNode as m, createVNode as p, unref as v, withCtx as s, createElementVNode as _, toDisplayString as N } from "vue";
import { g as B, f as O, a5 as F, b9 as M, as as b, a as P } from "./vendor.DW1gWLiY.js";
import { _ as T } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const U = { class: "nifi-column" }, z = {
  class: "allocation_content",
  "h-360": ""
}, R = { class: "transfer_options" }, j = { class: "multi-ellipsis" }, q = { class: "allocation_footer" }, A = /* @__PURE__ */ D({
  __name: "index",
  props: {
    formdata: {},
    propInput: {},
    propOutput: {},
    inputV: {}
  },
  setup(i) {
    const y = i, { formdata: g, inputV: S, propInput: x, propOutput: k } = E(y), n = V(S.value), l = V(!1), c = () => {
      l.value = !0;
    }, u = {
      key: "name",
      label: "name"
    }, t = V([]), r = V([]), d = () => {
      l.value = !1;
    }, h = () => {
      f(), d();
    }, f = () => {
      let o = n.value.filter(
        (e) => t.value.includes(e.name)
      );
      b(
        g.value,
        x.value,
        n.value.length === 0 ? "" : JSON.stringify(n.value)
      ), b(
        g.value,
        k.value,
        o.length === 0 ? "" : JSON.stringify(o)
      );
    };
    return I(() => {
      let o = B(g.value, k.value);
      if (o) {
        let e = JSON.parse(o);
        t.value = e.map((C) => C.name);
      } else
        r.value = n.value.map(
          (e) => e.name
        );
      f();
    }), (o, e) => {
      const C = J("el-tooltip");
      return K(), w("div", U, [
        m(" 选择输出列 "),
        p(v(O), {
          type: "primary",
          onClick: c,
          style: { "margin-left": "12px" }
        }, {
          default: s(() => [
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
          default: s(() => [
            _("div", z, [
              p(v(M), {
                filterable: "",
                "filter-placeholder": "请输入",
                titles: ["已选字段", "已选字段"],
                props: u,
                modelValue: t.value,
                "onUpdate:modelValue": e[0] || (e[0] = (a) => t.value = a),
                data: n.value,
                "left-default-checked": r.value
              }, {
                default: s(({ option: a }) => [
                  _("div", R, [
                    p(C, null, {
                      content: s(() => [
                        m(N(a.name), 1)
                      ]),
                      default: s(() => [
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
                default: s(() => [
                  m("取消")
                ]),
                _: 1
              }),
              p(v(O), {
                type: "primary",
                onClick: h
              }, {
                default: s(() => [
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
    var h;
    i = [];
    let { id: u } = l, { source: t, shadow: r } = c.event, d = (h = r == null ? void 0 : r.cells.get(u)) == null ? void 0 : h.prevNodes;
    for (let f of d)
      if (t.get(f)) {
        let o = t.get(f).component.config.properties;
        for (let e of y)
          o.hasOwnProperty(e) && (i = o[e] === "" ? [] : JSON.parse(o[e]));
      }
  }, hooksSubmit: (l, c) => {
    var u, t;
    if (((t = (u = c.event.shadow) == null ? void 0 : u.cells.get(l.id)) == null ? void 0 : t.inCells.size) === 0)
      return P.error("暂无上游算子，请进行连接"), !1;
  } };
};
export {
  X as default
};
