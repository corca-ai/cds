import { type IconProps } from './type';
import { color } from '../styles';

export function Dot({ color: c = color['grey-80'], size = 8 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_Dot">
        <circle id="Dot" cx="4" cy="4" r="3" fill={c} />
      </g>
    </svg>
  );
}
