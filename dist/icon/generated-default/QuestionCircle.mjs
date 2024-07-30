import { jsxs as c, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as t } from "react";
const a = ({
  title: l = "QuestionCircle",
  titleId: o = "CDS-QuestionCircleIcon",
  size: r = 20,
  color: i = "#363738",
  ...n
}, d) => /* @__PURE__ */ c(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: i,
    ref: d,
    "aria-labelledby": o,
    ...n,
    children: [
      l ? /* @__PURE__ */ e("title", { id: o, children: l }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.6.6 0 0 0-.226.147.2.2 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586A1.25 1.25 0 0 0 10 7.25",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11",
          clipRule: "evenodd"
        }
      )
    ]
  }
), s = t(a);
export {
  s as QuestionCircle
};
//# sourceMappingURL=QuestionCircle.mjs.map
