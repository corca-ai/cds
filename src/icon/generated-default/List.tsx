import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const List = (
  {
    title = 'List',
    titleId = 'CDS-ListIcon',
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
      d="M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.5 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 5M6.5 10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 10M6.5 15a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 15"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(List);
export { ForwardRef as List };
