import { forwardRef } from 'react';
import { cx, sva } from '../../../styled-system/css';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(function Switch(
  { checked, onChange, disabled = false, ...props },
  ref,
) {
  const classes = switchSlot({ disabled, checked });

  return (
    <label ref={ref} {...props} className={cx(classes.root)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        disabled={disabled}
        className={cx(classes.checkbox)}
      />
      <div className={cx(classes.slider)}>
        <span className={cx(classes.text, classes.textOn)}>ON</span>
        <span className={cx(classes.text, classes.textOff)}>OFF</span>
      </div>
    </label>
  );
});

Switch.displayName = 'Switch';

const switchSlot = sva({
  slots: ['root', 'checkbox', 'slider', 'text', 'textOn', 'textOff'],
  base: {
    root: {
      position: 'relative',
      width: '38px',
      height: '18px',
      userSelect: 'none',
      display: 'inline-block',
      cursor: 'pointer',
    },
    checkbox: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    slider: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      transition: 'background 0.2s ease',
      '&::before': {
        content: '""',
        zIndex: 10,
        width: '12px',
        height: '12px',
        bg: 'etc.white',
        borderRadius: '50%',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        transform: 'translateX(3px)',
      },
    },
    text: {
      position: 'absolute',
      fontSize: '9px',
      fontWeight: 500,
      fontFamily: 'Pretendard Variable, Pretendard',
      lineHeight: '1.2',
    },
    textOn: {
      left: '5px',
    },
    textOff: {
      right: '3.5px',
    },
  },
  variants: {
    checked: {
      true: {
        slider: {
          bg: 'main.black',
          '&::before': {
            transform: 'translateX(23px)',
          },
        },
        textOn: {
          opacity: 1,
        },
        textOff: {
          opacity: 0,
        },
      },
      false: {
        slider: {
          bg: 'grey.40',
          '&::before': {
            transform: 'translateX(3px)',
          },
        },
        textOn: {
          opacity: 0,
        },
        textOff: {
          opacity: 1,
        },
      },
    },
    disabled: {
      true: {
        slider: {
          bg: 'grey.50',
          cursor: 'not-allowed',
          '&::before': {
            bg: 'grey.60',
          },
        },
        text: {
          color: 'grey.60',
        },
      },
      false: {
        slider: {
          bg: 'grey.40',
        },
        textOn: {
          color: 'etc.white',
        },
        textOff: {
          color: 'grey.50',
        },
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      css: {
        slider: {
          bg: 'grey.50',
          '&::before': {
            bg: 'grey.60',
          },
        },
        text: {
          color: 'grey.60',
        },
      },
    },
  ],
});
