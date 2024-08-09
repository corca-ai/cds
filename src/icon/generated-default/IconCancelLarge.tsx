import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconCancelLarge = (
  {
    title = 'IconCancelLarge',
    titleId = 'CDS-IconCancelLargeIcon',
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
    viewBox="0 0 24 24"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M17.44 19.56a1.5 1.5 0 0 0 2.12-2.12L14.122 12l5.44-5.44a1.5 1.5 0 0 0-2.122-2.12L12 9.878l-5.44-5.44a1.5 1.5 0 1 0-2.12 2.122L9.878 12l-5.44 5.44a1.5 1.5 0 0 0 2.122 2.12L12 14.122z"
    />
  </svg>
);
const ForwardRef = forwardRef(IconCancelLarge);
export { ForwardRef as IconCancelLarge };
