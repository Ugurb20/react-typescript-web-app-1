/*
import moment from 'moment';
import SingleCalendar from '@components/calendar/calendar';
import { useState } from 'react';

export interface MultiCalendarProps {
  date?: Date;
  onChange?: (date: Date) => void;
  mapDateToClassName?: (date: Date) => string;
  highlight?: boolean;
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MultiCalendar = ({ date }: MultiCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(date);
  const oneMonthBeforeDate = moment.utc(currentDate).subtract(1, 'month');
  const oneMonthAfterDate = moment.utc(currentDate).add(1, 'month');
  const handleOnChange = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <div>
      <div data-testid={'previous-month-calendar'}>
        <SingleCalendar
          onChange={handleOnChange}
          date={oneMonthBeforeDate.toDate()}
        />
      </div>
      <div data-testid={'current-month-calendar'}>
        <SingleCalendar onChange={handleOnChange} date={currentDate} />
      </div>
      <div data-testid={'next-month-calendar'}>
        <SingleCalendar
          onChange={handleOnChange}
          date={oneMonthAfterDate.toDate()}
        />
      </div>
    </div>
  );
};

 */

// Path: src/components/calendar/multi-calendar/index.stories.ts
import React from 'react';
import { Meta } from '@storybook/react';

import { MultiCalendar } from './index';
export default {
  title: 'Components/Calendar/MultiCalendar',
  component: MultiCalendar,
};

export const Default = () => {
  return <MultiCalendar onChange={console.log} />;
};
