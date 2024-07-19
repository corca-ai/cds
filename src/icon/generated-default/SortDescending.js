import * as React from 'react';
const SvgSortDescending = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      stroke="#E4E5E9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 7.5 6.564 5m0 0 2.563 2.5M6.564 5v10"
    />
    <path
      stroke="#363738"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 12.5 13.436 15m0 0-2.563-2.5m2.563 2.5V5"
    />
  </svg>
);
export default SvgSortDescending;
