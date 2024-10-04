import { jsxs as c, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const i = ({
  title: l = "IconChevronLeftSmall",
  titleId: o = "CDS-IconChevronLeftSmallIcon",
  size: e = 20,
  color: r = "#363738",
  ...a
}, f) => /* @__PURE__ */ c(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: f,
    "aria-labelledby": o,
    ...a,
    children: [
      l ? /* @__PURE__ */ n("title", { id: o, children: l }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11.78 5.47a.75.75 0 0 1 0 1.06L8.31 10l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), m = d(i);
export {
  m as IconChevronLeftSmall
};
//# sourceMappingURL=IconChevronLeftSmall.mjs.map
