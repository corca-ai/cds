const n = (t, e) => {
  if (!t)
    return;
  const r = ["일", "월", "화", "수", "목", "금", "토"];
  switch (e) {
    case "ko":
      return `${t.getFullYear()}년 ${t.getMonth() + 1}월 ${t.getDate()}일 (${r[t.getDay()]})`;
    case "en":
      return t.toDateString();
    default:
      return t.toDateString();
  }
}, o = (t, e) => t ? `${n(t, e)} ${t.toLocaleTimeString(e)}` : void 0;
export {
  n as formatDateByLanguage,
  o as formatDateTimeByLanguage
};
//# sourceMappingURL=date.mjs.map
