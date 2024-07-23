import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const ChevronUpSmall = (
  {
    title = 'ChevronUpSmall',
    titleId = 'CDS-ChevronUpSmallIcon',
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
      d="M14.675 12.76a.77.77 0 0 1-1.117 0L9.907 8.975 6.254 12.76a.77.77 0 0 1-1.117 0 .84.84 0 0 1 0-1.157L9.348 7.24a.77.77 0 0 1 1.116 0l4.211 4.363a.84.84 0 0 1 0 1.157"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronUpSmall);
export { ForwardRef as ChevronUpSmall };
