import { jsx as o } from "@emotion/react/jsx-runtime";
import { useMemo as x } from "react";
import { InputContainer as C, BaseInput as P } from "./InputContainer.mjs";
import S from "../Icon/index.mjs";
import { color as e } from "../styles.mjs";
function M({
  label: n,
  placeholder: u,
  description: i,
  name: m,
  value: p,
  error: t,
  disabled: r,
  onChange: c,
  defaultValue: f,
  required: l = !1,
  width: s,
  tooltip: a,
  onClick: y,
  ...I
}) {
  const g = x(() => ({
    color: r ? e["grey-50"] : e["grey-60"],
    size: 20
  }), [r]);
  return /* @__PURE__ */ o(
    C,
    {
      cursorPointer: !0,
      onClick: y,
      label: n,
      description: i,
      required: l,
      error: t,
      width: s,
      tooltip: a,
      leftSection: /* @__PURE__ */ o(S.Calendar, { ...g }),
      ...I,
      children: /* @__PURE__ */ o(
        P,
        {
          cursorPointer: !0,
          name: m,
          value: p,
          placeholder: u,
          onChange: c,
          defaultValue: f,
          disabled: r,
          error: t,
          readOnly: !0
        }
      )
    }
  );
}
export {
  M as DateInput
};
//# sourceMappingURL=DateInput.mjs.map
