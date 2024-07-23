import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const Eye = (
  {
    title = 'Eye',
    titleId = 'CDS-EyeIcon',
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
      d="M8.333 10a1.667 1.667 0 1 0 3.334 0 1.667 1.667 0 0 0-3.334 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 10q-3 5-7.5 5t-7.5-5q3-5 7.5-5t7.5 5"
    />
  </svg>
);
const ForwardRef = forwardRef(Eye);
export { ForwardRef as Eye };
