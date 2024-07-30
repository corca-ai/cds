function n() {
  let t = "", e = 0, r;
  for (; e < arguments.length; )
    (r = arguments[e++]) && typeof r == "string" && (t && (t += " "), t += r);
  return t;
}
export {
  n as cx
};
//# sourceMappingURL=cx.mjs.map
