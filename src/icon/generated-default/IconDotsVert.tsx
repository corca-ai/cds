import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconDotsVert = (
  {
    title = 'IconDotsVert',
    titleId = 'CDS-IconDotsVertIcon',
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
      d="M11.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
const ForwardRef = forwardRef(IconDotsVert);
export { ForwardRef as IconDotsVert };
