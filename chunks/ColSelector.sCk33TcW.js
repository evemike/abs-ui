import "../css/ColSelector-waOO6PW2.css";
import { defineComponent as M, toRefs as F, ref as m, onMounted as I, resolveComponent as J, openBlock as B, createElementBlock as R, createTextVNode as n, createVNode as u, unref as p, withCtx as s, createElementVNode as c, toDisplayString as h } from "vue";
import { f as _, a5 as K, b7 as T, g as x } from "./vendor.vR4RX31U.js";
import { _ as U } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const G = { class: "nifi-column" }, P = {
  class: "allocation_content",
  "h-360": ""
}, j = { class: "transfer_options" }, q = { class: "multi-ellipsis" }, z = { class: "allocation_footer" }, A = /* @__PURE__ */ M({
  __name: "index",
  props: {
    formdata: {},
    graphShadowCell: {},
    propInput: {},
    propOutput: {}
  },
  setup(o) {
    const g = o, { formdata: S, graphShadowCell: e, propOutput: C } = F(g), a = m(
      // get(formdata.value, props.propInput) === ""
      //   ? []
      //   : JSON.parse(get(formdata.value, props.propInput))
      []
    ), d = m(!1), N = () => {
      d.value = !0;
    }, O = {
      key: "name",
      label: "name"
    }, i = m([]), w = m([]), v = () => {
      d.value = !1;
    }, b = () => {
      let f = a.value.filter(
        (t) => i.value.includes(t.name)
      );
      e.value.graphShadow.set(
        e.value.cell,
        "My_col-selector-input",
        a.value
      ), e.value.graphShadow.set(
        e.value.cell,
        "My_col-selector-output",
        f
      ), v();
    }, D = () => {
      let f = e.value.graphShadow.get(
        e.value.cell.id
      ).inCells;
      for (let r of f) {
        let l = e.value.graphShadow.get(r);
        if (l) {
          let E = l.source.value, y = e.value.graphShadow.get(E), V = x(y.cell.data.component, C.value);
          if (V)
            a.value = JSON.parse(V);
          else {
            let k = y.cell.data.component.config.properties["output字段（自动填入）"];
            k && (a.value = JSON.parse(k));
          }
        }
      }
      let t = x(S.value, C.value);
      if (t) {
        let r = JSON.parse(t);
        i.value = r.map((l) => l.name);
      } else
        w.value = a.value.map(
          (r) => r.name
        );
      e.value.graphShadow.set(
        e.value.cell,
        "My_col-selector-input",
        a.value
      ), e.value.graphShadow.set(
        e.value.cell,
        "My_col-selector-output",
        t ? JSON.parse(t) : []
      );
    };
    return I(() => {
      D();
    }), (f, t) => {
      const r = J("el-tooltip");
      return B(), R("div", G, [
        n(" 选择输出列 "),
        u(p(_), {
          type: "primary",
          onClick: N,
          style: { "margin-left": "12px" }
        }, {
          default: s(() => [
            n(" 选择输出列 ")
          ]),
          _: 1
        }),
        u(p(K), {
          modelValue: d.value,
          "onUpdate:modelValue": t[1] || (t[1] = (l) => d.value = l),
          title: "选择输出列",
          "destroy-on-close": "",
          "w-960": "",
          "h-520": "",
          "before-close": v
        }, {
          default: s(() => [
            c("div", P, [
              u(p(T), {
                filterable: "",
                "filter-placeholder": "请输入",
                titles: ["已选字段", "已选字段"],
                props: O,
                modelValue: i.value,
                "onUpdate:modelValue": t[0] || (t[0] = (l) => i.value = l),
                data: a.value,
                "left-default-checked": w.value
              }, {
                default: s(({ option: l }) => [
                  c("div", j, [
                    u(r, null, {
                      content: s(() => [
                        n(h(l.name), 1)
                      ]),
                      default: s(() => [
                        c("div", q, h(l.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c("span", null, h(l.doc), 1)
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "data", "left-default-checked"])
            ]),
            c("div", z, [
              u(p(_), { onClick: v }, {
                default: s(() => [
                  n("取消")
                ]),
                _: 1
              }),
              u(p(_), {
                type: "primary",
                onClick: b
              }, {
                default: s(() => [
                  n("保存")
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
}), H = /* @__PURE__ */ U(A, [["__scopeId", "data-v-28229da5"]]), L = (o) => ({
  graphShadow: o.graphShadow,
  drawerRef: o.drawerRef,
  graphForm: o.graphForm,
  cell: o.cell
}), Z = () => ({ name: [
  "org.apache.nifi.column.processors.ColSelector_2_0"
], excludeKeys: ["col-selector-input", "output-param"], selfFormColumn: [
  {
    tag: H,
    propInput: "config.properties['col-selector-input']",
    propOutput: "config.properties['output-param']",
    ":formdata": "formData",
    setup({ params: e }) {
      return { graphShadowCell: L(e) };
    },
    ":graphShadowCell": "graphShadowCell"
  }
] });
export {
  Z as default
};
