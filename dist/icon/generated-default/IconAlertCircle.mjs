import { jsxs as a, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as t } from "react";
const d = ({
  title: r = "IconAlertCircle",
  titleId: e = "CDS-IconAlertCircleIcon",
  size: o = 20,
  color: c = "#363738",
  ...i
}, n) => /* @__PURE__ */ a(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: n,
    "aria-labelledby": e,
    ...i,
    children: [
      r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 6M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
), C = t(d);
export {
  C as IconAlertCircle
};
//# sourceMappingURL=IconAlertCircle.mjs.map