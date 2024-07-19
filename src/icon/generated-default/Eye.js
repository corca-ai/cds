import * as React from 'react';
const SvgEye = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      stroke="#363738"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.333 10a1.667 1.667 0 1 0 3.334 0 1.667 1.667 0 0 0-3.334 0"
    />
    <path
      stroke="#363738"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 10q-3 5-7.5 5t-7.5-5q3-5 7.5-5t7.5 5"
    />
  </svg>
);
export default SvgEye;
