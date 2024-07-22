import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const Logout = (
  {
    title = 'Logout',
    titleId = 'CDS-LogoutIcon',
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
      d="M9.75 3A2.25 2.25 0 0 0 7.5 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0A2.25 2.25 0 0 0 9.75 17h4A2.25 2.25 0 0 0 16 14.75v-9.5A2.25 2.25 0 0 0 13.75 3z"
    />
    <path
      fill="currentColor"
      d="M12.25 10.75a.75.75 0 0 0 0-1.5H6.56l.97-.97a.75.75 0 0 0-1.06-1.06L4.22 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97z"
    />
  </svg>
);
const ForwardRef = forwardRef(Logout);
export { ForwardRef as Logout };
