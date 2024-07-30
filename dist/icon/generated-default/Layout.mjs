import { jsxs as i, jsx as r } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const t = ({
  title: o = "Layout",
  titleId: l = "CDS-LayoutIcon",
  size: e = 20,
  color: a = "#363738",
  ...h
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: d,
    "aria-labelledby": l,
    ...h,
    children: [
      o ? /* @__PURE__ */ r("title", { id: l, children: o }) : null,
      /* @__PURE__ */ r(
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
), u = n(t);
export {
  u as Layout
};
//# sourceMappingURL=Layout.mjs.map
