import { type IconProps } from './type';
import { color } from '../styles';

export function EyeClosed({ color: c = color['grey-80'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9063 10C15.0396 12.0003 12.7063 13 9.90625 13C7.10625 13 4.77292 12.0003 2.90625 10M2.90625 14.5001L4.85069 11.6501M16.9061 14.4821L14.9679 11.6501M7.57292 16L7.96181 13M12.2396 16L11.8507 13"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
