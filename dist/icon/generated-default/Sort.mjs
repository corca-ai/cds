import { jsxs as s, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as a } from "react";
const l = ({
  title: o = "Sort",
  titleId: r = "CDS-SortIcon",
  size: t = 20,
  color: n = "#363738",
  ...i
}, d) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    color: n,
    ref: d,
    "aria-labelledby": r,
    ...i,
    children: [
      o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          stroke: "#E4E5E9",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 7.5 6.474 5m0 0 2.473 2.5M6.474 5v10M16 12.5 13.526 15m0 0-2.473-2.5m2.473 2.5V5"
        }
      )
    ]
  }
), c = a(l);
export {
  c as Sort
};
//# sourceMappingURL=Sort.mjs.map
