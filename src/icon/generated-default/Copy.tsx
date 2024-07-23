import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const Copy = (
  {
    title = 'Copy',
    titleId = 'CDS-CopyIcon',
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
      d="M4.675 13.158A1.34 1.34 0 0 1 4 12V5.333C4 4.6 4.6 4 5.333 4H12c.5 0 .772.257 1 .667M6.667 8.445a1.78 1.78 0 0 1 1.778-1.778h5.777A1.78 1.78 0 0 1 16 8.445v5.777A1.78 1.78 0 0 1 14.222 16H8.445a1.78 1.78 0 0 1-1.778-1.778z"
    />
  </svg>
);
const ForwardRef = forwardRef(Copy);
export { ForwardRef as Copy };
