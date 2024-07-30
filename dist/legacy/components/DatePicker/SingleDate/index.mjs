import { jsx as r, jsxs as d } from "@emotion/react/jsx-runtime";
import { useRef as u, forwardRef as f } from "react";
import y from "../../../../node_modules/.pnpm/react-datepicker@4.25.0_react-dom@18.2.0_react@18.2.0/node_modules/react-datepicker/dist/es/index.mjs";
import n from "@emotion/styled";
import { formatDateByLanguage as k } from "../../../utils/date.mjs";
import s from "../../Icon/index.mjs";
import { DateInput as _ } from "../../Input/DateInput.mjs";
import { color as e } from "../../styles.mjs";
import { MONTHS as b } from "../constant.mjs";
function L({
  selected: t,
  onChange: c,
  language: o,
  inputProps: i,
  dateFormatter: p,
  ...g
}) {
  const l = u(null);
  return /* @__PURE__ */ r($, { children: /* @__PURE__ */ r(
    y,
    {
      ...g,
      ref: l,
      locale: o,
      selected: t,
      required: i == null ? void 0 : i.required,
      onChange: (a) => {
        c(a);
      },
      customInput: /* @__PURE__ */ r(
        w,
        {
          ...i,
          onClick: () => {
            var a;
            return (a = l.current) == null ? void 0 : a.setOpen(!0);
          },
          date: p != null ? p(t, o) : k(t, o)
        }
      ),
      renderCustomHeader: ({
        date: a,
        decreaseMonth: m,
        increaseMonth: x
        // https://reactdatepicker.com/#example-custom-header
      }) => /* @__PURE__ */ d(v, { children: [
        /* @__PURE__ */ r(h, { type: "button", onClick: m, children: /* @__PURE__ */ r(s.ChevronLeftSmall, { color: e["main-black"] }) }),
        /* @__PURE__ */ d(j, { children: [
          /* @__PURE__ */ r("span", { children: b[a.getMonth()] }),
          /* @__PURE__ */ d("span", { children: [
            " ",
            a.getFullYear()
          ] })
        ] }),
        /* @__PURE__ */ r(h, { type: "button", onClick: x, children: /* @__PURE__ */ r(s.ChevronRightSmall, { color: e["main-black"] }) })
      ] })
    }
  ) });
}
const w = f(
  ({ onClick: t, date: c, ...o }, i) => /* @__PURE__ */ r("div", { ref: i, children: /* @__PURE__ */ r(_, { ...o, onClick: t, value: c ?? "" }) })
), $ = n.div`
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & .react-datepicker-popper {
    z-index: 1000;
    margin-top: 10px;
    & .react-datepicker {
      background-color: ${e.white};
      border: none;
      border-radius: 8px;
      overflow: hidden;
      /* prettier-ignore */
      box-shadow: 0px 0px 1px 0px rgba(132, 132, 132, 0.31),
      0px 2px 5px 0px rgba(70, 70, 70, 0.2);

      //navigation button
      & .react-datepicker__navigation {
        display: none;
      }

      // calendar header
      & .react-datepicker__header {
        background-color: ${e.white};
        border-bottom: none;
        padding: 0;
      }
      & .react-datepicker__aria-live {
        display: none;
      }

      // container
      & .react-datepicker__month {
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
      }
      & .react-datepicker__month-container {
        padding: ${({ monthContainerPadding: t }) => t ?? "20px 16px 20px 16px"};
      }

      & .react-datepicker__day-names {
        width: 242px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
        margin: 0 0 3px 0;
      }

      & .react-datepicker__week {
        display: flex;
        gap: 3px;
        align-items: center;
        justify-content: center;
        height: 32px;
      }

      // days
      & .react-datepicker__day-name {
        display: flex;
        width: 32px;
        height: 30px;
        align-items: center;
        justify-content: center;
        color: ${e["grey-70"]};

        /* B5 */
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        margin: 0;
        &:first-of-type {
          // sunday
          color: ${e["error-20"]};
        }
        &:last-of-type {
          // saturday
          color: ${e["error-20"]};
        }
      }

      & .react-datepicker__day {
        cursor: pointer;
        width: 32px;
        height: 32px;
        margin: 0;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${e["grey-70"]};
        &:hover {
          background-color: ${e["grey-20"]};
          border-radius: 6px;
        }
      }
      & .react-datepicker__day--keyboard-selected {
        background-color: ${e.white}; //essential to delete default blue background color from react-datepicker
      }
      & .react-datepicker__day--today {
        font-weight: 700;
        color: ${e["main-black"]};
      }
      & .react-datepicker__day--weekend {
        color: ${e["error-20"]};
      }
      & .react-datepicker__day--outside-month {
        color: ${e["grey-50"]};
      }
      & .react-datepicker__day--selected {
        width: 32px;
        height: 32px;
        border-radius: 6px !important;
        background-color: ${e["main-black"]} !important;
        color: ${e.white};
      }
      & .react-datepicker__day--disabled {
        cursor: default;
        color: ${e["grey-40"]};
        &:hover {
          background-color: ${e.white};
        }
      }
    }

    // time
    & .react-datepicker-time__input {
      width: 100%;
      margin: 0;
    }
    & .react-datepicker-time__caption {
      display: none;
    }
    & .react-datepicker__input-time-container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0 16px 20px 16px;
    }
  }
`, v = n.span`
  width: 242px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  margin: 0 0 18px 0;
  color: ${e["grey-80"]};
  line-height: 20px;
`, j = n.span`
  width: auto;
  display: flex;
  gap: 10px;
`, h = n.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;
export {
  w as CustomInput,
  $ as DatepickerWrapper,
  h as HeaderButton,
  j as HeaderText,
  v as HeaderWrapper,
  L as SingleDate
};
//# sourceMappingURL=index.mjs.map
