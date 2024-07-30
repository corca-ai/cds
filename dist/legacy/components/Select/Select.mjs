import { jsxs as D, jsx as v } from "@emotion/react/jsx-runtime";
import { useRef as g, useState as E, useMemo as x, useCallback as y, useEffect as A } from "react";
import S from "@emotion/styled";
import U from "../Icon/index.mjs";
import { OptionList as F } from "./OptionList.mjs";
import { SelectInput as T } from "./SelectInput.mjs";
const _ = S.div`
  position: relative;
  width: ${({ width: t }) => `${t}px` ?? "100%"};
`, b = S.div`
  position: absolute;
  width: 100%;
  margin-top: 6px;
  z-index: 100;
`, L = "CREATE_NEW_VALUE";
function N({
  searchable: t,
  onCreate: l,
  options: c,
  selectedValue: p,
  onSelect: d,
  width: k,
  inputWidth: O,
  ...C
}) {
  const f = g(null), h = g(null), [o, a] = E(!1), [i, m] = E(null), [s, u] = E(-1), I = x(
    () => {
      var e;
      return ((e = c.find((n) => n.value === p)) == null ? void 0 : e.label) ?? "";
    },
    [p]
  ), r = x(() => {
    if (t && i) {
      const e = c.filter(
        (n) => n.label.toLocaleLowerCase().includes(String(i).toLocaleLowerCase())
      );
      return l != null ? [
        ...e,
        { icon: U.Add, label: String(i), value: L }
      ] : e;
    }
    return c;
  }, [t, c, i]), w = y(() => {
    m(null), u(-1), a(!1);
  }, []), R = y(
    (e) => {
      switch (e.key) {
        case "ArrowDown":
          return u((n) => n === r.length - 1 ? -1 : n + 1);
        case "ArrowUp":
          return u((n) => n === -1 ? r.length - 1 : n - 1);
        case "Enter": {
          if (s === -1)
            return;
          const n = r[s];
          if (n.value === L)
            return;
          d(n.value), w();
        }
      }
    },
    [u, d, a, r, s]
  );
  return A(() => {
    const e = (n) => {
      f.current != null && !f.current.contains(n.target) && w();
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, [f]), A(() => {
    if (!o || !(r != null && r.length) || !t)
      return;
    const e = (n) => {
      R(n);
    };
    return document.addEventListener("keyup", e), () => {
      document.removeEventListener("keyup", e);
    };
  }, [h, o, r, t, s]), /* @__PURE__ */ D(_, { width: k, ref: f, children: [
    /* @__PURE__ */ v(
      T,
      {
        searchable: t,
        width: O,
        dropdownOpened: o,
        value: i ?? I,
        onChange: (e) => {
          t && (o || a(!0), m(e.currentTarget.value));
        },
        onFocus: () => {
          t && m("");
        },
        onClick: () => {
          o && u(-1), a(!o);
        },
        readOnly: !t,
        ...C
      }
    ),
    o && r.length !== 0 && /* @__PURE__ */ v(b, { ref: h, children: /* @__PURE__ */ v(
      F,
      {
        focusedItemIdx: s,
        value: p,
        option: {
          type: "basic",
          items: r
        },
        onChange: (e) => {
          e === L ? (l == null || l(String(i)), d(i)) : d(e), w();
        }
      }
    ) })
  ] });
}
export {
  L as CREATE_VALUE,
  N as Select
};
//# sourceMappingURL=Select.mjs.map
