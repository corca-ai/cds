import { getPatternStyles as a, patternFns as c } from "../helpers.mjs";
import { css as p } from "../css/css.mjs";
const o = {
  transform(t, { map: e }) {
    const { ratio: n = 4 / 3, ...s } = t;
    return {
      position: "relative",
      _before: {
        content: '""',
        display: "block",
        height: "0",
        paddingBottom: e(n, (r) => `${1 / r * 100}%`)
      },
      "&>*": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%"
      },
      "&>img, &>video": {
        objectFit: "cover"
      },
      ...s
    };
  }
}, i = (t = {}) => {
  const e = a(o, t);
  return o.transform(e, c);
}, l = (t) => p(i(t));
l.raw = i;
export {
  l as aspectRatio,
  i as getAspectRatioStyle
};
//# sourceMappingURL=aspect-ratio.mjs.map
