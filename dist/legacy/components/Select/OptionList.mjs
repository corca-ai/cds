import { jsx as n, jsxs as p, Fragment as x } from "@emotion/react/jsx-runtime";
import { useRef as m, useEffect as y, Fragment as w } from "react";
import h from "@emotion/styled";
import O from "../Icon/index.mjs";
import { B4 as k, B3 as $ } from "../Text/index.mjs";
import { color as a } from "../styles.mjs";
const M = 32, u = "minus-icon";
function b({
  value: e,
  items: i,
  onChange: c,
  focusedItemIdx: d
}) {
  return /* @__PURE__ */ n(x, { children: i.map((l, r) => {
    const t = l.icon;
    return /* @__PURE__ */ n(T, { role: "option", children: /* @__PURE__ */ p(
      v,
      {
        focused: d === r,
        disabled: l.disabled,
        "aria-selected": e === l.value,
        selected: e === l.value,
        onClick: () => {
          l.disabled || c(l.value);
        },
        children: [
          t != null && /* @__PURE__ */ n(t, { size: 20, ...l.disabled && { color: a["grey-40"] } }),
          /* @__PURE__ */ n($, { c: l.disabled ? "grey-40" : "grey-80", children: l.label })
        ]
      }
    ) }, r);
  }) });
}
function C({
  onChange: e,
  option: i,
  value: c,
  width: d,
  maxDropdownItemsToShow: l = 6,
  focusedItemIdx: r = -1
}) {
  const t = m(null);
  return y(() => {
    var o, s;
    if (i.items.length !== 0) {
      if (r === -1) {
        (o = t.current.children[0]) == null || o.scrollIntoView({
          block: "nearest"
        });
        return;
      }
      (s = t.current.children[r]) == null || s.scrollIntoView({
        block: "nearest"
      });
    }
  }, [r, i.items.length]), /* @__PURE__ */ n(L, { width: d, maxDropdownItemsToShow: l, ref: t, children: i.type === "section" ? i.items.map((o, s) => /* @__PURE__ */ p(w, { children: [
    /* @__PURE__ */ n(S, { children: /* @__PURE__ */ n(k, { children: o.sectionTitle }) }),
    /* @__PURE__ */ n(
      b,
      {
        value: c,
        items: o.sectionItems,
        onChange: e,
        focusedItemIdx: r
      }
    )
  ] }, s)) : /* @__PURE__ */ n(
    b,
    {
      value: c,
      items: i.items,
      onChange: e,
      focusedItemIdx: r
    }
  ) });
}
function f({
  values: e,
  items: i,
  onChange: c,
  focusedItemIdx: d,
  searchInput: l
}) {
  return /* @__PURE__ */ p(x, { children: [
    l,
    i.map((r, t) => {
      const o = r.icon, s = e == null ? void 0 : e.includes(r.value);
      return /* @__PURE__ */ n(T, { role: "option", children: /* @__PURE__ */ p(
        _,
        {
          focused: d === t,
          disabled: r.disabled,
          "aria-selected": s,
          selected: s,
          onClick: () => {
            r.disabled || c(r);
          },
          children: [
            /* @__PURE__ */ p(B, { children: [
              o != null && /* @__PURE__ */ n(o, { size: 20, ...r.disabled && { color: a["grey-40"] } }),
              /* @__PURE__ */ n($, { c: r.disabled ? "grey-40" : "grey-80", children: r.label })
            ] }),
            s && /* @__PURE__ */ n("div", { className: u, children: /* @__PURE__ */ n(O.Minus, { size: 24 }) })
          ]
        }
      ) }, t);
    })
  ] });
}
function I({
  searchInput: e,
  onChange: i,
  option: c,
  values: d,
  width: l,
  maxDropdownItemsToShow: r = 6,
  focusedItemIdx: t = -1
}) {
  const o = m(null);
  return y(() => {
    var s, g;
    if (c.items.length !== 0) {
      if (t === -1) {
        (s = o.current.children[0]) == null || s.scrollIntoView({
          block: "nearest"
        });
        return;
      }
      (g = o.current.children[t]) == null || g.scrollIntoView({
        block: "nearest"
      });
    }
  }, [t, c.items.length]), /* @__PURE__ */ n(L, { width: l, maxDropdownItemsToShow: r, ref: o, children: c.type === "section" ? c.items.map((s, g) => /* @__PURE__ */ p(w, { children: [
    /* @__PURE__ */ n(S, { children: /* @__PURE__ */ n(k, { children: s.sectionTitle }) }),
    /* @__PURE__ */ n(
      f,
      {
        values: d,
        items: s.sectionItems,
        onChange: i,
        focusedItemIdx: t,
        searchInput: e
      }
    )
  ] }, g)) : /* @__PURE__ */ n(
    f,
    {
      values: d,
      items: c.items,
      onChange: i,
      focusedItemIdx: t,
      searchInput: e
    }
  ) });
}
const L = h.ul`
  display: flex;
  width: ${({ width: e }) => `${e}px` ?? "100%"};
  max-height: ${({ maxDropdownItemsToShow: e }) => `${e * (M + 4) + 20 - 4}px`};
  height: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 8px;
  background: ${a.white};
  box-shadow: 0px 0px 1px 0px rgba(132, 132, 132, 0.31), 0px 2px 5px 0px rgba(70, 70, 70, 0.2);
  overflow: auto;
  list-style: none;
`, S = h.li`
  padding: 6px 8px;
`, T = h.li`
  width: 100%;
`, v = h.div`
  border: none;
  overflow: visible;
  cursor: pointer;
  display: flex;
  width: 100%;
  min-height: ${M}px;
  padding: 6px 8px;
  align-items: center;
  align-self: stretch;
  gap: 6px;
  border-radius: 4px;
  text-align: left;
  background-color: ${({ selected: e, focused: i }) => e ? a["grey-30"] : i ? a["grey-20"] : a.white};
  &:hover {
    background-color: ${({ disabled: e, selected: i }) => e ? "none" : i ? a["grey-40"] : a["grey-20"]};
    .${u} {
      opacity: 1;
    }
  }
  svg {
    display: list-item;
    flex-shrink: 0;
  }
  span {
    word-break: break-word;
  }

  ${({ disabled: e }) => e && `background: none;
    cursor: not-allowed;
`}
  .${u} {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`, _ = h(v)`
  display: flex;
  justify-content: space-between;
`, B = h.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export {
  I as MultipleOptionList,
  C as OptionList
};
//# sourceMappingURL=OptionList.mjs.map
