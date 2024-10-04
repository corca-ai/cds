import { jsxs as c, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as s } from "react";
const i = ({
  title: o = "IconDotsVert",
  titleId: r = "CDS-IconDotsVertIcon",
  size: t = 20,
  color: n = "#363738",
  ...l
}, a) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    color: n,
    ref: a,
    "aria-labelledby": r,
    ...l,
    children: [
      o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          d: "M11.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        }
      )
    ]
  }
), h = s(i);
export {
  h as IconDotsVert
};
//# sourceMappingURL=IconDotsVert.mjs.map
