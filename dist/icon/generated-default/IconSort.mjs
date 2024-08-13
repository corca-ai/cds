import { jsxs as d, jsx as t } from "@emotion/react/jsx-runtime";
import { forwardRef as s } from "react";
const a = ({
  title: o = "IconSort",
  titleId: r = "CDS-IconSortIcon",
  size: n = 20,
  color: e = "#363738",
  ...i
}, c) => /* @__PURE__ */ d(
  "svg",
  {
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: c,
    "aria-labelledby": r,
    ...i,
    children: [
      o ? /* @__PURE__ */ t("title", { id: r, children: o }) : null,
      /* @__PURE__ */ t(
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
), m = s(a);
export {
  m as IconSort
};
//# sourceMappingURL=IconSort.mjs.map
