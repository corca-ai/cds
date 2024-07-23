import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const ChevronDownSmall = (
  {
    title = 'ChevronDownSmall',
    titleId = 'CDS-ChevronDownSmallIcon',
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
      d="M5.137 7.24a.77.77 0 0 1 1.117 0l3.652 3.785L13.56 7.24a.77.77 0 0 1 1.116 0 .84.84 0 0 1 0 1.157l-4.21 4.363a.77.77 0 0 1-1.117 0l-4.21-4.363a.84.84 0 0 1 0-1.157"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronDownSmall);
export { ForwardRef as ChevronDownSmall };
