import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconArrowLeftLarge = (
  {
    title = 'IconArrowLeftLarge',
    titleId = 'CDS-IconArrowLeftLargeIcon',
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
      fillRule="evenodd"
      d="M20 12a.936.936 0 0 1-.923.947H7.152l3.347 3.436c.36.37.36.97 0 1.34a.906.906 0 0 1-1.305 0L4.27 12.67A.96.96 0 0 1 4 12a.96.96 0 0 1 .27-.67l4.924-5.053a.906.906 0 0 1 1.305 0c.36.37.36.97 0 1.34l-3.347 3.436h11.925c.51 0 .923.424.923.947"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(IconArrowLeftLarge);
export { ForwardRef as IconArrowLeftLarge };
