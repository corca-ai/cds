import { jsxs as t, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as c } from "react";
const h = ({
  title: r = "IconFilter",
  titleId: o = "CDS-IconFilterIcon",
  size: l = 20,
  color: e = "#363738",
  ...i
}, n) => /* @__PURE__ */ t(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: n,
    "aria-labelledby": o,
    ...i,
    children: [
      r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          d: "M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"
        }
      )
    ]
  }
), s = c(h);
export {
  s as IconFilter
};
//# sourceMappingURL=IconFilter.mjs.map
