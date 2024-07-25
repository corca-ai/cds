import { forwardRef, ReactNode } from 'react';
import { cx, RecipeVariantProps, sva } from '../../../styled-system/css'; // Adjust the import path as needed

type ButtonVariant = NonNullable<RecipeVariantProps<typeof buttonSlot>>['variant'];
type ButtonSize = NonNullable<RecipeVariantProps<typeof buttonSlot>>['size'];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  disabled?: boolean;
  focused?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(buttonProps, ref) {
  const {
    className,
    variant = 'filled',
    size = 'small',
    icon,
    disabled = false,
    focused = false,
    children,
    ...props
  } = buttonProps;
  const classes = buttonSlot({ variant, size, disabled, focused });
  return (
    <button ref={ref} {...props} className={cx(classes.root, className)} disabled={disabled}>
      {icon && <span className={classes.icon}>{icon}</span>}
      <span className={classes.label}>{children}</span>
    </button>
  );
});

Button.displayName = 'Button';

const buttonSlot = sva({
  slots: ['root', 'icon', 'label'],
  base: {
    root: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      padding: '7px 16px',
      cursor: 'pointer',
      transition: 'background-color 0.2s, border-color 0.2s',
      border: '1px solid transparent',
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      textStyle: 'b2',
    },
  },
  variants: {
    size: {
      small: {
        root: {
          height: '34px',
        },
      },
      large: {
        root: {
          minWidth: '100px',
          width: '100%',
          height: '40px',
        },
      },
    },
    variant: {
      filled: {
        root: {
          bg: 'main.black',
          color: 'white',
        },
      },
      outline: {
        root: {
          bg: 'etc.white',
          borderColor: 'grey.40',
        },
      },
      text: {
        root: {
          bg: 'transparent',
          border: 'none',
        },
      },
    },
    disabled: {
      true: {
        root: {
          bg: 'grey.30',
          borderColor: 'transparent',
          color: 'grey.50',
          cursor: 'not-allowed',
        },
      },
    },
    focused: {
      true: {
        root: {
          outline: '2px solid focus',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'small',
  },
  compoundVariants: [
    {
      variant: 'outline',
      focused: true,
      css: {
        root: {
          borderColor: 'grey.60',
        },
      },
    },
    {
      variant: 'text',
      focused: true,
      css: {
        root: {
          backgroundColor: 'grey.20',
        },
      },
    },
  ],
});
