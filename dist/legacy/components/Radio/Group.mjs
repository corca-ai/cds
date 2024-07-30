import { jsx as r } from "@emotion/react/jsx-runtime";
import s from "@emotion/styled";
import { RadioItem as m } from "./RadioItem.mjs";
const f = s.fieldset`
  // reset fieldset css
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: ${({ direction: l }) => l};
  gap: ${({ gap: l }) => l}px;
`;
function u({
  options: l,
  selectedValue: d,
  onSelect: a,
  direction: t = "row",
  gap: i = 12
}) {
  return /* @__PURE__ */ r(f, { direction: t, gap: i, children: l.map((e, o) => /* @__PURE__ */ r(
    m,
    {
      label: e.label,
      value: e.value,
      disabled: e.disabled,
      selected: e.value === d,
      onSelect: () => {
        a(e.value);
      },
      tooltip: e.tooltip
    },
    o
  )) });
}
export {
  u as RadioGroup
};
//# sourceMappingURL=Group.mjs.map
