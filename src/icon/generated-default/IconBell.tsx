import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconBell = (
  {
    title = 'IconBell',
    titleId = 'CDS-IconBellIcon',
    size = 20,
    color = '#363738',
    ...props
  }: SVGProps<SVGSVGElement> & IconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 18 18"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.75 12.75v.75a2.25 2.25 0 0 0 4.5 0v-.75m-3.75-9a1.5 1.5 0 1 1 3 0 5.25 5.25 0 0 1 2.124 1.834c.529.793.832 2.464.876 3.416s.9 3.75.9 3.75H3.6s.855-2.798.9-3.75.348-2.623.876-3.416A5.25 5.25 0 0 1 7.5 3.75"
    />
  </svg>
);
const ForwardRef = forwardRef(IconBell);
export { ForwardRef as IconBell };
