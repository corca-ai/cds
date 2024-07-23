import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const CurrencyWon = (
  {
    title = 'CurrencyWon',
    titleId = 'CDS-CurrencyWonIcon',
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
      d="m4.667 5 2.696 10L10 6.67 12.571 15l2.762-10M16 8.34H4m12 2.91H4"
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyWon);
export { ForwardRef as CurrencyWon };
