import { type IconProps } from './type';
import { color } from '../styles';

export function ArrowLeftLarge({ color: c = color['grey-80'], size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0937 12C20.0937 12.5232 19.6805 12.9474 19.1707 12.9474L7.24549 12.9474L10.5931 16.3827C10.9536 16.7527 10.9536 17.3525 10.5931 17.7225C10.2327 18.0925 9.64822 18.0925 9.28772 17.7226L4.36415 12.6699C4.19102 12.4923 4.09375 12.2513 4.09375 12C4.09375 11.7487 4.19102 11.5077 4.36415 11.3301L9.28772 6.27744C9.64822 5.90749 10.2327 5.90752 10.5931 6.27751C10.9536 6.6475 10.9536 7.24734 10.5931 7.61729L7.24549 11.0526L19.1707 11.0526C19.6805 11.0526 20.0937 11.4768 20.0937 12Z"
        fill={c}
      />
    </svg>
  );
}
