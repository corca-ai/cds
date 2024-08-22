import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconCoins = (
  {
    title = 'IconCoins',
    titleId = 'CDS-IconCoinsIcon',
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
      d="M4 6c0 .796.632 1.559 1.757 2.121S8.41 9 10 9s3.117-.316 4.243-.879C15.368 7.56 16 6.796 16 6M4 6c0-.796.632-1.559 1.757-2.121S8.41 3 10 3s3.117.316 4.243.879C15.368 4.44 16 5.204 16 6M4 6v4m12-4v4M4 10c0 1.657 2.687 3 6 3s6-1.343 6-3M4 10v4c0 1.657 2.687 3 6 3s6-1.343 6-3v-4"
    />
  </svg>
);
const ForwardRef = forwardRef(IconCoins);
export { ForwardRef as IconCoins };
