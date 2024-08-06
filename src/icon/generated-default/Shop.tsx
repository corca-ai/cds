import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconShop = (
  {
    title = 'IconShop',
    titleId = 'CDS-IconShopIcon',
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
      fillRule="evenodd"
      d="M13.257 3H6.743a1.25 1.25 0 0 0-.983.478L3.374 6.515A1.75 1.75 0 0 0 3 7.595v.655a2.75 2.75 0 0 0 1.5 2.45v4.55c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75V10.7A2.75 2.75 0 0 0 17 8.25v-.481c0-.504-.17-.994-.48-1.39l-2.28-2.901A1.25 1.25 0 0 0 13.257 3M13 15.5h.75a.25.25 0 0 0 .25-.25V11a2.74 2.74 0 0 1-2-.863A2.74 2.74 0 0 1 10 11a2.74 2.74 0 0 1-2-.863A2.74 2.74 0 0 1 6 11v4.25c0 .138.112.25.25.25H10V13a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm-7-6h-.25c-.69 0-1.25-.56-1.25-1.25v-.654a.25.25 0 0 1 .053-.155L6.865 4.5h6.27l2.205 2.805a.75.75 0 0 1 .16.464v.481c0 .69-.56 1.25-1.25 1.25H14c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5a1.25 1.25 0 1 1-2.5 0v-.5a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(IconShop);
export { ForwardRef as IconShop };
