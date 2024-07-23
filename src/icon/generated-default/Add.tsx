import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const Add = (
  {
    title = 'Add',
    titleId = 'CDS-AddIcon',
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
      fill="currentColor"
      d="M10.75 4.25a.75.75 0 0 0-1.5 0v5h-5a.75.75 0 0 0 0 1.5h5v5a.75.75 0 0 0 1.5 0v-5h5a.75.75 0 0 0 0-1.5h-5z"
    />
  </svg>
);
const ForwardRef = forwardRef(Add);
export { ForwardRef as Add };
