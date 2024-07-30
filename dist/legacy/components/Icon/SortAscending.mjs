import { jsxs as n, jsx as r } from "@emotion/react/jsx-runtime";
import { color as t } from "../styles.mjs";
function d({ color: e = t["grey-80"], size: o = 20 }) {
  return /* @__PURE__ */ n(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M4.09375 7.5L6.65739 5M6.65739 5L9.22102 7.5M6.65739 5V15",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M16.0938 12.5L13.5301 15M13.5301 15L10.9665 12.5M13.5301 15L13.5301 5",
            stroke: t["grey-30"],
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
export {
  d as SortAscending
};
//# sourceMappingURL=SortAscending.mjs.map
