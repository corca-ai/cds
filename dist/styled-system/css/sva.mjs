import { getSlotRecipes as b, memo as j, splitProps as v, compact as O } from "../helpers.mjs";
import { cva as _ } from "./cva.mjs";
import { cx as V } from "./cx.mjs";
const y = (s, a) => s + "__" + a;
function k(s) {
  const a = Object.entries(b(s)).map(([t, r]) => [t, _(r)]), i = s.defaultVariants ?? {};
  function m(t) {
    const r = a.map(([e, n]) => [e, V(n(t), s.className && y(s.className, e))]);
    return Object.fromEntries(r);
  }
  function p(t) {
    const r = a.map(([e, n]) => [e, n.raw(t)]);
    return Object.fromEntries(r);
  }
  const o = s.variants ?? {}, c = Object.keys(o);
  function l(t) {
    return v(t, c);
  }
  const u = (t) => ({ ...i || {}, ...O(t) }), f = Object.fromEntries(
    Object.entries(o).map(([t, r]) => [t, Object.keys(r)])
  );
  return Object.assign(j(m), {
    __cva__: !1,
    raw: p,
    variantMap: f,
    variantKeys: c,
    splitVariantProps: l,
    getVariantProps: u
  });
}
export {
  k as sva
};
//# sourceMappingURL=sva.mjs.map
