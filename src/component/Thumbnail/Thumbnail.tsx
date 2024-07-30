import { forwardRef } from 'react';
import { cx, sva } from '../../styled-system/css';

export interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string | null;
  alt?: string;
  size?: number;
}

export const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(function Thumbnail(
  thumbnailProps,
  ref,
) {
  const { className, url, alt, size, ...props } = thumbnailProps;
  const classes = thumbnailSlot();

  return (
    <div
      ref={ref}
      {...props}
      className={cx(classes.root, className)}
      style={{
        width: size,
        height: size,
      }}
    >
      {url && <img src={url} alt={alt} className={cx(classes.image)} />}
    </div>
  );
});

const thumbnailSlot = sva({
  slots: ['root', 'image'],
  base: {
    root: {
      borderRadius: '4px',
      bg: 'grey.30',
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    image: {
      objectFit: 'cover',
      borderRadius: '4px',
      width: '100%',
      height: '100%',
    },
  },
});
