import { jsx as r } from "@emotion/react/jsx-runtime";
import i from "../Icon/index.mjs";
import { NumberInput as c } from "./NumberInput.mjs";
import { color as t } from "../styles.mjs";
function d(o) {
  const { language: n, ...e } = o;
  return /* @__PURE__ */ r(c, { leftSection: /* @__PURE__ */ r(u, { language: n }), ...e });
}
function u({ language: o }) {
  switch (o) {
    case "ko":
      return /* @__PURE__ */ r(i.CurrencyWon, {});
    case "en":
      return /* @__PURE__ */ r(s, {});
    case "vi":
      return /* @__PURE__ */ r(l, {});
    default:
      return null;
  }
}
function s({ color: o = t["grey-80"], size: n = 20 }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      fill: "none",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ r(
        "path",
        {
          stroke: o,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M13.733 6.4a2.556 2.556 0 00-1.015-.9 2.907 2.907 0 00-1.385-.3H8.667c-.708 0-1.386.253-1.886.703C6.281 6.353 6 6.963 6 7.6c0 .636.28 1.247.781 1.697.5.45 1.178.703 1.886.703h2.666c.708 0 1.386.253 1.886.703.5.45.781 1.06.781 1.697 0 .636-.281 1.247-.781 1.697-.5.45-1.178.703-1.886.703H8.667a2.908 2.908 0 01-1.385-.3 2.555 2.555 0 01-1.015-.9M10 4v12"
        }
      )
    }
  );
}
function l({ color: o = t["grey-80"], size: n = 20 }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      fill: "none",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M5 16H14.6M13 13.6V4M13.8 4.8H10.6M6.6 10.4C6.6 11.2487 6.93714 12.0626 7.53726 12.6627C8.13737 13.2629 8.95131 13.6 9.8 13.6C10.6487 13.6 11.4626 13.2629 12.0627 12.6627C12.6629 12.0626 13 11.2487 13 10.4C13 9.55131 12.6629 8.73737 12.0627 8.13726C11.4626 7.53714 10.6487 7.2 9.8 7.2C8.95131 7.2 8.13737 7.53714 7.53726 8.13726C6.93714 8.73737 6.6 9.55131 6.6 10.4Z",
          stroke: o,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
export {
  d as CurrencyInput
};
//# sourceMappingURL=CurrencyInput.mjs.map
