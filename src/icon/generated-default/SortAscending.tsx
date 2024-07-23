import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const SortAscending = (
  {
    title = 'SortAscending',
    titleId = 'CDS-SortAscendingIcon',
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
      d="M4 7.5 6.564 5m0 0 2.563 2.5M6.564 5v10"
    />
    <path
      stroke="#E4E5E9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 12.5 13.436 15m0 0-2.563-2.5m2.563 2.5V5"
    />
  </svg>
);
const ForwardRef = forwardRef(SortAscending);
export { ForwardRef as SortAscending };
