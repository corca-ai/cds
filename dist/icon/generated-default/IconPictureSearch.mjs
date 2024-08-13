import { jsxs as a, jsx as c } from "@emotion/react/jsx-runtime";
import { forwardRef as h } from "react";
const d = ({
  title: r = "IconPictureSearch",
  titleId: o = "CDS-IconPictureSearchIcon",
  size: e = 20,
  color: n = "#363738",
  ...i
}, t) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: n,
    ref: t,
    "aria-labelledby": o,
    ...i,
    children: [
      r ? /* @__PURE__ */ c("title", { id: o, children: r }) : null,
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
  u as IconPictureSearch
};
//# sourceMappingURL=IconPictureSearch.mjs.map
