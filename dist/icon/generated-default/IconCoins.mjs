import { jsxs as t, jsx as s } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const l = ({
  title: o = "IconCoins",
  titleId: n = "CDS-IconCoinsIcon",
  size: r = 20,
  color: i = "#363738",
  ...c
}, e) => /* @__PURE__ */ t(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: i,
    ref: e,
    "aria-labelledby": n,
    ...c,
    children: [
      o ? /* @__PURE__ */ s("title", { id: n, children: o }) : null,
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c0 .796.632 1.559 1.757 2.121S8.41 9 10 9s3.117-.316 4.243-.879C15.368 7.56 16 6.796 16 6M4 6c0-.796.632-1.559 1.757-2.121S8.41 3 10 3s3.117.316 4.243.879C15.368 4.44 16 5.204 16 6M4 6v4m12-4v4M4 10c0 1.657 2.687 3 6 3s6-1.343 6-3M4 10v4c0 1.657 2.687 3 6 3s6-1.343 6-3v-4"
        }
      )
    ]
  }
), h = d(l);
export {
  h as IconCoins
};
//# sourceMappingURL=IconCoins.mjs.map
