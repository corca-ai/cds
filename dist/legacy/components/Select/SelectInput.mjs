import { jsxs as c, jsx as e } from "@emotion/react/jsx-runtime";
import n from "@emotion/styled";
import l from "../Icon/index.mjs";
import { B7 as $, B5 as y, B3 as b } from "../Text/index.mjs";
import { Tooltip as S } from "../Tooltip/index.mjs";
import { color as t, typography as u } from "../styles.mjs";
function G({
  label: r,
  description: o,
  required: i = !1,
  error: s,
  width: a,
  tooltip: x,
  dropdownOpened: g,
  searchable: p,
  onClick: h,
  showIcon: f = !0,
  leftIcon: d,
  ...m
}) {
  return /* @__PURE__ */ c(k, { width: a, onClick: h, children: [
    r && /* @__PURE__ */ e(v, { label: r, required: i, tooltip: x }),
    o && /* @__PURE__ */ e(I, { description: o }),
    /* @__PURE__ */ c(E, { children: [
      !!d && /* @__PURE__ */ e(R, { cursor: p ? "auto" : "text", children: d }),
      /* @__PURE__ */ e(
        A,
        {
          ...m,
          leftIconExist: !!d,
          cursor: p ? "auto" : "pointer",
          isRightSection: !0,
          readOnly: !p
        }
      ),
      f && /* @__PURE__ */ e(w, { dropdownOpened: g, searchable: p })
    ] }),
    s && /* @__PURE__ */ e(C, { error: s })
  ] });
}
function v({ label: r, required: o, tooltip: i }) {
  return /* @__PURE__ */ c(B, { children: [
    /* @__PURE__ */ c($, { children: [
      r,
      " ",
      o && /* @__PURE__ */ e(W, { children: " *" })
    ] }),
    i && /* @__PURE__ */ e(
      S,
      {
        content: i.content,
        direction: i.direction,
        withArrow: i.withArrow,
        children: /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(l.QuestionCircle, {}) })
      }
    )
  ] });
}
function w({
  dropdownOpened: r,
  searchable: o
}) {
  return /* @__PURE__ */ e(
    L,
    {
      cursor: o ? "text" : "pointer",
      rotate: r && !o ? "rotate(180deg)" : "none",
      "aria-hidden": "true",
      children: o ? /* @__PURE__ */ e(l.Search, {}) : /* @__PURE__ */ e(l.ChevronDownSmall, {})
    }
  );
}
function I({ description: r }) {
  return /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(y, { c: "grey-60", children: r }) });
}
function C({ error: r }) {
  return /* @__PURE__ */ c(j, { children: [
    /* @__PURE__ */ e(l.AlertCircle, { color: t["error-30"] }),
    /* @__PURE__ */ e(b, { c: "error-30", children: r })
  ] });
}
const k = n.div`
  width: ${({ width: r }) => `${r}px` ?? "100%"};
  position: relative;
  cursor: ${({ cursor: r }) => r ?? "auto"};
`, W = n.span`
  color: #ff5362;
`, z = n.div`
  display: flex;
  margin-bottom: 8px;
`, B = n.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  gap: 4px;
`, j = n.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 4px;
`, A = n.input`
  width: 100%;
  padding: ${({ isRightSection: r, leftIconExist: o }) => {
  const i = o ? 34 : 12;
  return r ? `6px 36px 6px ${i}px` : `6px ${i}px`;
}};
  outline: none;
  border: 1px solid ${t["grey-50"]};
  font-style: normal;
  font-weight: 500;
  font-size: ${u.size.xs}px;
  color: ${t["grey-80"]};
  background: ${t.white};
  border-radius: 8px;
  height: 34px;
  cursor: ${({ cursor: r }) => r ?? "auto"};

  &:disabled {
    border: none;
    background: ${t["grey-10"]};
    color: ${t["grey-50"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${t["grey-50"]};
    font-size: ${u.size.xs}px;
  }

  ${({ error: r }) => r ? `
    border: 1px solid ${t["error-30"]};
    background: ${t["error-10"]};
  ` : `
    &:focus-visible,
    &:focus {
      border: 1px solid ${t["grey-80"]};
    }
  `}
`, D = n.i`
  cursor: pointer;
  display: flex;
  align-items: center;
`, E = n.div`
  position: relative;
`, L = n.div`
  position: absolute;
  top: 0%;
  padding: 6px 8px;
  right: 0;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  height: 100%;
  cursor: ${({ cursor: r }) => r ?? "pointer"};
  transform: ${({ rotate: r }) => r ?? "none"};
`, R = n.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  padding: 0px 8px 0px 12px;

  background: inherit;
  overflow: visible;
  cursor: ${({ cursor: r }) => r ?? "pointer"};
`;
export {
  G as SelectInput,
  I as SelectInputDescription,
  C as SelectInputErrorSection,
  v as SelectInputLabel,
  w as SelectInputRightIconSection
};
//# sourceMappingURL=SelectInput.mjs.map
