import { jsxs as e, jsx as t } from "@emotion/react/jsx-runtime";
import { color as n } from "../styles.mjs";
function C({ color: o = n["grey-80"], size: r = 20 }) {
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
            d: "M8.42708 10C8.42708 10.442 8.60268 10.866 8.91524 11.1785C9.2278 11.4911 9.65172 11.6667 10.0937 11.6667C10.5358 11.6667 10.9597 11.4911 11.2723 11.1785C11.5848 10.866 11.7604 10.442 11.7604 10C11.7604 9.55797 11.5848 9.13405 11.2723 8.82149C10.9597 8.50893 10.5358 8.33333 10.0937 8.33333C9.65172 8.33333 9.2278 8.50893 8.91524 8.82149C8.60268 9.13405 8.42708 9.55797 8.42708 10Z",
            stroke: o,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            d: "M17.5937 10C15.5937 13.3333 13.0937 15 10.0937 15C7.09375 15 4.59375 13.3333 2.59375 10C4.59375 6.66667 7.09375 5 10.0937 5C13.0937 5 15.5937 6.66667 17.5937 10Z",
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
  C as Eye
};
//# sourceMappingURL=Eye.mjs.map
