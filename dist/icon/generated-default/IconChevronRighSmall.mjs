import { jsxs as h, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as c } from "react";
const d = ({
  title: l = "IconChevronRighSmall",
  titleId: o = "CDS-IconChevronRighSmallIcon",
  size: e = 20,
  color: r = "#363738",
  ...a
}, i) => /* @__PURE__ */ h(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: i,
    "aria-labelledby": o,
    ...a,
    children: [
      l ? /* @__PURE__ */ n("title", { id: o, children: l }) : null,
      /* @__PURE__ */ n(
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
), v = c(d);
export {
  v as IconChevronRighSmall
};
//# sourceMappingURL=IconChevronRighSmall.mjs.map
