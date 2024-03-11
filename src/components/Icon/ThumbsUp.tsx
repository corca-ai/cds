import { type IconProps } from './type';
import { color } from '../styles';

export function ThumbsUp({ color: c = color['grey-80'], size = 20 }: IconProps) {
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
        d="M12.539 14.5703C11.1349 14.6037 9.7416 14.317 8.46479 13.7318L8.1577 13.591C7.79065 13.4228 7.39966 13.3153 7 13.2719V8.0491C7.05159 8.01929 7.10156 7.98633 7.14961 7.95029C8.43643 6.98517 9.31813 5.57715 9.62537 4.00021C10.4506 4.0142 11.0897 4.73316 11.003 5.55745L10.8704 6.8168C10.7616 7.85007 11.5718 8.75 12.6108 8.75H14.2052C14.9635 8.75 15.5471 9.41965 15.4435 10.1708L15.1058 12.619C14.955 13.7122 14.0337 14.5347 12.9304 14.561L12.539 14.5703ZM5.5 8.25H4.5V13.25H5.5V8.25ZM7.83981 15.0954C9.32366 15.7755 10.9429 16.1087 12.5747 16.0699L12.9662 16.0605C14.8048 16.0168 16.3404 14.646 16.5917 12.824L16.9294 10.3758C17.1573 8.72324 15.8734 7.25 14.2052 7.25H12.6108C12.4624 7.25 12.3466 7.12144 12.3622 6.97383L12.4947 5.71448C12.6756 3.99638 11.3284 2.5 9.60085 2.5H9.23673C8.73718 2.5 8.30911 2.85725 8.21975 3.34874L8.16468 3.65165C7.93973 4.88883 7.25589 5.99543 6.25 6.75H4.25C3.55964 6.75 3 7.30964 3 8V13.5C3 14.1904 3.55964 14.75 4.25 14.75H6.59525C6.91882 14.75 7.23858 14.8198 7.53272 14.9546L7.83981 15.0954Z"
        fill={c}
      />
    </svg>
  );
}
