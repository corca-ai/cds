import { forwardRef as J, useMemo as w, createElement as L } from "react";
import { defaultShouldForwardProp as R, composeCvaFn as T, composeShouldForwardProps as $, getDisplayName as g } from "./factory-helper.mjs";
import { splitProps as q, normalizeHTMLProps as h } from "../helpers.mjs";
import { isCssProperty as B } from "./is-valid-prop.mjs";
import { cva as G } from "../css/cva.mjs";
import { cx as F } from "../css/cx.mjs";
import { css as S } from "../css/css.mjs";
function m(o, s = {}, r = {}) {
  const n = s.__cva__ || s.__recipe__ ? s : G(s), b = r.shouldForwardProp || R, u = (i) => b(i, n.variantKeys), N = Object.assign(
    r.dataAttr && s.__name__ ? { "data-recipe": s.__name__ } : {},
    r.defaultProps
  ), t = T(o.__cva__, n), v = $(o, u), _ = o.__base__ || o, e = /* @__PURE__ */ J(function(M, j) {
    const { as: C = _, children: E, ...P } = M, a = w(() => Object.assign({}, N, P), [P]), [K, V, c, y, k] = w(() => q(a, h.keys, v, t.variantKeys, B), [a]);
    function z() {
      var f;
      const { css: p, ...l } = y, d = (f = t.__getCompoundVariantCss__) == null ? void 0 : f.call(t, c);
      return F(t(c, !1), S(d, l, p), a.className);
    }
    function A() {
      const { css: p, ...l } = y, d = t.raw(c);
      return F(S(d, l, p), a.className);
    }
    const H = s.__recipe__ ? z : A;
    return L(C, {
      ref: j,
      ...V,
      ...k,
      ...h(K),
      className: H()
    }, a.children ?? E);
  }), x = g(_);
  return e.displayName = `styled.${x}`, e.__cva__ = t, e.__base__ = _, e.__shouldForwardProps__ = u, e;
}
function I() {
  const o = /* @__PURE__ */ new Map();
  return new Proxy(m, {
    apply(s, r, n) {
      return m(...n);
    },
    get(s, r) {
      return o.has(r) || o.set(r, m(r)), o.get(r);
    }
  });
}
const O = /* @__PURE__ */ I();
export {
  O as styled
};
//# sourceMappingURL=factory.mjs.map
