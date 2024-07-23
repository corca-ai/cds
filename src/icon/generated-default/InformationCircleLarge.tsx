import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const InformationCircleLarge = (
  {
    title = 'InformationCircleLarge',
    titleId = 'CDS-InformationCircleLargeIcon',
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
      d="M12 17.714c-.592 0-1.071-.48-1.071-1.071v-5a1.071 1.071 0 1 1 2.143 0v5c0 .592-.48 1.071-1.072 1.071M10.571 7.714a1.429 1.429 0 1 1 2.858 0 1.429 1.429 0 0 1-2.858 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2.143 0a7.857 7.857 0 1 1-15.714 0 7.857 7.857 0 0 1 15.714 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(InformationCircleLarge);
export { ForwardRef as InformationCircleLarge };
