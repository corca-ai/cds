import { jsxs as h, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const s = ({
  title: o = "IconReceipt",
  titleId: e = "CDS-IconReceiptIcon",
  size: r = 20,
  color: c = "#363738",
  ...i
}, t) => /* @__PURE__ */ h(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: t,
    "aria-labelledby": e,
    ...i,
    children: [
      o ? /* @__PURE__ */ n("title", { id: e, children: o }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.429 6.889h5.142M7.43 10h5.142m-1.714 3.111h1.714M4 17V4.556c0-.413.18-.809.502-1.1A1.8 1.8 0 0 1 5.714 3h8.572c.454 0 .89.164 1.212.456.321.291.502.687.502 1.1V17H4"
        }
      )
    ]
  }
), a = d(s);
export {
  a as IconReceipt
};
//# sourceMappingURL=IconReceipt.mjs.map
