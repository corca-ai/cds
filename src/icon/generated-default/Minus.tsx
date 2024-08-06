import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconMinus = (
  {
    title = 'IconMinus',
    titleId = 'CDS-IconMinusIcon',
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
      fill="#4A4A4A"
      fillRule="evenodd"
      d="M6 10a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 10"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(IconMinus);
export { ForwardRef as IconMinus };
