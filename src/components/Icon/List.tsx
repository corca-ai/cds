import { type IconProps } from './type';
import { color } from '../styles';

export function List({ color: c = color['grey-80'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5C5 5.55228 4.55228 6 4 6C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4C4.55228 4 5 4.44772 5 5Z"
        fill={c}
      />
      <path
        d="M5 10C5 10.5523 4.55228 11 4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9C4.55228 9 5 9.44772 5 10Z"
        fill={c}
      />
      <path
        d="M5 15C5 15.5523 4.55228 16 4 16C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14C4.55228 14 5 14.4477 5 15Z"
        fill={c}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 5C6.5 4.58579 6.83579 4.25 7.25 4.25H16.25C16.6642 4.25 17 4.58579 17 5C17 5.41421 16.6642 5.75 16.25 5.75H7.25C6.83579 5.75 6.5 5.41421 6.5 5Z"
        fill={c}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 10C6.5 9.58579 6.83579 9.25 7.25 9.25H16.25C16.6642 9.25 17 9.58579 17 10C17 10.4142 16.6642 10.75 16.25 10.75H7.25C6.83579 10.75 6.5 10.4142 6.5 10Z"
        fill={c}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 15C6.5 14.5858 6.83579 14.25 7.25 14.25H16.25C16.6642 14.25 17 14.5858 17 15C17 15.4142 16.6642 15.75 16.25 15.75H7.25C6.83579 15.75 6.5 15.4142 6.5 15Z"
        fill={c}
      />
    </svg>
  );
}
