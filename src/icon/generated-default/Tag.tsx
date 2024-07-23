import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const Tag = (
  {
    title = 'Tag',
    titleId = 'CDS-TagIcon',
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
    <path fill="currentColor" d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.276 3.5a3.75 3.75 0 0 0-2.702 1.149L4.321 9.066a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341V6.75a3.25 3.25 0 0 0-3.25-3.25zM9.655 5.69a2.25 2.25 0 0 1 1.62-.69h1.975c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26L9.717 14.77a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.017-1.75z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Tag);
export { ForwardRef as Tag };
