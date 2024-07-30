function m(t) {
  return typeof t == "object" && t != null && !Array.isArray(t);
}
function v(t) {
  return Object.fromEntries(Object.entries(t ?? {}).filter(([n, r]) => r !== void 0));
}
var V = (t) => t === "base";
function E(t) {
  return t.slice().filter((n) => !V(n));
}
function b(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
}
function z(t) {
  let n = "", r;
  for (r = Math.abs(t); r > 52; r = r / 52 | 0)
    n = b(r % 52) + n;
  return b(r % 52) + n;
}
function N(t, n) {
  let r = n.length;
  for (; r; )
    t = t * 33 ^ n.charCodeAt(--r);
  return t;
}
function R(t) {
  return z(N(5381, t) >>> 0);
}
var j = /\s*!(important)?/i;
function q(t) {
  return typeof t == "string" ? j.test(t) : !1;
}
function $(t) {
  return typeof t == "string" ? t.replace(j, "").trim() : t;
}
function tt(t) {
  return typeof t == "string" ? t.replaceAll(" ", "_") : t;
}
var d = (t) => {
  const n = /* @__PURE__ */ new Map();
  return (...o) => {
    const e = JSON.stringify(o);
    if (n.has(e))
      return n.get(e);
    const i = t(...o);
    return n.set(e, i), i;
  };
};
function O(...t) {
  return t.filter(Boolean).reduce((r, o) => (Object.keys(o).forEach((e) => {
    const i = r[e], s = o[e];
    m(i) && m(s) ? r[e] = O(i, s) : r[e] = s;
  }), r), {});
}
var k = (t) => t != null;
function y(t, n, r = {}) {
  const { stop: o, getKey: e } = r;
  function i(s, a = []) {
    if (m(s) || Array.isArray(s)) {
      const f = {};
      for (const [c, l] of Object.entries(s)) {
        const u = (e == null ? void 0 : e(c, l)) ?? c, h = [...a, u];
        if (o != null && o(s, h))
          return n(s, a);
        const p = i(l, h);
        k(p) && (f[u] = p);
      }
      return f;
    }
    return n(s, a);
  }
  return i(t);
}
function B(t, n) {
  return Array.isArray(t) ? t.map((r) => n(r)) : m(t) ? y(t, (r) => n(r)) : n(t);
}
function H(t, n) {
  return t.reduce(
    (r, o, e) => {
      const i = n[e];
      return o != null && (r[i] = o), r;
    },
    {}
  );
}
function A(t, n, r = !0) {
  const { utility: o, conditions: e } = n, { hasShorthand: i, resolveShorthand: s } = o;
  return y(
    t,
    (a) => Array.isArray(a) ? H(a, e.breakpoints.keys) : a,
    {
      stop: (a) => Array.isArray(a),
      getKey: r ? (a) => i ? s(a) : a : void 0
    }
  );
}
var M = {
  shift: (t) => t,
  finalize: (t) => t,
  breakpoints: { keys: [] }
}, _ = (t) => typeof t == "string" ? t.replaceAll(/[\n\s]+/g, " ") : t;
function nt(t) {
  const { utility: n, hash: r, conditions: o = M } = t, e = (s) => [n.prefix, s].filter(Boolean).join("-"), i = (s, a) => {
    let f;
    if (r) {
      const c = [...o.finalize(s), a];
      f = e(n.toHash(c, R));
    } else
      f = [...o.finalize(s), e(a)].join(":");
    return f;
  };
  return d(({ base: s, ...a } = {}) => {
    const f = Object.assign(a, s), c = A(f, t), l = /* @__PURE__ */ new Set();
    return y(c, (u, h) => {
      const p = q(u);
      if (u == null)
        return;
      const [w, ...S] = o.shift(h), x = E(S), P = n.transform(w, $(_(u)));
      let g = i(x, P.className);
      p && (g = `${g}!`), l.add(g);
    }), Array.from(l).join(" ");
  });
}
function F(...t) {
  return t.flat().filter((n) => m(n) && Object.keys(v(n)).length > 0);
}
function rt(t) {
  function n(e) {
    const i = F(...e);
    return i.length === 1 ? i : i.map((s) => A(s, t));
  }
  function r(...e) {
    return O(...n(e));
  }
  function o(...e) {
    return Object.assign({}, ...n(e));
  }
  return { mergeCss: d(r), assignCss: o };
}
var L = /([A-Z])/g, U = /^ms-/, et = d((t) => t.startsWith("--") ? t : t.replace(L, "-$1").replace(U, "-ms-").toLowerCase()), I = ["min", "max", "clamp", "calc"], T = new RegExp(`^(${I.join("|")})\\(.*\\)`), W = (t) => typeof t == "string" && T.test(t), D = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%", J = `(?:${D.split(",").join("|")})`, K = new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${J}$`), Q = (t) => typeof t == "string" && K.test(t), Z = (t) => typeof t == "string" && /^var\(--.+\)$/.test(t), st = {
  map: B,
  isCssFunction: W,
  isCssVar: Z,
  isCssUnit: Q
}, ot = (t, n) => {
  if (!(t != null && t.defaultValues))
    return n;
  const r = typeof t.defaultValues == "function" ? t.defaultValues(n) : t.defaultValues;
  return Object.assign({}, r, v(n));
}, it = (t = {}) => {
  const n = (e) => {
    var i;
    return {
      className: [t.className, e].filter(Boolean).join("__"),
      base: ((i = t.base) == null ? void 0 : i[e]) ?? {},
      variants: {},
      defaultVariants: t.defaultVariants ?? {},
      compoundVariants: t.compoundVariants ? G(t.compoundVariants, e) : []
    };
  }, o = (t.slots ?? []).map((e) => [e, n(e)]);
  for (const [e, i] of Object.entries(t.variants ?? {}))
    for (const [s, a] of Object.entries(i))
      o.forEach(([f, c]) => {
        var l;
        (l = c.variants)[e] ?? (l[e] = {}), c.variants[e][s] = a[f] ?? {};
      });
  return Object.fromEntries(o);
}, G = (t, n) => t.filter((r) => r.css[n]).map((r) => ({ ...r, css: r.css[n] }));
function at(t, ...n) {
  const r = Object.getOwnPropertyDescriptors(t), o = Object.keys(r), e = (s) => {
    const a = {};
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      r[c] && (Object.defineProperty(a, c, r[c]), delete r[c]);
    }
    return a;
  }, i = (s) => e(Array.isArray(s) ? s : o.filter(s));
  return n.map(i).concat(e(o));
}
var ct = (...t) => t.filter(Boolean).reduce((n, r) => Array.from(/* @__PURE__ */ new Set([...n, ...r])), []), C = ["htmlSize", "htmlTranslate", "htmlWidth", "htmlHeight"];
function X(t) {
  return C.includes(t) ? t.replace("html", "").toLowerCase() : t;
}
function Y(t) {
  return Object.fromEntries(Object.entries(t).map(([n, r]) => [X(n), r]));
}
Y.keys = C;
export {
  v as compact,
  nt as createCss,
  rt as createMergeCss,
  E as filterBaseConditions,
  ot as getPatternStyles,
  G as getSlotCompoundVariant,
  it as getSlotRecipes,
  et as hypenateProperty,
  V as isBaseCondition,
  m as isObject,
  B as mapObject,
  d as memo,
  O as mergeProps,
  Y as normalizeHTMLProps,
  st as patternFns,
  at as splitProps,
  R as toHash,
  ct as uniq,
  y as walkObject,
  tt as withoutSpace
};
//# sourceMappingURL=helpers.mjs.map
