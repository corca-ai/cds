import { jsxs as i, jsx as t } from "@emotion/react/jsx-runtime";
import { keyframes as p } from "@emotion/react";
import { useId as a } from "react";
import l from "@emotion/styled";
import { color as m } from "../styles.mjs";
const d = { s: 20, m: 25, l: 30 };
function S({ color: o = m["main-black"], size: n = "m", speed: s = 1 }) {
  const r = d[n], e = a();
  return /* @__PURE__ */ i(
    f,
    {
      speed: s,
      xmlns: "http://www.w3.org/2000/svg",
      width: r,
      height: r,
      viewBox: "0 0 20 20",
      fill: "none",
      children: [
        /* @__PURE__ */ t(
          "ellipse",
          {
            cx: "9.99946",
            cy: "10.0004",
            rx: "7.31001",
            ry: "7.31001",
            stroke: o,
            strokeOpacity: "0.25",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            d: "M9.94939 2.69062C11.8881 2.6772 13.7527 3.43447 15.133 4.79584C16.5134 6.1572 17.2964 8.01116 17.3098 9.94985",
            stroke: `url(#${e})`,
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ i(
          "linearGradient",
          {
            id: e,
            x1: "16.3108",
            y1: "13.6897",
            x2: "3.68922",
            y2: "6.31124",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ t("stop", { stopColor: o }),
              /* @__PURE__ */ t("stop", { offset: "0.723223", stopColor: o, stopOpacity: "0.01" }),
              /* @__PURE__ */ t("stop", { offset: "1", stopColor: o, stopOpacity: "0" })
            ]
          }
        ) })
      ]
    }
  );
}
const c = p`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`, f = l.svg`
  animation: ${c} ${({ speed: o }) => o}s linear infinite;
`;
export {
  S as Spinner,
  d as SpinnerSizeMap
};
//# sourceMappingURL=index.mjs.map
