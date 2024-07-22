import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const ArrowLeftSmall = (
  {
    title = 'ArrowLeftSmall',
    titleId = 'CDS-ArrowLeftSmallIcon',
    size = 20,
    color = '#363738',
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps,
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
      d="M16.75 10a.75.75 0 0 1-.75.75H6.31l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L6.31 9.25H16a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeftSmall);
export { ForwardRef as ArrowLeftSmall };
