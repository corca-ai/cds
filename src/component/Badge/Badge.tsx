import { forwardRef, ReactNode } from 'react';
import { cx, RecipeVariantProps, sva } from '../../styled-system/css';

type BadgeVaraint = NonNullable<RecipeVariantProps<typeof badgeSlot>>['variant'];

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: ReactNode;
  dotted?: boolean;
  /**
   * @default 'grey'
   */
  variant?: BadgeVaraint;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(badgeProps, ref) {
  const { className, label, variant, dotted, ...props } = badgeProps;
  const classes = badgeSlot({ variant, dotted });
  return (
    <span ref={ref} {...props} className={cx(classes.root, className)}>
      <span className={classes.text}>{label}</span>
    </span>
  );
});

Badge.displayName = 'Badge';

const badgeSlot = sva({
  slots: ['root', 'text'],
  base: {
    root: {
      width: 'fit-content',
      display: 'inline-flex',
      gap: '6px',
      justifyContent: 'center',
      alignItems: 'center',
      height: '22px',
      padding: '2px 8px',
      borderRadius: '10px',
    },
    text: {
      textStyle: 'b6',
    },
  },
  variants: {
    variant: {
      green: {
        root: { bg: 'etc.active.10' },
        text: { color: 'etc.active.30' },
      },
      grey: {
        root: { bg: '#E9EAED' },
        text: { color: '#343F51' },
      },
      yellow: {
        root: { bg: '#FFF7CC' },
        text: { color: '#E87E00' },
      },
      red: {
        root: { bg: 'etc.error.10' },
        text: { color: 'etc.error.30' },
      },
    },
    dotted: {
      true: {
        root: {
          _before: {
            content: '""',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'grey',
  },
  compoundVariants: [
    {
      variant: 'green',
      dotted: true,
      css: {
        root: {
          _before: {
            bg: 'etc.active.20',
          },
        },
      },
    },
    {
      variant: 'grey',
      dotted: true,
      css: {
        root: {
          _before: {
            bg: '#6C778B',
          },
        },
      },
    },
    {
      variant: 'yellow',
      dotted: true,
      css: {
        root: {
          _before: {
            bg: '#E87E00',
          },
        },
      },
    },
    {
      variant: 'red',
      dotted: true,
      css: {
        root: {
          _before: {
            bg: 'etc.error.30',
          },
        },
      },
    },
  ],
});
