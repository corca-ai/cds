import { useEffect as o } from "react";
const i = (t, r) => {
  o(() => {
    let u = !1, s = !1;
    const c = (n) => {
      u || !s || t.current == null || t.current.contains(n.target) || r(n);
    }, e = (n) => {
      s = t.current != null, u = t.current != null && t.current.contains(n.target);
    };
    return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), document.addEventListener("click", c), () => {
      document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e), document.removeEventListener("click", c);
    };
  }, [t, r]);
};
export {
  i as default
};
//# sourceMappingURL=hook.mjs.map
