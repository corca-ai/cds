import * as React from 'react';
const SvgUserCircle = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#363738"
      fillRule="evenodd"
      d="M7 8.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      clipRule="evenodd"
    />
    <path
      fill="#363738"
      fillRule="evenodd"
      d="M15.168 15.435A7.5 7.5 0 1 1 4.832 4.565a7.5 7.5 0 0 1 10.336 10.87m-9.83-1.659a6 6 0 1 1 9.326 0A7.03 7.03 0 0 0 9.999 12a7.03 7.03 0 0 0-4.663 1.776m1.086 1.043A5.97 5.97 0 0 0 10 16c1.34 0 2.577-.44 3.576-1.181A5.53 5.53 0 0 0 10 13.5a5.53 5.53 0 0 0-3.576 1.319"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCircle;
