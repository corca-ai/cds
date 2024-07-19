import * as React from 'react';
const SvgTag = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path fill="#363738" d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fill="#363738"
      fillRule="evenodd"
      d="M11.276 3.5a3.75 3.75 0 0 0-2.702 1.149L4.321 9.066a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341V6.75a3.25 3.25 0 0 0-3.25-3.25zM9.655 5.69a2.25 2.25 0 0 1 1.62-.69h1.975c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26L9.717 14.77a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.017-1.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
