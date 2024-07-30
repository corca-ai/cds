import { jsx as t, jsxs as a } from "@emotion/react/jsx-runtime";
import { useState as x, useRef as T } from "react";
import D from "../../../../node_modules/.pnpm/react-datepicker@4.25.0_react-dom@18.2.0_react@18.2.0/node_modules/react-datepicker/dist/es/index.mjs";
import { formatDateTimeByLanguage as k } from "../../../utils/date.mjs";
import p from "../../Icon/index.mjs";
import { color as u } from "../../styles.mjs";
import { DatepickerWrapper as I, CustomInput as w, HeaderWrapper as H, HeaderButton as f, HeaderText as S } from "../SingleDate/index.mjs";
import { MONTHS as b } from "../constant.mjs";
import { CustomTimeInput as M } from "./CustomTimeInput.mjs";
import { AMPM as Y, AmPmButton as z, DefaultContainer as E, TimeContainer as F, TimeInput as G } from "./CustomTimeInput.mjs";
function L({
  selected: n,
  onChange: s,
  language: r,
  inputProps: o,
  dateFormatter: l,
  ...d
}) {
  const [m, c] = x(n || /* @__PURE__ */ new Date()), i = T(null);
  return /* @__PURE__ */ t(I, { monthContainerPadding: "20px 16px 18px 16px", children: /* @__PURE__ */ t(
    D,
    {
      ...d,
      ref: i,
      locale: r,
      selected: m,
      onChange: (e) => c(e),
      required: o == null ? void 0 : o.required,
      customInput: /* @__PURE__ */ t(
        w,
        {
          ...o,
          onClick: () => {
            var e;
            return (e = i.current) == null ? void 0 : e.setOpen(!0);
          },
          date: l ? l(n, r) : k(n, r)
        }
      ),
      showTimeInput: !0,
      customTimeInput: /* @__PURE__ */ t(
        M,
        {
          setNewDate: (e) => c(e),
          newDate: m,
          language: r,
          onConfirm: () => {
            var e;
            s(m), (e = i.current) == null || e.setOpen(!1);
          }
        }
      ),
      timeCaption: "",
      shouldCloseOnSelect: !1,
      renderCustomHeader: ({
        date: e,
        decreaseMonth: h,
        increaseMonth: C
        // https://reactdatepicker.com/#example-custom-header
      }) => /* @__PURE__ */ a(H, { children: [
        /* @__PURE__ */ t(f, { type: "button", onClick: h, children: /* @__PURE__ */ t(p.ChevronLeftSmall, { color: u["main-black"] }) }),
        /* @__PURE__ */ a(S, { children: [
          /* @__PURE__ */ t("span", { children: b[e.getMonth()] }),
          /* @__PURE__ */ a("span", { children: [
            " ",
            e.getFullYear()
          ] })
        ] }),
        /* @__PURE__ */ t(f, { type: "button", onClick: C, children: /* @__PURE__ */ t(p.ChevronRightSmall, { color: u["main-black"] }) })
      ] })
    }
  ) });
}
export {
  Y as AMPM,
  z as AmPmButton,
  M as CustomTimeInput,
  L as DateTime,
  E as DefaultContainer,
  F as TimeContainer,
  G as TimeInput
};
//# sourceMappingURL=index.mjs.map
