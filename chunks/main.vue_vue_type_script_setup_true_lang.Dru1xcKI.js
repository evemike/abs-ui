import "../css/main-jBTW_Sba.css";
import { defineComponent as ne, toRefs as ae, ref as c, watch as Y, computed as ce, resolveComponent as u, openBlock as m, createElementBlock as V, createVNode as t, unref as g, isRef as re, withCtx as o, createElementVNode as s, createTextVNode as Z, pushScopeId as ye, popScopeId as ge, Fragment as le, renderList as oe, normalizeStyle as he, toDisplayString as q, createBlock as W, createCommentVNode as E } from "vue";
import { F as ue, p as ve, ap as ke, v as Ve, ao as Ce, a6 as Se } from "./vendor.CNZ6m-gA.js";
import { _ as fe } from "./_plugin-vue_export-helper.CHgC5LLL.js";
const $e = (n) => new Promise((p, d) => {
  const a = n.request.componentId;
  fetch("/nifi-api/processors/" + a + "/config/verification-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) }).then((e) => e.json()).then((e) => p(e)).catch((e) => d(e));
}), xe = (n) => new Promise((p, d) => {
  const a = n.request.componentId, e = n.request.requestId;
  fetch("/nifi-api/processors/" + a + "/config/verification-requests/" + e, { method: "GET", headers: { "Content-Type": "application/json" } }).then((i) => i.json()).then((i) => p(i)).catch((i) => d(i));
}), we = (n) => new Promise((p, d) => {
  const a = n.request.componentId, e = n.request.requestId;
  fetch("/nifi-api/controller-services/" + a + "/config/verification-requests/" + e, { method: "GET", headers: { "Content-Type": "application/json" } }).then((i) => i.json()).then((i) => p(i)).catch((i) => d(i));
}), De = (n, p) => new Promise((d, a) => {
  const e = n.value;
  fetch("/nifi-api/processors/" + e + "/descriptors?propertyName=" + p.propertyName + "&sensitive=" + p.sensitive, { method: "GET", headers: { "Content-Type": "application/json" } }).then((i) => i.json()).then((i) => d(i)).catch((i) => a(i));
}), me = (n) => new Promise((p, d) => {
  const a = n.component.id;
  fetch("/nifi-api/processors/" + a, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) }).then((e) => e.json()).then((e) => p(e)).catch((e) => d(e));
}), Te = (n) => new Promise((p) => {
  fetch(`/nifi-api/flow/process-groups/${n}/controller-services?uiOnly=true`).then((d) => d.json()).then((d) => {
    p(d);
  });
}), Ne = (n, p) => new Promise((d) => {
  const a = n.value;
  fetch("/nifi-api/controller-services/" + a + "/descriptors?propertyName=" + p.propertyName + "&sensitive=" + p.sensitive).then((e) => e.json()).then((e) => {
    d(e);
  });
}), At = (n, p) => new Promise((d) => {
  fetch(`/nifi-api/processors/${n}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p) }).then((a) => a.json()).then((a) => {
    d(a);
  });
}), Ie = (n) => new Promise((p, d) => {
  const a = n.request.componentId;
  fetch("/nifi-api/controller-services/" + a + "/config/verification-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) }).then((e) => e.json()).then((e) => p(e)).catch((e) => d(e));
}), Pe = (n, p) => new Promise((d, a) => {
  fetch("/nifi-api/controller-services/" + n, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p) }).then((e) => e.json()).then((e) => d(e)).catch((e) => a(e));
}), Ae = (n) => new Promise((p, d) => {
  fetch(`/nifi-api/controller-services/${n.id}?disconnectedNodeAcknowledged=${n.disconnectedNodeAcknowledged}&clientId=${n.clientId}&version=${n.version}`, { method: "Delete", headers: { "Content-Type": "application/json" } }).then((a) => a.json()).then((a) => p(a)).catch((a) => d(a));
}), je = (n, p) => new Promise((d, a) => {
  fetch(`/nifi-api/process-groups/${n}/controller-services`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p) }).then((e) => e.json()).then((e) => d(e)).catch((e) => a(e));
}), Ue = (n) => (ye("data-v-6ef1befd"), n = n(), ge(), n), Ee = /* @__PURE__ */ Ue(() => /* @__PURE__ */ s("span", null, "验证处理器配置", -1)), Oe = { style: { "margin-top": "16px" } }, qe = { class: "dialog-footer" }, Ge = /* @__PURE__ */ ne({
  __name: "flexContent",
  props: {
    title: {},
    tab: {},
    DialogVisible: { type: Boolean }
  },
  emits: ["currentStatus"],
  setup(n, { emit: p }) {
    const d = n, a = p, { title: e, DialogVisible: i } = ae(d), r = c(0);
    Y(
      i,
      () => {
        r.value = 0, i && r.value++;
      },
      { deep: !0 }
    ), Y(
      () => r.value,
      () => {
        r.value >= 100 ? a("currentStatus", "complete") : setTimeout(() => {
          r.value++;
        }, 20);
      },
      { deep: !0 }
    );
    const T = ce(() => r.value === 100 ? "success" : "");
    return (S, h) => {
      const I = u("el-progress"), P = u("el-button"), D = u("el-dialog");
      return m(), V("div", null, [
        t(D, {
          modelValue: g(i),
          "onUpdate:modelValue": h[1] || (h[1] = (C) => re(i) ? i.value = C : null),
          title: g(e),
          width: "30%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: o(() => [
            s("span", qe, [
              t(P, {
                onClick: h[0] || (h[0] = (C) => a("currentStatus", "stop")),
                type: "primary"
              }, {
                default: o(() => [
                  Z("停止")
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            Ee,
            s("div", Oe, [
              t(I, {
                percentage: r.value,
                status: T.value
              }, null, 8, ["percentage", "status"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
}), _e = /* @__PURE__ */ fe(Ge, [["__scopeId", "data-v-6ef1befd"]]), Be = { class: "dialog-footer" }, Fe = /* @__PURE__ */ ne({
  __name: "flexAdd",
  props: {
    title: {},
    id: {},
    tab: {},
    DialogVisible: { type: Boolean }
  },
  emits: ["tablePush", "currentStatus"],
  setup(n, { emit: p }) {
    const d = n, a = p, { id: e, title: i, tab: r, DialogVisible: T } = ae(d), S = c({}), h = c([
      {
        prop: "propertyName",
        label: "属性名称"
        // tip: "this is a test Input Demo",
      },
      {
        prop: "sensitive",
        label: "敏感值",
        tag: "el-radio-group",
        value: !1,
        cls: [
          {
            tag: "el-radio",
            label: !0,
            cls: "是",
            disabled: !0
          },
          {
            tag: "el-radio",
            label: !1,
            cls: "否",
            disabled: !0
          }
        ]
        // tip: "this is a test Input Demo",
      },
      {
        prop: "description",
        label: "描述",
        tag: "el-input",
        type: "textarea",
        rows: 4
        // tip: "this is a test Input Demo",
      }
    ]), I = async () => {
      const C = { ...S.value }, A = r ? await Ne(e, C) : await De(e, C);
      a("tablePush", { ...A, ...S.value }), a("currentStatus", "sure"), D();
    }, P = () => {
      a("currentStatus", "stop"), D();
    }, D = () => {
      S.value = {
        propertyName: "",
        sensitive: !1,
        description: ""
      };
    };
    return (C, A) => {
      const G = u("els-form"), L = u("el-button"), U = u("el-dialog");
      return m(), V("div", null, [
        t(U, {
          modelValue: g(T),
          "onUpdate:modelValue": A[1] || (A[1] = (B) => re(T) ? T.value = B : null),
          title: g(i),
          width: "30%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: o(() => [
            s("span", Be, [
              t(L, { onClick: P }, {
                default: o(() => [
                  Z("取消")
                ]),
                _: 1
              }),
              t(L, {
                onClick: I,
                type: "primary"
              }, {
                default: o(() => [
                  Z("确定")
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            t(G, {
              class: "p-r-15",
              modelValue: S.value,
              "onUpdate:modelValue": A[0] || (A[0] = (B) => S.value = B),
              column: h.value
            }, null, 8, ["modelValue", "column"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
}), be = /* @__PURE__ */ fe(Fe, [["__scopeId", "data-v-546246fc"]]), Le = { class: "flex flex-justify-between" }, Re = { class: "flex flex-col m-r-16px" }, Je = /* @__PURE__ */ s("span", null, "source", -1), ze = { class: "m-t-16px" }, Me = ["title", "onClick"], We = { "flex-1": "" }, Ke = { class: "flex flex-justify-between items-center w-90%" }, Ye = { class: "w-90%" }, Ze = { class: "w-90%" }, He = { class: "m-t-16px" }, Qe = { class: "none-name" }, Xe = { class: "inline-block m-l-30px node-package" }, et = { class: "node-description" }, tt = { class: "dialog-footer" }, lt = /* @__PURE__ */ ne({
  __name: "flexControllerAdd",
  props: {
    title: {},
    id: {},
    tab: {},
    DialogVisible: { type: Boolean },
    controllerType: {}
  },
  emits: ["controllAdd", "currentStatus"],
  setup(n, { emit: p }) {
    const d = n, a = p, { controllerType: e, title: i, DialogVisible: r } = ae(d), T = c(""), S = c(""), h = c([]), I = c({}), P = c(), D = e.value.controllerServiceTypes.length;
    h.value = e.value.controllerServiceTypes.map(
      (y) => (y.GroupType = y.type.split(".").pop(), y.version = y.bundle.version, y.group = y.bundle.group, y.GroupTags = y.tags.join(","), y)
    ), Y(S, (y) => {
      B("type", y);
    }), Y(T, (y) => {
      B("group", y);
    });
    const C = c([
      { key: "database", value: "database", isSelect: !1 },
      { key: "file", value: "file", isSelect: !1 },
      { key: "sql", value: "sql", isSelect: !1 }
    ]), A = [
      { prop: "GroupType", label: "类型" },
      { prop: "version", label: "版本" },
      { prop: "GroupTags", label: "标签" }
    ], G = () => {
      a("currentStatus", "stop");
    }, L = () => {
      a("controllAdd", P.value);
    }, U = (y) => {
      I.value = {
        name: y.GroupType + y.version,
        package: y.bundle.group + y.bundle.artifact,
        description: y.description
      }, P.value = y;
    }, B = (y, O, H = !1) => {
      if (!H)
        h.value = O ? h.value.filter((J) => J[y].includes(O)) : e.value.controllerServiceTypes;
      else {
        const J = C.value.filter((z) => z.isSelect);
        if (J.length > 0) {
          let z = [];
          J.forEach((X) => {
            z = z.concat(
              e.value.controllerServiceTypes.filter((M) => M[y].includes(X.key))
            );
          }), h.value = z;
        } else
          h.value = e.value.controllerServiceTypes;
      }
    };
    return (y, O) => {
      const H = u("el-option"), J = u("el-select"), z = u("el-input"), X = u("el-table-column"), M = u("el-table"), ee = u("el-button"), se = u("el-dialog");
      return m(), V("div", null, [
        t(se, {
          modelValue: g(r),
          "onUpdate:modelValue": O[2] || (O[2] = ($) => re(r) ? r.value = $ : null),
          title: g(i),
          width: "50%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: o(() => [
            s("span", tt, [
              t(ee, { onClick: G }, {
                default: o(() => [
                  Z("取消")
                ]),
                _: 1
              }),
              t(ee, {
                onClick: L,
                type: "primary"
              }, {
                default: o(() => [
                  Z("添加")
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            s("div", Le, [
              s("div", Re, [
                Je,
                t(J, {
                  modelValue: T.value,
                  "onUpdate:modelValue": O[0] || (O[0] = ($) => T.value = $),
                  class: "m-2",
                  placeholder: "Select",
                  style: { width: "240px" }
                }, {
                  default: o(() => [
                    t(H, {
                      label: "所有组",
                      value: ""
                    }),
                    t(H, {
                      label: "org.apache.nifi",
                      value: "org.apache.nifi"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                s("div", ze, [
                  (m(!0), V(le, null, oe(C.value, ($) => (m(), V("span", {
                    class: "p-8px max-w-90 text-center m-r-8px cursor-pointer bg-#f5f9fd",
                    "b-rd-4px": "",
                    title: $.key,
                    onClick: () => {
                      $.isSelect = !$.isSelect, B("GroupTags", $, !0);
                    },
                    style: he({
                      fontWeight: $.isSelect ? "600" : "400"
                    })
                  }, q($.key), 13, Me))), 256))
                ])
              ]),
              s("div", We, [
                s("div", Ke, [
                  s("div", null, "显示 " + q(g(D)) + " 条 共 " + q(g(D)) + " 条", 1),
                  s("div", null, [
                    t(z, {
                      modelValue: S.value,
                      "onUpdate:modelValue": O[1] || (O[1] = ($) => S.value = $),
                      placeholder: "过滤器"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                s("div", Ye, [
                  t(M, {
                    data: h.value,
                    stripe: "",
                    onRowClick: U,
                    style: { height: "400px", overflow: "scroll" }
                  }, {
                    default: o(() => [
                      (m(), V(le, null, oe(A, ($) => t(X, {
                        class: "overflow-hidden text-ellipsis cursor-pointer",
                        style: { "white-space": "nowrap" },
                        prop: $.prop,
                        label: $.label
                      }, null, 8, ["prop", "label"])), 64))
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                s("div", Ze, [
                  s("div", He, [
                    s("span", Qe, q(I.value.name), 1),
                    s("span", Xe, q(I.value.package), 1)
                  ]),
                  s("div", et, q(I.value.description), 1)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
}), ot = { style: { float: "right" } }, nt = { key: 0 }, at = {
  key: 0,
  class: "validate-result"
}, st = /* @__PURE__ */ s("div", { class: "m-t-16px" }, "验证结果", -1), it = { class: "validate-result" }, rt = { style: { display: "inline-flex" } }, ct = { style: { "margin-right": "12px" } }, ut = { class: "dialog-footer" }, pt = /* @__PURE__ */ ne({
  __name: "flexSetting",
  props: {
    node: {},
    DialogVisible: { type: Boolean },
    cotrollNode: {}
  },
  emits: ["currentStatus"],
  setup(n, { emit: p }) {
    const d = n, a = p, { node: e, DialogVisible: i, cotrollNode: r } = ae(d), T = c("0"), S = c([]), h = c(), I = c({}), P = c([]), D = c(""), C = c(!1), A = c(!1), G = c({}), L = c(), U = c([
      { prop: "displayName", label: "属性" },
      { prop: "defaultValue", label: "值" }
    ]), B = ce(() => {
      var b, k;
      return [
        {
          prop: "name",
          label: "名称",
          value: `${r.value.name}`
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: ["Id  ", `${r.value.id}`]
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: [
            "类型  ",
            `${r.value.name} ${r.value.component.bundle.version}`
          ]
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: [
            "打包  ",
            `${r.value.component.bundle.group} - ${r.value.component.bundle.artifact}`
          ]
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: [
            "控制器服务支持  ",
            `${r.value.component.bundle.group} - ${r.value.component.bundle.artifact}`
          ]
        },
        {
          prop: "bulletinLevel",
          tag: "el-select",
          label: "公告级别",
          value: `${r.value.component.bulletinLevel}`,
          cls: [
            { value: "DEBUG", label: "调试" },
            { value: "INFO", label: "信息" },
            { value: "WARN", label: "警告" },
            { value: "ERROR", label: "错误" },
            { value: "NONE", label: "无" }
          ]
        },
        {
          tag: "div",
          cls: [
            "引用组件    ",
            (b = r.value) != null && b.referencingComponents ? (k = r.value) == null ? void 0 : k.referencingComponents.join(",") : "没有引用组件"
          ]
        }
      ];
    });
    Y(
      e,
      async (b) => {
        b && (L.value = await Te(b.id));
      },
      { deep: !0, immediate: !0 }
    ), Y(r, () => {
      var x;
      D.value = h.value = "控制器服务配置 | " + (r == null ? void 0 : r.value.name) + " " + ((x = r == null ? void 0 : r.value.component) == null ? void 0 : x.bundle.version);
      const b = L.value.controllerServices.filter(
        (l) => l.id == r.value.id
      );
      console.log(b, "resFilter");
      const { descriptors: k } = b.length > 0 ? b[0].component : {};
      y(k);
    });
    const y = (b) => {
      const k = Object.values(b);
      P.value = k || [].map((x) => ({
        displayName: x.displayName,
        defaultValue: x != null && x.defaultValue ? x == null ? void 0 : x.defaultValue : "未设置值",
        sensitive: x.sensitive,
        isOperate: !1
      }));
    }, O = () => {
      a("currentStatus", "stop");
    }, H = () => {
      A.value = !0;
    }, J = () => {
      C.value = !0;
    }, z = async () => {
      const { id: b, component: k, revision: x } = e.value;
      k.properties = { ...k.properties, ...g(G) }, await Pe(b, {
        component: k,
        disconnectedNodeAcknowledged: !1,
        revision: x
      }) && a("currentStatus", "complete");
    }, X = async () => {
      e.value.id;
      const b = {
        request: { attributes: {}, componentId: e.value.id, properties: {} }
      }, x = {
        request: (await Ie(b)).request
      }, { request: l } = await we(x);
      S.value = l.results;
    }, M = (b, k, x, l) => {
      console.log(b, k, x, l, "cellClick");
    }, ee = (b) => {
      switch (b) {
        case "complete":
          A.value = !1, X();
          break;
        case "stop":
          A.value = !1, C.value = !1;
          break;
        case "sure":
          C.value = !1;
          break;
      }
    }, se = (b) => {
      G.value = {
        [b.propertyDescriptor.displayName]: b.description
      }, P.value.push({
        displayName: b.propertyDescriptor.name,
        defaultValue: b.description,
        sensitive: b.propertyDescriptor.sensitive,
        isOperate: !0
      });
    }, $ = (b, k, x) => {
      delete P.value[k];
    };
    return (b, k) => {
      var ie;
      const x = u("els-form"), l = u("el-tab-pane"), f = u("el-button"), _ = u("el-tooltip"), N = u("el-table-column"), j = u("DeleteFilled"), R = u("el-icon"), te = u("el-table"), F = u("CloseBold"), K = u("el-input"), pe = u("el-tabs"), de = u("el-dialog");
      return m(), V("div", null, [
        t(de, {
          modelValue: g(i),
          "onUpdate:modelValue": k[3] || (k[3] = (w) => re(i) ? i.value = w : null),
          title: h.value,
          class: "demo-tabs",
          type: "card",
          width: "50%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: o(() => [
            s("span", ut, [
              t(f, { onClick: O }, {
                default: o(() => [
                  Z("取消")
                ]),
                _: 1
              }),
              t(f, {
                onClick: z,
                type: "primary"
              }, {
                default: o(() => [
                  Z("应用")
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            s("div", null, [
              t(pe, {
                modelValue: T.value,
                "onUpdate:modelValue": k[2] || (k[2] = (w) => T.value = w),
                class: "demo-tabs"
              }, {
                default: o(() => [
                  t(l, {
                    label: "设置",
                    name: "0"
                  }, {
                    default: o(() => [
                      t(x, {
                        modelValue: I.value,
                        "onUpdate:modelValue": k[0] || (k[0] = (w) => I.value = w),
                        column: B.value
                      }, null, 8, ["modelValue", "column"])
                    ]),
                    _: 1
                  }),
                  t(l, {
                    label: "属性",
                    name: "1"
                  }, {
                    default: o(() => [
                      s("div", null, [
                        s("div", null, [
                          s("div", ot, [
                            t(_, {
                              class: "box-item",
                              effect: "light",
                              content: "验证",
                              placement: "top"
                            }, {
                              default: o(() => [
                                t(f, {
                                  size: "small",
                                  icon: g(ue),
                                  onClick: H
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }),
                            t(_, {
                              class: "box-item",
                              effect: "light",
                              content: "增加",
                              placement: "top"
                            }, {
                              default: o(() => [
                                t(f, {
                                  type: "primary",
                                  size: "small",
                                  icon: g(ve),
                                  onClick: J
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        t(te, {
                          data: P.value,
                          stripe: "",
                          style: { width: "100%" },
                          onCellClick: M
                        }, {
                          default: o(() => [
                            (m(!0), V(le, null, oe(U.value, (w) => (m(), W(N, {
                              prop: w.prop,
                              label: w.label
                            }, null, 8, ["prop", "label"]))), 256)),
                            t(N, { label: "" }, {
                              default: o((w) => [
                                w.row.isOperate ? (m(), V("div", nt, [
                                  t(R, {
                                    style: { "margin-left": "12px" },
                                    onClick: (v) => $("del", w.$index)
                                  }, {
                                    default: o(() => [
                                      t(j)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])) : E("", !0)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["data"]),
                        S.value.length > 0 ? (m(), V("div", at, [
                          st,
                          s("div", it, [
                            (m(!0), V(le, null, oe(S.value, (w) => (m(), V("div", rt, [
                              s("div", ct, [
                                w.outcome == "FAILED" ? (m(), W(R, {
                                  key: 0,
                                  color: "#e21a1a"
                                }, {
                                  default: o(() => [
                                    t(F)
                                  ]),
                                  _: 1
                                })) : E("", !0),
                                w.outcome == "SUCCESSFUL" ? (m(), W(R, {
                                  key: 1,
                                  color: "#4caf50"
                                }, {
                                  default: o(() => [
                                    t(g(ue))
                                  ]),
                                  _: 1
                                })) : E("", !0),
                                w.outcome == "SKIPPED" ? (m(), W(R, {
                                  key: 2,
                                  color: "#ffc83d"
                                }, {
                                  default: o(() => [
                                    t(F)
                                  ]),
                                  _: 1
                                })) : E("", !0)
                              ]),
                              s("div", null, [
                                s("div", null, q(w.verificationStepName), 1),
                                s("div", null, q(w.explanation), 1)
                              ])
                            ]))), 256))
                          ])
                        ])) : E("", !0)
                      ])
                    ]),
                    _: 1
                  }),
                  t(l, {
                    label: "注释",
                    name: "2"
                  }, {
                    default: o(() => [
                      t(K, {
                        type: "textarea",
                        rows: "14",
                        modelValue: g(e).component.comments,
                        "onUpdate:modelValue": k[1] || (k[1] = (w) => g(e).component.comments = w)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        t(_e, {
          title: "验证结果",
          DialogVisible: A.value,
          onCurrentStatus: ee
        }, null, 8, ["DialogVisible"]),
        t(be, {
          title: "添加属性",
          DialogVisible: C.value,
          onCurrentStatus: ee,
          onTablePush: se,
          id: ((ie = g(e)) == null ? void 0 : ie.id) || "",
          tab: "Group"
        }, null, 8, ["DialogVisible", "id"])
      ]);
    };
  }
}), dt = { class: "dialog-footer" }, mt = /* @__PURE__ */ ne({
  __name: "flexAble",
  props: {
    title: {},
    DialogAbleVisible: { type: Boolean },
    ableType: {},
    node: {}
  },
  emits: ["currentStatus"],
  setup(n, { emit: p }) {
    const d = p, a = n, { ableType: e, DialogAbleVisible: i, node: r } = ae(a), T = c("取消"), S = c("Disable"), h = c({}), I = c([
      {
        prop: "name",
        label: "服务",
        disabled: !0
      },
      { tag: "p", cls: [""] },
      {
        prop: "range",
        label: "范围",
        tag: "el-select",
        value: "Service only",
        cls: [
          { value: "Service only", label: "Service only" },
          {
            value: "Service and referencing components",
            label: "Service and referencing components"
          }
        ]
        // tip: "this is a test Input Demo",
      },
      {
        prop: "referencingComponents",
        label: "引用组件",
        tip: "其他组件引用了该控制服务",
        disabled: !0
      }
    ]);
    Y(r, (D) => {
      g(D) && (h.value = {
        name: D.name,
        referencingComponents: D.referencingComponents,
        range: D.range
      });
    }), Y(e, (D) => {
      S.value = D == "disabled" ? "Disable" : "Enabled";
    });
    const P = () => {
    };
    return (D, C) => {
      const A = u("els-form"), G = u("el-button"), L = u("el-dialog");
      return m(), V("div", null, [
        t(L, {
          modelValue: g(i),
          "onUpdate:modelValue": C[2] || (C[2] = (U) => re(i) ? i.value = U : null),
          title: "控制服务",
          width: "30%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: o(() => [
            s("span", dt, [
              t(G, {
                onClick: C[1] || (C[1] = () => d("currentStatus", "stop"))
              }, {
                default: o(() => [
                  Z(q(T.value), 1)
                ]),
                _: 1
              }),
              t(G, {
                onClick: P,
                type: "primary"
              }, {
                default: o(() => [
                  Z(q(S.value), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: o(() => [
            t(A, {
              class: "p-r-15",
              modelValue: h.value,
              "onUpdate:modelValue": C[0] || (C[0] = (U) => h.value = U),
              column: I.value
            }, null, 8, ["modelValue", "column"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), vt = { class: "DialogTable" }, ft = {
  key: 0,
  style: { display: "flex" }
}, _t = { key: 0 }, bt = /* @__PURE__ */ s("p", null, "自动终止/重试关系", -1), yt = { key: 1 }, gt = { key: 1 }, ht = { style: { float: "right" } }, kt = { class: "main-table" }, Vt = { key: 0 }, Ct = { key: 1 }, St = {
  key: 0,
  class: "validate-result"
}, $t = /* @__PURE__ */ s("div", null, "验证结果", -1), xt = { style: { display: "inline-flex" } }, wt = { style: { "margin-right": "12px" } }, Dt = {
  name: "DialogTable"
}, jt = /* @__PURE__ */ ne({
  ...Dt,
  props: {
    name: {},
    nodeTable: {},
    application: {},
    node: {},
    controllerType: {}
  },
  setup(n) {
    const p = n, { controllerType: d, application: a, node: e } = ae(p), i = c([]), r = c(!1), T = c(!1), S = c(!1), h = c(!1), I = c(!1), P = c(!1), D = c("disabled"), C = c(), A = c(), G = c(), L = c({}), U = c([]), B = c([]);
    Y(
      e,
      async (l) => {
        var f;
        if (l) {
          const _ = ((f = l == null ? void 0 : l.component) == null ? void 0 : f.type) || null;
          if (C.value = l, _) {
            B.value = [
              { prop: "displayName", label: "属性" },
              { prop: "defaultValue", label: "值" }
            ];
            const N = await me(l), { descriptors: j } = N == null ? void 0 : N.component.config;
            J(j);
          } else
            B.value = [
              { prop: "name", label: "名称" },
              { prop: "nodeType", label: "类型" },
              { prop: "package", label: "组件包" },
              { prop: "validationStatus", label: "状态" },
              { prop: "range", label: "范围" }
            ], U.value = l.controllerServices.map((N) => {
              const j = N.component;
              return {
                range: "NiFi Flow",
                name: j.name,
                validationStatus: j.state,
                nodeType: `${j.name} ${j.bundle.version}`,
                package: `${j.bundle.group}-${j.bundle.artifact}`,
                ...N,
                isGroup: !0
              };
            });
        }
      },
      { deep: !0, immediate: !0 }
    );
    const y = ce(() => {
      const { config: l } = e.value.component;
      return [
        {
          prop: "retryCount",
          label: "重试尝试次数",
          value: `${l.retryCount}`
          // tip: "this is a test Input Demo",
        },
        {
          prop: "backoffMechanism",
          label: "重试退避策略",
          tag: "el-radio-group",
          value: `${l.backoffMechanism}`,
          cls: [
            {
              tag: "el-radio",
              label: "PENALIZE_FLOWFILE",
              cls: "惩罚"
            },
            {
              tag: "el-radio",
              label: "YIELD_PROCESSOR",
              cls: "暂停执行"
            }
          ]
        },
        {
          prop: "maxBackoffPeriod",
          label: "重试最大退避时间",
          value: `${l.maxBackoffPeriod}`
          // tip: "this is a test Input Demo",
        }
      ];
    }), O = ce(() => {
      var l, f;
      return (l = e.value) != null && l.component ? (f = e.value) == null ? void 0 : f.component.relationships : [];
    }), H = () => {
      var _;
      const f = ((_ = e.value) == null ? void 0 : _.component.relationships).filter((N) => N.retry);
      r.value = f.length > 0;
    }, J = (l) => {
      const f = Object.values(l);
      U.value = f.map((_) => ({
        displayName: _.displayName,
        defaultValue: _.defaultValue || "未设置值",
        sensitive: _.sensitive,
        isOperate: !1
      }));
    }, z = async (l) => {
      const f = await me(l), { descriptors: _ } = f == null ? void 0 : f.component.config;
      J(_);
    }, X = () => {
      T.value = !0;
    }, M = (l) => {
      switch (l) {
        case "complete":
          T.value = !1, S.value = !1, I.value = !1, h.value = !1, ee();
          break;
        case "stop":
          P.value = !1, T.value = !1, S.value = !1, I.value = !1, h.value = !1;
          break;
        case "sure":
          S.value = !1, z(e);
          break;
      }
    }, ee = async () => {
      const { id: l } = e.value.component, N = {
        request: (await $e({
          request: { attributes: {}, componentId: l, properties: {} }
        })).request
      }, { request: j } = await xe(N);
      i.value = j.results;
    }, se = () => {
      var f, _;
      (((_ = (f = e.value) == null ? void 0 : f.component) == null ? void 0 : _.type) || void 0) != null ? S.value = !0 : h.value = !0;
    }, $ = (l, f, _) => {
      const N = _.row;
      switch (l) {
        case "setting":
          I.value = !0, A.value = N;
          break;
        case "del":
          Ce.confirm(`是否继续删除该条数据${_.row.name}`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            delete U.value[f], b(_.row), Se({
              type: "success",
              message: "删除成功"
            });
          }).catch(() => {
          });
          break;
        case "disabled":
          P.value = !0, D.value = "disabled", G.value = _.row;
          break;
        case "enabled":
          P.value = !0, D.value = "enabled", G.value = _.row;
          break;
      }
    }, b = (l) => {
      if ((l == null ? void 0 : l.isGroup) || !1) {
        const _ = {
          ...l.revision,
          disconnectedNodeAcknowledged: !1,
          id: l.id
        };
        Ae(_);
      }
    }, k = (l) => {
      U.value.push({
        name: l.propertyDescriptor.name,
        description: l.propertyDescriptor.description,
        sensitive: l.propertyDescriptor.sensitive,
        isOperate: !0
      });
    }, x = async (l) => {
      h.value = !1;
      const { revision: f, id: _ } = e.value, { bundle: N, type: j } = l, R = {
        disconnectedNodeAcknowledged: !1,
        component: { ...N, type: j },
        revision: { clientId: f.clientId, version: 0 }
      }, te = await je(_, R), F = te.component;
      te && U.value.push({
        range: "NiFi Flow",
        name: F.name,
        validationStatus: F.validationStatus,
        nodeType: `${F.name} ${F.bundle.version}`,
        package: `${F.bundle.group}-${F.bundle.artifact}`,
        ...F,
        isGroup: !0
      });
    };
    return (l, f) => {
      var w;
      const _ = u("el-checkbox"), N = u("els-form"), j = u("el-button"), R = u("el-tooltip"), te = u("el-table-column"), F = u("DeleteFilled"), K = u("el-icon"), pe = u("Setting"), de = u("el-table"), ie = u("CloseBold");
      return m(), V("div", vt, [
        g(a) == "relation" ? (m(), V("div", ft, [
          O.value.length > 0 ? (m(), V("div", _t, [
            bt,
            (m(!0), V(le, null, oe(O.value, (v) => (m(), V("div", null, [
              s("div", null, q(v.name), 1),
              s("div", null, [
                t(_, {
                  modelValue: v.autoTerminate,
                  "onUpdate:modelValue": (Q) => v.autoTerminate = Q,
                  label: "terminate"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                t(_, {
                  modelValue: v.retry,
                  "onUpdate:modelValue": (Q) => v.retry = Q,
                  label: "retry",
                  onClick: H
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              s("p", null, q(v.description), 1)
            ]))), 256))
          ])) : E("", !0),
          r.value ? (m(), V("div", yt, [
            t(N, {
              class: "p-r-15",
              modelValue: L.value,
              "onUpdate:modelValue": f[0] || (f[0] = (v) => L.value = v),
              column: y.value
            }, null, 8, ["modelValue", "column"])
          ])) : E("", !0)
        ])) : (m(), V("div", gt, [
          s("div", ht, [
            t(R, {
              class: "box-item",
              effect: "light",
              content: "验证",
              placement: "top"
            }, {
              default: o(() => [
                g(a) == "normal" ? (m(), W(j, {
                  key: 0,
                  type: "plain",
                  size: "small",
                  icon: g(ue),
                  onClick: X
                }, null, 8, ["icon"])) : E("", !0)
              ]),
              _: 1
            }),
            t(R, {
              class: "box-item",
              effect: "light",
              content: "增加",
              placement: "top"
            }, {
              default: o(() => [
                t(j, {
                  type: "primary",
                  size: "small",
                  icon: g(ve),
                  onClick: se
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          s("div", kt, [
            t(de, {
              data: U.value,
              stripe: "",
              style: { width: "100%" }
            }, {
              default: o(() => [
                (m(!0), V(le, null, oe(B.value, (v) => (m(), W(te, {
                  prop: v.prop,
                  label: v.label
                }, null, 8, ["prop", "label"]))), 256)),
                t(te, { label: "操作" }, {
                  default: o((v) => [
                    v.row.isOperate ? (m(), V("div", Vt, [
                      t(K, {
                        onClick: (Q) => $("del", v.$index, v)
                      }, {
                        default: o(() => [
                          t(F)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : E("", !0),
                    v.row.isGroup ? (m(), V("div", Ct, [
                      t(R, {
                        class: "box-item",
                        effect: "dark",
                        content: "配置",
                        placement: "top"
                      }, {
                        default: o(() => [
                          t(K, {
                            onClick: (Q) => $("setting", v.$index, v)
                          }, {
                            default: o(() => [
                              t(pe)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      v.row.validationStatus == "ENABLED" ? (m(), W(R, {
                        key: 0,
                        class: "box-item",
                        effect: "dark",
                        content: "Disabled",
                        placement: "top"
                      }, {
                        default: o(() => [
                          t(K, {
                            onClick: (Q) => $("disabled", v.$index, v)
                          }, {
                            default: o(() => [
                              t(g(ke))
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)) : E("", !0),
                      v.row.validationStatus == "DISABLED" ? (m(), W(R, {
                        key: 1,
                        class: "box-item",
                        effect: "dark",
                        content: "enabled",
                        placement: "top"
                      }, {
                        default: o(() => [
                          t(K, {
                            onClick: (Q) => $("enabled", v.$index, v)
                          }, {
                            default: o(() => [
                              t(g(Ve))
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)) : E("", !0),
                      t(K, {
                        style: { "margin-left": "12px" },
                        onClick: (Q) => $("del", v.$index, v)
                      }, {
                        default: o(() => [
                          t(F)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : E("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"]),
            i.value.length > 0 ? (m(), V("div", St, [
              $t,
              s("div", null, [
                (m(!0), V(le, null, oe(i.value, (v) => (m(), V("div", xt, [
                  s("div", wt, [
                    v.outcome == "FAILED" ? (m(), W(K, {
                      key: 0,
                      color: "#e21a1a"
                    }, {
                      default: o(() => [
                        t(ie)
                      ]),
                      _: 1
                    })) : E("", !0),
                    v.outcome == "SUCCESSFUL" ? (m(), W(K, {
                      key: 1,
                      color: "#4caf50"
                    }, {
                      default: o(() => [
                        t(g(ue))
                      ]),
                      _: 1
                    })) : E("", !0),
                    v.outcome == "SKIPPED" ? (m(), W(K, {
                      key: 2,
                      color: "#ffc83d"
                    }, {
                      default: o(() => [
                        t(ie)
                      ]),
                      _: 1
                    })) : E("", !0)
                  ]),
                  s("div", null, [
                    s("div", null, q(v.verificationStepName), 1),
                    s("div", null, q(v.explanation), 1)
                  ])
                ]))), 256))
              ])
            ])) : E("", !0)
          ])
        ])),
        t(_e, {
          title: "验证结果",
          DialogVisible: T.value,
          onCurrentStatus: M
        }, null, 8, ["DialogVisible"]),
        t(be, {
          title: "添加属性",
          DialogVisible: S.value,
          onCurrentStatus: M,
          onTablePush: k,
          id: ((w = g(e)) == null ? void 0 : w.id) || ""
        }, null, 8, ["DialogVisible", "id"]),
        t(lt, {
          title: "添加控制器服务",
          DialogVisible: h.value,
          controllerType: g(d),
          onCurrentStatus: M,
          onControllAdd: x
        }, null, 8, ["DialogVisible", "controllerType"]),
        t(pt, {
          DialogVisible: I.value,
          onCurrentStatus: M,
          node: C.value,
          cotrollNode: A.value
        }, null, 8, ["DialogVisible", "node", "cotrollNode"]),
        t(mt, {
          DialogAbleVisible: P.value,
          ableType: D.value,
          node: G.value,
          onCurrentStatus: M
        }, null, 8, ["DialogAbleVisible", "ableType", "node"])
      ]);
    };
  }
});
export {
  jt as _,
  At as a
};
