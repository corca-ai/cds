import { jsxs as c, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as l } from "react";
const s = ({
  title: o = "IconCode",
  titleId: r = "CDS-IconCodeIcon",
  size: e = 20,
  color: d = "#363738",
  ...i
}, t) => /* @__PURE__ */ c(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: d,
    ref: t,
    "aria-labelledby": r,
    ...i,
    children: [
      o ? /* @__PURE__ */ n("title", { id: r, children: o }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.556 6.5 2 10l3.556 3.5m8.888-7L18 10l-3.556 3.5M11.778 3 8.222 17"
        }
      )
    ]
  }
), f = l(s);
export {
  f as IconCode
};
//# sourceMappingURL=IconCode.mjs.map
