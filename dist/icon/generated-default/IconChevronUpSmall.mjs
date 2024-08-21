import { jsxs as d, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const h = ({
  title: l = "IconChevronUpSmall",
  titleId: o = "CDS-IconChevronUpSmallIcon",
  size: e = 20,
  color: r = "#363738",
  ...a
}, c) => /* @__PURE__ */ d(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: c,
    "aria-labelledby": o,
    ...a,
    children: [
      l ? /* @__PURE__ */ n("title", { id: o, children: l }) : null,
      /* @__PURE__ */ n(
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
), m = i(h);
export {
  m as IconChevronUpSmall
};
//# sourceMappingURL=IconChevronUpSmall.mjs.map
