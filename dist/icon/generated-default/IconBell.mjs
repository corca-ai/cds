import { jsxs as c, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as t } from "react";
const a = ({
  title: o = "IconBell",
  titleId: e = "CDS-IconBellIcon",
  size: r = 20,
  color: l = "#363738",
  ...i
}, s) => /* @__PURE__ */ c(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 18 18",
    color: l,
    ref: s,
    "aria-labelledby": e,
    ...i,
    children: [
      o ? /* @__PURE__ */ n("title", { id: e, children: o }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.75 12.75v.75a2.25 2.25 0 0 0 4.5 0v-.75m-3.75-9a1.5 1.5 0 1 1 3 0 5.25 5.25 0 0 1 2.124 1.834c.529.793.832 2.464.876 3.416s.9 3.75.9 3.75H3.6s.855-2.798.9-3.75.348-2.623.876-3.416A5.25 5.25 0 0 1 7.5 3.75"
        }
      )
    ]
  }
), f = t(a);
export {
  f as IconBell
};
//# sourceMappingURL=IconBell.mjs.map
