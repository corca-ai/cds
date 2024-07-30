import { jsxs as i, jsx as t } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const d = ({
  title: o = "DotsHor",
  titleId: r = "CDS-DotsHorIcon",
  size: l = 20,
  color: a = "#363738",
  ...s
}, e) => /* @__PURE__ */ i(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: e,
    "aria-labelledby": r,
    ...s,
    children: [
      o ? /* @__PURE__ */ t("title", { id: r, children: o }) : null,
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        }
      )
    ]
  }
), h = n(d);
export {
  h as DotsHor
};
//# sourceMappingURL=DotsHor.mjs.map
