import { jsxs as i, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const f = ({
  title: o = "Clock",
  titleId: r = "CDS-ClockIcon",
  size: e = 20,
  color: c = "#363738",
  ...a
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: d,
    "aria-labelledby": r,
    ...a,
    children: [
      o ? /* @__PURE__ */ l("title", { id: r, children: o }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M10.75 6a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2 2a.75.75 0 1 0 1.06-1.06l-1.78-1.78z"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), C = n(f);
export {
  C as Clock
};
//# sourceMappingURL=Clock.mjs.map
