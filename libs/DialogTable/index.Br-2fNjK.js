import { defineComponent as ae, toRefs as ne, ref as n, watch as Z, computed as ce, resolveComponent as s, openBlock as i, createElementBlock as b, createVNode as e, unref as v, isRef as ue, withCtx as t, createElementVNode as o, createTextVNode as H, pushScopeId as ge, popScopeId as ye, Fragment as te, renderList as oe, normalizeStyle as ke, toDisplayString as G, createBlock as K, createCommentVNode as U } from "vue";
import { s as re, p as ve, h as Ve, v as he, E as Ce, a as Se } from "../../chunks/vendor.CuV1wQwX.js";
import { a as xe, b as $e, c as De, d as we, e as Te, f as Ae, g as me, h as Ne, i as Ie, j as Ee, k as Ue } from "../../chunks/flexAdd.vue_vue_type_style_index_0_scoped_546246fc_lang.D62XS5AP.js";
import { _ as _e } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
const Be = (A) => (ge("data-v-6ef1befd"), A = A(), ye(), A), Ge = /* @__PURE__ */ Be(() => /* @__PURE__ */ o("span", null, "验证处理器配置", -1)), Fe = { style: { "margin-top": "16px" } }, Pe = { class: "dialog-footer" }, Oe = /* @__PURE__ */ ae({
  __name: "flexContent",
  props: {
    title: {},
    tab: {},
    DialogVisible: { type: Boolean }
  },
  emits: ["currentStatus"],
  setup(A, { emit: q }) {
    const j = A, N = q, { title: c, DialogVisible: C } = ne(j), a = n(0);
    Z(
      C,
      () => {
        a.value = 0, C && a.value++;
      },
      { deep: !0 }
    ), Z(
      () => a.value,
      () => {
        a.value >= 100 ? N("currentStatus", "complete") : setTimeout(() => {
          a.value++;
        }, 20);
      },
      { deep: !0 }
    );
    const x = ce(() => a.value === 100 ? "success" : "");
    return (y, _) => {
      const D = s("el-progress"), w = s("el-button"), S = s("el-dialog");
      return i(), b("div", null, [
        e(S, {
          modelValue: v(C),
          "onUpdate:modelValue": _[1] || (_[1] = (g) => ue(C) ? C.value = g : null),
          title: v(c),
          width: "30%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: t(() => [
            o("span", Pe, [
              e(w, {
                onClick: _[0] || (_[0] = (g) => N("currentStatus", "stop")),
                type: "primary"
              }, {
                default: t(() => [
                  H("停止")
                ]),
                _: 1
              })
            ])
          ]),
          default: t(() => [
            Ge,
            o("div", Fe, [
              e(D, {
                percentage: a.value,
                status: x.value
              }, null, 8, ["percentage", "status"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
}), fe = /* @__PURE__ */ _e(Oe, [["__scopeId", "data-v-6ef1befd"]]), Le = { class: "dialog-footer" }, Re = /* @__PURE__ */ ae({
  __name: "flexAdd",
  props: {
    title: {},
    id: {},
    tab: {},
    DialogVisible: { type: Boolean }
  },
  emits: ["tablePush", "currentStatus"],
  setup(A, { emit: q }) {
    const j = A, N = q, { id: c, title: C, tab: a, DialogVisible: x } = ne(j), y = n({}), _ = n([
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
    ]), D = async () => {
      const g = { ...y.value }, T = a ? await xe(c, g) : await $e(c, g);
      N("tablePush", { ...T, ...y.value }), N("currentStatus", "sure"), S();
    }, w = () => {
      N("currentStatus", "stop"), S();
    }, S = () => {
      y.value = {
        propertyName: "",
        sensitive: !1,
        description: ""
      };
    };
    return (g, T) => {
      const F = s("els-form"), L = s("el-button"), E = s("el-dialog");
      return i(), b("div", null, [
        e(E, {
          modelValue: v(x),
          "onUpdate:modelValue": T[1] || (T[1] = (P) => ue(x) ? x.value = P : null),
          title: v(C),
          width: "30%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: t(() => [
            o("span", Le, [
              e(L, { onClick: w }, {
                default: t(() => [
                  H("取消")
                ]),
                _: 1
              }),
              e(L, {
                onClick: D,
                type: "primary"
              }, {
                default: t(() => [
                  H("确定")
                ]),
                _: 1
              })
            ])
          ]),
          default: t(() => [
            e(F, {
              class: "p-r-15",
              modelValue: y.value,
              "onUpdate:modelValue": T[0] || (T[0] = (P) => y.value = P),
              column: _.value
            }, null, 8, ["modelValue", "column"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
}), be = /* @__PURE__ */ _e(Re, [["__scopeId", "data-v-546246fc"]]), qe = { class: "flex flex-justify-between" }, je = { class: "flex flex-col m-r-16px" }, ze = /* @__PURE__ */ o("span", null, "source", -1), Me = { class: "m-t-16px" }, We = ["title", "onClick"], Ke = { "flex-1": "" }, Ye = { class: "flex flex-justify-between items-center w-90%" }, Ze = { class: "w-90%" }, He = { class: "w-90%" }, Je = { class: "m-t-16px" }, Qe = { class: "none-name" }, Xe = { class: "inline-block m-l-30px node-package" }, el = { class: "node-description" }, ll = { class: "dialog-footer" }, tl = /* @__PURE__ */ ae({
  __name: "flexControllerAdd",
  props: {
    title: {},
    id: {},
    tab: {},
    DialogVisible: { type: Boolean },
    controllerType: {}
  },
  emits: ["controllAdd", "currentStatus"],
  setup(A, { emit: q }) {
    const j = A, N = q, { controllerType: c, title: C, DialogVisible: a } = ne(j), x = n(""), y = n(""), _ = n([]), D = n({}), w = n(), S = c.value.controllerServiceTypes.length;
    _.value = c.value.controllerServiceTypes.map(
      (m) => (m.GroupType = m.type.split(".").pop(), m.version = m.bundle.version, m.group = m.bundle.group, m.GroupTags = m.tags.join(","), m)
    ), Z(y, (m) => {
      P("type", m);
    }), Z(x, (m) => {
      P("group", m);
    });
    const g = n([
      { key: "database", value: "database", isSelect: !1 },
      { key: "file", value: "file", isSelect: !1 },
      { key: "sql", value: "sql", isSelect: !1 }
    ]), T = [
      { prop: "GroupType", label: "类型" },
      { prop: "version", label: "版本" },
      { prop: "GroupTags", label: "标签" }
    ], F = () => {
      N("currentStatus", "stop");
    }, L = () => {
      N("controllAdd", w.value);
    }, E = (m) => {
      D.value = {
        name: m.GroupType + m.version,
        package: m.bundle.group + m.bundle.artifact,
        description: m.description
      }, w.value = m;
    }, P = (m, B, J = !1) => {
      if (!J)
        _.value = B ? _.value.filter((z) => z[m].includes(B)) : c.value.controllerServiceTypes;
      else {
        const z = g.value.filter((M) => M.isSelect);
        if (z.length > 0) {
          let M = [];
          z.forEach((X) => {
            M = M.concat(
              c.value.controllerServiceTypes.filter((W) => W[m].includes(X.key))
            );
          }), _.value = M;
        } else
          _.value = c.value.controllerServiceTypes;
      }
    };
    return (m, B) => {
      const J = s("el-option"), z = s("el-select"), M = s("el-input"), X = s("el-table-column"), W = s("el-table"), ee = s("el-button"), se = s("el-dialog");
      return i(), b("div", null, [
        e(se, {
          modelValue: v(a),
          "onUpdate:modelValue": B[2] || (B[2] = (k) => ue(a) ? a.value = k : null),
          title: v(C),
          width: "50%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: t(() => [
            o("span", ll, [
              e(ee, { onClick: F }, {
                default: t(() => [
                  H("取消")
                ]),
                _: 1
              }),
              e(ee, {
                onClick: L,
                type: "primary"
              }, {
                default: t(() => [
                  H("添加")
                ]),
                _: 1
              })
            ])
          ]),
          default: t(() => [
            o("div", qe, [
              o("div", je, [
                ze,
                e(z, {
                  modelValue: x.value,
                  "onUpdate:modelValue": B[0] || (B[0] = (k) => x.value = k),
                  class: "m-2",
                  placeholder: "Select",
                  style: { width: "240px" }
                }, {
                  default: t(() => [
                    e(J, {
                      label: "所有组",
                      value: ""
                    }),
                    e(J, {
                      label: "org.apache.nifi",
                      value: "org.apache.nifi"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                o("div", Me, [
                  (i(!0), b(te, null, oe(g.value, (k) => (i(), b("span", {
                    class: "p-8px max-w-90 text-center m-r-8px cursor-pointer bg-#f5f9fd",
                    "b-rd-4px": "",
                    title: k.key,
                    onClick: () => {
                      k.isSelect = !k.isSelect, P("GroupTags", k, !0);
                    },
                    style: ke({
                      fontWeight: k.isSelect ? "600" : "400"
                    })
                  }, G(k.key), 13, We))), 256))
                ])
              ]),
              o("div", Ke, [
                o("div", Ye, [
                  o("div", null, "显示 " + G(v(S)) + " 条 共 " + G(v(S)) + " 条", 1),
                  o("div", null, [
                    e(M, {
                      modelValue: y.value,
                      "onUpdate:modelValue": B[1] || (B[1] = (k) => y.value = k),
                      placeholder: "过滤器"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                o("div", Ze, [
                  e(W, {
                    data: _.value,
                    stripe: "",
                    onRowClick: E,
                    style: { height: "400px", overflow: "scroll" }
                  }, {
                    default: t(() => [
                      (i(), b(te, null, oe(T, (k) => e(X, {
                        class: "overflow-hidden text-ellipsis cursor-pointer",
                        style: { "white-space": "nowrap" },
                        prop: k.prop,
                        label: k.label
                      }, null, 8, ["prop", "label"])), 64))
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                o("div", He, [
                  o("div", Je, [
                    o("span", Qe, G(D.value.name), 1),
                    o("span", Xe, G(D.value.package), 1)
                  ]),
                  o("div", el, G(D.value.description), 1)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
}), ol = { style: { float: "right" } }, al = { key: 0 }, nl = {
  key: 0,
  class: "validate-result"
}, sl = /* @__PURE__ */ o("div", { class: "m-t-16px" }, "验证结果", -1), il = { class: "validate-result" }, ul = { style: { display: "inline-flex" } }, cl = { style: { "margin-right": "12px" } }, rl = { class: "dialog-footer" }, pl = /* @__PURE__ */ ae({
  __name: "flexSetting",
  props: {
    node: {},
    DialogVisible: { type: Boolean },
    cotrollNode: {}
  },
  emits: ["currentStatus"],
  setup(A, { emit: q }) {
    const j = A, N = q, { node: c, DialogVisible: C, cotrollNode: a } = ne(j), x = n("0"), y = n([]), _ = n(), D = n({}), w = n([]), S = n(""), g = n(!1), T = n(!1), F = n({}), L = n(), E = n([
      { prop: "displayName", label: "属性" },
      { prop: "defaultValue", label: "值" }
    ]), P = ce(() => {
      var d, f;
      return [
        {
          prop: "name",
          label: "名称",
          value: `${a.value.name}`
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: ["Id  ", `${a.value.id}`]
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: [
            "类型  ",
            `${a.value.name} ${a.value.component.bundle.version}`
          ]
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: [
            "打包  ",
            `${a.value.component.bundle.group} - ${a.value.component.bundle.artifact}`
          ]
        },
        {
          tag: "div",
          class: "self-config-class",
          cls: [
            "控制器服务支持  ",
            `${a.value.component.bundle.group} - ${a.value.component.bundle.artifact}`
          ]
        },
        {
          prop: "bulletinLevel",
          tag: "el-select",
          label: "公告级别",
          value: `${a.value.component.bulletinLevel}`,
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
            (d = a.value) != null && d.referencingComponents ? (f = a.value) == null ? void 0 : f.referencingComponents.join(",") : "没有引用组件"
          ]
        }
      ];
    });
    Z(
      c,
      async (d) => {
        d && (L.value = await De(d.id));
      },
      { deep: !0, immediate: !0 }
    ), Z(a, () => {
      var V;
      S.value = _.value = "控制器服务配置 | " + (a == null ? void 0 : a.value.name) + " " + ((V = a == null ? void 0 : a.value.component) == null ? void 0 : V.bundle.version);
      const d = L.value.controllerServices.filter(
        (l) => l.id == a.value.id
      );
      console.log(d, "resFilter");
      const { descriptors: f } = d.length > 0 ? d[0].component : {};
      m(f);
    });
    const m = (d) => {
      const f = Object.values(d);
      w.value = f || [].map((V) => ({
        displayName: V.displayName,
        defaultValue: V != null && V.defaultValue ? V == null ? void 0 : V.defaultValue : "未设置值",
        sensitive: V.sensitive,
        isOperate: !1
      }));
    }, B = () => {
      N("currentStatus", "stop");
    }, J = () => {
      T.value = !0;
    }, z = () => {
      g.value = !0;
    }, M = async () => {
      const { id: d, component: f, revision: V } = c.value;
      f.properties = { ...f.properties, ...v(F) }, await we(d, {
        component: f,
        disconnectedNodeAcknowledged: !1,
        revision: V
      }) && N("currentStatus", "complete");
    }, X = async () => {
      c.value.id;
      const d = {
        request: { attributes: {}, componentId: c.value.id, properties: {} }
      }, V = {
        request: (await Te(d)).request
      }, { request: l } = await Ae(V);
      y.value = l.results;
    }, W = (d, f, V, l) => {
      console.log(d, f, V, l, "cellClick");
    }, ee = (d) => {
      switch (d) {
        case "complete":
          T.value = !1, X();
          break;
        case "stop":
          T.value = !1, g.value = !1;
          break;
        case "sure":
          g.value = !1;
          break;
      }
    }, se = (d) => {
      F.value = {
        [d.propertyDescriptor.displayName]: d.description
      }, w.value.push({
        displayName: d.propertyDescriptor.name,
        defaultValue: d.description,
        sensitive: d.propertyDescriptor.sensitive,
        isOperate: !0
      });
    }, k = (d, f, V) => {
      delete w.value[f];
    };
    return (d, f) => {
      var ie;
      const V = s("els-form"), l = s("el-tab-pane"), r = s("el-button"), p = s("el-tooltip"), $ = s("el-table-column"), I = s("DeleteFilled"), R = s("el-icon"), le = s("el-table"), O = s("CloseBold"), Y = s("el-input"), pe = s("el-tabs"), de = s("el-dialog");
      return i(), b("div", null, [
        e(de, {
          modelValue: v(C),
          "onUpdate:modelValue": f[3] || (f[3] = (h) => ue(C) ? C.value = h : null),
          title: _.value,
          class: "demo-tabs",
          type: "card",
          width: "50%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: t(() => [
            o("span", rl, [
              e(r, { onClick: B }, {
                default: t(() => [
                  H("取消")
                ]),
                _: 1
              }),
              e(r, {
                onClick: M,
                type: "primary"
              }, {
                default: t(() => [
                  H("应用")
                ]),
                _: 1
              })
            ])
          ]),
          default: t(() => [
            o("div", null, [
              e(pe, {
                modelValue: x.value,
                "onUpdate:modelValue": f[2] || (f[2] = (h) => x.value = h),
                class: "demo-tabs"
              }, {
                default: t(() => [
                  e(l, {
                    label: "设置",
                    name: "0"
                  }, {
                    default: t(() => [
                      e(V, {
                        modelValue: D.value,
                        "onUpdate:modelValue": f[0] || (f[0] = (h) => D.value = h),
                        column: P.value
                      }, null, 8, ["modelValue", "column"])
                    ]),
                    _: 1
                  }),
                  e(l, {
                    label: "属性",
                    name: "1"
                  }, {
                    default: t(() => [
                      o("div", null, [
                        o("div", null, [
                          o("div", ol, [
                            e(p, {
                              class: "box-item",
                              effect: "light",
                              content: "验证",
                              placement: "top"
                            }, {
                              default: t(() => [
                                e(r, {
                                  size: "small",
                                  icon: v(re),
                                  onClick: J
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }),
                            e(p, {
                              class: "box-item",
                              effect: "light",
                              content: "增加",
                              placement: "top"
                            }, {
                              default: t(() => [
                                e(r, {
                                  type: "primary",
                                  size: "small",
                                  icon: v(ve),
                                  onClick: z
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        e(le, {
                          data: w.value,
                          stripe: "",
                          style: { width: "100%" },
                          onCellClick: W
                        }, {
                          default: t(() => [
                            (i(!0), b(te, null, oe(E.value, (h) => (i(), K($, {
                              prop: h.prop,
                              label: h.label
                            }, null, 8, ["prop", "label"]))), 256)),
                            e($, { label: "" }, {
                              default: t((h) => [
                                h.row.isOperate ? (i(), b("div", al, [
                                  e(R, {
                                    style: { "margin-left": "12px" },
                                    onClick: (u) => k("del", h.$index)
                                  }, {
                                    default: t(() => [
                                      e(I)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])) : U("", !0)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["data"]),
                        y.value.length > 0 ? (i(), b("div", nl, [
                          sl,
                          o("div", il, [
                            (i(!0), b(te, null, oe(y.value, (h) => (i(), b("div", ul, [
                              o("div", cl, [
                                h.outcome == "FAILED" ? (i(), K(R, {
                                  key: 0,
                                  color: "#e21a1a"
                                }, {
                                  default: t(() => [
                                    e(O)
                                  ]),
                                  _: 1
                                })) : U("", !0),
                                h.outcome == "SUCCESSFUL" ? (i(), K(R, {
                                  key: 1,
                                  color: "#4caf50"
                                }, {
                                  default: t(() => [
                                    e(v(re))
                                  ]),
                                  _: 1
                                })) : U("", !0),
                                h.outcome == "SKIPPED" ? (i(), K(R, {
                                  key: 2,
                                  color: "#ffc83d"
                                }, {
                                  default: t(() => [
                                    e(O)
                                  ]),
                                  _: 1
                                })) : U("", !0)
                              ]),
                              o("div", null, [
                                o("div", null, G(h.verificationStepName), 1),
                                o("div", null, G(h.explanation), 1)
                              ])
                            ]))), 256))
                          ])
                        ])) : U("", !0)
                      ])
                    ]),
                    _: 1
                  }),
                  e(l, {
                    label: "注释",
                    name: "2"
                  }, {
                    default: t(() => [
                      e(Y, {
                        type: "textarea",
                        rows: "14",
                        modelValue: v(c).component.comments,
                        "onUpdate:modelValue": f[1] || (f[1] = (h) => v(c).component.comments = h)
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
        e(fe, {
          title: "验证结果",
          DialogVisible: T.value,
          onCurrentStatus: ee
        }, null, 8, ["DialogVisible"]),
        e(be, {
          title: "添加属性",
          DialogVisible: g.value,
          onCurrentStatus: ee,
          onTablePush: se,
          id: ((ie = v(c)) == null ? void 0 : ie.id) || "",
          tab: "Group"
        }, null, 8, ["DialogVisible", "id"])
      ]);
    };
  }
}), dl = { class: "dialog-footer" }, ml = /* @__PURE__ */ ae({
  __name: "flexAble",
  props: {
    title: {},
    DialogAbleVisible: { type: Boolean },
    ableType: {},
    node: {}
  },
  emits: ["currentStatus"],
  setup(A, { emit: q }) {
    const j = q, N = A, { ableType: c, DialogAbleVisible: C, node: a } = ne(N), x = n("取消"), y = n("Disable"), _ = n({}), D = n([
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
    Z(a, (S) => {
      v(S) && (_.value = {
        name: S.name,
        referencingComponents: S.referencingComponents,
        range: S.range
      });
    }), Z(c, (S) => {
      y.value = S == "disabled" ? "Disable" : "Enabled";
    });
    const w = () => {
    };
    return (S, g) => {
      const T = s("els-form"), F = s("el-button"), L = s("el-dialog");
      return i(), b("div", null, [
        e(L, {
          modelValue: v(C),
          "onUpdate:modelValue": g[2] || (g[2] = (E) => ue(C) ? C.value = E : null),
          title: "控制服务",
          width: "30%",
          "align-center": "",
          "destroy-on-close": ""
        }, {
          footer: t(() => [
            o("span", dl, [
              e(F, {
                onClick: g[1] || (g[1] = () => j("currentStatus", "stop"))
              }, {
                default: t(() => [
                  H(G(x.value), 1)
                ]),
                _: 1
              }),
              e(F, {
                onClick: w,
                type: "primary"
              }, {
                default: t(() => [
                  H(G(y.value), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: t(() => [
            e(T, {
              class: "p-r-15",
              modelValue: _.value,
              "onUpdate:modelValue": g[0] || (g[0] = (E) => _.value = E),
              column: D.value
            }, null, 8, ["modelValue", "column"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), vl = { class: "DialogTable" }, _l = {
  key: 0,
  style: { display: "flex" }
}, fl = { key: 0 }, bl = /* @__PURE__ */ o("p", null, "自动终止/重试关系", -1), gl = { key: 1 }, yl = { key: 1 }, kl = { style: { float: "right" } }, Vl = { class: "main-table" }, hl = { key: 0 }, Cl = { key: 1 }, Sl = {
  key: 0,
  class: "validate-result"
}, xl = /* @__PURE__ */ o("div", null, "验证结果", -1), $l = { style: { display: "inline-flex" } }, Dl = { style: { "margin-right": "12px" } }, wl = {
  name: "DialogTable"
}, Tl = /* @__PURE__ */ ae({
  ...wl,
  props: {
    name: {},
    nodeTable: {},
    application: {},
    node: {},
    controllerType: {}
  },
  setup(A) {
    const q = A, { controllerType: j, application: N, node: c } = ne(q), C = n([]), a = n(!1), x = n(!1), y = n(!1), _ = n(!1), D = n(!1), w = n(!1), S = n("disabled"), g = n(), T = n(), F = n(), L = n({}), E = n([]), P = n([]);
    Z(
      c,
      async (l) => {
        var r;
        if (l) {
          const p = ((r = l == null ? void 0 : l.component) == null ? void 0 : r.type) || null;
          if (g.value = l, p) {
            P.value = [
              { prop: "displayName", label: "属性" },
              { prop: "defaultValue", label: "值" }
            ];
            const $ = await me(l), { descriptors: I } = $ == null ? void 0 : $.component.config;
            z(I);
          } else
            P.value = [
              { prop: "name", label: "名称" },
              { prop: "nodeType", label: "类型" },
              { prop: "package", label: "组件包" },
              { prop: "validationStatus", label: "状态" },
              { prop: "range", label: "范围" }
            ], E.value = l.controllerServices.map(($) => {
              const I = $.component;
              return {
                range: "NiFi Flow",
                name: I.name,
                validationStatus: I.state,
                nodeType: `${I.name} ${I.bundle.version}`,
                package: `${I.bundle.group}-${I.bundle.artifact}`,
                ...$,
                isGroup: !0
              };
            });
        }
      },
      { deep: !0, immediate: !0 }
    );
    const m = ce(() => {
      const { config: l } = c.value.component;
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
    }), B = ce(() => {
      var l, r;
      return (l = c.value) != null && l.component ? (r = c.value) == null ? void 0 : r.component.relationships : [];
    }), J = () => {
      var p;
      const r = ((p = c.value) == null ? void 0 : p.component.relationships).filter(($) => $.retry);
      a.value = r.length > 0;
    }, z = (l) => {
      const r = Object.values(l);
      E.value = r.map((p) => ({
        displayName: p.displayName,
        defaultValue: p.defaultValue || "未设置值",
        sensitive: p.sensitive,
        isOperate: !1
      }));
    }, M = async (l) => {
      const r = await me(l), { descriptors: p } = r == null ? void 0 : r.component.config;
      z(p);
    }, X = () => {
      x.value = !0;
    }, W = (l) => {
      switch (l) {
        case "complete":
          x.value = !1, y.value = !1, D.value = !1, _.value = !1, ee();
          break;
        case "stop":
          w.value = !1, x.value = !1, y.value = !1, D.value = !1, _.value = !1;
          break;
        case "sure":
          y.value = !1, M(c);
          break;
      }
    }, ee = async () => {
      const { id: l } = c.value.component, $ = {
        request: (await Ne({
          request: { attributes: {}, componentId: l, properties: {} }
        })).request
      }, { request: I } = await Ie($);
      C.value = I.results;
    }, se = () => {
      var r, p;
      (((p = (r = c.value) == null ? void 0 : r.component) == null ? void 0 : p.type) || void 0) != null ? y.value = !0 : _.value = !0;
    }, k = (l, r, p) => {
      const $ = p.row;
      switch (l) {
        case "setting":
          D.value = !0, T.value = $;
          break;
        case "del":
          Ce.confirm(`是否继续删除该条数据${p.row.name}`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            delete E.value[r], d(p.row), Se({
              type: "success",
              message: "删除成功"
            });
          }).catch(() => {
          });
          break;
        case "disabled":
          w.value = !0, S.value = "disabled", F.value = p.row;
          break;
        case "enabled":
          w.value = !0, S.value = "enabled", F.value = p.row;
          break;
      }
    }, d = (l) => {
      if ((l == null ? void 0 : l.isGroup) || !1) {
        const p = {
          ...l.revision,
          disconnectedNodeAcknowledged: !1,
          id: l.id
        };
        Ee(p);
      }
    }, f = (l) => {
      E.value.push({
        name: l.propertyDescriptor.name,
        description: l.propertyDescriptor.description,
        sensitive: l.propertyDescriptor.sensitive,
        isOperate: !0
      });
    }, V = async (l) => {
      _.value = !1;
      const { revision: r, id: p } = c.value, { bundle: $, type: I } = l, R = {
        disconnectedNodeAcknowledged: !1,
        component: { ...$, type: I },
        revision: { clientId: r.clientId, version: 0 }
      }, le = await Ue(p, R), O = le.component;
      le && E.value.push({
        range: "NiFi Flow",
        name: O.name,
        validationStatus: O.validationStatus,
        nodeType: `${O.name} ${O.bundle.version}`,
        package: `${O.bundle.group}-${O.bundle.artifact}`,
        ...O,
        isGroup: !0
      });
    };
    return (l, r) => {
      var h;
      const p = s("el-checkbox"), $ = s("els-form"), I = s("el-button"), R = s("el-tooltip"), le = s("el-table-column"), O = s("DeleteFilled"), Y = s("el-icon"), pe = s("Setting"), de = s("el-table"), ie = s("CloseBold");
      return i(), b("div", vl, [
        v(N) == "relation" ? (i(), b("div", _l, [
          B.value.length > 0 ? (i(), b("div", fl, [
            bl,
            (i(!0), b(te, null, oe(B.value, (u) => (i(), b("div", null, [
              o("div", null, G(u.name), 1),
              o("div", null, [
                e(p, {
                  modelValue: u.autoTerminate,
                  "onUpdate:modelValue": (Q) => u.autoTerminate = Q,
                  label: "terminate"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                e(p, {
                  modelValue: u.retry,
                  "onUpdate:modelValue": (Q) => u.retry = Q,
                  label: "retry",
                  onClick: J
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              o("p", null, G(u.description), 1)
            ]))), 256))
          ])) : U("", !0),
          a.value ? (i(), b("div", gl, [
            e($, {
              class: "p-r-15",
              modelValue: L.value,
              "onUpdate:modelValue": r[0] || (r[0] = (u) => L.value = u),
              column: m.value
            }, null, 8, ["modelValue", "column"])
          ])) : U("", !0)
        ])) : (i(), b("div", yl, [
          o("div", kl, [
            e(R, {
              class: "box-item",
              effect: "light",
              content: "验证",
              placement: "top"
            }, {
              default: t(() => [
                v(N) == "normal" ? (i(), K(I, {
                  key: 0,
                  type: "plain",
                  size: "small",
                  icon: v(re),
                  onClick: X
                }, null, 8, ["icon"])) : U("", !0)
              ]),
              _: 1
            }),
            e(R, {
              class: "box-item",
              effect: "light",
              content: "增加",
              placement: "top"
            }, {
              default: t(() => [
                e(I, {
                  type: "primary",
                  size: "small",
                  icon: v(ve),
                  onClick: se
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          o("div", Vl, [
            e(de, {
              data: E.value,
              stripe: "",
              style: { width: "100%" }
            }, {
              default: t(() => [
                (i(!0), b(te, null, oe(P.value, (u) => (i(), K(le, {
                  prop: u.prop,
                  label: u.label
                }, null, 8, ["prop", "label"]))), 256)),
                e(le, { label: "操作" }, {
                  default: t((u) => [
                    u.row.isOperate ? (i(), b("div", hl, [
                      e(Y, {
                        onClick: (Q) => k("del", u.$index, u)
                      }, {
                        default: t(() => [
                          e(O)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : U("", !0),
                    u.row.isGroup ? (i(), b("div", Cl, [
                      e(R, {
                        class: "box-item",
                        effect: "dark",
                        content: "配置",
                        placement: "top"
                      }, {
                        default: t(() => [
                          e(Y, {
                            onClick: (Q) => k("setting", u.$index, u)
                          }, {
                            default: t(() => [
                              e(pe)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      u.row.validationStatus == "ENABLED" ? (i(), K(R, {
                        key: 0,
                        class: "box-item",
                        effect: "dark",
                        content: "Disabled",
                        placement: "top"
                      }, {
                        default: t(() => [
                          e(Y, {
                            onClick: (Q) => k("disabled", u.$index, u)
                          }, {
                            default: t(() => [
                              e(v(Ve))
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)) : U("", !0),
                      u.row.validationStatus == "DISABLED" ? (i(), K(R, {
                        key: 1,
                        class: "box-item",
                        effect: "dark",
                        content: "enabled",
                        placement: "top"
                      }, {
                        default: t(() => [
                          e(Y, {
                            onClick: (Q) => k("enabled", u.$index, u)
                          }, {
                            default: t(() => [
                              e(v(he))
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)) : U("", !0),
                      e(Y, {
                        style: { "margin-left": "12px" },
                        onClick: (Q) => k("del", u.$index, u)
                      }, {
                        default: t(() => [
                          e(O)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : U("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"]),
            C.value.length > 0 ? (i(), b("div", Sl, [
              xl,
              o("div", null, [
                (i(!0), b(te, null, oe(C.value, (u) => (i(), b("div", $l, [
                  o("div", Dl, [
                    u.outcome == "FAILED" ? (i(), K(Y, {
                      key: 0,
                      color: "#e21a1a"
                    }, {
                      default: t(() => [
                        e(ie)
                      ]),
                      _: 1
                    })) : U("", !0),
                    u.outcome == "SUCCESSFUL" ? (i(), K(Y, {
                      key: 1,
                      color: "#4caf50"
                    }, {
                      default: t(() => [
                        e(v(re))
                      ]),
                      _: 1
                    })) : U("", !0),
                    u.outcome == "SKIPPED" ? (i(), K(Y, {
                      key: 2,
                      color: "#ffc83d"
                    }, {
                      default: t(() => [
                        e(ie)
                      ]),
                      _: 1
                    })) : U("", !0)
                  ]),
                  o("div", null, [
                    o("div", null, G(u.verificationStepName), 1),
                    o("div", null, G(u.explanation), 1)
                  ])
                ]))), 256))
              ])
            ])) : U("", !0)
          ])
        ])),
        e(fe, {
          title: "验证结果",
          DialogVisible: x.value,
          onCurrentStatus: W
        }, null, 8, ["DialogVisible"]),
        e(be, {
          title: "添加属性",
          DialogVisible: y.value,
          onCurrentStatus: W,
          onTablePush: f,
          id: ((h = v(c)) == null ? void 0 : h.id) || ""
        }, null, 8, ["DialogVisible", "id"]),
        e(tl, {
          title: "添加控制器服务",
          DialogVisible: _.value,
          controllerType: v(j),
          onCurrentStatus: W,
          onControllAdd: V
        }, null, 8, ["DialogVisible", "controllerType"]),
        e(pl, {
          DialogVisible: D.value,
          onCurrentStatus: W,
          node: g.value,
          cotrollNode: T.value
        }, null, 8, ["DialogVisible", "node", "cotrollNode"]),
        e(ml, {
          DialogAbleVisible: w.value,
          ableType: S.value,
          node: F.value,
          onCurrentStatus: W
        }, null, 8, ["DialogAbleVisible", "ableType", "node"])
      ]);
    };
  }
}), Ul = {
  install: (A) => {
    A.component("dialog-table", Tl);
  }
};
export {
  Tl as DialogTable,
  Ul as default
};
