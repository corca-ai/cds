import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const Sort = (
  {
    title = 'Sort',
    titleId = 'CDS-SortIcon',
    size = 20,
    color = '#363738',
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps,
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
      stroke="#E4E5E9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 7.5 6.474 5m0 0 2.473 2.5M6.474 5v10M16 12.5 13.526 15m0 0-2.473-2.5m2.473 2.5V5"
    />
  </svg>
);
const ForwardRef = forwardRef(Sort);
export { ForwardRef as Sort };
