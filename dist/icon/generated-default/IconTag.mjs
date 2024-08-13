import { jsxs as d, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const f = ({
  title: o = "IconTag",
  titleId: a = "CDS-IconTagIcon",
  size: r = 20,
  color: e = "#363738",
  ...n
}, c) => /* @__PURE__ */ d(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: c,
    "aria-labelledby": a,
    ...n,
    children: [
      o ? /* @__PURE__ */ l("title", { id: a, children: o }) : null,
      /* @__PURE__ */ l("path", { fill: "currentColor", d: "M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11.276 3.5a3.75 3.75 0 0 0-2.702 1.149L4.321 9.066a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341V6.75a3.25 3.25 0 0 0-3.25-3.25zM9.655 5.69a2.25 2.25 0 0 1 1.62-.69h1.975c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26L9.717 14.77a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.017-1.75z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), g = i(f);
export {
  g as IconTag
};
//# sourceMappingURL=IconTag.mjs.map
