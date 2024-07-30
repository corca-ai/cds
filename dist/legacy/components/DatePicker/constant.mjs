import { AMPM as M } from "./DateTime/CustomTimeInput.mjs";
const r = {
  ko: {
    AM: "오전",
    PM: "오후"
  },
  en: {
    AM: M.AM,
    PM: M.PM
  },
  vi: {
    AM: M.AM,
    PM: M.PM
  }
}, A = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export {
  r as AMPM_FORMAT,
  A as MONTHS
};
//# sourceMappingURL=constant.mjs.map
