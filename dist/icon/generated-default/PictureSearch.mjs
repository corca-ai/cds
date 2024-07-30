import { jsxs as a, jsx as c } from "@emotion/react/jsx-runtime";
import { forwardRef as h } from "react";
const d = ({
  title: r = "PictureSearch",
  titleId: e = "CDS-PictureSearchIcon",
  size: o = 20,
  color: i = "#363738",
  ...t
}, n) => /* @__PURE__ */ a(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: i,
    ref: n,
    "aria-labelledby": e,
    ...t,
    children: [
      r ? /* @__PURE__ */ c("title", { id: e, children: r }) : null,
      /* @__PURE__ */ c(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.5 6.667h.008M9.583 17.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5h10A2.5 2.5 0 0 1 17.5 5v4.583m-.666 7.25 1.5 1.5m-15.834-5 4.167-4.166c.773-.745 1.726-.745 2.5 0l1.666 1.666M12.5 15a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
        }
      )
    ]
  }
), u = h(d);
export {
  u as PictureSearch
};
//# sourceMappingURL=PictureSearch.mjs.map
