import { jsxs as d, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as l } from "react";
const s = ({
  title: o = "IconCurrencyWon",
  titleId: r = "CDS-IconCurrencyWonIcon",
  size: n = 20,
  color: c = "#363738",
  ...i
}, t) => /* @__PURE__ */ d(
  "svg",
  {
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: t,
    "aria-labelledby": r,
    ...i,
    children: [
      o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.667 5 2.696 10L10 6.67 12.571 15l2.762-10M16 8.34H4m12 2.91H4"
        }
      )
    ]
  }
), h = l(s);
export {
  h as IconCurrencyWon
};
//# sourceMappingURL=IconCurrencyWon.mjs.map
