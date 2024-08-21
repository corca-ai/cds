import { jsx as o } from "@emotion/react/jsx-runtime";
import { TextInput as m } from "./TextInput.mjs";
const p = (r) => r !== "" && i(Number(r)) ? Math.round(Number(r)) : null;
function a({ value: r, onChange: e, onBlur: n, ...u }) {
  return /* @__PURE__ */ o(
    m,
    {
      type: "number",
      value: r ?? "",
      onChange: (t) => e(p(t.currentTarget.value)),
      onWheel: (t) => {
        t.currentTarget.blur(), t.stopPropagation();
      },
      onBlur: n,
      ...u
    }
  );
}
function i(r) {
  return typeof r == "number" && !isNaN(r);
}
export {
  a as NumberInput
};
//# sourceMappingURL=NumberInput.mjs.map
