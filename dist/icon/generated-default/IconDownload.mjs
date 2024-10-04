import { jsxs as a, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const t = ({
  title: o = "IconDownload",
  titleId: n = "CDS-IconDownloadIcon",
  size: r = 20,
  color: d = "#363738",
  ...c
}, l) => /* @__PURE__ */ a(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: d,
    ref: l,
    "aria-labelledby": n,
    ...c,
    children: [
      o ? /* @__PURE__ */ e("title", { id: n, children: o }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 13.39v1.528c0 .406.158.795.44 1.082.28.287.662.448 1.06.448h9c.398 0 .78-.161 1.06-.448.282-.287.44-.676.44-1.082V13.39M6.25 9.353 10 13.177m0 0 3.75-3.824M10 13.177V4"
        }
      )
    ]
  }
), w = i(t);
export {
  w as IconDownload
};
//# sourceMappingURL=IconDownload.mjs.map
