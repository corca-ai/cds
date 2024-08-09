import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconEditSquare = (
  {
    title = 'IconEditSquare',
    titleId = 'CDS-IconEditSquareIcon',
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
      d="M5.833 5.833H5A1.667 1.667 0 0 0 3.333 7.5V15A1.667 1.667 0 0 0 5 16.667h7.5A1.667 1.667 0 0 0 14.166 15v-.833m-.833-10 2.5 2.5m1.154-1.18a1.75 1.75 0 0 0-2.475-2.474L7.5 10v2.5H10z"
    />
  </svg>
);
const ForwardRef = forwardRef(IconEditSquare);
export { ForwardRef as IconEditSquare };
