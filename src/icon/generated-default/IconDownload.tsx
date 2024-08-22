import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconDownload = (
  {
    title = 'IconDownload',
    titleId = 'CDS-IconDownloadIcon',
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
      d="M4 13.39v1.528c0 .406.158.795.44 1.082.28.287.662.448 1.06.448h9c.398 0 .78-.161 1.06-.448.282-.287.44-.676.44-1.082V13.39M6.25 9.353 10 13.177m0 0 3.75-3.824M10 13.177V4"
    />
  </svg>
);
const ForwardRef = forwardRef(IconDownload);
export { ForwardRef as IconDownload };
