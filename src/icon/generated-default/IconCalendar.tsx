import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
import type { IconProps } from '../share/props';
const IconCalendar = (
  {
    title = 'IconCalendar',
    titleId = 'CDS-IconCalendarIcon',
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
      d="M7.483 3.778c0-.43-.361-.778-.808-.778-.446 0-.807.348-.807.778v.421c-.265.06-.516.144-.757.262a3.97 3.97 0 0 0-1.765 1.7c-.243.46-.345.958-.393 1.525-.047.55-.047 1.23-.047 2.073v1.519c0 .843 0 1.523.047 2.073.048.567.15 1.065.393 1.526a3.97 3.97 0 0 0 1.765 1.7c.479.234.996.332 1.584.378C7.267 17 7.973 17 8.85 17h3.643c.347 0 .584 0 .792-.02 1.901-.19 3.404-1.637 3.6-3.468.022-.2.022-.428.022-.762V9.76c0-.844 0-1.524-.046-2.074-.049-.567-.15-1.065-.394-1.526a3.97 3.97 0 0 0-1.765-1.7 3.4 3.4 0 0 0-.756-.26v-.422c0-.43-.362-.778-.808-.778s-.808.348-.808.778v.268a64 64 0 0 0-1.365-.009H8.849c-.51 0-.964 0-1.366.009zM5.845 5.847c.212-.104.493-.176.982-.215.498-.039 1.138-.04 2.056-.04h2.046c.918 0 1.558.001 2.057.04.488.039.77.11.982.215.456.224.826.58 1.059 1.02.108.204.183.475.223.946q.022.279.031.631H4.531q.008-.352.032-.631c.04-.471.114-.742.223-.946a2.38 2.38 0 0 1 1.059-1.02M4.522 10v1.244c0 .885 0 1.5.041 1.98.04.471.114.742.223.946.232.44.603.796 1.059 1.02.212.104.493.176.982.215.498.039 1.138.04 2.056.04h3.56c.415 0 .56-.002.675-.013 1.14-.114 2.042-.982 2.16-2.08.012-.11.013-.25.013-.65V10z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(IconCalendar);
export { ForwardRef as IconCalendar };
