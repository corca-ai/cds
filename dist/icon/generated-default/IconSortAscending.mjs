import { jsxs as s, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as c } from "react";
const a = ({
  title: n = "IconSortAscending",
  titleId: r = "CDS-IconSortAscendingIcon",
  size: e = 20,
  color: t = "#363738",
  ...i
}, d) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: t,
    ref: d,
    "aria-labelledby": r,
    ...i,
    children: [
      n ? /* @__PURE__ */ o("title", { id: r, children: n }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 7.5 6.564 5m0 0 2.563 2.5M6.564 5v10"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "#E4E5E9",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16 12.5 13.436 15m0 0-2.563-2.5m2.563 2.5V5"
        }
      )
    ]
  }
), k = c(a);
export {
  k as IconSortAscending
};
//# sourceMappingURL=IconSortAscending.mjs.map
