import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const PictureSearch = (
  {
    title = 'PictureSearch',
    titleId = 'CDS-PictureSearchIcon',
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 6.667h.008M9.583 17.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5h10A2.5 2.5 0 0 1 17.5 5v4.583m-.666 7.25 1.5 1.5m-15.834-5 4.167-4.166c.773-.745 1.726-.745 2.5 0l1.666 1.666M12.5 15a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(PictureSearch);
export { ForwardRef as PictureSearch };
