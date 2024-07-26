import { forwardRef, useContext } from 'react';
import {
  DateInput as RacDateInput,
  DateSegment as RacDateSegment,
  DateSegmentProps as RacDateSegmentProps,
  TimeField as RacTimeField,
  TimeFieldProps as RacTimeFieldProps,
  TimeValue,
  DatePickerStateContext,
  TimeFieldStateContext,
} from 'react-aria-components';
import { cva, cx } from 'styled-system/css';
import { SystemStyleObject } from 'styled-system/types';

export const TimeInput = forwardRef(function _TimeInput<T extends TimeValue>(
  dateInputProps: RacTimeFieldProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const datePickerStateContext = useContext(DatePickerStateContext);
  const { className, onChange, granularity = 'second', ...props } = dateInputProps;
  const dateInputClass = dateInputCva();
  return (
    <RacTimeField
      ref={ref}
      onChange={value => {
        datePickerStateContext?.setTimeValue(value);
        onChange?.(value);
      }}
      granularity={granularity}
      {...props}
    >
      <RacDateInput className={cx(dateInputClass, typeof className === 'string' && className)}>
        {segment => <DateSegment segment={segment} />}
      </RacDateInput>
    </RacTimeField>
  );
});
TimeInput.displayName = 'TimeInput';

const dateInputCva = cva({
  base: {
    display: 'flex',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'grey.50',
    background: 'etc.white',
    padding: '6px',
    color: 'grey.80',
    alignItems: 'center',
    '&[data-focus-within="true"]': {
      borderColor: 'main.black',
    },
  },
});

function DateSegment(dateSgementProps: RacDateSegmentProps) {
  const timeFieldStateContext = useContext(TimeFieldStateContext);

  const dateSegemntClassname = dateSegmentCva({
    type: dateSgementProps.segment.type,
  });
  const { className, ...props } = dateSgementProps;

  const commonProps = {
    className: cx(dateSegemntClassname, typeof className === 'string' && className),
    ...props,
  };

  switch (props.segment.type) {
    case 'dayPeriod':
      return (
        <RacDateSegment {...commonProps}>
          <div
            role="button"
            onClick={() => {
              timeFieldStateContext.decrement(props.segment.type);
            }}
          >
            {props.segment.text}
          </div>
        </RacDateSegment>
      );
    case 'hour':
    case 'minute':
    case 'second':
      return (
        <RacDateSegment
          {...commonProps}
          children={props.segment.text === '––' ? '--' : undefined}
        />
      );
    case 'literal':
      return props.segment.text === ':' ? <RacDateSegment {...commonProps} /> : null;
    default:
      return <RacDateSegment {...commonProps} />;
  }
}

const dateSegmentCva = cva<{
  type: Record<RacDateSegmentProps['segment']['type'], SystemStyleObject>;
}>({
  base: {},
  variants: {
    type: {
      dayPeriod: {
        padding: '3px 7px',
        borderRadius: '4px',
        cursor: 'pointer',
        _hover: {
          bg: 'grey.20',
        },
        _first: {
          marginRight: '6px',
        },
        _last: {
          marginLeft: '6px',
        },
      },
      hour: {
        width: '20px',
        textAlign: 'right',
      },
      minute: {
        width: '20px',
        textAlign: 'right',
      },
      second: {
        width: '20px',
        textAlign: 'right',
      },
      era: {},
      year: {},
      month: {},
      day: {},
      literal: {
        w: '10px',
        textAlign: 'center',
        marginTop: '-2px',
      },
      timeZoneName: {},
    },
  },
});
