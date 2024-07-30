import { jsxs as i, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const d = ({
  title: r = "DotsVert",
  titleId: o = "CDS-DotsVertIcon",
  size: t = 20,
  color: l = "#363738",
  ...a
}, s) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    color: l,
    ref: s,
    "aria-labelledby": o,
    ...a,
    children: [
      r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          d: "M11.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        }
      )
    ]
  }
), h = n(d);
export {
  h as DotsVert
};
//# sourceMappingURL=DotsVert.mjs.map
