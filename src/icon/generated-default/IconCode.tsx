import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconCode = (
  {
    title = 'IconCode',
    titleId = 'CDS-IconCodeIcon',
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
    viewBox="0 0 20 20"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.556 6.5 2 10l3.556 3.5m8.888-7L18 10l-3.556 3.5M11.778 3 8.222 17"
    />
  </svg>
);
const ForwardRef = forwardRef(IconCode);
export { ForwardRef as IconCode };
