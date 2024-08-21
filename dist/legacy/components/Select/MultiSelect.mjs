import { jsxs as U, jsx as h } from "@emotion/react/jsx-runtime";
import { useRef as y, useState as w, useMemo as O, useCallback as I, useEffect as k } from "react";
import A from "@emotion/styled";
import _ from "../Icon/index.mjs";
import { MultiSelectInput as D, SearchInput as F } from "./MultiSelectInput.mjs";
import { MultipleOptionList as $ } from "./OptionList.mjs";
import { CREATE_VALUE as L } from "./Select.mjs";
const j = 310;
function P({
  search: t = {
    searchable: !1
  },
  options: o,
  selectedValues: e = [],
  onCreate: c,
  onSelect: s,
  onDeleteSingle: v,
  onDeleteAll: M,
  width: b,
  ...S
}) {
  var x;
  const p = y(null), g = y(null), [a, f] = w(!1), [d, l] = w(-1), [i, m] = w(null), C = O(() => o.filter((n) => e.includes(n.value)), [o.length, e == null ? void 0 : e.length, (x = o == null ? void 0 : o[0]) == null ? void 0 : x.value, e == null ? void 0 : e[0]]), u = O(() => {
    if (t.searchable && i) {
      const n = o.filter(
        (r) => r.label.toLocaleLowerCase().includes(String(i).toLocaleLowerCase())
      );
      return c != null ? [
        ...n,
        { icon: _.Add, label: String(i), value: L }
      ] : n;
    }
    return o;
  }, [t.searchable, o, o.length, i]), E = I(() => {
    m(""), l(-1), f(!1);
  }, [m, l, f]), T = I(
    (n) => {
      n.value === L ? (c == null || c(String(i)), s(i)) : e.includes(n.value) ? v(n.value) : s(n.value);
    },
    [c, i, e, v, s]
  ), R = I(
    (n) => {
      switch (n.key) {
        case "ArrowDown":
          return l((r) => r === u.length - 1 ? -1 : r + 1);
        case "ArrowUp":
          return l((r) => r === -1 ? u.length - 1 : r - 1);
        case "Enter": {
          if (d === -1)
            return;
          const r = u[d];
          if (r.value === L)
            return;
          s(r.value), E();
        }
      }
    },
    [l, f, s, u, d]
  );
  return k(() => {
    const n = (r) => {
      p.current != null && !p.current.contains(r.target) && E();
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [p]), k(() => {
    if (!a || !(u != null && u.length) || !t.searchable)
      return;
    const n = (r) => {
      R(r);
    };
    return document.addEventListener("keyup", n), () => {
      document.removeEventListener("keyup", n);
    };
  }, [g, a, u, t.searchable, d]), /* @__PURE__ */ U(K, { width: b, ref: p, children: [
    /* @__PURE__ */ h(
      D,
      {
        ...S,
        optionItems: C,
        onDeleteSingle: v,
        onDeleteAll: M,
        width: b,
        dropdownOpened: a,
        onFocus: () => t.searchable && m(""),
        onClick: () => {
          a && l(-1), f(!a);
        },
        readOnly: !t.searchable
      }
    ),
    a && /* @__PURE__ */ h(W, { ref: g, children: /* @__PURE__ */ h(
      $,
      {
        focusedItemIdx: d,
        values: e,
        option: {
          type: "basic",
          items: u
        },
        onChange: T,
        searchInput: t.searchable && /* @__PURE__ */ h(
          F,
          {
            ...t,
            type: "text",
            value: i ?? "",
            onChange: (n) => m(n.currentTarget.value)
          }
        )
      }
    ) })
  ] });
}
const K = A.div`
  width: ${({ width: t }) => `${t}px` ?? "100%"};
  min-width: ${j}px;

  position: relative;
`, W = A.div`
  width: 100%;
  margin-top: 6px;

  position: absolute;
  z-index: 100;
`;
export {
  P as MultiSelect
};
//# sourceMappingURL=MultiSelect.mjs.map
