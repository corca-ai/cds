import { jsxs as h, jsx as r } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const f = ({
  title: l = "ChevronRighSmall",
  titleId: o = "CDS-ChevronRighSmallIcon",
  size: e = 20,
  color: a = "#363738",
  ...i
}, n) => /* @__PURE__ */ h(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: n,
    "aria-labelledby": o,
    ...i,
    children: [
      l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7.72 14.53a.75.75 0 0 1 0-1.06L11.19 10 7.72 6.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), R = d(f);
export {
  R as ChevronRighSmall
};
//# sourceMappingURL=ChevronRighSmall.mjs.map
