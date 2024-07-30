import { jsxs as a, jsx as i } from "@emotion/react/jsx-runtime";
import { useMemo as h } from "react";
import t from "@emotion/styled";
import { B3 as g } from "../Text/index.mjs";
import { Tooltip as x } from "../Tooltip/index.mjs";
import { color as r } from "../styles.mjs";
const y = t.input`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  appearance: none;
  margin: 0;

  background-color: ${r.white};
  border: 1px solid ${r["grey-50"]};

  &:disabled {
    background-color: ${r["grey-20"]};
    border: 1px solid ${r["grey-40"]};
  }
  &:checked {
    border: 4px solid ${r["main-black"]};
  }
  &:checked:disabled {
    border: 4px solid ${r["grey-40"]};
  }
`, b = t.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, f = t.label`
  display: contents;
`;
function I({
  label: o,
  id: s,
  value: e,
  disabled: n,
  selected: m,
  onSelect: l,
  tooltip: d
}) {
  const c = h(() => s ?? `${o}:${e}`, [o, e]), p = /* @__PURE__ */ i(
    y,
    {
      type: "radio",
      value: e,
      checked: m,
      disabled: n,
      id: c,
      onChange: () => {
        l(e);
      }
    }
  );
  return /* @__PURE__ */ a(b, { children: [
    d ? /* @__PURE__ */ i(x, { withArrow: !0, direction: "top-start", content: d, children: p }) : p,
    o && /* @__PURE__ */ i(f, { htmlFor: c, children: /* @__PURE__ */ i(g, { c: n ? "grey-50" : "grey-80", children: o }) })
  ] });
}
export {
  I as RadioItem
};
//# sourceMappingURL=RadioItem.mjs.map
