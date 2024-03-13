import { type IconProps } from './type';
import { color } from '../styles';

export function ChevronDownSmall({ color: c = color['grey-80'], size = 20 }: IconProps) {
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
        d="M5.23123 7.23964C5.53954 6.92012 6.03941 6.92012 6.34772 7.23964L10 11.0247L13.6523 7.23964C13.9606 6.92012 14.4605 6.92012 14.7688 7.23964C15.0771 7.55916 15.0771 8.0772 14.7688 8.39672L10.5582 12.7604C10.2499 13.0799 9.75007 13.0799 9.44176 12.7604L5.23123 8.39672C4.92292 8.0772 4.92292 7.55916 5.23123 7.23964Z"
        fill={c}
      />
    </svg>
  );
}
