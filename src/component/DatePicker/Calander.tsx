import { forwardRef, ReactNode, useContext } from 'react';
import {
  Button as RacButton,
  CalendarCell as RacCalendarCell,
  CalendarGrid as RacCalendarGrid,
  CalendarProps as RacCalendarProps,
  DateValue as RacDateValue,
  Heading as RacHeading,
  Calendar as RacCalendar,
  CalendarGridHeader as RacCalendarGridHeader,
  CalendarGridBody as RacCalendarGridBody,
  CalendarHeaderCell as RacCalendarHeaderCell,
  HeadingContext as RacHeadingContext,
  CalendarCellProps as RacCalendarCellProps,
} from 'react-aria-components';
import { getLocalTimeZone, today } from '@internationalized/date';
import { ChevronLeftSmall, ChevronRighSmall } from 'src/icon';
import { cx, sva } from 'styled-system/css';

export interface CalanderProps<T extends RacDateValue> extends RacCalendarProps<T> {
  bottom?: ReactNode;
}

export const Calander = forwardRef(function _Calendar<T extends RacDateValue>(
  calanderProps: CalanderProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const { className, bottom, ...props } = calanderProps;
  const classes = calanderSlot();

  return (
    <RacCalendar
      ref={ref}
      className={cx(classes.root, typeof className === 'string' && className)}
      {...props}
    >
      <header className={classes.header}>
        <RacButton className={classes.button} slot="previous">
          <ChevronLeftSmall aria-hidden />
        </RacButton>
        <CalanderHeading className={classes.heading} />
        <RacButton className={classes.button} slot="next">
          <ChevronRighSmall aria-hidden />
        </RacButton>
      </header>
      <RacCalendarGrid className={classes.grid}>
        <RacCalendarGridHeader className={classes.gridHeader}>
          {day => (
            <RacCalendarHeaderCell className={classes.headerCell}>{day}</RacCalendarHeaderCell>
          )}
        </RacCalendarGridHeader>
        <RacCalendarGridBody className={classes.gridBody}>
          {date => <CalanderCell className={classes.cell} date={date} />}
        </RacCalendarGridBody>
      </RacCalendarGrid>
      {bottom}
    </RacCalendar>
  );
});
Calander.displayName = 'Calander';

function CalanderHeading(props: { className?: string }) {
  const context = useContext(RacHeadingContext);
  if (context && 'children' in context && typeof context.children === 'string') {
    return (
      <RacHeading className={props.className} aria-hidden={false}>
        {context.children.split(' ').map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </RacHeading>
    );
  }
}

function CalanderCell({ className, ...props }: RacCalendarCellProps) {
  return (
    <RacCalendarCell
      className={className}
      {...(props.date.compare(today(getLocalTimeZone())) === 0 && { 'data-is-today': true })}
      {...props}
    />
  );
}

const calanderSlot = sva({
  slots: [
    'root',
    'header',
    'button',
    'heading',
    'grid',
    'gridHeader',
    'gridBody',
    'headerCell',
    'cell',
    'timefield',
    'dateinput',
    'datesegemnt',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      width: 'fit-content',
      maxWidth: '100%',
      bg: 'etc.white',
      borderRadius: '8px',
      p: '20px 16px',
      boxShadow: '0px 0px 1px 0px rgba(132, 132, 132, 0.31), 0px 2px 5px 0px rgba(70, 70, 70, 0.2)',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 20,
    },
    button: {
      width: 20,
      height: 20,
      display: 'flex',
      alignItems: 'center',
      color: '#121212',
      bg: 'none',
      _hover: {
        cursor: 'pointer',
      },
    },
    heading: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      color: 'grey.80',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: '20px',
    },
    gridHeader: {
      height: 20,
    },
    gridBody: {
      height: 20,
      '& td': {
        _first: {
          color: 'etc.error.20',
        },
        _last: {
          color: 'etc.error.20',
        },
      },
    },
    headerCell: {
      padding: 8,
      width: 16,
      height: 16,
      textAlign: 'center',
      boxSizing: 'content-box',
      fontSize: '12px',
      fontWeight: 400,
      color: 'grey.60',
    },
    cell: {
      padding: 8,
      width: 16,
      height: 16,
      textAlign: 'center',
      boxSizing: 'content-box',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      borderRadius: '6px',
      '&[data-disabled]': {
        color: 'grey.40',
      },
      '&[data-outside-month]': {
        color: 'grey.50',
      },
      '&[data-is-today]': {
        fontWeight: 700,
      },
      '&[data-hovered]': { bg: 'grey.20' },
      '&[data-selected]': {
        bg: 'main.black',
        color: 'etc.white',
      },
      '&[data-focus-visible]': {
        outline: '1px solid',
        outlineColor: 'main.black',
        outlineOffset: '1px',
      },
    },
  },
});
