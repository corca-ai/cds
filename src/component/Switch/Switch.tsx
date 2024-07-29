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

const SWITCH_WIDTH = 38;
const SWITCH_HEIGHT = 18;
const SWITCH_CIRCLE_SIZE = 12;
const SWITCH_CIRCLE_GAP = 3;

const switchSlot = sva({
  slots: ['root', 'checkbox', 'slider', 'text', 'textOn', 'textOff'],
  base: {
    root: {
      position: 'relative',
      width: `${SWITCH_WIDTH}px`,
      height: `${SWITCH_HEIGHT}px`,
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
        width: `${SWITCH_CIRCLE_SIZE}px`,
        height: `${SWITCH_CIRCLE_SIZE}px`,
        backgroundColor: 'etc.white',
        borderRadius: '50%',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        transform: `translateX(${SWITCH_CIRCLE_GAP}px)`,
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
          backgroundColor: 'main.black',
          '&::before': {
            transform: `translateX(${SWITCH_WIDTH - SWITCH_CIRCLE_SIZE - SWITCH_CIRCLE_GAP}px)`,
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
          backgroundColor: 'grey.40',
          '&::before': {
            transform: `translateX(${SWITCH_CIRCLE_GAP}px)`,
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
          backgroundColor: 'grey.50',
          cursor: 'not-allowed',
          '&::before': {
            backgroundColor: 'grey.60',
          },
        },
        text: {
          color: 'grey.60',
        },
      },
      false: {
        slider: {
          backgroundColor: 'grey.40',
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
});
