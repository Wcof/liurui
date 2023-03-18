"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      av: 0,
      bv: 0,
      cv: 0,
      dv: 0,
      ae: 0,
      be: 0,
      ce: 0,
      de: 0,
      e: 0
    };
  },
  onLoad() {
  },
  methods: {
    js() {
      this.av = this.a / 100;
      this.bv = this.b / 100;
      var cc = this.c / 100 / 4.18;
      this.cv = cc.toFixed(4);
      this.dv = this.d / 100;
      this.ae = this.av * this.e;
      this.be = this.bv * this.e;
      this.ce = this.cv * this.e;
      this.de = this.dv * this.e;
      console.log("1111");
    }
  }
};
if (!Array) {
  const _component_H3 = common_vendor.resolveComponent("H3");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_component_H3 + _easycom_uni_easyinput2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(() => {
    }),
    b: common_vendor.o(($event) => $data.c = $event),
    c: common_vendor.p({
      type: "number",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.c
    }),
    d: common_vendor.t($data.cv),
    e: common_vendor.o(() => {
    }),
    f: common_vendor.o(($event) => $data.d = $event),
    g: common_vendor.p({
      type: "number",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.d
    }),
    h: common_vendor.t($data.dv),
    i: common_vendor.o(() => {
    }),
    j: common_vendor.o(($event) => $data.a = $event),
    k: common_vendor.p({
      type: "number",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.a
    }),
    l: common_vendor.t($data.av),
    m: common_vendor.o(() => {
    }),
    n: common_vendor.o(($event) => $data.b = $event),
    o: common_vendor.p({
      type: "number",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.b
    }),
    p: common_vendor.t($data.bv),
    q: common_vendor.o(() => {
    }),
    r: common_vendor.o(($event) => $data.e = $event),
    s: common_vendor.p({
      type: "number",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.e
    }),
    t: common_vendor.t($data.ce),
    v: common_vendor.t($data.de),
    w: common_vendor.t($data.ae),
    x: common_vendor.t($data.be),
    y: common_vendor.o((...args) => $options.js && $options.js(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator/Desktop/wcof/liurui/liurui/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
