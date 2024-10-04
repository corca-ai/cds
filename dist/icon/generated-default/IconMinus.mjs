import { jsxs as c, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as s } from "react";
const a = ({
  title: n = "IconMinus",
  titleId: o = "CDS-IconMinusIcon",
  size: i = 20,
  color: e = "#363738",
  ...r
}, d) => /* @__PURE__ */ c(
  "svg",
  {
    width: i,
    height: i,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: d,
    "aria-labelledby": o,
    ...r,
    children: [
      n ? /* @__PURE__ */ l("title", { id: o, children: n }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "#4A4A4A",
          fillRule: "evenodd",
          d: "M6 10a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 10",
          clipRule: "evenodd"
        }
      )
    ]
  }
), u = s(a);
export {
  u as IconMinus
};
//# sourceMappingURL=IconMinus.mjs.map
