import { jsxs as i, jsx as r } from "@emotion/react/jsx-runtime";
import { forwardRef as h } from "react";
const p = ({
  title: l = "ChevronUpSmall",
  titleId: o = "CDS-ChevronUpSmallIcon",
  size: e = 20,
  color: a = "#363738",
  ...n
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: d,
    "aria-labelledby": o,
    ...n,
    children: [
      l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.675 12.76a.77.77 0 0 1-1.117 0L9.907 8.975 6.254 12.76a.77.77 0 0 1-1.117 0 .84.84 0 0 1 0-1.157L9.348 7.24a.77.77 0 0 1 1.116 0l4.211 4.363a.84.84 0 0 1 0 1.157",
          clipRule: "evenodd"
        }
      )
    ]
  }
), v = h(p);
export {
  v as ChevronUpSmall
};
//# sourceMappingURL=ChevronUpSmall.mjs.map
