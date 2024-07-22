import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: number;
}
const ChatFocused = (
  {
    title = 'ChatFocused',
    titleId = 'CDS-ChatFocusedIcon',
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
      d="M14.25 2.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V3.25a.75.75 0 0 1 .75-.75M16.78 5.53l1-1a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06M4.5 8.75A3.25 3.25 0 0 1 7.75 5.5h4a.75.75 0 0 0 0-1.5h-4A4.75 4.75 0 0 0 3 8.75v.75c0 2.1 1.362 3.88 3.25 4.508V16a.75.75 0 0 0 1.196.603l3.178-2.353h1.626A4.75 4.75 0 0 0 17 9.5a.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-1.873a.75.75 0 0 0-.447.147l-2.18 1.614V13.43a.75.75 0 0 0-.61-.737A3.25 3.25 0 0 1 4.5 9.5z"
    />
    <path
      fill="currentColor"
      d="M6.75 7.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM6 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M18.25 7.75a.75.75 0 0 0 0-1.5H17a.75.75 0 0 0 0 1.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(ChatFocused);
export { ForwardRef as ChatFocused };
