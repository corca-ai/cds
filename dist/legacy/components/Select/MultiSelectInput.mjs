import { jsxs as c, jsx as t, Fragment as v } from "@emotion/react/jsx-runtime";
import { useMemo as k } from "react";
import i from "@emotion/styled";
import s from "../Icon/index.mjs";
import { B5 as u } from "../Text/index.mjs";
import { color as r, typography as a } from "../styles.mjs";
import { SelectInputLabel as I, SelectInputDescription as C, SelectInputRightIconSection as W, SelectInputErrorSection as z } from "./SelectInput.mjs";
const j = (e) => e <= 1 ? 266 : 214;
function Y({
  optionItems: e,
  label: o,
  description: n,
  required: d = !1,
  error: p,
  width: l,
  tooltip: g,
  dropdownOpened: f,
  onDeleteSingle: b,
  onDeleteAll: $,
  onClick: y,
  showIcon: w = !0,
  ...m
}) {
  const S = k(
    () => j(e.length),
    [e == null ? void 0 : e.length]
  );
  return /* @__PURE__ */ c(D, { width: l, onClick: y, children: [
    o && /* @__PURE__ */ t(I, { label: o, required: d, tooltip: g }),
    n && /* @__PURE__ */ t(C, { description: n }),
    /* @__PURE__ */ c(h, { children: [
      /* @__PURE__ */ t(R, { ...m, isRightSection: !0, children: e.length > 0 && /* @__PURE__ */ t(
        L,
        {
          width: l,
          onDeleteSingle: b,
          optionItems: e,
          onDeleteAll: $,
          itemMaxWidth: S
        }
      ) }),
      w && /* @__PURE__ */ t(W, { dropdownOpened: f, searchable: !1 })
    ] }),
    p && /* @__PURE__ */ t(z, { error: p })
  ] });
}
function Z({ showIcon: e = !0, ...o }) {
  return /* @__PURE__ */ c(O, { children: [
    e && /* @__PURE__ */ t(F, { cursor: "text", rotate: "none", "aria-hidden": "true", children: /* @__PURE__ */ t(s.Search, { color: r["grey-50"] }) }),
    /* @__PURE__ */ t(
      P,
      {
        cursor: "text",
        isRightSection: !1,
        isLeftSection: !0,
        ...o,
        readOnly: !1
      }
    )
  ] });
}
function M({ onDelete: e, children: o, maxWidth: n }) {
  return /* @__PURE__ */ c(T, { width: n, children: [
    /* @__PURE__ */ t(q, { width: n - 5, children: /* @__PURE__ */ t(u, { color: r["grey-80"], children: o }) }),
    /* @__PURE__ */ t(x, { onClickCapture: e, children: /* @__PURE__ */ t(s.CancelSmall, { size: 13 }) })
  ] });
}
function B({ itemsCount: e, onDeleteAll: o }) {
  return /* @__PURE__ */ c(H, { children: [
    /* @__PURE__ */ t(G, { children: /* @__PURE__ */ t(u, { c: "grey-10", children: e }) }),
    /* @__PURE__ */ t(x, { onClickCapture: o, children: /* @__PURE__ */ t(s.CancelSmall, {}) })
  ] });
}
function L({
  width: e = 310,
  onDeleteSingle: o,
  optionItems: n,
  onDeleteAll: d,
  itemMaxWidth: p
}) {
  return /* @__PURE__ */ c(v, { children: [
    /* @__PURE__ */ t(A, { maxWidth: e - 100, children: n.map((l) => /* @__PURE__ */ t(
      M,
      {
        maxWidth: p,
        onDelete: () => o(l.value),
        children: l.label
      },
      l.value + (l == null ? void 0 : l.label)
    )) }),
    n.length > 1 && /* @__PURE__ */ t(B, { itemsCount: n.length, onDeleteAll: d })
  ] });
}
const x = i.div`
  height: 100%;

  cursor: pointer;
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`, D = i.div`
  width: ${({ width: e }) => e ? `${e}px` : "100%"};
  position: relative;
  cursor: ${({ cursor: e }) => e ?? "auto"};
`, R = i.input`
  width: 100%;
  height: 34px;
  padding: ${({ isRightSection: e, isLeftSection: o }) => {
  const n = o ? 30 : 12;
  return e ? `5px 36px 5px ${n}px` : `6px ${n}px`;
}};

  font-style: normal;
  font-weight: 500;
  font-size: ${a.size.xs}px;
  text-align: center;

  color: ${r["grey-80"]};
  background: ${r.white};
  border-radius: 8px;
  outline: none;
  border: 1px solid ${r["grey-50"]};
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  &:disabled {
    border: none;
    background: ${r["grey-10"]};
    color: ${r["grey-50"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${r["grey-50"]};
    font-size: ${a.size.xs}px;
  }

  ${({ error: e }) => e ? `
    border: 1px solid ${r["error-30"]};
    background: ${r["error-10"]};
  ` : `
    &:focus-visible,
    &:focus {
      border: 1px solid ${r["grey-80"]};
    }
  `}
`, P = i.input`
  width: 100%;
  height: 34px;
  padding: ${({ isRightSection: e, isLeftSection: o }) => {
  const n = o ? 30 : 12;
  return e ? `6px 36px 6px ${n}px` : `6px ${n}px`;
}};

  outline: none;
  border: 1px solid ${r["grey-50"]};
  background: ${r.white};
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: ${a.size.xs}px;
  color: ${r["grey-80"]};
  cursor: ${({ cursor: e }) => e ?? "auto"};

  &:disabled {
    border: none;
    background: ${r["grey-10"]};
    color: ${r["grey-50"]};
    cursor: not-allowed;
  }
  &::placeholder {
    color: ${r["grey-50"]};
    font-size: ${a.size.xs}px;
  }
  ${({ error: e }) => e ? `
    border: 1px solid ${r["error-30"]};
    background: ${r["error-10"]};
  ` : `
    &:focus-visible,
    &:focus {
      border: 1px solid ${r["grey-80"]};
    }
  `}
`, h = i.div`
  position: relative;
  width: 100%;
`, E = i.div`
  height: 100%;
  padding: 6px 8px;
  overflow: visible;

  position: absolute;
  top: 0%;

  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;

  cursor: ${({ cursor: e }) => e ?? "pointer"};
  transform: ${({ rotate: e }) => e ?? "none"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`, F = i(E)`
  left: 0;
`, O = i(h)`
  margin-bottom: 5px;
`, T = i.div`
  width: fit-content;
  min-width: 40px;
  max-width: ${({ width: e }) => e}px;
  height: 21px;
  padding: 3px 2px 3px 4px;

  text-align: center;
  background-color: ${r["grey-20"]};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`, q = i.div`
  width: ${({ width: e }) => e};
  height: 100%;
  min-width: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
`, A = i.div`
  width: ${({ maxWidth: e }) => e < 214 ? 214 : e}px;

  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;

  display: flex;
  gap: 3px;
  flex-wrap: nowrap;
`, G = i.div`
  width: 20px;
  height: 20px;
  padding: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: ${r["grey-60"]};
  color: ${r["grey-10"]};
`, H = i.div`
  width: fit-content;
  height: 20px;

  position: absolute;
  right: 30px;

  display: flex;
`;
export {
  Y as MultiSelectInput,
  Z as SearchInput
};
//# sourceMappingURL=MultiSelectInput.mjs.map
