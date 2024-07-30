import { jsxs as i, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as h } from "react";
const f = ({
  title: l = "ChevronDownSmall",
  titleId: o = "CDS-ChevronDownSmallIcon",
  size: e = 20,
  color: r = "#363738",
  ...a
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: d,
    "aria-labelledby": o,
    ...a,
    children: [
      l ? /* @__PURE__ */ n("title", { id: o, children: l }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5.137 7.24a.77.77 0 0 1 1.117 0l3.652 3.785L13.56 7.24a.77.77 0 0 1 1.116 0 .84.84 0 0 1 0 1.157l-4.21 4.363a.77.77 0 0 1-1.117 0l-4.21-4.363a.84.84 0 0 1 0-1.157",
          clipRule: "evenodd"
        }
      )
    ]
  }
), w = h(f);
export {
  w as ChevronDownSmall
};
//# sourceMappingURL=ChevronDownSmall.mjs.map
