import { memo as y, compact as C, uniq as P, mergeProps as h, splitProps as E } from "../helpers.mjs";
import { mergeCss as u, css as K } from "./css.mjs";
const j = (n) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...n
});
function M(n) {
  const { base: f, variants: s, defaultVariants: e, compoundVariants: m } = j(n), o = (t) => ({ ...e, ...C(t) });
  function a(t = {}) {
    var d;
    const r = o(t);
    let i = { ...f };
    for (const [l, V] of Object.entries(r))
      (d = s[l]) != null && d[V] && (i = u(i, s[l][V]));
    const c = A(m, r);
    return u(i, c);
  }
  function v(t) {
    const r = j(t.config), i = P(t.variantKeys, Object.keys(s));
    return M({
      base: u(f, r.base),
      variants: Object.fromEntries(
        i.map((c) => [c, u(s[c], r.variants[c])])
      ),
      defaultVariants: h(e, r.defaultVariants),
      compoundVariants: [...m, ...r.compoundVariants]
    });
  }
  function p(t) {
    return K(a(t));
  }
  const b = Object.keys(s);
  function O(t) {
    return E(t, b);
  }
  const g = Object.fromEntries(Object.entries(s).map(([t, r]) => [t, Object.keys(r)]));
  return Object.assign(y(p), {
    __cva__: !0,
    variantMap: g,
    variantKeys: b,
    raw: a,
    config: n,
    merge: v,
    splitVariantProps: O,
    getVariantProps: o
  });
}
function A(n, f) {
  let s = {};
  return n.forEach((e) => {
    Object.entries(e).every(([o, a]) => o === "css" ? !0 : (Array.isArray(a) ? a : [a]).some((p) => f[o] === p)) && (s = u(s, e.css));
  }), s;
}
export {
  M as cva,
  A as getCompoundVariantCss
};
//# sourceMappingURL=cva.mjs.map
