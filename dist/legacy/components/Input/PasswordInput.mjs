import { jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as P, useMemo as S, useState as x } from "react";
import b from "@emotion/styled";
import { InputContainer as v, BaseInput as C } from "./InputContainer.mjs";
import i from "../Icon/index.mjs";
import { color as a } from "../styles.mjs";
const q = P(
  ({
    label: u,
    placeholder: c,
    description: m,
    name: p,
    value: w,
    error: e,
    disabled: r,
    onChange: d,
    defaultValue: l,
    required: f = !1,
    width: h,
    tooltip: g,
    ...s
  }, y) => {
    const n = S(() => ({
      color: r ? a["grey-50"] : a["grey-60"],
      size: 18
    }), [r]), [t, I] = x(!1);
    return /* @__PURE__ */ o(
      v,
      {
        label: u,
        description: m,
        required: f,
        error: e,
        width: h,
        tooltip: g,
        rightSection: /* @__PURE__ */ o(E, { "aria-hidden": "true", onMouseDown: () => {
          I(!t);
        }, children: t ? /* @__PURE__ */ o(i.Eye, { ...n }) : /* @__PURE__ */ o(i.EyeClosed, { ...n }) }),
        ...s,
        children: /* @__PURE__ */ o(
          C,
          {
            name: p,
            value: w,
            placeholder: c,
            onChange: d,
            defaultValue: l,
            disabled: r,
            error: e,
            type: t ? "text" : "password",
            ...s,
            ref: y
          }
        )
      }
    );
  }
), E = b.button`
  margin: auto;
  background: inherit;
  border: none;
  overflow: visible;
  height: 100%;
  cursor: pointer;
  display: flex;
`;
export {
  q as PasswordInput
};
//# sourceMappingURL=PasswordInput.mjs.map
