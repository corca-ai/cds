import * as React from 'react';
const SvgFilter = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#363738"
      d="M3 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6M6.75 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M5.5 9.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgFilter;
