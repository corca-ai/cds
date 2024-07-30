import { jsxs as i, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const h = ({
  title: l = "CheckSmall",
  titleId: e = "CDS-CheckSmallIcon",
  size: o = 20,
  color: r = "#363738",
  ...c
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: d,
    "aria-labelledby": e,
    ...c,
    children: [
      l ? /* @__PURE__ */ a("title", { id: e, children: l }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.03 7.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06L9 11.19l3.97-3.97a.75.75 0 0 1 1.06 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), t = n(h);
export {
  t as CheckSmall
};
//# sourceMappingURL=CheckSmall.mjs.map
