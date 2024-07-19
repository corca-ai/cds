import * as React from 'react';
const SvgLayout = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#363738"
      fillRule="evenodd"
      d="M3 6.75A3.75 3.75 0 0 1 6.75 3h5.5A3.75 3.75 0 0 1 16 6.75v5.5A3.75 3.75 0 0 1 12.25 16h-5.5A3.75 3.75 0 0 1 3 12.25zM6.75 4.5A2.25 2.25 0 0 0 4.5 6.75v.5h10v-.5a2.25 2.25 0 0 0-2.25-2.25zm3.75 4.25h-6v3.5a2.25 2.25 0 0 0 2.25 2.25h3.75zM12 14.5V8.75h2.5v3.5a2.25 2.25 0 0 1-2.25 2.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayout;
