import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const InformationCircleSmall = (
  {
    title = 'InformationCircleSmall',
    titleId = 'CDS-InformationCircleSmallIcon',
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
      d="M9.906 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 1 1 1.5 0v3.5a.75.75 0 0 1-.75.75M8.906 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.906 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(InformationCircleSmall);
export { ForwardRef as InformationCircleSmall };
