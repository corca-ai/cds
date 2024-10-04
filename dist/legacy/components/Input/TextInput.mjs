import { jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as l } from "react";
import { InputContainer as h, BaseInput as j } from "./InputContainer.mjs";
const R = l(
  ({
    label: o,
    placeholder: e,
    description: f,
    name: m,
    value: i,
    error: t,
    disabled: p,
    onChange: a,
    defaultValue: u,
    required: s = !1,
    width: x,
    leftSection: I,
    rightSection: c,
    ...r
  }, d) => /* @__PURE__ */ n(
    h,
    {
      label: o,
      description: f,
      required: s,
      error: t,
      width: x,
      leftSection: I,
      rightSection: c,
      ...r,
      children: /* @__PURE__ */ n(
        j,
        {
          name: m,
          value: i,
          placeholder: e,
          onChange: a,
          defaultValue: u,
          disabled: p,
          error: t,
          ref: d,
          ...r
        }
      )
    }
  )
);
export {
  R as TextInput
};
//# sourceMappingURL=TextInput.mjs.map
