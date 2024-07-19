import * as React from 'react';
const SvgChatPlus = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#363738"
      d="M4.5 8.75A3.25 3.25 0 0 1 7.75 5.5h3.75a.75.75 0 0 0 0-1.5H7.75A4.75 4.75 0 0 0 3 8.75v.75c0 2.1 1.362 3.88 3.25 4.508V16a.75.75 0 0 0 1.196.603l3.178-2.353h1.626A4.75 4.75 0 0 0 17 9.5a.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-1.873a.75.75 0 0 0-.447.147l-2.18 1.614V13.43a.75.75 0 0 0-.61-.737A3.25 3.25 0 0 1 4.5 9.5z"
    />
    <path
      fill="#363738"
      d="M13 6c0-.301.244-.545.546-.545h.909v-.91a.546.546 0 0 1 1.09 0v.91h.91a.545.545 0 1 1 0 1.09h-.91v.91a.546.546 0 0 1-1.09 0v-.91h-.91A.545.545 0 0 1 13 6"
    />
  </svg>
);
export default SvgChatPlus;