import { isCssProperty as i } from "./is-valid-prop.mjs";
const u = (r, e) => !e.includes(r) && !i(r), c = (r, e) => r.__shouldForwardProps__ && e ? (_) => r.__shouldForwardProps__(_) && e(_) : e, d = (r, e) => {
  var s;
  if (r && !e)
    return r;
  if (!r && e)
    return e;
  if (r.__cva__ && e.__cva__ || r.__recipe__ && e.__recipe__)
    return r.merge(e);
  const _ = new TypeError("Cannot merge cva with recipe. Please use either cva or recipe.");
  throw (s = TypeError.captureStackTrace) == null || s.call(TypeError, _), _;
}, f = (r) => typeof r == "string" ? r : (r == null ? void 0 : r.displayName) || (r == null ? void 0 : r.name) || "Component";
export {
  d as composeCvaFn,
  c as composeShouldForwardProps,
  u as defaultShouldForwardProp,
  f as getDisplayName
};
//# sourceMappingURL=factory-helper.mjs.map
