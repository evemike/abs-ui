var H = Object.defineProperty;
var R = (c, t, s) => t in c ? H(c, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : c[t] = s;
var e = (c, t, s) => (R(c, typeof t != "symbol" ? t + "" : t, s), s);
import "../css/main-B1tOnab9.css";
import { ref as i, defineComponent as g, onMounted as w, nextTick as y, openBlock as k, createElementBlock as b, createElementVNode as S, normalizeClass as f, normalizeStyle as v, renderSlot as C, unref as a, withDirectives as p, vShow as X, createCommentVNode as Y } from "vue";
import { u as E, w as T, a as W, b as h } from "./vendor.BlYUAX4D.js";
import { _ as x } from "./_plugin-vue_export-helper.CHgC5LLL.js";
class $ {
  constructor(t) {
    e(this, "containerRef");
    e(this, "contentRef");
    e(this, "trackXRef");
    e(this, "trackYRef");
    e(this, "thumbXRef");
    e(this, "thumbYRef");
    e(this, "thumbXSize", i(0));
    e(this, "thumbYSize", i(0));
    e(this, "trackOpacity", i(1));
    e(this, "trackVisible", i(!1));
    e(this, "autoHide", !0);
    e(this, "trackXSize");
    e(this, "trackYSize");
    e(this, "contentWidth", 0);
    e(this, "contentHeight", 0);
    e(this, "contentScrollWidth", 0);
    e(this, "contentScrollHeight", 0);
    e(this, "speedX", 1);
    e(this, "speedY", 1);
    e(this, "offsetX", i(0));
    e(this, "offsetY", i(0));
    e(this, "scrollX", i(0));
    e(this, "scrollY", i(0));
    e(this, "isScroll", i(!1));
    e(this, "isScrollX", i(!1));
    e(this, "isScrollY", i(!1));
    e(this, "showX", i(!1));
    e(this, "showY", i(!1));
    e(this, "isHover", i(!1));
    e(this, "alignSize", i([0, 0]));
    e(this, "maxOffsetX", 0);
    e(this, "maxOffsetY", 0);
    // 计算属性 是否显示 track SU.isHover.value || SU.isScroll.value || !autoHide
    // 事件
    e(this, "dragEventHandle");
    e(this, "moveEventHandle");
    this.containerRef = t.containerRef, this.contentRef = t.contentRef, this.trackXRef = t.trackXRef, this.trackYRef = t.trackYRef, this.thumbXRef = t.thumbXRef, this.thumbYRef = t.thumbYRef, this.thumbXSize.value = t.minThumbSize, this.thumbYSize.value = t.minThumbSize, this.autoHide = t.autoHide, this.trackXSize = Array.isArray(t.trackSize) ? t.trackSize[1] : t.trackSize, this.trackYSize = Array.isArray(t.trackSize) ? t.trackSize[0] : t.trackSize, this.trackVisible.value = !t.autoHide;
  }
  //
  init() {
    this.setContentSize(), this.initContentScroll(), this.calcAlignSize(), this.listenContentSizeChange();
  }
  // 监听 size 变化
  listenContentSizeChange() {
    const t = E(this.contentRef.value);
    T(() => [t.width.value, t.height.value], () => {
      this.setContentSize(), this.calcAlignSize();
    }, { debounce: 100 });
  }
  // 初始化 content size
  setContentSize() {
    this.contentRef.value && (this.contentWidth = this.contentRef.value.offsetWidth, this.contentHeight = this.contentRef.value.offsetHeight, this.contentScrollWidth = this.contentRef.value.scrollWidth, this.contentScrollHeight = this.contentRef.value.scrollHeight, this.showX.value = this.contentScrollWidth > this.contentWidth, this.showY.value = this.contentScrollHeight > this.contentHeight), console.log(this.contentWidth, this.contentHeight, this.contentScrollWidth, this.contentScrollHeight);
  }
  //
  initContentScroll() {
    const { x: t, y: s } = W(this.contentRef);
    this.scrollX = t, this.scrollY = s;
  }
  // 是否需要显示滚动条
  showScrollBar() {
    this.showX.value = this.contentScrollWidth > this.contentWidth, this.showY.value = this.contentScrollHeight > this.contentHeight;
  }
  // 计算两个导轨互相叠加的部分
  calcAlignSize() {
    const t = this.showX.value && this.showY.value;
    let s = [0, 0];
    t && (s = [this.trackYSize, this.trackXSize]), this.alignSize.value = s, this.calcThumbSize();
  }
  // 滑块大小计算
  calcThumbSize() {
    const t = this.contentScrollWidth - this.contentWidth, s = this.contentScrollHeight - this.contentHeight, n = this.contentWidth - this.thumbXSize.value - this.alignSize.value[0], r = this.contentHeight - this.thumbYSize.value - this.alignSize.value[1];
    console.log(t, s, n, r, this.contentWidth, this.contentHeight, this.thumbYSize.value, this.alignSize), n >= t ? this.thumbXSize.value = this.contentWidth - t : this.speedX = t / n, r >= s ? this.thumbYSize.value = this.contentHeight - s : this.speedY = s / r, this.maxOffsetX = this.contentWidth - this.thumbXSize.value - this.alignSize.value[0], this.maxOffsetY = this.contentHeight - this.thumbYSize.value - this.alignSize.value[1];
  }
  // 滑块位置计算
  calcThumbXPos(t) {
    let s = this.offsetX.value + t;
    return s < 0 ? s = 0 : s > this.maxOffsetX && (s = this.maxOffsetX), this.offsetX.value = s, !0;
  }
  calcThumbYPos(t) {
    let s = this.offsetY.value + t;
    return s < 0 ? s = 0 : s > this.maxOffsetY && (s = this.maxOffsetY), this.offsetY.value = s, !0;
  }
  // 重新计算内容页的滚动位置
  calcScrollXPos() {
    return this.scrollX.value = Math.round(this.offsetX.value * this.speedX), !0;
  }
  calcScrollYPos() {
    return this.scrollY.value = Math.round(this.offsetY.value * this.speedY), !0;
  }
  // 取消move 事件
  unregistMoveEvet() {
    this.moveEventHandle && (this.moveEventHandle(), this.moveEventHandle = void 0);
  }
  // 滑块拖拽事件
  thumbDragHandle(t, s) {
    t.stopPropagation(), t.preventDefault(), this.unregistMoveEvet();
    let { x: n, y: r } = t;
    this.moveEventHandle = h(document, "mousemove", (u) => {
      const d = u.x - n, m = u.y - r;
      s == "X" ? this.calcThumbXPos(d) && this.calcScrollXPos() : this.calcThumbYPos(m) && this.calcScrollYPos(), n = u.x, r = u.y;
    }), this.isScroll.value = !0, s == "X" ? this.isScrollX.value = !0 : this.isScrollY.value = !0, this.showTrack();
  }
  // 轨道点击事件
  trackClickHandle(t, s) {
    t.stopPropagation(), t.preventDefault();
  }
  // 由滚动事件触发的位置变化重新计算滑块的位置
  scrollEventHandle(t) {
    t.stopPropagation(), t.preventDefault(), this.scrollX.value > 0 && (this.offsetX.value = Math.round(this.scrollX.value / this.speedX)), this.scrollY.value > 0 && (this.offsetY.value = Math.round(this.scrollY.value / this.speedY));
  }
  mouseEnterHandle() {
    this.isHover.value = !0, this.showTrack();
  }
  mouseLeaveHandle() {
    this.isHover.value = !1, this.hideTrack();
  }
  mouseUpHandle() {
    this.unregistMoveEvet(), this.isScrollX.value = !1, this.isScrollY.value = !1, this.isScroll.value = !1, this.hideTrack();
  }
  //
  showTrack() {
    this.autoHide !== !1 && (this.trackOpacity.value = 1, this.trackVisible.value = !0);
  }
  hideTrack() {
    this.autoHide !== !1 && (this.isHover.value || this.isScroll.value || (this.trackOpacity.value = 0, setTimeout(() => {
      this.trackVisible.value = this.isScroll.value || this.isHover.value;
    }, 1e3)));
  }
  // 常驻事件注册
  registEvent() {
    h(this.containerRef, "mouseenter", () => this.mouseEnterHandle()), h(this.containerRef, "mouseleave", () => this.mouseLeaveHandle()), h(this.thumbXRef, "mousedown", (t) => this.thumbDragHandle(t, "X")), h(this.thumbYRef, "mousedown", (t) => this.thumbDragHandle(t, "Y")), h(this.trackXRef, "click", (t) => this.trackClickHandle(t, "X")), h(this.trackYRef, "click", (t) => this.trackClickHandle(t, "Y")), h(this.contentRef, "scroll", (t) => this.scrollEventHandle(t)), h(document, "mouseup", () => this.mouseUpHandle()), h(this.contentRef, "resize", () => {
      this.setContentSize(), this.calcAlignSize();
    });
  }
}
const O = {
  "h-auto": "",
  "w-auto": ""
}, P = {
  name: "ElsScroll"
}, M = /* @__PURE__ */ g({
  ...P,
  props: {
    class: {},
    style: {},
    autoHide: { type: Boolean, default: !0 },
    thumbClass: { default: "rd-10 bg-#000 op-30 hover-op-70 box-shadow" },
    thumbXClass: { default: "h-5 transition-height-500 hover-h-10" },
    thumbYClass: { default: "w-5 transition-width-500 hover-w-10" },
    trackClass: { default: "" },
    trackXClass: { default: "h-10" },
    trackYClass: { default: "w-10" },
    thumbMinSize: { default: 20 },
    scrollClass: { default: "important-op-70 box-shadow" },
    scrollYClass: { default: "important-w-10" },
    scrollXClass: { default: "important-h-10" },
    trackSize: { default: 10 }
  },
  setup(c) {
    const t = c, s = i(), n = i(), r = i(), u = i(), d = i(), m = i(), l = new $({
      containerRef: s,
      contentRef: n,
      trackXRef: r,
      trackYRef: u,
      thumbXRef: d,
      thumbYRef: m,
      minThumbSize: t.thumbMinSize,
      autoHide: t.autoHide,
      trackSize: t.trackSize
    });
    w(() => {
      setTimeout(() => {
        y(() => {
          l.init(), l.registEvent();
        });
      }, 0);
    });
    const z = () => {
      console.log("====================test");
    };
    return (o, _) => (k(), b("div", {
      ref_key: "containerRef",
      ref: s,
      class: "relative block p-0 m-0 els-scroll w-100% h-100%"
    }, [
      S("div", {
        ref_key: "contentRef",
        ref: n,
        class: f(["_scroll-wapper important-w-100% important-h-100% relative overflow-auto", t.class || ""]),
        style: v(t.style || "")
      }, [
        S("div", O, [
          C(o.$slots, "default", { "onHook:mounted": z }, void 0, !0)
        ])
      ], 6),
      a(l).showX.value ? p((k(), b("div", {
        key: 0,
        ref_key: "trackXRef",
        ref: r,
        class: f([
          "absolute transition-opacity-1000 left-0 bottom-0 z-9999",
          o.trackXClass,
          o.trackClass
        ]),
        style: v(`width:calc(100% - ${a(l).alignSize.value[0]}px);height:${a(l).trackXSize}px;opacity:${a(l).trackOpacity.value}`)
      }, [
        S("div", {
          ref_key: "thumbXRef",
          ref: d,
          class: f([
            "absolute bottom-0",
            o.thumbXClass,
            o.thumbClass,
            a(l).isScrollX.value ? `${o.scrollClass} ${o.scrollXClass}` : ""
          ]),
          style: v(`width:${a(l).thumbXSize.value}px;left:${a(l).offsetX.value}px`)
        }, null, 6)
      ], 6)), [
        [X, a(l).trackVisible.value]
      ]) : Y("", !0),
      a(l).showY.value ? p((k(), b("div", {
        key: 1,
        ref_key: "trackYRef",
        ref: u,
        class: f([
          "absolute transition-opacity-1000 right-0 top-0 z-9999",
          o.trackYClass,
          o.trackClass
        ]),
        style: v(`height:calc(100% - ${a(l).alignSize.value[1]}px);width:${a(l).trackYSize}px;opacity:${a(l).trackOpacity.value}`)
      }, [
        S("div", {
          ref_key: "thumbYRef",
          ref: m,
          class: f([
            "absolute right-0",
            o.thumbYClass,
            o.thumbClass,
            a(l).isScrollY.value ? `${o.scrollClass} ${o.scrollYClass}` : ""
          ]),
          style: v(`height:${a(l).thumbYSize.value}px;top:${a(l).offsetY.value}px`)
        }, null, 6)
      ], 6)), [
        [X, a(l).trackVisible.value]
      ]) : Y("", !0)
    ], 512));
  }
}), L = /* @__PURE__ */ x(M, [["__scopeId", "data-v-b2830df5"]]);
export {
  L as E
};
