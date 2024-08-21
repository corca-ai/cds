import { jsxs as s, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as e } from "react";
const i = ({
  title: o = "IconDotsHor",
  titleId: r = "CDS-IconDotsHorIcon",
  size: n = 20,
  color: t = "#363738",
  ...a
}, c) => /* @__PURE__ */ s(
  "svg",
  {
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 20 20",
    color: t,
    ref: c,
    "aria-labelledby": r,
    ...a,
    children: [
      o ? /* @__PURE__ */ l("title", { id: r, children: o }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        }
      )
    ]
  }
), h = e(i);
export {
  h as IconDotsHor
};
//# sourceMappingURL=IconDotsHor.mjs.map
