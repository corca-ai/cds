import { jsxs as i, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as m } from "react";
const d = ({
  title: l = "CancleSmall",
  titleId: a = "CDS-CancleSmallIcon",
  size: r = 20,
  color: e = "#363738",
  ...n
}, c) => /* @__PURE__ */ i(
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
      l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06L11.06 10l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 8.94 7.28 6.22a.75.75 0 0 0-1.06 1.06L8.94 10l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 11.06z"
        }
      )
    ]
  }
), h = m(d);
export {
  h as CancleSmall
};
//# sourceMappingURL=CancleSmall.mjs.map
