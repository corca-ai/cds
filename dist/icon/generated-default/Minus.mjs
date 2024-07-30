import { jsxs as s, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as a } from "react";
const f = ({
  title: i = "Minus",
  titleId: l = "CDS-MinusIcon",
  size: e = 20,
  color: o = "#363738",
  ...r
}, d) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: o,
    ref: d,
    "aria-labelledby": l,
    ...r,
    children: [
      i ? /* @__PURE__ */ n("title", { id: l, children: i }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          fill: "#4A4A4A",
          fillRule: "evenodd",
          d: "M6 10a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 10",
          clipRule: "evenodd"
        }
      )
    ]
  }
), c = a(f);
export {
  c as Minus
};
//# sourceMappingURL=Minus.mjs.map
