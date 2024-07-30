import { jsxs as h, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const d = ({
  title: r = "Filter",
  titleId: l = "CDS-FilterIcon",
  size: a = 20,
  color: e = "#363738",
  ...i
}, t) => /* @__PURE__ */ h(
  "svg",
  {
    width: a,
    height: a,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: t,
    "aria-labelledby": l,
    ...i,
    children: [
      r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"
        }
      )
    ]
  }
), s = n(d);
export {
  s as Filter
};
//# sourceMappingURL=Filter.mjs.map
