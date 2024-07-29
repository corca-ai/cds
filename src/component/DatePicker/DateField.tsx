import { forwardRef } from 'react';
import {
  DateField as RacDateField,
  DateInput as RacDateInput,
  DateSegment as RacDateSegment,
  DateFieldProps as RacDateFieldProps,
  DateValue,
  DateSegmentProps,
} from 'react-aria-components';
import { cva } from 'styled-system/css';
import { SystemStyleObject } from 'styled-system/types';

export const DateField = forwardRef(function _DateField<T extends DateValue>(
  dateFieldProps: RacDateFieldProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const { className, ...props } = dateFieldProps;
  const dateFieldClass = dateFieldCva();
  return (
    <RacDateField ref={ref} className={className} {...props}>
      <RacDateInput className={dateFieldClass}>
        {segment => <DateSegment segment={segment} />}
      </RacDateInput>
    </RacDateField>
  );
});

DateField.displayName = 'DateField';

const dateFieldCva = cva({
  base: {
    display: 'flex',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'grey.50',
    background: 'etc.white',
    padding: '7px 10px',
    color: 'grey.80',
    alignItems: 'center',
    '&[data-focus-within="true"]': {
      borderColor: 'main.black',
    },
  },
});

function DateSegment(dateSgementProps: DateSegmentProps) {
  const { segment } = dateSgementProps;
  const dateSegmentClassname = dateSegmentCva({
    type: dateSgementProps.segment.type,
    dateLiteral: segment.type === 'literal' && segment.text.includes('.'),
    timeLiteral: segment.type === 'literal' && segment.text.includes(':'),
  });

  console.log(dateSgementProps.segment);

  if (segment.text === '––') {
    return (
      <RacDateSegment {...dateSgementProps} className={dateSegmentClassname} children={'--'} />
    );
  }
  return <RacDateSegment {...dateSgementProps} className={dateSegmentClassname} />;
}

const dateSegmentCva = cva<{
  type: Record<DateSegmentProps['segment']['type'], SystemStyleObject>;
  dateLiteral: Record<'true', SystemStyleObject>;
  timeLiteral: Record<'true', SystemStyleObject>;
}>({
  base: {
    fontSize: 14,
    lineHeight: '20px',
    color: 'grey.80',
    textAlign: 'center',
    borderRadius: '4px',
    margin: '0px 1px',
    '&[data-focused="true"]': {
      bg: 'grey.30',
    },
  },
  variants: {
    type: {
      year: {},
      month: {},
      day: {},
      dayPeriod: {
        margin: '0px 2px',
      },
      era: {},
      hour: {},
      literal: {},
      minute: {},
      second: {},
      timeZoneName: {},
    },
    dateLiteral: {
      true: {},
    },
    timeLiteral: {
      true: {},
    },
  },
});
