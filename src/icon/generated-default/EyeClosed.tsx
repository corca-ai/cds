import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const EyeClosed = (
  {
    title = 'EyeClosed',
    titleId = 'CDS-EyeClosedIcon',
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
      stroke="#737678"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.813 10q-2.8 3-7 3t-7-3m0 4.5 1.944-2.85m12.055 2.832-1.938-2.832M7.48 16l.39-3m4.277 3-.39-3"
    />
  </svg>
);
const ForwardRef = forwardRef(EyeClosed);
export { ForwardRef as EyeClosed };
