import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const ChevronLeftSmall = (
  {
    title = 'ChevronLeftSmall',
    titleId = 'CDS-ChevronLeftSmallIcon',
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
      fill="currentColor"
      fillRule="evenodd"
      d="M11.78 5.47a.75.75 0 0 1 0 1.06L8.31 10l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronLeftSmall);
export { ForwardRef as ChevronLeftSmall };
