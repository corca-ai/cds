import { jsxs as i, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const h = ({
  title: e = "CheckLarge",
  titleId: l = "CDS-CheckLargeIcon",
  size: r = 20,
  color: a = "#363738",
  ...c
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: d,
    "aria-labelledby": l,
    ...c,
    children: [
      e ? /* @__PURE__ */ o("title", { id: l, children: e }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), g = n(h);
export {
  g as CheckLarge
};
//# sourceMappingURL=CheckLarge.mjs.map
