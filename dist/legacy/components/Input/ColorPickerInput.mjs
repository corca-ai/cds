import { jsx as r } from "@emotion/react/jsx-runtime";
import { InputContainer as P, BaseInput as a } from "./InputContainer.mjs";
import { ColorPicker as h } from "../ColorPicker/index.mjs";
function g({
  color: t,
  onChangeColor: i,
  value: n,
  onChange: e,
  label: p,
  description: u,
  required: c,
  width: m,
  name: f,
  error: o,
  placeholder: l,
  defaultValue: s,
  disabled: C,
  ...I
}) {
  return /* @__PURE__ */ r(
    P,
    {
      cursorPointer: !0,
      label: p,
      description: u,
      required: c,
      error: o,
      width: m,
      rightSection: /* @__PURE__ */ r(h, { color: t, onChangeColor: i }),
      children: /* @__PURE__ */ r(
        a,
        {
          name: f,
          value: n,
          placeholder: l,
          onChange: e,
          defaultValue: s,
          disabled: C,
          error: o,
          ...I
        }
      )
    }
  );
}
export {
  g as ColorPickerInput
};
//# sourceMappingURL=ColorPickerInput.mjs.map
