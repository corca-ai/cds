import { jsxs as c, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const i = ({
  title: o = "IconLayout",
  titleId: l = "CDS-IconLayoutIcon",
  size: e = 20,
  color: r = "#363738",
  ...a
}, h) => /* @__PURE__ */ c(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: h,
    "aria-labelledby": l,
    ...a,
    children: [
      o ? /* @__PURE__ */ n("title", { id: l, children: o }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h5.5A3.75 3.75 0 0 1 16 6.75v5.5A3.75 3.75 0 0 1 12.25 16h-5.5A3.75 3.75 0 0 1 3 12.25zM6.75 4.5A2.25 2.25 0 0 0 4.5 6.75v.5h10v-.5a2.25 2.25 0 0 0-2.25-2.25zm3.75 4.25h-6v3.5a2.25 2.25 0 0 0 2.25 2.25h3.75zM12 14.5V8.75h2.5v3.5a2.25 2.25 0 0 1-2.25 2.25z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), f = d(i);
export {
  f as IconLayout
};
//# sourceMappingURL=IconLayout.mjs.map
