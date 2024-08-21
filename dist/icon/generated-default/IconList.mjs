import { jsxs as h, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as t } from "react";
const c = ({
  title: l = "IconList",
  titleId: r = "CDS-IconListIcon",
  size: a = 20,
  color: e = "#363738",
  ...i
}, n) => /* @__PURE__ */ h(
  "svg",
  {
    width: a,
    height: a,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: n,
    "aria-labelledby": r,
    ...i,
    children: [
      l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        }
      ),
      /* @__PURE__ */ o(
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
), f = t(c);
export {
  f as IconList
};
//# sourceMappingURL=IconList.mjs.map
