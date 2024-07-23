import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const DotsHor = (
  {
    title = 'DotsHor',
    titleId = 'CDS-DotsHorIcon',
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
      d="M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
const ForwardRef = forwardRef(DotsHor);
export { ForwardRef as DotsHor };
