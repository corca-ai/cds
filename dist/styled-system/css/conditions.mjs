import { withoutSpace as s } from "../helpers.mjs";
const a = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_closed,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_starting,base", i = new Set(a.split(","));
function o(r) {
  return i.has(r) || /^@|&|&$/.test(r);
}
const l = /^_/, c = /&|@/;
function u(r) {
  return r.map((e) => i.has(e) ? e.replace(l, "") : c.test(e) ? `[${s(e.trim())}]` : e);
}
function p(r) {
  return r.sort((e, n) => {
    const _ = o(e), t = o(n);
    return _ && !t ? 1 : !_ && t ? -1 : 0;
  });
}
export {
  u as finalizeConditions,
  o as isCondition,
  p as sortConditions
};
//# sourceMappingURL=conditions.mjs.map
