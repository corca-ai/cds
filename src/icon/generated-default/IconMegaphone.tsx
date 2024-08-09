import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconMegaphone = (
  {
    title = 'IconMegaphone',
    titleId = 'CDS-IconMegaphoneIcon',
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
    viewBox="0 0 27 24"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#525252"
      fillRule="evenodd"
      d="M22.95 2.632v4.283c.532 0 1.058.102 1.55.3.491.199.938.489 1.314.855s.674.8.878 1.279a3.85 3.85 0 0 1 0 3.018 3.9 3.9 0 0 1-.878 1.278 4.1 4.1 0 0 1-1.314.855c-.492.198-1.018.3-1.55.3v3.943c0 2.166-2.54 3.402-4.32 2.102l-2.781-2.031a11.86 11.86 0 0 0-5.05-2.113v3.737c0 .86-.318 1.69-.898 2.338a3.7 3.7 0 0 1-2.253 1.19 3.74 3.74 0 0 1-2.503-.542 3.57 3.57 0 0 1-1.523-2.008l-2.12-7.223a6.1 6.1 0 0 1-1.432-3.08A6.03 6.03 0 0 1 .517 7.76 6.2 6.2 0 0 1 2.71 5.14a6.46 6.46 0 0 1 3.283-1.105l4.075-.221a12.9 12.9 0 0 0 5.656-1.655L18.89.362c1.8-1.022 4.06.241 4.06 2.27M4.905 16.217l1.314 4.477a.94.94 0 0 0 .398.527.98.98 0 0 0 1.247-.17.92.92 0 0 0 .235-.613v-3.956l-2.106-.114q-.55-.03-1.088-.151M20.25 2.632l-3.166 1.8a15.6 15.6 0 0 1-6.285 1.963v7.647a14.6 14.6 0 0 1 6.67 2.67l2.78 2.03zM8.1 6.552l-1.958.106A3.7 3.7 0 0 0 3.735 7.72a3.5 3.5 0 0 0-1.036 2.367 3.5 3.5 0 0 0 .88 2.427 3.68 3.68 0 0 0 2.333 1.209l.23.02 1.957.105zm14.85 2.992v2.628c.344 0 .675-.129.925-.359s.4-.544.421-.878a1.3 1.3 0 0 0-.312-.92 1.36 1.36 0 0 0-.876-.462z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(IconMegaphone);
export { ForwardRef as IconMegaphone };
