import { defineComponent as D, toRefs as R, ref as $, resolveComponent as V, openBlock as u, createElementBlock as I, createElementVNode as w, createVNode as l, unref as a, withCtx as t, createTextVNode as x, Fragment as S, renderList as h, createBlock as A } from "vue";
import { b, B as P, C as o, j as v, k as g, f as z, e as y, m as L } from "./vendor.CTqz3lQh.js";
const X = `{
  "formatters": {
    "localDateFormats": [
      "",
      "ar_AE",
      "ar_JO",
      "ar_SY",
      "hr_HR",
      "fr_BE",
      "es_PA",
      "mt_MT",
      "es_VE",
      "bg",
      "zh_TW",
      "it",
      "ko",
      "uk",
      "lv",
      "da_DK",
      "es_PR",
      "vi_VN",
      "en_US",
      "sr_ME",
      "sv_SE",
      "es_BO",
      "en_SG",
      "ar_BH",
      "pt",
      "ar_SA",
      "sk",
      "ar_YE",
      "hi_IN",
      "ga",
      "en_MT",
      "fi_FI",
      "et",
      "sv",
      "cs",
      "sr_BA_#Latn",
      "el",
      "uk_UA",
      "hu",
      "fr_CH",
      "in",
      "es_AR",
      "ar_EG",
      "ja_JP_JP_#u-ca-japanese",
      "es_SV",
      "pt_BR",
      "be",
      "is_IS",
      "cs_CZ",
      "es",
      "pl_PL",
      "tr",
      "ca_ES",
      "sr_CS",
      "ms_MY",
      "hr",
      "lt",
      "es_ES",
      "es_CO",
      "bg_BG",
      "sq",
      "fr",
      "ja",
      "sr_BA",
      "is",
      "es_PY",
      "de",
      "es_EC",
      "es_US",
      "ar_SD",
      "en",
      "ro_RO",
      "en_PH",
      "ca",
      "ar_TN",
      "sr_ME_#Latn",
      "es_GT",
      "sl",
      "ko_KR",
      "el_CY",
      "es_MX",
      "ru_RU",
      "es_HN",
      "zh_HK",
      "no_NO_NY",
      "hu_HU",
      "th_TH",
      "ar_IQ",
      "es_CL",
      "fi",
      "ar_MA",
      "ga_IE",
      "mk",
      "tr_TR",
      "et_EE",
      "ar_QA",
      "sr__#Latn",
      "pt_PT",
      "fr_LU",
      "ar_OM",
      "th",
      "sq_AL",
      "es_DO",
      "es_CU",
      "ar",
      "ru",
      "en_NZ",
      "sr_RS",
      "de_CH",
      "es_UY",
      "ms",
      "el_GR",
      "iw_IL",
      "en_ZA",
      "th_TH_TH_#u-nu-thai",
      "hi",
      "fr_FR",
      "de_AT",
      "nl",
      "no_NO",
      "en_AU",
      "vi",
      "nl_NL",
      "fr_CA",
      "lv_LV",
      "de_LU",
      "es_CR",
      "ar_KW",
      "sr",
      "ar_LY",
      "mt",
      "it_CH",
      "da",
      "de_DE",
      "ar_DZ",
      "sk_SK",
      "lt_LT",
      "it_IT",
      "en_IE",
      "zh_SG",
      "ro",
      "en_CA",
      "nl_BE",
      "no",
      "pl",
      "zh_CN",
      "ja_JP",
      "de_GR",
      "sr_RS_#Latn",
      "iw",
      "en_IN",
      "ar_LB",
      "es_NI",
      "zh",
      "mk_MK",
      "be_BY",
      "sl_SI",
      "es_PE",
      "in_ID",
      "en_GB"
    ],
    "formats": [
      "General",
      "0",
      "0.00",
      "#,##0",
      "#,##0.00",
      "\\"$\\"#,##0_);(\\"$\\"#,##0)",
      "\\"$\\"#,##0_);[Red](\\"$\\"#,##0)",
      "\\"$\\"#,##0.00_);(\\"$\\"#,##0.00)",
      "\\"$\\"#,##0.00_);[Red](\\"$\\"#,##0.00)",
      "0%",
      "0.00%",
      "0.00E+00",
      "# ?/?",
      "# ??/??",
      "m/d/yy",
      "d-mmm-yy",
      "d-mmm",
      "mmm-yy",
      "h:mm AM/PM",
      "h:mm:ss AM/PM",
      "h:mm",
      "h:mm:ss",
      "m/d/yy h:mm",
      "reserved-0x17",
      "reserved-0x18",
      "reserved-0x19",
      "reserved-0x1A",
      "reserved-0x1B",
      "reserved-0x1C",
      "reserved-0x1D",
      "reserved-0x1E",
      "reserved-0x1F",
      "reserved-0x20",
      "reserved-0x21",
      "reserved-0x22",
      "reserved-0x23",
      "reserved-0x24",
      "#,##0_);(#,##0)",
      "#,##0_);[Red](#,##0)",
      "#,##0.00_);(#,##0.00)",
      "#,##0.00_);[Red](#,##0.00)",
      "_(* #,##0_);_(* (#,##0);_(* \\"-\\"_);_(@_)",
      "_(\\"$\\"* #,##0_);_(\\"$\\"* (#,##0);_(\\"$\\"* \\"-\\"_);_(@_)",
      "_(* #,##0.00_);_(* (#,##0.00);_(* \\"-\\"??_);_(@_)",
      "_(\\"$\\"* #,##0.00_);_(\\"$\\"* (#,##0.00);_(\\"$\\"* \\"-\\"??_);_(@_)",
      "mm:ss",
      "[h]:mm:ss",
      "mm:ss.0",
      "##0.0E+0",
      "@"
    ],
    "encodings": [
      "Big5",
      "Big5-HKSCS",
      "CESU-8",
      "EUC-JP",
      "EUC-KR",
      "GB18030",
      "GB2312",
      "GBK",
      "IBM-Thai",
      "IBM00858",
      "IBM01140",
      "IBM01141",
      "IBM01142",
      "IBM01143",
      "IBM01144",
      "IBM01145",
      "IBM01146",
      "IBM01147",
      "IBM01148",
      "IBM01149",
      "IBM037",
      "IBM1026",
      "IBM1047",
      "IBM273",
      "IBM277",
      "IBM278",
      "IBM280",
      "IBM284",
      "IBM285",
      "IBM290",
      "IBM297",
      "IBM420",
      "IBM424",
      "IBM437",
      "IBM500",
      "IBM775",
      "IBM850",
      "IBM852",
      "IBM855",
      "IBM857",
      "IBM860",
      "IBM861",
      "IBM862",
      "IBM863",
      "IBM864",
      "IBM865",
      "IBM866",
      "IBM868",
      "IBM869",
      "IBM870",
      "IBM871",
      "IBM918",
      "ISO-2022-CN",
      "ISO-2022-JP",
      "ISO-2022-JP-2",
      "ISO-2022-KR",
      "ISO-8859-1",
      "ISO-8859-13",
      "ISO-8859-15",
      "ISO-8859-2",
      "ISO-8859-3",
      "ISO-8859-4",
      "ISO-8859-5",
      "ISO-8859-6",
      "ISO-8859-7",
      "ISO-8859-8",
      "ISO-8859-9",
      "JIS_X0201",
      "JIS_X0212-1990",
      "KOI8-R",
      "KOI8-U",
      "Shift_JIS",
      "TIS-620",
      "US-ASCII",
      "UTF-16",
      "UTF-16BE",
      "UTF-16LE",
      "UTF-32",
      "UTF-32BE",
      "UTF-32LE",
      "UTF-8",
      "windows-1250",
      "windows-1251",
      "windows-1252",
      "windows-1253",
      "windows-1254",
      "windows-1255",
      "windows-1256",
      "windows-1257",
      "windows-1258",
      "windows-31j",
      "x-Big5-HKSCS-2001",
      "x-Big5-Solaris",
      "x-COMPOUND_TEXT",
      "x-euc-jp-linux",
      "x-EUC-TW",
      "x-eucJP-Open",
      "x-IBM1006",
      "x-IBM1025",
      "x-IBM1046",
      "x-IBM1097",
      "x-IBM1098",
      "x-IBM1112",
      "x-IBM1122",
      "x-IBM1123",
      "x-IBM1124",
      "x-IBM1166",
      "x-IBM1364",
      "x-IBM1381",
      "x-IBM1383",
      "x-IBM300",
      "x-IBM33722",
      "x-IBM737",
      "x-IBM833",
      "x-IBM834",
      "x-IBM856",
      "x-IBM874",
      "x-IBM875",
      "x-IBM921",
      "x-IBM922",
      "x-IBM930",
      "x-IBM933",
      "x-IBM935",
      "x-IBM937",
      "x-IBM939",
      "x-IBM942",
      "x-IBM942C",
      "x-IBM943",
      "x-IBM943C",
      "x-IBM948",
      "x-IBM949",
      "x-IBM949C",
      "x-IBM950",
      "x-IBM964",
      "x-IBM970",
      "x-ISCII91",
      "x-ISO-2022-CN-CNS",
      "x-ISO-2022-CN-GB",
      "x-iso-8859-11",
      "x-JIS0208",
      "x-JISAutoDetect",
      "x-Johab",
      "x-MacArabic",
      "x-MacCentralEurope",
      "x-MacCroatian",
      "x-MacCyrillic",
      "x-MacDingbat",
      "x-MacGreek",
      "x-MacHebrew",
      "x-MacIceland",
      "x-MacRoman",
      "x-MacRomania",
      "x-MacSymbol",
      "x-MacThai",
      "x-MacTurkish",
      "x-MacUkraine",
      "x-MS932_0213",
      "x-MS950-HKSCS",
      "x-MS950-HKSCS-XP",
      "x-mswin-936",
      "x-PCK",
      "x-SJIS_0213",
      "x-UTF-16LE-BOM",
      "X-UTF-32BE-BOM",
      "X-UTF-32LE-BOM",
      "x-windows-50220",
      "x-windows-50221",
      "x-windows-874",
      "x-windows-949",
      "x-windows-950",
      "x-windows-iso2022jp"
    ],
    "formatNumber": [
      "0",
      "0.00",
      "#,##0",
      "#,##0.00",
      "\\"$\\"#,##0_);(\\"$\\"#,##0)",
      "\\"$\\"#,##0_);[Red](\\"$\\"#,##0)",
      "\\"$\\"#,##0.00_);(\\"$\\"#,##0.00)",
      "\\"$\\"#,##0.00_);[Red](\\"$\\"#,##0.00)",
      "0%",
      "0.00%",
      "0.00E+00",
      "# ?/?",
      "# ??/??"
    ],
    "formatDate": [
      "dd-MM-yyyy",
      "yyy-MM-dd'T'HH:mm:ss.SSSXXX",
      "yyyy-MM-dd HH:mm:ss.SSS",
      "yyyy/MM/dd HH:mm:ss.SSS",
      "yyyy/MM/dd HH:mm:ss.SSS XXX",
      "yyyy/MM/dd HH:mm:ss",
     "yyyy/MM/dd HH:mm:ss XXX",
      "yyyyMMddHHmmss",
      "yy/MM/dd",
      "yyy-MM-dd",
      "yyyy-MM-dd HH:mm:ss",
      "yyyy-MM-dd HH:mm:ss XXX",
      "yyMMdd",
      "MM/dd/yyyy",
      "MM/dd/yyyy HH:mm:ss",
      "MM-dd-yyy",
      "MM-dd-yyyy HH:mm:ss",
      "MM/dd/yy",
      "MM-dd-yy",
      "dd/MM/yyyy"
    ]
  }
}
`, F = /* @__PURE__ */ w("div", { style: { "font-weight": "bold", display: "inline-block", "font-size": "15px" } }, "条件：", -1), G = { style: { display: "inline-block", "margin-bottom": "5px", "margin-right": "5%" } }, J = /* @__PURE__ */ D({
  __name: "editTable",
  props: {
    formData: { default: () => ({}) },
    preview: {}
  },
  setup(C) {
    const U = C, { formData: r, preview: B } = R(U), i = JSON.parse(X), M = i.formatters.formats;
    i.formatters.localDateFormats, i.formatters.encodings;
    const c = i.formatters.formatDate, f = i.formatters.formatNumber, m = ["Number", "String", "Date", "Boolean", "Integer", "BigNumber", "Timestamp"], p = [{
      key: "Y",
      label: "是"
    }, {
      key: "N",
      label: "否"
    }], E = {
      name: "",
      type: "",
      format: "",
      length: -1,
      precision: -1,
      group: "",
      currency: "",
      set_empty_string: "",
      nullif: "",
      decimal: ""
    };
    function T(d) {
      var _;
      (_ = r.value) == null || _.fields.field.push(E);
    }
    function H(d) {
      r.value.fields.field.splice(d, 1);
    }
    function O(d) {
      d.type === "Number" ? (M.vlaue = f.value, d.length = 38) : (d.type === "Date" && (M.value = c.value), d.length = -1);
    }
    $(!1);
    const N = async () => {
      var d, _, s;
      ((s = (_ = (d = r.value) == null ? void 0 : d.fields) == null ? void 0 : _.field) == null ? void 0 : s.length) != 0 && B.value && B.value();
    };
    return (d, _) => {
      const s = V("el-input"), k = V("el-form");
      return u(), I("div", null, [
        w("div", null, [
          F,
          w("div", G, [
            l(a(b), {
              type: "primary",
              size: "mini",
              onClick: N
            }, {
              default: t(() => [
                x("数据预览 ")
              ]),
              _: 1
            }),
            l(a(b), {
              type: "primary",
              size: "mini",
              onClick: T
            }, {
              default: t(() => [
                x("新增 ")
              ]),
              _: 1
            })
          ])
        ]),
        l(k, {
          model: a(r),
          ref: "form",
          "label-width": "180px",
          size: "mini"
        }, {
          default: t(() => [
            l(a(P), {
              data: a(r).fields.field,
              border: "",
              height: "330",
              "header-cell-style": { background: "#eef1f6" }
            }, {
              default: t(() => [
                l(a(o), {
                  type: "index",
                  label: "#"
                }),
                l(a(o), {
                  prop: "name",
                  label: "名称",
                  width: "150"
                }, {
                  default: t(({ row: e }) => [
                    l(s, {
                      modelValue: e.name,
                      "onUpdate:modelValue": (n) => e.name = n,
                      size: "mini"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "type",
                  label: "类型",
                  width: "120"
                }, {
                  default: t(({ row: e }) => [
                    l(a(v), {
                      modelValue: e.type,
                      "onUpdate:modelValue": (n) => e.type = n,
                      size: "mini",
                      style: { width: "100%" },
                      onChange: (n) => O(e)
                    }, {
                      default: t(() => [
                        (u(), I(S, null, h(m, (n) => l(a(g), {
                          key: n,
                          label: n,
                          value: n
                        }, null, 8, ["label", "value"])), 64))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "format",
                  label: "格式",
                  width: "120"
                }, {
                  default: t(({ row: e }) => [
                    l(a(v), {
                      modelValue: e.format,
                      "onUpdate:modelValue": (n) => e.format = n,
                      size: "mini",
                      style: { width: "100%" },
                      clearable: ""
                    }, {
                      default: t(() => [
                        (u(!0), I(S, null, h(a(M), (n) => (u(), A(a(g), {
                          key: n,
                          label: n,
                          value: n
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "length",
                  label: "长度"
                }, {
                  default: t(({ row: e }) => [
                    l(s, {
                      type: "number",
                      size: "mini",
                      style: { width: "100%" },
                      modelValue: e.length,
                      "onUpdate:modelValue": (n) => e.length = n
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "precision",
                  label: "精确"
                }, {
                  default: t(({ row: e }) => [
                    l(s, {
                      type: "number",
                      size: "mini",
                      style: { width: "100%" },
                      modelValue: e.precision,
                      "onUpdate:modelValue": (n) => e.precision = n
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "currency",
                  label: "当前的"
                }, {
                  default: t(({ row: e }) => [
                    l(s, {
                      size: "mini",
                      style: { width: "100%" },
                      modelValue: e.currency,
                      "onUpdate:modelValue": (n) => e.currency = n
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "decimal",
                  label: "10进制的",
                  width: "120"
                }, {
                  default: t(({ row: e }) => [
                    l(s, {
                      size: "mini",
                      style: { width: "100%" },
                      modelValue: e.decimal,
                      "onUpdate:modelValue": (n) => e.decimal = n
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "group",
                  label: "组"
                }, {
                  default: t(({ row: e }) => [
                    l(s, {
                      size: "mini",
                      style: { width: "100%" },
                      modelValue: e.group,
                      "onUpdate:modelValue": (n) => e.group = n
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "nullif",
                  label: "值",
                  width: "180"
                }, {
                  default: t(({ row: e }) => [
                    l(s, {
                      size: "mini",
                      style: { width: "100%" },
                      modelValue: e.nullif,
                      "onUpdate:modelValue": (n) => e.nullif = n
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  prop: "set_empty_string",
                  label: "设为空串?",
                  width: "120"
                }, {
                  default: t(({ row: e }) => [
                    l(a(v), {
                      modelValue: e.set_empty_string,
                      "onUpdate:modelValue": (n) => e.set_empty_string = n,
                      size: "mini",
                      style: { width: "100%" },
                      clearable: ""
                    }, {
                      default: t(() => [
                        (u(), I(S, null, h(p, (n) => l(a(g), {
                          key: n.key,
                          label: n.label,
                          value: n.key
                        }, null, 8, ["label", "value"])), 64))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(a(o), {
                  label: "操作",
                  width: "100",
                  fixed: "right"
                }, {
                  default: t(({ row: e, $index: n }) => [
                    l(a(b), {
                      size: "mini",
                      type: "text",
                      onClick: (K) => H(n)
                    }, {
                      default: t(() => [
                        x("删除")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])
          ]),
          _: 1
        }, 8, ["model"])
      ]);
    };
  }
}), q = () => ({ name: "RowGenerator", step: {
  name: "生成记录",
  type: "RowGenerator",
  distribute: "Y",
  copies: "1",
  partitioning: {
    method: "none"
  },
  fields: {
    field: []
  },
  limit: 10,
  never_ending: "N",
  interval_in_ms: "5000",
  row_time_field: "now",
  last_time_field: "FiveSecondsAgo",
  remotesteps: {
    input: "",
    output: ""
  },
  GUI: {
    xloc: 200,
    yloc: 100,
    draw: "Y"
  }
}, markup: {
  ports: { items: [{ id: "out", group: "right" }] }
}, tabs: [
  {
    default: !0,
    type: "form",
    label: "属性配置",
    column: [
      { prop: "limit", tag: y, label: "限制" },
      { prop: "never_ending", label: "从不停止生成行", tag: L, inlinePrompt: !0, activeValue: "Y", inactiveValue: "N", activeText: "Y", inactiveText: "N" },
      { prop: "interval_in_ms", tag: y, label: "间隔毫秒", ":disabled": "formData['never_ending'] == 'N'", ":required": "formData['never_ending'] == 'Y'" },
      { prop: "row_time_field", tag: y, label: "当前时间字段名", ":disabled": "formData['never_ending'] == 'N'", ":required": "formData['never_ending'] == 'Y'" },
      { prop: "last_time_field", tag: y, label: "前一行时间字段名", ":disabled": "formData['never_ending'] == 'N'", ":required": "formData['never_ending'] == 'Y'" }
    ]
  },
  {
    type: "form",
    label: "高级配置",
    column: [
      {
        tag: J,
        ":formData": "formData",
        ":preview": "() => graphEvents.customEvent('datapreview',cell)"
      }
    ]
  }
], open: (c, f) => {
  var p;
  const m = (p = f.form) == null ? void 0 : p.getCellFormData(c);
  m && z(m, "$sql", m.sql);
}, metadata: {} });
export {
  q as default
};
