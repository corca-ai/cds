import { jsxs as d, jsx as r } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const h = ({
  title: e = "IconCheckLarge",
  titleId: o = "CDS-IconCheckLargeIcon",
  size: l = 20,
  color: a = "#363738",
  ...c
}, n) => /* @__PURE__ */ d(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: n,
    "aria-labelledby": o,
    ...c,
    children: [
      e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
      /* @__PURE__ */ r(
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
), g = i(h);
export {
  g as IconCheckLarge
};
//# sourceMappingURL=IconCheckLarge.mjs.map
