import { jsxs as f, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const i = ({
  title: r = "IconArrowLeftLarge",
  titleId: o = "CDS-IconArrowLeftLargeIcon",
  size: e = 20,
  color: a = "#363738",
  ...n
}, c) => /* @__PURE__ */ f(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    color: a,
    ref: c,
    "aria-labelledby": o,
    ...n,
    children: [
      r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M20 12a.936.936 0 0 1-.923.947H7.152l3.347 3.436c.36.37.36.97 0 1.34a.906.906 0 0 1-1.305 0L4.27 12.67A.96.96 0 0 1 4 12a.96.96 0 0 1 .27-.67l4.924-5.053a.906.906 0 0 1 1.305 0c.36.37.36.97 0 1.34l-3.347 3.436h11.925c.51 0 .923.424.923.947",
          clipRule: "evenodd"
        }
      )
    ]
  }
), w = d(i);
export {
  w as IconArrowLeftLarge
};
//# sourceMappingURL=IconArrowLeftLarge.mjs.map
