import * as React from 'react';
const SvgList = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#363738"
      d="M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      fill="#363738"
      fillRule="evenodd"
      d="M6.5 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 5M6.5 10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 10M6.5 15a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 15"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgList;
