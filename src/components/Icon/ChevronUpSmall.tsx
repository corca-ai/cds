import { type IconProps } from './type';
import { color } from '../styles';

export function ChevronUpSmall({ color: c = color['grey-80'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7688 12.7604C14.4605 13.0799 13.9606 13.0799 13.6523 12.7604L10 8.97527L6.34772 12.7604C6.03941 13.0799 5.53954 13.0799 5.23123 12.7604C4.92292 12.4408 4.92292 11.9228 5.23123 11.6033L9.44176 7.23964C9.75007 6.92012 10.2499 6.92012 10.5582 7.23964L14.7688 11.6033C15.0771 11.9228 15.0771 12.4408 14.7688 12.7604Z"
        fill={c}
      />
    </svg>
  );
}
