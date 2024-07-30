import { jsxs as t, jsx as e } from "@emotion/react/jsx-runtime";
import { cloneElement as y } from "react";
import r from "@emotion/styled";
import m from "../Icon/index.mjs";
import { B7 as b, B5 as v, B3 as w } from "../Text/index.mjs";
import { Tooltip as I } from "../Tooltip/index.mjs";
import { color as i, typography as h } from "../styles.mjs";
import { css as C } from "@emotion/react";
function N({
  label: o,
  description: p,
  required: a = !1,
  error: n,
  children: s,
  width: g,
  tooltip: l,
  rightSection: c,
  leftSection: d,
  onClick: u,
  cursorPointer: x,
  ...$
}) {
  return /* @__PURE__ */ t(
    B,
    {
      width: g,
      onClick: u,
      ...x && { cursorPointer: x },
      ...$,
      children: [
        o && /* @__PURE__ */ t(A, { children: [
          /* @__PURE__ */ t(b, { children: [
            o,
            " ",
            a && /* @__PURE__ */ e(E, { children: " *" })
          ] }),
          l != null && /* @__PURE__ */ e(
            I,
            {
              content: l.content,
              direction: l.direction,
              withArrow: l.withArrow,
              children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(m.QuestionCircle, {}) })
            }
          )
        ] }),
        p && /* @__PURE__ */ e(k, { children: /* @__PURE__ */ e(v, { c: "grey-60", children: p }) }),
        c || d ? /* @__PURE__ */ t(Q, { children: [
          d && /* @__PURE__ */ e(D, { "aria-hidden": "true", children: d }),
          y(s, {
            isRightSection: !!c,
            isLeftSection: !!d
          }),
          c && /* @__PURE__ */ e(R, { "aria-hidden": "true", children: c })
        ] }) : s,
        n && /* @__PURE__ */ t(L, { children: [
          /* @__PURE__ */ e(W, { children: /* @__PURE__ */ e(m.AlertCircle, { color: i["error-30"] }) }),
          /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(w, { c: "error-30", children: n }) })
        ] })
      ]
    }
  );
}
const W = r.div`
  display: flex;
`, z = r.div`
  min-height: 20px;
`, B = r.div`
  width: ${({ width: o }) => o ? `${o}px` : "100%"};
  position: relative;
  cursor: ${({ cursorPointer: o }) => o ? "pointer" : "default"};
`, E = r.span`
  color: #ff5362;
`, k = r.div`
  display: flex;
  margin-bottom: 8px;
  line-height: 17px;
`, A = r.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  gap: 4px;
  height: 20px;
  align-items: center;
`, L = r.div`
  display: flex;
  align-items: flex-start;
  margin-top: 4px;
  gap: 4px;
`, j = ({
  error: o,
  isRightSection: p,
  isLeftSection: a,
  height: n,
  cursorPointer: s
}) => C`
  width: 100%;
  padding: ${a ? "6px 12px 6px 34px" : p ? "6px 36px 6px 12px" : "6px 12px"};
  outline: none;
  border: 1px solid ${i["grey-50"]};
  font-style: normal;
  font-weight: 500;
  font-size: ${h.size.xs}px;
  color: ${i["grey-80"]};
  background: ${i.white};
  border-radius: 8px;
  height: ${typeof n == "number" ? `${n}px` : n || "34px"};

  &:disabled {
    border: none;
    background: ${i["grey-20"]};
    color: ${i["grey-50"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${i["grey-50"]};
    font-size: ${h.size.xs}px;
  }

  ${o ? `
    border: 1px solid ${i["error-30"]};
    background: ${i["error-10"]};
  ` : `
    &:focus-visible,
    &:focus {
      border: 1px solid ${i["grey-80"]};
    }
  `}
  cursor: ${s ? "pointer" : "default"};
`, O = r.input`
  ${(o) => j(o)}
`, M = r.i`
  cursor: pointer;
  display: flex;
  align-items: center;
`, Q = r.div`
  position: relative;
`, f = r.div`
  position: absolute;
  height: fit-content;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
`, R = r(f)`
  right: 8px;
`, D = r(f)`
  padding-left: 10px;
`;
export {
  O as BaseInput,
  L as ErrorContainer,
  N as InputContainer,
  j as baseInputStyles
};
//# sourceMappingURL=InputContainer.mjs.map
