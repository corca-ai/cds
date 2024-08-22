import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconReceipt = (
  {
    title = 'IconReceipt',
    titleId = 'CDS-IconReceiptIcon',
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
      d="M7.429 6.889h5.142M7.43 10h5.142m-1.714 3.111h1.714M4 17V4.556c0-.413.18-.809.502-1.1A1.8 1.8 0 0 1 5.714 3h8.572c.454 0 .89.164 1.212.456.321.291.502.687.502 1.1V17H4"
    />
  </svg>
);
const ForwardRef = forwardRef(IconReceipt);
export { ForwardRef as IconReceipt };
