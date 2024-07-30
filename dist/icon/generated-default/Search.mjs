import { jsxs as i, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const h = ({
  title: e = "Search",
  titleId: r = "CDS-SearchIcon",
  size: l = 20,
  color: a = "#363738",
  ...c
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: d,
    "aria-labelledby": r,
    ...c,
    children: [
      e ? /* @__PURE__ */ o("title", { id: r, children: e }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06zM13 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), s = n(h);
export {
  s as Search
};
//# sourceMappingURL=Search.mjs.map
