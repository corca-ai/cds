function p(t) {
  return typeof t == "object" && t != null && !Array.isArray(t);
}
function x(t) {
  return Object.fromEntries(Object.entries(t ?? {}).filter(([r, n]) => n !== void 0));
}
var N = (t) => t === "base";
function P(t) {
  return t.slice().filter((r) => !N(r));
}
function d(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
}
function k(t) {
  let r = "", n;
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = d(n % 52) + r;
  return d(n % 52) + r;
}
function q(t, r) {
  let n = r.length;
  for (; n; )
    t = t * 33 ^ r.charCodeAt(--n);
  return t;
}
function z(t) {
  return k(q(5381, t) >>> 0);
}
var g = /\s*!(important)?/i;
function B(t) {
  return typeof t == "string" ? g.test(t) : !1;
}
function V(t) {
  return typeof t == "string" ? t.replace(g, "").trim() : t;
}
function J(t) {
  return typeof t == "string" ? t.replaceAll(" ", "_") : t;
}
var y = (t) => {
  const r = /* @__PURE__ */ new Map();
  return (...o) => {
    const e = JSON.stringify(o);
    if (r.has(e))
      return r.get(e);
    const i = t(...o);
    return r.set(e, i), i;
  };
};
function j(...t) {
  return t.filter(Boolean).reduce((n, o) => (Object.keys(o).forEach((e) => {
    const i = n[e], s = o[e];
    p(i) && p(s) ? n[e] = j(i, s) : n[e] = s;
  }), n), {});
}
var E = (t) => t != null;
function O(t, r, n = {}) {
  const { stop: o, getKey: e } = n;
  function i(s, c = []) {
    if (p(s) || Array.isArray(s)) {
      const f = {};
      for (const [a, l] of Object.entries(s)) {
        const u = (e == null ? void 0 : e(a, l)) ?? a, m = [...c, u];
        if (o != null && o(s, m))
          return r(s, c);
        const h = i(l, m);
        E(h) && (f[u] = h);
      }
      return f;
    }
    return r(s, c);
  }
  return i(t);
}
function R(t, r) {
  return t.reduce(
    (n, o, e) => {
      const i = r[e];
      return o != null && (n[i] = o), n;
    },
    {}
  );
}
function v(t, r, n = !0) {
  const { utility: o, conditions: e } = r, { hasShorthand: i, resolveShorthand: s } = o;
  return O(
    t,
    (c) => Array.isArray(c) ? R(c, e.breakpoints.keys) : c,
    {
      stop: (c) => Array.isArray(c),
      getKey: n ? (c) => i ? s(c) : c : void 0
    }
  );
}
var _ = {
  shift: (t) => t,
  finalize: (t) => t,
  breakpoints: { keys: [] }
}, M = (t) => typeof t == "string" ? t.replaceAll(/[\n\s]+/g, " ") : t;
function K(t) {
  const { utility: r, hash: n, conditions: o = _ } = t, e = (s) => [r.prefix, s].filter(Boolean).join("-"), i = (s, c) => {
    let f;
    if (n) {
      const a = [...o.finalize(s), c];
      f = e(r.toHash(a, z));
    } else
      f = [...o.finalize(s), e(c)].join(":");
    return f;
  };
  return y(({ base: s, ...c } = {}) => {
    const f = Object.assign(c, s), a = v(f, t), l = /* @__PURE__ */ new Set();
    return O(a, (u, m) => {
      const h = B(u);
      if (u == null)
        return;
      const [A, ...C] = o.shift(m), w = P(C), S = r.transform(A, V(M(u)));
      let b = i(w, S.className);
      h && (b = `${b}!`), l.add(b);
    }), Array.from(l).join(" ");
  });
}
function $(...t) {
  return t.flat().filter((r) => p(r) && Object.keys(x(r)).length > 0);
}
function L(t) {
  function r(e) {
    const i = $(...e);
    return i.length === 1 ? i : i.map((s) => v(s, t));
  }
  function n(...e) {
    return j(...r(e));
  }
  function o(...e) {
    return Object.assign({}, ...r(e));
  }
  return { mergeCss: y(n), assignCss: o };
}
var H = /([A-Z])/g, I = /^ms-/, Q = y((t) => t.startsWith("--") ? t : t.replace(H, "-$1").replace(I, "-ms-").toLowerCase()), D = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${D.split(",").join("|")}`;
var U = (t = {}) => {
  const r = (e) => {
    var i;
    return {
      className: [t.className, e].filter(Boolean).join("__"),
      base: ((i = t.base) == null ? void 0 : i[e]) ?? {},
      variants: {},
      defaultVariants: t.defaultVariants ?? {},
      compoundVariants: t.compoundVariants ? F(t.compoundVariants, e) : []
    };
  }, o = (t.slots ?? []).map((e) => [e, r(e)]);
  for (const [e, i] of Object.entries(t.variants ?? {}))
    for (const [s, c] of Object.entries(i))
      o.forEach(([f, a]) => {
        var l;
        (l = a.variants)[e] ?? (l[e] = {}), a.variants[e][s] = c[f] ?? {};
      });
  return Object.fromEntries(o);
}, F = (t, r) => t.filter((n) => n.css[r]).map((n) => ({ ...n, css: n.css[r] }));
function W(t, ...r) {
  const n = Object.getOwnPropertyDescriptors(t), o = Object.keys(n), e = (s) => {
    const c = {};
    for (let f = 0; f < s.length; f++) {
      const a = s[f];
      n[a] && (Object.defineProperty(c, a, n[a]), delete n[a]);
    }
    return c;
  }, i = (s) => e(Array.isArray(s) ? s : o.filter(s));
  return r.map(i).concat(e(o));
}
var Z = (...t) => t.filter(Boolean).reduce((r, n) => Array.from(/* @__PURE__ */ new Set([...r, ...n])), []);
export {
  x as compact,
  K as createCss,
  L as createMergeCss,
  P as filterBaseConditions,
  F as getSlotCompoundVariant,
  U as getSlotRecipes,
  Q as hypenateProperty,
  N as isBaseCondition,
  p as isObject,
  y as memo,
  j as mergeProps,
  W as splitProps,
  z as toHash,
  Z as uniq,
  O as walkObject,
  J as withoutSpace
};
//# sourceMappingURL=helpers.mjs.map
