import { render } from '@testing-library/react';
import {
  HourColumn,
  HourElement,
} from '@components/calendar/hour-column/index';
import each from 'jest-each';

describe('HourElement', () => {
  const props = {
    hour: 0,
    height: 60,
    width: 100,
  };

  it('should be defined', () => {
    expect(HourElement).toBeDefined();
  });
  it('should throw exception when hour < 0', () => {
    const testProps = {
      ...props,
      hour: -1,
    };
    expect(() => render(<HourElement {...testProps} />)).toThrowError();
  });
  it('should throw exception when hour > 24', () => {
    const testProps = {
      ...props,
      hour: 25,
    };
    expect(() => render(<HourElement {...testProps} />)).toThrowError();
  });
  each([
    [0, '12AM'],
    [24, '12AM'],
    [1, '1AM'],
    [12, '12PM'],
    [13, '1PM'],
    [23, '11PM'],
  ]).it('should render time correctly', (hour, expected) => {
    const testProps = {
      ...props,
      hour: hour,
    };
    const { getByText } = render(<HourElement {...testProps} />);
    expect(getByText(expected)).toBeDefined();
  });
});
describe('HourColumnDumb', () => {
  const props = {
    startHour: 8,
    endHour: 18,
    hourHeight: 60,
    hourWidth: 100,
  };

  it('should be defined', () => {
    expect(HourColumn).toBeDefined();
  });
  it('should render correct number of hours', () => {
    const { getAllByTestId } = render(<HourColumn {...props} />);
    expect(getAllByTestId('hour-element').length).toEqual(11);
  });
});
