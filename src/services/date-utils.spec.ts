import { DateUtilsService } from '@services/date-utils';
import { getTestContainer } from '@common/inversion-container-test';
import { Container } from 'inversify';
import each from 'jest-each';

describe('DateUtils', () => {
  let container: Container;
  let service: DateUtilsService;
  beforeEach(() => {
    container = getTestContainer();
    service = container.get<DateUtilsService>(DateUtilsService);
  });
  it('should be defined', () => {
    expect(DateUtilsService).toBeDefined();
  });
  it('should be bound', () => {
    expect(service).toBeDefined();
  });
  each([
    [new Date(2021, 1, 1, 0, 0, 0), '12am'],
    [new Date(2021, 1, 1, 1, 0, 0), '1am'],
    [new Date(2021, 1, 1, 12, 0, 0), '12pm'],
    [new Date(2021, 1, 1, 13, 30, 0), '1:30pm'],
    [new Date(2021, 1, 1, 23, 59, 0), '11:59pm'],
  ]).it('should formatAMPM', (date: Date, expected: string) => {
    expect(service.formatAMPM(date)).toBe(expected);
  });
  each([
    [new Date(2021, 1, 1, 0, 0, 0), new Date(2021, 1, 1, 1, 0, 0), '12am-1am'],
    [new Date(2021, 1, 1, 1, 0, 0), new Date(2021, 1, 1, 2, 0, 0), '1am-2am'],
    [
      new Date(2021, 1, 1, 12, 30, 0),
      new Date(2021, 1, 1, 13, 0, 0),
      '12:30pm-1pm',
    ],
    [
      new Date(2021, 1, 1, 23, 59, 0),
      new Date(2021, 1, 2, 0, 0, 0),
      '11:59pm-12am',
    ],
  ]).it(
    'should getTimeInterval',
    (start: Date, end: Date, expected: string) => {
      expect(service.getTimeInterval(start, end)).toBe(expected);
    }
  );
});
