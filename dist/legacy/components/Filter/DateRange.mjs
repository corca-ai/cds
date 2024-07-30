import { jsxs as r, jsx as t } from "@emotion/react/jsx-runtime";
import d from "@emotion/styled";
import p from "../DatePicker/index.mjs";
import { B3 as m } from "../Text/index.mjs";
const f = d.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`, s = d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  div:first-of-type {
    flex-grow: 1;
  }
`;
function y({
  dateRange: e,
  changeValue: o,
  startDateLabel: c,
  endDateLabel: l,
  language: n
}) {
  return /* @__PURE__ */ r(f, { children: [
    /* @__PURE__ */ r(s, { children: [
      /* @__PURE__ */ t(
        p.Date,
        {
          selected: e[0],
          onChange: (i) => {
            o([i, e[1]]);
          },
          language: n,
          maxDate: e[1],
          placeholderText: "Start Date"
        }
      ),
      c && /* @__PURE__ */ t(m, { children: c })
    ] }),
    /* @__PURE__ */ r(s, { children: [
      /* @__PURE__ */ t(
        p.Date,
        {
          selected: e[1],
          onChange: (i) => {
            o([e[0], i]);
          },
          language: n,
          minDate: e[0],
          placeholderText: "End Date"
        }
      ),
      l && /* @__PURE__ */ t(m, { children: l })
    ] })
  ] });
}
export {
  y as FilterDateRange
};
//# sourceMappingURL=DateRange.mjs.map
