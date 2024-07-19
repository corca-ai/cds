import * as React from 'react';
const SvgEditSquare = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      stroke="#363738"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.833 5.833H5A1.667 1.667 0 0 0 3.333 7.5V15A1.667 1.667 0 0 0 5 16.667h7.5A1.667 1.667 0 0 0 14.166 15v-.833m-.833-10 2.5 2.5m1.154-1.18a1.75 1.75 0 0 0-2.475-2.474L7.5 10v2.5H10z"
    />
  </svg>
);
export default SvgEditSquare;
