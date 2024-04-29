import { defineComponent as b, computed as O, onMounted as T, openBlock as g, createElementBlock as f, createVNode as i, unref as s, withCtx as t, normalizeStyle as _, createTextVNode as m, toDisplayString as u, createCommentVNode as w, renderSlot as x } from "vue";
import { a5 as y, f as p } from "../../chunks/vendor.BvXqCPMY.js";
const j = {
  dialogVisible: !1,
  title: "标题",
  width: "50%",
  closeBtnText: "取消",
  confirmBtnText: "确定",
  isFooter: !0,
  showClose: !0,
  cancelBtnStyle: {}
}, S = { class: "modal-box" }, k = {
  key: 0,
  class: "dialog-footer"
}, V = {
  name: "ModalOk"
}, F = /* @__PURE__ */ b({
  ...V,
  props: {
    dialogObject: { default: () => ({
      ...j
    }) },
    theme: {}
  },
  emits: ["dialogClose", "dialogConfirm"],
  setup(l, { emit: C }) {
    const n = C, e = l, d = O({
      get() {
        return e.dialogObject.dialogVisible || !1;
      },
      set(a) {
        return a;
      }
    }), o = {
      dialogTitle: e.dialogObject.title || "标题",
      dialogWidth: e.dialogObject.width || "50%",
      dialogCloseBtnText: e.dialogObject.closeBtnText || "取消",
      dialogConfirmBtnText: e.dialogObject.confirmBtnText || "确定",
      showClose: e.dialogObject.showClose || !1,
      dialogIsFooter: e.dialogObject.isFooter || !1,
      cancelBtnStyle: e.dialogObject.cancelBtnStyle || {}
    }, c = () => {
      n("dialogClose", !1, "close");
    }, h = () => {
      n("dialogConfirm", !1, "success");
    };
    return T(() => {
    }), (a, r) => (g(), f("div", S, [
      i(s(y), {
        modelValue: d.value,
        "onUpdate:modelValue": r[0] || (r[0] = (B) => d.value = B),
        title: o.dialogTitle,
        width: o.dialogWidth,
        "show-close": o.showClose,
        "before-close": c
      }, {
        footer: t(() => [
          o.dialogIsFooter ? (g(), f("span", k, [
            i(s(p), {
              onClick: c,
              style: _(o.cancelBtnStyle)
            }, {
              default: t(() => [
                m(u(o.dialogCloseBtnText), 1)
              ]),
              _: 1
            }, 8, ["style"]),
            i(s(p), {
              onClick: h,
              type: "primary"
            }, {
              default: t(() => [
                m(u(o.dialogConfirmBtnText), 1)
              ]),
              _: 1
            })
          ])) : w("", !0)
        ]),
        default: t(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["modelValue", "title", "width", "show-close"])
    ]));
  }
}), N = {
  install: (l) => {
    l.component("ModalOk", F);
  }
};
export {
  N as default
};
