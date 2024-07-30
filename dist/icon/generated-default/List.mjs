import { jsxs as t, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const n = ({
  title: o = "List",
  titleId: r = "CDS-ListIcon",
  size: a = 20,
  color: e = "#363738",
  ...i
}, h) => /* @__PURE__ */ t(
  "svg",
  {
    width: a,
    height: a,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: h,
    "aria-labelledby": r,
    ...i,
    children: [
      o ? /* @__PURE__ */ l("title", { id: r, children: o }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6.5 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 5M6.5 10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 10M6.5 15a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 15",
          clipRule: "evenodd"
        }
      )
    ]
  }
), c = d(n);
export {
  c as List
};
//# sourceMappingURL=List.mjs.map
