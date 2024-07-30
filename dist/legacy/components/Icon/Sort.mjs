import { jsxs as e, jsx as t } from "@emotion/react/jsx-runtime";
import { color as n } from "../styles.mjs";
function d({ color: o = n["grey-30"], size: r = 20 }) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: r,
      height: r,
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: "M4.09375 7.5L6.56739 5M6.56739 5L9.04103 7.5M6.56739 5V15",
            stroke: o,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            d: "M16.0938 12.5L13.6201 15M13.6201 15L11.1465 12.5M13.6201 15L13.6201 5",
            stroke: o,
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
  d as Sort
};
//# sourceMappingURL=Sort.mjs.map
