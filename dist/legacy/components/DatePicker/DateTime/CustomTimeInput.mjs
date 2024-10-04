import { jsxs as u, jsx as i } from "@emotion/react/jsx-runtime";
import { useState as b, useEffect as f } from "react";
import s from "@emotion/styled";
import { Button as v } from "../../Button/Button.mjs";
import { B3 as y } from "../../Text/index.mjs";
import { color as o, typography as M } from "../../styles.mjs";
import { AMPM_FORMAT as P } from "../constant.mjs";
var C = /* @__PURE__ */ ((n) => (n.AM = "AM", n.PM = "PM", n))(C || {});
const B = ({
  newDate: n,
  language: h,
  onConfirm: d,
  setNewDate: g
}) => {
  const l = (t) => (t > 12 ? t - 12 : t).toString().padStart(2, "0"), [e, a] = b({
    hh: l(n.getHours()),
    mm: n.getMinutes().toString().padStart(2, "0"),
    ss: n.getSeconds().toString().padStart(2, "0"),
    amPm: n.getHours() < 12 ? "AM" : "PM"
    /* PM */
  }), m = (t) => {
    const r = new Date(n);
    r.setHours(
      Number(t.hh) + (Number(t.hh) >= 12 || t.amPm === "AM" ? 0 : 12),
      Number(t.mm) || 0,
      Number(t.ss) || 0
    ), g(r);
  };
  return f(() => {
    if (!e.hh)
      return;
    m(e);
    const t = setTimeout(() => {
      const r = Number(e.hh), c = {
        hh: e.hh
      };
      r > 12 && Object.assign(c, {
        hh: l(r),
        amPm: "PM"
        /* PM */
      }), a((x) => ({ ...x, ...c }));
    }, 500);
    return () => clearTimeout(t);
  }, [e.hh]), /* @__PURE__ */ u(N, { children: [
    /* @__PURE__ */ u(k, { children: [
      /* @__PURE__ */ i(
        S,
        {
          onClick: () => {
            const t = {
              ...e,
              amPm: e.amPm === "AM" ? "PM" : "AM"
              /* AM */
            };
            a(t), m(t);
          },
          children: /* @__PURE__ */ i(y, { children: P[h][e.amPm] })
        }
      ),
      /* @__PURE__ */ u(A, { children: [
        /* @__PURE__ */ i(
          p,
          {
            type: "number",
            max: 23,
            min: 0,
            onChange: (t) => {
              if (Number(t.target.value) > 23)
                return;
              const r = { ...e, hh: t.target.value };
              a(r), m(r);
            },
            value: e.hh
          }
        ),
        " : ",
        /* @__PURE__ */ i(
          p,
          {
            type: "number",
            max: 59,
            min: 0,
            onChange: (t) => {
              if (Number(t.target.value) > 59 || Number(t.target.value) < 0)
                return;
              const r = { ...e, mm: t.target.value };
              a(r), m(r);
            },
            value: e.mm
          }
        ),
        " : ",
        /* @__PURE__ */ i(
          p,
          {
            type: "number",
            max: 59,
            min: 0,
            onChange: (t) => {
              if (Number(t.target.value) > 59 || Number(t.target.value) < 0)
                return;
              const r = { ...e, ss: t.target.value };
              a(r), m(r);
            },
            value: e.ss
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i(
      v,
      {
        disabled: !e.hh || !e.mm || !e.ss,
        onClick: () => d(),
        variant: "filled",
        color: o["main-black"],
        size: "small",
        children: h === "ko" ? "확인" : "Confirm"
      }
    )
  ] });
}, N = s.div`
  width: 242px;
  height: 104px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: space-around;
  border-top: 1px solid ${o["grey-30"]};
`, k = s.div`
  line-height: 15.51px;
  height: 34px;
  padding: 6px;
  border: 1px solid ${o["grey-50"]};
  border-radius: 8px;
  font-weight: 400;
  font-size: ${M.size.xs}px;
  color: ${o["main-black"]};
  background-color: ${o.white};
  display: flex;
  align-items: center;
  margin-top: 18px;
`, A = s.div`
  width: 60px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`, p = s.input`
  width: 20px;
  height: 16px;
  padding: 0 2px 0 2px;
  border: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`, S = s.button`
  width: 37px;
  height: 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${o.white};
  margin-right: 10px;
  &:hover {
    background-color: ${o["grey-20"]};
  }
`;
export {
  C as AMPM,
  S as AmPmButton,
  B as CustomTimeInput,
  N as DefaultContainer,
  k as TimeContainer,
  p as TimeInput
};
//# sourceMappingURL=CustomTimeInput.mjs.map
